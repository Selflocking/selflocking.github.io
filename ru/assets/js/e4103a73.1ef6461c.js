"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8511],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Web UI",description:"Monitor runtime information on the Casdoor web page",keywords:["monitor","CPU","API"],authors:["OutOfEastGate"]},i=void 0,c={unversionedId:"monitoring/Web-UI",id:"monitoring/Web-UI",title:"Web UI",description:"Monitor runtime information on the Casdoor web page",source:"@site/docs/monitoring/Web-UI.md",sourceDirName:"monitoring",slug:"/monitoring/Web-UI",permalink:"/ru/docs/monitoring/Web-UI",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/monitoring/Web-UI.md",tags:[],version:"current",frontMatter:{title:"Web UI",description:"Monitor runtime information on the Casdoor web page",keywords:["monitor","CPU","API"],authors:["OutOfEastGate"]},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/ru/docs/category/monitoring"},next:{title:"Prometheus",permalink:"/ru/docs/monitoring/Prometheus"}},s={},p=[],u={toc:p};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can monitor the runtime information of Casdoor on the ",(0,o.kt)("a",{parentName:"p",href:"https://door.casdoor.com/sysinfo"},"Casdoor web page"),", including CPU Usage, Memory Usage, API Latency, and API Throughput."),(0,o.kt)("p",null,"On the UI, you can view the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CPU Usage and Memory Usage"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Usage Info",src:r(2909).Z,width:"1006",height:"456"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"API Latency, including count times and average latency"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"API Latency",src:r(20046).Z,width:"1041",height:"523"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"API Throughput, including total throughput and throughput per API"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"API Throughput",src:r(11998).Z,width:"989",height:"531"})))))}l.isMDXComponent=!0},20046:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/api_latency-ec8638f0734eee9b065bfdac61f62eeb.png"},11998:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/api_throughput-8065679ed8e1d9a37f7e969af07ee2b3.png"},2909:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/usage_info-662d3ade0d67564617e0262f74bfd588.png"}}]);