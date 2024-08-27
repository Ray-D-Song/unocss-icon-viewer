"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const xe=require("react"),Se=require("./icons-aQMqipFK.cjs");var Q={exports:{}},F={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function dr(){if(we)return F;we=1;var C=xe,h=Symbol.for("react.element"),E=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,W=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function P(_,c,S){var p,y={},m=null,V=null;S!==void 0&&(m=""+S),c.key!==void 0&&(m=""+c.key),c.ref!==void 0&&(V=c.ref);for(p in c)R.call(c,p)&&!Y.hasOwnProperty(p)&&(y[p]=c[p]);if(_&&_.defaultProps)for(p in c=_.defaultProps,c)y[p]===void 0&&(y[p]=c[p]);return{$$typeof:h,type:_,key:m,ref:V,props:y,_owner:W.current}}return F.Fragment=E,F.jsx=P,F.jsxs=P,F}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function vr(){return je||(je=1,process.env.NODE_ENV!=="production"&&function(){var C=xe,h=Symbol.for("react.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),_=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),ee=Symbol.iterator,Ce="@@iterator";function Pe(e){if(e===null||typeof e!="object")return null;var r=ee&&e[ee]||e[Ce];return typeof r=="function"?r:null}var w=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function f(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];ke("error",e,t)}}function ke(e,r,t){{var n=w.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ae=!1,De=!1,Fe=!1,Ie=!1,$e=!1,re;re=Symbol.for("react.module.reference");function We(e){return!!(typeof e=="string"||typeof e=="function"||e===R||e===Y||$e||e===W||e===S||e===p||Ie||e===V||Ae||De||Fe||typeof e=="object"&&e!==null&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===P||e.$$typeof===_||e.$$typeof===c||e.$$typeof===re||e.getModuleId!==void 0))}function Ye(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function te(e){return e.displayName||"Context"}function b(e){if(e==null)return null;if(typeof e.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case E:return"Portal";case Y:return"Profiler";case W:return"StrictMode";case S:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:var r=e;return te(r)+".Consumer";case P:var t=e;return te(t._context)+".Provider";case c:return Ye(e,e.render,"ForwardRef");case y:var n=e.displayName||null;return n!==null?n:b(e.type)||"Memo";case m:{var o=e,u=o._payload,i=o._init;try{return b(i(u))}catch{return null}}}return null}var T=Object.assign,k=0,ne,ae,ie,oe,ue,se,le;function fe(){}fe.__reactDisabledLog=!0;function Ve(){{if(k===0){ne=console.log,ae=console.info,ie=console.warn,oe=console.error,ue=console.group,se=console.groupCollapsed,le=console.groupEnd;var e={configurable:!0,enumerable:!0,value:fe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}k++}}function Le(){{if(k--,k===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:ne}),info:T({},e,{value:ae}),warn:T({},e,{value:ie}),error:T({},e,{value:oe}),group:T({},e,{value:ue}),groupCollapsed:T({},e,{value:se}),groupEnd:T({},e,{value:le})})}k<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=w.ReactCurrentDispatcher,B;function L(e,r,t){{if(B===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||""}return`
`+B+e}}var J=!1,N;{var Ne=typeof WeakMap=="function"?WeakMap:Map;N=new Ne}function ce(e,r){if(!e||J)return"";{var t=N.get(e);if(t!==void 0)return t}var n;J=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,Ve();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(v){n=v}Reflect.construct(e,[],i)}else{try{i.call()}catch(v){n=v}e.call(i.prototype)}}else{try{throw Error()}catch(v){n=v}e()}}catch(v){if(v&&n&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,l=d.length-1;s>=1&&l>=0&&a[s]!==d[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==d[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==d[l]){var g=`
`+a[s].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),typeof e=="function"&&N.set(e,g),g}while(s>=1&&l>=0);break}}}finally{J=!1,q.current=u,Le(),Error.prepareStackTrace=o}var x=e?e.displayName||e.name:"",O=x?L(x):"";return typeof e=="function"&&N.set(e,O),O}function Ue(e,r,t){return ce(e,!1)}function Me(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function U(e,r,t){if(e==null)return"";if(typeof e=="function")return ce(e,Me(e));if(typeof e=="string")return L(e);switch(e){case S:return L("Suspense");case p:return L("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Ue(e.render);case y:return U(e.type,r,t);case m:{var n=e,o=n._payload,u=n._init;try{return U(u(o),r,t)}catch{}}}return""}var A=Object.prototype.hasOwnProperty,de={},ve=w.ReactDebugCurrentFrame;function M(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);ve.setExtraStackFrame(t)}else ve.setExtraStackFrame(null)}function qe(e,r,t,n,o){{var u=Function.call.bind(A);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var d=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(M(o),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),M(null)),a instanceof Error&&!(a.message in de)&&(de[a.message]=!0,M(o),f("Failed %s type: %s",t,a.message),M(null))}}}var Be=Array.isArray;function K(e){return Be(e)}function Je(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ke(e){try{return pe(e),!1}catch{return!0}}function pe(e){return""+e}function ge(e){if(Ke(e))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Je(e)),pe(e)}var D=w.ReactCurrentOwner,Ge={key:!0,ref:!0,__self:!0,__source:!0},be,ye,G;G={};function ze(e){if(A.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Xe(e){if(A.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function He(e,r){if(typeof e.ref=="string"&&D.current&&r&&D.current.stateNode!==r){var t=b(D.current.type);G[t]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(D.current.type),e.ref),G[t]=!0)}}function Ze(e,r){{var t=function(){be||(be=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Qe(e,r){{var t=function(){ye||(ye=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var er=function(e,r,t,n,o,u,i){var a={$$typeof:h,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function rr(e,r,t,n,o){{var u,i={},a=null,d=null;t!==void 0&&(ge(t),a=""+t),Xe(r)&&(ge(r.key),a=""+r.key),ze(r)&&(d=r.ref,He(r,o));for(u in r)A.call(r,u)&&!Ge.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||d){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Ze(i,l),d&&Qe(i,l)}return er(e,a,d,o,n,D.current,i)}}var z=w.ReactCurrentOwner,he=w.ReactDebugCurrentFrame;function j(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}var X;X=!1;function H(e){return typeof e=="object"&&e!==null&&e.$$typeof===h}function Ee(){{if(z.current){var e=b(z.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function tr(e){return""}var Re={};function nr(e){{var r=Ee();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function _e(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=nr(r);if(Re[t])return;Re[t]=!0;var n="";e&&e._owner&&e._owner!==z.current&&(n=" It was passed a child from "+b(e._owner.type)+"."),j(e),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),j(null)}}function me(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];H(n)&&_e(n,r)}else if(H(e))e._store&&(e._store.validated=!0);else if(e){var o=Pe(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)H(i.value)&&_e(i.value,r)}}}function ar(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===y))t=r.propTypes;else return;if(t){var n=b(r);qe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var o=b(r);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ir(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){j(e),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),j(null);break}}e.ref!==null&&(j(e),f("Invalid attribute `ref` supplied to `React.Fragment`."),j(null))}}var Te={};function Oe(e,r,t,n,o,u){{var i=We(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=tr();d?a+=d:a+=Ee();var s;e===null?s="null":K(e)?s="array":e!==void 0&&e.$$typeof===h?(s="<"+(b(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=rr(e,r,t,o,u);if(l==null)return l;if(i){var g=r.children;if(g!==void 0)if(n)if(K(g)){for(var x=0;x<g.length;x++)me(g[x],e);Object.freeze&&Object.freeze(g)}else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else me(g,e)}if(A.call(r,"key")){var O=b(e),v=Object.keys(r).filter(function(cr){return cr!=="key"}),Z=v.length>0?"{key: someKey, "+v.join(": ..., ")+": ...}":"{key: someKey}";if(!Te[O+Z]){var fr=v.length>0?"{"+v.join(": ..., ")+": ...}":"{}";f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Z,O,fr,O),Te[O+Z]=!0}}return e===R?ir(l):ar(l),l}}function or(e,r,t){return Oe(e,r,t,!0)}function ur(e,r,t){return Oe(e,r,t,!1)}var sr=ur,lr=or;I.Fragment=R,I.jsx=sr,I.jsxs=lr}()),I}process.env.NODE_ENV==="production"?Q.exports=dr():Q.exports=vr();var $=Q.exports;function pr(C){var h;return $.jsx("div",{className:"dark:bg-[#181818] bg-[#ffffff] w-full h-40 rounded-lg overflow-y-scroll",children:$.jsx("div",{className:"grid grid-cols-6 gap-4",children:(h=Object.keys(Se.icons.icons).slice(0,40))==null?void 0:h.map(E=>$.jsxs("div",{className:"flex flex-col items-center justify-center cursor-pointer p-4px dark:hover:bg-[#2A2A2A] hover:bg-[#EBEAEA]",onClick:R=>C.setIcon(E),children:[$.jsx("div",{className:`mb-2px i-${Se.icons.prefix}-${E}`}),$.jsx("div",{className:"text-xs text-center",children:E})]},E))})})}exports.UnoIconViewer=pr;