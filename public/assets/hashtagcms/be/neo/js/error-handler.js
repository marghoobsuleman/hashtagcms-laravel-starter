(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,a=void 0,a=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(i,"string"),"symbol"===e(a)?a:String(a)),o)}var i,a}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors="undefined"==typeof error_messages?[]:error_messages,this.init()}var r,n,o;return r=e,(n=[{key:"init",value:function(){var e=this;document.addEventListener("DOMContentLoaded",(function(){for(var t in e.errors)e.highlightField(t,e.errors[t][0]);e.focusFirst()}))}},{key:"highlightField",value:function(e,t){var r=e;if(!(e=document.getElementById(r)))return console.error("Could not find "+r),!1;e.classList.add("is-invalid");var n=document.createElement("div");n.classList.add("alert","alert-danger","mt-1"),-1!=r.indexOf("lang_")&&(t=t.replace("lang ","")),n.innerHTML=t,e.parentNode.insertBefore(n,e.nextSibling)}},{key:"focusFirst",value:function(){for(var e in this.errors){var t=document.getElementById(e);try{if(t){t.focus();break}}catch(e){console.log(e.message)}}}}])&&t(r.prototype,n),o&&t(r,o),Object.defineProperty(r,"prototype",{writable:!1}),e}())})();