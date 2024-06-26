import{q as R,O as T,M as u,r as G,h as V,aa as Q,_ as h,ac as U,b as y,F as Z,Q as q,U as L,K as D,a0 as H,C as k}from"./BZm4Dmb7.js";import{n as J}from"./Mv12tTv_.js";import{h as W,C as A}from"./BkMdQPF4.js";const X={small:8,middle:16,large:24},Y=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:L.oneOf(D("horizontal","vertical")).def("horizontal"),align:L.oneOf(D("start","end","center","baseline")),wrap:H()});function ee(e){return typeof e=="string"?X[e]:e||0}const $=R({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:Y(),slots:Object,setup(e,s){let{slots:a,attrs:n}=s;const{prefixCls:l,space:r,direction:w}=T("space",e),[x,m]=W(l),d=J(),i=u(()=>{var t,o,c;return(c=(t=e.size)!==null&&t!==void 0?t:(o=r==null?void 0:r.value)===null||o===void 0?void 0:o.size)!==null&&c!==void 0?c:"small"}),b=G(),v=G();V(i,()=>{[b.value,v.value]=(Array.isArray(i.value)?i.value:[i.value,i.value]).map(t=>ee(t))},{immediate:!0});const _=u(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),E=u(()=>Q(l.value,m.value,`${l.value}-${e.direction}`,{[`${l.value}-rtl`]:w.value==="rtl",[`${l.value}-align-${_.value}`]:_.value})),K=u(()=>w.value==="rtl"?"marginLeft":"marginRight"),M=u(()=>{const t={};return d.value&&(t.columnGap=`${b.value}px`,t.rowGap=`${v.value}px`),h(h({},t),e.wrap&&{flexWrap:"wrap",marginBottom:`${-v.value}px`})});return()=>{var t,o;const{wrap:c,direction:P="horizontal"}=e,I=(t=a.default)===null||t===void 0?void 0:t.call(a),N=U(I),O=N.length;if(O===0)return null;const p=(o=a.split)===null||o===void 0?void 0:o.call(a),j=`${l.value}-item`,B=b.value,C=O-1;return y("div",q(q({},n),{},{class:[E.value,n.class],style:[M.value,n.style]}),[N.map((F,f)=>{let z=I.indexOf(F);z===-1&&(z=`$$space-${f}`);let g={};return d.value||(P==="vertical"?f<C&&(g={marginBottom:`${B/(p?2:1)}px`}):g=h(h({},f<C&&{[K.value]:`${B/(p?2:1)}px`}),c&&{paddingBottom:`${v.value}px`})),x(y(Z,{key:z},[y("div",{class:j,style:g},[F]),f<C&&p&&y("span",{class:`${j}-split`,style:g},[p])]))})])}}});$.Compact=A;$.install=function(e){return e.component($.name,$),e.component(A.name,A),e};/**
 * @license lucide-vue-next v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=({size:e,strokeWidth:s=2,absoluteStrokeWidth:a,color:n,iconNode:l,name:r,class:w,...x},{slots:m})=>k("svg",{...S,width:e||S.width,height:e||S.height,stroke:n||S.stroke,"stroke-width":a?Number(s)*24/Number(e):s,class:["lucide",`lucide-${te(r??"icon")}`],...x},[...l.map(d=>k(...d)),...m.default?[m.default()]:[]]);/**
 * @license lucide-vue-next v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(e,s)=>(a,{slots:n})=>k(ae,{...a,iconNode:s,name:e},n);/**
 * @license lucide-vue-next v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=le("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);export{$ as S,re as a,le as c};
