import{_ as Se}from"./CgtrZ6E-.js";import{S as $e,_ as Ce}from"./D9-kGlr4.js";import{E as Ie,G as Me,T as xe,_ as J,H as be,I as ke,J as Pe,K as ze,q as Y,L as Le,M as V,N as Ue,r as h,h as se,O as Ee,A as ie,P as Oe,b as o,Q as te,R as Te,S as le,U as I,V as ue,v as pe,o as g,x as $,w as l,B as y,d as W,c as N,D as k,W as K,s as me,t as Fe,X as re,a as He,u as Be,C as De,Y as Ae}from"./BJuUlySd.js";import{K as ce}from"./0ilB-tuh.js";import{W as Re,B as Z}from"./BZsC2ctA.js";import{u as We,_ as he,F as ge,I as je,a as Ne}from"./DOT0iJeh.js";import{o as Xe}from"./CRyH2PlJ.js";import{H as Ke,L as de,_ as qe}from"./BxBfqaRx.js";import{u as Ge}from"./B-EjBFUq.js";import{_ as Qe}from"./8c9HvziJ.js";import{c as fe,_ as Ve,a as Ye}from"./DuQfDowj.js";import{c as Q}from"./kvbyed1x.js";import{S as Je,a as Ze,b as en,P as nn}from"./DFEOTuSV.js";import{S as tn}from"./LRnTN_-w.js";import{M as sn}from"./B-Oe7ZGK.js";import{_ as an}from"./BnCsx_0O.js";import{u as on,S as ln,_ as rn,a as cn}from"./D25-OaPC.js";import{_ as dn}from"./0nYZ5fJz.js";import{_ as un}from"./zmoN5nXH.js";import{_ as pn,L as mn}from"./vXXLiWwG.js";import"./BNZDlUDy.js";import"./CIBDcU51.js";import"./CimRBjKu.js";import"./DSKOKChf.js";import"./DGYNie3Z.js";import"./Dc-xyrsf.js";import"./DglMTarX.js";import"./CQ_gXp3h.js";import"./BzDSlWI0.js";import"./DX-IJePx.js";import"./vCu2co3e.js";import"./CvfJGVh9.js";import"./BbNsEJ2y.js";const hn=e=>{const{componentCls:t}=e,a=`${t}-inner`;return{[t]:{[`&${t}-small`]:{minWidth:e.switchMinWidthSM,height:e.switchHeightSM,lineHeight:`${e.switchHeightSM}px`,[`${t}-inner`]:{paddingInlineStart:e.switchInnerMarginMaxSM,paddingInlineEnd:e.switchInnerMarginMinSM,[`${a}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSizeSM+e.switchPadding*2}px - ${e.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSizeSM+e.switchPadding*2}px + ${e.switchInnerMarginMaxSM*2}px)`},[`${a}-unchecked`]:{marginTop:-e.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${t}-handle`]:{width:e.switchPinSizeSM,height:e.switchPinSizeSM},[`${t}-loading-icon`]:{top:(e.switchPinSizeSM-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize},[`&${t}-checked`]:{[`${t}-inner`]:{paddingInlineStart:e.switchInnerMarginMinSM,paddingInlineEnd:e.switchInnerMarginMaxSM,[`${a}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${a}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSizeSM+e.switchPadding*2}px + ${e.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSizeSM+e.switchPadding*2}px - ${e.switchInnerMarginMaxSM*2}px)`}},[`${t}-handle`]:{insetInlineStart:`calc(100% - ${e.switchPinSizeSM+e.switchPadding}px)`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${a}`]:{[`${a}-unchecked`]:{marginInlineStart:e.marginXXS/2,marginInlineEnd:-e.marginXXS/2}},[`&${t}-checked ${a}`]:{[`${a}-checked`]:{marginInlineStart:-e.marginXXS/2,marginInlineEnd:e.marginXXS/2}}}}}}},gn=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-loading-icon${e.iconCls}`]:{position:"relative",top:(e.switchPinSize-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${t}-checked ${t}-loading-icon`]:{color:e.switchColor}}}},fn=e=>{const{componentCls:t}=e,a=`${t}-handle`;return{[t]:{[a]:{position:"absolute",top:e.switchPadding,insetInlineStart:e.switchPadding,width:e.switchPinSize,height:e.switchPinSize,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:e.colorWhite,borderRadius:e.switchPinSize/2,boxShadow:e.switchHandleShadow,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${t}-checked ${a}`]:{insetInlineStart:`calc(100% - ${e.switchPinSize+e.switchPadding}px)`},[`&:not(${t}-disabled):active`]:{[`${a}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${t}-checked ${a}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},_n=e=>{const{componentCls:t}=e,a=`${t}-inner`;return{[t]:{[a]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:e.switchInnerMarginMax,paddingInlineEnd:e.switchInnerMarginMin,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${a}-checked, ${a}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none"},[`${a}-checked`]:{marginInlineStart:`calc(-100% + ${e.switchPinSize+e.switchPadding*2}px - ${e.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${e.switchPinSize+e.switchPadding*2}px + ${e.switchInnerMarginMax*2}px)`},[`${a}-unchecked`]:{marginTop:-e.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${t}-checked ${a}`]:{paddingInlineStart:e.switchInnerMarginMin,paddingInlineEnd:e.switchInnerMarginMax,[`${a}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${a}-unchecked`]:{marginInlineStart:`calc(100% - ${e.switchPinSize+e.switchPadding*2}px + ${e.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${e.switchPinSize+e.switchPadding*2}px - ${e.switchInnerMarginMax*2}px)`}},[`&:not(${t}-disabled):active`]:{[`&:not(${t}-checked) ${a}`]:{[`${a}-unchecked`]:{marginInlineStart:e.switchPadding*2,marginInlineEnd:-e.switchPadding*2}},[`&${t}-checked ${a}`]:{[`${a}-checked`]:{marginInlineStart:-e.switchPadding*2,marginInlineEnd:e.switchPadding*2}}}}}},wn=e=>{const{componentCls:t}=e;return{[t]:J(J(J(J({},be(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:e.switchMinWidth,height:e.switchHeight,lineHeight:`${e.switchHeight}px`,verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${t}-disabled)`]:{background:e.colorTextTertiary}}),ke(e)),{[`&${t}-checked`]:{background:e.switchColor,[`&:hover:not(${t}-disabled)`]:{background:e.colorPrimaryHover}},[`&${t}-loading, &${t}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${t}-rtl`]:{direction:"rtl"}})}},vn=Ie("Switch",e=>{const t=e.fontSize*e.lineHeight,a=e.controlHeight/2,r=2,C=t-r*2,d=a-r*2,c=Me(e,{switchMinWidth:C*2+r*4,switchHeight:t,switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchInnerMarginMin:C/2,switchInnerMarginMax:C+r+r*2,switchPadding:r,switchPinSize:C,switchBg:e.colorBgContainer,switchMinWidthSM:d*2+r*2,switchHeightSM:a,switchInnerMarginMinSM:d/2,switchInnerMarginMaxSM:d+r+r*2,switchPinSizeSM:d,switchHandleShadow:`0 2px 4px 0 ${new xe("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:e.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[wn(c),_n(c),fn(c),gn(c),hn(c)]}),yn=ze("small","default"),Sn=()=>({id:String,prefixCls:String,size:I.oneOf(yn),disabled:{type:Boolean,default:void 0},checkedChildren:I.any,unCheckedChildren:I.any,tabindex:I.oneOfType([I.string,I.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:I.oneOfType([I.string,I.number,I.looseBool]),checkedValue:I.oneOfType([I.string,I.number,I.looseBool]).def(!0),unCheckedValue:I.oneOfType([I.string,I.number,I.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}),$n=Y({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:Sn(),slots:Object,setup(e,t){let{attrs:a,slots:r,expose:C,emit:d}=t;const c=We(),x=Le(),S=V(()=>{var i;return(i=e.disabled)!==null&&i!==void 0?i:x.value});Ue(()=>{});const P=h(e.checked!==void 0?e.checked:a.defaultChecked),U=V(()=>P.value===e.checkedValue);se(()=>e.checked,()=>{P.value=e.checked});const{prefixCls:u,direction:m,size:f}=Ee("switch",e),[E,O]=vn(u),p=h(),z=()=>{var i;(i=p.value)===null||i===void 0||i.focus()};C({focus:z,blur:()=>{var i;(i=p.value)===null||i===void 0||i.blur()}}),ie(()=>{Oe(()=>{e.autofocus&&!S.value&&p.value.focus()})});const b=(i,F)=>{S.value||(d("update:checked",i),d("change",i,F),c.onFieldChange())},q=i=>{d("blur",i)},T=i=>{z();const F=U.value?e.unCheckedValue:e.checkedValue;b(F,i),d("click",F,i)},X=i=>{i.keyCode===ce.LEFT?b(e.unCheckedValue,i):i.keyCode===ce.RIGHT&&b(e.checkedValue,i),d("keydown",i)},D=i=>{var F;(F=p.value)===null||F===void 0||F.blur(),d("mouseup",i)},A=V(()=>({[`${u.value}-small`]:f.value==="small",[`${u.value}-loading`]:e.loading,[`${u.value}-checked`]:U.value,[`${u.value}-disabled`]:S.value,[u.value]:!0,[`${u.value}-rtl`]:m.value==="rtl",[O.value]:!0}));return()=>{var i;return E(o(Re,null,{default:()=>[o("button",te(te(te({},Xe(e,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),a),{},{id:(i=e.id)!==null&&i!==void 0?i:c.id.value,onKeydown:X,onClick:T,onBlur:q,onMouseup:D,type:"button",role:"switch","aria-checked":P.value,disabled:S.value||e.loading,class:[a.class,A.value],ref:p}),[o("div",{class:`${u.value}-handle`},[e.loading?o(Te,{class:`${u.value}-loading-icon`},null):null]),o("span",{class:`${u.value}-inner`},[o("span",{class:`${u.value}-inner-checked`},[le(r,e,"checkedChildren")]),o("span",{class:`${u.value}-inner-unchecked`},[le(r,e,"unCheckedChildren")])])])]}))}}}),_e=Pe($n),Cn=Y({__name:"ClusterUsersSelect",props:{users:{default:()=>[]},isLoading:{type:Boolean,default:!1}},emits:["confirm"],setup(e,{emit:t}){const a=e,{users:r,isLoading:C}=ue(a),d=pe({user_id:null,is_redactor:!1,is_reader:!0,is_inviter:!1}),c=t,x=h(null),S=V(()=>(console.log(r.value),r.value.map(m=>({label:m.name,value:m.id}))??[])),P=(m,f)=>f.label.toLowerCase().indexOf(m.toLowerCase())>=0,U=m=>{console.log(`selected ${m}`),d.user_id=m},u=async()=>{var f;const m=await((f=x.value)==null?void 0:f.validateFields());if(m&&!m.errorFields){const E=r.value.find(O=>O.id===d.user_id);console.log("confirm: ",{...d,name:E.name}),c("confirm",{...d,name:E.name})}};return(m,f)=>{const E=$e,O=he,p=_e,z=Z,B=ge;return g(),$(B,{ref_key:"modal",ref:x,model:d,name:"basic",autocomplete:"off"},{default:l(()=>[o(O,{name:"user_id"},{default:l(()=>[o(E,{value:d.user_id,"onUpdate:value":f[0]||(f[0]=b=>d.user_id=b),"show-search":"",placeholder:"Выбрать сотрудника",style:{width:"100%"},"filter-option":P,options:y(S),onChange:U},null,8,["value","options"])]),_:1}),o(O,{label:"Редактирование",name:"is_redactor"},{default:l(()=>[o(p,{checked:d.is_redactor,"onUpdate:checked":f[1]||(f[1]=b=>d.is_redactor=b)},null,8,["checked"])]),_:1}),o(O,{label:"Просмотр",name:"is_reader"},{default:l(()=>[o(p,{checked:d.is_reader,"onUpdate:checked":f[2]||(f[2]=b=>d.is_reader=b),disabled:""},null,8,["checked"])]),_:1}),o(z,{type:"primary",onClick:f[3]||(f[3]=b=>u())},{default:l(()=>[W("Сохранить")]),_:1})]),_:1},8,["model"])}}}),In={key:0},Mn={key:1},xn={key:2},bn={key:3},kn=Y({__name:"ClustersUsersList",props:{users:{}},emits:["change-user","delete"],setup(e,{emit:t}){const a=[{name:"ID",dataIndex:"user_id",key:"user_id"},{name:"Имя",dataIndex:"name",key:"name"},{name:"Редактор",dataIndex:"is_redactor",key:"is_redactor"},{name:"Просмотр",dataIndex:"is_reader",key:"is_reader"},{title:"Действия",key:"action"}],r=t,C=(c,x)=>{console.log("change: ",{record:c,key:x}),r("change-user",{record:c,key:x})},d=c=>{console.log("delete"),r("delete",c)};return(c,x)=>{const S=_e,P=Z,U=Ce;return g(),N("div",null,[o(U,{columns:a,"data-source":c.users},{headerCell:l(({column:u})=>[u.key==="name"?(g(),N("span",In," Имя ")):k("",!0),u.key==="id"?(g(),N("span",Mn," ID ")):k("",!0),u.key==="is_redactor"?(g(),N("span",xn," Редактор ")):k("",!0),u.key==="is_reader"?(g(),N("span",bn," Просмотр ")):k("",!0)]),bodyCell:l(({column:u,record:m})=>[u.key==="is_redactor"?(g(),$(S,{key:0,checked:m.is_redactor,onChange:f=>C(m,"is_redactor")},null,8,["checked","onChange"])):k("",!0),u.key==="is_reader"?(g(),$(S,{key:1,checked:m.is_reader,disabled:""},null,8,["checked"])):k("",!0),u.key==="action"?(g(),$(P,{key:2,type:"link",danger:"",onClick:f=>d(m)},{default:l(()=>[W("Удалить")]),_:2},1032,["onClick"])):k("",!0)]),_:1},8,["data-source"])])}}}),ae={list:async e=>{const{$http:t}=K();return(await t.get("/api/company-cluster",{params:{company_id:e.company_id}})).data.data},create:async e=>{const{$http:t}=K();return(await t.post("/api/company-cluster/create",e)).data.data},update:async e=>{const{$http:t}=K();return(await t.post("/api/clusters/update",e)).data.data},delete:async e=>{const{$http:t}=K();return(await t.post(`/api/clusters/delete/${e}`)).data.data},findById:async e=>{const{$http:t}=K();return(await t.get("/api/clusters/show",{params:{password:e.password,user_id:e.user_id,cluster_id:e.cluster_id}})).data.data},search:async e=>{const{$http:t}=K();return(await t.post("/api/clusters/search",e)).data.data}},Pn={key:1},zn=He("div",{class:"mb-2 font-bold"},"Доступ для сотрудников",-1),Ln=Y({__name:"ClusterCompanyModal",props:{open:{type:Boolean},isEditing:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},item:{default:()=>({})},title:{default:"Добавление хранилища"}},emits:["close","confirm"],setup(e,{emit:t}){const a=h(!1),r=me(),C=e;Ge();const{open:d,isEditing:c,isLoading:x,item:S}=ue(C),P=t,U=h(null),u=async()=>{var n,s;a.value=!0;try{const _=await((n=U.value)==null?void 0:n.validateFields());if(_&&!_.errorFields){const L={password:p.password,name:p.name,company_id:r.getUser.owner.id??r.user.company.id,...c.value&&{new_password:p.new_password,cluster_id:(s=S.value)==null?void 0:s.id}};console.log(L);const M=c.value?ae.update:ae.create,R=c.value?Q.storeUserToCluster:Q.storeUserToCluster,w=await M(L);if(console.log(w),i.value.length)for(const j of i.value){const ee={...j,cluster_id:w.id};await R(ee)}console.log(i.value),P("confirm",w)}}catch(_){console.log(_)}finally{a.value=!1}},m=async()=>{var n;try{const s=await fe.delete((n=S.value)==null?void 0:n.id);console.log(s),f()}catch(s){console.log(s)}},f=()=>{P("close")};h(null);const E=h(null),O=h(null),p=pe({name:"",password:"",new_password:"",users:null});se(()=>S.value,async n=>{c.value&&n&&(p.name=(n==null?void 0:n.name)??"",p.password=(n==null?void 0:n.password)??"",p.new_password="",p.users=(n==null?void 0:n.users)??null)},{immediate:!0}),se(()=>d.value,async n=>{var s,_;n&&(p.name="",p.password="",p.users=null,p.new_password=""),c.value&&(console.log("item od: ",(s=S.value)==null?void 0:s.id),await A((_=S.value)==null?void 0:_.id)),n||(U.value.resetFields(),z.value&&(E.value.resetForm(),z.value=!1),B.value&&(O.value.resetForm(),B.value=!1))});const z=h(!1),B=h(!1),b=()=>{B.value=!B.value},q=()=>{z.value=!z.value},T=h(!1),X=h([]),D=async()=>{var n;T.value=!0;try{const s=await Q.users(((n=r.getUser.owner)==null?void 0:n.id)??r.user.company.id);X.value=s.users}catch(s){console.log(s)}finally{T.value=!1}},A=async n=>{T.value=!0;try{const s=await Q.fetchUserClusters({cluster_id:n});console.log("rsL ",s);const _=s.reduce((L,M)=>(L.push({...M.users,delete_id:M.id,is_reader:!!M.is_reader,is_redactor:!!M.is_redactor}),L),[]);console.log("test: ",_),i.value=_}catch(s){console.log(s)}T.value=!1},i=h([]),F=n=>{i.value.push(n)},G=n=>{const s=i.value.find(_=>_.user_id===n.record.user_id);s&&(s[n.key]=!s[n.key])},v=async n=>{var s;i.value=i.value.filter(_=>_.user_id!==n.user_id),T.value=!0;try{const _=await Q.deleteUserFormCluster(n.delete_id);await A((s=S.value)==null?void 0:s.id),console.log("delt: ",_)}catch(_){console.log(_)}T.value=!1};return ie(async()=>{await r.profile(),await D()}),(n,s)=>{const _=Je,L=Z,M=an,R=Ze,w=en,j=tn,ee=je,ne=he,oe=Ne,we=Cn,ve=ge,ye=sn;return g(),$(ye,{open:y(d),onCancel:f,onOk:u},{title:l(()=>[y(x)?(g(),$(_,{key:0,paragraph:{rows:0},active:""})):(g(),N("div",Pn,Fe(n.title),1))]),footer:l(()=>[y(c)?(g(),$(M,{key:0,justify:"space-between",wrap:"wrap"},{default:l(()=>[o(L,{type:"link",danger:"",onClick:s[0]||(s[0]=H=>m())},{default:l(()=>[W("Удалить хранилище")]),_:1}),o(L,{type:"primary",onClick:s[1]||(s[1]=H=>u())},{default:l(()=>[W("Сохранить")]),_:1})]),_:1})):(g(),$(L,{key:"submit",type:"primary",loading:a.value,onClick:u},{default:l(()=>[W("Добавить хранилище")]),_:1},8,["loading"]))]),default:l(()=>[y(x)?(g(),$(j,{key:0,class:"w-[250px]",direction:"vertical"},{default:l(()=>[o(M,{justify:"space-between",wrap:"wrap"},{default:l(()=>[o(R,{active:""})]),_:1}),o(M,{justify:"space-between",wrap:"wrap"},{default:l(()=>[o(R,{active:""}),o(w,{active:""})]),_:1}),o(M,{justify:"space-between",wrap:"wrap"},{default:l(()=>[o(R,{class:"flex-grow",active:""})]),_:1}),o(M,{justify:"space-between",wrap:"wrap"},{default:l(()=>[o(R,{class:"flex-grow",active:""}),o(w,{active:""})]),_:1})]),_:1})):(g(),$(ve,{key:1,ref_key:"clusterModal",ref:U,layout:"vertical",model:p,name:"basic",autocomplete:"off"},{default:l(()=>[o(ne,{name:"name",class:"w-[340px]",rules:[{required:!0,message:"Введите название хранилища"}]},{default:l(()=>[o(ee,{value:p.name,"onUpdate:value":s[2]||(s[2]=H=>p.name=H),class:"text-gray-400",placeholder:"Название хранилища"},{prefix:l(()=>[o(y(Ke),{size:20,color:"currentColor"})]),_:1},8,["value"])]),_:1}),o(M,{wrap:"wrap",gap:4},{default:l(()=>[o(ne,{class:re(y(c)?"w-full":"w-[340px]"),name:"password",rules:[{required:!0,message:"Введите пароль"}]},{default:l(()=>[o(oe,{value:p.password,"onUpdate:value":s[3]||(s[3]=H=>p.password=H),class:"text-gray-400",placeholder:"Введите пароль"},{prefix:l(()=>[o(y(de),{size:20,color:"currentColor"})]),_:1},8,["value"])]),_:1},8,["class"]),y(c)?(g(),$(ne,{key:0,class:re(y(c)?"w-full":"w-[340px]"),name:"new_password"},{default:l(()=>[o(oe,{value:p.new_password,"onUpdate:value":s[4]||(s[4]=H=>p.new_password=H),class:"text-gray-400",placeholder:"Введите новый пароль"},{prefix:l(()=>[o(y(de),{size:20,color:"currentColor"})]),_:1},8,["value"])]),_:1},8,["class"])):k("",!0),y(c)?k("",!0):(g(),$(M,{key:1,vertical:"",gap:4},{default:l(()=>[o(L,{type:"primary",class:"flex-grow",ghost:"",onClick:s[5]||(s[5]=H=>q())},{default:l(()=>[W("Проверить")]),_:1}),o(L,{type:"primary",class:"flex-grow",ghost:"",onClick:s[6]||(s[6]=H=>b())},{default:l(()=>[W("Генерировать")]),_:1})]),_:1}))]),_:1}),o(M,{vertical:""},{default:l(()=>[zn,i.value.length?(g(),$(kn,{key:0,users:i.value,onChangeUser:G,onDelete:v},null,8,["users"])):k("",!0),o(we,{users:X.value,"is-loading":T.value,onConfirm:s[7]||(s[7]=H=>F(H))},null,8,["users","is-loading"])]),_:1}),z.value?(g(),$(qe,{key:0,ref_key:"leaksFormRef",ref:E,class:"my-4"},null,512)):k("",!0),B.value?(g(),$(Qe,{key:1,ref_key:"generateFormRef",ref:O,class:"my-4"},null,512)):k("",!0)]),_:1},8,["model"]))]),_:1},8,["open"])}}}),Un={class:"h-full"},pt=Y({__name:"index",setup(e){const{typeOfView:t,changeTypeOfView:a}=on(ln.CLUSTER_TYPE),r=me();h("");const C=h({typeOfAuth:"create",clusterId:0}),d=h(!1),c=(v=0,n="create")=>{console.log(n),n==="create"&&(d.value=!0),n==="edit"&&p(v,n),n==="open"&&p(v,n)},x=()=>{d.value=!1,i.value=!1,A.value=null},S=h(!1),P=h("Авторизация"),U=h(!1),u=h(!1),m=h([]),f=async()=>{var v,n;D.value=!0;try{const s={company_id:((v=r.getUser.owner)==null?void 0:v.id)??r.user.company.id},_=await ae.list({company_id:((n=r.getUser.owner)==null?void 0:n.id)??r.user.company.id});m.value=_,console.log(m.value)}catch(s){console.log(s)}finally{D.value=!1}},E=()=>{U.value=!1},O=h(""),p=(v,n)=>{S.value=!0,P.value="Авторизация в кластере",C.value.typeOfAuth=n,C.value.clusterId=v},z=()=>{S.value=!1,O.value="",C.value.typeOfAuth="create",C.value.id=0},B=Be(),b=async({data:v,type:n})=>{try{console.log("data: ",v),z(),n==="edit"&&(d.value=!0,i.value=!0,A.value=v),n==="open"&&(v.message!=="Доступ запрещен"?(console.log(123),await B.push({path:`/platform/company-cluster/${v.id}`})):(Ae.error("Доступ запрещен"),console.log("Доступ запрещен")))}catch(s){console.log(s)}},q=()=>{u.value=!0,setTimeout(()=>{u.value=!1,E()},2e3)},T=h(!1),X=async v=>{T.value=!0;try{await f(),x()}catch(n){console.log(n)}finally{D.value=!1}},D=h(!1),A=h(null),i=h(!1);ie(async()=>{await r.profile(),await f()});const F=async v=>{var n;D.value=!0;try{if(!v.length)await f();else{const s=await fe.searchCompany({find:v,company_id:((n=r.getUser.owner)==null?void 0:n.id)??r.user.company.id});console.log(s),m.value=s}}catch(s){console.log(s)}finally{D.value=!1}},G=V(()=>r.user&&r.user.owner);return(v,n)=>{const s=Z,_=Se,L=Ln,M=mn,R=pn;return g(),N("div",Un,[o(_,{class:"mt-4",title:"Хранилища"},{right:l(()=>[y(G)?(g(),$(s,{key:0,type:"primary",size:"middle",icon:("h"in v?v.h:y(De))(y(nn)),onClick:n[0]||(n[0]=w=>c())},{default:l(()=>[W("Добавить хранилище")]),_:1},8,["icon"])):k("",!0)]),_:1}),o(R,{class:"bg-white h-full"},{default:l(()=>[o(y(rn),{"type-view":y(t),onSearch:n[1]||(n[1]=w=>F(w)),onChangeView:n[2]||(n[2]=w=>y(a)(w))},null,8,["type-view"]),o(M,{class:"mt-6 px-4"},{default:l(()=>[m.value.length?(g(),$(cn,{key:1,items:m.value,"type-view":y(t),"button-text":"Добавить хранилище",onAdd:n[6]||(n[6]=w=>c())},{card:l(({item:w})=>[o(un,{item:w,"is-owner":y(G),onEdit:n[4]||(n[4]=j=>c(j,"edit")),onOpen:n[5]||(n[5]=j=>c(j,"open"))},null,8,["item","is-owner"])]),_:1},8,["items","type-view"])):(g(),$(dn,{key:0,title:"Сейчас нет харнилищ ( ","button-title":"Добавить хранилище",onTrigger:n[3]||(n[3]=w=>c())})),o(Ve,{"modal-title":"Пользователи хранилища",class:"max-w-[600px]",loading:u.value,open:!1,onClose:n[7]||(n[7]=w=>E()),onSubmit:n[8]||(n[8]=w=>q())},null,8,["loading"]),o(Ye,{"cluster-id":C.value.clusterId,type:C.value.typeOfAuth,"modal-title":P.value,class:"max-w-[600px]",loading:T.value,open:S.value,onClose:n[9]||(n[9]=w=>z()),onSubmit:n[10]||(n[10]=w=>b(w))},null,8,["cluster-id","type","modal-title","loading","open"]),y(G)?(g(),$(L,{key:2,open:d.value,"is-editing":i.value,"is-loading":D.value,title:i.value?"Радактирование хранилища":"Добавление хранилища",item:A.value,onClose:n[11]||(n[11]=w=>x()),onConfirm:n[12]||(n[12]=w=>X(w))},null,8,["open","is-editing","is-loading","title","item"])):k("",!0)]),_:1})]),_:1})])}}});export{pt as default};
