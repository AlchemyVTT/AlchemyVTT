import * as RAPIER from '@dimforge/rapier3d-compat'
import * as THREE  from 'three'
// import * as UUID   from 'uuid'

export class Token {
    _uuid : string

    _r3d_rigidbody : RAPIER.RigidBody
    _r3d_collider  : RAPIER.Collider

    _r3d_rigidbody_desc : RAPIER.RigidBodyDesc
    _r3d_collider_desc  : RAPIER.ColliderDesc

    _3js_mesh : THREE.Mesh

    constructor(uuid : string) {
        this._uuid = uuid;

        // default to cube
        const _3js_token_geometry = new THREE.BoxGeometry(1, 1, 1)
        const _3js_token_material = new THREE.MeshBasicMaterial({
            color: Color.random()
        })
        this._3js_mesh = new THREE.Mesh(
            _3js_token_geometry,
            _3js_token_material
        )

        this._r3d_rigidbody_desc = RAPIER.RigidBodyDesc.dynamic()
        this._r3d_collider_desc  = RAPIER.ColliderDesc.convexHull(
            new Float32Array(_3js_token_geometry.getAttribute('position').array)
            // new Uint32Array (_3js_token_geometry.index.array)
        )
    }

    public spawn(_3js_viewport, _r3d_world : RAPIER.World) {
        _3js_viewport.add(true, this._3js_mesh)
        this._r3d_rigidbody = _r3d_world.createRigidBody(this._r3d_rigidbody_desc                     )
        this._r3d_collider  = _r3d_world.createCollider (this._r3d_collider_desc , this._r3d_rigidbody)
    }

    public update() {
        const t = this._r3d_rigidbody.translation()
        this._3js_mesh.position.x = t.x
        this._3js_mesh.position.y = t.y
        this._3js_mesh.position.z = t.z

        const q = this._r3d_rigidbody.rotation()
        this._3js_mesh.quaternion.x = q.x
        this._3js_mesh.quaternion.y = q.y
        this._3js_mesh.quaternion.z = q.z
        this._3js_mesh.quaternion.w = q.w

        // Rapier3D does not support scale!
    }
}

namespace Color {
    export function random() {
        return new THREE.Color(
            (Math.floor((Math.random() * 127) + 128) << 16) |
            (Math.floor((Math.random() * 127)      ) <<  8) |
            (Math.floor((Math.random() * 127) + 128)      )
        );
    }
}

export default Token