/*! For license information please see forgot.d27344229a588f132981.js.LICENSE.txt */
"use strict";(self.webpackChunknicefish_react=self.webpackChunknicefish_react||[]).push([[89],{28378:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var s=a(67294),l=a(69587);function c(e){let t={};return e.email?/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(e.email)||(t.email="请输入正确的邮箱格式"):t.email="邮箱必须输入",t}var n=a(55670),i=a(42665),r=a(58405);const o=()=>{(0,i.G2)(r.Z).useHome();const[e,t]=(0,s.useState)(""),[a,o]=(0,s.useState)(!1),[u,m]=(0,s.useState)({email:{touched:!1,dirty:!1}}),[f,d]=(0,s.useState)({}),[g,b]=(0,s.useState)({email:""});return(0,s.useEffect)((()=>{const e=c(g),t=Object.keys(e).some((t=>e[t]));o(t)}),[f]),s.createElement("div",{className:"container d-flex align-items-center"},s.createElement("div",{className:"card login-panel bg-white"},s.createElement("div",{className:"col-12 d-flex justify-content-center  text-white"},s.createElement("span",{className:"bg-red pd-5-10px font-size-24"},"魚")),s.createElement("form",{onSubmit:e=>function(e){e.preventDefault(),l.ZP.success("邮件发送成功，请登录邮箱查看。")}(e)},s.createElement("div",{className:"col-12 d-flex  text-white"},s.createElement("span",{className:"inputfiled"},s.createElement("input",{className:`col input-text ${e} ${(u.email.touched||u.email.dirty)&&f.email?"error":""}`,type:"text",autoComplete:"off",value:g.email,onChange:e=>function(e,t){const a=Object.assign(Object.assign({},g),{[e]:t});m(Object.assign(Object.assign({},u),{[e]:{dirty:!0}})),b(a),d(c(a))}("email",e.target.value),onBlur:e=>{return a="email",s=e.target.value,d(c(g)),m(Object.assign(Object.assign({},u),{[a]:{touched:!0}})),void n.Z.toggleClass(s,t,n.Z.fillClass);var a,s}}),s.createElement("label",null,"Email"),(u.email.touched||u.email.dirty)&&f.email?s.createElement("div",{className:"text-red"},f.email):"")),s.createElement("div",{className:"col-12 d-flex justify-content-center  text-white ui-fluid"},s.createElement("button",{className:"btn btn-primary col",disabled:a},"找回密码")))))}},58405:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(96974),l=a(67294),c=a(90481),n=a(42665),i=a(35169);let r=class extends i.Z{constructor(){super(...arguments),this.storageService=(0,n.G2)(c.Z)}useLogin(){return this.storageService.getKey("user")}useHome(){const e=this.useLogin(),t=(0,s.s0)();(0,l.useEffect)((()=>{e&&t("/")}),[])}};r=function(e,t,a,s){var l,c=arguments.length,n=c<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(n=(c<3?l(n):c>3?l(t,a,n):l(t,a))||n);return c>3&&n&&Object.defineProperty(t,a,n),n}([(0,n.b2)("AccountService")],r);const o=r},55670:(e,t,a)=>{a.d(t,{Z:()=>s});const s={fillClass:"ui-state-filled",toggleClass:(e,t,a="")=>{t(e?a:"")}}}}]);