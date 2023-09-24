"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3336],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},60841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"Prometheus",description:"Use Prometheus to collect information about running Casdoor.",keywords:["Prometheus"],authors:["OutOfEastGate"]},a=void 0,s={unversionedId:"monitoring/Prometheus",id:"monitoring/Prometheus",title:"Prometheus",description:"Use Prometheus to collect information about running Casdoor.",source:"@site/docs/monitoring/Prometheus.md",sourceDirName:"monitoring",slug:"/monitoring/Prometheus",permalink:"/de/docs/monitoring/Prometheus",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/monitoring/Prometheus.md",tags:[],version:"current",frontMatter:{title:"Prometheus",description:"Use Prometheus to collect information about running Casdoor.",keywords:["Prometheus"],authors:["OutOfEastGate"]},sidebar:"tutorialSidebar",previous:{title:"Web UI",permalink:"/de/docs/monitoring/Web-UI"},next:{title:"Internationalization",permalink:"/de/docs/internationalization"}},c={},l=[],u={toc:l};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To collect Casdoor's runtime metrics, such as API Throughput, API Latency, CPU Usage, Memory Usage, and more, you need to configure your Prometheus profile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"global:\n  scrape_interval: 10s # The time interval for fetching metrics\n\nscrape_configs:\n  - job_name: 'prometheus'\n    static_configs:\n      - targets: ['localhost:9090']\n  - job_name: 'casdoor' # Name of the application to be monitored \n    static_configs:\n      - targets: ['localhost:8000'] # Back-end address of Casdoor deployment\n    metrics_path: '/api/metrics' # Path for collecting indicators\n")),(0,o.kt)("p",null,"After successful configuration, you will find the following information in Prometheus:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"info",src:r(779).Z,width:"1898",height:"751"})))}m.isMDXComponent=!0},779:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/info-00befd0468329863099e80f9a0f228b5.png"}}]);