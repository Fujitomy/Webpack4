!function(e){function t(t){for(var n,o,u=t[0],l=t[1],a=0,c=[];a<u.length;a++)o=u[a],r[o]&&c.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(i&&i(t);c.length;)c.shift()()}var n={},r={1:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=u);var l,a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(e){return o.p+""+({}[e]||e)+".chunk.js"}(e),l=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+o+": "+u+")");l.type=o,l.request=u,n[1](l)}r[e]=void 0}};var c=setTimeout(function(){l({type:"timeout",target:i})},12e4);i.onerror=i.onload=l,a.appendChild(i)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var i=l;o(o.s=3)}([function(e,t){e.exports=vendor_fe42b2775c2a9752c13c},function(e,t,n){e.exports=n(0)("./node_modules/_react@16.4.1@react/index.js")},function(e,t,n){e.exports=n(0)("./node_modules/_react-router-dom@4.3.1@react-router-dom/es/index.js")},function(e,t,n){"use strict";var r=a(n(1)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(4)),u=n(2),l=a(n(5));function a(e){return e&&e.__esModule?e:{default:e}}(0,o.render)(r.default.createElement(u.HashRouter,null,r.default.createElement(u.Switch,null,r.default.createElement(l.default,null))),document.getElementById("root"))},function(e,t,n){e.exports=n(0)("./node_modules/_react-dom@16.4.1@react-dom/index.js")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),o=n(2),u=a(n(6)),l=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=(0,u.default)({loader:function(){return Promise.all([n.e(0),n.e(2)]).then(n.t.bind(null,8,7))},loading:l.default}),y=(0,u.default)({loader:function(){return n.e(3).then(n.t.bind(null,9,7))},loading:l.default}),b=(0,u.default)({loader:function(){return n.e(4).then(n.t.bind(null,10,7))},loading:l.default}),m=(0,u.default)({loader:function(){return Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,11,7))},loading:l.default}),h=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,d(t).call(this,e,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.Component),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t}),console.log(e,t,"---------------componentDidCatch------------------")}},{key:"render",value:function(){return r.default.createElement(o.HashRouter,null,r.default.createElement(o.Switch,null,r.default.createElement(o.BrowserRouter,null,r.default.createElement("div",null,r.default.createElement("ul",{className:"nav"},r.default.createElement("li",null,r.default.createElement(o.Link,{to:"/"},"Home")),r.default.createElement("li",null,r.default.createElement(o.Link,{to:"/one"},"One")),r.default.createElement("li",null,r.default.createElement(o.Link,{to:"/two"},"Two")),r.default.createElement("li",null,r.default.createElement(o.Link,{to:"/user"},"User"))),r.default.createElement("div",null,r.default.createElement(o.Route,{path:"/",exact:!0,component:s}),r.default.createElement(o.Route,{path:"/one",component:y}),r.default.createElement(o.Route,{path:"/two",component:b}),r.default.createElement(o.Route,{path:"/user",component:m}))))))}}]),t}();t.default=h},function(e,t,n){e.exports=n(0)("./node_modules/_react-loadable@5.4.0@react-loadable/lib/index.js")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,a(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,r.default.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"render",value:function(){return r.default.createElement("div",null,"Loading...")}}]),t}();t.default=c}]);