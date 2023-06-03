"use strict";(self.webpackChunkol=self.webpackChunkol||[]).push([[629],{165:function(e,n,r){function t(e,n){var r=e.length-n,t=0;do{for(var o=n;o>0;o--)e[t+n]+=e[t],t++;r-=n}while(r>0)}function o(e,n,r){for(var t=0,o=e.length,i=o/r;o>n;){for(var u=n;u>0;--u)e[t+n]+=e[t],++t;o-=n}for(var a=e.slice(),c=0;c<i;++c)for(var f=0;f<r;++f)e[r*c+f]=a[(r-f-1)*i+c]}function i(e,n,r,i,u,a){if(!n||1===n)return e;for(var c=0;c<u.length;++c){if(u[c]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(u[c]!==u[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var f=u[0]/8,s=2===a?1:u.length,l=0;l<i&&!(l*s*r*f>=e.byteLength);++l){var d=void 0;if(2===n){switch(u[0]){case 8:d=new Uint8Array(e,l*s*r*f,s*r*f);break;case 16:d=new Uint16Array(e,l*s*r*f,s*r*f/2);break;case 32:d=new Uint32Array(e,l*s*r*f,s*r*f/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(u[0]," bits per sample."))}t(d,s)}else 3===n&&o(d=new Uint8Array(e,l*s*r*f,s*r*f),s,f)}return e}function u(e,n,r,t,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void r(e)}a.done?n(c):Promise.resolve(c).then(t,o)}function a(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}r.d(n,{Z:function(){return c}});var c=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,t,o,c;return n=e,(r=[{key:"decode",value:(o=regeneratorRuntime.mark((function e(n,r){var t,o,u,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.decodeBlock(r);case 2:if(t=e.sent,1===(o=n.Predictor||1)){e.next=9;break}return u=!n.StripOffsets,a=u?n.TileWidth:n.ImageWidth,c=u?n.TileLength:n.RowsPerStrip||n.ImageLength,e.abrupt("return",i(t,o,a,c,n.BitsPerSample,n.PlanarConfiguration));case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,n=arguments;return new Promise((function(r,t){var i=o.apply(e,n);function a(e){u(i,r,t,a,c,"next",e)}function c(e){u(i,r,t,a,c,"throw",e)}a(void 0)}))},function(e,n){return c.apply(this,arguments)})}])&&a(n.prototype,r),t&&a(n,t),Object.defineProperty(n,"prototype",{writable:!1}),e}()},629:function(e,n,r){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,n,r,t,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void r(e)}a.done?n(c):Promise.resolve(c).then(t,o)}function i(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function a(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=f(e);if(n){var o=f(this).constructor;r=Reflect.construct(t,arguments,o)}else r=t.apply(this,arguments);return c(this,r)}}function c(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.r(n),r.d(n,{default:function(){return s}});var s=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&u(e,n)}(l,e);var n,r,t,c,f,s=a(l);function l(){var e;if(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),e=s.call(this),"undefined"==typeof createImageBitmap)throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if("undefined"==typeof document&&"undefined"==typeof OffscreenCanvas)throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");return e}return n=l,(r=[{key:"decode",value:(c=regeneratorRuntime.mark((function e(n,r){var t,o,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Blob([r]),e.next=3,createImageBitmap(t);case 3:return o=e.sent,"undefined"!=typeof document?((i=document.createElement("canvas")).width=o.width,i.height=o.height):i=new OffscreenCanvas(o.width,o.height),(u=i.getContext("2d")).drawImage(o,0,0),e.abrupt("return",u.getImageData(0,0,o.width,o.height).data.buffer);case 8:case"end":return e.stop()}}),e)})),f=function(){var e=this,n=arguments;return new Promise((function(r,t){var i=c.apply(e,n);function u(e){o(i,r,t,u,a,"next",e)}function a(e){o(i,r,t,u,a,"throw",e)}u(void 0)}))},function(e,n){return f.apply(this,arguments)})}])&&i(n.prototype,r),t&&i(n,t),Object.defineProperty(n,"prototype",{writable:!1}),l}(r(165).Z)}}]);
//# sourceMappingURL=629.ol.js.map