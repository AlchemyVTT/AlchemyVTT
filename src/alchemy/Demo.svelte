<script lang='ts'>
    import { onMount } from "svelte";

    import * as RAPIER from '@dimforge/rapier3d-compat'
    import * as THREE from 'three'

    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    
    import Viewport from "./Viewport.svelte";
    import Session from './Session'
    import Token   from "./Token"

    let _3js_viewport : Viewport
    let _3js_camera : THREE.PerspectiveCamera
    let _3js_orbit : OrbitControls

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
        _3js_orbit = new OrbitControls(_3js_camera, _3js_viewport.canvas());
        _3js_camera.position.y =  16
        _3js_camera.position.z = -16

        // create and add light in THREE
        const _3js_light = new THREE.DirectionalLight();
        _3js_light.castShadow = true;
        _3js_viewport.add(false, _3js_light)

        // create and add grid helper in THREE
        const _3js_grid_helper = new THREE.GridHelper(32, 32)
        _3js_viewport.add(false, _3js_grid_helper)
        _3js_grid_helper.position.y = .50125

        // create and add surface in THREE
        const _3js_surface_geometry = new THREE.BoxGeometry(32, 1, 32)
        const _3js_surface_material = new THREE.MeshBasicMaterial({color: 0x2f2f2f })
        const _3js_surface_mesh = new THREE.Mesh(
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

        _update()
    })

    function _host() {
        _session = Session.host(_magic)
        _session.on('client-connected', ({peer}) => {
            _clients = [..._clients, peer]
        })
        spawn()
    }

    function _join() {
        _session = Session.join(_magic)
        // receive a network event
        _session.rx('spawn', ({peer}) => {
            // check if this is from the server
            spawn()
        })
    }

    let _tokens : object = { }

    function _update() {
        // update r3d
        _r3d_world.step()

        // map r3d to 3js
        Object.values(_tokens).forEach(token => {
            token.update()
        })

        // update 3js
        _3js_orbit   .update(           )
        _3js_viewport.render(_3js_camera)

        // next frame
        requestAnimationFrame(_update)
    }

    let _dragging : Token

    function onMouseDown(event: MouseEvent) {
        const pickable = _3js_viewport.pick({
            x: event.clientX,
            y: event.clientY
        }, _3js_camera)
        // JANK
        if(pickable) Object.values(_tokens).forEach((token : Token) => {
            if(token._3js_mesh === pickable._viewable) {
                if(!token._owner) {

                }
            }
        })
    }

    function onMouseUp(event: MouseEvent) {
        if(_dragging) {
            // notify server of ownership
            // _dragging._r3d_rigidbody.setBodyType(RAPIER.RigidBodyType.Fixed  )
        }
        _dragging = undefined
    }


    
    function spawn() {
        // spawn tokens
        for(let i = 0; i < 8; i ++)
        for(let j = 0; j < 8; j ++) {
            const uuid = `${i}${j}`
            const token = new Token(uuid)
            token._r3d_rigidbody_desc.setTranslation(
                2 * i - 8, 1, 2 * j - 8
            )
            _tokens[uuid] = token

            token.spawn(_3js_viewport, _r3d_world)
        }
    }
</script>

<div class='container'>
    <Viewport bind:this={_3js_viewport} on:mousedown={onMouseDown} on:mouseup={onMouseUp}/>

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

