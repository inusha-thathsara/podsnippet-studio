(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Xm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Tu={exports:{}},Ba={},Au={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function dx(){if(zp)return St;zp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function y(U,re,ve){this.props=U,this.context=re,this.refs=C,this.updater=ve||w}y.prototype.isReactComponent={},y.prototype.setState=function(U,re){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,re,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function D(U,re,ve){this.props=U,this.context=re,this.refs=C,this.updater=ve||w}var F=D.prototype=new v;F.constructor=D,b(F,y.prototype),F.isPureReactComponent=!0;var T=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function M(U,re,ve){var ze,De={},Be=null,ie=null;if(re!=null)for(ze in re.ref!==void 0&&(ie=re.ref),re.key!==void 0&&(Be=""+re.key),re)L.call(re,ze)&&!I.hasOwnProperty(ze)&&(De[ze]=re[ze]);var le=arguments.length-2;if(le===1)De.children=ve;else if(1<le){for(var Se=Array(le),qe=0;qe<le;qe++)Se[qe]=arguments[qe+2];De.children=Se}if(U&&U.defaultProps)for(ze in le=U.defaultProps,le)De[ze]===void 0&&(De[ze]=le[ze]);return{$$typeof:s,type:U,key:Be,ref:ie,props:De,_owner:P.current}}function N(U,re){return{$$typeof:s,type:U.type,key:re,ref:U.ref,props:U.props,_owner:U._owner}}function B(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var re={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return re[ve]})}var j=/\/+/g;function Q(U,re){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):re.toString(36)}function H(U,re,ve,ze,De){var Be=typeof U;(Be==="undefined"||Be==="boolean")&&(U=null);var ie=!1;if(U===null)ie=!0;else switch(Be){case"string":case"number":ie=!0;break;case"object":switch(U.$$typeof){case s:case e:ie=!0}}if(ie)return ie=U,De=De(ie),U=ze===""?"."+Q(ie,0):ze,T(De)?(ve="",U!=null&&(ve=U.replace(j,"$&/")+"/"),H(De,re,ve,"",function(qe){return qe})):De!=null&&(B(De)&&(De=N(De,ve+(!De.key||ie&&ie.key===De.key?"":(""+De.key).replace(j,"$&/")+"/")+U)),re.push(De)),1;if(ie=0,ze=ze===""?".":ze+":",T(U))for(var le=0;le<U.length;le++){Be=U[le];var Se=ze+Q(Be,le);ie+=H(Be,re,ve,Se,De)}else if(Se=x(U),typeof Se=="function")for(U=Se.call(U),le=0;!(Be=U.next()).done;)Be=Be.value,Se=ze+Q(Be,le++),ie+=H(Be,re,ve,Se,De);else if(Be==="object")throw re=String(U),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ie}function J(U,re,ve){if(U==null)return U;var ze=[],De=0;return H(U,ze,"","",function(Be){return re.call(ve,Be,De++)}),ze}function oe(U){if(U._status===-1){var re=U._result;re=re(),re.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=re)}if(U._status===1)return U._result.default;throw U._result}var Y={current:null},G={transition:null},$={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:G,ReactCurrentOwner:P};function Z(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:J,forEach:function(U,re,ve){J(U,function(){re.apply(this,arguments)},ve)},count:function(U){var re=0;return J(U,function(){re++}),re},toArray:function(U){return J(U,function(re){return re})||[]},only:function(U){if(!B(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},St.Component=y,St.Fragment=n,St.Profiler=o,St.PureComponent=D,St.StrictMode=r,St.Suspense=h,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,St.act=Z,St.cloneElement=function(U,re,ve){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var ze=b({},U.props),De=U.key,Be=U.ref,ie=U._owner;if(re!=null){if(re.ref!==void 0&&(Be=re.ref,ie=P.current),re.key!==void 0&&(De=""+re.key),U.type&&U.type.defaultProps)var le=U.type.defaultProps;for(Se in re)L.call(re,Se)&&!I.hasOwnProperty(Se)&&(ze[Se]=re[Se]===void 0&&le!==void 0?le[Se]:re[Se])}var Se=arguments.length-2;if(Se===1)ze.children=ve;else if(1<Se){le=Array(Se);for(var qe=0;qe<Se;qe++)le[qe]=arguments[qe+2];ze.children=le}return{$$typeof:s,type:U.type,key:De,ref:Be,props:ze,_owner:ie}},St.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},St.createElement=M,St.createFactory=function(U){var re=M.bind(null,U);return re.type=U,re},St.createRef=function(){return{current:null}},St.forwardRef=function(U){return{$$typeof:f,render:U}},St.isValidElement=B,St.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:oe}},St.memo=function(U,re){return{$$typeof:m,type:U,compare:re===void 0?null:re}},St.startTransition=function(U){var re=G.transition;G.transition={};try{U()}finally{G.transition=re}},St.unstable_act=Z,St.useCallback=function(U,re){return Y.current.useCallback(U,re)},St.useContext=function(U){return Y.current.useContext(U)},St.useDebugValue=function(){},St.useDeferredValue=function(U){return Y.current.useDeferredValue(U)},St.useEffect=function(U,re){return Y.current.useEffect(U,re)},St.useId=function(){return Y.current.useId()},St.useImperativeHandle=function(U,re,ve){return Y.current.useImperativeHandle(U,re,ve)},St.useInsertionEffect=function(U,re){return Y.current.useInsertionEffect(U,re)},St.useLayoutEffect=function(U,re){return Y.current.useLayoutEffect(U,re)},St.useMemo=function(U,re){return Y.current.useMemo(U,re)},St.useReducer=function(U,re,ve){return Y.current.useReducer(U,re,ve)},St.useRef=function(U){return Y.current.useRef(U)},St.useState=function(U){return Y.current.useState(U)},St.useSyncExternalStore=function(U,re,ve){return Y.current.useSyncExternalStore(U,re,ve)},St.useTransition=function(){return Y.current.useTransition()},St.version="18.3.1",St}var Vp;function nf(){return Vp||(Vp=1,Au.exports=dx()),Au.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function fx(){if(Hp)return Ba;Hp=1;var s=nf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var _,S={},x=null,w=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(w=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(S[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)S[_]===void 0&&(S[_]=h[_]);return{$$typeof:e,type:f,key:x,ref:w,props:S,_owner:o.current}}return Ba.Fragment=n,Ba.jsx=u,Ba.jsxs=u,Ba}var Gp;function hx(){return Gp||(Gp=1,Tu.exports=fx()),Tu.exports}var g=hx(),et=nf();const px=Xm(et);var al={},Ru={exports:{}},qn={},Cu={exports:{}},Nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function mx(){return Wp||(Wp=1,(function(s){function e(G,$){var Z=G.length;G.push($);e:for(;0<Z;){var U=Z-1>>>1,re=G[U];if(0<o(re,$))G[U]=$,G[Z]=re,Z=U;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var $=G[0],Z=G.pop();if(Z!==$){G[0]=Z;e:for(var U=0,re=G.length,ve=re>>>1;U<ve;){var ze=2*(U+1)-1,De=G[ze],Be=ze+1,ie=G[Be];if(0>o(De,Z))Be<re&&0>o(ie,De)?(G[U]=ie,G[Be]=Z,U=Be):(G[U]=De,G[ze]=Z,U=ze);else if(Be<re&&0>o(ie,Z))G[U]=ie,G[Be]=Z,U=Be;else break e}}return $}function o(G,$){var Z=G.sortIndex-$.sortIndex;return Z!==0?Z:G.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],_=1,S=null,x=3,w=!1,b=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(G){for(var $=n(m);$!==null;){if($.callback===null)r(m);else if($.startTime<=G)r(m),$.sortIndex=$.expirationTime,e(h,$);else break;$=n(m)}}function T(G){if(C=!1,F(G),!b)if(n(h)!==null)b=!0,oe(L);else{var $=n(m);$!==null&&Y(T,$.startTime-G)}}function L(G,$){b=!1,C&&(C=!1,v(M),M=-1),w=!0;var Z=x;try{for(F($),S=n(h);S!==null&&(!(S.expirationTime>$)||G&&!z());){var U=S.callback;if(typeof U=="function"){S.callback=null,x=S.priorityLevel;var re=U(S.expirationTime<=$);$=s.unstable_now(),typeof re=="function"?S.callback=re:S===n(h)&&r(h),F($)}else r(h);S=n(h)}if(S!==null)var ve=!0;else{var ze=n(m);ze!==null&&Y(T,ze.startTime-$),ve=!1}return ve}finally{S=null,x=Z,w=!1}}var P=!1,I=null,M=-1,N=5,B=-1;function z(){return!(s.unstable_now()-B<N)}function j(){if(I!==null){var G=s.unstable_now();B=G;var $=!0;try{$=I(!0,G)}finally{$?Q():(P=!1,I=null)}}else P=!1}var Q;if(typeof D=="function")Q=function(){D(j)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,J=H.port2;H.port1.onmessage=j,Q=function(){J.postMessage(null)}}else Q=function(){y(j,0)};function oe(G){I=G,P||(P=!0,Q())}function Y(G,$){M=y(function(){G(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){b||w||(b=!0,oe(L))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(G){switch(x){case 1:case 2:case 3:var $=3;break;default:$=x}var Z=x;x=$;try{return G()}finally{x=Z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,$){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Z=x;x=G;try{return $()}finally{x=Z}},s.unstable_scheduleCallback=function(G,$,Z){var U=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?U+Z:U):Z=U,G){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Z+re,G={id:_++,callback:$,priorityLevel:G,startTime:Z,expirationTime:re,sortIndex:-1},Z>U?(G.sortIndex=Z,e(m,G),n(h)===null&&G===n(m)&&(C?(v(M),M=-1):C=!0,Y(T,Z-U))):(G.sortIndex=re,e(h,G),b||w||(b=!0,oe(L))),G},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(G){var $=x;return function(){var Z=x;x=$;try{return G.apply(this,arguments)}finally{x=Z}}}})(Nu)),Nu}var jp;function gx(){return jp||(jp=1,Cu.exports=mx()),Cu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function xx(){if(Xp)return qn;Xp=1;var s=nf(),e=gx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},S={};function x(t){return h.call(S,t)?!0:h.call(_,t)?!1:m.test(t)?S[t]=!0:(_[t]=!0,!1)}function w(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,i,a,c){if(i===null||typeof i>"u"||w(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,c,d,p,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,D);y[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,D);y[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,D);y[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,d,c)&&(a=null),c||d===null?x(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),z=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),G=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,U;function re(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var ve=!1;function ze(t,i){if(!t||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var c=fe}Reflect.construct(t,[],i)}else{try{i.call()}catch(fe){c=fe}t.call(i.prototype)}else{try{throw Error()}catch(fe){c=fe}t()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var d=fe.stack.split(`
`),p=c.stack.split(`
`),A=d.length-1,k=p.length-1;1<=A&&0<=k&&d[A]!==p[k];)k--;for(;1<=A&&0<=k;A--,k--)if(d[A]!==p[k]){if(A!==1||k!==1)do if(A--,k--,0>k||d[A]!==p[k]){var W=`
`+d[A].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=A&&0<=k);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?re(t):""}function De(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=ze(t.type,!1),t;case 11:return t=ze(t.type.render,!1),t;case 1:return t=ze(t.type,!0),t;default:return""}}function Be(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case P:return"Portal";case N:return"Profiler";case M:return"StrictMode";case Q:return"Suspense";case H:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case B:return(t._context.displayName||"Context")+".Provider";case j:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return i=t.displayName||null,i!==null?i:Be(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Be(t(i))}catch{}}return null}function ie(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Be(i);case 8:return i===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function le(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(t){var i=Se(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(A){c=""+A,p.call(this,A)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Le(t){t._valueTracker||(t._valueTracker=qe(t))}function lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=Se(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dt(t,i){var a=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function xt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=le(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function wt(t,i){i=i.checked,i!=null&&F(t,"checked",i,!1)}function ht(t,i){wt(t,i);var a=le(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Wt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Wt(t,i.type,le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ot(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Wt(t,i,a){(i!=="number"||Vt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Me=Array.isArray;function Ge(t,i,a,c){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&c&&(t[a].defaultSelected=!0)}else{for(a=""+le(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function pt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function V(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Me(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:le(a)}}function Yt(t,i){var a=le(i.value),c=le(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Lt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function O(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?O(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ee,ce=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ee.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function he(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ae=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){Ae.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function pe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function ge(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=pe(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,d):t[a]=d}}var Re=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(t,i){if(i){if(Re[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ce(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Te=null;function $e(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rt=null,st=null,X=null;function Ne(t){if(t=Ea(t)){if(typeof rt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=So(i),rt(t.stateNode,t.type,i))}}function me(t){st?X?X.push(t):X=[t]:st=t}function Pe(){if(st){var t=st,i=X;if(X=st=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function Ue(t,i){return t(i)}function xe(){}var Qe=!1;function je(t,i,a){if(Qe)return t(i,a);Qe=!0;try{return Ue(t,i,a)}finally{Qe=!1,(st!==null||X!==null)&&(xe(),Pe())}}function yt(t,i){var a=t.stateNode;if(a===null)return null;var c=So(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Et=!1;if(f)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){Et=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{Et=!1}function Un(t,i,a,c,d,p,A,k,W){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(a,fe)}catch(ye){this.onError(ye)}}var Ni=!1,it=null,bt=!1,Ht=null,wn={onError:function(t){Ni=!0,it=t}};function Tt(t,i,a,c,d,p,A,k,W){Ni=!1,it=null,Un.apply(wn,arguments)}function hn(t,i,a,c,d,p,A,k,W){if(Tt.apply(this,arguments),Ni){if(Ni){var fe=it;Ni=!1,it=null}else throw Error(n(198));bt||(bt=!0,Ht=fe)}}function Zt(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function cr(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ia(t){if(Zt(t)!==t)throw Error(n(188))}function ro(t){var i=t.alternate;if(!i){if(i=Zt(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return ia(d),t;if(p===c)return ia(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=p;else{for(var A=!1,k=d.child;k;){if(k===a){A=!0,a=d,c=p;break}if(k===c){A=!0,c=d,a=p;break}k=k.sibling}if(!A){for(k=p.child;k;){if(k===a){A=!0,a=p,c=d;break}if(k===c){A=!0,c=p,a=d;break}k=k.sibling}if(!A)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function kr(t){return t=ro(t),t!==null?ra(t):null}function ra(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ra(t);if(i!==null)return i;t=t.sibling}return null}var Br=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,so=e.unstable_shouldYield,Kl=e.unstable_requestPaint,Qt=e.unstable_now,Zl=e.unstable_getCurrentPriorityLevel,aa=e.unstable_ImmediatePriority,oa=e.unstable_UserBlockingPriority,R=e.unstable_NormalPriority,q=e.unstable_LowPriority,de=e.unstable_IdlePriority,se=null,te=null;function Oe(t){if(te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(se,t,void 0,(t.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:tt,Fe=Math.log,Ke=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(Fe(t)/Ke|0)|0}var ft=64,gt=4194304;function We(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function At(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,d=t.suspendedLanes,p=t.pingedLanes,A=a&268435455;if(A!==0){var k=A&~d;k!==0?c=We(k):(p&=A,p!==0&&(c=We(p)))}else A=a&~d,A!==0?c=We(A):p!==0&&(c=We(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-Ie(i),d=1<<a,c|=t[a],i&=~d;return c}function sn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gt(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var A=31-Ie(p),k=1<<A,W=d[A];W===-1?((k&a)===0||(k&c)!==0)&&(d[A]=sn(k,i)):W<=i&&(t.expiredLanes|=k),p&=~k}}function kt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pn(){var t=ft;return ft<<=1,(ft&4194240)===0&&(ft=64),t}function Ve(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function on(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ie(i),t[i]=a}function Rt(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Ie(a),p=1<<d;i[d]=0,c[d]=-1,t[d]=-1,a&=~p}}function An(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-Ie(a),d=1<<c;d&i|t[c]&i&&(t[c]|=i),a&=~d}}var vt=0;function hi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Wi,It,$t,pi,Bt,ri=!1,mi=[],gi=null,ur=null,dr=null,la=new Map,ca=new Map,fr=[],D0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wf(t,i){switch(t){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":la.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(i.pointerId)}}function ua(t,i,a,c,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Ea(i),i!==null&&It(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function I0(t,i,a,c,d){switch(i){case"focusin":return gi=ua(gi,t,i,a,c,d),!0;case"dragenter":return ur=ua(ur,t,i,a,c,d),!0;case"mouseover":return dr=ua(dr,t,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return la.set(p,ua(la.get(p)||null,t,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,ca.set(p,ua(ca.get(p)||null,t,i,a,c,d)),!0}return!1}function Ef(t){var i=zr(t.target);if(i!==null){var a=Zt(i);if(a!==null){if(i=a.tag,i===13){if(i=cr(a),i!==null){t.blockedOn=i,Bt(t.priority,function(){$t(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Jl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Te=c,a.target.dispatchEvent(c),Te=null}else return i=Ea(a),i!==null&&It(i),t.blockedOn=a,!1;i.shift()}return!0}function bf(t,i,a){ao(t)&&a.delete(i)}function U0(){ri=!1,gi!==null&&ao(gi)&&(gi=null),ur!==null&&ao(ur)&&(ur=null),dr!==null&&ao(dr)&&(dr=null),la.forEach(bf),ca.forEach(bf)}function da(t,i){t.blockedOn===i&&(t.blockedOn=null,ri||(ri=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,U0)))}function fa(t){function i(d){return da(d,t)}if(0<mi.length){da(mi[0],t);for(var a=1;a<mi.length;a++){var c=mi[a];c.blockedOn===t&&(c.blockedOn=null)}}for(gi!==null&&da(gi,t),ur!==null&&da(ur,t),dr!==null&&da(dr,t),la.forEach(i),ca.forEach(i),a=0;a<fr.length;a++)c=fr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Ef(a),a.blockedOn===null&&fr.shift()}var us=T.ReactCurrentBatchConfig,oo=!0;function F0(t,i,a,c){var d=vt,p=us.transition;us.transition=null;try{vt=1,Ql(t,i,a,c)}finally{vt=d,us.transition=p}}function O0(t,i,a,c){var d=vt,p=us.transition;us.transition=null;try{vt=4,Ql(t,i,a,c)}finally{vt=d,us.transition=p}}function Ql(t,i,a,c){if(oo){var d=Jl(t,i,a,c);if(d===null)gc(t,i,c,lo,a),wf(t,c);else if(I0(d,t,i,a,c))c.stopPropagation();else if(wf(t,c),i&4&&-1<D0.indexOf(t)){for(;d!==null;){var p=Ea(d);if(p!==null&&Wi(p),p=Jl(t,i,a,c),p===null&&gc(t,i,c,lo,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else gc(t,i,c,null,a)}}var lo=null;function Jl(t,i,a,c){if(lo=null,t=$e(c),t=zr(t),t!==null)if(i=Zt(t),i===null)t=null;else if(a=i.tag,a===13){if(t=cr(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return lo=t,null}function Tf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zl()){case aa:return 1;case oa:return 4;case R:case q:return 16;case de:return 536870912;default:return 16}default:return 16}}var hr=null,ec=null,co=null;function Af(){if(co)return co;var t,i=ec,a=i.length,c,d="value"in hr?hr.value:hr.textContent,p=d.length;for(t=0;t<a&&i[t]===d[t];t++);var A=a-t;for(c=1;c<=A&&i[a-c]===d[p-c];c++);return co=d.slice(t,1<c?1-c:void 0)}function uo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function Rf(){return!1}function Kn(t){function i(a,c,d,p,A){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=A,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(a=t[k],this[k]=a?a(p):p[k]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?fo:Rf,this.isPropagationStopped=Rf,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=Kn(ds),ha=Z({},ds,{view:0,detail:0}),k0=Kn(ha),nc,ic,pa,ho=Z({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(nc=t.screenX-pa.screenX,ic=t.screenY-pa.screenY):ic=nc=0,pa=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),Cf=Kn(ho),B0=Z({},ho,{dataTransfer:0}),z0=Kn(B0),V0=Z({},ha,{relatedTarget:0}),rc=Kn(V0),H0=Z({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=Kn(H0),W0=Z({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),j0=Kn(W0),X0=Z({},ds,{data:0}),Nf=Kn(X0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=$0[t])?!!i[t]:!1}function sc(){return K0}var Z0=Z({},ha,{key:function(t){if(t.key){var i=q0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q0=Kn(Z0),J0=Z({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=Kn(J0),eg=Z({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),tg=Kn(eg),ng=Z({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),ig=Kn(ng),rg=Z({},ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sg=Kn(rg),ag=[9,13,27,32],ac=f&&"CompositionEvent"in window,ma=null;f&&"documentMode"in document&&(ma=document.documentMode);var og=f&&"TextEvent"in window&&!ma,Lf=f&&(!ac||ma&&8<ma&&11>=ma),Df=" ",If=!1;function Uf(t,i){switch(t){case"keyup":return ag.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function lg(t,i){switch(t){case"compositionend":return Ff(i);case"keypress":return i.which!==32?null:(If=!0,Df);case"textInput":return t=i.data,t===Df&&If?null:t;default:return null}}function cg(t,i){if(fs)return t==="compositionend"||!ac&&Uf(t,i)?(t=Af(),co=ec=hr=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lf&&i.locale!=="ko"?null:i.data;default:return null}}var ug={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!ug[t.type]:i==="textarea"}function kf(t,i,a,c){me(c),i=vo(i,"onChange"),0<i.length&&(a=new tc("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var ga=null,xa=null;function dg(t){nh(t,0)}function po(t){var i=xs(t);if(lt(i))return t}function fg(t,i){if(t==="change")return i}var Bf=!1;if(f){var oc;if(f){var lc="oninput"in document;if(!lc){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),lc=typeof zf.oninput=="function"}oc=lc}else oc=!1;Bf=oc&&(!document.documentMode||9<document.documentMode)}function Vf(){ga&&(ga.detachEvent("onpropertychange",Hf),xa=ga=null)}function Hf(t){if(t.propertyName==="value"&&po(xa)){var i=[];kf(i,xa,t,$e(t)),je(dg,i)}}function hg(t,i,a){t==="focusin"?(Vf(),ga=i,xa=a,ga.attachEvent("onpropertychange",Hf)):t==="focusout"&&Vf()}function pg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return po(xa)}function mg(t,i){if(t==="click")return po(i)}function gg(t,i){if(t==="input"||t==="change")return po(i)}function xg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var xi=typeof Object.is=="function"?Object.is:xg;function va(t,i){if(xi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!xi(t[d],i[d]))return!1}return!0}function Gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wf(t,i){var a=Gf(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gf(a)}}function jf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?jf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Xf(){for(var t=window,i=Vt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Vt(t.document)}return i}function cc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function vg(t){var i=Xf(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&jf(a.ownerDocument.documentElement,a)){if(c!==null&&cc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!t.extend&&p>c&&(d=c,c=p,p=d),d=Wf(a,p);var A=Wf(a,c);d&&A&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==A.node||t.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _g=f&&"documentMode"in document&&11>=document.documentMode,hs=null,uc=null,_a=null,dc=!1;function qf(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;dc||hs==null||hs!==Vt(c)||(c=hs,"selectionStart"in c&&cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_a&&va(_a,c)||(_a=c,c=vo(uc,"onSelect"),0<c.length&&(i=new tc("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=hs)))}function mo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ps={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},fc={},Yf={};f&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function go(t){if(fc[t])return fc[t];if(!ps[t])return t;var i=ps[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Yf)return fc[t]=i[a];return t}var $f=go("animationend"),Kf=go("animationiteration"),Zf=go("animationstart"),Qf=go("transitionend"),Jf=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,i){Jf.set(t,i),l(i,[t])}for(var hc=0;hc<eh.length;hc++){var pc=eh[hc],yg=pc.toLowerCase(),Sg=pc[0].toUpperCase()+pc.slice(1);pr(yg,"on"+Sg)}pr($f,"onAnimationEnd"),pr(Kf,"onAnimationIteration"),pr(Zf,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(Qf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function th(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,hn(c,i,void 0,t),t.currentTarget=null}function nh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var A=c.length-1;0<=A;A--){var k=c[A],W=k.instance,fe=k.currentTarget;if(k=k.listener,W!==p&&d.isPropagationStopped())break e;th(d,k,fe),p=W}else for(A=0;A<c.length;A++){if(k=c[A],W=k.instance,fe=k.currentTarget,k=k.listener,W!==p&&d.isPropagationStopped())break e;th(d,k,fe),p=W}}}if(bt)throw t=Ht,bt=!1,Ht=null,t}function Xt(t,i){var a=i[Mc];a===void 0&&(a=i[Mc]=new Set);var c=t+"__bubble";a.has(c)||(ih(i,t,2,!1),a.add(c))}function mc(t,i,a){var c=0;i&&(c|=4),ih(a,t,c,i)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Sa(t){if(!t[xo]){t[xo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Mg.has(a)||mc(a,!1,t),mc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[xo]||(i[xo]=!0,mc("selectionchange",!1,i))}}function ih(t,i,a,c){switch(Tf(i)){case 1:var d=F0;break;case 4:d=O0;break;default:d=Ql}a=d.bind(null,i,a,t),d=void 0,!Et||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function gc(t,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var k=c.stateNode.containerInfo;if(k===d||k.nodeType===8&&k.parentNode===d)break;if(A===4)for(A=c.return;A!==null;){var W=A.tag;if((W===3||W===4)&&(W=A.stateNode.containerInfo,W===d||W.nodeType===8&&W.parentNode===d))return;A=A.return}for(;k!==null;){if(A=zr(k),A===null)return;if(W=A.tag,W===5||W===6){c=p=A;continue e}k=k.parentNode}}c=c.return}je(function(){var fe=p,ye=$e(a),we=[];e:{var _e=Jf.get(t);if(_e!==void 0){var He=tc,Ze=t;switch(t){case"keypress":if(uo(a)===0)break e;case"keydown":case"keyup":He=Q0;break;case"focusin":Ze="focus",He=rc;break;case"focusout":Ze="blur",He=rc;break;case"beforeblur":case"afterblur":He=rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=tg;break;case $f:case Kf:case Zf:He=G0;break;case Qf:He=ig;break;case"scroll":He=k0;break;case"wheel":He=sg;break;case"copy":case"cut":case"paste":He=j0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Pf}var Je=(i&4)!==0,ln=!Je&&t==="scroll",ae=Je?_e!==null?_e+"Capture":null:_e;Je=[];for(var K=fe,ue;K!==null;){ue=K;var be=ue.stateNode;if(ue.tag===5&&be!==null&&(ue=be,ae!==null&&(be=yt(K,ae),be!=null&&Je.push(Ma(K,be,ue)))),ln)break;K=K.return}0<Je.length&&(_e=new He(_e,Ze,null,a,ye),we.push({event:_e,listeners:Je}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",He=t==="mouseout"||t==="pointerout",_e&&a!==Te&&(Ze=a.relatedTarget||a.fromElement)&&(zr(Ze)||Ze[ji]))break e;if((He||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,He?(Ze=a.relatedTarget||a.toElement,He=fe,Ze=Ze?zr(Ze):null,Ze!==null&&(ln=Zt(Ze),Ze!==ln||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(He=null,Ze=fe),He!==Ze)){if(Je=Cf,be="onMouseLeave",ae="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(Je=Pf,be="onPointerLeave",ae="onPointerEnter",K="pointer"),ln=He==null?_e:xs(He),ue=Ze==null?_e:xs(Ze),_e=new Je(be,K+"leave",He,a,ye),_e.target=ln,_e.relatedTarget=ue,be=null,zr(ye)===fe&&(Je=new Je(ae,K+"enter",Ze,a,ye),Je.target=ue,Je.relatedTarget=ln,be=Je),ln=be,He&&Ze)t:{for(Je=He,ae=Ze,K=0,ue=Je;ue;ue=ms(ue))K++;for(ue=0,be=ae;be;be=ms(be))ue++;for(;0<K-ue;)Je=ms(Je),K--;for(;0<ue-K;)ae=ms(ae),ue--;for(;K--;){if(Je===ae||ae!==null&&Je===ae.alternate)break t;Je=ms(Je),ae=ms(ae)}Je=null}else Je=null;He!==null&&rh(we,_e,He,Je,!1),Ze!==null&&ln!==null&&rh(we,ln,Ze,Je,!0)}}e:{if(_e=fe?xs(fe):window,He=_e.nodeName&&_e.nodeName.toLowerCase(),He==="select"||He==="input"&&_e.type==="file")var nt=fg;else if(Of(_e))if(Bf)nt=gg;else{nt=pg;var at=hg}else(He=_e.nodeName)&&He.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(nt=mg);if(nt&&(nt=nt(t,fe))){kf(we,nt,a,ye);break e}at&&at(t,_e,fe),t==="focusout"&&(at=_e._wrapperState)&&at.controlled&&_e.type==="number"&&Wt(_e,"number",_e.value)}switch(at=fe?xs(fe):window,t){case"focusin":(Of(at)||at.contentEditable==="true")&&(hs=at,uc=fe,_a=null);break;case"focusout":_a=uc=hs=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,qf(we,a,ye);break;case"selectionchange":if(_g)break;case"keydown":case"keyup":qf(we,a,ye)}var ot;if(ac)e:{switch(t){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else fs?Uf(t,a)&&(ct="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(Lf&&a.locale!=="ko"&&(fs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&fs&&(ot=Af()):(hr=ye,ec="value"in hr?hr.value:hr.textContent,fs=!0)),at=vo(fe,ct),0<at.length&&(ct=new Nf(ct,t,null,a,ye),we.push({event:ct,listeners:at}),ot?ct.data=ot:(ot=Ff(a),ot!==null&&(ct.data=ot)))),(ot=og?lg(t,a):cg(t,a))&&(fe=vo(fe,"onBeforeInput"),0<fe.length&&(ye=new Nf("onBeforeInput","beforeinput",null,a,ye),we.push({event:ye,listeners:fe}),ye.data=ot))}nh(we,i)})}function Ma(t,i,a){return{instance:t,listener:i,currentTarget:a}}function vo(t,i){for(var a=i+"Capture",c=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=yt(t,a),p!=null&&c.unshift(Ma(t,p,d)),p=yt(t,i),p!=null&&c.push(Ma(t,p,d))),t=t.return}return c}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,i,a,c,d){for(var p=i._reactName,A=[];a!==null&&a!==c;){var k=a,W=k.alternate,fe=k.stateNode;if(W!==null&&W===c)break;k.tag===5&&fe!==null&&(k=fe,d?(W=yt(a,p),W!=null&&A.unshift(Ma(a,W,k))):d||(W=yt(a,p),W!=null&&A.push(Ma(a,W,k)))),a=a.return}A.length!==0&&t.push({event:i,listeners:A})}var wg=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(wg,`
`).replace(Eg,"")}function _o(t,i,a){if(i=sh(i),sh(t)!==i&&a)throw Error(n(425))}function yo(){}var xc=null,vc=null;function _c(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,Tg=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(t){return ah.resolve(null).then(t).catch(Ag)}:yc;function Ag(t){setTimeout(function(){throw t})}function Sc(t,i){var a=i,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){t.removeChild(d),fa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);fa(i)}function mr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function oh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),Pi="__reactFiber$"+gs,wa="__reactProps$"+gs,ji="__reactContainer$"+gs,Mc="__reactEvents$"+gs,Rg="__reactListeners$"+gs,Cg="__reactHandles$"+gs;function zr(t){var i=t[Pi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[ji]||a[Pi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=oh(t);t!==null;){if(a=t[Pi])return a;t=oh(t)}return i}t=a,a=t.parentNode}return null}function Ea(t){return t=t[Pi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function So(t){return t[wa]||null}var wc=[],vs=-1;function gr(t){return{current:t}}function qt(t){0>vs||(t.current=wc[vs],wc[vs]=null,vs--)}function jt(t,i){vs++,wc[vs]=t.current,t.current=i}var xr={},Rn=gr(xr),Hn=gr(!1),Vr=xr;function _s(t,i){var a=t.type.contextTypes;if(!a)return xr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Gn(t){return t=t.childContextTypes,t!=null}function Mo(){qt(Hn),qt(Rn)}function lh(t,i,a){if(Rn.current!==xr)throw Error(n(168));jt(Rn,i),jt(Hn,a)}function ch(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,ie(t)||"Unknown",d));return Z({},a,c)}function wo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,Vr=Rn.current,jt(Rn,t),jt(Hn,Hn.current),!0}function uh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=ch(t,i,Vr),c.__reactInternalMemoizedMergedChildContext=t,qt(Hn),qt(Rn),jt(Rn,t)):qt(Hn),jt(Hn,a)}var Xi=null,Eo=!1,Ec=!1;function dh(t){Xi===null?Xi=[t]:Xi.push(t)}function Ng(t){Eo=!0,dh(t)}function vr(){if(!Ec&&Xi!==null){Ec=!0;var t=0,i=vt;try{var a=Xi;for(vt=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Xi=null,Eo=!1}catch(d){throw Xi!==null&&(Xi=Xi.slice(t+1)),Br(aa,vr),d}finally{vt=i,Ec=!1}}return null}var ys=[],Ss=0,bo=null,To=0,si=[],ai=0,Hr=null,qi=1,Yi="";function Gr(t,i){ys[Ss++]=To,ys[Ss++]=bo,bo=t,To=i}function fh(t,i,a){si[ai++]=qi,si[ai++]=Yi,si[ai++]=Hr,Hr=t;var c=qi;t=Yi;var d=32-Ie(c)-1;c&=~(1<<d),a+=1;var p=32-Ie(i)+d;if(30<p){var A=d-d%5;p=(c&(1<<A)-1).toString(32),c>>=A,d-=A,qi=1<<32-Ie(i)+d|a<<d|c,Yi=p+t}else qi=1<<p|a<<d|c,Yi=t}function bc(t){t.return!==null&&(Gr(t,1),fh(t,1,0))}function Tc(t){for(;t===bo;)bo=ys[--Ss],ys[Ss]=null,To=ys[--Ss],ys[Ss]=null;for(;t===Hr;)Hr=si[--ai],si[ai]=null,Yi=si[--ai],si[ai]=null,qi=si[--ai],si[ai]=null}var Zn=null,Qn=null,Kt=!1,vi=null;function hh(t,i){var a=ui(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function ph(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Zn=t,Qn=mr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Zn=t,Qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hr!==null?{id:qi,overflow:Yi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ui(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Zn=t,Qn=null,!0):!1;default:return!1}}function Ac(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rc(t){if(Kt){var i=Qn;if(i){var a=i;if(!ph(t,i)){if(Ac(t))throw Error(n(418));i=mr(a.nextSibling);var c=Zn;i&&ph(t,i)?hh(c,a):(t.flags=t.flags&-4097|2,Kt=!1,Zn=t)}}else{if(Ac(t))throw Error(n(418));t.flags=t.flags&-4097|2,Kt=!1,Zn=t}}}function mh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zn=t}function Ao(t){if(t!==Zn)return!1;if(!Kt)return mh(t),Kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!_c(t.type,t.memoizedProps)),i&&(i=Qn)){if(Ac(t))throw gh(),Error(n(418));for(;i;)hh(t,i),i=mr(i.nextSibling)}if(mh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Qn=mr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Qn=null}}else Qn=Zn?mr(t.stateNode.nextSibling):null;return!0}function gh(){for(var t=Qn;t;)t=mr(t.nextSibling)}function Ms(){Qn=Zn=null,Kt=!1}function Cc(t){vi===null?vi=[t]:vi.push(t)}var Pg=T.ReactCurrentBatchConfig;function ba(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var d=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(A){var k=d.refs;A===null?delete k[p]:k[p]=A},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Ro(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function xh(t){var i=t._init;return i(t._payload)}function vh(t){function i(ae,K){if(t){var ue=ae.deletions;ue===null?(ae.deletions=[K],ae.flags|=16):ue.push(K)}}function a(ae,K){if(!t)return null;for(;K!==null;)i(ae,K),K=K.sibling;return null}function c(ae,K){for(ae=new Map;K!==null;)K.key!==null?ae.set(K.key,K):ae.set(K.index,K),K=K.sibling;return ae}function d(ae,K){return ae=Tr(ae,K),ae.index=0,ae.sibling=null,ae}function p(ae,K,ue){return ae.index=ue,t?(ue=ae.alternate,ue!==null?(ue=ue.index,ue<K?(ae.flags|=2,K):ue):(ae.flags|=2,K)):(ae.flags|=1048576,K)}function A(ae){return t&&ae.alternate===null&&(ae.flags|=2),ae}function k(ae,K,ue,be){return K===null||K.tag!==6?(K=yu(ue,ae.mode,be),K.return=ae,K):(K=d(K,ue),K.return=ae,K)}function W(ae,K,ue,be){var nt=ue.type;return nt===I?ye(ae,K,ue.props.children,be,ue.key):K!==null&&(K.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===oe&&xh(nt)===K.type)?(be=d(K,ue.props),be.ref=ba(ae,K,ue),be.return=ae,be):(be=Qo(ue.type,ue.key,ue.props,null,ae.mode,be),be.ref=ba(ae,K,ue),be.return=ae,be)}function fe(ae,K,ue,be){return K===null||K.tag!==4||K.stateNode.containerInfo!==ue.containerInfo||K.stateNode.implementation!==ue.implementation?(K=Su(ue,ae.mode,be),K.return=ae,K):(K=d(K,ue.children||[]),K.return=ae,K)}function ye(ae,K,ue,be,nt){return K===null||K.tag!==7?(K=Zr(ue,ae.mode,be,nt),K.return=ae,K):(K=d(K,ue),K.return=ae,K)}function we(ae,K,ue){if(typeof K=="string"&&K!==""||typeof K=="number")return K=yu(""+K,ae.mode,ue),K.return=ae,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case L:return ue=Qo(K.type,K.key,K.props,null,ae.mode,ue),ue.ref=ba(ae,null,K),ue.return=ae,ue;case P:return K=Su(K,ae.mode,ue),K.return=ae,K;case oe:var be=K._init;return we(ae,be(K._payload),ue)}if(Me(K)||$(K))return K=Zr(K,ae.mode,ue,null),K.return=ae,K;Ro(ae,K)}return null}function _e(ae,K,ue,be){var nt=K!==null?K.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return nt!==null?null:k(ae,K,""+ue,be);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:return ue.key===nt?W(ae,K,ue,be):null;case P:return ue.key===nt?fe(ae,K,ue,be):null;case oe:return nt=ue._init,_e(ae,K,nt(ue._payload),be)}if(Me(ue)||$(ue))return nt!==null?null:ye(ae,K,ue,be,null);Ro(ae,ue)}return null}function He(ae,K,ue,be,nt){if(typeof be=="string"&&be!==""||typeof be=="number")return ae=ae.get(ue)||null,k(K,ae,""+be,nt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case L:return ae=ae.get(be.key===null?ue:be.key)||null,W(K,ae,be,nt);case P:return ae=ae.get(be.key===null?ue:be.key)||null,fe(K,ae,be,nt);case oe:var at=be._init;return He(ae,K,ue,at(be._payload),nt)}if(Me(be)||$(be))return ae=ae.get(ue)||null,ye(K,ae,be,nt,null);Ro(K,be)}return null}function Ze(ae,K,ue,be){for(var nt=null,at=null,ot=K,ct=K=0,Sn=null;ot!==null&&ct<ue.length;ct++){ot.index>ct?(Sn=ot,ot=null):Sn=ot.sibling;var Ut=_e(ae,ot,ue[ct],be);if(Ut===null){ot===null&&(ot=Sn);break}t&&ot&&Ut.alternate===null&&i(ae,ot),K=p(Ut,K,ct),at===null?nt=Ut:at.sibling=Ut,at=Ut,ot=Sn}if(ct===ue.length)return a(ae,ot),Kt&&Gr(ae,ct),nt;if(ot===null){for(;ct<ue.length;ct++)ot=we(ae,ue[ct],be),ot!==null&&(K=p(ot,K,ct),at===null?nt=ot:at.sibling=ot,at=ot);return Kt&&Gr(ae,ct),nt}for(ot=c(ae,ot);ct<ue.length;ct++)Sn=He(ot,ae,ct,ue[ct],be),Sn!==null&&(t&&Sn.alternate!==null&&ot.delete(Sn.key===null?ct:Sn.key),K=p(Sn,K,ct),at===null?nt=Sn:at.sibling=Sn,at=Sn);return t&&ot.forEach(function(Ar){return i(ae,Ar)}),Kt&&Gr(ae,ct),nt}function Je(ae,K,ue,be){var nt=$(ue);if(typeof nt!="function")throw Error(n(150));if(ue=nt.call(ue),ue==null)throw Error(n(151));for(var at=nt=null,ot=K,ct=K=0,Sn=null,Ut=ue.next();ot!==null&&!Ut.done;ct++,Ut=ue.next()){ot.index>ct?(Sn=ot,ot=null):Sn=ot.sibling;var Ar=_e(ae,ot,Ut.value,be);if(Ar===null){ot===null&&(ot=Sn);break}t&&ot&&Ar.alternate===null&&i(ae,ot),K=p(Ar,K,ct),at===null?nt=Ar:at.sibling=Ar,at=Ar,ot=Sn}if(Ut.done)return a(ae,ot),Kt&&Gr(ae,ct),nt;if(ot===null){for(;!Ut.done;ct++,Ut=ue.next())Ut=we(ae,Ut.value,be),Ut!==null&&(K=p(Ut,K,ct),at===null?nt=Ut:at.sibling=Ut,at=Ut);return Kt&&Gr(ae,ct),nt}for(ot=c(ae,ot);!Ut.done;ct++,Ut=ue.next())Ut=He(ot,ae,ct,Ut.value,be),Ut!==null&&(t&&Ut.alternate!==null&&ot.delete(Ut.key===null?ct:Ut.key),K=p(Ut,K,ct),at===null?nt=Ut:at.sibling=Ut,at=Ut);return t&&ot.forEach(function(ux){return i(ae,ux)}),Kt&&Gr(ae,ct),nt}function ln(ae,K,ue,be){if(typeof ue=="object"&&ue!==null&&ue.type===I&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:e:{for(var nt=ue.key,at=K;at!==null;){if(at.key===nt){if(nt=ue.type,nt===I){if(at.tag===7){a(ae,at.sibling),K=d(at,ue.props.children),K.return=ae,ae=K;break e}}else if(at.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===oe&&xh(nt)===at.type){a(ae,at.sibling),K=d(at,ue.props),K.ref=ba(ae,at,ue),K.return=ae,ae=K;break e}a(ae,at);break}else i(ae,at);at=at.sibling}ue.type===I?(K=Zr(ue.props.children,ae.mode,be,ue.key),K.return=ae,ae=K):(be=Qo(ue.type,ue.key,ue.props,null,ae.mode,be),be.ref=ba(ae,K,ue),be.return=ae,ae=be)}return A(ae);case P:e:{for(at=ue.key;K!==null;){if(K.key===at)if(K.tag===4&&K.stateNode.containerInfo===ue.containerInfo&&K.stateNode.implementation===ue.implementation){a(ae,K.sibling),K=d(K,ue.children||[]),K.return=ae,ae=K;break e}else{a(ae,K);break}else i(ae,K);K=K.sibling}K=Su(ue,ae.mode,be),K.return=ae,ae=K}return A(ae);case oe:return at=ue._init,ln(ae,K,at(ue._payload),be)}if(Me(ue))return Ze(ae,K,ue,be);if($(ue))return Je(ae,K,ue,be);Ro(ae,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,K!==null&&K.tag===6?(a(ae,K.sibling),K=d(K,ue),K.return=ae,ae=K):(a(ae,K),K=yu(ue,ae.mode,be),K.return=ae,ae=K),A(ae)):a(ae,K)}return ln}var ws=vh(!0),_h=vh(!1),Co=gr(null),No=null,Es=null,Nc=null;function Pc(){Nc=Es=No=null}function Lc(t){var i=Co.current;qt(Co),t._currentValue=i}function Dc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function bs(t,i){No=t,Nc=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Wn=!0),t.firstContext=null)}function oi(t){var i=t._currentValue;if(Nc!==t)if(t={context:t,memoizedValue:i,next:null},Es===null){if(No===null)throw Error(n(308));Es=t,No.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return i}var Wr=null;function Ic(t){Wr===null?Wr=[t]:Wr.push(t)}function yh(t,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Ic(i)):(a.next=d.next,d.next=a),i.interleaved=a,$i(t,c)}function $i(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var _r=!1;function Uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ki(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function yr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Dt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,$i(t,a)}return d=c.interleaved,d===null?(i.next=i,Ic(c)):(i.next=d.next,d.next=i),c.interleaved=i,$i(t,a)}function Po(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,An(t,a)}}function Mh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=A:p=p.next=A,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Lo(t,i,a,c){var d=t.updateQueue;_r=!1;var p=d.firstBaseUpdate,A=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var W=k,fe=W.next;W.next=null,A===null?p=fe:A.next=fe,A=W;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,k=ye.lastBaseUpdate,k!==A&&(k===null?ye.firstBaseUpdate=fe:k.next=fe,ye.lastBaseUpdate=W))}if(p!==null){var we=d.baseState;A=0,ye=fe=W=null,k=p;do{var _e=k.lane,He=k.eventTime;if((c&_e)===_e){ye!==null&&(ye=ye.next={eventTime:He,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ze=t,Je=k;switch(_e=i,He=a,Je.tag){case 1:if(Ze=Je.payload,typeof Ze=="function"){we=Ze.call(He,we,_e);break e}we=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=Je.payload,_e=typeof Ze=="function"?Ze.call(He,we,_e):Ze,_e==null)break e;we=Z({},we,_e);break e;case 2:_r=!0}}k.callback!==null&&k.lane!==0&&(t.flags|=64,_e=d.effects,_e===null?d.effects=[k]:_e.push(k))}else He={eventTime:He,lane:_e,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ye===null?(fe=ye=He,W=we):ye=ye.next=He,A|=_e;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;_e=k,k=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(ye===null&&(W=we),d.baseState=W,d.firstBaseUpdate=fe,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do A|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);qr|=A,t.lanes=A,t.memoizedState=we}}function wh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Ta={},Li=gr(Ta),Aa=gr(Ta),Ra=gr(Ta);function jr(t){if(t===Ta)throw Error(n(174));return t}function Fc(t,i){switch(jt(Ra,i),jt(Aa,t),jt(Li,Ta),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=E(i,t)}qt(Li),jt(Li,i)}function Ts(){qt(Li),qt(Aa),qt(Ra)}function Eh(t){jr(Ra.current);var i=jr(Li.current),a=E(i,t.type);i!==a&&(jt(Aa,t),jt(Li,a))}function Oc(t){Aa.current===t&&(qt(Li),qt(Aa))}var Jt=gr(0);function Do(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var kc=[];function Bc(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var Io=T.ReactCurrentDispatcher,zc=T.ReactCurrentBatchConfig,Xr=0,en=null,mn=null,_n=null,Uo=!1,Ca=!1,Na=0,Lg=0;function Cn(){throw Error(n(321))}function Vc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!xi(t[a],i[a]))return!1;return!0}function Hc(t,i,a,c,d,p){if(Xr=p,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Io.current=t===null||t.memoizedState===null?Fg:Og,t=a(c,d),Ca){p=0;do{if(Ca=!1,Na=0,25<=p)throw Error(n(301));p+=1,_n=mn=null,i.updateQueue=null,Io.current=kg,t=a(c,d)}while(Ca)}if(Io.current=ko,i=mn!==null&&mn.next!==null,Xr=0,_n=mn=en=null,Uo=!1,i)throw Error(n(300));return t}function Gc(){var t=Na!==0;return Na=0,t}function Di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?en.memoizedState=_n=t:_n=_n.next=t,_n}function li(){if(mn===null){var t=en.alternate;t=t!==null?t.memoizedState:null}else t=mn.next;var i=_n===null?en.memoizedState:_n.next;if(i!==null)_n=i,mn=t;else{if(t===null)throw Error(n(310));mn=t,t={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},_n===null?en.memoizedState=_n=t:_n=_n.next=t}return _n}function Pa(t,i){return typeof i=="function"?i(t):i}function Wc(t){var i=li(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=mn,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var A=d.next;d.next=p.next,p.next=A}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var k=A=null,W=null,fe=p;do{var ye=fe.lane;if((Xr&ye)===ye)W!==null&&(W=W.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:t(c,fe.action);else{var we={lane:ye,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};W===null?(k=W=we,A=c):W=W.next=we,en.lanes|=ye,qr|=ye}fe=fe.next}while(fe!==null&&fe!==p);W===null?A=c:W.next=k,xi(c,i.memoizedState)||(Wn=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=W,a.lastRenderedState=c}if(t=a.interleaved,t!==null){d=t;do p=d.lane,en.lanes|=p,qr|=p,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function jc(t){var i=li(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var A=d=d.next;do p=t(p,A.action),A=A.next;while(A!==d);xi(p,i.memoizedState)||(Wn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function bh(){}function Th(t,i){var a=en,c=li(),d=i(),p=!xi(c.memoizedState,d);if(p&&(c.memoizedState=d,Wn=!0),c=c.queue,Xc(Ch.bind(null,a,c,t),[t]),c.getSnapshot!==i||p||_n!==null&&_n.memoizedState.tag&1){if(a.flags|=2048,La(9,Rh.bind(null,a,c,d,i),void 0,null),yn===null)throw Error(n(349));(Xr&30)!==0||Ah(a,i,d)}return d}function Ah(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Rh(t,i,a,c){i.value=a,i.getSnapshot=c,Nh(i)&&Ph(t)}function Ch(t,i,a){return a(function(){Nh(i)&&Ph(t)})}function Nh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!xi(t,a)}catch{return!0}}function Ph(t){var i=$i(t,1);i!==null&&Mi(i,t,1,-1)}function Lh(t){var i=Di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},i.queue=t,t=t.dispatch=Ug.bind(null,en,t),[i.memoizedState,t]}function La(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Dh(){return li().memoizedState}function Fo(t,i,a,c){var d=Di();en.flags|=t,d.memoizedState=La(1|i,a,void 0,c===void 0?null:c)}function Oo(t,i,a,c){var d=li();c=c===void 0?null:c;var p=void 0;if(mn!==null){var A=mn.memoizedState;if(p=A.destroy,c!==null&&Vc(c,A.deps)){d.memoizedState=La(i,a,p,c);return}}en.flags|=t,d.memoizedState=La(1|i,a,p,c)}function Ih(t,i){return Fo(8390656,8,t,i)}function Xc(t,i){return Oo(2048,8,t,i)}function Uh(t,i){return Oo(4,2,t,i)}function Fh(t,i){return Oo(4,4,t,i)}function Oh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function kh(t,i,a){return a=a!=null?a.concat([t]):null,Oo(4,4,Oh.bind(null,i,t),a)}function qc(){}function Bh(t,i){var a=li();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Vc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function zh(t,i){var a=li();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Vc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Vh(t,i,a){return(Xr&21)===0?(t.baseState&&(t.baseState=!1,Wn=!0),t.memoizedState=a):(xi(a,i)||(a=pn(),en.lanes|=a,qr|=a,t.baseState=!0),i)}function Dg(t,i){var a=vt;vt=a!==0&&4>a?a:4,t(!0);var c=zc.transition;zc.transition={};try{t(!1),i()}finally{vt=a,zc.transition=c}}function Hh(){return li().memoizedState}function Ig(t,i,a){var c=Er(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Gh(t))Wh(i,a);else if(a=yh(t,i,a,c),a!==null){var d=On();Mi(a,t,c,d),jh(a,i,c)}}function Ug(t,i,a){var c=Er(t),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gh(t))Wh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var A=i.lastRenderedState,k=p(A,a);if(d.hasEagerState=!0,d.eagerState=k,xi(k,A)){var W=i.interleaved;W===null?(d.next=d,Ic(i)):(d.next=W.next,W.next=d),i.interleaved=d;return}}catch{}finally{}a=yh(t,i,d,c),a!==null&&(d=On(),Mi(a,t,c,d),jh(a,i,c))}}function Gh(t){var i=t.alternate;return t===en||i!==null&&i===en}function Wh(t,i){Ca=Uo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function jh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,An(t,a)}}var ko={readContext:oi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},Fg={readContext:oi,useCallback:function(t,i){return Di().memoizedState=[t,i===void 0?null:i],t},useContext:oi,useEffect:Ih,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Fo(4194308,4,Oh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Fo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Fo(4,2,t,i)},useMemo:function(t,i){var a=Di();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Di();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Ig.bind(null,en,t),[c.memoizedState,t]},useRef:function(t){var i=Di();return t={current:t},i.memoizedState=t},useState:Lh,useDebugValue:qc,useDeferredValue:function(t){return Di().memoizedState=t},useTransition:function(){var t=Lh(!1),i=t[0];return t=Dg.bind(null,t[1]),Di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=en,d=Di();if(Kt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),yn===null)throw Error(n(349));(Xr&30)!==0||Ah(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Ih(Ch.bind(null,c,p,t),[t]),c.flags|=2048,La(9,Rh.bind(null,c,p,a,i),void 0,null),a},useId:function(){var t=Di(),i=yn.identifierPrefix;if(Kt){var a=Yi,c=qi;a=(c&~(1<<32-Ie(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Na++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Lg++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Og={readContext:oi,useCallback:Bh,useContext:oi,useEffect:Xc,useImperativeHandle:kh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:zh,useReducer:Wc,useRef:Dh,useState:function(){return Wc(Pa)},useDebugValue:qc,useDeferredValue:function(t){var i=li();return Vh(i,mn.memoizedState,t)},useTransition:function(){var t=Wc(Pa)[0],i=li().memoizedState;return[t,i]},useMutableSource:bh,useSyncExternalStore:Th,useId:Hh,unstable_isNewReconciler:!1},kg={readContext:oi,useCallback:Bh,useContext:oi,useEffect:Xc,useImperativeHandle:kh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:zh,useReducer:jc,useRef:Dh,useState:function(){return jc(Pa)},useDebugValue:qc,useDeferredValue:function(t){var i=li();return mn===null?i.memoizedState=t:Vh(i,mn.memoizedState,t)},useTransition:function(){var t=jc(Pa)[0],i=li().memoizedState;return[t,i]},useMutableSource:bh,useSyncExternalStore:Th,useId:Hh,unstable_isNewReconciler:!1};function _i(t,i){if(t&&t.defaultProps){i=Z({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Yc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:Z({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bo={isMounted:function(t){return(t=t._reactInternals)?Zt(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=On(),d=Er(t),p=Ki(c,d);p.payload=i,a!=null&&(p.callback=a),i=yr(t,p,d),i!==null&&(Mi(i,t,d,c),Po(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=On(),d=Er(t),p=Ki(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=yr(t,p,d),i!==null&&(Mi(i,t,d,c),Po(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=On(),c=Er(t),d=Ki(a,c);d.tag=2,i!=null&&(d.callback=i),i=yr(t,d,c),i!==null&&(Mi(i,t,c,a),Po(i,t,c))}};function Xh(t,i,a,c,d,p,A){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,A):i.prototype&&i.prototype.isPureReactComponent?!va(a,c)||!va(d,p):!0}function qh(t,i,a){var c=!1,d=xr,p=i.contextType;return typeof p=="object"&&p!==null?p=oi(p):(d=Gn(i)?Vr:Rn.current,c=i.contextTypes,p=(c=c!=null)?_s(t,d):xr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Yh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Bo.enqueueReplaceState(i,i.state,null)}function $c(t,i,a,c){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Uc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=oi(p):(p=Gn(i)?Vr:Rn.current,d.context=_s(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Yc(t,i,p,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Bo.enqueueReplaceState(d,d.state,null),Lo(t,a,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,i){try{var a="",c=i;do a+=De(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Kc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Zc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Bg=typeof WeakMap=="function"?WeakMap:Map;function $h(t,i,a){a=Ki(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Xo||(Xo=!0,fu=c),Zc(t,i)},a}function Kh(t,i,a){a=Ki(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Zc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Zc(t,i),typeof c!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function Zh(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Bg;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),t=Jg.bind(null,t,i,a),i.then(t,t))}function Qh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Jh(t,i,a,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ki(-1,1),i.tag=2,yr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var zg=T.ReactCurrentOwner,Wn=!1;function Fn(t,i,a,c){i.child=t===null?_h(i,null,a,c):ws(i,t.child,a,c)}function ep(t,i,a,c,d){a=a.render;var p=i.ref;return bs(i,d),c=Hc(t,i,a,c,p,d),a=Gc(),t!==null&&!Wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Zi(t,i,d)):(Kt&&a&&bc(i),i.flags|=1,Fn(t,i,c,d),i.child)}function tp(t,i,a,c,d){if(t===null){var p=a.type;return typeof p=="function"&&!_u(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,np(t,i,p,c,d)):(t=Qo(a.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var A=p.memoizedProps;if(a=a.compare,a=a!==null?a:va,a(A,c)&&t.ref===i.ref)return Zi(t,i,d)}return i.flags|=1,t=Tr(p,c),t.ref=i.ref,t.return=i,i.child=t}function np(t,i,a,c,d){if(t!==null){var p=t.memoizedProps;if(va(p,c)&&t.ref===i.ref)if(Wn=!1,i.pendingProps=c=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Wn=!0);else return i.lanes=t.lanes,Zi(t,i,d)}return Qc(t,i,a,c,d)}function ip(t,i,a){var c=i.pendingProps,d=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(Cs,Jn),Jn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,jt(Cs,Jn),Jn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,jt(Cs,Jn),Jn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,jt(Cs,Jn),Jn|=c;return Fn(t,i,d,a),i.child}function rp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Qc(t,i,a,c,d){var p=Gn(a)?Vr:Rn.current;return p=_s(i,p),bs(i,d),a=Hc(t,i,a,c,p,d),c=Gc(),t!==null&&!Wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Zi(t,i,d)):(Kt&&c&&bc(i),i.flags|=1,Fn(t,i,a,d),i.child)}function sp(t,i,a,c,d){if(Gn(a)){var p=!0;wo(i)}else p=!1;if(bs(i,d),i.stateNode===null)Vo(t,i),qh(i,a,c),$c(i,a,c,d),c=!0;else if(t===null){var A=i.stateNode,k=i.memoizedProps;A.props=k;var W=A.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=oi(fe):(fe=Gn(a)?Vr:Rn.current,fe=_s(i,fe));var ye=a.getDerivedStateFromProps,we=typeof ye=="function"||typeof A.getSnapshotBeforeUpdate=="function";we||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==c||W!==fe)&&Yh(i,A,c,fe),_r=!1;var _e=i.memoizedState;A.state=_e,Lo(i,c,A,d),W=i.memoizedState,k!==c||_e!==W||Hn.current||_r?(typeof ye=="function"&&(Yc(i,a,ye,c),W=i.memoizedState),(k=_r||Xh(i,a,k,c,_e,W,fe))?(we||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),A.props=c,A.state=W,A.context=fe,c=k):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,Sh(t,i),k=i.memoizedProps,fe=i.type===i.elementType?k:_i(i.type,k),A.props=fe,we=i.pendingProps,_e=A.context,W=a.contextType,typeof W=="object"&&W!==null?W=oi(W):(W=Gn(a)?Vr:Rn.current,W=_s(i,W));var He=a.getDerivedStateFromProps;(ye=typeof He=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==we||_e!==W)&&Yh(i,A,c,W),_r=!1,_e=i.memoizedState,A.state=_e,Lo(i,c,A,d);var Ze=i.memoizedState;k!==we||_e!==Ze||Hn.current||_r?(typeof He=="function"&&(Yc(i,a,He,c),Ze=i.memoizedState),(fe=_r||Xh(i,a,fe,c,_e,Ze,W)||!1)?(ye||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Ze,W),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Ze,W)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||k===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ze),A.props=c,A.state=Ze,A.context=W,c=fe):(typeof A.componentDidUpdate!="function"||k===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),c=!1)}return Jc(t,i,a,c,p,d)}function Jc(t,i,a,c,d,p){rp(t,i);var A=(i.flags&128)!==0;if(!c&&!A)return d&&uh(i,a,!1),Zi(t,i,p);c=i.stateNode,zg.current=i;var k=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&A?(i.child=ws(i,t.child,null,p),i.child=ws(i,null,k,p)):Fn(t,i,k,p),i.memoizedState=c.state,d&&uh(i,a,!0),i.child}function ap(t){var i=t.stateNode;i.pendingContext?lh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&lh(t,i.context,!1),Fc(t,i.containerInfo)}function op(t,i,a,c,d){return Ms(),Cc(d),i.flags|=256,Fn(t,i,a,c),i.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(t){return{baseLanes:t,cachePool:null,transitions:null}}function lp(t,i,a){var c=i.pendingProps,d=Jt.current,p=!1,A=(i.flags&128)!==0,k;if((k=A)||(k=t!==null&&t.memoizedState===null?!1:(d&2)!==0),k?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),jt(Jt,d&1),t===null)return Rc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,t=c.fallback,p?(c=i.mode,p=i.child,A={mode:"hidden",children:A},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=A):p=Jo(A,c,0,null),t=Zr(t,c,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=tu(a),i.memoizedState=eu,t):nu(i,A));if(d=t.memoizedState,d!==null&&(k=d.dehydrated,k!==null))return Vg(t,i,A,c,k,d,a);if(p){p=c.fallback,A=i.mode,d=t.child,k=d.sibling;var W={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=Tr(d,W),c.subtreeFlags=d.subtreeFlags&14680064),k!==null?p=Tr(k,p):(p=Zr(p,A,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,A=t.child.memoizedState,A=A===null?tu(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},p.memoizedState=A,p.childLanes=t.childLanes&~a,i.memoizedState=eu,c}return p=t.child,t=p.sibling,c=Tr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function nu(t,i){return i=Jo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function zo(t,i,a,c){return c!==null&&Cc(c),ws(i,t.child,null,a),t=nu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Vg(t,i,a,c,d,p,A){if(a)return i.flags&256?(i.flags&=-257,c=Kc(Error(n(422))),zo(t,i,A,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=Jo({mode:"visible",children:c.children},d,0,null),p=Zr(p,d,A,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&ws(i,t.child,null,A),i.child.memoizedState=tu(A),i.memoizedState=eu,p);if((i.mode&1)===0)return zo(t,i,A,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var k=c.dgst;return c=k,p=Error(n(419)),c=Kc(p,c,void 0),zo(t,i,A,c)}if(k=(A&t.childLanes)!==0,Wn||k){if(c=yn,c!==null){switch(A&-A){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|A))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,$i(t,d),Mi(c,t,d,-1))}return vu(),c=Kc(Error(n(421))),zo(t,i,A,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=ex.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Qn=mr(d.nextSibling),Zn=i,Kt=!0,vi=null,t!==null&&(si[ai++]=qi,si[ai++]=Yi,si[ai++]=Hr,qi=t.id,Yi=t.overflow,Hr=i),i=nu(i,c.children),i.flags|=4096,i)}function cp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Dc(t.return,i,a)}function iu(t,i,a,c,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function up(t,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Fn(t,i,c.children,a),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cp(t,a,i);else if(t.tag===19)cp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(jt(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Do(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),iu(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Do(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}iu(i,!0,a,null,p);break;case"together":iu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Vo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Zi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),qr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Tr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Tr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Hg(t,i,a){switch(i.tag){case 3:ap(i),Ms();break;case 5:Eh(i);break;case 1:Gn(i.type)&&wo(i);break;case 4:Fc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;jt(Co,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(jt(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?lp(t,i,a):(jt(Jt,Jt.current&1),t=Zi(t,i,a),t!==null?t.sibling:null);jt(Jt,Jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return up(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),jt(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,ip(t,i,a)}return Zi(t,i,a)}var dp,ru,fp,hp;dp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ru=function(){},fp=function(t,i,a,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,jr(Li.current);var p=null;switch(a){case"input":d=dt(t,d),c=dt(t,c),p=[];break;case"select":d=Z({},d,{value:void 0}),c=Z({},c,{value:void 0}),p=[];break;case"textarea":d=pt(t,d),c=pt(t,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=yo)}Ye(a,c);var A;a=null;for(fe in d)if(!c.hasOwnProperty(fe)&&d.hasOwnProperty(fe)&&d[fe]!=null)if(fe==="style"){var k=d[fe];for(A in k)k.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?p||(p=[]):(p=p||[]).push(fe,null));for(fe in c){var W=c[fe];if(k=d!=null?d[fe]:void 0,c.hasOwnProperty(fe)&&W!==k&&(W!=null||k!=null))if(fe==="style")if(k){for(A in k)!k.hasOwnProperty(A)||W&&W.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in W)W.hasOwnProperty(A)&&k[A]!==W[A]&&(a||(a={}),a[A]=W[A])}else a||(p||(p=[]),p.push(fe,a)),a=W;else fe==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,k=k?k.__html:void 0,W!=null&&k!==W&&(p=p||[]).push(fe,W)):fe==="children"?typeof W!="string"&&typeof W!="number"||(p=p||[]).push(fe,""+W):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(W!=null&&fe==="onScroll"&&Xt("scroll",t),p||k===W||(p=[])):(p=p||[]).push(fe,W))}a&&(p=p||[]).push("style",a);var fe=p;(i.updateQueue=fe)&&(i.flags|=4)}},hp=function(t,i,a,c){a!==c&&(i.flags|=4)};function Da(t,i){if(!Kt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Nn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function Gg(t,i,a){var c=i.pendingProps;switch(Tc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return Gn(i.type)&&Mo(),Nn(i),null;case 3:return c=i.stateNode,Ts(),qt(Hn),qt(Rn),Bc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ao(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vi!==null&&(mu(vi),vi=null))),ru(t,i),Nn(i),null;case 5:Oc(i);var d=jr(Ra.current);if(a=i.type,t!==null&&i.stateNode!=null)fp(t,i,a,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return Nn(i),null}if(t=jr(Li.current),Ao(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Pi]=i,c[wa]=p,t=(i.mode&1)!==0,a){case"dialog":Xt("cancel",c),Xt("close",c);break;case"iframe":case"object":case"embed":Xt("load",c);break;case"video":case"audio":for(d=0;d<ya.length;d++)Xt(ya[d],c);break;case"source":Xt("error",c);break;case"img":case"image":case"link":Xt("error",c),Xt("load",c);break;case"details":Xt("toggle",c);break;case"input":xt(c,p),Xt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Xt("invalid",c);break;case"textarea":V(c,p),Xt("invalid",c)}Ye(a,p),d=null;for(var A in p)if(p.hasOwnProperty(A)){var k=p[A];A==="children"?typeof k=="string"?c.textContent!==k&&(p.suppressHydrationWarning!==!0&&_o(c.textContent,k,t),d=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(p.suppressHydrationWarning!==!0&&_o(c.textContent,k,t),d=["children",""+k]):o.hasOwnProperty(A)&&k!=null&&A==="onScroll"&&Xt("scroll",c)}switch(a){case"input":Le(c),Ot(c,p,!0);break;case"textarea":Le(c),Lt(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=yo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=O(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=A.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=A.createElement(a,{is:c.is}):(t=A.createElement(a),a==="select"&&(A=t,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):t=A.createElementNS(t,a),t[Pi]=i,t[wa]=c,dp(t,i,!1,!1),i.stateNode=t;e:{switch(A=Ce(a,c),a){case"dialog":Xt("cancel",t),Xt("close",t),d=c;break;case"iframe":case"object":case"embed":Xt("load",t),d=c;break;case"video":case"audio":for(d=0;d<ya.length;d++)Xt(ya[d],t);d=c;break;case"source":Xt("error",t),d=c;break;case"img":case"image":case"link":Xt("error",t),Xt("load",t),d=c;break;case"details":Xt("toggle",t),d=c;break;case"input":xt(t,c),d=dt(t,c),Xt("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=Z({},c,{value:void 0}),Xt("invalid",t);break;case"textarea":V(t,c),d=pt(t,c),Xt("invalid",t);break;default:d=c}Ye(a,d),k=d;for(p in k)if(k.hasOwnProperty(p)){var W=k[p];p==="style"?ge(t,W):p==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&ce(t,W)):p==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&he(t,W):typeof W=="number"&&he(t,""+W):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?W!=null&&p==="onScroll"&&Xt("scroll",t):W!=null&&F(t,p,W,A))}switch(a){case"input":Le(t),Ot(t,c,!1);break;case"textarea":Le(t),Lt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+le(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?Ge(t,!!c.multiple,p,!1):c.defaultValue!=null&&Ge(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=yo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(t&&i.stateNode!=null)hp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=jr(Ra.current),jr(Li.current),Ao(i)){if(c=i.stateNode,a=i.memoizedProps,c[Pi]=i,(p=c.nodeValue!==a)&&(t=Zn,t!==null))switch(t.tag){case 3:_o(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(c.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Pi]=i,i.stateNode=c}return Nn(i),null;case 13:if(qt(Jt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Kt&&Qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gh(),Ms(),i.flags|=98560,p=!1;else if(p=Ao(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Pi]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),p=!1}else vi!==null&&(mu(vi),vi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Jt.current&1)!==0?gn===0&&(gn=3):vu())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return Ts(),ru(t,i),t===null&&Sa(i.stateNode.containerInfo),Nn(i),null;case 10:return Lc(i.type._context),Nn(i),null;case 17:return Gn(i.type)&&Mo(),Nn(i),null;case 19:if(qt(Jt),p=i.memoizedState,p===null)return Nn(i),null;if(c=(i.flags&128)!==0,A=p.rendering,A===null)if(c)Da(p,!1);else{if(gn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(A=Do(t),A!==null){for(i.flags|=128,Da(p,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,t=c,p.flags&=14680066,A=p.alternate,A===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=A.childLanes,p.lanes=A.lanes,p.child=A.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=A.memoizedProps,p.memoizedState=A.memoizedState,p.updateQueue=A.updateQueue,p.type=A.type,t=A.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return jt(Jt,Jt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Qt()>Ns&&(i.flags|=128,c=!0,Da(p,!1),i.lanes=4194304)}else{if(!c)if(t=Do(A),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Da(p,!0),p.tail===null&&p.tailMode==="hidden"&&!A.alternate&&!Kt)return Nn(i),null}else 2*Qt()-p.renderingStartTime>Ns&&a!==1073741824&&(i.flags|=128,c=!0,Da(p,!1),i.lanes=4194304);p.isBackwards?(A.sibling=i.child,i.child=A):(a=p.last,a!==null?a.sibling=A:i.child=A,p.last=A)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Qt(),i.sibling=null,a=Jt.current,jt(Jt,c?a&1|2:a&1),i):(Nn(i),null);case 22:case 23:return xu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Jn&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Wg(t,i){switch(Tc(i),i.tag){case 1:return Gn(i.type)&&Mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ts(),qt(Hn),qt(Rn),Bc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Oc(i),null;case 13:if(qt(Jt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return qt(Jt),null;case 4:return Ts(),null;case 10:return Lc(i.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var Ho=!1,Pn=!1,jg=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Rs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){an(t,i,c)}else a.current=null}function su(t,i,a){try{a()}catch(c){an(t,i,c)}}var pp=!1;function Xg(t,i){if(xc=oo,t=Xf(),cc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var A=0,k=-1,W=-1,fe=0,ye=0,we=t,_e=null;t:for(;;){for(var He;we!==a||d!==0&&we.nodeType!==3||(k=A+d),we!==p||c!==0&&we.nodeType!==3||(W=A+c),we.nodeType===3&&(A+=we.nodeValue.length),(He=we.firstChild)!==null;)_e=we,we=He;for(;;){if(we===t)break t;if(_e===a&&++fe===d&&(k=A),_e===p&&++ye===c&&(W=A),(He=we.nextSibling)!==null)break;we=_e,_e=we.parentNode}we=He}a=k===-1||W===-1?null:{start:k,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(vc={focusedElem:t,selectionRange:a},oo=!1,Xe=i;Xe!==null;)if(i=Xe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Xe=t;else for(;Xe!==null;){i=Xe;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var Je=Ze.memoizedProps,ln=Ze.memoizedState,ae=i.stateNode,K=ae.getSnapshotBeforeUpdate(i.elementType===i.type?Je:_i(i.type,Je),ln);ae.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(be){an(i,i.return,be)}if(t=i.sibling,t!==null){t.return=i.return,Xe=t;break}Xe=i.return}return Ze=pp,pp=!1,Ze}function Ia(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&su(i,a,p)}d=d.next}while(d!==c)}}function Go(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function au(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function mp(t){var i=t.alternate;i!==null&&(t.alternate=null,mp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Pi],delete i[wa],delete i[Mc],delete i[Rg],delete i[Cg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gp(t){return t.tag===5||t.tag===3||t.tag===4}function xp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ou(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=yo));else if(c!==4&&(t=t.child,t!==null))for(ou(t,i,a),t=t.sibling;t!==null;)ou(t,i,a),t=t.sibling}function lu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(lu(t,i,a),t=t.sibling;t!==null;)lu(t,i,a),t=t.sibling}var En=null,yi=!1;function Sr(t,i,a){for(a=a.child;a!==null;)vp(t,i,a),a=a.sibling}function vp(t,i,a){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 5:Pn||Rs(a,i);case 6:var c=En,d=yi;En=null,Sr(t,i,a),En=c,yi=d,En!==null&&(yi?(t=En,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):En.removeChild(a.stateNode));break;case 18:En!==null&&(yi?(t=En,a=a.stateNode,t.nodeType===8?Sc(t.parentNode,a):t.nodeType===1&&Sc(t,a),fa(t)):Sc(En,a.stateNode));break;case 4:c=En,d=yi,En=a.stateNode.containerInfo,yi=!0,Sr(t,i,a),En=c,yi=d;break;case 0:case 11:case 14:case 15:if(!Pn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,A=p.destroy;p=p.tag,A!==void 0&&((p&2)!==0||(p&4)!==0)&&su(a,i,A),d=d.next}while(d!==c)}Sr(t,i,a);break;case 1:if(!Pn&&(Rs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){an(a,i,k)}Sr(t,i,a);break;case 21:Sr(t,i,a);break;case 22:a.mode&1?(Pn=(c=Pn)||a.memoizedState!==null,Sr(t,i,a),Pn=c):Sr(t,i,a);break;default:Sr(t,i,a)}}function _p(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new jg),i.forEach(function(c){var d=tx.bind(null,t,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Si(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=t,A=i,k=A;e:for(;k!==null;){switch(k.tag){case 5:En=k.stateNode,yi=!1;break e;case 3:En=k.stateNode.containerInfo,yi=!0;break e;case 4:En=k.stateNode.containerInfo,yi=!0;break e}k=k.return}if(En===null)throw Error(n(160));vp(p,A,d),En=null,yi=!1;var W=d.alternate;W!==null&&(W.return=null),d.return=null}catch(fe){an(d,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)yp(i,t),i=i.sibling}function yp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Si(i,t),Ii(t),c&4){try{Ia(3,t,t.return),Go(3,t)}catch(Je){an(t,t.return,Je)}try{Ia(5,t,t.return)}catch(Je){an(t,t.return,Je)}}break;case 1:Si(i,t),Ii(t),c&512&&a!==null&&Rs(a,a.return);break;case 5:if(Si(i,t),Ii(t),c&512&&a!==null&&Rs(a,a.return),t.flags&32){var d=t.stateNode;try{he(d,"")}catch(Je){an(t,t.return,Je)}}if(c&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,A=a!==null?a.memoizedProps:p,k=t.type,W=t.updateQueue;if(t.updateQueue=null,W!==null)try{k==="input"&&p.type==="radio"&&p.name!=null&&wt(d,p),Ce(k,A);var fe=Ce(k,p);for(A=0;A<W.length;A+=2){var ye=W[A],we=W[A+1];ye==="style"?ge(d,we):ye==="dangerouslySetInnerHTML"?ce(d,we):ye==="children"?he(d,we):F(d,ye,we,fe)}switch(k){case"input":ht(d,p);break;case"textarea":Yt(d,p);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var He=p.value;He!=null?Ge(d,!!p.multiple,He,!1):_e!==!!p.multiple&&(p.defaultValue!=null?Ge(d,!!p.multiple,p.defaultValue,!0):Ge(d,!!p.multiple,p.multiple?[]:"",!1))}d[wa]=p}catch(Je){an(t,t.return,Je)}}break;case 6:if(Si(i,t),Ii(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Je){an(t,t.return,Je)}}break;case 3:if(Si(i,t),Ii(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{fa(i.containerInfo)}catch(Je){an(t,t.return,Je)}break;case 4:Si(i,t),Ii(t);break;case 13:Si(i,t),Ii(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(du=Qt())),c&4&&_p(t);break;case 22:if(ye=a!==null&&a.memoizedState!==null,t.mode&1?(Pn=(fe=Pn)||ye,Si(i,t),Pn=fe):Si(i,t),Ii(t),c&8192){if(fe=t.memoizedState!==null,(t.stateNode.isHidden=fe)&&!ye&&(t.mode&1)!==0)for(Xe=t,ye=t.child;ye!==null;){for(we=Xe=ye;Xe!==null;){switch(_e=Xe,He=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ia(4,_e,_e.return);break;case 1:Rs(_e,_e.return);var Ze=_e.stateNode;if(typeof Ze.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(Je){an(c,a,Je)}}break;case 5:Rs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){wp(we);continue}}He!==null?(He.return=_e,Xe=He):wp(we)}ye=ye.sibling}e:for(ye=null,we=t;;){if(we.tag===5){if(ye===null){ye=we;try{d=we.stateNode,fe?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(k=we.stateNode,W=we.memoizedProps.style,A=W!=null&&W.hasOwnProperty("display")?W.display:null,k.style.display=pe("display",A))}catch(Je){an(t,t.return,Je)}}}else if(we.tag===6){if(ye===null)try{we.stateNode.nodeValue=fe?"":we.memoizedProps}catch(Je){an(t,t.return,Je)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===t)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===t)break e;for(;we.sibling===null;){if(we.return===null||we.return===t)break e;ye===we&&(ye=null),we=we.return}ye===we&&(ye=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Si(i,t),Ii(t),c&4&&_p(t);break;case 21:break;default:Si(i,t),Ii(t)}}function Ii(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(gp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(he(d,""),c.flags&=-33);var p=xp(t);lu(t,p,d);break;case 3:case 4:var A=c.stateNode.containerInfo,k=xp(t);ou(t,k,A);break;default:throw Error(n(161))}}catch(W){an(t,t.return,W)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function qg(t,i,a){Xe=t,Sp(t)}function Sp(t,i,a){for(var c=(t.mode&1)!==0;Xe!==null;){var d=Xe,p=d.child;if(d.tag===22&&c){var A=d.memoizedState!==null||Ho;if(!A){var k=d.alternate,W=k!==null&&k.memoizedState!==null||Pn;k=Ho;var fe=Pn;if(Ho=A,(Pn=W)&&!fe)for(Xe=d;Xe!==null;)A=Xe,W=A.child,A.tag===22&&A.memoizedState!==null?Ep(d):W!==null?(W.return=A,Xe=W):Ep(d);for(;p!==null;)Xe=p,Sp(p),p=p.sibling;Xe=d,Ho=k,Pn=fe}Mp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Xe=p):Mp(t)}}function Mp(t){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||Go(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Pn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:_i(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&wh(i,p,c);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}wh(i,A,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var ye=fe.memoizedState;if(ye!==null){var we=ye.dehydrated;we!==null&&fa(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Pn||i.flags&512&&au(i)}catch(_e){an(i,i.return,_e)}}if(i===t){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function wp(t){for(;Xe!==null;){var i=Xe;if(i===t){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Ep(t){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Go(4,i)}catch(W){an(i,a,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(W){an(i,d,W)}}var p=i.return;try{au(i)}catch(W){an(i,p,W)}break;case 5:var A=i.return;try{au(i)}catch(W){an(i,A,W)}}}catch(W){an(i,i.return,W)}if(i===t){Xe=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Xe=k;break}Xe=i.return}}var Yg=Math.ceil,Wo=T.ReactCurrentDispatcher,cu=T.ReactCurrentOwner,ci=T.ReactCurrentBatchConfig,Dt=0,yn=null,un=null,bn=0,Jn=0,Cs=gr(0),gn=0,Ua=null,qr=0,jo=0,uu=0,Fa=null,jn=null,du=0,Ns=1/0,Qi=null,Xo=!1,fu=null,Mr=null,qo=!1,wr=null,Yo=0,Oa=0,hu=null,$o=-1,Ko=0;function On(){return(Dt&6)!==0?Qt():$o!==-1?$o:$o=Qt()}function Er(t){return(t.mode&1)===0?1:(Dt&2)!==0&&bn!==0?bn&-bn:Pg.transition!==null?(Ko===0&&(Ko=pn()),Ko):(t=vt,t!==0||(t=window.event,t=t===void 0?16:Tf(t.type)),t)}function Mi(t,i,a,c){if(50<Oa)throw Oa=0,hu=null,Error(n(185));on(t,a,c),((Dt&2)===0||t!==yn)&&(t===yn&&((Dt&2)===0&&(jo|=a),gn===4&&br(t,bn)),Xn(t,c),a===1&&Dt===0&&(i.mode&1)===0&&(Ns=Qt()+500,Eo&&vr()))}function Xn(t,i){var a=t.callbackNode;Gt(t,i);var c=At(t,t===yn?bn:0);if(c===0)a!==null&&sa(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&sa(a),i===1)t.tag===0?Ng(Tp.bind(null,t)):dh(Tp.bind(null,t)),Tg(function(){(Dt&6)===0&&vr()}),a=null;else{switch(hi(c)){case 1:a=aa;break;case 4:a=oa;break;case 16:a=R;break;case 536870912:a=de;break;default:a=R}a=Ip(a,bp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function bp(t,i){if($o=-1,Ko=0,(Dt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ps()&&t.callbackNode!==a)return null;var c=At(t,t===yn?bn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Zo(t,c);else{i=c;var d=Dt;Dt|=2;var p=Rp();(yn!==t||bn!==i)&&(Qi=null,Ns=Qt()+500,$r(t,i));do try{Zg();break}catch(k){Ap(t,k)}while(!0);Pc(),Wo.current=p,Dt=d,un!==null?i=0:(yn=null,bn=0,i=gn)}if(i!==0){if(i===2&&(d=kt(t),d!==0&&(c=d,i=pu(t,d))),i===1)throw a=Ua,$r(t,0),br(t,c),Xn(t,Qt()),a;if(i===6)br(t,c);else{if(d=t.current.alternate,(c&30)===0&&!$g(d)&&(i=Zo(t,c),i===2&&(p=kt(t),p!==0&&(c=p,i=pu(t,p))),i===1))throw a=Ua,$r(t,0),br(t,c),Xn(t,Qt()),a;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Kr(t,jn,Qi);break;case 3:if(br(t,c),(c&130023424)===c&&(i=du+500-Qt(),10<i)){if(At(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){On(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=yc(Kr.bind(null,t,jn,Qi),i);break}Kr(t,jn,Qi);break;case 4:if(br(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var A=31-Ie(c);p=1<<A,A=i[A],A>d&&(d=A),c&=~p}if(c=d,c=Qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Yg(c/1960))-c,10<c){t.timeoutHandle=yc(Kr.bind(null,t,jn,Qi),c);break}Kr(t,jn,Qi);break;case 5:Kr(t,jn,Qi);break;default:throw Error(n(329))}}}return Xn(t,Qt()),t.callbackNode===a?bp.bind(null,t):null}function pu(t,i){var a=Fa;return t.current.memoizedState.isDehydrated&&($r(t,i).flags|=256),t=Zo(t,i),t!==2&&(i=jn,jn=a,i!==null&&mu(i)),t}function mu(t){jn===null?jn=t:jn.push.apply(jn,t)}function $g(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!xi(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(t,i){for(i&=~uu,i&=~jo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Ie(i),c=1<<a;t[a]=-1,i&=~c}}function Tp(t){if((Dt&6)!==0)throw Error(n(327));Ps();var i=At(t,0);if((i&1)===0)return Xn(t,Qt()),null;var a=Zo(t,i);if(t.tag!==0&&a===2){var c=kt(t);c!==0&&(i=c,a=pu(t,c))}if(a===1)throw a=Ua,$r(t,0),br(t,i),Xn(t,Qt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Kr(t,jn,Qi),Xn(t,Qt()),null}function gu(t,i){var a=Dt;Dt|=1;try{return t(i)}finally{Dt=a,Dt===0&&(Ns=Qt()+500,Eo&&vr())}}function Yr(t){wr!==null&&wr.tag===0&&(Dt&6)===0&&Ps();var i=Dt;Dt|=1;var a=ci.transition,c=vt;try{if(ci.transition=null,vt=1,t)return t()}finally{vt=c,ci.transition=a,Dt=i,(Dt&6)===0&&vr()}}function xu(){Jn=Cs.current,qt(Cs)}function $r(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,bg(a)),un!==null)for(a=un.return;a!==null;){var c=a;switch(Tc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Mo();break;case 3:Ts(),qt(Hn),qt(Rn),Bc();break;case 5:Oc(c);break;case 4:Ts();break;case 13:qt(Jt);break;case 19:qt(Jt);break;case 10:Lc(c.type._context);break;case 22:case 23:xu()}a=a.return}if(yn=t,un=t=Tr(t.current,null),bn=Jn=i,gn=0,Ua=null,uu=jo=qr=0,jn=Fa=null,Wr!==null){for(i=0;i<Wr.length;i++)if(a=Wr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var A=p.next;p.next=d,c.next=A}a.pending=c}Wr=null}return t}function Ap(t,i){do{var a=un;try{if(Pc(),Io.current=ko,Uo){for(var c=en.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Uo=!1}if(Xr=0,_n=mn=en=null,Ca=!1,Na=0,cu.current=null,a===null||a.return===null){gn=1,Ua=i,un=null;break}e:{var p=t,A=a.return,k=a,W=i;if(i=bn,k.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var fe=W,ye=k,we=ye.tag;if((ye.mode&1)===0&&(we===0||we===11||we===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var He=Qh(A);if(He!==null){He.flags&=-257,Jh(He,A,k,p,i),He.mode&1&&Zh(p,fe,i),i=He,W=fe;var Ze=i.updateQueue;if(Ze===null){var Je=new Set;Je.add(W),i.updateQueue=Je}else Ze.add(W);break e}else{if((i&1)===0){Zh(p,fe,i),vu();break e}W=Error(n(426))}}else if(Kt&&k.mode&1){var ln=Qh(A);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),Jh(ln,A,k,p,i),Cc(As(W,k));break e}}p=W=As(W,k),gn!==4&&(gn=2),Fa===null?Fa=[p]:Fa.push(p),p=A;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var ae=$h(p,W,i);Mh(p,ae);break e;case 1:k=W;var K=p.type,ue=p.stateNode;if((p.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Mr===null||!Mr.has(ue)))){p.flags|=65536,i&=-i,p.lanes|=i;var be=Kh(p,k,i);Mh(p,be);break e}}p=p.return}while(p!==null)}Np(a)}catch(nt){i=nt,un===a&&a!==null&&(un=a=a.return);continue}break}while(!0)}function Rp(){var t=Wo.current;return Wo.current=ko,t===null?ko:t}function vu(){(gn===0||gn===3||gn===2)&&(gn=4),yn===null||(qr&268435455)===0&&(jo&268435455)===0||br(yn,bn)}function Zo(t,i){var a=Dt;Dt|=2;var c=Rp();(yn!==t||bn!==i)&&(Qi=null,$r(t,i));do try{Kg();break}catch(d){Ap(t,d)}while(!0);if(Pc(),Dt=a,Wo.current=c,un!==null)throw Error(n(261));return yn=null,bn=0,gn}function Kg(){for(;un!==null;)Cp(un)}function Zg(){for(;un!==null&&!so();)Cp(un)}function Cp(t){var i=Dp(t.alternate,t,Jn);t.memoizedProps=t.pendingProps,i===null?Np(t):un=i,cu.current=null}function Np(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Gg(a,i,Jn),a!==null){un=a;return}}else{if(a=Wg(a,i),a!==null){a.flags&=32767,un=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{gn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=t}while(i!==null);gn===0&&(gn=5)}function Kr(t,i,a){var c=vt,d=ci.transition;try{ci.transition=null,vt=1,Qg(t,i,a,c)}finally{ci.transition=d,vt=c}return null}function Qg(t,i,a,c){do Ps();while(wr!==null);if((Dt&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(Rt(t,p),t===yn&&(un=yn=null,bn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||qo||(qo=!0,Ip(R,function(){return Ps(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=ci.transition,ci.transition=null;var A=vt;vt=1;var k=Dt;Dt|=4,cu.current=null,Xg(t,a),yp(a,t),vg(vc),oo=!!xc,vc=xc=null,t.current=a,qg(a),Kl(),Dt=k,vt=A,ci.transition=p}else t.current=a;if(qo&&(qo=!1,wr=t,Yo=d),p=t.pendingLanes,p===0&&(Mr=null),Oe(a.stateNode),Xn(t,Qt()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Xo)throw Xo=!1,t=fu,fu=null,t;return(Yo&1)!==0&&t.tag!==0&&Ps(),p=t.pendingLanes,(p&1)!==0?t===hu?Oa++:(Oa=0,hu=t):Oa=0,vr(),null}function Ps(){if(wr!==null){var t=hi(Yo),i=ci.transition,a=vt;try{if(ci.transition=null,vt=16>t?16:t,wr===null)var c=!1;else{if(t=wr,wr=null,Yo=0,(Dt&6)!==0)throw Error(n(331));var d=Dt;for(Dt|=4,Xe=t.current;Xe!==null;){var p=Xe,A=p.child;if((Xe.flags&16)!==0){var k=p.deletions;if(k!==null){for(var W=0;W<k.length;W++){var fe=k[W];for(Xe=fe;Xe!==null;){var ye=Xe;switch(ye.tag){case 0:case 11:case 15:Ia(8,ye,p)}var we=ye.child;if(we!==null)we.return=ye,Xe=we;else for(;Xe!==null;){ye=Xe;var _e=ye.sibling,He=ye.return;if(mp(ye),ye===fe){Xe=null;break}if(_e!==null){_e.return=He,Xe=_e;break}Xe=He}}}var Ze=p.alternate;if(Ze!==null){var Je=Ze.child;if(Je!==null){Ze.child=null;do{var ln=Je.sibling;Je.sibling=null,Je=ln}while(Je!==null)}}Xe=p}}if((p.subtreeFlags&2064)!==0&&A!==null)A.return=p,Xe=A;else e:for(;Xe!==null;){if(p=Xe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ia(9,p,p.return)}var ae=p.sibling;if(ae!==null){ae.return=p.return,Xe=ae;break e}Xe=p.return}}var K=t.current;for(Xe=K;Xe!==null;){A=Xe;var ue=A.child;if((A.subtreeFlags&2064)!==0&&ue!==null)ue.return=A,Xe=ue;else e:for(A=K;Xe!==null;){if(k=Xe,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Go(9,k)}}catch(nt){an(k,k.return,nt)}if(k===A){Xe=null;break e}var be=k.sibling;if(be!==null){be.return=k.return,Xe=be;break e}Xe=k.return}}if(Dt=d,vr(),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(se,t)}catch{}c=!0}return c}finally{vt=a,ci.transition=i}}return!1}function Pp(t,i,a){i=As(a,i),i=$h(t,i,1),t=yr(t,i,1),i=On(),t!==null&&(on(t,1,i),Xn(t,i))}function an(t,i,a){if(t.tag===3)Pp(t,t,a);else for(;i!==null;){if(i.tag===3){Pp(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Mr===null||!Mr.has(c))){t=As(a,t),t=Kh(i,t,1),i=yr(i,t,1),t=On(),i!==null&&(on(i,1,t),Xn(i,t));break}}i=i.return}}function Jg(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=On(),t.pingedLanes|=t.suspendedLanes&a,yn===t&&(bn&a)===a&&(gn===4||gn===3&&(bn&130023424)===bn&&500>Qt()-du?$r(t,0):uu|=a),Xn(t,i)}function Lp(t,i){i===0&&((t.mode&1)===0?i=1:(i=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var a=On();t=$i(t,i),t!==null&&(on(t,i,a),Xn(t,a))}function ex(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Lp(t,a)}function tx(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Lp(t,a)}var Dp;Dp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Hn.current)Wn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Wn=!1,Hg(t,i,a);Wn=(t.flags&131072)!==0}else Wn=!1,Kt&&(i.flags&1048576)!==0&&fh(i,To,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Vo(t,i),t=i.pendingProps;var d=_s(i,Rn.current);bs(i,a),d=Hc(null,i,c,t,d,a);var p=Gc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gn(c)?(p=!0,wo(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Uc(i),d.updater=Bo,i.stateNode=d,d._reactInternals=i,$c(i,c,t,a),i=Jc(null,i,c,!0,p,a)):(i.tag=0,Kt&&p&&bc(i),Fn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Vo(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=ix(c),t=_i(c,t),d){case 0:i=Qc(null,i,c,t,a);break e;case 1:i=sp(null,i,c,t,a);break e;case 11:i=ep(null,i,c,t,a);break e;case 14:i=tp(null,i,c,_i(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),Qc(t,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),sp(t,i,c,d,a);case 3:e:{if(ap(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,d=p.element,Sh(t,i),Lo(i,c,null,a);var A=i.memoizedState;if(c=A.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=As(Error(n(423)),i),i=op(t,i,c,a,d);break e}else if(c!==d){d=As(Error(n(424)),i),i=op(t,i,c,a,d);break e}else for(Qn=mr(i.stateNode.containerInfo.firstChild),Zn=i,Kt=!0,vi=null,a=_h(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ms(),c===d){i=Zi(t,i,a);break e}Fn(t,i,c,a)}i=i.child}return i;case 5:return Eh(i),t===null&&Rc(i),c=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,A=d.children,_c(c,d)?A=null:p!==null&&_c(c,p)&&(i.flags|=32),rp(t,i),Fn(t,i,A,a),i.child;case 6:return t===null&&Rc(i),null;case 13:return lp(t,i,a);case 4:return Fc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ws(i,null,c,a):Fn(t,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),ep(t,i,c,d,a);case 7:return Fn(t,i,i.pendingProps,a),i.child;case 8:return Fn(t,i,i.pendingProps.children,a),i.child;case 12:return Fn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,A=d.value,jt(Co,c._currentValue),c._currentValue=A,p!==null)if(xi(p.value,A)){if(p.children===d.children&&!Hn.current){i=Zi(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var k=p.dependencies;if(k!==null){A=p.child;for(var W=k.firstContext;W!==null;){if(W.context===c){if(p.tag===1){W=Ki(-1,a&-a),W.tag=2;var fe=p.updateQueue;if(fe!==null){fe=fe.shared;var ye=fe.pending;ye===null?W.next=W:(W.next=ye.next,ye.next=W),fe.pending=W}}p.lanes|=a,W=p.alternate,W!==null&&(W.lanes|=a),Dc(p.return,a,i),k.lanes|=a;break}W=W.next}}else if(p.tag===10)A=p.type===i.type?null:p.child;else if(p.tag===18){if(A=p.return,A===null)throw Error(n(341));A.lanes|=a,k=A.alternate,k!==null&&(k.lanes|=a),Dc(A,a,i),A=p.sibling}else A=p.child;if(A!==null)A.return=p;else for(A=p;A!==null;){if(A===i){A=null;break}if(p=A.sibling,p!==null){p.return=A.return,A=p;break}A=A.return}p=A}Fn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,bs(i,a),d=oi(d),c=c(d),i.flags|=1,Fn(t,i,c,a),i.child;case 14:return c=i.type,d=_i(c,i.pendingProps),d=_i(c.type,d),tp(t,i,c,d,a);case 15:return np(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),Vo(t,i),i.tag=1,Gn(c)?(t=!0,wo(i)):t=!1,bs(i,a),qh(i,c,d),$c(i,c,d,a),Jc(null,i,c,!0,t,a);case 19:return up(t,i,a);case 22:return ip(t,i,a)}throw Error(n(156,i.tag))};function Ip(t,i){return Br(t,i)}function nx(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,i,a,c){return new nx(t,i,a,c)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ix(t){if(typeof t=="function")return _u(t)?1:0;if(t!=null){if(t=t.$$typeof,t===j)return 11;if(t===J)return 14}return 2}function Tr(t,i){var a=t.alternate;return a===null?(a=ui(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Qo(t,i,a,c,d,p){var A=2;if(c=t,typeof t=="function")_u(t)&&(A=1);else if(typeof t=="string")A=5;else e:switch(t){case I:return Zr(a.children,d,p,i);case M:A=8,d|=8;break;case N:return t=ui(12,a,i,d|2),t.elementType=N,t.lanes=p,t;case Q:return t=ui(13,a,i,d),t.elementType=Q,t.lanes=p,t;case H:return t=ui(19,a,i,d),t.elementType=H,t.lanes=p,t;case Y:return Jo(a,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:A=10;break e;case z:A=9;break e;case j:A=11;break e;case J:A=14;break e;case oe:A=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ui(A,a,i,d),i.elementType=t,i.type=c,i.lanes=p,i}function Zr(t,i,a,c){return t=ui(7,t,c,i),t.lanes=a,t}function Jo(t,i,a,c){return t=ui(22,t,c,i),t.elementType=Y,t.lanes=a,t.stateNode={isHidden:!1},t}function yu(t,i,a){return t=ui(6,t,null,i),t.lanes=a,t}function Su(t,i,a){return i=ui(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function rx(t,i,a,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ve(0),this.expirationTimes=Ve(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Mu(t,i,a,c,d,p,A,k,W){return t=new rx(t,i,a,k,W),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ui(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(p),t}function sx(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Up(t){if(!t)return xr;t=t._reactInternals;e:{if(Zt(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Gn(a))return ch(t,a,i)}return i}function Fp(t,i,a,c,d,p,A,k,W){return t=Mu(a,c,!0,t,d,p,A,k,W),t.context=Up(null),a=t.current,c=On(),d=Er(a),p=Ki(c,d),p.callback=i??null,yr(a,p,d),t.current.lanes=d,on(t,d,c),Xn(t,c),t}function el(t,i,a,c){var d=i.current,p=On(),A=Er(d);return a=Up(a),i.context===null?i.context=a:i.pendingContext=a,i=Ki(p,A),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=yr(d,i,A),t!==null&&(Mi(t,d,A,p),Po(t,d,A)),A}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Op(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function wu(t,i){Op(t,i),(t=t.alternate)&&Op(t,i)}function ax(){return null}var kp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eu(t){this._internalRoot=t}nl.prototype.render=Eu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));el(t,i,null,null)},nl.prototype.unmount=Eu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Yr(function(){el(null,t,null,null)}),i[ji]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var i=pi();t={blockedOn:null,target:t,priority:i};for(var a=0;a<fr.length&&i!==0&&i<fr[a].priority;a++);fr.splice(a,0,t),a===0&&Ef(t)}};function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function ox(t,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var fe=tl(A);p.call(fe)}}var A=Fp(i,c,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=A,t[ji]=A.current,Sa(t.nodeType===8?t.parentNode:t),Yr(),A}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var k=c;c=function(){var fe=tl(W);k.call(fe)}}var W=Mu(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=W,t[ji]=W.current,Sa(t.nodeType===8?t.parentNode:t),Yr(function(){el(i,W,a,c)}),W}function rl(t,i,a,c,d){var p=a._reactRootContainer;if(p){var A=p;if(typeof d=="function"){var k=d;d=function(){var W=tl(A);k.call(W)}}el(i,A,t,d)}else A=ox(a,i,t,d,c);return tl(A)}Wi=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=We(i.pendingLanes);a!==0&&(An(i,a|1),Xn(i,Qt()),(Dt&6)===0&&(Ns=Qt()+500,vr()))}break;case 13:Yr(function(){var c=$i(t,1);if(c!==null){var d=On();Mi(c,t,1,d)}}),wu(t,1)}},It=function(t){if(t.tag===13){var i=$i(t,134217728);if(i!==null){var a=On();Mi(i,t,134217728,a)}wu(t,134217728)}},$t=function(t){if(t.tag===13){var i=Er(t),a=$i(t,i);if(a!==null){var c=On();Mi(a,t,i,c)}wu(t,i)}},pi=function(){return vt},Bt=function(t,i){var a=vt;try{return vt=t,i()}finally{vt=a}},rt=function(t,i,a){switch(i){case"input":if(ht(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var d=So(c);if(!d)throw Error(n(90));lt(c),ht(c,d)}}}break;case"textarea":Yt(t,a);break;case"select":i=a.value,i!=null&&Ge(t,!!a.multiple,i,!1)}},Ue=gu,xe=Yr;var lx={usingClientEntryPoint:!1,Events:[Ea,xs,So,me,Pe,gu]},ka={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cx={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kr(t),t===null?null:t.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{se=sl.inject(cx),te=sl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lx,qn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bu(i))throw Error(n(200));return sx(t,i,null,a)},qn.createRoot=function(t,i){if(!bu(t))throw Error(n(299));var a=!1,c="",d=kp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Mu(t,1,!1,null,null,a,!1,c,d),t[ji]=i.current,Sa(t.nodeType===8?t.parentNode:t),new Eu(i)},qn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=kr(i),t=t===null?null:t.stateNode,t},qn.flushSync=function(t){return Yr(t)},qn.hydrate=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!0,a)},qn.hydrateRoot=function(t,i,a){if(!bu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",A=kp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=Fp(i,null,t,1,a??null,d,!1,p,A),t[ji]=i.current,Sa(t),c)for(t=0;t<c.length;t++)a=c[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new nl(i)},qn.render=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!1,a)},qn.unmountComponentAtNode=function(t){if(!il(t))throw Error(n(40));return t._reactRootContainer?(Yr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1},qn.unstable_batchedUpdates=gu,qn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!il(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return rl(t,i,a,!1,c)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var qp;function vx(){if(qp)return Ru.exports;qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ru.exports=xx(),Ru.exports}var Yp;function _x(){if(Yp)return al;Yp=1;var s=vx();return al.createRoot=s.createRoot,al.hydrateRoot=s.hydrateRoot,al}var yx=_x();const Sx=Xm(yx);function Mx({hasElevenLabsKey:s,hasGemmaKey:e,onOpenSettings:n,searchQuery:r,onSearchChange:o}){return g.jsxs("header",{className:"fixed top-0 left-0 right-0 h-16 bg-[#090a10]/80 backdrop-blur-2xl border-b border-white/[0.06] z-50 flex items-center justify-between px-6 lg:px-8",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("img",{alt:"PodSnippet Studio Logo",className:"h-7 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,242,254,0.35)]",src:"https://lh3.googleusercontent.com/aida/AEtjO1VHcdwmOzmpLcOj-8XUmLMAKFysTMIL6fv9LegUG_w5f4BBL3e7mfsm1qEvbe8KrAFNSAr7eqVTkmN_wvVC6PPgvU88mZHlxQVMf5nDI_gbkwnuGmWedVDNhsWHv5yPdRhmKbRrVHL7q7d8qrcYBQ_FvQn1r4GLlrGExUNnEqrD2DaxSS4T1rjdiWv6eXKjP2u9KX6G3Vr2VUEuXbBU0SO5nZQxYnLGucmrrgbqCDe87w",onError:l=>{l.currentTarget.style.display="none"}}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"font-headline text-base text-white font-semibold tracking-tight",children:"PodSnippet Studio"}),g.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium",children:"PROD"})]})]}),g.jsxs("div",{className:"hidden md:flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-3.5 py-1.5 w-80 lg:w-96 transition-all focus-within:border-cyan-400/40 focus-within:bg-white/[0.05]",children:[g.jsx("span",{className:"material-symbols-outlined text-slate-400 text-lg",children:"search"}),g.jsx("input",{className:"w-full bg-transparent border-none text-xs text-white placeholder-slate-500 focus:outline-none",placeholder:"Search episodes, voices, transcripts...",type:"text",value:r||"",onChange:l=>o&&o(l.target.value)}),g.jsx("kbd",{className:"font-mono text-[10px] px-1.5 py-0.5 bg-white/[0.06] text-slate-400 rounded",children:"⌘K"})]}),g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsxs("div",{className:"hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.08] rounded-full px-3 py-1",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse"}),g.jsx("span",{children:"Studio Engine Live"})]}),g.jsx("img",{alt:"Profile",className:"w-8 h-8 rounded-full object-cover ring-1 ring-white/20 hover:ring-cyan-400/60 transition-all cursor-pointer",src:"https://lh3.googleusercontent.com/aida-public/AB6AXuD5resuaU4zjpKM7octp1DkyQb8i_fn5reWmceF-yBhMt3AcgF33hIMwJHMNih7PQplEJYz-ude2xKeISy0CTm7W2JmfAXr3Ecr5ZE2hiWPl07ZTLJFLfsU66-Bwzzi9PvHyyEHlGqgj_A3QP7t5xsDFxJk1y8ZeOBF_7gfp37sv7uBJGrvaB5aiGUK1g_DKB4H0Ok5H34PXBYByub93KAq2ubhJFx9-zmVVhZzeeaR"})]})]})}function wx({activeView:s,onViewChange:e,isSynthesizing:n,hasScript:r,hasAudio:o}){const l=[{id:"studio",label:"3D Studio Stage",icon:"view_in_ar",badge:o?"Ready":null,accentColor:"text-cyan-400"},{id:"script-editor",label:"AI Script Editor",icon:"edit_note",badge:r?"Draft":null,accentColor:"text-purple-400"},{id:"voice-casting",label:"Voice Casting Lab",icon:"record_voice_over",badge:null,accentColor:"text-amber-400"},{id:"input-source",label:"Source Ingestion",icon:"article",badge:null,accentColor:"text-cyan-400"},{id:"analytics",label:"Analytics",icon:"analytics",badge:"Live",accentColor:"text-emerald-400"}];return g.jsxs("aside",{className:"fixed left-0 top-16 bottom-20 w-60 bg-[#090a10]/75 backdrop-blur-2xl border-r border-white/[0.06] z-40 flex flex-col py-6 px-3",children:[g.jsx("nav",{className:"flex-1 space-y-1.5",children:l.map(u=>{const f=s===u.id;return g.jsxs("button",{onClick:()=>e(u.id),className:`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all text-left ${f?"bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 shadow-[0_0_16px_rgba(0,242,254,0.12)]":"text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent"}`,children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("span",{className:`material-symbols-outlined text-[19px] ${f?"text-cyan-300":u.accentColor}`,children:u.icon}),g.jsx("span",{className:f?"font-semibold text-white":"font-normal",children:u.label})]}),u.badge&&g.jsx("span",{className:"font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-300 border border-white/[0.08]",children:u.badge})]},u.id)})}),g.jsxs("div",{className:"px-3.5 pt-4 border-t border-white/[0.06] text-xs text-slate-400 flex flex-col gap-2",children:[g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsx("span",{className:"font-mono text-[11px] text-slate-300",children:"ElevenLabs Studio"}),g.jsxs("span",{className:"text-emerald-400 font-mono text-[10px] font-semibold flex items-center gap-1",children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"ACTIVE"]})]}),g.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[g.jsx("span",{className:"text-slate-500",children:"Synthesizer"}),g.jsx("span",{className:"text-cyan-400 font-mono font-medium",children:n?"Synthesizing...":"Ready"})]}),g.jsx("div",{className:"w-full bg-white/[0.06] rounded-full h-1 overflow-hidden",children:g.jsx("div",{className:`h-full rounded-full transition-all duration-300 ${n?"w-full bg-cyan-400 animate-pulse":"w-3/4 bg-gradient-to-r from-cyan-400 to-purple-400"}`})})]})]})}function Ex({audioData:s,articleTitle:e,selectedMode:n,onExport:r,currentTime:o,duration:l,isPlaying:u,onTogglePlay:f,onSeek:h}){const[m,_]=et.useState(.85),[S,x]=et.useState(!1),w=et.useRef(null),b=e||"Kubernetes vs Nomad: The Edge Dilemma",C=n==="solo"?"Solo Flash":"Dual-Host",y=F=>{if(!F||isNaN(F))return"00:00";const T=Math.floor(F/60),L=Math.floor(F%60);return`${T.toString().padStart(2,"0")}:${L.toString().padStart(2,"0")}`},v=F=>{if(!w.current||!l)return;const T=w.current.getBoundingClientRect(),L=F.clientX-T.left,P=Math.max(0,Math.min(1,L/T.width));h(P*l)},D=l>0?o/l*100:0;return g.jsxs("div",{className:"fixed bottom-0 left-0 right-0 h-20 bg-[#090a10]/85 backdrop-blur-2xl z-50 flex items-center justify-between px-6 lg:px-8 border-t border-white/[0.06]",children:[g.jsxs("div",{className:"flex items-center gap-3.5 w-1/4 min-w-[220px] max-w-sm",children:[g.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_12px_rgba(0,242,254,0.15)]",children:g.jsx("span",{className:"material-symbols-outlined text-[20px] animate-pulse",children:"graphic_eq"})}),g.jsxs("div",{className:"flex flex-col truncate",children:[g.jsx("span",{className:"text-xs text-white font-medium truncate font-headline",children:b}),g.jsxs("span",{className:"text-[11px] text-slate-400 font-mono mt-0.5",children:[C," • ",y(l||194)]})]})]}),g.jsxs("div",{className:"flex flex-col items-center flex-1 max-w-xl px-4",children:[g.jsxs("div",{className:"flex items-center gap-4 mb-1.5",children:[g.jsx("button",{onClick:()=>h(Math.max(0,o-5)),className:"text-slate-400 hover:text-white transition-colors p-1",title:"Rewind 5s",children:g.jsx("span",{className:"material-symbols-outlined text-[19px]",children:"replay_5"})}),g.jsx("button",{onClick:f,className:"w-9 h-9 rounded-full bg-cyan-400 text-black font-semibold flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_14px_rgba(0,242,254,0.45)] cursor-pointer",title:u?"Pause":"Play",children:g.jsx("span",{className:"material-symbols-outlined text-[20px] font-bold",children:u?"pause":"play_arrow"})}),g.jsx("button",{onClick:()=>h(Math.min(l||194,o+5)),className:"text-slate-400 hover:text-white transition-colors p-1",title:"Forward 5s",children:g.jsx("span",{className:"material-symbols-outlined text-[19px]",children:"forward_5"})})]}),g.jsxs("div",{className:"w-full flex items-center gap-3",children:[g.jsx("span",{className:"font-mono text-[10px] text-cyan-400 w-9 text-right",children:y(o)}),g.jsxs("div",{ref:w,onClick:v,className:"flex-1 h-1.5 bg-white/[0.08] rounded-full relative flex items-center overflow-hidden cursor-pointer group",children:[g.jsx("div",{className:"absolute left-0 top-0 bottom-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-75",style:{width:`${D}%`}}),g.jsx("div",{className:"absolute h-3 w-1.5 bg-white rounded-full shadow-[0_0_6px_#00f2fe] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity",style:{left:`calc(${D}% - 3px)`}})]}),g.jsx("span",{className:"font-mono text-[10px] text-slate-400 w-9 text-left",children:y(l||194)})]})]}),g.jsxs("div",{className:"flex items-center justify-end gap-5 w-1/4 min-w-[200px]",children:[g.jsxs("div",{className:"hidden sm:flex items-center gap-2 text-slate-400",children:[g.jsx("button",{onClick:()=>x(!S),className:"hover:text-white transition-colors",children:g.jsx("span",{className:"material-symbols-outlined text-base",children:S||m===0?"volume_off":"volume_up"})}),g.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:S?0:m,onChange:F=>{_(parseFloat(F.target.value)),S&&x(!1)},className:"w-16 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-cyan-400"})]}),g.jsxs("button",{onClick:r,className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-white transition-all shadow-sm",children:[g.jsx("span",{className:"material-symbols-outlined text-[16px] text-cyan-400",children:"download"}),g.jsx("span",{children:"Export Audio"})]})]})]})}function bx({selectedMode:s,onSelectMode:e,articleTitle:n,articleContent:r,articleUrl:o,onChangeTitle:l,onChangeContent:u,onChangeUrl:f,onExtract:h,isExtracting:m,onProceedToScript:_,isGeneratingScript:S,onSelectSample:x,samples:w}){const[b,C]=et.useState("url"),[y,v]=et.useState("engaging"),[D,F]=et.useState(3),[T,L]=et.useState(!1),P=async()=>{o.trim()&&(await h(),L(!0),setTimeout(()=>L(!1),2500))},I=z=>{e(z==="A"?"solo":"duo"),F(z==="A"?1:3)},M=z=>{const j=Math.floor(z),Q=Math.round(z%1*60);return`${String(j).padStart(2,"0")}:${String(Q).padStart(2,"0")}`},N=s==="solo",B=s==="duo";return g.jsxs("div",{className:"flex flex-col gap-8 w-full max-w-6xl mx-auto pt-2 pb-16",children:[g.jsxs("div",{className:"space-y-1.5",children:[g.jsx("h1",{className:"font-headline text-2xl lg:text-3xl text-white tracking-tight font-semibold",children:"Source Ingestion & Setup"}),g.jsx("p",{className:"text-sm text-slate-400 max-w-xl",children:"Import your technical content and configure narrative pacing."})]}),g.jsxs("section",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 font-medium",children:[g.jsx("span",{children:"Format Archetype"}),g.jsx("span",{className:"text-[11px] font-mono text-slate-500",children:"Switch format any time"})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",id:"formatSelectorGroup",children:[g.jsxs("div",{onClick:()=>I("A"),className:`group relative cursor-pointer rounded-2xl p-6 flex flex-col justify-between transition-all ${N?"glass-card-selected":"glass-card hover:border-white/20"}`,children:[g.jsxs("div",{className:"flex items-start justify-between mb-4",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${N?"bg-cyan-500/20 border border-cyan-400/40 text-cyan-300":"bg-white/[0.04] border border-white/[0.08] text-slate-400 group-hover:scale-105"}`,children:g.jsx("span",{className:"material-symbols-outlined text-[20px]",children:"bolt"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-headline text-base text-white font-semibold",children:"Solo Flash Teaser"}),g.jsx("span",{className:"text-xs text-slate-400",children:"1 Narrator • Fast recap"})]})]}),g.jsx("span",{className:`font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${N?"bg-cyan-500/15 border-cyan-400/30 text-cyan-300":"bg-white/[0.05] border-white/[0.08] text-slate-400"}`,children:"60s"})]}),g.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-white/[0.05] text-xs text-slate-400",children:[g.jsx("span",{children:"Engineered for X & LinkedIn discovery"}),g.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${N?"bg-cyan-400 border border-cyan-200 shadow-[0_0_8px_#00f2fe]":"border border-white/20"}`,children:g.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${N?"bg-black":"bg-transparent"}`})})]})]}),g.jsxs("div",{onClick:()=>I("B"),className:`group relative cursor-pointer rounded-2xl p-6 flex flex-col justify-between transition-all ${B?"glass-card-selected":"glass-card hover:border-white/20"}`,children:[g.jsxs("div",{className:"flex items-start justify-between mb-4",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${B?"bg-cyan-500/20 border border-cyan-400/40 text-cyan-300":"bg-white/[0.04] border border-white/[0.08] text-slate-400 group-hover:scale-105"}`,children:g.jsx("span",{className:"material-symbols-outlined text-[20px]",children:"forum"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-headline text-base text-white font-semibold",children:"Dual-Host Deep Dive"}),g.jsx("span",{className:"text-xs text-slate-400",children:"Alex & Sam • Conversational Banter"})]})]}),g.jsx("span",{className:`font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${B?"bg-cyan-500/15 border-cyan-400/30 text-cyan-300":"bg-white/[0.05] border-white/[0.08] text-slate-400"}`,children:"3m"})]}),g.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-white/[0.05] text-xs text-slate-400",children:[g.jsx("span",{children:"Substack, Apple RSS & YouTube ready"}),g.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${B?"bg-cyan-400 border border-cyan-200 shadow-[0_0_8px_#00f2fe]":"border border-white/20"}`,children:g.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${B?"bg-black":"bg-transparent"}`})})]})]})]})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[g.jsxs("div",{className:"lg:col-span-8 flex flex-col gap-6",children:[g.jsxs("div",{className:"rounded-2xl glass-card p-6 space-y-5",children:[g.jsxs("div",{className:"flex items-center justify-between border-b border-white/[0.06] pb-3",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("button",{onClick:()=>C("url"),className:`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${b==="url"?"bg-cyan-500/20 border border-cyan-400/30 text-cyan-300":"text-slate-400 hover:text-white hover:bg-white/[0.04]"}`,children:"Import from URL"}),g.jsx("button",{onClick:()=>C("md"),className:`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${b==="md"?"bg-cyan-500/20 border border-cyan-400/30 text-cyan-300":"text-slate-400 hover:text-white hover:bg-white/[0.04]"}`,children:"Paste Markdown"})]}),g.jsx("span",{className:"text-xs text-slate-400 hidden sm:inline",children:"Substack, Dev.to, GitHub, Medium"})]}),b==="url"?g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3",children:[g.jsxs("div",{className:"relative w-full flex-1 flex items-center glass-input rounded-xl px-4 py-3",children:[g.jsx("span",{className:"material-symbols-outlined text-slate-400 text-[18px] mr-2",children:"link"}),g.jsx("input",{className:"w-full bg-transparent border-none text-xs text-white placeholder-slate-500 focus:outline-none font-mono",placeholder:"https://blog.cloudflare.com/how-we-built-pingora-in-rust",type:"text",value:o,onChange:z=>f(z.target.value)}),o&&g.jsx("button",{onClick:()=>f(""),className:"text-slate-400 hover:text-white p-1 rounded",title:"Clear URL",children:g.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"close"})})]}),g.jsxs("button",{onClick:P,disabled:m||!o.trim(),className:"w-full sm:w-auto px-5 py-3 rounded-xl bg-cyan-400 text-black font-semibold text-xs hover:bg-cyan-300 transition-all flex items-center justify-center gap-1.5 shrink-0 disabled:opacity-50",children:[g.jsx("span",{className:`material-symbols-outlined text-[16px] font-semibold ${m?"animate-spin":""}`,children:T?"check":"sync"}),g.jsx("span",{children:m?"Fetching...":T?"Article Cleaned":"Fetch Article"})]})]}),n&&g.jsxs("div",{className:"bg-black/40 border border-white/[0.06] rounded-xl p-5 space-y-3",children:[g.jsxs("div",{className:"flex items-start justify-between gap-4",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"font-headline text-base text-white font-semibold tracking-tight",children:n}),g.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:[o?new URL(o.startsWith("http")?o:`https://${o}`).hostname:"blog-source"," • ",r?r.split(/\s+/).length:2100," words (~9 min read)"]})]}),g.jsxs("span",{className:"shrink-0 font-mono text-xs text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20 font-medium",children:["~",N?"1m":"3m"," target"]})]}),g.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-300 pt-1",children:[g.jsxs("li",{className:"flex items-baseline gap-2",children:[g.jsx("span",{className:"text-cyan-400 text-[10px]",children:"●"}),g.jsx("span",{children:"Extracts technical architecture and core implementation takeaways."})]}),g.jsxs("li",{className:"flex items-baseline gap-2",children:[g.jsx("span",{className:"text-purple-400 text-[10px]",children:"●"}),g.jsx("span",{children:"Translates complex code snippets into high-impact spoken banter."})]}),g.jsxs("li",{className:"flex items-baseline gap-2",children:[g.jsx("span",{className:"text-emerald-400 text-[10px]",children:"●"}),g.jsx("span",{children:"Optimized for retention across mobile podcast listening habits."})]})]})]})]}):g.jsxs("div",{className:"flex flex-col gap-3",children:[g.jsx("input",{type:"text",placeholder:"Episode / Article Title...",value:n,onChange:z=>l(z.target.value),className:"w-full glass-input rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 font-headline focus:outline-none"}),g.jsx("textarea",{className:"w-full glass-input rounded-xl p-4 text-slate-200 font-mono text-xs placeholder-slate-500 focus:outline-none resize-none leading-relaxed",placeholder:`# Paste markdown article content here...

## Architecture Overview
In this post we review how we upgraded...`,rows:7,value:r,onChange:z=>u(z.target.value)}),g.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-500 font-mono",children:[g.jsxs("span",{children:[r?r.split(/\s+/).filter(Boolean).length:0," words"]}),g.jsx("span",{children:"Markdown formatting supported"})]})]})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Quick Demo Samples"}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[g.jsxs("div",{onClick:()=>{w&&w.length>0?x(w[0]):(f("https://blog.cloudflare.com/how-we-built-pingora-in-rust"),l("How We Built Pingora in Rust to Power Cloudflare's Edge"))},className:"cursor-pointer rounded-xl glass-card p-3.5 hover:border-cyan-400/40 transition-all group",children:[g.jsx("div",{className:"text-xs font-semibold text-white line-clamp-1 mb-1 group-hover:text-cyan-300",children:"Swapping Docker for Podman"}),g.jsx("div",{className:"text-[11px] text-slate-400",children:"DevOps • 1,840 words"})]}),g.jsxs("div",{onClick:()=>{w&&w.length>1?x(w[1]):(f("https://substrate.io/blog/low-latency-edge-runtimes-rust-wasm"),l("Low-Latency Rust & Wasm on Edge Micro-Nodes"))},className:"cursor-pointer rounded-xl glass-card p-3.5 hover:border-amber-400/40 transition-all group",children:[g.jsx("div",{className:"text-xs font-semibold text-white line-clamp-1 mb-1 group-hover:text-amber-300",children:"Low-Latency Rust & Wasm"}),g.jsx("div",{className:"text-[11px] text-slate-400",children:"Systems • 2,200 words"})]}),g.jsxs("div",{onClick:()=>{w&&w.length>2?x(w[2]):(f("https://ai.google.dev/gemma/docs/spoken-audio-synthesizer-pipeline"),l("Text-to-Speech Scripting via Google Gemma 2"))},className:"cursor-pointer rounded-xl glass-card p-3.5 hover:border-purple-400/40 transition-all group",children:[g.jsx("div",{className:"text-xs font-semibold text-white line-clamp-1 mb-1 group-hover:text-purple-300",children:"Text-to-Speech via Gemma 2"}),g.jsx("div",{className:"text-[11px] text-slate-400",children:"AI/ML • 1,400 words"})]})]})]})]}),g.jsx("div",{className:"lg:col-span-4 flex flex-col gap-6",children:g.jsxs("div",{className:"rounded-2xl glass-card p-6 space-y-6",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs text-slate-400 font-medium mb-3",children:"Conversational Tone"}),g.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"engaging",label:"Engaging"},{id:"deep",label:"Deep Tech"},{id:"casual",label:"Casual"},{id:"story",label:"Story"}].map(z=>g.jsx("button",{onClick:()=>v(z.id),className:`px-3 py-2 rounded-xl text-xs font-medium transition-all ${y===z.id?"bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-semibold":"bg-black/20 border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.04]"}`,children:z.label},z.id))})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between text-xs",children:[g.jsx("label",{className:"text-slate-400 font-medium",children:"Target Duration"}),g.jsx("span",{className:"font-mono text-cyan-300 font-semibold",children:M(D)})]}),g.jsx("input",{className:"w-full h-1.5 bg-white/[0.08] rounded-lg appearance-none cursor-pointer accent-cyan-400",max:"5",min:"1",step:"0.5",type:"range",value:D,onChange:z=>F(parseFloat(z.target.value))}),g.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400 font-mono",children:[g.jsx("span",{children:"1m"}),g.jsx("span",{children:"3m"}),g.jsx("span",{children:"5m"})]})]}),g.jsxs("div",{className:"pt-4 border-t border-white/[0.06] space-y-3",children:[g.jsx("span",{className:"text-xs text-slate-400 font-medium block",children:"Voice Casting"}),N?g.jsxs("div",{className:"flex items-center justify-between text-xs",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),g.jsx("span",{className:"text-white font-medium",children:"Alex"}),g.jsx("span",{className:"text-slate-400 text-[11px]",children:"• Lead Narrator"})]}),g.jsx("span",{className:"text-slate-400 text-[11px] font-mono",children:"ElevenLabs"})]}):g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex items-center justify-between text-xs",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),g.jsx("span",{className:"text-white font-medium",children:"Alex"}),g.jsx("span",{className:"text-slate-400 text-[11px]",children:"• Systems Lead"})]}),g.jsx("span",{className:"text-slate-400 text-[11px] font-mono",children:"ElevenLabs"})]}),g.jsxs("div",{className:"flex items-center justify-between text-xs",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-400"}),g.jsx("span",{className:"text-white font-medium",children:"Sam"}),g.jsx("span",{className:"text-slate-400 text-[11px]",children:"• Conversational"})]}),g.jsx("span",{className:"text-slate-400 text-[11px] font-mono",children:"ElevenLabs"})]})]})]})]})})]}),g.jsx("div",{className:"fixed bottom-24 left-60 right-0 z-30 flex justify-center px-6 pointer-events-none",children:g.jsxs("div",{className:"w-full max-w-4xl p-3.5 rounded-2xl bg-[#11131c]/90 backdrop-blur-2xl border border-white/[0.1] shadow-2xl flex items-center justify-between gap-4 pointer-events-auto",children:[g.jsxs("div",{className:"flex items-center gap-3 pl-2",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),g.jsxs("span",{className:"text-xs text-slate-400",children:["Ready to synthesize"," ",g.jsx("strong",{className:"text-white font-semibold",children:N?"Solo Flash Teaser (~1m)":"Dual-Host Deep Dive (~3m)"})]})]}),g.jsxs("button",{onClick:_,disabled:S||!n.trim(),className:"px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs tracking-tight transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50",children:[g.jsx("span",{className:`material-symbols-outlined text-[18px] ${S?"animate-spin":""}`,children:S?"refresh":"record_voice_over"}),g.jsx("span",{children:S?"Generating Script...":"Generate Audio Script"}),g.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"arrow_forward"})]})]})})]})}function Tx({scriptData:s,onUpdateSoloScript:e,onUpdateDuoTurn:n,onAddDuoTurn:r,onRegenerateScript:o,isGeneratingScript:l,onNavigateToVoiceCasting:u,selectedMode:f,articleTitle:h}){const[m,_]=et.useState(null),S=(s==null?void 0:s.turns)||[],x=(s==null?void 0:s.scriptText)||"",w=f==="solo"||!S.length,b=w?x.split(/\s+/).filter(Boolean).length:S.reduce((L,P)=>L+(P.text||"").split(/\s+/).filter(Boolean).length,0),C=Math.round(b/150*60)||(w?60:194),y=Math.floor(C/60),v=C%60,D=`${String(y).padStart(2,"0")}:${String(v).padStart(2,"0")}`,F="https://lh3.googleusercontent.com/aida-public/AB6AXuAvStxvHH8Ia89-2oOjgpolHm5GPXxi7ljd4S-Il9Iylb_vPVAzjIWHpwwE5dRm2xTAj6lsNmcMZ91dOdX_PBtJqRSs6A0ySUZ8gQWzuv--nzv8bEwlH7-RxmngnKLF_sVL1ySxWO0MXUILWSLWQytVbDXP82KMEeShViVo65EFkXm1OEpj0z0ahG4Bo26GVuMv27wceosV0dwASQJRrWkpzGm-u_SBMyUN8aUJINN2",T="https://lh3.googleusercontent.com/aida-public/AB6AXuBc40bF0omU-caXomvw5hwQbATVvZyuzSqwEzhCp1Efy63HeaIzNBDzupSLS6i5b6MJ1PDp6hYenOKvNNvfZPvq37oAcN_UohdATeGGSdl-zR0TQ_UQE7SdOaxkNAEm4qssUFZA_J7aQmWKcNH2Qsao0_1P9FDngdPAmw-Dbn7lOSQi07mtlaklx0hSvmy29ysYQE9Z6Kn8p-qfXtidRulx6EioE5Fu4MDJRChdheYS";return g.jsxs("div",{className:"flex flex-col gap-8 w-full max-w-5xl mx-auto pt-2 pb-24",children:[g.jsxs("div",{className:"flex flex-col gap-2 relative z-10",children:[g.jsx("span",{className:"text-[11px] font-mono tracking-widest uppercase text-cyan-400",children:"Narrative Pacing • Google Gemma 2 (Open-Weight)"}),g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline justify-between gap-4",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"font-headline text-3xl font-semibold text-white tracking-tight",children:"AI Script Editor"}),g.jsx("p",{className:"text-sm text-slate-400 mt-0.5",children:"Review dialogue pacing, refine punchlines, or adjust technical phrasing"})]}),g.jsxs("button",{onClick:o,disabled:l,className:"flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] text-xs font-medium text-slate-200 transition-all self-start sm:self-auto disabled:opacity-50",children:[g.jsx("span",{className:`material-symbols-outlined text-[16px] text-cyan-400 ${l?"animate-spin":""}`,children:"refresh"}),g.jsx("span",{children:l?"Regenerating...":"Regenerate with Gemma 2"})]})]})]}),g.jsxs("div",{className:"glass-card glass-specular rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 border border-white/[0.08]",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-300",children:g.jsx("span",{className:"material-symbols-outlined text-lg",children:"description"})}),g.jsxs("div",{children:[g.jsx("div",{className:"text-xs font-semibold text-white truncate max-w-md font-headline",children:h||"Episode Script"}),g.jsxs("div",{className:"text-[11px] text-slate-400 font-mono",children:[w?"Solo Format":`${S.length} Turn Dialogue`," • ",b," words"]})]})]}),g.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono",children:[g.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2",children:[g.jsx("span",{className:"text-slate-400",children:"Estimated Duration:"}),g.jsx("span",{className:"text-cyan-300 font-semibold",children:D})]}),g.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 text-emerald-400 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20",children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),g.jsx("span",{children:"Speech Optimized"})]})]})]}),!w&&S.length>0?g.jsxs("div",{className:"flex flex-col gap-4",children:[S.map((L,P)=>{var oe,Y;const I=((oe=L.speaker)==null?void 0:oe.toLowerCase().includes("alex"))||P%2===0,M=I?"Alex":"Sam",N=I?"Systems Lead":"Conversational",B=I?"border-cyan-400/30":"border-purple-400/30",z=I?"bg-cyan-950/20":"bg-purple-950/20",j=I?"bg-cyan-950/40 border-cyan-400/40 text-cyan-300":"bg-purple-950/40 border-purple-400/40 text-purple-300",Q=I?F:T,H=(L.text||"").split(/\s+/).filter(Boolean).length,J=Math.round(H/150*60)||5;return g.jsxs("div",{className:`glass-card rounded-2xl p-5 border ${B} ${z} transition-all duration-200 relative group`,children:[g.jsxs("div",{className:"flex items-center justify-between mb-3",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("img",{src:Q,alt:M,className:"w-8 h-8 rounded-full object-cover ring-1 ring-white/20"}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsxs("span",{className:`text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${j} font-medium flex items-center gap-1.5`,children:[g.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${I?"bg-cyan-400":"bg-purple-400"}`}),M]}),g.jsxs("span",{className:"text-xs text-slate-400 font-mono hidden sm:inline",children:["• ",N]})]})]}),g.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-slate-500",children:[g.jsxs("span",{children:["Turn #",P+1]}),g.jsx("span",{children:"•"}),g.jsxs("span",{className:"text-slate-400",children:["~",J,"s"]})]})]}),g.jsx("textarea",{value:L.text,onChange:G=>n(P,G.target.value),rows:Math.max(2,Math.ceil((((Y=L.text)==null?void 0:Y.length)||50)/75)),className:"w-full bg-black/30 border border-white/[0.06] rounded-xl p-3.5 text-slate-200 text-sm font-body leading-relaxed focus:outline-none focus:border-cyan-400/50 resize-y transition-all"})]},P)}),g.jsxs("button",{onClick:r,className:"w-full py-4 rounded-2xl border border-dashed border-white/15 hover:border-cyan-400/40 bg-white/[0.02] hover:bg-white/[0.04] text-slate-400 hover:text-cyan-300 text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer",children:[g.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"add_circle"}),g.jsx("span",{children:"Add Dialogue Turn"})]})]}):g.jsxs("div",{className:"glass-card rounded-2xl p-6 border border-cyan-400/30 bg-cyan-950/10 space-y-4",children:[g.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/[0.06]",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("img",{src:F,alt:"Solo Narrator",className:"w-8 h-8 rounded-full object-cover ring-1 ring-cyan-400/30"}),g.jsx("span",{className:"text-xs font-mono text-cyan-300 uppercase tracking-wider font-medium",children:"Solo Flash Narrator • 60s Fast Recap"})]}),g.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[b," words"]})]}),g.jsx("textarea",{value:x,onChange:L=>e(L.target.value),rows:10,className:"w-full bg-black/40 border border-white/[0.08] rounded-xl p-4 text-slate-200 text-sm font-body leading-relaxed focus:outline-none focus:border-cyan-400/50 resize-y",placeholder:"Write or edit your 60-second audio teaser script..."})]}),g.jsx("div",{className:"fixed bottom-24 left-60 right-0 z-30 flex justify-center px-6 pointer-events-none",children:g.jsxs("div",{className:"w-full max-w-4xl p-3.5 rounded-2xl bg-[#11131c]/90 backdrop-blur-2xl border border-white/[0.1] shadow-2xl flex items-center justify-between gap-4 pointer-events-auto",children:[g.jsxs("div",{className:"flex items-center gap-3 pl-2",children:[g.jsx("span",{className:"material-symbols-outlined text-emerald-400 text-lg",children:"graphic_eq"}),g.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[g.jsxs("span",{className:"text-white font-mono font-medium",children:[b*5," Characters"]}),g.jsx("span",{className:"text-slate-500",children:"•"}),g.jsxs("span",{className:"text-slate-400 font-mono",children:["≈ $",(b*5/1e3*.03).toFixed(2)," inference"]})]})]}),g.jsxs("button",{onClick:u,className:"px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 hover:brightness-105 text-[#002022] font-semibold text-xs tracking-tight transition-all flex items-center gap-2 shadow-lg shadow-cyan-400/20 active:scale-[0.99]",children:[g.jsx("span",{children:"Proceed to Voice Casting"}),g.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"arrow_forward"})]})]})})]})}function Ax({voices:s,soloVoiceId:e,onChangeSoloVoice:n,alexVoiceId:r,onChangeAlexVoice:o,samVoiceId:l,onChangeSamVoice:u,onSynthesizeAudio:f,isSynthesizing:h,selectedMode:m,scriptData:_}){const[S,x]=et.useState(.65),[w,b]=et.useState(.85),[C,y]=et.useState(null),v=[{id:"pNInz6obpgDQGcFmaJgB",name:"Adam",role:"Warm Tech Lead",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuCC7DVpetRtGxu44bdee45FcpcNZGR36L-fj2E6ALP9GO8LDVAQAvCxBvLkIVYlUFILIpSysNsqE9lzoiVTX8lRaY-oiPlVPWeYbOvfIj1brRptIWsRkalP3OGuvIv7cLsh2jysJAMOmA3Sb28CK7pHiANbmpx1zDUpxDPGcyF-HehC3yJoRDNIN2yJQ3RNd-RarN731DqBw4VKTR2xFOYgnf9u_VWHktaQNjFYpwOz",previewPhrase:"Pingora replaced our entire reverse proxy fleet, handling over a trillion requests every single day with zero memory crashes."},{id:"21m00Tcm4TlvDq8ikWAM",name:"Rachel",role:"Crisp Analyst",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuB-I8W8om7bxCpJCNjxCVo9SrhOIpZeisFl7Cswul0ZOVKH7LJ85X-pyuvwMjmgrma9SkgGKv90oYrqBP93QH3nVX_5FcPHtu2FCdnCldys7O82-NU8ZkDR5DS6OVlif2mfp991Qekk0sOnfJUOovxzTkLw-R4fqqvYFLAyc8tj6mCmHrjbYxQvejE8TFjkJC-PjsJSPBfckBlgAMVDx2H5L0WfVrGM4FgusaI9gMLB",previewPhrase:"And the benchmark numbers speak for themselves. CPU consumption dropped by nearly seventy percent across all edge clusters."},{id:"JBFqnCBsd6RMkjVDRZzb",name:"George",role:"British Documentary",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuAVCawI4TV_O7PBCyj9umQp0np7ABqM_Nt-jXcx03VUju9F7xBA-4OKmXA-pGn8dxyKDvtQyMJsOc9iPEB_mIdG_hLjuOFfD69Lyj1DkTBFcr56VIkRpnrPUEhlc9bHBj4z0AEnTyRC8yXtHG-xTsDHPI8dKEsliobazyzzaGNksRbYPfBz8zzkjgxGL8PoV6-caaAd2h4IcIKQDRf3--04tCqN4lPb9fKanYruf8D9",previewPhrase:"Let us observe the fundamental shift in systems architecture as compiled languages replace legacy runtimes."},{id:"EXAVITQu4vr4xnSDxMaL",name:"Sarah",role:"Conversational Casual",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuA89_E8j53jhaYOXmFdqq25w-tnLDGp6HgiQTx2zNwK9R2La88TGxRV4fH7QmzcMcHlLOjDlxin0Xcsu5xs8flxRM59sUmbsCkrfBk_1YuAenbALnCZYkWP7ElDfGfOcsecEzfUUhxQ_L6iPM9zdbAkF9CeF0enRmUkwpSBbosW4M-Bhr_modNnTGPp24D4nH6_2NVlilj6fgzt8KUQXj14BWKQdQ03jxHO9yNPdZkE",previewPhrase:"Honestly, setting this up took less than ten minutes, and the audio quality sounds like an actual broadcast booth."},{id:"IKne3meq5aSn9X800x57",name:"Charlie",role:"Energetic & Fast",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuBZjsSztifXmOSPuVTlLJ2pUEtc5QlAm5BIvF8SAqI7gThqqVqOjeKJ0hkr9JSv_U_jCuzP3CwXgtSE6DhP8itEqzxSHbytFoAg2uiRCsg4_EIWgSmc_aPqoLxII-G2DFif_b7PJyJnBUPQEpL9qLzYiIWfLivuVIZLbjeqT2eBl_gT1I0bVCm0DSAa8gEUlM9o3YRNyojRYyHcQBAHCofkd6dSIdWz2h776GjTFDL-",previewPhrase:"If you are still distributing raw text articles without an audio teaser, you are leaving seventy percent of your reach on the table!"},{id:"TX3LPaxmHKxFdv7VOQHJ",name:"Liam",role:"Deep Resonant",avatar:"https://lh3.googleusercontent.com/aida-public/AB6AXuAF_-_IRgplBn8q7c9xMnZlSIcG4VeBxyNjyzo1Z8lVTH3GWFeWwgRkuFkZFz--PywALjF9TxfgcY53z4qcT9ehjYMEHLaTPwiW-SDU63Tzv27fAqX1nm0waDN_xgwlTkYCraq3Z8ah8xf6Q_AR0OGvTP2GeeCo8khcLljfHJJGzcvqAiMc8wY0CaB9zgEstcT_6yuNxcFcNQttym8WHSSznlhHH94QQ74JDRWLbjcU",previewPhrase:"This is the definitive guide to deploying resilient infrastructure at massive cloud scale."}],D=I=>{if(C===I.name)"speechSynthesis"in window&&window.speechSynthesis.cancel(),y(null);else if(y(I.name),"speechSynthesis"in window){window.speechSynthesis.cancel();const M=new SpeechSynthesisUtterance(I.previewPhrase);M.rate=1.05,M.pitch=I.name==="Adam"||I.name==="Liam"?.9:1.05,M.onend=()=>y(null),M.onerror=()=>y(null),window.speechSynthesis.speak(M)}else setTimeout(()=>y(null),3e3)},F=v.find(I=>I.id===r)||v[0],T=v.find(I=>I.id===l)||v[1],L=(_==null?void 0:_.turns)||[],P=L.length?L.reduce((I,M)=>I+(M.text||"").length,0):((_==null?void 0:_.scriptText)||"").length||1420;return g.jsxs("div",{className:"flex flex-col w-full max-w-7xl mx-auto pt-2 pb-28",children:[g.jsxs("div",{className:"flex flex-col gap-2 mb-8 relative z-10",children:[g.jsx("span",{className:"text-[11px] font-mono tracking-widest uppercase text-cyan-400",children:"Audio Architecture • ElevenLabs Engine"}),g.jsxs("div",{className:"flex items-baseline justify-between",children:[g.jsx("h1",{className:"font-headline text-3xl font-light text-white tracking-tight",children:"Voice Casting Studio"}),g.jsx("p",{className:"text-sm text-slate-400 font-normal hidden sm:block",children:"Select host personas and tune synthesis fidelity"})]})]}),g.jsx("div",{className:"glass-card glass-specular rounded-2xl p-6 mb-10 shadow-[0_12px_40px_rgba(0,0,0,0.4)]",children:g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[g.jsxs("div",{className:"lg:col-span-3 flex items-center gap-4 pr-6 border-b lg:border-b-0 lg:border-r border-white/[0.06] pb-4 lg:pb-0",children:[g.jsx("div",{className:"w-11 h-11 rounded-xl bg-cyan-950/30 border border-cyan-400/30 flex items-center justify-center shrink-0",children:g.jsx("span",{className:"material-symbols-outlined text-cyan-400 text-xl",children:"mic"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsx("div",{className:"text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-medium",children:"Host 1 • Alex"}),g.jsx("div",{className:"text-base font-headline text-white font-medium truncate",children:F.name}),g.jsx("div",{className:"text-xs text-slate-400 truncate",children:F.role})]})]}),g.jsxs("div",{className:"lg:col-span-3 flex items-center gap-4 pr-6 border-b lg:border-b-0 lg:border-r border-white/[0.06] pb-4 lg:pb-0",children:[g.jsx("div",{className:"w-11 h-11 rounded-xl bg-purple-950/30 border border-purple-400/30 flex items-center justify-center shrink-0",children:g.jsx("span",{className:"material-symbols-outlined text-purple-400 text-xl",children:"headset_mic"})}),g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsx("div",{className:"text-[10px] font-mono uppercase tracking-wider text-purple-400 font-medium",children:"Host 2 • Sam"}),g.jsx("div",{className:"text-base font-headline text-white font-medium truncate",children:T.name}),g.jsx("div",{className:"text-xs text-slate-400 truncate",children:T.role})]})]}),g.jsxs("div",{className:"lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pl-0 lg:pl-2",children:[g.jsxs("div",{className:"flex flex-col gap-2",children:[g.jsxs("div",{className:"flex justify-between items-center text-xs",children:[g.jsx("span",{className:"text-slate-400 font-medium",children:"Stability"}),g.jsx("span",{className:"font-mono text-cyan-400 font-medium text-[11px]",children:S.toFixed(2)})]}),g.jsx("input",{className:"w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-cyan-400",max:"1",min:"0",step:"0.01",type:"range",value:S,onChange:I=>x(parseFloat(I.target.value))}),g.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-500",children:[g.jsx("span",{children:"Expressive"}),g.jsx("span",{children:"Steady"})]})]}),g.jsxs("div",{className:"flex flex-col gap-2",children:[g.jsxs("div",{className:"flex justify-between items-center text-xs",children:[g.jsx("span",{className:"text-slate-400 font-medium",children:"Clarity & Style"}),g.jsx("span",{className:"font-mono text-purple-300 font-medium text-[11px]",children:w.toFixed(2)})]}),g.jsx("input",{className:"w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer slider-secondary accent-purple-400",max:"1",min:"0",step:"0.01",type:"range",value:w,onChange:I=>b(parseFloat(I.target.value))}),g.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-500",children:[g.jsx("span",{children:"Natural"}),g.jsx("span",{children:"Theatrical"})]})]})]})]})}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:v.map(I=>{const M=r===I.id,N=l===I.id,B=C===I.name;let z="border-white/[0.08]",j=null;return M?(z="border-cyan-400/40 bg-cyan-950/15",j=g.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300",children:"Host 1 (Alex)"})):N&&(z="border-purple-400/40 bg-purple-950/15",j=g.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-950/40 border border-purple-400/30 text-purple-300",children:"Host 2 (Sam)"})),g.jsxs("div",{className:`glass-card glass-specular glass-card-hover rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group ${z}`,children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center justify-between mb-5",children:[g.jsxs("div",{className:"flex items-center gap-3.5",children:[g.jsx("div",{className:"relative w-14 h-14 rounded-2xl overflow-hidden ring-1 ring-white/10 flex items-center justify-center shrink-0",children:g.jsx("img",{className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",src:I.avatar,alt:I.name})}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-headline text-lg text-white font-medium tracking-tight",children:I.name}),g.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:I.role})]})]}),j]}),g.jsx("div",{className:"py-4 my-2",children:g.jsx("div",{className:"h-8 flex items-end gap-1.5 px-1",children:[35,70,95,50,80,100,60,40,85,65,40,20,50,75,30,15].map((Q,H)=>{const J=B?`${Math.max(15,(Q+H%3*15)%100)}%`:`${Q}%`,oe=M?"bg-cyan-400 shadow-[0_0_6px_#00f2fe]":N?"bg-purple-400 shadow-[0_0_6px_#e5b5ff]":"bg-white/25";return g.jsx("span",{style:{height:J},className:`w-1 rounded-full transition-all duration-150 ${oe} ${B?"animate-pulse":""}`},H)})})})]}),g.jsxs("div",{className:"flex items-center gap-2.5 pt-3 border-t border-white/[0.04]",children:[g.jsx("button",{onClick:()=>D(I),className:"w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white flex items-center justify-center transition-colors shrink-0",title:"Audition Persona",children:g.jsx("span",{className:`material-symbols-outlined text-lg ${B?"text-cyan-400":"text-slate-300"}`,children:B?"pause":"play_arrow"})}),M?g.jsxs("button",{className:"flex-1 py-2 px-3 rounded-xl bg-cyan-950/40 border border-cyan-400/40 text-cyan-300 text-xs font-medium flex items-center justify-center gap-1.5 cursor-default",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"check"}),g.jsx("span",{children:"Assigned to Alex"})]}):N?g.jsxs("button",{className:"flex-1 py-2 px-3 rounded-xl bg-purple-950/40 border border-purple-400/40 text-purple-300 text-xs font-medium flex items-center justify-center gap-1.5 cursor-default",children:[g.jsx("span",{className:"material-symbols-outlined text-sm",children:"check"}),g.jsx("span",{children:"Assigned to Sam"})]}):g.jsxs("div",{className:"flex-1 flex gap-1.5",children:[g.jsx("button",{onClick:()=>o(I.id),className:"flex-1 py-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 hover:border-cyan-400/30 border border-white/[0.08] text-slate-300 hover:text-cyan-300 text-[11px] font-medium transition-all",title:"Set as Host 1 (Alex)",children:"Set Alex"}),g.jsx("button",{onClick:()=>u(I.id),className:"flex-1 py-2 rounded-xl bg-white/[0.04] hover:bg-purple-500/15 hover:border-purple-400/30 border border-white/[0.08] text-slate-300 hover:text-purple-300 text-[11px] font-medium transition-all",title:"Set as Host 2 (Sam)",children:"Set Sam"})]})]})]},I.id)})}),g.jsxs("div",{className:"glass-card glass-specular rounded-2xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_16px_40px_rgba(0,0,0,0.5)]",children:[g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("span",{className:"material-symbols-outlined text-emerald-400 text-xl animate-pulse",children:"graphic_eq"}),g.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[g.jsxs("span",{className:"text-white font-mono font-medium",children:[P," Characters"]}),g.jsx("span",{className:"text-slate-600",children:"•"}),g.jsxs("span",{className:"text-slate-400 font-mono",children:["≈ $",(P/1e3*.045).toFixed(2)," inference"]}),g.jsx("span",{className:"text-slate-600 hidden md:inline",children:"•"}),g.jsx("span",{className:"text-slate-400 hidden md:inline font-mono",children:"9,200 remaining in quota"})]})]}),g.jsxs("button",{onClick:f,disabled:h,className:"w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 text-[#002022] font-headline text-sm font-semibold tracking-tight hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(0,220,230,0.35)] disabled:opacity-50",children:[g.jsx("span",{className:`material-symbols-outlined text-base ${h?"animate-spin":""}`,children:h?"sync":"record_voice_over"}),g.jsx("span",{children:h?"Synthesizing Podcast...":"Synthesize Audio"}),g.jsx("span",{className:"material-symbols-outlined text-base",children:"arrow_forward"})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rf="186",Rx=0,$p=1,Cx=2,Pl=1,Nx=2,qa=3,as=0,$n=1,rr=2,ar=0,$a=1,dd=2,Kp=3,Zp=4,Px=5,qs=100,Lx=101,Dx=102,Ix=103,Ux=104,Fx=200,Ox=201,kx=202,Bx=203,qm=204,Ym=205,zx=206,Vx=207,Hx=208,Gx=209,Wx=210,jx=211,Xx=212,qx=213,Yx=214,fd=0,hd=1,pd=2,Za=3,md=4,gd=5,xd=6,vd=7,$m=0,$x=1,Kx=2,zi=0,Km=1,Zm=2,Qm=3,sf=4,Jm=5,e0=6,t0=7,n0=300,os=301,Zs=302,Pu=303,Lu=304,jl=306,_d=1e3,sr=1001,yd=1002,Tn=1003,Zx=1004,ol=1005,In=1006,Du=1007,rs=1008,ii=1009,i0=1010,r0=1011,Qa=1012,af=1013,Vi=1014,ki=1015,Hi=1016,of=1017,lf=1018,Ja=1020,s0=35902,a0=35899,o0=1021,l0=1022,Ai=1023,lr=1026,ss=1027,c0=1028,cf=1029,ls=1030,uf=1031,df=1033,Ll=33776,Dl=33777,Il=33778,Ul=33779,Sd=35840,Md=35841,wd=35842,Ed=35843,bd=36196,Td=37492,Ad=37496,Rd=37488,Cd=37489,Ol=37490,Nd=37491,Pd=37808,Ld=37809,Dd=37810,Id=37811,Ud=37812,Fd=37813,Od=37814,kd=37815,Bd=37816,zd=37817,Vd=37818,Hd=37819,Gd=37820,Wd=37821,jd=36492,Xd=36494,qd=36495,Yd=36283,$d=36284,kl=36285,Kd=36286,Qx=3200,Zd=0,Jx=1,Ur="",fi="srgb",Bl="srgb-linear",zl="linear",zt="srgb",Iu=7680,ev=519,tv=512,nv=513,iv=514,ff=515,rv=516,sv=517,hf=518,av=519,ov=35044,Qp="300 es",Bi=2e3,eo=2001;function lv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cv(){const s=Vl("canvas");return s.style.display="block",s}const Jp={};function em(...s){const e="THREE."+s.shift();console.log(e,...s)}function u0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ut(...s){s=u0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Ft(...s){s=u0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function $s(...s){const e=s.join(" ");e in Jp||(Jp[e]=!0,ut(...s))}function uv(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const dv={[fd]:hd,[pd]:xd,[md]:vd,[Za]:gd,[hd]:fd,[xd]:pd,[vd]:md,[gd]:Za};class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,Qd=180/Math.PI;function no(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Nt(s,e,n){return Math.max(e,Math.min(n,s))}function fv(s,e){return(s%e+e)%e}function Fu(s,e,n){return(1-n)*s+n*e}function za(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vf=class vf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vf.prototype.isVector2=!0;let Mt=vf;class Js{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,f){let h=r[o+0],m=r[o+1],_=r[o+2],S=r[o+3],x=l[u+0],w=l[u+1],b=l[u+2],C=l[u+3];if(S!==C||h!==x||m!==w||_!==b){let y=h*x+m*w+_*b+S*C;y<0&&(x=-x,w=-w,b=-b,C=-C,y=-y);let v=1-f;if(y<.9995){const D=Math.acos(y),F=Math.sin(D);v=Math.sin(v*D)/F,f=Math.sin(f*D)/F,h=h*v+x*f,m=m*v+w*f,_=_*v+b*f,S=S*v+C*f}else{h=h*v+x*f,m=m*v+w*f,_=_*v+b*f,S=S*v+C*f;const D=1/Math.sqrt(h*h+m*m+_*_+S*S);h*=D,m*=D,_*=D,S*=D}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,l,u){const f=r[o],h=r[o+1],m=r[o+2],_=r[o+3],S=l[u],x=l[u+1],w=l[u+2],b=l[u+3];return e[n]=f*b+_*S+h*w-m*x,e[n+1]=h*b+_*x+m*S-f*w,e[n+2]=m*b+_*w+f*x-h*S,e[n+3]=_*b-f*S-h*x-m*w,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),_=f(o/2),S=f(l/2),x=h(r/2),w=h(o/2),b=h(l/2);switch(u){case"XYZ":this._x=x*_*S+m*w*b,this._y=m*w*S-x*_*b,this._z=m*_*b+x*w*S,this._w=m*_*S-x*w*b;break;case"YXZ":this._x=x*_*S+m*w*b,this._y=m*w*S-x*_*b,this._z=m*_*b-x*w*S,this._w=m*_*S+x*w*b;break;case"ZXY":this._x=x*_*S-m*w*b,this._y=m*w*S+x*_*b,this._z=m*_*b+x*w*S,this._w=m*_*S-x*w*b;break;case"ZYX":this._x=x*_*S-m*w*b,this._y=m*w*S+x*_*b,this._z=m*_*b-x*w*S,this._w=m*_*S+x*w*b;break;case"YZX":this._x=x*_*S+m*w*b,this._y=m*w*S+x*_*b,this._z=m*_*b-x*w*S,this._w=m*_*S-x*w*b;break;case"XZY":this._x=x*_*S-m*w*b,this._y=m*w*S-x*_*b,this._z=m*_*b+x*w*S,this._w=m*_*S+x*w*b;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],f=n[5],h=n[9],m=n[2],_=n[6],S=n[10],x=r+f+S;if(x>0){const w=.5/Math.sqrt(x+1);this._w=.25/w,this._x=(_-h)*w,this._y=(l-m)*w,this._z=(u-o)*w}else if(r>f&&r>S){const w=2*Math.sqrt(1+r-f-S);this._w=(_-h)/w,this._x=.25*w,this._y=(o+u)/w,this._z=(l+m)/w}else if(f>S){const w=2*Math.sqrt(1+f-r-S);this._w=(l-m)/w,this._x=(o+u)/w,this._y=.25*w,this._z=(h+_)/w}else{const w=2*Math.sqrt(1+S-r-f);this._w=(u-o)/w,this._x=(l+m)/w,this._y=(h+_)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,f=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+u*f+o*m-l*h,this._y=o*_+u*h+l*f-r*m,this._z=l*_+u*m+r*h-o*f,this._w=u*_-r*f-o*h-l*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-n;if(f<.9995){const m=Math.acos(f),_=Math.sin(m);h=Math.sin(h*m)/_,n=Math.sin(n*m)/_,this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this._onChangeCallback()}else this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _f=class _f{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*o-f*r),_=2*(f*n-l*o),S=2*(l*r-u*n);return this.x=n+h*m+u*S-f*_,this.y=r+h*_+f*m-l*S,this.z=o+h*S+l*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,f=n.y,h=n.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_f.prototype.isVector3=!0;let ne=_f;const Ou=new ne,tm=new Js,yf=class yf{constructor(e,n,r,o,l,u,f,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,h,m)}set(e,n,r,o,l,u,f,h,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=n,_[4]=l,_[5]=h,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],_=r[4],S=r[7],x=r[2],w=r[5],b=r[8],C=o[0],y=o[3],v=o[6],D=o[1],F=o[4],T=o[7],L=o[2],P=o[5],I=o[8];return l[0]=u*C+f*D+h*L,l[3]=u*y+f*F+h*P,l[6]=u*v+f*T+h*I,l[1]=m*C+_*D+S*L,l[4]=m*y+_*F+S*P,l[7]=m*v+_*T+S*I,l[2]=x*C+w*D+b*L,l[5]=x*y+w*F+b*P,l[8]=x*v+w*T+b*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8];return n*u*_-n*f*m-r*l*_+r*f*h+o*l*m-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8],S=_*u-f*m,x=f*h-_*l,w=m*l-u*h,b=n*S+r*x+o*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=S*C,e[1]=(o*m-_*r)*C,e[2]=(f*r-o*u)*C,e[3]=x*C,e[4]=(_*n-o*h)*C,e[5]=(o*l-f*n)*C,e[6]=w*C,e[7]=(r*h-m*n)*C,e[8]=(u*n-r*l)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,f){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-o*m,o*h,-o*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ku.makeScale(e,n)),this}rotate(e){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ku.makeRotation(-e)),this}translate(e,n){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yf.prototype.isMatrix3=!0;let mt=yf;const ku=new mt,nm=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hv(){const s={enabled:!0,workingColorSpace:Bl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===zt&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(o.r=Ks(o.r),o.g=Ks(o.g),o.b=Ks(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?zl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Bl]:{primaries:e,whitePoint:r,transfer:zl,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:nm,fromXYZ:im,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Ct=hv();function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class pv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ls===void 0&&(Ls=Vl("canvas")),Ls.width=e.width,Ls.height=e.height;const o=Ls.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ls}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=or(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(or(n[r]/255)*255):n[r]=or(n[r]);return{data:n,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mv=0;class pf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Bu(o[u].image)):l.push(Bu(o[u]))}else l=Bu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Bu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let gv=0;const zu=new ne;class Bn extends cs{constructor(e=Bn.DEFAULT_IMAGE,n=Bn.DEFAULT_MAPPING,r=sr,o=sr,l=In,u=rs,f=Ai,h=ii,m=Bn.DEFAULT_ANISOTROPY,_=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=no(),this.name="",this.source=new pf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zu).x}get height(){return this.source.getSize(zu).y}get depth(){return this.source.getSize(zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ut(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==n0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=n0;Bn.DEFAULT_ANISOTROPY=1;const Sf=class Sf{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const h=e.elements,m=h[0],_=h[4],S=h[8],x=h[1],w=h[5],b=h[9],C=h[2],y=h[6],v=h[10];if(Math.abs(_-x)<.01&&Math.abs(S-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(S+C)<.1&&Math.abs(b+y)<.1&&Math.abs(m+w+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(m+1)/2,T=(w+1)/2,L=(v+1)/2,P=(_+x)/4,I=(S+C)/4,M=(b+y)/4;return F>T&&F>L?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=P/r,l=I/r):T>L?T<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(T),r=P/o,l=M/o):L<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(L),r=I/l,o=M/l),this.set(r,o,l,n),this}let D=Math.sqrt((y-b)*(y-b)+(S-C)*(S-C)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-b)/D,this.y=(S-C)/D,this.z=(x-_)/D,this.w=Math.acos((m+w+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this.w=Nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this.w=Nt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sf.prototype.isVector4=!0;let nn=Sf;class xv extends cs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new nn(0,0,e,n),this.scissorTest=!1,this.viewport=new nn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new Bn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new pf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends xv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class d0 extends Bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vv extends Bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Wl=class Wl{constructor(e,n,r,o,l,u,f,h,m,_,S,x,w,b,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,h,m,_,S,x,w,b,C,y)}set(e,n,r,o,l,u,f,h,m,_,S,x,w,b,C,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=h,v[2]=m,v[6]=_,v[10]=S,v[14]=x,v[3]=w,v[7]=b,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),u=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),_=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const x=u*_,w=u*S,b=f*_,C=f*S;n[0]=h*_,n[4]=-h*S,n[8]=m,n[1]=w+b*m,n[5]=x-C*m,n[9]=-f*h,n[2]=C-x*m,n[6]=b+w*m,n[10]=u*h}else if(e.order==="YXZ"){const x=h*_,w=h*S,b=m*_,C=m*S;n[0]=x+C*f,n[4]=b*f-w,n[8]=u*m,n[1]=u*S,n[5]=u*_,n[9]=-f,n[2]=w*f-b,n[6]=C+x*f,n[10]=u*h}else if(e.order==="ZXY"){const x=h*_,w=h*S,b=m*_,C=m*S;n[0]=x-C*f,n[4]=-u*S,n[8]=b+w*f,n[1]=w+b*f,n[5]=u*_,n[9]=C-x*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const x=u*_,w=u*S,b=f*_,C=f*S;n[0]=h*_,n[4]=b*m-w,n[8]=x*m+C,n[1]=h*S,n[5]=C*m+x,n[9]=w*m-b,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const x=u*h,w=u*m,b=f*h,C=f*m;n[0]=h*_,n[4]=C-x*S,n[8]=b*S+w,n[1]=S,n[5]=u*_,n[9]=-f*_,n[2]=-m*_,n[6]=w*S+b,n[10]=x-C*S}else if(e.order==="XZY"){const x=u*h,w=u*m,b=f*h,C=f*m;n[0]=h*_,n[4]=-S,n[8]=m*_,n[1]=x*S+C,n[5]=u*_,n[9]=w*S-b,n[2]=b*S-w,n[6]=f*_,n[10]=C*S+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_v,e,yv)}lookAt(e,n,r){const o=this.elements;return ei.subVectors(e,n),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Rr.crossVectors(r,ei),Rr.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Rr.crossVectors(r,ei)),Rr.normalize(),ll.crossVectors(ei,Rr),o[0]=Rr.x,o[4]=ll.x,o[8]=ei.x,o[1]=Rr.y,o[5]=ll.y,o[9]=ei.y,o[2]=Rr.z,o[6]=ll.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],_=r[1],S=r[5],x=r[9],w=r[13],b=r[2],C=r[6],y=r[10],v=r[14],D=r[3],F=r[7],T=r[11],L=r[15],P=o[0],I=o[4],M=o[8],N=o[12],B=o[1],z=o[5],j=o[9],Q=o[13],H=o[2],J=o[6],oe=o[10],Y=o[14],G=o[3],$=o[7],Z=o[11],U=o[15];return l[0]=u*P+f*B+h*H+m*G,l[4]=u*I+f*z+h*J+m*$,l[8]=u*M+f*j+h*oe+m*Z,l[12]=u*N+f*Q+h*Y+m*U,l[1]=_*P+S*B+x*H+w*G,l[5]=_*I+S*z+x*J+w*$,l[9]=_*M+S*j+x*oe+w*Z,l[13]=_*N+S*Q+x*Y+w*U,l[2]=b*P+C*B+y*H+v*G,l[6]=b*I+C*z+y*J+v*$,l[10]=b*M+C*j+y*oe+v*Z,l[14]=b*N+C*Q+y*Y+v*U,l[3]=D*P+F*B+T*H+L*G,l[7]=D*I+F*z+T*J+L*$,l[11]=D*M+F*j+T*oe+L*Z,l[15]=D*N+F*Q+T*Y+L*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],m=e[13],_=e[2],S=e[6],x=e[10],w=e[14],b=e[3],C=e[7],y=e[11],v=e[15],D=h*w-m*x,F=f*w-m*S,T=f*x-h*S,L=u*w-m*_,P=u*x-h*_,I=u*S-f*_;return n*(C*D-y*F+v*T)-r*(b*D-y*L+v*P)+o*(b*F-C*L+v*I)-l*(b*T-C*P+y*I)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],m=e[6],_=e[10];return n*(u*_-f*m)-r*(l*_-f*h)+o*(l*m-u*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8],S=e[9],x=e[10],w=e[11],b=e[12],C=e[13],y=e[14],v=e[15],D=n*f-r*u,F=n*h-o*u,T=n*m-l*u,L=r*h-o*f,P=r*m-l*f,I=o*m-l*h,M=_*C-S*b,N=_*y-x*b,B=_*v-w*b,z=S*y-x*C,j=S*v-w*C,Q=x*v-w*y,H=D*Q-F*j+T*z+L*B-P*N+I*M;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/H;return e[0]=(f*Q-h*j+m*z)*J,e[1]=(o*j-r*Q-l*z)*J,e[2]=(C*I-y*P+v*L)*J,e[3]=(x*P-S*I-w*L)*J,e[4]=(h*B-u*Q-m*N)*J,e[5]=(n*Q-o*B+l*N)*J,e[6]=(y*T-b*I-v*F)*J,e[7]=(_*I-x*T+w*F)*J,e[8]=(u*j-f*B+m*M)*J,e[9]=(r*B-n*j-l*M)*J,e[10]=(b*P-C*T+v*D)*J,e[11]=(S*T-_*P-w*D)*J,e[12]=(f*N-u*z-h*M)*J,e[13]=(n*z-r*N+o*M)*J,e[14]=(C*F-b*L-y*D)*J,e[15]=(_*L-S*F+x*D)*J,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,f=e.y,h=e.z,m=l*u,_=l*f;return this.set(m*u+r,m*f-o*h,m*h+o*f,0,m*f+o*h,_*f+r,_*h-o*u,0,m*h-o*f,_*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,f=n._z,h=n._w,m=l+l,_=u+u,S=f+f,x=l*m,w=l*_,b=l*S,C=u*_,y=u*S,v=f*S,D=h*m,F=h*_,T=h*S,L=r.x,P=r.y,I=r.z;return o[0]=(1-(C+v))*L,o[1]=(w+T)*L,o[2]=(b-F)*L,o[3]=0,o[4]=(w-T)*P,o[5]=(1-(x+v))*P,o[6]=(y+D)*P,o[7]=0,o[8]=(b+F)*I,o[9]=(y-D)*I,o[10]=(1-(x+C))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let u=Ds.set(o[0],o[1],o[2]).length();const f=Ds.set(o[4],o[5],o[6]).length(),h=Ds.set(o[8],o[9],o[10]).length();l<0&&(u=-u),wi.copy(this);const m=1/u,_=1/f,S=1/h;return wi.elements[0]*=m,wi.elements[1]*=m,wi.elements[2]*=m,wi.elements[4]*=_,wi.elements[5]*=_,wi.elements[6]*=_,wi.elements[8]*=S,wi.elements[9]*=S,wi.elements[10]*=S,n.setFromRotationMatrix(wi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,n,r,o,l,u,f=Bi,h=!1){const m=this.elements,_=2*l/(n-e),S=2*l/(r-o),x=(n+e)/(n-e),w=(r+o)/(r-o);let b,C;if(h)b=l/(u-l),C=u*l/(u-l);else if(f===Bi)b=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===eo)b=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=S,m[9]=w,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,u,f=Bi,h=!1){const m=this.elements,_=2/(n-e),S=2/(r-o),x=-(n+e)/(n-e),w=-(r+o)/(r-o);let b,C;if(h)b=1/(u-l),C=u/(u-l);else if(f===Bi)b=-2/(u-l),C=-(u+l)/(u-l);else if(f===eo)b=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=S,m[9]=0,m[13]=w,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Wl.prototype.isMatrix4=!0;let rn=Wl;const Ds=new ne,wi=new rn,_v=new ne(0,0,0),yv=new ne(1,1,1),Rr=new ne,ll=new ne,ei=new ne,rm=new rn,sm=new Js;class Or{constructor(e=0,n=0,r=0,o=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],m=o[5],_=o[9],S=o[2],x=o[6],w=o[10];switch(n){case"XYZ":this._y=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,w),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,w),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,w),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Nt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,w),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,w));break;case"XZY":this._z=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,w),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";class f0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sv=0;const am=new ne,Is=new Js,Ji=new rn,cl=new ne,Va=new ne,Mv=new ne,wv=new Js,om=new ne(1,0,0),lm=new ne(0,1,0),cm=new ne(0,0,1),um={type:"added"},Ev={type:"removed"},Us={type:"childadded",child:null},Vu={type:"childremoved",child:null};class zn extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new ne,n=new Or,r=new Js,o=new ne(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new rn},normalMatrix:{value:new mt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,n){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cl.copy(e):cl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Va,cl,this.up):Ji.lookAt(cl,Va,this.up),this.quaternion.setFromRotationMatrix(Ji),o&&(Ji.extractRotation(o.matrixWorld),Is.setFromRotationMatrix(Ji),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),Us.child=e,this.dispatchEvent(Us),Us.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ev),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,Mv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,wv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const S=h[m];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),_=u(e.images),S=u(e.shapes),x=u(e.skeletons),w=u(e.animations),b=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),w.length>0&&(r.animations=w),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(f){const h=[];for(const m in f){const _=f[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zn.DEFAULT_UP=new ne(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fr extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const y=n.getJointPose(C,r),v=this._getHandJoint(m,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],x=_.position.distanceTo(S.position),w=.02,b=.005;m.inputState.pinching&&x>w+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=w-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Fr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const h0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Gu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Ct.workingColorSpace){if(e=fv(e,1),n=Nt(n,0,1),r=Nt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Gu(u,l,e+1/3),this.g=Gu(u,l,e),this.b=Gu(u,l,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,n=fi){function r(l){l!==void 0&&parseFloat(l)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fi){const r=h0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ct.workingToColorSpace(Dn.copy(this),e),Math.round(Nt(Dn.r*255,0,255))*65536+Math.round(Nt(Dn.g*255,0,255))*256+Math.round(Nt(Dn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.workingToColorSpace(Dn.copy(this),n);const r=Dn.r,o=Dn.g,l=Dn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,m;const _=(f+u)/2;if(f===u)h=0,m=0;else{const S=u-f;switch(m=_<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Ct.workingColorSpace){return Ct.workingToColorSpace(Dn.copy(this),n),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=fi){Ct.workingToColorSpace(Dn.copy(this),e);const n=Dn.r,r=Dn.g,o=Dn.b;return e!==fi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+n,Cr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Cr),e.getHSL(ul);const r=Fu(Cr.h,ul.h,n),o=Fu(Cr.s,ul.s,n),l=Fu(Cr.l,ul.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Pt;Pt.NAMES=h0;class Tv extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentIntensity=1,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ei=new ne,er=new ne,Wu=new ne,tr=new ne,Fs=new ne,Os=new ne,dm=new ne,ju=new ne,Xu=new ne,qu=new ne,Yu=new nn,$u=new nn,Ku=new nn;class Ti{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ei.subVectors(e,n),o.cross(Ei);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){Ei.subVectors(o,n),er.subVectors(r,n),Wu.subVectors(e,n);const u=Ei.dot(Ei),f=Ei.dot(er),h=Ei.dot(Wu),m=er.dot(er),_=er.dot(Wu),S=u*m-f*f;if(S===0)return l.set(0,0,0),null;const x=1/S,w=(m*h-f*_)*x,b=(u*_-f*h)*x;return l.set(1-w-b,b,w)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,n,r,o,l,u,f,h){return this.getBarycoord(e,n,r,o,tr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,tr.x),h.addScaledVector(u,tr.y),h.addScaledVector(f,tr.z),h)}static getInterpolatedAttribute(e,n,r,o,l,u){return Yu.setScalar(0),$u.setScalar(0),Ku.setScalar(0),Yu.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,r),Ku.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Yu,l.x),u.addScaledVector($u,l.y),u.addScaledVector(Ku,l.z),u}static isFrontFacing(e,n,r,o){return Ei.subVectors(r,n),er.subVectors(e,n),Ei.cross(er).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Ei.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return Ti.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,f;Fs.subVectors(o,r),Os.subVectors(l,r),ju.subVectors(e,r);const h=Fs.dot(ju),m=Os.dot(ju);if(h<=0&&m<=0)return n.copy(r);Xu.subVectors(e,o);const _=Fs.dot(Xu),S=Os.dot(Xu);if(_>=0&&S<=_)return n.copy(o);const x=h*S-_*m;if(x<=0&&h>=0&&_<=0)return u=h/(h-_),n.copy(r).addScaledVector(Fs,u);qu.subVectors(e,l);const w=Fs.dot(qu),b=Os.dot(qu);if(b>=0&&w<=b)return n.copy(l);const C=w*m-h*b;if(C<=0&&m>=0&&b<=0)return f=m/(m-b),n.copy(r).addScaledVector(Os,f);const y=_*b-w*S;if(y<=0&&S-_>=0&&w-b>=0)return dm.subVectors(l,o),f=(S-_)/(S-_+(w-b)),n.copy(o).addScaledVector(dm,f);const v=1/(y+C+x);return u=C*v,f=x*v,n.copy(r).addScaledVector(Fs,u).addScaledVector(Os,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class io{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,bi):bi.fromBufferAttribute(l,u),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dl.copy(r.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),fl.subVectors(this.max,Ha),ks.subVectors(e.a,Ha),Bs.subVectors(e.b,Ha),zs.subVectors(e.c,Ha),Nr.subVectors(Bs,ks),Pr.subVectors(zs,Bs),Qr.subVectors(ks,zs);let n=[0,-Nr.z,Nr.y,0,-Pr.z,Pr.y,0,-Qr.z,Qr.y,Nr.z,0,-Nr.x,Pr.z,0,-Pr.x,Qr.z,0,-Qr.x,-Nr.y,Nr.x,0,-Pr.y,Pr.x,0,-Qr.y,Qr.x,0];return!Zu(n,ks,Bs,zs,fl)||(n=[1,0,0,0,1,0,0,0,1],!Zu(n,ks,Bs,zs,fl))?!1:(hl.crossVectors(Nr,Pr),n=[hl.x,hl.y,hl.z],Zu(n,ks,Bs,zs,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],bi=new ne,dl=new io,ks=new ne,Bs=new ne,zs=new ne,Nr=new ne,Pr=new ne,Qr=new ne,Ha=new ne,fl=new ne,hl=new ne,Jr=new ne;function Zu(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Jr.fromArray(s,l);const f=o.x*Math.abs(Jr.x)+o.y*Math.abs(Jr.y)+o.z*Math.abs(Jr.z),h=e.dot(Jr),m=n.dot(Jr),_=r.dot(Jr);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>f)return!1}return!0}const dn=new ne,pl=new Mt;let Av=0;class Ci extends cs{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Av++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=ov,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)pl.fromBufferAttribute(this,n),pl.applyMatrix3(e),this.setXY(n,pl.x,pl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=za(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=za(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=za(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=za(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=za(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),r=Yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),r=Yn(r,this.array),o=Yn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),r=Yn(r,this.array),o=Yn(o,this.array),l=Yn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class p0 extends Ci{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class m0 extends Ci{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class cn extends Ci{constructor(e,n,r){super(new Float32Array(e),n,r)}}const Rv=new io,Ga=new ne,Qu=new ne;class Xl{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Rv.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);const n=Ga.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ga,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(Qu)),this.expandByPoint(Ga.copy(e.center).sub(Qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cv=0;const di=new rn,Ju=new zn,Vs=new ne,ti=new io,Wa=new io,Mn=new ne;class Vn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?m0:p0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,n,r){return di.makeTranslation(e,n,r),this.applyMatrix4(di),this}scale(e,n,r){return di.makeScale(e,n,r),this.applyMatrix4(di),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new cn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];ti.setFromBufferAttribute(l),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Wa.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(ti.min,Wa.min),ti.expandByPoint(Mn),Mn.addVectors(ti.max,Wa.max),ti.expandByPoint(Mn)):(ti.expandByPoint(Wa.min),ti.expandByPoint(Wa.max))}ti.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Mn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Mn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],h=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)Mn.fromBufferAttribute(f,m),h&&(Vs.fromBufferAttribute(e,m),Mn.add(Vs)),o=Math.max(o,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ci(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let M=0;M<r.count;M++)f[M]=new ne,h[M]=new ne;const m=new ne,_=new ne,S=new ne,x=new Mt,w=new Mt,b=new Mt,C=new ne,y=new ne;function v(M,N,B){m.fromBufferAttribute(r,M),_.fromBufferAttribute(r,N),S.fromBufferAttribute(r,B),x.fromBufferAttribute(l,M),w.fromBufferAttribute(l,N),b.fromBufferAttribute(l,B),_.sub(m),S.sub(m),w.sub(x),b.sub(x);const z=1/(w.x*b.y-b.x*w.y);isFinite(z)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(S,-w.y).multiplyScalar(z),y.copy(S).multiplyScalar(w.x).addScaledVector(_,-b.x).multiplyScalar(z),f[M].add(C),f[N].add(C),f[B].add(C),h[M].add(y),h[N].add(y),h[B].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let M=0,N=D.length;M<N;++M){const B=D[M],z=B.start,j=B.count;for(let Q=z,H=z+j;Q<H;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const F=new ne,T=new ne,L=new ne,P=new ne;function I(M){L.fromBufferAttribute(o,M),P.copy(L);const N=f[M];F.copy(N),F.sub(L.multiplyScalar(L.dot(N))).normalize(),T.crossVectors(P,N);const z=T.dot(h[M])<0?-1:1;u.setXYZW(M,F.x,F.y,F.z,z)}for(let M=0,N=D.length;M<N;++M){const B=D[M],z=B.start,j=B.count;for(let Q=z,H=z+j;Q<H;Q+=3)I(e.getX(Q+0)),I(e.getX(Q+1)),I(e.getX(Q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Ci(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,w=r.count;x<w;x++)r.setXYZ(x,0,0,0);const o=new ne,l=new ne,u=new ne,f=new ne,h=new ne,m=new ne,_=new ne,S=new ne;if(e)for(let x=0,w=e.count;x<w;x+=3){const b=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,y),_.subVectors(u,l),S.subVectors(o,l),_.cross(S),f.fromBufferAttribute(r,b),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),f.add(_),h.add(_),m.add(_),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,w=n.count;x<w;x+=3)o.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),_.subVectors(u,l),S.subVectors(o,l),_.cross(S),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(f,h){const m=f.array,_=f.itemSize,S=f.normalized,x=new m.constructor(h.length*_);let w=0,b=0;for(let C=0,y=h.length;C<y;C++){f.isInterleavedBufferAttribute?w=h[C]*f.data.stride+f.offset:w=h[C]*_;for(let v=0;v<_;v++)x[b++]=m[w++]}return new Ci(x,_,S)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let _=0,S=m.length;_<S;_++){const x=m[_],w=e(x,r);h.push(w)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let S=0,x=m.length;S<x;S++){const w=m[S];_.push(w.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],S=l[m];for(let x=0,w=S.length;x<w;x++)_.push(S[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ed=new ne,Nv=new ne,Pv=new mt;class Dr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=ed.subVectors(r,n).cross(Nv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(ed),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Pv.getNormalMatrix(e),o=this.coplanarPoint(ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Lv=0;class ea extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=no(),this.name="",this.type="Material",this.blending=$a,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qm,this.blendDst=Ym,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ev,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Iu,this.stencilZFail=Iu,this.stencilZPass=Iu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ut(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Dr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Mt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ir=new ne,td=new ne,ml=new ne,gl=new ne;class g0{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ir.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,n),ir.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){td.copy(e).add(n).multiplyScalar(.5),ml.copy(n).sub(e).normalize(),gl.copy(this.origin).sub(td);const l=e.distanceTo(n)*.5,u=-this.direction.dot(ml),f=gl.dot(this.direction),h=-gl.dot(ml),m=gl.lengthSq(),_=Math.abs(1-u*u);let S,x,w,b;if(_>0)if(S=u*h-f,x=u*f-h,b=l*_,S>=0)if(x>=-b)if(x<=b){const C=1/_;S*=C,x*=C,w=S*(S+u*x+2*f)+x*(u*S+x+2*h)+m}else x=l,S=Math.max(0,-(u*x+f)),w=-S*S+x*(x+2*h)+m;else x=-l,S=Math.max(0,-(u*x+f)),w=-S*S+x*(x+2*h)+m;else x<=-b?(S=Math.max(0,-(-u*l+f)),x=S>0?-l:Math.min(Math.max(-l,-h),l),w=-S*S+x*(x+2*h)+m):x<=b?(S=0,x=Math.min(Math.max(-l,-h),l),w=x*(x+2*h)+m):(S=Math.max(0,-(u*l+f)),x=S>0?l:Math.min(Math.max(-l,-h),l),w=-S*S+x*(x+2*h)+m);else x=u>0?-l:l,S=Math.max(0,-(u*x+f)),w=-S*S+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(td).addScaledVector(ml,x),w}intersectSphere(e,n){if(e.radius<0)return null;ir.subVectors(e.center,this.origin);const r=ir.dot(this.direction),o=ir.dot(ir)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,f,h;const m=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),_>=0?(l=(e.min.y-x.y)*_,u=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,u=(e.min.y-x.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-x.z)*S,h=(e.max.z-x.z)*S):(f=(e.max.z-x.z)*S,h=(e.min.z-x.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,n,r,o,l){const u=this.origin,f=this.direction,h=f.x,m=f.y,_=f.z,S=e.x-u.x,x=e.y-u.y,w=e.z-u.z,b=n.x-u.x,C=n.y-u.y,y=n.z-u.z,v=r.x-u.x,D=r.y-u.y,F=r.z-u.z,T=Math.abs(h),L=Math.abs(m),P=Math.abs(_);let I,M,N,B,z,j,Q,H,J,oe,Y,G;if(T>=L&&T>=P?(N=h,j=S,J=b,G=v,h>=0?(I=m,M=_,B=x,z=w,Q=C,H=y,oe=D,Y=F):(I=_,M=m,B=w,z=x,Q=y,H=C,oe=F,Y=D)):L>=P?(N=m,j=x,J=C,G=D,m>=0?(I=_,M=h,B=w,z=S,Q=y,H=b,oe=F,Y=v):(I=h,M=_,B=S,z=w,Q=b,H=y,oe=v,Y=F)):(N=_,j=w,J=y,G=F,_>=0?(I=h,M=m,B=S,z=x,Q=b,H=C,oe=v,Y=D):(I=m,M=h,B=x,z=S,Q=C,H=b,oe=D,Y=v)),N===0)return null;const $=I/N,Z=M/N,U=1/N,re=B-$*j,ve=z-Z*j,ze=Q-$*J,De=H-Z*J,Be=oe-$*G,ie=Y-Z*G,le=Be*De-ie*ze,Se=re*ie-ve*Be,qe=ze*ve-De*re;if(o){if(le<0||Se<0||qe<0)return null}else if((le<0||Se<0||qe<0)&&(le>0||Se>0||qe>0))return null;const Le=le+Se+qe;if(Le===0)return null;const lt=U*(le*j+Se*J+qe*G);return(Le>0?lt<0:lt>0)?null:this.at(lt/Le,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class is extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fm=new rn,es=new g0,xl=new Xl,hm=new ne,vl=new ne,_l=new ne,yl=new ne,nd=new ne,Sl=new ne,pm=new ne,Ml=new ne;class tn extends zn{constructor(e=new Vn,n=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Sl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const _=f[h],S=l[h];_!==0&&(nd.fromBufferAttribute(S,e),u?Sl.addScaledVector(nd,_):Sl.addScaledVector(nd.sub(n),_))}n.add(Sl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(xl.containsPoint(es.origin)===!1&&(es.intersectSphere(xl,hm)===null||es.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(fm.copy(l).invert(),es.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,es)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,S=l.attributes.normal,x=l.groups,w=l.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,C=x.length;b<C;b++){const y=x[b],v=u[y.materialIndex],D=Math.max(y.start,w.start),F=Math.min(f.count,Math.min(y.start+y.count,w.start+w.count));for(let T=D,L=F;T<L;T+=3){const P=f.getX(T),I=f.getX(T+1),M=f.getX(T+2);o=wl(this,v,e,r,m,_,S,P,I,M),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,w.start),C=Math.min(f.count,w.start+w.count);for(let y=b,v=C;y<v;y+=3){const D=f.getX(y),F=f.getX(y+1),T=f.getX(y+2);o=wl(this,u,e,r,m,_,S,D,F,T),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let b=0,C=x.length;b<C;b++){const y=x[b],v=u[y.materialIndex],D=Math.max(y.start,w.start),F=Math.min(h.count,Math.min(y.start+y.count,w.start+w.count));for(let T=D,L=F;T<L;T+=3){const P=T,I=T+1,M=T+2;o=wl(this,v,e,r,m,_,S,P,I,M),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,w.start),C=Math.min(h.count,w.start+w.count);for(let y=b,v=C;y<v;y+=3){const D=y,F=y+1,T=y+2;o=wl(this,u,e,r,m,_,S,D,F,T),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Dv(s,e,n,r,o,l,u,f){let h;if(e.side===$n?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===as,f),h===null)return null;Ml.copy(f),Ml.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Ml);return m<n.near||m>n.far?null:{distance:m,point:Ml.clone(),object:s}}function wl(s,e,n,r,o,l,u,f,h,m){s.getVertexPosition(f,vl),s.getVertexPosition(h,_l),s.getVertexPosition(m,yl);const _=Dv(s,e,n,r,vl,_l,yl,pm);if(_){const S=new ne;Ti.getBarycoord(pm,vl,_l,yl,S),o&&(_.uv=Ti.getInterpolatedAttribute(o,f,h,m,S,new Mt)),l&&(_.uv1=Ti.getInterpolatedAttribute(l,f,h,m,S,new Mt)),u&&(_.normal=Ti.getInterpolatedAttribute(u,f,h,m,S,new ne),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new ne,materialIndex:0};Ti.getNormal(vl,_l,yl,x.normal),_.face=x,_.barycoord=S}return _}class Iv extends Bn{constructor(e=null,n=1,r=1,o,l,u,f,h,m=Tn,_=Tn,S,x){super(null,u,f,h,m,_,o,l,S,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ts=new Xl,Uv=new Mt(.5,.5),El=new ne;class mf{constructor(e=new Dr,n=new Dr,r=new Dr,o=new Dr,l=new Dr,u=new Dr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],m=l[3],_=l[4],S=l[5],x=l[6],w=l[7],b=l[8],C=l[9],y=l[10],v=l[11],D=l[12],F=l[13],T=l[14],L=l[15];if(o[0].setComponents(m-u,w-_,v-b,L-D).normalize(),o[1].setComponents(m+u,w+_,v+b,L+D).normalize(),o[2].setComponents(m+f,w+S,v+C,L+F).normalize(),o[3].setComponents(m-f,w-S,v-C,L-F).normalize(),r)o[4].setComponents(h,x,y,T).normalize(),o[5].setComponents(m-h,w-x,v-y,L-T).normalize();else if(o[4].setComponents(m-h,w-x,v-y,L-T).normalize(),n===Bi)o[5].setComponents(m+h,w+x,v+y,L+T).normalize();else if(n===eo)o[5].setComponents(h,x,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const n=Uv.distanceTo(e.center);return ts.radius=.7071067811865476+n,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(El.x=o.normal.x>0?e.max.x:e.min.x,El.y=o.normal.y>0?e.max.y:e.min.y,El.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class x0 extends ea{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mm=new rn,Jd=new g0,bl=new Xl,Tl=new ne;class Fv extends zn{constructor(e=new Vn,n=new x0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(o),bl.radius+=l,e.ray.intersectsSphere(bl)===!1)return;mm.copy(o).invert(),Jd.copy(e.ray).applyMatrix4(mm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=r.index,S=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),w=Math.min(m.count,u.start+u.count);for(let b=x,C=w;b<C;b++){const y=m.getX(b);Tl.fromBufferAttribute(S,y),gm(Tl,y,h,o,e,n,this)}}else{const x=Math.max(0,u.start),w=Math.min(S.count,u.start+u.count);for(let b=x,C=w;b<C;b++)Tl.fromBufferAttribute(S,b),gm(Tl,b,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function gm(s,e,n,r,o,l,u){const f=Jd.distanceSqToPoint(s);if(f<n){const h=new ne;Jd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class v0 extends Bn{constructor(e=[],n=os,r,o,l,u,f,h,m,_){super(e,n,r,o,l,u,f,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class to extends Bn{constructor(e,n,r=Vi,o,l,u,f=Tn,h=Tn,m,_=lr,S=1){if(_!==lr&&_!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:S};super(x,o,l,u,f,h,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Ov extends to{constructor(e,n=Vi,r=os,o,l,u=Tn,f=Tn,h,m=lr){const _={width:e,height:e,depth:1},S=[_,_,_,_,_,_];super(e,e,n,r,o,l,u,f,h,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _0 extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ta extends Vn{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],_=[],S=[];let x=0,w=0;b("z","y","x",-1,-1,r,n,e,u,l,0),b("z","y","x",1,-1,r,n,-e,u,l,1),b("x","z","y",1,1,e,r,n,o,u,2),b("x","z","y",1,-1,e,r,-n,o,u,3),b("x","y","z",1,-1,e,n,r,o,l,4),b("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(S,2));function b(C,y,v,D,F,T,L,P,I,M,N){const B=T/I,z=L/M,j=T/2,Q=L/2,H=P/2,J=I+1,oe=M+1;let Y=0,G=0;const $=new ne;for(let Z=0;Z<oe;Z++){const U=Z*z-Q;for(let re=0;re<J;re++){const ve=re*B-j;$[C]=ve*D,$[y]=U*F,$[v]=H,m.push($.x,$.y,$.z),$[C]=0,$[y]=0,$[v]=P>0?1:-1,_.push($.x,$.y,$.z),S.push(re/I),S.push(1-Z/M),Y+=1}}for(let Z=0;Z<M;Z++)for(let U=0;U<I;U++){const re=x+U+J*Z,ve=x+U+J*(Z+1),ze=x+(U+1)+J*(Z+1),De=x+(U+1)+J*Z;h.push(re,ve,De),h.push(ve,ze,De),G+=6}f.addGroup(w,G,N),w+=G,x+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ka extends Vn{constructor(e=1,n=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const m=this;o=Math.floor(o),l=Math.floor(l);const _=[],S=[],x=[],w=[];let b=0;const C=[],y=r/2;let v=0;D(),u===!1&&(e>0&&F(!0),n>0&&F(!1)),this.setIndex(_),this.setAttribute("position",new cn(S,3)),this.setAttribute("normal",new cn(x,3)),this.setAttribute("uv",new cn(w,2));function D(){const T=new ne,L=new ne;let P=0;const I=(n-e)/r;for(let M=0;M<=l;M++){const N=[],B=M/l,z=B*(n-e)+e;for(let j=0;j<=o;j++){const Q=j/o,H=Q*h+f,J=Math.sin(H),oe=Math.cos(H);L.x=z*J,L.y=-B*r+y,L.z=z*oe,S.push(L.x,L.y,L.z),T.set(J,I,oe).normalize(),x.push(T.x,T.y,T.z),w.push(Q,1-B),N.push(b++)}C.push(N)}for(let M=0;M<o;M++)for(let N=0;N<l;N++){const B=C[N][M],z=C[N+1][M],j=C[N+1][M+1],Q=C[N][M+1];(e>0||N!==0)&&(_.push(B,z,Q),P+=3),(n>0||N!==l-1)&&(_.push(z,j,Q),P+=3)}m.addGroup(v,P,0),v+=P}function F(T){const L=b,P=new Mt,I=new ne;let M=0;const N=T===!0?e:n,B=T===!0?1:-1;for(let j=1;j<=o;j++)S.push(0,y*B,0),x.push(0,B,0),w.push(.5,.5),b++;const z=b;for(let j=0;j<=o;j++){const H=j/o*h+f,J=Math.cos(H),oe=Math.sin(H);I.x=N*oe,I.y=y*B,I.z=N*J,S.push(I.x,I.y,I.z),x.push(0,B,0),P.x=J*.5+.5,P.y=oe*.5*B+.5,w.push(P.x,P.y),b++}for(let j=0;j<o;j++){const Q=L+j,H=z+j;T===!0?_.push(H,H+1,Q):_.push(H+1,H,Q),M+=3}m.addGroup(v,M,T===!0?1:2),v+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gf extends Vn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const l=[],u=[];f(o),m(r),_(),this.setAttribute("position",new cn(l,3)),this.setAttribute("normal",new cn(l.slice(),3)),this.setAttribute("uv",new cn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(D){const F=new ne,T=new ne,L=new ne;for(let P=0;P<n.length;P+=3)w(n[P+0],F),w(n[P+1],T),w(n[P+2],L),h(F,T,L,D)}function h(D,F,T,L){const P=L+1,I=[];for(let M=0;M<=P;M++){I[M]=[];const N=D.clone().lerp(T,M/P),B=F.clone().lerp(T,M/P),z=P-M;for(let j=0;j<=z;j++)j===0&&M===P?I[M][j]=N:I[M][j]=N.clone().lerp(B,j/z)}for(let M=0;M<P;M++)for(let N=0;N<2*(P-M)-1;N++){const B=Math.floor(N/2);N%2===0?(x(I[M][B+1]),x(I[M+1][B]),x(I[M][B])):(x(I[M][B+1]),x(I[M+1][B+1]),x(I[M+1][B]))}}function m(D){const F=new ne;for(let T=0;T<l.length;T+=3)F.x=l[T+0],F.y=l[T+1],F.z=l[T+2],F.normalize().multiplyScalar(D),l[T+0]=F.x,l[T+1]=F.y,l[T+2]=F.z}function _(){const D=new ne;for(let F=0;F<l.length;F+=3){D.x=l[F+0],D.y=l[F+1],D.z=l[F+2];const T=y(D)/2/Math.PI+.5,L=v(D)/Math.PI+.5;u.push(T,1-L)}b(),S()}function S(){for(let D=0;D<u.length;D+=6){const F=u[D+0],T=u[D+2],L=u[D+4],P=Math.max(F,T,L),I=Math.min(F,T,L);P>.9&&I<.1&&(F<.2&&(u[D+0]+=1),T<.2&&(u[D+2]+=1),L<.2&&(u[D+4]+=1))}}function x(D){l.push(D.x,D.y,D.z)}function w(D,F){const T=D*3;F.x=e[T+0],F.y=e[T+1],F.z=e[T+2]}function b(){const D=new ne,F=new ne,T=new ne,L=new ne,P=new Mt,I=new Mt,M=new Mt;for(let N=0,B=0;N<l.length;N+=9,B+=6){D.set(l[N+0],l[N+1],l[N+2]),F.set(l[N+3],l[N+4],l[N+5]),T.set(l[N+6],l[N+7],l[N+8]),P.set(u[B+0],u[B+1]),I.set(u[B+2],u[B+3]),M.set(u[B+4],u[B+5]),L.copy(D).add(F).add(T).divideScalar(3);const z=y(L);C(P,B+0,D,z),C(I,B+2,F,z),C(M,B+4,T,z)}}function C(D,F,T,L){L<0&&D.x===1&&(u[F]=D.x-1),T.x===0&&T.z===0&&(u[F]=L/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function v(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.vertices,e.indices,e.radius,e.detail)}}class Hl extends gf{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Hl(e.radius,e.detail)}}class ql extends Vn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,f=Math.floor(r),h=Math.floor(o),m=f+1,_=h+1,S=e/f,x=n/h,w=[],b=[],C=[],y=[];for(let v=0;v<_;v++){const D=v*x-u;for(let F=0;F<m;F++){const T=F*S-l;b.push(T,-D,0),C.push(0,0,1),y.push(F/f),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let D=0;D<f;D++){const F=D+m*v,T=D+m*(v+1),L=D+1+m*(v+1),P=D+1+m*v;w.push(F,T,P),w.push(T,L,P)}this.setIndex(w),this.setAttribute("position",new cn(b,3)),this.setAttribute("normal",new cn(C,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gl extends Vn{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const _=[],S=new ne,x=new ne,w=[],b=[],C=[],y=[];for(let v=0;v<=r;v++){const D=[],F=v/r,T=u+F*f,L=e*Math.cos(T),P=Math.sqrt(e*e-L*L);let I=0;v===0&&u===0?I=.5/n:v===r&&h===Math.PI&&(I=-.5/n);for(let M=0;M<=n;M++){const N=M/n,B=o+N*l;S.x=-P*Math.cos(B),S.y=L,S.z=P*Math.sin(B),b.push(S.x,S.y,S.z),x.copy(S).normalize(),C.push(x.x,x.y,x.z),y.push(N+I,1-F),D.push(m++)}_.push(D)}for(let v=0;v<r;v++)for(let D=0;D<n;D++){const F=_[v][D+1],T=_[v][D],L=_[v+1][D],P=_[v+1][D+1];(v!==0||u>0)&&w.push(F,T,P),(v!==r-1||h<Math.PI)&&w.push(T,L,P)}this.setIndex(w),this.setAttribute("position",new cn(b,3)),this.setAttribute("normal",new cn(C,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ir extends Vn{constructor(e=1,n=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const h=[],m=[],_=[],S=[],x=new ne,w=new ne,b=new ne;for(let C=0;C<=r;C++){const y=u+C/r*f;for(let v=0;v<=o;v++){const D=v/o*l;w.x=(e+n*Math.cos(y))*Math.cos(D),w.y=(e+n*Math.cos(y))*Math.sin(D),w.z=n*Math.sin(y),m.push(w.x,w.y,w.z),x.x=e*Math.cos(D),x.y=e*Math.sin(D),b.subVectors(w,x).normalize(),_.push(b.x,b.y,b.z),S.push(v/o),S.push(C/r)}}for(let C=1;C<=r;C++)for(let y=1;y<=o;y++){const v=(o+1)*C+y-1,D=(o+1)*(C-1)+y-1,F=(o+1)*(C-1)+y,T=(o+1)*C+y;h.push(v,D,T),h.push(D,F,T)}this.setIndex(h),this.setAttribute("position",new cn(m,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(xm(o))o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(xm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function kn(s){const e={};for(let n=0;n<s.length;n++){const r=Qs(s[n]);for(const o in r)e[o]=r[o]}return e}function xm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function kv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function y0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Bv={clone:Qs,merge:kn};var zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zv,this.fragmentShader=Vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=kv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Pt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Mt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ne().fromArray(o.value);break;case"v4":this.uniforms[r].value=new nn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new mt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new rn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Hv extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hs extends ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gv extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class S0 extends zn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const id=new rn,vm=new ne,_m=new ne;class jv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;vm.setFromMatrixPosition(e.matrixWorld),n.position.copy(vm),_m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_m),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,r,o){id.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(id,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,h=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===eo||e.reversedDepth?n.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),n.multiply(id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Al=new ne,Rl=new Js,Ui=new ne;class M0 extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Al,Rl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Rl,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Al,Rl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Rl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new ne,ym=new Mt,Sm=new Mt;class ni extends M0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qd*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,n){return this.getViewBounds(e,ym,Sm),n.subVectors(Sm,ym)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,n-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Xv extends jv{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0}}class rd extends S0{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class w0 extends M0{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class qv extends S0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gs=-90,Ws=1;class Yv extends zn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(Gs,Ws,e,n);o.layers=this.layers,this.add(o);const l=new ni(Gs,Ws,e,n);l.layers=this.layers,this.add(l);const u=new ni(Gs,Ws,e,n);u.layers=this.layers,this.add(u);const f=new ni(Gs,Ws,e,n);f.layers=this.layers,this.add(f);const h=new ni(Gs,Ws,e,n);h.layers=this.layers,this.add(h);const m=new ni(Gs,Ws,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,f,h]=n;for(const m of n)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===eo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,m,_]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(S,x,w),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class $v extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Kv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ut("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Mf=class Mf{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};Mf.prototype.isMatrix2=!0;let Mm=Mf;function wm(s,e,n,r){const o=Zv(r);switch(n){case o0:return s*e;case c0:return s*e/o.components*o.byteLength;case cf:return s*e/o.components*o.byteLength;case ls:return s*e*2/o.components*o.byteLength;case uf:return s*e*2/o.components*o.byteLength;case l0:return s*e*3/o.components*o.byteLength;case Ai:return s*e*4/o.components*o.byteLength;case df:return s*e*4/o.components*o.byteLength;case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Il:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Md:case Ed:return Math.max(s,16)*Math.max(e,8)/4;case Sd:case wd:return Math.max(s,8)*Math.max(e,8)/2;case bd:case Td:case Rd:case Cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ad:case Ol:case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jd:case Xd:case qd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kl:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Zv(s){switch(s){case ii:case i0:return{byteLength:1,components:1};case Qa:case r0:case Hi:return{byteLength:2,components:1};case of:case lf:return{byteLength:2,components:4};case Vi:case af:case ki:return{byteLength:4,components:1};case s0:case a0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function E0(){let s=null,e=!1,n=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),n(l,u)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Qv(s){const e=new WeakMap;function n(f,h){const m=f.array,_=f.usage,S=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,_),f.onUploadCallback();let w;if(m instanceof Float32Array)w=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)w=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?w=s.HALF_FLOAT:w=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)w=s.SHORT;else if(m instanceof Uint32Array)w=s.UNSIGNED_INT;else if(m instanceof Int32Array)w=s.INT;else if(m instanceof Int8Array)w=s.BYTE;else if(m instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:w,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,m){const _=h.array,S=h.updateRanges;if(s.bindBuffer(m,f),S.length===0)s.bufferSubData(m,0,_);else{S.sort((w,b)=>w.start-b.start);let x=0;for(let w=1;w<S.length;w++){const b=S[x],C=S[w];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++x,S[x]=C)}S.length=x+1;for(let w=0,b=S.length;w<b;w++){const C=S[w];s.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:l,update:u}}var Jv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,l_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,__=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,S_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,M_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C_="gl_FragColor = linearToOutputTexel( gl_FragColor );",N_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,F_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,j_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,X_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Q_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,J_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,by=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ky=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ES=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:Jv,alphahash_pars_fragment:e_,alphamap_fragment:t_,alphamap_pars_fragment:n_,alphatest_fragment:i_,alphatest_pars_fragment:r_,aomap_fragment:s_,aomap_pars_fragment:a_,batching_pars_vertex:o_,batching_vertex:l_,begin_vertex:c_,beginnormal_vertex:u_,bsdfs:d_,iridescence_fragment:f_,bumpmap_pars_fragment:h_,clipping_planes_fragment:p_,clipping_planes_pars_fragment:m_,clipping_planes_pars_vertex:g_,clipping_planes_vertex:x_,color_fragment:v_,color_pars_fragment:__,color_pars_vertex:y_,color_vertex:S_,common:M_,cube_uv_reflection_fragment:w_,defaultnormal_vertex:E_,displacementmap_pars_vertex:b_,displacementmap_vertex:T_,emissivemap_fragment:A_,emissivemap_pars_fragment:R_,colorspace_fragment:C_,colorspace_pars_fragment:N_,envmap_fragment:P_,envmap_common_pars_fragment:L_,envmap_pars_fragment:D_,envmap_pars_vertex:I_,envmap_physical_pars_fragment:j_,envmap_vertex:U_,fog_vertex:F_,fog_pars_vertex:O_,fog_fragment:k_,fog_pars_fragment:B_,gradientmap_pars_fragment:z_,lightmap_pars_fragment:V_,lights_lambert_fragment:H_,lights_lambert_pars_fragment:G_,lights_pars_begin:W_,lights_toon_fragment:X_,lights_toon_pars_fragment:q_,lights_phong_fragment:Y_,lights_phong_pars_fragment:$_,lights_physical_fragment:K_,lights_physical_pars_fragment:Z_,lights_fragment_begin:Q_,lights_fragment_maps:J_,lights_fragment_end:ey,lightprobes_pars_fragment:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:sy,map_fragment:ay,map_pars_fragment:oy,map_particle_fragment:ly,map_particle_pars_fragment:cy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:dy,morphinstance_vertex:fy,morphcolor_vertex:hy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:xy,normal_fragment_maps:vy,normal_pars_fragment:_y,normal_pars_vertex:yy,normal_vertex:Sy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:by,iridescence_pars_fragment:Ty,opaque_fragment:Ay,packing:Ry,premultiplied_alpha_fragment:Cy,project_vertex:Ny,dithering_fragment:Py,dithering_pars_fragment:Ly,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Iy,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:Fy,shadowmap_vertex:Oy,shadowmask_pars_fragment:ky,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:Vy,skinnormal_vertex:Hy,specularmap_fragment:Gy,specularmap_pars_fragment:Wy,tonemapping_fragment:jy,tonemapping_pars_fragment:Xy,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:$y,uv_pars_vertex:Ky,uv_vertex:Zy,worldpos_vertex:Qy,background_vert:Jy,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:rS,depth_vert:sS,depth_frag:aS,distance_vert:oS,distance_frag:lS,equirect_vert:cS,equirect_frag:uS,linedashed_vert:dS,linedashed_frag:fS,meshbasic_vert:hS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:xS,meshmatcap_frag:vS,meshnormal_vert:_S,meshnormal_frag:yS,meshphong_vert:SS,meshphong_frag:MS,meshphysical_vert:wS,meshphysical_frag:ES,meshtoon_vert:bS,meshtoon_frag:TS,points_vert:AS,points_frag:RS,shadow_vert:CS,shadow_frag:NS,sprite_vert:PS,sprite_frag:LS},ke={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Oi={basic:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:kn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:kn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Pt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:kn([ke.points,ke.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:kn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:kn([ke.common,ke.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:kn([ke.sprite,ke.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:kn([ke.common,ke.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:kn([ke.lights,ke.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Oi.physical={uniforms:kn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Cl={r:0,b:0,g:0},DS=new rn,b0=new mt;b0.set(-1,0,0,0,1,0,0,0,1);function IS(s,e,n,r,o,l){const u=new Pt(0);let f=o===!0?0:1,h,m,_=null,S=0,x=null;function w(D){let F=D.isScene===!0?D.background:null;if(F&&F.isTexture){const T=D.backgroundBlurriness>0;F=e.get(F,T)}return F}function b(D){let F=!1;const T=w(D);T===null?y(u,f):T&&T.isColor&&(y(T,1),F=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(D,F){const T=w(F);T&&(T.isCubeTexture||T.mapping===jl)?(m===void 0&&(m=new tn(new ta(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Qs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=T,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(DS.makeRotationFromEuler(F.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(b0),m.material.toneMapped=Ct.getTransfer(T.colorSpace)!==zt,(_!==T||S!==T.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,_=T,S=T.version,x=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new tn(new ql(2,2),new Gi({name:"BackgroundMaterial",uniforms:Qs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(T.colorSpace)!==zt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(_!==T||S!==T.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,_=T,S=T.version,x=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function y(D,F){D.getRGB(Cl,y0(s)),n.buffers.color.setClear(Cl.r,Cl.g,Cl.b,F,l)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,F=1){u.set(D),f=F,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,y(u,f)},render:b,addToRenderList:C,dispose:v}}function US(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(z,j,Q,H,J){let oe=!1;const Y=S(z,H,Q,j);l!==Y&&(l=Y,m(l.object)),oe=w(z,H,Q,J),oe&&b(z,H,Q,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,T(z,j,Q,H),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function h(){return s.createVertexArray()}function m(z){return s.bindVertexArray(z)}function _(z){return s.deleteVertexArray(z)}function S(z,j,Q,H){const J=H.wireframe===!0;let oe=r[j.id];oe===void 0&&(oe={},r[j.id]=oe);const Y=z.isInstancedMesh===!0?z.id:0;let G=oe[Y];G===void 0&&(G={},oe[Y]=G);let $=G[Q.id];$===void 0&&($={},G[Q.id]=$);let Z=$[J];return Z===void 0&&(Z=x(h()),$[J]=Z),Z}function x(z){const j=[],Q=[],H=[];for(let J=0;J<n;J++)j[J]=0,Q[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Q,attributeDivisors:H,object:z,attributes:{},index:null}}function w(z,j,Q,H){const J=l.attributes,oe=j.attributes;let Y=0;const G=Q.getAttributes();for(const $ in G)if(G[$].location>=0){const U=J[$];let re=oe[$];if(re===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),U===void 0||U.attribute!==re||re&&U.data!==re.data)return!0;Y++}return l.attributesNum!==Y||l.index!==H}function b(z,j,Q,H){const J={},oe=j.attributes;let Y=0;const G=Q.getAttributes();for(const $ in G)if(G[$].location>=0){let U=oe[$];U===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(U=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(U=z.instanceColor));const re={};re.attribute=U,U&&U.data&&(re.data=U.data),J[$]=re,Y++}l.attributes=J,l.attributesNum=Y,l.index=H}function C(){const z=l.newAttributes;for(let j=0,Q=z.length;j<Q;j++)z[j]=0}function y(z){v(z,0)}function v(z,j){const Q=l.newAttributes,H=l.enabledAttributes,J=l.attributeDivisors;Q[z]=1,H[z]===0&&(s.enableVertexAttribArray(z),H[z]=1),J[z]!==j&&(s.vertexAttribDivisor(z,j),J[z]=j)}function D(){const z=l.newAttributes,j=l.enabledAttributes;for(let Q=0,H=j.length;Q<H;Q++)j[Q]!==z[Q]&&(s.disableVertexAttribArray(Q),j[Q]=0)}function F(z,j,Q,H,J,oe,Y){Y===!0?s.vertexAttribIPointer(z,j,Q,J,oe):s.vertexAttribPointer(z,j,Q,H,J,oe)}function T(z,j,Q,H){C();const J=H.attributes,oe=Q.getAttributes(),Y=j.defaultAttributeValues;for(const G in oe){const $=oe[G];if($.location>=0){let Z=J[G];if(Z===void 0&&(G==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),G==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),Z!==void 0){const U=Z.normalized,re=Z.itemSize,ve=e.get(Z);if(ve===void 0)continue;const ze=ve.buffer,De=ve.type,Be=ve.bytesPerElement,ie=De===s.INT||De===s.UNSIGNED_INT||Z.gpuType===af;if(Z.isInterleavedBufferAttribute){const le=Z.data,Se=le.stride,qe=Z.offset;if(le.isInstancedInterleavedBuffer){for(let Le=0;Le<$.locationSize;Le++)v($.location+Le,le.meshPerAttribute);z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<$.locationSize;Le++)y($.location+Le);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let Le=0;Le<$.locationSize;Le++)F($.location+Le,re/$.locationSize,De,U,Se*Be,(qe+re/$.locationSize*Le)*Be,ie)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<$.locationSize;le++)v($.location+le,Z.meshPerAttribute);z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<$.locationSize;le++)y($.location+le);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let le=0;le<$.locationSize;le++)F($.location+le,re/$.locationSize,De,U,re*Be,re/$.locationSize*le*Be,ie)}}else if(Y!==void 0){const U=Y[G];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv($.location,U);break;case 3:s.vertexAttrib3fv($.location,U);break;case 4:s.vertexAttrib4fv($.location,U);break;default:s.vertexAttrib1fv($.location,U)}}}}D()}function L(){N();for(const z in r){const j=r[z];for(const Q in j){const H=j[Q];for(const J in H){const oe=H[J];for(const Y in oe)_(oe[Y].object),delete oe[Y];delete H[J]}}delete r[z]}}function P(z){if(r[z.id]===void 0)return;const j=r[z.id];for(const Q in j){const H=j[Q];for(const J in H){const oe=H[J];for(const Y in oe)_(oe[Y].object),delete oe[Y];delete H[J]}}delete r[z.id]}function I(z){for(const j in r){const Q=r[j];for(const H in Q){const J=Q[H];if(J[z.id]===void 0)continue;const oe=J[z.id];for(const Y in oe)_(oe[Y].object),delete oe[Y];delete J[z.id]}}}function M(z){for(const j in r){const Q=r[j],H=z.isInstancedMesh===!0?z.id:0,J=Q[H];if(J!==void 0){for(const oe in J){const Y=J[oe];for(const G in Y)_(Y[G].object),delete Y[G];delete J[oe]}delete Q[H],Object.keys(Q).length===0&&delete r[j]}}}function N(){B(),u=!0,l!==o&&(l=o,m(l.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:B,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:M,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:y,disableUnusedAttributes:D}}function FS(s,e,n){let r;function o(h){r=h}function l(h,m){s.drawArrays(r,h,m),n.update(m,r,1)}function u(h,m,_){_!==0&&(s.drawArraysInstanced(r,h,m,_),n.update(m,r,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,_);let x=0;for(let w=0;w<_;w++)x+=m[w];n.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function OS(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==Ai&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const M=I===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ii&&I!==ki&&!M&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(ut("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const S=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&x===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const w=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:x,maxTextures:w,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:T,maxSamples:L,samples:P}}function kS(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Dr,f=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const w=S.length!==0||x||r!==0||o;return o=x,r=S.length,w},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,x){n=_(S,x,0)},this.setState=function(S,x,w){const b=S.clippingPlanes,C=S.clipIntersection,y=S.clipShadows,v=s.get(S);if(!o||b===null||b.length===0||l&&!y)l?_(null):m();else{const D=l?0:r,F=D*4;let T=v.clippingState||null;h.value=T,T=_(b,x,F,w);for(let L=0;L!==F;++L)T[L]=n[L];v.clippingState=T,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,x,w,b){const C=S!==null?S.length:0;let y=null;if(C!==0){if(y=h.value,b!==!0||y===null){const v=w+C*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let F=0,T=w;F!==C;++F,T+=4)u.copy(S[F]).applyMatrix4(D,f),u.normal.toArray(y,T),y[T+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const Ys=4,BS=6,zS=20,VS=256,ja=new w0,Em=new Pt;let sd=null,ad=0,od=0,ld=!1;const HS=new ne,ns=new ne;class bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:f=HS}=l;sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,ad,od),this._renderer.xr.enabled=ld,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===os||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:Hi,format:Ai,colorSpace:Bl,depthBuffer:!1},o=Tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=GS(l)),this._blurMaterial=jS(l,e,n),this._ggxMaterial=WS(l,e,n)}return o}_compileMaterial(e){const n=new tn(new Vn,e);this._renderer.compile(n,ja)}_sceneToCubeUV(e,n,r,o,l){const h=new ni(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,x=S.autoClear,w=S.toneMapping;S.getClearColor(Em),S.toneMapping=zi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tn(new ta,new is({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,v=!0):(y.color.copy(Em),v=!0);for(let F=0;F<6;F++){const T=F%3;T===0?(h.up.set(0,m[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[F],l.y,l.z)):T===1?(h.up.set(0,0,m[F]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[F],l.z)):(h.up.set(0,m[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[F]));const L=this._cubeSize;js(o,T*L,F>2?L:0,L,L),S.setRenderTarget(o),v&&S.render(C,h),S.render(e,h)}S.toneMapping=w,S.autoClear=x,e.background=D}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===os||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;js(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,ja)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,m=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),S=Math.sqrt(m*m-_*_),x=m*1.25,w=S*x,{_lodMax:b}=this,C=this._sizeLods[r],y=3*C*(r>b-Ys?r-b+Ys:0),v=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=w,h.mipInt.value=b-n,js(l,y,v,3*C,2*C),o.setRenderTarget(l),o.render(f,ja),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=b-r,js(e,y,v,3*C,2*C),o.setRenderTarget(e),o.render(f,ja)}_blur(e,n,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,n,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,n,r,o,l){const u=this._renderer,f=this._blurMaterial,h=this._lodMeshes[o];h.material=f;const m=f.uniforms;m.envMap.value=e.texture,m.sigma.value=l,m.mipInt.value=this._lodMax-r;const _=this._sizeLods[o],S=3*_*(o>this._lodMax-Ys?o-this._lodMax+Ys:0),x=4*(this._cubeSize-_);js(n,S,x,3*_,2*_),u.setRenderTarget(n),u.render(h,ja)}}function GS(s){const e=[],n=[];let r=s;const o=s-Ys+1+BS;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),h=-f,m=1+f,_=[h,h,m,h,m,m,h,h,m,m,h,m],S=6,x=6,w=3,b=new Float32Array(w*x*S),C=new Float32Array(w*x*S);for(let v=0;v<S;v++){const D=v%3*2/3-1,F=v>2?0:-1,T=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];b.set(T,w*x*v);for(let L=0;L<x;L++){const P=_[L*2]*2-1,I=_[L*2+1]*2-1;v===0?ns.set(1,I,P):v===1?ns.set(-P,1,-I):v===2?ns.set(-P,I,1):v===3?ns.set(-1,I,-P):v===4?ns.set(-P,-1,I):ns.set(P,I,-1),ns.toArray(C,(v*x+L)*w)}}const y=new Vn;y.setAttribute("position",new Ci(b,w)),y.setAttribute("outputDirection",new Ci(C,w)),n.push(new tn(y,null)),r>Ys&&r--}return{lodMeshes:n,sizeLods:e}}function Tm(s,e,n){const r=new Ri(s,e,n);return r.texture.mapping=jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function js(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function WS(s,e,n){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function jS(s,e,n){return new Gi({name:"SphericalGaussianBlur",defines:{SAMPLES:zS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Am(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Rm(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class T0 extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new v0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ta(5,5,5),l=new Gi({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:ar});l.uniforms.tEquirect.value=n;const u=new tn(o,l),f=n.minFilter;return n.minFilter===rs&&(n.minFilter=In),new Yv(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}function XS(s){let e=new WeakMap,n=new WeakMap,r=null;function o(x,w=!1){return x==null?null:w?u(x):l(x)}function l(x){if(x&&x.isTexture){const w=x.mapping;if(w===Pu||w===Lu)if(e.has(x)){const b=e.get(x).texture;return f(b,x.mapping)}else{const b=x.image;if(b&&b.height>0){const C=new T0(b.height);return C.fromEquirectangularTexture(s,x),e.set(x,C),x.addEventListener("dispose",m),f(C.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const w=x.mapping,b=w===Pu||w===Lu,C=w===os||w===Zs;if(b||C){let y=n.get(x);const v=y!==void 0?y.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==v)return r===null&&(r=new bm(s)),y=b?r.fromEquirectangular(x,y):r.fromCubemap(x,y),y.texture.pmremVersion=x.pmremVersion,n.set(x,y),y.texture;if(y!==void 0)return y.texture;{const D=x.image;return b&&D&&D.height>0||C&&D&&h(D)?(r===null&&(r=new bm(s)),y=b?r.fromEquirectangular(x):r.fromCubemap(x),y.texture.pmremVersion=x.pmremVersion,n.set(x,y),x.addEventListener("dispose",_),y.texture):null}}}return x}function f(x,w){return w===Pu?x.mapping=os:w===Lu&&(x.mapping=Zs),x}function h(x){let w=0;const b=6;for(let C=0;C<b;C++)x[C]!==void 0&&w++;return w===b}function m(x){const w=x.target;w.removeEventListener("dispose",m);const b=e.get(w);b!==void 0&&(e.delete(w),b.dispose())}function _(x){const w=x.target;w.removeEventListener("dispose",_);const b=n.get(w);b!==void 0&&(n.delete(w),b.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function qS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&$s("WebGLRenderer: "+r+" extension not supported."),o}}}function YS(s,e,n,r){const o={},l=new WeakMap;function u(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",u),delete o[x.id];const w=l.get(x);w&&(e.remove(w),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(S,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function h(S){const x=S.attributes;for(const w in x)e.update(x[w],s.ARRAY_BUFFER)}function m(S){const x=[],w=S.index,b=S.attributes.position;let C=0;if(b===void 0)return;if(w!==null){const D=w.array;C=w.version;for(let F=0,T=D.length;F<T;F+=3){const L=D[F+0],P=D[F+1],I=D[F+2];x.push(L,P,P,I,I,L)}}else{const D=b.array;C=b.version;for(let F=0,T=D.length/3-1;F<T;F+=3){const L=F+0,P=F+1,I=F+2;x.push(L,P,P,I,I,L)}}const y=new(b.count>=65535?m0:p0)(x,1);y.version=C;const v=l.get(S);v&&e.remove(v),l.set(S,y)}function _(S){const x=l.get(S);if(x){const w=S.index;w!==null&&x.version<w.version&&m(S)}else m(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:_}}function $S(s,e,n){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,x){s.drawElements(r,x,l,S*u),n.update(x,r,1)}function m(S,x,w){w!==0&&(s.drawElementsInstanced(r,x,l,S*u,w),n.update(x,r,w))}function _(S,x,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,S,0,w);let C=0;for(let y=0;y<w;y++)C+=x[y];n.update(C,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=_}function KS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:Ft("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function ZS(s,e,n){const r=new WeakMap,o=new nn;function l(u,f,h){const m=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==S){let B=function(){M.dispose(),r.delete(f),f.removeEventListener("dispose",B)};var w=B;x!==void 0&&x.texture.dispose();const b=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let T=0;b===!0&&(T=1),C===!0&&(T=2),y===!0&&(T=3);let L=f.attributes.position.count*T,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*P*4*S),M=new d0(I,L,P,S);M.type=ki,M.needsUpdate=!0;const N=T*4;for(let z=0;z<S;z++){const j=v[z],Q=D[z],H=F[z],J=L*P*4*z;for(let oe=0;oe<j.count;oe++){const Y=oe*N;b===!0&&(o.fromBufferAttribute(j,oe),I[J+Y+0]=o.x,I[J+Y+1]=o.y,I[J+Y+2]=o.z,I[J+Y+3]=0),C===!0&&(o.fromBufferAttribute(Q,oe),I[J+Y+4]=o.x,I[J+Y+5]=o.y,I[J+Y+6]=o.z,I[J+Y+7]=0),y===!0&&(o.fromBufferAttribute(H,oe),I[J+Y+8]=o.x,I[J+Y+9]=o.y,I[J+Y+10]=o.z,I[J+Y+11]=H.itemSize===4?o.w:1)}}x={count:S,texture:M,size:new Mt(L,P)},r.set(f,x),f.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const C=f.morphTargetsRelative?1:1-b;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function QS(s,e,n,r,o){let l=new WeakMap;function u(m){const _=o.render.frame,S=m.geometry,x=e.get(m,S);if(l.get(x)!==_&&(e.update(x),l.set(x,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==_&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,_))),m.isSkinnedMesh){const w=m.skeleton;l.get(w)!==_&&(w.update(),l.set(w,_))}return x}function f(){l=new WeakMap}function h(m){const _=m.target;_.removeEventListener("dispose",h),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:f}}const JS={[Km]:"LINEAR_TONE_MAPPING",[Zm]:"REINHARD_TONE_MAPPING",[Qm]:"CINEON_TONE_MAPPING",[sf]:"ACES_FILMIC_TONE_MAPPING",[e0]:"AGX_TONE_MAPPING",[t0]:"NEUTRAL_TONE_MAPPING",[Jm]:"CUSTOM_TONE_MAPPING"};function eM(s,e,n,r,o,l){const u=new Ri(e,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null;const m=new Vn;m.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new cn([0,2,0,0,2,0],2));const _=new Hv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new tn(m,_),x=new w0(-1,1,1,-1,0,1);let w=null,b=null,C=!1,y,v=null,D=[],F=!1;this.setSize=function(T,L){u.setSize(T,L),f!==null&&f.setSize(T,L),h!==null&&h.setSize(T,L);for(let P=0;P<D.length;P++){const I=D[P];I.setSize&&I.setSize(T,L)}},this.setEffects=function(T){D=T,F=D.length>0&&D[0].isRenderPass===!0;const L=u.width,P=u.height;D.length>0&&f===null&&(f=new Ri(L,P,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),h=new Ri(L,P,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<D.length;I++){const M=D[I];M.setSize&&M.setSize(L,P)}},this.begin=function(T,L){if(C||T.toneMapping===zi&&D.length===0)return!1;if(v=L,L!==null){const P=L.width,I=L.height;(u.width!==P||u.height!==I)&&this.setSize(P,I)}return F===!1&&T.setRenderTarget(u),y=T.toneMapping,T.toneMapping=zi,!0},this.hasRenderPass=function(){return F},this.end=function(T,L){T.toneMapping=y,C=!0;let P=u,I=f;for(let M=0;M<D.length;M++){const N=D[M];N.enabled!==!1&&(N.render(T,I,P,L),N.needsSwap!==!1&&(P=I,I=I===f?h:f))}if(w!==T.outputColorSpace||b!==T.toneMapping){w=T.outputColorSpace,b=T.toneMapping,_.defines={},Ct.getTransfer(w)===zt&&(_.defines.SRGB_TRANSFER="");const M=JS[b];M&&(_.defines[M]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=P.texture,T.setRenderTarget(v),T.render(S,x),v=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),m.dispose(),_.dispose()}}const A0=new Bn,ef=new to(1,1),R0=new d0,C0=new vv,N0=new v0,Cm=[],Nm=[],Pm=new Float32Array(16),Lm=new Float32Array(9),Dm=new Float32Array(4);function na(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=Cm[o];if(l===void 0&&(l=new Float32Array(o),Cm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function xn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function vn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function $l(s,e){let n=Nm[e];n===void 0&&(n=new Int32Array(e),Nm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function tM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2fv(this.addr,e),vn(n,e)}}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(xn(n,e))return;s.uniform3fv(this.addr,e),vn(n,e)}}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4fv(this.addr,e),vn(n,e)}}function sM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(xn(n,r))return;Dm.set(r),s.uniformMatrix2fv(this.addr,!1,Dm),vn(n,r)}}function aM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(xn(n,r))return;Lm.set(r),s.uniformMatrix3fv(this.addr,!1,Lm),vn(n,r)}}function oM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(xn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(xn(n,r))return;Pm.set(r),s.uniformMatrix4fv(this.addr,!1,Pm),vn(n,r)}}function lM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2iv(this.addr,e),vn(n,e)}}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;s.uniform3iv(this.addr,e),vn(n,e)}}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4iv(this.addr,e),vn(n,e)}}function fM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function hM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(xn(n,e))return;s.uniform2uiv(this.addr,e),vn(n,e)}}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(xn(n,e))return;s.uniform3uiv(this.addr,e),vn(n,e)}}function mM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(xn(n,e))return;s.uniform4uiv(this.addr,e),vn(n,e)}}function gM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(ef.compareFunction=n.isReversedDepthBuffer()?hf:ff,l=ef):l=A0,n.setTexture2D(e||l,o)}function xM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||C0,o)}function vM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||N0,o)}function _M(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||R0,o)}function yM(s){switch(s){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return aM;case 35676:return oM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return dM;case 5125:return fM;case 36294:return hM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return _M}}function SM(s,e){s.uniform1fv(this.addr,e)}function MM(s,e){const n=na(e,this.size,2);s.uniform2fv(this.addr,n)}function wM(s,e){const n=na(e,this.size,3);s.uniform3fv(this.addr,n)}function EM(s,e){const n=na(e,this.size,4);s.uniform4fv(this.addr,n)}function bM(s,e){const n=na(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function TM(s,e){const n=na(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function AM(s,e){const n=na(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function RM(s,e){s.uniform1iv(this.addr,e)}function CM(s,e){s.uniform2iv(this.addr,e)}function NM(s,e){s.uniform3iv(this.addr,e)}function PM(s,e){s.uniform4iv(this.addr,e)}function LM(s,e){s.uniform1uiv(this.addr,e)}function DM(s,e){s.uniform2uiv(this.addr,e)}function IM(s,e){s.uniform3uiv(this.addr,e)}function UM(s,e){s.uniform4uiv(this.addr,e)}function FM(s,e,n){const r=this.cache,o=e.length,l=$l(n,o);xn(r,l)||(s.uniform1iv(this.addr,l),vn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=ef:u=A0;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||u,l[f])}function OM(s,e,n){const r=this.cache,o=e.length,l=$l(n,o);xn(r,l)||(s.uniform1iv(this.addr,l),vn(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||C0,l[u])}function kM(s,e,n){const r=this.cache,o=e.length,l=$l(n,o);xn(r,l)||(s.uniform1iv(this.addr,l),vn(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||N0,l[u])}function BM(s,e,n){const r=this.cache,o=e.length,l=$l(n,o);xn(r,l)||(s.uniform1iv(this.addr,l),vn(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||R0,l[u])}function zM(s){switch(s){case 5126:return SM;case 35664:return MM;case 35665:return wM;case 35666:return EM;case 35674:return bM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return RM;case 35667:case 35671:return CM;case 35668:case 35672:return NM;case 35669:case 35673:return PM;case 5125:return LM;case 36294:return DM;case 36295:return IM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return BM}}class VM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=yM(n.type)}}class HM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zM(n.type)}}class GM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,n[f.id],r)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function Im(s,e){s.seq.push(e),s.map[e.id]=e}function WM(s,e,n){const r=s.name,o=r.length;for(cd.lastIndex=0;;){const l=cd.exec(r),u=cd.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===o){Im(n,m===void 0?new VM(f,s,e):new HM(f,s,e));break}else{let S=n.map[f];S===void 0&&(S=new GM(f),Im(n,S)),n=S}}}class Fl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(n,u),h=e.getUniformLocation(n,f.name);WM(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Um(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const jM=37297;let XM=0;function qM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Fm=new mt;function YM(s){Ct._getMatrix(Fm,Ct.workingColorSpace,s);const e=`mat3( ${Fm.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(s)){case zl:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Om(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+qM(s.getShaderSource(e),f)}else return l}function $M(s,e){const n=YM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const KM={[Km]:"Linear",[Zm]:"Reinhard",[Qm]:"Cineon",[sf]:"ACESFilmic",[e0]:"AgX",[t0]:"Neutral",[Jm]:"Custom"};function ZM(s,e){const n=KM[e];return n===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new ne;function QM(){Ct.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function ew(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function tw(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Ya(s){return s!==""}function km(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(s){return s.replace(nw,rw)}const iw=new Map;function rw(s,e){let n=_t[e];if(n===void 0){const r=iw.get(e);if(r!==void 0)n=_t[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tf(n)}const sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(s){return s.replace(sw,aw)}function aw(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Vm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ow={[Pl]:"SHADOWMAP_TYPE_PCF",[qa]:"SHADOWMAP_TYPE_VSM"};function lw(s){return ow[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cw={[os]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[jl]:"ENVMAP_TYPE_CUBE_UV"};function uw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":cw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const dw={[Zs]:"ENVMAP_MODE_REFRACTION"};function fw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":dw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hw={[$m]:"ENVMAP_BLENDING_MULTIPLY",[$x]:"ENVMAP_BLENDING_MIX",[Kx]:"ENVMAP_BLENDING_ADD"};function pw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":hw[s.combine]||"ENVMAP_BLENDING_NONE"}function mw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function gw(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=lw(n),m=uw(n),_=fw(n),S=pw(n),x=mw(n),w=JM(n),b=ew(l),C=o.createProgram();let y,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ya).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ya).join(`
`),v.length>0&&(v+=`
`)):(y=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),v=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?_t.tonemapping_pars_fragment:"",n.toneMapping!==zi?ZM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,$M("linearToOutputTexel",n.outputColorSpace),QM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ya).join(`
`)),u=tf(u),u=km(u,n),u=Bm(u,n),f=tf(f),f=km(f,n),f=Bm(f,n),u=zm(u),f=zm(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[w,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const F=D+y+u,T=D+v+f,L=Um(o,o.VERTEX_SHADER,F),P=Um(o,o.FRAGMENT_SHADER,T);o.attachShader(C,L),o.attachShader(C,P),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function I(z){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(C)||"",Q=o.getShaderInfoLog(L)||"",H=o.getShaderInfoLog(P)||"",J=j.trim(),oe=Q.trim(),Y=H.trim();let G=!0,$=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,L,P);else{const Z=Om(o,L,"vertex"),U=Om(o,P,"fragment");Ft("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+Z+`
`+U)}else J!==""?ut("WebGLProgram: Program Info Log:",J):(oe===""||Y==="")&&($=!1);$&&(z.diagnostics={runnable:G,programLog:J,vertexShader:{log:oe,prefix:y},fragmentShader:{log:Y,prefix:v}})}o.deleteShader(L),o.deleteShader(P),M=new Fl(o,C),N=tw(o,C)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(C,jM)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=XM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=L,this.fragmentShader=P,this}let xw=0;class vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new _w(e),n.set(e,r)),r}}class _w{constructor(e){this.id=xw++,this.code=e,this.usedTimes=0}}function yw(s){return s===ls||s===Ol||s===kl}function Sw(s,e,n,r,o,l){const u=new f0,f=new vw,h=new Set,m=[],_=new Map,S=r.logarithmicDepthBuffer;let x=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return h.add(M),M===0?"uv":`uv${M}`}function C(M,N,B,z,j,Q){const H=z.fog,J=j.geometry,oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,Y=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,G=e.get(M.envMap||oe,Y),$=G&&G.mapping===jl?G.image.height:null,Z=w[M.type];M.precision!==null&&(x=r.getMaxPrecision(M.precision),x!==M.precision&&ut("WebGLProgram.getParameters:",M.precision,"not supported, using",x,"instead."));const U=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,re=U!==void 0?U.length:0;let ve=0;J.morphAttributes.position!==void 0&&(ve=1),J.morphAttributes.normal!==void 0&&(ve=2),J.morphAttributes.color!==void 0&&(ve=3);let ze,De,Be,ie;if(Z){const yt=Oi[Z];ze=yt.vertexShader,De=yt.fragmentShader}else{ze=M.vertexShader,De=M.fragmentShader;const yt=f.getVertexShaderStage(M),Et=f.getFragmentShaderStage(M);f.update(M,yt,Et),Be=yt.id,ie=Et.id}const le=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),qe=j.isInstancedMesh===!0,Le=j.isBatchedMesh===!0,lt=!!M.map,Vt=!!M.matcap,dt=!!G,xt=!!M.aoMap,wt=!!M.lightMap,ht=!!M.bumpMap&&M.wireframe===!1,Ot=!!M.normalMap,Wt=!!M.displacementMap,Me=!!M.emissiveMap,Ge=!!M.metalnessMap,pt=!!M.roughnessMap,V=M.anisotropy>0,Yt=M.clearcoat>0,Lt=M.dispersion>0,O=M.retroreflectivity>0,E=M.iridescence>0,ee=M.sheen>0,ce=M.transmission>0,he=V&&!!M.anisotropyMap,Ee=Yt&&!!M.clearcoatMap,Ae=Yt&&!!M.clearcoatNormalMap,pe=Yt&&!!M.clearcoatRoughnessMap,ge=E&&!!M.iridescenceMap,Re=E&&!!M.iridescenceThicknessMap,Ye=ee&&!!M.sheenColorMap,Ce=ee&&!!M.sheenRoughnessMap,Te=!!M.specularMap,$e=!!M.specularColorMap,rt=!!M.specularIntensityMap,st=ce&&!!M.transmissionMap,X=ce&&!!M.thicknessMap,Ne=!!M.gradientMap,me=!!M.alphaMap,Pe=M.alphaTest>0,Ue=!!M.alphaHash,xe=!!M.extensions;let Qe=zi;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Qe=s.toneMapping);const je={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:ze,fragmentShader:De,defines:M.defines,customVertexShaderID:Be,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:x,batching:Le,batchingColor:Le&&j._colorsTexture!==null,instancing:qe,instancingColor:qe&&j.instanceColor!==null,instancingMorph:qe&&j.morphTexture!==null,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:lt,matcap:Vt,envMap:dt,envMapMode:dt&&G.mapping,envMapCubeUVHeight:$,aoMap:xt,lightMap:wt,bumpMap:ht,normalMap:Ot,displacementMap:Wt,emissiveMap:Me,normalMapObjectSpace:Ot&&M.normalMapType===Jx,normalMapTangentSpace:Ot&&M.normalMapType===Zd,packedNormalMap:Ot&&M.normalMapType===Zd&&yw(M.normalMap.format),metalnessMap:Ge,roughnessMap:pt,anisotropy:V,anisotropyMap:he,clearcoat:Yt,clearcoatMap:Ee,clearcoatNormalMap:Ae,clearcoatRoughnessMap:pe,dispersion:Lt,retroreflection:O,iridescence:E,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:ee,sheenColorMap:Ye,sheenRoughnessMap:Ce,specularMap:Te,specularColorMap:$e,specularIntensityMap:rt,transmission:ce,transmissionMap:st,thicknessMap:X,gradientMap:Ne,opaque:M.transparent===!1&&M.blending===$a&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:Pe,alphaHash:Ue,combine:M.combine,mapUv:lt&&b(M.map.channel),aoMapUv:xt&&b(M.aoMap.channel),lightMapUv:wt&&b(M.lightMap.channel),bumpMapUv:ht&&b(M.bumpMap.channel),normalMapUv:Ot&&b(M.normalMap.channel),displacementMapUv:Wt&&b(M.displacementMap.channel),emissiveMapUv:Me&&b(M.emissiveMap.channel),metalnessMapUv:Ge&&b(M.metalnessMap.channel),roughnessMapUv:pt&&b(M.roughnessMap.channel),anisotropyMapUv:he&&b(M.anisotropyMap.channel),clearcoatMapUv:Ee&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&b(M.sheenRoughnessMap.channel),specularMapUv:Te&&b(M.specularMap.channel),specularColorMapUv:$e&&b(M.specularColorMap.channel),specularIntensityMapUv:rt&&b(M.specularIntensityMap.channel),transmissionMapUv:st&&b(M.transmissionMap.channel),thicknessMapUv:X&&b(M.thicknessMap.channel),alphaMapUv:me&&b(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ot||V),vertexNormals:!!J.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!J.attributes.uv&&(lt||me),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||J.attributes.normal===void 0&&Ot===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Se,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ve,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qe,decodeVideoTexture:lt&&M.map.isVideoTexture===!0&&Ct.getTransfer(M.map.colorSpace)===zt,decodeVideoTextureEmissive:Me&&M.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(M.emissiveMap.colorSpace)===zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===rr,flipSided:M.side===$n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&M.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return je.vertexUv1s=h.has(1),je.vertexUv2s=h.has(2),je.vertexUv3s=h.has(3),h.clear(),je}function y(M){const N=[];if(M.shaderID?N.push(M.shaderID):(N.push(M.customVertexShaderID),N.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)N.push(B),N.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(v(N,M),D(N,M),N.push(s.outputColorSpace)),N.push(M.customProgramCacheKey),N.join()}function v(M,N){M.push(N.precision),M.push(N.outputColorSpace),M.push(N.envMapMode),M.push(N.envMapCubeUVHeight),M.push(N.mapUv),M.push(N.alphaMapUv),M.push(N.lightMapUv),M.push(N.aoMapUv),M.push(N.bumpMapUv),M.push(N.normalMapUv),M.push(N.displacementMapUv),M.push(N.emissiveMapUv),M.push(N.metalnessMapUv),M.push(N.roughnessMapUv),M.push(N.anisotropyMapUv),M.push(N.clearcoatMapUv),M.push(N.clearcoatNormalMapUv),M.push(N.clearcoatRoughnessMapUv),M.push(N.iridescenceMapUv),M.push(N.iridescenceThicknessMapUv),M.push(N.sheenColorMapUv),M.push(N.sheenRoughnessMapUv),M.push(N.specularMapUv),M.push(N.specularColorMapUv),M.push(N.specularIntensityMapUv),M.push(N.transmissionMapUv),M.push(N.thicknessMapUv),M.push(N.combine),M.push(N.fogExp2),M.push(N.sizeAttenuation),M.push(N.morphTargetsCount),M.push(N.morphAttributeCount),M.push(N.numSunLights),M.push(N.numDirLights),M.push(N.numPointLights),M.push(N.numSpotLights),M.push(N.numSpotLightMaps),M.push(N.numHemiLights),M.push(N.numRectAreaLights),M.push(N.numSunLightShadows),M.push(N.numDirLightShadows),M.push(N.numPointLightShadows),M.push(N.numSpotLightShadows),M.push(N.numSpotLightShadowsWithMaps),M.push(N.numLightProbes),M.push(N.shadowMapType),M.push(N.toneMapping),M.push(N.numClippingPlanes),M.push(N.numClipIntersection),M.push(N.depthPacking)}function D(M,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.retroreflection&&u.enable(24),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function F(M){const N=w[M.type];let B;if(N){const z=Oi[N];B=Bv.clone(z.uniforms)}else B=M.uniforms;return B}function T(M,N){let B=_.get(N);return B!==void 0?++B.usedTimes:(B=new gw(s,N,M,o),m.push(B),_.set(N,B)),B}function L(M){if(--M.usedTimes===0){const N=m.indexOf(M);m[N]=m[m.length-1],m.pop(),_.delete(M.cacheKey),M.destroy()}}function P(M){f.remove(M)}function I(){f.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:F,acquireProgram:T,releaseProgram:L,releaseShaderCache:P,programs:m,dispose:I}}function Mw(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function ww(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Hm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Gm(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(x){let w=0;return x.isInstancedMesh&&(w+=2),x.isSkinnedMesh&&(w+=1),w}function f(x,w,b,C,y,v){let D=s[e];return D===void 0?(D={id:x.id,object:x,geometry:w,material:b,materialVariant:u(x),groupOrder:C,renderOrder:x.renderOrder,z:y,group:v},s[e]=D):(D.id=x.id,D.object=x,D.geometry=w,D.material=b,D.materialVariant=u(x),D.groupOrder=C,D.renderOrder=x.renderOrder,D.z=y,D.group=v),e++,D}function h(x,w,b,C,y,v,D){D.reversedDepth===!0&&(y=-y);const F=f(x,w,b,C,y,v);b.transmission>0?r.push(F):b.transparent===!0?o.push(F):n.push(F)}function m(x,w,b,C,y,v){const D=f(x,w,b,C,y,v);b.transmission>0?r.unshift(D):b.transparent===!0?o.unshift(D):n.unshift(D)}function _(x,w){n.length>1&&n.sort(x||ww),r.length>1&&r.sort(w||Hm),o.length>1&&o.sort(w||Hm)}function S(){for(let x=e,w=s.length;x<w;x++){const b=s[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:h,unshift:m,finish:S,sort:_}}function Ew(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Gm,s.set(r,[u])):o>=l.length?(u=new Gm,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function bw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new ne,color:new Pt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=n,n}}}function Tw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let Aw=0;function Rw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Cw(s){const e=new bw,n=Tw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const o=new ne,l=new rn,u=new rn;function f(m){let _=0,S=0,x=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let w=0,b=0,C=0,y=0,v=0,D=0,F=0,T=0,L=0,P=0,I=0,M=0,N=0,B=0;m.sort(Rw);for(let j=0,Q=m.length;j<Q;j++){const H=m[j],J=H.color,oe=H.intensity,Y=H.distance;let G=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ls?G=H.shadow.map.texture:G=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=J.r*oe,S+=J.g*oe,x+=J.b*oe;else if(H.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(H.sh.coefficients[$],oe);B++}else if(H.isSunLight){const $=e.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,U=n.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[b]=U,r.sunShadowMap[b]=G;const re=Z.getViewportCount();for(let ve=0;ve<re;ve++)r.sunShadowMatrix[C+ve]=Z.getMatrix(ve),r.sunShadowCascade[C+ve]=Z._cascadeData[ve];C+=re,b++}r.sun[w]=$,w++}else if(H.isDirectionalLight){const $=e.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,U=n.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,r.directionalShadow[y]=U,r.directionalShadowMap[y]=G,r.directionalShadowMatrix[y]=H.shadow.matrix,L++}r.directional[y]=$,y++}else if(H.isSpotLight){const $=e.get(H);$.position.setFromMatrixPosition(H.matrixWorld),$.color.copy(J).multiplyScalar(oe),$.distance=Y,$.coneCos=Math.cos(H.angle),$.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),$.decay=H.decay,r.spot[D]=$;const Z=H.shadow;if(H.map&&(r.spotLightMap[M]=H.map,M++,Z.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[D]=Z.matrix,H.castShadow){const U=n.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,r.spotShadow[D]=U,r.spotShadowMap[D]=G,I++}D++}else if(H.isRectAreaLight){const $=e.get(H);$.color.copy(J).multiplyScalar(oe),$.halfWidth.set(H.width*.5,0,0),$.halfHeight.set(0,H.height*.5,0),r.rectArea[F]=$,F++}else if(H.isPointLight){const $=e.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity),$.distance=H.distance,$.decay=H.decay,H.castShadow){const Z=H.shadow,U=n.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,U.shadowCameraNear=Z.camera.near,U.shadowCameraFar=Z.camera.far,r.pointShadow[v]=U,r.pointShadowMap[v]=G,r.pointShadowMatrix[v]=H.shadow.matrix,P++}r.point[v]=$,v++}else if(H.isHemisphereLight){const $=e.get(H);$.skyColor.copy(H.color).multiplyScalar(oe),$.groundColor.copy(H.groundColor).multiplyScalar(oe),r.hemi[T]=$,T++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=x;const z=r.hash;(z.sunLength!==w||z.directionalLength!==y||z.pointLength!==v||z.spotLength!==D||z.rectAreaLength!==F||z.hemiLength!==T||z.numSunShadows!==b||z.numDirectionalShadows!==L||z.numPointShadows!==P||z.numSpotShadows!==I||z.numSpotMaps!==M||z.numLightProbes!==B)&&(r.sun.length=w,r.directional.length=y,r.spot.length=D,r.rectArea.length=F,r.point.length=v,r.hemi.length=T,r.sunShadow.length=b,r.sunShadowMap.length=b,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=I,r.spotShadowMap.length=I,r.spotLightMatrix.length=I+M-N,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=B,z.sunLength=w,z.directionalLength=y,z.pointLength=v,z.spotLength=D,z.rectAreaLength=F,z.hemiLength=T,z.numSunShadows=b,z.numDirectionalShadows=L,z.numPointShadows=P,z.numSpotShadows=I,z.numSpotMaps=M,z.numLightProbes=B,r.version=Aw++)}function h(m,_){let S=0,x=0,w=0,b=0,C=0,y=0;const v=_.matrixWorldInverse;for(let D=0,F=m.length;D<F;D++){const T=m[D];if(T.isSunLight){const L=r.sun[S];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(v),S++}else if(T.isDirectionalLight){const L=r.directional[x];L.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),x++}else if(T.isSpotLight){const L=r.spot[b];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(v),L.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),b++}else if(T.isRectAreaLight){const L=r.rectArea[C];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(v),u.identity(),l.copy(T.matrixWorld),l.premultiply(v),u.extractRotation(l),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),C++}else if(T.isPointLight){const L=r.point[w];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(v),w++}else if(T.isHemisphereLight){const L=r.hemi[y];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(v),y++}}}return{setup:f,setupView:h,state:r}}function Wm(s){const e=new Cw(s),n=[],r=[],o=[];function l(x){S.camera=x,n.length=0,r.length=0,o.length=0}function u(x){n.push(x)}function f(x){r.push(x)}function h(x){o.push(x)}function m(){e.setup(n)}function _(x){e.setupView(n,x)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:m,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function Nw(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Wm(s),e.set(o,[f])):l>=u.length?(f=new Wm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const Pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dw=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],Iw=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],jm=new rn,Xa=new ne,ud=new ne;function Uw(s,e,n){let r=new mf;const o=new Mt,l=new Mt,u=new nn,f=new Gv,h=new Wv,m={},_=n.maxTextureSize,S={[as]:$n,[$n]:as,[rr]:rr},x=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Pw,fragmentShader:Lw}),w=x.clone();w.defines.HORIZONTAL_PASS=1;const b=new Vn;b.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new tn(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let v=this.type;this.render=function(P,I,M){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===Nx&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pl);const N=s.getRenderTarget(),B=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),j=s.state;j.setBlending(ar),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Q=v!==this.type;Q&&I.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(J=>J.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,J=P.length;H<J;H++){const oe=P[H],Y=oe.shadow;if(Y===void 0){ut("WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const G=Y.getFrameExtents();o.multiply(G),l.copy(Y.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/G.x),o.x=l.x*G.x,Y.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/G.y),o.y=l.y*G.y,Y.mapSize.y=l.y));const $=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=$,Y.map===null||Q===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===qa){if(oe.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ri(o.x,o.y,{format:ls,type:Hi,minFilter:In,magFilter:In,generateMipmaps:!1}),Y.map.texture.name=oe.name+".shadowMap",Y.map.depthTexture=new to(o.x,o.y,ki),Y.map.depthTexture.name=oe.name+".shadowMapDepth",Y.map.depthTexture.format=lr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Tn,Y.map.depthTexture.magFilter=Tn}else oe.isPointLight?(Y.map=new T0(o.x),Y.map.depthTexture=new Ov(o.x,Vi)):(Y.map=new Ri(o.x,o.y),Y.map.depthTexture=new to(o.x,o.y,Vi)),Y.map.depthTexture.name=oe.name+".shadowMap",Y.map.depthTexture.format=lr,this.type===Pl?(Y.map.depthTexture.compareFunction=$?hf:ff,Y.map.depthTexture.minFilter=In,Y.map.depthTexture.magFilter=In):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Tn,Y.map.depthTexture.magFilter=Tn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==o.x||Y.map.height!==o.y)&&Y.map.setSize(o.x,o.y);const Z=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();oe.isPointLight!==!0&&Y.updateMatrices(oe,M);for(let U=0;U<Z;U++){const re=Y.getCamera(U);if(oe.isPointLight){const ve=Y.camera,ze=Y.matrix,De=oe.distance||ve.far;De!==ve.far&&(ve.far=De,ve.updateProjectionMatrix()),Xa.setFromMatrixPosition(oe.matrixWorld),ve.position.copy(Xa),ud.copy(ve.position),ud.add(Dw[U]),ve.up.copy(Iw[U]),ve.lookAt(ud),ve.updateMatrixWorld(),ze.makeTranslation(-Xa.x,-Xa.y,-Xa.z),jm.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(jm,ve.coordinateSystem,ve.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,U),s.clear();else{U===0&&(s.setRenderTarget(Y.map),s.clear());const ve=Y.getViewport(U);u.set(l.x*ve.x,l.y*ve.y,l.x*ve.z,l.y*ve.w),j.viewport(u)}r=Y.getFrustum(U),T(I,M,re,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===qa&&D(Y,M),Y.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(N,B,z)};function D(P,I){const M=e.update(C);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,w.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,w.needsUpdate=!0),P.mapPass===null?P.mapPass=new Ri(o.x,o.y,{format:ls,type:Hi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value.set(P.map.width,P.map.height),x.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(I,null,M,x,C,null),w.uniforms.shadow_pass.value=P.mapPass.texture,w.uniforms.resolution.value.set(P.map.width,P.map.height),w.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(I,null,M,w,C,null)}function F(P,I,M,N){let B=null;const z=M.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)B=z;else if(B=M.isPointLight===!0?h:f,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const j=B.uuid,Q=I.uuid;let H=m[j];H===void 0&&(H={},m[j]=H);let J=H[Q];J===void 0&&(J=B.clone(),H[Q]=J,I.addEventListener("dispose",L)),B=J}if(B.visible=I.visible,B.wireframe=I.wireframe,N===qa?B.side=I.shadowSide!==null?I.shadowSide:I.side:B.side=I.shadowSide!==null?I.shadowSide:S[I.side],B.alphaMap=I.alphaMap,B.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,B.map=I.map,B.clipShadows=I.clipShadows,B.clippingPlanes=I.clippingPlanes,B.clipIntersection=I.clipIntersection,B.displacementMap=I.displacementMap,B.displacementScale=I.displacementScale,B.displacementBias=I.displacementBias,B.wireframeLinewidth=I.wireframeLinewidth,B.linewidth=I.linewidth,M.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const j=s.properties.get(B);j.light=M}return B}function T(P,I,M,N,B){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&B===qa)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,P.matrixWorld);const Q=e.update(P),H=P.material;if(Array.isArray(H)){const J=Q.groups;for(let oe=0,Y=J.length;oe<Y;oe++){const G=J[oe],$=H[G.materialIndex];if($&&$.visible){const Z=F(P,$,N,B);P.onBeforeShadow(s,P,I,M,Q,Z,G),s.renderBufferDirect(M,null,Q,Z,P,G),P.onAfterShadow(s,P,I,M,Q,Z,G)}}}else if(H.visible){const J=F(P,H,N,B);P.onBeforeShadow(s,P,I,M,Q,J,null),s.renderBufferDirect(M,null,Q,J,P,null),P.onAfterShadow(s,P,I,M,Q,J,null)}}const j=P.children;for(let Q=0,H=j.length;Q<H;Q++)T(j[Q],I,M,N,B)}function L(P){P.target.removeEventListener("dispose",L);for(const M in m){const N=m[M],B=P.target.uuid;B in N&&(N[B].dispose(),delete N[B])}}}function Fw(s,e){function n(){let X=!1;const Ne=new nn;let me=null;const Pe=new nn(0,0,0,0);return{setMask:function(Ue){me!==Ue&&!X&&(s.colorMask(Ue,Ue,Ue,Ue),me=Ue)},setLocked:function(Ue){X=Ue},setClear:function(Ue,xe,Qe,je,yt){yt===!0&&(Ue*=je,xe*=je,Qe*=je),Ne.set(Ue,xe,Qe,je),Pe.equals(Ne)===!1&&(s.clearColor(Ue,xe,Qe,je),Pe.copy(Ne))},reset:function(){X=!1,me=null,Pe.set(-1,0,0,0)}}}function r(){let X=!1,Ne=!1,me=null,Pe=null,Ue=null;return{setReversed:function(xe){if(Ne!==xe){const Qe=e.get("EXT_clip_control");xe?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ne=xe;const je=Ue;Ue=null,this.setClear(je)}},getReversed:function(){return Ne},setTest:function(xe){xe?le(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(xe){me!==xe&&!X&&(s.depthMask(xe),me=xe)},setFunc:function(xe){if(Ne&&(xe=dv[xe]),Pe!==xe){switch(xe){case fd:s.depthFunc(s.NEVER);break;case hd:s.depthFunc(s.ALWAYS);break;case pd:s.depthFunc(s.LESS);break;case Za:s.depthFunc(s.LEQUAL);break;case md:s.depthFunc(s.EQUAL);break;case gd:s.depthFunc(s.GEQUAL);break;case xd:s.depthFunc(s.GREATER);break;case vd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Ue!==xe&&(Ue=xe,Ne&&(xe=1-xe),s.clearDepth(xe))},reset:function(){X=!1,me=null,Pe=null,Ue=null,Ne=!1}}}function o(){let X=!1,Ne=null,me=null,Pe=null,Ue=null,xe=null,Qe=null,je=null,yt=null;return{setTest:function(Et){X||(Et?le(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(Et){Ne!==Et&&!X&&(s.stencilMask(Et),Ne=Et)},setFunc:function(Et,fn,Un){(me!==Et||Pe!==fn||Ue!==Un)&&(s.stencilFunc(Et,fn,Un),me=Et,Pe=fn,Ue=Un)},setOp:function(Et,fn,Un){(xe!==Et||Qe!==fn||je!==Un)&&(s.stencilOp(Et,fn,Un),xe=Et,Qe=fn,je=Un)},setLocked:function(Et){X=Et},setClear:function(Et){yt!==Et&&(s.clearStencil(Et),yt=Et)},reset:function(){X=!1,Ne=null,me=null,Pe=null,Ue=null,xe=null,Qe=null,je=null,yt=null}}}const l=new n,u=new r,f=new o,h=new WeakMap,m=new WeakMap;let _={},S={},x={},w=new WeakMap,b=[],C=null,y=!1,v=null,D=null,F=null,T=null,L=null,P=null,I=null,M=new Pt(0,0,0),N=0,B=!1,z=null,j=null,Q=null,H=null,J=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,G=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=G>=2);let Z=null,U={};const re=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),ze=new nn().fromArray(re),De=new nn().fromArray(ve);function Be(X,Ne,me,Pe){const Ue=new Uint8Array(4),xe=s.createTexture();s.bindTexture(X,xe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<me;Qe++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Ne+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return xe}const ie={};ie[s.TEXTURE_2D]=Be(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),le(s.DEPTH_TEST),u.setFunc(Za),ht(!1),Ot($p),le(s.CULL_FACE),xt(ar);function le(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function Se(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function qe(X,Ne){return x[X]!==Ne?(s.bindFramebuffer(X,Ne),x[X]=Ne,X===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ne),X===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Le(X,Ne){let me=b,Pe=!1;if(X){me=w.get(Ne),me===void 0&&(me=[],w.set(Ne,me));const Ue=X.textures;if(me.length!==Ue.length||me[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Qe=Ue.length;xe<Qe;xe++)me[xe]=s.COLOR_ATTACHMENT0+xe;me.length=Ue.length,Pe=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(me)}function lt(X){return C!==X?(s.useProgram(X),C=X,!0):!1}const Vt={[qs]:s.FUNC_ADD,[Lx]:s.FUNC_SUBTRACT,[Dx]:s.FUNC_REVERSE_SUBTRACT};Vt[Ix]=s.MIN,Vt[Ux]=s.MAX;const dt={[Fx]:s.ZERO,[Ox]:s.ONE,[kx]:s.SRC_COLOR,[qm]:s.SRC_ALPHA,[Wx]:s.SRC_ALPHA_SATURATE,[Hx]:s.DST_COLOR,[zx]:s.DST_ALPHA,[Bx]:s.ONE_MINUS_SRC_COLOR,[Ym]:s.ONE_MINUS_SRC_ALPHA,[Gx]:s.ONE_MINUS_DST_COLOR,[Vx]:s.ONE_MINUS_DST_ALPHA,[jx]:s.CONSTANT_COLOR,[Xx]:s.ONE_MINUS_CONSTANT_COLOR,[qx]:s.CONSTANT_ALPHA,[Yx]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(X,Ne,me,Pe,Ue,xe,Qe,je,yt,Et){if(X===ar){y===!0&&(Se(s.BLEND),y=!1);return}if(y===!1&&(le(s.BLEND),y=!0),X!==Px){if(X!==v||Et!==B){if((D!==qs||L!==qs)&&(s.blendEquation(s.FUNC_ADD),D=qs,L=qs),Et)switch(X){case $a:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dd:s.blendFunc(s.ONE,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ft("WebGLState: Invalid blending: ",X);break}else switch(X){case $a:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Kp:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zp:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",X);break}F=null,T=null,P=null,I=null,M.set(0,0,0),N=0,v=X,B=Et}return}Ue=Ue||Ne,xe=xe||me,Qe=Qe||Pe,(Ne!==D||Ue!==L)&&(s.blendEquationSeparate(Vt[Ne],Vt[Ue]),D=Ne,L=Ue),(me!==F||Pe!==T||xe!==P||Qe!==I)&&(s.blendFuncSeparate(dt[me],dt[Pe],dt[xe],dt[Qe]),F=me,T=Pe,P=xe,I=Qe),(je.equals(M)===!1||yt!==N)&&(s.blendColor(je.r,je.g,je.b,yt),M.copy(je),N=yt),v=X,B=!1}function wt(X,Ne){X.side===rr?Se(s.CULL_FACE):le(s.CULL_FACE);let me=X.side===$n;Ne&&(me=!me),ht(me),X.blending===$a&&X.transparent===!1?xt(ar):xt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const Pe=X.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Me(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(X){z!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),z=X)}function Ot(X){X!==Rx?(le(s.CULL_FACE),X!==j&&(X===$p?s.cullFace(s.BACK):X===Cx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),j=X}function Wt(X){X!==Q&&(Y&&s.lineWidth(X),Q=X)}function Me(X,Ne,me){X?(le(s.POLYGON_OFFSET_FILL),(H!==Ne||J!==me)&&(H=Ne,J=me,u.getReversed()&&(Ne=-Ne),s.polygonOffset(Ne,me))):Se(s.POLYGON_OFFSET_FILL)}function Ge(X){X?le(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function pt(X){X===void 0&&(X=s.TEXTURE0+oe-1),Z!==X&&(s.activeTexture(X),Z=X)}function V(X,Ne,me){me===void 0&&(Z===null?me=s.TEXTURE0+oe-1:me=Z);let Pe=U[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},U[me]=Pe),(Pe.type!==X||Pe.texture!==Ne)&&(Z!==me&&(s.activeTexture(me),Z=me),s.bindTexture(X,Ne||ie[X]),Pe.type=X,Pe.texture=Ne)}function Yt(){const X=U[Z];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Lt(){try{s.compressedTexImage2D(...arguments)}catch(X){Ft("WebGLState:",X)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(X){Ft("WebGLState:",X)}}function E(){try{s.texSubImage2D(...arguments)}catch(X){Ft("WebGLState:",X)}}function ee(){try{s.texSubImage3D(...arguments)}catch(X){Ft("WebGLState:",X)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Ft("WebGLState:",X)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Ft("WebGLState:",X)}}function Ee(){try{s.texStorage2D(...arguments)}catch(X){Ft("WebGLState:",X)}}function Ae(){try{s.texStorage3D(...arguments)}catch(X){Ft("WebGLState:",X)}}function pe(){try{s.texImage2D(...arguments)}catch(X){Ft("WebGLState:",X)}}function ge(){try{s.texImage3D(...arguments)}catch(X){Ft("WebGLState:",X)}}function Re(X){return S[X]!==void 0?S[X]:s.getParameter(X)}function Ye(X,Ne){S[X]!==Ne&&(s.pixelStorei(X,Ne),S[X]=Ne)}function Ce(X){ze.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ze.copy(X))}function Te(X){De.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),De.copy(X))}function $e(X,Ne){let me=m.get(Ne);me===void 0&&(me=new WeakMap,m.set(Ne,me));let Pe=me.get(X);Pe===void 0&&(Pe=s.getUniformBlockIndex(Ne,X.name),me.set(X,Pe))}function rt(X,Ne){const Pe=m.get(Ne).get(X);h.get(Ne)!==Pe&&(s.uniformBlockBinding(Ne,Pe,X.__bindingPointIndex),h.set(Ne,Pe))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},S={},Z=null,U={},x={},w=new WeakMap,b=[],C=null,y=!1,v=null,D=null,F=null,T=null,L=null,P=null,I=null,M=new Pt(0,0,0),N=0,B=!1,z=null,j=null,Q=null,H=null,J=null,ze.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:le,disable:Se,bindFramebuffer:qe,drawBuffers:Le,useProgram:lt,setBlending:xt,setMaterial:wt,setFlipSided:ht,setCullFace:Ot,setLineWidth:Wt,setPolygonOffset:Me,setScissorTest:Ge,activeTexture:pt,bindTexture:V,unbindTexture:Yt,compressedTexImage2D:Lt,compressedTexImage3D:O,texImage2D:pe,texImage3D:ge,pixelStorei:Ye,getParameter:Re,updateUBOMapping:$e,uniformBlockBinding:rt,texStorage2D:Ee,texStorage3D:Ae,texSubImage2D:E,texSubImage3D:ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:he,scissor:Ce,viewport:Te,reset:st}}function Ow(s,e,n,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Mt,_=new WeakMap,S=new Set;let x;const w=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(O,E){return b?new OffscreenCanvas(O,E):Vl("canvas")}function y(O,E,ee){let ce=1;const he=Lt(O);if((he.width>ee||he.height>ee)&&(ce=ee/Math.max(he.width,he.height)),ce<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ee=Math.floor(ce*he.width),Ae=Math.floor(ce*he.height);x===void 0&&(x=C(Ee,Ae));const pe=E?C(Ee,Ae):x;return pe.width=Ee,pe.height=Ae,pe.getContext("2d").drawImage(O,0,0,Ee,Ae),ut("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+Ae+")."),pe}else return"data"in O&&ut("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),O;return O}function v(O){return O.generateMipmaps}function D(O){s.generateMipmap(O)}function F(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(O,E,ee,ce,he,Ee=!1){if(O!==null){if(s[O]!==void 0)return s[O];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ae;ce&&(Ae=e.get("EXT_texture_norm16"),Ae||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=E;if(E===s.RED&&(ee===s.FLOAT&&(pe=s.R32F),ee===s.HALF_FLOAT&&(pe=s.R16F),ee===s.UNSIGNED_BYTE&&(pe=s.R8),ee===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.R16_EXT),ee===s.SHORT&&Ae&&(pe=Ae.R16_SNORM_EXT)),E===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(pe=s.R8UI),ee===s.UNSIGNED_SHORT&&(pe=s.R16UI),ee===s.UNSIGNED_INT&&(pe=s.R32UI),ee===s.BYTE&&(pe=s.R8I),ee===s.SHORT&&(pe=s.R16I),ee===s.INT&&(pe=s.R32I)),E===s.RG&&(ee===s.FLOAT&&(pe=s.RG32F),ee===s.HALF_FLOAT&&(pe=s.RG16F),ee===s.UNSIGNED_BYTE&&(pe=s.RG8),ee===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RG16_EXT),ee===s.SHORT&&Ae&&(pe=Ae.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(pe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(pe=s.RG16UI),ee===s.UNSIGNED_INT&&(pe=s.RG32UI),ee===s.BYTE&&(pe=s.RG8I),ee===s.SHORT&&(pe=s.RG16I),ee===s.INT&&(pe=s.RG32I)),E===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),ee===s.UNSIGNED_INT&&(pe=s.RGB32UI),ee===s.BYTE&&(pe=s.RGB8I),ee===s.SHORT&&(pe=s.RGB16I),ee===s.INT&&(pe=s.RGB32I)),E===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(pe=s.RGBA32UI),ee===s.BYTE&&(pe=s.RGBA8I),ee===s.SHORT&&(pe=s.RGBA16I),ee===s.INT&&(pe=s.RGBA32I)),E===s.RGB&&(ee===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGB16_EXT),ee===s.SHORT&&Ae&&(pe=Ae.RGB16_SNORM_EXT),ee===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),E===s.RGBA){const ge=Ee?zl:Ct.getTransfer(he);ee===s.FLOAT&&(pe=s.RGBA32F),ee===s.HALF_FLOAT&&(pe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(pe=ge===zt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGBA16_EXT),ee===s.SHORT&&Ae&&(pe=Ae.RGBA16_SNORM_EXT),ee===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function L(O,E){let ee;return O?E===null||E===Vi||E===Ja?ee=s.DEPTH24_STENCIL8:E===ki?ee=s.DEPTH32F_STENCIL8:E===Qa&&(ee=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vi||E===Ja?ee=s.DEPTH_COMPONENT24:E===ki?ee=s.DEPTH_COMPONENT32F:E===Qa&&(ee=s.DEPTH_COMPONENT16),ee}function P(O,E){return v(O)===!0||O.isFramebufferTexture&&O.minFilter!==Tn&&O.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function I(O){const E=O.target;E.removeEventListener("dispose",I),N(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&S.delete(E)}function M(O){const E=O.target;E.removeEventListener("dispose",M),z(E)}function N(O){const E=r.get(O);if(E.__webglInit===void 0)return;const ee=O.source,ce=w.get(ee);if(ce){const he=ce[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&B(O),Object.keys(ce).length===0&&w.delete(ee)}r.remove(O)}function B(O){const E=r.get(O);s.deleteTexture(E.__webglTexture);const ee=O.source,ce=w.get(ee);delete ce[E.__cacheKey],u.memory.textures--}function z(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let he=0;he<E.__webglFramebuffer[ce].length;he++)s.deleteFramebuffer(E.__webglFramebuffer[ce][he]);else s.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)s.deleteFramebuffer(E.__webglFramebuffer[ce]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=O.textures;for(let ce=0,he=ee.length;ce<he;ce++){const Ee=r.get(ee[ce]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),u.memory.textures--),r.remove(ee[ce])}r.remove(O)}let j=0;function Q(){j=0}function H(){return j}function J(O){j=O}function oe(){const O=j;return O>=o.maxTextures&&ut("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+o.maxTextures),j+=1,O}function Y(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function G(O,E){const ee=r.get(O);if(O.isVideoTexture&&V(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ee.__version!==O.version){const ce=O.image;if(ce===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(ee,O,E);return}}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+E)}function $(O,E){const ee=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){Se(ee,O,E);return}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+E)}function Z(O,E){const ee=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){Se(ee,O,E);return}n.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+E)}function U(O,E){const ee=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&ee.__version!==O.version){qe(ee,O,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+E)}const re={[_d]:s.REPEAT,[sr]:s.CLAMP_TO_EDGE,[yd]:s.MIRRORED_REPEAT},ve={[Tn]:s.NEAREST,[Zx]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[Du]:s.LINEAR_MIPMAP_NEAREST,[rs]:s.LINEAR_MIPMAP_LINEAR},ze={[tv]:s.NEVER,[av]:s.ALWAYS,[nv]:s.LESS,[ff]:s.LEQUAL,[iv]:s.EQUAL,[hf]:s.GEQUAL,[rv]:s.GREATER,[sv]:s.NOTEQUAL};function De(O,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Du||E.magFilter===ol||E.magFilter===rs||E.minFilter===In||E.minFilter===Du||E.minFilter===ol||E.minFilter===rs)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,re[E.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,re[E.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,re[E.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,ve[E.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,ze[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==ol&&E.minFilter!==rs||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Be(O,E){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",I));const ce=E.source;let he=w.get(ce);he===void 0&&(he={},w.set(ce,he));const Ee=Y(E);if(Ee!==O.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),he[Ee].usedTimes++;const Ae=he[O.__cacheKey];Ae!==void 0&&(he[O.__cacheKey].usedTimes--,Ae.usedTimes===0&&B(E)),O.__cacheKey=Ee,O.__webglTexture=he[Ee].texture}return ee}function ie(O,E,ee){return Math.floor(Math.floor(O/ee)/E)}function le(O,E,ee,ce){const Ee=O.updateRanges;if(Ee.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ee,ce,E.data);else{Ee.sort((Ye,Ce)=>Ye.start-Ce.start);let Ae=0;for(let Ye=1;Ye<Ee.length;Ye++){const Ce=Ee[Ae],Te=Ee[Ye],$e=Ce.start+Ce.count,rt=ie(Te.start,E.width,4),st=ie(Ce.start,E.width,4);Te.start<=$e+1&&rt===st&&ie(Te.start+Te.count-1,E.width,4)===rt?Ce.count=Math.max(Ce.count,Te.start+Te.count-Ce.start):(++Ae,Ee[Ae]=Te)}Ee.length=Ae+1;const pe=n.getParameter(s.UNPACK_ROW_LENGTH),ge=n.getParameter(s.UNPACK_SKIP_PIXELS),Re=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ye=0,Ce=Ee.length;Ye<Ce;Ye++){const Te=Ee[Ye],$e=Math.floor(Te.start/4),rt=Math.ceil(Te.count/4),st=$e%E.width,X=Math.floor($e/E.width),Ne=rt,me=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,st),n.pixelStorei(s.UNPACK_SKIP_ROWS,X),n.texSubImage2D(s.TEXTURE_2D,0,st,X,Ne,me,ee,ce,E.data)}O.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,pe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function Se(O,E,ee){let ce=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=s.TEXTURE_3D);const he=Be(O,E),Ee=E.source;n.bindTexture(ce,O.__webglTexture,s.TEXTURE0+ee);const Ae=r.get(Ee);if(Ee.version!==Ae.__version||he===!0){if(n.activeTexture(s.TEXTURE0+ee),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const me=Ct.getPrimaries(Ct.workingColorSpace),Pe=E.colorSpace===Ur?null:Ct.getPrimaries(E.colorSpace),Ue=E.colorSpace===Ur||me===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ge=y(E.image,!1,o.maxTextureSize);ge=Yt(E,ge);const Re=l.convert(E.format,E.colorSpace),Ye=l.convert(E.type);let Ce=T(E.internalFormat,Re,Ye,E.normalized,E.colorSpace,E.isVideoTexture);De(ce,E);let Te;const $e=E.mipmaps,rt=E.isVideoTexture!==!0,st=Ae.__version===void 0||he===!0,X=Ee.dataReady,Ne=P(E,ge);if(E.isDepthTexture)Ce=L(E.format===ss,E.type),st&&(rt?n.texStorage2D(s.TEXTURE_2D,1,Ce,ge.width,ge.height):n.texImage2D(s.TEXTURE_2D,0,Ce,ge.width,ge.height,0,Re,Ye,null));else if(E.isDataTexture)if($e.length>0){rt&&st&&n.texStorage2D(s.TEXTURE_2D,Ne,Ce,$e[0].width,$e[0].height);for(let me=0,Pe=$e.length;me<Pe;me++)Te=$e[me],rt?X&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,Ye,Te.data):n.texImage2D(s.TEXTURE_2D,me,Ce,Te.width,Te.height,0,Re,Ye,Te.data);E.generateMipmaps=!1}else rt?(st&&n.texStorage2D(s.TEXTURE_2D,Ne,Ce,ge.width,ge.height),X&&le(E,ge,Re,Ye)):n.texImage2D(s.TEXTURE_2D,0,Ce,ge.width,ge.height,0,Re,Ye,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&st&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Ce,$e[0].width,$e[0].height,ge.depth);for(let me=0,Pe=$e.length;me<Pe;me++)if(Te=$e[me],E.format!==Ai)if(Re!==null)if(rt){if(X)if(E.layerUpdates.size>0){const Ue=wm(Te.width,Te.height,E.format,E.type);for(const xe of E.layerUpdates){const Qe=Te.data.subarray(xe*Ue/Te.data.BYTES_PER_ELEMENT,(xe+1)*Ue/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,xe,Te.width,Te.height,1,Re,Qe)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,Re,Te.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Ce,Te.width,Te.height,ge.depth,0,Te.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?X&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,Re,Ye,Te.data):n.texImage3D(s.TEXTURE_2D_ARRAY,me,Ce,Te.width,Te.height,ge.depth,0,Re,Ye,Te.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{rt&&st&&n.texStorage2D(s.TEXTURE_2D,Ne,Ce,$e[0].width,$e[0].height);for(let me=0,Pe=$e.length;me<Pe;me++)Te=$e[me],E.format!==Ai?Re!==null?rt?X&&n.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,Te.data):n.compressedTexImage2D(s.TEXTURE_2D,me,Ce,Te.width,Te.height,0,Te.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?X&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Re,Ye,Te.data):n.texImage2D(s.TEXTURE_2D,me,Ce,Te.width,Te.height,0,Re,Ye,Te.data)}else if(E.isDataArrayTexture)if(rt){if(st&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Ce,ge.width,ge.height,ge.depth),X)if(E.layerUpdates.size>0){const me=wm(ge.width,ge.height,E.format,E.type);for(const Pe of E.layerUpdates){const Ue=ge.data.subarray(Pe*me/ge.data.BYTES_PER_ELEMENT,(Pe+1)*me/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,ge.width,ge.height,1,Re,Ye,Ue)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Re,Ye,ge.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ge.width,ge.height,ge.depth,0,Re,Ye,ge.data);else if(E.isData3DTexture)rt?(st&&n.texStorage3D(s.TEXTURE_3D,Ne,Ce,ge.width,ge.height,ge.depth),X&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Re,Ye,ge.data)):n.texImage3D(s.TEXTURE_3D,0,Ce,ge.width,ge.height,ge.depth,0,Re,Ye,ge.data);else if(E.isFramebufferTexture){if(st)if(rt)n.texStorage2D(s.TEXTURE_2D,Ne,Ce,ge.width,ge.height);else{let me=ge.width,Pe=ge.height;for(let Ue=0;Ue<Ne;Ue++)n.texImage2D(s.TEXTURE_2D,Ue,Ce,me,Pe,0,Re,Ye,null),me>>=1,Pe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),S.add(E),me.onpaint=Pe=>{const Ue=Pe.changedElements;for(const xe of S)Ue.includes(xe.image)&&(xe.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const Ue=s.RGBA,xe=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ue,xe,Qe,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if($e.length>0){if(rt&&st){const me=Lt($e[0]);n.texStorage2D(s.TEXTURE_2D,Ne,Ce,me.width,me.height)}for(let me=0,Pe=$e.length;me<Pe;me++)Te=$e[me],rt?X&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,Ye,Te):n.texImage2D(s.TEXTURE_2D,me,Ce,Re,Ye,Te);E.generateMipmaps=!1}else if(rt){if(st){const me=Lt(ge);n.texStorage2D(s.TEXTURE_2D,Ne,Ce,me.width,me.height)}X&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ye,ge)}else n.texImage2D(s.TEXTURE_2D,0,Ce,Re,Ye,ge);v(E)&&D(ce),Ae.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function qe(O,E,ee){if(E.image.length!==6)return;const ce=Be(O,E),he=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+ee);const Ee=r.get(he);if(he.version!==Ee.__version||ce===!0){n.activeTexture(s.TEXTURE0+ee);const Ae=Ct.getPrimaries(Ct.workingColorSpace),pe=E.colorSpace===Ur?null:Ct.getPrimaries(E.colorSpace),ge=E.colorSpace===Ur||Ae===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let xe=0;xe<6;xe++)!Re&&!Ye?Ce[xe]=y(E.image[xe],!0,o.maxCubemapSize):Ce[xe]=Ye?E.image[xe].image:E.image[xe],Ce[xe]=Yt(E,Ce[xe]);const Te=Ce[0],$e=l.convert(E.format,E.colorSpace),rt=l.convert(E.type),st=T(E.internalFormat,$e,rt,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Ne=Ee.__version===void 0||ce===!0,me=he.dataReady;let Pe=P(E,Te);De(s.TEXTURE_CUBE_MAP,E);let Ue;if(Re){X&&Ne&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,st,Te.width,Te.height);for(let xe=0;xe<6;xe++){Ue=Ce[xe].mipmaps;for(let Qe=0;Qe<Ue.length;Qe++){const je=Ue[Qe];E.format!==Ai?$e!==null?X?me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Qe,0,0,je.width,je.height,$e,je.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Qe,st,je.width,je.height,0,je.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Qe,0,0,je.width,je.height,$e,rt,je.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Qe,st,je.width,je.height,0,$e,rt,je.data)}}}else{if(Ue=E.mipmaps,X&&Ne){Ue.length>0&&Pe++;const xe=Lt(Ce[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,st,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ye){X?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ce[xe].width,Ce[xe].height,$e,rt,Ce[xe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,Ce[xe].width,Ce[xe].height,0,$e,rt,Ce[xe].data);for(let Qe=0;Qe<Ue.length;Qe++){const yt=Ue[Qe].image[xe].image;X?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Qe+1,0,0,yt.width,yt.height,$e,rt,yt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Qe+1,st,yt.width,yt.height,0,$e,rt,yt.data)}}else{X?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,$e,rt,Ce[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,$e,rt,Ce[xe]);for(let Qe=0;Qe<Ue.length;Qe++){const je=Ue[Qe];X?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Qe+1,0,0,$e,rt,je.image[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Qe+1,st,$e,rt,je.image[xe])}}}v(E)&&D(s.TEXTURE_CUBE_MAP),Ee.__version=he.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Le(O,E,ee,ce,he,Ee){const Ae=l.convert(ee.format,ee.colorSpace),pe=l.convert(ee.type),ge=T(ee.internalFormat,Ae,pe,ee.normalized,ee.colorSpace),Re=r.get(E),Ye=r.get(ee);if(Ye.__renderTarget=E,!Re.__hasExternalTextures){const Ce=Math.max(1,E.width>>Ee),Te=Math.max(1,E.height>>Ee);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?n.texImage3D(he,Ee,ge,Ce,Te,E.depth,0,Ae,pe,null):n.texImage2D(he,Ee,ge,Ce,Te,0,Ae,pe,null)}n.bindFramebuffer(s.FRAMEBUFFER,O),pt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,he,Ye.__webglTexture,0,Ge(E)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,he,Ye.__webglTexture,Ee),n.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(O,E,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,O),E.depthBuffer){const ce=E.depthTexture,he=ce&&ce.isDepthTexture?ce.type:null,Ee=L(E.stencilBuffer,he),Ae=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge(E),Ee,E.width,E.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge(E),Ee,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,O)}else{const ce=E.textures;for(let he=0;he<ce.length;he++){const Ee=ce[he],Ae=l.convert(Ee.format,Ee.colorSpace),pe=l.convert(Ee.type),ge=T(Ee.internalFormat,Ae,pe,Ee.normalized,Ee.colorSpace);pt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge(E),ge,E.width,E.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge(E),ge,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ge,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(O,E,ee){const ce=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),De(s.TEXTURE_CUBE_MAP,E.depthTexture);const Re=l.convert(E.depthTexture.format),Ye=l.convert(E.depthTexture.type);let Ce;E.depthTexture.format===lr?Ce=s.DEPTH_COMPONENT24:E.depthTexture.format===ss&&(Ce=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ce,E.width,E.height,0,Re,Ye,null)}}else G(E.depthTexture,0);const Ee=he.__webglTexture,Ae=Ge(E),pe=ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+ee:s.TEXTURE_2D,ge=E.depthTexture.format===ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===lr)pt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ee,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ee,0);else if(E.depthTexture.format===ss)pt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ee,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(O){const E=r.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ce=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",he)};ce.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ce}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(ee)for(let ce=0;ce<6;ce++)Vt(E.__webglFramebuffer[ce],O,ce);else{const ce=O.texture.mipmaps;ce&&ce.length>0?Vt(E.__webglFramebuffer[0],O,0):Vt(E.__webglFramebuffer,O,0)}else if(ee){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=s.createRenderbuffer(),lt(E.__webglDepthbuffer[ce],O,!1);else{const he=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ee)}}else{const ce=O.texture.mipmaps;if(ce&&ce.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),lt(E.__webglDepthbuffer,O,!1);else{const he=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ee)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(O,E,ee){const ce=r.get(O);E!==void 0&&Le(ce.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&dt(O)}function wt(O){const E=O.texture,ee=r.get(O),ce=r.get(E);O.addEventListener("dispose",M);const he=O.textures,Ee=O.isWebGLCubeRenderTarget===!0,Ae=he.length>1;if(Ae||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=E.version,u.memory.textures++),Ee){ee.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[pe]=[];for(let ge=0;ge<E.mipmaps.length;ge++)ee.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else ee.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)ee.__webglFramebuffer[pe]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let pe=0,ge=he.length;pe<ge;pe++){const Re=r.get(he[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),u.memory.textures++)}if(O.samples>0&&pt(O)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ge=he[pe];ee.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[pe]);const Re=l.convert(ge.format,ge.colorSpace),Ye=l.convert(ge.type),Ce=T(ge.internalFormat,Re,Ye,ge.normalized,ge.colorSpace,O.isXRRenderTarget===!0),Te=Ge(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Ce,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,ee.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(ee.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){n.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),De(s.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Le(ee.__webglFramebuffer[pe][ge],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Le(ee.__webglFramebuffer[pe],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(E)&&D(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let pe=0,ge=he.length;pe<ge;pe++){const Re=he[pe],Ye=r.get(Re);let Ce=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,Ye.__webglTexture),De(Ce,Re),Le(ee.__webglFramebuffer,O,Re,s.COLOR_ATTACHMENT0+pe,Ce,0),v(Re)&&D(Ce)}n.unbindTexture()}else{let pe=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(pe=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(pe,ce.__webglTexture),De(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Le(ee.__webglFramebuffer[ge],O,E,s.COLOR_ATTACHMENT0,pe,ge);else Le(ee.__webglFramebuffer,O,E,s.COLOR_ATTACHMENT0,pe,0);v(E)&&D(pe),n.unbindTexture()}O.depthBuffer&&dt(O)}function ht(O){const E=O.textures;for(let ee=0,ce=E.length;ee<ce;ee++){const he=E[ee];if(v(he)){const Ee=F(O),Ae=r.get(he).__webglTexture;n.bindTexture(Ee,Ae),D(Ee),n.unbindTexture()}}}const Ot=[],Wt=[];function Me(O){if(O.samples>0){if(pt(O)===!1){const E=O.textures,ee=O.width,ce=O.height;let he=s.COLOR_BUFFER_BIT;const Ee=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=r.get(O),pe=E.length>1;if(pe)for(let Re=0;Re<E.length;Re++)n.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const ge=O.texture.mipmaps;ge&&ge.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);const Ye=r.get(E[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,ee,ce,0,0,ee,ce,he,s.NEAREST),h===!0&&(Ot.length=0,Wt.length=0,Ot.push(s.COLOR_ATTACHMENT0+Re),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Ot.push(Ee),Wt.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Wt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<E.length;Re++){n.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);const Ye=r.get(E[Re]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&h){const E=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ge(O){return Math.min(o.maxSamples,O.samples)}function pt(O){const E=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(O){const E=u.render.frame;_.get(O)!==E&&(_.set(O,E),O.update())}function Yt(O,E){const ee=O.colorSpace,ce=O.format,he=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==Bl&&ee!==Ur&&(Ct.getTransfer(ee)===zt?(ce!==Ai||he!==ii)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",ee)),E}function Lt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=Q,this.getTextureUnits=H,this.setTextureUnits=J,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=U,this.rebindTextures=xt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kw(s,e){function n(r,o=Ur){let l;const u=Ct.getTransfer(o);if(r===ii)return s.UNSIGNED_BYTE;if(r===of)return s.UNSIGNED_SHORT_4_4_4_4;if(r===lf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===s0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===a0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===i0)return s.BYTE;if(r===r0)return s.SHORT;if(r===Qa)return s.UNSIGNED_SHORT;if(r===af)return s.INT;if(r===Vi)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Hi)return s.HALF_FLOAT;if(r===o0)return s.ALPHA;if(r===l0)return s.RGB;if(r===Ai)return s.RGBA;if(r===lr)return s.DEPTH_COMPONENT;if(r===ss)return s.DEPTH_STENCIL;if(r===c0)return s.RED;if(r===cf)return s.RED_INTEGER;if(r===ls)return s.RG;if(r===uf)return s.RG_INTEGER;if(r===df)return s.RGBA_INTEGER;if(r===Ll||r===Dl||r===Il||r===Ul)if(u===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ll)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ul)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ll)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ul)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sd||r===Md||r===wd||r===Ed)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Sd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Md)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ed)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bd||r===Td||r===Ad||r===Rd||r===Cd||r===Ol||r===Nd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===bd||r===Td)return u===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ad)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Rd)return l.COMPRESSED_R11_EAC;if(r===Cd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ol)return l.COMPRESSED_RG11_EAC;if(r===Nd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Pd||r===Ld||r===Dd||r===Id||r===Ud||r===Fd||r===Od||r===kd||r===Bd||r===zd||r===Vd||r===Hd||r===Gd||r===Wd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Pd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ld)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Id)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Od)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jd||r===Xd||r===qd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===jd)return u===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yd||r===$d||r===kl||r===Kd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Yd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===$d)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ja?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const Bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new _0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Gi({vertexShader:Bw,fragmentShader:zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tn(new ql(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hw extends cs{constructor(e,n){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,m=null,_=null,S=null,x=null,w=null,b=null;const C=typeof XRWebGLBinding<"u",y=new Vw,v={},D=n.getContextAttributes();let F=null,T=null;const L=[],P=[],I=new Mt;let M=null,N=null;const B=new ni;B.viewport=new nn;const z=new ni;z.viewport=new nn;const j=[B,z],Q=new $v;let H=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let le=L[ie];return le===void 0&&(le=new Hu,L[ie]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ie){let le=L[ie];return le===void 0&&(le=new Hu,L[ie]=le),le.getGripSpace()},this.getHand=function(ie){let le=L[ie];return le===void 0&&(le=new Hu,L[ie]=le),le.getHandSpace()};function oe(ie){const le=P.indexOf(ie.inputSource);if(le===-1)return;const Se=L[le];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,m||u),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Y(){o.removeEventListener("select",oe),o.removeEventListener("selectstart",oe),o.removeEventListener("selectend",oe),o.removeEventListener("squeeze",oe),o.removeEventListener("squeezestart",oe),o.removeEventListener("squeezeend",oe),o.removeEventListener("end",Y),o.removeEventListener("inputsourceschange",G);for(let ie=0;ie<L.length;ie++){const le=P[ie];le!==null&&(P[ie]=null,L[ie].disconnect(le))}H=null,J=null,y.reset();for(const ie in v)delete v[ie];if(e.setRenderTarget(F),w=null,x=null,S=null,o=null,T=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(M),e.setSize(I.width,I.height,!1),N!==null){const ie=N.camera;ie.fov=N.fov,ie.zoom=N.zoom,ie.updateProjectionMatrix(),N=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return x!==null?x:w},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",oe),o.addEventListener("selectstart",oe),o.addEventListener("selectend",oe),o.addEventListener("squeeze",oe),o.addEventListener("squeezestart",oe),o.addEventListener("squeezeend",oe),o.addEventListener("end",Y),o.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,qe=null,Le=null;D.depth&&(Le=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=D.stencil?ss:lr,qe=D.stencil?Ja:Vi);const lt={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:l};S=this.getBinding(),x=S.createProjectionLayer(lt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),T=new Ri(x.textureWidth,x.textureHeight,{format:Ai,type:ii,depthTexture:new to(x.textureWidth,x.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};w=new XRWebGLLayer(o,n,Se),o.updateRenderState({baseLayer:w}),e.setPixelRatio(1),e.setSize(w.framebufferWidth,w.framebufferHeight,!1),T=new Ri(w.framebufferWidth,w.framebufferHeight,{format:Ai,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:w.ignoreDepthValues===!1,resolveStencilBuffer:w.ignoreDepthValues===!1,storeMultisampledDepthBuffer:w.ignoreDepthValues===!1,storeMultisampledStencilBuffer:w.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(f),Be.setContext(o),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(ie){for(let le=0;le<ie.removed.length;le++){const Se=ie.removed[le],qe=P.indexOf(Se);qe>=0&&(P[qe]=null,L[qe].disconnect(Se))}for(let le=0;le<ie.added.length;le++){const Se=ie.added[le];let qe=P.indexOf(Se);if(qe===-1){for(let lt=0;lt<L.length;lt++)if(lt>=P.length){P.push(Se),qe=lt;break}else if(P[lt]===null){P[lt]=Se,qe=lt;break}if(qe===-1)break}const Le=L[qe];Le&&Le.connect(Se)}}const $=new ne,Z=new ne;function U(ie,le,Se){$.setFromMatrixPosition(le.matrixWorld),Z.setFromMatrixPosition(Se.matrixWorld);const qe=$.distanceTo(Z),Le=le.projectionMatrix.elements,lt=Se.projectionMatrix.elements,Vt=Le[14]/(Le[10]-1),dt=Le[14]/(Le[10]+1),xt=(Le[9]+1)/Le[5],wt=(Le[9]-1)/Le[5],ht=(Le[8]-1)/Le[0],Ot=(lt[8]+1)/lt[0],Wt=Vt*ht,Me=Vt*Ot,Ge=qe/(-ht+Ot),pt=Ge*-ht;if(le.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(pt),ie.translateZ(Ge),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Le[10]===-1)ie.projectionMatrix.copy(le.projectionMatrix),ie.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const V=Vt+Ge,Yt=dt+Ge,Lt=Wt-pt,O=Me+(qe-pt),E=xt*dt/Yt*V,ee=wt*dt/Yt*V;ie.projectionMatrix.makePerspective(Lt,O,E,ee,V,Yt),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function re(ie,le){le===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(le.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let le=ie.near,Se=ie.far;y.texture!==null&&(y.depthNear>0&&(le=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),Q.near=z.near=B.near=le,Q.far=z.far=B.far=Se,(H!==Q.near||J!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),H=Q.near,J=Q.far),Q.layers.mask=ie.layers.mask|6,B.layers.mask=Q.layers.mask&-5,z.layers.mask=Q.layers.mask&-3;const qe=ie.parent,Le=Q.cameras;re(Q,qe);for(let lt=0;lt<Le.length;lt++)re(Le[lt],qe);Le.length===2?U(Q,B,z):Q.projectionMatrix.copy(B.projectionMatrix),N===null&&ie.isPerspectiveCamera&&(N={camera:ie,fov:ie.fov,zoom:ie.zoom}),ve(ie,Q,qe)};function ve(ie,le,Se){Se===null?ie.matrix.copy(le.matrixWorld):(ie.matrix.copy(Se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(le.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(le.projectionMatrix),ie.projectionMatrixInverse.copy(le.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Qd*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(x===null&&w===null))return h},this.setFoveation=function(ie){h=ie,x!==null&&(x.fixedFoveation=ie),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(ie){return v[ie]};let ze=null;function De(ie,le){if(_=le.getViewerPose(m||u),b=le,_!==null){const Se=_.views;w!==null&&(e.setRenderTargetFramebuffer(T,w.framebuffer),e.setRenderTarget(T));let qe=!1;Se.length!==Q.cameras.length&&(Q.cameras.length=0,qe=!0);for(let dt=0;dt<Se.length;dt++){const xt=Se[dt];let wt=null;if(w!==null)wt=w.getViewport(xt);else{const Ot=S.getViewSubImage(x,xt);wt=Ot.viewport,dt===0&&(e.setRenderTargetTextures(T,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(T))}let ht=j[dt];ht===void 0&&(ht=new ni,ht.layers.enable(dt),ht.viewport=new nn,j[dt]=ht),ht.matrix.fromArray(xt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(xt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(wt.x,wt.y,wt.width,wt.height),dt===0&&(Q.matrix.copy(ht.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),qe===!0&&Q.cameras.push(ht)}const Le=o.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const dt=S.getDepthInformation(Se[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,o.renderState)}if(Le&&Le.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let dt=0;dt<Se.length;dt++){const xt=Se[dt].camera;if(xt){let wt=v[xt];wt||(wt=new _0,v[xt]=wt);const ht=S.getCameraImage(xt);wt.sourceTexture=ht}}}}for(let Se=0;Se<L.length;Se++){const qe=P[Se],Le=L[Se];qe!==null&&Le!==void 0&&Le.update(qe,le,m||u)}ze&&ze(ie,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),b=null}const Be=new E0;Be.setAnimationLoop(De),this.setAnimationLoop=function(ie){ze=ie},this.dispose=function(){}}}const Gw=new rn,P0=new mt;P0.set(-1,0,0,0,1,0,0,0,1);function Ww(s,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,y0(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,D,F,T){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(y,v):v.isMeshLambertMaterial?(l(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(y,v),S(y,v)):v.isMeshPhongMaterial?(l(y,v),_(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&w(y,v,T)):v.isMeshMatcapMaterial?(l(y,v),b(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),C(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?h(y,v,D,F):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===$n&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===$n&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=e.get(v),F=D.envMap,T=D.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(T)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(P0),y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,D,F){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=F*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function S(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function w(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===$n&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.retroreflectivity>0&&(y.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const D=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function jw(s,e,n,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,L){const P=L.program;r.uniformBlockBinding(T,P)}function m(T,L){let P=o[T.id];P===void 0&&(y(T),P=_(T),o[T.id]=P,T.addEventListener("dispose",D));const I=L.program;r.updateUBOMapping(T,I);const M=e.render.frame;l[T.id]!==M&&(x(T),l[T.id]=M)}function _(T){const L=S();T.__bindingPointIndex=L;const P=s.createBuffer(),I=T.__size,M=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,I,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function S(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(T){const L=o[T.id],P=T.uniforms,I=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let M=0,N=P.length;M<N;M++){const B=P[M];if(Array.isArray(B))for(let z=0,j=B.length;z<j;z++)w(B[z],M,z,I);else w(B,M,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function w(T,L,P,I){if(C(T,L,P,I)===!0){const M=T.__offset,N=T.value;if(Array.isArray(N)){let B=0;for(let z=0;z<N.length;z++){const j=N[z],Q=v(j);b(j,T.__data,B),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(B+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(N,T.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,T.__data)}}function b(T,L,P){typeof T=="number"||typeof T=="boolean"?L[0]=T:T.isMatrix3?(L[0]=T.elements[0],L[1]=T.elements[1],L[2]=T.elements[2],L[3]=0,L[4]=T.elements[3],L[5]=T.elements[4],L[6]=T.elements[5],L[7]=0,L[8]=T.elements[6],L[9]=T.elements[7],L[10]=T.elements[8],L[11]=0):ArrayBuffer.isView(T)?L.set(new T.constructor(T.buffer,T.byteOffset,L.length)):T.toArray(L,P)}function C(T,L,P,I){const M=T.value,N=L+"_"+P;if(I[N]===void 0)return typeof M=="number"||typeof M=="boolean"?I[N]=M:ArrayBuffer.isView(M)?I[N]=M.slice():I[N]=M.clone(),!0;{const B=I[N];if(typeof M=="number"||typeof M=="boolean"){if(B!==M)return I[N]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(B.equals(M)===!1)return B.copy(M),!0}}return!1}function y(T){const L=T.uniforms;let P=0;const I=16;for(let N=0,B=L.length;N<B;N++){const z=Array.isArray(L[N])?L[N]:[L[N]];for(let j=0,Q=z.length;j<Q;j++){const H=z[j],J=Array.isArray(H.value)?H.value:[H.value];for(let oe=0,Y=J.length;oe<Y;oe++){const G=J[oe],$=v(G),Z=P%I,U=Z%$.boundary,re=Z+U;P+=U,re!==0&&I-re<$.storage&&(P+=I-re),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=P,P+=$.storage}}}const M=P%I;return M>0&&(P+=I-M),T.__size=P,T.__cache={},this}function v(T){const L={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(L.boundary=4,L.storage=4):T.isVector2?(L.boundary=8,L.storage=8):T.isVector3||T.isColor?(L.boundary=16,L.storage=12):T.isVector4?(L.boundary=16,L.storage=16):T.isMatrix3?(L.boundary=48,L.storage=48):T.isMatrix4?(L.boundary=64,L.storage=64):T.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(L.boundary=16,L.storage=T.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",T),L}function D(T){const L=T.target;L.removeEventListener("dispose",D);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function F(){for(const T in o)s.deleteBuffer(o[T]);u=[],o={},l={}}return{bind:h,update:m,dispose:F}}const Xw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function qw(){return Fi===null&&(Fi=new Iv(Xw,16,16,ls,Hi),Fi.name="DFG_LUT",Fi.minFilter=In,Fi.magFilter=In,Fi.wrapS=sr,Fi.wrapT=sr,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class Yw{constructor(e={}){const{canvas:n=cv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:x=!1,outputBufferType:w=ii}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const C=w,y=new Set([df,uf,cf]),v=new Set([ii,Vi,Qa,Ja,of,lf]),D=new Uint32Array(4),F=new Int32Array(4),T=new ne;let L=null,P=null;const I=[],M=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let z=!1,j=null,Q=null,H=null,J=null;this._outputColorSpace=fi;let oe=0,Y=0,G=null,$=-1,Z=null;const U=new nn,re=new nn;let ve=null;const ze=new Pt(0);let De=0,Be=n.width,ie=n.height,le=1,Se=null,qe=null;const Le=new nn(0,0,Be,ie),lt=new nn(0,0,Be,ie);let Vt=!1;const dt=new mf;let xt=!1,wt=!1;const ht=new rn,Ot=new ne,Wt=new nn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function pt(){return G===null?le:1}let V=r;function Yt(R,q){return n.getContext(R,q)}let Lt,O,E,ee,ce,he,Ee,Ae,pe,ge,Re,Ye,Ce,Te,$e,rt,st,X,Ne,me,Pe,Ue,xe;try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rf}`),n.addEventListener("webglcontextlost",yt,!1),n.addEventListener("webglcontextrestored",Et,!1),n.addEventListener("webglcontextcreationerror",fn,!1),V===null){const q="webgl2";if(V=Yt(q,R),V===null)throw Yt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(R){throw n.removeEventListener("webglcontextlost",yt,!1),n.removeEventListener("webglcontextrestored",Et,!1),n.removeEventListener("webglcontextcreationerror",fn,!1),Ft("WebGLRenderer: "+R.message),R}function Qe(){Lt=new qS(V),Lt.init(),Pe=new kw(V,Lt),O=new OS(V,Lt,e,Pe),E=new Fw(V,Lt),O.reversedDepthBuffer&&x&&E.buffers.depth.setReversed(!0),Q=V.createFramebuffer(),H=V.createFramebuffer(),J=V.createFramebuffer(),ee=new KS(V),ce=new Mw,he=new Ow(V,Lt,E,ce,O,Pe,ee),Ee=new XS(B),Ae=new Qv(V),Ue=new US(V,Ae),pe=new YS(V,Ae,ee,Ue),ge=new QS(V,pe,Ae,Ue,ee),X=new ZS(V,O,he),$e=new kS(ce),Re=new Sw(B,Ee,Lt,O,Ue,$e),Ye=new Ww(B,ce),Ce=new Ew,Te=new Nw(Lt),st=new IS(B,Ee,E,ge,b,h),rt=new Uw(B,ge,O),xe=new jw(V,ee,O,E),Ne=new FS(V,Lt,ee),me=new $S(V,Lt,ee),ee.programs=Re.programs,B.capabilities=O,B.extensions=Lt,B.properties=ce,B.renderLists=Ce,B.shadowMap=rt,B.state=E,B.info=ee}C!==ii&&(N=new eM(C,n.width,n.height,f,o,l));const je=new Hw(B,V);this.xr=je,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Lt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Lt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(R){R!==void 0&&(le=R,this.setSize(Be,ie,!1))},this.getSize=function(R){return R.set(Be,ie)},this.setSize=function(R,q,de=!0){if(je.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=R,ie=q,n.width=Math.floor(R*le),n.height=Math.floor(q*le),de===!0&&(n.style.width=R+"px",n.style.height=q+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(Be*le,ie*le).floor()},this.setDrawingBufferSize=function(R,q,de){Be=R,ie=q,le=de,n.width=Math.floor(R*de),n.height=Math.floor(q*de),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(C===ii){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Le)},this.setViewport=function(R,q,de,se){R.isVector4?Le.set(R.x,R.y,R.z,R.w):Le.set(R,q,de,se),E.viewport(U.copy(Le).multiplyScalar(le).round())},this.getScissor=function(R){return R.copy(lt)},this.setScissor=function(R,q,de,se){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,q,de,se),E.scissor(re.copy(lt).multiplyScalar(le).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(R){E.setScissorTest(Vt=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){qe=R},this.getClearColor=function(R){return R.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,de=!0){let se=0;if(R){let te=!1;if(G!==null){const Oe=G.texture.format;te=y.has(Oe)}if(te){const Oe=G.texture.type,Ie=v.has(Oe),Fe=st.getClearColor(),Ke=st.getClearAlpha(),tt=Fe.r,ft=Fe.g,gt=Fe.b;Ie?(D[0]=tt,D[1]=ft,D[2]=gt,D[3]=Ke,V.clearBufferuiv(V.COLOR,0,D)):(F[0]=tt,F[1]=ft,F[2]=gt,F[3]=Ke,V.clearBufferiv(V.COLOR,0,F))}else se|=V.COLOR_BUFFER_BIT}q&&(se|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(se|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&V.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),j=R},this.dispose=function(){n.removeEventListener("webglcontextlost",yt,!1),n.removeEventListener("webglcontextrestored",Et,!1),n.removeEventListener("webglcontextcreationerror",fn,!1),st.dispose(),Ce.dispose(),Te.dispose(),ce.dispose(),Ee.dispose(),ge.dispose(),Ue.dispose(),xe.dispose(),Re.dispose(),je.dispose(),je.removeEventListener("sessionstart",Tt),je.removeEventListener("sessionend",hn),Zt.stop()};function yt(R){R.preventDefault(),em("WebGLRenderer: Context Lost."),z=!0}function Et(){em("WebGLRenderer: Context Restored."),z=!1;const R=ee.autoReset,q=rt.enabled,de=rt.autoUpdate,se=rt.needsUpdate,te=rt.type;Qe(),ee.autoReset=R,rt.enabled=q,rt.autoUpdate=de,rt.needsUpdate=se,rt.type=te}function fn(R){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Un(R){const q=R.target;q.removeEventListener("dispose",Un),Ni(q)}function Ni(R){it(R),ce.remove(R)}function it(R){const q=ce.get(R).programs;q!==void 0&&(q.forEach(function(de){Re.releaseProgram(de)}),R.isShaderMaterial&&Re.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,de,se,te,Oe){q===null&&(q=Me);const Ie=te.isMesh&&te.matrixWorld.determinantAffine()<0,Fe=Qt(R,q,de,se,te);E.setMaterial(se,Ie);let Ke=de.index,tt=1;if(se.wireframe===!0){if(Ke=pe.getWireframeAttribute(de),Ke===void 0)return;tt=2}const ft=de.drawRange,gt=de.attributes.position;let We=ft.start*tt,At=(ft.start+ft.count)*tt;Oe!==null&&(We=Math.max(We,Oe.start*tt),At=Math.min(At,(Oe.start+Oe.count)*tt)),Ke!==null?(We=Math.max(We,0),At=Math.min(At,Ke.count)):gt!=null&&(We=Math.max(We,0),At=Math.min(At,gt.count));const sn=At-We;if(sn<0||sn===1/0)return;Ue.setup(te,se,Fe,de,Ke);let Gt,kt=Ne;if(Ke!==null&&(Gt=Ae.get(Ke),kt=me,kt.setIndex(Gt)),te.isMesh)se.wireframe===!0?(E.setLineWidth(se.wireframeLinewidth*pt()),kt.setMode(V.LINES)):kt.setMode(V.TRIANGLES);else if(te.isLine){let pn=se.linewidth;pn===void 0&&(pn=1),E.setLineWidth(pn*pt()),te.isLineSegments?kt.setMode(V.LINES):te.isLineLoop?kt.setMode(V.LINE_LOOP):kt.setMode(V.LINE_STRIP)}else te.isPoints?kt.setMode(V.POINTS):te.isSprite&&kt.setMode(V.TRIANGLES);if(te.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))kt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const pn=te._multiDrawStarts,Ve=te._multiDrawCounts,on=te._multiDrawCount,Rt=Ke?Ae.get(Ke).bytesPerElement:1,An=ce.get(se).currentProgram.getUniforms();for(let vt=0;vt<on;vt++)An.setValue(V,"_gl_DrawID",vt),kt.render(pn[vt]/Rt,Ve[vt])}else if(te.isInstancedMesh)kt.renderInstances(We,sn,te.count);else if(de.isInstancedBufferGeometry){const pn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ve=Math.min(de.instanceCount,pn);kt.renderInstances(We,sn,Ve)}else kt.render(We,sn)};function bt(R,q,de,se){j!==null&&R.isNodeMaterial&&j.setObject(se,R),xt===!0&&$e.setState(R,de,!1),R.transparent===!0&&R.side===rr&&R.forceSinglePass===!1?(R.side=$n,R.needsUpdate=!0,Br(R,q,se),R.side=as,R.needsUpdate=!0,Br(R,q,se),R.side=rr):Br(R,q,se)}this.compile=function(R,q,de=null){de===null&&(de=R),j!==null&&j.renderStart(R,q,de),P=Te.get(de),P.init(q),M.push(P),de.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),R!==de&&R.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),P.setupLights(),j!==null&&j.updateLights(P.state.lightsArray),wt=this.localClippingEnabled,xt=$e.init(this.clippingPlanes,wt),xt===!0&&$e.setGlobalState(this.clippingPlanes,q),j!==null&&rt.render(P.state.shadowsArray,de,q);const se=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Oe=te.material;if(Oe)if(Array.isArray(Oe))for(let Ie=0;Ie<Oe.length;Ie++){const Fe=Oe[Ie];bt(Fe,de,q,te),se.add(Fe)}else bt(Oe,de,q,te),se.add(Oe)}),P=M.pop(),j!==null&&j.renderEnd(),se},this.compileAsync=function(R,q,de=null){const se=this.compile(R,q,de);return new Promise(te=>{function Oe(){if(se.forEach(function(Ie){const Ke=ce.get(Ie).currentProgram;(Ke===void 0||Ke.isReady())&&se.delete(Ie)}),se.size===0){te(R);return}setTimeout(Oe,10)}Lt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ht=null;function wn(R){Ht&&Ht(R)}function Tt(){Zt.stop()}function hn(){Zt.start()}const Zt=new E0;Zt.setAnimationLoop(wn),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(R){Ht=R,je.setAnimationLoop(R),R===null?Zt.stop():Zt.start()},je.addEventListener("sessionstart",Tt),je.addEventListener("sessionend",hn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;j!==null&&j.renderStart(R,q);const de=je.enabled===!0&&je.isPresenting===!0,se=N!==null&&(G===null||de)&&N.begin(B,G);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(q),q=je.getCamera()),R.isScene===!0&&R.onBeforeRender(B,R,q,G),P=Te.get(R,M.length),P.init(q),P.state.textureUnits=he.getTextureUnits(),M.push(P),ht.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),dt.setFromProjectionMatrix(ht,Bi,q.reversedDepth),wt=this.localClippingEnabled,xt=$e.init(this.clippingPlanes,wt),L=Ce.get(R,I.length),L.init(),I.push(L),je.enabled===!0&&je.isPresenting===!0){const Ie=B.xr.getDepthSensingMesh();Ie!==null&&cr(Ie,q,-1/0,B.sortObjects)}cr(R,q,0,B.sortObjects),L.finish(),j!==null&&j.updateLights(P.state.lightsArray),B.sortObjects===!0&&L.sort(Se,qe),Ge=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,Ge&&st.addToRenderList(L,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&$e.beginShadows();const te=P.state.shadowsArray;if(rt.render(te,R,q),xt===!0&&$e.endShadows(),(se&&N.hasRenderPass())===!1){const Ie=L.opaque,Fe=L.transmissive;if(P.setupLights(),q.isArrayCamera){const Ke=q.cameras;if(Fe.length>0)for(let tt=0,ft=Ke.length;tt<ft;tt++){const gt=Ke[tt];ro(Ie,Fe,R,gt)}Ge&&st.render(R);for(let tt=0,ft=Ke.length;tt<ft;tt++){const gt=Ke[tt];ia(L,R,gt,gt.viewport)}}else Fe.length>0&&ro(Ie,Fe,R,q),Ge&&st.render(R),ia(L,R,q)}G!==null&&Y===0&&(he.updateMultisampleRenderTarget(G),he.updateRenderTargetMipmap(G)),se&&N.end(B),R.isScene===!0&&R.onAfterRender(B,R,q),Ue.resetDefaultState(),$=-1,Z=null,M.pop(),M.length>0?(P=M[M.length-1],he.setTextureUnits(P.state.textureUnits),xt===!0&&$e.setGlobalState(B.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,j!==null&&j.renderEnd()};function cr(R,q,de,se){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)de=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(dt)){se&&Wt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ht);const Ie=ge.update(R),Fe=R.material;Fe.visible&&L.push(R,Ie,Fe,de,Wt.z,null,q)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(dt))){const Ie=ge.update(R),Fe=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Wt.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Wt.copy(Ie.boundingSphere.center)),Wt.applyMatrix4(R.matrixWorld).applyMatrix4(ht)),Array.isArray(Fe)){const Ke=Ie.groups;for(let tt=0,ft=Ke.length;tt<ft;tt++){const gt=Ke[tt],We=Fe[gt.materialIndex];We&&We.visible&&L.push(R,Ie,We,de,Wt.z,gt,q)}}else Fe.visible&&L.push(R,Ie,Fe,de,Wt.z,null,q)}}const Oe=R.children;for(let Ie=0,Fe=Oe.length;Ie<Fe;Ie++)cr(Oe[Ie],q,de,se)}function ia(R,q,de,se){const{opaque:te,transmissive:Oe,transparent:Ie}=R;P.setupLightsView(de),xt===!0&&$e.setGlobalState(B.clippingPlanes,de),se&&E.viewport(U.copy(se)),te.length>0&&kr(te,q,de),Oe.length>0&&kr(Oe,q,de),Ie.length>0&&kr(Ie,q,de),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ro(R,q,de,se){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[se.id]===void 0){const We=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[se.id]=new Ri(1,1,{generateMipmaps:!0,type:We?Hi:ii,minFilter:rs,samples:Math.max(4,O.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Oe=P.state.transmissionRenderTarget[se.id],Ie=se.viewport||U;Oe.setSize(Ie.z*B.transmissionResolutionScale,Ie.w*B.transmissionResolutionScale);const Fe=B.getRenderTarget(),Ke=B.getActiveCubeFace(),tt=B.getActiveMipmapLevel();B.setRenderTarget(Oe),B.getClearColor(ze),De=B.getClearAlpha(),De<1&&B.setClearColor(16777215,.5),B.clear(),Ge&&st.render(de);const ft=B.toneMapping;B.toneMapping=zi;const gt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),P.setupLightsView(se),xt===!0&&$e.setGlobalState(B.clippingPlanes,se),kr(R,de,se),he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let At=0,sn=q.length;At<sn;At++){const Gt=q[At],{object:kt,geometry:pn,material:Ve,group:on}=Gt;if(Ve.side===rr&&kt.layers.test(se.layers)){const Rt=Ve.side;Ve.side=$n,Ve.needsUpdate=!0,ra(kt,de,se,pn,Ve,on),Ve.side=Rt,Ve.needsUpdate=!0,We=!0}}We===!0&&(he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe))}B.setRenderTarget(Fe,Ke,tt),B.setClearColor(ze,De),gt!==void 0&&(se.viewport=gt),B.toneMapping=ft}function kr(R,q,de){const se=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Oe=R.length;te<Oe;te++){const Ie=R[te],{object:Fe,geometry:Ke,group:tt}=Ie;let ft=Ie.material;ft.allowOverride===!0&&se!==null&&(ft=se),Fe.layers.test(de.layers)&&ra(Fe,q,de,Ke,ft,tt)}}function ra(R,q,de,se,te,Oe){j!==null&&te.isNodeMaterial&&j.setObject(R,te),R.onBeforeRender(B,q,de,se,te,Oe),R.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(B,q,de,se,R,Oe),te.transparent===!0&&te.side===rr&&te.forceSinglePass===!1?(te.side=$n,te.needsUpdate=!0,B.renderBufferDirect(de,q,se,te,R,Oe),te.side=as,te.needsUpdate=!0,B.renderBufferDirect(de,q,se,te,R,Oe),te.side=rr):B.renderBufferDirect(de,q,se,te,R,Oe),R.onAfterRender(B,q,de,se,te,Oe)}function Br(R,q,de){q.isScene!==!0&&(q=Me);const se=ce.get(R),te=P.state.lights,Oe=P.state.shadowsArray,Ie=te.state.version,Fe=Re.getParameters(R,te.state,Oe,q,de,P.state.lightProbeGridArray),Ke=Re.getProgramCacheKey(Fe);let tt=se.programs;se.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,se.fog=q.fog;const ft=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;se.envMap=Ee.get(R.envMap||se.environment,ft),se.envMapRotation=se.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",Un),tt=new Map,se.programs=tt);let gt=tt.get(Ke);if(gt!==void 0){if(se.currentProgram===gt&&se.lightsStateVersion===Ie)return so(R,Fe),gt}else Fe.uniforms=Re.getUniforms(R),j!==null&&R.isNodeMaterial&&j.build(R,de,Fe),R.onBeforeCompile(Fe,B),gt=Re.acquireProgram(Fe,Ke),tt.set(Ke,gt),se.uniforms=Fe.uniforms;const We=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=$e.uniform),so(R,Fe),se.needsLights=aa(R),se.lightsStateVersion=Ie,se.needsLights&&(We.ambientLightColor.value=te.state.ambient,We.lightProbe.value=te.state.probe,We.sunLights.value=te.state.sun,We.sunLightShadows.value=te.state.sunShadow,We.directionalLights.value=te.state.directional,We.directionalLightShadows.value=te.state.directionalShadow,We.spotLights.value=te.state.spot,We.spotLightShadows.value=te.state.spotShadow,We.rectAreaLights.value=te.state.rectArea,We.ltc_1.value=te.state.rectAreaLTC1,We.ltc_2.value=te.state.rectAreaLTC2,We.pointLights.value=te.state.point,We.pointLightShadows.value=te.state.pointShadow,We.hemisphereLights.value=te.state.hemi,We.sunShadowMatrix.value=te.state.sunShadowMatrix,We.sunShadowCascade.value=te.state.sunShadowCascade,We.directionalShadowMatrix.value=te.state.directionalShadowMatrix,We.spotLightMatrix.value=te.state.spotLightMatrix,We.spotLightMap.value=te.state.spotLightMap,We.pointShadowMatrix.value=te.state.pointShadowMatrix),se.lightProbeGrid=P.state.lightProbeGridArray.length>0,se.currentProgram=gt,se.uniformsList=null,gt}function sa(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Fl.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function so(R,q){const de=ce.get(R);de.outputColorSpace=q.outputColorSpace,de.batching=q.batching,de.batchingColor=q.batchingColor,de.instancing=q.instancing,de.instancingColor=q.instancingColor,de.instancingMorph=q.instancingMorph,de.skinning=q.skinning,de.morphTargets=q.morphTargets,de.morphNormals=q.morphNormals,de.morphColors=q.morphColors,de.morphTargetsCount=q.morphTargetsCount,de.numClippingPlanes=q.numClippingPlanes,de.numIntersection=q.numClipIntersection,de.vertexAlphas=q.vertexAlphas,de.vertexTangents=q.vertexTangents,de.toneMapping=q.toneMapping}function Kl(R,q){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;T.setFromMatrixPosition(q.matrixWorld);for(let de=0,se=R.length;de<se;de++){const te=R[de];if(te.texture!==null&&te.boundingBox.containsPoint(T))return te}return null}function Qt(R,q,de,se,te){q.isScene!==!0&&(q=Me),he.resetTextureUnits();const Oe=q.fog,Ie=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?q.environment:null,Fe=G===null?B.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ct.workingColorSpace,Ke=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,tt=Ee.get(se.envMap||Ie,Ke),ft=se.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,gt=!!de.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),We=!!de.morphAttributes.position,At=!!de.morphAttributes.normal,sn=!!de.morphAttributes.color;let Gt=zi;se.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Gt=B.toneMapping);const kt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,pn=kt!==void 0?kt.length:0,Ve=ce.get(se),on=P.state.lights;if(xt===!0&&(wt===!0||R!==Z)){const Bt=R===Z&&se.id===$;$e.setState(se,R,Bt)}let Rt=!1;se.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==on.state.version||Ve.outputColorSpace!==Fe||te.isBatchedMesh&&Ve.batching===!1||!te.isBatchedMesh&&Ve.batching===!0||te.isBatchedMesh&&Ve.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Ve.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Ve.instancing===!1||!te.isInstancedMesh&&Ve.instancing===!0||te.isSkinnedMesh&&Ve.skinning===!1||!te.isSkinnedMesh&&Ve.skinning===!0||te.isInstancedMesh&&Ve.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ve.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ve.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ve.instancingMorph===!1&&te.morphTexture!==null||Ve.envMap!==tt||se.fog===!0&&Ve.fog!==Oe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==$e.numPlanes||Ve.numIntersection!==$e.numIntersection)||Ve.vertexAlphas!==ft||Ve.vertexTangents!==gt||Ve.morphTargets!==We||Ve.morphNormals!==At||Ve.morphColors!==sn||Ve.toneMapping!==Gt||Ve.morphTargetsCount!==pn||!!Ve.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Rt=!0):(Rt=!0,Ve.__version=se.version);let An=Ve.currentProgram;Rt===!0&&(An=Br(se,q,te),j&&se.isNodeMaterial&&j.onUpdateProgram(se,An,Ve));let vt=!1,hi=!1,Wi=!1;const It=An.getUniforms(),$t=Ve.uniforms;if(E.useProgram(An.program)&&(vt=!0,hi=!0,Wi=!0),se.id!==$&&($=se.id,hi=!0),Ve.needsLights){const Bt=Kl(P.state.lightProbeGridArray,te);Ve.lightProbeGrid!==Bt&&(Ve.lightProbeGrid=Bt,hi=!0)}if(vt||Z!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),It.setValue(V,"projectionMatrix",R.projectionMatrix),It.setValue(V,"viewMatrix",R.matrixWorldInverse);const ri=It.map.cameraPosition;ri!==void 0&&ri.setValue(V,Ot.setFromMatrixPosition(R.matrixWorld)),O.logarithmicDepthBuffer&&It.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&It.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,hi=!0,Wi=!0)}if(Ve.needsLights&&(on.state.sunShadowMap.length>0&&It.setValue(V,"sunShadowMap",on.state.sunShadowMap,he),on.state.directionalShadowMap.length>0&&It.setValue(V,"directionalShadowMap",on.state.directionalShadowMap,he),on.state.spotShadowMap.length>0&&It.setValue(V,"spotShadowMap",on.state.spotShadowMap,he),on.state.pointShadowMap.length>0&&It.setValue(V,"pointShadowMap",on.state.pointShadowMap,he)),te.isSkinnedMesh){It.setOptional(V,te,"bindMatrix"),It.setOptional(V,te,"bindMatrixInverse");const Bt=te.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),It.setValue(V,"boneTexture",Bt.boneTexture,he))}te.isBatchedMesh&&(It.setOptional(V,te,"batchingTexture"),It.setValue(V,"batchingTexture",te._matricesTexture,he),It.setOptional(V,te,"batchingIdTexture"),It.setValue(V,"batchingIdTexture",te._indirectTexture,he),It.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&It.setValue(V,"batchingColorTexture",te._colorsTexture,he));const pi=de.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&X.update(te,de,An),(hi||Ve.receiveShadow!==te.receiveShadow)&&(Ve.receiveShadow=te.receiveShadow,It.setValue(V,"receiveShadow",te.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&q.environment!==null&&($t.envMapIntensity.value=q.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=qw()),hi){if(It.setValue(V,"toneMappingExposure",B.toneMappingExposure),Ve.needsLights&&Zl($t,Wi),Oe&&se.fog===!0&&Ye.refreshFogUniforms($t,Oe),Ye.refreshMaterialUniforms($t,se,le,ie,P.state.transmissionRenderTarget[R.id]),Ve.needsLights&&Ve.lightProbeGrid){const Bt=Ve.lightProbeGrid;$t.probesSH.value=Bt.texture,$t.probesMin.value.copy(Bt.boundingBox.min),$t.probesMax.value.copy(Bt.boundingBox.max),$t.probesResolution.value.copy(Bt.resolution)}Fl.upload(V,sa(Ve),$t,he)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Fl.upload(V,sa(Ve),$t,he),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&It.setValue(V,"center",te.center),It.setValue(V,"modelViewMatrix",te.modelViewMatrix),It.setValue(V,"normalMatrix",te.normalMatrix),It.setValue(V,"modelMatrix",te.matrixWorld),se.uniformsGroups!==void 0){const Bt=se.uniformsGroups;for(let ri=0,mi=Bt.length;ri<mi;ri++){const gi=Bt[ri];xe.update(gi,An),xe.bind(gi,An)}}return An}function Zl(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.sunLights.needsUpdate=q,R.sunLightShadows.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,q,de){const se=ce.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ce.get(R.texture).__webglTexture=q,ce.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:de,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const de=ce.get(R);de.__webglFramebuffer=q,de.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,de=0){G=R,oe=q,Y=de;let se=null,te=!1,Oe=!1;if(R){const Fe=ce.get(R);if(Fe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,Fe.__webglFramebuffer),U.copy(R.viewport),re.copy(R.scissor),ve=R.scissorTest,E.viewport(U),E.scissor(re),E.setScissorTest(ve),$=-1;return}else if(Fe.__webglFramebuffer===void 0)he.setupRenderTarget(R);else if(Fe.__hasExternalTextures)he.rebindTextures(R,ce.get(R.texture).__webglTexture,ce.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ft=R.depthTexture;if(Fe.__boundDepthTexture!==ft){if(ft!==null&&ce.has(ft)&&(R.width!==ft.image.width||R.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(R)}}const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Oe=!0);const tt=ce.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[q])?se=tt[q][de]:se=tt[q],te=!0):R.samples>0&&he.useMultisampledRTT(R)===!1?se=ce.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?se=tt[de]:se=tt,U.copy(R.viewport),re.copy(R.scissor),ve=R.scissorTest}else U.copy(Le).multiplyScalar(le).floor(),re.copy(lt).multiplyScalar(le).floor(),ve=Vt;if(de!==0&&(se=Q),E.bindFramebuffer(V.FRAMEBUFFER,se)&&E.drawBuffers(R,se),E.viewport(U),E.scissor(re),E.setScissorTest(ve),te){const Fe=ce.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,de)}else if(Oe){const Fe=q;for(let Ke=0;Ke<R.textures.length;Ke++){const tt=ce.get(R.textures[Ke]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ke,tt.__webglTexture,de,Fe)}}else if(R!==null&&de!==0){const Fe=ce.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Fe.__webglTexture,de)}$=-1};function oa(R){const q=ce.get(R);return(q.__readFormat!==R.format||q.__readType!==R.type)&&(q.__readFormat=R.format,q.__readType=R.type,q.__formatReadable=O.textureFormatReadable(R.format),q.__typeReadable=O.textureTypeReadable(R.type)),q}this.readRenderTargetPixels=function(R,q,de,se,te,Oe,Ie,Fe=0){if(!(R&&R.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ke=Ke[Ie]),Ke){E.bindFramebuffer(V.FRAMEBUFFER,Ke);try{const tt=R.textures[Fe],ft=tt.format,gt=tt.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe);const We=oa(tt);if(We.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-se&&de>=0&&de<=R.height-te&&V.readPixels(q,de,se,te,Pe.convert(ft),Pe.convert(gt),Oe)}finally{const tt=G!==null?ce.get(G).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(R,q,de,se,te,Oe,Ie,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ke=Ke[Ie]),Ke)if(q>=0&&q<=R.width-se&&de>=0&&de<=R.height-te){E.bindFramebuffer(V.FRAMEBUFFER,Ke);const tt=R.textures[Fe],ft=tt.format,gt=tt.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe);const We=oa(tt);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,At),V.bufferData(V.PIXEL_PACK_BUFFER,Oe.byteLength,V.STREAM_READ),V.readPixels(q,de,se,te,Pe.convert(ft),Pe.convert(gt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const sn=G!==null?ce.get(G).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,sn);const Gt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await uv(V,Gt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,At),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Oe),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(At),V.deleteSync(Gt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,de=0){const se=Math.pow(2,-de),te=Math.floor(R.image.width*se),Oe=Math.floor(R.image.height*se),Ie=q!==null?q.x:0,Fe=q!==null?q.y:0;he.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,de,0,0,Ie,Fe,te,Oe),E.unbindTexture()},this.copyTextureToTexture=function(R,q,de=null,se=null,te=0,Oe=0){let Ie,Fe,Ke,tt,ft,gt,We,At,sn;const Gt=R.isCompressedTexture?R.mipmaps[Oe]:R.image;if(de!==null)Ie=de.max.x-de.min.x,Fe=de.max.y-de.min.y,Ke=de.isBox3?de.max.z-de.min.z:1,tt=de.min.x,ft=de.min.y,gt=de.isBox3?de.min.z:0;else{const $t=Math.pow(2,-te);Ie=Math.floor(Gt.width*$t),Fe=Math.floor(Gt.height*$t),R.isDataArrayTexture?Ke=Gt.depth:R.isData3DTexture?Ke=Math.floor(Gt.depth*$t):Ke=1,tt=0,ft=0,gt=0}se!==null?(We=se.x,At=se.y,sn=se.z):(We=0,At=0,sn=0);const kt=Pe.convert(q.format),pn=Pe.convert(q.type);let Ve;q.isData3DTexture?(he.setTexture3D(q,0),Ve=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),Ve=V.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),Ve=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const on=E.getParameter(V.UNPACK_ROW_LENGTH),Rt=E.getParameter(V.UNPACK_IMAGE_HEIGHT),An=E.getParameter(V.UNPACK_SKIP_PIXELS),vt=E.getParameter(V.UNPACK_SKIP_ROWS),hi=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,Gt.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Gt.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),E.pixelStorei(V.UNPACK_SKIP_ROWS,ft),E.pixelStorei(V.UNPACK_SKIP_IMAGES,gt);const Wi=R.isDataArrayTexture||R.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const $t=ce.get(R),pi=ce.get(q),Bt=ce.get($t.__renderTarget),ri=ce.get(pi.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,Bt.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let mi=0;mi<Ke;mi++)Wi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ce.get(R).__webglTexture,te,gt+mi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ce.get(q).__webglTexture,Oe,sn+mi)),V.blitFramebuffer(tt,ft,Ie,Fe,We,At,Ie,Fe,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||ce.has(R)){const $t=ce.get(R),pi=ce.get(q);E.bindFramebuffer(V.READ_FRAMEBUFFER,H),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,J);for(let Bt=0;Bt<Ke;Bt++)Wi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$t.__webglTexture,te,gt+Bt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,$t.__webglTexture,te),It?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pi.__webglTexture,Oe,sn+Bt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pi.__webglTexture,Oe),te!==0?V.blitFramebuffer(tt,ft,Ie,Fe,We,At,Ie,Fe,V.COLOR_BUFFER_BIT,V.NEAREST):It?V.copyTexSubImage3D(Ve,Oe,We,At,sn+Bt,tt,ft,Ie,Fe):V.copyTexSubImage2D(Ve,Oe,We,At,tt,ft,Ie,Fe);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else It?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ve,Oe,We,At,sn,Ie,Fe,Ke,kt,pn,Gt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ve,Oe,We,At,sn,Ie,Fe,Ke,kt,Gt.data):V.texSubImage3D(Ve,Oe,We,At,sn,Ie,Fe,Ke,kt,pn,Gt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Oe,We,At,Ie,Fe,kt,pn,Gt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Oe,We,At,Gt.width,Gt.height,kt,Gt.data):V.texSubImage2D(V.TEXTURE_2D,Oe,We,At,Ie,Fe,kt,pn,Gt);E.pixelStorei(V.UNPACK_ROW_LENGTH,on),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Rt),E.pixelStorei(V.UNPACK_SKIP_PIXELS,An),E.pixelStorei(V.UNPACK_SKIP_ROWS,vt),E.pixelStorei(V.UNPACK_SKIP_IMAGES,hi),Oe===0&&q.generateMipmaps&&V.generateMipmap(Ve),E.unbindTexture()},this.initRenderTarget=function(R){ce.get(R).__webglFramebuffer===void 0&&he.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?he.setTextureCube(R,0):R.isData3DTexture?he.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?he.setTexture2DArray(R,0):he.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){oe=0,Y=0,G=null,E.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),L0=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=et.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>et.createElement("svg",{ref:h,...Kw,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:L0("lucide",o),...f},[...u.map(([m,_])=>et.createElement(m,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=(s,e)=>{const n=et.forwardRef(({className:r,...o},l)=>et.createElement(Zw,{ref:l,iconNode:e,className:L0(`lucide-${$w(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Jw=xf("Activity",Qw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],tE=xf("Radio",eE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],iE=xf("Sparkles",nE);function rE({isPlaying:s,analyser:e,currentSpeaker:n,mode:r}){const o=et.useRef(null),l=et.useRef(null),u=et.useRef(null),f=et.useRef(null),h=et.useRef(null),m=et.useRef([]),_=et.useRef(null),S=et.useRef(null),x=et.useRef([]),w=et.useRef(null),b=et.useRef({x:0,y:0,targetX:0,targetY:0,isDragging:!1,prevX:0,prevY:0}),[C,y]=et.useState("studio"),[v,D]=et.useState("studio");et.useEffect(()=>{const T=o.current;if(!T)return;const L=T.clientWidth,P=T.clientHeight||340,I=new Tv;l.current=I;const M=new ni(45,L/P,.1,100);M.position.set(0,1.2,5.5),u.current=M;const N=new Yw({antialias:!0,alpha:!0,powerPreference:"high-performance"});N.setSize(L,P),N.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.toneMapping=sf,N.toneMappingExposure=1.25,f.current=N,N.domElement.setAttribute("role","img"),N.domElement.setAttribute("aria-label","Interactive 3D Audio Visualizer Studio. Drag to orbit, explore camera angles."),T.innerHTML="",T.appendChild(N.domElement);const B=new qv(16777215,.7);I.add(B);const z=new rd(440020,4,15);z.position.set(-3,3,3),I.add(z);const j=new rd(9133302,4,15);j.position.set(3,3,3),I.add(j);const Q=new rd(6514417,2.5,9);Q.position.set(0,.9,0),I.add(Q);const H=new Hs({color:1581104,metalness:.9,roughness:.15}),J=new Hs({color:16317180,metalness:.95,roughness:.1}),oe=new Fr;h.current=oe;const Y=new Ka(1.2,1.3,.12,32),G=new tn(Y,H);G.position.y=-1.6,oe.add(G);const $=new Ir(1.25,.03,16,64),Z=new is({color:440020}),U=new tn($,Z);U.rotation.x=Math.PI/2,U.position.y=-1.54,oe.add(U);const re=new Ka(.08,.08,1.6,24),ve=new tn(re,J);ve.position.y=-.75,oe.add(ve);const ze=new Gl(.18,24,24),De=new tn(ze,H);De.position.y=.05,oe.add(De);const Be=new Ir(.68,.04,16,48),ie=new tn(Be,H);ie.rotation.x=Math.PI/2,ie.position.y=.55,oe.add(ie);const le=new Ka(.32,.32,.85,32),Se=new tn(le,H);Se.position.y=.55,oe.add(Se);const qe=new Ir(.33,.035,16,32),Le=new is({color:6514417}),lt=new tn(qe,Le);lt.rotation.x=Math.PI/2,lt.position.y=.98,oe.add(lt);const Vt=new Gl(.32,32,24,0,Math.PI*2,0,Math.PI/2),dt=new Hs({color:6583435,metalness:.9,roughness:.25,wireframe:!0}),xt=new tn(Vt,dt);xt.position.y=.98,oe.add(xt),I.add(oe);const wt=new Fr;_.current=wt,wt.position.set(-2.5,.45,-.5);const ht=new Hl(.42,2),Ot=new Hs({color:440020,emissive:561586,emissiveIntensity:.9,roughness:.15,wireframe:!0}),Wt=new tn(ht,Ot);wt.add(Wt);const Me=new Ir(.7,.025,16,48),Ge=new is({color:440020,transparent:!0,opacity:.75}),pt=new tn(Me,Ge);pt.rotation.x=Math.PI/3,wt.add(pt),I.add(wt);const V=new Fr;S.current=V,V.position.set(2.5,.45,-.5);const Yt=new Hl(.42,2),Lt=new Hs({color:9133302,emissive:8141549,emissiveIntensity:.9,roughness:.15,wireframe:!0}),O=new tn(Yt,Lt);V.add(O);const E=new Ir(.7,.025,16,48),ee=new is({color:9133302,transparent:!0,opacity:.75}),ce=new tn(E,ee);ce.rotation.x=-Math.PI/3,V.add(ce),I.add(V);const he=5,Ee=[];for(let it=0;it<he;it++){const bt=1+it*.45,Ht=new Ir(bt,.02,16,64),wn=new is({color:it%2===0?440020:9133302,transparent:!0,opacity:.35-it*.05}),Tt=new tn(Ht,wn);Tt.rotation.x=Math.PI/2+it*.1,Tt.position.y=.7,I.add(Tt),Ee.push(Tt)}x.current=Ee;const Ae=32,pe=[],ge=1.8,Re=new Fr;for(let it=0;it<Ae;it++){const bt=it/Ae*Math.PI*2,Ht=new ta(.08,.1,.08),wn=new Pt().setHSL(.55+it/Ae*.25,.9,.6),Tt=new Hs({color:wn,emissive:wn,emissiveIntensity:.4,roughness:.2}),hn=new tn(Ht,Tt);hn.position.x=Math.cos(bt)*ge,hn.position.z=Math.sin(bt)*ge,hn.position.y=-.5,Re.add(hn),pe.push(hn)}I.add(Re),m.current=pe;const Ye=220,Ce=new Float32Array(Ye*3),Te=new Float32Array(Ye*3);for(let it=0;it<Ye;it++){const bt=2+Math.random()*4.5,Ht=Math.random()*Math.PI*2,wn=(Math.random()-.5)*Math.PI;Ce[it*3]=bt*Math.cos(wn)*Math.cos(Ht),Ce[it*3+1]=bt*Math.sin(wn),Ce[it*3+2]=bt*Math.cos(wn)*Math.sin(Ht);const Tt=Math.random()>.5;Te[it*3]=Tt?.02:.55,Te[it*3+1]=Tt?.71:.36,Te[it*3+2]=Tt?.83:.96}const $e=new Vn;$e.setAttribute("position",new Ci(Ce,3)),$e.setAttribute("color",new Ci(Te,3));const rt=new x0({size:.045,vertexColors:!0,transparent:!0,opacity:.75,blending:dd}),st=new Fv($e,rt);I.add(st),w.current=st;const X=it=>{const bt=T.getBoundingClientRect(),Ht=(it.clientX-bt.left)/bt.width*2-1,wn=-((it.clientY-bt.top)/bt.height*2-1);if(b.current.targetX=Ht*.6,b.current.targetY=wn*.3,b.current.isDragging){const Tt=it.clientX-b.current.prevX,hn=it.clientY-b.current.prevY;oe.rotation.y+=Tt*.008,oe.rotation.x+=hn*.005,b.current.prevX=it.clientX,b.current.prevY=it.clientY}},Ne=it=>{b.current.isDragging=!0,b.current.prevX=it.clientX,b.current.prevY=it.clientY},me=()=>{b.current.isDragging=!1},Pe=it=>{it.touches.length===1&&(b.current.isDragging=!0,b.current.prevX=it.touches[0].clientX,b.current.prevY=it.touches[0].clientY)},Ue=it=>{if(b.current.isDragging&&it.touches.length===1){const bt=it.touches[0].clientX-b.current.prevX,Ht=it.touches[0].clientY-b.current.prevY;oe.rotation.y+=bt*.008,oe.rotation.x+=Ht*.005,b.current.prevX=it.touches[0].clientX,b.current.prevY=it.touches[0].clientY}},xe=()=>{b.current.isDragging=!1};T.addEventListener("mousemove",X),T.addEventListener("mousedown",Ne),window.addEventListener("mouseup",me),T.addEventListener("touchstart",Pe,{passive:!0}),T.addEventListener("touchmove",Ue,{passive:!0}),window.addEventListener("touchend",xe);const Qe=new ResizeObserver(it=>{if(!it||!it[0])return;const{width:bt,height:Ht}=it[0].contentRect;bt>0&&Ht>0&&(M.aspect=bt/Ht,M.updateProjectionMatrix(),N.setSize(bt,Ht))});Qe.observe(T);const je=window.matchMedia("(prefers-reduced-motion: reduce)");let yt=je.matches;const Et=it=>{yt=it.matches};je.addEventListener("change",Et);let fn=new Kv,Un;const Ni=()=>{Un=requestAnimationFrame(Ni);const it=fn.getElapsedTime();yt||(b.current.x+=(b.current.targetX-b.current.x)*.05,b.current.y+=(b.current.targetY-b.current.y)*.05,M.position.x=b.current.x*2.5,M.position.y=1.2+b.current.y*1.5,M.lookAt(0,.4,0));let bt=0;const Ht=new Uint8Array(32);e&&s&&(e.getByteFrequencyData(Ht),bt=Ht.reduce((hn,Zt)=>hn+Zt,0)/Ht.length/255),pe.forEach((Tt,hn)=>{const Zt=(Ht[hn]||0)/255,cr=s?Math.max(.1,Zt*2.2):.1;Tt.scale.y+=(cr-Tt.scale.y)*.25,Tt.position.y=-.5+Tt.scale.y*.05}),!b.current.isDragging&&!yt&&(oe.rotation.y=Math.sin(it*.4)*.2,oe.position.y=Math.sin(it*1.2)*.05);const wn=n==="Alex"?440020:n==="Sam"?9133302:1096065;if(Le.color.setHex(wn),Q.color.setHex(wn),Q.intensity=s?2.5+bt*8:1.5,Ee.forEach((Tt,hn)=>{yt||(Tt.rotation.z+=.004*(hn+1));const Zt=s?1+bt*(.4+hn*.15):1;Tt.scale.set(Zt,Zt,Zt),Tt.material.opacity=s?.3+bt*.5:.2}),_.current&&S.current){if(yt||(_.current.rotation.y+=.015,_.current.position.y=.45+Math.sin(it*2)*.08,S.current.rotation.y-=.015,S.current.position.y=.45+Math.cos(it*2)*.08),n==="Alex"&&s){const Tt=1.25+bt*.45;_.current.scale.set(Tt,Tt,Tt),z.intensity=6+bt*12}else _.current.scale.lerp(new ne(1,1,1),.1),z.intensity=3;if(n==="Sam"&&s){const Tt=1.25+bt*.45;S.current.scale.set(Tt,Tt,Tt),j.intensity=6+bt*12}else S.current.scale.lerp(new ne(1,1,1),.1),j.intensity=3}w.current&&!yt&&(w.current.rotation.y=it*.03),h.current&&(h.current.visible=C==="studio"),Re&&(Re.visible=C==="waveform"),N.render(I,M)};return Ni(),()=>{cancelAnimationFrame(Un),Qe.disconnect(),je.removeEventListener("change",Et),T.removeEventListener("mousemove",X),T.removeEventListener("mousedown",Ne),window.removeEventListener("mouseup",me),T.removeEventListener("touchstart",Pe),T.removeEventListener("touchmove",Ue),window.removeEventListener("touchend",xe),N.dispose()}},[s,n,e,r,C]);const F=T=>{D(T),u.current&&(T==="studio"?u.current.position.set(0,1.2,5.5):T==="birds-eye"?u.current.position.set(0,4.2,4):T==="close-up"&&u.current.position.set(0,.9,3.2))};return g.jsxs("div",{style:{position:"relative",width:"100%",height:"350px",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 16px 40px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(99, 102, 241, 0.15)"},children:[g.jsx("div",{ref:o,style:{width:"100%",height:"100%",cursor:"grab",background:"radial-gradient(ellipse at center, rgba(14, 20, 34, 0.95) 0%, rgba(6, 8, 13, 0.98) 100%)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)"}}),g.jsxs("div",{style:{position:"absolute",top:"14px",left:"16px",display:"flex",alignItems:"center",gap:"8px",pointerEvents:"none",zIndex:10},children:[g.jsxs("span",{className:"badge badge-cyan",style:{fontSize:"0.7rem",padding:"0.22rem 0.65rem"},children:[g.jsx(iE,{size:11})," 3D WebGL Stage"]}),g.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:"Drag to Orbit Camera"})]}),g.jsxs("div",{style:{position:"absolute",top:"14px",right:"16px",display:"flex",gap:"5px",zIndex:10,background:"rgba(6, 8, 13, 0.65)",padding:"3px",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",backdropFilter:"blur(10px)"},children:[g.jsxs("button",{onClick:()=>y("studio"),style:{background:C==="studio"?"var(--accent-indigo)":"transparent",color:C==="studio"?"#ffffff":"var(--text-muted)",fontSize:"0.72rem",padding:"0.25rem 0.65rem",borderRadius:"6px",display:"flex",alignItems:"center",gap:"4px",fontWeight:600},title:"3D Condenser Microphone Studio",children:[g.jsx(tE,{size:12})," Studio Mic"]}),g.jsxs("button",{onClick:()=>y("waveform"),style:{background:C==="waveform"?"var(--accent-cyan)":"transparent",color:C==="waveform"?"#06080d":"var(--text-muted)",fontSize:"0.72rem",padding:"0.25rem 0.65rem",borderRadius:"6px",display:"flex",alignItems:"center",gap:"4px",fontWeight:700},title:"3D Cyber Equalizer Ring",children:[g.jsx(Jw,{size:12})," Cyber Ring"]})]}),g.jsxs("div",{style:{position:"absolute",bottom:"14px",right:"16px",display:"flex",gap:"6px",zIndex:10},children:[g.jsx("button",{onClick:()=>F("studio"),style:{background:v==="studio"?"rgba(99, 102, 241, 0.45)":"rgba(0, 0, 0, 0.6)",color:"#ffffff",border:"1px solid rgba(255, 255, 255, 0.16)",fontSize:"0.72rem",padding:"0.3rem 0.7rem",borderRadius:"var(--radius-sm)",backdropFilter:"blur(8px)",fontWeight:600},children:"Studio View"}),g.jsx("button",{onClick:()=>F("close-up"),style:{background:v==="close-up"?"rgba(99, 102, 241, 0.45)":"rgba(0, 0, 0, 0.6)",color:"#ffffff",border:"1px solid rgba(255, 255, 255, 0.16)",fontSize:"0.72rem",padding:"0.3rem 0.7rem",borderRadius:"var(--radius-sm)",backdropFilter:"blur(8px)",fontWeight:600},children:"Close-Up"}),g.jsx("button",{onClick:()=>F("birds-eye"),style:{background:v==="birds-eye"?"rgba(99, 102, 241, 0.45)":"rgba(0, 0, 0, 0.6)",color:"#ffffff",border:"1px solid rgba(255, 255, 255, 0.16)",fontSize:"0.72rem",padding:"0.3rem 0.7rem",borderRadius:"var(--radius-sm)",backdropFilter:"blur(8px)",fontWeight:600},children:"Top Down"})]})]})}function sE({audioData:s,scriptData:e,articleTitle:n,selectedMode:r,currentTime:o,duration:l,isPlaying:u,onTogglePlay:f,onSeek:h,alexVoiceId:m,samVoiceId:_}){const[S,x]=et.useState("studio"),[w,b]=et.useState(!1),C=et.useRef(null),y=n||"The Edge Dilemma: Scaling Rust Microservices",v=(e==null?void 0:e.turns)||[];let D=0,F="Alex",T="Wait, so why does everyone deploy Kubernetes on a single Raspberry Pi?";if(v.length>0&&l>0){const Y=l/v.length;D=Math.min(v.length-1,Math.floor(o/Y));const G=v[D];G&&(F=G.speaker||(D%2===0?"Alex":"Sam"),T=G.text||T)}const L=T.split(/\s+/).filter(Boolean),P=L.length||1,I=o%(l/Math.max(1,v.length))/(l/Math.max(1,v.length)),M=Math.min(P-1,Math.floor(I*P)),N=Y=>{if(!Y||isNaN(Y))return"00:00";const G=Math.floor(Y/60),$=Math.floor(Y%60);return`${G.toString().padStart(2,"0")}:${$.toString().padStart(2,"0")}`},B=Y=>{if(!C.current||!l)return;const G=C.current.getBoundingClientRect(),$=Math.max(0,Math.min(1,(Y.clientX-G.left)/G.width));h($*l)},z=()=>{const Y=`${y.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.mp3`;if(s!=null&&s.audioUrl){const G=document.createElement("a");G.href=s.audioUrl,G.download=Y,G.click()}else{const G=document.createElement("a"),$=new Blob(["PodSnippet Studio Audio Master"],{type:"audio/mpeg"});G.href=URL.createObjectURL($),G.download=Y,G.click()}},j=()=>{let Y="";const G=(l||194)/Math.max(1,v.length);v.forEach((re,ve)=>{const ze=ve*G,De=(ve+1)*G,Be=ie=>{const le=String(Math.floor(ie/3600)).padStart(2,"0"),Se=String(Math.floor(ie%3600/60)).padStart(2,"0"),qe=String(Math.floor(ie%60)).padStart(2,"0"),Le=String(Math.floor(ie%1*1e3)).padStart(3,"0");return`${le}:${Se}:${qe},${Le}`};Y+=`${ve+1}
`,Y+=`${Be(ze)} --> ${Be(De)}
`,Y+=`[${re.speaker}]: ${re.text}

`});const $=new Blob([Y||`1
00:00:00,000 --> 00:00:05,000
[Alex]: The Edge Dilemma
`],{type:"text/plain"}),Z=URL.createObjectURL($),U=document.createElement("a");U.href=Z,U.download=`${y.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.srt`,U.click(),URL.revokeObjectURL(Z)},Q=()=>{var Y;(Y=navigator.clipboard)==null||Y.writeText(window.location.href),b(!0),setTimeout(()=>b(!1),2e3)},H="https://lh3.googleusercontent.com/aida-public/AB6AXuAvStxvHH8Ia89-2oOjgpolHm5GPXxi7ljd4S-Il9Iylb_vPVAzjIWHpwwE5dRm2xTAj6lsNmcMZ91dOdX_PBtJqRSs6A0ySUZ8gQWzuv--nzv8bEwlH7-RxmngnKLF_sVL1ySxWO0MXUILWSLWQytVbDXP82KMEeShViVo65EFkXm1OEpj0z0ahG4Bo26GVuMv27wceosV0dwASQJRrWkpzGm-u_SBMyUN8aUJINN2",J="https://lh3.googleusercontent.com/aida-public/AB6AXuBc40bF0omU-caXomvw5hwQbATVvZyuzSqwEzhCp1Efy63HeaIzNBDzupSLS6i5b6MJ1PDp6hYenOKvNNvfZPvq37oAcN_UohdATeGGSdl-zR0TQ_UQE7SdOaxkNAEm4qssUFZA_J7aQmWKcNH2Qsao0_1P9FDngdPAmw-Dbn7lOSQi07mtlaklx0hSvmy29ysYQE9Z6Kn8p-qfXtidRulx6EioE5Fu4MDJRChdheYS",oe=l>0?o/l*100:0;return g.jsxs("div",{className:"flex flex-col gap-8 w-full max-w-[1600px] mx-auto pt-2 pb-28",children:[w&&g.jsxs("div",{className:"fixed top-20 right-8 z-50 bg-cyan-400 text-black px-4 py-2 rounded-xl font-medium text-xs shadow-xl animate-fade-in flex items-center gap-2",children:[g.jsx("span",{className:"material-symbols-outlined text-base font-bold",children:"check"}),g.jsx("span",{children:"Episode share link copied to clipboard!"})]}),g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[g.jsxs("div",{children:[g.jsx("div",{className:"text-xs text-slate-500 font-mono mb-1 tracking-wider uppercase",children:"KUBERNETES-IN-PRODUCTION / EPISODE 04"}),g.jsx("h1",{className:"text-2xl lg:text-3xl font-headline font-semibold text-white tracking-tight",children:y})]}),g.jsx("div",{className:"flex items-center gap-3",children:g.jsxs("div",{className:"flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-300",children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),g.jsxs("span",{children:[N(l||194)," Total Length"]})]})})]}),g.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-12 gap-8 items-start",children:[g.jsxs("div",{className:"xl:col-span-8 flex flex-col gap-6",children:[g.jsxs("div",{className:"relative w-full rounded-3xl obsidian-card-elevated overflow-hidden border border-white/[0.09] shadow-2xl",children:[g.jsxs("div",{className:"absolute top-5 inset-x-6 z-20 flex items-center justify-between pointer-events-none",children:[g.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto bg-black/50 backdrop-blur-md px-2 py-1 rounded-xl border border-white/10 text-xs",children:[g.jsx("button",{onClick:()=>x("studio"),className:`px-3 py-1 rounded-lg transition-colors ${S==="studio"?"bg-cyan-400/20 text-cyan-300 font-medium":"text-slate-400 hover:text-white"}`,children:"Studio View"}),g.jsx("button",{onClick:()=>x("orbit"),className:`px-3 py-1 rounded-lg transition-colors ${S==="orbit"?"bg-cyan-400/20 text-cyan-300 font-medium":"text-slate-400 hover:text-white"}`,children:"Orbit"})]}),g.jsxs("div",{className:"pointer-events-auto flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 text-xs text-emerald-400 font-mono",children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),g.jsx("span",{children:"60 FPS"})]})]}),g.jsxs("div",{className:"relative w-full aspect-[16/9] min-h-[440px] bg-gradient-to-b from-[#090c16] via-[#070912] to-[#05060b] flex items-center justify-center overflow-hidden",children:[g.jsx("div",{className:"absolute inset-0 opacity-[0.14] bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:32px_32px]"}),g.jsx("div",{className:"absolute w-[500px] h-[500px] rounded-full border border-cyan-500/10 bg-cyan-500/[0.03] blur-3xl pointer-events-none"}),g.jsx("div",{className:"absolute inset-0 z-0",children:g.jsx(rE,{isPlaying:u,currentSpeaker:F,mode:r})}),g.jsxs("div",{className:"relative z-10 w-full max-w-xl px-8 flex items-center justify-between pointer-events-none",children:[g.jsxs("div",{className:`flex flex-col items-center gap-3 transition-all duration-300 ${F==="Alex"?"opacity-100 scale-105":"opacity-65"}`,children:[g.jsxs("div",{className:"relative",children:[F==="Alex"&&g.jsx("div",{className:"absolute -inset-3.5 rounded-full bg-cyan-400/25 blur-xl animate-pulse"}),g.jsx("div",{className:`relative w-24 h-24 lg:w-28 lg:h-28 rounded-full p-1 border-2 bg-[#0a0f1d] transition-all ${F==="Alex"?"border-cyan-400 soft-glow-cyan":"border-white/20"}`,children:g.jsx("img",{className:"w-full h-full rounded-full object-cover",src:H,alt:"Alex"})}),g.jsx("div",{className:`absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors ${F==="Alex"?"bg-cyan-400 text-black":"bg-black/60 text-slate-400 border border-white/20"}`,children:g.jsx("span",{className:"material-symbols-outlined text-sm font-bold",children:F==="Alex"?"mic":"mic_none"})})]}),g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"font-headline font-semibold text-white text-base tracking-wide",children:"Alex"}),g.jsx("div",{className:"text-xs text-cyan-300 font-mono mt-0.5",children:"Host A"})]})]}),g.jsx("div",{className:"flex items-center gap-1.5 h-14 px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/[0.08]",children:[24,40,56,36,20].map((Y,G)=>g.jsx("div",{style:{height:u?`${Math.max(12,Y*(1+G%2*.4)%56)}px`:"10px"},className:`w-1 rounded-full transition-all duration-150 ${G<3?"bg-cyan-400 shadow-[0_0_6px_#00f2fe]":"bg-purple-400 shadow-[0_0_6px_#a855f7]"} ${u?"animate-pulse":""}`},G))}),g.jsxs("div",{className:`flex flex-col items-center gap-3 transition-all duration-300 ${F==="Sam"?"opacity-100 scale-105":"opacity-65"}`,children:[g.jsxs("div",{className:"relative",children:[F==="Sam"&&g.jsx("div",{className:"absolute -inset-3 rounded-full bg-purple-500/25 blur-lg animate-pulse"}),g.jsx("div",{className:`relative w-24 h-24 lg:w-28 lg:h-28 rounded-full p-1 border-2 bg-[#0a0f1d] transition-all ${F==="Sam"?"border-purple-400 soft-glow-purple":"border-white/20"}`,children:g.jsx("img",{className:"w-full h-full rounded-full object-cover",src:J,alt:"Sam"})}),g.jsx("div",{className:`absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors ${F==="Sam"?"bg-purple-600 text-white":"bg-black/60 text-slate-400 border border-white/20"}`,children:g.jsx("span",{className:"material-symbols-outlined text-sm",children:F==="Sam"?"mic":"mic_none"})})]}),g.jsxs("div",{className:"text-center",children:[g.jsx("div",{className:"font-headline font-semibold text-white text-base tracking-wide",children:"Sam"}),g.jsx("div",{className:"text-xs text-purple-300 font-mono mt-0.5",children:"Host B"})]})]})]}),g.jsx("div",{className:"absolute bottom-5 inset-x-8 z-20 flex justify-center pointer-events-none",children:g.jsxs("div",{className:"bg-black/60 backdrop-blur-xl px-6 py-2.5 rounded-2xl border border-white/10 text-center max-w-xl shadow-xl",children:[g.jsxs("span",{className:`font-mono text-xs font-semibold uppercase mr-2 ${F==="Alex"?"text-cyan-300":"text-purple-300"}`,children:[F,":"]}),g.jsxs("span",{className:"text-slate-200 text-xs sm:text-sm italic font-normal",children:['"',T,'"']})]})})]})]}),g.jsxs("div",{className:"obsidian-card rounded-2xl p-6 border border-white/[0.08] flex flex-col gap-5",children:[g.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 font-mono",children:[g.jsx("span",{className:"text-white font-headline font-medium text-sm",children:"Live Spoken Script"}),g.jsxs("span",{children:[N(o)," / ",N(l||194)]})]}),g.jsx("div",{className:"py-3 px-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center flex-wrap gap-2 text-sm sm:text-base text-slate-400 leading-relaxed min-h-[52px]",children:L.map((Y,G)=>{const $=G===M,Z=G<M;return g.jsx("span",{className:`transition-all duration-150 ${$?"px-2 py-0.5 rounded-lg bg-cyan-400/20 text-cyan-200 font-semibold border border-cyan-400/40 shadow-sm scale-105":Z?"text-white":"text-slate-400"}`,children:Y},G)})}),g.jsxs("div",{ref:C,onClick:B,className:"relative w-full h-14 bg-black/40 rounded-xl overflow-hidden flex items-center px-3 border border-white/[0.06] cursor-pointer group",children:[g.jsx("div",{className:"w-full h-10 flex items-center justify-between gap-[3px]",children:[35,60,90,45,80,100,65,85,40,75,95,50,70,88,60,40,75,90,35,55,70,85,30,65,90,50,80,40,60,85].map((Y,G)=>{const Z=G/30*100<=oe;return g.jsx("div",{style:{height:`${Y}%`},className:`w-1 rounded-full transition-all duration-150 ${Z?"bg-cyan-400 shadow-[0_0_6px_#00f2fe]":"bg-white/20 group-hover:bg-white/30"}`},G)})}),g.jsx("div",{className:"absolute top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_8px_#00f2fe] pointer-events-none transition-all duration-75",style:{left:`${oe}%`},children:g.jsx("div",{className:"absolute -top-1 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_6px_#ffffff]"})})]})]})]}),g.jsxs("div",{className:"xl:col-span-4 flex flex-col gap-6",children:[g.jsxs("div",{className:"obsidian-card rounded-2xl p-6 border border-white/[0.08] flex flex-col gap-4",children:[g.jsx("h2",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 font-medium",children:"Voice Casting Summary"}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-9 h-9 rounded-full bg-cyan-400/10 text-cyan-300 flex items-center justify-center border border-cyan-400/20",children:g.jsx("span",{className:"material-symbols-outlined text-base",children:"graphic_eq"})}),g.jsxs("div",{children:[g.jsxs("div",{className:"text-sm font-medium text-white",children:["Alex ",g.jsx("span",{className:"text-xs text-slate-400 font-mono ml-1",children:"• Adam"})]}),g.jsx("div",{className:"text-xs text-slate-400",children:"Warm Tech Lead"})]})]}),g.jsx("button",{onClick:f,className:"p-2 rounded-lg hover:bg-white/10 text-cyan-400 transition-colors",children:g.jsx("span",{className:"material-symbols-outlined text-base",children:u&&F==="Alex"?"pause":"play_arrow"})})]}),g.jsxs("div",{className:"p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-9 h-9 rounded-full bg-purple-500/10 text-purple-300 flex items-center justify-center border border-purple-500/20",children:g.jsx("span",{className:"material-symbols-outlined text-base",children:"graphic_eq"})}),g.jsxs("div",{children:[g.jsxs("div",{className:"text-sm font-medium text-white",children:["Sam ",g.jsx("span",{className:"text-xs text-slate-400 font-mono ml-1",children:"• Rachel"})]}),g.jsx("div",{className:"text-xs text-slate-400",children:"Crisp Analyst"})]})]}),g.jsx("button",{onClick:f,className:"p-2 rounded-lg hover:bg-white/10 text-purple-300 transition-colors",children:g.jsx("span",{className:"material-symbols-outlined text-base",children:u&&F==="Sam"?"pause":"play_arrow"})})]})]})]}),g.jsxs("div",{className:"obsidian-card rounded-2xl p-6 border border-white/[0.08] flex flex-col gap-4",children:[g.jsx("h2",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 font-medium",children:"Broadcast & Export"}),g.jsxs("button",{onClick:z,className:"w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-cyan-400/20 transition-all cursor-pointer",children:[g.jsx("span",{className:"material-symbols-outlined text-lg",children:"download"}),g.jsx("span",{children:"Download Master MP3"})]}),g.jsxs("button",{onClick:()=>alert("Audiogram MP4 rendering: Exporting 1080p video with animated waveform & karaoke subtitles."),className:"w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm flex items-center justify-between border border-white/[0.08] transition-all cursor-pointer",children:[g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx("span",{className:"material-symbols-outlined text-purple-300 text-lg",children:"movie"}),g.jsx("span",{children:"Export Audiogram MP4"})]}),g.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"1080p"})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[g.jsxs("button",{onClick:j,className:"py-2.5 px-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-xs font-mono text-slate-300 border border-white/[0.06] flex items-center justify-center gap-2 transition-all cursor-pointer",children:[g.jsx("span",{className:"material-symbols-outlined text-sm text-cyan-400",children:"subtitles"}),g.jsx("span",{children:"SRT Subtitles"})]}),g.jsxs("button",{onClick:Q,className:"py-2.5 px-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-xs font-mono text-slate-300 border border-white/[0.06] flex items-center justify-center gap-2 transition-all cursor-pointer",children:[g.jsx("span",{className:"material-symbols-outlined text-sm text-purple-400",children:"share"}),g.jsx("span",{children:"Share Link"})]})]})]})]})]})]})}function aE({onSelectEpisode:s}){const[e,n]=et.useState("30d"),r=[{id:1,title:"How We Built Pingora in Rust to Power Cloudflare's Edge",format:"Dual-Host Deep Dive",duration:"03:14",plays:"3,840",retention:"88.2%",date:"Oct 14, 2026"},{id:2,title:"Swapping Docker for Podman on Bare-Metal Servers",format:"Solo Flash Teaser",duration:"01:02",plays:"1,920",retention:"94.5%",date:"Oct 12, 2026"},{id:3,title:"Low-Latency Rust & Wasm on Edge Micro-Nodes",format:"Dual-Host Deep Dive",duration:"03:28",plays:"2,650",retention:"84.0%",date:"Oct 09, 2026"},{id:4,title:"Spoken Audio Synthesis Pipelines with Google Gemma 2",format:"Dual-Host Deep Dive",duration:"03:05",plays:"4,110",retention:"89.6%",date:"Oct 05, 2026"}];return g.jsxs("div",{className:"flex flex-col gap-8 w-full max-w-6xl mx-auto pt-2 pb-28",children:[g.jsxs("div",{className:"flex flex-col gap-2 relative z-10",children:[g.jsx("span",{className:"text-[11px] font-mono tracking-widest uppercase text-cyan-400",children:"Micro-SaaS Metrics • Open-Source AI Side Hustle"}),g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline justify-between gap-4",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"font-headline text-3xl font-semibold text-white tracking-tight",children:"Studio Metrics & Analytics"}),g.jsx("p",{className:"text-sm text-slate-400 mt-0.5",children:"Track listener retention, conversion spikes, and marginal cost savings with Gemma 2"})]}),g.jsx("div",{className:"flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono",children:["7d","30d","All"].map(o=>g.jsx("button",{onClick:()=>n(o),className:`px-3 py-1 rounded-lg transition-all ${e===o?"bg-cyan-400/20 text-cyan-300 font-semibold":"text-slate-400 hover:text-white"}`,children:o},o))})]})]}),g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[g.jsxs("div",{className:"glass-card glass-specular rounded-2xl p-5 border border-white/[0.08] flex flex-col justify-between",children:[g.jsxs("div",{className:"flex items-start justify-between",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Repurposed Articles"}),g.jsx("div",{className:"text-2xl font-headline font-bold text-white mt-1",children:"18"})]}),g.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center",children:g.jsx("span",{className:"material-symbols-outlined text-lg",children:"article"})})]}),g.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-emerald-400 mt-4 font-mono",children:[g.jsx("span",{className:"material-symbols-outlined text-sm font-bold",children:"trending_up"}),g.jsx("span",{children:"+38% vs last month"})]})]}),g.jsxs("div",{className:"glass-card glass-specular rounded-2xl p-5 border border-white/[0.08] flex flex-col justify-between",children:[g.jsxs("div",{className:"flex items-start justify-between",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Total Broadcast Audio"}),g.jsx("div",{className:"text-2xl font-headline font-bold text-white mt-1",children:"52.4m"})]}),g.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/20 text-purple-300 flex items-center justify-center",children:g.jsx("span",{className:"material-symbols-outlined text-lg",children:"graphic_eq"})})]}),g.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-purple-300 mt-4 font-mono",children:[g.jsx("span",{className:"material-symbols-outlined text-sm font-bold",children:"check_circle"}),g.jsx("span",{children:"Studio Master Quality"})]})]}),g.jsxs("div",{className:"glass-card glass-specular rounded-2xl p-5 border border-white/[0.08] flex flex-col justify-between",children:[g.jsxs("div",{className:"flex items-start justify-between",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Open-Source AI Savings"}),g.jsx("div",{className:"text-2xl font-headline font-bold text-emerald-400 mt-1",children:"$184.20"})]}),g.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center",children:g.jsx("span",{className:"material-symbols-outlined text-lg",children:"savings"})})]}),g.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-slate-400 mt-4 font-mono",children:[g.jsx("span",{className:"text-cyan-300 font-medium",children:"Gemma 2"})," vs closed proprietary APIs"]})]}),g.jsxs("div",{className:"glass-card glass-specular rounded-2xl p-5 border border-white/[0.08] flex flex-col justify-between",children:[g.jsxs("div",{className:"flex items-start justify-between",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Average Completion"}),g.jsx("div",{className:"text-2xl font-headline font-bold text-white mt-1",children:"86.4%"})]}),g.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/20 text-amber-300 flex items-center justify-center",children:g.jsx("span",{className:"material-symbols-outlined text-lg",children:"pie_chart"})})]}),g.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-amber-300 mt-4 font-mono",children:[g.jsx("span",{className:"material-symbols-outlined text-sm font-bold",children:"bolt"}),g.jsx("span",{children:"3.4x vs text bounce rates"})]})]})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[g.jsxs("div",{className:"lg:col-span-8 glass-card rounded-2xl p-6 border border-white/[0.08] space-y-5",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"font-headline text-base font-semibold text-white",children:"Audience Retention Curve"}),g.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Drop-off analysis across 3-minute Dual-Host episodes"})]}),g.jsx("span",{className:"text-xs font-mono text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/30",children:"86.4% Completion"})]}),g.jsxs("div",{className:"relative w-full h-56 pt-4",children:[g.jsxs("svg",{className:"w-full h-full overflow-visible",viewBox:"0 0 500 150",children:[g.jsx("defs",{children:g.jsxs("linearGradient",{id:"curveGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[g.jsx("stop",{offset:"0%",stopColor:"#00f2fe",stopOpacity:"0.35"}),g.jsx("stop",{offset:"100%",stopColor:"#00f2fe",stopOpacity:"0.0"})]})}),g.jsx("line",{x1:"0",y1:"30",x2:"500",y2:"30",stroke:"rgba(255,255,255,0.06)",strokeDasharray:"4"}),g.jsx("line",{x1:"0",y1:"75",x2:"500",y2:"75",stroke:"rgba(255,255,255,0.06)",strokeDasharray:"4"}),g.jsx("line",{x1:"0",y1:"120",x2:"500",y2:"120",stroke:"rgba(255,255,255,0.06)",strokeDasharray:"4"}),g.jsx("path",{d:"M 0,10 Q 120,25 250,30 T 500,42 L 500,150 L 0,150 Z",fill:"url(#curveGradient)"}),g.jsx("path",{d:"M 0,10 Q 120,25 250,30 T 500,42",fill:"none",stroke:"#00f2fe",strokeWidth:"3",className:"filter drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]"}),g.jsx("circle",{cx:"120",cy:"22",r:"4",fill:"#ffffff",stroke:"#00f2fe",strokeWidth:"2"}),g.jsx("circle",{cx:"250",cy:"30",r:"4",fill:"#ffffff",stroke:"#a855f7",strokeWidth:"2"}),g.jsx("circle",{cx:"500",cy:"42",r:"4",fill:"#10b981",stroke:"#ffffff",strokeWidth:"2"})]}),g.jsxs("div",{className:"flex justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-white/[0.06]",children:[g.jsx("span",{children:"00:00 (100%)"}),g.jsx("span",{children:"01:00 (Hook)"}),g.jsx("span",{children:"02:00 (Core Tech)"}),g.jsx("span",{children:"03:14 (86.4% Completed)"})]})]})]}),g.jsxs("div",{className:"lg:col-span-4 glass-card rounded-2xl p-6 border border-white/[0.08] space-y-5",children:[g.jsx("h3",{className:"font-headline text-base font-semibold text-white",children:"Listener Channels"}),g.jsx("div",{className:"space-y-4",children:[{name:"Apple Podcasts",share:"42%",color:"from-cyan-400 to-cyan-300"},{name:"Spotify Audio",share:"35%",color:"from-emerald-400 to-emerald-300"},{name:"Substack Newsletter Player",share:"15%",color:"from-purple-400 to-purple-300"},{name:"X & LinkedIn Audiograms",share:"8%",color:"from-amber-400 to-amber-300"}].map((o,l)=>g.jsxs("div",{className:"space-y-1.5",children:[g.jsxs("div",{className:"flex justify-between text-xs",children:[g.jsx("span",{className:"text-slate-300 font-medium",children:o.name}),g.jsx("span",{className:"text-slate-400 font-mono",children:o.share})]}),g.jsx("div",{className:"w-full h-1.5 bg-white/[0.08] rounded-full overflow-hidden",children:g.jsx("div",{className:`h-full rounded-full bg-gradient-to-r ${o.color}`,style:{width:o.share}})})]},l))}),g.jsxs("div",{className:"pt-3 border-t border-white/[0.06] text-xs text-slate-400 flex items-center justify-between font-mono",children:[g.jsx("span",{children:"RSS Auto-Syndication"}),g.jsx("span",{className:"text-emerald-400 font-semibold",children:"ENABLED"})]})]})]}),g.jsxs("div",{className:"glass-card rounded-2xl p-6 border border-white/[0.08] space-y-4",children:[g.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/[0.06]",children:[g.jsx("h3",{className:"font-headline text-base font-semibold text-white",children:"Recent Repurposed Episodes"}),g.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Auto-Saved to Cloud Cache"})]}),g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full text-left text-xs",children:[g.jsx("thead",{children:g.jsxs("tr",{className:"border-b border-white/[0.06] text-slate-400 font-mono",children:[g.jsx("th",{className:"pb-3 font-normal",children:"Episode Title"}),g.jsx("th",{className:"pb-3 font-normal",children:"Archetype"}),g.jsx("th",{className:"pb-3 font-normal",children:"Runtime"}),g.jsx("th",{className:"pb-3 font-normal",children:"Plays"}),g.jsx("th",{className:"pb-3 font-normal",children:"Retention"}),g.jsx("th",{className:"pb-3 font-normal text-right",children:"Actions"})]})}),g.jsx("tbody",{className:"divide-y divide-white/[0.04]",children:r.map(o=>g.jsxs("tr",{className:"hover:bg-white/[0.02] transition-colors group",children:[g.jsxs("td",{className:"py-3.5 pr-4",children:[g.jsx("span",{className:"font-medium text-white group-hover:text-cyan-300 transition-colors",children:o.title}),g.jsx("span",{className:"block text-[11px] text-slate-500 font-mono mt-0.5",children:o.date})]}),g.jsx("td",{className:"py-3.5 font-mono text-slate-300",children:o.format}),g.jsx("td",{className:"py-3.5 font-mono text-cyan-400",children:o.duration}),g.jsx("td",{className:"py-3.5 font-mono text-slate-300",children:o.plays}),g.jsx("td",{className:"py-3.5 font-mono text-emerald-400",children:o.retention}),g.jsx("td",{className:"py-3.5 text-right space-x-2",children:g.jsx("button",{onClick:()=>s&&s(o),className:"px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 transition-all font-mono",children:"Load"})})]},o.id))})]})})]})]})}const oE=[{id:"21m00Tcm4TlvDq8ikWAM",name:"Rachel",gender:"female",persona:"Warm & Engaging",description:"Natural, conversational, and energetic. Perfect for welcoming teasers and active co-hosting.",accent:"American",recommendedFor:["solo","alex"]},{id:"pNInz6obpgDQGcFmaJgB",name:"Adam",gender:"male",persona:"Authoritative & Tech-Savvy",description:"Deep, crisp, and articulate. Ideal for technical breakdowns and expert analysis.",accent:"American",recommendedFor:["solo","sam"]},{id:"AZnzlk1XvdvUeBnXmlld",name:"Domi",gender:"female",persona:"Punchy & Confident",description:"Fast-paced, bold, and high-retention. Built for viral social media hooks.",accent:"American",recommendedFor:["solo","alex"]},{id:"JBFqnCBsd6RMkjVDRZzb",name:"George",gender:"male",persona:"Thoughtful Storyteller",description:"Warm British voice with natural cadence, ideal for narrative explainers.",accent:"British",recommendedFor:["solo","sam"]},{id:"EXAVITQu4vr4xnSDxMaL",name:"Bella",gender:"female",persona:"Dynamic Interviewer",description:"Expressive and curious tone with playful inflections.",accent:"American",recommendedFor:["alex"]},{id:"nPczCjzI2devNBz1zQrb",name:"Brian",gender:"male",persona:"Deep-Dive Specialist",description:"Calm, grounded, and intellectual. Explains complex concepts with clarity.",accent:"American",recommendedFor:["sam"]}],Xs={solo:"21m00Tcm4TlvDq8ikWAM",duo:{alex:"21m00Tcm4TlvDq8ikWAM",sam:"pNInz6obpgDQGcFmaJgB"}},lE=[{id:"local-first-sqlite",title:"Why SQLite in the Browser with WebAssembly is Changing Local-First Apps",author:"Alex Rivera",url:"https://dev.to/alexrivera/local-first-sqlite-in-the-browser-49b2",category:"Architecture",readTime:"6 min read",content:`# Why SQLite in the Browser with WebAssembly is Changing Local-First Apps

For the past decade, web developers have accepted an unspoken truth: your client application is just a dumb terminal rendering JSON fetched from a distant relational database in us-east-1. If the user goes offline or enters a subway tunnel, the spinner freezes, mutations fail, and the experience breaks.

Enter SQLite compiled to WebAssembly with Origin Private File System (OPFS) storage.

### The Problem with Cloud-Only State
When your web app relies on REST or GraphQL queries for every interaction, latency dominates your UI performance. Every search query requires a network round-trip. Every filter change stalls the main thread while waiting for a response.

### How In-Browser SQLite Works
By compiling SQLite to Wasm and backing it with the browser's OPFS API, we can persist gigabytes of relational data directly inside IndexedDB/OPFS at near-native I/O speeds:
1. **Sub-millisecond queries:** Searching 100,000 rows takes 2ms directly in browser memory.
2. **True offline capability:** The app works with zero internet connection.
3. **Sync engines:** Background workers sync delta changes to server Postgres using conflict-free replicated data types (CRDTs).

### The Trade-offs You Need to Know
It is not all sunshine and rainbows. Initial bundle sizes increase by ~800KB for the Wasm binary. Migration management shifts from a centralized DB migration script to distributed client schema reconciliation. But for high-productivity software like Notion, Linear, or Figma, local-first architecture is no longer optional—it is the modern standard.`},{id:"monolith-vs-microservices",title:"Microservices Are Overrated: How Our Solo Startup Hit $50k MRR on a Modular Monolith",author:"Elena Rostova",url:"https://dev.to/erostova/microservices-are-overrated-50k-mrr-monolith-881a",category:"Startups & DevOps",readTime:"5 min read",content:`# Microservices Are Overrated: How Our Solo Startup Hit $50k MRR on a Modular Monolith

Every junior architect reads about Netflix or Uber's distributed microservices and immediately assumes their 2-person SaaS startup needs Kubernetes, gRPC, and 14 separate Docker containers.

We fell into that trap early. It almost killed our business.

### The Distributed Systems Tax
In our first architecture, we split auth, billing, notifications, and analytics into separate services.
Here is what happened:
- Deployments took 45 minutes because of inter-service dependency chains.
- Debugging a single checkout failure required tracing distributed OpenTelemetry spans across 4 network hops.
- Cloud hosting bills reached $1,400/month before we even made our first dollar in customer revenue.

### The Turning Point: The Boring Monolith
We spent three grueling weeks tearing down the microservices and consolidating everything into a single Node.js / PostgreSQL monolith hosted on a single $40/month VPS.

The results were astonishing:
- Deployment dropped from 45 minutes to 30 seconds via simple git pushes.
- Database transactions became atomic again without complex two-phase commits.
- Feature velocity tripled. We shipped our billing overhaul in two days instead of two weeks.

### The Lesson for Indie Builders
Don't optimize for Netflix problems before you have Netflix scale. A clean modular monolith with clear domain boundaries can easily scale past $10M in revenue. Your customers care about reliability, not your distributed tracing dashboard.`},{id:"cloudflare-pingora",title:"Why Cloudflare Replaced NGINX with Pingora and Rust in Production",author:"David Chen",url:"https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/",category:"Systems & Rust",readTime:"8 min read",content:`# Why Cloudflare Replaced NGINX with Pingora and Rust in Production

For over a decade, Cloudflare relied heavily on NGINX to power its global edge network proxy. NGINX was battle-tested, extremely performant in C, and served over a trillion requests each day.

So why throw it away and rebuild the entire core proxy from scratch in Rust?

### The Architectural Ceiling of NGINX
NGINX uses a multi-process worker architecture where incoming TCP connections are pinned to specific worker processes. While simple and reliable, this introduced severe load imbalances:
1. **Connection pooling penalties:** Each worker maintains its own pool of upstream connections, multiplying overall TLS handshake overhead.
2. **Tail latency spikes:** A single heavy request on worker 3 would stall other lightweight requests routed to that same process.
3. **C Memory Safety Risk:** At global scale, even subtle buffer edge cases in custom C Lua modules present catastrophic zero-day vulnerabilities.

### The Pingora Breakthrough in Rust
Pingora implements a multi-threaded async runtime with work-stealing thread pools built on Tokio:
- **70% CPU reduction:** Shared connection pooling eliminated redundant upstream handshakes.
- **50% p99 latency cut:** Work-stealing prevents slow requests from starving fast requests.
- **Zero memory safety crashes:** Rust's borrow checker enforces compile-time guarantees across trillions of edge transactions.

If your systems team operates at high concurrency, the transition from C to Rust is no longer speculative—it is a proven operational win.`}];function cE(s,e,n){const r=e.split(`
`).map(m=>m.trim()).filter(m=>m.length>25&&!m.startsWith("#")&&!m.startsWith("!")),o=r[0]||"Every developer has run into this bottleneck.",l=r[1]||"The traditional approach creates unnecessary friction.",u=r[2]||"By shifting this logic directly to modern tools, performance jumps dramatically.";if(n==="solo"){const m=`What if everything we accepted about traditional web architecture was actually slowing us down? 
${o.replace(/\.$/,"")}. But here is the breakthrough. 
${l} Instead of waiting on round-trip latency, modern teams are moving state directly into browser memory.
${u}
If you want the complete technical breakdown, check out the full article: ${s}. Read it now on the blog!`,_=m.split(/\s+/).length;return{mode:"solo",title:s,scriptText:m,wordCount:_,estimatedSeconds:Math.round(_/2.3)}}const f=[{speaker:"Alex",text:`Welcome back to PodSnippet Studio! Today we are looking at an article that completely challenges conventional wisdom: ${s}. Sam, when I first read this, I was skeptical.`},{speaker:"Sam",text:"You are not alone, Alex. Most teams instinctively reach for the most complex architecture because it feels enterprise-grade. But as the author points out, that complexity comes with a massive latency tax."},{speaker:"Alex",text:"Right! The article highlighted that every single request was jumping through multiple hops, blowing up debugging time and infrastructure bills."},{speaker:"Sam",text:"Exactly. And the solution here is surprisingly elegant. By keeping the architecture lean and moving data closer to the user, query times dropped from hundreds of milliseconds to under two milliseconds."},{speaker:"Alex",text:"Wait, under two milliseconds? That is a hundred times faster than a standard cloud database roundtrip!"},{speaker:"Sam",text:"It is! Plus, the entire application works offline seamlessly. The lesson here is simple: stop optimizing for hypothetical Netflix scale before you have solved for developer velocity."},{speaker:"Alex",text:"Love that perspective. If you want the full code samples and benchmarks, make sure to read the full write-up on the blog. See you in the next episode!"}],h=f.reduce((m,_)=>m+_.text.split(/\s+/).length,0);return{mode:"duo",title:s,summary:`Alex and Sam break down the core engineering trade-offs behind "${s}".`,turns:f,totalWords:h,estimatedSeconds:Math.round(h/2.4)}}function uE(s){const e=[];let n=.5;if(s.mode==="solo"){const o=(s.scriptText||"").split(/\s+/);for(const l of o){const u=Math.max(.2,l.length*.05+.15);e.push({word:l,start:Number(n.toFixed(3)),end:Number((n+u).toFixed(3)),speaker:"Solo Host"}),n+=u+.05}}else for(const o of s.turns||[]){const l=(o.text||"").split(/\s+/);for(const u of l){const f=Math.max(.18,u.length*.045+.14);e.push({word:u,start:Number(n.toFixed(3)),end:Number((n+f).toFixed(3)),speaker:o.speaker}),n+=f+.04}n+=.35}const r=Number(n.toFixed(2));return{mode:s.mode,audioBase64:null,words:e,durationSeconds:r,isSimulation:!0}}function dE(){const[s,e]=et.useState("input-source"),[n,r]=et.useState("duo"),[o,l]=et.useState("How We Built Pingora in Rust to Power Cloudflare's Edge Proxy"),[u,f]=et.useState("Pingora handles over 1 trillion requests every day. By migrating from NGINX to our custom async Rust architecture, we eliminated memory safety bugs while cutting CPU consumption by 70%."),[h,m]=et.useState("https://blog.cloudflare.com/how-we-built-pingora-in-rust"),[_,S]=et.useState(lE),[x,w]=et.useState(""),[b,C]=et.useState(oE),[y,v]=et.useState(Xs.solo),[D,F]=et.useState(Xs.duo.alex),[T,L]=et.useState(Xs.duo.sam),[P,I]=et.useState({mode:"duo",articleTitle:"How We Built Pingora in Rust to Power Cloudflare's Edge Proxy",turns:[{speaker:"Alex",text:"Wait, so why did Cloudflare replace NGINX after using it to power their global proxy for more than a decade?"},{speaker:"Sam",text:"Mainly architecture limitations and memory safety! At one trillion requests per day, even tiny C pointer edge cases become major reliability headaches."},{speaker:"Alex",text:"Right, and Rust gives you compile-time memory safety without a garbage collector stealing CPU cycles."},{speaker:"Sam",text:"Exactly. In production benchmarks, Pingora slashed CPU consumption by seventy percent while cutting p99 tail latency in half."},{speaker:"Alex",text:"Plus their custom work-stealing scheduler prevents slow HTTP connections from blocking fast requests."},{speaker:"Sam",text:"It is a masterclass in modern systems programming. The full open-source repo is live on GitHub right now."}],wordCount:135}),[M,N]=et.useState(null),[B,z]=et.useState(!1),[j,Q]=et.useState(!1),[H,J]=et.useState(!1),[oe,Y]=et.useState(!1),[G,$]=et.useState(!1),[Z,U]=et.useState(""),[re,ve]=et.useState(!1),[ze,De]=et.useState(0),[Be,ie]=et.useState(194),le=et.useRef(null),Se=et.useRef(null);et.useEffect(()=>{fetch("/api/health").then(Me=>Me.json()).then(Me=>{Y(Me.hasElevenLabsKey),$(Me.hasGemmaKey)}).catch(Me=>console.warn("Backend not responding yet (using client fallback):",Me)),fetch("/api/voices").then(Me=>Me.json()).then(Me=>{var Ge,pt,V;(Ge=Me.voices)!=null&&Ge.length&&C(Me.voices),Me.presets&&(v(Me.presets.solo||Xs.solo),F(((pt=Me.presets.duo)==null?void 0:pt.alex)||Xs.duo.alex),L(((V=Me.presets.duo)==null?void 0:V.sam)||Xs.duo.sam))}).catch(Me=>console.warn("Using default fallback voices:",Me)),fetch("/api/samples").then(Me=>Me.json()).then(Me=>{var Ge;(Ge=Me.samples)!=null&&Ge.length&&S(Me.samples)}).catch(Me=>console.warn("Using default fallback samples:",Me))},[]),et.useEffect(()=>{if(M!=null&&M.audioBase64){le.current&&le.current.pause();const Me=`data:audio/mp3;base64,${M.audioBase64}`,Ge=new Audio(Me);le.current=Ge,Ge.onloadedmetadata=()=>{ie(Ge.duration||M.durationSeconds||194)},Ge.ontimeupdate=()=>{De(Ge.currentTime)},Ge.onended=()=>{ve(!1),De(0)}}},[M]),et.useEffect(()=>(re?le.current&&le.current.src?le.current.play().catch(()=>{}):Se.current=setInterval(()=>{De(Me=>Me>=(Be||194)?(ve(!1),0):Me+.25)},250):(le.current&&le.current.pause(),Se.current&&clearInterval(Se.current)),()=>{Se.current&&clearInterval(Se.current)}),[re,Be]);const qe=()=>{ve(Me=>!Me)},Le=Me=>{De(Me),le.current&&le.current.src&&(le.current.currentTime=Me)},lt=Me=>{l(Me.title),f(Me.content),m(Me.url||""),U("")},Vt=async()=>{var Me;if(h.trim()){z(!0),U("");try{const Ge=await fetch("/api/extract",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:h})}),pt=await Ge.json();if(!Ge.ok)throw new Error(pt.error||"Failed to extract article.");l(pt.title),f(pt.content)}catch(Ge){console.warn("API extraction unavailable, checking sample matching or using input:",Ge);const pt=_.find(V=>V.url===h||h.includes(V.id));if(pt)l(pt.title),f(pt.content);else{const V=((Me=h.split("/").filter(Boolean).pop())==null?void 0:Me.replace(/[-_]/g," "))||"Extracted Technical Article";l(V.charAt(0).toUpperCase()+V.slice(1))}}finally{z(!1)}}},dt=async()=>{if(!o.trim()||!u.trim()){U("Please provide an article title and content.");return}Q(!0),U("");try{const Me=await fetch("/api/generate-script",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({articleTitle:o,articleContent:u,mode:n})}),Ge=await Me.json();if(!Me.ok)throw new Error(Ge.error||"Failed to generate script.");I(Ge),e("script-editor")}catch(Me){console.warn("Backend unavailable, generating script client-side with Gemma heuristic engine:",Me);const Ge=cE(o,u,n);I(Ge),e("script-editor")}finally{Q(!1)}},xt=Me=>{I(Ge=>({...Ge,scriptText:Me,wordCount:Me.split(/\s+/).filter(Boolean).length}))},wt=(Me,Ge)=>{I(pt=>{const V=[...pt.turns];return V[Me]={...V[Me],text:Ge},{...pt,turns:V}})},ht=()=>{I(Me=>{var Yt;if(!(Me!=null&&Me.turns))return Me;const pt=((Yt=Me.turns[Me.turns.length-1])==null?void 0:Yt.speaker)==="Alex"?"Sam":"Alex",V={speaker:pt,text:pt==="Alex"?"That's a key observation! But what about the production migration trade-offs?":"Exactly. The p99 numbers make an undeniable case for low-level systems speed."};return{...Me,turns:[...Me.turns,V]}})},Ot=async()=>{if(P){J(!0),U("");try{const Me=await fetch("/api/generate-audio",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scriptData:P,voiceSettings:{soloVoiceId:y,alexVoiceId:D,samVoiceId:T}})}),Ge=await Me.json();if(!Me.ok)throw new Error(Ge.error||"Audio synthesis failed.");N(Ge),Ge.durationSeconds&&ie(Ge.durationSeconds),e("studio"),ve(!0)}catch(Me){console.warn("Backend synthesis unavailable, activating client studio audio simulation:",Me);const Ge=uE(P);N(Ge),Ge.durationSeconds&&ie(Ge.durationSeconds),e("studio"),ve(!0)}finally{J(!1)}}},Wt=Me=>{l(Me.title),r(Me.format.includes("Solo")?"solo":"duo"),e("studio"),ve(!0),De(0)};return g.jsxs("div",{className:"bg-[#090a10] font-body text-slate-200 min-h-screen relative overflow-x-hidden antialiased selection:bg-cyan-400/25 selection:text-cyan-300",children:[g.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden",children:[g.jsx("div",{className:"absolute -top-[10%] left-[25%] w-[650px] h-[650px] rounded-full bg-cyan-500/[0.05] blur-[150px]"}),g.jsx("div",{className:"absolute top-[35%] -right-[5%] w-[640px] h-[640px] rounded-full bg-purple-600/[0.05] blur-[160px]"}),g.jsx("div",{className:"absolute bottom-[-10%] left-[35%] w-[550px] h-[550px] rounded-full bg-blue-600/[0.03] blur-[160px]"}),g.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px] opacity-60"})]}),g.jsx(Mx,{searchQuery:x,onSearchChange:w}),g.jsx(wx,{activeView:s,onViewChange:Me=>{e(Me),window.scrollTo({top:0,behavior:"smooth"})},isSynthesizing:H,hasScript:!!P,hasAudio:!!M}),g.jsx("div",{className:"pl-60 relative z-10",children:g.jsxs("main",{className:"pt-24 pb-36 px-6 lg:px-12 min-h-screen w-full",children:[Z&&g.jsxs("div",{className:"max-w-4xl mx-auto mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs flex items-center justify-between shadow-lg",children:[g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx("span",{className:"material-symbols-outlined text-rose-400 text-lg",children:"error"}),g.jsx("span",{children:Z})]}),g.jsx("button",{onClick:()=>U(""),className:"text-rose-400 hover:text-white p-1",children:g.jsx("span",{className:"material-symbols-outlined text-sm",children:"close"})})]}),s==="input-source"&&g.jsx(bx,{selectedMode:n,onSelectMode:r,articleTitle:o,articleContent:u,articleUrl:h,onChangeTitle:l,onChangeContent:f,onChangeUrl:m,onExtract:Vt,isExtracting:B,onProceedToScript:dt,isGeneratingScript:j,onSelectSample:lt,samples:_}),s==="script-editor"&&g.jsx(Tx,{scriptData:P,onUpdateSoloScript:xt,onUpdateDuoTurn:wt,onAddDuoTurn:ht,onRegenerateScript:dt,isGeneratingScript:j,onNavigateToVoiceCasting:()=>e("voice-casting"),selectedMode:n,articleTitle:o}),s==="voice-casting"&&g.jsx(Ax,{voices:b,soloVoiceId:y,onChangeSoloVoice:v,alexVoiceId:D,onChangeAlexVoice:F,samVoiceId:T,onChangeSamVoice:L,onSynthesizeAudio:Ot,isSynthesizing:H,selectedMode:n,scriptData:P}),s==="studio"&&g.jsx(sE,{audioData:M,scriptData:P,articleTitle:o,selectedMode:n,currentTime:ze,duration:Be,isPlaying:re,onTogglePlay:qe,onSeek:Le,alexVoiceId:D,samVoiceId:T}),s==="analytics"&&g.jsx(aE,{onSelectEpisode:Wt})]})}),g.jsx(Ex,{audioData:M,articleTitle:o,selectedMode:n,onExport:()=>{if(M!=null&&M.audioUrl){const Me=document.createElement("a");Me.href=M.audioUrl,Me.download="podcast_episode.mp3",Me.click()}else e("studio")},currentTime:ze,duration:Be,isPlaying:re,onTogglePlay:qe,onSeek:Le})]})}Sx.createRoot(document.getElementById("root")).render(g.jsx(px.StrictMode,{children:g.jsx(dE,{})}));
