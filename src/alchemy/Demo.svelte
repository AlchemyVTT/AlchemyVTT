<script lang='ts'>
    import { onMount } from "svelte";

    import * as THREE from 'three'
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    import RAPIER from '@dimforge/rapier3d-compat'
    import { TetrahedronGeometry } from "three";
    import Viewport from "./Viewport.svelte";

    let _3js_viewport : Viewport
    let _3js_camera : THREE.PerspectiveCamera

    onMount(async () => {
        // setup rapier3d
        console.log('Initializing Rapier3D...');
        await RAPIER.init();
        const _r3d_world = new RAPIER.World({x: 0.0, y: -9.81, z: 0.0});
        console.log('Done');

        // setup threejs
        console.log('Initializing THREE.js')
        _3js_camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const _3js_orbit_controls = new OrbitControls(_3js_camera, _3js_viewport.canvas());
        _3js_camera.position.y =  5
        _3js_camera.position.z = -5
        console.log('Done');

        // create and add light in THREE
        const _3js_light = new THREE.DirectionalLight();
        _3js_light.castShadow = true;
        _3js_viewport.add(false, _3js_light)

        // create and add grid helper in THREE
        const _3js_grid_helper = new THREE.GridHelper(10, 10)
        _3js_viewport.add(false, _3js_grid_helper)
        _3js_grid_helper.position.y = .50125

        // create and add surface in THREE
        const _3js_surface_geometry = new THREE.BoxGeometry(10, 1, 10)
        const _3js_surface_material = new THREE.MeshBasicMaterial({color: 0x0f0f0f })
        const _3js_surface_mesh = new THREE.Mesh(
            _3js_surface_geometry,
            _3js_surface_material
        )
        _3js_surface_mesh.name="Surface"
        _3js_viewport.add(true, _3js_surface_mesh)

        // create and add surface in RAPIER
        const _r3d_surface_rigidbody_desc = RAPIER.RigidBodyDesc.fixed()
        const _r3d_surface_collider_desc  = RAPIER.ColliderDesc.trimesh(
            new Float32Array(_3js_surface_geometry.getAttribute('position').array),
            new Uint32Array(_3js_surface_geometry.index.array)
        ).setMassProperties(
            1, new RAPIER.Vector3(0, 0, 0), new RAPIER.Vector3(0, 0, 0), new RAPIER.Quaternion(1, 0, 0, 0)
        )
        
        const _r3d_surface_rigidbody = _r3d_world.createRigidBody(_r3d_surface_rigidbody_desc                        )
        const _r3d_surface_collider  = _r3d_world.createCollider (_r3d_surface_collider_desc , _r3d_surface_rigidbody)

        // create and add d4 in THREE
        const _3js_d4_geometry = new THREE.TetrahedronGeometry()
        const _3js_d4_material = new THREE.MeshBasicMaterial({color: 0xff00ff })
        const _3js_d4_mesh = new THREE.Mesh(
            _3js_d4_geometry,
            _3js_d4_material
        )
        _3js_d4_mesh.name="D4"
        _3js_viewport.add(true, _3js_d4_mesh)

        // create and add d4 in RAPIER        
        const _r3d_d4_rigidbody_desc = RAPIER.RigidBodyDesc.dynamic()
        // bad juju... extracts vertex data from THREEjs in a non-typesafe manner
        const _r3d_d4_collider_desc  = RAPIER.ColliderDesc.trimesh(
            new Float32Array(_3js_d4_geometry.getAttribute('position').array),
            // more bad juju
            new Uint32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
        ). setMassProperties(
            1, new RAPIER.Vector3(0, 0, 0), new RAPIER.Vector3(1, 1, 1), new RAPIER.Quaternion(1, 0, 0 ,0)
        )
        const _r3d_d4_rigidbody = _r3d_world.createRigidBody(_r3d_d4_rigidbody_desc                   )
        const _r3d_d4_collider  = _r3d_world.createCollider (_r3d_d4_collider_desc , _r3d_d4_rigidbody)

        _r3d_d4_rigidbody.setTranslation(new RAPIER.Vector3(0, 2, 0), true)
        _r3d_d4_rigidbody.applyImpulseAtPoint(new RAPIER.Vector3(0, 1, 0), new RAPIER.Vector3(10, 1, 1), true)

        // _r3d_d4_rigidbody.setBodyType(RAPIER.RigidBodyType.Fixed)

        update()

        function update() {

            _r3d_world.step()

            const t = _r3d_d4_rigidbody.translation()
            _3js_d4_mesh.position.x = t.x
            _3js_d4_mesh.position.y = t.y
            _3js_d4_mesh.position.z = t.z

            const q = _r3d_d4_rigidbody.rotation()
            _3js_d4_mesh.quaternion.x = q.x
            _3js_d4_mesh.quaternion.y = q.y
            _3js_d4_mesh.quaternion.z = q.z
            _3js_d4_mesh.quaternion.w = q.w

            _3js_orbit_controls.update()
            _3js_viewport.render(_3js_camera)

            requestAnimationFrame(update)
        }

        
    })

    function onMouseDown(event: MouseEvent) {
        console.log(_3js_viewport.pick({
            x: event.clientX,
            y: event.clientY
        }, _3js_camera))
    }

    // https://en.wikipedia.org/wiki/Platonic_solid#Cartesian_coordinates
</script>

<Viewport bind:this={_3js_viewport} on:mousedown={onMouseDown}/>