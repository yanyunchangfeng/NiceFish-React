(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1095:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(279),r=a(28),l=a(62);function s(e){var t={};return e.name?/\w{5,}/.test(e.name)||(t.name="用户名最少为5位"):t.name="用户名为必填",e.pwd?/\w{6,}/.test(e.pwd)||(t.pwd="密码最少为6位"):t.pwd="密码为必填项",t}var i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var c in t=arguments[a])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};t.default=Object(r.f)(function(e){var t=Object(n.useState)(""),a=t[0],r=t[1],o=Object(n.useState)(""),u=o[0],d=o[1],m=Object(n.useState)({name:"",pwd:""}),p=m[0],f=m[1],w=Object(n.useState)({}),b=w[0],h=w[1],v=Object(n.useState)({name:{touched:!1,dirty:!1},pwd:{touched:!1,dirty:!1}}),y=v[0],g=v[1],E=Object(n.useState)(!1),x=E[0],N=E[1];function j(e,t){var a,n;switch(e){case"name":g(i({},y,((a={})[e]=i({},y[e],{touched:!0}),a))),h(s(p)),c.a.toggleClass(t,r,c.a.fillClass);break;case"pwd":g(i({},y,((n={})[e]=i({},y[e],{touched:!0}),n))),h(s(p)),c.a.toggleClass(t,d,c.a.fillClass)}}function O(e,t){var a,n,c,r=i({},p,((a={})[e]=t,a));switch(e){case"name":g(i({},y,((n={})[e]=i({},y[e],{dirty:!0}),n)));break;case"pwd":g(i({},y,((c={})[e]=i({},y[e],{dirty:!0}),c)))}f(r),h(s(r))}return Object(n.useEffect)(function(){var e=s(p),t=Object.keys(e).some(function(t){return e[t]});N(t)},[b]),n.createElement("div",{className:"container d-flex align-items-center login-container"},n.createElement("div",{className:"card login-panel bg-white"},n.createElement("div",{className:"col-12 d-flex justify-content-center  text-white"},n.createElement("span",{className:"bg-red pd-5-10px font-size-24"},"魚")),n.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),l.a.setKeyValue("user",p.name),e.history.push("/home")}(t)}},n.createElement("div",{className:"col-12 d-flex  text-white"},n.createElement("span",{className:"inputfiled"},n.createElement("input",{className:"col input-text "+a+" "+((y.name.touched||y.name.dirty)&&b.name?"error":""),type:"text",autoComplete:"off",value:p.name,onChange:function(e){return O("name",e.target.value)},onBlur:function(e){return j("name",e.target.value)}}),n.createElement("label",null,"Username"),(y.name.touched||y.name.dirty)&&b.name?n.createElement("div",{className:"text-red"},b.name):"")),n.createElement("div",{className:"col-12 d-flex justify-content-center  text-white"},n.createElement("span",{className:"inputfiled"},n.createElement("input",{className:"col input-text "+u+" "+((y.pwd.touched||y.pwd.dirty)&&b.pwd?"error":""),type:"password",value:p.pwd,autoComplete:"off",onBlur:function(e){j("pwd",e.target.value)},onChange:function(e){return O("pwd",e.target.value)}}),n.createElement("label",null,"Password"),(y.pwd.touched||y.pwd.dirty)&&b.pwd?n.createElement("div",{className:"text-red"},b.pwd):"")),n.createElement("div",{className:"col-12 text-white ui-fluid"},n.createElement("button",{className:"btn btn-primary col",disabled:x},"登录"),n.createElement("button",{className:"btn btn-primary col mt-16px",onClick:function(){e.history.push("/forgot")}},"忘记密码")))))})},279:function(e,t,a){"use strict";t.a={fillClass:"ui-state-filled",toggleClass:function(e,t,a){void 0===a&&(a=""),t(e?a:"")}}}}]);
//# sourceMappingURL=14.bundle.js.map