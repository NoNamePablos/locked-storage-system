import{_ as xe}from"./BUCb-0ds.js";import{E as Ce,G as ze,_ as w,H as $e,aR as Le,aS as Pe,q as re,ap as H,O as me,M as W,h as ie,P as Z,A as fe,S as ge,b as l,Q as E,U as Ae,f as we,aT as Me,aC as oe,u as ke,s as Re,bk as ce,r as I,C as P,bl as Ee,o as u,x,w as i,a as v,B as A,ag as V,c as k,t as D,D as K,aj as ee,F,X as je,am as Be,ao as Ne}from"./72Tm0drb.js";import{L as He}from"./D2BYbjjB.js";import{R as G,U as te}from"./Cx0N-aWa.js";import{R as De,L as Fe}from"./CLfbelQC.js";import{M as Ge}from"./bHe5Oq27.js";import{F as Te,c as Ue,_ as Ie,B as Ve}from"./BWi5ilZV.js";import{_ as We,d as Xe,M as Ye}from"./Dwf_r1_0.js";import{_ as qe,a as Qe,L as Je}from"./CLlITAd1.js";import{u as Ze}from"./ChNMEtIB.js";import{R as Ke}from"./BMA6RC22.js";import{e as et}from"./iM1eDZJI.js";import{_ as ve}from"./BlYSN2JU.js";import{U as tt}from"./Ch03BSLY.js";import"./DlAUqK2U.js";import"./_vq8pnsq.js";import"./DxrL16iQ.js";import"./DGYNie3Z.js";const nt=e=>{const{antCls:n,componentCls:t,iconCls:r,avatarBg:o,avatarColor:S,containerSize:d,containerSizeLG:_,containerSizeSM:C,textFontSize:y,textFontSizeLG:h,textFontSizeSM:M,borderRadius:L,borderRadiusLG:c,borderRadiusSM:p,lineWidth:O,lineType:b}=e,g=(m,s,f)=>({width:m,height:m,lineHeight:`${m-O*2}px`,borderRadius:"50%",[`&${t}-square`]:{borderRadius:f},[`${t}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${t}-icon`]:{fontSize:s,[`> ${r}`]:{margin:0}}});return{[t]:w(w(w(w({},$e(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:S,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${O}px ${b} transparent`,"&-image":{background:"transparent"},[`${n}-image-img`]:{display:"block"}}),g(d,y,L)),{"&-lg":w({},g(_,h,c)),"&-sm":w({},g(C,M,p)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},rt=e=>{const{componentCls:n,groupBorderColor:t,groupOverlapping:r,groupSpace:o}=e;return{[`${n}-group`]:{display:"inline-flex",[`${n}`]:{borderColor:t},"> *:not(:first-child)":{marginInlineStart:r}},[`${n}-group-popover`]:{[`${n} + ${n}`]:{marginInlineStart:o}}}},_e=Ce("Avatar",e=>{const{colorTextLightSolid:n,colorTextPlaceholder:t}=e,r=ze(e,{avatarBg:t,avatarColor:n});return[nt(r),rt(r)]},e=>{const{controlHeight:n,controlHeightLG:t,controlHeightSM:r,fontSize:o,fontSizeLG:S,fontSizeXL:d,fontSizeHeading3:_,marginXS:C,marginXXS:y,colorBorderBg:h}=e;return{containerSize:n,containerSizeLG:t,containerSizeSM:r,textFontSize:Math.round((S+d)/2),textFontSizeLG:_,textFontSizeSM:o,groupSpace:y,groupOverlapping:-C,groupBorderColor:h}}),he=Symbol("AvatarContextKey"),ot=()=>Le(he,{}),at=e=>Pe(he,e),lt=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:Ae.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),j=re({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:lt(),slots:Object,setup(e,n){let{slots:t,attrs:r}=n;const o=H(!0),S=H(!1),d=H(1),_=H(null),C=H(null),{prefixCls:y}=me("avatar",e),[h,M]=_e(y),L=ot(),c=W(()=>e.size==="default"?L.size:e.size),p=Ze(),O=et(()=>{if(typeof e.size!="object")return;const s=Te.find($=>p.value[$]);return e.size[s]}),b=s=>O.value?{width:`${O.value}px`,height:`${O.value}px`,lineHeight:`${O.value}px`,fontSize:`${s?O.value/2:18}px`}:{},g=()=>{if(!_.value||!C.value)return;const s=_.value.offsetWidth,f=C.value.offsetWidth;if(s!==0&&f!==0){const{gap:$=4}=e;$*2<f&&(d.value=f-$*2<s?(f-$*2)/s:1)}},m=()=>{const{loadError:s}=e;(s==null?void 0:s())!==!1&&(o.value=!1)};return ie(()=>e.src,()=>{Z(()=>{o.value=!0,d.value=1})}),ie(()=>e.gap,()=>{Z(()=>{g()})}),fe(()=>{Z(()=>{g(),S.value=!0})}),()=>{var s,f;const{shape:$,src:B,alt:T,srcset:Y,draggable:q,crossOrigin:Q}=e,U=(s=L.shape)!==null&&s!==void 0?s:$,a=ge(t,e,"icon"),z=y.value,be={[`${r.class}`]:!!r.class,[z]:!0,[`${z}-lg`]:c.value==="large",[`${z}-sm`]:c.value==="small",[`${z}-${U}`]:!0,[`${z}-image`]:B&&o.value,[`${z}-icon`]:a,[M.value]:!0},Se=typeof c.value=="number"?{width:`${c.value}px`,height:`${c.value}px`,lineHeight:`${c.value}px`,fontSize:a?`${c.value/2}px`:"18px"}:{},se=(f=t.default)===null||f===void 0?void 0:f.call(t);let N;if(B&&o.value)N=l("img",{draggable:q,src:B,srcset:Y,onError:m,alt:T,crossorigin:Q},null);else if(a)N=a;else if(S.value||d.value!==1){const J=`scale(${d.value}) translateX(-50%)`,ye={msTransform:J,WebkitTransform:J,transform:J},Oe=typeof c.value=="number"?{lineHeight:`${c.value}px`}:{};N=l(Ke,{onResize:g},{default:()=>[l("span",{class:`${z}-string`,ref:_,style:w(w({},Oe),ye)},[se])]})}else N=l("span",{class:`${z}-string`,ref:_,style:{opacity:0}},[se]);return h(l("span",E(E({},r),{},{ref:C,class:be,style:[Se,b(!!a),r.style]}),[N]))}}}),st=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),ne=re({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:st(),setup(e,n){let{slots:t,attrs:r}=n;const{prefixCls:o,direction:S}=me("avatar",e),d=W(()=>`${o.value}-group`),[_,C]=_e(o);return we(()=>{const y={size:e.size,shape:e.shape};at(y)}),()=>{const{maxPopoverPlacement:y="top",maxCount:h,maxStyle:M,maxPopoverTrigger:L="hover",shape:c}=e,p={[d.value]:!0,[`${d.value}-rtl`]:S.value==="rtl",[`${r.class}`]:!!r.class,[C.value]:!0},O=ge(t,e),b=Me(O).map((m,s)=>Ue(m,{key:`avatar-key-${s}`})),g=b.length;if(h&&h<g){const m=b.slice(0,h),s=b.slice(h,g);return m.push(l(ve,{key:"avatar-popover-key",content:s,trigger:L,placement:y,overlayClassName:`${d.value}-popover`},{default:()=>[l(j,{style:M,shape:c},{default:()=>[`+${g-h}`]})]})),_(l("div",E(E({},r),{},{class:p,style:r.style}),[m]))}return _(l("div",E(E({},r),{},{class:p,style:r.style}),[b]))}}});j.Group=ne;j.install=function(e){return e.component(j.name,j),e.component(ne.name,ne),e};var it={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"database",theme:"outlined"};function ue(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.forEach(function(o){ct(e,o,t[o])})}return e}function ct(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var X=function(n,t){var r=ue({},n,t.attrs);return l(oe,ue({},r,{icon:it}),null)};X.displayName="DatabaseOutlined";X.inheritAttrs=!1;var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}}]},name:"experiment",theme:"outlined"};function de(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.forEach(function(o){dt(e,o,t[o])})}return e}function dt(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ae=function(n,t){var r=de({},n,t.attrs);return l(oe,de({},r,{icon:ut}),null)};ae.displayName="ExperimentOutlined";ae.inheritAttrs=!1;var pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"}}]},name:"login",theme:"outlined"};function pe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.forEach(function(o){mt(e,o,t[o])})}return e}function mt(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var le=function(n,t){var r=pe({},n,t.attrs);return l(oe,pe({},r,{icon:pt}),null)};le.displayName="LoginOutlined";le.inheritAttrs=!1;var R=(e=>(e.ALL="all",e.COMPANY="company",e.USER="user",e))(R||{});const ft={class:"h-[48px] p-2 flex justify-between"},gt={class:"pt-4 border-solid border-transparent border-t-gray-200 border-0 border-t-[1px] h-full border-r-[1px] border-r-gray-200"},vt={key:0},_t={class:"h-[48px] flex bg-white px-8"},ht={class:"flex gap-8 items-center ml-auto"},bt=v("span",null,"Выход",-1),St={class:"flex items-center gap-2 hover:bg-gray-200 px-2 py-1 rounded-lg"},yt={class:"transition-all"},Ot={class:"bg-white h-full border-solid border-transparent border-t-gray-200 border-0 border-t-[1px]"},Gt=re({__name:"PlatformLayout",setup(e){const n=ke(),t=Re(),{user:r}=ce(t),o=I(!1),S=I(!1),d=I({to:G.WORKSPACE_COMPANY,title:"Компания",permission:R.ALL,icon:P(X),subMenu:[{id:1,to:G.COMPANY_CLUSTER,title:"Пространство компании",permission:R.ALL,icon:P(te)},{id:2,to:G.COMPANY_ROLES,title:"Роли",permission:R.ALL,icon:P(te),isOwner:!0},{id:3,to:G.WORKSPACE_COMPANY,title:"Пользователи",permission:R.ALL,icon:P(X),isOwner:!0}]}),_=W(()=>d.value.subMenu.filter(c=>c.isOwner)),C=I([{id:12,to:G.RECORDS,title:"Мое пространство",permission:R.ALL,icon:P(ae)}]),y=()=>{Ge.confirm({title:"Вы точно хотите выйти?",icon:P(Ne),onOk(){t.logout(),n.push("/login")},onCancel(){}})},h=Ee(),{isMobile:M}=ce(h);fe(()=>{o.value=M.value});const L=W(()=>t.user&&t.user.owner);return(c,p)=>{const O=Ie,b=xe,g=Ve,m=We,s=Xe,f=Ye,$=Qe,B=le,T=j,Y=tt,q=ve,Q=Je,U=qe;return u(),x(U,{class:"h-full"},{default:i(()=>[l($,{collapsed:o.value,"onUpdate:collapsed":p[2]||(p[2]=a=>o.value=a),trigger:null,collapsible:"",theme:"light"},{default:i(()=>[v("div",ft,[l(b,{to:"/platform/records",class:"text-black"},{default:i(()=>[l(O,{title:"Вернуть на главную"},{default:i(()=>[l(A(He))]),_:1})]),_:1}),o.value?(u(),x(g,{key:0,size:"medium",icon:P(A(De)),onClick:p[0]||(p[0]=()=>o.value=!o.value)},null,8,["icon"])):(u(),x(g,{key:1,size:"medium",icon:P(A(Fe)),onClick:p[1]||(p[1]=()=>o.value=!o.value)},null,8,["icon"]))]),v("div",gt,[l(f,{mode:"inline",style:{border:"none"}},{default:i(()=>[l(s,{key:"sub1"},{title:i(()=>[v("span",null,[(u(),x(V(d.value.icon))),o.value?K("",!0):(u(),k("span",vt,D(d.value.title),1))])]),default:i(()=>[(u(!0),k(F,null,ee(A(_),a=>(u(),k(F,null,[a.isOwner&&A(L)?(u(),x(m,{key:a.id},{default:i(()=>[l(b,{to:a.to},{default:i(()=>[(u(),x(V(a.icon))),v("span",null,D(a.title),1)]),_:2},1032,["to"])]),_:2},1024)):K("",!0)],64))),256)),(u(!0),k(F,null,ee(d.value.subMenu,a=>(u(),k(F,null,[a.isOwner?K("",!0):(u(),x(m,{key:a.id},{default:i(()=>[l(b,{to:a.to},{default:i(()=>[(u(),x(V(a.icon))),v("span",null,D(a.title),1)]),_:2},1032,["to"])]),_:2},1024))],64))),256))]),_:1}),(u(!0),k(F,null,ee(C.value,a=>(u(),x(m,{key:a.id},{default:i(()=>[l(b,{to:a.to},{default:i(()=>[(u(),x(V(a.icon))),v("span",null,D(a.title),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])]),_:1},8,["collapsed"]),l(U,null,{default:i(()=>[v("header",_t,[v("div",ht,[l(q,{open:S.value,"onUpdate:open":p[3]||(p[3]=a=>S.value=a),trigger:"click"},{content:i(()=>[l(f,{style:{border:"none"},selectable:!1},{default:i(()=>[l(m,{key:"3"},{default:i(()=>[v("div",{class:"flex",onClick:y},[l(B),bt])]),_:1})]),_:1})]),default:i(()=>{var a,z;return[v("div",St,[(a=A(r))!=null&&a.avatar?(u(),x(T,{key:1,src:c.userAvatar},null,8,["src"])):(u(),x(T,{key:0,style:{"background-color":"#87d068"}},{icon:i(()=>[l(A(te))]),_:1})),v("div",null,D((z=A(r))==null?void 0:z.email),1),v("div",yt,[l(Y,{class:je([{"rotate-180 transition-all":!S.value},"transition-all duration-500"])},null,8,["class"])])])]}),_:1},8,["open"])])]),l(Q,null,{default:i(()=>[v("div",Ot,[Be(c.$slots,"default")])]),_:3})]),_:3})]),_:3})}}});export{Gt as default};
