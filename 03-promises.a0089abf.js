!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var u=r("6JpON"),i={formInput:document.querySelector(".form"),createtBtn:document.querySelector("button")},a={};function l(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}i.formInput.addEventListener("input",(function(e){a[e.target.name]=Number(e.target.value)})),console.log(i.formInput),i.createtBtn.addEventListener("click",(function(t){t.preventDefault(),i.formInput.delay.value="",i.formInput.step.value="",i.formInput.amount.value="";for(var n=1;n<=a.amount;n+=1)l(n,a.delay).then((function(t){var n=t.position,o=t.delay;return e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;return e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),a.delay+=a.step}))}();
//# sourceMappingURL=03-promises.a0089abf.js.map
