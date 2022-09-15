/*! For license information please see user-table.a3e792d8e35d0867302c.js.LICENSE.txt */
"use strict";(self.webpackChunknicefish_react=self.webpackChunknicefish_react||[]).push([[589],{60331:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(4942),l=a(87462),c=a(29439),r=a(67294),o=a(94184),s=a.n(o),i=a(98423),m=a(54549),u=a(65632);var f=a(98787),p=a(21790),d=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),g=new RegExp("^(".concat(f.E.join("|"),")$")),b=function(e,t){var a,o=e.prefixCls,f=e.className,b=e.style,y=e.children,E=e.icon,h=e.color,k=e.onClose,v=e.closeIcon,N=e.closable,x=void 0!==N&&N,C=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),O=r.useContext(u.E_),w=O.getPrefixCls,Z=O.direction,T=r.useState(!0),j=(0,c.Z)(T,2),P=j[0],I=j[1];r.useEffect((function(){"visible"in C&&I(C.visible)}),[C.visible]);var S=function(){return!!h&&(d.test(h)||g.test(h))},L=(0,l.Z)({backgroundColor:h&&!S()?h:void 0},b),$=S(),q=w("tag",o),D=s()(q,(a={},(0,n.Z)(a,"".concat(q,"-").concat(h),$),(0,n.Z)(a,"".concat(q,"-has-color"),h&&!$),(0,n.Z)(a,"".concat(q,"-hidden"),!P),(0,n.Z)(a,"".concat(q,"-rtl"),"rtl"===Z),a),f),_=function(e){e.stopPropagation(),null==k||k(e),e.defaultPrevented||"visible"in C||I(!1)},R="onClick"in C||y&&"a"===y.type,F=(0,i.Z)(C,["visible"]),Y=E||null,z=Y?r.createElement(r.Fragment,null,Y,r.createElement("span",null,y)):y,A=r.createElement("span",(0,l.Z)({},F,{ref:t,className:D,style:L}),z,x?v?r.createElement("span",{className:"".concat(q,"-close-icon"),onClick:_},v):r.createElement(m.Z,{className:"".concat(q,"-close-icon"),onClick:_}):null);return R?r.createElement(p.Z,null,A):A},y=r.forwardRef(b);y.displayName="Tag",y.CheckableTag=function(e){var t,a=e.prefixCls,c=e.className,o=e.checked,i=e.onChange,m=e.onClick,f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,r.useContext(u.E_).getPrefixCls)("tag",a),d=s()(p,(t={},(0,n.Z)(t,"".concat(p,"-checkable"),!0),(0,n.Z)(t,"".concat(p,"-checkable-checked"),o),t),c);return r.createElement("span",(0,l.Z)({},f,{className:d,onClick:function(e){null==i||i(!o),null==m||m(e)}}))};const E=y},55906:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(67294),l=a(60331),c=a(98061),r=a(39711);const o=()=>{const e=[{title:"序号",dataIndex:"key",filters:[{text:"1",value:"1"},{text:"2",value:"2"}],onFilter:(e,t)=>(console.log(e,t),t.key.includes(e)),sorter:(e,t)=>e.key-t.key},{title:"用户名",dataIndex:"userName",sorter:(e,t)=>e.userName.localeCompare(t.userName)},{title:"注册时间",dataIndex:"registerTime",sorter:(e,t)=>new Date(e.registerTime).getTime()-new Date(t.registerTime).getTime()},{title:"最后登录",dataIndex:"lastLoginTime",sorter:(e,t)=>new Date(e.lastLoginTime).getTime()-new Date(t.lastLoginTime).getTime()},{title:"操作",dataIndex:"options",width:100,fixed:"right",render:(e,t)=>n.createElement("div",null,e.map(((e,a)=>e.link?n.createElement(l.Z,{key:a,className:"mb-1"},n.createElement(r.OL,{to:`${e.link+t.key}`},n.createElement("i",{className:`${e.icon} `,"aria-hidden":"true"}))):n.createElement(l.Z,{key:a,className:"mb-1"},n.createElement("a",null,n.createElement("i",{className:`${e.icon} `,"aria-hidden":"true"}))))))}],[t]=(0,n.useState)([{key:"1",userName:"damoqiongqiu@126.com",registerTime:"2010-11-11 11:11",lastLoginTime:"2016-11-27 09:34",options:[{icon:"fa fa-pencil-square-o",link:"/manage/user-table/edituser/"},{icon:"fa fa-lock"},{icon:"fa fa-trash"},{icon:"fa fa-user-secret"}]},{key:"2",userName:"yanyunchangfeng@gmail.com",registerTime:"2011-11-11 11:11",lastLoginTime:"2018-11-15 09:34",options:[{icon:"fa fa-pencil-square-o",link:"/manage/user-table/edituser/"},{icon:"fa fa-lock"},{icon:"fa fa-trash"},{icon:"fa fa-user-secret"}]}]);return n.createElement("div",{className:"user-table-container"},n.createElement("form",{role:"form"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-8"},n.createElement("div",{className:"input-group"},n.createElement("input",{className:"form-control",type:"text",placeholder:"用户名，昵称"}),n.createElement("span",{className:"input-group-btn"},n.createElement("button",{className:"btn btn-primary",type:"button"},n.createElement("i",{className:"fa fa-search"}),"搜索")))),n.createElement("div",{className:"col-sm-4"},n.createElement("div",{className:"input-group pull-right"},n.createElement("button",{className:"btn btn-primary",type:"button"},n.createElement("i",{className:"fa fa-user","aria-hidden":"true"}),"创建用户"))))),n.createElement("div",{className:"row mt-16px"},n.createElement("div",{className:"col-md-12"},n.createElement(c.Z,{dataSource:t,columns:e,scroll:{x:690}}))))}}}]);