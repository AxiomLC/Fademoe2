/*! For license information please see 5367.38c00bc8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkorderly_js_sdk_cra_template=self.webpackChunkorderly_js_sdk_cra_template||[]).push([[5367],{95367:(e,t,n)=>{n.d(t,{$:()=>Ve,A:()=>Ie,B:()=>r,C:()=>ze,D:()=>k,E:()=>c,F:()=>Me,G:()=>P,H:()=>K,I:()=>Se,J:()=>ye,K:()=>m,L:()=>v,M:()=>O,N:()=>be,O:()=>Qe,P:()=>de,Q:()=>Te,R:()=>Ue,S:()=>i,T:()=>We,U:()=>je,V:()=>L,W:()=>s,X:()=>Be,Y:()=>Ne,Z:()=>Re,_:()=>Ge,a:()=>C,a0:()=>_e,a1:()=>He,a2:()=>De,a3:()=>Xe,a4:()=>qe,a5:()=>p,a6:()=>Le,a7:()=>et,a8:()=>Fe,b:()=>x,c:()=>Oe,d:()=>T,e:()=>U,f:()=>X,g:()=>N,h:()=>A,i:()=>l,j:()=>E,k:()=>w,l:()=>Ke,m:()=>me,n:()=>F,o:()=>R,p:()=>Ce,q:()=>Ae,r:()=>W,s:()=>h,t:()=>q,u:()=>we,v:()=>ke,w:()=>Y,x:()=>d,y:()=>tt,z:()=>g});const i=e=>e,s=e=>e;class r extends Error{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:"viem@2.12.0"});const n=t.cause instanceof r?t.cause.details:t.cause?.message?t.cause.message:t.details,i=t.cause instanceof r&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...n?[`Details: ${n}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=n,this.docsPath=i,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return o(this,e)}}function o(e,t){return t?.(e)?e:e&&"object"===typeof e&&"cause"in e?o(e.cause,t):t?null:e}class a extends r{constructor(e){let{max:t,min:n,signed:i,size:s,value:r}=e;super(`Number "${r}" is not in safe ${s?`${8*s}-bit ${i?"signed":"unsigned"} `:""}integer range ${t?`(${n} to ${t})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class c extends r{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class u extends r{constructor(e){let{givenSize:t,maxSize:n}=e;super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function l(e){let{strict:t=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!!e&&("string"===typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")))}function h(e){return l(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}function d(e){let{dir:t="left"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="string"===typeof e?e.replace("0x",""):e,i=0;for(let s=0;s<n.length-1&&"0"===n["left"===t?s:n.length-s-1].toString();s++)i++;return n="left"===t?n.slice(i):n.slice(0,n.length-i),"string"===typeof e?(1===n.length&&"right"===t&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class f extends r{constructor(e){let{offset:t,position:n,size:i}=e;super(`Slice ${"start"===n?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${i}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class b extends r{constructor(e){let{size:t,targetSize:n,type:i}=e;super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class p extends r{constructor(e){let{size:t,targetSize:n,type:i}=e;super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} is expected to be ${n} ${i} long, but is ${t} ${i} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}function g(e){let{dir:t,size:n=32}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e?m(e,{dir:t,size:n}):function(e){let{dir:t,size:n=32}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===n)return e;if(e.length>n)throw new b({size:e.length,targetSize:n,type:"bytes"});const i=new Uint8Array(n);for(let s=0;s<n;s++){const r="right"===t;i[r?s:n-s-1]=e[r?s:e.length-s-1]}return i}(e,{dir:t,size:n})}function m(e){let{dir:t,size:n=32}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===n)return e;const i=e.replace("0x","");if(i.length>2*n)throw new b({size:Math.ceil(i.length/2),targetSize:n,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*n,"0")}`}const y=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"number"===typeof e||"bigint"===typeof e?P(e,t):"string"===typeof e?O(e,t):"boolean"===typeof e?v(e,t):x(e,t)}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=`0x${Number(e)}`;return"number"===typeof t.size?(k(n,{size:t.size}),g(n,{size:t.size})):n}function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="";for(let s=0;s<e.length;s++)n+=y[e[s]];const i=`0x${n}`;return"number"===typeof t.size?(k(i,{size:t.size}),g(i,{dir:"right",size:t.size})):i}function P(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{signed:n,size:i}=t,s=BigInt(e);let r;i?r=n?(1n<<8n*BigInt(i)-1n)-1n:2n**(8n*BigInt(i))-1n:"number"===typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));const o="bigint"===typeof r&&n?-r-1n:0;if(r&&s>r||s<o){const t="bigint"===typeof e?"n":"";throw new a({max:r?`${r}${t}`:void 0,min:`${o}${t}`,signed:n,size:i,value:`${e}${t}`})}const c=`0x${(n&&s<0?(1n<<BigInt(8*i))+BigInt(s):s).toString(16)}`;return i?g(c,{size:i}):c}const $=new TextEncoder;function O(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return x($.encode(e),t)}const z=new TextEncoder;function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"number"===typeof e||"bigint"===typeof e?function(e,t){const n=P(e,t);return U(n)}(e,t):"boolean"===typeof e?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=new Uint8Array(1);if(n[0]=Number(e),"number"===typeof t.size)return k(n,{size:t.size}),g(n,{size:t.size});return n}(e,t):l(e)?U(e,t):L(e,t)}const I={zero:48,nine:57,A:65,F:70,a:97,f:102};function j(e){return e>=I.zero&&e<=I.nine?e-I.zero:e>=I.A&&e<=I.F?e-(I.A-10):e>=I.a&&e<=I.f?e-(I.a-10):void 0}function U(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;t.size&&(k(n,{size:t.size}),n=g(n,{dir:"right",size:t.size}));let i=n.slice(2);i.length%2&&(i=`0${i}`);const s=i.length/2,o=new Uint8Array(s);for(let a=0,c=0;a<s;a++){const e=j(i.charCodeAt(c++)),t=j(i.charCodeAt(c++));if(void 0===e||void 0===t)throw new r(`Invalid byte sequence ("${i[c-2]}${i[c-1]}" in "${i}").`);o[a]=16*e+t}return o}function L(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=z.encode(e);return"number"===typeof t.size?(k(n,{size:t.size}),g(n,{dir:"right",size:t.size})):n}function k(e,t){let{size:n}=t;if(h(e)>n)throw new u({givenSize:h(e),maxSize:n})}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{signed:n}=t;t.size&&k(e,{size:t.size});const i=BigInt(e);if(!n)return i;const s=(e.length-2)/2;return i<=(1n<<8n*BigInt(s)-1n)-1n?i:i-BigInt(`0x${"f".padStart(2*s,"f")}`)-1n}function A(e){return Number(C(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}function T(e,t){return n=>{let{exclude:i,format:s}=n;return{exclude:i,format:e=>{const n=t(e);if(i)for(const t of i)delete n[t];return{...n,...s(e)}},type:e}}}class F extends r{constructor(e){let{address:t}=e;super(`Address "${t}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class S extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}function B(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function M(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(n.length>0&&!n.includes(e.length))throw new Error(`Expected Uint8Array of length ${n}, not of length=${e.length}`)}function N(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function R(e,t){M(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const G=BigInt(2**32-1),V=BigInt(32);function _(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?{h:Number(e&G),l:Number(e>>V&G)}:{h:0|Number(e>>V&G),l:0|Number(e&G)}}function H(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Uint32Array(e.length),i=new Uint32Array(e.length);for(let s=0;s<e.length;s++){const{h:r,l:o}=_(e[s],t);[n[s],i[s]]=[r,o]}return[n,i]}const D=e=>e instanceof Uint8Array,X=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),W=(e,t)=>e<<32-t|e>>>t;if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function q(e){if("string"===typeof e&&(e=function(e){if("string"!==typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))}(e)),!D(e))throw new Error("expected Uint8Array, got "+typeof e);return e}class K{clone(){return this._cloneInto()}}function Y(e){const t=t=>e().update(q(t)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}const[J,Q,Z]=[[],[],[]],ee=BigInt(0),te=BigInt(1),ne=BigInt(2),ie=BigInt(7),se=BigInt(256),re=BigInt(113);for(let nt=0,it=te,st=1,rt=0;nt<24;nt++){[st,rt]=[rt,(2*st+3*rt)%5],J.push(2*(5*rt+st)),Q.push((nt+1)*(nt+2)/2%64);let e=ee;for(let t=0;t<7;t++)it=(it<<te^(it>>ie)*re)%se,it&ne&&(e^=te<<(te<<BigInt(t))-te);Z.push(e)}const[oe,ae]=H(Z,!0),ce=(e,t,n)=>n>32?((e,t,n)=>t<<n-32|e>>>64-n)(e,t,n):((e,t,n)=>e<<n|t>>>32-n)(e,t,n),ue=(e,t,n)=>n>32?((e,t,n)=>e<<n-32|t>>>64-n)(e,t,n):((e,t,n)=>t<<n|e>>>32-n)(e,t,n);class le extends K{constructor(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:24;if(super(),this.blockLen=e,this.suffix=t,this.outputLen=n,this.enableXOF=i,this.rounds=s,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,B(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");var r;this.state=new Uint8Array(200),this.state32=(r=this.state,new Uint32Array(r.buffer,r.byteOffset,Math.floor(r.byteLength/4)))}keccak(){!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24;const n=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let i=0;i<10;i++)n[i]=e[i]^e[i+10]^e[i+20]^e[i+30]^e[i+40];for(let i=0;i<10;i+=2){const t=(i+8)%10,s=(i+2)%10,r=n[s],o=n[s+1],a=ce(r,o,1)^n[t],c=ue(r,o,1)^n[t+1];for(let n=0;n<50;n+=10)e[i+n]^=a,e[i+n+1]^=c}let t=e[2],s=e[3];for(let n=0;n<24;n++){const i=Q[n],r=ce(t,s,i),o=ue(t,s,i),a=J[n];t=e[a],s=e[a+1],e[a]=r,e[a+1]=o}for(let i=0;i<50;i+=10){for(let t=0;t<10;t++)n[t]=e[i+t];for(let t=0;t<10;t++)e[i+t]^=~n[(t+2)%10]&n[(t+4)%10]}e[0]^=oe[i],e[1]^=ae[i]}n.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){N(this);const{blockLen:t,state:n}=this,i=(e=q(e)).length;for(let s=0;s<i;){const r=Math.min(t-this.pos,i-s);for(let t=0;t<r;t++)n[this.pos++]^=e[s++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:n,blockLen:i}=this;e[n]^=t,0!==(128&t)&&n===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){N(this,!1),M(e),this.finish();const t=this.state,{blockLen:n}=this;for(let i=0,s=e.length;i<s;){this.posOut>=n&&this.keccak();const r=Math.min(n-this.posOut,s-i);e.set(t.subarray(this.posOut,this.posOut+r),i),this.posOut+=r,i+=r}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return B(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(R(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:n,outputLen:i,rounds:s,enableXOF:r}=this;return e||(e=new le(t,n,i,r,s)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=s,e.suffix=n,e.outputLen=i,e.enableXOF=r,e.destroyed=this.destroyed,e}}const he=((e,t,n)=>Y((()=>new le(t,e,n))))(1,136,32);function de(e,t){const n=t||"hex",i=he(l(e,{strict:!1})?E(e):e);return"bytes"===n?i:w(i)}const fe=new S(8192);function be(e,t){if(fe.has(`${e}.${t}`))return fe.get(`${e}.${t}`);const n=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),i=de(L(n),"bytes"),s=(t?n.substring(`${t}0x`.length):n).split("");for(let o=0;o<40;o+=2)i[o>>1]>>4>=8&&s[o]&&(s[o]=s[o].toUpperCase()),(15&i[o>>1])>=8&&s[o+1]&&(s[o+1]=s[o+1].toUpperCase());const r=`0x${s.join("")}`;return fe.set(`${e}.${t}`,r),r}const pe=/^0x[a-fA-F0-9]{40}$/,ge=new S(8192);function me(e,t){const{strict:n=!0}=t??{};if(ge.has(e))return ge.get(e);const i=!!pe.test(e)&&(e.toLowerCase()===e||!n||be(e)===e);return ge.set(e,i),i}function ye(e){return"string"===typeof e[0]?we(e):function(e){let t=0;for(const s of e)t+=s.length;const n=new Uint8Array(t);let i=0;for(const s of e)n.set(s,i),i+=s.length;return n}(e)}function we(e){return`0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`}class ve extends r{constructor(e){let{offset:t}=e;super(`Offset \`${t}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class xe extends r{constructor(e){let{length:t,position:n}=e;super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class Pe extends r{constructor(e){let{count:t,limit:n}=e;super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const $e={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Pe({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new xe({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new ve({offset:e});const t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new ve({offset:e});const t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){const n=t??this.position;return this.assertPosition(n+e-1),this.bytes.subarray(n,n+e)},inspectUint8(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){const t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){const t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){const t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();const n=this.inspectBytes(e);return this.position+=t??e,n},readUint8(){this.assertReadLimit(),this._touch();const e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();const e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();const e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();const e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){const t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function Oe(e){let{recursiveReadLimit:t=8192}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=Object.create($e);return n.bytes=e,n.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),n.positionReadCount=new Map,n.recursiveReadLimit=t,n}const ze={gwei:9,wei:18},Ee={ether:-9,wei:9};function Ie(e,t){let n=e.toString();const i=n.startsWith("-");i&&(n=n.slice(1)),n=n.padStart(t,"0");let[s,r]=[n.slice(0,n.length-t),n.slice(n.length-t)];return r=r.replace(/(0+)$/,""),`${i?"-":""}${s||"0"}${r?`.${r}`:""}`}function je(e){return Ie(e,Ee[arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wei"])}function Ue(e){const t=Object.entries(e).map((e=>{let[t,n]=e;return void 0===n||!1===n?null:[t,n]})).filter(Boolean),n=t.reduce(((e,t)=>{let[n]=t;return Math.max(e,n.length)}),0);return t.map((e=>{let[t,i]=e;return`  ${`${t}:`.padEnd(n+1)}  ${i}`})).join("\n")}class Le extends r{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class ke extends r{constructor(e){let{v:t}=e;super(`Invalid \`v\` value "${t}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}}class Ce extends r{constructor(e){let{transaction:t}=e;super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Ue(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class Ae extends r{constructor(e){let{storageKey:t}=e;super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}}class Te extends r{constructor(e){let{blockNumber:t,chain:n,contract:i}=e;super(`Chain "${n.name}" does not support contract "${i.name}".`,{metaMessages:["This could be due to any of the following:",...t&&i.blockCreated&&i.blockCreated>t?[`- The contract "${i.name}" was not deployed until block ${i.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${i.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class Fe extends r{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}class Se extends r{constructor(e){let{chainId:t}=e;super("number"===typeof t?`Chain ID "${t}" is invalid.`:"Chain ID is invalid."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}class Be extends r{constructor(){let{cause:e,message:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Be,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(Be,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Me extends r{constructor(){let{cause:e,maxFeePerGas:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`The fee cap (\`maxFeePerGas\`${t?` = ${je(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(Me,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Ne extends r{constructor(){let{cause:e,maxFeePerGas:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`The fee cap (\`maxFeePerGas\`${t?` = ${je(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(Ne,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class Re extends r{constructor(){let{cause:e,nonce:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(Re,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class Ge extends r{constructor(){let{cause:e,nonce:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(Ge,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class Ve extends r{constructor(){let{cause:e,nonce:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(Ve,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class _e extends r{constructor(){let{cause:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(_e,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class He extends r{constructor(){let{cause:e,gas:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(He,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class De extends r{constructor(){let{cause:e,gas:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(De,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class Xe extends r{constructor(e){let{cause:t}=e;super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(Xe,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class We extends r{constructor(){let{cause:e,maxPriorityFeePerGas:t,maxFeePerGas:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${je(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${je(n)} gwei`:""}).`].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(We,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class qe extends r{constructor(e){let{cause:t}=e;super(`An error occurred while executing: ${t?.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}function Ke(e,t,n){let{strict:i}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return l(e,{strict:!1})?function(e,t,n){let{strict:i}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};Ye(e,t);const s=`0x${e.replace("0x","").slice(2*(t??0),2*(n??e.length))}`;i&&Je(s,t,n);return s}(e,t,n,{strict:i}):Qe(e,t,n,{strict:i})}function Ye(e,t){if("number"===typeof t&&t>0&&t>h(e)-1)throw new f({offset:t,position:"start",size:h(e)})}function Je(e,t,n){if("number"===typeof t&&"number"===typeof n&&h(e)!==n-t)throw new f({offset:n,position:"end",size:h(e)})}function Qe(e,t,n){let{strict:i}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};Ye(e,t);const s=e.slice(t,n);return i&&Je(s,t,n),s}const Ze={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function et(e){const t={};return"undefined"!==typeof e.accessList&&(t.accessList=e.accessList),"undefined"!==typeof e.blobVersionedHashes&&(t.blobVersionedHashes=e.blobVersionedHashes),"undefined"!==typeof e.blobs&&("string"!==typeof e.blobs[0]?t.blobs=e.blobs.map((e=>x(e))):t.blobs=e.blobs),"undefined"!==typeof e.data&&(t.data=e.data),"undefined"!==typeof e.from&&(t.from=e.from),"undefined"!==typeof e.gas&&(t.gas=P(e.gas)),"undefined"!==typeof e.gasPrice&&(t.gasPrice=P(e.gasPrice)),"undefined"!==typeof e.maxFeePerBlobGas&&(t.maxFeePerBlobGas=P(e.maxFeePerBlobGas)),"undefined"!==typeof e.maxFeePerGas&&(t.maxFeePerGas=P(e.maxFeePerGas)),"undefined"!==typeof e.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=P(e.maxPriorityFeePerGas)),"undefined"!==typeof e.nonce&&(t.nonce=P(e.nonce)),"undefined"!==typeof e.to&&(t.to=e.to),"undefined"!==typeof e.type&&(t.type=Ze[e.type]),"undefined"!==typeof e.value&&(t.value=P(e.value)),t}const tt=T("transactionRequest",et)}}]);