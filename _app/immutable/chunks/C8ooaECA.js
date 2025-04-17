import{al as ql,H as $l,P as Zr,k as xt,ac as zl,I as Hl,g as ho,x as Kl,M as Gl,O as fo,Q as ts,W as tn,af as Wl,R as Aa,T as wa,V as Ql,aw as es,aj as Ra,F as mo,ax as Xl,$ as Yl,C as po,ay as Jl,az as Zl,ai as tc,aA as ec,aq as nc,aB as rc,aC as sc,ad as ic,z as oc}from"./ksq3ZuxP.js";function _p(n,t){return t}function ac(n,t,e,r){for(var i=[],o=t.length,a=0;a<o;a++)Zl(t[a].e,i,!0);var c=o>0&&i.length===0&&e!==null;if(c){var h=e.parentNode;tc(h),h.append(e),r.clear(),zt(n,t[0].prev,t[o-1].next)}ec(i,()=>{for(var d=0;d<o;d++){var m=t[d];c||(r.delete(m.k),zt(n,m.prev,m.next)),nc(m.e,!c)}})}function yp(n,t,e,r,i,o=null){var a=n,c={flags:t,items:new Map,first:null};{var h=n;a=xt?Zr(zl(h)):h.appendChild(ql())}xt&&Hl();var d=null,m=!1,I=Kl(()=>{var w=e();return oc(w)?w:w==null?[]:Ra(w)});$l(()=>{var w=ho(I),S=w.length;if(m&&S===0)return;m=S===0;let V=!1;if(xt){var k=a.data===Gl;k!==(S===0)&&(a=fo(),Zr(a),ts(!1),V=!0)}if(xt){for(var D=null,O,U=0;U<S;U++){if(tn.nodeType===8&&tn.data===Wl){a=tn,V=!0,ts(!1);break}var H=w[U],Q=r(H,U);O=Sa(tn,c,D,null,H,Q,U,i,t,e),c.items.set(Q,O),D=O}S>0&&Zr(fo())}xt||uc(w,c,a,i,t,r,e),o!==null&&(S===0?d?Aa(d):d=wa(()=>o(a)):d!==null&&Ql(d,()=>{d=null})),V&&ts(!0),ho(I)}),xt&&(a=tn)}function uc(n,t,e,r,i,o,a){var c=n.length,h=t.items,d=t.first,m=d,I,w=null,S=[],V=[],k,D,O,U;for(U=0;U<c;U+=1){if(k=n[U],D=o(k,U),O=h.get(D),O===void 0){var H=m?m.e.nodes_start:e;w=Sa(H,t,w,w===null?t.first:w.next,k,D,U,r,i,a),h.set(D,w),S=[],V=[],m=w.next;continue}if(lc(O,k,U),(O.e.f&es)!==0&&Aa(O.e),O!==m){if(I!==void 0&&I.has(O)){if(S.length<V.length){var Q=V[0],ot;w=Q.prev;var et=S[0],E=S[S.length-1];for(ot=0;ot<S.length;ot+=1)go(S[ot],Q,e);for(ot=0;ot<V.length;ot+=1)I.delete(V[ot]);zt(t,et.prev,E.next),zt(t,w,et),zt(t,E,Q),m=Q,w=E,U-=1,S=[],V=[]}else I.delete(O),go(O,m,e),zt(t,O.prev,O.next),zt(t,O,w===null?t.first:w.next),zt(t,w,O),w=O;continue}for(S=[],V=[];m!==null&&m.k!==D;)(m.e.f&es)===0&&(I??(I=new Set)).add(m),V.push(m),m=m.next;if(m===null)continue;O=m}S.push(O),w=O,m=O.next}if(m!==null||I!==void 0){for(var p=I===void 0?[]:Ra(I);m!==null;)(m.e.f&es)===0&&p.push(m),m=m.next;var _=p.length;if(_>0){var y=c===0?e:null;ac(t,p,y,h)}}mo.first=t.first&&t.first.e,mo.last=w&&w.e}function lc(n,t,e,r){Xl(n.v,t),n.i=e}function Sa(n,t,e,r,i,o,a,c,h,d){var m=(h&rc)!==0,I=(h&sc)===0,w=m?I?Yl(i):po(i):i,S=(h&Jl)===0?a:po(a),V={i:S,v:w,k:o,a:null,e:null,prev:e,next:r};try{return V.e=wa(()=>c(n,w,S,d),xt),V.e.prev=e&&e.e,V.e.next=r&&r.e,e===null?t.first=V:(e.next=V,e.e.next=V.e),r!==null&&(r.prev=V,r.e.prev=V.e),V}finally{}}function go(n,t,e){for(var r=n.next?n.next.e.nodes_start:e,i=t?t.e.nodes_start:e,o=n.e.nodes_start;o!==r;){var a=ic(o);i.before(o),o=a}}function zt(n,t,e){t===null?n.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}const _o=[...` 	
\r\f \v\uFEFF`];function cc(n,t,e){var r=n==null?"":""+n;if(e){for(var i in e)if(e[i])r=r?r+" "+i:i;else if(r.length)for(var o=i.length,a=0;(a=r.indexOf(i,a))>=0;){var c=a+o;(a===0||_o.includes(r[a-1]))&&(c===r.length||_o.includes(r[c]))?r=(a===0?"":r.substring(0,a))+r.substring(c+1):a=c}}return r===""?null:r}function Ep(n,t,e,r,i,o){var a=n.__className;if(xt||a!==e){var c=cc(e,r,o);(!xt||c!==n.getAttribute("class"))&&(c==null?n.removeAttribute("class"):n.className=c),n.__className=e}else if(o&&i!==o)for(var h in o){var d=!!o[h];(i==null||d!==!!i[h])&&n.classList.toggle(h,d)}return o}const hc=()=>{};var yo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},fc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],c=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,c=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,m=o>>2,I=(o&3)<<4|c>>4;let w=(c&15)<<2|d>>6,S=d&63;h||(S=64,a||(w=64)),r.push(e[m],e[I],e[w],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Pa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):fc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const I=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||d==null||I==null)throw new dc;const w=o<<2|c>>4;if(r.push(w),d!==64){const S=c<<4&240|d>>2;if(r.push(S),I!==64){const V=d<<6&192|I;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mc=function(n){const t=Pa(n);return Ca.encodeByteArray(t,!0)},Yn=function(n){return mc(n).replace(/\./g,"")},pc=function(n){try{return Ca.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=()=>gc().__FIREBASE_DEFAULTS__,yc=()=>{if(typeof process>"u"||typeof yo>"u")return;const n=yo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ec=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&pc(n[1]);return t&&JSON.parse(t)},bs=()=>{try{return hc()||_c()||yc()||Ec()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vc=n=>{var t,e;return(e=(t=bs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Tc=n=>{const t=vc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Va=()=>{var n;return(n=bs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Yn(JSON.stringify(e)),Yn(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rc(){var n;const t=(n=bs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sc(){return!Rc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pc(){try{return typeof indexedDB=="object"}catch{return!1}}function Cc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="FirebaseError";class Ne extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Vc,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ba.prototype.create)}}class ba{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?bc(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Ne(i,c,r)}}function bc(n,t){return n.replace(Dc,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Dc=/\{\$([^}]+)}/g;function Jn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(Eo(o)&&Eo(a)){if(!Jn(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Eo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n){return n&&n._delegate?n._delegate:n}class ln{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ic;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Oc(t))try{this.getOrInitializeService({instanceIdentifier:ae})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ae){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ae){return this.instances.has(t)}getOptions(t=ae){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ae){return this.component?this.component.multipleInstances?t:ae:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kc(n){return n===ae?void 0:n}function Oc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Nc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Mc={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Lc=z.INFO,Fc={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Uc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Fc[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Da{constructor(t){this.name=t,this._logLevel=Lc,this._logHandler=Uc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Mc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const Bc=(n,t)=>t.some(e=>n instanceof e);let vo,To;function jc(){return vo||(vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qc(){return To||(To=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Na=new WeakMap,cs=new WeakMap,ka=new WeakMap,ns=new WeakMap,Ds=new WeakMap;function $c(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Kt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Na.set(e,n)}).catch(()=>{}),Ds.set(t,n),t}function zc(n){if(cs.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});cs.set(n,t)}let hs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return cs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ka.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Kt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Hc(n){hs=n(hs)}function Kc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(rs(this),t,...e);return ka.set(r,t.sort?t.sort():[t]),Kt(r)}:qc().includes(n)?function(...t){return n.apply(rs(this),t),Kt(Na.get(this))}:function(...t){return Kt(n.apply(rs(this),t))}}function Gc(n){return typeof n=="function"?Kc(n):(n instanceof IDBTransaction&&zc(n),Bc(n,jc())?new Proxy(n,hs):n)}function Kt(n){if(n instanceof IDBRequest)return $c(n);if(ns.has(n))return ns.get(n);const t=Gc(n);return t!==n&&(ns.set(n,t),Ds.set(t,n)),t}const rs=n=>Ds.get(n);function Wc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),c=Kt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Kt(a.result),h.oldVersion,h.newVersion,Kt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Qc=["get","getKey","getAll","getAllKeys","count"],Xc=["put","add","delete","clear"],ss=new Map;function Io(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ss.get(t))return ss.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Xc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qc.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),i&&h.done]))[0]};return ss.set(t,o),o}Hc(n=>({...n,get:(t,e,r)=>Io(t,e)||n.get(t,e,r),has:(t,e)=>!!Io(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Jc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Jc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fs="@firebase/app",Ao="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Da("@firebase/app"),Zc="@firebase/app-compat",th="@firebase/analytics-compat",eh="@firebase/analytics",nh="@firebase/app-check-compat",rh="@firebase/app-check",sh="@firebase/auth",ih="@firebase/auth-compat",oh="@firebase/database",ah="@firebase/data-connect",uh="@firebase/database-compat",lh="@firebase/functions",ch="@firebase/functions-compat",hh="@firebase/installations",fh="@firebase/installations-compat",dh="@firebase/messaging",mh="@firebase/messaging-compat",ph="@firebase/performance",gh="@firebase/performance-compat",_h="@firebase/remote-config",yh="@firebase/remote-config-compat",Eh="@firebase/storage",vh="@firebase/storage-compat",Th="@firebase/firestore",Ih="@firebase/vertexai",Ah="@firebase/firestore-compat",wh="firebase",Rh="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]",Sh={[fs]:"fire-core",[Zc]:"fire-core-compat",[eh]:"fire-analytics",[th]:"fire-analytics-compat",[rh]:"fire-app-check",[nh]:"fire-app-check-compat",[sh]:"fire-auth",[ih]:"fire-auth-compat",[oh]:"fire-rtdb",[ah]:"fire-data-connect",[uh]:"fire-rtdb-compat",[lh]:"fire-fn",[ch]:"fire-fn-compat",[hh]:"fire-iid",[fh]:"fire-iid-compat",[dh]:"fire-fcm",[mh]:"fire-fcm-compat",[ph]:"fire-perf",[gh]:"fire-perf-compat",[_h]:"fire-rc",[yh]:"fire-rc-compat",[Eh]:"fire-gcs",[vh]:"fire-gcs-compat",[Th]:"fire-fst",[Ah]:"fire-fst-compat",[Ih]:"fire-vertex","fire-js":"fire-js",[wh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Map,Ph=new Map,ms=new Map;function wo(n,t){try{n.container.addComponent(t)}catch(e){Lt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function tr(n){const t=n.name;if(ms.has(t))return Lt.debug(`There were multiple attempts to register component ${t}.`),!1;ms.set(t,n);for(const e of Zn.values())wo(e,n);for(const e of Ph.values())wo(e,n);return!0}function Ch(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Vh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new ba("app","Firebase",bh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=Rh;function Oa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ds,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(e||(e=Va()),!e)throw Gt.create("no-options");const o=Zn.get(i);if(o){if(Jn(e,o.options)&&Jn(r,o.config))return o;throw Gt.create("duplicate-app",{appName:i})}const a=new xc(i);for(const h of ms.values())a.addComponent(h);const c=new Dh(e,r,a);return Zn.set(i,c),c}function kh(n=ds){const t=Zn.get(n);if(!t&&n===ds&&Va())return Oa();if(!t)throw Gt.create("no-app",{appName:n});return t}function Ae(n,t,e){var r;let i=(r=Sh[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Lt.warn(c.join(" "));return}tr(new ln(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="firebase-heartbeat-database",xh=1,cn="firebase-heartbeat-store";let is=null;function xa(){return is||(is=Wc(Oh,xh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(cn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Gt.create("idb-open",{originalErrorMessage:n.message})})),is}async function Mh(n){try{const e=(await xa()).transaction(cn),r=await e.objectStore(cn).get(Ma(n));return await e.done,r}catch(t){if(t instanceof Ne)Lt.warn(t.message);else{const e=Gt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Lt.warn(e.message)}}}async function Ro(n,t){try{const r=(await xa()).transaction(cn,"readwrite");await r.objectStore(cn).put(t,Ma(n)),await r.done}catch(e){if(e instanceof Ne)Lt.warn(e.message);else{const r=Gt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(r.message)}}}function Ma(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=1024,Fh=30;class Uh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new jh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=So();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Fh){const a=qh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=So(),{heartbeatsToSend:r,unsentEntries:i}=Bh(this._heartbeatsCache.heartbeats),o=Yn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Lt.warn(e),""}}}function So(){return new Date().toISOString().substring(0,10)}function Bh(n,t=Lh){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Po(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Po(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class jh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pc()?Cc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Mh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ro(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ro(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Po(n){return Yn(JSON.stringify({version:2,heartbeats:n})).length}function qh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n){tr(new ln("platform-logger",t=>new Yc(t),"PRIVATE")),tr(new ln("heartbeat",t=>new Uh(t),"PRIVATE")),Ae(fs,Ao,n),Ae(fs,Ao,"esm2017"),Ae("fire-js","")}$h("");var zh="firebase",Hh="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae(zh,Hh,"app");var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,La;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function _(){}_.prototype=p.prototype,E.D=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,v,A){for(var g=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)g[Nt-2]=arguments[Nt];return p.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],v=E.g[2];var A=E.g[3],g=p+(A^_&(v^A))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[2]+606105819&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[6]+2821735955&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[10]+4294925233&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(A^_&(v^A))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(v^p&(_^v))+y[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=v+(_^A&(p^_))+y[14]+2792965006&4294967295,v=A+(g<<17&4294967295|g>>>15),g=_+(p^v&(A^p))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(v^A&(_^v))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[11]+643717713&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[15]+3634488961&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[3]+4107603335&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^A&(_^v))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^v&(p^_))+y[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(A^p))+y[7]+1735328473&4294967295,v=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(v^A))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(_^v^A)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[11]+1839030562&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[7]+4139469664&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[3]+3572445317&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^A)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^v)+y[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=v+(A^p^_)+y[15]+530742520&4294967295,v=A+(g<<16&4294967295|g>>>16),g=_+(v^A^p)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(v^(_|~A))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[14]+2878612391&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[10]+4293915773&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[6]+2734768916&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~A))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~v))+y[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=v+(p^(A|~_))+y[2]+718787259&4294967295,v=A+(g<<15&4294967295|g>>>17),g=_+(A^(v|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var _=p-this.blockSize,y=this.B,v=this.h,A=0;A<p;){if(v==0)for(;A<=_;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<p;)if(y[v++]=E.charCodeAt(A++),v==this.blockSize){i(this,y),v=0;break}}else for(;A<p;)if(y[v++]=E[A++],v==this.blockSize){i(this,y),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var _=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=_&255,_/=256;for(this.u(E),E=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)E[_++]=this.g[p]>>>y&255;return E};function o(E,p){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function a(E,p){this.h=p;for(var _=[],y=!0,v=E.length-1;0<=v;v--){var A=E[v]|0;y&&A==p||(_[v]=A,y=!1)}this.g=_}var c={};function h(E){return-128<=E&&128>E?o(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return I;if(0>E)return D(d(-E));for(var p=[],_=1,y=0;E>=_;y++)p[y]=E/_|0,_*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),y=I,v=0;v<E.length;v+=8){var A=Math.min(8,E.length-v),g=parseInt(E.substring(v,v+A),p);8>A?(A=d(Math.pow(p,A)),y=y.j(A).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var I=h(0),w=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-D(this).m();for(var E=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(k(this))return"-"+D(this).toString(E);for(var p=d(Math.pow(E,6)),_=this,y="";;){var v=Q(_,p).g;_=O(_,v.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=v,V(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=O(this,E),k(E)?-1:V(E)?0:1};function D(E){for(var p=E.g.length,_=[],y=0;y<p;y++)_[y]=~E.g[y];return new a(_,~E.h).add(w)}n.abs=function(){return k(this)?D(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0,v=0;v<=p;v++){var A=y+(this.i(v)&65535)+(E.i(v)&65535),g=(A>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=g>>>16,A&=65535,g&=65535,_[v]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(E,p){return E.add(D(p))}n.j=function(E){if(V(this)||V(E))return I;if(k(this))return k(E)?D(this).j(D(E)):D(D(this).j(E));if(k(E))return D(this.j(D(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var p=this.g.length+E.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var A=this.i(y)>>>16,g=this.i(y)&65535,Nt=E.i(v)>>>16,Le=E.i(v)&65535;_[2*y+2*v]+=g*Le,U(_,2*y+2*v),_[2*y+2*v+1]+=A*Le,U(_,2*y+2*v+1),_[2*y+2*v+1]+=g*Nt,U(_,2*y+2*v+1),_[2*y+2*v+2]+=A*Nt,U(_,2*y+2*v+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function U(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function H(E,p){this.g=E,this.h=p}function Q(E,p){if(V(p))throw Error("division by zero");if(V(E))return new H(I,I);if(k(E))return p=Q(D(E),p),new H(D(p.g),D(p.h));if(k(p))return p=Q(E,D(p)),new H(D(p.g),p.h);if(30<E.g.length){if(k(E)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,y=p;0>=y.l(E);)_=ot(_),y=ot(y);var v=et(_,1),A=et(y,1);for(y=et(y,2),_=et(_,2);!V(y);){var g=A.add(y);0>=g.l(E)&&(v=v.add(_),A=g),y=et(y,1),_=et(_,1)}return p=O(E,v.j(p)),new H(v,p)}for(v=I;0<=E.l(p);){for(_=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=d(_),g=A.j(p);k(g)||0<g.l(E);)_-=y,A=d(_),g=A.j(p);V(A)&&(A=w),v=v.add(A),E=O(E,g)}return new H(v,E)}n.A=function(E){return Q(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&E.i(y);return new a(_,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|E.i(y);return new a(_,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^E.i(y);return new a(_,this.h^E.h)};function ot(E){for(var p=E.g.length+1,_=[],y=0;y<p;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new a(_,E.h)}function et(E,p){var _=p>>5;p%=32;for(var y=E.g.length-_,v=[],A=0;A<y;A++)v[A]=0<p?E.i(A+_)>>>p|E.i(A+_+1)<<32-p:E.i(A+_);return new a(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,La=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Wt=a}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});var jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fa,en,Ua,Kn,ps,Ba,ja,qa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,l){return s==Array.prototype||s==Object.prototype||(s[u]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof jn=="object"&&jn];for(var u=0;u<s.length;++u){var l=s[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,u){if(u)t:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var T=s[f];if(!(T in l))break t;l=l[T]}s=s[s.length-1],f=l[s],u=u(f),u!=f&&u!=null&&t(l,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var l=0,f=!1,T={next:function(){if(!f&&l<s.length){var R=l++;return{value:u(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function m(s,u,l){return s.call.apply(s.bind,arguments)}function I(s,u,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),s.apply(u,T)}}return function(){return s.apply(u,arguments)}}function w(s,u,l){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:I,w.apply(null,arguments)}function S(s,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function V(s,u){function l(){}l.prototype=u.prototype,s.aa=u.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,T,R){for(var b=Array(arguments.length-2),W=2;W<arguments.length;W++)b[W-2]=arguments[W];return u.prototype[T].apply(f,b)}}function k(s){const u=s.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=s[f];return l}return[]}function D(s,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const T=s.length||0,R=f.length||0;s.length=T+R;for(let b=0;b<R;b++)s[T+b]=f[b]}else s.push(f)}}class O{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function Q(s){return Q[" "](s),s}Q[" "]=function(){};var ot=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function et(s,u,l){for(const f in s)u.call(l,s[f],f,s)}function E(s,u){for(const l in s)u.call(void 0,s[l],l,s)}function p(s){const u={};for(const l in s)u[l]=s[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,u){let l,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(l in f)s[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function v(s){var u=1;s=s.split(":");const l=[];for(;0<u&&s.length;)l.push(s.shift()),u--;return s.length&&l.push(s.join(":")),l}function A(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Vr;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class Nt{constructor(){this.h=this.g=null}add(u,l){const f=Le.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Le=new O(()=>new al,s=>s.reset());class al{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,Ue=!1,Vr=new Nt,hi=()=>{const s=c.Promise.resolve(void 0);Fe=()=>{s.then(ul)}};var ul=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){A(l)}var u=Le;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}Ue=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var ll=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return s}();function Be(s,u){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(ot){t:{try{Q(u.nodeName);var T=!0;break t}catch{}T=!1}T||(u=null)}}else l=="mouseover"?u=s.fromElement:l=="mouseout"&&(u=s.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:cl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Be.aa.h.call(this)}}V(Be,ft);var cl={2:"touch",3:"pen",4:"mouse"};Be.prototype.h=function(){Be.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var In="closure_listenable_"+(1e6*Math.random()|0),hl=0;function fl(s,u,l,f,T){this.listener=s,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=T,this.key=++hl,this.da=this.fa=!1}function An(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function wn(s){this.src=s,this.g={},this.h=0}wn.prototype.add=function(s,u,l,f,T){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var b=Dr(s,u,f,T);return-1<b?(u=s[b],l||(u.fa=!1)):(u=new fl(u,this.src,R,!!f,T),u.fa=l,s.push(u)),u};function br(s,u){var l=u.type;if(l in s.g){var f=s.g[l],T=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=T)&&Array.prototype.splice.call(f,T,1),R&&(An(u),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Dr(s,u,l,f){for(var T=0;T<s.length;++T){var R=s[T];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==f)return T}return-1}var Nr="closure_lm_"+(1e6*Math.random()|0),kr={};function fi(s,u,l,f,T){if(Array.isArray(u)){for(var R=0;R<u.length;R++)fi(s,u[R],l,f,T);return null}return l=pi(l),s&&s[In]?s.K(u,l,d(f)?!!f.capture:!1,T):dl(s,u,l,!1,f,T)}function dl(s,u,l,f,T,R){if(!u)throw Error("Invalid event type");var b=d(T)?!!T.capture:!!T,W=xr(s);if(W||(s[Nr]=W=new wn(s)),l=W.add(u,l,f,b,R),l.proxy)return l;if(f=ml(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)ll||(T=b),T===void 0&&(T=!1),s.addEventListener(u.toString(),f,T);else if(s.attachEvent)s.attachEvent(mi(u.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function ml(){function s(l){return u.call(s.src,s.listener,l)}const u=pl;return s}function di(s,u,l,f,T){if(Array.isArray(u))for(var R=0;R<u.length;R++)di(s,u[R],l,f,T);else f=d(f)?!!f.capture:!!f,l=pi(l),s&&s[In]?(s=s.i,u=String(u).toString(),u in s.g&&(R=s.g[u],l=Dr(R,l,f,T),-1<l&&(An(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete s.g[u],s.h--)))):s&&(s=xr(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Dr(u,l,f,T)),(l=-1<s?u[s]:null)&&Or(l))}function Or(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[In])br(u.i,s);else{var l=s.type,f=s.proxy;u.removeEventListener?u.removeEventListener(l,f,s.capture):u.detachEvent?u.detachEvent(mi(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=xr(u))?(br(l,s),l.h==0&&(l.src=null,u[Nr]=null)):An(s)}}}function mi(s){return s in kr?kr[s]:kr[s]="on"+s}function pl(s,u){if(s.da)s=!0;else{u=new Be(u,this);var l=s.listener,f=s.ha||s.src;s.fa&&Or(s),s=l.call(f,u)}return s}function xr(s){return s=s[Nr],s instanceof wn?s:null}var Mr="__closure_events_fn_"+(1e9*Math.random()>>>0);function pi(s){return typeof s=="function"?s:(s[Mr]||(s[Mr]=function(u){return s.handleEvent(u)}),s[Mr])}function dt(){Bt.call(this),this.i=new wn(this),this.M=this,this.F=null}V(dt,Bt),dt.prototype[In]=!0,dt.prototype.removeEventListener=function(s,u,l,f){di(this,s,u,l,f)};function Et(s,u){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=u.type||u,typeof u=="string")u=new ft(u,s);else if(u instanceof ft)u.target=u.target||s;else{var T=u;u=new ft(f,s),y(u,T)}if(T=!0,l)for(var R=l.length-1;0<=R;R--){var b=u.g=l[R];T=Rn(b,f,!0,u)&&T}if(b=u.g=s,T=Rn(b,f,!0,u)&&T,T=Rn(b,f,!1,u)&&T,l)for(R=0;R<l.length;R++)b=u.g=l[R],T=Rn(b,f,!1,u)&&T}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var l=s.g[u],f=0;f<l.length;f++)An(l[f]);delete s.g[u],s.h--}}this.F=null},dt.prototype.K=function(s,u,l,f){return this.i.add(String(s),u,!1,l,f)},dt.prototype.L=function(s,u,l,f){return this.i.add(String(s),u,!0,l,f)};function Rn(s,u,l,f){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var T=!0,R=0;R<u.length;++R){var b=u[R];if(b&&!b.da&&b.capture==l){var W=b.listener,ut=b.ha||b.src;b.fa&&br(s.i,b),T=W.call(ut,f)!==!1&&T}}return T&&!f.defaultPrevented}function gi(s,u,l){if(typeof s=="function")l&&(s=w(s,l));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(s,u||0)}function _i(s){s.g=gi(()=>{s.g=null,s.i&&(s.i=!1,_i(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class gl extends Bt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:_i(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function je(s){Bt.call(this),this.h=s,this.g={}}V(je,Bt);var yi=[];function Ei(s){et(s.g,function(u,l){this.g.hasOwnProperty(l)&&Or(u)},s),s.g={}}je.prototype.N=function(){je.aa.N.call(this),Ei(this)},je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=c.JSON.stringify,_l=c.JSON.parse,yl=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Fr(){}Fr.prototype.h=null;function vi(s){return s.h||(s.h=s.i())}function Ti(){}var qe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ur(){ft.call(this,"d")}V(Ur,ft);function Br(){ft.call(this,"c")}V(Br,ft);var re={},Ii=null;function Sn(){return Ii=Ii||new dt}re.La="serverreachability";function Ai(s){ft.call(this,re.La,s)}V(Ai,ft);function $e(s){const u=Sn();Et(u,new Ai(u))}re.STAT_EVENT="statevent";function wi(s,u){ft.call(this,re.STAT_EVENT,s),this.stat=u}V(wi,ft);function vt(s){const u=Sn();Et(u,new wi(u,s))}re.Ma="timingevent";function Ri(s,u){ft.call(this,re.Ma,s),this.size=u}V(Ri,ft);function ze(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},u)}function He(){this.g=!0}He.prototype.xa=function(){this.g=!1};function El(s,u,l,f,T,R){s.info(function(){if(s.g)if(R)for(var b="",W=R.split("&"),ut=0;ut<W.length;ut++){var K=W[ut].split("=");if(1<K.length){var mt=K[0];K=K[1];var pt=mt.split("_");b=2<=pt.length&&pt[1]=="type"?b+(mt+"="+K+"&"):b+(mt+"=redacted&")}}else b=null;else b=R;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+u+`
`+l+`
`+b})}function vl(s,u,l,f,T,R,b){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+u+`
`+l+`
`+R+" "+b})}function pe(s,u,l,f){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Il(s,l)+(f?" "+f:"")})}function Tl(s,u){s.info(function(){return"TIMEOUT: "+u})}He.prototype.info=function(){};function Il(s,u){if(!s.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var b=1;b<T.length;b++)T[b]=""}}}}return Lr(l)}catch{return u}}var Pn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jr;function Cn(){}V(Cn,Fr),Cn.prototype.g=function(){return new XMLHttpRequest},Cn.prototype.i=function(){return{}},jr=new Cn;function jt(s,u,l,f){this.j=s,this.i=u,this.l=l,this.R=f||1,this.U=new je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pi}function Pi(){this.i=null,this.g="",this.h=!1}var Ci={},qr={};function $r(s,u,l){s.L=1,s.v=Nn(kt(u)),s.m=l,s.P=!0,Vi(s,null)}function Vi(s,u){s.F=Date.now(),Vn(s),s.A=kt(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),$i(l.i,"t",f),s.C=0,l=s.j.J,s.h=new Pi,s.g=ao(s.j,l?u:null,!s.m),0<s.O&&(s.M=new gl(w(s.Y,s,s.g),s.O)),u=s.U,l=s.g,f=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(yi[0]=T.toString()),T=yi);for(var R=0;R<T.length;R++){var b=fi(l,T[R],f||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),$e(),El(s.i,s.u,s.A,s.l,s.R,s.m)}jt.prototype.ca=function(s){s=s.target;const u=this.M;u&&Ot(s)==3?u.j():this.Y(s)},jt.prototype.Y=function(s){try{if(s==this.g)t:{const pt=Ot(this.g);var u=this.g.Ba();const ye=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Xi(this.g)))){this.J||pt!=4||u==7||(u==8||0>=ye?$e(3):$e(2)),zr(this);var l=this.g.Z();this.X=l;e:if(bi(this)){var f=Xi(this.g);s="";var T=f.length,R=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),Ke(this);var b="";break e}this.h.i=new c.TextDecoder}for(u=0;u<T;u++)this.h.h=!0,s+=this.h.i.decode(f[u],{stream:!(R&&u==T-1)});f.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,vl(this.i,this.u,this.A,this.l,this.R,pt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ut=this.g;if((W=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(W)){var K=W;break e}}K=null}if(l=K)pe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hr(this,l);else{this.o=!1,this.s=3,vt(12),se(this),Ke(this);break t}}if(this.P){l=!0;let Rt;for(;!this.J&&this.C<b.length;)if(Rt=Al(this,b),Rt==qr){pt==4&&(this.s=4,vt(14),l=!1),pe(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==Ci){this.s=4,vt(15),pe(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else pe(this.i,this.l,Rt,null),Hr(this,Rt);if(bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||b.length!=0||this.h.h||(this.s=1,vt(16),l=!1),this.o=this.o&&l,!l)pe(this.i,this.l,b,"[Invalid Chunked Response]"),se(this),Ke(this);else if(0<b.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),Yr(mt),mt.M=!0,vt(11))}}else pe(this.i,this.l,b,null),Hr(this,b);pt==4&&se(this),this.o&&!this.J&&(pt==4?ro(this.j,this):(this.o=!1,Vn(this)))}else Bl(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),se(this),Ke(this)}}}catch{}finally{}};function bi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Al(s,u){var l=s.C,f=u.indexOf(`
`,l);return f==-1?qr:(l=Number(u.substring(l,f)),isNaN(l)?Ci:(f+=1,f+l>u.length?qr:(u=u.slice(f,f+l),s.C=f+l,u)))}jt.prototype.cancel=function(){this.J=!0,se(this)};function Vn(s){s.S=Date.now()+s.I,Di(s,s.I)}function Di(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ze(w(s.ba,s),u)}function zr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}jt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Tl(this.i,this.A),this.L!=2&&($e(),vt(17)),se(this),this.s=2,Ke(this)):Di(this,this.S-s)};function Ke(s){s.j.G==0||s.J||ro(s.j,s)}function se(s){zr(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Ei(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function Hr(s,u){try{var l=s.j;if(l.G!=0&&(l.g==s||Kr(l.h,s))){if(!s.K&&Kr(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Fn(l),Mn(l);else break t;Xr(l),vt(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=ze(w(l.Za,l),6e3));if(1>=Oi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else oe(l,11)}else if((s.K||l.g==s)&&Fn(l),!U(u))for(T=l.Da.g.parse(u),u=0;u<T.length;u++){let K=T[u];if(l.T=K[0],K=K[1],l.G==2)if(K[0]=="c"){l.K=K[1],l.ia=K[2];const mt=K[3];mt!=null&&(l.la=mt,l.j.info("VER="+l.la));const pt=K[4];pt!=null&&(l.Aa=pt,l.j.info("SVER="+l.Aa));const ye=K[5];ye!=null&&typeof ye=="number"&&0<ye&&(f=1.5*ye,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Rt=s.g;if(Rt){const Bn=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bn){var R=f.h;R.g||Bn.indexOf("spdy")==-1&&Bn.indexOf("quic")==-1&&Bn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Gr(R,R.h),R.h=null))}if(f.D){const Jr=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Jr&&(f.ya=Jr,X(f.I,f.D,Jr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var b=s;if(f.qa=oo(f,f.J?f.ia:null,f.W),b.K){xi(f.h,b);var W=b,ut=f.L;ut&&(W.I=ut),W.B&&(zr(W),Vn(W)),f.g=b}else eo(f);0<l.i.length&&Ln(l)}else K[0]!="stop"&&K[0]!="close"||oe(l,7);else l.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?oe(l,7):Qr(l):K[0]!="noop"&&l.l&&l.l.ta(K),l.v=0)}}$e(4)}catch{}}var wl=class{constructor(s,u){this.g=s,this.map=u}};function Ni(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ki(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Oi(s){return s.h?1:s.g?s.g.size:0}function Kr(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function Gr(s,u){s.g?s.g.add(u):s.h=u}function xi(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Ni.prototype.cancel=function(){if(this.i=Mi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Mi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const l of s.g.values())u=u.concat(l.D);return u}return k(s.i)}function Rl(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],l=s.length,f=0;f<l;f++)u.push(s[f]);return u}u=[],l=0;for(f in s)u[l++]=s[f];return u}function Sl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var l=0;l<s;l++)u.push(l);return u}u=[],l=0;for(const f in s)u[l++]=f;return u}}}function Li(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var l=Sl(s),f=Rl(s),T=f.length,R=0;R<T;R++)u.call(void 0,f[R],l&&l[R],s)}var Fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pl(s,u){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),T=null;if(0<=f){var R=s[l].substring(0,f);T=s[l].substring(f+1)}else R=s[l];u(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function ie(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ie){this.h=s.h,bn(this,s.j),this.o=s.o,this.g=s.g,Dn(this,s.s),this.l=s.l;var u=s.i,l=new Qe;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),Ui(this,l),this.m=s.m}else s&&(u=String(s).match(Fi))?(this.h=!1,bn(this,u[1]||"",!0),this.o=Ge(u[2]||""),this.g=Ge(u[3]||"",!0),Dn(this,u[4]),this.l=Ge(u[5]||"",!0),Ui(this,u[6]||"",!0),this.m=Ge(u[7]||"")):(this.h=!1,this.i=new Qe(null,this.h))}ie.prototype.toString=function(){var s=[],u=this.j;u&&s.push(We(u,Bi,!0),":");var l=this.g;return(l||u=="file")&&(s.push("//"),(u=this.o)&&s.push(We(u,Bi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(We(l,l.charAt(0)=="/"?bl:Vl,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",We(l,Nl)),s.join("")};function kt(s){return new ie(s)}function bn(s,u,l){s.j=l?Ge(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Dn(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function Ui(s,u,l){u instanceof Qe?(s.i=u,kl(s.i,s.h)):(l||(u=We(u,Dl)),s.i=new Qe(u,s.h))}function X(s,u,l){s.i.set(u,l)}function Nn(s){return X(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ge(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function We(s,u,l){return typeof s=="string"?(s=encodeURI(s).replace(u,Cl),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Cl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Bi=/[#\/\?@]/g,Vl=/[#\?:]/g,bl=/[#\?]/g,Dl=/[#\?@]/g,Nl=/#/g;function Qe(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function qt(s){s.g||(s.g=new Map,s.h=0,s.i&&Pl(s.i,function(u,l){s.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=Qe.prototype,n.add=function(s,u){qt(this),this.i=null,s=ge(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(u),this.h+=1,this};function ji(s,u){qt(s),u=ge(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function qi(s,u){return qt(s),u=ge(s,u),s.g.has(u)}n.forEach=function(s,u){qt(this),this.g.forEach(function(l,f){l.forEach(function(T){s.call(u,T,f,this)},this)},this)},n.na=function(){qt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const T=s[f];for(let R=0;R<T.length;R++)l.push(u[f])}return l},n.V=function(s){qt(this);let u=[];if(typeof s=="string")qi(this,s)&&(u=u.concat(this.g.get(ge(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)u=u.concat(s[l])}return u},n.set=function(s,u){return qt(this),this.i=null,s=ge(this,s),qi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function $i(s,u,l){ji(s,u),0<l.length&&(s.i=null,s.g.set(ge(s,u),k(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const R=encodeURIComponent(String(f)),b=this.V(f);for(f=0;f<b.length;f++){var T=R;b[f]!==""&&(T+="="+encodeURIComponent(String(b[f]))),s.push(T)}}return this.i=s.join("&")};function ge(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function kl(s,u){u&&!s.j&&(qt(s),s.i=null,s.g.forEach(function(l,f){var T=f.toLowerCase();f!=T&&(ji(this,f),$i(this,T,l))},s)),s.j=u}function Ol(s,u){const l=new He;if(c.Image){const f=new Image;f.onload=S($t,l,"TestLoadImage: loaded",!0,u,f),f.onerror=S($t,l,"TestLoadImage: error",!1,u,f),f.onabort=S($t,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=S($t,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else u(!1)}function xl(s,u){const l=new He,f=new AbortController,T=setTimeout(()=>{f.abort(),$t(l,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(T),R.ok?$t(l,"TestPingServer: ok",!0,u):$t(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),$t(l,"TestPingServer: error",!1,u)})}function $t(s,u,l,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(l)}catch{}}function Ml(){this.g=new yl}function Ll(s,u,l){const f=l||"";try{Li(s,function(T,R){let b=T;d(T)&&(b=Lr(T)),u.push(f+R+"="+encodeURIComponent(b))})}catch(T){throw u.push(f+"type="+encodeURIComponent("_badmap")),T}}function kn(s){this.l=s.Ub||null,this.j=s.eb||!1}V(kn,Fr),kn.prototype.g=function(){return new On(this.l,this.j)},kn.prototype.i=function(s){return function(){return s}}({});function On(s,u){dt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(On,dt),n=On.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,Ye(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xe(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ye(this)),this.g&&(this.readyState=3,Ye(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function zi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?Xe(this):Ye(this),this.readyState==3&&zi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Xe(this))},n.Qa=function(s){this.g&&(this.response=s,Xe(this))},n.ga=function(){this.g&&Xe(this)};function Xe(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ye(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=u.next();return s.join(`\r
`)};function Ye(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(On.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Hi(s){let u="";return et(s,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function Wr(s,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Hi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):X(s,u,l))}function J(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(J,dt);var Fl=/^https?$/i,Ul=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jr.g(),this.v=this.o?vi(this.o):vi(jr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(R){Ki(this,R);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)l.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ul,u,void 0))||f||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of l)this.g.setRequestHeader(R,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qi(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Ki(this,R)}};function Ki(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,Gi(s),xn(s)}function Gi(s){s.A||(s.A=!0,Et(s,"complete"),Et(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Et(this,"complete"),Et(this,"abort"),xn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Wi(this):this.bb())},n.bb=function(){Wi(this)};function Wi(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ot(s)!=4||s.Z()!=2)){if(s.u&&Ot(s)==4)gi(s.Ea,0,s);else if(Et(s,"readystatechange"),Ot(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=b===0){var T=String(s.D).match(Fi)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),f=!Fl.test(T?T.toLowerCase():"")}l=f}if(l)Et(s,"complete"),Et(s,"success");else{s.m=6;try{var R=2<Ot(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Gi(s)}}finally{xn(s)}}}}function xn(s,u){if(s.g){Qi(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||Et(s,"ready");try{l.onreadystatechange=f}catch{}}}function Qi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ot(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),_l(u)}};function Xi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Bl(s){const u={};s=(s.g&&2<=Ot(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(U(s[f]))continue;var l=v(s[f]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[T]||[];u[T]=R,R.push(l)}E(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Je(s,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||u}function Yi(s){this.Aa=0,this.i=[],this.j=new He,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Je("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Je("baseRetryDelayMs",5e3,s),this.cb=Je("retryDelaySeedMs",1e4,s),this.Wa=Je("forwardChannelMaxRetries",2,s),this.wa=Je("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ni(s&&s.concurrentRequestLimit),this.Da=new Ml,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yi.prototype,n.la=8,n.G=1,n.connect=function(s,u,l,f){vt(0),this.W=s,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=oo(this,null,this.W),Ln(this)};function Qr(s){if(Ji(s),s.G==3){var u=s.U++,l=kt(s.I);if(X(l,"SID",s.K),X(l,"RID",u),X(l,"TYPE","terminate"),Ze(s,l),u=new jt(s,s.j,u),u.L=2,u.v=Nn(kt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=ao(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Vn(u)}io(s)}function Mn(s){s.g&&(Yr(s),s.g.cancel(),s.g=null)}function Ji(s){Mn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Fn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Ln(s){if(!ki(s.h)&&!s.s){s.s=!0;var u=s.Ga;Fe||hi(),Ue||(Fe(),Ue=!0),Vr.add(u,s),s.B=0}}function jl(s,u){return Oi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ze(w(s.Ga,s,u),so(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new jt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=to(this,T,u),l=kt(this.I),X(l,"RID",s),X(l,"CVER",22),this.D&&X(l,"X-HTTP-Session-Id",this.D),Ze(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(Hi(R)))+"&"+u:this.m&&Wr(l,this.m,R)),Gr(this.h,T),this.Ua&&X(l,"TYPE","init"),this.P?(X(l,"$req",u),X(l,"SID","null"),T.T=!0,$r(T,l,null)):$r(T,l,u),this.G=2}}else this.G==3&&(s?Zi(this,s):this.i.length==0||ki(this.h)||Zi(this))};function Zi(s,u){var l;u?l=u.l:l=s.U++;const f=kt(s.I);X(f,"SID",s.K),X(f,"RID",l),X(f,"AID",s.T),Ze(s,f),s.m&&s.o&&Wr(f,s.m,s.o),l=new jt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),u&&(s.i=u.D.concat(s.i)),u=to(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Gr(s.h,l),$r(l,f,u)}function Ze(s,u){s.H&&et(s.H,function(l,f){X(u,f,l)}),s.l&&Li({},function(l,f){X(u,f,l)})}function to(s,u,l){l=Math.min(s.i.length,l);var f=s.l?w(s.l.Na,s.l,s):null;t:{var T=s.i;let R=-1;for(;;){const b=["count="+l];R==-1?0<l?(R=T[0].g,b.push("ofs="+R)):R=0:b.push("ofs="+R);let W=!0;for(let ut=0;ut<l;ut++){let K=T[ut].g;const mt=T[ut].map;if(K-=R,0>K)R=Math.max(0,T[ut].g-100),W=!1;else try{Ll(mt,b,"req"+K+"_")}catch{f&&f(mt)}}if(W){f=b.join("&");break t}}}return s=s.i.splice(0,l),u.D=s,f}function eo(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;Fe||hi(),Ue||(Fe(),Ue=!0),Vr.add(u,s),s.v=0}}function Xr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ze(w(s.Fa,s),so(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,no(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ze(w(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Mn(this),no(this))};function Yr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function no(s){s.g=new jt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=kt(s.qa);X(u,"RID","rpc"),X(u,"SID",s.K),X(u,"AID",s.T),X(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&X(u,"TO",s.ja),X(u,"TYPE","xmlhttp"),Ze(s,u),s.m&&s.o&&Wr(u,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Nn(kt(u)),l.m=null,l.P=!0,Vi(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Mn(this),Xr(this),vt(19))};function Fn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function ro(s,u){var l=null;if(s.g==u){Fn(s),Yr(s),s.g=null;var f=2}else if(Kr(s.h,u))l=u.D,xi(s.h,u),f=1;else return;if(s.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var T=s.B;f=Sn(),Et(f,new Ri(f,l)),Ln(s)}else eo(s);else if(T=u.s,T==3||T==0&&0<u.X||!(f==1&&jl(s,u)||f==2&&Xr(s)))switch(l&&0<l.length&&(u=s.h,u.i=u.i.concat(l)),T){case 1:oe(s,5);break;case 4:oe(s,10);break;case 3:oe(s,6);break;default:oe(s,2)}}}function so(s,u){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*u}function oe(s,u){if(s.j.info("Error code "+u),u==2){var l=w(s.fb,s),f=s.Xa;const T=!f;f=new ie(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||bn(f,"https"),Nn(f),T?Ol(f.toString(),l):xl(f.toString(),l)}else vt(2);s.G=0,s.l&&s.l.sa(u),io(s),Ji(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function io(s){if(s.G=0,s.ka=[],s.l){const u=Mi(s.h);(u.length!=0||s.i.length!=0)&&(D(s.ka,u),D(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function oo(s,u,l){var f=l instanceof ie?kt(l):new ie(l);if(f.g!="")u&&(f.g=u+"."+f.g),Dn(f,f.s);else{var T=c.location;f=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;var R=new ie(null);f&&bn(R,f),u&&(R.g=u),T&&Dn(R,T),l&&(R.l=l),f=R}return l=s.D,u=s.ya,l&&u&&X(f,l,u),X(f,"VER",s.la),Ze(s,f),f}function ao(s,u,l){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new J(new kn({eb:l})):new J(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uo(){}n=uo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Un(){}Un.prototype.g=function(s,u){return new It(s,u)};function It(s,u){dt.call(this),this.g=new Yi(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!U(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new _e(this)}V(It,dt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Qr(this.g)},It.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Lr(s),s=l);u.i.push(new wl(u.Ya++,s)),u.G==3&&Ln(u)},It.prototype.N=function(){this.g.l=null,delete this.j,Qr(this.g),delete this.g,It.aa.N.call(this)};function lo(s){Ur.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const l in u){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}V(lo,Ur);function co(){Br.call(this),this.status=1}V(co,Br);function _e(s){this.g=s}V(_e,uo),_e.prototype.ua=function(){Et(this.g,"a")},_e.prototype.ta=function(s){Et(this.g,new lo(s))},_e.prototype.sa=function(s){Et(this.g,new co)},_e.prototype.ra=function(){Et(this.g,"b")},Un.prototype.createWebChannel=Un.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,qa=function(){return new Un},ja=function(){return Sn()},Ba=re,ps={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pn.NO_ERROR=0,Pn.TIMEOUT=8,Pn.HTTP_ERROR=6,Kn=Pn,Si.COMPLETE="complete",Ua=Si,Ti.EventType=qe,qe.OPEN="a",qe.CLOSE="b",qe.ERROR="c",qe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,en=Ti,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Fa=J}).apply(typeof jn<"u"?jn:typeof self<"u"?self:typeof window<"u"?window:{});const Vo="@firebase/firestore",bo="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new Da("@firebase/firestore");function Ee(){return ce.logLevel}function N(n,...t){if(ce.logLevel<=z.DEBUG){const e=t.map(Ns);ce.debug(`Firestore (${ke}): ${n}`,...e)}}function Ft(n,...t){if(ce.logLevel<=z.ERROR){const e=t.map(Ns);ce.error(`Firestore (${ke}): ${n}`,...e)}}function Re(n,...t){if(ce.logLevel<=z.WARN){const e=t.map(Ns);ce.warn(`Firestore (${ke}): ${n}`,...e)}}function Ns(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n="Unexpected state"){const t=`FIRESTORE (${ke}) INTERNAL ASSERTION FAILED: `+n;throw Ft(t),new Error(t)}function G(n,t){n||L()}function B(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Ne{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class Gh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Wh{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new $a(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new _t(t)}}class Qh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Xh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Qh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Do{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yh{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Vh(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){G(this.o===void 0);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Do(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string"),this.R=e.token,new Do(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Jh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function Se(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=-62135596800,ko=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ko);return new st(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<No)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ko}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-No;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new st(0,0))}static max(){return new F(new st(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="__name__";class Pt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(),r===void 0?r=t.length-e:r>t.length-e&&L(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Pt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return Math.sign(t.length-e.length)}static compareSegments(t,e){const r=Pt.isNumericId(t),i=Pt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Pt.extractNumericId(t).compare(Pt.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wt.fromString(t.substring(4,t.length-2))}}class Z extends Pt{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Z(e)}static emptyPath(){return new Z([])}}const Zh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Pt{construct(t,e,r){return new ct(t,e,r)}static isValidIdentifier(t){return Zh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Oo}static keyField(){return new ct([Oo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Z.fromString(t))}static fromName(t){return new M(Z.fromString(t).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Z(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=-1;function tf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new st(e+1,0):new st(e,r));return new Xt(i,M.empty(),t)}function ef(n){return new Xt(n.readTime,n.key,hn)}class Xt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Xt(F.min(),M.empty(),hn)}static max(){return new Xt(F.max(),M.empty(),hn)}}function nf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==rf)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(i=>i?P.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>i(m))}})}static doWhile(t,e){return new P((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function of(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function xe(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}dr.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=-1;function mr(n){return n==null}function er(n){return n===0&&1/n==-1/0}function af(n){return typeof n=="number"&&Number.isInteger(n)&&!er(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="";function uf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=xo(t)),t=lf(n.get(e),t);return xo(t)}function lf(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Ha:e+="";break;default:e+=o}}return e}function xo(n){return n+Ha+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ne(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ka(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qn(this.root,t,this.comparator,!0)}}class qn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new lt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,r,i,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Lo(this.data.getIterator())}getIteratorFrom(t){return new Lo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class Lo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new St([])}unionWith(t){let e=new it(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Se(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ga("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const cf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(n){if(G(!!n),typeof n=="string"){let t=0;const e=cf.exec(n);if(G(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="server_timestamp",Qa="__type__",Xa="__previous_value__",Ya="__local_write_time__";function Os(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Qa])===null||e===void 0?void 0:e.stringValue)===Wa}function pr(n){const t=n.mapValue.fields[Xa];return Os(t)?pr(t):t}function fn(n){const t=Yt(n.mapValue.fields[Ya].timestampValue);return new st(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,e,r,i,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}const nr="(default)";class dn{constructor(t,e){this.projectId=t,this.database=e||nr}static empty(){return new dn("","")}get isDefaultDatabase(){return this.database===nr}isEqual(t){return t instanceof dn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="__type__",ff="__max__",$n={mapValue:{}},Za="__vector__",rr="value";function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Os(n)?4:mf(n)?9007199254740991:df(n)?10:11:L()}function bt(n,t){if(n===t)return!0;const e=Zt(n);if(e!==Zt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return fn(n).isEqual(fn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Yt(i.timestampValue),c=Yt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Jt(i.bytesValue).isEqual(Jt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=tt(i.doubleValue),c=tt(o.doubleValue);return a===c?er(a)===er(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Se(n.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Mo(a)!==Mo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!bt(a[h],c[h])))return!1;return!0}(n,t);default:return L()}}function mn(n,t){return(n.values||[]).find(e=>bt(e,t))!==void 0}function Pe(n,t){if(n===t)return 0;const e=Zt(n),r=Zt(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=tt(o.integerValue||o.doubleValue),h=tt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return Fo(n.timestampValue,t.timestampValue);case 4:return Fo(fn(n),fn(t));case 5:return q(n.stringValue,t.stringValue);case 6:return function(o,a){const c=Jt(o),h=Jt(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=q(c[d],h[d]);if(m!==0)return m}return q(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=q(tt(o.latitude),tt(a.latitude));return c!==0?c:q(tt(o.longitude),tt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Uo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const I=o.fields||{},w=a.fields||{},S=(c=I[rr])===null||c===void 0?void 0:c.arrayValue,V=(h=w[rr])===null||h===void 0?void 0:h.arrayValue,k=q(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0);return k!==0?k:Uo(S,V)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===$n.mapValue&&a===$n.mapValue)return 0;if(o===$n.mapValue)return 1;if(a===$n.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let I=0;I<h.length&&I<m.length;++I){const w=q(h[I],m[I]);if(w!==0)return w;const S=Pe(c[h[I]],d[m[I]]);if(S!==0)return S}return q(h.length,m.length)}(n.mapValue,t.mapValue);default:throw L()}}function Fo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=Yt(n),r=Yt(t),i=q(e.seconds,r.seconds);return i!==0?i:q(e.nanos,r.nanos)}function Uo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Pe(e[i],r[i]);if(o)return o}return q(e.length,r.length)}function Ce(n){return gs(n)}function gs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Yt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Jt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=gs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${gs(e.fields[a])}`;return i+"}"}(n.mapValue):L()}function Gn(n){switch(Zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=pr(n);return t?16+Gn(t):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Gn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return ne(r.fields,(o,a)=>{i+=o.length+Gn(a)}),i}(n.mapValue);default:throw L()}}function _s(n){return!!n&&"integerValue"in n}function xs(n){return!!n&&"arrayValue"in n}function Bo(n){return!!n&&"nullValue"in n}function jo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wn(n){return!!n&&"mapValue"in n}function df(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ja])===null||e===void 0?void 0:e.stringValue)===Za}function sn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ne(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=sn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=sn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function mf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ff}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Wn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sn(e)}setAll(t){let e=ct.emptyPath(),r={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=c.popLast()}a?r[c.lastSegment()]=sn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Wn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Wn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){ne(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new At(sn(this.value))}}function tu(n){const t=[];return ne(n.fields,(e,r)=>{const i=new ct([e]);if(Wn(r)){const o=tu(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new St(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,r,i,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new yt(t,0,F.min(),F.min(),F.min(),At.empty(),0)}static newFoundDocument(t,e,r,i){return new yt(t,1,e,F.min(),r,i,0)}static newNoDocument(t,e){return new yt(t,2,e,F.min(),F.min(),At.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,F.min(),F.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e){this.position=t,this.inclusive=e}}function qo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Pe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function $o(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!bt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e="asc"){this.field=t,this.dir=e}}function pf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{}class rt extends eu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new _f(t,e,r):e==="array-contains"?new vf(t,r):e==="in"?new Tf(t,r):e==="not-in"?new If(t,r):e==="array-contains-any"?new Af(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new yf(t,r):new Ef(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Pe(e,this.value)):e!==null&&Zt(this.value)===Zt(e)&&this.matchesComparison(Pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends eu{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Dt(t,e)}matches(t){return nu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function nu(n){return n.op==="and"}function ru(n){return gf(n)&&nu(n)}function gf(n){for(const t of n.filters)if(t instanceof Dt)return!1;return!0}function ys(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Ce(n.value);if(ru(n))return n.filters.map(t=>ys(t)).join(",");{const t=n.filters.map(e=>ys(e)).join(",");return`${n.op}(${t})`}}function su(n,t){return n instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)}(n,t):n instanceof Dt?function(r,i){return i instanceof Dt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&su(a,i.filters[c]),!0):!1}(n,t):void L()}function iu(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ce(e.value)}`}(n):n instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(iu).join(" ,")+"}"}(n):"Filter"}class _f extends rt{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class yf extends rt{constructor(t,e){super(t,"in",e),this.keys=ou("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ef extends rt{constructor(t,e){super(t,"not-in",e),this.keys=ou("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ou(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class vf extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return xs(e)&&mn(e.arrayValue,this.value)}}class Tf extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&mn(this.value.arrayValue,e)}}class If extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!mn(this.value.arrayValue,e)}}class Af extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!xs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>mn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,e=null,r=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.le=null}}function zo(n,t=null,e=[],r=[],i=null,o=null,a=null){return new wf(n,t,e,r,i,o,a)}function Ms(n){const t=B(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ys(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),mr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ce(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ce(r)).join(",")),t.le=e}return t.le}function Ls(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!pf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!su(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!$o(n.startAt,t.startAt)&&$o(n.endAt,t.endAt)}function Es(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e=null,r=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Rf(n,t,e,r,i,o,a,c){return new gr(n,t,e,r,i,o,a,c)}function Fs(n){return new gr(n)}function Ho(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sf(n){return n.collectionGroup!==null}function on(n){const t=B(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new it(ct.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new ir(o,r))}),e.has(ct.keyField().canonicalString())||t.he.push(new ir(ct.keyField(),r))}return t.he}function Ct(n){const t=B(n);return t.Pe||(t.Pe=Pf(t,on(n))),t.Pe}function Pf(n,t){if(n.limitType==="F")return zo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ir(i.field,o)});const e=n.endAt?new sr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new sr(n.startAt.position,n.startAt.inclusive):null;return zo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function vs(n,t,e){return new gr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function _r(n,t){return Ls(Ct(n),Ct(t))&&n.limitType===t.limitType}function au(n){return`${Ms(Ct(n))}|lt:${n.limitType}`}function ve(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>iu(i)).join(", ")}]`),mr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ce(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ce(i)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function yr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of on(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,c,h){const d=qo(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,on(r),i)||r.endAt&&!function(a,c,h){const d=qo(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,on(r),i))}(n,t)}function Cf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function uu(n){return(t,e)=>{let r=!1;for(const i of on(n)){const o=Vf(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Vf(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Pe(h,d):L()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ne(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Ka(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new Y(M.comparator);function Ut(){return bf}const lu=new Y(M.comparator);function nn(...n){let t=lu;for(const e of n)t=t.insert(e.key,e);return t}function cu(n){let t=lu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ue(){return an()}function hu(){return an()}function an(){return new fe(n=>n.toString(),(n,t)=>n.isEqual(t))}const Df=new Y(M.comparator),Nf=new it(M.comparator);function j(...n){let t=Nf;for(const e of n)t=t.add(e);return t}const kf=new it(q);function Of(){return kf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:er(t)?"-0":t}}function fu(n){return{integerValue:""+n}}function xf(n,t){return af(t)?fu(t):Us(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this._=void 0}}function Mf(n,t,e){return n instanceof or?function(i,o){const a={fields:{[Qa]:{stringValue:Wa},[Ya]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Os(o)&&(o=pr(o)),o&&(a.fields[Xa]=o),{mapValue:a}}(e,t):n instanceof pn?mu(n,t):n instanceof gn?pu(n,t):function(i,o){const a=du(i,o),c=Ko(a)+Ko(i.Ie);return _s(a)&&_s(i.Ie)?fu(c):Us(i.serializer,c)}(n,t)}function Lf(n,t,e){return n instanceof pn?mu(n,t):n instanceof gn?pu(n,t):e}function du(n,t){return n instanceof ar?function(r){return _s(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class or extends Er{}class pn extends Er{constructor(t){super(),this.elements=t}}function mu(n,t){const e=gu(t);for(const r of n.elements)e.some(i=>bt(i,r))||e.push(r);return{arrayValue:{values:e}}}class gn extends Er{constructor(t){super(),this.elements=t}}function pu(n,t){let e=gu(t);for(const r of n.elements)e=e.filter(i=>!bt(i,r));return{arrayValue:{values:e}}}class ar extends Er{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Ko(n){return tt(n.integerValue||n.doubleValue)}function gu(n){return xs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ff(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof pn&&i instanceof pn||r instanceof gn&&i instanceof gn?Se(r.elements,i.elements,bt):r instanceof ar&&i instanceof ar?bt(r.Ie,i.Ie):r instanceof or&&i instanceof or}(n.transform,t.transform)}class Uf{constructor(t,e){this.version=t,this.transformResults=e}}class Mt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Mt}static exists(t){return new Mt(void 0,t)}static updateTime(t){return new Mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class vr{}function _u(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Eu(n.key,Mt.none()):new Tr(n.key,n.data,Mt.none());{const e=n.data,r=At.empty();let i=new it(ct.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new de(n.key,r,new St(i.toArray()),Mt.none())}}function Bf(n,t,e){n instanceof Tr?function(i,o,a){const c=i.value.clone(),h=Wo(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof de?function(i,o,a){if(!Qn(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Wo(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(yu(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function un(n,t,e,r){return n instanceof Tr?function(o,a,c,h){if(!Qn(o.precondition,a))return c;const d=o.value.clone(),m=Qo(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof de?function(o,a,c,h){if(!Qn(o.precondition,a))return c;const d=Qo(o.fieldTransforms,h,a),m=a.data;return m.setAll(yu(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,a,c){return Qn(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function jf(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=du(r.transform,i||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function Go(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Se(r,i,(o,a)=>Ff(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Tr extends vr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class de extends vr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function yu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Wo(n,t,e){const r=new Map;G(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,c=t.data.field(o.field);r.set(o.field,Lf(a,c,e[i]))}return r}function Qo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Mf(o,a,t))}return r}class Eu extends vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qf extends vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Bf(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=hu();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=_u(a,c);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Se(this.mutations,t.mutations,(e,r)=>Go(e,r))&&Se(this.baseMutations,t.baseMutations,(e,r)=>Go(e,r))}}class Bs{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){G(t.mutations.length===r.length);let i=function(){return Df}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Bs(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,$;function Kf(n){switch(n){case C.OK:return L();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return L()}}function vu(n){if(n===void 0)return Ft("GRPC error has no .code"),C.UNKNOWN;switch(n){case nt.OK:return C.OK;case nt.CANCELLED:return C.CANCELLED;case nt.UNKNOWN:return C.UNKNOWN;case nt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case nt.INTERNAL:return C.INTERNAL;case nt.UNAVAILABLE:return C.UNAVAILABLE;case nt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case nt.NOT_FOUND:return C.NOT_FOUND;case nt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case nt.ABORTED:return C.ABORTED;case nt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case nt.DATA_LOSS:return C.DATA_LOSS;default:return L()}}($=nt||(nt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new Wt([4294967295,4294967295],0);function Xo(n){const t=Gf().encode(n),e=new La;return e.update(t),new Uint8Array(e.digest())}function Yo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Wt([e,r],0),new Wt([i,o],0)]}class js{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new rn(`Invalid padding: ${e}`);if(r<0)throw new rn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new rn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new rn(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Wt.fromNumber(this.Ee)}Ae(t,e,r){let i=t.add(e.multiply(Wt.fromNumber(r)));return i.compare(Wf)===1&&(i=new Wt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=Xo(t),[r,i]=Yo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,i,o);if(!this.Re(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new js(o,i,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ee===0)return;const e=Xo(t),[r,i]=Yo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,i,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class rn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,En.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Ir(F.min(),i,new Y(q),Ut(),j())}}class En{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new En(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e,r,i){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=i}}class Tu{constructor(t,e){this.targetId=t,this.ge=e}}class Iu{constructor(t,e,r=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Jo{constructor(){this.pe=0,this.ye=Zo(),this.we=ht.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=j(),e=j(),r=j();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:L()}}),new En(this.we,this.be,t,e,r)}Me(){this.Se=!1,this.ye=Zo()}xe(t,e){this.Se=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,G(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class Qf{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Ut(),this.$e=zn(),this.Ke=zn(),this.Ue=new Y(q)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,r=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if(Es(o))if(r===0){const a=new M(o.path);this.ze(e,a,yt.newNoDocument(a,F.min()))}else G(r===1);else{const a=this.et(e);if(a!==r){const c=this.tt(t),h=c?this.nt(c,t,a):1;if(h!==0){this.Ye(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=Jt(r).toUint8Array()}catch(h){if(h instanceof Ga)return Re("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new js(a,i,o)}catch(h){return Re(h instanceof rn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ee===0?null:c}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const c=this.Xe(a);if(c){if(o.current&&Es(c.target)){const h=new M(c.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,yt.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let r=j();this.Ke.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Xe(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const i=new Ir(t,e,this.Ue,this.Qe,r);return this.Qe=Ut(),this.$e=zn(),this.Ke=zn(),this.Ue=new Y(q),i}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ke=this.Ke.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ke=this.Ke.insert(e,this.ct(e).delete(t)),this.Ke=this.Ke.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Jo,this.qe.set(t,e)),e}ct(t){let e=this.Ke.get(t);return e||(e=new it(q),this.Ke=this.Ke.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new it(q),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Jo),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function zn(){return new Y(M.comparator)}function Zo(){return new Y(M.comparator)}const Xf={asc:"ASCENDING",desc:"DESCENDING"},Yf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jf={and:"AND",or:"OR"};class Zf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ts(n,t){return n.useProto3Json||mr(t)?t:{value:t}}function ur(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Au(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function td(n,t){return ur(n,t.toTimestamp())}function Vt(n){return G(!!n),F.fromTimestamp(function(e){const r=Yt(e);return new st(r.seconds,r.nanos)}(n))}function qs(n,t){return Is(n,t).canonicalString()}function Is(n,t){const e=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function wu(n){const t=Z.fromString(n);return G(Vu(t)),t}function As(n,t){return qs(n.databaseId,t.path)}function os(n,t){const e=wu(t);if(e.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Su(e))}function Ru(n,t){return qs(n.databaseId,t)}function ed(n){const t=wu(n);return t.length===4?Z.emptyPath():Su(t)}function ws(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Su(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ta(n,t,e){return{name:As(n,t),fields:e.value.mapValue.fields}}function nd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(G(m===void 0||typeof m=="string"),ht.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ht.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?C.UNKNOWN:vu(d.code);return new x(m,d.message||"")}(a);e=new Iu(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=os(n,r.document.name),o=Vt(r.document.updateTime),a=r.document.createTime?Vt(r.document.createTime):F.min(),c=new At({mapValue:{fields:r.document.fields}}),h=yt.newFoundDocument(i,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Xn(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=os(n,r.document),o=r.readTime?Vt(r.readTime):F.min(),a=yt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new Xn([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=os(n,r.document),o=r.removedTargetIds||[];e=new Xn([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Hf(i,o),c=r.targetId;e=new Tu(c,a)}}return e}function rd(n,t){let e;if(t instanceof Tr)e={update:ta(n,t.key,t.value)};else if(t instanceof Eu)e={delete:As(n,t.key)};else if(t instanceof de)e={update:ta(n,t.key,t.data),updateMask:fd(t.fieldMask)};else{if(!(t instanceof qf))return L();e={verify:As(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof or)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof pn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ar)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw L()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:td(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(n,t.precondition)),e}function sd(n,t){return n&&n.length>0?(G(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?Vt(i.updateTime):Vt(o);return a.isEqual(F.min())&&(a=Vt(o)),new Uf(a,i.transformResults||[])}(e,t))):[]}function id(n,t){return{documents:[Ru(n,t.path)]}}function od(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ru(n,i);const o=function(d){if(d.length!==0)return Cu(Dt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:Te(w.field),direction:ld(w.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Ts(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ht:e,parent:i}}function ad(n){let t=ed(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){G(r===1);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(I){const w=Pu(I);return w instanceof Dt&&ru(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(I){return I.map(w=>function(V){return new ir(Ie(V.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(I){let w;return w=typeof I=="object"?I.value:I,mr(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(I){const w=!!I.before,S=I.values||[];return new sr(S,w)}(e.startAt));let d=null;return e.endAt&&(d=function(I){const w=!I.before,S=I.values||[];return new sr(S,w)}(e.endAt)),Rf(t,i,a,o,c,"F",h,d)}function ud(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Pu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ie(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ie(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ie(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ie(e.unaryFilter.field);return rt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return rt.create(Ie(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(r=>Pu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function ld(n){return Xf[n]}function cd(n){return Yf[n]}function hd(n){return Jf[n]}function Te(n){return{fieldPath:n.canonicalString()}}function Ie(n){return ct.fromServerFormat(n.fieldPath)}function Cu(n){return n instanceof rt?function(e){if(e.op==="=="){if(jo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NAN"}};if(Bo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NAN"}};if(Bo(e.value))return{unaryFilter:{field:Te(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Te(e.field),op:cd(e.op),value:e.value}}}(n):n instanceof Dt?function(e){const r=e.getFilters().map(i=>Cu(i));return r.length===1?r[0]:{compositeFilter:{op:hd(e.op),filters:r}}}(n):L()}function fd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Vu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,r,i,o=F.min(),a=F.min(),c=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t){this.Tt=t}}function md(n){const t=ad({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.Tn=new gd}addToCollectionParentIndex(t,e){return this.Tn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Xt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Xt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class gd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new it(Z.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new it(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bu=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(bu,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Ve(0)}static Un(){return new Ve(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="LruGarbageCollector",_d=1048576;function ra([n,t],[e,r]){const i=q(n,e);return i===0?q(t,r):i}class yd{constructor(t){this.Hn=t,this.buffer=new it(ra),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ra(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ed{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){N(na,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xe(e)?N(na,"Ignoring IndexedDB error during garbage collection: ",e):await Oe(e)}await this.er(3e5)})}}class vd{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return P.resolve(dr.ae);const r=new yd(e);return this.tr.forEachTarget(t,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(ea)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ea):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,i,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,a=Date.now(),this.nthSequenceNumber(t,i))).next(I=>(r=I,c=Date.now(),this.removeTargets(t,r,e))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(I=>(d=Date.now(),Ee()<=z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${I} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function Td(n,t){return new vd(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.changes=new fe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&un(r.mutation,i,St.empty(),st.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const i=ue();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=nn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ue();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,i){let o=Ut();const a=an(),c=function(){return an()}();return e.forEach((h,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof de)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),un(m.mutation,d,m.mutation.getFieldMask(),st.now())):a.set(d.key,St.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var I;return c.set(d,new Ad(m,(I=a.get(d))!==null&&I!==void 0?I:null))}),c))}recalculateAndSaveOverlays(t,e){const r=an();let i=new Y((a,c)=>a-c),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||St.empty();m=c.applyToLocalView(d,m),r.set(h,m);const I=(i.get(c.batchId)||j()).add(h);i=i.insert(c.batchId,I)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,I=hu();m.forEach(w=>{if(!o.has(w)){const S=_u(e.get(w),r.get(w));S!==null&&I.set(w,S),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,I))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Sf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):P.resolve(ue());let c=hn,h=o;return a.next(d=>P.forEach(d,(m,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,j())).next(m=>({batchId:c,changes:cu(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=nn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=nn();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const d=function(I,w){return new gr(w,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(m=>{m.forEach((I,w)=>{a=a.insert(I,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,yt.newInvalidDocument(m)))});let c=nn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&un(m.mutation,d,St.empty(),st.now()),yr(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return P.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Vt(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:md(i.bundledQuery),readTime:Vt(i.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.overlays=new Y(M.comparator),this.Rr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ue();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.Et(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const i=ue(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Y((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=ue(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=ue(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=i)););return P.resolve(c)}Et(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zf(e,r));let o=this.Rr.get(e);o===void 0&&(o=j(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.Vr=new it(at.mr),this.gr=new it(at.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new at(t,e))}br(t,e){t.forEach(r=>this.removeReference(r,e))}Sr(t){const e=new M(new Z([])),r=new at(e,t),i=new at(e,t+1),o=[];return this.gr.forEachInRange([r,i],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new M(new Z([])),r=new at(e,t),i=new at(e,t+1);let o=j();return this.gr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return M.comparator(t.key,e.key)||q(t.Cr,e.Cr)}static pr(t,e){return q(t.Cr,e.Cr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new it(at.mr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new $f(o,e,r,i);this.mutationQueue.push(a);for(const c of i)this.Mr=this.Mr.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Nr(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?ks:this.Fr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,i],a=>{const c=this.Or(a.Cr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new it(q);return e.forEach(i=>{const o=new at(i,0),a=new at(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],c=>{r=r.add(c.Cr)})}),P.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new at(new M(o),0);let c=new it(q);return this.Mr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.Cr)),!0)},a),P.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(r=>{const i=this.Or(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){G(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return P.forEach(e.mutations,i=>{const o=new at(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new at(e,0),i=this.Mr.firstAfterOrEqual(r);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.kr=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let r=Ut();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():yt.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Ut();const a=e.path,c=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||nf(ef(m),r)<=0||(i.has(m.key)||yr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L()}qr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new bd(this)}getSize(t){return P.resolve(this.size)}}class bd extends Id{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t){this.persistence=t,this.Qr=new fe(e=>Ms(e),Ls),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.$r=0,this.Kr=new $s,this.targetCount=0,this.Ur=Ve.Kn()}forEachTarget(t,e){return this.Qr.forEach((r,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),P.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ur=new Ve(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.zn(e),P.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Kr.Sr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Kr.yr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Kr.br(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Kr.Sr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Kr.vr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Kr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new dr(0),this.zr=!1,this.zr=!0,this.jr=new Pd,this.referenceDelegate=t(this),this.Hr=new Dd(this),this.indexManager=new pd,this.remoteDocumentCache=function(i){return new Vd(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new dd(e),this.Yr=new Rd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new Cd(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const i=new Nd(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return P.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class Nd extends sf{constructor(t){super(),this.currentSequenceNumber=t}}class zs{constructor(t){this.persistence=t,this.ti=new $s,this.ni=null}static ri(t){return new zs(t)}get ii(){if(this.ni)return this.ni;throw L()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),P.resolve()}removeTarget(t,e){this.ti.Sr(e.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ii,r=>{const i=M.fromPath(r);return this.si(t,i).next(o=>{o||e.removeEntry(i,F.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return P.or([()=>P.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class lr{constructor(t,e){this.persistence=t,this.oi=new fe(r=>uf(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Td(this,e)}static ri(t,e){return new lr(t,e)}Zr(){}Xr(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return P.forEach(this.oi,(r,i)=>this.ar(t,r,i).next(o=>o?P.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,a=>this.ar(t,a,e).next(c=>{c||(r++,o.removeEntry(a,F.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Gn(t.data.value)),e}ar(t,e,r){return P.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return P.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=i}static Yi(t,e){let r=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Hs(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Sc()?8:of(wc())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new kd;return this._s(t,e,a).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,a,c.size)})}).next(()=>o.result)}us(t,e,r,i){return r.documentReadCount<this.es?(Ee()<=z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",ve(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),P.resolve()):(Ee()<=z.DEBUG&&N("QueryEngine","Query:",ve(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Ee()<=z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",ve(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ct(e))):P.resolve())}rs(t,e){if(Ho(e))return P.resolve(null);let r=Ct(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=vs(e,null,"F"),r=Ct(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=j(...o);return this.ns.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.cs(e,c);return this.ls(e,d,a,h.readTime)?this.rs(t,vs(e,null,"F")):this.hs(t,d,e,h)}))})))}ss(t,e,r,i){return Ho(e)||i.isEqual(F.min())?P.resolve(null):this.ns.getDocuments(t,r).next(o=>{const a=this.cs(e,o);return this.ls(e,a,r,i)?P.resolve(null):(Ee()<=z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ve(e)),this.hs(t,a,e,tf(i,hn)).next(c=>c))})}cs(t,e){let r=new it(uu(t));return e.forEach((i,o)=>{yr(t,o)&&(r=r.add(o))}),r}ls(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,r){return Ee()<=z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",ve(e)),this.ns.getDocumentsMatchingQuery(t,e,Xt.min(),r)}hs(t,e,r,i){return this.ns.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="LocalStore",xd=3e8;class Md{constructor(t,e,r,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new Y(q),this.Is=new fe(o=>Ms(o),Ls),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new wd(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Ld(n,t,e,r){return new Md(n,t,e,r)}async function Nu(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=j();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Fd(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const I=d.batch,w=I.keys();let S=P.resolve();return w.forEach(V=>{S=S.next(()=>m.getEntry(h,V)).next(k=>{const D=d.docVersions.get(V);G(D!==null),k.version.compareTo(D)<0&&(I.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=j();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function ku(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Ud(n,t){const e=B(n),r=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const c=[];t.targetChanges.forEach((m,I)=>{const w=i.get(I);if(!w)return;c.push(e.Hr.removeMatchingKeys(o,m.removedDocuments,I).next(()=>e.Hr.addMatchingKeys(o,m.addedDocuments,I)));let S=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?S=S.withResumeToken(ht.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),i=i.insert(I,S),function(k,D,O){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=xd?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(w,S,m)&&c.push(e.Hr.updateTargetData(o,S))});let h=Ut(),d=j();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Bd(o,a,t.documentUpdates).next(m=>{h=m.Vs,d=m.fs})),!r.isEqual(F.min())){const m=e.Hr.getLastRemoteSnapshotVersion(o).next(I=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return P.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ts=i,o))}function Bd(n,t,e){let r=j(),i=j();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Ut();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):N(Ks,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Vs:a,fs:i}})}function jd(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=ks),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function qd(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Hr.getTargetData(r,t).next(o=>o?(i=o,P.resolve(i)):e.Hr.allocateTargetId(r).next(a=>(i=new Ht(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function Rs(n,t,e){const r=B(n),i=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!xe(a))throw a;N(Ks,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(i.target)}function sa(n,t,e){const r=B(n);let i=F.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const I=B(h),w=I.Is.get(m);return w!==void 0?P.resolve(I.Ts.get(w)):I.Hr.getTargetData(d,m)}(r,a,Ct(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,e?i:F.min(),e?o:j())).next(c=>($d(r,Cf(t),c),{documents:c,gs:o})))}function $d(n,t,e){let r=n.Es.get(t)||F.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class ia{constructor(){this.activeTargetIds=Of()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zd{constructor(){this.ho=new ia,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new ia,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="ConnectivityMonitor";class aa{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){N(oa,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){N(oa,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn=null;function Ss(){return Hn===null?Hn=function(){return 268435456+Math.round(2147483648*Math.random())}():Hn++,"0x"+Hn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="RestConnection",Kd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Gd{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===nr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(t,e,r,i,o){const a=Ss(),c=this.So(t,e.toUriEncodedString());N(as,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,i,o),this.vo(t,c,h,r).then(d=>(N(as,`Received RPC '${t}' ${a}: `,d),d),d=>{throw Re(as,`RPC '${t}' ${a} failed with error: `,d,"url: ",c,"request:",r),d})}Co(t,e,r,i,o,a){return this.bo(t,e,r,i,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ke}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}So(t,e){const r=Kd[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class Qd extends Gd{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,i){const o=Ss();return new Promise((a,c)=>{const h=new Fa;h.setWithCredentials(!0),h.listenOnce(Ua.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Kn.NO_ERROR:const m=h.getResponseJson();N(gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case Kn.TIMEOUT:N(gt,`RPC '${t}' ${o} timed out`),c(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case Kn.HTTP_ERROR:const I=h.getStatus();if(N(gt,`RPC '${t}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const V=function(D){const O=D.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(O)>=0?O:C.UNKNOWN}(S.status);c(new x(V,S.message))}else c(new x(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new x(C.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{N(gt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);N(gt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",d,r,15)})}Wo(t,e,r){const i=Ss(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=qa(),c=ja(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");N(gt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const I=a.createWebChannel(m,h);let w=!1,S=!1;const V=new Wd({Fo:D=>{S?N(gt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(w||(N(gt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),w=!0),N(gt,`RPC '${t}' stream ${i} sending:`,D),I.send(D))},Mo:()=>I.close()}),k=(D,O,U)=>{D.listen(O,H=>{try{U(H)}catch(Q){setTimeout(()=>{throw Q},0)}})};return k(I,en.EventType.OPEN,()=>{S||(N(gt,`RPC '${t}' stream ${i} transport opened.`),V.Qo())}),k(I,en.EventType.CLOSE,()=>{S||(S=!0,N(gt,`RPC '${t}' stream ${i} transport closed`),V.Ko())}),k(I,en.EventType.ERROR,D=>{S||(S=!0,Re(gt,`RPC '${t}' stream ${i} transport errored:`,D),V.Ko(new x(C.UNAVAILABLE,"The operation could not be completed")))}),k(I,en.EventType.MESSAGE,D=>{var O;if(!S){const U=D.data[0];G(!!U);const H=U,Q=(H==null?void 0:H.error)||((O=H[0])===null||O===void 0?void 0:O.error);if(Q){N(gt,`RPC '${t}' stream ${i} received error:`,Q);const ot=Q.status;let et=function(_){const y=nt[_];if(y!==void 0)return vu(y)}(ot),E=Q.message;et===void 0&&(et=C.INTERNAL,E="Unknown error status: "+ot+" with message "+Q.message),S=!0,V.Ko(new x(et,E)),I.close()}else N(gt,`RPC '${t}' stream ${i} received:`,U),V.Uo(U)}}),k(c,Ba.STAT_EVENT,D=>{D.stat===ps.PROXY?N(gt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===ps.NOPROXY&&N(gt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{V.$o()},0),V}}function us(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){return new Zf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="PersistentStream";class xu{constructor(t,e,r,i,o,a,c,h){this.Ti=t,this.n_=r,this.r_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Ou(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===e&&this.V_(r,i)},r=>{t(()=>{const i=new x(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return N(ua,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(N(ua,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xd extends xu{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=nd(this.serializer,t),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Vt(a.readTime):F.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=ws(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Es(h)?{documents:id(o,h)}:{query:od(o,h).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Au(o,a.resumeToken);const d=Ts(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=ur(o,a.snapshotVersion.toTimestamp());const d=Ts(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=ud(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=ws(this.serializer),e.removeTarget=t,this.I_(e)}}class Yd extends xu{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return G(!!t.streamToken),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){G(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=sd(t.writeResults,t.commitTime),r=Vt(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=ws(this.serializer),this.I_(t)}S_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>rd(this.serializer,r))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{}class Zd extends Jd{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,e,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.bo(t,Is(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(C.UNKNOWN,o.toString())})}Co(t,e,r,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(t,Is(e,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(C.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class tm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ft(e),this.N_=!1):N("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="RemoteStore";class em{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{me(this)&&(N(he,"Restarting streams for network reachability change."),await async function(h){const d=B(h);d.W_.add(4),await vn(d),d.j_.set("Unknown"),d.W_.delete(4),await wr(d)}(this))})}),this.j_=new tm(r,i)}}async function wr(n){if(me(n))for(const t of n.G_)await t(!0)}async function vn(n){for(const t of n.G_)await t(!1)}function Mu(n,t){const e=B(n);e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),Xs(e)?Qs(e):Me(e).c_()&&Ws(e,t))}function Gs(n,t){const e=B(n),r=Me(e);e.U_.delete(t),r.c_()&&Lu(e,t),e.U_.size===0&&(r.c_()?r.P_():me(e)&&e.j_.set("Unknown"))}function Ws(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Me(n).y_(t)}function Lu(n,t){n.H_.Ne(t),Me(n).w_(t)}function Qs(n){n.H_=new Qf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.U_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),Me(n).start(),n.j_.B_()}function Xs(n){return me(n)&&!Me(n).u_()&&n.U_.size>0}function me(n){return B(n).W_.size===0}function Fu(n){n.H_=void 0}async function nm(n){n.j_.set("Online")}async function rm(n){n.U_.forEach((t,e)=>{Ws(n,t)})}async function sm(n,t){Fu(n),Xs(n)?(n.j_.q_(t),Qs(n)):n.j_.set("Unknown")}async function im(n,t,e){if(n.j_.set("Online"),t instanceof Iu&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.U_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.U_.delete(c),i.H_.removeTarget(c))}(n,t)}catch(r){N(he,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await cr(n,r)}else if(t instanceof Xn?n.H_.We(t):t instanceof Tu?n.H_.Ze(t):n.H_.je(t),!e.isEqual(F.min()))try{const r=await ku(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.H_.ot(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.U_.get(d);m&&o.U_.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.U_.get(h);if(!m)return;o.U_.set(h,m.withResumeToken(ht.EMPTY_BYTE_STRING,m.snapshotVersion)),Lu(o,h);const I=new Ht(m.target,h,d,m.sequenceNumber);Ws(o,I)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){N(he,"Failed to raise snapshot:",r),await cr(n,r)}}async function cr(n,t,e){if(!xe(t))throw t;n.W_.add(1),await vn(n),n.j_.set("Offline"),e||(e=()=>ku(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(he,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await wr(n)})}function Uu(n,t){return t().catch(e=>cr(n,e,t))}async function Rr(n){const t=B(n),e=te(t);let r=t.K_.length>0?t.K_[t.K_.length-1].batchId:ks;for(;om(t);)try{const i=await jd(t.localStore,r);if(i===null){t.K_.length===0&&e.P_();break}r=i.batchId,am(t,i)}catch(i){await cr(t,i)}Bu(t)&&ju(t)}function om(n){return me(n)&&n.K_.length<10}function am(n,t){n.K_.push(t);const e=te(n);e.c_()&&e.b_&&e.S_(t.mutations)}function Bu(n){return me(n)&&!te(n).u_()&&n.K_.length>0}function ju(n){te(n).start()}async function um(n){te(n).C_()}async function lm(n){const t=te(n);for(const e of n.K_)t.S_(e.mutations)}async function cm(n,t,e){const r=n.K_.shift(),i=Bs.from(r,t,e);await Uu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Rr(n)}async function hm(n,t){t&&te(n).b_&&await async function(r,i){if(function(a){return Kf(a)&&a!==C.ABORTED}(i.code)){const o=r.K_.shift();te(r).h_(),await Uu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Rr(r)}}(n,t),Bu(n)&&ju(n)}async function la(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),N(he,"RemoteStore received new credentials");const r=me(e);e.W_.add(3),await vn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await wr(e)}async function fm(n,t){const e=B(n);t?(e.W_.delete(2),await wr(e)):t||(e.W_.add(2),await vn(e),e.j_.set("Unknown"))}function Me(n){return n.J_||(n.J_=function(e,r,i){const o=B(e);return o.M_(),new Xd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:nm.bind(null,n),No:rm.bind(null,n),Lo:sm.bind(null,n),p_:im.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),Xs(n)?Qs(n):n.j_.set("Unknown")):(await n.J_.stop(),Fu(n))})),n.J_}function te(n){return n.Y_||(n.Y_=function(e,r,i){const o=B(e);return o.M_(),new Yd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:um.bind(null,n),Lo:hm.bind(null,n),D_:lm.bind(null,n),v_:cm.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await Rr(n)):(await n.Y_.stop(),n.K_.length>0&&(N(he,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,c=new Ys(t,e,a,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Js(n,t){if(Ft("AsyncQueue",`${t}: ${n}`),xe(n))return new x(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static emptySet(t){return new we(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=nn(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new we;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.Z_=new Y(M.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):L():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class be{constructor(t,e,r,i,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new be(t,e,we.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_r(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class mm{constructor(){this.queries=ha(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const i=B(e),o=i.queries;i.queries=ha(),o.forEach((a,c)=>{for(const h of c.ta)h.onError(r)})})(this,new x(C.ABORTED,"Firestore shutting down"))}}function ha(){return new fe(n=>au(n),_r)}async function pm(n,t){const e=B(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(r=2):(o=new dm,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=Js(a,`Initialization of query '${ve(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&Zs(e)}async function gm(n,t){const e=B(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function _m(n,t){const e=B(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.ta)c.oa(i)&&(r=!0);a.ea=i}}r&&Zs(e)}function ym(n,t,e){const r=B(n),i=r.queries.get(t);if(i)for(const o of i.ta)o.onError(e);r.queries.delete(t)}function Zs(n){n.ia.forEach(t=>{t.next()})}var Ps,fa;(fa=Ps||(Ps={}))._a="default",fa.Cache="cache";class Em{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new be(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=be.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Ps.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t){this.key=t}}class $u{constructor(t){this.key=t}}class vm{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=j(),this.mutatedKeys=j(),this.ya=uu(t),this.wa=new we(this.ya)}get ba(){return this.fa}Sa(t,e){const r=e?e.Da:new ca,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,I)=>{const w=i.get(m),S=yr(this.query,I)?I:null,V=!!w&&this.mutatedKeys.has(w.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;w&&S?w.data.isEqual(S.data)?V!==k&&(r.track({type:3,doc:S}),D=!0):this.va(w,S)||(r.track({type:2,doc:S}),D=!0,(h&&this.ya(S,h)>0||d&&this.ya(S,d)<0)&&(c=!0)):!w&&S?(r.track({type:0,doc:S}),D=!0):w&&!S&&(r.track({type:1,doc:w}),D=!0,(h||d)&&(c=!0)),D&&(S?(a=a.add(S),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{wa:a,Da:r,ls:c,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((m,I)=>function(S,V){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return k(S)-k(V)}(m.type,I.type)||this.ya(m.doc,I.doc)),this.Ca(r),i=i!=null&&i;const c=e&&!i?this.Fa():[],h=this.pa.size===0&&this.current&&!i?1:0,d=h!==this.ga;return this.ga=h,a.length!==0||d?{snapshot:new be(this.query,t.wa,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ca,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=j(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new $u(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new qu(r))}),e}Oa(t){this.fa=t.gs,this.pa=j();const e=this.Sa(t.documents);return this.applyChanges(e,!0)}Na(){return be.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ti="SyncEngine";class Tm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Im{constructor(t){this.key=t,this.Ba=!1}}class Am{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new fe(c=>au(c),_r),this.qa=new Map,this.Qa=new Set,this.$a=new Y(M.comparator),this.Ka=new Map,this.Ua=new $s,this.Wa={},this.Ga=new Map,this.za=Ve.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function wm(n,t,e=!0){const r=Qu(n);let i;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await zu(r,t,e,!0),i}async function Rm(n,t){const e=Qu(n);await zu(e,t,!0,!1)}async function zu(n,t,e,r){const i=await qd(n.localStore,Ct(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Sm(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Mu(n.remoteStore,i),c}async function Sm(n,t,e,r,i){n.Ha=(I,w,S)=>async function(k,D,O,U){let H=D.view.Sa(O);H.ls&&(H=await sa(k.localStore,D.query,!1).then(({documents:E})=>D.view.Sa(E,H)));const Q=U&&U.targetChanges.get(D.targetId),ot=U&&U.targetMismatches.get(D.targetId)!=null,et=D.view.applyChanges(H,k.isPrimaryClient,Q,ot);return ma(k,D.targetId,et.Ma),et.snapshot}(n,I,w,S);const o=await sa(n.localStore,t,!0),a=new vm(t,o.gs),c=a.Sa(o.documents),h=En.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,h);ma(n,e,d.Ma);const m=new Tm(t,e,a);return n.ka.set(t,m),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),d.snapshot}async function Pm(n,t,e){const r=B(n),i=r.ka.get(t),o=r.qa.get(i.targetId);if(o.length>1)return r.qa.set(i.targetId,o.filter(a=>!_r(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Rs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Gs(r.remoteStore,i.targetId),Cs(r,i.targetId)}).catch(Oe)):(Cs(r,i.targetId),await Rs(r.localStore,i.targetId,!0))}async function Cm(n,t){const e=B(n),r=e.ka.get(t),i=e.qa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Gs(e.remoteStore,r.targetId))}async function Vm(n,t,e){const r=Mm(n);try{const i=await function(a,c){const h=B(a),d=st.now(),m=c.reduce((S,V)=>S.add(V.key),j());let I,w;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let V=Ut(),k=j();return h.ds.getEntries(S,m).next(D=>{V=D,V.forEach((O,U)=>{U.isValidDocument()||(k=k.add(O))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,V)).next(D=>{I=D;const O=[];for(const U of c){const H=jf(U,I.get(U.key).overlayedDocument);H!=null&&O.push(new de(U.key,H,tu(H.value.mapValue),Mt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,O,c)}).next(D=>{w=D;const O=D.applyToLocalDocumentSet(I,k);return h.documentOverlayCache.saveOverlays(S,D.batchId,O)})}).then(()=>({batchId:w.batchId,changes:cu(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let d=a.Wa[a.currentUser.toKey()];d||(d=new Y(q)),d=d.insert(c,h),a.Wa[a.currentUser.toKey()]=d}(r,i.batchId,e),await Tn(r,i.changes),await Rr(r.remoteStore)}catch(i){const o=Js(i,"Failed to persist write");e.reject(o)}}async function Hu(n,t){const e=B(n);try{const r=await Ud(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Ka.get(o);a&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ba=!0:i.modifiedDocuments.size>0?G(a.Ba):i.removedDocuments.size>0&&(G(a.Ba),a.Ba=!1))}),await Tn(e,r,t)}catch(r){await Oe(r)}}function da(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ka.forEach((o,a)=>{const c=a.view.sa(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=B(a);h.onlineState=c;let d=!1;h.queries.forEach((m,I)=>{for(const w of I.ta)w.sa(c)&&(d=!0)}),d&&Zs(h)}(r.eventManager,t),i.length&&r.La.p_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bm(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ka.get(t),o=i&&i.key;if(o){let a=new Y(M.comparator);a=a.insert(o,yt.newNoDocument(o,F.min()));const c=j().add(o),h=new Ir(F.min(),new Map,new Y(q),a,c);await Hu(r,h),r.$a=r.$a.remove(o),r.Ka.delete(t),ei(r)}else await Rs(r.localStore,t,!1).then(()=>Cs(r,t,e)).catch(Oe)}async function Dm(n,t){const e=B(n),r=t.batch.batchId;try{const i=await Fd(e.localStore,t);Gu(e,r,null),Ku(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Tn(e,i)}catch(i){await Oe(i)}}async function Nm(n,t,e){const r=B(n);try{const i=await function(a,c){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(I=>(G(I!==null),m=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);Gu(r,t,e),Ku(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Tn(r,i)}catch(i){await Oe(i)}}function Ku(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function Gu(n,t,e){const r=B(n);let i=r.Wa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Wa[r.currentUser.toKey()]=i}}function Cs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ua.Sr(t).forEach(r=>{n.Ua.containsKey(r)||Wu(n,r)})}function Wu(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(Gs(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ka.delete(e),ei(n))}function ma(n,t,e){for(const r of e)r instanceof qu?(n.Ua.addReference(r.key,t),km(n,r)):r instanceof $u?(N(ti,"Document no longer in limbo: "+r.key),n.Ua.removeReference(r.key,t),n.Ua.containsKey(r.key)||Wu(n,r.key)):L()}function km(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(N(ti,"New document in limbo: "+e),n.Qa.add(r),ei(n))}function ei(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new M(Z.fromString(t)),r=n.za.next();n.Ka.set(r,new Im(e)),n.$a=n.$a.insert(e,r),Mu(n.remoteStore,new Ht(Ct(Fs(e.path)),r,"TargetPurposeLimboResolution",dr.ae))}}async function Tn(n,t,e){const r=B(n),i=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,h)=>{a.push(r.Ha(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const I=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){i.push(d);const I=Hs.Yi(h.targetId,d);o.push(I)}}))}),await Promise.all(a),r.La.p_(i),await async function(h,d){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>P.forEach(d,w=>P.forEach(w.Hi,S=>m.persistence.referenceDelegate.addReference(I,w.targetId,S)).next(()=>P.forEach(w.Ji,S=>m.persistence.referenceDelegate.removeReference(I,w.targetId,S)))))}catch(I){if(!xe(I))throw I;N(Ks,"Failed to update sequence numbers: "+I)}for(const I of d){const w=I.targetId;if(!I.fromCache){const S=m.Ts.get(w),V=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(V);m.Ts=m.Ts.insert(w,k)}}}(r.localStore,o))}async function Om(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){N(ti,"User change. New user:",t.toKey());const r=await Nu(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(c=>{c.forEach(h=>{h.reject(new x(C.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Tn(e,r.Rs)}}function xm(n,t){const e=B(n),r=e.Ka.get(t);if(r&&r.Ba)return j().add(r.key);{let i=j();const o=e.qa.get(t);if(!o)return i;for(const a of o){const c=e.ka.get(a);i=i.unionWith(c.view.ba)}return i}}function Qu(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Hu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bm.bind(null,t),t.La.p_=_m.bind(null,t.eventManager),t.La.Ja=ym.bind(null,t.eventManager),t}function Mm(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Nm.bind(null,t),t}class hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ar(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Ld(this.persistence,new Od,t.initialUser,this.serializer)}Xa(t){return new Du(zs.ri,this.serializer)}Za(t){return new zd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hr.provider={build:()=>new hr};class Lm extends hr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){G(this.persistence.referenceDelegate instanceof lr);const r=this.persistence.referenceDelegate.garbageCollector;return new Ed(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Du(r=>lr.ri(r,e),this.serializer)}}class Vs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>da(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Om.bind(null,this.syncEngine),await fm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new mm}()}createDatastore(t){const e=Ar(t.databaseInfo.databaseId),r=function(o){return new Qd(o)}(t.databaseInfo);return function(o,a,c,h){return new Zd(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,c){return new em(r,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>da(this.syncEngine,e,0),function(){return aa.D()?new aa:new Hd}())}createSyncEngine(t,e){return function(i,o,a,c,h,d,m){const I=new Am(i,o,a,c,h,d);return m&&(I.ja=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=B(i);N(he,"RemoteStore shutting down."),o.W_.add(5),await vn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Vs.provider={build:()=>new Vs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="FirestoreClient";class Um{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=za.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(ee,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(ee,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Js(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ls(n,t){n.asyncQueue.verifyOperationInProgress(),N(ee,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Nu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function pa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Bm(n);N(ee,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>la(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>la(t.remoteStore,i)),n._onlineComponents=t}async function Bm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(ee,"Using user provided OfflineComponentProvider");try{await ls(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Re("Error using user provided cache. Falling back to memory cache: "+e),await ls(n,new hr)}}else N(ee,"Using default OfflineComponentProvider"),await ls(n,new Lm(void 0));return n._offlineComponents}async function Xu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(ee,"Using user provided OnlineComponentProvider"),await pa(n,n._uninitializedComponentsProvider._online)):(N(ee,"Using default OnlineComponentProvider"),await pa(n,new Vs))),n._onlineComponents}function jm(n){return Xu(n).then(t=>t.syncEngine)}async function qm(n){const t=await Xu(n),e=t.eventManager;return e.onListen=wm.bind(null,t.syncEngine),e.onUnlisten=Pm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Rm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Cm.bind(null,t.syncEngine),e}function $m(n,t,e={}){const r=new Qt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Fm({next:w=>{m.su(),a.enqueueAndForget(()=>gm(o,I));const S=w.docs.has(c);!S&&w.fromCache?d.reject(new x(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&h&&h.source==="server"?d.reject(new x(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),I=new Em(Fs(c.path),m,{includeMetadataChanges:!0,Ta:!0});return pm(o,I)}(await qm(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(n,t,e){if(!e)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Hm(n,t,e,r){if(t===!0&&r===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function _a(n){if(!M.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ni(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function _n(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ni(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="firestore.googleapis.com",ya=!0;class Ea{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ju,this.ssl=ya}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:ya;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=bu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<_d)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ri{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ea({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ea(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Kh;switch(r.type){case"firstParty":return new Xh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ga.get(e);r&&(N("ComponentProvider","Removing Datastore"),ga.delete(e),r.terminate())}(this),Promise.resolve()}}function Km(n,t,e,r={}){var i;const o=(n=_n(n,ri))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==Ju&&o.host!==c&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!Jn(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=_t.MOCK_USER;else{d=Ac(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new _t(I)}n._authCredentials=new Gh(new $a(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new si(this.firestore,t,this._query)}}class wt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class yn extends si{constructor(t,e,r){super(t,e,Fs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new M(t))}withConverter(t){return new yn(this.firestore,t,this._path)}}function Gm(n,t,...e){if(n=le(n),arguments.length===1&&(t=za.newId()),zm("doc","path",t),n instanceof ri){const r=Z.fromString(t,...e);return _a(r),new wt(n,null,new M(r))}{if(!(n instanceof wt||n instanceof yn))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return _a(r),new wt(n.firestore,n instanceof yn?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="AsyncQueue";class Ta{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Ou(this,"async_queue_retry"),this.bu=()=>{const r=us();r&&N(va,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=t;const e=us();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=us();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Qt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!xe(t))throw t;N(va,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.Su.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Ft("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=Ys.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&L()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class ii extends ri{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Ta,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ta(t),this._firestoreClient=void 0,await t}}}function Wm(n,t){const e=typeof n=="object"?n:kh(),r=typeof n=="string"?n:nr,i=Ch(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Tc("firestore");o&&Km(i,...o)}return i}function Zu(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qm(n),n._firestoreClient}function Qm(n){var t,e,r;const i=n._freezeSettings(),o=function(c,h,d,m){return new hf(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Yu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Um(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this._byteString=t}static fromBase64String(t){try{return new De(ht.fromBase64String(t))}catch(e){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new De(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=/^__.*__$/;class tl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new de(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function el(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class li{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new li(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:r,Qu:!1});return i.$u(t),i}Ku(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return fr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(el(this.Lu)&&Xm.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Ym{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Ar(t)}ju(t,e,r,i=!1){return new li({Lu:t,methodName:e,zu:r,path:ct.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jm(n){const t=n._freezeSettings(),e=Ar(n._databaseId);return new Ym(n._databaseId,!!t.ignoreUndefinedProperties,e)}class Pr extends oi{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Pr}}function Zm(n,t,e,r){const i=n.ju(1,t,e);rl("Data must be an object, but it was:",i,r);const o=[],a=At.empty();ne(r,(h,d)=>{const m=ci(t,h,e);d=le(d);const I=i.Ku(m);if(d instanceof Pr)o.push(m);else{const w=Cr(d,I);w!=null&&(o.push(m),a.set(m,w))}});const c=new St(o);return new tl(a,c,i.fieldTransforms)}function tp(n,t,e,r,i,o){const a=n.ju(1,t,e),c=[Ia(t,r,e)],h=[i];if(o.length%2!=0)throw new x(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(Ia(t,o[w])),h.push(o[w+1]);const d=[],m=At.empty();for(let w=c.length-1;w>=0;--w)if(!rp(d,c[w])){const S=c[w];let V=h[w];V=le(V);const k=a.Ku(S);if(V instanceof Pr)d.push(S);else{const D=Cr(V,k);D!=null&&(d.push(S),m.set(S,D))}}const I=new St(d);return new tl(m,I,a.fieldTransforms)}function Cr(n,t){if(nl(n=le(n)))return rl("Unsupported field value:",t,n),ep(n,t);if(n instanceof oi)return function(r,i){if(!el(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const c of r){let h=Cr(c,i.Uu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=st.fromDate(r);return{timestampValue:ur(i.serializer,o)}}if(r instanceof st){const o=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ur(i.serializer,o)}}if(r instanceof ai)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:Au(i.serializer,r._byteString)};if(r instanceof wt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:qs(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ui)return function(a,c){return{mapValue:{fields:{[Ja]:{stringValue:Za},[rr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return Us(c.serializer,d)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${ni(r)}`)}(n,t)}function ep(n,t){const e={};return Ka(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ne(n,(r,i)=>{const o=Cr(i,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function nl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof st||n instanceof ai||n instanceof De||n instanceof wt||n instanceof oi||n instanceof ui)}function rl(n,t,e){if(!nl(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=ni(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function Ia(n,t,e){if((t=le(t))instanceof Sr)return t._internalPath;if(typeof t=="string")return ci(n,t);throw fr("Field path arguments must be of type string or ",n,!1,void 0,e)}const np=new RegExp("[~\\*/\\[\\]]");function ci(n,t,e){if(t.search(np)>=0)throw fr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Sr(...t.split("."))._internalPath}catch{throw fr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function fr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new x(C.INVALID_ARGUMENT,c+n+h)}function rp(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new sp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(il("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class sp extends sl{data(){return super.data()}}function il(n,t){return typeof t=="string"?ci(n,t):t instanceof Sr?t._internalPath:t._delegate._internalPath}class ip{convertValue(t,e="none"){switch(Zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ne(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[rr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>tt(a.doubleValue));return new ui(o)}convertGeoPoint(t){return new ai(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=pr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(fn(t));default:return null}}convertTimestamp(t){const e=Yt(t);return new st(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);G(Vu(r));const i=new dn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ol extends sl{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ap(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(il("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ap extends ol{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n){n=_n(n,wt);const t=_n(n.firestore,ii);return $m(Zu(t),n._key).then(e=>fp(t,n,e))}class lp extends ip{constructor(t){super(),this.firestore=t}convertBytes(t){return new De(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function cp(n,t,e,...r){n=_n(n,wt);const i=_n(n.firestore,ii),o=Jm(i);let a;return a=typeof(t=le(t))=="string"||t instanceof Sr?tp(o,"updateDoc",n._key,t,e,r):Zm(o,"updateDoc",n._key,t),hp(i,[a.toMutation(n._key,Mt.exists(!0))])}function hp(n,t){return function(r,i){const o=new Qt;return r.asyncQueue.enqueueAndForget(async()=>Vm(await jm(r),i,o)),o.promise}(Zu(n),t)}function fp(n,t,e){const r=e.docs.get(t._key),i=new lp(n);return new ol(n,i,t._key,r,new op(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){ke=i})(Nh),tr(new ln("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new ii(new Wh(r.getProvider("auth-internal")),new Yh(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dn(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ae(Vo,bo,t),Ae(Vo,bo,"esm2017")})();const dp={apiKey:"AIzaSyAlujjnyHYZkOvtpg-iz0lPTukz6nHIjqI",authDomain:"portfolio-dk-1337.firebaseapp.com",projectId:"portfolio-dk-1337",storageBucket:"portfolio-dk-1337.firebasestorage.app",messagingSenderId:"383959672571",appId:"1:383959672571:web:f384a2f7e841624b53b25e",measurementId:"G-30PYJPQ3B1"},mp=Oa(dp),pp=Wm(mp);async function Tp(){const n=Gm(pp,"visitors","counter"),t=await up(n);if(t.exists()){const r=t.data().counter+1;return await cp(n,{counter:r}),r}else return console.error("Document bestaat niet!"),0}export{yp as e,_p as i,Ep as s,Tp as u};
