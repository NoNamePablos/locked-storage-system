import{q as R,v as L,A as P,a5 as y,aU as F,h as v,b4 as H,_ as h,m as K,P as D,aW as U}from"./pfen37nC.js";import{E as x}from"./DaTCy0-P.js";const V=R({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup(e,n){let{slots:t}=n;const i=L({width:0,height:0,offsetHeight:0,offsetWidth:0});let o=null,a=null;const u=()=>{a&&(a.disconnect(),a=null)},g=r=>{const{onResize:c}=e,l=r[0].target,{width:T,height:p}=l.getBoundingClientRect(),{offsetWidth:N,offsetHeight:d}=l,M=Math.floor(T),O=Math.floor(p);if(i.width!==M||i.height!==O||i.offsetWidth!==N||i.offsetHeight!==d){const S={width:M,height:O,offsetWidth:N,offsetHeight:d};h(i,S),c&&Promise.resolve().then(()=>{c(h(h({},S),{offsetWidth:N,offsetHeight:d}),l)})}},C=K(),f=()=>{const{disabled:r}=e;if(r){u();return}const c=H(C);c!==o&&(u(),o=c),!a&&c&&(a=new x(g),a.observe(c))};return P(()=>{f()}),y(()=>{f()}),F(()=>{u()}),v(()=>e.disabled,()=>{f()},{flush:"post"}),()=>{var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)[0]}}}),s={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){const{keyCode:t}=n;if(n.altKey&&!n.ctrlKey||n.metaKey||t>=s.F1&&t<=s.F12)return!1;switch(t){case s.ALT:case s.CAPS_LOCK:case s.CONTEXT_MENU:case s.CTRL:case s.DOWN:case s.END:case s.ESC:case s.HOME:case s.INSERT:case s.LEFT:case s.MAC_FF_META:case s.META:case s.NUMLOCK:case s.NUM_CENTER:case s.PAGE_DOWN:case s.PAGE_UP:case s.PAUSE:case s.PRINT_SCREEN:case s.RIGHT:case s.SHIFT:case s.UP:case s.WIN_KEY:case s.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=s.ZERO&&n<=s.NINE||n>=s.NUM_ZERO&&n<=s.NUM_MULTIPLY||n>=s.A&&n<=s.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case s.SPACE:case s.QUESTION_MARK:case s.NUM_PLUS:case s.NUM_MINUS:case s.NUM_PERIOD:case s.NUM_DIVISION:case s.SEMICOLON:case s.DASH:case s.EQUALS:case s.COMMA:case s.PERIOD:case s.SLASH:case s.APOSTROPHE:case s.SINGLE_QUOTE:case s.OPEN_SQUARE_BRACKET:case s.BACKSLASH:case s.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};function w(e,n,t,i){for(var o=e.length,a=t+-1;++a<o;)if(n(e[a],a,e))return a;return-1}function W(e){return e!==e}function $(e,n,t){for(var i=t-1,o=e.length;++i<o;)if(e[i]===n)return i;return-1}function b(e,n,t){return n===n?$(e,n,t):w(e,W,t)}function Y(e,n){var t=e==null?0:e.length;return!!t&&b(e,n,0)>-1}const Z=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}});function A(e,n){return e.classList?e.classList.contains(n):` ${e.className} `.indexOf(` ${n} `)>-1}function _(e,n){e.classList?e.classList.add(n):A(e,n)||(e.className=`${e.className} ${n}`)}function m(e,n){if(e.classList)e.classList.remove(n);else if(A(e,n)){const t=e.className;e.className=` ${t} `.replace(` ${n} `," ")}}const X=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant-motion-collapse",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{name:e,appear:n,css:!0,onBeforeEnter:t=>{t.style.height="0px",t.style.opacity="0",_(t,e)},onEnter:t=>{D(()=>{t.style.height=`${t.scrollHeight}px`,t.style.opacity="1"})},onAfterEnter:t=>{t&&(m(t,e),t.style.height=null,t.style.opacity=null)},onBeforeLeave:t=>{_(t,e),t.style.height=`${t.offsetHeight}px`,t.style.opacity=null},onLeave:t=>{setTimeout(()=>{t.style.height="0px",t.style.opacity="0"})},onAfterLeave:t=>{t&&(m(t,e),t.style&&(t.style.height=null,t.style.opacity=null))}}},G=()=>U()&&window.document.documentElement,I=e=>{if(U()&&window.document.documentElement){const n=Array.isArray(e)?e:[e],{documentElement:t}=window.document;return n.some(i=>i in t.style)}return!1},B=(e,n)=>{if(!I(e))return!1;const t=document.createElement("div"),i=t.style[e];return t.style[e]=n,t.style[e]!==i};function q(e,n){return!Array.isArray(e)&&n!==void 0?B(e,n):I(e)}let E;const J=()=>{if(!G())return!1;if(E!==void 0)return E;const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),E=e.scrollHeight===1,document.body.removeChild(e),E};export{s as K,V as R,_ as a,G as b,X as c,w as d,Y as e,J as f,Z as g,q as i,m as r};