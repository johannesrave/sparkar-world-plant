!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=14)}([function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return o})),
/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
function(t){if(!t.WeakMap){var e=Object.prototype.hasOwnProperty,r=function(t,e,r){Object.defineProperty?Object.defineProperty(t,e,{configurable:!0,writable:!0,value:r}):t[e]=r};t.WeakMap=function(){function t(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id",a("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(t,r){if(!i(t)||!e.call(t,"_id"))throw new TypeError(r+" method called on incompatible receiver "+typeof t)}function a(t){return t+"_"+s()+"."+s()}function s(){return Math.random().toString().substring(2)}return r(t.prototype,"delete",(function(t){if(n(this,"delete"),!i(t))return!1;var e=t[this._id];return!(!e||e[0]!==t)&&(delete t[this._id],!0)})),r(t.prototype,"get",(function(t){if(n(this,"get"),i(t)){var e=t[this._id];return e&&e[0]===t?e[1]:void 0}})),r(t.prototype,"has",(function(t){if(n(this,"has"),!i(t))return!1;var e=t[this._id];return!(!e||e[0]!==t)})),r(t.prototype,"set",(function(t,e){if(n(this,"set"),!i(t))throw new TypeError("Invalid value used as weak map key");var a=t[this._id];return a&&a[0]===t?(a[1]=e,this):(r(t,this._id,[t,e]),this)})),r(t,"_polyfill",!0),t}()}function i(t){return Object(t)===t}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:void 0);const i=r(12),n=r(3),a=r(9),s=r(4),o={linear:(t,e)=>i.samplers.linear(t,e),easeInQuad:(t,e)=>i.samplers.easeInQuad(t,e),easeOutQuad:(t,e)=>i.samplers.easeOutQuad(t,e),easeInOutQuad:(t,e)=>i.samplers.easeInOutQuad(t,e),easeInCubic:(t,e)=>i.samplers.easeInCubic(t,e),easeOutCubic:(t,e)=>i.samplers.easeOutCubic(t,e),easeInOutCubic:(t,e)=>i.samplers.easeInOutCubic(t,e),easeInQuart:(t,e)=>i.samplers.easeInQuart(t,e),easeOutQuart:(t,e)=>i.samplers.easeOutQuart(t,e),easeInOutQuart:(t,e)=>i.samplers.easeInOutQuart(t,e),easeInQuint:(t,e)=>i.samplers.easeInQuint(t,e),easeOutQuint:(t,e)=>i.samplers.easeOutQuint(t,e),easeInOutQuint:(t,e)=>i.samplers.easeInOutQuint(t,e),easeInSine:(t,e)=>i.samplers.easeInSine(t,e),easeOutSine:(t,e)=>i.samplers.easeOutSine(t,e),easeInOutSine:(t,e)=>i.samplers.easeInOutSine(t,e),easeInExpo:(t,e)=>i.samplers.easeInExpo(t,e),easeOutExpo:(t,e)=>i.samplers.easeOutExpo(t,e),easeInOutExpo:(t,e)=>i.samplers.easeInOutExpo(t,e),easeInCirc:(t,e)=>i.samplers.easeInCirc(t,e),easeOutCirc:(t,e)=>i.samplers.easeOutCirc(t,e),easeInOutCirc:(t,e)=>i.samplers.easeInOutCirc(t,e),easeInBack:(t,e)=>i.samplers.easeInBack(t,e),easeOutBack:(t,e)=>i.samplers.easeOutBack(t,e),easeInOutBack:(t,e)=>i.samplers.easeInOutBack(t,e),easeInElastic:(t,e)=>i.samplers.easeInElastic(t,e),easeOutElastic:(t,e)=>i.samplers.easeOutElastic(t,e),easeInOutElastic:(t,e)=>i.samplers.easeInOutElastic(t,e),easeInBounce:(t,e)=>i.samplers.easeInBounce(t,e),easeOutBounce:(t,e)=>i.samplers.easeOutBounce(t,e),easeInOutBounce:(t,e)=>i.samplers.easeInOutBounce(t,e),punch:(t,e)=>i.samplers.polyline({keyframes:[t+e/5*4,t-e/5*3,t+e/5*2,t-e/5*1,t],knots:[0,1,2,3,4]})},c=Math.PI/180,u=function(){const t=new WeakMap;return e=>{let r=t.get(e);return r||(r={},t.set(e,r)),r}}(),l=Symbol("cancellationTweener"),h=Symbol("cancellationFunction");class p{constructor(t,e,r){u(this).duration=r,u(this).start=[],u(this).complete=[],u(this).update=[],u(this).loop=[],u(this).sampler=o.linear("function"==typeof t.pinLastValue?t.pinLastValue():t,"function"==typeof e.pinLastValue?e.pinLastValue():e)}static newClipCancellation(t){let e={};return e.value=t,e.cancel=()=>e[h](),e[l]={},e[h]=()=>{},e}static To(t,e,r,i){return new p(t,r,i).bind(e)}static combine(...t){return t=t.flat(),e=>Promise.all(t.map(t=>t())).then(t=>Promise.resolve(null!=e?e:t))}static concat(...t){return t=t.flat(),e=>t.slice(1).reduce((t,e)=>t.then(e),t[0](e))}setMirror(t=!0){return u(this).isMirror=t,this}setLoops(t=1/0){return u(this).loopCount=t,this}setBegin(t){return u(this).sampler.begin="function"==typeof t.pinLastValue?t.pinLastValue():t,this}setEnd(t){return u(this).sampler.end="function"==typeof t.pinLastValue?t.pinLastValue():t,this}setEase(t){return u(this).sampler=t(u(this).sampler.begin,u(this).sampler.end),this}setDelay(t){return u(this).delay=t,this}bind(t){return u(this).update.push(t),this}onLoop(t){return u(this).loop.push(t),this}onStart(t){return u(this).start.push(t),this}onComplete(t){return u(this).complete.push(t),this}onStartVisible(t){return u(this).start.push(()=>t.hidden=n.val(!1)),this}onAnimatingVisibleOnly(t){return this.onStartVisible(t),this.onCompleteHidden(t),this}onStartHidden(t){return u(this).start.push(()=>t.hidden=n.val(!0)),this}onCompleteVisible(t){return u(this).complete.push(()=>t.hidden=n.val(!1)),this}onCompleteHidden(t){return u(this).complete.push(()=>t.hidden=n.val(!0)),this}onCompleteResetPosition(t){const e=n.pack3(t.transform.x.pinLastValue(),t.transform.y.pinLastValue(),t.transform.z.pinLastValue());return u(this).complete.push(()=>t.transform.position=e),this}onCompleteResetRotation(t){const e={x:t.transform.rotationX.pinLastValue(),y:t.transform.rotationY.pinLastValue(),z:t.transform.rotationZ.pinLastValue()};return u(this).complete.push(()=>{t.transform.rotationX=e.x,t.transform.rotationY=e.y,t.transform.rotationZ=e.z}),this}onCompleteResetScale(t){const e=n.scale(t.transform.scaleX.pinLastValue(),t.transform.scaleY.pinLastValue(),t.transform.scaleZ.pinLastValue());return u(this).complete.push(()=>t.transform.scale=e),this}onCompleteResetOpacity(t){const e=t.material.opacity.pinLastValue();return u(this).complete.push(()=>t.material.opacity=e),this}apply(t=!0){return function(t,e){const r=i.timeDriver({durationMilliseconds:t.duration,loopCount:t.loopCount,mirror:t.isMirror});r.onCompleted().subscribe(()=>d(t.complete)),r.onAfterIteration().subscribe(e=>d(t.loop,e));const n=i.animate(r,t.sampler),a=new f(r,n,t.delay,t.start,t.update);e&&a.start();return a}(u(this),t)}get clip(){u(this).loopCount==1/0&&s.log("Please note that set infinite loop will stuck the clips chain.");const t=this.apply(!1);return u(t).getPromise(t=>new Promise((e,r)=>{t?t[h]?(t[h]=()=>{t[l].stop(),r({message:"canceled",value:t.value,lastValue:t[l].scalar.pinLastValue(),lastTweener:t[l]})},t.value=t.value?t.value:u(this).sampler.end,u(this).complete.push(()=>e(t))):t.value?u(this).complete.push(()=>e(t)):u(this).complete.push(()=>e({value:u(this).sampler.end})):u(this).complete.push(()=>e({value:u(this).sampler.end}))}))}get log(){return u(this)}get scalar(){return this.apply(!0).scalar}get scale(){return this.apply(!0).scale}get pack2(){return this.apply(!0).pack2}get pack3(){return this.apply(!0).pack3}get pack4(){return this.apply(!0).pack4}get rotation(){return this.apply(!0).rotation}}class f{constructor(t,e,r,i,n){u(this).delay=r,u(this).animate=e,u(this).driver=t,u(this).onStart=i,u(this).onUpdate=n,u(this).hasBinded=!1,u(this).getPromise=t=>e=>(e&&e[l]&&(e[l]=this),this.replay(),t(e))}replay(){this.reset(),this.start()}reset(){u(this).driver.reset()}reverse(){u(this).driver.reverse()}start(){const t=()=>{d(u(this).onStart),u(this).hasBinded||(d(u(this).onUpdate,this),u(this).hasBinded=!0),u(this).driver.start()};null!=u(this).delay?a.setTimeout(t,u(this).delay):t()}stop(){u(this).driver.stop()}get isRunning(){return u(this).driver.isRunning()}get scalar(){return u(this).animate}get scale(){const t=this.scalar;return n.scale(t,t,t)}get pack2(){const t=this.scalar;return n.pack2(t,t)}get pack3(){const t=this.scalar;return n.pack3(t,t,t)}get pack4(){const t=this.scalar;return n.pack4(t,t,t,t)}get rotation(){return this.scalar.mul(c)}}function d(t,e){for(let r=0;r<t.length;r++)t[r](e)}}).call(this,r(10))},function(t,e,r){"use strict";r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return u}));var i=r(0),n=r(17),a=r(18);async function s(t,e=0){const r=new i.b(0,t.transform.scaleX.pinLastValue(),2e3).setEase(i.a.easeInOutSine).onStartVisible(t).setDelay(300*e).bind(e=>t.transform.scale=e.scale).clip;await r()}async function o(t){await Promise.all(t.map(s))}async function c(t,e,r){const s=Math.min(t.length,e.length);for(let o=0;o<s;o++){const s=e[o],c=t[o];s.worldTransform.position=c.worldTransform.position,-1!==r.indexOf("x")&&(s.transform.rotationX=c.transform.rotationX.add(Object(a.a)(Object(n.a)(-45,45)))),-1!==r.indexOf("y")&&(s.transform.rotationY=c.transform.rotationY.add(Object(a.a)(Object(n.a)(-45,45)))),-1!==r.indexOf("z")&&(s.transform.rotationZ=c.transform.rotationZ.add(Object(a.a)(Object(n.a)(-45,45))));const u=Object(n.a)(1.2,1.5);s.transform.scale=new i.b(0,u,1e3).setDelay(80*o).setEase(i.a.easeOutQuad).scale,s.hidden=!1}}async function u(t,e,r=!0){const s=Math.min(t.length,e.length);let o=[];for(let c=0;c<s;c++){const s=e[c],u=t[c];s.worldTransform.position=u.worldTransform.position,r&&(s.transform.rotationX=u.transform.rotationX.add(Object(a.a)(Object(n.a)(0,30))),s.transform.rotationY=u.transform.rotationY.add(Object(a.a)(Object(n.a)(0,30))),s.transform.rotationZ=u.transform.rotationZ);const l=new i.b(0,1,1e3).bind(t=>s.transform.scale=t.scale).onStartVisible(s).setDelay(80*c).setEase(i.a.easeOutSine).clip;o.push(l)}await i.b.combine(o)()}},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r(4),r(3);function i(t){t.hidden=!0}function n(t){return Promise.resolve(t.filter(t=>t.hidden))}function a(t){return Array.isArray(t)?n(t).then(t=>(t.forEach(i),t)):(i(t),Promise.resolve(t))}},function(t,e){t.exports=require("Reactive")},function(t,e){t.exports=require("Diagnostics")},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(3);function i(t,e){const r=t.subscribe(t=>{r.unsubscribe(),e(t)});return r}},function(t,e){t.exports=require("Scene")},function(t,e){t.exports=require("TouchGestures")},function(t,e,r){"use strict";r.r(e),r.d(e,"rain",(function(){return p}));var i=r(0);const n=r(12),a=r(9),s=r(6),o=r(4),c=r(3);class u{constructor(){this.h=n.samplers.constant(1),this.s=n.samplers.constant(1),this.v=n.samplers.constant(1),this.a=n.samplers.constant(1)}static modifyHSVA(t,e){t.hsvaColorModulationModifier=n.samplers.HSVA([e.h,e.s,e.v,e.a])}}class l{constructor(){this.hue=1,this.saturation=1,this.value=1,this.alpha=1,this.hueDelta=1,this.saturationDelta=1,this.valueDelta=1,this.alphaDelta=1}static setHSVA(t,e){const r=c.HSVA(e.hue,e.saturation,e.value,e.alpha),i=c.HSVA(e.hueDelta,e.saturationDelta,e.valueDelta,e.alphaDelta);t.colorModulationHSVA=r,t.colorModulationHSVADelta=i}}class h{constructor(t){null!=t&&(this.emitter=t,this.colorModifier=new u,this.color=new l,this.burstSubscription=void 0)}modifyHue(t,e,r){return this.colorModifier.h=r(t,e),u.modifyHSVA(this.emitter,this.colorModifier),this}modifySaturation(t,e,r){return this.colorModifier.s=r(t,e),u.modifyHSVA(this.emitter,this.colorModifier),this}modifyValue(t,e,r){return this.colorModifier.v=r(t,e),u.modifyHSVA(this.emitter,this.colorModifier),this}modifyAlpha(t,e,r){return this.colorModifier.a=r(t,e),u.modifyHSVA(this.emitter,this.colorModifier),this}modifyScale(t,e,r){return this.emitter.sizeModifier=r(t,e),this}setScaleout(t=i.a.easeInCubic){return 0!=this.emitter.scaleDelta.pinLastValue()&&o.log(`The particle "${this.emitter.name}" will not scale out perfectly if its "scale delta" is not "0"`),this.modifyScale(0,this.emitter.scale.mul(this.emitter.scaleDelta.add(1)).neg().pinLastValue(),t),this}setFadeout(t=i.a.easeInCubic){return this.modifyAlpha(1,0,t),this}burst(t=200,e=100){return this.burstSubscription&&(this.burstSubscription.unsubscribe(),this.cancellation&&this.cancellation()),new Promise((r,i)=>{this.start(t),this.burstSubscription=a.setTimeout(()=>{this.stop(),r()},e),this.cancellation=()=>{i("you called burst when bursting, it is fine, just a hint")}})}setHue(t,e=0){return this.color.hue=t,this.color.hueDelta=e,l.setHSVA(this.emitter,this.color),this}setSaturation(t,e=0){return this.color.saturation=t,this.color.saturationDelta=e,l.setHSVA(this.emitter,this.color),this}setValue(t,e=0){return this.color.value=t,this.color.valueDelta=e,l.setHSVA(this.emitter,this.color),this}setAlpha(t,e=0){return this.color.alpha=t,this.color.alphaDelta=e,l.setHSVA(this.emitter,this.color),this}start(t){return this.burstSubscription&&this.burstSubscription.unsubscribe(),this.emitter.birthrate=t,this}stop(){return this.burstSubscription&&this.burstSubscription.unsubscribe(),this.emitter.birthrate=0,this}}h.findByPath=class{constructor(t){this.emittersPromise=s.root.findByPath(t),this.particlesPromise=this.emittersPromise.then(t=>this.particles=t.map(t=>new h(t)))}modifyHue(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(i=>i.modifyHue(t,e,r))}),this}modifySaturation(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(i=>i.modifySaturation(t,e,r))}),this}modifyValue(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(i=>i.modifyValue(t,e,r))}),this}modifyAlpha(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(i=>i.modifyAlpha(t,e,r))}),this}modifyScale(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(i=>i.modifyScale(t,e,r))}),this}setScaleout(t=i.a.easeInCubic){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.setScaleout(t))}),this}setFadeout(t=i.a.easeInCubic){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.setFadeout(t))}),this}burst(t=200,e=100){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.burst(t,e))}),this}setHue(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setHue(t,e))}),this}setSaturation(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setSaturation(t,e))}),this}setValue(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setValue(t,e))}),this}setAlpha(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setAlpha(t,e))}),this}start(t){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.start(t))}),this}stop(){return this.particlesPromise.then(()=>{this.particles.forEach(t=>t.stop())}),this}},h.findAll=class{constructor(t,e=!0){this.emittersPromise=s.root.findAll(t,{recursive:e}),this.particlesPromise=this.emittersPromise.then(t=>this.particles=t.map(t=>new h(t)))}modifyHue(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(i=>i.modifyHue(t,e,r))}),this}modifySaturation(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(i=>i.modifySaturation(t,e,r))}),this}modifyValue(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(i=>i.modifyValue(t,e,r))}),this}modifyAlpha(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(i=>i.modifyAlpha(t,e,r))}),this}modifyScale(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(i=>i.modifyScale(t,e,r))}),this}setScaleout(t=i.a.easeInCubic){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.setScaleout(t))}),this}setFadeout(t=i.a.easeInCubic){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.setFadeout(t))}),this}burst(t=200,e=100){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.burst(t,e))}),this}setHue(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setHue(t,e))}),this}setSaturation(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setSaturation(t,e))}),this}setValue(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setValue(t,e))}),this}setAlpha(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setAlpha(t,e))}),this}start(t){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.start(t))}),this}stop(){return this.particlesPromise.then(()=>{this.particles.forEach(t=>t.stop())}),this}},h.findFirst=class{constructor(t){this.emitterPromise=s.root.findFirst(t),this.particlePromise=this.emitterPromise.then(t=>this.particle=new h(t))}modifyHue(t,e,r){return this.particlePromise.then(()=>{this.particle.modifyHue(t,e,r)}),this}modifySaturation(t,e,r){return this.particlePromise.then(()=>{this.particle.modifySaturation(t,e,r)}),this}modifyValue(t,e,r){return this.particlePromise.then(()=>{this.particle.modifyValue(t,e,r)}),this}modifyAlpha(t,e,r){return this.particlePromise.then(()=>{this.particle.modifyAlpha(t,e,r)}),this}modifyScale(t,e,r){return this.particlePromise.then(()=>{this.particle.modifyScale(t,e,r)}),this}setScaleout(t=i.a.easeInCubic){return this.particlePromise.then(()=>{this.particle.setScaleout(t)}),this}setFadeout(t=i.a.easeInCubic){return this.particlePromise.then(()=>{this.particle.setFadeout(t)}),this}burst(t=200,e=100){return this.particlePromise.then(()=>{this.particle.burst(t,e)}),this}setHue(t,e=0){return this.particlePromise.then(()=>{this.particle.setHue(t,e)}),this}setSaturation(t,e=0){return this.particlePromise.then(()=>{this.particle.setSaturation(t,e)}),this}setValue(t,e=0){return this.particlePromise.then(()=>{this.particle.setValue(t,e)}),this}setAlpha(t,e=0){return this.particlePromise.then(()=>{this.particle.setAlpha(t,e)}),this}start(t){return this.particlePromise.then(()=>{this.particle.start(t)}),this}stop(){return this.particlePromise.then(()=>{this.particle.stop()}),this}};r(4),r(3),r(9);r(6);async function p(){}},function(t,e){t.exports=require("Time")},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){var r,i,n=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(t){if(r===setTimeout)return setTimeout(t,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(t){r=a}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(t){i=s}}();var c,u=[],l=!1,h=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var t=o(p);l=!0;for(var e=u.length;e;){for(c=u,u=[];++h<e;)c&&c[h].run();h=-1,e=u.length}c=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function m(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new d(t,e)),1!==u.length||l||o(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=m,n.addListener=m,n.once=m,n.off=m,n.removeListener=m,n.removeAllListeners=m,n.emit=m,n.prependListener=m,n.prependOnceListener=m,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(t,e){t.exports=require("Animation")},function(t,e){t.exports=require("CameraInfo")},function(t,e,r){r(15),t.exports=r(27)},function(t,e,r){(function(e,r){!function(e){"use strict";var i=Object.prototype.hasOwnProperty,n="function"==typeof Symbol&&Symbol.iterator||"@@iterator",a="object"==typeof t,s=e.regeneratorRuntime;if(s)a&&(t.exports=s);else{(s=e.regeneratorRuntime=a?t.exports:{}).wrap=u;var o={},c=f.prototype=h.prototype;p.prototype=c.constructor=f,f.constructor=p,p.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):t.__proto__=f,t.prototype=Object.create(c),t},s.awrap=function(t){return new m(t)},d(y.prototype),s.async=function(t,e,r,i){var n=new y(u(t,e,r,i));return s.isGeneratorFunction(e)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},d(c),c[n]=function(){return this},c.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var i=e.pop();if(i in t)return r.value=i,r.done=!1,r}return r.done=!0,r}},s.values=g,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=void 0,this.done=!1,this.delegate=null,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,!!i}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var o=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(o&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?this.next=a.finallyLoc:this.complete(s),o},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),o}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var i=r.completion;if("throw"===i.type){var n=i.arg;w(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:g(t),resultName:e,nextLoc:r},o}}}function u(t,e,r,i){var n=Object.create((e||h).prototype),a=new v(i||[]);return n._invoke=function(t,e,r){var i="suspendedStart";return function(n,a){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===n)throw a;return P()}for(;;){var s=r.delegate;if(s){if("return"===n||"throw"===n&&void 0===s.iterator[n]){r.delegate=null;var c=s.iterator.return;if(c)if("throw"===(u=l(c,s.iterator,a)).type){n="throw",a=u.arg;continue}if("return"===n)continue}var u;if("throw"===(u=l(s.iterator[n],s.iterator,a)).type){r.delegate=null,n="throw",a=u.arg;continue}if(n="next",a=void 0,!(h=u.arg).done)return i="suspendedYield",h;r[s.resultName]=h.value,r.next=s.nextLoc,r.delegate=null}if("next"===n)r._sent=a,r.sent="suspendedYield"===i?a:void 0;else if("throw"===n){if("suspendedStart"===i)throw i="completed",a;r.dispatchException(a)&&(n="next",a=void 0)}else"return"===n&&r.abrupt("return",a);if(i="executing","normal"===(u=l(t,e,r)).type){i=r.done?"completed":"suspendedYield";var h={value:u.arg,done:r.done};if(u.arg!==o)return h;r.delegate&&"next"===n&&(a=void 0)}else"throw"===u.type&&(i="completed",n="throw",a=u.arg)}}}(t,r,a),n}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function h(){}function p(){}function f(){}function d(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function m(t){this.arg=t}function y(t){function e(e,r){var i=t[e](r),s=i.value;return s instanceof m?Promise.resolve(s.arg).then(n,a):Promise.resolve(s).then((function(t){return i.value=t,i}))}"object"==typeof r&&r.domain&&(e=r.domain.bind(e));var i,n=e.bind(t,"next"),a=e.bind(t,"throw");e.bind(t,"return");this._invoke=function(t,r){function n(){return e(t,r)}return i=i?i.then(n,n):new Promise((function(t){t(n())}))}}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function g(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,r(10),r(11))},function(t,e){t.exports=require("Shaders")},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));const i=r(22),n=()=>i.random();function a(t,e){return n()*(Math.max(t,e)-Math.min(t,e))+Math.min(t,e)}},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));const i=r(3);function n(t,e,r,n,a){return t="number"==typeof t?i.val(t):t,i.toRange(t.fromRange(e,r),n,a)}function a(t){return n(t,-180,180,-Math.PI,Math.PI)}},function(t,e,r){"use strict";r.r(e),r.d(e,"addPlayCount",(function(){return s})),r.d(e,"resetPlayCount",(function(){return o})),r.d(e,"getPlayTimes",(function(){return u})),r.d(e,"reset",(function(){return l}));const i=r(20),n=(r(4),r(3),i.userScope),a={count:0};async function s(){const t=await c();t.count++,await n.set("data",{data:t})}async function o(){const t=await c();t.count=0,await n.set("data",{data:t})}async function c(){let t;try{t=await n.get("data"),null==t&&(t={data:a})}catch(e){t={data:a}}return t.data}async function u(){return(await c()).count}async function l(){}},function(t,e){t.exports=require("Persistence")},function(t,e,r){"use strict";r.r(e),r.d(e,"on",(function(){return h}));var i=r(1),n=r(5),a=r(2),s=r(17),o=r(18);const c=r(6),u=r(7),l=(r(3),r(4),r(8));async function h(t){const e=await c.root.findFirst("orchid");e.transform.position=t,e.transform.rotationY=Object(o.a)(Object(s.a)(0,360)),e.hidden=!1;const r=await e.findFirst("stem_pivot"),h=await e.findFirst("pot"),p=await e.findByPath("flowers_pool/*").then(a.a),f=await e.findByPath("leaves_pool/*").then(a.a),d=await e.findByPath("**/flower_grow_point*"),m=await e.findByPath("**/leaf_grow_point*");r.hidden=!0,Object(n.a)(u.onTap(h),async()=>{await l.rain(),await Object(i.c)(r),await Object(i.a)(d,p,"xz"),await Object(i.b)(m,f,!0)})}},function(t,e){t.exports=require("Random")},function(t,e,r){"use strict";r.r(e),r.d(e,"on",(function(){return h}));var i=r(1),n=r(5),a=r(2),s=r(17),o=r(18);const c=r(6),u=r(7),l=(r(3),r(4),r(8));async function h(t){const e=await c.root.findFirst("lily");e.transform.position=t,e.transform.rotationY=Object(o.a)(Object(s.a)(0,360)),e.hidden=!1;const r=await e.findFirst("stem_pivot"),h=await e.findFirst("pot"),p=await e.findByPath("flowers_pool/*").then(a.a),f=await e.findByPath("leaves_pool/*").then(a.a),d=await e.findByPath("**/flower_grow_point*"),m=await e.findByPath("**/leaf_grow_point*");r.hidden=!0,Object(n.a)(u.onTap(h),async()=>{await l.rain(),await Object(i.c)(r),await Object(i.a)(d,p,"xz"),await Object(i.b)(m,f,!0)})}},function(t,e,r){"use strict";r.r(e),r.d(e,"on",(function(){return h}));var i=r(1),n=r(5),a=r(2),s=r(17),o=r(18);const c=r(6),u=r(7),l=(r(3),r(4),r(8));async function h(t){const e=await c.root.findFirst("rose");e.transform.position=t,e.transform.rotationY=Object(o.a)(Object(s.a)(0,360)),e.hidden=!1;const r=await e.findFirst("stem_pivot"),h=await e.findFirst("pot"),p=await e.findByPath("flowers_pool/*").then(a.a),f=await e.findByPath("leaves_pool/*").then(a.a),d=await e.findByPath("**/flower_grow_point*"),m=await e.findByPath("**/leaf_grow_point*");r.hidden=!0,Object(n.a)(u.onTap(h),async()=>{await l.rain(),await Object(i.c)(r),await Object(i.a)(d,p,"xz"),await Object(i.b)(m,f,!0)})}},function(t,e,r){"use strict";r.r(e),r.d(e,"on",(function(){return h}));var i=r(1),n=r(5),a=r(2),s=r(17),o=r(18);const c=r(6),u=r(7),l=(r(3),r(4),r(8));async function h(t){const e=await c.root.findFirst("daisy");e.transform.position=t,e.transform.rotationY=Object(o.a)(Object(s.a)(0,360)),e.hidden=!1;const r=await e.findFirst("pot"),h=await e.findByPath("**/stem_pivot*").then(a.a),p=await e.findByPath("flowers_pool/*").then(a.a),f=await e.findByPath("leaves_pool/*").then(a.a),d=await e.findByPath("**/flower_grow_point*"),m=await e.findByPath("**/leaf_grow_point*");Object(n.a)(u.onTap(r),async()=>{await l.rain(),await Object(i.d)(h),await Object(i.a)(d,p,"xz"),await Object(i.b)(m,f,!0)})}},function(t,e,r){"use strict";r.r(e),r.d(e,"on",(function(){return h}));var i=r(1),n=r(5),a=r(2),s=r(17),o=r(18);const c=r(6),u=r(7),l=r(8);async function h(t){const e=await c.root.findFirst("tulip");e.transform.position=t,e.transform.rotationY=Object(o.a)(Object(s.a)(0,360)),e.hidden=!1;const r=await e.findFirst("pot"),h=await e.findByPath("**/stem_pivot*").then(a.a),p=await e.findByPath("flowers_pool/*").then(a.a),f=await e.findByPath("leaves_pool/*").then(a.a),d=await e.findByPath("**/flower_grow_point*"),m=await e.findByPath("**/leaf_grow_point*");Object(n.a)(u.onTap(r),async()=>{await l.rain(),await Object(i.d)(h),await Object(i.a)(d,p,"xz"),await Object(i.b)(m,f,!0)})}},function(t,e,r){"use strict";r.r(e);var i=r(0);let n=function(){const t=new WeakMap;return e=>{let r=t.get(e);return r||(r={},t.set(e,r)),r}}();class a{constructor(t){n(this).callbackGetter=t}subscribe(t){return n(this).callbackGetter().push(t),new s(n(this).callbackGetter,t)}}class s{constructor(t,e){n(this).callbackGetter=t,n(this).lastEvent=e}unsubscribe(){!function(t,e){var r=t.indexOf(e);r>-1&&t.splice(r,1)}(n(this).callbackGetter(),n(this).lastEvent)}}function o(t,...e){t.forEach(t=>t.apply(null,e))}const c=r(6),u=r(7),l=r(16),h=r(3);r(4);let p=[],f=[];const d=new class{async init(){const t=await c.root.findFirst("planeTracker0"),e=await t.findFirst("root"),r=await e.findFirst("manip_ring");r.transform.rotationX=.0174532925*-90,u.onTap().subscribe(e=>t.trackPoint(e.location)),u.onPinch().subscribe(t=>{return r=t.scale,e.transform.scaleX=r.mul(e.transform.scaleX.pinLastValue()),e.transform.scaleY=r.mul(e.transform.scaleY.pinLastValue()),void(e.transform.scaleZ=r.mul(e.transform.scaleZ.pinLastValue()));var r}),u.onRotate().subscribe(t=>{return r=t.rotation.mul(-1),void(e.transform.rotationY=r.add(e.transform.rotationY.pinLastValue()));var r}),u.onPan().subscribe(t=>{return r=t.translation,e.transform.x=r.x.mul(5e-4).add(e.transform.x.pinLastValue()),void(e.transform.z=r.y.mul(5e-4).add(e.transform.z.pinLastValue()));var r});const n=h.mul((()=>{const t=l.sdfCircle(h.pack2(.5,.5),.25),e=l.sdfAnnular(t,-.08),r=l.sdfRectangle(h.pack2(.5,1),h.pack2(.4,.5),{sdfVariant:"EXACT"}),i=l.sdfScale(r,h.pack2(.5,.5),h.pack2(.5,.5)),n=l.sdfDifference(e,i);return h.step(n,.1)})(),(()=>{const t=l.sdfRectangle(h.pack2(.5,1),h.pack2(.4,.5),{sdfVariant:"SHARP"}),e=l.sdfScale(t,h.pack2(.5,.5),h.pack2(.004,.003)),r=l.sdfRotation(e,h.pack2(.5,.5),3.141),i=l.sdfTranslation(r,h.pack2(0,.235));return h.step(i,.04)})()),a=new i.b(1,0,2e3).setEase(i.a.easeInOutSine).apply(!1),s=new i.b(.5,1,500).setLoops().setMirror().setEase(i.a.easeInOutSine).apply(!1);let d,m=0;function y(){d="fadeout",v()}function b(t){m++,w(),o(p),t.state.eq("ENDED").onOn().subscribe(()=>{m--,w(),o(f)})}function w(){switch(m){case 0:y();break;case 1:d="breath",v()}}async function v(){const t=h.pack4(1,1,1,0),e=await r.getMaterial();if("fadeout"==d){a.replay();const r=h.pack4(1,1,1,a.scalar);e.setTextureSlot("DIFFUSE",h.mix(r,t,n))}else if("breath"==d){s.replay();const r=h.pack4(1,1,1,s.scalar);e.setTextureSlot("DIFFUSE",h.mix(r,t,n))}}u.onRotate().subscribe(b),u.onPan().subscribe(b),u.onPinch().subscribe(b),u.onLongPress().subscribe(b),u.onTap().subscribe(y),y()}onGestureStart(){return new a(()=>p)}onGestureFinish(){return new a(()=>f)}};r(4),r(3),r(9);const m=r(3),y=r(13);const b=new class{get isBackCamera(){return m.eq(y.captureDevicePosition,"BACK")}get isFrontCamera(){return m.eq(y.captureDevicePosition,"FRONT")}get isCapturingPhoto(){return y.isCapturingPhoto}get isRecordingVideo(){return y.isRecordingVideo}};r(2);const w=r(3),v=(r(4),r(19)),g=[r(21),r(23),r(24),r(25),r(26)];!async function(){await d.init();const t=await v.getPlayTimes(),e=function(t){for(var e,r,i=t.length;0!==i;)r=Math.floor(Math.random()*i),e=t[i-=1],t[i]=t[r],t[r]=e;return t}(g);0==t?e[0].on(w.pack3(0,0,0)):1==t?(e[0].on(w.pack3(.13,0,0)),e[1].on(w.pack3(-.13,0,0))):2==t&&(e[0].on(w.pack3(.13,0,.1)),e[1].on(w.pack3(0,0,-.1)),e[2].on(w.pack3(-.13,0,.1)));w.or(b.isRecordingVideo,b.isCapturingPhoto).onOn().subscribe(v.addPlayCount)}()}]);