const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RibbonLine.glsl-Dh2rIEwl.js","assets/index-SKgyE3lZ.js","assets/index-BdHSPmIO.css","assets/getEmissions.glsl-Cov6HEX5.js","assets/NoParameters-oniR9cXl.js","assets/doublePrecisionUtils-L_Od7PUE.js","assets/GeometryUtil-CvgcBrCu.js","assets/mathUtils-IkMysAn-.js","assets/sphere-pwU1ieVW.js","assets/ray-D3NPSTJ7.js","assets/vectorStacks-XX4A7UQP.js","assets/quatf64-aQ5IuZRd.js","assets/OutputColorHighlightOLID.glsl-DpGxdV1p.js","assets/Indices-CRgDQqIs.js","assets/InterleavedLayout-C2BAtVS9.js","assets/BufferView-Dkaov1xP.js","assets/types-DfUoEbzw.js","assets/VertexElementDescriptor-CBVWHxfT.js","assets/VertexAttributeLocations-DdeE8DNn.js","assets/DrapedZ-DzLtR0NK.js","assets/frustumPlanes-CCEBOuJV.js","assets/plane-Dz45ttnC.js","assets/lineSegment-T89Mz7cy.js","assets/AlphaCutoff-Cu6cZz7A.js","assets/RenderingContext-C5Kdhc0V.js","assets/ProgramCache-DJOkwRgR.js","assets/VertexArrayObject-ClEzlfGk.js","assets/VertexBuffer-DximC93r.js","assets/projectVectorToVector-CDW_cG4T.js","assets/projectPointToVector-Cd4uDC5i.js","assets/dehydratedPoint-HwkPLSOd.js","assets/orientedBoundingBox-IE33fWjc.js","assets/quat-BaUigM14.js","assets/computeTranslationToOriginAndRotation-DF00nLu8.js","assets/Octree-458xO28-.js","assets/vec3f32-CTt429Kd.js","assets/ReceiveShadowsConfiguration-arDjTlZ2.js","assets/DDSUtil-CV0P_lzB.js"])))=>i.map(i=>d[i]);
import{eJ as fe,cC as Y,ln as ae,eO as X,eu as Ri,eP as ve,eM as oe,fs as ce,jZ as zt,gK as et,l6 as xa,cD as Wt,fU as ya,cF as Ne,y as P,nu as ba,eL as q,cQ as Ii,v as $a,fM as Da,sl as Wi,fT as Mi,xG as Pa,ry as za,cz as Ta,j9 as at,c3 as Ie,l7 as le,hx as J,xH as Mt,a1 as S,kg as Ca,_ as wa,lc as Nt,a4 as Oa,B as Tt,pH as tt,eN as Ut,fP as ge,eK as jt,xI as La,dy as Ct,kJ as wt,pI as he,ht as Ni,z as _a,b6 as Fa,eG as Ea,xJ as Aa,fw as Va,bS as Ui,pz as Ra,t1 as ji,e9 as Re,c5 as ki,aS as Ia,xK as Ue,cG as Wa}from"./index-SKgyE3lZ.js";import{g as xe,_ as Ma,C as Na,v as kt,y as Ua,f as Bi}from"./lineSegment-T89Mz7cy.js";import{B as Bt,w as je,q as ee,b as Jt,v as rt}from"./plane-Dz45ttnC.js";import{h as Ji,d as ze,X as Ht,g as ja,N as ka}from"./BufferView-Dkaov1xP.js";import{u as We,t as Q,e as s,d as Te,a as y,b as Ba,g as Ja,i as x,j as Ha,k as Ga,h as Ya,m as Gt,o as qa,p as ke,l as Xa}from"./getEmissions.glsl-Cov6HEX5.js";import{a as Hi,aa as Ka,ab as Za,ac as Ot,L as Qa,Z as er,e as Vt,ad as Gi,ae as Yt,u as tr,a0 as ir,O as nt,Q as Rt,p as Lt,a6 as Yi,af as qi,m as Xi,ag as ar,Y as rr,r as Ki,f as nr,ah as sr,M as or,k as lr,q as cr,$ as dr,j as pr,w as ur,x as fr,y as qt,z as hr,A as Xt,ai as Be,C as mr,D as gr,E as vr,aj as Sr,ak as Kt,al as xr,am as yr,an as Zt,ao as Zi,ap as br,aq as Qt,ar as _t,g as Qi,as as $r,G as Dr,at as Ft,H as Pr,au as zr,av as Tr,aw as Cr,ax as wr,ay as Or,_ as Lr,v as ei,T as _r,az as Fr,aA as ti,aB as ii,aC as Er,aD as Je,aE as Ar}from"./OutputColorHighlightOLID.glsl-DpGxdV1p.js";import{i as Vr,s as Rr,g as Ir,v as Wr,r as Mr,a as Nr,b as Ur,_ as jr,c as kr,e as Br,d as Jr,o as Hr,f as Gr}from"./ReceiveShadowsConfiguration-arDjTlZ2.js";import{a as se,K as Yr,n as qr,f as ai}from"./InterleavedLayout-C2BAtVS9.js";import{i as ea,t as Xr,N as ri,g as Kr,_ as Zr,e as Qr,h as en}from"./GeometryUtil-CvgcBrCu.js";import{u as tn,g as lt,N as ta,s as an,p as rn}from"./frustumPlanes-CCEBOuJV.js";import{b as nn}from"./ray-D3NPSTJ7.js";import{j as sn}from"./sphere-pwU1ieVW.js";import"./DDSUtil-CV0P_lzB.js";import{c as ni,i as on}from"./doublePrecisionUtils-L_Od7PUE.js";import{i as ln}from"./TextureBackedBufferLayout-D7ZHAac1.js";import{T as He,g as ct,c as si}from"./RenderingContext-C5Kdhc0V.js";import{e as Me}from"./AlphaCutoff-Cu6cZz7A.js";let ks=class extends Za{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.shadingEnabled=!1,this.isDecoration=!1,this.worldSized=!1}},cn=class extends Hi{constructor(){super(...arguments),this.primitiveVertexCount=1}updateConfiguration(e){super.updateConfiguration(e),this._configuration.pbrMode=this.parameters.shadingEnabled?2:0,this._configuration.draped=e.slot===18,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.worldSized=this.parameters.worldSized,this._configuration.emissionSource=+!!this.emissions,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.hasOccludees=e.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,We(e.output)&&this.parameters.shadingEnabled?(this._configuration.receiveShadows=e.shadowMap.enabled,this._configuration.hasShadowHighlights=Vr(this._configuration,e),this._configuration.receiveAmbientOcclusion=e.ssao!=null,this._configuration.receiveGlobalIllumination=e.globalIlluminationEnabled):this._configuration.receiveShadows=this._configuration.hasShadowHighlights=this._configuration.receiveAmbientOcclusion=this._configuration.receiveGlobalIllumination=!1}computeAttachmentOrigin(e,t,i){return Ka(e,t,i,this._isClosed(i))}_isClosed(e){return(this.parameters.isClosed??!1)&&e>2}};function dn(a,e,t,i,r,n){tn(r,0,1/0,K);for(let m of[0,1,2])if(!lt(m,Math.min(a[m],e[m])-t,Math.max(a[m],e[m])+t,K))return null;if(!Bt(i.frustum[4],K)||!Bt(i.frustum[5],K))return null;let o=ia(a,e,i,Z,j,n);if(o===0)return null;fe(ie,r.origin,a);let l=Y(ie,n),c=Y(r.direction,n),d=li(r.direction,n);if(Math.abs(c)>d){let m=-l/c;return m<K.c0||m>K.c1?null:(ae(ie,ie,r.direction,m),ra(Y(ie,Z),Y(ie,j),o,t*t)?m:null)}if(Math.abs(l)>li(ie,n))return null;let p=Y(ie,Z),f=Y(ie,j),h=Y(r.direction,Z),v=Y(r.direction,j);return X(K.ray.origin,p,f,0),X(K.ray.direction,h,v,0),!lt(0,-t,o+t,K)||!lt(1,-t,t,K)?null:pn(K,o,t)}function pn(a,e,t){let i=rn(a,ie);if(ra(i[0],i[1],e,t*t))return a.c0;X(dt.center,i[0]<0?0:e,0,0),dt.radius=t;let r=a.ray.direction;if(!dt.intersectRay(nn(i,r),ci))return null;let n=Math.abs(r[0])>Math.abs(r[1])?0:1,o=a.c0+(ci[n]-i[n])/r[n];return o<=a.c1?o:null}function un(a,e,t,i,r){let n=aa(a,e,t,na);if(!ta(r.broadPhaseFrustum,n,null)||ia(a,e,i,Z,j,fn)===0)return!1;let[o,l,c,d]=pt;return De(o,a,Z,j,-t,-t),De(l,e,Z,j,t,-t),De(c,e,Z,j,t,t),De(d,a,Z,j,-t,t),Ot(r,pt,i,Et)?(ae(o,a,j,-t),ae(l,e,j,-t),ae(c,e,j,t),ae(d,a,j,t),Ot(r,pt,i,Et)?!0:oi(a,-t,Z,j,i,r)||oi(e,t,Z,j,i,r)):!1}function oi(a,e,t,i,r,n){let o=Math.abs(e);if(!ta(n.broadPhaseFrustum,aa(a,a,o,na),null))return!1;we.length=0,q(we.pushNew(),a),De(we.pushNew(),a,t,i,0,o);for(let[l,c]of hn)De(we.pushNew(),a,t,i,l*e,c*o);return Ot(n,we,r,Et)}function ia(a,e,t,i,r,n){fe(i,e,a);let o=ve(i);if(o===0)return 0;oe(i,i,1/o);let l=t.viewMatrix;ce(Ge,a,l),zt(Ce,l),et(Ye,i,Ce);let c=t.projectionMatrix,d=c[11]*Ge[2]+c[15],p=c[11]*Ye[2],f=c[0]*(Ye[0]*d-Ge[0]*p),h=c[5]*(Ye[1]*d-Ge[1]*p),v=t.fullViewport,m=h*v[3]/(c[0]*v[2]),g=-f*v[2]/(c[5]*v[3]),b=Math.hypot(m,g);if(b===0)return 0;let u=m/b,$=g/b;return X(r,u,$,0),xa(Ce,Ce),et(r,r,Ce),Wt(n,i,r),ya(n)===0?0:(Ne(n,n),Wt(r,n,i),o)}function aa(a,e,t,i){return ba(Math.min(a[0],e[0])-t,Math.min(a[1],e[1])-t,Math.min(a[2],e[2])-t,Math.max(a[0],e[0])+t,Math.max(a[1],e[1])+t,Math.max(a[2],e[2])+t,i)}function li(a,e){return 16*2**-52*(Math.abs(a[0]*e[0])+Math.abs(a[1]*e[1])+Math.abs(a[2]*e[2]))}function De(a,e,t,i,r,n){ae(a,e,t,r),ae(a,a,i,n)}function ra(a,e,t,i){let r=a<0?a:a>t?a-t:0;return r*r+e*e<=i}const Z=P(),j=P(),fn=P(),ie=P(),Ge=P(),Ce=Ii(),Ye=P(),K=an(),dt=new sn,ci=P(),na=$a(),hn=Array.from({length:3},(a,e)=>{let t=(e+1)*Math.PI/3;return e===2?[0,-1]:[Math.sin(t),Math.cos(t)]}),pt=[P(),P(),P(),P()],we=new Ri({allocator:a=>a??P()}),Et=new Ri({allocator:a=>a??P()});function mn(a,e){let{vertex:t}=a;t.uniforms.add(new Q("intrinsicWidth",n=>n.width));let{hasScreenSizePerspective:i,spherical:r}=e;i?(a.include(Qa,e),er(t),Vt(t,e),t.uniforms.add(new Gi("inverseViewMatrix",(n,o)=>Da(di,Wi(di,o.camera.viewMatrix,n.origin)))),t.code.add(s`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${r?s`normalize(worldPos + localOrigin)`:s`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):t.code.add(s`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),e.hasVVSize?(t.uniforms.add(new Te("vvSizeMinSize",n=>n.vvSize.minSize),new Te("vvSizeMaxSize",n=>n.vvSize.maxSize),new Te("vvSizeOffset",n=>n.vvSize.offset),new Te("vvSizeFactor",n=>n.vvSize.factor),new Te("vvSizeFallback",n=>n.vvSize.fallback)),t.code.add(s`
    float getSize(${y(i,"vec3 pos")}) {
      float value = ${t.inputs.get("sizeFeatureAttribute")};
      float size = isnan(value)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${y(i,"applyLineSizeScreenSizePerspective(size, pos)","size")};
    }
    `)):t.code.add(s`
    float getSize(${y(i,"vec3 pos")}) {
      float fullSize = intrinsicWidth * ${t.inputs.get("size")};
      return ${y(i,"applyLineSizeScreenSizePerspective(fullSize, pos)","fullSize")};
    }
    `),e.hasVVOpacity?(t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new Yt("vvOpacityValues",8,n=>n.vvOpacity.values),new Yt("vvOpacityOpacities",8,n=>n.vvOpacity.opacityValues),new Q("vvOpacityFallback",n=>n.vvOpacity.fallback,{supportsNaN:!0})),t.code.add(s`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      float value = ${t.inputs.get("opacityFeatureAttribute")};
      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${y(e.hasVVColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(value));
    }
    `)):t.code.add(s`vec4 applyOpacity(vec4 color) {
return color;
}`),e.hasVVColor?(a.include(tr,e),t.code.add(s`
    vec4 getColor() {
      vec4 color = interpolateVVColor(${t.inputs.get("colorFeatureAttribute")});

      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      return applyOpacity(color);
    }
    `)):t.code.add(s`
    vec4 getColor() {
      return applyOpacity(${t.inputs.get("color")});
    }
    `)}const di=Mi();function gn(a){a.include(Rr),a.fragment.uniforms.add(new Gi("inverseViewMatrix",(e,t)=>{let i=Wi(vn,t.camera.viewMatrix,e.localOrigin);return Pa(i,i)})).code.add(s`vec4 reconstructLocalPosition(vec2 coord, float linearDepth) {
vec4 cameraSpace = vec4(reconstructPosition(coord, linearDepth), 1.0);
return inverseViewMatrix * cameraSpace;
}`)}const vn=Mi();function Sn(a,e){a.include(Ir,e),a.include(gn),a.fragment.include(ir),a.fragment.code.add(s`float readFragmentShadow(float additionalAmbientScale) {
vec3 pos = reconstructLocalPosition(gl_FragCoord.xy, linearizeDepth(gl_FragCoord.z)).xyz;
return readShadow(additionalAmbientScale, pos);
}`)}function xn(a,e){let{vertex:t,fragment:i}=a;a.include(Sn,e),i.include(Wr,e),i.include(Mr,e),Nr(i),Vt(i,e),t.main.add("forwardLinearDepthToReadShadow();"),i.uniforms.add(Ur,jr,t.uniforms.get("localOrigin")).code.add(s`vec4 evaluateSceneLightingFragment(vec3 vpos, vec3 normal, vec4 albedo) {
vec3 posWorld = vpos + localOrigin;
float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
float shadow = readFragmentShadow(additionalAmbientScale);
float ssao = evaluateAmbientOcclusionInverse();
vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
vec3 viewDirection = normalize(vpos - cameraPosition);
return vec4(
evaluateSceneLighting(normal, albedo.rgb, shadow, 1.0 - ssao, additionalLight, viewDirection, normal),
albedo.a);
}`)}function yn(a){a.vertex.code.add("#define noPerspectiveWrite(x, w) (x * w)")}function sa(a){a.fragment.code.add("#define noPerspectiveRead(x) (x * gl_FragCoord.w)")}function bn(a){return a.pattern.map(e=>Math.round(e*a.pixelRatio))}function $n(a){if(a==null)return 1;let e=bn(a);return Math.floor(e.reduce((t,i)=>t+i,0))}function Dn(a){return a==null?za:a.length===4?a:Ta(Pn,a[0],a[1],a[2],1)}const Pn=at();function zn(a,e){if(!e.stippleEnabled){a.fragment.code.add(s`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);return}let t=!(e.draped&&e.stipplePreferContinuous),{vertex:i,fragment:r}=a;e.draped||(Vt(i,e),i.uniforms.add(new nt("worldToScreenPerDistanceRatio",({camera:l})=>1/l.screenPixelSizePerDistance)).code.add(s`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),a.varyings.add("vStippleDistance","float"),a.varyings.add("vStippleLimitsAndCaps","vec4"),a.varyings.add("vStipplePatternStretch","float"),i.code.add(s`
    float discretizeStippleDistanceToScreenRatio(float stippleDistanceToScreenRatio) {
      float step = ${s.float(Tn)};

      float discreteStippleDistanceToScreenRatio = log(stippleDistanceToScreenRatio);
      discreteStippleDistanceToScreenRatio = ceil(discreteStippleDistanceToScreenRatio / step) * step;
      discreteStippleDistanceToScreenRatio = exp(discreteStippleDistanceToScreenRatio);
      return discreteStippleDistanceToScreenRatio;
    }
  `),Rt(i),i.code.add(s`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${t?"patternLength":"1e4"}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),r.uniforms.add(new Ba("stipplePatternTexture",l=>l.stippleTexture),new Q("stipplePatternPixelSizeInv",l=>1/oa(l))),e.stippleOffColorEnabled&&r.uniforms.add(new Lt("stippleOffColor",l=>Dn(l.stippleOffColor))),a.include(sa);let n=e.worldSized&&e.imagePattern,{usePerspectiveCorrectStipple:o}=e;o&&a.varyings.add("vStipplePerspective","vec4"),n?(a.varyings.add("vStippleV","float"),a.fragment.include(kr),r.code.add(s`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleLimitsAndCaps.xy + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = (vStippleLimitsAndCaps.z <= 0.0 && vStippleDistance < aaCorrectedLimits.x) ||
(vStippleLimitsAndCaps.w <= 0.0 && vStippleDistance > aaCorrectedLimits.y);
float u = vStippleDistance * stipplePatternPixelSizeInv;
float v = vStippleV == -1.0 ? 0.5 : vStippleV;
return texture(stipplePatternTexture, vec2(u, v));
}
vec4 getStippleColor() {
bool ignored;
return getStippleColor(ignored);
}
float getStippleSDF() {
vec4 color = getStippleColor();
return color.a == 0.0 ? -0.5 : 0.5;
}
float getStippleAlpha(float lineWidth) {
return getStippleColor().a;
}
vec4 blendStipple(vec4 color, float stippleAlpha) {
vec4 stippleColor = getStippleColor();
int mixMode  = 1;
vec3 col = mixExternalColor(color.rgb, vec3(1.0), stippleColor.rgb, mixMode);
float opacity = mixExternalOpacity(color.a, 1.0, stippleColor.a, mixMode);
return vec4(col, opacity);
}`)):r.code.add(s`
    float getStippleSDF(out bool isClamped) {
      ${y(e.worldSized,s`
          float unclampedStippleDistance = noPerspectiveRead(vStippleDistance);
          float stippleDistancePerPixel = length(vec2(dFdx(unclampedStippleDistance), dFdy(unclampedStippleDistance)));
        `,s`float stippleDistancePerPixel = 1.0;`)}

      bool clampStart = vStippleLimitsAndCaps.z <= 0.0;
      bool clampEnd = vStippleLimitsAndCaps.w <= 0.0;
      float stippleDistance = vStippleDistance;
      if (clampStart) {
        stippleDistance = max(stippleDistance, vStippleLimitsAndCaps.x);
      }
      if (clampEnd) {
        stippleDistance = min(stippleDistance, vStippleLimitsAndCaps.y);
      }
      stippleDistance = noPerspectiveRead(stippleDistance);
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      ${y(o,s`
          // Convert screen-space progress to progress along the 3D segment using the endpoints' inverse clip-W values.
          // This keeps dash lengths constant in world units, so farther dashes appear shorter on screen.
          vec4 stipplePerspective = noPerspectiveRead(vStipplePerspective);
          float segmentLength = stipplePerspective.y - stipplePerspective.x;
          float segmentFactor = segmentLength > 0.0 ? (stippleDistance - stipplePerspective.x) / segmentLength : 0.0;
          float interpolatedInverseW = mix(stipplePerspective.z, stipplePerspective.w, segmentFactor);
          float perspectiveFactor = segmentFactor * stipplePerspective.w / interpolatedInverseW;
          stippleDistance = mix(stipplePerspective.x, stipplePerspective.y, perspectiveFactor);
        `)}

        vec2 aaCorrectedLimits = vStippleLimitsAndCaps.xy + vec2(1.0, -1.0) * stippleDistancePerPixel / gl_FragCoord.w;
      isClamped = (clampStart && vStippleDistance < aaCorrectedLimits.x) ||
          (clampEnd && vStippleDistance > aaCorrectedLimits.y);

      float u = stippleDistance * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return sdf;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha(float lineWidth) {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);
      float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${e.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `),r.code.add(s`
    float getStippleCapDistance() {
      return (getStippleSDF() * 2.0 - 1.0) * vStipplePatternStretch;
    }

    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${y(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }
  `)}function oa(a){let e=a.stipplePattern;return ea(e)?e.length:e?$n(e)/e.pixelRatio:1}const Tn=.4,Hs=64,Gs=32,Cn=32/5,wn=64/Cn,Ys=.25;function On(a,e){let t=a.vertex,i=e.hasScreenSizePerspective,r=e.worldSized,n=r&&!e.draped;Rt(t),t.constants.add("markerSizePerLineWidth","float",wn),t.uniforms.add(new Q("markerScale",({markerScale:o})=>o)),r&&t.uniforms.add(new nt("groundMetersToScreenRatio",o=>1/(o.screenToPlanarDistanceRatio*o.planarDistanceToGroundRatio))),t.code.add(s`float getScreenMarkerSize(float lineWidth) {
return markerScale * markerSizePerLineWidth * lineWidth;
}`),t.code.add(y(n,s`
        float getLineWidth(vec3 pos) {
          float size = getSize(${y(i,"pos")});
          float metersPerScreenPixel = max(-pos.z, nearFar[0]) * metersPerRenderUnit * screenPixelSizePerDistance;
          return max(size / metersPerScreenPixel, 1.0) * pixelRatio;
        }
    `,s`
        float getLineWidth(${y(e.lineWidthRequiresPosition,"vec3 pos")}) {
          float size = max(getSize(${y(i,"pos")}), 1.0);
          return ${y(r,"size * pixelRatio * groundMetersToScreenRatio","size * pixelRatio")};
        }
    `)),n?t.uniforms.add(Yi,qi,Xi):t.uniforms.add(ar),t.code.add(y(n,s`
        float getWorldMarkerSize(vec3 pos) {
          return markerScale * markerSizePerLineWidth * getSize(${y(i,"pos")}) * 0.5 / metersPerRenderUnit;
        }
      `,s`
        float getWorldMarkerSize(vec3 pos) {
          float distanceToCamera = length(pos);
          float screenToWorldRatio = renderPixelSizePerDistance * distanceToCamera * 0.5;
          return getScreenMarkerSize(getLineWidth(${y(i,"pos")})) * screenToWorldRatio;
        }
      `)),t.constants.add("maxSegmentLengthFraction","float",.45),t.code.add(y(n,s`bool areWorldMarkersHidden(vec3 pos, vec3 other) {
return getWorldMarkerSize(pos) > maxSegmentLengthFraction * length(pos - other);
}`,s`
        bool areWorldMarkersHidden(vec3 pos, vec3 other) {
          vec3 midPoint = mix(pos, other, 0.5);
          float distanceToCamera = length(midPoint);
          float screenToWorldRatio = renderPixelSizePerDistance * distanceToCamera * 0.5;
          float worldMarkerSize = getScreenMarkerSize(getLineWidth(${y(i,"pos")})) * screenToWorldRatio;
          float segmentLen = length(pos - other);
          return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
        }
      `))}const Ln=Ie(1),_n=Ie(1);function Fn(a,e){let{animation:t}=e,{varyings:i,vertex:r,fragment:n}=a;i.add("vTimeStamp","float"),i.add("vFirstTime","float"),i.add("vLastTime","float"),i.add("vTransitionType","float"),r.main.add(s`vTimeStamp = animatedAlphaTimeStamps.x;
vFirstTime = animatedAlphaTimeStamps.y;
vLastTime = animatedAlphaTimeStamps.z;
vTransitionType = animatedAlphaTimeStamps.w;`),t===3&&n.constants.add("decayRate","float",2.3),n.code.add(s`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${En(t)}
    }`),n.uniforms.add(new Q("timeElapsed",o=>o.timeElapsed),new Q("trailLength",o=>o.trailLength),new Q("speed",o=>o.animationSpeed),new rr("startEndTime",o=>le(An,o.startTime,o.endTime))),n.constants.add("fadeInTime","float",_n),n.constants.add("fadeOutTime","float",Ln),n.constants.add("incomingTransition","int",0),n.constants.add("outgoingTransition","int",2),n.code.add(s`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
float animatedAlpha() {
float startTime = startEndTime[0];
float endTime = startEndTime[1];
float totalTime = vLastTime - vFirstTime;
float actualFadeOutTime = min(fadeOutTime * speed, trailLength);
float longStreamlineThreshold = (fadeInTime + 1.0) * speed + actualFadeOutTime;
bool longStreamline = totalTime > longStreamlineThreshold;
float totalTimeWithFadeOut = longStreamline && actualFadeOutTime != trailLength ? totalTime : totalTime + actualFadeOutTime;
float fadeOutStartTime = longStreamline ? totalTime - actualFadeOutTime : totalTime;
float originTime =  -vFirstTime;
float actualEndTime = int(vTransitionType) == outgoingTransition ? min(endTime, startTime + vLastTime / speed) : endTime;
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
return alpha;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return 0.0;
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
return alpha;
}`)}function En(a){switch(a){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return"return 1.0;"}}const An=J();function Vn(a){switch(a.elementType){case"float":switch(a.elementCount){case 1:return s`float`;case 2:return s`vec2`;case 3:return s`vec3`;case 4:return s`vec4`;case 9:return s`mat3`;default:a.elementCount}break;case"int":switch(a.elementCount){case 1:return s`int`;case 2:return s`ivec2`;case 3:return s`ivec3`;case 4:return s`ivec4`;case 9:throw Error("Invalid element count 9 for type int");default:a.elementCount}break;case"uint":switch(a.elementCount){case 1:return s`uint`;case 2:return s`uvec2`;case 3:return s`uvec3`;case 4:return s`uvec4`;case 9:throw Error("Invalid element count 9 for type uint");default:a.elementCount}break;default:a.elementType}throw Error("unsupported field")}const la=new nt("constNaN",()=>NaN,{supportsNaN:!0});let It=class extends Ja{constructor(e){super(),this.supportNaN=e}};S([x()],It.prototype,"supportNaN",void 0);function Rn(a,e){let t=e?.supportNaN;t&&(a.uniforms.add(la),a.code.add(s`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),a.code.add(s`
    mediump float unpackHalf1x16(highp uint bits) {
      ${y(t,s`
        if (bitsEncodeFloat16NaN(bits)) {
          return constNaN;
        }`)}
      return unpackHalf2x16(bits).x;
    }`),a.code.add(s`
    mediump vec2 unpackHalf2x16NaNSupport(highp uint bits) {
      vec2 result = unpackHalf2x16(bits);
      ${y(t,s`
        if (bitsEncodeFloat16NaN(bits)) {
          result.x = constNaN;
        }
        if (bitsEncodeFloat16NaN(bits >> ${s.uint(me[2])})) {
          result.y = constNaN;
        }
        `)}
      return result;
    }`)}function In(a,e){let t=e?.supportNaN;t&&(a.uniforms.add(la),a.code.add(s`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),a.code.add(s`
    highp float unpackFloat1x32(highp uint bits) {
      ${y(t,s`
        if (bitsEncodeFloat32NaN(bits)) {
          return constNaN;
        }`)}
      return uintBitsToFloat(bits);
    }`)}function Wn(a){a.code.add(s`mediump int unpackInt1x16(highp uint bits) {
highp uint signExtendedBits = (bits & 0x8000u) != 0u ? (bits | 0xffff0000u) : bits;
return int(signExtendedBits);
}`)}function Mn(a,e){let{fieldType:t}=a,i=jn[t];return`${i(kn(a,e))}`}function qe(a,e){let t=[];for(let i of a){let r=s`unpackFloat1x32(${i})`;t.push(r)}return t.join(e)}const Nn=a=>s`${a[0]}`,Un=a=>s`uvec4(${a.join(", ")})`,pi=a=>s`${a[0]}`,ui=a=>{let e=a[0],t=s`uvec4(${s.uint(me[0])}, ${s.uint(me[1])}, ${s.uint(me[2])}, ${s.uint(me[3])})`,i=s`uvec4(${s.hexuint(ca[1])})`;return s`((uvec4(${e}) >> ${t}) & ${i})`},jn={u8:pi,u32:Nn,vec4u32:Un,unorm8:a=>s`(float(${pi(a)})/${s.float(Mt)})`,vec4unorm8:a=>s`(vec4(${ui(a)})/${s.float(Mt)})`,snorm16:a=>s`unpackSnorm2x16(${a[0]}).x`,vec2snorm16:a=>s`unpackSnorm2x16(${a[0]})`,f16:a=>s`unpackHalf1x16(${a[0]})`,vec4f16:a=>s`vec4(unpackHalf2x16NaNSupport(${a[0]}), unpackHalf2x16NaNSupport(${a[1]}))`,f32:a=>s`unpackFloat1x32(${a[0]})`,vec4u8:ui,vec2f32:a=>s`vec2(${qe(a,", ")})`,vec3f32:a=>s`vec3(${qe(a,", ")})`,vec4f32:a=>s`vec4(${qe(a,", ")})`,mat3f32:a=>s`mat3(${qe(a,`,
`)})`};function kn(a,e){let{byteOffset:t,byteSize:i}=a,r=e.channelByteStride,n=e.byteStride,o=Math.ceil(i/ut),l=Bn[e.channels],c=[];for(let d=0;d<o;++d){let p=d*ut,f=t+p,h=i-p,v=Math.min(h,ut),m=0,g=[];for(;m<v;){let b=f+m,u=Math.floor(b/n),$=b%n,C=Math.floor($/r),T=$%r,z=r-T,w=v-m,A=Math.min(z,w),O=s`texel${s.int(u)}${l[C]}`,V=A===4?"":s` & ${s.hexuint(ca[A])}`,L=T===0?"":s` >> ${s.uint(me[T])}`,_=s`((${O}${L})${V})`,D=m===0?"":s` << ${s.uint(me[m])}`,F=s`(${_})${D}`;g.push(F),m+=A}c.push(s`(${g.join(" | ")})`)}return c}const ut=4,me=[0,8,16,24],ca=[0,255,65535,16777215,4294967295],Bn={1:[s``],2:[s`.x`,s`.y`],4:[s`.x`,s`.y`,s`.z`,s`.w`]},Jn=new It(!0),Hn=new It(!1);let Gn=class{constructor(e,t){this._shader=e,this._namespace=t,this._used=new Map}getItemSuffix(e){return e===0?"":`${e<0?"Minus":"Plus"}${Math.abs(e)}`}getItemDataName(e=0){return`${this._namespace}ItemData${this.getItemSuffix(e)}`}getStructName(e=0){return`${this._namespace}TextureBackedBufferItemData${this.getItemSuffix(e)}`}getFetchName(e=0){return`${this._namespace}fetchTextureBackedBufferItemData${this.getItemSuffix(e)}`}getStrideName(){return`${this._namespace}tbbStride`}getTextureAttribute(e,t=0){let i=this._used,r=this.getItemDataName(t),n=i.get(t);return n??(n=new Set,i.set(t,n)),n.add(e),s`${r}.${e}`}generateVertexCode(e){let{_shader:t,_used:i}=this,r=new ni(t.vertex);for(let n of i.keys())this._generateFetchFunction(n,r,e);return r.generateSource()}generateVertexMainCode(e){let{_shader:t,_used:i}=this,r=new ni(t.vertex);for(let n of i.keys())this._generateFetchFunctionCall(n,r,e);return r.generateSource()}_generateFetchFunctionCall(e,t,i){let{itemIndexExpression:r}=i,n=this._used.get(e);if(n==null||n.size===0)return;let o=this.getItemDataName(e),l=this.getFetchName(e);t.add(s`${o} = ${l}(${r});`)}_getIndexOffset(e=0){return e===0?s``:s`${e<0?"-":"+"}${s.uint(Math.abs(e))}`}_generateFetchFunction(e,t,i){let{bufferUniform:r,layout:n}=i,{texelFormatInfo:o}=n,l=this._used.get(e);if(l==null||l.size===0)return;let c=this.getStrideName(),d=this.getStructName(e),p=this.getItemDataName(e),f=this.getFetchName(e),h=this._getIndexOffset(e),v=[];for(let u of n.fields.values())l.has(u.name)&&v.push(u);if(v.length===0)return;let m=[];for(let u=0;u<n.texelStride;++u)m.push(!1);for(let u of v)for(let $=0;$<u.numTexels;++$)m[u.startTexel+$]=!0;t.add(s`
  struct ${d} {`);for(let u of v)t.add(s`\t${Vn(u)} ${u.name};`);t.add(s`};`),t.add(s`\n${d} ${f}( highp uint baseIndex ) {
    ${d} itemData;
    highp uint index = (baseIndex${h}) * ${c};
    highp uint rowWidth = uint(textureSize(${r.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);\n`);let g=qn[o.channels],b=Xn[o.channels];for(let u=0;u<m.length;++u)m[u]!==!1&&t.add(s`highp ${g} texel${s.int(u)} = texelFetch(${r.name}, ivec2(coordX + ${s.int(u)}, coordY), 0)${b};`);for(let u of v)t.add(s`itemData.${u.name} = ${Mn(u,o)};`);t.add(s`return itemData;\n}`),t.add(s`${d} ${p};`)}},Yn=class{constructor(e){this._parameters=e,this.moduleId=Ca(),this.namespace=`_tbb_${this.moduleId}_`}createBuilder(e,t){let i=null,r=n=>{i=this._buildTextureBackedBufferShaderCode(n)};return t?e.include(r,t):e.include(r),se(i!=null,"Valid builder expected."),i}_buildTextureBackedBufferShaderCode(e){let{namespace:t,_parameters:i}=this,{bufferUniform:r,layout:n}=i,o=i.enableNaNSupport?Jn:Hn,{vertex:l}=e,c=new Gn(e,t);l.include(In,o),l.include(Rn,o),l.include(Wn);let d=c.getStrideName(),p=c.getStructName(),f=c.getFetchName(),h=c.getItemDataName();for(let v of[d,p,f,h])se(v.length<1024,"Identifiers do not have a valid length");return l.constants.add(d,"uint",n.texelStride),l.uniforms.add(r),l.code.add(()=>c.generateVertexCode(i)),l.main.add(()=>c.generateVertexMainCode(i)),c}};const qn={1:s`uint`,2:s`uvec2`,4:s`uvec4`},Xn={1:s`.x`,2:s`.xy`,4:""};let Kn=class extends Ha{constructor(e,t){super(e,"usampler2D",2,(i,r,n)=>i.bindTexture(e,t(r,n)))}};function da(a){return Yr().u32("textureElementIndex",{integer:!0}).vec2f16("lineParameters")}const Zn=[{type:"vec3f32",name:"position"},{type:"f32",name:"u0"}];function pa(a){let e=[...Zn];return a.hasVVColor?e.push({type:"f32",name:"colorFeatureAttribute"}):e.push({type:"vec4unorm8",name:"color"}),a.hasVVSize?e.push({type:"f32",name:"sizeFeatureAttribute"}):e.push({type:"f32",name:"size"}),a.hasVVOpacity&&e.push({type:"f32",name:"opacityFeatureAttribute"}),Ki()&&e.push({type:"vec4unorm8",name:"olidColor"}),a.hasAnimation&&e.push({type:"vec4f16",name:"timeStamps"}),new ln(e)}const Qn=new Kn("componentTextureBuffer",a=>a.textureBuffer);function es(a){return new Yn({layout:pa(a),itemIndexExpression:"textureElementIndex",bufferUniform:Qn})}const ts=1;function is(a){let e=new on,{attributes:t,varyings:i,vertex:r,fragment:n}=e,{applyMarkerOffset:o,draped:l,shadingEnabled:c,output:d,capType:p,stippleEnabled:f,falloffEnabled:h,wireframe:v,innerColorEnabled:m,hasAnimation:g,hasScreenSizePerspective:b,worldSized:u,imagePattern:$,useFlatJoinVarying:C}=a,T=p===2,z=f&&T,w=h||z,A=f||T,O=u&&!l,V=a.usePerspectiveCorrectStipple,L=es(a).createBuilder(e,a);r.inputs.add("position",()=>L.getTextureAttribute("position")),a.hasVVSize?r.inputs.add("sizeFeatureAttribute",()=>L.getTextureAttribute("sizeFeatureAttribute")):r.inputs.add("size",()=>L.getTextureAttribute("size")),a.hasVVOpacity&&r.inputs.add("opacityFeatureAttribute",()=>L.getTextureAttribute("opacityFeatureAttribute")),a.hasVVColor?r.inputs.add("colorFeatureAttribute",()=>L.getTextureAttribute("colorFeatureAttribute")):r.inputs.add("color",()=>L.getTextureAttribute("color")),n.include(Br),e.include(mn,a),e.include(zn,a),d===11?(e.varyings.add("objectAndLayerIdColorVarying","vec4"),r.code.add(s`
      vec4 getOlidColor() {
        return ${L.getTextureAttribute("olidColor")};
      }

      void forwardObjectAndLayerIdColor() {
        objectAndLayerIdColorVarying = getOlidColor();
      }
    `),n.code.add(s`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)):(r.code.add(s`void forwardObjectAndLayerIdColor() {}`),n.code.add(s`void outputObjectAndLayerIdColor() {}`));let _=o&&!l;if(_&&e.include(On,a),nr(r,a),l&&(u||f)){let D=u?"groundMetersToScreenRatio":"planarDistanceToScreenRatio";r.uniforms.add(new nt(D,F=>1/(F.screenToPlanarDistanceRatio*(u?F.planarDistanceToGroundRatio:1))))}return O&&r.uniforms.add(qi,Xi),r.uniforms.add(sr,Yi,or,new Q("miterLimit",D=>D.join==="miter"?D.miterLimit:0)),r.constants.add("LARGE_HALF_FLOAT","float",65500),r.constants.add("EPS","float",.001),r.constants.add("NUM_JOIN_SUBDIVISIONS","float",a.numJoinSubdivisions),t.add("textureElementIndex","uint"),t.add("lineParameters","vec2"),i.add("vColor","vec4"),i.add("vpos","vec3",{invariant:!0}),i.add("vLineDistance","float"),i.add("vLineWidth","float"),C?i.add("vIsInsideJoin","int",{flat:!0}):i.add("vIsInsideJoin","float"),i.add("vStretchFactor","float"),i.add("vJoinCenterLineSDFs","vec2"),O&&i.add("vJoinLineWidths","vec2"),i.add("vSubdivisionFactor","float"),f&&i.add("vLineSizeInv","float"),w&&i.add("vLineDistanceNorm","float"),T&&(i.add("vSegmentSDF","float"),i.add("vReverseSegmentSDF","float")),r.code.add(s`vec3 perpendicular(vec3 v) {
return vec3(v.y, -v.x, 0.0);
}
float nearPlaneInterpolationFactor(float nearPlaneDistance, vec4 start, vec4 end) {
return (-nearPlaneDistance - start.z) / (end.z - start.z);
}
vec3 rotateZ(vec3 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return vec3(m * v.xy, v.z);
}`),r.code.add(s`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
posNdc.z /= posNdc.w;
return posNdc;
}`),r.code.add(s`
    void clip(
      inout vec4 pos,
      inout vec4 prev,
      inout vec4 next,
      ${y(V,s`inout float u0, inout float prevU0, inout float nextU0,`)}
      bool isStartVertex
    ) {
      float adjustedNearPlaneDistance = nearFar[0] * 0.99;

      if (pos.z > -nearFar[0]) {
        // Current position behind near plane, so we need to clip
        if (!isStartVertex) {
          if (prev.z < -nearFar[0]) {
            // Previous position in front of near plane
            float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, prev, pos);
            ${y(V,s`u0 = mix(prevU0, u0, clipFactor); nextU0 = u0;`)}
            pos = mix(prev, pos, clipFactor);
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if (next.z < -nearFar[0]) {
            // Next position in front of near plane
            float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, pos, next);
            ${y(V,s`u0 = mix(u0, nextU0, clipFactor); prevU0 = u0;`)}
            pos = mix(pos, next, clipFactor);
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        // Current position visible
        if (prev.z > -nearFar[0]) {
          // Previous position behind near plane
          float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, pos, prev);
          ${y(V,s`prevU0 = mix(u0, prevU0, clipFactor);`)}
          prev = mix(pos, prev, clipFactor);
        }

        if (next.z > -nearFar[0]) {
          // Next position behind near plane
          float clipFactor = nearPlaneInterpolationFactor(adjustedNearPlaneDistance, next, pos);
          ${y(V,s`nextU0 = mix(nextU0, u0, clipFactor);`)}
          next = mix(next, pos, clipFactor);
        }
      }
    }
  `),Rt(r),r.constants.add("aaWidth","float",1),n.constants.add("aaWidth","float",1),r.main.add(s`
    vec3 position = ${L.getTextureAttribute("position")};
    float u0 = ${L.getTextureAttribute("u0")};
    ${y(u,s`
        float prevU0 = ${L.getTextureAttribute("u0",-1)};
        float nextU0 = ${L.getTextureAttribute("u0",1)};
        ${y(!l,s`
            u0 *= metersPerRenderUnit;
            prevU0 *= metersPerRenderUnit;
            nextU0 *= metersPerRenderUnit;
          `)}
      `)}

    // unpack values from vertex type
    float vertexType = abs(lineParameters.y);
    ${y(!C,s`
      bool isInsideJoin = vertexType > 8.0;
      vertexType -= isInsideJoin ? 8.0 : 0.0;
    `)}
    float lineSide = sign(lineParameters.y);
    bool isStartVertex = vertexType == 2.0 || vertexType == 4.0;
    vec3 prevPosition = ${L.getTextureAttribute("position",-1)};
    vec3 nextPosition = ${L.getTextureAttribute("position",1)};

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${Xr};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = vertexType < 3.0;
  `),_&&r.main.add(s`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),e.include(yn),O&&r.code.add(s`vec2 computePerspectiveInnerJoin(
vec2 leftDirection,
vec2 rightDirection,
float leftLength,
float rightLength,
float previousWidth,
float currentWidth,
float nextWidth,
float lineSide,
bool isStartVertex
) {
vec2 leftNormal = vec2(leftDirection.y, -leftDirection.x) * lineSide;
vec2 rightNormal = vec2(rightDirection.y, -rightDirection.x) * lineSide;
vec2 segmentOffset = (isStartVertex ? rightNormal : leftNormal) * currentWidth;
if (min(leftLength, rightLength) <= EPS) {
return segmentOffset;
}
vec2 leftEdge = leftDirection + leftNormal * ((currentWidth - previousWidth) / leftLength);
vec2 rightEdge = rightDirection + rightNormal * ((nextWidth - currentWidth) / rightLength);
vec2 offset = (rightNormal - leftNormal) * currentWidth;
float determinant = leftEdge.x * rightEdge.y - leftEdge.y * rightEdge.x;
float determinantScale = length(leftEdge) * length(rightEdge);
const float parallelTolerance = EPS * EPS;
if (!(abs(determinant) > parallelTolerance * determinantScale)) {
return segmentOffset;
}
float leftDistance = (offset.x * rightEdge.y - offset.y * rightEdge.x) / determinant;
float rightDistance = (offset.x * leftEdge.y - offset.y * leftEdge.x) / determinant;
if (!(leftDistance >= -leftLength && leftDistance <= 0.0 &&
rightDistance >= 0.0 && rightDistance <= rightLength)) {
return segmentOffset;
}
return leftNormal * currentWidth + leftDistance * leftEdge;
}`),O&&r.code.add(s`float perspectiveWidthAtOffset(vec2 offset, vec2 segment, float widthAtOrigin, float widthChange) {
float segmentFraction = dot(offset, segment) / max(dot(segment, segment), EPS * EPS);
return widthAtOrigin + segmentFraction * widthChange;
}`),r.code.add(s`
    vec2 computeJoinAndCapDisplacement(
      bool isJoin,
      bool isStartVertex,
      inout vec3 left,
      inout vec3 right,
      float lineSide,
      float lineWidth,
      ${y(O,"vec2 neighborWidths,")}
      float subdivisionFactor,
      float perspectiveDivisor
    ) {
      float leftLen = length(${y(O,s`left.xy`,s`left`)});
      float rightLen = length(${y(O,s`right.xy`,s`right`)});
      left = leftLen > EPS ? left / leftLen : vec3(0.0);
      right = rightLen > EPS ? right / rightLen : vec3(0.0);

      vec3 capDisplacementDir = vec3(0.0);
      vec3 joinDisplacementDir = vec3(0.0);
      float displacementLen = lineWidth;
      float miterDisplacementLen = lineWidth;
      float innerDisplacementLen = lineWidth;
      bool isOutside = false;
      ${y(O,"vec2 innerDisplacement = vec2(0.0);")}

      if (isJoin) {
        // Determine if the vertex is on the outside or inside of the join.
        isOutside = (left.x * right.y - left.y * right.x) * lineSide > 0.0;

        // Compute the miter join position first.
        ${y(O,s`
            vec2 bisector = left.xy + right.xy;
            vec2 segmentDirection = isStartVertex ? right.xy : left.xy;
            vec3 joinDirection = vec3(length(bisector) > EPS ? normalize(bisector) : segmentDirection, 0.0);
            joinDisplacementDir = perpendicular(joinDirection);

            if (leftLen > EPS && rightLen > EPS) {
              float nDotSeg = dot(joinDisplacementDir, left);
              displacementLen /= length(nDotSeg * left.xy - joinDisplacementDir.xy);
              miterDisplacementLen = displacementLen;
            }

            innerDisplacement = computePerspectiveInnerJoin(
              left.xy, right.xy, leftLen, rightLen,
              neighborWidths.x, lineWidth, neighborWidths.y,
              isOutside ? -lineSide : lineSide, isStartVertex
            );
            innerDisplacementLen = length(innerDisplacement);
          `,s`
            vec3 joinDirection = normalize(left + right);
            joinDisplacementDir = perpendicular(joinDirection);

            if (leftLen > EPS && rightLen > EPS) {
              float nDotSeg = dot(joinDisplacementDir, left);
              displacementLen /= length(nDotSeg * left - joinDisplacementDir);
              miterDisplacementLen = displacementLen;
              innerDisplacementLen = min(displacementLen, min(leftLen, rightLen) / abs(nDotSeg));

              // Limit displacement of inner vertices.
              if (!isOutside) {
                displacementLen = innerDisplacementLen;
              }
            }
          `)}

        // Compute stretch compensation for feathering.
        ${y(C,s`
          if (subdivisionFactor > 0.0) {
            vIsInsideJoin = 1;
          }
        `)}
        vSubdivisionFactor = isOutside ? subdivisionFactor : 0.5;

        if (miterDisplacementLen > miterLimit * lineWidth) {
          vec2 leftScreenDir = left.xy;
          vec2 rightScreenDir = right.xy;
          float leftScreenLen = length(leftScreenDir);
          float rightScreenLen = length(rightScreenDir);

          if (leftScreenLen > EPS && rightScreenLen > EPS) {
            leftScreenDir /= leftScreenLen;
            rightScreenDir /= rightScreenLen;

            /**
             * Feathering AA needs special considerations on join triangles because these can get stretched a lot at acute angles.
             * We use the triangle height to determine by how much they get stretched.
             */
            float theta = acos(clamp(dot(leftScreenDir, rightScreenDir), -1.0, 1.0));
            /**
             * The argument of cos here is half the angle of a join triangle.
             * We start with one triangle, and every subdivision adds another triangle.
             */
            float subdividedTriangleHeight = (innerDisplacementLen + lineWidth) * cos(theta / (2.0 + 2.0 * NUM_JOIN_SUBDIVISIONS));
            float bevelTriangleHeight = innerDisplacementLen + lineWidth * cos(theta * 0.5);
            float triangleHeight = NUM_JOIN_SUBDIVISIONS > 0.0 ? subdividedTriangleHeight : bevelTriangleHeight;
            vStretchFactor = noPerspectiveWrite(max(triangleHeight / (2.0 * lineWidth), 1.0), perspectiveDivisor);
          }
        }

        if (isOutside && displacementLen > miterLimit * lineWidth) {
          ${y(a.roundJoins,s`
              vec3 startDir = perpendicular(leftLen < EPS ? right : left);
              vec3 endDir = perpendicular(rightLen < EPS ? left : right);
              float factor = ${f?s`min(1.0, subdivisionFactor * ((NUM_JOIN_SUBDIVISIONS + 1.0) / NUM_JOIN_SUBDIVISIONS))`:s`subdivisionFactor`};

              float rotationAngle = acos(clamp(dot(startDir.xy, endDir.xy), -1.0, 1.0));
              joinDisplacementDir = rotateZ(startDir, -lineSide * factor * rotationAngle);
            `,s`
              /**
               * Convert to bevel join if miterLimit is exceeded.
               * Here vertices with a subdivisionFactor > 0 are either START vertices or
               * an additional END vertex to fix line pattern interpolation.
               * The additional vertex is considered to be the END of the previous segment.
               * However, it is pushed to the position of the START of the next segment,
               * so that the entire bevel join will be part of the first segment, pattern-wise.
               */
              vec3 startDir = perpendicular(leftLen < EPS ? right : left);
              vec3 endDir = perpendicular(rightLen < EPS ? left : right);

              ${y(f,s`joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? endDir : startDir;`,s`joinDisplacementDir = mix(startDir, endDir, subdivisionFactor);`)}
            `)}
          displacementLen = lineWidth;
        }
      } else {
        joinDisplacementDir = perpendicular(isStartVertex ? right : left);
        ${p===0?"":s`capDisplacementDir = vec3((isStartVertex ? -right : left).xy, 0.0);`}
      }

      ${y(O,s`
        if (isJoin && !isOutside) {
          return innerDisplacement;
        }
      `)}
      return (joinDisplacementDir.xy * lineSide + capDisplacementDir.xy) * displacementLen;
    }
  `),r.main.add(s`
      clip(pos, prev, next, ${y(V,s`u0, prevU0, nextU0,`)} isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec3 left = (pos.xyz - prev.xyz);
      vec3 right = (next.xyz - pos.xyz);

      float lineSize = getSize(${y(b,"clippedPos")});
      ${y(f&&b,"float patternLineSize = getSize(clippedCenter);")}
      ${y(f&&!b,"float patternLineSize = lineSize;")}

      ${y(u,s`
          ${y(l,s`float lineSizeScreen = lineSize * groundMetersToScreenRatio;`,s`
              float widthPerInverseDepth = lineSize / (metersPerRenderUnit * screenPixelSizePerDistance);
              float lineSizeScreen = widthPerInverseDepth / max(-clippedPos.z, nearFar[0]);
            `)}
          float lineWidth = lineSizeScreen * pixelRatio + aaWidth;
        `,s`
          float lineWidth = lineSize * pixelRatio + aaWidth;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${f?s`vLineSizeInv = noPerspectiveWrite(1.0 / ${u?"lineSize":"max(lineSize, 1.0)"}, pos.w);`:""}
  `),A&&r.main.add(s`
      float isEndVertex = float(!isStartVertex);
      vec3 segmentOrigin = mix(pos.xyz, prev.xyz, isEndVertex);
      vec3 segment = mix(right, left, isEndVertex);
      ${T?s`vec3 segmentEnd = mix(next.xyz, pos.xyz, isEndVertex);`:""}
    `),r.main.add(s`
    vIsInsideJoin = ${C?s`0`:s`float(isInsideJoin)`};
    vStretchFactor = 1.0;
    vSubdivisionFactor = 0.0;
    vJoinCenterLineSDFs = vec2(LARGE_HALF_FLOAT);

    ${y(O,s`
        vec2 neighborWidths = widthPerInverseDepth / max(vec2(prev.w, next.w), vec2(nearFar[0])) * pixelRatio + aaWidth;
      `)}

    vec2 displacementXY = computeJoinAndCapDisplacement(
      isJoin,
      isStartVertex,
      left,
      right,
      lineSide,
      lineWidth,
      ${y(O,"neighborWidths,")}
      lineParameters.x,
      pos.w
    );
    ${y(O,s`
        // Feathering must use each strip's width at the displaced vertex, not at the original join.
        float leftWidth = perspectiveWidthAtOffset(displacementXY, pos.xy - prev.xy, lineWidth, lineWidth - neighborWidths.x);
        float rightWidth = perspectiveWidthAtOffset(displacementXY, next.xy - pos.xy, lineWidth, neighborWidths.y - lineWidth);
        // Match vJoinCenterLineSDFs: right first, selected when vSubdivisionFactor > 0.5.
        vJoinLineWidths = noPerspectiveWrite(vec2(rightWidth, leftWidth), pos.w);
      `)}
    vec3 segmentDirection = isStartVertex ? right : left;

    /**
     * To prevent z-fighting between layers, we also adjust the z value.
     * We want to ensure that the orientation of the final triangles is the same, regardless of the line width.
     * To do so, the below formula projects the xy displacement onto the original segment direction
     * to find the z-offset necessary so the triangle orientation is independent of the width.
     */
    float displacementZ = dot(displacementXY, segmentDirection.xy) / dot(segmentDirection.xy, segmentDirection.xy) * segmentDirection.z;
    vec3 displacement = vec3(displacementXY, displacementZ);

    float lineDistNorm = noPerspectiveWrite(lineSide, pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${w?s`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xyz += displacement;
  `),r.main.add(s`if (isJoin) {
vec2 joinCenterToVertex = displacementXY;
vec2 leftCenterlineDir = left.xy;
vec2 rightCenterlineDir = right.xy;
float leftCenterlineLen = length(leftCenterlineDir);
float rightCenterlineLen = length(rightCenterlineDir);
leftCenterlineDir = leftCenterlineLen > EPS ? leftCenterlineDir / leftCenterlineLen : vec2(1.0, 0.0);
rightCenterlineDir = rightCenterlineLen > EPS ? rightCenterlineDir / rightCenterlineLen : leftCenterlineDir;
vJoinCenterLineSDFs = noPerspectiveWrite(
vec2(
dot(vec2(rightCenterlineDir.y, -rightCenterlineDir.x), joinCenterToVertex),
dot(vec2(leftCenterlineDir.y, -leftCenterlineDir.x), joinCenterToVertex)
),
pos.w
);
}`),T&&r.main.add(s`vec2 segmentDir = normalize(segment.xy);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin.xy, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd.xy, -segmentDir)), pos.w);`),f&&(l?r.main.add(s`float stippleDistanceToScreenRatio = ${u?"groundMetersToScreenRatio":"planarDistanceToScreenRatio"};`):r.main.add(s`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float stippleDistanceToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),r.main.add(s`
      float segmentLengthScreenDouble = length(segment.xy);
      float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
      float discreteStippleDistanceToScreenRatio = discretizeStippleDistanceToScreenRatio(stippleDistanceToScreenRatio);
      float segmentLengthRender = ${y(u,s`abs(mix(nextU0 - u0, u0 - prevU0, isEndVertex))`,s`length(mix(nextPosition - position, position - prevPosition, isEndVertex))`)};

      ${y(!l||u,s`
          float segmentStartRender = ${y(u,s`mix(u0, prevU0, isEndVertex)`,s`mix(u0, u0 - segmentLengthRender, isEndVertex)`)};
        `)}

      vStipplePatternStretch = stippleDistanceToScreenRatio / discreteStippleDistanceToScreenRatio;
    `),l?r.main.add(s`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteStippleDistanceToScreenRatio / stippleDistanceToScreenRatio;
float startPseudoScreen = u0 * discreteStippleDistanceToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):r.main.add(s`float startPseudoScreen = segmentStartRender * discreteStippleDistanceToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteStippleDistanceToScreenRatio;`),r.uniforms.add(new Q("stipplePatternPixelSize",D=>oa(D))),r.main.add(s`
      float patternLength = patternLineSize * stipplePatternPixelSize;
      vec2 stippleDistanceLimits;

      ${y(u,s`
          stippleDistanceLimits = vec2(segmentStartRender, segmentStartRender + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          ${y($,s`
              // The v-coordinate used in case of an image pattern.
              bool isLeft = lineSide < 0.0;
              vStippleV = isLeft ? 0.0 : 1.0;
            `)}
        `,s`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= EPS) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec3 stippleDisplacement = pos.xyz - segmentOrigin;
        float stippleDisplacementFactor = dot(segment.xy, stippleDisplacement.xy) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (stippleDistanceLimits.y - stippleDistanceLimits.x);
      }

      ${y(V,s`
          float segmentStartInverseW = 1.0 / mix(pos.w, prev.w, isEndVertex);
          float segmentEndInverseW = 1.0 / mix(next.w, pos.w, isEndVertex);
          vStipplePerspective = noPerspectiveWrite(
            vec4(stippleDistanceLimits, segmentStartInverseW, segmentEndInverseW),
            pos.w
          );
        `)}

      // Cancel out perspective-correct interpolation for screen-space stipple distances.
      vStippleLimitsAndCaps.xy = noPerspectiveWrite(stippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleLimitsAndCaps.zw = isJoin ? vec2(0.0) :
               isStartVertex ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    `)),r.main.add(s`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;
      pos.z = pos.z * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a, pos.w);

      ${v&&!l?"pos.z -= EPS * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.include(lr,a),e.include(sa),n.include(cr),n.include(dr),n.include(pr,a),n.main.add("discardBySlice(vpos);"),n.code.add(s`
    float lineFeatheringFactor(float lineWidth, float lineDistance) {
      /**
       * Determine whether we are inside the feathering region or not, under
       * consideration of triangle stretch and the distance to the centerline.
       */
      float stretchFactor = float(vIsInsideJoin) > 0.5 ? noPerspectiveRead(vStretchFactor) : 1.0;
      float featherWidth = 2.0;
      // Keep the filter in render-target pixels, including when its two sides overlap on a subpixel stroke.
      float featherStartDistance = lineWidth - featherWidth / stretchFactor;
      float straightLineWidth = ${O?s`noPerspectiveRead(vSubdivisionFactor > 0.5 ? vJoinLineWidths.x : vJoinLineWidths.y)`:"lineWidth"};
      float straightFeatherStartDistance = straightLineWidth - featherWidth;
      float value = abs(lineDistance);
      float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
      vec2 joinCenterSDFs = noPerspectiveRead(vJoinCenterLineSDFs);
      float joinCenterDistance = abs(vSubdivisionFactor > 0.5 ? joinCenterSDFs.x : joinCenterSDFs.y);
      float straightFeather = (joinCenterDistance - straightFeatherStartDistance) / featherWidth;
      feather = float(vIsInsideJoin) > 0.5 ? max(feather, straightFeather) : feather;
      float coverage = min(lineWidth - aaWidth, 1.0);
      return clamp(1.0 - feather, 0.0, coverage);
    }
  `),n.main.add(s`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${y(w,s`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),z&&n.main.add(s`float nominalLineWidth = lineWidth - aaWidth;`),v?n.main.add(s`vec4 albedo = vec4(1.0, 0.0, 1.0, 1.0);
vec4 finalColor = albedo;`):(T&&n.main.add(s`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - ${z?"nominalLineWidth":"lineWidth"}) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < alphaCutoff) {
          discard;
        }
      `),z?n.main.add(s`vec2 stipplePosition = vec2(
min(getStippleCapDistance(), 0.0) * nominalLineWidth,
lineDistance
);
float stippleRadius = length(stipplePosition);
float stippleCapSDF = (stippleRadius - nominalLineWidth) * 0.5;
float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
float lineCoverage = min(lineFeatheringFactor(lineWidth, lineDistance), capCoverage);
float stippleAlpha = lineCoverage > 0.0 ? min(stippleCoverage, lineCoverage) / lineCoverage : 0.0;`):n.main.add(s`float stippleAlpha = getStippleAlpha(lineWidth);`),d!==11&&n.main.add(s`discardByStippleAlpha(stippleAlpha, alphaCutoff);`),n.uniforms.add(new Lt("intrinsicColor",D=>D.color)).main.add(s`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),m&&n.uniforms.add(new Lt("innerColor",D=>D.innerColor??D.color),new Q("innerWidth",(D,F)=>D.innerWidth*F.camera.pixelRatio)).main.add(s`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),n.main.add("vec4 albedo = blendStipple(color, stippleAlpha);"),h&&(n.uniforms.add(new Q("falloff",D=>D.falloff)),n.main.add(s`albedo.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),n.main.add(s`albedo.a *= ${z?"lineCoverage":"lineFeatheringFactor(lineWidth, lineDistance)"};`),g&&(r.main.add(`vec4 animatedAlphaTimeStamps = ${L.getTextureAttribute("timeStamps")};`),e.include(Fn,a),n.main.add("albedo.a *= animatedAlpha();")),c?(i.add("vnormal","vec3"),r.include(Jr,a),r.main.add("vnormal = getLocalUp(vpos, localOrigin);"),e.include(xn,a),n.main.add("vec4 finalColor = evaluateSceneLightingFragment(vpos, vnormal, albedo);")):n.main.add("vec4 finalColor = albedo;")),n.main.add(s`outputColorHighlightOLID(applySlice(finalColor, vpos), albedo.rgb);`),e}const as=Object.freeze(Object.defineProperty({__proto__:null,build:is,numRoundJoinSubdivisions:1},Symbol.toStringTag,{value:"Module"}));let At=class extends ur{constructor(a,e){super(a,e,qr(da())),this.shader=new fr(as,()=>wa(()=>import("./RibbonLine.glsl-Dh2rIEwl.js").then(t=>t.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]))),this.ignoreUnused=!0,this.primitiveType=e.wireframe?Nt.LINES:Nt.TRIANGLE_STRIP}_makePipelineState(a,e){let{output:t,hasOccludees:i}=a;return He({blending:vr(t,!1,a.emissionDimmingPass),depthTest:gr(t),depthWrite:mr(a),colorWrite:ct,stencilWrite:i?Xt:null,stencilTest:i?e?qt:hr:null,polygonOffset:Be(a)})}initializePipeline(a){if(a.occluder){let{hasOccludees:e}=a;this._occluderPipelineTransparent=He({blending:si,polygonOffset:Be(a),depthTest:Kt,depthWrite:null,colorWrite:ct,stencilWrite:null,stencilTest:e?Sr:null}),this._occluderPipelineOpaque=He({blending:si,polygonOffset:Be(a),depthTest:e?Kt:Zt,depthWrite:null,colorWrite:ct,stencilWrite:e?yr:null,stencilTest:e?xr:null}),this._occluderPipelineMaskWrite=He({blending:null,polygonOffset:Be(a),depthTest:Zt,depthWrite:null,colorWrite:null,stencilWrite:e?Xt:null,stencilTest:e?qt:null})}return this._occludeePipeline=this._makePipelineState(a,!0),this._makePipelineState(a,!1)}getPipeline(a,e,t){if(t)return this._occludeePipeline;switch(a.occluder){case 11:return this._occluderPipelineTransparent??super.getPipeline(a,e,t);case 10:return this._occluderPipelineOpaque??super.getPipeline(a,e,t);default:a.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(a,e,t)}}};At=S([Oa("esri.views.3d.webgl-engine.shaders.RibbonLineTechnique")],At);let U=class extends Zi{constructor(e){super(),this.spherical=e,this.emissionSource=0,this.pbrMode=0,this.draped=!1,this.shadingEnabled=!1,this.worldSized=!1,this.hasScreenSizePerspective=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.hasOccludees=!1,this.occluder=!1,this.receiveShadows=!0,this.hasShadowHighlights=!1,this.receiveAmbientOcclusion=!0,this.receiveGlobalIllumination=!0,this.textureCoordinateType=0,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1,this.renderOccluded=!1,this.useCustomDTRExponentForWater=!1,this.hasColorTexture=!1,this.useFillLights=!1}get lineWidthRequiresPosition(){return this.hasScreenSizePerspective||this.worldSized&&!this.draped}};S([x({count:8})],U.prototype,"emissionSource",void 0),S([x({count:8})],U.prototype,"pbrMode",void 0),S([x()],U.prototype,"draped",void 0),S([x()],U.prototype,"shadingEnabled",void 0),S([x()],U.prototype,"worldSized",void 0),S([x()],U.prototype,"hasScreenSizePerspective",void 0),S([x()],U.prototype,"hasVVSize",void 0),S([x()],U.prototype,"hasVVColor",void 0),S([x()],U.prototype,"hasVVOpacity",void 0),S([x()],U.prototype,"hasOccludees",void 0),S([x()],U.prototype,"occluder",void 0),S([x()],U.prototype,"receiveShadows",void 0),S([x()],U.prototype,"hasShadowHighlights",void 0),S([x()],U.prototype,"receiveAmbientOcclusion",void 0),S([x()],U.prototype,"receiveGlobalIllumination",void 0);const eo=16;let M=class extends U{constructor(){super(...arguments),this.capType=0,this.animation=2,this.polygonOffsetIndex=0,this.numJoinSubdivisions=1,this.polygonOffset=0,this.writeDepth=!1,this.transparent=!1,this.enableOITOffset=!0,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.wireframe=!1,this.imagePattern=!1,this.useFlatJoinVarying=!1}get hasAnimation(){return this.animation!==0}get usePerspectiveCorrectStipple(){return this.worldSized&&!this.draped}};S([x({count:3})],M.prototype,"capType",void 0),S([x({count:4})],M.prototype,"animation",void 0),S([x({count:16})],M.prototype,"polygonOffsetIndex",void 0),S([x({count:8})],M.prototype,"numJoinSubdivisions",void 0),S([x({count:5})],M.prototype,"polygonOffset",void 0),S([x()],M.prototype,"writeDepth",void 0),S([x()],M.prototype,"transparent",void 0),S([x()],M.prototype,"enableOITOffset",void 0),S([x()],M.prototype,"stippleEnabled",void 0),S([x()],M.prototype,"stippleOffColorEnabled",void 0),S([x()],M.prototype,"stipplePreferContinuous",void 0),S([x()],M.prototype,"roundJoins",void 0),S([x()],M.prototype,"applyMarkerOffset",void 0),S([x()],M.prototype,"falloffEnabled",void 0),S([x()],M.prototype,"innerColorEnabled",void 0),S([x()],M.prototype,"wireframe",void 0),S([x()],M.prototype,"imagePattern",void 0),S([x()],M.prototype,"useFlatJoinVarying",void 0);class io extends cn{constructor(e,t){super(e,ns),this.produces=new Map([[2,i=>Ga(i)||We(i)&&this.parameters.renderOccluded===8],[3,i=>Ya(i)],[10,i=>Gt(i)&&this.parameters.renderOccluded===8],[11,i=>Gt(i)&&this.parameters.renderOccluded===8],[4,i=>We(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[8,i=>We(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[18,i=>qa(i)]]),this._configuration=new M(t.state.isGlobal),this._isAssumedMetalDriver=t.stage.renderer.renderContext.rctx.isAssumedMetalDriver}updateConfiguration(e){super.updateConfiguration(e),this._configuration.useFlatJoinVarying=!this._isAssumedMetalDriver;let t=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e.output!==10,i=t&&this.parameters.isImagePattern()&&this._configuration.draped,r=this.parameters.usesWorldSizedWidth(i);this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.stippleEnabled=t,this._configuration.stippleOffColorEnabled=t&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=t&&this.parameters.stipplePreferContinuous,this._configuration.numJoinSubdivisions=ua(this.parameters.join,t),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&os(this.parameters.markerParameters),this._configuration.polygonOffsetIndex=this.parameters.polygonOffsetIndex,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=+!!this.emissions,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!r,this._configuration.worldSized=r,this._configuration.imagePattern=i}get visible(){return this.parameters.color[3]>=Me||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>Me}get emissions(){return this.parameters.emissiveStrength>0?this.parameters.renderOccluded===8?1:2:0}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectRayDraped({attributes:e},t,i,r,n,o,l){if(!t.options.selectionMode)return;let c=this._getLineSize(e,!0),d=i[0],p=i[1],f=fi(c,o,l,this.parameters.usesWorldSizedWidth()),h=Number.MAX_VALUE,v=0;for(let m of hi(de,Oe,this.parameters,e)){let g=d-de[0],b=p-de[1],u=Oe[0]-de[0],$=Oe[1]-de[1],C=u*g+$*b,T=u*u+$*$,z=Ct(C/T,0,1),w=u*z-g,A=$*z-b,O=w*w+A*A;O<h&&(h=O,v=m)}h<f*f&&r(n.distance,n.renderDistance,n.normal,v)}intersectRay(e,t,i,r,n,o){let{options:l,camera:c}=i;if(!l.selectionMode||!e.visible||!c)return;if(!ai(t)){Tt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");return}let d=this._getLineSize(e.attributes);this.parameters.worldSized?this._intersectRayWithWorldSizedLine(e,t,i,d,o):this._intersectRayWithScreenSizedLine(e,t,i,d,o)}_intersectRayWithScreenSizedLine(e,t,i,r,n){let{camera:o}=i,l=e.attributes,c=l.get("position").data,d=ht;tt(d,i.point);let p=r*o.pixelRatio,f=it*o.pixelRatio,h=p/2+f;X(Fe[0],d[0]-h,d[1]+h,0),X(Fe[1],d[0]+h,d[1]+h,0),X(Fe[2],d[0]+h,d[1]-h,0),X(Fe[3],d[0]-h,d[1]-h,0);for(let g=0;g<4;g++)if(!o.unprojectFromRenderScreen(Fe[g],ne[g]))return;je(o.eye,ne[0],ne[1],vt),je(o.eye,ne[1],ne[2],St),je(o.eye,ne[2],ne[3],xt),je(o.eye,ne[3],ne[0],yt);let v=Number.MAX_VALUE,m=0;for(let g of this._forEachTransformedLineSegment(R,I,c,t,Pe(this.parameters,l))){if(ee(vt,R)<0&&ee(vt,I)<0||ee(St,R)<0&&ee(St,I)<0||ee(xt,R)<0&&ee(xt,I)<0||ee(yt,R)<0&&ee(yt,I)<0)continue;let b=o.projectToRenderScreen(R,Le),u=o.projectToRenderScreen(I,_e);if(b==null||u==null)continue;if(b[2]<0&&u[2]>0){fe(te,R,I);let T=o.frustum,z=-ee(T[4],R)/Y(te,Jt(T[4]));if(oe(te,te,z),Ut(R,R,te),!o.projectToRenderScreen(R,b))continue}else if(b[2]>0&&u[2]<0){fe(te,I,R);let T=o.frustum,z=-ee(T[4],I)/Y(te,Jt(T[4]));if(oe(te,te,z),Ut(I,I,te),!o.projectToRenderScreen(I,u))continue}else if(b[2]<0&&u[2]<0)continue;b[2]=0,u[2]=0;let $=xe(b,u,mt),C=Ma($,d);if(!(C>=v)){if(this.parameters.screenSizePerspective){let T=this.computeScreenSizePerspectiveWidth($,R,I,d,o,r,f);if(C>=T*T)continue}v=C,q(xi,R),q(yi,I),m=g}}if(v<h*h){let{rayBegin:g,rayEnd:b}=i,u=Number.MAX_VALUE;if(Na(xe(xi,yi,mt),xe(g,b,gt),G)){fe(G,G,g);let $=ve(G);oe(G,G,1/$),u=$/ge(g,b)}n(u,u,G,m)}}_intersectRayWithWorldSizedLine(e,t,i,r,n){let{camera:o,ray:l,metersPerRenderUnit:c}=i,d=e.attributes,p=d.get("position").data,f=r/(2*c),h=1/0,v=0;for(let m of this._forEachTransformedLineSegment(R,I,p,t,Pe(this.parameters,d))){let g=dn(R,I,f,o,l,bi);if(g!=null&&g<h&&(h=g,v=m,q(G,bi),g===0))break}h<1/0&&n(h,h,G,v)}intersectScreenPolygon(e,t,i,r){let{options:n}=i;if(!n.selectionMode||!e.visible)return null;if(!ai(t))return Tt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix"),null;let o=this._getLineSize(e.attributes);return this.parameters.worldSized?this._intersectWorldSizedPolygon(e,t,i,r,o):this._intersectScreenSizedPolygon(e,t,i,r,o)}_intersectScreenSizedPolygon(e,t,i,r,n){let{camera:o,screenPolygonPrimitiveProcessor:l}=i,c=e.attributes,d=c.get("position").data,p=it,f=p*o.pixelRatio,h=new _t(4);for(let v of this._forEachTransformedLineSegment(R,I,d,t,Pe(this.parameters,c)))for(let[m,g]of l.processLineSegment($i,R,I)){if(!br(o,m,g,Le,_e))continue;let b=xe(Le,_e,mt),u=n/2+p;this.parameters.screenSizePerspective&&(jt(ht,Le,_e,.5),u=Math.max(u,this.computeScreenSizePerspectiveWidth(b,m,g,ht,o,n,f)/o.pixelRatio)),o.renderToScreen(Le,vi),o.renderToScreen(_e,Si),Qt(r,vi,Si,u)&&(kt(xe(m,g,gt),o.eye,re),h.updateIfCloserFromValues(ge(o.eye,re),v,re,null))}return h}_intersectWorldSizedPolygon(e,t,i,r,n){let{camera:o,screenPolygonPrimitiveProcessor:l,metersPerRenderUnit:c}=i,{attributes:d}=e,p=d.get("position").data,f=n/(2*c),h=new _t(4);for(let v of this._forEachTransformedLineSegment(R,I,p,t,Pe(this.parameters,d)))for(let[m,g]of l.processLineSegment($i,R,I)){kt(xe(m,g,gt),o.eye,re);let b=ge(o.eye,re);h.valid&&b>=h.distance||un(m,g,f,o,r)&&h.updateIfCloserFromValues(b,v,re,null)}return h}intersectScreenPolygonDraped({attributes:e},t,i,r,n,o){if(!i.options.selectionMode)return null;let l=fi(this._getLineSize(e,!0),n,o,this.parameters.usesWorldSizedWidth());for(let c of hi(de,Oe,this.parameters,e,t))if(Qt(r,de,Oe,l))return new Qi(c);return null}createBufferWriter(){return new ss(da(this.parameters),pa(this.parameters),this.parameters,this._isAssumedMetalDriver)}createGLMaterial(e){return new rs(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return this.parameters.hasAnimation?(this.setParameters({timeElapsed:La(e.time)},!1),e.dt!==0):!1}computeScreenSizePerspectiveWidth(e,t,i,r,n,o,l){let c=Ua(e,r);jt(re,t,i,c),ce(gi,re,n.viewMatrix);let d=ve(gi),p=this.computeCameraAbsCosAngle(re,n,this._configuration.spherical);return mi.update(p,d,this.parameters.screenSizePerspective,this.parameters.screenSizePerspectiveMinPixelReferenceSize),mi.apply(o)*n.pixelRatio/2+l}computeCameraAbsCosAngle(e,t,i){return i?Ne(G,e):X(G,0,0,1),fe(Xe,e,t.eye),Ne(Xe,Xe),Math.abs(Y(G,Xe))}_getLineSize(e,t=!1){let i=this.parameters.width;if(this.parameters.vvSize){let r=e.get("sizeFeatureAttribute").data[0];Number.isNaN(r)?t&&(i*=this.parameters.vvSize.fallback[0]):i*=Ct(this.parameters.vvSize.offset[0]+r*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else e.has("size")&&(i*=e.get("size").data[0]);return i}*_forEachTransformedLineSegment(e,t,i,r,n){let o=n?i.length-2:i.length-5;for(let l=0;l<o;l+=3){e[0]=i[l]+r[12],e[1]=i[l+1]+r[13],e[2]=i[l+2]+r[14];let c=(l+3)%i.length;t[0]=i[c]+r[12],t[1]=i[c+1]+r[13],t[2]=i[c+2]+r[14],yield l/3}}}let rs=class extends Pr{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){let{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(At,e)}},ns=class extends Dr{constructor(){super(...arguments),this._width=0,this.color=wt,this.join="miter",this.cap=0,this.miterLimit=5,this.shadingEnabled=!1,this.writeDepth=!0,this.polygonOffset=0,this.polygonOffsetIndex=0,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=Ie(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=Ie(0),this.endTime=Ie(1/0),this.worldSized=!1}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}usesWorldSizedWidth(e=this.isImagePattern()){return this.worldSized||e}isImagePattern(){return ea(this.stipplePattern)&&this.stippleTexture!=null}},ss=class{constructor(e,t,i,r){this.layout=e,this.textureBufferLayout=t,this._parameters=i,this._isAssumedMetalDriver=r,this.numJoinSubdivisions=ua(this._parameters.join,this._parameters.stipplePattern!=null)}_isClosed(e){return Pe(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCountTextureBuffer(e){return e.get("position").data.length/3+(this._isClosed(e)?3:2)}elementCount(e){let t=e.get("position").indices.length/2+1,i=this._isClosed(e),r=i?2:4,n=+!i,o=i?t:t-1,l=this.numJoinSubdivisions*2+(this._isAssumedMetalDriver?8:4);return r+=(o-n)*l,r+=2,this._parameters.wireframe&&(r=2+(r-2)*4),r}write(e,t,i,r,n,o){o!=null&&this._writeTextureBuffer(e,i,o),r!=null&&this._writeVertexBuffer(e,i,r,n)}_writeTextureBuffer(e,t,i){let r=t.get("position"),n=r.data.length/3,o=this._isClosed(t),{buffer:l,offset:c}=i,d=l.getField("position",Ji),p=l.getField("u0",ze),f=l.getField("sizeFeatureAttribute",ze),h=l.getField("size",ze),v=l.getField("colorFeatureAttribute",ze),m=l.getField("color",Ht),g=l.getField("olidColor",Ht),b=l.getField("timeStamps",ja),u=l.getField("opacityFeatureAttribute",ze),$=t.get("sizeFeatureAttribute")?.data,C=t.get("size")?.data,T=t.get("colorFeatureAttribute")?.data,z=t.get("color")?.data,w=t.get("opacityFeatureAttribute")?.data,A=t.get("distanceToStart")?.data,O=t.get("timeStamps");se(d!==null,"Expected valid position field in texture buffer"),se(p!==null,"Expected valid u0 field in texture buffer");let V=0;for(let _=0;_<n;++_){this._getTransformedPosition(ye,r.data,_,e),_>0&&(A==null?V+=ge(Ke,ye):V=A[_]??V);let D=c+_+1;if(d.setVec(D,ye),p.set(D,V),q(Ke,ye),f&&f.set(D,$?.length===1?$[0]:$?.[_]??0),h&&h.set(D,C?.length===1?C[0]:C?.[_]??1),v&&v.set(D,T?.length===1?T[0]:T?.[_]??0),m)if(z!=null){let F=Math.min(_*4,z.length-4);m.setValues(D,z[F],z[F+1],z[F+2],z[F+3])}else m.setValues(D,1,1,1,1);u&&u.set(D,w?.length===1?w[0]:w?.[_]??0)}if(b!=null&&O!=null){se(O.size===4);let _=O.data;for(let D=0;D<n;++D){let F=D*4,H=c+D+1;b.set(H,0,_[F]),b.set(H,1,_[F+1]),b.set(H,2,_[F+2]),b.set(H,3,_[F+3])}}if(o){let _=c,D=c+1,F=c+2,H=c+n,Se=H+1,va=H+2;l.copyItem(H,_),l.copyItem(D,Se),l.copyItem(F,va),d.getVec(H,Ke),d.getVec(D,ye);let Sa=A?.[n]??V+ge(Ke,ye);p.set(Se,Sa)}else{let _=c,D=c+1,F=c+n,H=F+1;l.copyItem(D,_),l.copyItem(F,H)}let L=t.get("olidColor");Ki()&&L!=null&&g!=null&&Ft(L,4,g,c)}_writeVertexBuffer(e,t,i,r){let{buffer:n,offset:o}=i,{layout:l}=this,c=t.get("position"),d=c.indices,p=c.data.length/3,f=this._isClosed(t),h=p+(f?3:2);d&&d.length!==2*(p-1)&&console.warn("RibbonLineMaterial does not support indices");let v=n.getField("textureElementIndex",ka);se(v!=null,"Missing texture buffer index field"),se(r!=null,"Using a texture layout, but the texture range for this instance was not provided");let m=r.from;se(r.numElements===h,"Expected number of elements in TextureBuffer to equal number of points");let g=new Float32Array(n.buffer),b=new Float16Array(n.buffer),u=new Uint32Array(n.buffer),$=l.stride/4,C=o*$,T=C,z=g.BYTES_PER_ELEMENT/b.BYTES_PER_ELEMENT,w=(L,_,D,F=!1)=>{let H=D+1;u[C]=m+H,C++;let Se=C*z;b[Se++]=L,b[Se++]=_+(F?Math.sign(_)*8:0),C=Math.ceil(Se/z)};C+=$;let A=0,O=0;f?(A=0,O=p):(w(1,-4,0),w(1,4,0),A=1,O=p-1);let V=this._isAssumedMetalDriver;for(let L=A;L<O;L++){w(0,-1,L),w(0,1,L),V&&(w(0,-1,L,!0),w(0,1,L,!0));let _=this.numJoinSubdivisions;for(let D=0;D<_;++D){let F=(D+1)/(_+1);w(F,-1,L,V),w(F,1,L,V)}w(1,-2,L,V),w(1,2,L,V),V&&(w(1,-2,L),w(1,2,L))}f?(w(0,-1,O),w(0,1,O)):(w(0,-5,O),w(0,5,O)),ft(g,T+$,g,T,$),C=ft(g,C-$,g,C,$),this._parameters.wireframe&&this._addWireframeVertices(n,T,C,$)}_getTransformedPosition(e,t,i,r){let n=i*3;X(e,t[n+0],t[n+1],t[n+2]),r&&ce(e,e,r)}_addWireframeVertices(e,t,i,r){let n=new Uint8Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),o=new Uint8Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,(i-t)*Float32Array.BYTES_PER_ELEMENT),l=r*Float32Array.BYTES_PER_ELEMENT,c=0,d=p=>c=ft(o,p,n,c,l);for(let p=0;p<=o.length-4*l;p+=l*2)d(p),d(p+2*l),d(p+1*l),d(p+2*l),d(p+1*l),d(p+3*l)}};function ft(a,e,t,i,r){for(let n=0;n<r;n++)t[i++]=a[e++];return i}function Pe(a,e){return a.isClosed?e.get("position").indices.length>2:!1}function fi(a,e,t,i){return i?a/(2*t)+it*e:(a/2+it)*e}function*hi(a,e,t,i,r){let n=i.get("position").data,o=Pe(t,i)?n.length-2:n.length-5,l=r?.[0]??0,c=r?.[1]??0;le(a,n[0]+l,n[1]+c);for(let d=3;d<o+3;d+=3){let p=d%n.length;le(e,n[p]+l,n[p+1]+c),yield d/3,tt(a,e)}}function os(a){return a.anchor===1&&a.hideOnShortSegments&&a.placement==="begin-end"&&a.worldSpace}function ua(a,e){let t=+!!e;switch(a){case"miter":case"bevel":return t;case"round":return ts+t}}const mi=new $r,R=P(),I=P(),de=J(),Oe=J(),re=P(),gi=P(),Xe=P(),te=P(),G=P(),ht=P(),Le=he(),_e=he(),vi=Ni(),Si=Ni(),xi=P(),yi=P(),bi=P(),mt=Bi(),gt=Bi(),Ke=P(),ye=P(),Fe=[he(),he(),he(),he()],ne=[P(),P(),P(),P()],vt=rt(),St=rt(),xt=rt(),yt=rt(),it=4,$i=[P(),P()],ls=()=>Tt.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function cs(a){return{cachedResult:a.cachedResult,arcade:a.arcade?{func:a.arcade.func,context:a.arcade.modules.arcadeUtils.createExecContext(null,{sr:a.arcade.context.spatialReference}),modules:a.arcade.modules}:null}}async function so(a,e,t,i){let r=a?.expression;if(typeof r!="string")return null;let n=fs(r);if(n!=null)return{cachedResult:n};let o=await _a();Fa(t);let l=o.arcadeUtils,c=l.createSyntaxTree(r);if(!c)return null;if(l.dependsOnView(c))return i?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0};let d=l.createFunction(c);return d?{arcade:{modules:o,func:d,context:l.createExecContext(null,{sr:e})}}:null}function ds(a,e,t){return a.arcadeUtils.arcadeFeature.createFromGraphicLikeObject(a.arcadeUtils.createArcadeGeometryFromDehydratedGeometry(e.geometry),e.attributes,t,null)}function ps(a,e){if(a!=null&&!fa(a)){if(!e||!a.arcade){ls().errorOncePerTick("Arcade support required but not provided");return}a.arcade.modules.arcadeUtils.updateExecContext(a.arcade.context,e)}}function us(a){if(a!=null){if(fa(a))return a.cachedResult;let e=a.arcade,t=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof t!="number"&&(a.cachedResult=0,t=0),t}return 0}function oo(a,e=!1){let t=a?.featureExpressionInfo,i=t?.expression;return!e&&i!=="0"&&(t=null),t??null}const lo={cachedResult:0};function fa(a){return a.cachedResult!=null}function fs(a){return a==="0"?0:null}class ha{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=Ea(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){let i=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext==null?e+i:i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset,i=this.featureExpressionInfoContext;return i!=null&&(t+=us(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=Aa(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,i){e.arcade?(this._featureExpressionInfoContext=cs(e),this.updateFeatureExpressionFeature(t,i)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){let i=this.featureExpressionInfoContext;i?.arcade&&(i.cachedResult=void 0,ps(this._featureExpressionInfoContext,e.geometry?ds(i.arcade.modules,e,t):null))}static fromElevationInfo(e){let t=new ha;return e!=null&&t.setFromElevationInfo(e),t}}function st(a,e){return a.size===e?new hs(a):null}let hs=class{constructor(e){this._attribute=e}get count(){return this._attribute.indices.length}get(e,t=0){let{data:i,indices:r,stride:n}=this._attribute;return i[r[e]*n+t]}getVec(e,t){let{data:i,indices:r,size:n,stride:o}=this._attribute,l=r[e]*o;for(let c=0;c<n;c++)t[c]=i[l+c];return t}};function Di(a,e){return ot(a,e,1,st)}function Pi(a,e){return ot(a,e,2,st)}function Ze(a,e){return ot(a,e,3,st)}function zi(a,e){return ot(a,e,4,st)}function ot(a,e,t,i){if(a.type===1){let{vertex:n}=a.buffers,o=n.layout.fields.get(e);return o==null||o.constructor.ElementCount!==t?null:n.getField(e,o.constructor)}let r=a.attributes.get(e);return r==null?null:i(r,t)}class ms extends Hi{constructor(){super(...arguments),this.primitiveVertexCount=1}computeAttachmentOrigin(e,t,i){return zr(e,t,i)}}class E extends Zi{constructor(e,t){super(),this.spherical=e,this.polygonOffset=0,this.enableOITOffset=!1,this.screenCenterOffsetUnitsEnabled=!1,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.hasFocusAreaStyle=!1,this.hasVertexColor=!0,this.hasVertexSize=!0,this.hasVertexRotation=!0,this.hasVertexUVi=!0,this.hasVertexCenterOffset=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.hasVVInstancing=!1,this.snowCover=!1,this.renderOccluded=!1,this.transparentOccluded=t}}S([x()],E.prototype,"transparentOccluded",void 0),S([x({count:5})],E.prototype,"polygonOffset",void 0),S([x()],E.prototype,"enableOITOffset",void 0),S([x()],E.prototype,"screenCenterOffsetUnitsEnabled",void 0),S([x()],E.prototype,"signedDistanceFieldEnabled",void 0),S([x()],E.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),S([x()],E.prototype,"hasVVSize",void 0),S([x()],E.prototype,"hasVVColor",void 0),S([x()],E.prototype,"hasVerticalOffset",void 0),S([x()],E.prototype,"hasScreenSizePerspective",void 0),S([x()],E.prototype,"hasRotation",void 0),S([x()],E.prototype,"debugDrawLabelBorder",void 0),S([x()],E.prototype,"depthTestEnabled",void 0),S([x()],E.prototype,"pixelSnappingEnabled",void 0),S([x()],E.prototype,"draped",void 0),S([x()],E.prototype,"occludedFragmentFade",void 0),S([x()],E.prototype,"hasOcclusionTexture",void 0),S([x()],E.prototype,"hasFocusAreaStyle",void 0),S([x()],E.prototype,"hasVertexColor",void 0),S([x()],E.prototype,"hasVertexSize",void 0),S([x()],E.prototype,"hasVertexRotation",void 0),S([x()],E.prototype,"hasVertexUVi",void 0),S([x()],E.prototype,"hasVertexCenterOffset",void 0);class po extends ms{constructor(e,t,i=!1){super(e,Ds),this.produces=new Map([[12,r=>ke(r)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[13,r=>ke(r)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[14,r=>ke(r)&&this.parameters.drawAsLabel],[18,r=>this.parameters.draped&&ke(r)]]),this._visible=!0,this._configuration=new E(t,i)}updateConfiguration(e){super.updateConfiguration(e);let{parameters:t,_configuration:i}=this,r=t.draped;i.enableOITOffset=e.enableOITOffset,i.hasSlicePlane=this.parameters.hasSlicePlane,i.hasVerticalOffset=!!this.parameters.verticalOffset,i.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,i.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",i.polygonOffset=this.parameters.polygonOffset,i.draped=r,i.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,i.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,i.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,i.hasRotation=this.parameters.hasRotation,i.hasVVSize=!!this.parameters.vvSize,i.hasVVColor=!!this.parameters.vvColor,i.occludedFragmentFade=!r&&!!this.parameters.occludedFragmentOpacity,i.hasFocusAreaStyle=this.parameters.focusAreaStyle!=null,i.depthTestEnabled=this.parameters.depthEnabled,i.hasVertexColor=this.parameters.hasVertexColor,i.hasVertexSize=this.parameters.hasVertexSize,i.hasVertexRotation=this.parameters.hasVertexRotation,i.hasVertexUVi=this.parameters.hasVertexUVi,i.hasVertexCenterOffset=this.parameters.hasVertexCenterOffset,We(e.output)&&(i.debugDrawLabelBorder=!!Tr.LABELS_SHOW_BORDER),i.hasOcclusionTexture=!t.drawAsLabel&&i.transparentOccluded&&Xa(e.output)}intersectRay(e,t,i,r,n,o){let{options:{selectionMode:l,hud:c,excludeLabels:d},point:p,camera:f}=i,{parameters:h}=this;if(l&&c&&(!d||!h.isLabel)&&e.visible&&p&&f){for(let{renderScreenPosition:v,screenSize:m,pixelRatioTolerance:g,halfOutlineSize:b,rotationAngle:u,anchor:$,centerView:C}of this._forEachScreenSpaceHUDInstance(_i,e,t,f))if(Ci(p,v[0],v[1],m,g,b,u,h,$)){let T=i.ray;if(Qe[0]=p[0],Qe[1]=p[1],Qe[2]=v[2],f.unprojectFromRenderScreen(Qe,W)){let z=P();q(z,T.direction);let w=1/ve(z);oe(z,z,w);let A=ge(T.origin,W)*w,O=P();ce(O,C,f.inverseViewMatrix),o(A,A,z,-1,O)}}}}*_forEachScreenSpaceHUDInstance(e,t,i,r){let{parameters:n}=this,o=Ze(t,"position"),l=Pi(t,"size"),c=Ze(t,"normal"),d=Di(t,"rotation"),p=Ze(t,"centerOffset"),f=zi(t,"featureAttribute"),h=n.size,v=zt(Oi,i),m=n.centerOffsetUnits==="screen";for(let g=0;g<o.count;g++){let{scaleX:b,scaleY:u}=Ai(f?.getVec(g,Li)??null,n,r.pixelRatio);if(o.getVec(g,W),ce(W,W,i),ce(W,W,r.viewMatrix),p?p.getVec(g,B):X(B,0,0,0),!m&&(W[0]+=B[0],W[1]+=B[1],B[2]!==0)){let z=B[2];Ne(B,W),fe(W,W,oe(B,B,z))}c.getVec(g,pe),et(pe,pe,v);let{normal:$,cosAngle:C}=Ti(pe,r,Ei),T=Vi(n,W,C,r,bt);if(ae(W,W,$,T),r.applyProjection(W,k),k[0]>-1){m&&(B[0]||B[1])&&(k[0]+=B[0]*r.pixelRatio,B[1]!==0&&(k[1]+=bt.alignmentEvaluator.apply(B[1])*r.pixelRatio),r.unapplyProjection(k,W)),k[0]+=n.screenOffset[0]*r.pixelRatio,k[1]+=n.screenOffset[1]*r.pixelRatio,k[0]=Math.floor(k[0]),k[1]=Math.floor(k[1]),N[0]=h[0],N[1]=h[1],l!=null&&(N[0]*=l.get(g,0),N[1]*=l.get(g,1)),bt.evaluator.applyVec2(N,N);let z=0;n.textureIsSignedDistanceField&&(z=Math.min(n.outlineSize,.5*N[0])*r.pixelRatio/2),N[0]*=b,N[1]*=u,q(e.centerView,W),X(e.renderScreenPosition,k[0],k[1],k[2]),tt(e.screenSize,N),e.pixelRatioTolerance=ys*r.pixelRatio,e.halfOutlineSize=z,e.rotationAngle=n.rotation+(d?.get(g)??0),e.anchor=ri(n),yield e}}}*_forEachDrapedHUDInstance(e,t,i){let r=Ze(t,"position"),n=Pi(t,"size"),o=Di(t,"rotation"),l=zi(t,"featureAttribute"),c=this.parameters,d=c.size;e.pixelRatioTolerance=bs*i,e.anchor=ri(c);for(let p=0;p<r.count;p++){let{scaleX:f,scaleY:h}=Ai(l?.getVec(p,Li)??null,c,i);e.x=r.get(p,0),e.y=r.get(p,1),N[0]=d[0],N[1]=d[1],n!=null&&(N[0]*=n.get(p,0),N[1]*=n.get(p,1)),e.halfOutlineSize=0,c.textureIsSignedDistanceField&&(e.halfOutlineSize=Math.min(c.outlineSize,.5*N[0])*i/2),N[0]*=f,N[1]*=h,tt(e.screenSize,N),e.rotationAngle=c.rotation+(o?.get(p)??0),yield e}}intersectRayDraped(e,t,i,r,n,o){let l=this.parameters;for(let{x:c,y:d,screenSize:p,pixelRatioTolerance:f,halfOutlineSize:h,rotationAngle:v,anchor:m}of this._forEachDrapedHUDInstance(Fi,e,o))Ci(i,c,d,p,f,h,v,l,m)&&r(n.distance,n.renderDistance,n.normal,-1)}intersectScreenPolygonDraped(e,t,i,r,n){if(!i.options.selectionMode||i.options.excludeLabels&&this.parameters.isLabel)return null;let o=this.parameters;for(let{x:l,y:c,screenSize:d,pixelRatioTolerance:p,halfOutlineSize:f,rotationAngle:h,anchor:v}of this._forEachDrapedHUDInstance(Fi,e,n))if(wi(r,l+t[0],c+t[1],d,p,f,h,o,v,!1))return new Qi(-1);return null}intersectScreenPolygon(e,t,i,r){let{options:{selectionMode:n,hud:o,excludeLabels:l},camera:c}=i,{parameters:d}=this;if(!n||!o||l&&d.isLabel||!e.visible||t==null)return null;let p=new _t(1),f=1/c.pixelRatio;for(let{renderScreenPosition:h,screenSize:v,pixelRatioTolerance:m,halfOutlineSize:g,rotationAngle:b,anchor:u,centerView:$}of this._forEachScreenSpaceHUDInstance(_i,e,t,c)){let C=ce(W,$,c.inverseViewMatrix);if(!i.screenPolygonPrimitiveProcessor?.validatePoint(C))continue;let T=h[0]*f,z=(c.fullHeight-h[1])*f;if(Pt[0]=v[0]*f,Pt[1]=v[1]*f,wi(r,T,z,Pt,m*f,g*f,b,d,u,!0)){let w=ge(c.eye,C);p.updateIfCloserFromValues(w,-1,C,null)}}return p.valid?p:null}createBufferWriter(){return new Ps(this.parameters)}createPrimitivePositionReader(e,t){se(t!=null,"HUD geometry requires instancing");let i=e.vertex.getField("position",Ji);return r=>i.getVec(0,r)}applyShaderOffsets(e,t,i,r,n,o,l,c){et($t,i,zt(Oi,r));let d=Ti($t,l,Ei),p=zs(ve(t),l),f=Vi(this.parameters,t,d.cosAngle,l,c);ae(t,t,d.normal,f+p),ae(e,e,$t,f+p);let h=o+f;this._applyPolygonOffsetView(t,d,h,l,t),this._applyCenterOffsetView(t,n,t)}applyShaderOffsetsNDC(e,t,i,r,n,o){return this._applyCenterOffsetNDC(e,t,r,n),o!=null&&q(o,n),this._applyPolygonOffsetNDC(n,i,r,n),n}_applyPolygonOffsetView(e,t,i,r,n){let o=r.aboveGround?1:-1,l=Math.sign(i);l===0&&(l=o);let c=o*l;if(this.parameters.shaderPolygonOffset<=0)return q(n,e);let d=Ct(Math.abs(t.cosAngle),.01,1),p=1-Math.sqrt(1-d*d)/d/r.viewport[2];return c>0?oe(n,e,p):oe(n,e,1/p),n}_applyCenterOffsetView(e,t,i){let r=this.parameters.centerOffsetUnits!=="screen";return i!==e&&q(i,e),r&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(Ne(pe,i),Va(i,i,oe(pe,pe,t[2])))),i}_applyCenterOffsetNDC(e,t,i,r){let n=this.parameters.centerOffsetUnits!=="screen";return r!==e&&q(r,e),n||(r[0]+=t[0]/i.fullWidth*2,r[1]+=t[1]/i.fullHeight*2),r}_applyPolygonOffsetNDC(e,t,i,r){let n=this.parameters.shaderPolygonOffset;if(e!==r&&q(r,e),n){let o=i.aboveGround?1:-1,l=o*Math.sign(t);r[2]-=(l||o)*n}return r}set visible(e){this._visible=e}get visible(){let{color:e,outlineSize:t,outlineColor:i}=this.parameters,r=e[3]>=Me||t>=Me&&i[3]>=Me;return this._visible&&r}createGLMaterial(e){return new gs(e)}calculateRelativeScreenBounds(e,t,i=Ui()){return vs(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class gs extends Gr{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(en,e)}}function vs(a,e,t,i){i[0]=a.anchorPosition[0]*-e[0]+a.screenOffset[0]*t,i[1]=a.anchorPosition[1]*-e[1]+a.screenOffset[1]*t}function Ti(a,e,t){return ce(t.normal,a,e.viewInverseTransposeMatrix),t.cosAngle=Y(t.normal,$s),t}function Ci(a,e,t,i,r,n,o,l,c){let d=ma(e,t,i,r,n,l,c,ga);return le(ue,e,t),Re(Ee,a,ue,ki(o)),Ee[0]>d[0]&&Ee[0]<d[2]&&Ee[1]>d[1]&&Ee[1]<d[3]}function wi(a,e,t,i,r,n,o,l,c,d){let p=ma(e,t,i,r,n,l,c,ga,d);if(le(be,p[0],p[1]),le(Ae,p[2],p[1]),le($e,p[2],p[3]),le(Ve,p[0],p[3]),o!==0){let f=ki(o);le(ue,e,t),Re(be,be,ue,f),Re(Ae,Ae,ue,f),Re($e,$e,ue,f),Re(Ve,Ve,ue,f),Ia(p),Ue(p,be),Ue(p,Ae),Ue(p,$e),Ue(p,Ve)}return Lr(a,p)?ei(a,be,Ae,$e)||ei(a,be,$e,Ve):!1}function ma(a,e,t,i,r,n,o,l,c=!1){let d=a-i-t[0]*o[0],p=d+t[0]+2*i,f=c?1-o[1]:o[1],h=e-i-t[1]*f,v=h+t[1]+2*i,m=n.distanceFieldBoundingBox;return n.textureIsSignedDistanceField&&m!=null&&(d+=t[0]*m[0],h+=t[1]*(c?1-m[3]:m[1]),p-=t[0]*(1-m[2]),v-=t[1]*(c?m[1]:1-m[3]),d-=r,p+=r,h-=r,v+=r),l[0]=d,l[1]=h,l[2]=p,l[3]=v,l}const bt=new Cr,W=P(),pe=P(),k=at(),Qe=he(),$t=P(),Ee=J(),ue=J(),Oi=Ii(),B=P(),Dt=P(),Li=at(),ga=Ui(),be=J(),Ae=J(),$e=J(),Ve=J(),Pt=J();class Ss{constructor(){this.renderScreenPosition=P(),this.screenSize=J(),this.centerView=P(),this.pixelRatioTolerance=0,this.halfOutlineSize=0,this.rotationAngle=0,this.anchor=J()}}class xs{constructor(){this.x=0,this.y=0,this.screenSize=J(),this.pixelRatioTolerance=0,this.halfOutlineSize=0,this.rotationAngle=0,this.anchor=J()}}const _i=new Ss,Fi=new xs,Ei={normal:P(),cosAngle:0},ys=1,bs=2,N=ji(0,0),$s=Wa(0,0,1);class Ds extends Hr{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=wt,this.size=Ra,this.polygonOffset=0,this.anchorPosition=ji(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=wt,this.outlineSize=0,this.distanceFieldBoundingBox=at(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.hasVertexColor=!1,this.hasVertexSize=!1,this.hasVertexRotation=!1,this.hasVertexUVi=!1,this.hasVertexCenterOffset=!1,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.focusAreaStyle=null,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Ps{constructor(e){this.baseInstanceLayout=Kr,this.layout=Zr(e)}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,t,i,r){if(r==null)return;let{buffer:n,offset:o}=r,{position:l,normal:c,color:d,size:p,rotation:f,centerOffset:h,groundDistance:v,featureAttribute:m,uvi:g,olidColor:b}=n;_r(i.get("position"),e,l,o),Fr(i.get("normal"),t,c,o);let u=i.get("position").indices.length;if(g){let $=i.get("uvi")?.data;if($&&$.length>=4){let[C,T,z,w]=$;for(let A=0;A<u;++A){let O=o+A;g.setValues(O,C,T,z,w)}}}if(d&&Ft(i.get("color"),4,d,o),p&&ti(i.get("size"),p,o),f&&ii(i.get("rotation"),f,o),h&&(i.get("centerOffset")?Er(i.get("centerOffset"),h,o):Je(h,o,u)),i.get("groundDistance")?ii(i.get("groundDistance"),v,o):Je(v,o,u),m&&(i.get("featureAttribute")?Ar(i.get("featureAttribute"),m,o):Je(m,o,u)),b!=null){let $=i.get("olidColor");$==null?Je(b,o,u):Ft($,4,b,o)}}writeBaseInstance(e,t){let{uv0:i}=t;ti(e.get("uv0"),i,0)}rebaseBuffers(e,t){if(t==null)return;let{buffer:i,offset:r}=t;i.copyFrom(e.vertex,0,r)}}function Ai(a,e,t){return a==null||e.vvSize==null?{scaleX:t,scaleY:t}:(wr(Dt,e,a),{scaleX:Dt[0]*t,scaleY:Dt[1]*t})}function zs(a,e){let t=e.computeRenderPixelSizeAtDistance(a)*Qr;return(e.aboveGround?1:-1)*t}function Vi(a,e,t,i,r){if(!a.verticalOffset?.screenLength){let c=ve(e);return r.update(t,c,a.screenSizePerspective,a.screenSizePerspectiveMinPixelReferenceSize,a.screenSizePerspectiveAlignment,null),0}let n=ve(e),o=a.screenSizePerspectiveAlignment??a.screenSizePerspective,l=Or(i,n,a.verticalOffset,t,o,a.screenSizePerspectiveMinPixelReferenceSize);return r.update(t,n,a.screenSizePerspective,a.screenSizePerspectiveMinPixelReferenceSize,a.screenSizePerspectiveAlignment,null),l}export{po as A,is as D,ts as E,so as a,cn as b,ks as c,lo as d,eo as e,On as f,yn as g,Hs as h,Gs as i,xn as j,io as k,Ys as l,Kn as m,Yn as n,ha as o,mn as p,U as r,sa as t,oo as u};
