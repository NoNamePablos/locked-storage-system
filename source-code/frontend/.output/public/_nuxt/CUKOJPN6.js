import{q as E,r as f,h as L,_ as c,T as V,b as h,I,U as T}from"./DutA6s4s.js";import{i as U}from"./o1aMqsoj.js";const R=e=>({color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}});var W=function(e,l){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)l.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};const F={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:T.any,required:Boolean},z=E({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:U(F,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup(e,l){let{attrs:a,emit:n,expose:o}=l;const i=f(e.checked===void 0?e.defaultChecked:e.checked),s=f();L(()=>e.checked,()=>{i.value=e.checked}),o({focus(){var t;(t=s.value)===null||t===void 0||t.focus()},blur(){var t;(t=s.value)===null||t===void 0||t.blur()}});const d=f(),y=t=>{if(e.disabled)return;e.checked===void 0&&(i.value=t.target.checked),t.shiftKey=d.value;const u={target:c(c({},e),{checked:t.target.checked}),stopPropagation(){t.stopPropagation()},preventDefault(){t.preventDefault()},nativeEvent:t};e.checked!==void 0&&(s.value.checked=!!e.checked),n("change",u),d.value=!1},k=t=>{n("click",t),d.value=t.shiftKey};return()=>{const{prefixCls:t,name:u,id:m,type:g,disabled:v,readonly:x,tabindex:C,autofocus:O,value:S,required:P}=e,_=W(e,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),{class:j,onFocus:B,onBlur:w,onKeydown:D,onKeypress:K,onKeyup:N}=a,b=c(c({},_),a),$=Object.keys(b).reduce((p,r)=>((r.startsWith("data-")||r.startsWith("aria-")||r==="role")&&(p[r]=b[r]),p),{}),q=V(t,j,{[`${t}-checked`]:i.value,[`${t}-disabled`]:v}),A=c(c({name:u,id:m,type:g,readonly:x,disabled:v,tabindex:C,class:`${t}-input`,checked:!!i.value,autofocus:O,value:S},$),{onChange:y,onClick:k,onFocus:B,onBlur:w,onKeydown:D,onKeypress:K,onKeyup:N,required:P});return h("span",{class:q},[h("input",I({ref:s},A),null),h("span",{class:`${t}-inner`},null)])}}});export{z as V,R as o};
