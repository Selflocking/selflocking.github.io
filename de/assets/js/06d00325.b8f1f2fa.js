"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),y=n,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},54733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={title:"Hosting Static Files in an Intranet",description:"How to deploy Casdoor static resources",keywords:["static resources","deployment","intranet"],authors:["leo220yuyaodog"]},i=void 0,s={unversionedId:"deployment/deploy-intranet",id:"deployment/deploy-intranet",title:"Hosting Static Files in an Intranet",description:"How to deploy Casdoor static resources",source:"@site/docs/deployment/deploy-intranet.md",sourceDirName:"deployment",slug:"/deployment/deploy-intranet",permalink:"/de/docs/deployment/deploy-intranet",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/deployment/deploy-intranet.md",tags:[],version:"current",frontMatter:{title:"Hosting Static Files in an Intranet",description:"How to deploy Casdoor static resources",keywords:["static resources","deployment","intranet"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Hosting Static Files in a CDN",permalink:"/de/docs/deployment/deploy-cdn"},next:{title:"DB Migration",permalink:"/de/docs/deployment/db-migration"}},c={},l=[{value:"Deploy static resources",id:"deploy-static-resources",level:2},{value:"Modify in Casdoor",id:"modify-in-casdoor",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you are deploying Casdoor on an ",(0,n.kt)("strong",{parentName:"p"},"intranet"),", you may not be able to access the static resources directly over the\ninternet. You need to deploy the static resources where you can access them, and then modify the configuration in Casdoor in\nthree places."),(0,n.kt)("h2",{id:"deploy-static-resources"},"Deploy static resources"),(0,n.kt)("p",null,"All static resources in Casdoor, including images, logos, CSS, etc., are stored in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/static"},"casbin/static repository"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Clone")," the repository and ",(0,n.kt)("strong",{parentName:"p"},"deploy")," it on a web server. Make sure you can access the resources."),(0,n.kt)("h2",{id:"modify-in-casdoor"},"Modify in Casdoor"),(0,n.kt)("p",null,"You can simply modify the configuration file to set the static resource address to where you deployed it. Go to\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor/blob/c92d34e27c707287545519202463632fb4deacc9/conf/app.conf#L19"},"conf/app.conf")," and set ",(0,n.kt)("inlineCode",{parentName:"p"},"staticBaseUrl")," to your deployed address."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},'staticBaseUrl = "https://cdn.casbin.org"\n')))}d.isMDXComponent=!0}}]);