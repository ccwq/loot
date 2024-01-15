(function(g,E){typeof exports=="object"&&typeof module<"u"?E(exports):typeof define=="function"&&define.amd?define(["exports"],E):(g=typeof globalThis<"u"?globalThis:g||self,E(g.index={}))})(this,function(g){"use strict";var Ca=Object.defineProperty;var Ta=(g,E,x)=>E in g?Ca(g,E,{enumerable:!0,configurable:!0,writable:!0,value:x}):g[E]=x;var A=(g,E,x)=>(Ta(g,typeof E!="symbol"?E+"":E,x),x);function E(t,e){this.flags=t,this.cursor=e}E.prototype={skip:function(){this.flags.skip=!0},break:function(){this.flags.break=!0},remove:function(){this.flags.remove=!0},replace:function(e){this.flags.replace=e},get parent(){return this.cursor.parent},get depth(){return this.cursor.depth},get level(){return this.cursor.depth+1},get index(){return this.cursor.index}};function x(t,e){return new E(t,e)}function At(t){this.xs=[t],this.top=0}At.prototype={push:function(e){this.top++,this.top<this.xs.length?this.xs[this.top]=e:this.xs.push(e)},pushArrayReverse:function(e){for(var r=e.length-1;r>=0;r--)this.push(e[r])},pop:function(){var e=this.peek();return this.top--,e},peek:function(){return this.xs[this.top]},isEmpty:function(){return this.top===-1}};function ut(t){return new At(t)}function kt(){this.depth=0,this.stack=ut({node:null,index:-1})}kt.prototype={moveDown:function(e){this.depth++,this.stack.push({node:e,index:0})},moveUp:function(){this.depth--,this.stack.pop()},moveNext:function(){this.stack.peek().index++},get parent(){return this.stack.peek().node},get index(){return this.stack.peek().index}};function Ot(){return new kt}function Nt(){this.break=!1,this.skip=!1,this.remove=!1,this.replace=null}Nt.prototype={reset:function(){this.break=!1,this.skip=!1,this.remove=!1,this.replace=null}};function vt(){return new Nt}function yt(t){return t&&t.length!==0}function ve(t,e,r){for(var n=vt(),s=Ot(),o=x(n,s),u=ut(t),l=Object.assign({},t);!u.isEmpty();){var f=u.pop();if(f===l){s.moveUp();continue}if(n.reset(),e(f,o),n.break)break;if(!n.remove&&(s.moveNext(),!n.skip)){n.replace&&(f=n.replace);var h=r(f);yt(h)&&(u.push(l),u.pushArrayReverse(h),s.moveDown(f))}}}function ye(t,e,r){for(var n=vt(),s=Ot(),o=x(n,s),u=ut(t),l=ut(null);!u.isEmpty();){var f=u.peek(),h=l.peek(),p=r(f);if(n.reset(),f===h||!yt(p)){if(f===h&&(l.pop(),s.moveUp()),u.pop(),e(f,o),n.break)break;if(n.remove)continue;s.moveNext()}else l.push(f),s.moveDown(f),u.pushArrayReverse(p)}}var $e=32768;function xt(t){this.xs=[t],this.top=0,this.maxLength=0}xt.prototype={enqueue:function(e){this.xs.push(e)},enqueueMultiple:function(e){for(var r=0,n=e.length;r<n;r++)this.enqueue(e[r])},dequeue:function(){var e=this.peek();return this.top++,this.top===$e&&(this.xs=this.xs.slice(this.top),this.top=0),e},peek:function(){return this.xs[this.top]},isEmpty:function(){return this.top===this.xs.length}};function Lt(t){return new xt(t)}function Pt(){this.depth=0,this.index=-1,this.queue=Lt({node:null,arity:1}),this.levelNodes=1,this.nextLevelNodes=0}Pt.prototype={store:function(e,r){this.queue.enqueue({node:e,arity:r}),this.nextLevelNodes+=r},moveNext:function(){this.index++},moveForward:function(){this.queue.peek().arity--,this.levelNodes--,this.queue.peek().arity===0&&(this.index=0,this.queue.dequeue()),this.levelNodes===0&&(this.depth++,this.levelNodes=this.nextLevelNodes,this.nextLevelNodes=0)},get parent(){return this.queue.peek().node}};function _e(){return new Pt}function Me(t,e,r){for(var n=vt(),s=_e(),o=x(n,s),u=Lt(t);!u.isEmpty();){var l=u.dequeue();if(n.reset(),e(l,o),n.break)break;if(!n.remove&&(s.moveNext(),n.replace&&(l=n.replace),!n.skip)){var f=r(l);yt(f)&&(u.enqueueMultiple(f),s.store(l,f.length))}s.moveForward()}}var De=function(e){return e.children};function be(t,e,r){if(t!=null){r=r||{};var n=r.order||"pre",s=r.getChildren||De;n==="pre"?ve(t,e,s):n==="post"?ye(t,e,s):n==="bfs"&&Me(t,e,s)}}var H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function we(t){for(var e=-1,r=t==null?0:t.length,n=0,s=[];++e<r;){var o=t[e];o&&(s[n++]=o)}return s}var Se=we,Ie=Array.isArray,$t=Ie,Ce=typeof H=="object"&&H&&H.Object===Object&&H,Te=Ce,Fe=Te,Ee=typeof self=="object"&&self&&self.Object===Object&&self,Ye=Fe||Ee||Function("return this")(),_t=Ye,Ae=_t,ke=Ae.Symbol,Mt=ke,jt=Mt,Bt=Object.prototype,Oe=Bt.hasOwnProperty,Ne=Bt.toString,et=jt?jt.toStringTag:void 0;function xe(t){var e=Oe.call(t,et),r=t[et];try{t[et]=void 0;var n=!0}catch{}var s=Ne.call(t);return n&&(e?t[et]=r:delete t[et]),s}var Le=xe,Pe=Object.prototype,je=Pe.toString;function Be(t){return je.call(t)}var Ge=Be,Gt=Mt,He=Le,Re=Ge,Ue="[object Null]",qe="[object Undefined]",Ht=Gt?Gt.toStringTag:void 0;function We(t){return t==null?t===void 0?qe:Ue:Ht&&Ht in Object(t)?He(t):Re(t)}var Rt=We;function ze(t){return t!=null&&typeof t=="object"}var Ve=ze,Je=Rt,Ke=Ve,Ze="[object Symbol]";function Xe(t){return typeof t=="symbol"||Ke(t)&&Je(t)==Ze}var ct=Xe,Qe=$t,tr=ct,er=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rr=/^\w*$/;function nr(t,e){if(Qe(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||tr(t)?!0:rr.test(t)||!er.test(t)||e!=null&&t in Object(e)}var sr=nr;function ir(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var ft=ir,ar=Rt,or=ft,ur="[object AsyncFunction]",cr="[object Function]",fr="[object GeneratorFunction]",lr="[object Proxy]";function hr(t){if(!or(t))return!1;var e=ar(t);return e==cr||e==fr||e==ur||e==lr}var Ut=hr,dr=_t,pr=dr["__core-js_shared__"],gr=pr,Dt=gr,qt=function(){var t=/[^.]+$/.exec(Dt&&Dt.keys&&Dt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function mr(t){return!!qt&&qt in t}var vr=mr,yr=Function.prototype,$r=yr.toString;function _r(t){if(t!=null){try{return $r.call(t)}catch{}try{return t+""}catch{}}return""}var Mr=_r,Dr=Ut,br=vr,wr=ft,Sr=Mr,Ir=/[\\^$.*+?()[\]{}|]/g,Cr=/^\[object .+?Constructor\]$/,Tr=Function.prototype,Fr=Object.prototype,Er=Tr.toString,Yr=Fr.hasOwnProperty,Ar=RegExp("^"+Er.call(Yr).replace(Ir,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function kr(t){if(!wr(t)||br(t))return!1;var e=Dr(t)?Ar:Cr;return e.test(Sr(t))}var Or=kr;function Nr(t,e){return t==null?void 0:t[e]}var xr=Nr,Lr=Or,Pr=xr;function jr(t,e){var r=Pr(t,e);return Lr(r)?r:void 0}var Wt=jr,Br=Wt,Gr=Br(Object,"create"),lt=Gr,zt=lt;function Hr(){this.__data__=zt?zt(null):{},this.size=0}var Rr=Hr;function Ur(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var qr=Ur,Wr=lt,zr="__lodash_hash_undefined__",Vr=Object.prototype,Jr=Vr.hasOwnProperty;function Kr(t){var e=this.__data__;if(Wr){var r=e[t];return r===zr?void 0:r}return Jr.call(e,t)?e[t]:void 0}var Zr=Kr,Xr=lt,Qr=Object.prototype,tn=Qr.hasOwnProperty;function en(t){var e=this.__data__;return Xr?e[t]!==void 0:tn.call(e,t)}var rn=en,nn=lt,sn="__lodash_hash_undefined__";function an(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=nn&&e===void 0?sn:e,this}var on=an,un=Rr,cn=qr,fn=Zr,ln=rn,hn=on;function V(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}V.prototype.clear=un,V.prototype.delete=cn,V.prototype.get=fn,V.prototype.has=ln,V.prototype.set=hn;var dn=V;function pn(){this.__data__=[],this.size=0}var gn=pn;function mn(t,e){return t===e||t!==t&&e!==e}var Vt=mn,vn=Vt;function yn(t,e){for(var r=t.length;r--;)if(vn(t[r][0],e))return r;return-1}var ht=yn,$n=ht,_n=Array.prototype,Mn=_n.splice;function Dn(t){var e=this.__data__,r=$n(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Mn.call(e,r,1),--this.size,!0}var bn=Dn,wn=ht;function Sn(t){var e=this.__data__,r=wn(e,t);return r<0?void 0:e[r][1]}var In=Sn,Cn=ht;function Tn(t){return Cn(this.__data__,t)>-1}var Fn=Tn,En=ht;function Yn(t,e){var r=this.__data__,n=En(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var An=Yn,kn=gn,On=bn,Nn=In,xn=Fn,Ln=An;function J(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}J.prototype.clear=kn,J.prototype.delete=On,J.prototype.get=Nn,J.prototype.has=xn,J.prototype.set=Ln;var Pn=J,jn=Wt,Bn=_t,Gn=jn(Bn,"Map"),Hn=Gn,Jt=dn,Rn=Pn,Un=Hn;function qn(){this.size=0,this.__data__={hash:new Jt,map:new(Un||Rn),string:new Jt}}var Wn=qn;function zn(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Vn=zn,Jn=Vn;function Kn(t,e){var r=t.__data__;return Jn(e)?r[typeof e=="string"?"string":"hash"]:r.map}var dt=Kn,Zn=dt;function Xn(t){var e=Zn(this,t).delete(t);return this.size-=e?1:0,e}var Qn=Xn,ts=dt;function es(t){return ts(this,t).get(t)}var rs=es,ns=dt;function ss(t){return ns(this,t).has(t)}var is=ss,as=dt;function os(t,e){var r=as(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var us=os,cs=Wn,fs=Qn,ls=rs,hs=is,ds=us;function K(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}K.prototype.clear=cs,K.prototype.delete=fs,K.prototype.get=ls,K.prototype.has=hs,K.prototype.set=ds;var ps=K,Kt=ps,gs="Expected a function";function bt(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(gs);var r=function(){var n=arguments,s=e?e.apply(this,n):n[0],o=r.cache;if(o.has(s))return o.get(s);var u=t.apply(this,n);return r.cache=o.set(s,u)||o,u};return r.cache=new(bt.Cache||Kt),r}bt.Cache=Kt;var ms=bt,vs=ms,ys=500;function $s(t){var e=vs(t,function(n){return r.size===ys&&r.clear(),n}),r=e.cache;return e}var _s=$s,Ms=_s,Ds=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bs=/\\(\\)?/g,ws=Ms(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Ds,function(r,n,s,o){e.push(s?o.replace(bs,"$1"):n||r)}),e}),Ss=ws;function Is(t,e){for(var r=-1,n=t==null?0:t.length,s=Array(n);++r<n;)s[r]=e(t[r],r,t);return s}var Cs=Is,Zt=Mt,Ts=Cs,Fs=$t,Es=ct,Ys=1/0,Xt=Zt?Zt.prototype:void 0,Qt=Xt?Xt.toString:void 0;function te(t){if(typeof t=="string")return t;if(Fs(t))return Ts(t,te)+"";if(Es(t))return Qt?Qt.call(t):"";var e=t+"";return e=="0"&&1/t==-Ys?"-0":e}var As=te,ks=As;function Os(t){return t==null?"":ks(t)}var Ns=Os,xs=$t,Ls=sr,Ps=Ss,js=Ns;function Bs(t,e){return xs(t)?t:Ls(t,e)?[t]:Ps(js(t))}var Gs=Bs,Hs=ct,Rs=1/0;function Us(t){if(typeof t=="string"||Hs(t))return t;var e=t+"";return e=="0"&&1/t==-Rs?"-0":e}var qs=Us,Ws=Gs,zs=qs;function Vs(t,e){e=Ws(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[zs(e[r++])];return r&&r==n?t:void 0}var Js=Vs,Ks=Js;function Zs(t,e,r){var n=t==null?void 0:Ks(t,e);return n===void 0?r:n}var Xs=Zs;function Qs(t){return t==null}var ti=Qs;const ei=function(t,e={}){let r={},n=[],s=[],o={};const u=function(){r={},n=[],s=[],o={}};u();let{childrenKey:l="children",checkedKey:f="checked",idKey:h="id"}=e,p=0,M=0;const D=function(i={}){l=i.childrenKey||l,f=i.checkedKey||f,h=i.idKey||h},b=function(i,c){i.forEach(function(a){const m=a[h];r[m]=a,a={...a},s.push(a),a.parent=c,a.index=p++;const v=c?c.deepth+1:0;a.deepth=v,M=Math.max(M,v),a.path=c?c.path+"."+a[h]:"0",a.parentIdList=c?[...c.parentIdList,c[h]]:[],o[m]=a,a[l]&&a[l].length>0&&b(a[l],a)})},C=function(i){return i[l]&&i[l].length>0?!i[l].map(a=>F(a[h])).find(a=>!a[f]):!1},O=function(i){u(),Array.isArray(i)&&b(i)};O(t);const j=function(i){var c;return(c=F(i))==null?void 0:c.parentIdList.map(a=>F(a))},X=function(i){const c=F(i);return s.filter(function(a){return a.parent===(c==null?void 0:c.parent)})},N=function(i){let c;if(!i)return console.warn("id\u4E0D\u80FD\u4E3A\u7A7A"),null;if(i instanceof Object)c=i[h];else if(typeof i=="string"||typeof i=="number")c=i;else return console.warn("id\u7C7B\u578B\u975E\u6CD5:",i),null;return c},F=function(i){const c=N(i);return c?o[c]:null},gt=function(i){const c=N(i);return c?r[c]:null},z=function(i){const c=F(i);return c==null?void 0:c.deepth},L=function(i,c){const a=F(i);a&&Object.assign(a,c)},st=function(i,c,a=!1){const m=F(i);m&&(m[f]=c,a&&(m.parentIdList.forEach(v=>{const $=o[v];$[f]=C($)}),w(m,function(v){v[f]=c})))},Q=function(i){const c={};i&&i.forEach(a=>{c[a]=!0}),s.forEach(a=>{a[f]=c[a[h]]||!1})},w=function(i,c){const a=F(i);if(a)c(a),a[l]&&a[l].length>0&&a[l].forEach(function(m){w(m,c)});else throw new Error("\u8282\u70B9\u4E0D\u5B58\u5728:"+i)};return{travelNode:w,getNodeList:(i=!0)=>i?[...s]:[...n],getNodeDescendantList:i=>{const c=[];return w(i,function(a){c.push(a)}),c},getNodeListByFilter:i=>s.filter(i),getMinDeepth:function(){let i=M;for(const c in s){const a=s[c];if(a.checked&&(i=Math.min(i,a.deepth)),i===0)return 0}return i},getSublings:X,getParents:j,getDeepth:z,getNode:F,updateIndexes:O,setChecked:st,setProps:L,travelAllNode:function(i){for(const c in s){const a=s[c],m=gt(a[h]);if(i(a,m)===!1)break}},setOptions:D,resetCheckStatus:Q,getOriginNode:gt}},wt=function(t,e,r="children",n="id",s=[],o={flag:!1}){if(t instanceof Array)return wt({[r]:t},e,r,n,s);const u=[],l=(t==null?void 0:t[r])||[];for(let f=0;f<l.length;f++){const h=l[f];if(e&&e(h,s,r,n)===!1){o.flag=!0;break}if(u.push(h),h[r]instanceof Array){const p=wt(h[r],e,r,n,[h,...s],o);u.push(...p)}if(o.flag)break}return u},rt=function(t,e,r=null,n=!1){if(typeof e=="string"&&(e=e.split(",")),!!Array.isArray(e)){for(let s=0;s<e.length;s++){const o=e[s],u=Xs(t,o);if(n?ti(u):!!u)return u}return r}},St=t=>Object.prototype.toString.call(t)=="[object Object]",ri=(t,e="children",r=!1)=>{const n=[],s=[...t];for(;s.length;){const o=s.shift();n.push(o);const u=o[e];u!=null&&u.length&&(r&&n.pop(),s.unshift(...u))}return n};function ni(t){return t===null}var ee=ni;const re=function(t,e,r,n="_",s=0){t[e]?s<5&&re(t,n+e,r,n,s+1):t[e]=r},si=function(t,e,r){let n=!1;return Array.isArray(t)&&(t={[e]:t},n=!0),be(t,r,{getChildren(s){return s[e]}}),n?t[e]:t},ii=function(t,e){const r={valueGetField:"value",nameGetField:"name",valueSetField:"value",nameSetField:"name",spliterItemValue:",",spliterBetweenItem:/\s+/,defaultLs:["0, \u8BF7\u63D0\u4F9Boptions"],...e||{}};let n;return typeof t=="function"&&(n=t(r)),typeof t=="string"?n=t.trim().split(r.spliterBetweenItem).map(o=>o.trim()):Array.isArray(t)?n=t:Array.isArray(r.defaultLs)?n=r.defaultLs:typeof r.defaultLs=="function"?n=r.defaultLs():n=[{name:"\u8BF7\u901A\u8FC7optionLs\u4F20\u5165\u6570\u7EC4\u6216\u8005\u51FD\u6570",value:-1}],function(o){const u=r.elFormatter;u&&(o=o.map(f=>{let[h,p]=u(f,r,rt);return{value:h,name:p}}));let l=Se(o);return l.length!=o.length&&console.warn("options\u4E2D\u5B58\u5728\u7A7A\u9009\u9879",o),o=l,o=o.map(f=>{typeof f=="string"?f=(f+"").split(r.spliterItemValue).map(M=>M.trim()):typeof f=="number"&&(f=[f,f]);let h,p;if(Array.isArray(f)){if([h,p]=f,p===void 0?p=h:h===void 0&&(h=p),ee(h)||ee(p))throw"value\u548Cname\u4E0D\u80FD\u540C\u65F6\u4E3A\u7A7A"}else f?(h=rt(f,r.valueGetField),p=rt(f,r.nameGetField)):(p="\u65E0\u6548options",h="-");return{[r.valueSetField]:h,[r.nameSetField]:p}}),o.forEach(f=>{const h=f[r.valueSetField];typeof h!="number"&&typeof h!="string"&&(console.warn("options\u4E2D\u5B58\u5728\u975E\u6CD5\u7684value,\u9700\u8981\u662Fnumber\u6216\u8005string",f),f[r.valueSetField]=f.value+"")}),o}(n)},ai=function(t,e=null){if(St(t)||Array.isArray(t))return t;if(typeof t!="string")return console.warn("safeJsonParser error",t),e;try{return JSON.parse(t)}catch{return console.log("json\u89E3\u6790\u5931\u8D25:",t),e}},oi=function(t,e,r=0,n=void 0){if(e.includes(t))return t;{let s=e[r];return s===void 0&&(s=n),s}};function ui(t){return new Promise(function(e,r){var n=typeof t=="string"?t:URL.createObjectURL(t);if(!n)throw new Error("Must use a valid image");var s=document.createElement("img");s.onload=()=>{typeof t!="string"&&URL.revokeObjectURL(n),e({width:s.width,height:s.height})},s.onerror=o=>{typeof t!="string"&&URL.revokeObjectURL(n),r(o)},s.src=n})}function ci(){if(typeof window>"u")return-1;const t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){const s=t.indexOf("rv:");return parseInt(t.substring(s+3,t.indexOf(".",s)),10)}const n=t.indexOf("Edge/");return n>0?parseInt(t.substring(n+5,t.indexOf(".",n)),10):-1}const fi=ci()!==-1;function ne(...t){let e;Array.isArray(arguments[0])?e=arguments[0]:e=Array.prototype.slice.call(arguments);let r=[];return e.reduce(function(n,s,o,u){return n.then(function(){if(typeof s=="function")try{s=s()}catch(l){return u.splice(1),Promise.reject(l)}else console.warn("map element:"+o+" not function");return s.then(l=>{r[o]=l})})},Promise.resolve(r)).then(function(){return r})}class li extends Promise{constructor(r=void 0){let n,s;super((o,u)=>{n=o,s=u,r&&r(o,u)});A(this,"__resolve");A(this,"__reject");this.__resolve=n,this.__reject=s}static map(r){return ne(r)}static all(r){return Promise.all(r)}resolve(r){this.__resolve(r)}_resolve(r){this.__resolve(r)}reject(r){this.__reject(r)}_reject(r){this.__reject(r)}}const hi=(t,e,r)=>new Promise((n,s)=>{const o=t[Symbol.iterator](),u=l=>{const{value:f,done:h}=o.next();h?n(l):e(l,f,t).then(u)};u(r)}),pt=class{static get fastGbk(){if(!this._fastGbk)throw new Error("\u8BF7\u5148\u8C03\u7528setFaskGbk\u65B9\u6CD5\u8BBE\u7F6EfastGbk::$GBK.setFaskGbk(require('fast-gbk'))");return this._fastGbk}static setFaskGbk(e){this._fastGbk=e}static encode(e){return pt.fastGbk.encode(e)}static decode(e){if(!e||!e.length)return"";typeof e=="string"&&(/^\%/.test(e)?e=e.split("%").splice(1):e=e.split(","));let r="";if(Array.isArray(e))if(typeof e[0]=="number")r=this.fastGbk.decode(e);else{const n=e.map(s=>{typeof s=="number"&&(console.warn("decodeGBK\u4F20\u5165\u7684\u6570\u7EC4\u4E2D\u6709number\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u8FD9\u662F\u4E0D\u5141\u8BB8\u7684\uFF0C\u4F1A\u5BFC\u81F4\u89E3\u7801\u9519\u8BEF"),s=s+"");let o=parseInt(s,16);return isNaN(o)?0:o});r=pt.decode(n)}return r}};let R=pt;A(R,"_fastGbk");const se=new Map;function di(t){if(t===0)return"0";if(t===!1)return"False";if(!t)return"";if(typeof t!="string")throw new Error("\u65E0\u6548\u8F93\u5165");let[e,...r]=t;return e.toUpperCase()+r.join("")}function pi(t,e){if(!t||!e)return"";var r=0,n=0,s="";for(n=0;n<t.length;n++){if(t.charCodeAt(n)>255?r+=2:r++,r>e)return s;s+=t.charAt(n)}return t}const ie=()=>{let t=Math.random().toString(32).substr(2);return se.get(t)?ie():(se.set(t,!0),t)};function gi(t){return R.decode(t)}function mi(t){return R.decode(t)}function vi(t,e="utf-8",r=16){return e.toLowerCase()=="gbk"&&r==16?gi(t):new TextDecoder(e).decode(new Uint8Array(t.map(n=>Number.isFinite(n)?n:parseInt(n,r))))}function yi(t,e="string"){return e=="string"?R.encode(t):R.encode(t).split("%").splice(1)}function $i(t){for(var e=0,r=0;r<t.length;r++){var n=t.charCodeAt(r);n>=1&&n<=126||65376<=n&&n<=65439?e++:e+=2}return e}const _i=(t,e="")=>St(t)||Array.isArray(t)?JSON.stringify(t):typeof t=="string"?t:(console.warn("safeStringify error(\u6682\u4E0D\u652F\u6301\u7684\u6570\u636E\u7C7B\u578B)",t),e),Mi=/\:\:([-\d\.]+)$/,W=class{constructor(e,r,n=!1,s=null){A(this,"_name");A(this,"_code");A(this,"_silent");const o=this;o._name=e,o._code=r,o._silent=n}static addNameFieldList(e){this.nameFieldList.push(e)}get name(){return this._name}get message(){return this._name}get msg(){return this._name}get code(){return this._code}get cod(){return this._code}get errorCode(){return this._code}get silent(){return this._silent}get silence(){return this._silent}toString2(){const e=this;return`AError:${e.code}-${e.name}`}static fromErrorText(e,r=!1){const n=`${e}-${r?"0":"1"}`;let s=ae[n];if(!s){let o,u;Mi.test(e)?(o=RegExp.$1,u=e.replace(`::${o}`,"")):(o=0,u=e),s=new W(u,o,r),ae[n]=s}return s}static create(e,r=!1){return this.fromObject(e,r)}static getErrorCode(e){return e?e.constructor==W?e._code:this.fromObject(e)._code:0}};let nt=W;A(nt,"nameFieldList",["error","message","msg","errMsg","reason","errorText"]),A(nt,"fromObject",(e,r=!1)=>{const n=W;if(!e)return new W("\u672A\u77E5\u9519\u8BEF",-9999);let s;if(e instanceof Error)return n.fromErrorText(e.message,r);if(typeof e=="string")if(/^(\[|\{)/.test(e))try{e=JSON.parse(e)}catch{s=e}else s=e;else s=rt(e,W.nameFieldList),r||(r=e.silence||e.silent);return!s&&e.data?n.fromObject(e.data):n.fromErrorText(s,r)});const ae={};function Di(t,e,r){var n=-1,s=t.length;e<0&&(e=-e>s?0:s+e),r=r>s?s:r,r<0&&(r+=s),s=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(s);++n<s;)o[n]=t[n+e];return o}var bi=Di,wi=9007199254740991;function Si(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=wi}var Ii=Si,Ci=Ut,Ti=Ii;function Fi(t){return t!=null&&Ti(t.length)&&!Ci(t)}var Ei=Fi,Yi=9007199254740991,Ai=/^(?:0|[1-9]\d*)$/;function ki(t,e){var r=typeof t;return e=e==null?Yi:e,!!e&&(r=="number"||r!="symbol"&&Ai.test(t))&&t>-1&&t%1==0&&t<e}var Oi=ki,Ni=Vt,xi=Ei,Li=Oi,Pi=ft;function ji(t,e,r){if(!Pi(r))return!1;var n=typeof e;return(n=="number"?xi(r)&&Li(e,r.length):n=="string"&&e in r)?Ni(r[e],t):!1}var Bi=ji,Gi=/\s/;function Hi(t){for(var e=t.length;e--&&Gi.test(t.charAt(e)););return e}var Ri=Hi,Ui=Ri,qi=/^\s+/;function Wi(t){return t&&t.slice(0,Ui(t)+1).replace(qi,"")}var zi=Wi,Vi=zi,oe=ft,Ji=ct,ue=0/0,Ki=/^[-+]0x[0-9a-f]+$/i,Zi=/^0b[01]+$/i,Xi=/^0o[0-7]+$/i,Qi=parseInt;function ta(t){if(typeof t=="number")return t;if(Ji(t))return ue;if(oe(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=oe(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Vi(t);var r=Zi.test(t);return r||Xi.test(t)?Qi(t.slice(2),r?2:8):Ki.test(t)?ue:+t}var ea=ta,ra=ea,ce=1/0,na=17976931348623157e292;function sa(t){if(!t)return t===0?t:0;if(t=ra(t),t===ce||t===-ce){var e=t<0?-1:1;return e*na}return t===t?t:0}var ia=sa,aa=ia;function oa(t){var e=aa(t),r=e%1;return e===e?r?e-r:e:0}var ua=oa,ca=bi,fa=Bi,la=ua,ha=Math.ceil,da=Math.max;function pa(t,e,r){(r?fa(t,e,r):e===void 0)?e=1:e=da(la(e),0);var n=t==null?0:t.length;if(!n||e<1)return[];for(var s=0,o=0,u=Array(ha(n/e));s<n;)u[o++]=ca(t,s,s+=e);return u}var fe=pa;class It{static strip(e,r=12){return+parseFloat(e.toPrecision(r))}static hexString2DecLs(e){return fe(e,2).map(r=>parseInt(r.join(""),16))}static preppendZero(e,r=2){return Ct(r,e)}static getDec(e){return e-Math.trunc(e)}static toDEC(e,r=16){return Array.isArray(e)?e.map(n=>parseInt(n,r)):parseInt(e,r)}static toHEX(e,r=2,n=10){if(Array.isArray(e))return e.map(s=>Array.isArray(s)?s[0]:this.toHEX(s,length,n));if(/[a-zA-Z]/.test(e+""))throw new Error("\u65E0\u6CD5\u8F6C\u6362\u4E3AHEX:"+e);return e=parseInt(e+"",n),e>=Math.pow(2,8)&&(r=4),ga(e,r)[0]}}function ga(t,e=2){let r=parseInt(t+"").toString(16).toUpperCase(),n=fe(r,e).map(o=>o.join(""));const s=Ct(e,n[0]);return n.splice(0,1,s),n}function Ct(t,e){let r=t-(e+"").length;return r<=0?e+"":Array(r).fill("0").join("")+(e+"")}function le(t,e=12){return typeof t!="number"&&(t=0),+parseFloat(t.toPrecision(e))}function ma(t,e=2){typeof t!="number"&&(t=0);const r=le(t).toFixed(e);return parseFloat(r)}const va=function(t,e=Number.MAX_SAFE_INTEGER,r=0){const n=typeof t=="string";let s=n?It.toDEC(t):t;return typeof r=="number"&&(s=Math.max(r,s)),typeof e=="number"&&(s=Math.min(e,s)),n?It.toHEX(s):s},ya=(t,e=0)=>{if(typeof t=="number")return t;const s=((t+"").includes(".")?parseFloat:parseInt)(t);return isNaN(s)?e:s};function $a(t,e,r){function n(u,l){return Math.floor(Math.random()*(l-u+1))+u}function s(){const u=[];let l=t;for(let f=0;f<e-1;f++){const h=n(r,l-r*(e-1-f));u.push(h),l-=h}return u.push(l),u}let o=0;for(;o<5;){const u=s();if(u.every(l=>l>=r))return u;o++}return[]}var he={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(H,function(){var r=1e3,n=6e4,s=36e5,o="millisecond",u="second",l="minute",f="hour",h="day",p="week",M="month",D="quarter",b="year",C="date",O="Invalid Date",j=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,N={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},F=function(y,d,i){var c=String(y);return!c||c.length>=d?y:""+Array(d+1-c.length).join(i)+y},gt={s:F,z:function(y){var d=-y.utcOffset(),i=Math.abs(d),c=Math.floor(i/60),a=i%60;return(d<=0?"+":"-")+F(c,2,"0")+":"+F(a,2,"0")},m:function y(d,i){if(d.date()<i.date())return-y(i,d);var c=12*(i.year()-d.year())+(i.month()-d.month()),a=d.clone().add(c,M),m=i-a<0,v=d.clone().add(c+(m?-1:1),M);return+(-(c+(i-a)/(m?a-v:v-a))||0)},a:function(y){return y<0?Math.ceil(y)||0:Math.floor(y)},p:function(y){return{M,y:b,w:p,d:h,D:C,h:f,m:l,s:u,ms:o,Q:D}[y]||String(y||"").toLowerCase().replace(/s$/,"")},u:function(y){return y===void 0}},z="en",L={};L[z]=N;var st=function(y){return y instanceof it},Q=function y(d,i,c){var a;if(!d)return z;if(typeof d=="string"){var m=d.toLowerCase();L[m]&&(a=m),i&&(L[m]=i,a=m);var v=d.split("-");if(!a&&v.length>1)return y(v[0])}else{var $=d.name;L[$]=d,a=$}return!c&&a&&(z=a),a||!c&&z},w=function(y,d){if(st(y))return y.clone();var i=typeof d=="object"?d:{};return i.date=y,i.args=arguments,new it(i)},_=gt;_.l=Q,_.i=st,_.w=function(y,d){return w(y,{locale:d.$L,utc:d.$u,x:d.$x,$offset:d.$offset})};var it=function(){function y(i){this.$L=Q(i.locale,null,!0),this.parse(i)}var d=y.prototype;return d.parse=function(i){this.$d=function(c){var a=c.date,m=c.utc;if(a===null)return new Date(NaN);if(_.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var v=a.match(j);if(v){var $=v[2]-1||0,I=(v[7]||"0").substring(0,3);return m?new Date(Date.UTC(v[1],$,v[3]||1,v[4]||0,v[5]||0,v[6]||0,I)):new Date(v[1],$,v[3]||1,v[4]||0,v[5]||0,v[6]||0,I)}}return new Date(a)}(i),this.$x=i.x||{},this.init()},d.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},d.$utils=function(){return _},d.isValid=function(){return this.$d.toString()!==O},d.isSame=function(i,c){var a=w(i);return this.startOf(c)<=a&&a<=this.endOf(c)},d.isAfter=function(i,c){return w(i)<this.startOf(c)},d.isBefore=function(i,c){return this.endOf(c)<w(i)},d.$g=function(i,c,a){return _.u(i)?this[c]:this.set(a,i)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(i,c){var a=this,m=!!_.u(c)||c,v=_.p(i),$=function(tt,Y){var G=_.w(a.$u?Date.UTC(a.$y,Y,tt):new Date(a.$y,Y,tt),a);return m?G:G.endOf(h)},I=function(tt,Y){return _.w(a.toDate()[tt].apply(a.toDate("s"),(m?[0,0,0,0]:[23,59,59,999]).slice(Y)),a)},S=this.$W,T=this.$M,B=this.$D,P="set"+(this.$u?"UTC":"");switch(v){case b:return m?$(1,0):$(31,11);case M:return m?$(1,T):$(0,T+1);case p:var at=this.$locale().weekStart||0,ot=(S<at?S+7:S)-at;return $(m?B-ot:B+(6-ot),T);case h:case C:return I(P+"Hours",0);case f:return I(P+"Minutes",1);case l:return I(P+"Seconds",2);case u:return I(P+"Milliseconds",3);default:return this.clone()}},d.endOf=function(i){return this.startOf(i,!1)},d.$set=function(i,c){var a,m=_.p(i),v="set"+(this.$u?"UTC":""),$=(a={},a[h]=v+"Date",a[C]=v+"Date",a[M]=v+"Month",a[b]=v+"FullYear",a[f]=v+"Hours",a[l]=v+"Minutes",a[u]=v+"Seconds",a[o]=v+"Milliseconds",a)[m],I=m===h?this.$D+(c-this.$W):c;if(m===M||m===b){var S=this.clone().set(C,1);S.$d[$](I),S.init(),this.$d=S.set(C,Math.min(this.$D,S.daysInMonth())).$d}else $&&this.$d[$](I);return this.init(),this},d.set=function(i,c){return this.clone().$set(i,c)},d.get=function(i){return this[_.p(i)]()},d.add=function(i,c){var a,m=this;i=Number(i);var v=_.p(c),$=function(T){var B=w(m);return _.w(B.date(B.date()+Math.round(T*i)),m)};if(v===M)return this.set(M,this.$M+i);if(v===b)return this.set(b,this.$y+i);if(v===h)return $(1);if(v===p)return $(7);var I=(a={},a[l]=n,a[f]=s,a[u]=r,a)[v]||1,S=this.$d.getTime()+i*I;return _.w(S,this)},d.subtract=function(i,c){return this.add(-1*i,c)},d.format=function(i){var c=this,a=this.$locale();if(!this.isValid())return a.invalidDate||O;var m=i||"YYYY-MM-DDTHH:mm:ssZ",v=_.z(this),$=this.$H,I=this.$m,S=this.$M,T=a.weekdays,B=a.months,P=function(Y,G,Yt,mt){return Y&&(Y[G]||Y(c,m))||Yt[G].slice(0,mt)},at=function(Y){return _.s($%12||12,Y,"0")},ot=a.meridiem||function(Y,G,Yt){var mt=Y<12?"AM":"PM";return Yt?mt.toLowerCase():mt},tt={YY:String(this.$y).slice(-2),YYYY:this.$y,M:S+1,MM:_.s(S+1,2,"0"),MMM:P(a.monthsShort,S,B,3),MMMM:P(B,S),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:P(a.weekdaysMin,this.$W,T,2),ddd:P(a.weekdaysShort,this.$W,T,3),dddd:T[this.$W],H:String($),HH:_.s($,2,"0"),h:at(1),hh:at(2),a:ot($,I,!0),A:ot($,I,!1),m:String(I),mm:_.s(I,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:v};return m.replace(X,function(Y,G){return G||tt[Y]||v.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(i,c,a){var m,v=_.p(c),$=w(i),I=($.utcOffset()-this.utcOffset())*n,S=this-$,T=_.m(this,$);return T=(m={},m[b]=T/12,m[M]=T,m[D]=T/3,m[p]=(S-I)/6048e5,m[h]=(S-I)/864e5,m[f]=S/s,m[l]=S/n,m[u]=S/r,m)[v]||S,a?T:_.a(T)},d.daysInMonth=function(){return this.endOf(M).$D},d.$locale=function(){return L[this.$L]},d.locale=function(i,c){if(!i)return this.$L;var a=this.clone(),m=Q(i,c,!0);return m&&(a.$L=m),a},d.clone=function(){return _.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},y}(),Et=it.prototype;return w.prototype=Et,[["$ms",o],["$s",u],["$m",l],["$H",f],["$W",h],["$M",M],["$y",b],["$D",C]].forEach(function(y){Et[y[1]]=function(d){return this.$g(d,y[0],y[1])}}),w.extend=function(y,d){return y.$i||(y(d,it,w),y.$i=!0),w},w.locale=Q,w.isDayjs=st,w.unix=function(y){return w(1e3*y)},w.en=L[z],w.Ls=L,w.p={},w})})(he);const k=he.exports;var de={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(H,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(n,s,o){var u=s.prototype,l=u.format;o.en.formats=r,u.format=function(f){f===void 0&&(f="YYYY-MM-DDTHH:mm:ssZ");var h=this.$locale().formats,p=function(M,D){return M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(b,C,O){var j=O&&O.toUpperCase();return C||D[O]||r[O]||D[j].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(X,N,F){return N||F.slice(1)})})}(f,h===void 0?{}:h);return l.call(this,p)}}})})(de);const _a=de.exports;var pe={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(H,function(){var r="week",n="year";return function(s,o,u){var l=o.prototype;l.week=function(f){if(f===void 0&&(f=null),f!==null)return this.add(7*(f-this.week()),"day");var h=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var p=u(this).startOf(n).add(1,n).date(h),M=u(this).endOf(r);if(p.isBefore(M))return 1}var D=u(this).startOf(n).date(h).startOf(r).subtract(1,"millisecond"),b=this.diff(D,r,!0);return b<0?u(this).startOf("week").week():Math.ceil(b)},l.weeks=function(f){return f===void 0&&(f=null),this.week(f)}}})})(pe);const Ma=pe.exports;k.extend(_a),k.extend(Ma);const Z=function(t){const e=new Date;if(t){if(t instanceof Date)return t;if(typeof t=="number"){const r=t+"",n=r.split(""),s=parseInt(n.splice(0,4).join("")),o=parseInt(n.splice(0,2).join(""))-1,u=parseInt(n.splice(0,2).join(""));return r.length==4?(e.setFullYear(s),e):r.length==6?(e.setFullYear(s),e.setMonth(o-1),e):r.length==8?(e.setFullYear(s),e.setMonth(o),e.setDate(u),e):new Date(t)}else if(typeof t=="string"){if(t=t.trim(),/^\d+$/.test(t))return Z(parseInt(t));{const r=t.split(/[-:\sTZ\+年月日时分秒]/),[n=e.getFullYear(),s=0+1,o=1,u=0,l=0,f=0]=r,h=parseInt([n,(s+"").padStart(2,"0"),(o+"").padStart(2,"0")].join(""));if(r.length<=3)return Z(h);{const p=Z(h);if(!p)throw new Error("\u65E0\u6CD5\u89E3\u6790\u7684\u65E5\u671F\u683C\u5F0F");return p.setHours(u,l,f),p}}}}else return new Date},Tt=Z;function Da(t){var e="";if(typeof t=="string"){let r=t.split("-");r.length==1?t=parseInt(t):r.length==2?e=t+"-01":e=t;const n=Tt(e);return Ft(n)}else if(typeof t=="number"){const r=new Date;return r.setMonth(t-1),Ft(r)}else throw new Error("\u8BF7\u4F20\u5165\u6709\u6548\u7C7B\u578B")}function Ft(t){return t=new Date(Tt(t).getTime()),t.add(1,"month"),t.setDate(0),t.getDate()}const ba=(t,e=!0)=>{typeof t=="string"&&(t=k(t).toDate());const r=t.getDay(),n=new Date(t);n.setDate(t.getDate()-r),n.setHours(0,0,0,0);const s=new Date(n);s.setDate(n.getDate()+6),s.setHours(23,59,59,999);const o=k(t).week(),u=k(n).format("YYYY-MM-DD");return e&&(n.setDate(n.getDate()+1),s.setDate(s.getDate()+1)),{startYYYYMMDD:u,start:n,end:s,thInYear:o}},ge=(t,e,r,n=!0)=>{const o=new Date(t,e-1,1).getDay(),u=1+(r-1)*7-o,l=n?u+1:u;return new Date(t,e-1,l)},me=t=>{typeof t=="string"&&(t=k(t).toDate());const e=t.getDate(),r=t.getDay();return Math.ceil((e+6-r)/7)};class U{constructor(e){A(this,"_start");A(this,"_end");A(this,"_thInYear");A(this,"_thInMonth");const{start:r,end:n,thInYear:s}=ba(e);this._start=r,this._end=n,this._thInYear=s,this._thInMonth=me(r)}get start(){return this._start}get startStr(){return k(this.start).format("YYYY-MM-DD")}get end(){return this._end}get endStr(){return k(this.end).format("YYYY-MM-DD")}get thInYear(){return this._thInYear}get thInMonth(){return this._thInMonth}get YYYYMMth(){return`${this.start.getFullYear()}-${this.start.getMonth()+1}-[${this.thInMonth}]`}get YYYYMMthStr(){return`${this.start.getFullYear()}-${this.start.getMonth()+1}/\u7B2C${this.thInMonth}\u5468`}static fromYYYYMMThStr(e){const[r,n,s]=e.split(/[^\d]+/).filter(u=>u),o=ge(parseInt(r),parseInt(n),parseInt(s));return new U(o)}get YYYYMM(){return`${this.start.getFullYear()}-${this.start.getMonth()+1}`}get YYYY(){return this.start.getFullYear()}contains(e){return e>=this.start&&e<=this.end}nextDateWeek(){const e=new Date(this.end.getFullYear(),this.end.getMonth(),this.end.getDate()+1);return new U(e)}prevDateWeek(){const e=new Date(this.start.getFullYear(),this.start.getMonth(),this.start.getDate()-1);return new U(e)}static getListfromRange(e,r){typeof e=="string"&&(e=k(e).toDate()),typeof r=="string"&&(r=k(r).toDate()),e>r&&([e,r]=[r,e]);const n=[];let s=new U(e);for(;!s.contains(r);)n.push(s),s=s.nextDateWeek();return n.push(s),n}static from_yyyy_th(e,r){const n=k(`${e}-01-01`).week(parseInt(r+""));return new U(n.toDate())}toString(){return`
[${this.thInYear}] ${this.startStr} - ${this.endStr}`}}const wa={};class q extends Date{constructor(...r){super(...r);A(this,"__currentMonth",!1)}static fromYYYY_MM(r){var n=r.replace(/_/g,"-")+"-01";return new q(n)}static fromDate(r){return new q(r.getTime())}static fromAny(r){return this.fromDate(Z(r))}diff(r,n="day"){let s=this.getTime()-r.getTime();switch(n){case"year":return s/1e3/60/60/24/365;case"month":return s/1e3/60/60/24/30;case"day":return s/1e3/60/60/24;case"hour":return s/1e3/60/60;case"minute":return s/1e3/60;case"second":return s/1e3;case"millisecond":return s}}add(r,n="day"){const s=this.clone();switch(n){case"year":s.setFullYear(this.getFullYear()+r);break;case"month":this.setMonth(this.getMonth()+r);case"day":this.setDate(this.getDate()+r);case"hour":s.setHours(this.getHours()+r);break;case"minute":s.setMinutes(this.getMinutes()+r);break;case"second":s.setSeconds(this.getSeconds()+r);break;case"millisecond":s.setMilliseconds(this.getMilliseconds()+r);break}return s}clone(){return new q(this.getTime())}setTimeByDate(r){return this.setHours(r.getHours(),r.getMinutes(),r.getSeconds(),r.getSeconds()),this}getDayMountInMonth(){let r=this.clone();return r.setMonth(r.getMonth()+1),r.setDate(0),r.getDate()}setToDayStart(){return this.clearTime()}setToDayEnd(){return this.setHours(23,59,59,999),this}setToMonthStart(){return this.setDate(1),this.setToDayStart()}setToMonthEnd(){return this.setDate(this.getDayMountInMonth()),this.setToDayEnd()}setToYearStart(){const r=this;return r.setMonth(0,1),r.setToDayStart(),r}setToYearEnd(){const r=this;return r.setMonth(12,1),r.setToDayStart(),r.setTime(r.getTime()-1),r}isSameDay(r){let n;typeof r=="number"?n=new q(r):n=q.prototype.clone.call(r);let s=n.clone().setToDayStart(),o=this.clone().setToDayStart();return s.getTime()==o.getTime()}clearTime(){return this.setHours(0,0,0,0),this}clearDay(){return this.setDate(1),this}formatToMonth(r="-"){const n=this.getFullYear(),s=this.getMonth()+1;return`${n}${r}${s}`}formatToDay(r="-"){const n=this.getFullYear(),s=this.getMonth()+1,o=this.getDate();return`${n}${r}${s}${r}${o}`}getCalendarDateList(r=!1){var n=this;typeof r>"u"&&(r=!0);var s=wa,o=this.getFullYear()+"-"+(this.getMonth()+1)+"-"+(r?"0":"1");if(s[o])return s[o];let u,l;r?(u=0,l=6):(u=1,l=7);let f=[],h=this.clone().setToMonthStart(),p=this.clone().setToMonthEnd();var M=h.getDay(),D=p.getDay();let b=h.clone().add(u-M-1,"day"),C=p.clone().add(l-D+0,"day"),O=C.diff(b,"day"),j=0,X=n.getMonth();for(;j++<O;){let N=b.clone().add(j,"day");N.getMonth()==X&&(N.__currentMonth=!0),f.push(N)}return s[o]={list:f,firstDateInMonth:h,lastDateInMonth:p,firstDateInView:b,lastDateInView:C}}}const Sa=t=>t.replace(/[^\x00-\xff]/g,"**").length,Ia=(t,e)=>(r,n)=>r.trim().split(`
`).map(o=>{const u=o.trim();return u.startsWith("//")?"":u}).filter(o=>!!o).map(o=>{const[u,l,...f]=o.split(/\s+/),p={minWidth:Sa(l)*7+45,key:u,title:l,visible:!1,sum:!1};f.forEach(D=>{if(["center","left"].includes(D))p.align=D;else if(/^(\+|\-)?(\d+)$/.test(D)){const b=RegExp.$1,C=parseInt(RegExp.$2);b==="+"?p.maxWidth=C:b==="-"?p.minWidth=C:p.width=C}else if(["show","hide"].includes(D))p.visible=D=="show";else if(D==="__sum__")p.sum=!0;else if(D.startsWith("#"))D=="#"?p.slot=p.key:p.slot=D.substring(1);else{const b=e[D];b?p.render=b:console.warn("\u672A\u5B9A\u4E49\u7684render:",D)}});const M=t[u];return M&&Object.assign(p,M),p.getValue=function(D){return p.render?p.render(null,{row:D,column:p},!0):D[p.key]},n?n(p,o):p});g.AError=nt,g.BPromise=li,g.Date2=q,g.DateWeek=U,g.Math2=It,g.all2date=Z,g.all2valueName=ii,g.asyncReduce=hi,g.byteArrayToString=vi,g.dayjs2=k,g.encodeStringToGBK=yi,g.firstLetterUppercase=di,g.fromGBKArrayToString=mi,g.getByteLength=$i,g.getDayLengthInMonth=Ft,g.getDayMountByMonth=Da,g.getImageSize=ui,g.getWeekStartDateFromYYYYMMThInMonth=ge,g.getWeekThInMonth=me,g.isIE=fi,g.isPlainObject=St,g.makeTreeDataHelper=ei,g.parse2date=Tt,g.preppendZero=Ct,g.promiseMap=ne,g.randomSegmentation=$a,g.randomString=ie,g.safeBindToObject=re,g.safeJsonParser=ai,g.safeParseNumber=ya,g.safeStringify=_i,g.safeValueInList=oi,g.safeValueInRange=va,g.stripAndFixNumber=ma,g.stripNumber=le,g.stripString=pi,g.travelTree=wt,g.treeEach=si,g.treeListToFlatList=ri,g.tryGet=rt,g.viewuiColumnFactory=Ia,Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
