var e=Object.defineProperty,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(s,t,a)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a;import{c as o,a as n,o as c,b as l,F as i,d as u,_ as m,e as d,f as p,g,h as f,i as b,j as h,k as v,l as k,m as y,n as j,p as P,q as _,r as E,s as O,t as w,u as T,v as C,w as I}from"./vendor.809e12b2.js";let L;const A={},R=function(e,s){if(!s||0===s.length)return e();if(void 0===L){const e=document.createElement("link").relList;L=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(s.map((e=>{if((e=`./${e}`)in A)return;A[e]=!0;const s=e.endsWith(".css"),t=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const a=document.createElement("link");return a.rel=s?"stylesheet":L,s||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),s?new Promise(((e,s)=>{a.addEventListener("load",e),a.addEventListener("error",s)})):void 0}))).then((()=>e()))},$=R((()=>import("./Index.3144803a.js")),["assets/Index.3144803a.js","assets/Index.d02ea6ec.css","assets/vendor.809e12b2.js"]),q=R((()=>import("./About.5e6c4268.js")),["assets/About.5e6c4268.js","assets/vendor.809e12b2.js"]),F=R((()=>import("./Login.f4e7b104.js")),["assets/Login.f4e7b104.js","assets/Login.0add2c1f.css","assets/vendor.809e12b2.js"]),S=o({history:n(),routes:[{path:"/",name:"Index",component:()=>$},{path:"/login",name:"Login",component:()=>F},{path:"/about",name:"About",component:()=>q},{path:"/:pathMatch(.*)*",redirect:"/"}]}),U={},x=u("div",null,"components",-1),D=u("div",null,"vue",-1);U.render=function(e,s){return c(),l(i,null,[x,D],64)};var V={install(e){e.component("v-test",U)}};const H=[m,d,p,g,f,b,h,v,k,y,j],M=[P,_,E,O,w];var W={install(e){M.forEach((s=>{e.use(s)})),H.forEach((s=>{e.component(s.name,s)}))}};const z="lavipeditumWeb",B="footBath";var G=(e,s={})=>{const t={baseURL:"https://test.bokao2o.com",timeout:1e4,headers:{"Content-Type":"application/json;charset=UTF-8","custom-defined-header-key":"custom-defined-header-value",common:{"common-defined-key-b":"custom value: for all methods"},post:{"post-custom-key":"custom value: only for post method"},get:{"get-custom-key":"custom value: only for get method"},access_token:"3f55742c5966bdd2607bb5c0fdd81413",device_id:z,product:B},withCredentials:!1};return Object.assign(e.defaults,t,s),e};let J=G(T),K=G(J.create()),N=new Map;const Q=K.interceptors.request.use((e=>(K.config=Object.assign({},e),e.cancelToken=new T.CancelToken((s=>{N.has(e.url)?s(`${e.url}请求重复`):N.set(e.url,{cancelFn:s,global:e.global})})),e)),(e=>(console.log("请求拦截err:",e),Promise.reject(e)))),X=K.interceptors.response.use((e=>{const{config:s}=e;N.delete(s.url);const t=(e=>{const s=e.status;if(s>=200&&s<=300||304===s)return e;{const s=parseInt(e.data&&e.data.code);let t=(e.data||{}).msg;switch(s){case 400:break;case 4001:if(process.server)return;t=t||"登录设备数量超出限制";break;case 403:t=t||"未登录";break;case 404:t=t||"请求地址错误";break;case 412:t=t||"未找到有效session"}return{code:s,message:t}}})(e),a=t.data?t.data:t;return Promise.resolve(a)}),(e=>{const{config:s}=K;if(T.isCancel(e)||N.delete(s.url),!e)return Promise.reject(e);if(e.response)e=(e=>{const{response:s}=e;switch(s.status||(e.code="",e.message="有response但没有response.status的情况"),e.code=s.status,s.status){case 200:e.message="错误响应也会有状态码为200的情况";break;case 400:e.message="请求错误(400)";break;case 401:e.message="未授权，请重新登录(401)";break;case 403:e.message="拒绝访问(403)";break;case 404:e.message="请求出错(404)";break;case 408:e.message="请求超时(408)";break;case 500:e.message="服务器错误(500)";break;case 501:e.message="服务未实现(501)";break;case 502:e.message="网络错误(502)";break;case 503:e.message="服务不可用(503)";break;case 504:e.message="网络超时(504)";break;case 505:e.message="HTTP版本不受支持(505)";break;default:e.message=`连接出错，状态码：(${e.response.status})!`}return e})(e);else{if(T.isCancel(e))throw new T.Cancel(e.message||`请求'${K.config.url}'被取消`);e.stack&&e.stack.includes("timeout")?e.message="请求超时!":e.message="连接服务器失败!"}var t;return t=e.message,alert(t||"请求出错啦"),Promise.reject(e)}));K.removeRequestInterceptor=function(){K.interceptors.request.eject(Q)},K.removeResponseInterceptor=function(){K.interceptors.response.eject(X)},K.clearPendingPool=function(e=[]){if(!N.size)return;const s=Array.from(N.keys()).filter((s=>!e.includes(s)));return s.length?(s.forEach((e=>{N.get(e).global||(N.get(e).cancelFn(),N.delete(e))})),s):void 0};var Y=function(e){const o={};return Object.keys(e).forEach((n=>{let{method:c,url:l,config:i}=e[n];c=c.toUpperCase(),o[n]=(e={},o={})=>{const n=["PUT","POST","PATCH"].includes(c)?"data":"params";return K(((e,o)=>{for(var n in o||(o={}))t.call(o,n)&&r(e,n,o[n]);if(s)for(var n of s(o))a.call(o,n)&&r(e,n,o[n]);return e})({method:c,url:l,[n]:e},Object.assign(i||{},o)))}})),o}({login:{method:"post",url:"/lavipeditum/setting/getShopRule"}});const Z={setup:()=>({})};Z.render=function(e,s,t,a,r,o){const n=C("router-view");return c(),l(n)};const ee=I(Z);ee.config.devtools=!0,ee.config.globalProperties.$message=E,ee.use(V).use(S).use(W).mount("#app");export{Y as a};
