import{B as U,A as J,P as V,r as S,bg as z,bh as X,bi as Y,h as B,m as G,M as $,ap as Z,f as k}from"./pfen37nC.js";function j(e){return X()?(Y(e),!0):!1}function O(e){return typeof e=="function"?e():U(e)}const W=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ee=Object.prototype.toString,te=e=>ee.call(e)==="[object Object]",ne=()=>{};function re(e,n){function t(...o){return new Promise((i,a)=>{Promise.resolve(e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(i).catch(a)})}return t}const R=e=>e();function ie(e=R){const n=S(!0);function t(){n.value=!1}function o(){n.value=!0}const i=(...a)=>{n.value&&e(...a)};return{isActive:z(n),pause:t,resume:o,eventFilter:i}}function ae(e){let n;function t(){return n||(n=e()),n}return t.reset=async()=>{const o=n;n=void 0,o&&await o},t}function oe(e,n){var t;if(typeof e=="number")return e+n;const o=((t=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",i=e.slice(o.length),a=Number.parseFloat(o)+n;return Number.isNaN(a)?e:a+i}function ue(e){return G()}function se(e,n,t={}){const{eventFilter:o=R,...i}=t;return B(e,re(o,n),i)}function le(e,n,t={}){const{eventFilter:o,...i}=t,{eventFilter:a,pause:l,resume:c,isActive:p}=ie(o);return{stop:se(e,n,{...i,eventFilter:a}),pause:l,resume:c,isActive:p}}function ce(e,n=!0,t){ue()?J(e,t):n?e():V(e)}function fe(e,n,t={}){const{immediate:o=!0}=t,i=S(!1);let a=null;function l(){a&&(clearTimeout(a),a=null)}function c(){i.value=!1,l()}function p(...f){l(),i.value=!0,a=setTimeout(()=>{i.value=!1,a=null,e(...f)},O(n))}return o&&(i.value=!0,W&&p()),j(c),{isPending:z(i),start:p,stop:c}}function de(e){var n;const t=O(e);return(n=t==null?void 0:t.$el)!=null?n:t}const N=W?window:void 0,H=W?window.navigator:void 0;function F(...e){let n,t,o,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,o,i]=e,n=N):[n,t,o,i]=e,!n)return ne;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const a=[],l=()=>{a.forEach(r=>r()),a.length=0},c=(r,u,m,w)=>(r.addEventListener(u,m,w),()=>r.removeEventListener(u,m,w)),p=B(()=>[de(n),O(i)],([r,u])=>{if(l(),!r)return;const m=te(u)?{...u}:u;a.push(...t.flatMap(w=>o.map(E=>c(r,w,E,m))))},{immediate:!0,flush:"post"}),f=()=>{p(),l()};return j(f),f}function pe(){const e=S(!1),n=G();return n&&J(()=>{e.value=!0},n),e}function L(e){const n=pe();return $(()=>(n.value,!!e()))}function M(e,n={}){const{window:t=N}=n,o=L(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let i;const a=S(!1),l=f=>{a.value=f.matches},c=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",l):i.removeListener(l))},p=k(()=>{o.value&&(c(),i=t.matchMedia(O(e)),"addEventListener"in i?i.addEventListener("change",l):i.addListener(l),a.value=i.matches)});return j(()=>{p(),c(),i=void 0}),a}const be={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function Se(e,n={}){function t(r,u){let m=O(e[O(r)]);return u!=null&&(m=oe(m,u)),typeof m=="number"&&(m=`${m}px`),m}const{window:o=N,strategy:i="min-width"}=n;function a(r){return o?o.matchMedia(r).matches:!1}const l=r=>M(()=>`(min-width: ${t(r)})`,n),c=r=>M(()=>`(max-width: ${t(r)})`,n),p=Object.keys(e).reduce((r,u)=>(Object.defineProperty(r,u,{get:()=>i==="min-width"?l(u):c(u),enumerable:!0,configurable:!0}),r),{});function f(){const r=Object.keys(e).map(u=>[u,l(u)]);return $(()=>r.filter(([,u])=>u.value).map(([u])=>u))}return Object.assign(p,{greaterOrEqual:l,smallerOrEqual:c,greater(r){return M(()=>`(min-width: ${t(r,.1)})`,n)},smaller(r){return M(()=>`(max-width: ${t(r,-.1)})`,n)},between(r,u){return M(()=>`(min-width: ${t(r)}) and (max-width: ${t(u,-.1)})`,n)},isGreater(r){return a(`(min-width: ${t(r,.1)})`)},isGreaterOrEqual(r){return a(`(min-width: ${t(r)})`)},isSmaller(r){return a(`(max-width: ${t(r,-.1)})`)},isSmallerOrEqual(r){return a(`(max-width: ${t(r)})`)},isInBetween(r,u){return a(`(min-width: ${t(r)}) and (max-width: ${t(u,-.1)})`)},current:f,active(){const r=f();return $(()=>r.value.length===0?"":r.value.at(-1))}})}function q(e,n={}){const{controls:t=!1,navigator:o=H}=n,i=L(()=>o&&"permissions"in o);let a;const l=typeof e=="string"?{name:e}:e,c=S(),p=()=>{a&&(c.value=a.state)},f=ae(async()=>{if(i.value){if(!a)try{a=await o.permissions.query(l),F(a,"change",p),p()}catch{c.value="prompt"}return a}});return f(),t?{state:c,isSupported:i,query:f}:c}function Oe(e={}){const{navigator:n=H,read:t=!1,source:o,copiedDuring:i=1500,legacy:a=!1}=e,l=L(()=>n&&"clipboard"in n),c=q("clipboard-read"),p=q("clipboard-write"),f=$(()=>l.value||a),r=S(""),u=S(!1),m=fe(()=>u.value=!1,i);function w(){l.value&&A(c.value)?n.clipboard.readText().then(d=>{r.value=d}):r.value=g()}f.value&&t&&F(["copy","cut"],w);async function E(d=O(o)){f.value&&d!=null&&(l.value&&A(p.value)?await n.clipboard.writeText(d):y(d),r.value=d,u.value=!0,m.start())}function y(d){const h=document.createElement("textarea");h.value=d??"",h.style.position="absolute",h.style.opacity="0",document.body.appendChild(h),h.select(),document.execCommand("copy"),h.remove()}function g(){var d,h,x;return(x=(h=(d=document==null?void 0:document.getSelection)==null?void 0:d.call(document))==null?void 0:h.toString())!=null?x:""}function A(d){return d==="granted"||d==="prompt"}return{isSupported:f,text:r,copied:u,copy:E}}const C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__",me=ve();function ve(){return T in C||(C[T]=C[T]||{}),C[T]}function he(e,n){return me[e]||n}function we(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ye={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},D="vueuse-storage";function Ee(e,n,t,o={}){var i;const{flush:a="pre",deep:l=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:f=!1,shallow:r,window:u=N,eventFilter:m,onError:w=s=>{console.error(s)},initOnMounted:E}=o,y=(r?Z:S)(typeof n=="function"?n():n);if(!t)try{t=he("getDefaultStorage",()=>{var s;return(s=N)==null?void 0:s.localStorage})()}catch(s){w(s)}if(!t)return y;const g=O(n),A=we(g),d=(i=o.serializer)!=null?i:ye[A],{pause:h,resume:x}=le(y,()=>I(y.value),{flush:a,deep:l,eventFilter:m});u&&c&&ce(()=>{F(u,"storage",_),F(u,D,K),E&&_()}),E||_();function P(s,v){u&&u.dispatchEvent(new CustomEvent(D,{detail:{key:e,oldValue:s,newValue:v,storageArea:t}}))}function I(s){try{const v=t.getItem(e);if(s==null)P(v,null),t.removeItem(e);else{const b=d.write(s);v!==b&&(t.setItem(e,b),P(v,b))}}catch(v){w(v)}}function Q(s){const v=s?s.newValue:t.getItem(e);if(v==null)return p&&g!=null&&t.setItem(e,d.write(g)),g;if(!s&&f){const b=d.read(v);return typeof f=="function"?f(b,g):A==="object"&&!Array.isArray(b)?{...g,...b}:b}else return typeof v!="string"?v:d.read(v)}function _(s){if(!(s&&s.storageArea!==t)){if(s&&s.key==null){y.value=g;return}if(!(s&&s.key!==e)){h();try{(s==null?void 0:s.newValue)!==d.write(y.value)&&(y.value=Q(s))}catch(v){w(v)}finally{s?V(x):x()}}}}function K(s){_(s.detail)}return y}export{Ee as a,Se as b,be as c,Oe as u};