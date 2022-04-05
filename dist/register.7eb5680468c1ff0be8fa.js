/*! For license information please see register.7eb5680468c1ff0be8fa.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[685,95],{86676:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(27378),l=["#25859e","#6acece","#e78816","#eabc7f","#12619d","#ad2532","#15938d","#b3aa9b","#042d4c"];const r={baseColor:l,genColor:function(e){for(var t=0,a=[],n=0;n<e.length;n++)t<l.length||(t=0),a[n]=l[t++];return a}};var c=a(27421);const i=function(){var e,t,a,l=(0,n.useRef)(null),i=(0,n.useRef)(null),s=(0,n.useRef)(null),o={theme:"",event:[{type:"click",cb:function(e){console.log(e)}}],color:r.baseColor,title:{text:"NiceFish访问用户地区分布",subtext:"纯属虚构",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",top:"7%",left:"3%",data:["深圳","北京","广州","上海","长沙"]},series:[{name:"访问来源",type:"pie",startAngle:-180,radius:"55%",center:["50%","60%"],data:[{value:3350,name:"深圳"},{value:310,name:"北京"},{value:234,name:"广州"},{value:135,name:"上海"},{value:1548,name:"长沙"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},d={title:{text:"NiceFish月访问量统计",subtext:"纯属虚构",x:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:"{b}月{a}:{c}"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["1","2","3","4","5","6","7","8","9","10","11","12"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"访问量",type:"bar",barWidth:"60%",itemStyle:{normal:{color:function(e){return r.genColor(d.series[0].data)[e.dataIndex]}}},data:[900,1258,1300,1334,1390,1430,1520,1e3,500,444,999,555]}]},u={title:{text:"NiceFish月访问趋势图",subtext:"纯属虚构",x:"center"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},legend:{x:"center",y:"center"},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:["1","2","3","4","5","6","7","8","9","10","11","12"]},yAxis:{type:"value",axisLabel:{formatter:"{value} 次"}},series:[{name:"访问量",type:"line",data:[11,11,15,13,12,13,10,123,100,19,16,199]},{name:"访问量1",type:"line",data:[21,21,25,23,22,23,20,223,200,29,26,299]},{name:"访问量2",type:"line",data:[31,31,35,33,32,33,30,323,300,39,36,399]},{name:"访问量3",type:"line",data:[41,41,45,43,42,43,40,423,400,49,46,499]},{name:"访问量4",type:"line",data:[41,41,45,43,42,43,40,423,400,49,56,499]},{name:"访问量5",type:"line",data:[51,51,55,53,52,53,50,523,500,59,66,599]},{name:"访问量6",type:"line",data:[61,61,65,63,62,63,60,623,600,69,76,699]},{name:"访问量7",type:"line",data:[71,71,75,73,72,73,70,723,700,79,86,799]},{name:"访问量8",type:"line",data:[81,81,85,83,82,83,80,823,800,89,96,899]}]};return(0,n.useEffect)((function(){e=c.init(l.current),t=c.init(i.current),a=c.init(s.current),e.setOption(o),t.setOption(d),a.setOption(u)})),n.createElement("div",null,n.createElement("div",{ref:l,className:"react-echart"}),n.createElement("div",{ref:i,className:"react-echart"}),n.createElement("div",{ref:s,className:"react-echart"}))}},13678:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(27378);function l(e){var t={},a=e.pwd,n=e.cfpwd;return e.email?/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(e.email)||(t.email="请输入正确的邮箱格式"):t.email="邮箱必须输入",e.pwd?/\w{8,}/.test(e.pwd)||(t.pwd="密码至少为8位"):t.pwd="请输入密码",e.cfpwd?/\w{8,}/.test(e.cfpwd)?a!==n&&(t.cfpwd="密码不一致"):t.cfpwd="确认密码至少为8位":t.cfpwd="请输入确认密码",t}var r=a(3620),c=a(42366),i=a(62095),s=function(){return s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},s.apply(this,arguments)};const o=(0,r.EN)((function(e){var t=(0,n.useState)(""),a=t[0],r=t[1],o=(0,n.useState)(""),d=o[0],u=o[1],m=(0,n.useState)(""),p=m[0],f=m[1],w=(0,n.useState)(!1),y=w[0],h=w[1],v=(0,n.useState)({email:{touched:!1,dirty:!1},pwd:{touched:!1,dirty:!1},cfpwd:{touched:!1,dirty:!1}}),g=v[0],b=v[1],x=(0,n.useState)({}),E=x[0],N=x[1],C=(0,n.useState)({email:"",pwd:"",cfpwd:""}),k=C[0],Z=C[1];function S(e,t){var a,n,c;switch(e){case"email":N(l(k)),b(s(s({},g),((a={})[e]={touched:!0},a))),i.Z.toggleClass(t,r,i.Z.fillClass);break;case"pwd":N(l(k)),b(s(s({},g),((n={})[e]={touched:!0},n))),i.Z.toggleClass(t,u,i.Z.fillClass);break;case"cfpwd":N(l(k)),b(s(s({},g),((c={})[e]={touched:!0},c))),i.Z.toggleClass(t,f,i.Z.fillClass)}}function A(e,t){var a,n,r,c,i=s(s({},k),((a={})[e]=t,a));switch(e){case"email":b(s(s({},g),((n={})[e]={dirty:!0},n)));break;case"pwd":b(s(s({},g),((r={})[e]={dirty:!0},r)));break;case"cfpwd":b(s(s({},g),((c={})[e]={dirty:!0},c)))}Z(i),N(l(i))}return(0,n.useEffect)((function(){var e=l(k),t=Object.keys(e).some((function(t){return e[t]}));h(t)}),[E]),n.createElement("div",{className:"container d-flex align-items-center login-container"},n.createElement("div",{className:"card login-panel bg-white"},n.createElement("div",{className:"col-12 d-flex justify-content-center  text-white"},n.createElement("span",{className:"bg-red pd-5-10px font-size-24"},"魚")),n.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),c.Z.setKeyValue("user",k.email),e.history.push("/home")}(t)}},n.createElement("div",{className:"col-12 d-flex  text-white"},n.createElement("span",{className:"inputfiled"},n.createElement("input",{className:"col input-text ".concat(a," ").concat((g.email.touched||g.email.dirty)&&E.email?"error":""),type:"text",autoComplete:"off",value:k.email,onChange:function(e){return A("email",e.target.value)},onBlur:function(e){return S("email",e.target.value)}}),n.createElement("label",null,"Email"),(g.email.touched||g.email.dirty)&&E.email?n.createElement("div",{className:"text-red"},E.email):"")),n.createElement("div",{className:"col-12 d-flex justify-content-center  text-white"},n.createElement("span",{className:"inputfiled"},n.createElement("input",{className:"col input-text ".concat(d," ").concat((g.pwd.touched||g.pwd.dirty)&&E.pwd?"error":""),type:"password",value:k.pwd,autoComplete:"off",onBlur:function(e){S("pwd",e.target.value)},onChange:function(e){return A("pwd",e.target.value)}}),n.createElement("label",null,"Password"),(g.pwd.touched||g.pwd.dirty)&&E.pwd?n.createElement("div",{className:"text-red"},E.pwd):"")),n.createElement("div",{className:"col-12 d-flex justify-content-center  text-white"},n.createElement("span",{className:"inputfiled"},n.createElement("input",{className:"col input-text ".concat(p," ").concat((g.cfpwd.touched||g.cfpwd.dirty)&&E.cfpwd?"error":""),type:"password",value:k.cfpwd,autoComplete:"off",onBlur:function(e){S("cfpwd",e.target.value)},onChange:function(e){return A("cfpwd",e.target.value)}}),n.createElement("label",null,"Confirm Password"),(g.cfpwd.touched||g.cfpwd.dirty)&&E.cfpwd?n.createElement("div",{className:"text-red"},E.cfpwd):"")),n.createElement("div",{className:"col-12 d-flex justify-content-center  text-white ui-fluid"},n.createElement("button",{className:"btn btn-primary col",disabled:y},"注册")))))}))},62095:(e,t,a)=>{a.d(t,{Z:()=>n});const n={fillClass:"ui-state-filled",toggleClass:function(e,t,a){void 0===a&&(a=""),t(e?a:"")}}}}]);