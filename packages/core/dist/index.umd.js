(function(g,E){typeof exports=="object"&&typeof module<"u"?E(exports):typeof define=="function"&&define.amd?define(["exports"],E):(g=typeof globalThis<"u"?globalThis:g||self,E(g.index={}))})(this,function(g){"use strict";var Ia=Object.defineProperty;var Ca=(g,E,x)=>E in g?Ia(g,E,{enumerable:!0,configurable:!0,writable:!0,value:x}):g[E]=x;var A=(g,E,x)=>(Ca(g,typeof E!="symbol"?E+"":E,x),x);function E(t,e){this.flags=t,this.cursor=e}E.prototype={skip:function(){this.flags.skip=!0},break:function(){this.flags.break=!0},remove:function(){this.flags.remove=!0},replace:function(e){this.flags.replace=e},get parent(){return this.cursor.parent},get depth(){return this.cursor.depth},get level(){return this.cursor.depth+1},get index(){return this.cursor.index}};function x(t,e){return new E(t,e)}function At(t){this.xs=[t],this.top=0}At.prototype={push:function(e){this.top++,this.top<this.xs.length?this.xs[this.top]=e:this.xs.push(e)},pushArrayReverse:function(e){for(var r=e.length-1;r>=0;r--)this.push(e[r])},pop:function(){var e=this.peek();return this.top--,e},peek:function(){return this.xs[this.top]},isEmpty:function(){return this.top===-1}};function ut(t){return new At(t)}function kt(){this.depth=0,this.stack=ut({node:null,index:-1})}kt.prototype={moveDown:function(e){this.depth++,this.stack.push({node:e,index:0})},moveUp:function(){this.depth--,this.stack.pop()},moveNext:function(){this.stack.peek().index++},get parent(){return this.stack.peek().node},get index(){return this.stack.peek().index}};function Ot(){return new kt}function Nt(){this.break=!1,this.skip=!1,this.remove=!1,this.replace=null}Nt.prototype={reset:function(){this.break=!1,this.skip=!1,this.remove=!1,this.replace=null}};function mt(){return new Nt}function yt(t){return t&&t.length!==0}function me(t,e,r){for(var n=mt(),s=Ot(),o=x(n,s),c=ut(t),h=Object.assign({},t);!c.isEmpty();){var f=c.pop();if(f===h){s.moveUp();continue}if(n.reset(),e(f,o),n.break)break;if(!n.remove&&(s.moveNext(),!n.skip)){n.replace&&(f=n.replace);var d=r(f);yt(d)&&(c.push(h),c.pushArrayReverse(d),s.moveDown(f))}}}function ye(t,e,r){for(var n=mt(),s=Ot(),o=x(n,s),c=ut(t),h=ut(null);!c.isEmpty();){var f=c.peek(),d=h.peek(),v=r(f);if(n.reset(),f===d||!yt(v)){if(f===d&&(h.pop(),s.moveUp()),c.pop(),e(f,o),n.break)break;if(n.remove)continue;s.moveNext()}else h.push(f),s.moveDown(f),c.pushArrayReverse(v)}}var $e=32768;function xt(t){this.xs=[t],this.top=0,this.maxLength=0}xt.prototype={enqueue:function(e){this.xs.push(e)},enqueueMultiple:function(e){for(var r=0,n=e.length;r<n;r++)this.enqueue(e[r])},dequeue:function(){var e=this.peek();return this.top++,this.top===$e&&(this.xs=this.xs.slice(this.top),this.top=0),e},peek:function(){return this.xs[this.top]},isEmpty:function(){return this.top===this.xs.length}};function Lt(t){return new xt(t)}function Pt(){this.depth=0,this.index=-1,this.queue=Lt({node:null,arity:1}),this.levelNodes=1,this.nextLevelNodes=0}Pt.prototype={store:function(e,r){this.queue.enqueue({node:e,arity:r}),this.nextLevelNodes+=r},moveNext:function(){this.index++},moveForward:function(){this.queue.peek().arity--,this.levelNodes--,this.queue.peek().arity===0&&(this.index=0,this.queue.dequeue()),this.levelNodes===0&&(this.depth++,this.levelNodes=this.nextLevelNodes,this.nextLevelNodes=0)},get parent(){return this.queue.peek().node}};function _e(){return new Pt}function Me(t,e,r){for(var n=mt(),s=_e(),o=x(n,s),c=Lt(t);!c.isEmpty();){var h=c.dequeue();if(n.reset(),e(h,o),n.break)break;if(!n.remove&&(s.moveNext(),n.replace&&(h=n.replace),!n.skip)){var f=r(h);yt(f)&&(c.enqueueMultiple(f),s.store(h,f.length))}s.moveForward()}}var De=function(e){return e.children};function be(t,e,r){if(t!=null){r=r||{};var n=r.order||"pre",s=r.getChildren||De;n==="pre"?me(t,e,s):n==="post"?ye(t,e,s):n==="bfs"&&Me(t,e,s)}}var G=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Se(t){for(var e=-1,r=t==null?0:t.length,n=0,s=[];++e<r;){var o=t[e];o&&(s[n++]=o)}return s}var we=Se,Ie=Array.isArray,$t=Ie,Ce=typeof G=="object"&&G&&G.Object===Object&&G,Te=Ce,Fe=Te,Ee=typeof self=="object"&&self&&self.Object===Object&&self,Ye=Fe||Ee||Function("return this")(),_t=Ye,Ae=_t,ke=Ae.Symbol,Mt=ke,jt=Mt,Ht=Object.prototype,Oe=Ht.hasOwnProperty,Ne=Ht.toString,et=jt?jt.toStringTag:void 0;function xe(t){var e=Oe.call(t,et),r=t[et];try{t[et]=void 0;var n=!0}catch{}var s=Ne.call(t);return n&&(e?t[et]=r:delete t[et]),s}var Le=xe,Pe=Object.prototype,je=Pe.toString;function He(t){return je.call(t)}var Be=He,Bt=Mt,Ge=Le,Re=Be,Ue="[object Null]",qe="[object Undefined]",Gt=Bt?Bt.toStringTag:void 0;function We(t){return t==null?t===void 0?qe:Ue:Gt&&Gt in Object(t)?Ge(t):Re(t)}var Rt=We;function ze(t){return t!=null&&typeof t=="object"}var Ve=ze,Je=Rt,Ke=Ve,Ze="[object Symbol]";function Xe(t){return typeof t=="symbol"||Ke(t)&&Je(t)==Ze}var ct=Xe,Qe=$t,tr=ct,er=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rr=/^\w*$/;function nr(t,e){if(Qe(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||tr(t)?!0:rr.test(t)||!er.test(t)||e!=null&&t in Object(e)}var sr=nr;function ir(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var ft=ir,ar=Rt,or=ft,ur="[object AsyncFunction]",cr="[object Function]",fr="[object GeneratorFunction]",lr="[object Proxy]";function hr(t){if(!or(t))return!1;var e=ar(t);return e==cr||e==fr||e==ur||e==lr}var Ut=hr,dr=_t,pr=dr["__core-js_shared__"],gr=pr,Dt=gr,qt=function(){var t=/[^.]+$/.exec(Dt&&Dt.keys&&Dt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function vr(t){return!!qt&&qt in t}var mr=vr,yr=Function.prototype,$r=yr.toString;function _r(t){if(t!=null){try{return $r.call(t)}catch{}try{return t+""}catch{}}return""}var Mr=_r,Dr=Ut,br=mr,Sr=ft,wr=Mr,Ir=/[\\^$.*+?()[\]{}|]/g,Cr=/^\[object .+?Constructor\]$/,Tr=Function.prototype,Fr=Object.prototype,Er=Tr.toString,Yr=Fr.hasOwnProperty,Ar=RegExp("^"+Er.call(Yr).replace(Ir,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function kr(t){if(!Sr(t)||br(t))return!1;var e=Dr(t)?Ar:Cr;return e.test(wr(t))}var Or=kr;function Nr(t,e){return t==null?void 0:t[e]}var xr=Nr,Lr=Or,Pr=xr;function jr(t,e){var r=Pr(t,e);return Lr(r)?r:void 0}var Wt=jr,Hr=Wt,Br=Hr(Object,"create"),lt=Br,zt=lt;function Gr(){this.__data__=zt?zt(null):{},this.size=0}var Rr=Gr;function Ur(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var qr=Ur,Wr=lt,zr="__lodash_hash_undefined__",Vr=Object.prototype,Jr=Vr.hasOwnProperty;function Kr(t){var e=this.__data__;if(Wr){var r=e[t];return r===zr?void 0:r}return Jr.call(e,t)?e[t]:void 0}var Zr=Kr,Xr=lt,Qr=Object.prototype,tn=Qr.hasOwnProperty;function en(t){var e=this.__data__;return Xr?e[t]!==void 0:tn.call(e,t)}var rn=en,nn=lt,sn="__lodash_hash_undefined__";function an(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=nn&&e===void 0?sn:e,this}var on=an,un=Rr,cn=qr,fn=Zr,ln=rn,hn=on;function z(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}z.prototype.clear=un,z.prototype.delete=cn,z.prototype.get=fn,z.prototype.has=ln,z.prototype.set=hn;var dn=z;function pn(){this.__data__=[],this.size=0}var gn=pn;function vn(t,e){return t===e||t!==t&&e!==e}var Vt=vn,mn=Vt;function yn(t,e){for(var r=t.length;r--;)if(mn(t[r][0],e))return r;return-1}var ht=yn,$n=ht,_n=Array.prototype,Mn=_n.splice;function Dn(t){var e=this.__data__,r=$n(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Mn.call(e,r,1),--this.size,!0}var bn=Dn,Sn=ht;function wn(t){var e=this.__data__,r=Sn(e,t);return r<0?void 0:e[r][1]}var In=wn,Cn=ht;function Tn(t){return Cn(this.__data__,t)>-1}var Fn=Tn,En=ht;function Yn(t,e){var r=this.__data__,n=En(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var An=Yn,kn=gn,On=bn,Nn=In,xn=Fn,Ln=An;function V(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}V.prototype.clear=kn,V.prototype.delete=On,V.prototype.get=Nn,V.prototype.has=xn,V.prototype.set=Ln;var Pn=V,jn=Wt,Hn=_t,Bn=jn(Hn,"Map"),Gn=Bn,Jt=dn,Rn=Pn,Un=Gn;function qn(){this.size=0,this.__data__={hash:new Jt,map:new(Un||Rn),string:new Jt}}var Wn=qn;function zn(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Vn=zn,Jn=Vn;function Kn(t,e){var r=t.__data__;return Jn(e)?r[typeof e=="string"?"string":"hash"]:r.map}var dt=Kn,Zn=dt;function Xn(t){var e=Zn(this,t).delete(t);return this.size-=e?1:0,e}var Qn=Xn,ts=dt;function es(t){return ts(this,t).get(t)}var rs=es,ns=dt;function ss(t){return ns(this,t).has(t)}var is=ss,as=dt;function os(t,e){var r=as(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var us=os,cs=Wn,fs=Qn,ls=rs,hs=is,ds=us;function J(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}J.prototype.clear=cs,J.prototype.delete=fs,J.prototype.get=ls,J.prototype.has=hs,J.prototype.set=ds;var ps=J,Kt=ps,gs="Expected a function";function bt(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(gs);var r=function(){var n=arguments,s=e?e.apply(this,n):n[0],o=r.cache;if(o.has(s))return o.get(s);var c=t.apply(this,n);return r.cache=o.set(s,c)||o,c};return r.cache=new(bt.Cache||Kt),r}bt.Cache=Kt;var vs=bt,ms=vs,ys=500;function $s(t){var e=ms(t,function(n){return r.size===ys&&r.clear(),n}),r=e.cache;return e}var _s=$s,Ms=_s,Ds=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bs=/\\(\\)?/g,Ss=Ms(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Ds,function(r,n,s,o){e.push(s?o.replace(bs,"$1"):n||r)}),e}),ws=Ss;function Is(t,e){for(var r=-1,n=t==null?0:t.length,s=Array(n);++r<n;)s[r]=e(t[r],r,t);return s}var Cs=Is,Zt=Mt,Ts=Cs,Fs=$t,Es=ct,Ys=1/0,Xt=Zt?Zt.prototype:void 0,Qt=Xt?Xt.toString:void 0;function te(t){if(typeof t=="string")return t;if(Fs(t))return Ts(t,te)+"";if(Es(t))return Qt?Qt.call(t):"";var e=t+"";return e=="0"&&1/t==-Ys?"-0":e}var As=te,ks=As;function Os(t){return t==null?"":ks(t)}var Ns=Os,xs=$t,Ls=sr,Ps=ws,js=Ns;function Hs(t,e){return xs(t)?t:Ls(t,e)?[t]:Ps(js(t))}var Bs=Hs,Gs=ct,Rs=1/0;function Us(t){if(typeof t=="string"||Gs(t))return t;var e=t+"";return e=="0"&&1/t==-Rs?"-0":e}var qs=Us,Ws=Bs,zs=qs;function Vs(t,e){e=Ws(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[zs(e[r++])];return r&&r==n?t:void 0}var Js=Vs,Ks=Js;function Zs(t,e,r){var n=t==null?void 0:Ks(t,e);return n===void 0?r:n}var Xs=Zs;function Qs(t){return t==null}var ti=Qs;const ei=function(t,e={}){let r={},n=[],s=[],o={};const c=function(){r={},n=[],s=[],o={}};c();let{childrenKey:h="children",checkedKey:f="checked",idKey:d="id"}=e,v=0,M=0;const D=function(i={}){h=i.childrenKey||h,f=i.checkedKey||f,d=i.idKey||d},b=function(i,u){i.forEach(function(a){const p=a[d];r[p]=a,a={...a},s.push(a),a.parent=u,a.index=v++;const m=u?u.deepth+1:0;a.deepth=m,M=Math.max(M,m),a.path=u?u.path+"."+a[d]:"0",a.parentIdList=u?[...u.parentIdList,u[d]]:[],o[p]=a,a[h]&&a[h].length>0&&b(a[h],a)})},C=function(i){return i[h]&&i[h].length>0?!i[h].map(a=>F(a[d])).find(a=>!a[f]):!1},O=function(i){c(),Array.isArray(i)&&b(i)};O(t);const j=function(i){var u;return(u=F(i))==null?void 0:u.parentIdList.map(a=>F(a))},X=function(i){const u=F(i);return s.filter(function(a){return a.parent===(u==null?void 0:u.parent)})},N=function(i){let u;if(!i)return console.warn("id\u4E0D\u80FD\u4E3A\u7A7A"),null;if(i instanceof Object)u=i[d];else if(typeof i=="string"||typeof i=="number")u=i;else return console.warn("id\u7C7B\u578B\u975E\u6CD5:",i),null;return u},F=function(i){const u=N(i);return u?o[u]:null},gt=function(i){const u=N(i);return u?r[u]:null},W=function(i){const u=F(i);return u==null?void 0:u.deepth},L=function(i,u){const a=F(i);a&&Object.assign(a,u)},st=function(i,u,a=!1){const p=F(i);p&&(p[f]=u,a&&(p.parentIdList.forEach(m=>{const $=o[m];$[f]=C($)}),S(p,function(m){m[f]=u})))},Q=function(i){const u={};i&&i.forEach(a=>{u[a]=!0}),s.forEach(a=>{a[f]=u[a[d]]||!1})},S=function(i,u){const a=F(i);if(a)u(a),a[h]&&a[h].length>0&&a[h].forEach(function(p){S(p,u)});else throw new Error("\u8282\u70B9\u4E0D\u5B58\u5728:"+i)};return{travelNode:S,getNodeList:(i=!0)=>i?[...s]:[...n],getNodeDescendantList:i=>{const u=[];return S(i,function(a){u.push(a)}),u},getNodeListByFilter:i=>s.filter(i),getMinDeepth:function(){let i=M;for(const u in s){const a=s[u];if(a.checked&&(i=Math.min(i,a.deepth)),i===0)return 0}return i},getSublings:X,getParents:j,getDeepth:W,getNode:F,updateIndexes:O,setChecked:st,setProps:L,travelAllNode:function(i){for(const u in s){const a=s[u],p=gt(a[d]);if(i(a,p)===!1)break}},setOptions:D,resetCheckStatus:Q,getOriginNode:gt}},St=function(t,e,r="children",n="id",s=[],o={flag:!1}){if(t instanceof Array){St({[r]:t},e,r,n,s);return}const c=(t==null?void 0:t[r])||[];for(let h=0;h<c.length;h++){const f=c[h];if(!e(f,s,r,n)){o.flag=!0;break}if(f[r]instanceof Array&&St(f[r],e,r,n,[f,...s],o),o.flag)break}},rt=function(t,e,r=null,n=!1){if(typeof e=="string"&&(e=e.split(",")),!!Array.isArray(e)){for(let s=0;s<e.length;s++){const o=e[s],c=Xs(t,o);if(n?ti(c):!!c)return c}return r}},wt=t=>Object.prototype.toString.call(t)=="[object Object]",ri=(t,e="children",r=!1)=>{const n=[],s=[...t];for(;s.length;){const o=s.shift();n.push(o);const c=o[e];c!=null&&c.length&&(r&&n.pop(),s.unshift(...c))}return n};function ni(t){return t===null}var ee=ni;const re=function(t,e,r,n="_",s=0){t[e]?s<5&&re(t,n+e,r,n,s+1):t[e]=r},si=function(t,e,r){let n=!1;return Array.isArray(t)&&(t={[e]:t},n=!0),be(t,r,{getChildren(s){return s[e]}}),n?t[e]:t},ii=function(t,e){const r={valueGetField:"value",nameGetField:"name",valueSetField:"value",nameSetField:"name",spliterItemValue:",",spliterBetweenItem:/\s+/,defaultLs:["0, \u8BF7\u63D0\u4F9Boptions"],...e||{}};let n;return typeof t=="function"&&(n=t(r)),typeof t=="string"?n=t.trim().split(r.spliterBetweenItem).map(o=>o.trim()):Array.isArray(t)?n=t:Array.isArray(r.defaultLs)?n=r.defaultLs:typeof r.defaultLs=="function"?n=r.defaultLs():n=[{name:"\u8BF7\u901A\u8FC7optionLs\u4F20\u5165\u6570\u7EC4\u6216\u8005\u51FD\u6570",value:-1}],function(o){const c=r.elFormatter;c&&(o=o.map(f=>{let[d,v]=c(f,r,rt);return{value:d,name:v}}));let h=we(o);return h.length!=o.length&&console.warn("options\u4E2D\u5B58\u5728\u7A7A\u9009\u9879",o),o=h,o=o.map(f=>{typeof f=="string"?f=(f+"").split(r.spliterItemValue).map(M=>M.trim()):typeof f=="number"&&(f=[f,f]);let d,v;if(Array.isArray(f)){if([d,v]=f,v===void 0?v=d:d===void 0&&(d=v),ee(d)||ee(v))throw"value\u548Cname\u4E0D\u80FD\u540C\u65F6\u4E3A\u7A7A"}else f?(d=rt(f,r.valueGetField),v=rt(f,r.nameGetField)):(v="\u65E0\u6548options",d="-");return{[r.valueSetField]:d,[r.nameSetField]:v}}),o.forEach(f=>{const d=f[r.valueSetField];typeof d!="number"&&typeof d!="string"&&(console.warn("options\u4E2D\u5B58\u5728\u975E\u6CD5\u7684value,\u9700\u8981\u662Fnumber\u6216\u8005string",f),f[r.valueSetField]=f.value+"")}),o}(n)},ai=function(t,e=null){if(wt(t)||Array.isArray(t))return t;if(typeof t!="string")return console.warn("safeJsonParser error",t),e;try{return JSON.parse(t)}catch{return console.log("json\u89E3\u6790\u5931\u8D25:",t),e}},oi=function(t,e,r=0,n=void 0){if(e.includes(t))return t;{let s=e[r];return s===void 0&&(s=n),s}};function ui(t){return new Promise(function(e,r){var n=typeof t=="string"?t:URL.createObjectURL(t);if(!n)throw new Error("Must use a valid image");var s=document.createElement("img");s.onload=()=>{typeof t!="string"&&URL.revokeObjectURL(n),e({width:s.width,height:s.height})},s.onerror=o=>{typeof t!="string"&&URL.revokeObjectURL(n),r(o)},s.src=n})}function ci(){const t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){const s=t.indexOf("rv:");return parseInt(t.substring(s+3,t.indexOf(".",s)),10)}const n=t.indexOf("Edge/");return n>0?parseInt(t.substring(n+5,t.indexOf(".",n)),10):-1}const fi=ci()!==-1;function ne(...t){let e;Array.isArray(arguments[0])?e=arguments[0]:e=Array.prototype.slice.call(arguments);let r=[];return e.reduce(function(n,s,o,c){return n.then(function(){if(typeof s=="function")try{s=s()}catch(h){return c.splice(1),Promise.reject(h)}else console.warn("map element:"+o+" not function");return s.then(h=>{r[o]=h})})},Promise.resolve(r)).then(function(){return r})}class li extends Promise{constructor(r=void 0){let n,s;super((o,c)=>{n=o,s=c,r&&r(o,c)});A(this,"__resolve");A(this,"__reject");this.__resolve=n,this.__reject=s}static map(r){return ne(r)}static all(r){return Promise.all(r)}resolve(r){this.__resolve(r)}_resolve(r){this.__resolve(r)}reject(r){this.__reject(r)}_reject(r){this.__reject(r)}}const hi=(t,e,r)=>new Promise((n,s)=>{const o=t[Symbol.iterator](),c=h=>{const{value:f,done:d}=o.next();d?n(h):e(h,f,t).then(c)};c(r)}),pt=class{static get fastGbk(){if(!this._fastGbk)throw new Error("\u8BF7\u5148\u8C03\u7528setFaskGbk\u65B9\u6CD5\u8BBE\u7F6EfastGbk::$GBK.setFaskGbk(require('fast-gbk'))");return this._fastGbk}static setFaskGbk(e){this._fastGbk=e}static encode(e){return pt.fastGbk.encode(e)}static decode(e){if(!e||!e.length)return"";typeof e=="string"&&(/^\%/.test(e)?e=e.split("%").splice(1):e=e.split(","));let r="";if(Array.isArray(e))if(typeof e[0]=="number")r=this.fastGbk.decode(e);else{const n=e.map(s=>{typeof s=="number"&&(console.warn("decodeGBK\u4F20\u5165\u7684\u6570\u7EC4\u4E2D\u6709number\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u8FD9\u662F\u4E0D\u5141\u8BB8\u7684\uFF0C\u4F1A\u5BFC\u81F4\u89E3\u7801\u9519\u8BEF"),s=s+"");let o=parseInt(s,16);return isNaN(o)?0:o});r=pt.decode(n)}return r}};let R=pt;A(R,"_fastGbk");const se=new Map;function di(t){if(t===0)return"0";if(t===!1)return"False";if(!t)return"";if(typeof t!="string")throw new Error("\u65E0\u6548\u8F93\u5165");let[e,...r]=t;return e.toUpperCase()+r.join("")}function pi(t,e){if(!t||!e)return"";var r=0,n=0,s="";for(n=0;n<t.length;n++){if(t.charCodeAt(n)>255?r+=2:r++,r>e)return s;s+=t.charAt(n)}return t}const ie=()=>{let t=Math.random().toString(32).substr(2);return se.get(t)?ie():(se.set(t,!0),t)};function gi(t){return R.decode(t)}function vi(t){return R.decode(t)}function mi(t,e="utf-8",r=16){return e.toLowerCase()=="gbk"&&r==16?gi(t):new TextDecoder(e).decode(new Uint8Array(t.map(n=>Number.isFinite(n)?n:parseInt(n,r))))}function yi(t,e="string"){return e=="string"?R.encode(t):R.encode(t).split("%").splice(1)}function $i(t){for(var e=0,r=0;r<t.length;r++){var n=t.charCodeAt(r);n>=1&&n<=126||65376<=n&&n<=65439?e++:e+=2}return e}const _i=(t,e="")=>wt(t)||Array.isArray(t)?JSON.stringify(t):typeof t=="string"?t:(console.warn("safeStringify error(\u6682\u4E0D\u652F\u6301\u7684\u6570\u636E\u7C7B\u578B)",t),e),Mi=/\:\:([-\d\.]+)$/,q=class{constructor(e,r,n=!1,s=null){A(this,"_name");A(this,"_code");A(this,"_silent");const o=this;o._name=e,o._code=r,o._silent=n}static addNameFieldList(e){this.nameFieldList.push(e)}get name(){return this._name}get message(){return this._name}get msg(){return this._name}get code(){return this._code}get cod(){return this._code}get errorCode(){return this._code}get silent(){return this._silent}get silence(){return this._silent}toString2(){const e=this;return`AError:${e.code}-${e.name}`}static fromErrorText(e,r=!1){const n=`${e}-${r?"0":"1"}`;let s=ae[n];if(!s){let o,c;Mi.test(e)?(o=RegExp.$1,c=e.replace(`::${o}`,"")):(o=0,c=e),s=new q(c,o,r),ae[n]=s}return s}static create(e,r=!1){return this.fromObject(e,r)}static getErrorCode(e){return e?e.constructor==q?e._code:this.fromObject(e)._code:0}};let nt=q;A(nt,"nameFieldList",["error","message","msg","errMsg","reason","errorText"]),A(nt,"fromObject",(e,r=!1)=>{const n=q;if(!e)return new q("\u672A\u77E5\u9519\u8BEF",-9999);let s;if(e instanceof Error)return n.fromErrorText(e.message,r);if(typeof e=="string")if(/^(\[|\{)/.test(e))try{e=JSON.parse(e)}catch{s=e}else s=e;else s=rt(e,q.nameFieldList),r||(r=e.silence||e.silent);return!s&&e.data?n.fromObject(e.data):n.fromErrorText(s,r)});const ae={};function Di(t,e,r){var n=-1,s=t.length;e<0&&(e=-e>s?0:s+e),r=r>s?s:r,r<0&&(r+=s),s=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(s);++n<s;)o[n]=t[n+e];return o}var bi=Di,Si=9007199254740991;function wi(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Si}var Ii=wi,Ci=Ut,Ti=Ii;function Fi(t){return t!=null&&Ti(t.length)&&!Ci(t)}var Ei=Fi,Yi=9007199254740991,Ai=/^(?:0|[1-9]\d*)$/;function ki(t,e){var r=typeof t;return e=e==null?Yi:e,!!e&&(r=="number"||r!="symbol"&&Ai.test(t))&&t>-1&&t%1==0&&t<e}var Oi=ki,Ni=Vt,xi=Ei,Li=Oi,Pi=ft;function ji(t,e,r){if(!Pi(r))return!1;var n=typeof e;return(n=="number"?xi(r)&&Li(e,r.length):n=="string"&&e in r)?Ni(r[e],t):!1}var Hi=ji,Bi=/\s/;function Gi(t){for(var e=t.length;e--&&Bi.test(t.charAt(e)););return e}var Ri=Gi,Ui=Ri,qi=/^\s+/;function Wi(t){return t&&t.slice(0,Ui(t)+1).replace(qi,"")}var zi=Wi,Vi=zi,oe=ft,Ji=ct,ue=0/0,Ki=/^[-+]0x[0-9a-f]+$/i,Zi=/^0b[01]+$/i,Xi=/^0o[0-7]+$/i,Qi=parseInt;function ta(t){if(typeof t=="number")return t;if(Ji(t))return ue;if(oe(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=oe(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Vi(t);var r=Zi.test(t);return r||Xi.test(t)?Qi(t.slice(2),r?2:8):Ki.test(t)?ue:+t}var ea=ta,ra=ea,ce=1/0,na=17976931348623157e292;function sa(t){if(!t)return t===0?t:0;if(t=ra(t),t===ce||t===-ce){var e=t<0?-1:1;return e*na}return t===t?t:0}var ia=sa,aa=ia;function oa(t){var e=aa(t),r=e%1;return e===e?r?e-r:e:0}var ua=oa,ca=bi,fa=Hi,la=ua,ha=Math.ceil,da=Math.max;function pa(t,e,r){(r?fa(t,e,r):e===void 0)?e=1:e=da(la(e),0);var n=t==null?0:t.length;if(!n||e<1)return[];for(var s=0,o=0,c=Array(ha(n/e));s<n;)c[o++]=ca(t,s,s+=e);return c}var fe=pa;class It{static strip(e,r=12){return+parseFloat(e.toPrecision(r))}static hexString2DecLs(e){return fe(e,2).map(r=>parseInt(r.join(""),16))}static preppendZero(e,r=2){return Ct(r,e)}static getDec(e){return e-Math.trunc(e)}static toDEC(e,r=16){return Array.isArray(e)?e.map(n=>parseInt(n,r)):parseInt(e,r)}static toHEX(e,r=2,n=10){if(Array.isArray(e))return e.map(s=>Array.isArray(s)?s[0]:this.toHEX(s,length,n));if(/[a-zA-Z]/.test(e+""))throw new Error("\u65E0\u6CD5\u8F6C\u6362\u4E3AHEX:"+e);return e=parseInt(e+"",n),e>=Math.pow(2,8)&&(r=4),ga(e,r)[0]}}function ga(t,e=2){let r=parseInt(t+"").toString(16).toUpperCase(),n=fe(r,e).map(o=>o.join(""));const s=Ct(e,n[0]);return n.splice(0,1,s),n}function Ct(t,e){let r=t-(e+"").length;return r<=0?e+"":Array(r).fill("0").join("")+(e+"")}function le(t,e=12){return typeof t!="number"&&(t=0),+parseFloat(t.toPrecision(e))}function va(t,e=2){typeof t!="number"&&(t=0);const r=le(t).toFixed(e);return parseFloat(r)}const ma=function(t,e=Number.MAX_SAFE_INTEGER,r=0){const n=typeof t=="string";let s=n?It.toDEC(t):t;return typeof r=="number"&&(s=Math.max(r,s)),typeof e=="number"&&(s=Math.min(e,s)),n?It.toHEX(s):s},ya=(t,e=0)=>{if(typeof t=="number")return t;const s=((t+"").includes(".")?parseFloat:parseInt)(t);return isNaN(s)?e:s};var he={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(G,function(){var r=1e3,n=6e4,s=36e5,o="millisecond",c="second",h="minute",f="hour",d="day",v="week",M="month",D="quarter",b="year",C="date",O="Invalid Date",j=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,N={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(y){var l=["th","st","nd","rd"],i=y%100;return"["+y+(l[(i-20)%10]||l[i]||l[0])+"]"}},F=function(y,l,i){var u=String(y);return!u||u.length>=l?y:""+Array(l+1-u.length).join(i)+y},gt={s:F,z:function(y){var l=-y.utcOffset(),i=Math.abs(l),u=Math.floor(i/60),a=i%60;return(l<=0?"+":"-")+F(u,2,"0")+":"+F(a,2,"0")},m:function y(l,i){if(l.date()<i.date())return-y(i,l);var u=12*(i.year()-l.year())+(i.month()-l.month()),a=l.clone().add(u,M),p=i-a<0,m=l.clone().add(u+(p?-1:1),M);return+(-(u+(i-a)/(p?a-m:m-a))||0)},a:function(y){return y<0?Math.ceil(y)||0:Math.floor(y)},p:function(y){return{M,y:b,w:v,d,D:C,h:f,m:h,s:c,ms:o,Q:D}[y]||String(y||"").toLowerCase().replace(/s$/,"")},u:function(y){return y===void 0}},W="en",L={};L[W]=N;var st=function(y){return y instanceof it},Q=function y(l,i,u){var a;if(!l)return W;if(typeof l=="string"){var p=l.toLowerCase();L[p]&&(a=p),i&&(L[p]=i,a=p);var m=l.split("-");if(!a&&m.length>1)return y(m[0])}else{var $=l.name;L[$]=l,a=$}return!u&&a&&(W=a),a||!u&&W},S=function(y,l){if(st(y))return y.clone();var i=typeof l=="object"?l:{};return i.date=y,i.args=arguments,new it(i)},_=gt;_.l=Q,_.i=st,_.w=function(y,l){return S(y,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var it=function(){function y(i){this.$L=Q(i.locale,null,!0),this.parse(i)}var l=y.prototype;return l.parse=function(i){this.$d=function(u){var a=u.date,p=u.utc;if(a===null)return new Date(NaN);if(_.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var m=a.match(j);if(m){var $=m[2]-1||0,I=(m[7]||"0").substring(0,3);return p?new Date(Date.UTC(m[1],$,m[3]||1,m[4]||0,m[5]||0,m[6]||0,I)):new Date(m[1],$,m[3]||1,m[4]||0,m[5]||0,m[6]||0,I)}}return new Date(a)}(i),this.$x=i.x||{},this.init()},l.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},l.$utils=function(){return _},l.isValid=function(){return this.$d.toString()!==O},l.isSame=function(i,u){var a=S(i);return this.startOf(u)<=a&&a<=this.endOf(u)},l.isAfter=function(i,u){return S(i)<this.startOf(u)},l.isBefore=function(i,u){return this.endOf(u)<S(i)},l.$g=function(i,u,a){return _.u(i)?this[u]:this.set(a,i)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(i,u){var a=this,p=!!_.u(u)||u,m=_.p(i),$=function(tt,Y){var B=_.w(a.$u?Date.UTC(a.$y,Y,tt):new Date(a.$y,Y,tt),a);return p?B:B.endOf(d)},I=function(tt,Y){return _.w(a.toDate()[tt].apply(a.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(Y)),a)},w=this.$W,T=this.$M,H=this.$D,P="set"+(this.$u?"UTC":"");switch(m){case b:return p?$(1,0):$(31,11);case M:return p?$(1,T):$(0,T+1);case v:var at=this.$locale().weekStart||0,ot=(w<at?w+7:w)-at;return $(p?H-ot:H+(6-ot),T);case d:case C:return I(P+"Hours",0);case f:return I(P+"Minutes",1);case h:return I(P+"Seconds",2);case c:return I(P+"Milliseconds",3);default:return this.clone()}},l.endOf=function(i){return this.startOf(i,!1)},l.$set=function(i,u){var a,p=_.p(i),m="set"+(this.$u?"UTC":""),$=(a={},a[d]=m+"Date",a[C]=m+"Date",a[M]=m+"Month",a[b]=m+"FullYear",a[f]=m+"Hours",a[h]=m+"Minutes",a[c]=m+"Seconds",a[o]=m+"Milliseconds",a)[p],I=p===d?this.$D+(u-this.$W):u;if(p===M||p===b){var w=this.clone().set(C,1);w.$d[$](I),w.init(),this.$d=w.set(C,Math.min(this.$D,w.daysInMonth())).$d}else $&&this.$d[$](I);return this.init(),this},l.set=function(i,u){return this.clone().$set(i,u)},l.get=function(i){return this[_.p(i)]()},l.add=function(i,u){var a,p=this;i=Number(i);var m=_.p(u),$=function(T){var H=S(p);return _.w(H.date(H.date()+Math.round(T*i)),p)};if(m===M)return this.set(M,this.$M+i);if(m===b)return this.set(b,this.$y+i);if(m===d)return $(1);if(m===v)return $(7);var I=(a={},a[h]=n,a[f]=s,a[c]=r,a)[m]||1,w=this.$d.getTime()+i*I;return _.w(w,this)},l.subtract=function(i,u){return this.add(-1*i,u)},l.format=function(i){var u=this,a=this.$locale();if(!this.isValid())return a.invalidDate||O;var p=i||"YYYY-MM-DDTHH:mm:ssZ",m=_.z(this),$=this.$H,I=this.$m,w=this.$M,T=a.weekdays,H=a.months,P=function(Y,B,Yt,vt){return Y&&(Y[B]||Y(u,p))||Yt[B].slice(0,vt)},at=function(Y){return _.s($%12||12,Y,"0")},ot=a.meridiem||function(Y,B,Yt){var vt=Y<12?"AM":"PM";return Yt?vt.toLowerCase():vt},tt={YY:String(this.$y).slice(-2),YYYY:this.$y,M:w+1,MM:_.s(w+1,2,"0"),MMM:P(a.monthsShort,w,H,3),MMMM:P(H,w),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:P(a.weekdaysMin,this.$W,T,2),ddd:P(a.weekdaysShort,this.$W,T,3),dddd:T[this.$W],H:String($),HH:_.s($,2,"0"),h:at(1),hh:at(2),a:ot($,I,!0),A:ot($,I,!1),m:String(I),mm:_.s(I,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:m};return p.replace(X,function(Y,B){return B||tt[Y]||m.replace(":","")})},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(i,u,a){var p,m=_.p(u),$=S(i),I=($.utcOffset()-this.utcOffset())*n,w=this-$,T=_.m(this,$);return T=(p={},p[b]=T/12,p[M]=T,p[D]=T/3,p[v]=(w-I)/6048e5,p[d]=(w-I)/864e5,p[f]=w/s,p[h]=w/n,p[c]=w/r,p)[m]||w,a?T:_.a(T)},l.daysInMonth=function(){return this.endOf(M).$D},l.$locale=function(){return L[this.$L]},l.locale=function(i,u){if(!i)return this.$L;var a=this.clone(),p=Q(i,u,!0);return p&&(a.$L=p),a},l.clone=function(){return _.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},y}(),Et=it.prototype;return S.prototype=Et,[["$ms",o],["$s",c],["$m",h],["$H",f],["$W",d],["$M",M],["$y",b],["$D",C]].forEach(function(y){Et[y[1]]=function(l){return this.$g(l,y[0],y[1])}}),S.extend=function(y,l){return y.$i||(y(l,it,S),y.$i=!0),S},S.locale=Q,S.isDayjs=st,S.unix=function(y){return S(1e3*y)},S.en=L[W],S.Ls=L,S.p={},S})})(he);const k=he.exports;var de={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(G,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(n,s,o){var c=s.prototype,h=c.format;o.en.formats=r,c.format=function(f){f===void 0&&(f="YYYY-MM-DDTHH:mm:ssZ");var d=this.$locale().formats,v=function(M,D){return M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(b,C,O){var j=O&&O.toUpperCase();return C||D[O]||r[O]||D[j].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(X,N,F){return N||F.slice(1)})})}(f,d===void 0?{}:d);return h.call(this,v)}}})})(de);const $a=de.exports;var pe={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(G,function(){var r="week",n="year";return function(s,o,c){var h=o.prototype;h.week=function(f){if(f===void 0&&(f=null),f!==null)return this.add(7*(f-this.week()),"day");var d=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var v=c(this).startOf(n).add(1,n).date(d),M=c(this).endOf(r);if(v.isBefore(M))return 1}var D=c(this).startOf(n).date(d).startOf(r).subtract(1,"millisecond"),b=this.diff(D,r,!0);return b<0?c(this).startOf("week").week():Math.ceil(b)},h.weeks=function(f){return f===void 0&&(f=null),this.week(f)}}})})(pe);const _a=pe.exports;k.extend($a),k.extend(_a);const K=function(t){const e=new Date;if(t){if(t instanceof Date)return t;if(typeof t=="number"){const r=t+"",n=r.split(""),s=parseInt(n.splice(0,4).join("")),o=parseInt(n.splice(0,2).join(""))-1,c=parseInt(n.splice(0,2).join(""));return r.length==4?(e.setFullYear(s),e):r.length==6?(e.setFullYear(s),e.setMonth(o),e):r.length==8?(e.setFullYear(s),e.setMonth(o),e.setDate(c),e):new Date(t)}else if(typeof t=="string"){if(t=t.trim(),/^\d+$/.test(t))return K(parseInt(t));{const r=t.split(/[-:\sTZ\+年月日时分秒]/),[n=e.getFullYear(),s=e.getMonth()+1,o=e.getDate(),c=e.getHours(),h=e.getMinutes(),f=e.getSeconds()]=r,d=parseInt([n,(s+"").padStart(2,"0"),(o+"").padStart(2,"0")].join(""));if(r.length<=3)return K(d);{const v=K(d);if(!v)throw new Error("\u65E0\u6CD5\u89E3\u6790\u7684\u65E5\u671F\u683C\u5F0F");return v.setHours(c,h,f),v}}}}else return new Date},Tt=K;function Ma(t){var e="";if(typeof t=="string"){let r=t.split("-");r.length==1?t=parseInt(t):r.length==2?e=t+"-01":e=t;const n=Tt(e);return Ft(n)}else if(typeof t=="number"){const r=new Date;return r.setMonth(t-1),Ft(r)}else throw new Error("\u8BF7\u4F20\u5165\u6709\u6548\u7C7B\u578B")}function Ft(t){return t=new Date(Tt(t).getTime()),t.add(1,"month"),t.setDate(0),t.getDate()}const Da=(t,e=!0)=>{typeof t=="string"&&(t=k(t).toDate());const r=t.getDay(),n=new Date(t);n.setDate(t.getDate()-r),n.setHours(0,0,0,0);const s=new Date(n);s.setDate(n.getDate()+6),s.setHours(23,59,59,999);const o=k(t).week(),c=k(n).format("YYYY-MM-DD");return e&&(n.setDate(n.getDate()+1),s.setDate(s.getDate()+1)),{startYYYYMMDD:c,start:n,end:s,thInYear:o}},ge=(t,e,r,n=!0)=>{const o=new Date(t,e-1,1).getDay(),c=1+(r-1)*7-o,h=n?c+1:c;return new Date(t,e-1,h)},ve=t=>{typeof t=="string"&&(t=k(t).toDate());const e=t.getDate(),r=t.getDay();return Math.ceil((e+6-r)/7)};class U{constructor(e){A(this,"_start");A(this,"_end");A(this,"_thInYear");A(this,"_thInMonth");const{start:r,end:n,thInYear:s}=Da(e);this._start=r,this._end=n,this._thInYear=s,this._thInMonth=ve(r)}get start(){return this._start}get startStr(){return k(this.start).format("YYYY-MM-DD")}get end(){return this._end}get endStr(){return k(this.end).format("YYYY-MM-DD")}get thInYear(){return this._thInYear}get thInMonth(){return this._thInMonth}get YYYYMMth(){return`${this.start.getFullYear()}-${this.start.getMonth()+1}-[${this.thInMonth}]`}get YYYYMMthStr(){return`${this.start.getFullYear()}-${this.start.getMonth()+1}/\u7B2C${this.thInMonth}\u5468`}static fromYYYYMMThStr(e){const[r,n,s]=e.split(/[^\d]+/).filter(c=>c),o=ge(parseInt(r),parseInt(n),parseInt(s));return new U(o)}get YYYYMM(){return`${this.start.getFullYear()}-${this.start.getMonth()+1}`}get YYYY(){return this.start.getFullYear()}contains(e){return e>=this.start&&e<=this.end}nextDateWeek(){const e=new Date(this.end.getFullYear(),this.end.getMonth(),this.end.getDate()+1);return new U(e)}prevDateWeek(){const e=new Date(this.start.getFullYear(),this.start.getMonth(),this.start.getDate()-1);return new U(e)}static getListfromRange(e,r){typeof e=="string"&&(e=k(e).toDate()),typeof r=="string"&&(r=k(r).toDate()),e>r&&([e,r]=[r,e]);const n=[];let s=new U(e);for(;!s.contains(r);)n.push(s),s=s.nextDateWeek();return n.push(s),n}static from_yyyy_th(e,r){const n=k(`${e}-01-01`).week(parseInt(r+""));return new U(n.toDate())}toString(){return`
[${this.thInYear}] ${this.startStr} - ${this.endStr}`}}const ba={};class Z extends Date{constructor(...r){super(...r);A(this,"__currentMonth",!1)}static fromYYYY_MM(r){var n=r.replace(/_/g,"-")+"-01";return new Date(n)}static fromDate(r){return new Z(r.getTime())}static fromAny(r){return this.fromDate(K(r))}diff(r,n="day"){let s=this.getTime()-r.getTime();switch(n){case"year":return s/1e3/60/60/24/365;case"month":return s/1e3/60/60/24/30;case"day":return s/1e3/60/60/24;case"hour":return s/1e3/60/60;case"minute":return s/1e3/60;case"second":return s/1e3;case"millisecond":return s}}add(r,n="day"){const s=this.clone();switch(n){case"year":s.setFullYear(this.getFullYear()+r);break;case"month":this.setMonth(this.getMonth()+r);case"day":this.setDate(this.getDate()+r);case"hour":s.setHours(this.getHours()+r);break;case"minute":s.setMinutes(this.getMinutes()+r);break;case"second":s.setSeconds(this.getSeconds()+r);break;case"millisecond":s.setMilliseconds(this.getMilliseconds()+r);break}return s}clone(){return new Z(this.getTime())}setTimeByDate(r){return this.setHours(r.getHours(),r.getMinutes(),r.getSeconds(),r.getSeconds()),this}getDayMountInMonth(){let r=this.clone();return r.setMonth(r.getMonth()+1),r.setDate(0),r.getDate()}setToDayStart(){return this.clearTime()}setToDayEnd(){return this.setHours(23,59,59,999),this}setToMonthStart(){return this.setDate(1),this.setToDayStart()}setToMonthEnd(){return this.setDate(this.getDayMountInMonth()),this.setToDayEnd()}setToYearStart(){const r=this;return r.setMonth(0,1),r.setToDayStart(),r}setToYearEnd(){const r=this;return r.setMonth(12,1),r.setToDayStart(),r.setTime(r.getTime()-1),r}isSameDay(r){let n;typeof r=="number"?n=new Z(r):n=Z.prototype.clone.call(r);let s=n.clone().setToDayStart(),o=this.clone().setToDayStart();return s.getTime()==o.getTime()}clearTime(){return this.setHours(0,0,0,0),this}clearDay(){return this.setDate(1),this}formatToMonth(r="-"){const n=this.getFullYear(),s=this.getMonth()+1;return`${n}${r}${s}`}formatToDay(r="-"){const n=this.getFullYear(),s=this.getMonth()+1,o=this.getDate();return`${n}${r}${s}${r}${o}`}getCalendarDateList(r=!1){var n=this;typeof r>"u"&&(r=!0);var s=ba,o=this.getFullYear()+"-"+(this.getMonth()+1)+"-"+(r?"0":"1");if(s[o])return s[o];let c,h;r?(c=0,h=6):(c=1,h=7);let f=[],d=this.clone().setToMonthStart(),v=this.clone().setToMonthEnd();var M=d.getDay(),D=v.getDay();let b=d.clone().add(c-M-1,"day"),C=v.clone().add(h-D+0,"day"),O=C.diff(b,"day"),j=0,X=n.getMonth();for(;j++<O;){let N=b.clone().add(j,"day");N.getMonth()==X&&(N.__currentMonth=!0),f.push(N)}return s[o]={list:f,firstDateInMonth:d,lastDateInMonth:v,firstDateInView:b,lastDateInView:C}}}const Sa=t=>t.replace(/[^\x00-\xff]/g,"**").length,wa=(t,e)=>(r,n)=>r.trim().split(`
`).map(o=>{const c=o.trim();return c.startsWith("//")?"":c}).filter(o=>!!o).map(o=>{const[c,h,...f]=o.split(/\s+/),v={minWidth:Sa(h)*7+45,key:c,title:h,visible:!1,sum:!1};f.forEach(D=>{if(["center","left"].includes(D))v.align=D;else if(/^(\+|\-)?(\d+)$/.test(D)){const b=RegExp.$1,C=parseInt(RegExp.$2);b==="+"?v.maxWidth=C:b==="-"?v.minWidth=C:v.width=C}else if(["show","hide"].includes(D))v.visible=D=="show";else if(D==="__sum__")v.sum=!0;else if(D.startsWith("#"))D=="#"?v.slot=v.key:v.slot=D.substring(1);else{const b=e[D];b?v.render=b:console.warn("\u672A\u5B9A\u4E49\u7684render:",D)}});const M=t[c];return M&&Object.assign(v,M),v.getValue=function(D){return v.render?v.render(null,{row:D,column:v},!0):D[v.key]},n?n(v,o):v});g.AError=nt,g.BPromise=li,g.Date2=Z,g.DateWeek=U,g.Math2=It,g.all2date=K,g.all2valueName=ii,g.asyncReduce=hi,g.byteArrayToString=mi,g.dayjs2=k,g.encodeStringToGBK=yi,g.firstLetterUppercase=di,g.fromGBKArrayToString=vi,g.getByteLength=$i,g.getDayLengthInMonth=Ft,g.getDayMountByMonth=Ma,g.getImageSize=ui,g.getWeekStartDateFromYYYYMMThInMonth=ge,g.getWeekThInMonth=ve,g.isIE=fi,g.isPlainObject=wt,g.makeTreeDataHelper=ei,g.parse2date=Tt,g.preppendZero=Ct,g.promiseMap=ne,g.randomString=ie,g.safeBindToObject=re,g.safeJsonParser=ai,g.safeParseNumber=ya,g.safeStringify=_i,g.safeValueInList=oi,g.safeValueInRange=ma,g.stripAndFixNumber=va,g.stripNumber=le,g.stripString=pi,g.travelTree=St,g.treeEach=si,g.treeListToFlatList=ri,g.tryGet=rt,g.viewuiColumnFactory=wa,Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
