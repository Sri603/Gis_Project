"use strict";(self.webpackChunkol=self.webpackChunkol||[]).push([[395],{165:function(r,n,e){function t(r,n){var e=r.length-n,t=0;do{for(var o=n;o>0;o--)r[t+n]+=r[t],t++;e-=n}while(e>0)}function o(r,n,e){for(var t=0,o=r.length,i=o/e;o>n;){for(var u=n;u>0;--u)r[t+n]+=r[t],++t;o-=n}for(var f=r.slice(),c=0;c<i;++c)for(var a=0;a<e;++a)r[e*c+a]=f[(e-a-1)*i+c]}function i(r,n,e,i,u,f){if(!n||1===n)return r;for(var c=0;c<u.length;++c){if(u[c]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(u[c]!==u[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var a=u[0]/8,s=2===f?1:u.length,l=0;l<i&&!(l*s*e*a>=r.byteLength);++l){var v=void 0;if(2===n){switch(u[0]){case 8:v=new Uint8Array(r,l*s*e*a,s*e*a);break;case 16:v=new Uint16Array(r,l*s*e*a,s*e*a/2);break;case 32:v=new Uint32Array(r,l*s*e*a,s*e*a/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(u[0]," bits per sample."))}t(v,s)}else 3===n&&o(v=new Uint8Array(r,l*s*e*a,s*e*a),s,a)}return r}function u(r,n,e,t,o,i,u){try{var f=r[i](u),c=f.value}catch(r){return void e(r)}f.done?n(c):Promise.resolve(c).then(t,o)}function f(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}e.d(n,{Z:function(){return c}});var c=function(){function r(){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r)}var n,e,t,o,c;return n=r,(e=[{key:"decode",value:(o=regeneratorRuntime.mark((function r(n,e){var t,o,u,f,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.decodeBlock(e);case 2:if(t=r.sent,1===(o=n.Predictor||1)){r.next=9;break}return u=!n.StripOffsets,f=u?n.TileWidth:n.ImageWidth,c=u?n.TileLength:n.RowsPerStrip||n.ImageLength,r.abrupt("return",i(t,o,f,c,n.BitsPerSample,n.PlanarConfiguration));case 9:return r.abrupt("return",t);case 10:case"end":return r.stop()}}),r,this)})),c=function(){var r=this,n=arguments;return new Promise((function(e,t){var i=o.apply(r,n);function f(r){u(i,e,t,f,c,"next",r)}function c(r){u(i,e,t,f,c,"throw",r)}f(void 0)}))},function(r,n){return c.apply(this,arguments)})}])&&f(n.prototype,e),t&&f(n,t),Object.defineProperty(n,"prototype",{writable:!1}),r}()},395:function(r,n,e){function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function o(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function i(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function u(r,n){return(u=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r})(r,n)}function f(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}();return function(){var e,t=a(r);if(n){var o=a(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return c(this,e)}}function c(r,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}function a(r){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}e.r(n),e.d(n,{default:function(){return s}});var s=function(r){!function(r,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(n&&n.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),n&&u(r,n)}(a,r);var n,e,t,c=f(a);function a(){return o(this,a),c.apply(this,arguments)}return n=a,(e=[{key:"decodeBlock",value:function(r){for(var n=new DataView(r),e=[],t=0;t<r.byteLength;++t){var o=n.getInt8(t);if(o<0){var i=n.getUint8(t+1);o=-o;for(var u=0;u<=o;++u)e.push(i);t+=1}else{for(var f=0;f<=o;++f)e.push(n.getUint8(t+f+1));t+=o+1}}return new Uint8Array(e).buffer}}])&&i(n.prototype,e),t&&i(n,t),Object.defineProperty(n,"prototype",{writable:!1}),a}(e(165).Z)}}]);
//# sourceMappingURL=395.ol.js.map