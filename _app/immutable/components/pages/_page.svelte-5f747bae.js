import{S as ue,i as le,s as fe,C as qt,l as C,m as A,p as S,h as m,q as v,b as D,H as _,J as kt,D as It,E as Ft,F as jt,f as G,t as ee,K as We,n as pe,L as Je,M as Xe,u as Q,a as j,x as ie,v as Z,c as M,y as se,z as ae,N as Mt,O as Ht,w as Vt,A as oe,r as z}from"../../chunks/index-1d50e03e.js";import{B as Wt}from"../../chunks/Button-21dca69e.js";import{c as V}from"../../chunks/singletons-e5e57fbd.js";function ze(t={}){return{scale:1,max:15,reverse:!0,...t}}const Ye=200;function Jt(t,e){let r=ze(e),i=r.reverse?-1:1;function n(f){const c=f.pageX/window.innerWidth,h=f.pageY/window.innerHeight,{max:l,scale:w}=r,I=l*2,R=l-c*I,b=h*I-l;t.style.transform=`perspective(${1e3}px) rotateX(${i*b}deg) rotateY(${i*R}deg) scale3d(${Array(3).fill(w).join(", ")})`}let s;function a(){clearTimeout(s),t.style.willChange="transform",t.style.transition=`${Ye}ms`,s=setTimeout(()=>t.style.transition="0s",Ye)}function o(){a(),t.style.transform=`perspective(${1e3}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`}function u(){a(),t.style.willChange="transform"}return document.addEventListener("mousemove",n),document.addEventListener("mouseleave",o),document.addEventListener("mouseenter",u),{destroy(){document.removeEventListener("mousemove",n),document.removeEventListener("mouseleave",o),document.removeEventListener("mouseleave",u)},update(f){r=ze(f),i=r.reverse?-1:1}}}function Xt(t){let e,r,i,n,s;const a=t[1].default,o=qt(a,t,t[0],null);return{c(){e=C("div"),r=C("div"),o&&o.c(),this.h()},l(u){e=A(u,"DIV",{class:!0});var f=S(e);r=A(f,"DIV",{class:!0});var c=S(r);o&&o.l(c),c.forEach(m),f.forEach(m),this.h()},h(){v(r,"class","dialog svelte-f72upm"),v(e,"class","wrapper svelte-f72upm")},m(u,f){D(u,e,f),_(e,r),o&&o.m(r,null),i=!0,n||(s=kt(Jt.call(null,r)),n=!0)},p(u,[f]){o&&o.p&&(!i||f&1)&&It(o,a,u,u[0],i?jt(a,u[0],f,null):Ft(u[0]),null)},i(u){i||(G(o,u),i=!0)},o(u){ee(o,u),i=!1},d(u){u&&m(e),o&&o.d(u),n=!1,s()}}}function zt(t,e,r){let{$$slots:i={},$$scope:n}=e;return t.$$set=s=>{"$$scope"in s&&r(0,n=s.$$scope)},[n,i]}class Yt extends ue{constructor(e){super(),le(this,e,zt,Xt,fe,{})}}function Kt(t){let e,r;return{c(){e=C("img"),this.h()},l(i){e=A(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){v(e,"class","portrait svelte-1k4l3x"),We(e.src,r=t[0])||v(e,"src",r),v(e,"alt",t[1])},m(i,n){D(i,e,n)},p(i,[n]){n&1&&!We(e.src,r=i[0])&&v(e,"src",r),n&2&&v(e,"alt",i[1])},i:pe,o:pe,d(i){i&&m(e)}}}function Qt(t,e,r){let{imgSrc:i}=e,{imgAlt:n}=e;return t.$$set=s=>{"imgSrc"in s&&r(0,i=s.imgSrc),"imgAlt"in s&&r(1,n=s.imgAlt)},[i,n]}class Zt extends ue{constructor(e){super(),le(this,e,Qt,Kt,fe,{imgSrc:0,imgAlt:1})}}V.disable_scroll_handling;const Gt=V.goto;V.invalidate;V.prefetch;V.prefetch_routes;V.before_navigate;V.after_navigate;function er(t){let e,r,i;return{c(){e=Je("svg"),r=Je("path"),this.h()},l(n){e=Xe(n,"svg",{width:!0,height:!0,"stroke-width":!0,viewBox:!0,fill:!0});var s=S(e);r=Xe(s,"path",{d:!0,stroke:!0,"stroke-linejoin":!0}),S(r).forEach(m),s.forEach(m),this.h()},h(){v(r,"d","M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"),v(r,"stroke","currentColor"),v(r,"stroke-linejoin","round"),v(e,"width",t[0]),v(e,"height",t[1]),v(e,"stroke-width",t[3]),v(e,"viewBox",i="0 0 "+t[0]+" "+t[1]),v(e,"fill",t[2])},m(n,s){D(n,e,s),_(e,r)},p(n,[s]){s&1&&v(e,"width",n[0]),s&2&&v(e,"height",n[1]),s&8&&v(e,"stroke-width",n[3]),s&3&&i!==(i="0 0 "+n[0]+" "+n[1])&&v(e,"viewBox",i),s&4&&v(e,"fill",n[2])},i:pe,o:pe,d(n){n&&m(e)}}}function tr(t,e,r){let{width:i=24}=e,{height:n=24}=e,{fill:s="none"}=e,{strokeWidth:a=1.5}=e;return t.$$set=o=>{"width"in o&&r(0,i=o.width),"height"in o&&r(1,n=o.height),"fill"in o&&r(2,s=o.fill),"strokeWidth"in o&&r(3,a=o.strokeWidth)},[i,n,s,a]}class rr extends ue{constructor(e){super(),le(this,e,tr,er,fe,{width:0,height:1,fill:2,strokeWidth:3})}}function nr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yt={exports:{}},qe={exports:{}},gt=function(e,r){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(r,n)}},ir=gt,ke=Object.prototype.toString,Ie=function(t){return function(e){var r=ke.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function W(t){return t=t.toLowerCase(),function(r){return Ie(r)===t}}function Fe(t){return Array.isArray(t)}function me(t){return typeof t>"u"}function sr(t){return t!==null&&!me(t)&&t.constructor!==null&&!me(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Rt=W("ArrayBuffer");function ar(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Rt(t.buffer),e}function or(t){return typeof t=="string"}function ur(t){return typeof t=="number"}function bt(t){return t!==null&&typeof t=="object"}function de(t){if(Ie(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var lr=W("Date"),fr=W("File"),cr=W("Blob"),dr=W("FileList");function je(t){return ke.call(t)==="[object Function]"}function hr(t){return bt(t)&&je(t.pipe)}function pr(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||ke.call(t)===e||je(t.toString)&&t.toString()===e)}var mr=W("URLSearchParams");function vr(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Er(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Me(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),Fe(t))for(var r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function Ue(){var t={};function e(n,s){de(t[s])&&de(n)?t[s]=Ue(t[s],n):de(n)?t[s]=Ue({},n):Fe(n)?t[s]=n.slice():t[s]=n}for(var r=0,i=arguments.length;r<i;r++)Me(arguments[r],e);return t}function _r(t,e,r){return Me(e,function(n,s){r&&typeof n=="function"?t[s]=ir(n,r):t[s]=n}),t}function wr(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function yr(t,e,r,i){t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function gr(t,e,r){var i,n,s,a={};e=e||{};do{for(i=Object.getOwnPropertyNames(t),n=i.length;n-- >0;)s=i[n],a[s]||(e[s]=t[s],a[s]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function Rr(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var i=t.indexOf(e,r);return i!==-1&&i===r}function br(t){if(!t)return null;var e=t.length;if(me(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var Or=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),g={isArray:Fe,isArrayBuffer:Rt,isBuffer:sr,isFormData:pr,isArrayBufferView:ar,isString:or,isNumber:ur,isObject:bt,isPlainObject:de,isUndefined:me,isDate:lr,isFile:fr,isBlob:cr,isFunction:je,isStream:hr,isURLSearchParams:mr,isStandardBrowserEnv:Er,forEach:Me,merge:Ue,extend:_r,trim:vr,stripBOM:wr,inherits:yr,toFlatObject:gr,kindOf:Ie,kindOfTest:W,endsWith:Rr,toArray:br,isTypedArray:Or,isFileList:dr},Y=g;function Ke(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ot=function(e,r,i){if(!r)return e;var n;if(i)n=i(r);else if(Y.isURLSearchParams(r))n=r.toString();else{var s=[];Y.forEach(r,function(u,f){u===null||typeof u>"u"||(Y.isArray(u)?f=f+"[]":u=[u],Y.forEach(u,function(h){Y.isDate(h)?h=h.toISOString():Y.isObject(h)&&(h=JSON.stringify(h)),s.push(Ke(f)+"="+Ke(h))}))}),n=s.join("&")}if(n){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Cr=g;function ve(){this.handlers=[]}ve.prototype.use=function(e,r,i){return this.handlers.push({fulfilled:e,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};ve.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};ve.prototype.forEach=function(e){Cr.forEach(this.handlers,function(i){i!==null&&e(i)})};var Ar=ve,Sr=g,$r=function(e,r){Sr.forEach(e,function(n,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[s])})},Ct=g;function te(t,e,r,i,n){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),i&&(this.request=i),n&&(this.response=n)}Ct.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var At=te.prototype,St={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){St[t]={value:t}});Object.defineProperties(te,St);Object.defineProperty(At,"isAxiosError",{value:!0});te.from=function(t,e,r,i,n,s){var a=Object.create(At);return Ct.toFlatObject(t,a,function(u){return u!==Error.prototype}),te.call(a,t.message,e,r,i,n),a.name=t.name,s&&Object.assign(a,s),a};var ne=te,$t={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},N=g;function Tr(t,e){e=e||new FormData;var r=[];function i(s){return s===null?"":N.isDate(s)?s.toISOString():N.isArrayBuffer(s)||N.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,a){if(N.isPlainObject(s)||N.isArray(s)){if(r.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);r.push(s),N.forEach(s,function(u,f){if(!N.isUndefined(u)){var c=a?a+"."+f:f,h;if(u&&!a&&typeof u=="object"){if(N.endsWith(f,"{}"))u=JSON.stringify(u);else if(N.endsWith(f,"[]")&&(h=N.toArray(u))){h.forEach(function(l){!N.isUndefined(l)&&e.append(c,i(l))});return}}n(u,c)}}),r.pop()}else e.append(a,i(s))}return n(t),e}var Tt=Tr,ge,Qe;function Pr(){if(Qe)return ge;Qe=1;var t=ne;return ge=function(r,i,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?r(n):i(new t("Request failed with status code "+n.status,[t.ERR_BAD_REQUEST,t.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},ge}var Re,Ze;function xr(){if(Ze)return Re;Ze=1;var t=g;return Re=t.isStandardBrowserEnv()?function(){return{write:function(i,n,s,a,o,u){var f=[];f.push(i+"="+encodeURIComponent(n)),t.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),t.isString(a)&&f.push("path="+a),t.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Re}var Nr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Dr=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},Lr=Nr,Br=Dr,Pt=function(e,r){return e&&!Lr(r)?Br(e,r):r},be,Ge;function Ur(){if(Ge)return be;Ge=1;var t=g,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return be=function(i){var n={},s,a,o;return i&&t.forEach(i.split(`
`),function(f){if(o=f.indexOf(":"),s=t.trim(f.substr(0,o)).toLowerCase(),a=t.trim(f.substr(o+1)),s){if(n[s]&&e.indexOf(s)>=0)return;s==="set-cookie"?n[s]=(n[s]?n[s]:[]).concat([a]):n[s]=n[s]?n[s]+", "+a:a}}),n},be}var Oe,et;function qr(){if(et)return Oe;et=1;var t=g;return Oe=t.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function s(a){var o=a;return r&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=s(window.location.href),function(o){var u=t.isString(o)?s(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),Oe}var Ce,tt;function Ee(){if(tt)return Ce;tt=1;var t=ne,e=g;function r(i){t.call(this,i==null?"canceled":i,t.ERR_CANCELED),this.name="CanceledError"}return e.inherits(r,t,{__CANCEL__:!0}),Ce=r,Ce}var Ae,rt;function kr(){return rt||(rt=1,Ae=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}),Ae}var Se,nt;function it(){if(nt)return Se;nt=1;var t=g,e=Pr(),r=xr(),i=Ot,n=Pt,s=Ur(),a=qr(),o=$t,u=ne,f=Ee(),c=kr();return Se=function(l){return new Promise(function(I,R){var b=l.data,L=l.headers,B=l.responseType,x;function T(){l.cancelToken&&l.cancelToken.unsubscribe(x),l.signal&&l.signal.removeEventListener("abort",x)}t.isFormData(b)&&t.isStandardBrowserEnv()&&delete L["Content-Type"];var d=new XMLHttpRequest;if(l.auth){var J=l.auth.username||"",p=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";L.Authorization="Basic "+btoa(J+":"+p)}var E=n(l.baseURL,l.url);d.open(l.method.toUpperCase(),i(E,l.params,l.paramsSerializer),!0),d.timeout=l.timeout;function F(){if(!!d){var O="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,k=!B||B==="text"||B==="json"?d.responseText:d.response,U={data:k,status:d.status,statusText:d.statusText,headers:O,config:l,request:d};e(function(ye){I(ye),T()},function(ye){R(ye),T()},U),d=null}}if("onloadend"in d?d.onloadend=F:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(F)},d.onabort=function(){!d||(R(new u("Request aborted",u.ECONNABORTED,l,d)),d=null)},d.onerror=function(){R(new u("Network Error",u.ERR_NETWORK,l,d,d)),d=null},d.ontimeout=function(){var k=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded",U=l.transitional||o;l.timeoutErrorMessage&&(k=l.timeoutErrorMessage),R(new u(k,U.clarifyTimeoutError?u.ETIMEDOUT:u.ECONNABORTED,l,d)),d=null},t.isStandardBrowserEnv()){var q=(l.withCredentials||a(E))&&l.xsrfCookieName?r.read(l.xsrfCookieName):void 0;q&&(L[l.xsrfHeaderName]=q)}"setRequestHeader"in d&&t.forEach(L,function(k,U){typeof b>"u"&&U.toLowerCase()==="content-type"?delete L[U]:d.setRequestHeader(U,k)}),t.isUndefined(l.withCredentials)||(d.withCredentials=!!l.withCredentials),B&&B!=="json"&&(d.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&d.addEventListener("progress",l.onDownloadProgress),typeof l.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",l.onUploadProgress),(l.cancelToken||l.signal)&&(x=function(O){!d||(R(!O||O&&O.type?new f:O),d.abort(),d=null)},l.cancelToken&&l.cancelToken.subscribe(x),l.signal&&(l.signal.aborted?x():l.signal.addEventListener("abort",x))),b||(b=null);var X=c(E);if(X&&["http","https","file"].indexOf(X)===-1){R(new u("Unsupported protocol "+X+":",u.ERR_BAD_REQUEST,l));return}d.send(b)})},Se}var $e,st;function Ir(){return st||(st=1,$e=null),$e}var y=g,at=$r,ot=ne,Fr=$t,jr=Tt,Mr={"Content-Type":"application/x-www-form-urlencoded"};function ut(t,e){!y.isUndefined(t)&&y.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Hr(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=it()),t}function Vr(t,e,r){if(y.isString(t))try{return(e||JSON.parse)(t),y.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(t)}var _e={transitional:Fr,adapter:Hr(),transformRequest:[function(e,r){if(at(r,"Accept"),at(r,"Content-Type"),y.isFormData(e)||y.isArrayBuffer(e)||y.isBuffer(e)||y.isStream(e)||y.isFile(e)||y.isBlob(e))return e;if(y.isArrayBufferView(e))return e.buffer;if(y.isURLSearchParams(e))return ut(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=y.isObject(e),n=r&&r["Content-Type"],s;if((s=y.isFileList(e))||i&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return jr(s?{"files[]":e}:e,a&&new a)}else if(i||n==="application/json")return ut(r,"application/json"),Vr(e);return e}],transformResponse:[function(e){var r=this.transitional||_e.transitional,i=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&y.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?ot.from(a,ot.ERR_BAD_RESPONSE,this,null,this.response):a}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ir()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};y.forEach(["delete","get","head"],function(e){_e.headers[e]={}});y.forEach(["post","put","patch"],function(e){_e.headers[e]=y.merge(Mr)});var He=_e,Wr=g,Jr=He,Xr=function(e,r,i){var n=this||Jr;return Wr.forEach(i,function(a){e=a.call(n,e,r)}),e},Te,lt;function xt(){return lt||(lt=1,Te=function(e){return!!(e&&e.__CANCEL__)}),Te}var ft=g,Pe=Xr,zr=xt(),Yr=He,Kr=Ee();function xe(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Kr}var Qr=function(e){xe(e),e.headers=e.headers||{},e.data=Pe.call(e,e.data,e.headers,e.transformRequest),e.headers=ft.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ft.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||Yr.adapter;return r(e).then(function(n){return xe(e),n.data=Pe.call(e,n.data,n.headers,e.transformResponse),n},function(n){return zr(n)||(xe(e),n&&n.response&&(n.response.data=Pe.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},P=g,Nt=function(e,r){r=r||{};var i={};function n(c,h){return P.isPlainObject(c)&&P.isPlainObject(h)?P.merge(c,h):P.isPlainObject(h)?P.merge({},h):P.isArray(h)?h.slice():h}function s(c){if(P.isUndefined(r[c])){if(!P.isUndefined(e[c]))return n(void 0,e[c])}else return n(e[c],r[c])}function a(c){if(!P.isUndefined(r[c]))return n(void 0,r[c])}function o(c){if(P.isUndefined(r[c])){if(!P.isUndefined(e[c]))return n(void 0,e[c])}else return n(void 0,r[c])}function u(c){if(c in r)return n(e[c],r[c]);if(c in e)return n(void 0,e[c])}var f={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u};return P.forEach(Object.keys(e).concat(Object.keys(r)),function(h){var l=f[h]||s,w=l(h);P.isUndefined(w)&&l!==u||(i[h]=w)}),i},Ne,ct;function Dt(){return ct||(ct=1,Ne={version:"0.27.2"}),Ne}var Zr=Dt().version,H=ne,Ve={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Ve[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});var dt={};Ve.transitional=function(e,r,i){function n(s,a){return"[Axios v"+Zr+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,o){if(e===!1)throw new H(n(a," has been removed"+(r?" in "+r:"")),H.ERR_DEPRECATED);return r&&!dt[a]&&(dt[a]=!0,console.warn(n(a," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(s,a,o):!0}};function Gr(t,e,r){if(typeof t!="object")throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(t),n=i.length;n-- >0;){var s=i[n],a=e[s];if(a){var o=t[s],u=o===void 0||a(o,s,t);if(u!==!0)throw new H("option "+s+" must be "+u,H.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new H("Unknown option "+s,H.ERR_BAD_OPTION)}}var en={assertOptions:Gr,validators:Ve},Lt=g,tn=Ot,ht=Ar,pt=Qr,we=Nt,rn=Pt,Bt=en,K=Bt.validators;function re(t){this.defaults=t,this.interceptors={request:new ht,response:new ht}}re.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=we(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var i=r.transitional;i!==void 0&&Bt.assertOptions(i,{silentJSONParsing:K.transitional(K.boolean),forcedJSONParsing:K.transitional(K.boolean),clarifyTimeoutError:K.transitional(K.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(r)===!1||(s=s&&w.synchronous,n.unshift(w.fulfilled,w.rejected))});var a=[];this.interceptors.response.forEach(function(w){a.push(w.fulfilled,w.rejected)});var o;if(!s){var u=[pt,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(a),o=Promise.resolve(r);u.length;)o=o.then(u.shift(),u.shift());return o}for(var f=r;n.length;){var c=n.shift(),h=n.shift();try{f=c(f)}catch(l){h(l);break}}try{o=pt(f)}catch(l){return Promise.reject(l)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};re.prototype.getUri=function(e){e=we(this.defaults,e);var r=rn(e.baseURL,e.url);return tn(r,e.params,e.paramsSerializer)};Lt.forEach(["delete","get","head","options"],function(e){re.prototype[e]=function(r,i){return this.request(we(i||{},{method:e,url:r,data:(i||{}).data}))}});Lt.forEach(["post","put","patch"],function(e){function r(i){return function(s,a,o){return this.request(we(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}re.prototype[e]=r(),re.prototype[e+"Form"]=r(!0)});var nn=re,De,mt;function sn(){if(mt)return De;mt=1;var t=Ee();function e(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(a){i=a});var n=this;this.promise.then(function(s){if(!!n._listeners){var a,o=n._listeners.length;for(a=0;a<o;a++)n._listeners[a](s);n._listeners=null}}),this.promise.then=function(s){var a,o=new Promise(function(u){n.subscribe(u),a=u}).then(s);return o.cancel=function(){n.unsubscribe(a)},o},r(function(a){n.reason||(n.reason=new t(a),i(n.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},e.prototype.unsubscribe=function(i){if(!!this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},e.source=function(){var i,n=new e(function(a){i=a});return{token:n,cancel:i}},De=e,De}var Le,vt;function an(){return vt||(vt=1,Le=function(e){return function(i){return e.apply(null,i)}}),Le}var Be,Et;function on(){if(Et)return Be;Et=1;var t=g;return Be=function(r){return t.isObject(r)&&r.isAxiosError===!0},Be}var _t=g,un=gt,he=nn,ln=Nt,fn=He;function Ut(t){var e=new he(t),r=un(he.prototype.request,e);return _t.extend(r,he.prototype,e),_t.extend(r,e),r.create=function(n){return Ut(ln(t,n))},r}var $=Ut(fn);$.Axios=he;$.CanceledError=Ee();$.CancelToken=sn();$.isCancel=xt();$.VERSION=Dt().version;$.toFormData=Tt;$.AxiosError=ne;$.Cancel=$.CanceledError;$.all=function(e){return Promise.all(e)};$.spread=an();$.isAxiosError=on();qe.exports=$;qe.exports.default=$;(function(t){t.exports=qe.exports})(yt);const wt=nr(yt.exports);function cn(t){let e,r=(t[0]>0?t[0]:"")+"",i,n,s,a,o,u;return s=new rr({props:{fill:t[1]?"var(--color-accent)":"none"}}),{c(){e=C("div"),i=Q(r),n=j(),ie(s.$$.fragment),this.h()},l(f){e=A(f,"DIV",{class:!0});var c=S(e);i=Z(c,r),n=M(c),se(s.$$.fragment,c),c.forEach(m),this.h()},h(){v(e,"class","like-button svelte-1pcz0dp")},m(f,c){D(f,e,c),_(e,i),_(e,n),ae(s,e,null),a=!0,o||(u=Mt(e,"click",Ht(t[2]),{once:!0}),o=!0)},p(f,[c]){(!a||c&1)&&r!==(r=(f[0]>0?f[0]:"")+"")&&Vt(i,r);const h={};c&2&&(h.fill=f[1]?"var(--color-accent)":"none"),s.$set(h)},i(f){a||(G(s.$$.fragment,f),a=!0)},o(f){ee(s.$$.fragment,f),a=!1},d(f){f&&m(e),oe(s),o=!1,u()}}}function dn(t,e,r){let i=0,n=!1;return wt.get("https://api.magne.dev/get-likes").then(a=>r(0,i=a.data.likes)),[i,n,()=>{wt.post("https://api.magne.dev/add-like").then(a=>r(0,i=a.data.likes)),r(1,n=!0)}]}class hn extends ue{constructor(e){super(),le(this,e,dn,cn,fe,{})}}function pn(t){let e;return{c(){e=Q("Hello! \u{1F44B}")},l(r){e=Z(r,"Hello! \u{1F44B}")},m(r,i){D(r,e,i)},d(r){r&&m(e)}}}function mn(t){let e,r,i,n,s,a,o,u,f,c,h,l,w,I,R,b,L,B,x,T,d,J;return b=new Zt({props:{imgSrc:"https://avatars.githubusercontent.com/u/46494695",imgAlt:"Portrait of Magne Tenstad"}}),d=new Wt({props:{onClick:t[0],pulse:!0,$$slots:{default:[pn]},$$scope:{ctx:t}}}),{c(){e=C("div"),r=C("h1"),i=Q("Hey, I'm Magne Tenstad \u{1F44B}"),n=j(),s=C("ul"),a=C("li"),o=Q("CS student at NTNU"),u=j(),f=C("li"),c=Q("Proficient game and web developer"),h=j(),l=C("li"),w=Q("Open to work this summer"),I=j(),R=C("div"),ie(b.$$.fragment),L=j(),B=C("br"),x=j(),T=C("div"),ie(d.$$.fragment),this.h()},l(p){e=A(p,"DIV",{style:!0});var E=S(e);r=A(E,"H1",{});var F=S(r);i=Z(F,"Hey, I'm Magne Tenstad \u{1F44B}"),F.forEach(m),n=M(E),s=A(E,"UL",{});var q=S(s);a=A(q,"LI",{});var X=S(a);o=Z(X,"CS student at NTNU"),X.forEach(m),u=M(q),f=A(q,"LI",{});var O=S(f);c=Z(O,"Proficient game and web developer"),O.forEach(m),h=M(q),l=A(q,"LI",{});var k=S(l);w=Z(k,"Open to work this summer"),k.forEach(m),q.forEach(m),I=M(E),R=A(E,"DIV",{class:!0});var U=S(R);se(b.$$.fragment,U),U.forEach(m),E.forEach(m),L=M(p),B=A(p,"BR",{}),x=M(p),T=A(p,"DIV",{style:!0});var ce=S(T);se(d.$$.fragment,ce),ce.forEach(m),this.h()},h(){v(R,"class","portrait-wrapper svelte-14rcusn"),z(e,"max-width","80%"),z(e,"transform","translateZ(10px)"),z(T,"width","100%"),z(T,"display","flex"),z(T,"justify-content","center"),z(T,"transform","translateZ(20px)")},m(p,E){D(p,e,E),_(e,r),_(r,i),_(e,n),_(e,s),_(s,a),_(a,o),_(s,u),_(s,f),_(f,c),_(s,h),_(s,l),_(l,w),_(e,I),_(e,R),ae(b,R,null),D(p,L,E),D(p,B,E),D(p,x,E),D(p,T,E),ae(d,T,null),J=!0},p(p,E){const F={};E&2&&(F.$$scope={dirty:E,ctx:p}),d.$set(F)},i(p){J||(G(b.$$.fragment,p),G(d.$$.fragment,p),J=!0)},o(p){ee(b.$$.fragment,p),ee(d.$$.fragment,p),J=!1},d(p){p&&m(e),oe(b),p&&m(L),p&&m(B),p&&m(x),p&&m(T),oe(d)}}}function vn(t){let e,r,i,n,s;return r=new hn({}),n=new Yt({props:{$$slots:{default:[mn]},$$scope:{ctx:t}}}),{c(){e=C("div"),ie(r.$$.fragment),i=j(),ie(n.$$.fragment),this.h()},l(a){e=A(a,"DIV",{class:!0});var o=S(e);se(r.$$.fragment,o),i=M(o),se(n.$$.fragment,o),o.forEach(m),this.h()},h(){v(e,"class","wrapper svelte-14rcusn")},m(a,o){D(a,e,o),ae(r,e,null),_(e,i),ae(n,e,null),s=!0},p(a,[o]){const u={};o&2&&(u.$$scope={dirty:o,ctx:a}),n.$set(u)},i(a){s||(G(r.$$.fragment,a),G(n.$$.fragment,a),s=!0)},o(a){ee(r.$$.fragment,a),ee(n.$$.fragment,a),s=!1},d(a){a&&m(e),oe(r),oe(n)}}}function En(t){return[()=>Gt("/chat")]}class gn extends ue{constructor(e){super(),le(this,e,En,vn,fe,{})}}export{gn as default};
