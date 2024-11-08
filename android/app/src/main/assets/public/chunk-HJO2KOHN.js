import{g as d}from"./chunk-MON7YFGF.js";var te=r=>{let e=new Map;e.set("web",{name:"web"});let t=r.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},o=(n,a)=>{t.platforms.set(n,a)},i=n=>{t.platforms.has(n)&&(t.currentPlatform=t.platforms.get(n))};return t.addPlatform=o,t.setPlatform=i,t},re=r=>r.CapacitorPlatforms=te(r),q=re(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),de=q.addPlatform,ue=q.setPlatform;var k=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(k||{}),E=class extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}},ne=r=>{var e,t;return r?.androidBridge?"android":!((t=(e=r?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},se=r=>{var e,t,o,i,n;let a=r.CapacitorCustomPlatform||null,s=r.Capacitor||{},g=s.Plugins=s.Plugins||{},l=r.CapacitorPlatforms,$=()=>a!==null?a.name:ne(r),y=((e=l?.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||$,U=()=>y()!=="web",G=((t=l?.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||U,K=c=>{let u=_.get(c);return!!(u?.platforms.has(y())||W(c))},V=((o=l?.currentPlatform)===null||o===void 0?void 0:o.isPluginAvailable)||K,z=c=>{var u;return(u=s.PluginHeaders)===null||u===void 0?void 0:u.find(L=>L.name===c)},W=((i=l?.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||z,J=c=>r.console.error(c),Q=(c,u,L)=>Promise.reject(`${L} does not have an implementation of "${u}".`),_=new Map,X=(c,u={})=>{let L=_.get(c);if(L)return console.warn(`Capacitor plugin "${c}" already registered. Cannot register plugins twice.`),L.proxy;let p=y(),C=W(c),w,Z=()=>d(void 0,null,function*(){return!w&&p in u?w=typeof u[p]=="function"?w=yield u[p]():w=u[p]:a!==null&&!w&&"web"in u&&(w=typeof u.web=="function"?w=yield u.web():w=u.web),w}),N=(f,m)=>{var v,P;if(C){let b=C?.methods.find(h=>m===h.name);if(b)return b.rtype==="promise"?h=>s.nativePromise(c,m.toString(),h):(h,O)=>s.nativeCallback(c,m.toString(),h,O);if(f)return(v=f[m])===null||v===void 0?void 0:v.bind(f)}else{if(f)return(P=f[m])===null||P===void 0?void 0:P.bind(f);throw new E(`"${c}" plugin is not implemented on ${p}`,k.Unimplemented)}},S=f=>{let m,v=(...P)=>{let b=Z().then(h=>{let O=N(h,f);if(O){let A=O(...P);return m=A?.remove,A}else throw new E(`"${c}.${f}()" is not implemented on ${p}`,k.Unimplemented)});return f==="addListener"&&(b.remove=()=>d(void 0,null,function*(){return m()})),b};return v.toString=()=>`${f.toString()}() { [capacitor code] }`,Object.defineProperty(v,"name",{value:f,writable:!1,configurable:!1}),v},M=S("addListener"),D=S("removeListener"),ee=(f,m)=>{let v=M({eventName:f},m),P=()=>d(void 0,null,function*(){let h=yield v;D({eventName:f,callbackId:h},m)}),b=new Promise(h=>v.then(()=>h({remove:P})));return b.remove=()=>d(void 0,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield P()}),b},T=new Proxy({},{get(f,m){switch(m){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return C?ee:M;case"removeListener":return D;default:return S(m)}}});return g[c]=T,_.set(c,{name:c,proxy:T,platforms:new Set([...Object.keys(u),...C?[p]:[]])}),T},Y=((n=l?.currentPlatform)===null||n===void 0?void 0:n.registerPlugin)||X;return s.convertFileSrc||(s.convertFileSrc=c=>c),s.getPlatform=y,s.handleError=J,s.isNativePlatform=G,s.isPluginAvailable=V,s.pluginMethodNoop=Q,s.registerPlugin=Y,s.Exception=E,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},oe=r=>r.Capacitor=se(r),j=oe(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),B=j.registerPlugin,fe=j.Plugins;var x=class{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let o=!1;this.listeners[e]||(this.listeners[e]=[],o=!0),this.listeners[e].push(t);let n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n),o&&this.sendRetainedArgumentsForEvent(e);let a=()=>d(this,null,function*(){return this.removeListener(e,t)});return Promise.resolve({remove:a})}removeAllListeners(){return d(this,null,function*(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}})}notifyListeners(e,t,o){let i=this.listeners[e];if(!i){if(o){let n=this.retainedEventArguments[e];n||(n=[]),n.push(t),this.retainedEventArguments[e]=n}return}i.forEach(n=>n(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new j.Exception(e,k.Unimplemented)}unavailable(e="not available"){return new j.Exception(e,k.Unavailable)}removeListener(e,t){return d(this,null,function*(){let o=this.listeners[e];if(!o)return;let i=o.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])})}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(o=>{this.notifyListeners(e,o)}))}};var F=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),I=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),R=class extends x{getCookies(){return d(this,null,function*(){let e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[i,n]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=I(i).trim(),n=I(n).trim(),t[i]=n}),t})}setCookie(e){return d(this,null,function*(){try{let t=F(e.key),o=F(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,n=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${i}; path=${n}; ${a};`}catch(t){return Promise.reject(t)}})}deleteCookie(e){return d(this,null,function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})}clearCookies(){return d(this,null,function*(){try{let e=document.cookie.split(";")||[];for(let t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})}clearAllCookies(){return d(this,null,function*(){try{yield this.clearCookies()}catch(e){return Promise.reject(e)}})}},ge=B("CapacitorCookies",{web:()=>new R}),ie=r=>d(void 0,null,function*(){return new Promise((e,t)=>{let o=new FileReader;o.onload=()=>{let i=o.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},o.onerror=i=>t(i),o.readAsDataURL(r)})}),ae=(r={})=>{let e=Object.keys(r);return Object.keys(r).map(i=>i.toLocaleLowerCase()).reduce((i,n,a)=>(i[n]=r[e[a]],i),{})},le=(r,e=!0)=>r?Object.entries(r).reduce((o,i)=>{let[n,a]=i,s,g;return Array.isArray(a)?(g="",a.forEach(l=>{s=e?encodeURIComponent(l):l,g+=`${n}=${s}&`}),g.slice(0,-1)):(s=e?encodeURIComponent(a):a,g=`${n}=${s}`),`${o}&${g}`},"").substr(1):null,ce=(r,e={})=>{let t=Object.assign({method:r.method||"GET",headers:r.headers},e),i=ae(r.headers)["content-type"]||"";if(typeof r.data=="string")t.body=r.data;else if(i.includes("application/x-www-form-urlencoded")){let n=new URLSearchParams;for(let[a,s]of Object.entries(r.data||{}))n.set(a,s);t.body=n.toString()}else if(i.includes("multipart/form-data")||r.data instanceof FormData){let n=new FormData;if(r.data instanceof FormData)r.data.forEach((s,g)=>{n.append(g,s)});else for(let s of Object.keys(r.data))n.append(s,r.data[s]);t.body=n;let a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(i.includes("application/json")||typeof r.data=="object")&&(t.body=JSON.stringify(r.data));return t},H=class extends x{request(e){return d(this,null,function*(){let t=ce(e,e.webFetchExtra),o=le(e.params,e.shouldEncodeUrlParams),i=o?`${e.url}?${o}`:e.url,n=yield fetch(i,t),a=n.headers.get("content-type")||"",{responseType:s="text"}=n.ok?e:{};a.includes("application/json")&&(s="json");let g,l;switch(s){case"arraybuffer":case"blob":l=yield n.blob(),g=yield ie(l);break;case"json":g=yield n.json();break;case"document":case"text":default:g=yield n.text()}let $={};return n.headers.forEach((y,U)=>{$[U]=y}),{data:g,headers:$,status:n.status,url:n.url}})}get(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))})}post(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))})}put(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))})}patch(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})}delete(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})}},me=B("CapacitorHttp",{web:()=>new H});export{E as a,j as b,B as c,x as d};
