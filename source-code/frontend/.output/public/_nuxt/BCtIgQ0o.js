import{q,V as N,o as d,c as B,a as h,B as r,t as M,ak as V,b as o,D,W as k,r as F,v as ee,h as H,x as m,w as s,d as x,Y as P,al as te}from"./BJuUlySd.js";import{b as oe}from"./D25-OaPC.js";import{H as se,L as ae,_ as re}from"./BxBfqaRx.js";import{u as ne}from"./B-EjBFUq.js";import{c as U,S as le}from"./LRnTN_-w.js";import{S as ie,a as ce,b as pe}from"./DFEOTuSV.js";import{B as de,_ as ue}from"./BZsC2ctA.js";import{I as me,_ as fe,a as _e,F as ye}from"./DOT0iJeh.js";import{M as ve}from"./B-Oe7ZGK.js";import{_ as ge}from"./BnCsx_0O.js";/**
 * @license lucide-vue-next v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=U("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=U("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=U("InfoIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=U("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Ce=["src"],be={class:"flex flex-col gap-2"},$e={class:"font-bold text-md"},Ie={class:"text-gray-400 font-medium"},Ae=q({__name:"RecordsCard",props:{item:{},isRedactor:{type:Boolean,default:!0}},emits:["edit","open"],setup(n,{emit:l}){const i=n,{item:u}=N(i),b=c=>`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${c.trim()}&size=64`,w=l;return(c,_)=>{var v,L,C;return d(),B("div",{class:"relative p-4 rounded border border-solid border-gray-400 flex items-center gap-4 hover:shadow transition-all cursor-pointer",onClick:_[1]||(_[1]=$=>w("open",r(u).id))},[h("div",null,[h("img",{src:b(r(u).site),class:"w-[64px] h-[64px] object-contain"},null,8,Ce)]),h("div",be,[h("div",$e,M(((v=r(u))==null?void 0:v.title)??r(u).site),1),h("div",Ie,M(((L=r(u))==null?void 0:L.email)??((C=r(u))==null?void 0:C.login)??""),1)]),c.isRedactor?(d(),B("div",{key:0,class:"absolute top-4 right-2 text-gray-400 transition-all hover:text-blue-400",onClick:_[0]||(_[0]=V($=>w("edit",r(u).id),["stop"]))},[o(r(oe),{color:"currentColor"})])):D("",!0)])}}}),j={list:async n=>{const{$http:l}=k();return(await l.get("/api/records",{params:{cluster_id:n.cluster_id}})).data},create:async n=>{const{$http:l}=k();return(await l.post("/api/records/store",n)).data.data},update:async n=>{const{$http:l}=k();return(await l.post("/api/records/update",n)).data.data},delete:async n=>{const{$http:l}=k();return(await l.post(`/api/records/delete/${n}`)).data.data},findById:async n=>{const{$http:l}=k();return(await l.get("/api/records/show",{params:{record_id:n.record_id}})).data.data},findById2:async n=>{const{$http:l}=k();return(await l.get(`/api/company-cluster/${n}`)).data.data},search:async n=>{const{$http:l}=k();return(await l.post("/api/records/search",n)).data.data}},Be={key:1},Le=h("span",{class:"text-center block"},"Вводите полный адрес vk.com",-1),Re={key:0},He=q({__name:"RecordsModal",props:{open:{type:Boolean},isEditing:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},item:{default:()=>({})},clusterdId:{}},emits:["close","confirm"],setup(n,{emit:l}){const i=F(!1),u=n,{copy:b}=ne(),{open:w,isEditing:c,isLoading:_,item:v,clusterdId:L}=N(u),C=l,$=async()=>{var e;i.value=!0;try{const t=await((e=z.value)==null?void 0:e.validateFields());if(t&&!t.errorFields){const g={password:a.password,site:a.site,login:a.login,name:a.name,title:a.title,...!c.value&&{cluster_id:+L.value,record_id:v.value.id}};console.log(g);const f=await(c.value?j.update:j.create)(g);C("confirm",f)}}catch(t){console.log(t)}finally{i.value=!1}},G=()=>{C("close")},z=F(null),O=F(null),a=ee({name:"",site:"",login:"",password:"",confirm_password:"",title:""});H(()=>v.value,e=>{console.log("mew : ",e),console.log(c.value),c.value&&e&&(console.log("news: ",e),a.title=(e==null?void 0:e.title)??"",a.name=(e==null?void 0:e.name)??"",a.site=(e==null?void 0:e.site)??"",a.login=(e==null?void 0:e.login)??"",a.password=(e==null?void 0:e.password)??"",a.confirm_password="",console.log(a))},{immediate:!0});const I=F(!1),Y=()=>{I.value=!I.value};H(()=>w.value,e=>{var t,g;e&&!c.value&&(console.log(e),console.log("item:",a),a.title="",a.site="",a.login="",a.password=""),e||(console.log("res: ",e),(t=z.value)==null||t.resetFields(),I.value&&((g=O.value)==null||g.resetForm(),I.value=!1))},{immediate:!0});const T=e=>{try{b(e),P.success("Данные скопированы")}catch{P.error("Ошибка копирования")}},K=async()=>{var e;i.value=!0;try{const t=await j.delete((e=v.value)==null?void 0:e.id);C("confirm",t)}catch(t){console.log(t)}finally{i.value=!1}};return(e,t)=>{const g=ie,y=de,f=ge,R=ce,A=pe,W=le,E=me,S=fe,Z=ue,J=_e,Q=ye,X=ve;return d(),m(X,{open:r(w),onCancel:G,onOk:$},{title:s(()=>{var p;return[r(_)?(d(),m(g,{key:0,paragraph:{rows:0},active:""})):(d(),B("div",Be,M(r(c)?(p=r(v))==null?void 0:p.title:"Добавление пароля"),1))]}),footer:s(()=>[r(c)?(d(),m(f,{key:0,justify:"space-between",wrap:"wrap"},{default:s(()=>[o(y,{type:"link",danger:"",loading:i.value,onClick:t[0]||(t[0]=p=>K())},{default:s(()=>[x("Удалить пароль")]),_:1},8,["loading"]),o(y,{type:"primary",loading:i.value,onClick:t[1]||(t[1]=p=>$())},{default:s(()=>[x("Сохранить")]),_:1},8,["loading"])]),_:1})):(d(),m(y,{key:"submit",type:"primary",loading:i.value,onClick:$},{default:s(()=>[x("Добавить пароль")]),_:1},8,["loading"]))]),default:s(()=>[r(_)?(d(),m(W,{key:0,class:"w-[250px]",direction:"vertical"},{default:s(()=>[o(f,{justify:"space-between",wrap:"wrap"},{default:s(()=>[o(R,{active:""})]),_:1}),o(f,{justify:"space-between",wrap:"wrap"},{default:s(()=>[o(R,{active:""}),o(A,{active:""})]),_:1}),o(f,{justify:"space-between",wrap:"wrap"},{default:s(()=>[o(R,{class:"flex-grow",active:""})]),_:1}),o(f,{justify:"space-between",wrap:"wrap"},{default:s(()=>[o(R,{class:"flex-grow",active:""}),o(A,{active:""})]),_:1})]),_:1})):(d(),m(Q,{key:1,ref_key:"modal",ref:z,layout:"vertical",model:a,name:"basic",autocomplete:"off"},{default:s(()=>[o(S,{name:"title",class:"w-[340px]",rules:[{required:!0,message:"Введите название сайта/сервиса"}]},{default:s(()=>[o(E,{value:a.title,"onUpdate:value":t[2]||(t[2]=p=>a.title=p),class:"text-gray-400",placeholder:"Название сайта/сервиса"},{prefix:s(()=>[o(r(se),{size:20,color:"currentColor"})]),_:1},8,["value"])]),_:1}),o(f,{wrap:"wrap",gap:4},{default:s(()=>[o(S,{class:"w-[340px]",name:"site",rules:[{required:!0,message:"Введите URL"}]},{default:s(()=>[o(E,{value:a.site,"onUpdate:value":t[3]||(t[3]=p=>a.site=p),class:"text-gray-400",placeholder:"URL"},{prefix:s(()=>[o(r(xe),{size:20,color:"currentColor"})]),suffix:s(()=>[o(Z,null,{title:s(()=>[Le]),default:s(()=>[o(r(he),{size:20,color:"currentColor"})]),_:1})]),_:1},8,["value"])]),_:1}),r(c)?(d(),m(y,{key:1,type:"primary",class:"flex-grow",ghost:"",onClick:t[4]||(t[4]=p=>T(a.site))},{default:s(()=>[x("Скопировать")]),_:1})):(d(),m(y,{key:0,type:"primary",class:"flex-grow",ghost:""},{default:s(()=>[x("Вставить")]),_:1}))]),_:1}),o(S,{class:"w-[340px]",name:"login",rules:[{required:!0,message:"Введите логин/Email"}]},{default:s(()=>[o(E,{value:a.login,"onUpdate:value":t[5]||(t[5]=p=>a.login=p),class:"text-gray-400",placeholder:"Введите логин/Email"},{prefix:s(()=>[o(r(we),{size:20,color:"currentColor"})]),_:1},8,["value"])]),_:1}),o(f,{wrap:"wrap",gap:4},{default:s(()=>[o(S,{class:"w-[340px]",name:"password",rules:[{required:!0,message:"Введите пароль"}]},{default:s(()=>[o(J,{value:a.password,"onUpdate:value":t[6]||(t[6]=p=>a.password=p),class:"text-gray-400",placeholder:"Введите пароль"},{prefix:s(()=>[o(r(ae),{size:20,color:"currentColor"})]),_:1},8,["value"])]),_:1}),r(c)?(d(),m(y,{key:1,type:"primary",class:"flex-grow",ghost:"",onClick:t[8]||(t[8]=p=>T(a.password))},{default:s(()=>[x("Скопировать")]),_:1})):(d(),m(y,{key:0,type:"primary",class:"flex-grow",ghost:"",onClick:t[7]||(t[7]=p=>Y())},{default:s(()=>[x("Проверить")]),_:1}))]),_:1}),I.value?(d(),B("div",Re,[o(re,{ref_key:"leaksFormRef",ref:O},null,512)])):D("",!0)]),_:1},8,["model"]))]),_:1},8,["open"])}}}),Se={class:"text-lg leading-4 font-medium"},Pe=q({__name:"BackButton",props:{name:{default:""},route:{default:""}},setup(n){const l=n,{name:i,route:u}=N(l),b=()=>{u.value&&te(u.value)};return(w,c)=>(d(),B("div",{class:"text-gray-400 inline-flex items-center cursor-pointer",onClick:c[0]||(c[0]=_=>b())},[o(r(ke),{size:24,color:"currentColor"}),h("span",Se,M(r(i)),1)]))}});export{Pe as _,He as a,Ae as b,j as p};
