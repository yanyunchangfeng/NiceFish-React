(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1084:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(531),a=n(1086),i=n(13);t.default=function(){var e=Object(r.useState)({}),t=e[0],n=e[1],l=Object(r.useState)({}),c=l[0],s=l[1],u=[{title:"序号",dataIndex:"key",filteredValue:t.key||null,filters:[{text:"1",value:"1"},{text:"2",value:"2"}],onFilter:function(e,t){return t.key.includes(e)},sorter:function(e,t){return e.key-t.key},sortOrder:"key"===c.columnKey&&c.order},{title:"名称",dataIndex:"title",sorter:function(e,t){return e.title.localeCompare(t.title)},sortOrder:"title"===c.columnKey&&c.order},{title:"操作",dataIndex:"options",width:120,fixed:"right",render:function(e,t){return r.createElement("div",null,e.map(function(e,n){return e.link?r.createElement(o.a,{key:n},r.createElement(i.b,{to:""+(e.link+t.key)},r.createElement("i",{className:e.icon+" ","aria-hidden":"true"}))):r.createElement(o.a,{key:n},r.createElement("a",{href:"javascript:void(0)"},r.createElement("i",{className:e.icon+" ","aria-hidden":"true"})))}))}}],f=Object(r.useState)([{key:"1",title:"发表文章",userName:"damoqiongqiu",options:[{icon:"fa fa-pencil-square-o",link:"/manage/permission-edit/"},{icon:"fa fa-trash"}]},{key:"2",title:"删除文章",userName:"damoqiongqiu",options:[{icon:"fa fa-pencil-square-o",link:"/manage/permission-edit/"},{icon:"fa fa-trash"}]}])[0];return r.createElement("div",{className:"permission-table-container"},r.createElement("form",{className:"form-vertical",role:"form"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-8 "},r.createElement("div",{className:"input-group"},r.createElement("input",{className:"form-control",type:"text",placeholder:"权限名称，权限代码"}),r.createElement("span",{className:"input-group-btn"},r.createElement("button",{className:"btn btn-primary",type:"button"},r.createElement("i",{className:"fa fa-search","aria-hidden":"true"}),"搜索")))),r.createElement("div",{className:"col-sm-4 "},r.createElement("div",{className:"input-group pull-right"},r.createElement("button",{className:"btn btn-primary",type:"button"},r.createElement("i",{className:"fa fa-user","aria-hidden":"true"}),"创建权限"))))),r.createElement("div",{className:"row mt-16px"},r.createElement("div",{className:"col-md-12"},r.createElement(a.a,{dataSource:f,columns:u,onChange:function(e,t,r){console.log(e,t,r),n(t),s(r)},scroll:{x:420}}))))}},531:function(e,t,n){"use strict";var r=n(0),o=n(18),a=n(7),i=n.n(a),l=n(48),c=n(39),s=n(14),u=n(30);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},g=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=b(this,d(t).apply(this,arguments))).handleClick=function(){var t=e.props,n=t.checked,r=t.onChange;r&&r(!n)},e.renderCheckableTag=function(t){var n,o=t.getPrefixCls,a=e.props,l=a.prefixCls,c=a.className,s=a.checked,u=v(a,["prefixCls","className","checked"]),f=o("tag",l),y=i()(f,(m(n={},"".concat(f,"-checkable"),!0),m(n,"".concat(f,"-checkable-checked"),s),n),c);return delete u.onChange,r.createElement("div",p({},u,{className:y,onClick:e.handleClick}))},e}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return r.createElement(u.a,null,this.renderCheckableTag)}}])&&y(n.prototype,o),a&&y(n,a),t}(),O=n(332);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},x=function(e){e.show;var t=S(e,["show"]),n=Object(l.a)(t,["onClose","afterClose","color","visible","closable"]);return r.createElement("div",n)},_=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=j(this,P(t).apply(this,arguments))).state={visible:!0},e.handleIconClick=function(t){e.setVisible(!1,t)},e.animationEnd=function(t,n){if(!n){var r=e.props.afterClose;r&&r()}},e.renderTag=function(t){var n=t.getPrefixCls,a=e.props,i=a.prefixCls,l=a.children,c=S(a,["prefixCls","children"]),s=e.state.visible,u=n("tag",i);return r.createElement(O.a,null,r.createElement(o.a,{component:"",showProp:"show",transitionName:"".concat(u,"-zoom"),onEnd:e.animationEnd},r.createElement(x,E({show:s},c,{className:e.getTagClassName(t),style:e.getTagStyle()}),l,e.renderCloseIcon())))},e}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,r["Component"]),n=t,l=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(a=[{key:"setVisible",value:function(e,t){var n=this.props.onClose;n&&n(t),t.defaultPrevented||"visible"in this.props||this.setState({visible:e})}},{key:"isPresetColor",value:function(e){return!!e&&/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(e)}},{key:"getTagStyle",value:function(){var e=this.props,t=e.color,n=e.style,r=this.isPresetColor(t);return E({backgroundColor:t&&!r?t:void 0},n)}},{key:"getTagClassName",value:function(e){var t,n=e.getPrefixCls,r=this.props,o=r.prefixCls,a=r.className,l=r.color,c=this.state.visible,s=this.isPresetColor(l),u=n("tag",o);return i()(u,(w(t={},"".concat(u,"-").concat(l),s),w(t,"".concat(u,"-has-color"),l&&!s),w(t,"".concat(u,"-hidden"),!c),t),a)}},{key:"renderCloseIcon",value:function(){return this.props.closable?r.createElement(s.a,{type:"close",onClick:this.handleIconClick}):null}},{key:"render",value:function(){return r.createElement(u.a,null,this.renderTag)}}])&&C(n.prototype,a),l&&C(n,l),t}();_.CheckableTag=g,_.defaultProps={closable:!1},Object(c.polyfill)(_);t.a=_}}]);
//# sourceMappingURL=10.bundle.js.map