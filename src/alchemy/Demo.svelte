<script lang='ts'>
    import { onMount } from "svelte";

    import * as RAPIER from '@dimforge/rapier3d-compat'
    import * as THREE from 'three'

    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    
    import Viewport from "./Viewport.svelte";
    import Session from './Session'
    import Token   from "./Token"
    import { filter, reject } from "lodash";

    let _3js_viewport : Viewport
    let _3js_camera : THREE.PerspectiveCamera
    let _3js_orbit : OrbitControls
    let _3js_surface_mesh: THREE.Mesh
    let _3js_raycaster: THREE.Raycaster    
    let _3js_pointer: THREE.Vector2

    let _r3d_world: RAPIER.World

    let _session: Session
    let _clients = [ ]
    let _magic: string = 'aaa-bbb-ccc'

    onMount(async () => {
        
        // setup rapier3d
        await RAPIER.init();
        _r3d_world = new RAPIER.World({x: 0.0, y: -9.81, z: 0.0});

        // setup threejs
        _3js_camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // _3js_orbit = new OrbitControls(_3js_camera, _3js_viewport.canvas());
        _3js_camera.position.y =  16
        _3js_camera.position.z = -16
        _3js_camera.lookAt(new THREE.Vector3())

        _3js_camera.updateMatrix()

        // create and add light in THREE
        const _3js_light = new THREE.DirectionalLight();
        _3js_light.castShadow = true;
        _3js_viewport.add(false, _3js_light)

        // create and add grid helper in THREE
        const _3js_grid_helper = new THREE.GridHelper(32, 32)
        _3js_viewport.add(false, _3js_grid_helper)
        _3js_grid_helper.position.y = .50125

        // create and add surface in THREE
        const _3js_surface_geometry = new THREE.BoxGeometry(100, 1, 100)
        const _3js_surface_material = new THREE.MeshBasicMaterial({color: 0x2f2f2f })
        _3js_surface_mesh = new THREE.Mesh(
            _3js_surface_geometry,
            _3js_surface_material
        )
        _3js_viewport.add(false, _3js_surface_mesh)

        // create and add surface in RAPIER
        const _r3d_surface_rigidbody_desc = RAPIER.RigidBodyDesc.fixed()
        const _r3d_surface_collider_desc  = RAPIER.ColliderDesc.convexHull(
            new Float32Array(_3js_surface_geometry.getAttribute('position').array)
            // new Uint32Array(_3js_surface_geometry.index.array)
        )
        const _r3d_surface_rigidbody = _r3d_world.createRigidBody(_r3d_surface_rigidbody_desc                        )
        const _r3d_surface_collider  = _r3d_world.createCollider (_r3d_surface_collider_desc , _r3d_surface_rigidbody)

        _3js_raycaster = new THREE.Raycaster()
        _3js_pointer = new THREE.Vector2()

        _update()
    })

    function _host() {
        _server_spawn()

        _session = Session.host(_magic)

        _session.on('client-connected', ({peer}) => {
            _clients = [..._clients, peer]

            const tokens = [ ]
            Object.values(_tokens).forEach(token => {
                tokens.push(_extract_spawn(token))
            })
            _session.message('spawn', peer, tokens)
        })
        _session.on('client-disconnected', ({peer}) => {
            _clients = reject(_clients, _client => {
                _client == peer
            })
        })

        _session.rx('request-ownership', ({peer, data, reqId}) => {
            const tokenId = data, ownerId = peer, token: Token = _tokens[tokenId]

            if(token && !token._ownerId) {
                _set_ownership(tokenId, ownerId)
                _clients.forEach(clientId => {
                    if(clientId === peer)
                        _session.message('ownership', clientId, {tokenId, ownerId}, reqId)
                    else
                        _session.message('ownership', clientId, {tokenId, ownerId}       )
                })
            }
        })
        _session.rx('release-ownership', ({peer, data, reqId}) => {
            const tokenId = data, ownerId = peer, token: Token = _tokens[tokenId]

            if(token && token._ownerId === ownerId) {
                _set_ownership(tokenId, undefined)
                _clients.forEach(clientId => {
                    if(clientId === peer)
                        _session.message('ownership', clientId, {tokenId, ownerId: undefined}, reqId)
                    else
                        _session.message('ownership', clientId, {tokenId, ownerId: undefined}       )
                })
            }
        })

        _session.rx('delta', ({peer, data}) => {
            const delta = filter(data, (delta) => {
                const {tokenId} = delta, token = _tokens[tokenId]
                return token && token._ownerId === peer
            })
            _delta(delta)
            _clients.forEach(clientId => {
                if(clientId !== peer)
                    _session.message('delta', clientId, delta)
            })
        })
    }

    function _join() {
        _session = Session.join(_magic)
        // receive a network event
        _session.rx('spawn', ({peer, data}) => {
            // check if this is from the server
            if(peer === _session._serverId)
                _client_spawn(data)
        })
        _session.rx('ownership', ({peer, data}) => {
            if(peer === _session._serverId) {
                const {tokenId, ownerId} = data
                _set_ownership(tokenId, ownerId)
            }
        })
        _session.rx('delta', ({peer, data}) => {
            if(peer === _session._serverId)
                _delta(data)
        })
    }

    let _tokens : object = { }

    // hardcoded spawn operation
    function _server_spawn(      ) {
        for(let i = 0; i < 8; i ++)
        for(let j = 0; j < 8; j ++) {
            const
                tokenId  = `@${(  i).toString(16)}${(  j).toString(16)}f`,
                ownerId  = undefined,
                color    = `#${(2*i).toString(16)}${(2*j).toString(16)}f`;
            const token = new Token(
                tokenId,
                ownerId,
                color
            )
            _tokens[tokenId] = token

            token.spawn(_3js_viewport, _r3d_world, new RAPIER.Vector3(2 * i - 8, 1, 2 * j - 8))
            token.update()
        }
    }

    function _client_spawn(tokens) {
        tokens.forEach(({tokenId, ownerId, color, t, q}) => {
            const token = new Token(
                tokenId,
                ownerId,
                color
            )
            _tokens[tokenId] = token

            token.spawn(_3js_viewport, _r3d_world, t, q)
            token.update()
        })
    }

    function _extract_spawn(token: Token) {
        return {
            tokenId: token._tokenId,
            ownerId: token._ownerId,
            color  : token._color,

            t: token._r3d_rigidbody.translation(),
            q: token._r3d_rigidbody.rotation()
        }
    }

    function _extract_delta(token: Token) {
        return {
            tokenId: token._tokenId,

            t: token._r3d_rigidbody.translation(),
            q: token._r3d_rigidbody.rotation()
        }
    }

    function _set_ownership(tokenId, ownerId) {
        const token: Token = _tokens[tokenId]

        if(token && token._ownerId !== ownerId) {
            token._ownerId = ownerId

            if(ownerId) {
                if(ownerId === _session._clientId) {
                    token._r3d_rigidbody.setBodyType(RAPIER.RigidBodyType.Dynamic)
                    //token._r3d_collider.setSensor(false)

                } else {
                    token._r3d_rigidbody.setBodyType(RAPIER.RigidBodyType.Fixed  )
                    //token._r3d_collider.setSensor(true )
                }
            } else {
                token._r3d_rigidbody.setBodyType(RAPIER.RigidBodyType.Fixed)
                //token._r3d_collider.setSensor(false)
            }

            console.log(`Token '${token._tokenId}'' is now owned by Client '${token._ownerId}'`)
        }
    }

    function _delta(delta) {
        delta.forEach(delta => {
            const {tokenId, q, t} = delta, token: Token = _tokens[tokenId]
            if(token) {
                token._r3d_rigidbody.setTranslation(
                    <RAPIER.Vector3 >t, true
                )
                token._r3d_rigidbody.setRotation(
                    <RAPIER.Rotation>q, true
                )
            }
        })
    }

    function _update() {
        if(_dragging) {
            _3js_raycaster.setFromCamera(_3js_pointer, _3js_camera)
            const where = _3js_raycaster.intersectObject(_3js_surface_mesh)[0]
            if(where) {
                const t_weight =  1
                const v_weight = .5
                const t = _dragging._r3d_rigidbody.translation()
                const v = _dragging._r3d_rigidbody.linvel()
                const
                    dx = where.point.x - (t.x * t_weight) - (v.x * v_weight)    ,
                    dy = where.point.y - (t.y * t_weight) - (v.y * v_weight) + 1,
                    dz = where.point.z - (t.z * t_weight) - (v.z * v_weight)    ;
                
                _dragging._r3d_rigidbody.applyImpulse(
                    new RAPIER.Vector3(
                        dx, 
                        dy, 
                        dz
                    ),
                    true
                )
            }
        }

        // update r3d
        _r3d_world.step()

        // map r3d to 3js
        const delta = [ ]
        Object.values(_tokens).forEach((token: Token) => {
            token.update()

            if(token._ownerId === _session._clientId) {
                if(token._r3d_rigidbody.isSleeping()) {
                    _release_ownership(token._tokenId)
                    _set_ownership(token._tokenId, undefined)
                }
                delta.push(_extract_delta(token))
            }
        })
        
        if(delta.length > 0)
            if(_session.isServer()) {
                _clients.forEach(clientId => {
                    _session.message('delta', clientId, delta)
                })
            } else
                _session.message('delta', _session._serverId, delta)

        // update 3js
        // _3js_orbit   .update(           )
        _3js_viewport.render(_3js_camera)

        // next frame
        requestAnimationFrame(_update)
    }

    async function _request_ownership(tokenId: string) {
        const token: Token = _tokens[tokenId]

        if(token && token._ownerId) return {tokenId, ownerId: token._ownerId}
        const ownerId = _session._clientId

        if(_session.isServer()) {
            _set_ownership( tokenId, ownerId )
            _clients.forEach(clientId => {
                _session.message('ownership', clientId, {tokenId, ownerId})
            })
            return {tokenId, ownerId: token._ownerId}
        } else
            return (await _session.request('request-ownership', _session._serverId, tokenId)).data
    }

    async function _release_ownership(tokenId: string) {
        const token: Token = _tokens[tokenId]

        if(token && token._ownerId !== _session._clientId) return {tokenId, ownerId: token._ownerId}
        const ownerId = undefined

        if(_session.isServer()) {
            // _set_ownership( tokenId, ownerId )
            _clients.forEach(clientId => {
                _session.message('ownership', clientId, {tokenId, ownerId})
            })
            return {tokenId, ownerId: token._ownerId}
        } else
            return (await _session.message('release-ownership', _session._serverId, tokenId)).data
    }

    let _dragging : Token

    async function _on_mouse_down(event: MouseEvent) {
        _3js_pointer.x =  2 * event.clientX / window.innerWidth  - 1
        _3js_pointer.y = -2 * event.clientY / window.innerHeight + 1
        const pickable = _3js_viewport.pick({
            x: event.clientX,
            y: event.clientY
        }, _3js_camera)
        // JANK

        if(pickable) {
            const token = Object.values(_tokens).find( (token: Token) => {
                return token._3js_mesh === pickable._viewable
            })
            if(token) {
                const { ownerId } = await _request_ownership(token._tokenId)
                if(_session._clientId === ownerId)
                    _dragging = token
            }
        }
    }

    function _on_mouse_up(event: MouseEvent) {
        _3js_pointer.x =  2 * event.clientX / window.innerWidth  - 1
        _3js_pointer.y = -2 * event.clientY / window.innerHeight + 1
        if(_dragging) {
            // _set_ownership(_dragging._tokenId, undefined)
            // _release_ownership(_dragging._tokenId)
            _dragging = undefined
        }
    }

    function _on_mouse_move(event: MouseEvent) {
        if(_3js_pointer) {
            _3js_pointer.x =  2 * event.clientX / window.innerWidth  - 1
            _3js_pointer.y = -2 * event.clientY / window.innerHeight + 1
        }
        
    }

</script>

<div class='container'>
    <Viewport bind:this={_3js_viewport} on:mousedown={_on_mouse_down} on:mouseup={_on_mouse_up} on:mousemove={_on_mouse_move}/>

    <div class='ui'>
        {#if !_session}
        <input type='button' value='Host' on:click={_host}/>
        <input type= 'text'  bind:value={_magic}/>
        <input type='button' value='Join' on:click={_join}/>
        {:else}
        <p>{_session._is    }</p>
        <p>{_session.magic()}</p>
        <ul>
            {#each Object.values(_clients) as _client}
            <li>{`${_client}`}</li>
            {/each}
        </ul>
        {/if}
    </div>

</div>

<style>
    .container {
        display:flex
    }

    .ui {
        position:absolute;
        top: 0px;
        left: 0px;
        z-index: 1;
    }

    p {
        font-size: 32px;
    }

    input {
        font-size: 32px;
    }
</style>

