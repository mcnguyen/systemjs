/*
 * SystemJS v0.20.0-rc.1 Production
 */
!function(){"use strict";function e(e){return q?Symbol():"@@"+e}function t(e,t){B||(t=t.replace(F?/file:\/\/\//g:/file:\/\//g,""));var r,n=(e.message||e)+"\n  "+t;r=H&&e.fileName?new Error(n,e.fileName,e.lineNumber):new Error(n);var o=e.originalErr?e.originalErr.stack:e.stack;return W?r.stack=n+"\n  "+o:r.stack=o,r.originalErr=e.originalErr||e,r}function r(){throw new RangeError('Unable to resolve "'+relUrl+'" to '+parentUrl)}function n(e,t){var n=t&&t.substr(0,t.indexOf(":")+1),o=e[0],i=e[1];if("/"===o&&"/"===i)return n||r(e,t),n+e;if("."===o&&("/"===i||"."===i&&("/"===e[2]||2===e.length)||1===e.length)||"/"===o){var s,a=!n||"/"!==t[n.length];if(a?(void 0===t&&r(e,t),s=t):"/"===t[n.length+1]?"file:"!==n?(s=t.substr(n.length+2),s=s.substr(s.indexOf("/")+1)):s=t.substr(8):s=t.substr(n.length+1),"/"===o){if(!a)return t.substr(0,t.length-s.length-1)+e;r(e,t)}for(var u=s.substr(0,s.lastIndexOf("/")+1)+e,c=[],l=void 0,f=0;f<u.length;f++)if(void 0===l)if("."!==u[f])l=f;else{if("."!==u[f+1]||"/"!==u[f+2]&&f!==u.length-2){if("/"!==u[f+1]&&f!==u.length-1){l=f;continue}f+=1}else c.pop(),f+=2;a&&0===c.length&&r(e,t),f===u.length&&c.push("")}else"/"===u[f]&&(c.push(u.substr(l,f-l+1)),l=void 0);return void 0!==l&&c.push(u.substr(l,u.length-l)),t.substr(0,t.length-s.length)+c.join("")}var d=e.indexOf(":");return-1!==d?W&&":"===e[1]&&"\\"===e[2]&&e[0].match(/[a-z]/i)?"file:///"+e.replace(/\\/g,"/"):e:void 0}function o(e){if(e.values)return e.values();if("undefined"==typeof Symbol||!Symbol.iterator)throw new Error("Symbol.iterator not supported in this browser");var t={};return t[Symbol.iterator]=function(){var t=Object.keys(e),r=0;return{next:function(){return r<t.length?{value:e[t[r++]],done:!1}:{value:void 0,done:!0}}}},t}function i(){this.registry=new u}function s(e){if(!(e instanceof c))throw new TypeError("Module instantiation did not return a valid namespace object.");return e}function a(e){if(void 0===e)throw new RangeError("No resolution found.");return e}function u(){this[Y]={},this._registry=Y}function c(e){Object.defineProperty(this,Z,{value:e}),Object.getOwnPropertyNames(e).forEach(l,this)}function l(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[Z][e]}})}function f(){i.call(this),this[$]={lastRegister:void 0,records:{}},this.trace=!1}function d(e,t,r){return e.records[t]={key:t,registration:r,module:void 0,importerSetters:void 0,linkRecord:{instantiatePromise:void 0,dependencies:void 0,execute:void 0,moduleObj:void 0,setters:void 0,depsInstantiatePromise:void 0,dependencyInstantiations:void 0,linked:!1,error:void 0}}}function p(e,t,r,n,o){var i=n[t];if(i)return Promise.resolve(i);var s=o.records[t];return s&&!s.module?v(e,s,s.linkRecord,n,o):e.resolve(t,r).then(function(t){if(i=n[t])return i;s=o.records[t],(!s||s.module)&&(s=d(o,t,s&&s.registration));var r=s.linkRecord;return r?v(e,s,r,n,o):s})}function h(e,t,r){return function(){var e=r.lastRegister;return e?(r.lastRegister=void 0,t.registration=e,!0):!!t.registration}}function v(e,r,n,o,i){return n.instantiatePromise||(n.instantiatePromise=(r.registration?Promise.resolve():Promise.resolve().then(function(){return i.lastRegister=void 0,e[ee](r.key,e[ee].length>1&&h(e,r,i))})).then(function(t){if(void 0!==t){if(!(t instanceof c))throw new TypeError("Instantiate did not return a valid Module object.");return delete i.records[r.key],e.trace&&m(e,r,n),o[r.key]=t}var s=r.registration;if(r.registration=void 0,!s)throw new TypeError("Module instantiation did not call an anonymous or correctly named System.register.");return n.dependencies=s[0],r.importerSetters=[],n.moduleObj={},s[2]?(n.moduleObj.default={},n.moduleObj.__useDefault=!0,n.execute=s[1]):g(e,r,n,s[1]),n.dependencies.length||(n.linked=!0,e.trace&&m(e,r,n)),r}).catch(function(e){throw n.error=t(e,"Instantiating "+r.key)}))}function y(e,t,r,n,o,i){return e.resolve(t,r).then(function(r){i&&(i[t]=t);var s=o.records[r],a=n[r];if(a&&(!s||s.module&&a!==s.module))return a;(!s||!a&&s.module)&&(s=d(o,r,s&&s.registration));var u=s.linkRecord;return u?v(e,s,u,n,o):s})}function m(e,t,r){e.loads=e.loads||{},e.loads[t.key]={key:t.key,deps:r.dependencies,depMap:r.depMap||{}}}function g(e,t,r,n){var o=r.moduleObj,i=t.importerSetters,s=!1,a=n.call(J,function(e,t){if(!s){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;s=!0;for(var n=0;n<i.length;n++)i[n](o);return s=!1,t}},new O(e,t.key));r.setters=a.setters,r.execute=a.execute,a.exports&&(r.moduleObj=o=a.exports)}function b(e,r,n,o,i,s){return(n.depsInstantiatePromise||(n.depsInstantiatePromise=Promise.resolve().then(function(){for(var t=Array(n.dependencies.length),s=0;s<n.dependencies.length;s++)t[s]=y(e,n.dependencies[s],r.key,o,i,e.trace&&(n.depMap={}));return Promise.all(t)}).then(function(e){if(n.dependencyInstantiations=e,n.setters)for(var t=0;t<e.length;t++){var r=n.setters[t];if(r){var o=e[t];o instanceof c?r(o):(r(o.module||o.linkRecord.moduleObj),o.importerSetters&&o.importerSetters.push(r))}}}))).then(function(){for(var t=[],r=0;r<n.dependencies.length;r++){var a=n.dependencyInstantiations[r],u=a.linkRecord;u&&!u.linked&&-1===s.indexOf(a)&&(s.push(a),t.push(b(e,a,a.linkRecord,o,i,s)))}return Promise.all(t)}).then(function(){return n.linked=!0,e.trace&&m(e,r,n),r}).catch(function(e){throw e=t(e,"Loading "+r.key),n.error=n.error||e,e})}function w(e,t){var r=e[$];r.records[t.key]===t&&delete r.records[t.key];var n=t.linkRecord;n&&n.dependencyInstantiations&&n.dependencyInstantiations.forEach(function(t,o){if(t&&!(t instanceof c)&&t.linkRecord&&(t.linkRecord.error&&r.records[t.key]===t&&w(e,t),n.setters&&t.importerSetters)){var i=t.importerSetters.indexOf(n.setters[o]);t.importerSetters.splice(i,1)}})}function k(e,t,r){return function(n,o,i){if(!t)for(var s=0;s<e.length;s++)n(e[s]);i.exports=r.apply(J,arguments)||i.exports}}function O(e,t){this.loader=e,this.key=this.id=t}function R(e,t,r,n,o,i){if(t.module)return t.module;if(r.error)throw r.error;if(i&&-1!==i.indexOf(t))return t.linkRecord.moduleObj;var s=j(e,t,r,n,o,t.setters?[]:i||[]);if(s)throw w(e,t),s;return t.module}function S(e,t,r,n,o,i,s){return function(a){for(var u=0;u<r.length;u++)if(r[u]===a){var l,f=n[u];return l=f instanceof c?f:R(e,f,f.linkRecord,o,i,s),l.__useDefault?l.default:l}throw new Error("Module "+a+" not declared as a System.registerDynamic dependency of "+t)}}function j(e,r,n,o,i,s){s.push(r);var a;if(n.setters)for(var u,l,f=0;f<n.dependencies.length;f++)if(u=n.dependencyInstantiations[f],!(u instanceof c)&&(l=u.linkRecord,l&&-1===s.indexOf(u)&&(a=l.error?l.error:j(e,u,l,o,i,l.setters?s:[])),a))return n.error=t(a,"Evaluating "+r.key);if(n.execute)if(n.setters)a=E(n.execute,te);else{var d={id:r.key},p=n.moduleObj;Object.defineProperty(d,"exports",{configurable:!0,set:function(e){p.default=e},get:function(){return p.default}}),a=E(n.execute,d.exports,[S(e,r.key,n.dependencies,n.dependencyInstantiations,o,i,s),d.exports,d])}if(a)return n.error=t(a,"Evaluating "+r.key);if(o[r.key]=r.module=new c(n.moduleObj),!n.setters){if(r.importerSetters)for(var f=0;f<r.importerSetters.length;f++)r.importerSetters[f](r.module);r.importerSetters=void 0}r.linkRecord=void 0}function E(e,t,r){try{e.apply(t,r)}catch(e){return e}}function x(e,t){for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function P(e){if(!ue&&!ce){var t=new Image;return void(t.src=e)}var r=document.createElement("link");ue?(r.rel="preload",r.as="script"):r.rel="prefetch",r.href=e,document.head.appendChild(r),document.head.removeChild(r)}function L(e,t,r){try{importScripts(e)}catch(e){r(e)}t()}function I(e,t,r,n,o){function i(){n(),a()}function s(t){a(),o(new Error("Fetching "+e))}function a(){for(var e=0;e<le.length;e++)if(le[e].err===s){le.splice(e,1);break}u.removeEventListener("load",i,!1),u.removeEventListener("error",s,!1),document.head.removeChild(u)}if(e=e.replace(/#/g,"%23"),ae)return L(e,n,o);var u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,t&&(u.crossOrigin=t),r&&(u.integrity=r),u.addEventListener("load",i,!1),u.addEventListener("error",s,!1),u.src=e,document.head.appendChild(u)}function U(e,t,r){var o=M(t,r);if(o){var i=t[o]+r.substr(o.length),s=n(i,z);return void 0!==s?s:e+i}return-1!==r.indexOf(":")?r:e+r}function T(e){var t=this.name;if(t.substr(0,e.length)===e&&(t.length===e.length||"/"===t[e.length]||"/"===e[e.length-1]||":"===e[e.length-1])){var r=e.split("/").length;r>this.len&&(this.match=e,this.len=r)}}function M(e,t){if(Object.hasOwnProperty.call(e,t))return t;var r={name:t,match:void 0,len:0};return Object.keys(e).forEach(T,r),r.match}function C(){f.call(this),this[oe]={baseURL:z,paths:{},map:{},submap:{},bundles:{},depCache:{},wasm:!1},this.registry.set("@empty",ne)}function N(e,t){var r=this[oe];if(t){var o=M(r.submap,t),i=r.submap[o],s=i&&M(i,e);if(s){var a=i[s]+e.substr(s.length);return n(a,o)||a}}var u=r.map,s=M(u,e);if(s){var a=u[s]+e.substr(s.length);return n(a,o)||a}}function _(e){return fetch(e).then(function(e){if(e.ok)return e.arrayBuffer();throw new Error("Fetch error: "+e.status+" "+e.statusText)}).then(function(e){var t=new Uint8Array(e);return 0===t[0]&&97===t[1]&&115===t[2]?WebAssembly.compile(t).then(function(e){var t=new WebAssembly.Instance(e,{});return new c(t.exports)}):new TextDecoder("utf-8").decode(t)})}function D(e,t){return new Promise(function(r,n){return I(e,"anonymous",void 0,function(){t(),r()},n)})}function A(e,t){var r=this[oe],n=r.wasm,o=r.bundles[e];if(o){var i=this,s=i.resolveSync(o,void 0);if(i.registry.has(s))return;return pe[s]||(pe[s]=D(s,t).then(function(){i.registry.has(s)||i.registry.set(s,i.newModule({})),delete pe[s]}))}var a=r.depCache[e];if(a)for(var u=n?fetch:P,c=0;c<a.length;c++)this.resolve(a[c],e).then(u);return n?_(e).then(function(r){return"string"!=typeof r?r:((0,eval)(r+"\n//# sourceURL="+e),void t())}):D(e,t)}var z,B="undefined"!=typeof window&&"undefined"!=typeof document,W="undefined"!=typeof process&&process.versions&&process.versions.node,F="undefined"!=typeof process&&"string"==typeof process.platform&&process.platform.match(/^win/),J="undefined"!=typeof self?self:global,q="undefined"!=typeof Symbol;if("undefined"!=typeof document&&document.getElementsByTagName){if(z=document.baseURI,!z){var G=document.getElementsByTagName("base");z=G[0]&&G[0].href||window.location.href}}else"undefined"!=typeof location&&(z=location.href);if(z)z=z.split("#")[0].split("?")[0],z=z.substr(0,z.lastIndexOf("/")+1);else{if("undefined"==typeof process||!process.cwd)throw new TypeError("No environment baseURI");z="file://"+(F?"/":"")+process.cwd(),F&&(z=z.replace(/\\/g,"/"))}"/"!==z[z.length-1]&&(z+="/");var H="_"==new Error(0,"_").fileName,K=Promise.resolve();i.prototype.constructor=i,i.prototype.import=function(e,r){if("string"!=typeof e)throw new TypeError("Loader import method must be passed a module key string");var n=this;return K.then(function(){return n[V](e,r)}).then(s).catch(function(n){throw t(n,"Loading "+e+(r?" from "+r:""))})};var Q=i.resolve=e("resolve"),V=i.resolveInstantiate=e("resolveInstantiate");i.prototype[V]=function(e,t){var r=this;return r.resolve(e,t).then(function(e){return r.registry.get(e)})},i.prototype.resolve=function(e,r){var n=this;return K.then(function(){return n[Q](e,r)}).then(a).catch(function(n){throw t(n,"Resolving "+e+(r?" to "+r:""))})};var X="undefined"!=typeof Symbol&&Symbol.iterator,Y=e("registry");X&&(u.prototype[Symbol.iterator]=function(){return this.entries()[Symbol.iterator]()},u.prototype.entries=function(){var e=this[Y];return o(Object.keys(e).map(function(t){return[t,e[t]]}))}),u.prototype.keys=function(){return o(Object.keys(this[Y]))},u.prototype.values=function(){var e=this[Y];return o(Object.keys(e).map(function(t){return e[t]}))},u.prototype.get=function(e){return this[Y][e]},u.prototype.set=function(e,t){if(!(t instanceof c))throw new Error("Registry must be set with an instance of Module Namespace");return this[Y][e]=t,this},u.prototype.has=function(e){return Object.hasOwnProperty.call(this[Y],e)},u.prototype.delete=function(e){return Object.hasOwnProperty.call(this[Y],e)?(delete this[Y][e],!0):!1};var Z=e("baseObject");c.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c.prototype,Symbol.toStringTag,{value:"Module"});var $=e("register-internal");f.prototype=Object.create(i.prototype),f.prototype.constructor=f;var ee=f.instantiate=e("instantiate");f.prototype[f.resolve=i.resolve]=function(e,t){return n(e,t||z)},f.prototype[ee]=function(e,t){},f.prototype[i.resolveInstantiate]=function(e,t){var r=this,n=this[$],o=r.registry[r.registry._registry];return p(r,e,t,o,n).then(function(e){return e instanceof c?e:e.module?e.module:e.linkRecord.linked?R(r,e,e.linkRecord,o,n,void 0):b(r,e,e.linkRecord,o,n,[e]).then(function(){return R(r,e,e.linkRecord,o,n,void 0)}).catch(function(t){throw w(r,e),t})})},f.prototype.register=function(e,t,r){var n=this[$];if(void 0===r)n.lastRegister=[e,t,!1];else{var o=n.records[e]||d(n,e,void 0);o.registration=[t,r,!1]}},f.prototype.registerDynamic=function(e,t,r){var n=this[$];if("string"!=typeof e)n.lastRegister=[e,"boolean"==typeof t?k(e,t,r):t,!0];else{var o=n.records[e]||d(n,e,void 0);o.registration=[t,"boolean"==typeof r?k(t,r,arguments[3]):r,!0]}},O.prototype.constructor=function(){throw new TypeError("Cannot subclass the contextual loader only Reflect.Loader.")},O.prototype.import=function(e){return this.loader.import(e,this.key)},O.prototype.resolve=function(e){return this.loader.resolve(e,this.key)},O.prototype.load=function(e){return this.loader.load(e,this.key)};var te={};Object.freeze&&Object.freeze(te);var re=Promise.resolve(),ne=new c({}),oe=e("loader-config"),ie=e("plain-resolve"),se=e("plain-resolve-sync"),ae="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,ue=!1,ce=!1;if(B&&function(){var e=document.createElement("link").relList;if(e&&e.supports){ce=!0;try{ue=e.supports("preload")}catch(e){}}}(),B){var le=[],fe=window.onerror;window.onerror=function(e,t){for(var r=0;r<le.length;r++)if(le[r].src===t)return void le[r].err(e);fe.apply(this,arguments)}}C.plainResolve=ie,C.plainResolveSync=se;var de=C.prototype=Object.create(f.prototype);de.constructor=C,de[C.resolve=f.resolve]=function(e,t){var r=n(e,t||z);if(void 0!==r)return Promise.resolve(r);var o=this;return re.then(function(){return o[ie](e,t)}).then(function(t){var r=o[oe];return U(r.baseURL,r.paths,t||e)})},de.newModule=function(e){return new c(e)},de.resolveSync=function(e,t){var r=n(e,t||z);if(void 0!==r)return r;r=this[se](e,t);var o=this[oe];return U(o.baseURL,o.paths,r||e)},de[ie]=de[se]=N,de[C.instantiate=f.instantiate]=A,de.config=function(e){var t=this[oe];if(e.baseURL&&(t.baseURL=n(e.baseURL,z)||n("./"+e.baseURL,z),"/"!==t.baseURL[t.baseURL.length-1]&&(t.baseURL+="/")),e.paths&&x(t.paths,e.paths),e.map){var r=e.map;for(var o in r)if(Object.hasOwnProperty.call(r,o)){var i=r[o];if("string"==typeof i)t.map[o]=i;else{var s=n(o,z)||U(t.baseURL,t.paths,o);x(t.submap[s]||(t.submap[s]={}),i)}}}for(var o in e)if(Object.hasOwnProperty.call(e,o)){var r=e[o];switch(o){case"baseURL":case"paths":case"map":break;case"bundles":for(var o in r)if(Object.hasOwnProperty.call(r,o))for(var i=r[o],a=0;a<i.length;a++)t.bundles[this.resolveSync(i[a],void 0)]=o;break;case"depCache":for(var o in r)if(Object.hasOwnProperty.call(r,o)){var s=this.resolveSync(o,void 0);t.depCache[s]=(t.depCache[s]||[]).concat(r[o])}break;case"wasm":t.wasm="undefined"!=typeof WebAssembly&&!!r;break;default:throw new TypeError('The SystemJS production build does not support the "'+o+'" configuration option.')}}},de.register=function(e,t,r){return"string"==typeof e&&(e=this.resolveSync(e,void 0)),f.prototype.register.call(this,e,t,r)},de.registerDynamic=function(e,t,r,n){return"string"==typeof e&&(e=this.resolveSync(e,void 0)),f.prototype.registerDynamic.call(this,e,t,r,n)};var pe={};C.prototype.version="0.20.0-rc.1 Production";var he=new C;if(B||ae)if(J.SystemJS=he,J.System){var ve=J.System.register;J.System.register=function(){ve&&ve.apply(this,arguments),he.register.apply(this,arguments)}}else J.System=he;"undefined"!=typeof module&&module.exports&&(module.exports=he)}();
//# sourceMappingURL=system-production.js.map