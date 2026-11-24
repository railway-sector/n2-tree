const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RibbonLine.glsl-Dh2rIEwl.js","assets/index-SKgyE3lZ.js","assets/index-BdHSPmIO.css","assets/getEmissions.glsl-Cov6HEX5.js","assets/NoParameters-oniR9cXl.js","assets/doublePrecisionUtils-L_Od7PUE.js","assets/OutputColorHighlightOLID.glsl-DpGxdV1p.js","assets/Indices-CRgDQqIs.js","assets/sphere-pwU1ieVW.js","assets/ray-D3NPSTJ7.js","assets/vectorStacks-XX4A7UQP.js","assets/quatf64-aQ5IuZRd.js","assets/InterleavedLayout-C2BAtVS9.js","assets/BufferView-Dkaov1xP.js","assets/types-DfUoEbzw.js","assets/VertexElementDescriptor-CBVWHxfT.js","assets/VertexAttributeLocations-DdeE8DNn.js","assets/DrapedZ-DzLtR0NK.js","assets/frustumPlanes-CCEBOuJV.js","assets/plane-Dz45ttnC.js","assets/lineSegment-T89Mz7cy.js","assets/AlphaCutoff-Cu6cZz7A.js","assets/RenderingContext-C5Kdhc0V.js","assets/ProgramCache-DJOkwRgR.js","assets/VertexArrayObject-ClEzlfGk.js","assets/VertexBuffer-DximC93r.js","assets/projectVectorToVector-CDW_cG4T.js","assets/projectPointToVector-Cd4uDC5i.js","assets/dehydratedPoint-HwkPLSOd.js","assets/orientedBoundingBox-IE33fWjc.js","assets/quat-BaUigM14.js","assets/computeTranslationToOriginAndRotation-DF00nLu8.js","assets/mathUtils-IkMysAn-.js","assets/ReceiveShadowsConfiguration-arDjTlZ2.js","assets/DDSUtil-CV0P_lzB.js","assets/HUDMaterial-Bs-y-JZV.js","assets/TextureBackedBufferLayout-D7ZHAac1.js"])))=>i.map(i=>d[i]);
import{bX as rt,wT as Tt,wU as Et,wV as Bt,eO as he,eN as F,nv as J,fs as ie,dd as Rt,eL as X,y as j,kg as at,k7 as Re,fT as ze,lO as Ut,fP as Ht,k5 as Gt,gT as Ue,g4 as It,b8 as kt,bA as qt,i5 as He,dY as Lt,Z as Wt,st as Nt,a1 as I,a2 as Yt,a3 as le,a4 as _e,gF as Kt,c5 as Qt,jc as st,j_ as Xt,cv as Jt,kJ as Zt,kn as nt,wW as ei,l7 as ye,wX as ti,hx as Te,bs as ii,_ as lt,ed as oi,wY as Ge,lX as ri,pH as ai,ry as si,lc as ni,fL as Ie,cG as li,cF as M,eM as H,cC as ct,cD as N,eJ as L}from"./index-SKgyE3lZ.js";import{m as ci}from"./mathUtils-IkMysAn-.js";import{j as ui}from"./sphere-pwU1ieVW.js";import{I as hi,J as di,d as R,t as B,K as fi,L as ut,f as pi,e as gi,M as ht,O as ke,P as mi,l as vi,Q as dt,R as ft,S as bi,U as pt,w as gt,x as mt,V as wi,W as fe,X as xi,u as yi,i as $i,k as _i,q as Si,Y as Pe,p as je,Z as Ci,$ as Ai,a0 as Oi,a1 as qe,a2 as zi,r as Pi,B as ji,E as Vi,a3 as Di,a4 as Le}from"./OutputColorHighlightOLID.glsl-DpGxdV1p.js";import{a as vt,K as bt,n as We}from"./InterleavedLayout-C2BAtVS9.js";import{e as Fi,i as wt}from"./doublePrecisionUtils-L_Od7PUE.js";import{p as Mi}from"./Octree-458xO28-.js";import{t as Ne,n as V,e as G}from"./vec3f32-CTt429Kd.js";import{g as Ee,d as Ti}from"./Indices-CRgDQqIs.js";import{v as Ei,C as Bi,N as Ri}from"./plane-Dz45ttnC.js";import{b as Ui}from"./ray-D3NPSTJ7.js";import{t as x}from"./orientedBoundingBox-IE33fWjc.js";import{r as Hi,i as xt,e as C,t as ce,b as ue,a as E,u as Ye,s as Gi}from"./getEmissions.glsl-Cov6HEX5.js";import{t as Ii}from"./NoParameters-oniR9cXl.js";import{T as yt,o as ki,g as $t,h as qi}from"./RenderingContext-C5Kdhc0V.js";function Li(i){return Wi.has(i)}const Wi=new Set("position.normal.normalCompressed.uv0.size.rotation.offset.perspectiveDivide.centerOffset.groundDistance.previousDelta.lineParameters.sizeFeatureAttribute.profileRight.profileUp.pathVertexInfo.profileRotation.pathRotationUp.pathMaxStretchDistance.featureAttribute.position.size.sizeFeatureAttribute.profileRight.profileUp.profileRotation.pathRotationUp.pathMaxStretchDistance".split("."));let Ke=class{constructor(){this.box=rt(),this.sphere=new ui}};function Ni(i,e,t){let o=Tt(e,Ki),r=Et(e,Qi);if(Bt(t)){let a=he(Yi,t[12],t[13],t[14]);F(k,o,a),F(q,r,a),J(i,k),J(i,q);return}if(ie(k,o,t),J(i,k),!Rt(o,r)){ie(q,r,t),J(i,q);for(let a=0;a<3;++a)X(k,o),X(q,r),k[a]=r[a],q[a]=o[a],ie(k,k,t),ie(q,q,t),J(i,k),J(i,q)}}const Yi=j(),k=j(),q=j(),Ki=j(),Qi=j();function Xi(i,e){return i??=[],i.push(e),i}function Ji(i,e){if(i==null)return null;let t=i.filter(o=>o!==e);return t.length===0?null:t}function fr(i,e,t,o,r){pe[0]=i.get(e,0),pe[1]=i.get(e,1),pe[2]=i.get(e,2),Fi(pe,K,3),t.set(r,0,K[0]),o.set(r,0,K[1]),t.set(r,1,K[2]),o.set(r,1,K[3]),t.set(r,2,K[4]),o.set(r,2,K[5])}const pe=j(),K=new Float32Array(6);let pr=class{constructor(e={}){this.id=at(),this.type=0,this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=rt()),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){vt(this._layer==null||e==null,"Object3D can only be added to a single Layer"),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(let t of this._highlightIds)e.addHighlight(t);this._emit("geometriesChanged",{object:this,removed:[],added:[e]}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(e){let t=this._geometries.splice(e,1)[0];if(t){for(let o of this._highlightIds)t.removeHighlight(o);this._emit("geometriesChanged",{object:this,removed:[t],added:[]}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}replaceGeometries(e){let t=this._geometries,o=Array.from(e);for(let r of t)for(let a of this._highlightIds)r.removeHighlight(a);for(let r of o){r.visible=this._visible;for(let a of this._highlightIds)r.addHighlight(a)}this._geometries=o,this._invalidateBoundingVolume(),this._emit("geometriesChanged",{object:this,removed:t,added:o}),this._highlightIds.size&&this._emit("highlightChanged",this)}geometryVertexAttributeUpdated(e,t,o=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:o}),Li(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(let t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){let e=new hi;for(let t of this._geometries)t.occludees=Xi(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(let t of this._geometries)t.occludees=Ji(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){let t=new di(e);for(let o of this._geometries)o.addHighlight(t);return this._emit("highlightChanged",this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(let t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return Re(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=ze()){return Re(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new Ke,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new Ke,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,t){let o=t===1;for(let r of this._geometries){let a=r.boundingInfo;a&&Ni(e.box,a.box,o?r.transformation:this.getCombinedShaderTransformation(r))}Ut(e.box,e.sphere.center);for(let r of this._geometries){let a=r.boundingInfo;if(a==null)continue;let s=o?r.transformation:this.getCombinedShaderTransformation(r),p=ci(s);ie(Qe,a.sphere.center,s);let h=Ht(Qe,e.sphere.center),n=a.sphere.radius*p;e.sphere.radius=Math.max(e.sphere.radius,h+n)}}_invalidateBoundingVolume(){let e=this._bvWorldSpace?.sphere;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){this.layer?.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??Gt}set transformation(e){this._transformation=Ue(this._transformation??ze(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Ue(this._shaderTransformation??ze(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}};const Qe=j(),Zi=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometriesChanged","attributesChanged"];let mr=class{constructor(e,t,o=""){this.stage=e,this.apiLayerViewUid=o,this.id=at(),this.events=new It,this.visible=!0,this.sliceable=!1,this._objectsAdded=[],this._handles=new kt,this._objects=new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??0,e.addLayer(this);for(let r of Zi)this._handles.add(this.events.on(r,a=>e.handleEvent(r,a)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return qt(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit("layerObjectRemoved",e),e.layer=null,this._octree!=null&&(He(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(let t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit("layerObjectsAdded",e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){let t=[];for(let o of e)this._objects.delete(o.id)&&t.push(o);if(t.length!==0&&(this.events.emit("layerObjectsRemoved",t),t.forEach(o=>o.layer=null),this._octree!=null)){for(let o=0;o<t.length;)He(this._objectsAdded,t[o])?(t[o]=t[t.length-1],--t.length):++o;this._octree.remove(t)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree!=null&&!this._objectsAdded.includes(e)&&this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new Mi(e=>e.boundingVolumeWorldSpace.sphere),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Lt(this._octree),this._objectsAdded.length=0}get test(){}};var ne,Y;let ge=(Y=class extends Wt{constructor(e){super(e),this.type="foggy",this.fogStrength=.5}clone(){return new ne({fogStrength:this.fogStrength})}get scattering(){return Nt(ne.minScattering,ne.maxScattering,this.fogStrength**3)}},ne=Y,Y.minScattering=3e-5,Y.maxScattering=.005,Y);I([Yt({foggy:"foggy"}),le({json:{write:{isRequired:!0}}})],ge.prototype,"type",void 0),I([le({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],ge.prototype,"fogStrength",void 0),ge=ne=I([_e("esri.views.3d.environment.FoggyWeather")],ge);let _t=class extends Hi{constructor(){super(...arguments),this.hasFog=!1}};I([xt()],_t.prototype,"hasFog",void 0);let St=class extends _t{constructor(){super(...arguments),this.hasEmissive=!1}};I([xt()],St.prototype,"hasEmissive",void 0);function Ct(i,e,t){i.push(["olidColor",new x(e,t,4,!0)])}function eo(i,e=!1){return i<=Kt?e?Array(i).fill(0):Array(i):new Float16Array(i)}function to(i,e,t){let o=i.isGeographic&&e,{metersPerUnit:r}=i,a=0;return o?(r=1,a=Qt(t)):i.isGeographic?r=st(i).metersPerDegree:i.isWebMercator&&(a=Xt(t)),r*Math.max(.2,Math.cos(a))}const D={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},io={dash:D.dash,"dash-dot":[...D.dash,...D.dot],dot:D.dot,"long-dash":D["long-dash"],"long-dash-dot":[...D["long-dash"],...D.dot],"long-dash-dot-dot":[...D["long-dash"],...D.dot,...D.dot],none:null,"short-dash":D["short-dash"],"short-dash-dot":[...D["short-dash"],...D["short-dot"]],"short-dash-dot-dot":[...D["short-dash"],...D["short-dot"],...D["short-dot"]],"short-dot":D["short-dot"],solid:null};let oo=class{constructor(e,t,o){this.image=e,this.width=t,this.length=o,this.uuid=Jt()}};function ro(i){return i!=null&&"image"in i}function At(i,e){return i==null?i:{pattern:i.slice(),pixelRatio:e}}function yr(i){return{pattern:[i,i],pixelRatio:2}}function $r(i){switch(i?.type){case"style":return ao(i.style);case"template":return so(i.normalizedDashTemplate);case"image":return new oo(i.image,i.width,i.length);case void 0:case null:return null}return null}function ao(i){return i==null?null:At(io[i],8)}function so({dashTemplate:i,hidesLine:e}){return At(e||i.length===0?null:i,8)}function _r(i){switch(i?.type){case"style":return i.style==="none";case"template":return i.normalizedDashTemplate.hidesLine;case"image":case void 0:case null:return!1}return!1}function Sr(i,e,t=null){let o=[],r=e.mapPositions,a=no(e,o),s=a.data,p=a.indices.length,h=Ee(p);return lo(e,o,h),ho(e,o,h),co(e,o,h),uo(e,o,a.indices,h),fo(e,o,a.indices,h),po(e,o),go(e,o,a.indices,h),mo(i,e,o,s),t!=null&&Ct(o,t,h),new R(i,o,r)}function no(i,e){let{attributeData:{position:t},removeDuplicateStartEnd:o}=i,r=t.length/3,a=r>2&&vo(t)&&o,s=r-+!!a,p=Array(2*(s-1)),h=a?t.slice(0,-3):t,n=0;for(let v=0;v<s-1;v++)p[n++]=v,p[n++]=v+1;let l=new x(h,p,3,a);return e.push(["position",l]),l}function lo(i,e,t){if(i.attributeData.colorFeature!=null)return;let o=i.attributeData.color;e.push(["color",new x(o??Zt,t,4)])}function co(i,e,t){i.attributeData.normal&&e.push(["normal",new x(i.attributeData.normal,t,3)])}function uo(i,e,t,o){let r=i.attributeData.colorFeature;r!=null&&(typeof r=="number"?e.push(["colorFeatureAttribute",new x([r],o,1,!0)]):e.push(["colorFeatureAttribute",new x(r,t,1,!0)]))}function ho(i,e,t){i.attributeData.sizeFeature??e.push(["size",new x([i.attributeData.size??1],t,1,!0)])}function fo(i,e,t,o){let r=i.attributeData.sizeFeature;r!=null&&(typeof r=="number"?e.push(["sizeFeatureAttribute",new x([r],o,1,!0)]):e.push(["sizeFeatureAttribute",new x(r,t,1,!0)]))}function po(i,e){let{attributeData:{position:t,timeStamps:o}}=i;if(!o)return;let r=t.length/3,a=Array(2*(r-1)),s=0;for(let p=0;p<r-1;p++)a[s++]=p,a[s++]=p+1;e.push(["timeStamps",new x(o,a,Ot,!0)])}function go(i,e,t,o){let r=i.attributeData.opacityFeature;r!=null&&(typeof r=="number"?e.push(["opacityFeatureAttribute",new x([r],o,1,!0)]):e.push(["opacityFeatureAttribute",new x(r,t,1,!0)]))}function mo(i,{overlayInfo:e},t,o){let r=i.parameters;if(e==null||!bo(r)||r.stipplePattern==null)return;let{renderCoordsHelper:a,spatialReference:s}=e,p=s.isGeographic&&a.viewingMode===1,h=r.worldSized||ro(r.stipplePattern);if(!h&&!p)return;let n=o;if(p){let d=nt(o.length),c=st(s);for(let A=0;A<d.length;A+=3)ei(o,A,d,A,c);n=d}let l=o.length/3,v=B(l+1),S=a.viewingMode===1,w=wo,b=xo,g=0,f=0,m=0;ye(w,n[f++],n[f++]),f++,v[0]=0;for(let d=1;d<l+1;++d){d===l&&(f=0);let c=f;ye(b,n[f++],n[f++]),f++;let A=(o[m+1]+o[c+1])/2,u=h?to(s,S,A):1;g+=ti(w,b)*u,v[d]=g,[w,b]=[b,w],m=c}t.push(["distanceToStart",new x(v,t[0][1].indices,1,!0)])}function vo(i){let e=i.length;return i[0]===i[e-3]&&i[1]===i[e-2]&&i[2]===i[e-1]}function bo(i){return"stipplePattern"in i}const wo=Te(),xo=Te(),Ot=4;function yo(i,e){let t=eo(i.length*4),o=i[0],r=i[i.length-1];for(let a=0;a<i.length;a++)t[a*4]=i[a],t[a*4+1]=o,t[a*4+2]=r,t[a*4+3]=e+.5;return t}function Xe(i,e){let t=i[e],o=i[e+1],r=i[e+2];return Math.sqrt(t*t+o*o+r*r)}function $o(i,e){let t=i[e],o=i[e+1],r=i[e+2],a=1/Math.sqrt(t*t+o*o+r*r);i[e]*=a,i[e+1]*=a,i[e+2]*=a}function Je(i,e,t){i[e]*=t,i[e+1]*=t,i[e+2]*=t}function _o(i,e,t,o,r,a=e){r||=i,r[a]=i[e]+t[o],r[a+1]=i[e+1]+t[o+1],r[a+2]=i[e+2]+t[o+2]}function So(i){i.uniforms.add(new fi("alignPixelEnabled",e=>e.alignPixelEnabled)),i.code.add(C`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),i.code.add(C`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}const Co=.5;function Ao(i,e){let t=i.vertex;i.include(ut),i.attributes.add("position","vec3"),i.vertex.inputs.add("position",()=>"position"),i.attributes.add("normal","vec3"),e.hasVertexCenterOffset?i.attributes.add("centerOffset","vec3"):t.constants.add("centerOffset","vec3",[0,0,0]),i.attributes.add("groundDistance","float"),pi(t,e),gi(t,e),t.uniforms.add(ht,new ce("polygonOffset",o=>o.shaderPolygonOffset),new ke("aboveGround",o=>o.camera.aboveGround?1:-1)),e.hasVerticalOffset&&mi(t),t.code.add(C`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),t.code.add(C`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = aboveGround;
}
float groundRelative = aboveGround * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),(!e.draped||e.hasVerticalOffset)&&t.uniforms.add(vi),e.draped||(t.uniforms.add(new ke("hudPixelSizePerDistance",o=>Math.tan(o.camera.fovY/2)/(o.camera.fullViewport[2]/2))),t.code.add(C`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * hudPixelSizePerDistance * ${C.float(Co)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&dt(t),e.hasScreenSizePerspective&&ft(t),t.code.add(C`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      float pointGroundDistance = groundDistance;
      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?C`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":C`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}const Oo=C`vec4(0.0, 0.0, 2.0, 1.0)`;let zt=class extends Ii{constructor(){super(...arguments),this.effect=0,this.fadeFactor=ii(1)}};function zo(i){let e=new wt;return e.include(bi),e.outputs.add("fragColor","vec4",0),e.fragment.uniforms.add(new ue("colorTexture",t=>t.color),new ue("emissionTexture",t=>t.emission),new ue("focusArea",t=>t.focusArea),new pt("focusAreaEffectMode",t=>t.effect),new ce("fadeFactor",t=>t.fadeFactor.value)).constants.add("EffectBright","int",0).code.add("float getLuminance(in vec4 color) { return color.r * 0.25 + color.g * 0.5 + color.b * 0.25; }").main.add(`
      float mask = texture(focusArea, uv).r;
      
      if (focusAreaEffectMode == EffectBright) {
        vec4 color = texture(colorTexture, uv);
        float luminance = getLuminance(color);
        fragColor = mask > 0.0 ? color : mix(color, vec4(0.55 * luminance + 0.45), fadeFactor);
      } else {
        if(mask > 0.0) discard;
        fragColor = vec4(vec3(0.0), fadeFactor * 0.67);
      }
  `),i.hasEmissive&&(e.outputs.add("fragEmission","vec4",1),e.fragment.main.add(C`if (focusAreaEffectMode == EffectBright) {
vec4 color = texture(emissionTexture, uv);
float luminance = getLuminance(color);
fragEmission = mask > 0.0 ? color : mix(color, vec4(0.67 * luminance), fadeFactor);
} else
fragEmission = vec4(vec3(0.0), fadeFactor * 0.9);`)),e}const Po=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaPassParameters:zt,build:zo},Symbol.toStringTag,{value:"Module"}));let $e=class extends gt{constructor(){super(...arguments),this.shader=new mt(Po,()=>lt(()=>import("./RibbonLine.glsl-Dh2rIEwl.js").then(i=>i.F),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]))),this.ignoreUnused=!0}initializePipeline(){return yt({colorWrite:$t,blending:ki})}};$e=I([_e("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaTechnique")],$e);let se=class extends wi{constructor(i){super({...i,view:i.focusAreasView.view}),this.consumes={required:[fe.FOCUSAREA,fe.FOCUSAREA_MASK]},this.produces=fe.FOCUSAREA,this._fadeDirection=0,this._configuration=new St,this._passParameters=new zt}fadeOut(i){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(oi(()=>this._passParameters.fadeFactor.value,e=>{e===0&&(this.removeAllHandles(),i())})),this.requestRender(2)}precompile(){this._configuration.hasEmissive=this.bindParameters.emissions!==0,this.techniques.precompile($e,this._configuration)}render(i){let e=this.bindParameters;this._startTime??=this.view.stage?.renderer.renderContext.time;let t=this.view.qualitySettings.fadeDuration,o=t>0?Math.min(t,this.view.stage?.renderer.renderContext.time-this._startTime)/t:1,r=this.renderingContext,a=this.techniques.get($e,this._configuration),s=this.input,p=i.find(({name:w})=>w===fe.FOCUSAREA_MASK),h=this.focusAreasView.style==="bright";this._passParameters.color=this._passParameters.emission=r.emptyTexture,this._passParameters.focusArea=p.getTexture(),this._passParameters.effect=Pt[this.focusAreasView.style],this._passParameters.fadeFactor.value=this._fadeDirection===0?o:1-o;let n=e.camera,l=n.fullViewport[2],v=n.fullViewport[3],S=h?this.fboCache.acquire(l,v,this.produces):s;if(h){if(this._passParameters.color=s.getTexture(),this._configuration.hasEmissive){this._passParameters.emission=s.getTexture(Ge);let w=this._passParameters.emission?.descriptor.internalFormat===ri.RGBA16F?8:5;S.acquireColor(Ge,w,"emissive")}S.moveAttachments(s),r.bindFramebuffer(S.fbo),r.setClearColor(0,0,0,0),r.clear(16384)}else r.bindFramebuffer(S.fbo);return r.bindTechnique(a,e,this._passParameters),r.screen.draw(),o<1&&this.requestRender(2),S}};I([le()],se.prototype,"consumes",void 0),I([le()],se.prototype,"produces",void 0),I([le({constructOnly:!0})],se.prototype,"focusAreasView",void 0),se=I([_e("esri.views.3d.webgl-engine.effects.focusArea.FocusArea")],se);const Pt={bright:0,dark:1},jo=i=>i?Pt[i]:0;function Vo(i){let e=new wt;e.include(Ao,i),e.vertex.include(xi,i);let{output:t,hasOcclusionTexture:o,signedDistanceFieldEnabled:r,pixelSnappingEnabled:a,hasEmission:s,hasScreenSizePerspective:p,debugDrawLabelBorder:h,hasVVSize:n,hasVVColor:l,hasRotation:v,occludedFragmentFade:S,sampleSignedDistanceFieldTexelCenter:w,hasVertexColor:b,hasVertexSize:g,hasVertexRotation:f,hasVertexUVi:m}=i;e.include(ut),e.include(yi,i),e.include($i,i),e.include(_i,i);let{vertex:d,fragment:c}=e;c.include(Si),c.code.add(C`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${C.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");let A=t===10;d.uniforms.add(ht,new Pe("screenOffset",(y,U)=>ye(me,y.screenOffset[0]*2*U.camera.pixelRatio,y.screenOffset[1]*2*U.camera.pixelRatio)),new Pe("anchorPosition",y=>jt(y)),new je("materialColor",({color:y})=>y),new ce("materialRotation",y=>y.rotation),new Pe("materialSize",y=>y.size),new ue("tex",y=>y.texture)),dt(d),r&&(d.uniforms.add(new je("outlineColor",y=>y.outlineColor)),c.uniforms.add(new je("outlineColor",y=>Ze(y)?y.outlineColor:si),new ce("outlineSize",y=>Ze(y)?y.outlineSize:0))),a&&d.include(So),p&&(Ci(d),ft(d)),h&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),m&&e.attributes.add("uvi","vec4"),b&&e.attributes.add("color","vec4"),g&&e.attributes.add("size","vec2"),f&&e.attributes.add("rotation","float"),(n||l)&&e.attributes.add("featureAttribute","vec4"),d.main.add(C`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${Oo};
      return;
    }

    vec2 vertexSize = materialSize${E(g," * size")};
    vec2 inputSize;
    ${E(p,C`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,C`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${E(n,C`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);let u=C`
  ${E(m,C`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,C`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${E(v,C`
        float angle = radians(materialRotation${E(f," + rotation")});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,O=a?r?C`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:C`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:C`posProj += quadOffset;`;d.include(Ai),d.main.add(C`
    ${u}
    ${l?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":b?"vcolor = color * materialColor;":"vcolor = materialColor;"}

    ${E(t===11,C`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${E(r,"alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;")}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${O}
      gl_Position = posProj;
    }

    vtc = uv;

    ${E(h,C`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);let z=Ye(t)&&i.hasFocusAreaStyle&&!i.draped;switch(c.uniforms.add(new ue("tex",y=>y.texture)),z&&c.uniforms.add(new pt("focusAreaStyle",y=>jo(y.focusAreaStyle))),S&&!A&&(c.include(Oi),c.uniforms.add(new qe("depthMap",y=>y.mainDepth),new ce("occludedOpacity",y=>y.occludedFragmentOpacity?.value??1))),o&&c.uniforms.add(new qe("texOcclusion",y=>y.hudOcclusion?.attachment)),h?c.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):c.main.add("float textureAlphaCutoff = alphaCutoff;"),c.main.add("vec2 samplePos = vtc;"),w&&c.main.add(C`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),r?c.main.add(C`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${E(!A,C`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${E(!A,C`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):c.main.add(C`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${E(!A,C`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),S&&!A&&c.main.add(C`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${C.float(1-Fo)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),o&&c.main.add("fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;"),!A&&h&&c.main.add("fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);"),t===2&&c.main.add(C`if (fragColor.a < alphaCutoff) {
discard;
}`),z&&c.main.add(C`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),Ye(t)&&s&&c.main.add("fragEmission = vec4(0.0);"),t){case 1:c.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:c.main.add("fragColor.rgb /= fragColor.a;");break;case 11:c.main.add("outputObjectAndLayerIdColor();");break;case 10:e.include(zi,i),c.main.add("outputHighlight(false);")}return e}function Ze(i){return i.outlineColor[3]>0&&i.outlineSize>0}function jt(i){return i.textureIsSignedDistanceField?Do(i.anchorPosition,i.distanceFieldBoundingBox,me):ai(me,i.anchorPosition),me}const me=Te();function Do(i,e,t){ye(t,i[0]*(e[2]-e[0])+e[0],i[1]*(e[3]-e[1])+e[1])}const Fo=.08,Mo=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:jt,build:Vo},Symbol.toStringTag,{value:"Module"}));let et=class extends gt{constructor(i,e){super(i,e,We(To).concat(We(Eo(e)))),this.shader=new mt(Mo,()=>lt(()=>import("./RibbonLine.glsl-Dh2rIEwl.js").then(t=>t.H),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]))),this.ignoreUnused=!0,this.primitiveType=ni.TRIANGLE_STRIP}initializePipeline(i){let{draped:e,output:t,depthTestEnabled:o}=i,r=Gi(t),a=o&&!e&&!r&&t!==10;return yt({blending:Vi(t,!0),depthTest:o&&!e?{func:515}:null,depthWrite:a?qi:null,colorWrite:$t,polygonOffset:ji(i)})}};et=I([_e("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],et);const To=bt().vec2u8("uv0",{glNormalized:!0});function Eo(i){let e=bt().vec3f("position").vec3f("normal").f32("groundDistance");return i.hasVertexCenterOffset&&(e=e.vec3f("centerOffset")),i.hasVertexColor&&(e=e.vec4u8("color",{glNormalized:!0})),i.hasVertexSize&&(e=e.vec2f("size")),i.hasVertexRotation&&(e=e.f32("rotation")),(i.hasVVColor||i.hasVVSize)&&(e=e.vec4f("featureAttribute")),i.hasVertexUVi&&(e=e.vec4i16("uvi")),Pi()?e.vec4u8("olidColor"):e}function Bo(){return tt??=Ro(),tt}function Ro(){let i=new x([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new Di([["uv0",i]])}let tt=null;const Ve=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Uo=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Ho=[0,0,1,0,1,1,0,1],Go=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Vt=Array(36);for(let i=0;i<6;i++)for(let e=0;e<6;e++)Vt[i*6+e]=i;const Q=Array(36);for(let i=0;i<6;i++)Q[i*6]=0,Q[i*6+1]=1,Q[i*6+2]=2,Q[i*6+3]=2,Q[i*6+4]=3,Q[i*6+5]=0;function Ar(i,e){Array.isArray(e)||(e=[e,e,e]);let t=Array(24);for(let o=0;o<8;o++)t[o*3]=Ve[o][0]*e[0],t[o*3+1]=Ve[o][1]*e[1],t[o*3+2]=Ve[o][2]*e[2];return new R(i,[["position",new x(t,Go,3,!0)],["normal",new x(Uo,Vt,3)],["uv0",new x(Ho,Q,2)]])}const De=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Io=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],ko=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],qo=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Or(i,e){Array.isArray(e)||(e=[e,e,e]);let t=Array(18);for(let o=0;o<6;o++)t[o*3]=De[o][0]*e[0],t[o*3+1]=De[o][1]*e[1],t[o*3+2]=De[o][2]*e[2];return new R(i,[["position",new x(t,ko,3,!0)],["normal",new x(Io,qo,3)]])}const ve=V(-.5,0,-.5),be=V(.5,0,-.5),we=V(0,0,.5),xe=V(0,.5,0),Z=G(),ee=G(),oe=G(),re=G(),ae=G();L(Z,ve,xe),L(ee,ve,be),N(oe,Z,ee),M(oe,oe),L(Z,be,xe),L(ee,be,we),N(re,Z,ee),M(re,re),L(Z,we,xe),L(ee,we,ve),N(ae,Z,ee),M(ae,ae);const Fe=[ve,be,we,xe],Lo=[0,-1,0,oe[0],oe[1],oe[2],re[0],re[1],re[2],ae[0],ae[1],ae[2]],Wo=[0,1,2,3,1,0,3,2,1,3,0,2],No=[0,0,0,1,1,1,2,2,2,3,3,3];function zr(i,e){Array.isArray(e)||(e=[e,e,e]);let t=Array(12);for(let o=0;o<4;o++)t[o*3]=Fe[o][0]*e[0],t[o*3+1]=Fe[o][1]*e[1],t[o*3+2]=Fe[o][2]*e[2];return new R(i,[["position",new x(t,Wo,3,!0)],["normal",new x(Lo,No,3)]])}function Pr(i,e,t,o,r={uv:!0}){let a=-Math.PI,s=Math.PI*2,p=-Math.PI/2,h=Math.PI,n=Math.max(3,Math.floor(t)),l=Math.max(2,Math.floor(o)),v=(n+1)*(l+1),S=B(v*3),w=B(v*3),b=B(v*2),g=[],f=0;for(let c=0;c<=l;c++){let A=[],u=c/l,O=p+u*h,z=Math.cos(O);for(let y=0;y<=n;y++){let U=y/n,$=a+U*s,T=Math.cos($)*z,P=Math.sin(O),de=-Math.sin($)*z;S[3*f]=T*e,S[3*f+1]=P*e,S[3*f+2]=de*e,w[3*f]=T,w[3*f+1]=P,w[3*f+2]=de,b[2*f]=U,b[2*f+1]=u,A.push(f),++f}g.push(A)}let m=[];for(let c=0;c<l;c++)for(let A=0;A<n;A++){let u=g[c][A],O=g[c][A+1],z=g[c+1][A+1],y=g[c+1][A];c===0?(m.push(u),m.push(z),m.push(y)):c===l-1?(m.push(u),m.push(O),m.push(z)):(m.push(u),m.push(O),m.push(z),m.push(z),m.push(y),m.push(u))}let d=[["position",new x(S,m,3,!0)],["normal",new x(w,m,3,!0)]];return r.uv&&d.push(["uv0",new x(b,m,2,!0)]),r.offset&&(d[0][0]="offset",d.push(["position",new x(Float64Array.from(r.offset),Ee(m.length),3,!0)])),new R(i,d)}function jr(i,e,t,o){let r=Yo(e,t);return new R(i,r)}function Yo(i,e,t){let o,r;o=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let h=0;h<o.length;h+=3)Je(o,h,i/Xe(o,h));let a={};function s(h,n){h>n&&([h,n]=[n,h]);let l=h.toString()+"."+n.toString();if(a[l])return a[l];let v=o.length;return o.length+=3,_o(o,h*3,o,n*3,o,v),Je(o,v,i/Xe(o,v)),v/=3,a[l]=v,v}for(let h=0;h<e;h++){let n=r.length,l=Array(n*4);for(let v=0;v<n;v+=3){let S=r[v],w=r[v+1],b=r[v+2],g=s(S,w),f=s(w,b),m=s(b,S),d=v*4;l[d]=S,l[d+1]=g,l[d+2]=m,l[d+3]=w,l[d+4]=f,l[d+5]=g,l[d+6]=b,l[d+7]=m,l[d+8]=f,l[d+9]=g,l[d+10]=f,l[d+11]=m}r=l,a={}}let p=Le(o);for(let h=0;h<p.length;h+=3)$o(p,h);return[["position",new x(Le(o),r,3,!0)],["normal",new x(p,r,3,!0)]]}function Vr(i,{normal:e,position:t,color:o,rotation:r,size:a,centerOffset:s,groundDistance:p,uvi:h,featureAttribute:n,olidColor:l=null}={}){let v=t?Ie(t):j(),S=e?Ie(e):li(0,0,1),w=p==null?[1]:[p],b=Ee(1),g=[["position",new x(v,b,3,!0)],["normal",new x(S,b,3,!0)]],f=a!=null&&a.length===2?a:null;if(f&&g.push(["size",new x(f,b,2)]),r!=null&&g.push(["rotation",new x([r],b,1,!0)]),o){let m=[o[0],o[1],o[2],o.length>3?o[3]:255];g.push(["color",new x(m,b,4,!0)])}if(h&&g.push(["uvi",new x(h,b,h.length)]),s&&g.push(["centerOffset",new x(s,b,3)]),g.push(["groundDistance",new x(w,b,1)]),n){let m=[n[0],n[1],n[2],n[3]];g.push(["featureAttribute",new x(m,b,4)])}return l!=null&&Ct(g,l,b),new R(i,g,null,void 0,Bo())}function Ko(i,e,t,o,r=!0,a=!0){let s=0,p=e,h=i,n=V(0,s,0),l=V(0,s+h,0),v=V(0,-1,0),S=V(0,1,0);o&&(s=h,l=V(0,0,0),n=V(0,s,0),v=V(0,1,0),S=V(0,-1,0));let w=[l,n],b=[v,S],g=t+2,f=Math.sqrt(h*h+p*p);if(o)for(let u=t-1;u>=0;u--){let O=2*Math.PI/t*u,z=V(Math.cos(O)*p,s,Math.sin(O)*p);w.push(z);let y=V(h*Math.cos(O)/f,-p/f,h*Math.sin(O)/f);b.push(y)}else for(let u=0;u<t;u++){let O=2*Math.PI/t*u,z=V(Math.cos(O)*p,s,Math.sin(O)*p);w.push(z);let y=V(h*Math.cos(O)/f,p/f,h*Math.sin(O)/f);b.push(y)}let m=[],d=[];if(r){for(let u=3;u<w.length;u++)m.push(1),m.push(u-1),m.push(u),d.push(0),d.push(0),d.push(0);m.push(w.length-1),m.push(2),m.push(1),d.push(0),d.push(0),d.push(0)}if(a){for(let u=3;u<w.length;u++)m.push(u),m.push(u-1),m.push(0),d.push(u),d.push(u-1),d.push(1);m.push(0),m.push(2),m.push(w.length-1),d.push(1),d.push(2),d.push(b.length-1)}let c=B(g*3);for(let u=0;u<g;u++)c[u*3]=w[u][0],c[u*3+1]=w[u][1],c[u*3+2]=w[u][2];let A=B(g*3);for(let u=0;u<g;u++)A[u*3]=b[u][0],A[u*3+1]=b[u][1],A[u*3+2]=b[u][2];return[["position",new x(c,m,3,!0)],["normal",new x(A,d,3,!0)]]}function Dr(i,e,t,o,r,a=!0,s=!0){return new R(i,Ko(e,t,o,r,a,s))}function Fr(i,e,t,o,r,a,s){let p=r?Ne(r):V(1,0,0),h=a?Ne(a):V(0,0,0);s??=!0;let n=G();M(n,p);let l=G();H(l,n,Math.abs(e));let v=G();H(v,l,-.5),F(v,v,h);let S=V(0,1,0);Math.abs(1-ct(n,S))<.2&&he(S,0,0,1);let w=G();N(w,n,S),M(w,w),N(S,w,n);let b=o*2+(s?2:0),g=o+(s?2:0),f=B(b*3),m=B(g*3),d=B(b*2),c=Array(o*3*(s?4:2)),A=Array(o*3*(s?4:2));s&&(f[(b-2)*3]=v[0],f[(b-2)*3+1]=v[1],f[(b-2)*3+2]=v[2],d[(b-2)*2]=0,d[(b-2)*2+1]=0,f[(b-1)*3]=f[(b-2)*3]+l[0],f[(b-1)*3+1]=f[(b-2)*3+1]+l[1],f[(b-1)*3+2]=f[(b-2)*3+2]+l[2],d[(b-1)*2]=1,d[(b-1)*2+1]=1,m[(g-2)*3]=-n[0],m[(g-2)*3+1]=-n[1],m[(g-2)*3+2]=-n[2],m[(g-1)*3]=n[0],m[(g-1)*3+1]=n[1],m[(g-1)*3+2]=n[2]);let u=($,T,P)=>{c[$]=T,A[$]=P},O=0,z=G(),y=G();for(let $=0;$<o;$++){let T=2*Math.PI/o*$;H(z,S,Math.sin(T)),H(y,w,Math.cos(T)),F(z,z,y),m[$*3]=z[0],m[$*3+1]=z[1],m[$*3+2]=z[2],H(z,z,t),F(z,z,v),f[$*3]=z[0],f[$*3+1]=z[1],f[$*3+2]=z[2],d[$*2]=$/o,d[$*2+1]=0,f[($+o)*3]=f[$*3]+l[0],f[($+o)*3+1]=f[$*3+1]+l[1],f[($+o)*3+2]=f[$*3+2]+l[2],d[($+o)*2]=$/o,d[$*2+1]=1;let P=($+1)%o;u(O++,$,$),u(O++,$+o,$),u(O++,P,P),u(O++,P,P),u(O++,$+o,$),u(O++,P+o,P)}if(s){for(let $=0;$<o;$++){let T=($+1)%o;u(O++,b-2,g-2),u(O++,$,g-2),u(O++,T,g-2)}for(let $=0;$<o;$++){let T=($+1)%o;u(O++,$+o,g-1),u(O++,b-1,g-1),u(O++,T+o,g-1)}}let U=[["position",new x(f,c,3,!0)],["normal",new x(m,A,3,!0)],["uv0",new x(d,c,2,!0)]];return new R(i,U)}function Mr(i,e,t,o,r,a){o||=10,r??=!0,vt(e.length>1);let s=[[0,0,0]],p=[],h=[];for(let n=0;n<o;n++){p.push([0,-n-1,-((n+1)%o)-1]);let l=n/o*2*Math.PI;h.push([Math.cos(l)*t,Math.sin(l)*t])}return Qo(i,h,e,s,p,r,a)}function Qo(i,e,t,o,r,a,s=V(0,0,0)){let p=e.length,h=B(t.length*p*3+(o.length*6||0)),n=B(t.length*p*3+(o?6:0)),l=[],v=[],S=0,w=0,b=j(),g=j(),f=j(),m=j(),d=j(),c=j(),A=j(),u=j(),O=j(),z=j(),y=j(),U=j(),$=j(),T=Ei();he(O,0,1,0),L(g,t[1],t[0]),M(g,g),a?(F(u,t[0],s),M(f,u)):he(f,0,0,1),it(g,f,O,O,d,f,ot),X(m,f),X(U,d);for(let _=0;_<o.length;_++)H(c,d,o[_][0]),H(u,f,o[_][2]),F(c,c,u),F(c,c,t[0]),h[S++]=c[0],h[S++]=c[1],h[S++]=c[2];n[w++]=-g[0],n[w++]=-g[1],n[w++]=-g[2];for(let _=0;_<r.length;_++)l.push(r[_][0]>0?r[_][0]:-r[_][0]-1+o.length),l.push(r[_][1]>0?r[_][1]:-r[_][1]-1+o.length),l.push(r[_][2]>0?r[_][2]:-r[_][2]-1+o.length),v.push(0),v.push(0),v.push(0);let P=o.length,de=o.length-1;for(let _=0;_<t.length;_++){let Be=!1;_>0&&(X(b,g),_<t.length-1?(L(g,t[_+1],t[_]),M(g,g)):Be=!0,F(z,b,g),M(z,z),F(y,t[_-1],m),Bi(t[_],z,T),Ri(T,Ui(y,b),u)?(L(u,u,t[_]),M(f,u),N(d,z,f),M(d,d)):it(z,m,U,O,d,f,ot),X(m,f),X(U,d)),a&&(F(u,t[_],s),M($,u));for(let W=0;W<p;W++)if(H(c,d,e[W][0]),H(u,f,e[W][1]),F(c,c,u),M(A,c),n[w++]=A[0],n[w++]=A[1],n[w++]=A[2],F(c,c,t[_]),h[S++]=c[0],h[S++]=c[1],h[S++]=c[2],!Be){let Ae=(W+1)%p;l.push(P+W),l.push(P+p+W),l.push(P+Ae),l.push(P+Ae),l.push(P+p+W),l.push(P+p+Ae);for(let Oe=0;Oe<6;Oe++){let Mt=l.length-6;v.push(l[Mt+Oe]-de)}}P+=p}let Dt=t[t.length-1];for(let _=0;_<o.length;_++)H(c,d,o[_][0]),H(u,f,o[_][1]),F(c,c,u),F(c,c,Dt),h[S++]=c[0],h[S++]=c[1],h[S++]=c[2];let Se=w/3;n[w++]=g[0],n[w++]=g[1],n[w++]=g[2];let Ce=P-p;for(let _=0;_<r.length;_++)l.push(r[_][0]>=0?P+r[_][0]:-r[_][0]-1+Ce),l.push(r[_][2]>=0?P+r[_][2]:-r[_][2]-1+Ce),l.push(r[_][1]>=0?P+r[_][1]:-r[_][1]-1+Ce),v.push(Se),v.push(Se),v.push(Se);let Ft=[["position",new x(h,l,3,!0)],["normal",new x(n,v,3,!0)]];return new R(i,Ft)}function Tr(i,e,t,o,r){let a=nt(e.length*3),s=Array(2*(e.length-1)),p=0,h=0;for(let l=0;l<e.length;l++){for(let v=0;v<3;v++)a[p++]=e[l][v];l>0&&(s[h++]=l-1,s[h++]=l)}let n=[["position",new x(a,s,3,!0)]];if(t?.length===e.length&&t[0].length===3){let l=B(t.length*3),v=0;for(let S=0;S<e.length;S++)for(let w=0;w<3;w++)l[v++]=t[S][w];n.push(["normal",new x(l,s,3,!0)])}if(o&&n.push(["color",new x(o,Ti(o.length/4),4)]),r?.length===e.length){let l=yo(r,1);n.push(["timeStamps",new x(l,s,Ot,!0)])}return new R(i,n,null)}function Er(i,e,t,o,r,a=0){let s=Array(18),p=[[-t,a,r/2],[o,a,r/2],[0,e+a,r/2],[-t,a,-r/2],[o,a,-r/2],[0,e+a,-r/2]],h=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let n=0;n<6;n++)s[n*3]=p[n][0],s[n*3+1]=p[n][1],s[n*3+2]=p[n][2];return new R(i,[["position",new x(s,h,3,!0)]])}function Br(i,e){let t=i.getMutableAttribute("position").data;for(let o=0;o<t.length;o+=3){let r=t[o],a=t[o+1],s=t[o+2];he(te,r,a,s),ie(te,te,e),t[o]=te[0],t[o+1]=te[1],t[o+2]=te[2]}}function Rr(i,e=i){let t=i.attributes,o=t.get("position").data,r=t.get("normal").data;if(r){let a=e.getMutableAttribute("normal").data;for(let s=0;s<r.length;s+=3){let p=r[s+1];a[s+1]=-r[s+2],a[s+2]=p}}if(o){let a=e.getMutableAttribute("position").data;for(let s=0;s<o.length;s+=3){let p=o[s+1];a[s+1]=-o[s+2],a[s+2]=p}}}function Me(i,e,t,o,r){return Math.abs(ct(e,i))>r?!1:(N(t,i,e),M(t,t),N(o,t,i),M(o,o),!0)}function it(i,e,t,o,r,a,s){return Me(i,e,r,a,s)||Me(i,t,r,a,s)||Me(i,o,r,a,s)}const ot=.99619469809,te=j();export{Br as A,Mr as B,Qo as C,$r as D,_r as E,fr as F,it as G,eo as H,jt as N,Rr as S,Ar as V,Eo as _,mr as a,Tr as b,Pr as c,Vr as d,Co as e,Fr as f,To as g,et as h,ro as i,Dr as j,So as k,jr as l,Ao as m,Or as n,Ct as o,Li as p,zt as q,St as r,zr as s,Oo as t,zo as u,Vo as v,yr as w,Sr as x,pr as y,Er as z};
