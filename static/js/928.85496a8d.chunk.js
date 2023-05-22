/*! For license information please see 928.85496a8d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[928],{8928:function(t,e,r){r.r(e),r.d(e,{default:function(){return C}});var n,o,i,a=r(3433),c=r(5861),u=r(9439),l=r(2791),s=r(1087),h=r(3535),f=r(966),p=r(2013),d=r(5781),v=r(8683),y=r(9126),m=r(9983),g=r(5705),w=r(4925),x=r(168),b=r(6444),E=b.ZP.button(n||(n=(0,x.Z)(["\n  margin: 0 auto;\n  padding: "," ",";\n\n  width: 48px;\n  height: 36px;\n  outline: none;\n  border: none;\n  border-radius: ",";\n  background-color: transparent;\n\n  color: ",";\n\n  transition-property: color;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(t){return t.theme.spacing(1)}),(function(t){return t.theme.spacing(3)}),(function(t){return t.theme.spacing(0)}),(function(t){return t.theme.colors.icons}),(function(t){return t.theme.colors.iconsHover})),L=r(184),j=["children","onClick"],k=function(t){var e=t.children,r=t.onClick,n=(0,w.Z)(t,j);return(0,L.jsx)(E,(0,v.Z)((0,v.Z)({type:"button",onClick:r},n),{},{children:e}))};k.defoultProps={onClick:function(){return null},children:null};var S=(0,b.ZP)(g.l0)(o||(o=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  background-color: ",";\n  border-radius: ",";\n  overflow: hidden;\n"])),(function(t){return t.theme.colors.bgdForm}),(function(t){return t.theme.spacing(1)})),Z=(0,b.ZP)(g.gN)(i||(i=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  background-color: ",";\n  padding: "," ",";\n  color: ",";\n\n  ::placeholder {\n    font: inherit;\n    color: ",";\n    font-size: 18px;\n  }\n"])),(function(t){return t.theme.colors.bgdForm}),(function(t){return t.theme.spacing(0)}),(function(t){return t.theme.spacing(3)}),(function(t){return t.theme.colors.textForm}),(function(t){return t.theme.colors.placeholder})),_=function(t){var e=t.onSubmit;return(0,L.jsx)(g.J9,{initialValues:{query:""},onSubmit:function(t,r){var n=r.resetForm;if(""===t.query.trim())return alert("Enter a search query!"),void n();e((0,v.Z)((0,v.Z)({},t),{},{page:1})),n()},children:(0,L.jsxs)(S,{className:"form",children:[(0,L.jsx)(Z,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,L.jsx)(m.Pd.Provider,{value:{size:"20px"},children:(0,L.jsx)(k,{type:"submit","aria-label":"Search button",children:(0,L.jsx)(y.dVI,{})})})]})})},q=r(1294),O=r(8172),P=r(4697);function N(){N=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(_){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var h={};function f(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==e&&r.call(m,i)&&(v=m);var g=d.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return Z()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),u(g,c,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var C=function(){var t,e=(0,l.useState)(1),r=(0,u.Z)(e,2),n=r[0],o=r[1],i=(0,l.useState)(),v=(0,u.Z)(i,2),y=v[0],m=v[1],g=(0,l.useState)(),w=(0,u.Z)(g,2),x=w[0],b=w[1],E=(0,l.useState)(null),j=(0,u.Z)(E,2),k=j[0],S=j[1],Z=(0,l.useState)(O.q.IDLE),C=(0,u.Z)(Z,2),F=C[0],G=C[1],D=(0,s.lr)(),I=(0,u.Z)(D,2),T=I[0],z=I[1],R=null!==(t=T.get("query"))&&void 0!==t?t:"",V=n<Math.ceil(x/20);(0,l.useEffect)((function(){var t=new AbortController,e=t.signal;if(R)return function(){r.apply(this,arguments)}(),function(){t.abort()};function r(){return(r=(0,c.Z)(N().mark((function t(){var r,o,i;return N().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return G(O.q.PENDING),t.prev=1,t.next=4,P.h.fetchMoviesWithQuery(R,n,e);case 4:if(r=t.sent,o=r.results,i=r.total_pages,0!==o.length){t.next=9;break}throw new Error("Sorry, there are no movies matching your search query");case 9:m(1===n?o:function(t){return[].concat((0,a.Z)(t),(0,a.Z)(o))}),b(i),G(O.q.RESOLVED),t.next=22;break;case 14:if(t.prev=14,t.t0=t.catch(1),!e.aborted){t.next=20;break}return t.abrupt("return");case 20:S(t.t0),G(O.q.REJECTED);case 22:case"end":return t.stop()}}),t,null,[[1,14]])})))).apply(this,arguments)}}),[R,n]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(q.$,{children:(0,L.jsx)(_,{onSubmit:function(t){var e=""!==t.query?{query:t.query}:{};z(e),o(t.page)}})}),F===O.q.PENDING?(0,L.jsx)(q.$,{children:(0,L.jsx)(f.a,{})}):F===O.q.REJECTED?(0,L.jsx)(q.$,{children:(0,L.jsx)(d.M,{message:"Whoops, something went wrong. ".concat(k.message,".")})}):F===O.q.RESOLVED?(0,L.jsxs)(q.$,{children:[(0,L.jsx)(p.a,{movies:y}),V&&(0,L.jsx)(h.z,{onClick:function(){o((function(t){return t+1}))}})]}):null]})}}}]);
//# sourceMappingURL=928.85496a8d.chunk.js.map