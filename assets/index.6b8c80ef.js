var $M=Object.defineProperty;var AU=(i,A,I)=>A in i?$M(i,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):i[A]=I;var $I=(i,A,I)=>(AU(i,typeof A!="symbol"?A+"":A,I),I);(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))g(B);new MutationObserver(B=>{for(const E of B)if(E.type==="childList")for(const t of E.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&g(t)}).observe(document,{childList:!0,subtree:!0});function I(B){const E={};return B.integrity&&(E.integrity=B.integrity),B.referrerpolicy&&(E.referrerPolicy=B.referrerpolicy),B.crossorigin==="use-credentials"?E.credentials="include":B.crossorigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function g(B){if(B.ep)return;B.ep=!0;const E=I(B);fetch(B.href,E)}})();function XQ(){}function uS(i){return i()}function Tn(){return Object.create(null)}function DE(i){i.forEach(uS)}function IU(i){return typeof i=="function"}function ma(i,A){return i!=i?A==A:i!==A||i&&typeof i=="object"||typeof i=="function"}function gU(i){return Object.keys(i).length===0}function _E(i,A){i.appendChild(A)}function _g(i,A,I){i.insertBefore(A,I||null)}function ug(i){i.parentNode.removeChild(i)}function CU(i,A){for(let I=0;I<i.length;I+=1)i[I]&&i[I].d(A)}function mC(i){return document.createElement(i)}function mo(i){return document.createTextNode(i)}function jE(){return mo(" ")}function ZE(i,A,I,g){return i.addEventListener(A,I,g),()=>i.removeEventListener(A,I,g)}function MC(i,A,I){I==null?i.removeAttribute(A):i.getAttribute(A)!==I&&i.setAttribute(A,I)}function BU(i){return Array.from(i.childNodes)}function Sa(i,A){A=""+A,i.wholeText!==A&&(i.data=A)}function xn(i,A){i.value=A==null?"":A}let zE;function WE(i){zE=i}function QU(){if(!zE)throw new Error("Function called outside component initialization");return zE}function HS(i){QU().$$.on_mount.push(i)}function On(i,A){const I=i.$$.callbacks[A.type];I&&I.slice().forEach(g=>g.call(this,A))}const HE=[],To=[],Ko=[],bn=[],EU=Promise.resolve();let wa=!1;function iU(){wa||(wa=!0,EU.then(mS))}function ra(i){Ko.push(i)}const Ke=new Set;let $i=0;function mS(){const i=zE;do{for(;$i<HE.length;){const A=HE[$i];$i++,WE(A),oU(A.$$)}for(WE(null),HE.length=0,$i=0;To.length;)To.pop()();for(let A=0;A<Ko.length;A+=1){const I=Ko[A];Ke.has(I)||(Ke.add(I),I())}Ko.length=0}while(HE.length);for(;bn.length;)bn.pop()();wa=!1,Ke.clear(),WE(i)}function oU(i){if(i.fragment!==null){i.update(),DE(i.before_update);const A=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,A),i.after_update.forEach(ra)}}const Fo=new Set;let tU;function Ta(i,A){i&&i.i&&(Fo.delete(i),i.i(A))}function TS(i,A,I,g){if(i&&i.o){if(Fo.has(i))return;Fo.add(i),tU.c.push(()=>{Fo.delete(i),g&&(I&&i.d(1),g())}),i.o(A)}else g&&g()}function xS(i){i&&i.c()}function xa(i,A,I,g){const{fragment:B,on_mount:E,on_destroy:t,after_update:o}=i.$$;B&&B.m(A,I),g||ra(()=>{const D=E.map(uS).filter(IU);t?t.push(...D):DE(D),i.$$.on_mount=[]}),o.forEach(ra)}function Oa(i,A){const I=i.$$;I.fragment!==null&&(DE(I.on_destroy),I.fragment&&I.fragment.d(A),I.on_destroy=I.fragment=null,I.ctx=[])}function eU(i,A){i.$$.dirty[0]===-1&&(HE.push(i),iU(),i.$$.dirty.fill(0)),i.$$.dirty[A/31|0]|=1<<A%31}function ba(i,A,I,g,B,E,t,o=[-1]){const D=zE;WE(i);const a=i.$$={fragment:null,ctx:null,props:E,update:XQ,not_equal:B,bound:Tn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(A.context||(D?D.$$.context:[])),callbacks:Tn(),dirty:o,skip_bound:!1,root:A.target||D.$$.root};t&&t(a.root);let s=!1;if(a.ctx=I?I(i,A.props||{},(n,r,...k)=>{const G=k.length?k[0]:r;return a.ctx&&B(a.ctx[n],a.ctx[n]=G)&&(!a.skip_bound&&a.bound[n]&&a.bound[n](G),s&&eU(i,n)),r}):[],a.update(),s=!0,DE(a.before_update),a.fragment=g?g(a.ctx):!1,A.target){if(A.hydrate){const n=BU(A.target);a.fragment&&a.fragment.l(n),n.forEach(ug)}else a.fragment&&a.fragment.c();A.intro&&Ta(i.$$.fragment),xa(i,A.target,A.anchor,A.customElement),mS()}WE(D)}class Za{$destroy(){Oa(this,1),this.$destroy=XQ}$on(A,I){const g=this.$$.callbacks[A]||(this.$$.callbacks[A]=[]);return g.push(I),()=>{const B=g.indexOf(I);B!==-1&&g.splice(B,1)}}$set(A){this.$$set&&!gU(A)&&(this.$$.skip_bound=!0,this.$$set(A),this.$$.skip_bound=!1)}}let l;const MI=new Array(32).fill(void 0);function JI(i){return MI[i]}MI.push(void 0,null,!0,!1);let No,Jo,vE=MI.length;function xo(i){const A=JI(i);return function(I){I<36||(MI[I]=vE,vE=I)}(i),A}function Ig(i){vE===MI.length&&MI.push(MI.length+1);const A=vE;return vE=MI[A],MI[A]=i,A}function OA(i){return i==null}function Oo(){return No.byteLength===0&&(No=new Float64Array(l.memory.buffer)),No}function YI(){return Jo.byteLength===0&&(Jo=new Int32Array(l.memory.buffer)),Jo}const OS=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});let Ro;function bS(i,A){return OS.decode((Ro.byteLength===0&&(Ro=new Uint8Array(l.memory.buffer)),Ro).subarray(i,i+A))}function j(i,A){if(!(i instanceof A))throw new Error(`expected instance of ${A.name}`);return i.ptr}OS.decode();let qo,po,fI=32;function VI(i){if(fI==1)throw new Error("out of js stack");return MI[--fI]=i,fI}function PE(){return qo.byteLength===0&&(qo=new Float32Array(l.memory.buffer)),qo}function Zn(i,A){return PE().subarray(i/4,i/4+A)}function ZS(){return po.byteLength===0&&(po=new Uint32Array(l.memory.buffer)),po}let Pg=0;function WB(i,A){const I=A(4*i.length);return PE().set(i,I/4),Pg=i.length,I}function Ao(i,A){const I=A(4*i.length);return ZS().set(i,I/4),Pg=i.length,I}function Fe(i,A){try{return i.apply(this,A)}catch(I){l.__wbindgen_exn_store(Ig(I))}}Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Spherical:3,3:"Spherical",Generic:4,4:"Generic"}),Object.freeze({AccelerationBased:0,0:"AccelerationBased",ForceBased:1,1:"ForceBased"});const $o=Object.freeze({X:0,0:"X",Y:1,1:"Y",Z:2,2:"Z",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"});Object.freeze({Dynamic:0,0:"Dynamic",Fixed:1,1:"Fixed",KinematicPositionBased:2,2:"KinematicPositionBased",KinematicVelocityBased:3,3:"KinematicVelocityBased"}),Object.freeze({Vertex:0,0:"Vertex",Edge:1,1:"Edge",Face:2,2:"Face",Unknown:3,3:"Unknown"}),Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron"});class qB{static __wrap(A){const I=Object.create(qB.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawbroadphase_free(A)}constructor(){const A=l.rawbroadphase_new();return qB.__wrap(A)}}class BE{static __wrap(A){const I=Object.create(BE.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawccdsolver_free(A)}constructor(){const A=l.rawccdsolver_new();return BE.__wrap(A)}}class zI{static __wrap(A){const I=Object.create(zI.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawcolliderset_free(A)}coTranslation(A){const I=l.rawcolliderset_coTranslation(this.ptr,A);return iA.__wrap(I)}coRotation(A){const I=l.rawcolliderset_coRotation(this.ptr,A);return eI.__wrap(I)}coSetTranslation(A,I,g,B){l.rawcolliderset_coSetTranslation(this.ptr,A,I,g,B)}coSetTranslationWrtParent(A,I,g,B){l.rawcolliderset_coSetTranslationWrtParent(this.ptr,A,I,g,B)}coSetRotation(A,I,g,B,E){l.rawcolliderset_coSetRotation(this.ptr,A,I,g,B,E)}coSetRotationWrtParent(A,I,g,B,E){l.rawcolliderset_coSetRotationWrtParent(this.ptr,A,I,g,B,E)}coIsSensor(A){return l.rawcolliderset_coIsSensor(this.ptr,A)!==0}coShapeType(A){return l.rawcolliderset_coShapeType(this.ptr,A)>>>0}coHalfExtents(A){const I=l.rawcolliderset_coHalfExtents(this.ptr,A);return I===0?void 0:iA.__wrap(I)}coRadius(A){try{const B=l.__wbindgen_add_to_stack_pointer(-16);l.rawcolliderset_coRadius(B,this.ptr,A);var I=YI()[B/4+0],g=PE()[B/4+1];return I===0?void 0:g}finally{l.__wbindgen_add_to_stack_pointer(16)}}coHalfHeight(A){try{const B=l.__wbindgen_add_to_stack_pointer(-16);l.rawcolliderset_coHalfHeight(B,this.ptr,A);var I=YI()[B/4+0],g=PE()[B/4+1];return I===0?void 0:g}finally{l.__wbindgen_add_to_stack_pointer(16)}}coRoundRadius(A){try{const B=l.__wbindgen_add_to_stack_pointer(-16);l.rawcolliderset_coRoundRadius(B,this.ptr,A);var I=YI()[B/4+0],g=PE()[B/4+1];return I===0?void 0:g}finally{l.__wbindgen_add_to_stack_pointer(16)}}coVertices(A){try{const B=l.__wbindgen_add_to_stack_pointer(-16);l.rawcolliderset_coVertices(B,this.ptr,A);var I=YI()[B/4+0],g=YI()[B/4+1];let E;return I!==0&&(E=Zn(I,g).slice(),l.__wbindgen_free(I,4*g)),E}finally{l.__wbindgen_add_to_stack_pointer(16)}}coIndices(A){try{const B=l.__wbindgen_add_to_stack_pointer(-16);l.rawcolliderset_coIndices(B,this.ptr,A);var I=YI()[B/4+0],g=YI()[B/4+1];let E;return I!==0&&(E=function(t,o){return ZS().subarray(t/4,t/4+o)}(I,g).slice(),l.__wbindgen_free(I,4*g)),E}finally{l.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldHeights(A){try{const B=l.__wbindgen_add_to_stack_pointer(-16);l.rawcolliderset_coHeightfieldHeights(B,this.ptr,A);var I=YI()[B/4+0],g=YI()[B/4+1];let E;return I!==0&&(E=Zn(I,g).slice(),l.__wbindgen_free(I,4*g)),E}finally{l.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(A){const I=l.rawcolliderset_coHeightfieldScale(this.ptr,A);return I===0?void 0:iA.__wrap(I)}coHeightfieldNRows(A){try{const B=l.__wbindgen_add_to_stack_pointer(-16);l.rawcolliderset_coHeightfieldNRows(B,this.ptr,A);var I=YI()[B/4+0],g=YI()[B/4+1];return I===0?void 0:g>>>0}finally{l.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldNCols(A){try{const B=l.__wbindgen_add_to_stack_pointer(-16);l.rawcolliderset_coHeightfieldNCols(B,this.ptr,A);var I=YI()[B/4+0],g=YI()[B/4+1];return I===0?void 0:g>>>0}finally{l.__wbindgen_add_to_stack_pointer(16)}}coParent(A){try{const B=l.__wbindgen_add_to_stack_pointer(-16);l.rawcolliderset_coParent(B,this.ptr,A);var I=YI()[B/4+0],g=Oo()[B/8+1];return I===0?void 0:g}finally{l.__wbindgen_add_to_stack_pointer(16)}}coFriction(A){return l.rawcolliderset_coFriction(this.ptr,A)}coRestitution(A){return l.rawcolliderset_coRestitution(this.ptr,A)}coDensity(A){return l.rawcolliderset_coDensity(this.ptr,A)}coMass(A){return l.rawcolliderset_coMass(this.ptr,A)}coVolume(A){return l.rawcolliderset_coVolume(this.ptr,A)}coCollisionGroups(A){return l.rawcolliderset_coCollisionGroups(this.ptr,A)>>>0}coSolverGroups(A){return l.rawcolliderset_coSolverGroups(this.ptr,A)>>>0}coActiveHooks(A){return l.rawcolliderset_coActiveHooks(this.ptr,A)>>>0}coActiveCollisionTypes(A){return l.rawcolliderset_coActiveCollisionTypes(this.ptr,A)}coActiveEvents(A){return l.rawcolliderset_coActiveEvents(this.ptr,A)>>>0}coContactForceEventThreshold(A){return l.rawcolliderset_coContactForceEventThreshold(this.ptr,A)}coContainsPoint(A,I){return j(I,iA),l.rawcolliderset_coContainsPoint(this.ptr,A,I.ptr)!==0}coCastShape(A,I,g,B,E,t,o){j(I,iA),j(g,jA),j(B,iA),j(E,eI),j(t,iA);const D=l.rawcolliderset_coCastShape(this.ptr,A,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o);return D===0?void 0:Bt.__wrap(D)}coCastCollider(A,I,g,B,E){j(I,iA),j(B,iA);const t=l.rawcolliderset_coCastCollider(this.ptr,A,I.ptr,g,B.ptr,E);return t===0?void 0:Ct.__wrap(t)}coIntersectsShape(A,I,g,B){return j(I,jA),j(g,iA),j(B,eI),l.rawcolliderset_coIntersectsShape(this.ptr,A,I.ptr,g.ptr,B.ptr)!==0}coContactShape(A,I,g,B,E){j(I,jA),j(g,iA),j(B,eI);const t=l.rawcolliderset_coContactShape(this.ptr,A,I.ptr,g.ptr,B.ptr,E);return t===0?void 0:$E.__wrap(t)}coContactCollider(A,I,g){const B=l.rawcolliderset_coContactCollider(this.ptr,A,I,g);return B===0?void 0:$E.__wrap(B)}coProjectPoint(A,I,g){j(I,iA);const B=l.rawcolliderset_coProjectPoint(this.ptr,A,I.ptr,g);return At.__wrap(B)}coIntersectsRay(A,I,g,B){return j(I,iA),j(g,iA),l.rawcolliderset_coIntersectsRay(this.ptr,A,I.ptr,g.ptr,B)!==0}coCastRay(A,I,g,B,E){return j(I,iA),j(g,iA),l.rawcolliderset_coCastRay(this.ptr,A,I.ptr,g.ptr,B,E)}coCastRayAndGetNormal(A,I,g,B,E){j(I,iA),j(g,iA);const t=l.rawcolliderset_coCastRayAndGetNormal(this.ptr,A,I.ptr,g.ptr,B,E);return t===0?void 0:gt.__wrap(t)}coSetSensor(A,I){l.rawcolliderset_coSetSensor(this.ptr,A,I)}coSetRestitution(A,I){l.rawcolliderset_coSetRestitution(this.ptr,A,I)}coSetFriction(A,I){l.rawcolliderset_coSetFriction(this.ptr,A,I)}coFrictionCombineRule(A){return l.rawcolliderset_coFrictionCombineRule(this.ptr,A)>>>0}coSetFrictionCombineRule(A,I){l.rawcolliderset_coSetFrictionCombineRule(this.ptr,A,I)}coRestitutionCombineRule(A){return l.rawcolliderset_coRestitutionCombineRule(this.ptr,A)>>>0}coSetRestitutionCombineRule(A,I){l.rawcolliderset_coSetRestitutionCombineRule(this.ptr,A,I)}coSetCollisionGroups(A,I){l.rawcolliderset_coSetCollisionGroups(this.ptr,A,I)}coSetSolverGroups(A,I){l.rawcolliderset_coSetSolverGroups(this.ptr,A,I)}coSetActiveHooks(A,I){l.rawcolliderset_coSetActiveHooks(this.ptr,A,I)}coSetActiveEvents(A,I){l.rawcolliderset_coSetActiveEvents(this.ptr,A,I)}coSetActiveCollisionTypes(A,I){l.rawcolliderset_coSetActiveCollisionTypes(this.ptr,A,I)}coSetShape(A,I){j(I,jA),l.rawcolliderset_coSetShape(this.ptr,A,I.ptr)}coSetContactForceEventThreshold(A,I){l.rawcolliderset_coSetContactForceEventThreshold(this.ptr,A,I)}coSetDensity(A,I){l.rawcolliderset_coSetDensity(this.ptr,A,I)}coSetMass(A,I){l.rawcolliderset_coSetMass(this.ptr,A,I)}coSetMassProperties(A,I,g,B,E){j(g,iA),j(B,iA),j(E,eI),l.rawcolliderset_coSetMassProperties(this.ptr,A,I,g.ptr,B.ptr,E.ptr)}constructor(){const A=l.rawcolliderset_new();return zI.__wrap(A)}len(){return l.rawcolliderset_len(this.ptr)>>>0}contains(A){return l.rawcolliderset_contains(this.ptr,A)!==0}createCollider(A,I,g,B,E,t,o,D,a,s,n,r,k,G,S,w,M,J,R,F,c,L,O){try{const K=l.__wbindgen_add_to_stack_pointer(-16);j(A,jA),j(I,iA),j(g,eI),j(t,iA),j(o,iA),j(D,eI),j(O,XI),l.rawcolliderset_createCollider(K,this.ptr,A.ptr,I.ptr,g.ptr,B,E,t.ptr,o.ptr,D.ptr,a,s,n,r,k,G,S,w,M,J,R,F,c,L,O.ptr);var U=YI()[K/4+0],u=Oo()[K/8+1];return U===0?void 0:u}finally{l.__wbindgen_add_to_stack_pointer(16)}}remove(A,I,g,B){j(I,NC),j(g,XI),l.rawcolliderset_remove(this.ptr,A,I.ptr,g.ptr,B)}isHandleValid(A){return l.rawcolliderset_contains(this.ptr,A)!==0}forEachColliderHandle(A){try{l.rawcolliderset_forEachColliderHandle(this.ptr,VI(A))}finally{MI[fI++]=void 0}}}class Wa{static __wrap(A){const I=Object.create(Wa.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawcontactforceevent_free(A)}collider1(){return l.rawcontactforceevent_collider1(this.ptr)}collider2(){return l.rawcontactforceevent_collider2(this.ptr)}total_force(){const A=l.rawcontactforceevent_total_force(this.ptr);return iA.__wrap(A)}total_force_magnitude(){return l.rawcontactforceevent_total_force_magnitude(this.ptr)}max_force_direction(){const A=l.rawcontactforceevent_max_force_direction(this.ptr);return iA.__wrap(A)}max_force_magnitude(){return l.rawcontactforceevent_max_force_magnitude(this.ptr)}}class va{static __wrap(A){const I=Object.create(va.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawcontactmanifold_free(A)}normal(){const A=l.rawcontactmanifold_normal(this.ptr);return iA.__wrap(A)}local_n1(){const A=l.rawcontactmanifold_local_n1(this.ptr);return iA.__wrap(A)}local_n2(){const A=l.rawcontactmanifold_local_n2(this.ptr);return iA.__wrap(A)}subshape1(){return l.rawcontactmanifold_subshape1(this.ptr)>>>0}subshape2(){return l.rawcontactmanifold_subshape2(this.ptr)>>>0}num_contacts(){return l.rawcontactmanifold_num_contacts(this.ptr)>>>0}contact_local_p1(A){const I=l.rawcontactmanifold_contact_local_p1(this.ptr,A);return I===0?void 0:iA.__wrap(I)}contact_local_p2(A){const I=l.rawcontactmanifold_contact_local_p2(this.ptr,A);return I===0?void 0:iA.__wrap(I)}contact_dist(A){return l.rawcontactmanifold_contact_dist(this.ptr,A)}contact_fid1(A){return l.rawcontactmanifold_contact_fid1(this.ptr,A)>>>0}contact_fid2(A){return l.rawcontactmanifold_contact_fid2(this.ptr,A)>>>0}contact_impulse(A){return l.rawcontactmanifold_contact_impulse(this.ptr,A)}contact_tangent_impulse_x(A){return l.rawcontactmanifold_contact_tangent_impulse_x(this.ptr,A)}contact_tangent_impulse_y(A){return l.rawcontactmanifold_contact_tangent_impulse_y(this.ptr,A)}num_solver_contacts(){return l.rawcontactmanifold_num_solver_contacts(this.ptr)>>>0}solver_contact_point(A){const I=l.rawcontactmanifold_solver_contact_point(this.ptr,A);return I===0?void 0:iA.__wrap(I)}solver_contact_dist(A){return l.rawcontactmanifold_solver_contact_dist(this.ptr,A)}solver_contact_friction(A){return l.rawcontactmanifold_solver_contact_friction(this.ptr,A)}solver_contact_restitution(A){return l.rawcontactmanifold_solver_contact_restitution(this.ptr,A)}solver_contact_tangent_velocity(A){const I=l.rawcontactmanifold_solver_contact_tangent_velocity(this.ptr,A);return iA.__wrap(I)}}class Pa{static __wrap(A){const I=Object.create(Pa.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawcontactpair_free(A)}collider1(){return l.rawcontactpair_collider1(this.ptr)}collider2(){return l.rawcontactpair_collider2(this.ptr)}numContactManifolds(){return l.rawcontactpair_numContactManifolds(this.ptr)>>>0}contactManifold(A){const I=l.rawcontactpair_contactManifold(this.ptr,A);return I===0?void 0:va.__wrap(I)}}class bo{static __wrap(A){const I=Object.create(bo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawdebugrenderpipeline_free(A)}constructor(){const A=l.rawdebugrenderpipeline_new();return bo.__wrap(A)}vertices(){return xo(l.rawdebugrenderpipeline_vertices(this.ptr))}colors(){return xo(l.rawdebugrenderpipeline_colors(this.ptr))}render(A,I,g,B,E){j(A,XI),j(I,zI),j(g,xC),j(B,OC),j(E,eB),l.rawdebugrenderpipeline_render(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr)}}class Va{static __wrap(A){const I=Object.create(Va.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawdeserializedworld_free(A)}takeGravity(){const A=l.rawdeserializedworld_takeGravity(this.ptr);return A===0?void 0:iA.__wrap(A)}takeIntegrationParameters(){const A=l.rawdeserializedworld_takeIntegrationParameters(this.ptr);return A===0?void 0:pB.__wrap(A)}takeIslandManager(){const A=l.rawdeserializedworld_takeIslandManager(this.ptr);return A===0?void 0:NC.__wrap(A)}takeBroadPhase(){const A=l.rawdeserializedworld_takeBroadPhase(this.ptr);return A===0?void 0:qB.__wrap(A)}takeNarrowPhase(){const A=l.rawdeserializedworld_takeNarrowPhase(this.ptr);return A===0?void 0:eB.__wrap(A)}takeBodies(){const A=l.rawdeserializedworld_takeBodies(this.ptr);return A===0?void 0:XI.__wrap(A)}takeColliders(){const A=l.rawdeserializedworld_takeColliders(this.ptr);return A===0?void 0:zI.__wrap(A)}takeImpulseJoints(){const A=l.rawdeserializedworld_takeImpulseJoints(this.ptr);return A===0?void 0:xC.__wrap(A)}takeMultibodyJoints(){const A=l.rawdeserializedworld_takeMultibodyJoints(this.ptr);return A===0?void 0:OC.__wrap(A)}}class XE{static __wrap(A){const I=Object.create(XE.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_raweventqueue_free(A)}constructor(A){const I=l.raweventqueue_new(A);return XE.__wrap(I)}drainCollisionEvents(A){try{l.raweventqueue_drainCollisionEvents(this.ptr,VI(A))}finally{MI[fI++]=void 0}}drainContactForceEvents(A){try{l.raweventqueue_drainContactForceEvents(this.ptr,VI(A))}finally{MI[fI++]=void 0}}clear(){l.raweventqueue_clear(this.ptr)}}class eC{static __wrap(A){const I=Object.create(eC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawgenericjoint_free(A)}static spherical(A,I){j(A,iA),j(I,iA);const g=l.rawgenericjoint_spherical(A.ptr,I.ptr);return eC.__wrap(g)}static prismatic(A,I,g,B,E,t){j(A,iA),j(I,iA),j(g,iA);const o=l.rawgenericjoint_prismatic(A.ptr,I.ptr,g.ptr,B,E,t);return o===0?void 0:eC.__wrap(o)}static fixed(A,I,g,B){j(A,iA),j(I,eI),j(g,iA),j(B,eI);const E=l.rawgenericjoint_fixed(A.ptr,I.ptr,g.ptr,B.ptr);return eC.__wrap(E)}static revolute(A,I,g){j(A,iA),j(I,iA),j(g,iA);const B=l.rawgenericjoint_revolute(A.ptr,I.ptr,g.ptr);return B===0?void 0:eC.__wrap(B)}}class xC{static __wrap(A){const I=Object.create(xC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawimpulsejointset_free(A)}jointType(A){return l.rawimpulsejointset_jointType(this.ptr,A)>>>0}jointBodyHandle1(A){return l.rawimpulsejointset_jointBodyHandle1(this.ptr,A)}jointBodyHandle2(A){return l.rawimpulsejointset_jointBodyHandle2(this.ptr,A)}jointFrameX1(A){const I=l.rawimpulsejointset_jointFrameX1(this.ptr,A);return eI.__wrap(I)}jointFrameX2(A){const I=l.rawimpulsejointset_jointFrameX2(this.ptr,A);return eI.__wrap(I)}jointAnchor1(A){const I=l.rawimpulsejointset_jointAnchor1(this.ptr,A);return iA.__wrap(I)}jointAnchor2(A){const I=l.rawimpulsejointset_jointAnchor2(this.ptr,A);return iA.__wrap(I)}jointSetAnchor1(A,I){j(I,iA),l.rawimpulsejointset_jointSetAnchor1(this.ptr,A,I.ptr)}jointSetAnchor2(A,I){j(I,iA),l.rawimpulsejointset_jointSetAnchor2(this.ptr,A,I.ptr)}jointContactsEnabled(A){return l.rawimpulsejointset_jointContactsEnabled(this.ptr,A)!==0}jointSetContactsEnabled(A,I){l.rawimpulsejointset_jointSetContactsEnabled(this.ptr,A,I)}jointLimitsEnabled(A,I){return l.rawimpulsejointset_jointLimitsEnabled(this.ptr,A,I)!==0}jointLimitsMin(A,I){return l.rawimpulsejointset_jointLimitsMin(this.ptr,A,I)}jointLimitsMax(A,I){return l.rawimpulsejointset_jointLimitsMax(this.ptr,A,I)}jointSetLimits(A,I,g,B){l.rawimpulsejointset_jointSetLimits(this.ptr,A,I,g,B)}jointConfigureMotorModel(A,I,g){l.rawimpulsejointset_jointConfigureMotorModel(this.ptr,A,I,g)}jointConfigureMotorVelocity(A,I,g,B){l.rawimpulsejointset_jointConfigureMotorVelocity(this.ptr,A,I,g,B)}jointConfigureMotorPosition(A,I,g,B,E){l.rawimpulsejointset_jointConfigureMotorPosition(this.ptr,A,I,g,B,E)}jointConfigureMotor(A,I,g,B,E,t){l.rawimpulsejointset_jointConfigureMotor(this.ptr,A,I,g,B,E,t)}constructor(){const A=l.rawimpulsejointset_new();return xC.__wrap(A)}createJoint(A,I,g,B){return j(A,eC),l.rawimpulsejointset_createJoint(this.ptr,A.ptr,I,g,B)}remove(A,I){l.rawimpulsejointset_remove(this.ptr,A,I)}len(){return l.rawimpulsejointset_len(this.ptr)>>>0}contains(A){return l.rawimpulsejointset_contains(this.ptr,A)!==0}forEachJointHandle(A){try{l.rawimpulsejointset_forEachJointHandle(this.ptr,VI(A))}finally{MI[fI++]=void 0}}forEachJointAttachedToRigidBody(A,I){try{l.rawimpulsejointset_forEachJointAttachedToRigidBody(this.ptr,A,VI(I))}finally{MI[fI++]=void 0}}}class pB{static __wrap(A){const I=Object.create(pB.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawintegrationparameters_free(A)}constructor(){const A=l.rawintegrationparameters_new();return pB.__wrap(A)}get dt(){return l.rawintegrationparameters_dt(this.ptr)}get erp(){return l.rawintegrationparameters_erp(this.ptr)}get allowedLinearError(){return l.rawintegrationparameters_allowedLinearError(this.ptr)}get predictionDistance(){return l.rawintegrationparameters_predictionDistance(this.ptr)}get maxVelocityIterations(){return l.rawintegrationparameters_maxVelocityIterations(this.ptr)>>>0}get maxVelocityFrictionIterations(){return l.rawintegrationparameters_maxVelocityFrictionIterations(this.ptr)>>>0}get maxStabilizationIterations(){return l.rawintegrationparameters_maxStabilizationIterations(this.ptr)>>>0}get minIslandSize(){return l.rawintegrationparameters_minIslandSize(this.ptr)>>>0}get maxCcdSubsteps(){return l.rawintegrationparameters_maxCcdSubsteps(this.ptr)>>>0}set dt(A){l.rawintegrationparameters_set_dt(this.ptr,A)}set erp(A){l.rawintegrationparameters_set_erp(this.ptr,A)}set allowedLinearError(A){l.rawintegrationparameters_set_allowedLinearError(this.ptr,A)}set predictionDistance(A){l.rawintegrationparameters_set_predictionDistance(this.ptr,A)}set maxVelocityIterations(A){l.rawintegrationparameters_set_maxVelocityIterations(this.ptr,A)}set maxVelocityFrictionIterations(A){l.rawintegrationparameters_set_maxVelocityFrictionIterations(this.ptr,A)}set maxStabilizationIterations(A){l.rawintegrationparameters_set_maxStabilizationIterations(this.ptr,A)}set minIslandSize(A){l.rawintegrationparameters_set_minIslandSize(this.ptr,A)}set maxCcdSubsteps(A){l.rawintegrationparameters_set_maxCcdSubsteps(this.ptr,A)}}class NC{static __wrap(A){const I=Object.create(NC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawislandmanager_free(A)}constructor(){const A=l.rawislandmanager_new();return NC.__wrap(A)}forEachActiveRigidBodyHandle(A){try{l.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr,VI(A))}finally{MI[fI++]=void 0}}}class OC{static __wrap(A){const I=Object.create(OC.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawmultibodyjointset_free(A)}jointType(A){return l.rawmultibodyjointset_jointType(this.ptr,A)>>>0}jointFrameX1(A){const I=l.rawmultibodyjointset_jointFrameX1(this.ptr,A);return eI.__wrap(I)}jointFrameX2(A){const I=l.rawmultibodyjointset_jointFrameX2(this.ptr,A);return eI.__wrap(I)}jointAnchor1(A){const I=l.rawmultibodyjointset_jointAnchor1(this.ptr,A);return iA.__wrap(I)}jointAnchor2(A){const I=l.rawmultibodyjointset_jointAnchor2(this.ptr,A);return iA.__wrap(I)}jointContactsEnabled(A){return l.rawmultibodyjointset_jointContactsEnabled(this.ptr,A)!==0}jointSetContactsEnabled(A,I){l.rawmultibodyjointset_jointSetContactsEnabled(this.ptr,A,I)}jointLimitsEnabled(A,I){return l.rawmultibodyjointset_jointLimitsEnabled(this.ptr,A,I)!==0}jointLimitsMin(A,I){return l.rawmultibodyjointset_jointLimitsMin(this.ptr,A,I)}jointLimitsMax(A,I){return l.rawmultibodyjointset_jointLimitsMax(this.ptr,A,I)}constructor(){const A=l.rawmultibodyjointset_new();return OC.__wrap(A)}createJoint(A,I,g,B){return j(A,eC),l.rawmultibodyjointset_createJoint(this.ptr,A.ptr,I,g,B)}remove(A,I){l.rawmultibodyjointset_remove(this.ptr,A,I)}contains(A){return l.rawmultibodyjointset_contains(this.ptr,A)!==0}forEachJointHandle(A){try{l.rawmultibodyjointset_forEachJointHandle(this.ptr,VI(A))}finally{MI[fI++]=void 0}}forEachJointAttachedToRigidBody(A,I){try{l.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.ptr,A,VI(I))}finally{MI[fI++]=void 0}}}class eB{static __wrap(A){const I=Object.create(eB.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawnarrowphase_free(A)}constructor(){const A=l.rawnarrowphase_new();return eB.__wrap(A)}contacts_with(A,I){l.rawnarrowphase_contacts_with(this.ptr,A,Ig(I))}contact_pair(A,I){const g=l.rawnarrowphase_contact_pair(this.ptr,A,I);return g===0?void 0:Pa.__wrap(g)}intersections_with(A,I){l.rawnarrowphase_intersections_with(this.ptr,A,Ig(I))}intersection_pair(A,I){return l.rawnarrowphase_intersection_pair(this.ptr,A,I)!==0}}class Zo{static __wrap(A){const I=Object.create(Zo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawphysicspipeline_free(A)}constructor(){const A=l.rawphysicspipeline_new();return Zo.__wrap(A)}step(A,I,g,B,E,t,o,D,a,s){j(A,iA),j(I,pB),j(g,NC),j(B,qB),j(E,eB),j(t,XI),j(o,zI),j(D,xC),j(a,OC),j(s,BE),l.rawphysicspipeline_step(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o.ptr,D.ptr,a.ptr,s.ptr)}stepWithEvents(A,I,g,B,E,t,o,D,a,s,n,r,k,G){j(A,iA),j(I,pB),j(g,NC),j(B,qB),j(E,eB),j(t,XI),j(o,zI),j(D,xC),j(a,OC),j(s,BE),j(n,XE),l.rawphysicspipeline_stepWithEvents(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o.ptr,D.ptr,a.ptr,s.ptr,n.ptr,Ig(r),Ig(k),Ig(G))}}class Wo{static __wrap(A){const I=Object.create(Wo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawpointcolliderprojection_free(A)}colliderHandle(){return l.rawcontactforceevent_collider1(this.ptr)}point(){const A=l.rawpointcolliderprojection_point(this.ptr);return iA.__wrap(A)}isInside(){return l.rawpointcolliderprojection_isInside(this.ptr)!==0}featureType(){return l.rawpointcolliderprojection_featureType(this.ptr)>>>0}featureId(){try{const g=l.__wbindgen_add_to_stack_pointer(-16);l.rawpointcolliderprojection_featureId(g,this.ptr);var A=YI()[g/4+0],I=YI()[g/4+1];return A===0?void 0:I>>>0}finally{l.__wbindgen_add_to_stack_pointer(16)}}}class At{static __wrap(A){const I=Object.create(At.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawpointprojection_free(A)}point(){const A=l.rawpointprojection_point(this.ptr);return iA.__wrap(A)}isInside(){return l.rawpointprojection_isInside(this.ptr)!==0}}class vo{static __wrap(A){const I=Object.create(vo.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawquerypipeline_free(A)}constructor(){const A=l.rawquerypipeline_new();return vo.__wrap(A)}update(A,I,g){j(A,NC),j(I,XI),j(g,zI),l.rawquerypipeline_update(this.ptr,A.ptr,I.ptr,g.ptr)}castRay(A,I,g,B,E,t,o,D,a,s,n){try{j(A,XI),j(I,zI),j(g,iA),j(B,iA);const r=l.rawquerypipeline_castRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E,t,o,!OA(D),OA(D)?0:D,!OA(a),OA(a)?0:a,!OA(s),OA(s)?0:s,VI(n));return r===0?void 0:_a.__wrap(r)}finally{MI[fI++]=void 0}}castRayAndGetNormal(A,I,g,B,E,t,o,D,a,s,n){try{j(A,XI),j(I,zI),j(g,iA),j(B,iA);const r=l.rawquerypipeline_castRayAndGetNormal(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E,t,o,!OA(D),OA(D)?0:D,!OA(a),OA(a)?0:a,!OA(s),OA(s)?0:s,VI(n));return r===0?void 0:It.__wrap(r)}finally{MI[fI++]=void 0}}intersectionsWithRay(A,I,g,B,E,t,o,D,a,s,n,r){try{j(A,XI),j(I,zI),j(g,iA),j(B,iA),l.rawquerypipeline_intersectionsWithRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E,t,VI(o),D,!OA(a),OA(a)?0:a,!OA(s),OA(s)?0:s,!OA(n),OA(n)?0:n,VI(r))}finally{MI[fI++]=void 0,MI[fI++]=void 0}}intersectionWithShape(A,I,g,B,E,t,o,D,a,s){try{const k=l.__wbindgen_add_to_stack_pointer(-16);j(A,XI),j(I,zI),j(g,iA),j(B,eI),j(E,jA),l.rawquerypipeline_intersectionWithShape(k,this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t,!OA(o),OA(o)?0:o,!OA(D),OA(D)?0:D,!OA(a),OA(a)?0:a,VI(s));var n=YI()[k/4+0],r=Oo()[k/8+1];return n===0?void 0:r}finally{l.__wbindgen_add_to_stack_pointer(16),MI[fI++]=void 0}}projectPoint(A,I,g,B,E,t,o,D,a){try{j(A,XI),j(I,zI),j(g,iA);const s=l.rawquerypipeline_projectPoint(this.ptr,A.ptr,I.ptr,g.ptr,B,E,!OA(t),OA(t)?0:t,!OA(o),OA(o)?0:o,!OA(D),OA(D)?0:D,VI(a));return s===0?void 0:Wo.__wrap(s)}finally{MI[fI++]=void 0}}projectPointAndGetFeature(A,I,g,B,E,t,o,D){try{j(A,XI),j(I,zI),j(g,iA);const a=l.rawquerypipeline_projectPointAndGetFeature(this.ptr,A.ptr,I.ptr,g.ptr,B,!OA(E),OA(E)?0:E,!OA(t),OA(t)?0:t,!OA(o),OA(o)?0:o,VI(D));return a===0?void 0:Wo.__wrap(a)}finally{MI[fI++]=void 0}}intersectionsWithPoint(A,I,g,B,E,t,o,D,a){try{j(A,XI),j(I,zI),j(g,iA),l.rawquerypipeline_intersectionsWithPoint(this.ptr,A.ptr,I.ptr,g.ptr,VI(B),E,!OA(t),OA(t)?0:t,!OA(o),OA(o)?0:o,!OA(D),OA(D)?0:D,VI(a))}finally{MI[fI++]=void 0,MI[fI++]=void 0}}castShape(A,I,g,B,E,t,o,D,a,s,n,r){try{j(A,XI),j(I,zI),j(g,iA),j(B,eI),j(E,iA),j(t,jA);const k=l.rawquerypipeline_castShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o,D,!OA(a),OA(a)?0:a,!OA(s),OA(s)?0:s,!OA(n),OA(n)?0:n,VI(r));return k===0?void 0:Ct.__wrap(k)}finally{MI[fI++]=void 0}}intersectionsWithShape(A,I,g,B,E,t,o,D,a,s,n){try{j(A,XI),j(I,zI),j(g,iA),j(B,eI),j(E,jA),l.rawquerypipeline_intersectionsWithShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,VI(t),o,!OA(D),OA(D)?0:D,!OA(a),OA(a)?0:a,!OA(s),OA(s)?0:s,VI(n))}finally{MI[fI++]=void 0,MI[fI++]=void 0}}collidersWithAabbIntersectingAabb(A,I,g){try{j(A,iA),j(I,iA),l.rawquerypipeline_collidersWithAabbIntersectingAabb(this.ptr,A.ptr,I.ptr,VI(g))}finally{MI[fI++]=void 0}}}class It{static __wrap(A){const I=Object.create(It.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawraycolliderintersection_free(A)}colliderHandle(){return l.rawcontactforceevent_collider1(this.ptr)}normal(){const A=l.rawraycolliderintersection_normal(this.ptr);return iA.__wrap(A)}toi(){return l.rawraycolliderintersection_toi(this.ptr)}featureType(){return l.rawpointcolliderprojection_featureType(this.ptr)>>>0}featureId(){try{const g=l.__wbindgen_add_to_stack_pointer(-16);l.rawpointcolliderprojection_featureId(g,this.ptr);var A=YI()[g/4+0],I=YI()[g/4+1];return A===0?void 0:I>>>0}finally{l.__wbindgen_add_to_stack_pointer(16)}}}class _a{static __wrap(A){const I=Object.create(_a.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawraycollidertoi_free(A)}colliderHandle(){return l.rawcontactforceevent_collider1(this.ptr)}toi(){return l.rawraycolliderintersection_toi(this.ptr)}}class gt{static __wrap(A){const I=Object.create(gt.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawrayintersection_free(A)}normal(){const A=l.rawrayintersection_normal(this.ptr);return iA.__wrap(A)}toi(){return l.rawintegrationparameters_dt(this.ptr)}featureType(){return l.rawrayintersection_featureType(this.ptr)>>>0}featureId(){try{const g=l.__wbindgen_add_to_stack_pointer(-16);l.rawrayintersection_featureId(g,this.ptr);var A=YI()[g/4+0],I=YI()[g/4+1];return A===0?void 0:I>>>0}finally{l.__wbindgen_add_to_stack_pointer(16)}}}class XI{static __wrap(A){const I=Object.create(XI.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawrigidbodyset_free(A)}rbTranslation(A){const I=l.rawrigidbodyset_rbTranslation(this.ptr,A);return iA.__wrap(I)}rbRotation(A){const I=l.rawrigidbodyset_rbRotation(this.ptr,A);return eI.__wrap(I)}rbSleep(A){l.rawrigidbodyset_rbSleep(this.ptr,A)}rbIsSleeping(A){return l.rawrigidbodyset_rbIsSleeping(this.ptr,A)!==0}rbIsMoving(A){return l.rawrigidbodyset_rbIsMoving(this.ptr,A)!==0}rbNextTranslation(A){const I=l.rawrigidbodyset_rbNextTranslation(this.ptr,A);return iA.__wrap(I)}rbNextRotation(A){const I=l.rawrigidbodyset_rbNextRotation(this.ptr,A);return eI.__wrap(I)}rbSetTranslation(A,I,g,B,E){l.rawrigidbodyset_rbSetTranslation(this.ptr,A,I,g,B,E)}rbSetRotation(A,I,g,B,E,t){l.rawrigidbodyset_rbSetRotation(this.ptr,A,I,g,B,E,t)}rbSetLinvel(A,I,g){j(I,iA),l.rawrigidbodyset_rbSetLinvel(this.ptr,A,I.ptr,g)}rbSetAngvel(A,I,g){j(I,iA),l.rawrigidbodyset_rbSetAngvel(this.ptr,A,I.ptr,g)}rbSetNextKinematicTranslation(A,I,g,B){l.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr,A,I,g,B)}rbSetNextKinematicRotation(A,I,g,B,E){l.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr,A,I,g,B,E)}rbRecomputeMassPropertiesFromColliders(A,I){j(I,zI),l.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.ptr,A,I.ptr)}rbSetAdditionalMass(A,I,g){l.rawrigidbodyset_rbSetAdditionalMass(this.ptr,A,I,g)}rbSetAdditionalMassProperties(A,I,g,B,E,t){j(g,iA),j(B,iA),j(E,eI),l.rawrigidbodyset_rbSetAdditionalMassProperties(this.ptr,A,I,g.ptr,B.ptr,E.ptr,t)}rbLinvel(A){const I=l.rawrigidbodyset_rbLinvel(this.ptr,A);return iA.__wrap(I)}rbAngvel(A){const I=l.rawrigidbodyset_rbAngvel(this.ptr,A);return iA.__wrap(I)}rbLockTranslations(A,I,g){l.rawrigidbodyset_rbLockTranslations(this.ptr,A,I,g)}rbSetEnabledTranslations(A,I,g,B,E){l.rawrigidbodyset_rbSetEnabledTranslations(this.ptr,A,I,g,B,E)}rbLockRotations(A,I,g){l.rawrigidbodyset_rbLockRotations(this.ptr,A,I,g)}rbSetEnabledRotations(A,I,g,B,E){l.rawrigidbodyset_rbSetEnabledRotations(this.ptr,A,I,g,B,E)}rbDominanceGroup(A){return l.rawrigidbodyset_rbDominanceGroup(this.ptr,A)}rbSetDominanceGroup(A,I){l.rawrigidbodyset_rbSetDominanceGroup(this.ptr,A,I)}rbEnableCcd(A,I){l.rawrigidbodyset_rbEnableCcd(this.ptr,A,I)}rbMass(A){return l.rawrigidbodyset_rbMass(this.ptr,A)}rbWakeUp(A){l.rawrigidbodyset_rbWakeUp(this.ptr,A)}rbIsCcdEnabled(A){return l.rawrigidbodyset_rbIsCcdEnabled(this.ptr,A)!==0}rbNumColliders(A){return l.rawrigidbodyset_rbNumColliders(this.ptr,A)>>>0}rbCollider(A,I){return l.rawrigidbodyset_rbCollider(this.ptr,A,I)}rbBodyType(A){return l.rawrigidbodyset_rbBodyType(this.ptr,A)>>>0}rbSetBodyType(A,I){l.rawrigidbodyset_rbSetBodyType(this.ptr,A,I)}rbIsFixed(A){return l.rawrigidbodyset_rbIsFixed(this.ptr,A)!==0}rbIsKinematic(A){return l.rawrigidbodyset_rbIsKinematic(this.ptr,A)!==0}rbIsDynamic(A){return l.rawrigidbodyset_rbIsDynamic(this.ptr,A)!==0}rbLinearDamping(A){return l.rawrigidbodyset_rbLinearDamping(this.ptr,A)}rbAngularDamping(A){return l.rawrigidbodyset_rbAngularDamping(this.ptr,A)}rbSetLinearDamping(A,I){l.rawrigidbodyset_rbSetLinearDamping(this.ptr,A,I)}rbSetAngularDamping(A,I){l.rawrigidbodyset_rbSetAngularDamping(this.ptr,A,I)}rbGravityScale(A){return l.rawrigidbodyset_rbGravityScale(this.ptr,A)}rbSetGravityScale(A,I,g){l.rawrigidbodyset_rbSetGravityScale(this.ptr,A,I,g)}rbResetForces(A,I){l.rawrigidbodyset_rbResetForces(this.ptr,A,I)}rbResetTorques(A,I){l.rawrigidbodyset_rbResetTorques(this.ptr,A,I)}rbAddForce(A,I,g){j(I,iA),l.rawrigidbodyset_rbAddForce(this.ptr,A,I.ptr,g)}rbApplyImpulse(A,I,g){j(I,iA),l.rawrigidbodyset_rbApplyImpulse(this.ptr,A,I.ptr,g)}rbAddTorque(A,I,g){j(I,iA),l.rawrigidbodyset_rbAddTorque(this.ptr,A,I.ptr,g)}rbApplyTorqueImpulse(A,I,g){j(I,iA),l.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr,A,I.ptr,g)}rbAddForceAtPoint(A,I,g,B){j(I,iA),j(g,iA),l.rawrigidbodyset_rbAddForceAtPoint(this.ptr,A,I.ptr,g.ptr,B)}rbApplyImpulseAtPoint(A,I,g,B){j(I,iA),j(g,iA),l.rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr,A,I.ptr,g.ptr,B)}rbUserData(A){return l.rawrigidbodyset_rbUserData(this.ptr,A)>>>0}rbSetUserData(A,I){l.rawrigidbodyset_rbSetUserData(this.ptr,A,I)}constructor(){const A=l.rawrigidbodyset_new();return XI.__wrap(A)}createRigidBody(A,I,g,B,E,t,o,D,a,s,n,r,k,G,S,w,M,J,R,F,c,L,O){return j(A,iA),j(I,eI),j(t,iA),j(o,iA),j(D,iA),j(a,iA),j(s,eI),l.rawrigidbodyset_createRigidBody(this.ptr,A.ptr,I.ptr,g,B,E,t.ptr,o.ptr,D.ptr,a.ptr,s.ptr,n,r,k,G,S,w,M,J,R,F,c,L,O)}remove(A,I,g,B,E){j(I,NC),j(g,zI),j(B,xC),j(E,OC),l.rawrigidbodyset_remove(this.ptr,A,I.ptr,g.ptr,B.ptr,E.ptr)}len(){return l.rawrigidbodyset_len(this.ptr)>>>0}contains(A){return l.rawrigidbodyset_contains(this.ptr,A)!==0}forEachRigidBodyHandle(A){try{l.rawrigidbodyset_forEachRigidBodyHandle(this.ptr,VI(A))}finally{MI[fI++]=void 0}}}class eI{static __wrap(A){const I=Object.create(eI.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawrotation_free(A)}constructor(A,I,g,B){const E=l.rawrotation_new(A,I,g,B);return eI.__wrap(E)}static identity(){const A=l.rawrotation_identity();return eI.__wrap(A)}get x(){return l.rawintegrationparameters_dt(this.ptr)}get y(){return l.rawrotation_y(this.ptr)}get z(){return l.rawintegrationparameters_erp(this.ptr)}get w(){return l.rawrotation_w(this.ptr)}}class Po{static __wrap(A){const I=Object.create(Po.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawserializationpipeline_free(A)}constructor(){const A=l.rawserializationpipeline_new();return Po.__wrap(A)}serializeAll(A,I,g,B,E,t,o,D,a){return j(A,iA),j(I,pB),j(g,NC),j(B,qB),j(E,eB),j(t,XI),j(o,zI),j(D,xC),j(a,OC),xo(l.rawserializationpipeline_serializeAll(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o.ptr,D.ptr,a.ptr))}deserializeAll(A){const I=l.rawserializationpipeline_deserializeAll(this.ptr,Ig(A));return I===0?void 0:Va.__wrap(I)}}class jA{static __wrap(A){const I=Object.create(jA.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawshape_free(A)}static cuboid(A,I,g){const B=l.rawshape_cuboid(A,I,g);return jA.__wrap(B)}static roundCuboid(A,I,g,B){const E=l.rawshape_roundCuboid(A,I,g,B);return jA.__wrap(E)}static ball(A){const I=l.rawshape_ball(A);return jA.__wrap(I)}static capsule(A,I){const g=l.rawshape_capsule(A,I);return jA.__wrap(g)}static cylinder(A,I){const g=l.rawshape_cylinder(A,I);return jA.__wrap(g)}static roundCylinder(A,I,g){const B=l.rawshape_roundCylinder(A,I,g);return jA.__wrap(B)}static cone(A,I){const g=l.rawshape_cone(A,I);return jA.__wrap(g)}static roundCone(A,I,g){const B=l.rawshape_roundCone(A,I,g);return jA.__wrap(B)}static polyline(A,I){const g=WB(A,l.__wbindgen_malloc),B=Pg,E=Ao(I,l.__wbindgen_malloc),t=Pg,o=l.rawshape_polyline(g,B,E,t);return jA.__wrap(o)}static trimesh(A,I){const g=WB(A,l.__wbindgen_malloc),B=Pg,E=Ao(I,l.__wbindgen_malloc),t=Pg,o=l.rawshape_trimesh(g,B,E,t);return jA.__wrap(o)}static heightfield(A,I,g,B){const E=WB(g,l.__wbindgen_malloc),t=Pg;j(B,iA);const o=l.rawshape_heightfield(A,I,E,t,B.ptr);return jA.__wrap(o)}static segment(A,I){j(A,iA),j(I,iA);const g=l.rawshape_segment(A.ptr,I.ptr);return jA.__wrap(g)}static triangle(A,I,g){j(A,iA),j(I,iA),j(g,iA);const B=l.rawshape_triangle(A.ptr,I.ptr,g.ptr);return jA.__wrap(B)}static roundTriangle(A,I,g,B){j(A,iA),j(I,iA),j(g,iA);const E=l.rawshape_roundTriangle(A.ptr,I.ptr,g.ptr,B);return jA.__wrap(E)}static convexHull(A){const I=WB(A,l.__wbindgen_malloc),g=Pg,B=l.rawshape_convexHull(I,g);return B===0?void 0:jA.__wrap(B)}static roundConvexHull(A,I){const g=WB(A,l.__wbindgen_malloc),B=Pg,E=l.rawshape_roundConvexHull(g,B,I);return E===0?void 0:jA.__wrap(E)}static convexMesh(A,I){const g=WB(A,l.__wbindgen_malloc),B=Pg,E=Ao(I,l.__wbindgen_malloc),t=Pg,o=l.rawshape_convexMesh(g,B,E,t);return o===0?void 0:jA.__wrap(o)}static roundConvexMesh(A,I,g){const B=WB(A,l.__wbindgen_malloc),E=Pg,t=Ao(I,l.__wbindgen_malloc),o=Pg,D=l.rawshape_roundConvexMesh(B,E,t,o,g);return D===0?void 0:jA.__wrap(D)}castShape(A,I,g,B,E,t,o,D){j(A,iA),j(I,eI),j(g,iA),j(B,jA),j(E,iA),j(t,eI),j(o,iA);const a=l.rawshape_castShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t.ptr,o.ptr,D);return a===0?void 0:Bt.__wrap(a)}intersectsShape(A,I,g,B,E){return j(A,iA),j(I,eI),j(g,jA),j(B,iA),j(E,eI),l.rawshape_intersectsShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr)!==0}contactShape(A,I,g,B,E,t){j(A,iA),j(I,eI),j(g,jA),j(B,iA),j(E,eI);const o=l.rawshape_contactShape(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E.ptr,t);return o===0?void 0:$E.__wrap(o)}containsPoint(A,I,g){return j(A,iA),j(I,eI),j(g,iA),l.rawshape_containsPoint(this.ptr,A.ptr,I.ptr,g.ptr)!==0}projectPoint(A,I,g,B){j(A,iA),j(I,eI),j(g,iA);const E=l.rawshape_projectPoint(this.ptr,A.ptr,I.ptr,g.ptr,B);return At.__wrap(E)}intersectsRay(A,I,g,B,E){return j(A,iA),j(I,eI),j(g,iA),j(B,iA),l.rawshape_intersectsRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E)!==0}castRay(A,I,g,B,E,t){return j(A,iA),j(I,eI),j(g,iA),j(B,iA),l.rawshape_castRay(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E,t)}castRayAndGetNormal(A,I,g,B,E,t){j(A,iA),j(I,eI),j(g,iA),j(B,iA);const o=l.rawshape_castRayAndGetNormal(this.ptr,A.ptr,I.ptr,g.ptr,B.ptr,E,t);return o===0?void 0:gt.__wrap(o)}}class Ct{static __wrap(A){const I=Object.create(Ct.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawshapecollidertoi_free(A)}colliderHandle(){return l.rawcontactforceevent_collider1(this.ptr)}toi(){return l.rawraycolliderintersection_toi(this.ptr)}witness1(){const A=l.rawraycolliderintersection_normal(this.ptr);return iA.__wrap(A)}witness2(){const A=l.rawshapecollidertoi_witness2(this.ptr);return iA.__wrap(A)}normal1(){const A=l.rawshapecollidertoi_normal1(this.ptr);return iA.__wrap(A)}normal2(){const A=l.rawshapecollidertoi_normal2(this.ptr);return iA.__wrap(A)}}class $E{static __wrap(A){const I=Object.create($E.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawshapecontact_free(A)}distance(){return l.rawshapecontact_distance(this.ptr)}point1(){const A=l.rawpointprojection_point(this.ptr);return iA.__wrap(A)}point2(){const A=l.rawshapecontact_point2(this.ptr);return iA.__wrap(A)}normal1(){const A=l.rawshapecontact_normal1(this.ptr);return iA.__wrap(A)}normal2(){const A=l.rawshapecontact_normal2(this.ptr);return iA.__wrap(A)}}class Bt{static __wrap(A){const I=Object.create(Bt.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawshapetoi_free(A)}toi(){return l.rawintegrationparameters_dt(this.ptr)}witness1(){const A=l.rawrayintersection_normal(this.ptr);return iA.__wrap(A)}witness2(){const A=l.rawshapetoi_witness2(this.ptr);return iA.__wrap(A)}normal1(){const A=l.rawshapetoi_normal1(this.ptr);return iA.__wrap(A)}normal2(){const A=l.rawshapetoi_normal2(this.ptr);return iA.__wrap(A)}}class iA{static __wrap(A){const I=Object.create(iA.prototype);return I.ptr=A,I}__destroy_into_raw(){const A=this.ptr;return this.ptr=0,A}free(){const A=this.__destroy_into_raw();l.__wbg_rawvector_free(A)}static zero(){const A=l.rawvector_zero();return iA.__wrap(A)}constructor(A,I,g){const B=l.rawvector_new(A,I,g);return iA.__wrap(B)}get x(){return l.rawintegrationparameters_dt(this.ptr)}set x(A){l.rawintegrationparameters_set_dt(this.ptr,A)}get y(){return l.rawrotation_y(this.ptr)}set y(A){l.rawvector_set_y(this.ptr,A)}get z(){return l.rawintegrationparameters_erp(this.ptr)}set z(A){l.rawintegrationparameters_set_erp(this.ptr,A)}xyz(){const A=l.rawvector_xyz(this.ptr);return iA.__wrap(A)}yxz(){const A=l.rawvector_yxz(this.ptr);return iA.__wrap(A)}zxy(){const A=l.rawvector_zxy(this.ptr);return iA.__wrap(A)}xzy(){const A=l.rawvector_xzy(this.ptr);return iA.__wrap(A)}yzx(){const A=l.rawvector_yzx(this.ptr);return iA.__wrap(A)}zyx(){const A=l.rawvector_zyx(this.ptr);return iA.__wrap(A)}}async function WS(i){i===void 0&&(i=new URL("rapier_wasm3d_bg.wasm","<deleted>"));const A=function(){const B={wbg:{}};return B.wbg.__wbindgen_object_drop_ref=function(E){xo(E)},B.wbg.__wbindgen_number_new=function(E){return Ig(E)},B.wbg.__wbindgen_number_get=function(E,t){const o=JI(t),D=typeof o=="number"?o:void 0;Oo()[E/8+1]=OA(D)?0:D,YI()[E/4+0]=!OA(D)},B.wbg.__wbindgen_boolean_get=function(E){const t=JI(E);return typeof t=="boolean"?t?1:0:2},B.wbg.__wbg_rawraycolliderintersection_new=function(E){return Ig(It.__wrap(E))},B.wbg.__wbg_rawcontactforceevent_new=function(E){return Ig(Wa.__wrap(E))},B.wbg.__wbindgen_is_function=function(E){return typeof JI(E)=="function"},B.wbg.__wbg_call_9855a4612eb496cb=function(){return Fe(function(E,t,o){return Ig(JI(E).call(JI(t),JI(o)))},arguments)},B.wbg.__wbg_call_8e1338b908441bd2=function(){return Fe(function(E,t,o,D){return Ig(JI(E).call(JI(t),JI(o),JI(D)))},arguments)},B.wbg.__wbg_call_0a54fa4fb42023f0=function(){return Fe(function(E,t,o,D,a){return Ig(JI(E).call(JI(t),JI(o),JI(D),JI(a)))},arguments)},B.wbg.__wbg_bind_2ae44992222e2f45=function(E,t,o,D){return Ig(JI(E).bind(JI(t),JI(o),JI(D)))},B.wbg.__wbg_buffer_de1150f91b23aa89=function(E){return Ig(JI(E).buffer)},B.wbg.__wbg_newwithbyteoffsetandlength_9ca61320599a2c84=function(E,t,o){return Ig(new Uint8Array(JI(E),t>>>0,o>>>0))},B.wbg.__wbg_new_97cf52648830a70d=function(E){return Ig(new Uint8Array(JI(E)))},B.wbg.__wbg_set_a0172b213e2469e9=function(E,t,o){JI(E).set(JI(t),o>>>0)},B.wbg.__wbg_length_e09c0b925ab8de5d=function(E){return JI(E).length},B.wbg.__wbg_newwithbyteoffsetandlength_b0ff18b468a0d3f8=function(E,t,o){return Ig(new Float32Array(JI(E),t>>>0,o>>>0))},B.wbg.__wbg_set_66067e08ab6cefb5=function(E,t,o){JI(E).set(JI(t),o>>>0)},B.wbg.__wbg_length_211080f5c116c01f=function(E){return JI(E).length},B.wbg.__wbg_newwithlength_f28ac7a9191c7e26=function(E){return Ig(new Float32Array(E>>>0))},B.wbg.__wbindgen_throw=function(E,t){throw new Error(bS(E,t))},B.wbg.__wbindgen_memory=function(){return Ig(l.memory)},B}();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:I,module:g}=await async function(B,E){if(typeof Response=="function"&&B instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(B,E)}catch(o){if(B.headers.get("Content-Type")=="application/wasm")throw o;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o)}const t=await B.arrayBuffer();return await WebAssembly.instantiate(t,E)}{const t=await WebAssembly.instantiate(B,E);return t instanceof WebAssembly.Instance?{instance:t,module:B}:t}}(await i,A);return function(B,E){return l=B.exports,WS.__wbindgen_wasm_module=E,qo=new Float32Array(l.memory.buffer),No=new Float64Array(l.memory.buffer),Jo=new Int32Array(l.memory.buffer),po=new Uint32Array(l.memory.buffer),Ro=new Uint8Array(l.memory.buffer),l}(I,g)}class vS{constructor(A,I,g){this.x=A,this.y=I,this.z=g}}class BA{static new(A,I,g){return new vS(A,I,g)}static intoRaw(A){return new iA(A.x,A.y,A.z)}static zeros(){return BA.new(0,0,0)}static fromRaw(A){if(!A)return null;let I=BA.new(A.x,A.y,A.z);return A.free(),I}static copy(A,I){A.x=I.x,A.y=I.y,A.z=I.z}}class Ga{constructor(A,I,g,B){this.x=A,this.y=I,this.z=g,this.w=B}}class EI{static identity(){return new Ga(0,0,0,1)}static fromRaw(A){if(!A)return null;let I=new Ga(A.x,A.y,A.z,A.w);return A.free(),I}static intoRaw(A){return new eI(A.x,A.y,A.z,A.w)}static copy(A,I){A.x=I.x,A.y=I.y,A.z=I.z,A.w=I.w}}var yC,Eg,ca,Ai,QE,GI,Vo,AQ,ka,la,ya,Ma;(function(i){i[i.Dynamic=0]="Dynamic",i[i.Fixed=1]="Fixed",i[i.KinematicPositionBased=2]="KinematicPositionBased",i[i.KinematicVelocityBased=3]="KinematicVelocityBased"})(yC||(yC={}));class Ua{constructor(A,I,g){this.rawSet=A,this.colliderSet=I,this.handle=g}finalizeDeserialization(A){this.colliderSet=A}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(A,I){return this.rawSet.rbLockTranslations(this.handle,A,I)}lockRotations(A,I){return this.rawSet.rbLockRotations(this.handle,A,I)}setEnabledTranslations(A,I,g,B){return this.rawSet.rbSetEnabledTranslations(this.handle,A,I,g,B)}restrictTranslations(A,I,g,B){this.setEnabledTranslations(A,I,g,B)}setEnabledRotations(A,I,g,B){return this.rawSet.rbSetEnabledRotations(this.handle,A,I,g,B)}restrictRotations(A,I,g,B){this.setEnabledRotations(A,I,g,B)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(A){this.rawSet.rbSetDominanceGroup(this.handle,A)}enableCcd(A){this.rawSet.rbEnableCcd(this.handle,A)}translation(){let A=this.rawSet.rbTranslation(this.handle);return BA.fromRaw(A)}rotation(){let A=this.rawSet.rbRotation(this.handle);return EI.fromRaw(A)}nextTranslation(){let A=this.rawSet.rbNextTranslation(this.handle);return BA.fromRaw(A)}nextRotation(){let A=this.rawSet.rbNextRotation(this.handle);return EI.fromRaw(A)}setTranslation(A,I){this.rawSet.rbSetTranslation(this.handle,A.x,A.y,A.z,I)}setLinvel(A,I){let g=BA.intoRaw(A);this.rawSet.rbSetLinvel(this.handle,g,I),g.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(A,I){this.rawSet.rbSetGravityScale(this.handle,A,I)}setRotation(A,I){this.rawSet.rbSetRotation(this.handle,A.x,A.y,A.z,A.w,I)}setAngvel(A,I){let g=BA.intoRaw(A);this.rawSet.rbSetAngvel(this.handle,g,I),g.free()}setNextKinematicTranslation(A){this.rawSet.rbSetNextKinematicTranslation(this.handle,A.x,A.y,A.z)}setNextKinematicRotation(A){this.rawSet.rbSetNextKinematicRotation(this.handle,A.x,A.y,A.z,A.w)}linvel(){return BA.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return BA.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(A){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,A))}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(A){return this.rawSet.rbSetBodyType(this.handle,A)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(A){this.rawSet.rbSetLinearDamping(this.handle,A)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(A,I){this.rawSet.rbSetAdditionalMass(this.handle,A,I)}setAdditionalMassProperties(A,I,g,B,E){let t=BA.intoRaw(I),o=BA.intoRaw(g),D=EI.intoRaw(B);this.rawSet.rbSetAdditionalMassProperties(this.handle,A,t,o,D,E),t.free(),o.free(),D.free()}setAngularDamping(A){this.rawSet.rbSetAngularDamping(this.handle,A)}resetForces(A){this.rawSet.rbResetForces(this.handle,A)}resetTorques(A){this.rawSet.rbResetTorques(this.handle,A)}addForce(A,I){const g=BA.intoRaw(A);this.rawSet.rbAddForce(this.handle,g,I),g.free()}applyImpulse(A,I){const g=BA.intoRaw(A);this.rawSet.rbApplyImpulse(this.handle,g,I),g.free()}addTorque(A,I){const g=BA.intoRaw(A);this.rawSet.rbAddTorque(this.handle,g,I),g.free()}applyTorqueImpulse(A,I){const g=BA.intoRaw(A);this.rawSet.rbApplyTorqueImpulse(this.handle,g,I),g.free()}addForceAtPoint(A,I,g){const B=BA.intoRaw(A),E=BA.intoRaw(I);this.rawSet.rbAddForceAtPoint(this.handle,B,E,g),B.free(),E.free()}applyImpulseAtPoint(A,I,g){const B=BA.intoRaw(A),E=BA.intoRaw(I);this.rawSet.rbApplyImpulseAtPoint(this.handle,B,E,g),B.free(),E.free()}}class iC{constructor(A){this.status=A,this.translation=BA.zeros(),this.rotation=EI.identity(),this.gravityScale=1,this.linvel=BA.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=BA.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=BA.zeros(),this.principalAngularInertia=BA.zeros(),this.angularInertiaLocalFrame=EI.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.dominanceGroup=0}static dynamic(){return new iC(yC.Dynamic)}static kinematicPositionBased(){return new iC(yC.KinematicPositionBased)}static kinematicVelocityBased(){return new iC(yC.KinematicVelocityBased)}static fixed(){return new iC(yC.Fixed)}static newDynamic(){return new iC(yC.Dynamic)}static newKinematicPositionBased(){return new iC(yC.KinematicPositionBased)}static newKinematicVelocityBased(){return new iC(yC.KinematicVelocityBased)}static newStatic(){return new iC(yC.Fixed)}setDominanceGroup(A){return this.dominanceGroup=A,this}setTranslation(A,I,g){if(typeof A!="number"||typeof I!="number"||typeof g!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:A,y:I,z:g},this}setRotation(A){return EI.copy(this.rotation,A),this}setGravityScale(A){return this.gravityScale=A,this}setAdditionalMass(A){return this.mass=A,this.massOnly=!0,this}setLinvel(A,I,g){if(typeof A!="number"||typeof I!="number"||typeof g!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:A,y:I,z:g},this}setAngvel(A){return BA.copy(this.angvel,A),this}setAdditionalMassProperties(A,I,g,B){return this.mass=A,BA.copy(this.centerOfMass,I),BA.copy(this.principalAngularInertia,g),EI.copy(this.angularInertiaLocalFrame,B),this.massOnly=!1,this}enabledTranslations(A,I,g){return this.translationsEnabledX=A,this.translationsEnabledY=I,this.translationsEnabledZ=g,this}restrictTranslations(A,I,g){return this.enabledTranslations(A,I,g)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(A,I,g){return this.rotationsEnabledX=A,this.rotationsEnabledY=I,this.rotationsEnabledZ=g,this}restrictRotations(A,I,g){return this.enabledRotations(A,I,g)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(A){return this.linearDamping=A,this}setAngularDamping(A){return this.angularDamping=A,this}setCanSleep(A){return this.canSleep=A,this}setSleeping(A){return this.sleeping=A,this}setCcdEnabled(A){return this.ccdEnabled=A,this}setUserData(A){return this.userData=A,this}}class Qt{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(A,I){let g=this.index(A);for(;this.data.length<=g;)this.data.push(null);this.data[g]==null&&(this.size+=1),this.data[g]=I}len(){return this.size}delete(A){let I=this.index(A);I<this.data.length&&(this.data[I]!=null&&(this.size-=1),this.data[I]=null)}clear(){this.data=new Array}get(A){let I=this.index(A);return I<this.data.length?this.data[I]:null}forEach(A){for(const I of this.data)I!=null&&A(I)}getAll(){return this.data.filter(A=>A!=null)}index(A){return this.fconv[0]=A,this.uconv[0]}}class PS{constructor(A){this.raw=A||new XI,this.map=new Qt,A&&A.forEachRigidBodyHandle(I=>{this.map.set(I,new Ua(A,null,I))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}finalizeDeserialization(A){this.map.forEach(I=>I.finalizeDeserialization(A))}createRigidBody(A,I){let g=BA.intoRaw(I.translation),B=EI.intoRaw(I.rotation),E=BA.intoRaw(I.linvel),t=BA.intoRaw(I.centerOfMass),o=BA.intoRaw(I.angvel),D=BA.intoRaw(I.principalAngularInertia),a=EI.intoRaw(I.angularInertiaLocalFrame),s=this.raw.createRigidBody(g,B,I.gravityScale,I.mass,I.massOnly,t,E,o,D,a,I.translationsEnabledX,I.translationsEnabledY,I.translationsEnabledZ,I.rotationsEnabledX,I.rotationsEnabledY,I.rotationsEnabledZ,I.linearDamping,I.angularDamping,I.status,I.canSleep,I.sleeping,I.ccdEnabled,I.dominanceGroup);g.free(),B.free(),E.free(),t.free(),o.free(),D.free(),a.free();const n=new Ua(this.raw,A,s);return n.userData=I.userData,this.map.set(s,n),n}remove(A,I,g,B,E){for(let t=0;t<this.raw.rbNumColliders(A);t+=1)g.unmap(this.raw.rbCollider(A,t));B.forEachJointHandleAttachedToRigidBody(A,t=>B.unmap(t)),E.forEachJointHandleAttachedToRigidBody(A,t=>E.unmap(t)),this.raw.remove(A,I.raw,g.raw,B.raw,E.raw),this.map.delete(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}get(A){return this.map.get(A)}forEach(A){this.map.forEach(A)}forEachActiveRigidBody(A,I){A.forEachActiveRigidBodyHandle(g=>{I(this.get(g))})}getAll(){return this.map.getAll()}}class VS{constructor(A){this.raw=A||new pB}free(){this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get erp(){return this.raw.erp}get allowedLinearError(){return this.raw.allowedLinearError}get predictionDistance(){return this.raw.predictionDistance}get maxVelocityIterations(){return this.raw.maxVelocityIterations}get maxVelocityFrictionIterations(){return this.raw.maxVelocityFrictionIterations}get maxStabilizationIterations(){return this.raw.maxStabilizationIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(A){this.raw.dt=A}set erp(A){this.raw.erp=A}set allowedLinearError(A){this.raw.allowedLinearError=A}set predictionDistance(A){this.raw.predictionDistance=A}set maxVelocityIterations(A){this.raw.maxVelocityIterations=A}set maxVelocityFrictionIterations(A){this.raw.maxVelocityFrictionIterations=A}set maxStabilizationIterations(A){this.raw.maxStabilizationIterations=A}set minIslandSize(A){this.raw.minIslandSize=A}set maxCcdSubsteps(A){this.raw.maxCcdSubsteps=A}}(function(i){i[i.Revolute=0]="Revolute",i[i.Fixed=1]="Fixed",i[i.Prismatic=2]="Prismatic",i[i.Spherical=3]="Spherical"})(Eg||(Eg={})),function(i){i[i.AccelerationBased=0]="AccelerationBased",i[i.ForceBased=1]="ForceBased"}(ca||(ca={}));class dB{constructor(A,I,g){this.rawSet=A,this.bodySet=I,this.handle=g}static newTyped(A,I,g){switch(A.jointType(g)){case Eg.Revolute:return new zS(A,I,g);case Eg.Prismatic:return new jS(A,I,g);case Eg.Fixed:return new _S(A,I,g);case Eg.Spherical:return new XS(A,I,g);default:return new dB(A,I,g)}}finalizeDeserialization(A){this.bodySet=A}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return EI.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return EI.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return BA.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return BA.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(A){const I=BA.intoRaw(A);this.rawSet.jointSetAnchor1(this.handle,I),I.free()}setAnchor2(A){const I=BA.intoRaw(A);this.rawSet.jointSetAnchor2(this.handle,I),I.free()}setContactsEnabled(A){this.rawSet.jointSetContactsEnabled(this.handle,A)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class ja extends dB{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(A,I){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),A,I)}configureMotorModel(A){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),A)}configureMotorVelocity(A,I){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),A,I)}configureMotorPosition(A,I,g){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),A,I,g)}configureMotor(A,I,g,B){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),A,I,g,B)}}class _S extends dB{}class jS extends ja{rawAxis(){return $o.X}}class zS extends ja{rawAxis(){return $o.AngX}}class XS extends dB{}class _Q{constructor(){}static fixed(A,I,g,B){let E=new _Q;return E.anchor1=A,E.anchor2=g,E.frame1=I,E.frame2=B,E.jointType=Eg.Fixed,E}static spherical(A,I){let g=new _Q;return g.anchor1=A,g.anchor2=I,g.jointType=Eg.Spherical,g}static prismatic(A,I,g){let B=new _Q;return B.anchor1=A,B.anchor2=I,B.axis=g,B.jointType=Eg.Prismatic,B}static revolute(A,I,g){let B=new _Q;return B.anchor1=A,B.anchor2=I,B.axis=g,B.jointType=Eg.Revolute,B}intoRaw(){let A,I,g=BA.intoRaw(this.anchor1),B=BA.intoRaw(this.anchor2),E=!1,t=0,o=0;switch(this.jointType){case Eg.Fixed:let D=EI.intoRaw(this.frame1),a=EI.intoRaw(this.frame2);I=eC.fixed(g,D,B,a),D.free(),a.free();break;case Eg.Prismatic:A=BA.intoRaw(this.axis),this.limitsEnabled&&(E=!0,t=this.limits[0],o=this.limits[1]),I=eC.prismatic(g,B,A,E,t,o),A.free();break;case Eg.Spherical:I=eC.spherical(g,B);break;case Eg.Revolute:A=BA.intoRaw(this.axis),I=eC.revolute(g,B,A),A.free()}return g.free(),B.free(),I}}class $S{constructor(A){this.raw=A||new xC,this.map=new Qt,A&&A.forEachJointHandle(I=>{this.map.set(I,dB.newTyped(A,null,I))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}finalizeDeserialization(A){this.map.forEach(I=>I.finalizeDeserialization(A))}createJoint(A,I,g,B,E){const t=I.intoRaw(),o=this.raw.createJoint(t,g,B,E);t.free();let D=dB.newTyped(this.raw,A,o);return this.map.set(o,D),D}remove(A,I){this.raw.remove(A,I),this.unmap(A)}forEachJointHandleAttachedToRigidBody(A,I){this.raw.forEachJointAttachedToRigidBody(A,I)}unmap(A){this.map.delete(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}get(A){return this.map.get(A)}forEach(A){this.map.forEach(A)}getAll(){return this.map.getAll()}}class LB{constructor(A,I){this.rawSet=A,this.handle=I}static newTyped(A,I){switch(A.jointType(I)){case Eg.Revolute:return new gw(A,I);case Eg.Prismatic:return new Iw(A,I);case Eg.Fixed:return new Aw(A,I);case Eg.Spherical:return new Cw(A,I);default:return new LB(A,I)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(A){this.rawSet.jointSetContactsEnabled(this.handle,A)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class za extends LB{}class Aw extends LB{}class Iw extends za{rawAxis(){return $o.X}}class gw extends za{rawAxis(){return $o.AngX}}class Cw extends LB{}class Bw{constructor(A){this.raw=A||new OC,this.map=new Qt,A&&A.forEachJointHandle(I=>{this.map.set(I,LB.newTyped(this.raw,I))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}createJoint(A,I,g,B){const E=A.intoRaw(),t=this.raw.createJoint(E,I,g,B);E.free();let o=LB.newTyped(this.raw,t);return this.map.set(t,o),o}remove(A,I){this.raw.remove(A,I),this.map.delete(A)}unmap(A){this.map.delete(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}get(A){return this.map.get(A)}forEach(A){this.map.forEach(A)}forEachJointHandleAttachedToRigidBody(A,I){this.raw.forEachJointAttachedToRigidBody(A,I)}getAll(){return this.map.getAll()}}(function(i){i[i.Average=0]="Average",i[i.Min=1]="Min",i[i.Multiply=2]="Multiply",i[i.Max=3]="Max"})(Ai||(Ai={}));class Qw{constructor(A){this.raw=A||new BE}free(){this.raw.free(),this.raw=void 0}}class Ew{constructor(A){this.raw=A||new NC}free(){this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(A){this.raw.forEachActiveRigidBodyHandle(A)}}class iw{constructor(A){this.raw=A||new qB}free(){this.raw.free(),this.raw=void 0}}class ow{constructor(A){this.raw=A||new eB,this.tempManifold=new tw(null)}free(){this.raw.free(),this.raw=void 0}contactsWith(A,I){this.raw.contacts_with(A,I)}intersectionsWith(A,I){this.raw.intersections_with(A,I)}contactPair(A,I,g){const B=this.raw.contact_pair(A,I);if(B){const E=B.collider1()!=A;let t;for(t=0;t<B.numContactManifolds();++t)this.tempManifold.raw=B.contactManifold(t),this.tempManifold.raw&&g(this.tempManifold,E),this.tempManifold.free();B.free()}}intersectionPair(A,I){return this.raw.intersection_pair(A,I)}}class tw{constructor(A){this.raw=A}free(){this.raw.free(),this.raw=void 0}normal(){return BA.fromRaw(this.raw.normal())}localNormal1(){return BA.fromRaw(this.raw.local_n1())}localNormal2(){return BA.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(A){return BA.fromRaw(this.raw.contact_local_p1(A))}localContactPoint2(A){return BA.fromRaw(this.raw.contact_local_p2(A))}contactDist(A){return this.raw.contact_dist(A)}contactFid1(A){return this.raw.contact_fid1(A)}contactFid2(A){return this.raw.contact_fid2(A)}contactImpulse(A){return this.raw.contact_impulse(A)}contactTangentImpulseX(A){return this.raw.contact_tangent_impulse_x(A)}contactTangentImpulseY(A){return this.raw.contact_tangent_impulse_y(A)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(A){return BA.fromRaw(this.raw.solver_contact_point(A))}solverContactDist(A){return this.raw.solver_contact_dist(A)}solverContactFriction(A){return this.raw.solver_contact_friction(A)}solverContactRestitution(A){return this.raw.solver_contact_restitution(A)}solverContactTangentVelocity(A){return BA.fromRaw(this.raw.solver_contact_tangent_velocity(A))}}class EE{constructor(A,I,g,B,E){this.distance=A,this.point1=I,this.point2=g,this.normal1=B,this.normal2=E}static fromRaw(A){if(!A)return null;const I=new EE(A.distance(),BA.fromRaw(A.point1()),BA.fromRaw(A.point2()),BA.fromRaw(A.normal1()),BA.fromRaw(A.normal2()));return A.free(),I}}(function(i){i[i.Vertex=0]="Vertex",i[i.Edge=1]="Edge",i[i.Face=2]="Face",i[i.Unknown=3]="Unknown"})(QE||(QE={}));class Qi{constructor(A,I){this.point=A,this.isInside=I}static fromRaw(A){if(!A)return null;const I=new Qi(BA.fromRaw(A.point()),A.isInside());return A.free(),I}}class Ii{constructor(A,I,g,B,E){this.featureType=QE.Unknown,this.featureId=void 0,this.collider=A,this.point=I,this.isInside=g,E!==void 0&&(this.featureId=E),B!==void 0&&(this.featureType=B)}static fromRaw(A,I){if(!I)return null;const g=new Ii(A.get(I.colliderHandle()),BA.fromRaw(I.point()),I.isInside(),I.featureType(),I.featureId());return I.free(),g}}class aU{constructor(A,I){this.origin=A,this.dir=I}pointAt(A){return{x:this.origin.x+this.dir.x*A,y:this.origin.y+this.dir.y*A,z:this.origin.z+this.dir.z*A}}}class Ei{constructor(A,I,g,B){this.featureType=QE.Unknown,this.featureId=void 0,this.toi=A,this.normal=I,B!==void 0&&(this.featureId=B),g!==void 0&&(this.featureType=g)}static fromRaw(A){if(!A)return null;const I=new Ei(A.toi(),BA.fromRaw(A.normal()),A.featureType(),A.featureId());return A.free(),I}}class gi{constructor(A,I,g,B,E){this.featureType=QE.Unknown,this.featureId=void 0,this.collider=A,this.toi=I,this.normal=g,E!==void 0&&(this.featureId=E),B!==void 0&&(this.featureType=B)}static fromRaw(A,I){if(!I)return null;const g=new gi(A.get(I.colliderHandle()),I.toi(),BA.fromRaw(I.normal()),I.featureType(),I.featureId());return I.free(),g}}class Et{constructor(A,I){this.collider=A,this.toi=I}static fromRaw(A,I){if(!I)return null;const g=new Et(A.get(I.colliderHandle()),I.toi());return I.free(),g}}class sE{constructor(A,I,g,B,E){this.toi=A,this.witness1=I,this.witness2=g,this.normal1=B,this.normal2=E}static fromRaw(A,I){if(!I)return null;const g=new sE(I.toi(),BA.fromRaw(I.witness1()),BA.fromRaw(I.witness2()),BA.fromRaw(I.normal1()),BA.fromRaw(I.normal2()));return I.free(),g}}class ii extends sE{constructor(A,I,g,B,E,t){super(I,g,B,E,t),this.collider=A}static fromRaw(A,I){if(!I)return null;const g=new ii(A.get(I.colliderHandle()),I.toi(),BA.fromRaw(I.witness1()),BA.fromRaw(I.witness2()),BA.fromRaw(I.normal1()),BA.fromRaw(I.normal2()));return I.free(),g}}class sg{static fromRaw(A,I){const g=A.coShapeType(I);let B,E,t,o,D,a;switch(g){case GI.Ball:return new Xa(A.coRadius(I));case GI.Cuboid:return B=A.coHalfExtents(I),new $a(B.x,B.y,B.z);case GI.RoundCuboid:return B=A.coHalfExtents(I),E=A.coRoundRadius(I),new AD(B.x,B.y,B.z,E);case GI.Capsule:return D=A.coHalfHeight(I),a=A.coRadius(I),new ID(D,a);case GI.Segment:return t=A.coVertices(I),new gD(BA.new(t[0],t[1],t[2]),BA.new(t[3],t[4],t[5]));case GI.Polyline:return t=A.coVertices(I),o=A.coIndices(I),new QD(t,o);case GI.Triangle:return t=A.coVertices(I),new CD(BA.new(t[0],t[1],t[2]),BA.new(t[3],t[4],t[5]),BA.new(t[6],t[7],t[8]));case GI.RoundTriangle:return t=A.coVertices(I),E=A.coRoundRadius(I),new BD(BA.new(t[0],t[1],t[2]),BA.new(t[3],t[4],t[5]),BA.new(t[6],t[7],t[8]),E);case GI.TriMesh:return t=A.coVertices(I),o=A.coIndices(I),new ED(t,o);case GI.HeightField:const s=A.coHeightfieldScale(I),n=A.coHeightfieldHeights(I),r=A.coHeightfieldNRows(I),k=A.coHeightfieldNCols(I);return new iD(r,k,n,s);case GI.ConvexPolyhedron:return t=A.coVertices(I),o=A.coIndices(I),new _o(t,o);case GI.RoundConvexPolyhedron:return t=A.coVertices(I),o=A.coIndices(I),E=A.coRoundRadius(I),new jo(t,o,E);case GI.Cylinder:return D=A.coHalfHeight(I),a=A.coRadius(I),new oD(D,a);case GI.RoundCylinder:return D=A.coHalfHeight(I),a=A.coRadius(I),E=A.coRoundRadius(I),new tD(D,a,E);case GI.Cone:return D=A.coHalfHeight(I),a=A.coRadius(I),new eD(D,a);case GI.RoundCone:return D=A.coHalfHeight(I),a=A.coRadius(I),E=A.coRoundRadius(I),new aD(D,a,E);default:throw new Error("unknown shape type: "+g)}}castShape(A,I,g,B,E,t,o,D){let a=BA.intoRaw(A),s=EI.intoRaw(I),n=BA.intoRaw(g),r=BA.intoRaw(E),k=EI.intoRaw(t),G=BA.intoRaw(o),S=this.intoRaw(),w=B.intoRaw(),M=sE.fromRaw(null,S.castShape(a,s,n,w,r,k,G,D));return a.free(),s.free(),n.free(),r.free(),k.free(),G.free(),S.free(),w.free(),M}intersectsShape(A,I,g,B,E){let t=BA.intoRaw(A),o=EI.intoRaw(I),D=BA.intoRaw(B),a=EI.intoRaw(E),s=this.intoRaw(),n=g.intoRaw(),r=s.intersectsShape(t,o,n,D,a);return t.free(),o.free(),D.free(),a.free(),s.free(),n.free(),r}contactShape(A,I,g,B,E,t){let o=BA.intoRaw(A),D=EI.intoRaw(I),a=BA.intoRaw(B),s=EI.intoRaw(E),n=this.intoRaw(),r=g.intoRaw(),k=EE.fromRaw(n.contactShape(o,D,r,a,s,t));return o.free(),D.free(),a.free(),s.free(),n.free(),r.free(),k}containsPoint(A,I,g){let B=BA.intoRaw(A),E=EI.intoRaw(I),t=BA.intoRaw(g),o=this.intoRaw(),D=o.containsPoint(B,E,t);return B.free(),E.free(),t.free(),o.free(),D}projectPoint(A,I,g,B){let E=BA.intoRaw(A),t=EI.intoRaw(I),o=BA.intoRaw(g),D=this.intoRaw(),a=Qi.fromRaw(D.projectPoint(E,t,o,B));return E.free(),t.free(),o.free(),D.free(),a}intersectsRay(A,I,g,B){let E=BA.intoRaw(I),t=EI.intoRaw(g),o=BA.intoRaw(A.origin),D=BA.intoRaw(A.dir),a=this.intoRaw(),s=a.intersectsRay(E,t,o,D,B);return E.free(),t.free(),o.free(),D.free(),a.free(),s}castRay(A,I,g,B,E){let t=BA.intoRaw(I),o=EI.intoRaw(g),D=BA.intoRaw(A.origin),a=BA.intoRaw(A.dir),s=this.intoRaw(),n=s.castRay(t,o,D,a,B,E);return t.free(),o.free(),D.free(),a.free(),s.free(),n}castRayAndGetNormal(A,I,g,B,E){let t=BA.intoRaw(I),o=EI.intoRaw(g),D=BA.intoRaw(A.origin),a=BA.intoRaw(A.dir),s=this.intoRaw(),n=Ei.fromRaw(s.castRayAndGetNormal(t,o,D,a,B,E));return t.free(),o.free(),D.free(),a.free(),s.free(),n}}(function(i){i[i.Ball=0]="Ball",i[i.Cuboid=1]="Cuboid",i[i.Capsule=2]="Capsule",i[i.Segment=3]="Segment",i[i.Polyline=4]="Polyline",i[i.Triangle=5]="Triangle",i[i.TriMesh=6]="TriMesh",i[i.HeightField=7]="HeightField",i[i.ConvexPolyhedron=9]="ConvexPolyhedron",i[i.Cylinder=10]="Cylinder",i[i.Cone=11]="Cone",i[i.RoundCuboid=12]="RoundCuboid",i[i.RoundTriangle=13]="RoundTriangle",i[i.RoundCylinder=14]="RoundCylinder",i[i.RoundCone=15]="RoundCone",i[i.RoundConvexPolyhedron=16]="RoundConvexPolyhedron"})(GI||(GI={}));class Xa extends sg{constructor(A){super(),this.type=GI.Ball,this.radius=A}intoRaw(){return jA.ball(this.radius)}}class $a extends sg{constructor(A,I,g){super(),this.type=GI.Cuboid,this.halfExtents=BA.new(A,I,g)}intoRaw(){return jA.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class AD extends sg{constructor(A,I,g,B){super(),this.type=GI.RoundCuboid,this.halfExtents=BA.new(A,I,g),this.borderRadius=B}intoRaw(){return jA.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class ID extends sg{constructor(A,I){super(),this.type=GI.Capsule,this.halfHeight=A,this.radius=I}intoRaw(){return jA.capsule(this.halfHeight,this.radius)}}class gD extends sg{constructor(A,I){super(),this.type=GI.Segment,this.a=A,this.b=I}intoRaw(){let A=BA.intoRaw(this.a),I=BA.intoRaw(this.b),g=jA.segment(A,I);return A.free(),I.free(),g}}class CD extends sg{constructor(A,I,g){super(),this.type=GI.Triangle,this.a=A,this.b=I,this.c=g}intoRaw(){let A=BA.intoRaw(this.a),I=BA.intoRaw(this.b),g=BA.intoRaw(this.c),B=jA.triangle(A,I,g);return A.free(),I.free(),g.free(),B}}class BD extends sg{constructor(A,I,g,B){super(),this.type=GI.RoundTriangle,this.a=A,this.b=I,this.c=g,this.borderRadius=B}intoRaw(){let A=BA.intoRaw(this.a),I=BA.intoRaw(this.b),g=BA.intoRaw(this.c),B=jA.roundTriangle(A,I,g,this.borderRadius);return A.free(),I.free(),g.free(),B}}class QD extends sg{constructor(A,I){super(),this.type=GI.Polyline,this.vertices=A,this.indices=I!=null?I:new Uint32Array(0)}intoRaw(){return jA.polyline(this.vertices,this.indices)}}class ED extends sg{constructor(A,I){super(),this.type=GI.TriMesh,this.vertices=A,this.indices=I}intoRaw(){return jA.trimesh(this.vertices,this.indices)}}class _o extends sg{constructor(A,I){super(),this.type=GI.ConvexPolyhedron,this.vertices=A,this.indices=I}intoRaw(){return this.indices?jA.convexMesh(this.vertices,this.indices):jA.convexHull(this.vertices)}}class jo extends sg{constructor(A,I,g){super(),this.type=GI.RoundConvexPolyhedron,this.vertices=A,this.indices=I,this.borderRadius=g}intoRaw(){return this.indices?jA.roundConvexMesh(this.vertices,this.indices,this.borderRadius):jA.roundConvexHull(this.vertices,this.borderRadius)}}class iD extends sg{constructor(A,I,g,B){super(),this.type=GI.HeightField,this.nrows=A,this.ncols=I,this.heights=g,this.scale=B}intoRaw(){let A=BA.intoRaw(this.scale),I=jA.heightfield(this.nrows,this.ncols,this.heights,A);return A.free(),I}}class oD extends sg{constructor(A,I){super(),this.type=GI.Cylinder,this.halfHeight=A,this.radius=I}intoRaw(){return jA.cylinder(this.halfHeight,this.radius)}}class tD extends sg{constructor(A,I,g){super(),this.type=GI.RoundCylinder,this.borderRadius=g,this.halfHeight=A,this.radius=I}intoRaw(){return jA.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class eD extends sg{constructor(A,I){super(),this.type=GI.Cone,this.halfHeight=A,this.radius=I}intoRaw(){return jA.cone(this.halfHeight,this.radius)}}class aD extends sg{constructor(A,I,g){super(),this.type=GI.RoundCone,this.halfHeight=A,this.radius=I,this.borderRadius=g}intoRaw(){return jA.roundCone(this.halfHeight,this.radius,this.borderRadius)}}(function(i){i[i.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",i[i.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",i[i.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",i[i.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",i[i.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",i[i.FIXED_FIXED=32]="FIXED_FIXED",i[i.DEFAULT=15]="DEFAULT",i[i.ALL=60943]="ALL"})(Vo||(Vo={}));class Ka{constructor(A,I,g,B){this.colliderSet=A,this.handle=I,this._parent=g,this._shape=B}finalizeDeserialization(A){this.handle!=null&&(this._parent=A.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=sg.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return BA.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return EI.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(A){this.colliderSet.raw.coSetSensor(this.handle,A)}setShape(A){let I=A.intoRaw();this.colliderSet.raw.coSetShape(this.handle,I),I.free(),this._shape=A}setRestitution(A){this.colliderSet.raw.coSetRestitution(this.handle,A)}setFriction(A){this.colliderSet.raw.coSetFriction(this.handle,A)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(A){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,A)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(A){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,A)}setCollisionGroups(A){this.colliderSet.raw.coSetCollisionGroups(this.handle,A)}setSolverGroups(A){this.colliderSet.raw.coSetSolverGroups(this.handle,A)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(A){this.colliderSet.raw.coSetActiveHooks(this.handle,A)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(A){this.colliderSet.raw.coSetActiveEvents(this.handle,A)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(A){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,A)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(A){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,A)}setDensity(A){this.colliderSet.raw.coSetDensity(this.handle,A)}setMass(A){this.colliderSet.raw.coSetMass(this.handle,A)}setMassProperties(A,I,g,B){let E=BA.intoRaw(I),t=BA.intoRaw(g),o=EI.intoRaw(B);this.colliderSet.raw.coSetMassProperties(this.handle,A,E,t,o),E.free(),t.free(),o.free()}setTranslation(A){this.colliderSet.raw.coSetTranslation(this.handle,A.x,A.y,A.z)}setTranslationWrtParent(A){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,A.x,A.y,A.z)}setRotation(A){this.colliderSet.raw.coSetRotation(this.handle,A.x,A.y,A.z,A.w)}setRotationWrtParent(A){this.colliderSet.raw.coSetRotationWrtParent(this.handle,A.x,A.y,A.z,A.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return BA.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}radius(){return this.colliderSet.raw.coRadius(this.handle)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let A=this.colliderSet.raw.coHeightfieldScale(this.handle);return BA.fromRaw(A)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(A){let I=BA.intoRaw(A),g=this.colliderSet.raw.coContainsPoint(this.handle,I);return I.free(),g}projectPoint(A,I){let g=BA.intoRaw(A),B=Qi.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,g,I));return g.free(),B}intersectsRay(A,I){let g=BA.intoRaw(A.origin),B=BA.intoRaw(A.dir),E=this.colliderSet.raw.coIntersectsRay(this.handle,g,B,I);return g.free(),B.free(),E}castShape(A,I,g,B,E,t){let o=BA.intoRaw(A),D=BA.intoRaw(g),a=EI.intoRaw(B),s=BA.intoRaw(E),n=I.intoRaw(),r=sE.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,o,n,D,a,s,t));return o.free(),D.free(),a.free(),s.free(),n.free(),r}castCollider(A,I,g,B){let E=BA.intoRaw(A),t=BA.intoRaw(g),o=ii.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,E,I.handle,t,B));return E.free(),t.free(),o}intersectsShape(A,I,g){let B=BA.intoRaw(I),E=EI.intoRaw(g),t=A.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,t,B,E);return B.free(),E.free(),t.free(),o}contactShape(A,I,g,B){let E=BA.intoRaw(I),t=EI.intoRaw(g),o=A.intoRaw(),D=EE.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,E,t,B));return E.free(),t.free(),o.free(),D}contactCollider(A,I){return EE.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,A.handle,I))}castRay(A,I,g){let B=BA.intoRaw(A.origin),E=BA.intoRaw(A.dir),t=this.colliderSet.raw.coCastRay(this.handle,B,E,I,g);return B.free(),E.free(),t}castRayAndGetNormal(A,I,g){let B=BA.intoRaw(A.origin),E=BA.intoRaw(A.dir),t=Ei.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,B,E,I,g));return B.free(),E.free(),t}}(function(i){i[i.Density=0]="Density",i[i.Mass=1]="Mass",i[i.MassProps=2]="MassProps"})(AQ||(AQ={}));class vI{constructor(A){this.shape=A,this.massPropsMode=AQ.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=EI.identity(),this.translation=BA.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=Ai.Average,this.restitutionCombineRule=Ai.Average,this.activeCollisionTypes=Vo.DEFAULT,this.activeEvents=0,this.activeHooks=0,this.mass=0,this.centerOfMass=BA.zeros(),this.contactForceEventThreshold=0,this.principalAngularInertia=BA.zeros(),this.angularInertiaLocalFrame=EI.identity()}static ball(A){const I=new Xa(A);return new vI(I)}static capsule(A,I){const g=new ID(A,I);return new vI(g)}static segment(A,I){const g=new gD(A,I);return new vI(g)}static triangle(A,I,g){const B=new CD(A,I,g);return new vI(B)}static roundTriangle(A,I,g,B){const E=new BD(A,I,g,B);return new vI(E)}static polyline(A,I){const g=new QD(A,I);return new vI(g)}static trimesh(A,I){const g=new ED(A,I);return new vI(g)}static cuboid(A,I,g){const B=new $a(A,I,g);return new vI(B)}static roundCuboid(A,I,g,B){const E=new AD(A,I,g,B);return new vI(E)}static heightfield(A,I,g,B){const E=new iD(A,I,g,B);return new vI(E)}static cylinder(A,I){const g=new oD(A,I);return new vI(g)}static roundCylinder(A,I,g){const B=new tD(A,I,g);return new vI(B)}static cone(A,I){const g=new eD(A,I);return new vI(g)}static roundCone(A,I,g){const B=new aD(A,I,g);return new vI(B)}static convexHull(A){const I=new _o(A,null);return new vI(I)}static convexMesh(A,I){const g=new _o(A,I);return new vI(g)}static roundConvexHull(A,I){const g=new jo(A,null,I);return new vI(g)}static roundConvexMesh(A,I,g){const B=new jo(A,I,g);return new vI(B)}setTranslation(A,I,g){if(typeof A!="number"||typeof I!="number"||typeof g!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:A,y:I,z:g},this}setRotation(A){return EI.copy(this.rotation,A),this}setSensor(A){return this.isSensor=A,this}setDensity(A){return this.massPropsMode=AQ.Density,this.density=A,this}setMass(A){return this.massPropsMode=AQ.Mass,this.mass=A,this}setMassProperties(A,I,g,B){return this.massPropsMode=AQ.MassProps,this.mass=A,BA.copy(this.centerOfMass,I),BA.copy(this.principalAngularInertia,g),EI.copy(this.angularInertiaLocalFrame,B),this}setRestitution(A){return this.restitution=A,this}setFriction(A){return this.friction=A,this}setFrictionCombineRule(A){return this.frictionCombineRule=A,this}setRestitutionCombineRule(A){return this.restitutionCombineRule=A,this}setCollisionGroups(A){return this.collisionGroups=A,this}setSolverGroups(A){return this.solverGroups=A,this}setActiveHooks(A){return this.activeHooks=A,this}setActiveEvents(A){return this.activeEvents=A,this}setActiveCollisionTypes(A){return this.activeCollisionTypes=A,this}setContactForceEventThreshold(A){return this.contactForceEventThreshold=A,this}}class ew{constructor(A){this.raw=A||new zI,this.map=new Qt,A&&A.forEachColliderHandle(I=>{this.map.set(I,new Ka(this,I,null))})}free(){this.raw.free(),this.raw=void 0,this.map.clear(),this.map=void 0}finalizeDeserialization(A){this.map.forEach(I=>I.finalizeDeserialization(A))}createCollider(A,I,g){let B=g!=null&&g!=null;if(B&&isNaN(g))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let E=I.shape.intoRaw(),t=BA.intoRaw(I.translation),o=EI.intoRaw(I.rotation),D=BA.intoRaw(I.centerOfMass),a=BA.intoRaw(I.principalAngularInertia),s=EI.intoRaw(I.angularInertiaLocalFrame),n=this.raw.createCollider(E,t,o,I.massPropsMode,I.mass,D,a,s,I.density,I.friction,I.restitution,I.frictionCombineRule,I.restitutionCombineRule,I.isSensor,I.collisionGroups,I.solverGroups,I.activeCollisionTypes,I.activeHooks,I.activeEvents,I.contactForceEventThreshold,B,B?g:0,A.raw);E.free(),t.free(),o.free(),D.free(),a.free(),s.free();let r=B?A.get(g):null,k=new Ka(this,n,r,I.shape);return this.map.set(n,k),k}remove(A,I,g,B){this.raw.remove(A,I.raw,g.raw,B),this.unmap(A)}unmap(A){this.map.delete(A)}get(A){return this.map.get(A)}len(){return this.map.len()}contains(A){return this.get(A)!=null}forEach(A){this.map.forEach(A)}getAll(){return this.map.getAll()}}class aw{constructor(A){this.raw=A||new Zo}free(){this.raw.free(),this.raw=void 0}step(A,I,g,B,E,t,o,D,a,s,n,r){let k=BA.intoRaw(A);n?this.raw.stepWithEvents(k,I.raw,g.raw,B.raw,E.raw,t.raw,o.raw,D.raw,a.raw,s.raw,n.raw,r,r?r.filterContactPair:null,r?r.filterIntersectionPair:null):this.raw.step(k,I.raw,g.raw,B.raw,E.raw,t.raw,o.raw,D.raw,a.raw,s.raw),k.free()}}(function(i){i[i.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",i[i.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",i[i.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",i[i.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",i[i.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",i[i.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",i[i.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",i[i.ONLY_FIXED=6]="ONLY_FIXED"})(ka||(ka={}));class Dw{constructor(A){this.raw=A||new vo}free(){this.raw.free(),this.raw=void 0}update(A,I,g){this.raw.update(A.raw,I.raw,g.raw)}castRay(A,I,g,B,E,t,o,D,a,s){let n=BA.intoRaw(g.origin),r=BA.intoRaw(g.dir),k=Et.fromRaw(I,this.raw.castRay(A.raw,I.raw,n,r,B,E,t,o,D,a,s));return n.free(),r.free(),k}castRayAndGetNormal(A,I,g,B,E,t,o,D,a,s){let n=BA.intoRaw(g.origin),r=BA.intoRaw(g.dir),k=gi.fromRaw(I,this.raw.castRayAndGetNormal(A.raw,I.raw,n,r,B,E,t,o,D,a,s));return n.free(),r.free(),k}intersectionsWithRay(A,I,g,B,E,t,o,D,a,s,n){let r=BA.intoRaw(g.origin),k=BA.intoRaw(g.dir);this.raw.intersectionsWithRay(A.raw,I.raw,r,k,B,E,G=>t(gi.fromRaw(I,G)),o,D,a,s,n),r.free(),k.free()}intersectionWithShape(A,I,g,B,E,t,o,D,a,s){let n=BA.intoRaw(g),r=EI.intoRaw(B),k=E.intoRaw(),G=this.raw.intersectionWithShape(A.raw,I.raw,n,r,k,t,o,D,a,s);return n.free(),r.free(),k.free(),G}projectPoint(A,I,g,B,E,t,o,D,a){let s=BA.intoRaw(g),n=Ii.fromRaw(I,this.raw.projectPoint(A.raw,I.raw,s,B,E,t,o,D,a));return s.free(),n}projectPointAndGetFeature(A,I,g,B,E,t,o,D){let a=BA.intoRaw(g),s=Ii.fromRaw(I,this.raw.projectPointAndGetFeature(A.raw,I.raw,a,B,E,t,o,D));return a.free(),s}intersectionsWithPoint(A,I,g,B,E,t,o,D,a){let s=BA.intoRaw(g);this.raw.intersectionsWithPoint(A.raw,I.raw,s,B,E,t,o,D,a),s.free()}castShape(A,I,g,B,E,t,o,D,a,s,n,r){let k=BA.intoRaw(g),G=EI.intoRaw(B),S=BA.intoRaw(E),w=t.intoRaw(),M=ii.fromRaw(I,this.raw.castShape(A.raw,I.raw,k,G,S,w,o,D,a,s,n,r));return k.free(),G.free(),S.free(),w.free(),M}intersectionsWithShape(A,I,g,B,E,t,o,D,a,s,n){let r=BA.intoRaw(g),k=EI.intoRaw(B),G=E.intoRaw();this.raw.intersectionsWithShape(A.raw,I.raw,r,k,G,t,o,D,a,s,n),r.free(),k.free(),G.free()}collidersWithAabbIntersectingAabb(A,I,g){let B=BA.intoRaw(A),E=BA.intoRaw(I);this.raw.collidersWithAabbIntersectingAabb(B,E,g),B.free(),E.free()}}class Fa{constructor(A){this.raw=A||new Po}free(){this.raw.free(),this.raw=void 0}serializeAll(A,I,g,B,E,t,o,D,a){let s=BA.intoRaw(A);const n=this.raw.serializeAll(s,I.raw,g.raw,B.raw,E.raw,t.raw,o.raw,D.raw,a.raw);return s.free(),n}deserializeAll(A){return oi.fromRaw(this.raw.deserializeAll(A))}}class sw{constructor(A,I){this.vertices=A,this.colors=I}}class nw{constructor(A){this.raw=A||new bo}free(){this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(A,I,g,B,E){this.raw.render(A.raw,I.raw,g.raw,B.raw,E.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class oi{constructor(A,I,g,B,E,t,o,D,a,s,n,r,k,G){this.gravity=A,this.integrationParameters=new VS(I),this.islands=new Ew(g),this.broadPhase=new iw(B),this.narrowPhase=new ow(E),this.bodies=new PS(t),this.colliders=new ew(o),this.impulseJoints=new $S(D),this.multibodyJoints=new Bw(a),this.ccdSolver=new Qw(s),this.queryPipeline=new Dw(n),this.physicsPipeline=new aw(r),this.serializationPipeline=new Fa(k),this.debugRenderPipeline=new nw(G),this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0}static fromRaw(A){return A?new oi(BA.fromRaw(A.takeGravity()),A.takeIntegrationParameters(),A.takeIslandManager(),A.takeBroadPhase(),A.takeNarrowPhase(),A.takeBodies(),A.takeColliders(),A.takeImpulseJoints(),A.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(A){return new Fa().deserializeAll(A)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new sw(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(A,I){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,A,I),this.queryPipeline.update(this.islands,this.bodies,this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(A){this.integrationParameters.dt=A}get maxVelocityIterations(){return this.integrationParameters.maxVelocityIterations}set maxVelocityIterations(A){this.integrationParameters.maxVelocityIterations=A}get maxVelocityFrictionIterations(){return this.integrationParameters.maxVelocityFrictionIterations}set maxVelocityFrictionIterations(A){this.integrationParameters.maxVelocityFrictionIterations=A}get maxStabilizationIterations(){return this.integrationParameters.maxStabilizationIterations}set maxStabilizationIterations(A){this.integrationParameters.maxStabilizationIterations=A}createRigidBody(A){return this.bodies.createRigidBody(this.colliders,A)}createCollider(A,I){let g=I?I.handle:void 0;return this.colliders.createCollider(this.bodies,A,g)}createImpulseJoint(A,I,g,B){return this.impulseJoints.createJoint(this.bodies,A,I.handle,g.handle,B)}createMultibodyJoint(A,I,g,B){return this.multibodyJoints.createJoint(A,I.handle,g.handle,B)}getRigidBody(A){return this.bodies.get(A)}getCollider(A){return this.colliders.get(A)}getImpulseJoint(A){return this.impulseJoints.get(A)}getMultibodyJoint(A){return this.multibodyJoints.get(A)}removeRigidBody(A){this.bodies&&this.bodies.remove(A.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(A,I){this.colliders&&this.colliders.remove(A.handle,this.islands,this.bodies,I)}removeImpulseJoint(A,I){this.impulseJoints&&this.impulseJoints.remove(A.handle,I)}removeMultibodyJoint(A,I){this.impulseJoints&&this.multibodyJoints.remove(A.handle,I)}forEachCollider(A){this.colliders.forEach(A)}forEachRigidBody(A){this.bodies.forEach(A)}forEachActiveRigidBody(A){this.bodies.forEachActiveRigidBody(this.islands,A)}castRay(A,I,g,B,E,t,o,D){return this.queryPipeline.castRay(this.bodies,this.colliders,A,I,g,B,E,t?t.handle:null,o?o.handle:null,dg(this.colliders,D))}castRayAndGetNormal(A,I,g,B,E,t,o,D){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,A,I,g,B,E,t?t.handle:null,o?o.handle:null,dg(this.colliders,D))}intersectionsWithRay(A,I,g,B,E,t,o,D,a){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,A,I,g,B,E,t,o?o.handle:null,D?D.handle:null,dg(this.colliders,a))}intersectionWithShape(A,I,g,B,E,t,o,D){let a=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,A,I,g,B,E,t?t.handle:null,o?o.handle:null,dg(this.colliders,D));return a!=null?this.colliders.get(a):null}projectPoint(A,I,g,B,E,t,o){return this.queryPipeline.projectPoint(this.bodies,this.colliders,A,I,g,B,E?E.handle:null,t?t.handle:null,dg(this.colliders,o))}projectPointAndGetFeature(A,I,g,B,E,t){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,A,I,g,B?B.handle:null,E?E.handle:null,dg(this.colliders,t))}intersectionsWithPoint(A,I,g,B,E,t,o){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,A,dg(this.colliders,I),g,B,E?E.handle:null,t?t.handle:null,dg(this.colliders,o))}castShape(A,I,g,B,E,t,o,D,a,s){return this.queryPipeline.castShape(this.bodies,this.colliders,A,I,g,B,E,t,o,D?D.handle:null,a?a.handle:null,dg(this.colliders,s))}intersectionsWithShape(A,I,g,B,E,t,o,D,a){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,A,I,g,dg(this.colliders,B),E,t,o?o.handle:null,D?D.handle:null,dg(this.colliders,a))}collidersWithAabbIntersectingAabb(A,I,g){this.queryPipeline.collidersWithAabbIntersectingAabb(A,I,dg(this.colliders,g))}contactsWith(A,I){this.narrowPhase.contactsWith(A.handle,dg(this.colliders,I))}intersectionsWith(A,I){this.narrowPhase.intersectionsWith(A.handle,dg(this.colliders,I))}contactPair(A,I,g){this.narrowPhase.contactPair(A.handle,I.handle,g)}intersectionPair(A,I){return this.narrowPhase.intersectionPair(A.handle,I.handle)}}function dg(i,A){return I=>A?A(i.get(I)):void 0}(function(i){i[i.COLLISION_EVENTS=1]="COLLISION_EVENTS",i[i.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(la||(la={}));class hw{free(){this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return BA.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return BA.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class DU{constructor(A,I){this.raw=I||new XE(A)}free(){this.raw.free(),this.raw=void 0}drainCollisionEvents(A){this.raw.drainCollisionEvents(A)}drainContactForceEvents(A){let I=new hw;this.raw.drainContactForceEvents(g=>{I.raw=g,A(I),I.free()})}clear(){this.raw.clear()}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const DD="145",pQ={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},dQ={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},GU=0,vn=1,cU=2,ww=1,kU=2,mE=3,iE=0,DC=1,iB=2,oB=0,$Q=1,Pn=2,Vn=3,_n=4,lU=5,VQ=100,yU=101,MU=102,jn=103,zn=104,UU=200,KU=201,FU=202,NU=203,rw=204,Gw=205,JU=206,RU=207,qU=208,pU=209,dU=210,LU=0,YU=1,fU=2,Na=3,uU=4,HU=5,mU=6,TU=7,sD=0,xU=1,OU=2,tB=0,bU=1,ZU=2,WU=3,vU=4,PU=5,cw=300,oE=301,tE=302,Ja=303,Ra=304,it=306,qa=1e3,UC=1001,pa=1002,Lg=1003,Xn=1004,$n=1005,oC=1006,VU=1007,ot=1008,EQ=1009,_U=1010,jU=1011,kw=1012,zU=1013,IQ=1014,gQ=1015,Ci=1016,XU=1017,$U=1018,AE=1020,A0=1021,I0=1022,HC=1023,g0=1024,C0=1025,BQ=1026,eE=1027,B0=1028,Q0=1029,E0=1030,i0=1031,o0=1033,Je=33776,Re=33777,qe=33778,pe=33779,Ah=35840,Ih=35841,gh=35842,Ch=35843,t0=36196,Bh=37492,Qh=37496,Eh=37808,ih=37809,oh=37810,th=37811,eh=37812,ah=37813,Dh=37814,sh=37815,nh=37816,hh=37817,Sh=37818,wh=37819,rh=37820,Gh=37821,ch=36492,iQ=3e3,PI=3001,e0=3200,a0=3201,lw=0,D0=1,QB="srgb",CQ="srgb-linear",de=7680,s0=519,kh=35044,lh="300 es",da=1035;class aQ{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const B=this._listeners[A];if(B!==void 0){const E=B.indexOf(I);E!==-1&&B.splice(E,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const B=g.slice(0);for(let E=0,t=B.length;E<t;E++)B[E].call(this,A);A.target=null}}}const kg=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Le=Math.PI/180,yh=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(kg[i&255]+kg[i>>8&255]+kg[i>>16&255]+kg[i>>24&255]+"-"+kg[A&255]+kg[A>>8&255]+"-"+kg[A>>16&15|64]+kg[A>>24&255]+"-"+kg[I&63|128]+kg[I>>8&255]+"-"+kg[I>>16&255]+kg[I>>24&255]+kg[g&255]+kg[g>>8&255]+kg[g>>16&255]+kg[g>>24&255]).toLowerCase()}function Yg(i,A,I){return Math.max(A,Math.min(I,i))}function n0(i,A){return(i%A+A)%A}function Ye(i,A,I){return(1-I)*i+I*A}function Mh(i){return(i&i-1)===0&&i!==0}function La(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Io(i,A){switch(A.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zg(i,A){switch(A.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class iI{constructor(A=0,I=0){iI.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6],this.y=B[1]*I+B[4]*g+B[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),B=Math.sin(I),E=this.x-A.x,t=this.y-A.y;return this.x=E*g-t*B+A.x,this.y=E*B+t*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class aC{constructor(){aC.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,B,E,t,o,D,a){const s=this.elements;return s[0]=A,s[1]=B,s[2]=o,s[3]=I,s[4]=E,s[5]=D,s[6]=g,s[7]=t,s[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,E=this.elements,t=g[0],o=g[3],D=g[6],a=g[1],s=g[4],n=g[7],r=g[2],k=g[5],G=g[8],S=B[0],w=B[3],M=B[6],J=B[1],R=B[4],F=B[7],c=B[2],L=B[5],O=B[8];return E[0]=t*S+o*J+D*c,E[3]=t*w+o*R+D*L,E[6]=t*M+o*F+D*O,E[1]=a*S+s*J+n*c,E[4]=a*w+s*R+n*L,E[7]=a*M+s*F+n*O,E[2]=r*S+k*J+G*c,E[5]=r*w+k*R+G*L,E[8]=r*M+k*F+G*O,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],B=A[2],E=A[3],t=A[4],o=A[5],D=A[6],a=A[7],s=A[8];return I*t*s-I*o*a-g*E*s+g*o*D+B*E*a-B*t*D}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],E=A[3],t=A[4],o=A[5],D=A[6],a=A[7],s=A[8],n=s*t-o*a,r=o*D-s*E,k=a*E-t*D,G=I*n+g*r+B*k;if(G===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/G;return A[0]=n*S,A[1]=(B*a-s*g)*S,A[2]=(o*g-B*t)*S,A[3]=r*S,A[4]=(s*I-B*D)*S,A[5]=(B*E-o*I)*S,A[6]=k*S,A[7]=(g*D-a*I)*S,A[8]=(t*I-g*E)*S,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,B,E,t,o){const D=Math.cos(E),a=Math.sin(E);return this.set(g*D,g*a,-g*(D*t+a*o)+t+A,-B*a,B*D,-B*(-a*t+D*o)+o+I,0,0,1),this}scale(A,I){const g=this.elements;return g[0]*=A,g[3]*=A,g[6]*=A,g[1]*=I,g[4]*=I,g[7]*=I,this}rotate(A){const I=Math.cos(A),g=Math.sin(A),B=this.elements,E=B[0],t=B[3],o=B[6],D=B[1],a=B[4],s=B[7];return B[0]=I*E+g*D,B[3]=I*t+g*a,B[6]=I*o+g*s,B[1]=-g*E+I*D,B[4]=-g*t+I*a,B[7]=-g*o+I*s,this}translate(A,I){const g=this.elements;return g[0]+=A*g[2],g[3]+=A*g[5],g[6]+=A*g[8],g[1]+=I*g[2],g[4]+=I*g[5],g[7]+=I*g[8],this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<9;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}function yw(i){for(let A=i.length-1;A>=0;--A)if(i[A]>=65535)return!0;return!1}function zo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function QQ(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fe={[QB]:{[CQ]:QQ},[CQ]:{[QB]:Lo}},GC={legacyMode:!0,get workingColorSpace(){return CQ},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,A,I){if(this.legacyMode||A===I||!A||!I)return i;if(fe[A]&&fe[A][I]!==void 0){const g=fe[A][I];return i.r=g(i.r),i.g=g(i.g),i.b=g(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,A){return this.convert(i,this.workingColorSpace,A)},toWorkingColorSpace:function(i,A){return this.convert(i,A,this.workingColorSpace)}},Mw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qg={r:0,g:0,b:0},cC={h:0,s:0,l:0},go={h:0,s:0,l:0};function ue(i,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?i+(A-i)*6*I:I<1/2?A:I<2/3?i+(A-i)*6*(2/3-I):i}function Co(i,A){return A.r=i.r,A.g=i.g,A.b=i.b,A}class cI{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=QB){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,GC.toWorkingColorSpace(this,I),this}setRGB(A,I,g,B=CQ){return this.r=A,this.g=I,this.b=g,GC.toWorkingColorSpace(this,B),this}setHSL(A,I,g,B=CQ){if(A=n0(A,1),I=Yg(I,0,1),g=Yg(g,0,1),I===0)this.r=this.g=this.b=g;else{const E=g<=.5?g*(1+I):g+I-g*I,t=2*g-E;this.r=ue(t,E,A+1/3),this.g=ue(t,E,A),this.b=ue(t,E,A-1/3)}return GC.toWorkingColorSpace(this,B),this}setStyle(A,I=QB){function g(E){E!==void 0&&parseFloat(E)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let B;if(B=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let E;const t=B[1],o=B[2];switch(t){case"rgb":case"rgba":if(E=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(E[1],10))/255,this.g=Math.min(255,parseInt(E[2],10))/255,this.b=Math.min(255,parseInt(E[3],10))/255,GC.toWorkingColorSpace(this,I),g(E[4]),this;if(E=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(E[1],10))/100,this.g=Math.min(100,parseInt(E[2],10))/100,this.b=Math.min(100,parseInt(E[3],10))/100,GC.toWorkingColorSpace(this,I),g(E[4]),this;break;case"hsl":case"hsla":if(E=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const D=parseFloat(E[1])/360,a=parseFloat(E[2])/100,s=parseFloat(E[3])/100;return g(E[4]),this.setHSL(D,a,s,I)}break}}else if(B=/^\#([A-Fa-f\d]+)$/.exec(A)){const E=B[1],t=E.length;if(t===3)return this.r=parseInt(E.charAt(0)+E.charAt(0),16)/255,this.g=parseInt(E.charAt(1)+E.charAt(1),16)/255,this.b=parseInt(E.charAt(2)+E.charAt(2),16)/255,GC.toWorkingColorSpace(this,I),this;if(t===6)return this.r=parseInt(E.charAt(0)+E.charAt(1),16)/255,this.g=parseInt(E.charAt(2)+E.charAt(3),16)/255,this.b=parseInt(E.charAt(4)+E.charAt(5),16)/255,GC.toWorkingColorSpace(this,I),this}return A&&A.length>0?this.setColorName(A,I):this}setColorName(A,I=QB){const g=Mw[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=QQ(A.r),this.g=QQ(A.g),this.b=QQ(A.b),this}copyLinearToSRGB(A){return this.r=Lo(A.r),this.g=Lo(A.g),this.b=Lo(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=QB){return GC.fromWorkingColorSpace(Co(this,Qg),A),Yg(Qg.r*255,0,255)<<16^Yg(Qg.g*255,0,255)<<8^Yg(Qg.b*255,0,255)<<0}getHexString(A=QB){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=CQ){GC.fromWorkingColorSpace(Co(this,Qg),I);const g=Qg.r,B=Qg.g,E=Qg.b,t=Math.max(g,B,E),o=Math.min(g,B,E);let D,a;const s=(o+t)/2;if(o===t)D=0,a=0;else{const n=t-o;switch(a=s<=.5?n/(t+o):n/(2-t-o),t){case g:D=(B-E)/n+(B<E?6:0);break;case B:D=(E-g)/n+2;break;case E:D=(g-B)/n+4;break}D/=6}return A.h=D,A.s=a,A.l=s,A}getRGB(A,I=CQ){return GC.fromWorkingColorSpace(Co(this,Qg),I),A.r=Qg.r,A.g=Qg.g,A.b=Qg.b,A}getStyle(A=QB){return GC.fromWorkingColorSpace(Co(this,Qg),A),A!==QB?`color(${A} ${Qg.r} ${Qg.g} ${Qg.b})`:`rgb(${Qg.r*255|0},${Qg.g*255|0},${Qg.b*255|0})`}offsetHSL(A,I,g){return this.getHSL(cC),cC.h+=A,cC.s+=I,cC.l+=g,this.setHSL(cC.h,cC.s,cC.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(cC),A.getHSL(go);const g=Ye(cC.h,go.h,I),B=Ye(cC.s,go.s,I),E=Ye(cC.l,go.l,I);return this.setHSL(g,B,E),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}cI.NAMES=Mw;let LQ;class Uw{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{LQ===void 0&&(LQ=zo("canvas")),LQ.width=A.width,LQ.height=A.height;const g=LQ.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=LQ}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=zo("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const B=g.getImageData(0,0,A.width,A.height),E=B.data;for(let t=0;t<E.length;t++)E[t]=QQ(E[t]/255)*255;return g.putImageData(B,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(QQ(I[g]/255)*255):I[g]=QQ(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class Kw{constructor(A=null){this.isSource=!0,this.uuid=ti(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},B=this.data;if(B!==null){let E;if(Array.isArray(B)){E=[];for(let t=0,o=B.length;t<o;t++)B[t].isDataTexture?E.push(He(B[t].image)):E.push(He(B[t]))}else E=He(B);g.url=E}return I||(A.images[this.uuid]=g),g}}function He(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uw.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let h0=0;class JC extends aQ{constructor(A=JC.DEFAULT_IMAGE,I=JC.DEFAULT_MAPPING,g=UC,B=UC,E=oC,t=ot,o=HC,D=EQ,a=1,s=iQ){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=ti(),this.name="",this.source=new Kw(A),this.mipmaps=[],this.mapping=I,this.wrapS=g,this.wrapT=B,this.magFilter=E,this.minFilter=t,this.anisotropy=a,this.format=o,this.internalFormat=null,this.type=D,this.offset=new iI(0,0),this.repeat=new iI(1,1),this.center=new iI(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new aC,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=s,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==cw)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case qa:A.x=A.x-Math.floor(A.x);break;case UC:A.x=A.x<0?0:1;break;case pa:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case qa:A.y=A.y-Math.floor(A.y);break;case UC:A.y=A.y<0?0:1;break;case pa:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}JC.DEFAULT_IMAGE=null;JC.DEFAULT_MAPPING=cw;class Dg{constructor(A=0,I=0,g=0,B=1){Dg.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=B}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,B){return this.x=A,this.y=I,this.z=g,this.w=B,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,E=this.w,t=A.elements;return this.x=t[0]*I+t[4]*g+t[8]*B+t[12]*E,this.y=t[1]*I+t[5]*g+t[9]*B+t[13]*E,this.z=t[2]*I+t[6]*g+t[10]*B+t[14]*E,this.w=t[3]*I+t[7]*g+t[11]*B+t[15]*E,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,B,E;const D=A.elements,a=D[0],s=D[4],n=D[8],r=D[1],k=D[5],G=D[9],S=D[2],w=D[6],M=D[10];if(Math.abs(s-r)<.01&&Math.abs(n-S)<.01&&Math.abs(G-w)<.01){if(Math.abs(s+r)<.1&&Math.abs(n+S)<.1&&Math.abs(G+w)<.1&&Math.abs(a+k+M-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const R=(a+1)/2,F=(k+1)/2,c=(M+1)/2,L=(s+r)/4,O=(n+S)/4,U=(G+w)/4;return R>F&&R>c?R<.01?(g=0,B=.707106781,E=.707106781):(g=Math.sqrt(R),B=L/g,E=O/g):F>c?F<.01?(g=.707106781,B=0,E=.707106781):(B=Math.sqrt(F),g=L/B,E=U/B):c<.01?(g=.707106781,B=.707106781,E=0):(E=Math.sqrt(c),g=O/E,B=U/E),this.set(g,B,E,I),this}let J=Math.sqrt((w-G)*(w-G)+(n-S)*(n-S)+(r-s)*(r-s));return Math.abs(J)<.001&&(J=1),this.x=(w-G)/J,this.y=(n-S)/J,this.z=(r-s)/J,this.w=Math.acos((a+k+M-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YB extends aQ{constructor(A,I,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new Dg(0,0,A,I),this.scissorTest=!1,this.viewport=new Dg(0,0,A,I);const B={width:A,height:I,depth:1};this.texture=new JC(B,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:oC,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Kw(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fw extends JC{constructor(A=null,I=1,g=1,B=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=Lg,this.minFilter=Lg,this.wrapR=UC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S0 extends JC{constructor(A=null,I=1,g=1,B=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=Lg,this.minFilter=Lg,this.wrapR=UC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oQ{constructor(A=0,I=0,g=0,B=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=B}static slerpFlat(A,I,g,B,E,t,o){let D=g[B+0],a=g[B+1],s=g[B+2],n=g[B+3];const r=E[t+0],k=E[t+1],G=E[t+2],S=E[t+3];if(o===0){A[I+0]=D,A[I+1]=a,A[I+2]=s,A[I+3]=n;return}if(o===1){A[I+0]=r,A[I+1]=k,A[I+2]=G,A[I+3]=S;return}if(n!==S||D!==r||a!==k||s!==G){let w=1-o;const M=D*r+a*k+s*G+n*S,J=M>=0?1:-1,R=1-M*M;if(R>Number.EPSILON){const c=Math.sqrt(R),L=Math.atan2(c,M*J);w=Math.sin(w*L)/c,o=Math.sin(o*L)/c}const F=o*J;if(D=D*w+r*F,a=a*w+k*F,s=s*w+G*F,n=n*w+S*F,w===1-o){const c=1/Math.sqrt(D*D+a*a+s*s+n*n);D*=c,a*=c,s*=c,n*=c}}A[I]=D,A[I+1]=a,A[I+2]=s,A[I+3]=n}static multiplyQuaternionsFlat(A,I,g,B,E,t){const o=g[B],D=g[B+1],a=g[B+2],s=g[B+3],n=E[t],r=E[t+1],k=E[t+2],G=E[t+3];return A[I]=o*G+s*n+D*k-a*r,A[I+1]=D*G+s*r+a*n-o*k,A[I+2]=a*G+s*k+o*r-D*n,A[I+3]=s*G-o*n-D*r-a*k,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,B){return this._x=A,this._y=I,this._z=g,this._w=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,B=A._y,E=A._z,t=A._order,o=Math.cos,D=Math.sin,a=o(g/2),s=o(B/2),n=o(E/2),r=D(g/2),k=D(B/2),G=D(E/2);switch(t){case"XYZ":this._x=r*s*n+a*k*G,this._y=a*k*n-r*s*G,this._z=a*s*G+r*k*n,this._w=a*s*n-r*k*G;break;case"YXZ":this._x=r*s*n+a*k*G,this._y=a*k*n-r*s*G,this._z=a*s*G-r*k*n,this._w=a*s*n+r*k*G;break;case"ZXY":this._x=r*s*n-a*k*G,this._y=a*k*n+r*s*G,this._z=a*s*G+r*k*n,this._w=a*s*n-r*k*G;break;case"ZYX":this._x=r*s*n-a*k*G,this._y=a*k*n+r*s*G,this._z=a*s*G-r*k*n,this._w=a*s*n+r*k*G;break;case"YZX":this._x=r*s*n+a*k*G,this._y=a*k*n+r*s*G,this._z=a*s*G-r*k*n,this._w=a*s*n-r*k*G;break;case"XZY":this._x=r*s*n-a*k*G,this._y=a*k*n-r*s*G,this._z=a*s*G+r*k*n,this._w=a*s*n+r*k*G;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+t)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,B=Math.sin(g);return this._x=A.x*B,this._y=A.y*B,this._z=A.z*B,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],B=I[4],E=I[8],t=I[1],o=I[5],D=I[9],a=I[2],s=I[6],n=I[10],r=g+o+n;if(r>0){const k=.5/Math.sqrt(r+1);this._w=.25/k,this._x=(s-D)*k,this._y=(E-a)*k,this._z=(t-B)*k}else if(g>o&&g>n){const k=2*Math.sqrt(1+g-o-n);this._w=(s-D)/k,this._x=.25*k,this._y=(B+t)/k,this._z=(E+a)/k}else if(o>n){const k=2*Math.sqrt(1+o-g-n);this._w=(E-a)/k,this._x=(B+t)/k,this._y=.25*k,this._z=(D+s)/k}else{const k=2*Math.sqrt(1+n-g-o);this._w=(t-B)/k,this._x=(E+a)/k,this._y=(D+s)/k,this._z=.25*k}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Yg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const B=Math.min(1,I/g);return this.slerp(A,B),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,B=A._y,E=A._z,t=A._w,o=I._x,D=I._y,a=I._z,s=I._w;return this._x=g*s+t*o+B*a-E*D,this._y=B*s+t*D+E*o-g*a,this._z=E*s+t*a+g*D-B*o,this._w=t*s-g*o-B*D-E*a,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,B=this._y,E=this._z,t=this._w;let o=t*A._w+g*A._x+B*A._y+E*A._z;if(o<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,o=-o):this.copy(A),o>=1)return this._w=t,this._x=g,this._y=B,this._z=E,this;const D=1-o*o;if(D<=Number.EPSILON){const k=1-I;return this._w=k*t+I*this._w,this._x=k*g+I*this._x,this._y=k*B+I*this._y,this._z=k*E+I*this._z,this.normalize(),this._onChangeCallback(),this}const a=Math.sqrt(D),s=Math.atan2(a,o),n=Math.sin((1-I)*s)/a,r=Math.sin(I*s)/a;return this._w=t*n+this._w*r,this._x=g*n+this._x*r,this._y=B*n+this._y*r,this._z=E*n+this._z*r,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),B=2*Math.PI*Math.random(),E=2*Math.PI*Math.random();return this.set(I*Math.cos(B),g*Math.sin(E),g*Math.cos(E),I*Math.sin(B))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class IA{constructor(A=0,I=0,g=0){IA.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Uh.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Uh.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,B=this.z,E=A.elements;return this.x=E[0]*I+E[3]*g+E[6]*B,this.y=E[1]*I+E[4]*g+E[7]*B,this.z=E[2]*I+E[5]*g+E[8]*B,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,E=A.elements,t=1/(E[3]*I+E[7]*g+E[11]*B+E[15]);return this.x=(E[0]*I+E[4]*g+E[8]*B+E[12])*t,this.y=(E[1]*I+E[5]*g+E[9]*B+E[13])*t,this.z=(E[2]*I+E[6]*g+E[10]*B+E[14])*t,this}applyQuaternion(A){const I=this.x,g=this.y,B=this.z,E=A.x,t=A.y,o=A.z,D=A.w,a=D*I+t*B-o*g,s=D*g+o*I-E*B,n=D*B+E*g-t*I,r=-E*I-t*g-o*B;return this.x=a*D+r*-E+s*-o-n*-t,this.y=s*D+r*-t+n*-E-a*-o,this.z=n*D+r*-o+a*-t-s*-E,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,B=this.z,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*B,this.y=E[1]*I+E[5]*g+E[9]*B,this.z=E[2]*I+E[6]*g+E[10]*B,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,B=A.y,E=A.z,t=I.x,o=I.y,D=I.z;return this.x=B*D-E*o,this.y=E*t-g*D,this.z=g*o-B*t,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return me.copy(this).projectOnVector(A),this.sub(me)}reflect(A){return this.sub(me.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Yg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,B=this.z-A.z;return I*I+g*g+B*B}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const B=Math.sin(I)*A;return this.x=B*Math.sin(g),this.y=Math.cos(I)*A,this.z=B*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),B=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=B,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const me=new IA,Uh=new oQ;class ei{constructor(A=new IA(1/0,1/0,1/0),I=new IA(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){let I=1/0,g=1/0,B=1/0,E=-1/0,t=-1/0,o=-1/0;for(let D=0,a=A.length;D<a;D+=3){const s=A[D],n=A[D+1],r=A[D+2];s<I&&(I=s),n<g&&(g=n),r<B&&(B=r),s>E&&(E=s),n>t&&(t=n),r>o&&(o=r)}return this.min.set(I,g,B),this.max.set(E,t,o),this}setFromBufferAttribute(A){let I=1/0,g=1/0,B=1/0,E=-1/0,t=-1/0,o=-1/0;for(let D=0,a=A.count;D<a;D++){const s=A.getX(D),n=A.getY(D),r=A.getZ(D);s<I&&(I=s),n<g&&(g=n),r<B&&(B=r),s>E&&(E=s),n>t&&(t=n),r>o&&(o=r)}return this.min.set(I,g,B),this.max.set(E,t,o),this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=vB.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0)if(I&&g.attributes!=null&&g.attributes.position!==void 0){const E=g.attributes.position;for(let t=0,o=E.count;t<o;t++)vB.fromBufferAttribute(E,t).applyMatrix4(A.matrixWorld),this.expandByPoint(vB)}else g.boundingBox===null&&g.computeBoundingBox(),Te.copy(g.boundingBox),Te.applyMatrix4(A.matrixWorld),this.union(Te);const B=A.children;for(let E=0,t=B.length;E<t;E++)this.expandByObject(B[E],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,vB),vB.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(LE),Bo.subVectors(this.max,LE),YQ.subVectors(A.a,LE),fQ.subVectors(A.b,LE),uQ.subVectors(A.c,LE),MB.subVectors(fQ,YQ),UB.subVectors(uQ,fQ),PB.subVectors(YQ,uQ);let I=[0,-MB.z,MB.y,0,-UB.z,UB.y,0,-PB.z,PB.y,MB.z,0,-MB.x,UB.z,0,-UB.x,PB.z,0,-PB.x,-MB.y,MB.x,0,-UB.y,UB.x,0,-PB.y,PB.x,0];return!xe(I,YQ,fQ,uQ,Bo)||(I=[1,0,0,0,1,0,0,0,1],!xe(I,YQ,fQ,uQ,Bo))?!1:(Qo.crossVectors(MB,UB),I=[Qo.x,Qo.y,Qo.z],xe(I,YQ,fQ,uQ,Bo))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return vB.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(vB).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(AB[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),AB[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),AB[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),AB[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),AB[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),AB[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),AB[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),AB[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(AB),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const AB=[new IA,new IA,new IA,new IA,new IA,new IA,new IA,new IA],vB=new IA,Te=new ei,YQ=new IA,fQ=new IA,uQ=new IA,MB=new IA,UB=new IA,PB=new IA,LE=new IA,Bo=new IA,Qo=new IA,VB=new IA;function xe(i,A,I,g,B){for(let E=0,t=i.length-3;E<=t;E+=3){VB.fromArray(i,E);const o=B.x*Math.abs(VB.x)+B.y*Math.abs(VB.y)+B.z*Math.abs(VB.z),D=A.dot(VB),a=I.dot(VB),s=g.dot(VB);if(Math.max(-Math.max(D,a,s),Math.min(D,a,s))>o)return!1}return!0}const w0=new ei,Kh=new IA,Eo=new IA,Oe=new IA;class tt{constructor(A=new IA,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):w0.setFromPoints(A).getCenter(g);let B=0;for(let E=0,t=A.length;E<t;E++)B=Math.max(B,g.distanceToSquared(A[E]));return this.radius=Math.sqrt(B),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;Oe.subVectors(A,this.center);const I=Oe.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),B=(g-this.radius)*.5;this.center.add(Oe.multiplyScalar(B/g)),this.radius+=B}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?Eo.set(0,0,1).multiplyScalar(A.radius):Eo.subVectors(A.center,this.center).normalize().multiplyScalar(A.radius),this.expandByPoint(Kh.copy(A.center).add(Eo)),this.expandByPoint(Kh.copy(A.center).sub(Eo)),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const IB=new IA,be=new IA,io=new IA,KB=new IA,Ze=new IA,oo=new IA,We=new IA;class Nw{constructor(A=new IA,I=new IA(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,IB)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.direction).multiplyScalar(g).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=IB.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(IB.copy(this.direction).multiplyScalar(I).add(this.origin),IB.distanceToSquared(A))}distanceSqToSegment(A,I,g,B){be.copy(A).add(I).multiplyScalar(.5),io.copy(I).sub(A).normalize(),KB.copy(this.origin).sub(be);const E=A.distanceTo(I)*.5,t=-this.direction.dot(io),o=KB.dot(this.direction),D=-KB.dot(io),a=KB.lengthSq(),s=Math.abs(1-t*t);let n,r,k,G;if(s>0)if(n=t*D-o,r=t*o-D,G=E*s,n>=0)if(r>=-G)if(r<=G){const S=1/s;n*=S,r*=S,k=n*(n+t*r+2*o)+r*(t*n+r+2*D)+a}else r=E,n=Math.max(0,-(t*r+o)),k=-n*n+r*(r+2*D)+a;else r=-E,n=Math.max(0,-(t*r+o)),k=-n*n+r*(r+2*D)+a;else r<=-G?(n=Math.max(0,-(-t*E+o)),r=n>0?-E:Math.min(Math.max(-E,-D),E),k=-n*n+r*(r+2*D)+a):r<=G?(n=0,r=Math.min(Math.max(-E,-D),E),k=r*(r+2*D)+a):(n=Math.max(0,-(t*E+o)),r=n>0?E:Math.min(Math.max(-E,-D),E),k=-n*n+r*(r+2*D)+a);else r=t>0?-E:E,n=Math.max(0,-(t*r+o)),k=-n*n+r*(r+2*D)+a;return g&&g.copy(this.direction).multiplyScalar(n).add(this.origin),B&&B.copy(io).multiplyScalar(r).add(be),k}intersectSphere(A,I){IB.subVectors(A.center,this.origin);const g=IB.dot(this.direction),B=IB.dot(IB)-g*g,E=A.radius*A.radius;if(B>E)return null;const t=Math.sqrt(E-B),o=g-t,D=g+t;return o<0&&D<0?null:o<0?this.at(D,I):this.at(o,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,B,E,t,o,D;const a=1/this.direction.x,s=1/this.direction.y,n=1/this.direction.z,r=this.origin;return a>=0?(g=(A.min.x-r.x)*a,B=(A.max.x-r.x)*a):(g=(A.max.x-r.x)*a,B=(A.min.x-r.x)*a),s>=0?(E=(A.min.y-r.y)*s,t=(A.max.y-r.y)*s):(E=(A.max.y-r.y)*s,t=(A.min.y-r.y)*s),g>t||E>B||((E>g||g!==g)&&(g=E),(t<B||B!==B)&&(B=t),n>=0?(o=(A.min.z-r.z)*n,D=(A.max.z-r.z)*n):(o=(A.max.z-r.z)*n,D=(A.min.z-r.z)*n),g>D||o>B)||((o>g||g!==g)&&(g=o),(D<B||B!==B)&&(B=D),B<0)?null:this.at(g>=0?g:B,I)}intersectsBox(A){return this.intersectBox(A,IB)!==null}intersectTriangle(A,I,g,B,E){Ze.subVectors(I,A),oo.subVectors(g,A),We.crossVectors(Ze,oo);let t=this.direction.dot(We),o;if(t>0){if(B)return null;o=1}else if(t<0)o=-1,t=-t;else return null;KB.subVectors(this.origin,A);const D=o*this.direction.dot(oo.crossVectors(KB,oo));if(D<0)return null;const a=o*this.direction.dot(Ze.cross(KB));if(a<0||D+a>t)return null;const s=-o*KB.dot(We);return s<0?null:this.at(s/t,E)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gg{constructor(){gg.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,I,g,B,E,t,o,D,a,s,n,r,k,G,S,w){const M=this.elements;return M[0]=A,M[4]=I,M[8]=g,M[12]=B,M[1]=E,M[5]=t,M[9]=o,M[13]=D,M[2]=a,M[6]=s,M[10]=n,M[14]=r,M[3]=k,M[7]=G,M[11]=S,M[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gg().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,B=1/HQ.setFromMatrixColumn(A,0).length(),E=1/HQ.setFromMatrixColumn(A,1).length(),t=1/HQ.setFromMatrixColumn(A,2).length();return I[0]=g[0]*B,I[1]=g[1]*B,I[2]=g[2]*B,I[3]=0,I[4]=g[4]*E,I[5]=g[5]*E,I[6]=g[6]*E,I[7]=0,I[8]=g[8]*t,I[9]=g[9]*t,I[10]=g[10]*t,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,B=A.y,E=A.z,t=Math.cos(g),o=Math.sin(g),D=Math.cos(B),a=Math.sin(B),s=Math.cos(E),n=Math.sin(E);if(A.order==="XYZ"){const r=t*s,k=t*n,G=o*s,S=o*n;I[0]=D*s,I[4]=-D*n,I[8]=a,I[1]=k+G*a,I[5]=r-S*a,I[9]=-o*D,I[2]=S-r*a,I[6]=G+k*a,I[10]=t*D}else if(A.order==="YXZ"){const r=D*s,k=D*n,G=a*s,S=a*n;I[0]=r+S*o,I[4]=G*o-k,I[8]=t*a,I[1]=t*n,I[5]=t*s,I[9]=-o,I[2]=k*o-G,I[6]=S+r*o,I[10]=t*D}else if(A.order==="ZXY"){const r=D*s,k=D*n,G=a*s,S=a*n;I[0]=r-S*o,I[4]=-t*n,I[8]=G+k*o,I[1]=k+G*o,I[5]=t*s,I[9]=S-r*o,I[2]=-t*a,I[6]=o,I[10]=t*D}else if(A.order==="ZYX"){const r=t*s,k=t*n,G=o*s,S=o*n;I[0]=D*s,I[4]=G*a-k,I[8]=r*a+S,I[1]=D*n,I[5]=S*a+r,I[9]=k*a-G,I[2]=-a,I[6]=o*D,I[10]=t*D}else if(A.order==="YZX"){const r=t*D,k=t*a,G=o*D,S=o*a;I[0]=D*s,I[4]=S-r*n,I[8]=G*n+k,I[1]=n,I[5]=t*s,I[9]=-o*s,I[2]=-a*s,I[6]=k*n+G,I[10]=r-S*n}else if(A.order==="XZY"){const r=t*D,k=t*a,G=o*D,S=o*a;I[0]=D*s,I[4]=-n,I[8]=a*s,I[1]=r*n+S,I[5]=t*s,I[9]=k*n-G,I[2]=G*n-k,I[6]=o*s,I[10]=S*n+r}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(r0,A,G0)}lookAt(A,I,g){const B=this.elements;return Wg.subVectors(A,I),Wg.lengthSq()===0&&(Wg.z=1),Wg.normalize(),FB.crossVectors(g,Wg),FB.lengthSq()===0&&(Math.abs(g.z)===1?Wg.x+=1e-4:Wg.z+=1e-4,Wg.normalize(),FB.crossVectors(g,Wg)),FB.normalize(),to.crossVectors(Wg,FB),B[0]=FB.x,B[4]=to.x,B[8]=Wg.x,B[1]=FB.y,B[5]=to.y,B[9]=Wg.y,B[2]=FB.z,B[6]=to.z,B[10]=Wg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,E=this.elements,t=g[0],o=g[4],D=g[8],a=g[12],s=g[1],n=g[5],r=g[9],k=g[13],G=g[2],S=g[6],w=g[10],M=g[14],J=g[3],R=g[7],F=g[11],c=g[15],L=B[0],O=B[4],U=B[8],u=B[12],K=B[1],_=B[5],f=B[9],N=B[13],d=B[2],x=B[6],X=B[10],W=B[14],b=B[3],H=B[7],m=B[11],tA=B[15];return E[0]=t*L+o*K+D*d+a*b,E[4]=t*O+o*_+D*x+a*H,E[8]=t*U+o*f+D*X+a*m,E[12]=t*u+o*N+D*W+a*tA,E[1]=s*L+n*K+r*d+k*b,E[5]=s*O+n*_+r*x+k*H,E[9]=s*U+n*f+r*X+k*m,E[13]=s*u+n*N+r*W+k*tA,E[2]=G*L+S*K+w*d+M*b,E[6]=G*O+S*_+w*x+M*H,E[10]=G*U+S*f+w*X+M*m,E[14]=G*u+S*N+w*W+M*tA,E[3]=J*L+R*K+F*d+c*b,E[7]=J*O+R*_+F*x+c*H,E[11]=J*U+R*f+F*X+c*m,E[15]=J*u+R*N+F*W+c*tA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],B=A[8],E=A[12],t=A[1],o=A[5],D=A[9],a=A[13],s=A[2],n=A[6],r=A[10],k=A[14],G=A[3],S=A[7],w=A[11],M=A[15];return G*(+E*D*n-B*a*n-E*o*r+g*a*r+B*o*k-g*D*k)+S*(+I*D*k-I*a*r+E*t*r-B*t*k+B*a*s-E*D*s)+w*(+I*a*n-I*o*k-E*t*n+g*t*k+E*o*s-g*a*s)+M*(-B*o*s-I*D*n+I*o*r+B*t*n-g*t*r+g*D*s)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const B=this.elements;return A.isVector3?(B[12]=A.x,B[13]=A.y,B[14]=A.z):(B[12]=A,B[13]=I,B[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],E=A[3],t=A[4],o=A[5],D=A[6],a=A[7],s=A[8],n=A[9],r=A[10],k=A[11],G=A[12],S=A[13],w=A[14],M=A[15],J=n*w*a-S*r*a+S*D*k-o*w*k-n*D*M+o*r*M,R=G*r*a-s*w*a-G*D*k+t*w*k+s*D*M-t*r*M,F=s*S*a-G*n*a+G*o*k-t*S*k-s*o*M+t*n*M,c=G*n*D-s*S*D-G*o*r+t*S*r+s*o*w-t*n*w,L=I*J+g*R+B*F+E*c;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return A[0]=J*O,A[1]=(S*r*E-n*w*E-S*B*k+g*w*k+n*B*M-g*r*M)*O,A[2]=(o*w*E-S*D*E+S*B*a-g*w*a-o*B*M+g*D*M)*O,A[3]=(n*D*E-o*r*E-n*B*a+g*r*a+o*B*k-g*D*k)*O,A[4]=R*O,A[5]=(s*w*E-G*r*E+G*B*k-I*w*k-s*B*M+I*r*M)*O,A[6]=(G*D*E-t*w*E-G*B*a+I*w*a+t*B*M-I*D*M)*O,A[7]=(t*r*E-s*D*E+s*B*a-I*r*a-t*B*k+I*D*k)*O,A[8]=F*O,A[9]=(G*n*E-s*S*E-G*g*k+I*S*k+s*g*M-I*n*M)*O,A[10]=(t*S*E-G*o*E+G*g*a-I*S*a-t*g*M+I*o*M)*O,A[11]=(s*o*E-t*n*E-s*g*a+I*n*a+t*g*k-I*o*k)*O,A[12]=c*O,A[13]=(s*S*B-G*n*B+G*g*r-I*S*r-s*g*w+I*n*w)*O,A[14]=(G*o*B-t*S*B-G*g*D+I*S*D+t*g*w-I*o*w)*O,A[15]=(t*n*B-s*o*B+s*g*D-I*n*D-t*g*r+I*o*r)*O,this}scale(A){const I=this.elements,g=A.x,B=A.y,E=A.z;return I[0]*=g,I[4]*=B,I[8]*=E,I[1]*=g,I[5]*=B,I[9]*=E,I[2]*=g,I[6]*=B,I[10]*=E,I[3]*=g,I[7]*=B,I[11]*=E,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],B=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,B))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),B=Math.sin(I),E=1-g,t=A.x,o=A.y,D=A.z,a=E*t,s=E*o;return this.set(a*t+g,a*o-B*D,a*D+B*o,0,a*o+B*D,s*o+g,s*D-B*t,0,a*D-B*o,s*D+B*t,E*D*D+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,B,E,t){return this.set(1,g,E,0,A,1,t,0,I,B,1,0,0,0,0,1),this}compose(A,I,g){const B=this.elements,E=I._x,t=I._y,o=I._z,D=I._w,a=E+E,s=t+t,n=o+o,r=E*a,k=E*s,G=E*n,S=t*s,w=t*n,M=o*n,J=D*a,R=D*s,F=D*n,c=g.x,L=g.y,O=g.z;return B[0]=(1-(S+M))*c,B[1]=(k+F)*c,B[2]=(G-R)*c,B[3]=0,B[4]=(k-F)*L,B[5]=(1-(r+M))*L,B[6]=(w+J)*L,B[7]=0,B[8]=(G+R)*O,B[9]=(w-J)*O,B[10]=(1-(r+S))*O,B[11]=0,B[12]=A.x,B[13]=A.y,B[14]=A.z,B[15]=1,this}decompose(A,I,g){const B=this.elements;let E=HQ.set(B[0],B[1],B[2]).length();const t=HQ.set(B[4],B[5],B[6]).length(),o=HQ.set(B[8],B[9],B[10]).length();this.determinant()<0&&(E=-E),A.x=B[12],A.y=B[13],A.z=B[14],kC.copy(this);const a=1/E,s=1/t,n=1/o;return kC.elements[0]*=a,kC.elements[1]*=a,kC.elements[2]*=a,kC.elements[4]*=s,kC.elements[5]*=s,kC.elements[6]*=s,kC.elements[8]*=n,kC.elements[9]*=n,kC.elements[10]*=n,I.setFromRotationMatrix(kC),g.x=E,g.y=t,g.z=o,this}makePerspective(A,I,g,B,E,t){const o=this.elements,D=2*E/(I-A),a=2*E/(g-B),s=(I+A)/(I-A),n=(g+B)/(g-B),r=-(t+E)/(t-E),k=-2*t*E/(t-E);return o[0]=D,o[4]=0,o[8]=s,o[12]=0,o[1]=0,o[5]=a,o[9]=n,o[13]=0,o[2]=0,o[6]=0,o[10]=r,o[14]=k,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,B,E,t){const o=this.elements,D=1/(I-A),a=1/(g-B),s=1/(t-E),n=(I+A)*D,r=(g+B)*a,k=(t+E)*s;return o[0]=2*D,o[4]=0,o[8]=0,o[12]=-n,o[1]=0,o[5]=2*a,o[9]=0,o[13]=-r,o[2]=0,o[6]=0,o[10]=-2*s,o[14]=-k,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<16;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const HQ=new IA,kC=new gg,r0=new IA(0,0,0),G0=new IA(1,1,1),FB=new IA,to=new IA,Wg=new IA,Fh=new gg,Nh=new oQ;class ai{constructor(A=0,I=0,g=0,B=ai.DefaultOrder){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=B}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,B=this._order){return this._x=A,this._y=I,this._z=g,this._order=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const B=A.elements,E=B[0],t=B[4],o=B[8],D=B[1],a=B[5],s=B[9],n=B[2],r=B[6],k=B[10];switch(I){case"XYZ":this._y=Math.asin(Yg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-s,k),this._z=Math.atan2(-t,E)):(this._x=Math.atan2(r,a),this._z=0);break;case"YXZ":this._x=Math.asin(-Yg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(o,k),this._z=Math.atan2(D,a)):(this._y=Math.atan2(-n,E),this._z=0);break;case"ZXY":this._x=Math.asin(Yg(r,-1,1)),Math.abs(r)<.9999999?(this._y=Math.atan2(-n,k),this._z=Math.atan2(-t,a)):(this._y=0,this._z=Math.atan2(D,E));break;case"ZYX":this._y=Math.asin(-Yg(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(r,k),this._z=Math.atan2(D,E)):(this._x=0,this._z=Math.atan2(-t,a));break;case"YZX":this._z=Math.asin(Yg(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(-s,a),this._y=Math.atan2(-n,E)):(this._x=0,this._y=Math.atan2(o,k));break;case"XZY":this._z=Math.asin(-Yg(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(r,a),this._y=Math.atan2(o,E)):(this._x=Math.atan2(-s,k),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Fh.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Fh,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ai.DefaultOrder="XYZ";ai.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Jw{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let c0=0;const Jh=new IA,mQ=new oQ,gB=new gg,eo=new IA,YE=new IA,k0=new IA,l0=new oQ,Rh=new IA(1,0,0),qh=new IA(0,1,0),ph=new IA(0,0,1),y0={type:"added"},dh={type:"removed"};class wg extends aQ{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wg.DefaultUp.clone();const A=new IA,I=new ai,g=new oQ,B=new IA(1,1,1);function E(){g.setFromEuler(I,!1)}function t(){I.setFromQuaternion(g,void 0,!1)}I._onChange(E),g._onChange(t),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:B},modelViewMatrix:{value:new gg},normalMatrix:{value:new aC}}),this.matrix=new gg,this.matrixWorld=new gg,this.matrixAutoUpdate=wg.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wg.DefaultMatrixWorldAutoUpdate,this.layers=new Jw,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return mQ.setFromAxisAngle(A,I),this.quaternion.multiply(mQ),this}rotateOnWorldAxis(A,I){return mQ.setFromAxisAngle(A,I),this.quaternion.premultiply(mQ),this}rotateX(A){return this.rotateOnAxis(Rh,A)}rotateY(A){return this.rotateOnAxis(qh,A)}rotateZ(A){return this.rotateOnAxis(ph,A)}translateOnAxis(A,I){return Jh.copy(A).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Rh,A)}translateY(A){return this.translateOnAxis(qh,A)}translateZ(A){return this.translateOnAxis(ph,A)}localToWorld(A){return A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return A.applyMatrix4(gB.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?eo.copy(A):eo.set(A,I,g);const B=this.parent;this.updateWorldMatrix(!0,!1),YE.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gB.lookAt(YE,eo,this.up):gB.lookAt(eo,YE,this.up),this.quaternion.setFromRotationMatrix(gB),B&&(gB.extractRotation(B.matrixWorld),mQ.setFromRotationMatrix(gB),this.quaternion.premultiply(mQ.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(y0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(dh)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(dh)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),gB.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),gB.multiply(A.parent.matrixWorld)),A.applyMatrix4(gB),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,B=this.children.length;g<B;g++){const t=this.children[g].getObjectByProperty(A,I);if(t!==void 0)return t}}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(YE,A,k0),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(YE,l0,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,B=I.length;g<B;g++){const E=I[g];(E.matrixWorldAutoUpdate===!0||A===!0)&&E.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const B=this.children;for(let E=0,t=B.length;E<t;E++){const o=B[E];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const B={};B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.castShadow===!0&&(B.castShadow=!0),this.receiveShadow===!0&&(B.receiveShadow=!0),this.visible===!1&&(B.visible=!1),this.frustumCulled===!1&&(B.frustumCulled=!1),this.renderOrder!==0&&(B.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(B.userData=this.userData),B.layers=this.layers.mask,B.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(B.matrixAutoUpdate=!1),this.isInstancedMesh&&(B.type="InstancedMesh",B.count=this.count,B.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(B.instanceColor=this.instanceColor.toJSON()));function E(o,D){return o[D.uuid]===void 0&&(o[D.uuid]=D.toJSON(A)),D.uuid}if(this.isScene)this.background&&(this.background.isColor?B.background=this.background.toJSON():this.background.isTexture&&(B.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(B.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){B.geometry=E(A.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const D=o.shapes;if(Array.isArray(D))for(let a=0,s=D.length;a<s;a++){const n=D[a];E(A.shapes,n)}else E(A.shapes,D)}}if(this.isSkinnedMesh&&(B.bindMode=this.bindMode,B.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(E(A.skeletons,this.skeleton),B.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let D=0,a=this.material.length;D<a;D++)o.push(E(A.materials,this.material[D]));B.material=o}else B.material=E(A.materials,this.material);if(this.children.length>0){B.children=[];for(let o=0;o<this.children.length;o++)B.children.push(this.children[o].toJSON(A).object)}if(this.animations.length>0){B.animations=[];for(let o=0;o<this.animations.length;o++){const D=this.animations[o];B.animations.push(E(A.animations,D))}}if(I){const o=t(A.geometries),D=t(A.materials),a=t(A.textures),s=t(A.images),n=t(A.shapes),r=t(A.skeletons),k=t(A.animations),G=t(A.nodes);o.length>0&&(g.geometries=o),D.length>0&&(g.materials=D),a.length>0&&(g.textures=a),s.length>0&&(g.images=s),n.length>0&&(g.shapes=n),r.length>0&&(g.skeletons=r),k.length>0&&(g.animations=k),G.length>0&&(g.nodes=G)}return g.object=B,g;function t(o){const D=[];for(const a in o){const s=o[a];delete s.metadata,D.push(s)}return D}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const B=A.children[g];this.add(B.clone())}return this}}wg.DefaultUp=new IA(0,1,0);wg.DefaultMatrixAutoUpdate=!0;wg.DefaultMatrixWorldAutoUpdate=!0;const lC=new IA,CB=new IA,ve=new IA,BB=new IA,TQ=new IA,xQ=new IA,Lh=new IA,Pe=new IA,Ve=new IA,_e=new IA;class EB{constructor(A=new IA,I=new IA,g=new IA){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,B){B.subVectors(g,I),lC.subVectors(A,I),B.cross(lC);const E=B.lengthSq();return E>0?B.multiplyScalar(1/Math.sqrt(E)):B.set(0,0,0)}static getBarycoord(A,I,g,B,E){lC.subVectors(B,I),CB.subVectors(g,I),ve.subVectors(A,I);const t=lC.dot(lC),o=lC.dot(CB),D=lC.dot(ve),a=CB.dot(CB),s=CB.dot(ve),n=t*a-o*o;if(n===0)return E.set(-2,-1,-1);const r=1/n,k=(a*D-o*s)*r,G=(t*s-o*D)*r;return E.set(1-k-G,G,k)}static containsPoint(A,I,g,B){return this.getBarycoord(A,I,g,B,BB),BB.x>=0&&BB.y>=0&&BB.x+BB.y<=1}static getUV(A,I,g,B,E,t,o,D){return this.getBarycoord(A,I,g,B,BB),D.set(0,0),D.addScaledVector(E,BB.x),D.addScaledVector(t,BB.y),D.addScaledVector(o,BB.z),D}static isFrontFacing(A,I,g,B){return lC.subVectors(g,I),CB.subVectors(A,I),lC.cross(CB).dot(B)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,B){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[B]),this}setFromAttributeAndIndices(A,I,g,B){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,B),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return lC.subVectors(this.c,this.b),CB.subVectors(this.a,this.b),lC.cross(CB).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return EB.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return EB.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,B,E){return EB.getUV(A,this.a,this.b,this.c,I,g,B,E)}containsPoint(A){return EB.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return EB.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,B=this.b,E=this.c;let t,o;TQ.subVectors(B,g),xQ.subVectors(E,g),Pe.subVectors(A,g);const D=TQ.dot(Pe),a=xQ.dot(Pe);if(D<=0&&a<=0)return I.copy(g);Ve.subVectors(A,B);const s=TQ.dot(Ve),n=xQ.dot(Ve);if(s>=0&&n<=s)return I.copy(B);const r=D*n-s*a;if(r<=0&&D>=0&&s<=0)return t=D/(D-s),I.copy(g).addScaledVector(TQ,t);_e.subVectors(A,E);const k=TQ.dot(_e),G=xQ.dot(_e);if(G>=0&&k<=G)return I.copy(E);const S=k*a-D*G;if(S<=0&&a>=0&&G<=0)return o=a/(a-G),I.copy(g).addScaledVector(xQ,o);const w=s*G-k*n;if(w<=0&&n-s>=0&&k-G>=0)return Lh.subVectors(E,B),o=(n-s)/(n-s+(k-G)),I.copy(B).addScaledVector(Lh,o);const M=1/(w+S+r);return t=S*M,o=r*M,I.copy(g).addScaledVector(TQ,t).addScaledVector(xQ,o)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let M0=0;class nE extends aQ{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=$Q,this.side=iE,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=rw,this.blendDst=Gw,this.blendEquation=VQ,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=de,this.stencilZFail=de,this.stencilZPass=de,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn("THREE.Material: '"+I+"' parameter is undefined.");continue}const B=this[I];if(B===void 0){console.warn("THREE."+this.type+": '"+I+"' is not a property of this material.");continue}B&&B.isColor?B.set(g):B&&B.isVector3&&g&&g.isVector3?B.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==$Q&&(g.blending=this.blending),this.side!==iE&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),JSON.stringify(this.userData)!=="{}"&&(g.userData=this.userData);function B(E){const t=[];for(const o in E){const D=E[o];delete D.metadata,t.push(D)}return t}if(I){const E=B(A.textures),t=B(A.images);E.length>0&&(g.textures=E),t.length>0&&(g.images=t)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const B=I.length;g=new Array(B);for(let E=0;E!==B;++E)g[E]=I[E].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class et extends nE{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new cI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sD,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Ag=new IA,ao=new iI;class TC{constructor(A,I,g){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g===!0,this.usage=kh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let B=0,E=this.itemSize;B<E;B++)this.array[A+B]=I.array[g+B];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)ao.fromBufferAttribute(this,I),ao.applyMatrix3(A),this.setXY(I,ao.x,ao.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)Ag.fromBufferAttribute(this,I),Ag.applyMatrix3(A),this.setXYZ(I,Ag.x,Ag.y,Ag.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)Ag.fromBufferAttribute(this,I),Ag.applyMatrix4(A),this.setXYZ(I,Ag.x,Ag.y,Ag.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)Ag.fromBufferAttribute(this,I),Ag.applyNormalMatrix(A),this.setXYZ(I,Ag.x,Ag.y,Ag.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)Ag.fromBufferAttribute(this,I),Ag.transformDirection(A),this.setXYZ(I,Ag.x,Ag.y,Ag.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=Io(I,this.array)),I}setX(A,I){return this.normalized&&(I=Zg(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=Io(I,this.array)),I}setY(A,I){return this.normalized&&(I=Zg(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=Io(I,this.array)),I}setZ(A,I){return this.normalized&&(I=Zg(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=Io(I,this.array)),I}setW(A,I){return this.normalized&&(I=Zg(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=Zg(I,this.array),g=Zg(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,B){return A*=this.itemSize,this.normalized&&(I=Zg(I,this.array),g=Zg(g,this.array),B=Zg(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this}setXYZW(A,I,g,B,E){return A*=this.itemSize,this.normalized&&(I=Zg(I,this.array),g=Zg(g,this.array),B=Zg(B,this.array),E=Zg(E,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this.array[A+3]=E,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==kh&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Rw extends TC{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class qw extends TC{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class FC extends TC{constructor(A,I,g){super(new Float32Array(A),I,g)}}let U0=0;const QC=new gg,je=new wg,OQ=new IA,vg=new ei,fE=new ei,ag=new IA;class aB extends aQ{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(yw(A)?qw:Rw)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const E=new aC().getNormalMatrix(A);g.applyNormalMatrix(E),g.needsUpdate=!0}const B=this.attributes.tangent;return B!==void 0&&(B.transformDirection(A),B.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return QC.makeRotationFromQuaternion(A),this.applyMatrix4(QC),this}rotateX(A){return QC.makeRotationX(A),this.applyMatrix4(QC),this}rotateY(A){return QC.makeRotationY(A),this.applyMatrix4(QC),this}rotateZ(A){return QC.makeRotationZ(A),this.applyMatrix4(QC),this}translate(A,I,g){return QC.makeTranslation(A,I,g),this.applyMatrix4(QC),this}scale(A,I,g){return QC.makeScale(A,I,g),this.applyMatrix4(QC),this}lookAt(A){return je.lookAt(A),je.updateMatrix(),this.applyMatrix4(je.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(OQ).negate(),this.translate(OQ.x,OQ.y,OQ.z),this}setFromPoints(A){const I=[];for(let g=0,B=A.length;g<B;g++){const E=A[g];I.push(E.x,E.y,E.z||0)}return this.setAttribute("position",new FC(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new IA(-1/0,-1/0,-1/0),new IA(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,B=I.length;g<B;g++){const E=I[g];vg.setFromBufferAttribute(E),this.morphTargetsRelative?(ag.addVectors(this.boundingBox.min,vg.min),this.boundingBox.expandByPoint(ag),ag.addVectors(this.boundingBox.max,vg.max),this.boundingBox.expandByPoint(ag)):(this.boundingBox.expandByPoint(vg.min),this.boundingBox.expandByPoint(vg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tt);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new IA,1/0);return}if(A){const g=this.boundingSphere.center;if(vg.setFromBufferAttribute(A),I)for(let E=0,t=I.length;E<t;E++){const o=I[E];fE.setFromBufferAttribute(o),this.morphTargetsRelative?(ag.addVectors(vg.min,fE.min),vg.expandByPoint(ag),ag.addVectors(vg.max,fE.max),vg.expandByPoint(ag)):(vg.expandByPoint(fE.min),vg.expandByPoint(fE.max))}vg.getCenter(g);let B=0;for(let E=0,t=A.count;E<t;E++)ag.fromBufferAttribute(A,E),B=Math.max(B,g.distanceToSquared(ag));if(I)for(let E=0,t=I.length;E<t;E++){const o=I[E],D=this.morphTargetsRelative;for(let a=0,s=o.count;a<s;a++)ag.fromBufferAttribute(o,a),D&&(OQ.fromBufferAttribute(A,a),ag.add(OQ)),B=Math.max(B,g.distanceToSquared(ag))}this.boundingSphere.radius=Math.sqrt(B),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,B=I.position.array,E=I.normal.array,t=I.uv.array,o=B.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new TC(new Float32Array(4*o),4));const D=this.getAttribute("tangent").array,a=[],s=[];for(let K=0;K<o;K++)a[K]=new IA,s[K]=new IA;const n=new IA,r=new IA,k=new IA,G=new iI,S=new iI,w=new iI,M=new IA,J=new IA;function R(K,_,f){n.fromArray(B,K*3),r.fromArray(B,_*3),k.fromArray(B,f*3),G.fromArray(t,K*2),S.fromArray(t,_*2),w.fromArray(t,f*2),r.sub(n),k.sub(n),S.sub(G),w.sub(G);const N=1/(S.x*w.y-w.x*S.y);!isFinite(N)||(M.copy(r).multiplyScalar(w.y).addScaledVector(k,-S.y).multiplyScalar(N),J.copy(k).multiplyScalar(S.x).addScaledVector(r,-w.x).multiplyScalar(N),a[K].add(M),a[_].add(M),a[f].add(M),s[K].add(J),s[_].add(J),s[f].add(J))}let F=this.groups;F.length===0&&(F=[{start:0,count:g.length}]);for(let K=0,_=F.length;K<_;++K){const f=F[K],N=f.start,d=f.count;for(let x=N,X=N+d;x<X;x+=3)R(g[x+0],g[x+1],g[x+2])}const c=new IA,L=new IA,O=new IA,U=new IA;function u(K){O.fromArray(E,K*3),U.copy(O);const _=a[K];c.copy(_),c.sub(O.multiplyScalar(O.dot(_))).normalize(),L.crossVectors(U,_);const N=L.dot(s[K])<0?-1:1;D[K*4]=c.x,D[K*4+1]=c.y,D[K*4+2]=c.z,D[K*4+3]=N}for(let K=0,_=F.length;K<_;++K){const f=F[K],N=f.start,d=f.count;for(let x=N,X=N+d;x<X;x+=3)u(g[x+0]),u(g[x+1]),u(g[x+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new TC(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let r=0,k=g.count;r<k;r++)g.setXYZ(r,0,0,0);const B=new IA,E=new IA,t=new IA,o=new IA,D=new IA,a=new IA,s=new IA,n=new IA;if(A)for(let r=0,k=A.count;r<k;r+=3){const G=A.getX(r+0),S=A.getX(r+1),w=A.getX(r+2);B.fromBufferAttribute(I,G),E.fromBufferAttribute(I,S),t.fromBufferAttribute(I,w),s.subVectors(t,E),n.subVectors(B,E),s.cross(n),o.fromBufferAttribute(g,G),D.fromBufferAttribute(g,S),a.fromBufferAttribute(g,w),o.add(s),D.add(s),a.add(s),g.setXYZ(G,o.x,o.y,o.z),g.setXYZ(S,D.x,D.y,D.z),g.setXYZ(w,a.x,a.y,a.z)}else for(let r=0,k=I.count;r<k;r+=3)B.fromBufferAttribute(I,r+0),E.fromBufferAttribute(I,r+1),t.fromBufferAttribute(I,r+2),s.subVectors(t,E),n.subVectors(B,E),s.cross(n),g.setXYZ(r+0,s.x,s.y,s.z),g.setXYZ(r+1,s.x,s.y,s.z),g.setXYZ(r+2,s.x,s.y,s.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)ag.fromBufferAttribute(A,I),ag.normalize(),A.setXYZ(I,ag.x,ag.y,ag.z)}toNonIndexed(){function A(o,D){const a=o.array,s=o.itemSize,n=o.normalized,r=new a.constructor(D.length*s);let k=0,G=0;for(let S=0,w=D.length;S<w;S++){o.isInterleavedBufferAttribute?k=D[S]*o.data.stride+o.offset:k=D[S]*s;for(let M=0;M<s;M++)r[G++]=a[k++]}return new TC(r,s,n)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new aB,g=this.index.array,B=this.attributes;for(const o in B){const D=B[o],a=A(D,g);I.setAttribute(o,a)}const E=this.morphAttributes;for(const o in E){const D=[],a=E[o];for(let s=0,n=a.length;s<n;s++){const r=a[s],k=A(r,g);D.push(k)}I.morphAttributes[o]=D}I.morphTargetsRelative=this.morphTargetsRelative;const t=this.groups;for(let o=0,D=t.length;o<D;o++){const a=t[o];I.addGroup(a.start,a.count,a.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const D=this.parameters;for(const a in D)D[a]!==void 0&&(A[a]=D[a]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const D in g){const a=g[D];A.data.attributes[D]=a.toJSON(A.data)}const B={};let E=!1;for(const D in this.morphAttributes){const a=this.morphAttributes[D],s=[];for(let n=0,r=a.length;n<r;n++){const k=a[n];s.push(k.toJSON(A.data))}s.length>0&&(B[D]=s,E=!0)}E&&(A.data.morphAttributes=B,A.data.morphTargetsRelative=this.morphTargetsRelative);const t=this.groups;t.length>0&&(A.data.groups=JSON.parse(JSON.stringify(t)));const o=this.boundingSphere;return o!==null&&(A.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const B=A.attributes;for(const a in B){const s=B[a];this.setAttribute(a,s.clone(I))}const E=A.morphAttributes;for(const a in E){const s=[],n=E[a];for(let r=0,k=n.length;r<k;r++)s.push(n[r].clone(I));this.morphAttributes[a]=s}this.morphTargetsRelative=A.morphTargetsRelative;const t=A.groups;for(let a=0,s=t.length;a<s;a++){const n=t[a];this.addGroup(n.start,n.count,n.materialIndex)}const o=A.boundingBox;o!==null&&(this.boundingBox=o.clone());const D=A.boundingSphere;return D!==null&&(this.boundingSphere=D.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yh=new gg,bQ=new Nw,ze=new tt,NB=new IA,JB=new IA,RB=new IA,Xe=new IA,$e=new IA,Aa=new IA,Do=new IA,so=new IA,no=new IA,ho=new iI,So=new iI,wo=new iI,Ia=new IA,ro=new IA;class KC extends wg{constructor(A=new aB,I=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const B=I[g[0]];if(B!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let E=0,t=B.length;E<t;E++){const o=B[E].name||String(E);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=E}}}}raycast(A,I){const g=this.geometry,B=this.material,E=this.matrixWorld;if(B===void 0||(g.boundingSphere===null&&g.computeBoundingSphere(),ze.copy(g.boundingSphere),ze.applyMatrix4(E),A.ray.intersectsSphere(ze)===!1)||(Yh.copy(E).invert(),bQ.copy(A.ray).applyMatrix4(Yh),g.boundingBox!==null&&bQ.intersectsBox(g.boundingBox)===!1))return;let t;const o=g.index,D=g.attributes.position,a=g.morphAttributes.position,s=g.morphTargetsRelative,n=g.attributes.uv,r=g.attributes.uv2,k=g.groups,G=g.drawRange;if(o!==null)if(Array.isArray(B))for(let S=0,w=k.length;S<w;S++){const M=k[S],J=B[M.materialIndex],R=Math.max(M.start,G.start),F=Math.min(o.count,Math.min(M.start+M.count,G.start+G.count));for(let c=R,L=F;c<L;c+=3){const O=o.getX(c),U=o.getX(c+1),u=o.getX(c+2);t=Go(this,J,A,bQ,D,a,s,n,r,O,U,u),t&&(t.faceIndex=Math.floor(c/3),t.face.materialIndex=M.materialIndex,I.push(t))}}else{const S=Math.max(0,G.start),w=Math.min(o.count,G.start+G.count);for(let M=S,J=w;M<J;M+=3){const R=o.getX(M),F=o.getX(M+1),c=o.getX(M+2);t=Go(this,B,A,bQ,D,a,s,n,r,R,F,c),t&&(t.faceIndex=Math.floor(M/3),I.push(t))}}else if(D!==void 0)if(Array.isArray(B))for(let S=0,w=k.length;S<w;S++){const M=k[S],J=B[M.materialIndex],R=Math.max(M.start,G.start),F=Math.min(D.count,Math.min(M.start+M.count,G.start+G.count));for(let c=R,L=F;c<L;c+=3){const O=c,U=c+1,u=c+2;t=Go(this,J,A,bQ,D,a,s,n,r,O,U,u),t&&(t.faceIndex=Math.floor(c/3),t.face.materialIndex=M.materialIndex,I.push(t))}}else{const S=Math.max(0,G.start),w=Math.min(D.count,G.start+G.count);for(let M=S,J=w;M<J;M+=3){const R=M,F=M+1,c=M+2;t=Go(this,B,A,bQ,D,a,s,n,r,R,F,c),t&&(t.faceIndex=Math.floor(M/3),I.push(t))}}}}function K0(i,A,I,g,B,E,t,o){let D;if(A.side===DC?D=g.intersectTriangle(t,E,B,!0,o):D=g.intersectTriangle(B,E,t,A.side!==iB,o),D===null)return null;ro.copy(o),ro.applyMatrix4(i.matrixWorld);const a=I.ray.origin.distanceTo(ro);return a<I.near||a>I.far?null:{distance:a,point:ro.clone(),object:i}}function Go(i,A,I,g,B,E,t,o,D,a,s,n){NB.fromBufferAttribute(B,a),JB.fromBufferAttribute(B,s),RB.fromBufferAttribute(B,n);const r=i.morphTargetInfluences;if(E&&r){Do.set(0,0,0),so.set(0,0,0),no.set(0,0,0);for(let G=0,S=E.length;G<S;G++){const w=r[G],M=E[G];w!==0&&(Xe.fromBufferAttribute(M,a),$e.fromBufferAttribute(M,s),Aa.fromBufferAttribute(M,n),t?(Do.addScaledVector(Xe,w),so.addScaledVector($e,w),no.addScaledVector(Aa,w)):(Do.addScaledVector(Xe.sub(NB),w),so.addScaledVector($e.sub(JB),w),no.addScaledVector(Aa.sub(RB),w)))}NB.add(Do),JB.add(so),RB.add(no)}i.isSkinnedMesh&&(i.boneTransform(a,NB),i.boneTransform(s,JB),i.boneTransform(n,RB));const k=K0(i,A,I,g,NB,JB,RB,Ia);if(k){o&&(ho.fromBufferAttribute(o,a),So.fromBufferAttribute(o,s),wo.fromBufferAttribute(o,n),k.uv=EB.getUV(Ia,NB,JB,RB,ho,So,wo,new iI)),D&&(ho.fromBufferAttribute(D,a),So.fromBufferAttribute(D,s),wo.fromBufferAttribute(D,n),k.uv2=EB.getUV(Ia,NB,JB,RB,ho,So,wo,new iI));const G={a,b:s,c:n,normal:new IA,materialIndex:0};EB.getNormal(NB,JB,RB,G.normal),k.face=G}return k}class DQ extends aB{constructor(A=1,I=1,g=1,B=1,E=1,t=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:B,heightSegments:E,depthSegments:t};const o=this;B=Math.floor(B),E=Math.floor(E),t=Math.floor(t);const D=[],a=[],s=[],n=[];let r=0,k=0;G("z","y","x",-1,-1,g,I,A,t,E,0),G("z","y","x",1,-1,g,I,-A,t,E,1),G("x","z","y",1,1,A,g,I,B,t,2),G("x","z","y",1,-1,A,g,-I,B,t,3),G("x","y","z",1,-1,A,I,g,B,E,4),G("x","y","z",-1,-1,A,I,-g,B,E,5),this.setIndex(D),this.setAttribute("position",new FC(a,3)),this.setAttribute("normal",new FC(s,3)),this.setAttribute("uv",new FC(n,2));function G(S,w,M,J,R,F,c,L,O,U,u){const K=F/O,_=c/U,f=F/2,N=c/2,d=L/2,x=O+1,X=U+1;let W=0,b=0;const H=new IA;for(let m=0;m<X;m++){const tA=m*_-N;for(let eA=0;eA<x;eA++){const nA=eA*K-f;H[S]=nA*J,H[w]=tA*R,H[M]=d,a.push(H.x,H.y,H.z),H[S]=0,H[w]=0,H[M]=L>0?1:-1,s.push(H.x,H.y,H.z),n.push(eA/O),n.push(1-m/U),W+=1}}for(let m=0;m<U;m++)for(let tA=0;tA<O;tA++){const eA=r+tA+x*m,nA=r+tA+x*(m+1),kA=r+(tA+1)+x*(m+1),RA=r+(tA+1)+x*m;D.push(eA,nA,RA),D.push(nA,kA,RA),b+=6}o.addGroup(k,b,u),k+=b,r+=W}}static fromJSON(A){return new DQ(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function aE(i){const A={};for(const I in i){A[I]={};for(const g in i[I]){const B=i[I][g];B&&(B.isColor||B.isMatrix3||B.isMatrix4||B.isVector2||B.isVector3||B.isVector4||B.isTexture||B.isQuaternion)?A[I][g]=B.clone():Array.isArray(B)?A[I][g]=B.slice():A[I][g]=B}}return A}function lg(i){const A={};for(let I=0;I<i.length;I++){const g=aE(i[I]);for(const B in g)A[B]=g[B]}return A}function F0(i){const A=[];for(let I=0;I<i.length;I++)A.push(i[I].clone());return A}const N0={clone:aE,merge:lg};var J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tQ extends nE{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=aE(A.uniforms),this.uniformsGroups=F0(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const B in this.uniforms){const t=this.uniforms[B].value;t&&t.isTexture?I.uniforms[B]={type:"t",value:t.toJSON(A).uuid}:t&&t.isColor?I.uniforms[B]={type:"c",value:t.getHex()}:t&&t.isVector2?I.uniforms[B]={type:"v2",value:t.toArray()}:t&&t.isVector3?I.uniforms[B]={type:"v3",value:t.toArray()}:t&&t.isVector4?I.uniforms[B]={type:"v4",value:t.toArray()}:t&&t.isMatrix3?I.uniforms[B]={type:"m3",value:t.toArray()}:t&&t.isMatrix4?I.uniforms[B]={type:"m4",value:t.toArray()}:I.uniforms[B]={value:t}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader;const g={};for(const B in this.extensions)this.extensions[B]===!0&&(g[B]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class pw extends wg{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gg,this.projectionMatrix=new gg,this.projectionMatrixInverse=new gg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tC extends pw{constructor(A=50,I=1,g=.1,B=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=B,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=yh*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Le*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return yh*2*Math.atan(Math.tan(Le*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,B,E,t){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=E,this.view.height=t,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(Le*.5*this.fov)/this.zoom,g=2*I,B=this.aspect*g,E=-.5*B;const t=this.view;if(this.view!==null&&this.view.enabled){const D=t.fullWidth,a=t.fullHeight;E+=t.offsetX*B/D,I-=t.offsetY*g/a,B*=t.width/D,g*=t.height/a}const o=this.filmOffset;o!==0&&(E+=A*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(E,E+B,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const ZQ=90,WQ=1;class q0 extends wg{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g;const B=new tC(ZQ,WQ,A,I);B.layers=this.layers,B.up.set(0,-1,0),B.lookAt(new IA(1,0,0)),this.add(B);const E=new tC(ZQ,WQ,A,I);E.layers=this.layers,E.up.set(0,-1,0),E.lookAt(new IA(-1,0,0)),this.add(E);const t=new tC(ZQ,WQ,A,I);t.layers=this.layers,t.up.set(0,0,1),t.lookAt(new IA(0,1,0)),this.add(t);const o=new tC(ZQ,WQ,A,I);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new IA(0,-1,0)),this.add(o);const D=new tC(ZQ,WQ,A,I);D.layers=this.layers,D.up.set(0,-1,0),D.lookAt(new IA(0,0,1)),this.add(D);const a=new tC(ZQ,WQ,A,I);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new IA(0,0,-1)),this.add(a)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[B,E,t,o,D,a]=this.children,s=A.getRenderTarget(),n=A.toneMapping,r=A.xr.enabled;A.toneMapping=tB,A.xr.enabled=!1;const k=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,B),A.setRenderTarget(g,1),A.render(I,E),A.setRenderTarget(g,2),A.render(I,t),A.setRenderTarget(g,3),A.render(I,o),A.setRenderTarget(g,4),A.render(I,D),g.texture.generateMipmaps=k,A.setRenderTarget(g,5),A.render(I,a),A.setRenderTarget(s),A.toneMapping=n,A.xr.enabled=r,g.texture.needsPMREMUpdate=!0}}class dw extends JC{constructor(A,I,g,B,E,t,o,D,a,s){A=A!==void 0?A:[],I=I!==void 0?I:oE,super(A,I,g,B,E,t,o,D,a,s),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class p0 extends YB{constructor(A,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},B=[g,g,g,g,g,g];this.texture=new dw(B,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:oC}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.encoding=I.encoding,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},B=new DQ(5,5,5),E=new tQ({name:"CubemapFromEquirect",uniforms:aE(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:DC,blending:oB});E.uniforms.tEquirect.value=I;const t=new KC(B,E),o=I.minFilter;return I.minFilter===ot&&(I.minFilter=oC),new q0(1,10,this).update(A,t),I.minFilter=o,t.geometry.dispose(),t.material.dispose(),this}clear(A,I,g,B){const E=A.getRenderTarget();for(let t=0;t<6;t++)A.setRenderTarget(this,t),A.clear(I,g,B);A.setRenderTarget(E)}}const ga=new IA,d0=new IA,L0=new aC;class jB{constructor(A=new IA(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,B){return this.normal.set(A,I,g),this.constant=B,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const B=ga.subVectors(g,I).cross(d0.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(B,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,I){const g=A.delta(ga),B=this.normal.dot(g);if(B===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const E=-(A.start.dot(this.normal)+this.constant)/B;return E<0||E>1?null:I.copy(g).multiplyScalar(E).add(A.start)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||L0.getNormalMatrix(A),B=this.coplanarPoint(ga).applyMatrix4(A),E=this.normal.applyMatrix3(g).normalize();return this.constant=-B.dot(E),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vQ=new tt,co=new IA;class nD{constructor(A=new jB,I=new jB,g=new jB,B=new jB,E=new jB,t=new jB){this.planes=[A,I,g,B,E,t]}set(A,I,g,B,E,t){const o=this.planes;return o[0].copy(A),o[1].copy(I),o[2].copy(g),o[3].copy(B),o[4].copy(E),o[5].copy(t),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,B=g[0],E=g[1],t=g[2],o=g[3],D=g[4],a=g[5],s=g[6],n=g[7],r=g[8],k=g[9],G=g[10],S=g[11],w=g[12],M=g[13],J=g[14],R=g[15];return I[0].setComponents(o-B,n-D,S-r,R-w).normalize(),I[1].setComponents(o+B,n+D,S+r,R+w).normalize(),I[2].setComponents(o+E,n+a,S+k,R+M).normalize(),I[3].setComponents(o-E,n-a,S-k,R-M).normalize(),I[4].setComponents(o-t,n-s,S-G,R-J).normalize(),I[5].setComponents(o+t,n+s,S+G,R+J).normalize(),this}intersectsObject(A){const I=A.geometry;return I.boundingSphere===null&&I.computeBoundingSphere(),vQ.copy(I.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(vQ)}intersectsSprite(A){return vQ.center.set(0,0,0),vQ.radius=.7071067811865476,vQ.applyMatrix4(A.matrixWorld),this.intersectsSphere(vQ)}intersectsSphere(A){const I=this.planes,g=A.center,B=-A.radius;for(let E=0;E<6;E++)if(I[E].distanceToPoint(g)<B)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const B=I[g];if(co.x=B.normal.x>0?A.max.x:A.min.x,co.y=B.normal.y>0?A.max.y:A.min.y,co.z=B.normal.z>0?A.max.z:A.min.z,B.distanceToPoint(co)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lw(){let i=null,A=!1,I=null,g=null;function B(E,t){I(E,t),g=i.requestAnimationFrame(B)}return{start:function(){A!==!0&&I!==null&&(g=i.requestAnimationFrame(B),A=!0)},stop:function(){i.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(E){I=E},setContext:function(E){i=E}}}function Y0(i,A){const I=A.isWebGL2,g=new WeakMap;function B(a,s){const n=a.array,r=a.usage,k=i.createBuffer();i.bindBuffer(s,k),i.bufferData(s,n,r),a.onUploadCallback();let G;if(n instanceof Float32Array)G=5126;else if(n instanceof Uint16Array)if(a.isFloat16BufferAttribute)if(I)G=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else G=5123;else if(n instanceof Int16Array)G=5122;else if(n instanceof Uint32Array)G=5125;else if(n instanceof Int32Array)G=5124;else if(n instanceof Int8Array)G=5120;else if(n instanceof Uint8Array)G=5121;else if(n instanceof Uint8ClampedArray)G=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+n);return{buffer:k,type:G,bytesPerElement:n.BYTES_PER_ELEMENT,version:a.version}}function E(a,s,n){const r=s.array,k=s.updateRange;i.bindBuffer(n,a),k.count===-1?i.bufferSubData(n,0,r):(I?i.bufferSubData(n,k.offset*r.BYTES_PER_ELEMENT,r,k.offset,k.count):i.bufferSubData(n,k.offset*r.BYTES_PER_ELEMENT,r.subarray(k.offset,k.offset+k.count)),k.count=-1)}function t(a){return a.isInterleavedBufferAttribute&&(a=a.data),g.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const s=g.get(a);s&&(i.deleteBuffer(s.buffer),g.delete(a))}function D(a,s){if(a.isGLBufferAttribute){const r=g.get(a);(!r||r.version<a.version)&&g.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const n=g.get(a);n===void 0?g.set(a,B(a,s)):n.version<a.version&&(E(n.buffer,a,s),n.version=a.version)}return{get:t,remove:o,update:D}}class hD extends aB{constructor(A=1,I=1,g=1,B=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:B};const E=A/2,t=I/2,o=Math.floor(g),D=Math.floor(B),a=o+1,s=D+1,n=A/o,r=I/D,k=[],G=[],S=[],w=[];for(let M=0;M<s;M++){const J=M*r-t;for(let R=0;R<a;R++){const F=R*n-E;G.push(F,-J,0),S.push(0,0,1),w.push(R/o),w.push(1-M/D)}}for(let M=0;M<D;M++)for(let J=0;J<o;J++){const R=J+a*M,F=J+a*(M+1),c=J+1+a*(M+1),L=J+1+a*M;k.push(R,F,L),k.push(F,c,L)}this.setIndex(k),this.setAttribute("position",new FC(G,3)),this.setAttribute("normal",new FC(S,3)),this.setAttribute("uv",new FC(w,2))}static fromJSON(A){return new hD(A.width,A.height,A.widthSegments,A.heightSegments)}}var f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0="vec3 transformed = vec3( position );",b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,W0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,v0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,AK=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,IK=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,gK=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CK=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BK=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QK=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,EK=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iK=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oK="gl_FragColor = linearToOutputTexel( gl_FragColor );",tK=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eK=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aK=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DK=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sK=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nK=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hK=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SK=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wK=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rK=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GK=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cK=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kK=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lK=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yK=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,MK=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,UK=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,KK=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FK=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,NK=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JK=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,RK=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,qK=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pK=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dK=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LK=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,YK=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fK=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uK=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HK=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mK=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TK=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xK=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OK=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bK=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZK=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WK=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vK=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,PK=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,VK=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_K=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,jK=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$K=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AF=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,IF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,CF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,BF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EF=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,iF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sF=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
		#else