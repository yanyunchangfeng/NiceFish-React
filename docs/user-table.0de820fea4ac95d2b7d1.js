/*! For license information please see user-table.0de820fea4ac95d2b7d1.js.LICENSE.txt */
"use strict";(self.webpackChunknicefish_react=self.webpackChunknicefish_react||[]).push([[589],{6308:(e,r,o)=>{o.d(r,{Z:()=>k});var t=o(54549),a=o(94184),n=o.n(a),l=o(67294),c=o(98787),i=o(28979),s=o(53124),d=o(14747),m=o(98719),u=o(67968),g=o(45503);const p=(e,r,o)=>{const t="string"!=typeof(a=o)?a:a.charAt(0).toUpperCase()+a.slice(1);var a;return{[`${e.componentCls}-${r}`]:{color:e[`color${o}`],background:e[`color${t}Bg`],borderColor:e[`color${t}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},b=e=>(0,m.Z)(e,((r,o)=>{let{textColor:t,lightBorderColor:a,lightColor:n,darkColor:l}=o;return{[`${e.componentCls}-${r}`]:{color:t,background:n,borderColor:a,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}})),f=e=>{const{paddingXXS:r,lineWidth:o,tagPaddingHorizontal:t,componentCls:a}=e,n=t-o,l=r-o;return{[a]:Object.assign(Object.assign({},(0,d.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:n,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${a}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${a}-close-icon`]:{marginInlineStart:l,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${a}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${a}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:n}}),[`${a}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},h=(0,u.Z)("Tag",(e=>{const{lineWidth:r,fontSizeIcon:o}=e,t=e.fontSizeSM,a=e.lineHeightSM*t+"px",n=(0,g.TS)(e,{tagFontSize:t,tagLineHeight:a,tagIconSize:o-2*r,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[f(n),b(n),p(n,"success","Success"),p(n,"processing","Info"),p(n,"error","Error"),p(n,"warning","Warning")]}),(e=>({defaultBg:e.colorFillQuaternary,defaultColor:e.colorText})));const C=(e,r)=>{const{prefixCls:o,className:a,rootClassName:d,style:m,children:u,icon:g,color:p,onClose:b,closeIcon:f,closable:C=!1,bordered:y=!0}=e,k=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]])}return o}(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:E,direction:v}=l.useContext(s.E_),[$,x]=l.useState(!0);l.useEffect((()=>{"visible"in k&&x(k.visible)}),[k.visible]);const N=(0,c.o2)(p)||(0,c.yT)(p),S=Object.assign({backgroundColor:p&&!N?p:void 0},m),T=E("tag",o),[O,w]=h(T),I=n()(T,{[`${T}-${p}`]:N,[`${T}-has-color`]:p&&!N,[`${T}-hidden`]:!$,[`${T}-rtl`]:"rtl"===v,[`${T}-borderless`]:!y},a,d,w),P=e=>{e.stopPropagation(),null==b||b(e),e.defaultPrevented||x(!1)},j=l.useMemo((()=>C?f?l.createElement("span",{className:`${T}-close-icon`,onClick:P},f):l.createElement(t.Z,{className:`${T}-close-icon`,onClick:P}):null),[C,f,T,P]),L="function"==typeof k.onClick||u&&"a"===u.type,z=g||null,B=z?l.createElement(l.Fragment,null,z,l.createElement("span",null,u)):u,H=l.createElement("span",Object.assign({},k,{ref:r,className:I,style:S}),B,j);return O(L?l.createElement(i.Z,null,H):H)},y=l.forwardRef(C);y.CheckableTag=e=>{const{prefixCls:r,className:o,checked:t,onChange:a,onClick:c}=e,i=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]])}return o}(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:d}=l.useContext(s.E_),m=d("tag",r),[u,g]=h(m),p=n()(m,{[`${m}-checkable`]:!0,[`${m}-checkable-checked`]:t},o,g);return u(l.createElement("span",Object.assign({},i,{className:p,onClick:e=>{null==a||a(!t),null==c||c(e)}})))};const k=y},44504:(e,r,o)=>{o.r(r),o.d(r,{default:()=>c});var t=o(67294),a=o(6308),n=o(11057),l=o(79655);const c=()=>{const e=[{title:"序号",dataIndex:"key",filters:[{text:"1",value:"1"},{text:"2",value:"2"}],onFilter:(e,r)=>(console.log(e,r),r.key.includes(e)),sorter:(e,r)=>e.key-r.key},{title:"用户名",dataIndex:"userName",sorter:(e,r)=>e.userName.localeCompare(r.userName)},{title:"注册时间",dataIndex:"registerTime",sorter:(e,r)=>new Date(e.registerTime).getTime()-new Date(r.registerTime).getTime()},{title:"最后登录",dataIndex:"lastLoginTime",sorter:(e,r)=>new Date(e.lastLoginTime).getTime()-new Date(r.lastLoginTime).getTime()},{title:"操作",dataIndex:"options",width:100,fixed:"right",render:(e,r)=>t.createElement("div",null,e.map(((e,o)=>e.link?t.createElement(a.Z,{key:o,className:"mb-1"},t.createElement(l.OL,{to:`${e.link+r.key}`},t.createElement("i",{className:`${e.icon} `,"aria-hidden":"true"}))):t.createElement(a.Z,{key:o,className:"mb-1"},t.createElement("a",null,t.createElement("i",{className:`${e.icon} `,"aria-hidden":"true"}))))))}],[r]=(0,t.useState)([{key:"1",userName:"damoqiongqiu@126.com",registerTime:"2010-11-11 11:11",lastLoginTime:"2016-11-27 09:34",options:[{icon:"fa fa-pencil-square-o",link:"/manage/user-table/edituser/"},{icon:"fa fa-lock"},{icon:"fa fa-trash"},{icon:"fa fa-user-secret"}]},{key:"2",userName:"yanyunchangfeng@gmail.com",registerTime:"2011-11-11 11:11",lastLoginTime:"2018-11-15 09:34",options:[{icon:"fa fa-pencil-square-o",link:"/manage/user-table/edituser/"},{icon:"fa fa-lock"},{icon:"fa fa-trash"},{icon:"fa fa-user-secret"}]}]);return t.createElement("div",{className:"user-table-container"},t.createElement("form",{role:"form"},t.createElement("div",{className:"row"},t.createElement("div",{className:"col-sm-8"},t.createElement("div",{className:"input-group"},t.createElement("input",{className:"form-control",type:"text",placeholder:"用户名，昵称"}),t.createElement("span",{className:"input-group-btn"},t.createElement("button",{className:"btn btn-primary",type:"button"},t.createElement("i",{className:"fa fa-search"}),"搜索")))),t.createElement("div",{className:"col-sm-4"},t.createElement("div",{className:"input-group pull-right"},t.createElement("button",{className:"btn btn-primary",type:"button"},t.createElement("i",{className:"fa fa-user","aria-hidden":"true"}),"创建用户"))))),t.createElement("div",{className:"row mt-16px"},t.createElement("div",{className:"col-md-12"},t.createElement(n.Z,{dataSource:r,columns:e,scroll:{x:690}}))))}}}]);