!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=i);var r=i("6JpON");function a(n,t){var o=Math.random()>.3;new Promise((function(e,i){setTimeout((function(){o?e({position:n,delay:t}):i({position:n,delay:t})}),t)})).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget.elements,t=parseInt(n.delay.value),o=parseInt(n.step.value),i=parseInt(n.amount.value),r=0;r<i;r+=1)a(r+1,t+o*r)}))}();
//# sourceMappingURL=03-promises.3ecf2c20.js.map
