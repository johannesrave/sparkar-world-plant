!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=12)}([function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return o})),
/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
function(t){if(!t.WeakMap){var e=Object.prototype.hasOwnProperty,r=function(t,e,r){Object.defineProperty?Object.defineProperty(t,e,{configurable:!0,writable:!0,value:r}):t[e]=r};t.WeakMap=function(){function t(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id",s("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function i(t,r){if(!n(t)||!e.call(t,"_id"))throw new TypeError(r+" method called on incompatible receiver "+typeof t)}function s(t){return t+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return r(t.prototype,"delete",(function(t){if(i(this,"delete"),!n(t))return!1;var e=t[this._id];return!(!e||e[0]!==t)&&(delete t[this._id],!0)})),r(t.prototype,"get",(function(t){if(i(this,"get"),n(t)){var e=t[this._id];return e&&e[0]===t?e[1]:void 0}})),r(t.prototype,"has",(function(t){if(i(this,"has"),!n(t))return!1;var e=t[this._id];return!(!e||e[0]!==t)})),r(t.prototype,"set",(function(t,e){if(i(this,"set"),!n(t))throw new TypeError("Invalid value used as weak map key");var s=t[this._id];return s&&s[0]===t?(s[1]=e,this):(r(t,this._id,[t,e]),this)})),r(t,"_polyfill",!0),t}()}function n(t){return Object(t)===t}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:void 0);const n=r(8),i=r(2),s=r(5),a=r(3),o={linear:(t,e)=>n.samplers.linear(t,e),easeInQuad:(t,e)=>n.samplers.easeInQuad(t,e),easeOutQuad:(t,e)=>n.samplers.easeOutQuad(t,e),easeInOutQuad:(t,e)=>n.samplers.easeInOutQuad(t,e),easeInCubic:(t,e)=>n.samplers.easeInCubic(t,e),easeOutCubic:(t,e)=>n.samplers.easeOutCubic(t,e),easeInOutCubic:(t,e)=>n.samplers.easeInOutCubic(t,e),easeInQuart:(t,e)=>n.samplers.easeInQuart(t,e),easeOutQuart:(t,e)=>n.samplers.easeOutQuart(t,e),easeInOutQuart:(t,e)=>n.samplers.easeInOutQuart(t,e),easeInQuint:(t,e)=>n.samplers.easeInQuint(t,e),easeOutQuint:(t,e)=>n.samplers.easeOutQuint(t,e),easeInOutQuint:(t,e)=>n.samplers.easeInOutQuint(t,e),easeInSine:(t,e)=>n.samplers.easeInSine(t,e),easeOutSine:(t,e)=>n.samplers.easeOutSine(t,e),easeInOutSine:(t,e)=>n.samplers.easeInOutSine(t,e),easeInExpo:(t,e)=>n.samplers.easeInExpo(t,e),easeOutExpo:(t,e)=>n.samplers.easeOutExpo(t,e),easeInOutExpo:(t,e)=>n.samplers.easeInOutExpo(t,e),easeInCirc:(t,e)=>n.samplers.easeInCirc(t,e),easeOutCirc:(t,e)=>n.samplers.easeOutCirc(t,e),easeInOutCirc:(t,e)=>n.samplers.easeInOutCirc(t,e),easeInBack:(t,e)=>n.samplers.easeInBack(t,e),easeOutBack:(t,e)=>n.samplers.easeOutBack(t,e),easeInOutBack:(t,e)=>n.samplers.easeInOutBack(t,e),easeInElastic:(t,e)=>n.samplers.easeInElastic(t,e),easeOutElastic:(t,e)=>n.samplers.easeOutElastic(t,e),easeInOutElastic:(t,e)=>n.samplers.easeInOutElastic(t,e),easeInBounce:(t,e)=>n.samplers.easeInBounce(t,e),easeOutBounce:(t,e)=>n.samplers.easeOutBounce(t,e),easeInOutBounce:(t,e)=>n.samplers.easeInOutBounce(t,e),punch:(t,e)=>n.samplers.polyline({keyframes:[t+e/5*4,t-e/5*3,t+e/5*2,t-e/5*1,t],knots:[0,1,2,3,4]})},u=Math.PI/180,c=function(){const t=new WeakMap;return e=>{let r=t.get(e);return r||(r={},t.set(e,r)),r}}(),l=Symbol("cancellationTweener"),h=Symbol("cancellationFunction");class p{constructor(t,e,r){c(this).duration=r,c(this).start=[],c(this).complete=[],c(this).update=[],c(this).loop=[],c(this).sampler=o.linear("function"==typeof t.pinLastValue?t.pinLastValue():t,"function"==typeof e.pinLastValue?e.pinLastValue():e)}static newClipCancellation(t){let e={};return e.value=t,e.cancel=()=>e[h](),e[l]={},e[h]=()=>{},e}static To(t,e,r,n){return new p(t,r,n).bind(e)}static combine(...t){return t=t.flat(),e=>Promise.all(t.map(t=>t())).then(t=>Promise.resolve(null!=e?e:t))}static concat(...t){return t=t.flat(),e=>t.slice(1).reduce((t,e)=>t.then(e),t[0](e))}setMirror(t=!0){return c(this).isMirror=t,this}setLoops(t=1/0){return c(this).loopCount=t,this}setBegin(t){return c(this).sampler.begin="function"==typeof t.pinLastValue?t.pinLastValue():t,this}setEnd(t){return c(this).sampler.end="function"==typeof t.pinLastValue?t.pinLastValue():t,this}setEase(t){return c(this).sampler=t(c(this).sampler.begin,c(this).sampler.end),this}setDelay(t){return c(this).delay=t,this}bind(t){return c(this).update.push(t),this}onLoop(t){return c(this).loop.push(t),this}onStart(t){return c(this).start.push(t),this}onComplete(t){return c(this).complete.push(t),this}onStartVisible(t){return c(this).start.push(()=>t.hidden=i.val(!1)),this}onAnimatingVisibleOnly(t){return this.onStartVisible(t),this.onCompleteHidden(t),this}onStartHidden(t){return c(this).start.push(()=>t.hidden=i.val(!0)),this}onCompleteVisible(t){return c(this).complete.push(()=>t.hidden=i.val(!1)),this}onCompleteHidden(t){return c(this).complete.push(()=>t.hidden=i.val(!0)),this}onCompleteResetPosition(t){const e=i.pack3(t.transform.x.pinLastValue(),t.transform.y.pinLastValue(),t.transform.z.pinLastValue());return c(this).complete.push(()=>t.transform.position=e),this}onCompleteResetRotation(t){const e={x:t.transform.rotationX.pinLastValue(),y:t.transform.rotationY.pinLastValue(),z:t.transform.rotationZ.pinLastValue()};return c(this).complete.push(()=>{t.transform.rotationX=e.x,t.transform.rotationY=e.y,t.transform.rotationZ=e.z}),this}onCompleteResetScale(t){const e=i.scale(t.transform.scaleX.pinLastValue(),t.transform.scaleY.pinLastValue(),t.transform.scaleZ.pinLastValue());return c(this).complete.push(()=>t.transform.scale=e),this}onCompleteResetOpacity(t){const e=t.material.opacity.pinLastValue();return c(this).complete.push(()=>t.material.opacity=e),this}apply(t=!0){return function(t,e){const r=n.timeDriver({durationMilliseconds:t.duration,loopCount:t.loopCount,mirror:t.isMirror});r.onCompleted().subscribe(()=>m(t.complete)),r.onAfterIteration().subscribe(e=>m(t.loop,e));const i=n.animate(r,t.sampler),s=new f(r,i,t.delay,t.start,t.update);e&&s.start();return s}(c(this),t)}get clip(){c(this).loopCount==1/0&&a.log("Please note that set infinite loop will stuck the clips chain.");const t=this.apply(!1);return c(t).getPromise(t=>new Promise((e,r)=>{t?t[h]?(t[h]=()=>{t[l].stop(),r({message:"canceled",value:t.value,lastValue:t[l].scalar.pinLastValue(),lastTweener:t[l]})},t.value=t.value?t.value:c(this).sampler.end,c(this).complete.push(()=>e(t))):t.value?c(this).complete.push(()=>e(t)):c(this).complete.push(()=>e({value:c(this).sampler.end})):c(this).complete.push(()=>e({value:c(this).sampler.end}))}))}get log(){return c(this)}get scalar(){return this.apply(!0).scalar}get scale(){return this.apply(!0).scale}get pack2(){return this.apply(!0).pack2}get pack3(){return this.apply(!0).pack3}get pack4(){return this.apply(!0).pack4}get rotation(){return this.apply(!0).rotation}}class f{constructor(t,e,r,n,i){c(this).delay=r,c(this).animate=e,c(this).driver=t,c(this).onStart=n,c(this).onUpdate=i,c(this).hasBinded=!1,c(this).getPromise=t=>e=>(e&&e[l]&&(e[l]=this),this.replay(),t(e))}replay(){this.reset(),this.start()}reset(){c(this).driver.reset()}reverse(){c(this).driver.reverse()}start(){const t=()=>{m(c(this).onStart),c(this).hasBinded||(m(c(this).onUpdate,this),c(this).hasBinded=!0),c(this).driver.start()};null!=c(this).delay?s.setTimeout(t,c(this).delay):t()}stop(){c(this).driver.stop()}get isRunning(){return c(this).driver.isRunning()}get scalar(){return c(this).animate}get scale(){const t=this.scalar;return i.scale(t,t,t)}get pack2(){const t=this.scalar;return i.pack2(t,t)}get pack3(){const t=this.scalar;return i.pack3(t,t,t)}get pack4(){const t=this.scalar;return i.pack4(t,t,t,t)}get rotation(){return this.scalar.mul(u)}}function m(t,e){for(let r=0;r<t.length;r++)t[r](e)}}).call(this,r(7))},function(t,e,r){"use strict";r.r(e),r.d(e,"randomSelect",(function(){return s})),r.d(e,"getChance",(function(){return a})),r.d(e,"randomSign",(function(){return o})),r.d(e,"range",(function(){return u})),r.d(e,"randomSelectIn",(function(){return c})),r.d(e,"getRandomShuffleIntArrayInclusive",(function(){return l}));const n=r(16),i=()=>n.random();function s(t){return t[i()*t.length|0]}function a(t){return i()<t}function o(){return this.getChance(.5)?1:-1}function u(t,e){return i()*(Math.max(t,e)-Math.min(t,e))+Math.min(t,e)}function c(t,e){let r=e.reduce((t,e)=>t+e),n=this.range(0,r),i=0;for(var s=0;s<t.length;s++)if(i+=e[s],i=+i.toFixed(2),n<=i)return t[s]}function l(t,e){let r=[];for(let n=t;n<e+1;n++)r.push(n);for(let t=r.length-1;t>0;t--){let e=Math.floor(Math.random()*(t+1));[r[t],r[e]]=[r[e],r[t]]}return r}},function(t,e){t.exports=require("Reactive")},function(t,e){t.exports=require("Diagnostics")},function(t,e,r){"use strict";r.r(e),r.d(e,"PFEventSource",(function(){return i})),r.d(e,"invokeEvents",(function(){return a}));let n=function(){const t=new WeakMap;return e=>{let r=t.get(e);return r||(r={},t.set(e,r)),r}}();class i{constructor(t){n(this).callbackGetter=t}subscribe(t){return n(this).callbackGetter().push(t),new s(n(this).callbackGetter,t)}}class s{constructor(t,e){n(this).callbackGetter=t,n(this).lastEvent=e}unsubscribe(){!function(t,e){var r=t.indexOf(e);r>-1&&t.splice(r,1)}(n(this).callbackGetter(),n(this).lastEvent)}}function a(t,...e){t.forEach(t=>t.apply(null,e))}},function(t,e){t.exports=require("Time")},function(t,e){t.exports=require("Scene")},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){t.exports=require("Animation")},function(t,e){t.exports=require("TouchGestures")},function(t,e,r){"use strict";r.r(e),r.d(e,"init",(function(){return v}));var n=r(0);r(3),r(2);function i(t){t.hidden=!0}function s(t){return Array.isArray(t)?Promise.resolve(t[0]):Promise.resolve(t)}function a(t){return Promise.resolve(t.filter(t=>t.hidden))}function o(t){return Array.isArray(t)?a(t).then(t=>(t.forEach(i),t)):(i(t),Promise.resolve(t))}var u=r(1);const c=r(2);function l(t,e,r,n,i){return t="number"==typeof t?c.val(t):t,c.toRange(t.fromRange(e,r),n,i)}function h(t){return l(t,-180,180,-Math.PI,Math.PI)}r(2);function p(t,e){const r=t.subscribe(t=>{r.unsubscribe(),e(t)});return r}r(3);const f=r(6),m=r(9),d=r(2),y=r(17),b=r(11);async function v(){const t=await f.root.findByPath("**/planeTracker0/**/stem_pivot").then(s).then(o),e=await f.root.findByPath("**/planeTracker0/**/flowers_pool/*").then(o),r=await f.root.findByPath("**/planeTracker0/**/flower_grow_point*").then(o),i=await f.root.findByPath("**/planeTracker0/**/leaves_pool/*").then(o),a=await f.root.findByPath("**/planeTracker0/**/leaf_grow_point*").then(o),c=await f.root.findFirst("seed_pivot"),l=await f.root.findByPath("**/pot_pivot/cube").then(s);p(m.onTap(l),async()=>{await b.rain(),await async function(t){const e=new n.b(1,0,400).setEase(n.a.easeInBack).bind(e=>t.transform.scale=e.scale).clip;await e()}(c),await async function(t){const e=new n.b(0,7.5,2e3).setEase(n.a.easeInOutSine).onStartVisible(t).bind(e=>t.transform.scaleY=e.scalar).clip;await e()}(t),await async function(t,e){const r=await y.findFirst("mat_leaf"),i=Math.min(t.length,e.length);let a=[];for(let o=0;o<i;o++){const i=e[o],c=t[o],l=await i.findByPath("*").then(s);i.worldTransform.position=c.worldTransform.position,i.transform.rotationX=h(Object(u.range)(60,120)),i.transform.rotationY=h(Object(u.range)(0,360)),l.material=r;const p=new n.b(0,Object(u.range)(1,2),1e3).bind(t=>{i.transform.scaleX=t.scalar,i.transform.scaleY=Object(u.range)(.7,1.2),i.transform.scaleZ=Object(u.range)(1,2)}).onStartVisible(i).setDelay(80*o).setEase(n.a.easeOutSine).clip;a.push(p)}await n.b.combine(a)()}(a,i),async function(t,e){const r=Math.min(t.length,e.length);for(let n=0;n<r;n++){const r=e[n],i=t[n];r.worldTransform.position=i.worldTransform.position,r.transform.rotationY=h(Object(u.range)(0,360)),r.transform.scale=d.scale(Object(u.range)(.6,.7),Object(u.range)(.3,.5),Object(u.range)(.6,.7)),r.hidden=!1}}(r,e)})}},function(t,e,r){"use strict";r.r(e),r.d(e,"rain",(function(){return m}));var n=r(0);const i=r(8),s=r(5),a=r(6),o=r(3),u=r(2);class c{constructor(){this.h=i.samplers.constant(1),this.s=i.samplers.constant(1),this.v=i.samplers.constant(1),this.a=i.samplers.constant(1)}static modifyHSVA(t,e){t.hsvaColorModulationModifier=i.samplers.HSVA([e.h,e.s,e.v,e.a])}}class l{constructor(){this.hue=1,this.saturation=1,this.value=1,this.alpha=1,this.hueDelta=1,this.saturationDelta=1,this.valueDelta=1,this.alphaDelta=1}static setHSVA(t,e){const r=u.HSVA(e.hue,e.saturation,e.value,e.alpha),n=u.HSVA(e.hueDelta,e.saturationDelta,e.valueDelta,e.alphaDelta);t.colorModulationHSVA=r,t.colorModulationHSVADelta=n}}class h{constructor(t){null!=t&&(this.emitter=t,this.colorModifier=new c,this.color=new l,this.burstSubscription=void 0)}modifyHue(t,e,r){return this.colorModifier.h=r(t,e),c.modifyHSVA(this.emitter,this.colorModifier),this}modifySaturation(t,e,r){return this.colorModifier.s=r(t,e),c.modifyHSVA(this.emitter,this.colorModifier),this}modifyValue(t,e,r){return this.colorModifier.v=r(t,e),c.modifyHSVA(this.emitter,this.colorModifier),this}modifyAlpha(t,e,r){return this.colorModifier.a=r(t,e),c.modifyHSVA(this.emitter,this.colorModifier),this}modifyScale(t,e,r){return this.emitter.sizeModifier=r(t,e),this}setScaleout(t=n.a.easeInCubic){return 0!=this.emitter.scaleDelta.pinLastValue()&&o.log(`The particle "${this.emitter.name}" will not scale out perfectly if its "scale delta" is not "0"`),this.modifyScale(0,this.emitter.scale.mul(this.emitter.scaleDelta.add(1)).neg().pinLastValue(),t),this}setFadeout(t=n.a.easeInCubic){return this.modifyAlpha(1,0,t),this}burst(t=200,e=100){return this.burstSubscription&&(this.burstSubscription.unsubscribe(),this.cancellation&&this.cancellation()),new Promise((r,n)=>{this.start(t),this.burstSubscription=s.setTimeout(()=>{this.stop(),r()},e),this.cancellation=()=>{n("you called burst when bursting, it is fine, just a hint")}})}setHue(t,e=0){return this.color.hue=t,this.color.hueDelta=e,l.setHSVA(this.emitter,this.color),this}setSaturation(t,e=0){return this.color.saturation=t,this.color.saturationDelta=e,l.setHSVA(this.emitter,this.color),this}setValue(t,e=0){return this.color.value=t,this.color.valueDelta=e,l.setHSVA(this.emitter,this.color),this}setAlpha(t,e=0){return this.color.alpha=t,this.color.alphaDelta=e,l.setHSVA(this.emitter,this.color),this}start(t){return this.burstSubscription&&this.burstSubscription.unsubscribe(),this.emitter.birthrate=t,this}stop(){return this.burstSubscription&&this.burstSubscription.unsubscribe(),this.emitter.birthrate=0,this}}h.findByPath=class{constructor(t){this.emittersPromise=a.root.findByPath(t),this.particlesPromise=this.emittersPromise.then(t=>this.particles=t.map(t=>new h(t)))}modifyHue(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(n=>n.modifyHue(t,e,r))}),this}modifySaturation(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(n=>n.modifySaturation(t,e,r))}),this}modifyValue(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(n=>n.modifyValue(t,e,r))}),this}modifyAlpha(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(n=>n.modifyAlpha(t,e,r))}),this}modifyScale(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(n=>n.modifyScale(t,e,r))}),this}setScaleout(t=n.a.easeInCubic){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.setScaleout(t))}),this}setFadeout(t=n.a.easeInCubic){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.setFadeout(t))}),this}burst(t=200,e=100){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.burst(t,e))}),this}setHue(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setHue(t,e))}),this}setSaturation(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setSaturation(t,e))}),this}setValue(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setValue(t,e))}),this}setAlpha(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setAlpha(t,e))}),this}start(t){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.start(t))}),this}stop(){return this.particlesPromise.then(()=>{this.particles.forEach(t=>t.stop())}),this}},h.findAll=class{constructor(t,e=!0){this.emittersPromise=a.root.findAll(t,{recursive:e}),this.particlesPromise=this.emittersPromise.then(t=>this.particles=t.map(t=>new h(t)))}modifyHue(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(n=>n.modifyHue(t,e,r))}),this}modifySaturation(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(n=>n.modifySaturation(t,e,r))}),this}modifyValue(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(n=>n.modifyValue(t,e,r))}),this}modifyAlpha(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(n=>n.modifyAlpha(t,e,r))}),this}modifyScale(t,e,r){return this.particlesPromise.then(()=>{this.particles.forEach(n=>n.modifyScale(t,e,r))}),this}setScaleout(t=n.a.easeInCubic){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.setScaleout(t))}),this}setFadeout(t=n.a.easeInCubic){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.setFadeout(t))}),this}burst(t=200,e=100){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.burst(t,e))}),this}setHue(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setHue(t,e))}),this}setSaturation(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setSaturation(t,e))}),this}setValue(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setValue(t,e))}),this}setAlpha(t,e=0){return this.particlesPromise.then(()=>{this.particles.forEach(r=>r.setAlpha(t,e))}),this}start(t){return this.particlesPromise.then(()=>{this.particles.forEach(e=>e.start(t))}),this}stop(){return this.particlesPromise.then(()=>{this.particles.forEach(t=>t.stop())}),this}},h.findFirst=class{constructor(t){this.emitterPromise=a.root.findFirst(t),this.particlePromise=this.emitterPromise.then(t=>this.particle=new h(t))}modifyHue(t,e,r){return this.particlePromise.then(()=>{this.particle.modifyHue(t,e,r)}),this}modifySaturation(t,e,r){return this.particlePromise.then(()=>{this.particle.modifySaturation(t,e,r)}),this}modifyValue(t,e,r){return this.particlePromise.then(()=>{this.particle.modifyValue(t,e,r)}),this}modifyAlpha(t,e,r){return this.particlePromise.then(()=>{this.particle.modifyAlpha(t,e,r)}),this}modifyScale(t,e,r){return this.particlePromise.then(()=>{this.particle.modifyScale(t,e,r)}),this}setScaleout(t=n.a.easeInCubic){return this.particlePromise.then(()=>{this.particle.setScaleout(t)}),this}setFadeout(t=n.a.easeInCubic){return this.particlePromise.then(()=>{this.particle.setFadeout(t)}),this}burst(t=200,e=100){return this.particlePromise.then(()=>{this.particle.burst(t,e)}),this}setHue(t,e=0){return this.particlePromise.then(()=>{this.particle.setHue(t,e)}),this}setSaturation(t,e=0){return this.particlePromise.then(()=>{this.particle.setSaturation(t,e)}),this}setValue(t,e=0){return this.particlePromise.then(()=>{this.particle.setValue(t,e)}),this}setAlpha(t,e=0){return this.particlePromise.then(()=>{this.particle.setAlpha(t,e)}),this}start(t){return this.particlePromise.then(()=>{this.particle.start(t)}),this}stop(){return this.particlePromise.then(()=>{this.particle.stop()}),this}};r(3),r(2);const p=r(5);const f=r(6);async function m(){const t=await f.root.findFirst("cloud_pivot");await new n.b(0,1,600).setEase(n.a.easeOutBack).bind(e=>t.transform.scale=e.scale).clip();const e=new h(await f.root.findFirst("ps_rain")).setFadeout().setScaleout();var r;e.start(200),await(r=2e3,r=Number(r),r=Number.isNaN(r)?0:Math.max(r,0),new Promise(t=>p.setTimeout(t,r))),e.stop(),await new n.b(1,0,600).setEase(n.a.easeInBack).bind(e=>t.transform.scale=e.scale).clip()}},function(t,e,r){r(13),r(11),r(15),r(4),r(10),r(1),r(18),r(20),t.exports=r(21)},function(t,e,r){(function(e,r){!function(e){"use strict";var n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol&&Symbol.iterator||"@@iterator",s="object"==typeof t,a=e.regeneratorRuntime;if(a)s&&(t.exports=a);else{(a=e.regeneratorRuntime=s?t.exports:{}).wrap=c;var o={},u=f.prototype=h.prototype;p.prototype=u.constructor=f,f.constructor=p,p.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):t.__proto__=f,t.prototype=Object.create(u),t},a.awrap=function(t){return new d(t)},m(y.prototype),a.async=function(t,e,r,n){var i=new y(c(t,e,r,n));return a.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},m(u),u[i]=function(){return this},u.toString=function(){return"[object Generator]"},a.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},a.values=g,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=void 0,this.done=!1,this.delegate=null,this.tryEntries.forEach(v),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var o=n.call(s,"catchLoc"),u=n.call(s,"finallyLoc");if(o&&u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=t,a.arg=e,s?this.next=s.finallyLoc:this.complete(a),o},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),v(r),o}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;v(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:g(t),resultName:e,nextLoc:r},o}}}function c(t,e,r,n){var i=Object.create((e||h).prototype),s=new w(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(i,s){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw s;return S()}for(;;){var a=r.delegate;if(a){if("return"===i||"throw"===i&&void 0===a.iterator[i]){r.delegate=null;var u=a.iterator.return;if(u)if("throw"===(c=l(u,a.iterator,s)).type){i="throw",s=c.arg;continue}if("return"===i)continue}var c;if("throw"===(c=l(a.iterator[i],a.iterator,s)).type){r.delegate=null,i="throw",s=c.arg;continue}if(i="next",s=void 0,!(h=c.arg).done)return n="suspendedYield",h;r[a.resultName]=h.value,r.next=a.nextLoc,r.delegate=null}if("next"===i)r._sent=s,r.sent="suspendedYield"===n?s:void 0;else if("throw"===i){if("suspendedStart"===n)throw n="completed",s;r.dispatchException(s)&&(i="next",s=void 0)}else"return"===i&&r.abrupt("return",s);if(n="executing","normal"===(c=l(t,e,r)).type){n=r.done?"completed":"suspendedYield";var h={value:c.arg,done:r.done};if(c.arg!==o)return h;r.delegate&&"next"===i&&(s=void 0)}else"throw"===c.type&&(n="completed",i="throw",s=c.arg)}}}(t,r,s),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function h(){}function p(){}function f(){}function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function d(t){this.arg=t}function y(t){function e(e,r){var n=t[e](r),a=n.value;return a instanceof d?Promise.resolve(a.arg).then(i,s):Promise.resolve(a).then((function(t){return n.value=t,n}))}"object"==typeof r&&r.domain&&(e=r.domain.bind(e));var n,i=e.bind(t,"next"),s=e.bind(t,"throw");e.bind(t,"return");this._invoke=function(t,r){function i(){return e(t,r)}return n=n?n.then(i,i):new Promise((function(t){t(i())}))}}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function v(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function g(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return s.next=s}}return{next:S}}function S(){return{value:void 0,done:!0}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,r(7),r(14))},function(t,e){var r,n,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(t){if(r===setTimeout)return setTimeout(t,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(t){r=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var u,c=[],l=!1,h=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&f())}function f(){if(!l){var t=o(p);l=!0;for(var e=c.length;e;){for(u=c,c=[];++h<e;)u&&u[h].run();h=-1,e=c.length}u=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function d(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new m(t,e)),1!==c.length||l||o(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,r){r(3);const n=r(10);!async function(){const t=[n.init()];await Promise.all(t)}()},function(t,e){t.exports=require("Random")},function(t,e){t.exports=require("Materials")},function(t,e,r){"use strict";r.r(e),r.d(e,"addPlayCount",(function(){return s})),r.d(e,"getPlayCount",(function(){return a})),r.d(e,"reset",(function(){return o}));const n=r(19),i=(r(3),n.userScope);async function s(){}async function a(){i.get("")}async function o(){}},function(t,e){t.exports=require("Persistence")},function(t,e,r){"use strict";r.r(e),r.d(e,"isSignal",(function(){return s})),r.d(e,"isEventSource",(function(){return a})),r.d(e,"isSceneObject",(function(){return o})),r.d(e,"invokeOnce",(function(){return u})),r.d(e,"invokeOnceThen",(function(){return c})),r.d(e,"invokeOnceList",(function(){return l})),r.d(e,"subscribeList",(function(){return h})),r.d(e,"inRange",(function(){return p})),r.d(e,"visibleCount",(function(){return f})),r.d(e,"shuffle",(function(){return m})),r.d(e,"delay",(function(){return d})),r.d(e,"twinkling",(function(){return y})),r.d(e,"onSetSignal",(function(){return b})),r.d(e,"onSetSignalThen",(function(){return v})),r.d(e,"loop",(function(){return w}));r(3);const n=r(2),i=r(5);function s(t){return null!=t&&"function"==typeof t.pinLastValue}function a(t){return null!=t&&"function"==typeof t.unsubscribe}function o(t){return null!=t&&"function"==typeof t.hidden}function u(t,e){const r=t.subscribe(t=>{r.unsubscribe(),e(t)});return r}function c(t,e){return new Promise(r=>{u(t,t=>{e(t),r(t)})})}function l(t,e){let r=[];t.forEach(t=>{r.push(t.subscribe(t=>{e(t),r.forEach(t=>{t.unsubscribe()})}))})}function h(t,e){t.forEach(t=>{t.subscribe(e)})}function p(t,e,r){return t="function"==typeof t.pinLastValue?t:n.val(t),e="function"==typeof e.pinLastValue?e:n.val(e),r="function"==typeof r.pinLastValue?r:n.val(r),t.ge(n.min(e,r)).and(t.le(n.max(e,r)))}function f(t){return n.sumList(t.map(t=>t.boundingBoxVisible.ifThenElse(1,0)))}function m(t){for(var e,r,n=t.length;0!==n;)r=Math.floor(Math.random()*n),e=t[n-=1],t[n]=t[r],t[r]=e;return t}function d(t){return t=Number(t),t=Number.isNaN(t)?0:Math.max(t,0),new Promise(e=>i.setTimeout(e,t))}function y(t,e,r){for(let n=0;n<2*e;n++)i.setTimeout(()=>t.hidden=!t.hidden.pinLastValue(),n*r/(2*e))}const b=(t,e=(()=>{}))=>u(t.monitor({fireOnInitialValue:!0}).select("newValue"),e),v=(t,e=(()=>{}))=>c(t.monitor({fireOnInitialValue:!0}).select("newValue"),e);function w(t,e){b(t,t=>{for(let r=0;r<t;r++)e(r)})}},function(t,e,r){"use strict";r.r(e),r.d(e,"onGestureStart",(function(){return O})),r.d(e,"onGestureFinish",(function(){return k}));var n=r(0),i=r(4);const s=r(6),a=r(9),o=r(22),u=r(2),c=(r(3),s.root.findFirst("planeTracker0")),l=s.root.findByPath("**/planeTracker0/root").then(m),h=s.root.findByPath("**/planeTracker0/root/manip_ring").then(m);let p=[],f=[];function m(t){return t[0]}c.then(t=>{a.onTap().subscribe(e=>t.trackPoint(e.location)),a.onPinch().subscribe(t=>{return e=t.scale,void l.then(t=>{t.transform.scaleX=e.mul(t.transform.scaleX.pinLastValue()),t.transform.scaleY=e.mul(t.transform.scaleY.pinLastValue()),t.transform.scaleZ=e.mul(t.transform.scaleZ.pinLastValue())});var e}),a.onRotate().subscribe(t=>{return e=t.rotation.mul(-1),void l.then(t=>{t.transform.rotationY=e.add(t.transform.rotationY.pinLastValue())});var e}),a.onPan().subscribe(t=>{return e=t.translation,void l.then(t=>{t.transform.x=e.x.mul(5e-4).add(t.transform.x.pinLastValue()),t.transform.z=e.y.mul(5e-4).add(t.transform.z.pinLastValue())});var e})}),h.then(t=>{t.transform.rotationX=.0174532925*-90});const d=u.mul((()=>{const t=o.sdfCircle(u.pack2(.5,.5),.25),e=o.sdfAnnular(t,-.08),r=o.sdfRectangle(u.pack2(.5,1),u.pack2(.4,.5),{sdfVariant:"EXACT"}),n=o.sdfScale(r,u.pack2(.5,.5),u.pack2(.5,.5)),i=o.sdfDifference(e,n);return u.step(i,.1)})(),(()=>{const t=o.sdfRectangle(u.pack2(.5,1),u.pack2(.4,.5),{sdfVariant:"SHARP"}),e=o.sdfScale(t,u.pack2(.5,.5),u.pack2(.004,.003)),r=o.sdfRotation(e,u.pack2(.5,.5),3.141),n=o.sdfTranslation(r,u.pack2(0,.235));return u.step(n,.04)})()),y=new n.b(1,0,2e3).setEase(n.a.easeInOutSine).apply(!1),b=new n.b(.5,1,500).setLoops().setMirror().setEase(n.a.easeInOutSine).apply(!1);let v,w=0;function g(){v="fadeout",E()}function S(t){w++,P(),Object(i.invokeEvents)(p),t.state.eq("ENDED").onOn().subscribe(()=>{w--,P(),Object(i.invokeEvents)(f)})}function P(){switch(w){case 0:g();break;case 1:v="breath",E()}}function E(){const t=u.pack4(1,1,1,0);h.then(t=>t.getMaterial()).then(e=>{if("fadeout"==v){y.replay();const r=u.pack4(1,1,1,y.scalar);e.setTextureSlot("DIFFUSE",u.mix(r,t,d))}else if("breath"==v){b.replay();const r=u.pack4(1,1,1,b.scalar);e.setTextureSlot("DIFFUSE",u.mix(r,t,d))}})}function O(){return new i.PFEventSource(()=>p)}function k(){return new i.PFEventSource(()=>f)}a.onRotate().subscribe(S),a.onPan().subscribe(S),a.onPinch().subscribe(S),a.onLongPress().subscribe(S),a.onTap().subscribe(g),g()},function(t,e){t.exports=require("Shaders")}]);