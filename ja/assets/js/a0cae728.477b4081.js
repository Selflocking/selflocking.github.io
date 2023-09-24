"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Internationalization",description:"Helping Casdoor support different languages",keywords:["i18n","translation","internationalization"],authors:["ErikQQY"]},a=void 0,s={unversionedId:"internationalization",id:"internationalization",title:"Internationalization",description:"Helping Casdoor support different languages",source:"@site/docs/internationalization.md",sourceDirName:".",slug:"/internationalization",permalink:"/ja/docs/internationalization",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/internationalization.md",tags:[],version:"current",frontMatter:{title:"Internationalization",description:"Helping Casdoor support different languages",keywords:["i18n","translation","internationalization"],authors:["ErikQQY"]},sidebar:"tutorialSidebar",previous:{title:"Prometheus",permalink:"/ja/docs/monitoring/Prometheus"},next:{title:"Contributor Guide",permalink:"/ja/docs/contributing"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casdoor supports multiple languages. By deploying the translations to ",(0,o.kt)("a",{parentName:"p",href:"https://crowdin.com/project/casdoor-web"},"Crowdin"),", we can provide support for Spanish, French, German, Chinese, Indonesian, Japanese, Korean, and more."),(0,o.kt)("p",null,"Casdoor utilizes the official Crowdin CLI to synchronize translations from Crowdin. If you wish to add support for additional languages, please submit your proposal in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor"},"our community"),". Moreover, if you would like to contribute to expediting the translation work, kindly consider assisting us in translating on ",(0,o.kt)("a",{parentName:"p",href:"https://crowdin.com/project/casdoor-web"},"Crowdin"),"."))}u.isMDXComponent=!0}}]);