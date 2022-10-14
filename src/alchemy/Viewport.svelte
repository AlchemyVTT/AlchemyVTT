<script lang='ts'>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { reduce } from 'lodash';

    let _3js_canvas : HTMLCanvasElement
    let _3js_renderer : THREE.WebGLRenderer

    const _3js_viewable_scene = new THREE.Scene()
    const _3js_pickable_scene = new THREE.Scene()
    _3js_pickable_scene.background = new THREE.Color(0)

    onMount(() => {
        _3js_renderer = new THREE.WebGLRenderer({ canvas: _3js_canvas })
        _3js_renderer.setSize(
            window.innerWidth,
            window.innerHeight
        )
        // TODO: implement resize
    })

    export function canvas() {
        return _3js_canvas
    }

    let _dirty : boolean = true

    export function render(camera: THREE.Camera) {
        if(_3js_canvas && _3js_renderer) {
            _3js_renderer.render(_3js_viewable_scene, camera)
            _dirty = true
        }
    }

    let _pickable_color : number =  0
    let _pickable_table : object = { }

    export function add   (pickable: boolean, ...objects: THREE.Object3D[]) {
        _3js_viewable_scene.add(...objects)

        if(pickable) _pickable_color = reduce(objects, (color, object) => {
            // recursively clone the object
            const _object = object.clone()
            const _color  = color + 1
            // recursively assign the new material
            _set_pickable_material(
                _object,
                _color
            )
            _pickable_table[_color] = {
                _viewable:  object,
                _pickable: _object
            }
            // add object to pickable scene
            _3js_pickable_scene.add(_object)

            return _color
        }, _pickable_color)
    }

    export function remove(pickable: boolean, ...objects: THREE.Object3D[]) {

    }

    const _3js_pickable_target = new THREE.WebGLRenderTarget(1, 1)
    const _3js_pickable_buffer = new Uint8Array(4)

    export function pick(position: {x: number, y: number}, camera : THREE.PerspectiveCamera) {
        if(_dirty) Object.entries(_pickable_table).forEach(([key, value]) => {
            const viewable = <THREE.Object3D> value._viewable
            const pickable = <THREE.Object3D> value._pickable

            pickable.position.copy(viewable.position)
            pickable.rotation.copy(viewable.rotation)
            pickable.scale.copy(viewable.scale)

            _dirty = false
        })

        const pixelRatio = _3js_renderer.getPixelRatio()
        camera.setViewOffset(
            _3js_renderer.getContext().drawingBufferWidth ,
            _3js_renderer.getContext().drawingBufferHeight,
            position.x * pixelRatio | 0,
            position.y * pixelRatio | 0,
            1, 1
        )

        _3js_renderer.setRenderTarget(_3js_pickable_target)
        _3js_renderer.render(_3js_pickable_scene, camera)
        _3js_renderer.setRenderTarget(null)

        camera.clearViewOffset()

        _3js_renderer.readRenderTargetPixels(
            _3js_pickable_target,
            0, 0, 1, 1,
            _3js_pickable_buffer
        )

        const id = 
            (_3js_pickable_buffer[0] << 16) |
            (_3js_pickable_buffer[1] <<  8) |
            (_3js_pickable_buffer[2]      );
        return _pickable_table[id]
    }

    function _set_pickable_material(object : THREE.Object3D, color : number) {
        // TODO: optimize with custom material + shader
        if(object instanceof THREE.Mesh)
            object.material = new THREE.MeshPhongMaterial({
                emissive   : new THREE.Color( color ),
                color      : new THREE.Color(0, 0, 0),
                specular   : new THREE.Color(0, 0, 0),

                map: object.material.map,

                transparent: true ,
                side       : THREE.DoubleSide,
                alphaTest  : 0.5,
                blending   : THREE.NoBlending
            })
        object.children.forEach((child) => {
            _set_pickable_material(child, color)
        })
    }
</script>

<canvas bind:this={_3js_canvas} on:mouseup on:mousedown on:mousemove/>

<style>
    canvas {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
    }
</style>

