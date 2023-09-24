"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=d(a),u=o,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||n;return a?r.createElement(k,i(i({ref:t},l),{},{components:a})):r.createElement(k,i({ref:t},l))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15454:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>d});var r=a(87462),o=(a(67294),a(3905));const n={title:"MetaMask",description:"Adding the MetaMask Web3 provider to your application",keywords:["MetaMask","Web3","provider"],authors:["Chinoholo0807"]},i=void 0,p={unversionedId:"provider/web3/metamask",id:"provider/web3/metamask",title:"MetaMask",description:"Adding the MetaMask Web3 provider to your application",source:"@site/docs/provider/web3/metamask.md",sourceDirName:"provider/web3",slug:"/provider/web3/metamask",permalink:"/ko/docs/provider/web3/metamask",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/web3/metamask.md",tags:[],version:"current",frontMatter:{title:"MetaMask",description:"Adding the MetaMask Web3 provider to your application",keywords:["MetaMask","Web3","provider"],authors:["Chinoholo0807"]},sidebar:"tutorialSidebar",previous:{title:"Web3-Onboard",permalink:"/ko/docs/provider/web3/web3onboard"},next:{title:"Resources",permalink:"/ko/docs/category/resources"}},s={},d=[{value:"Step 1: Create a MetaMask Web3 provider",id:"step-1-create-a-metamask-web3-provider",level:3},{value:"Step 2: Add the provider to your application",id:"step-2-add-the-provider-to-your-application",level:3},{value:"Step 3: Login with MetaMask",id:"step-3-login-with-metamask",level:3}],l={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This is an example of how to configure ",(0,o.kt)("strong",{parentName:"p"},"MetaMask")," as a Web3 provider.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," is a browser extension and app that functions as both a cryptocurrency wallet and a gateway to blockchain apps. Casdoor allows you to use MetaMask as an identity provider and enables Web3 login with MetaMask."),(0,o.kt)("h3",{id:"step-1-create-a-metamask-web3-provider"},"Step 1: Create a MetaMask Web3 provider"),(0,o.kt)("p",null,"To start, you need to create a MetaMask Web3 provider in Casdoor."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Category"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose ",(0,o.kt)("inlineCode",{parentName:"td"},"Web3"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Type"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose ",(0,o.kt)("inlineCode",{parentName:"td"},"MetaMask"))))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a MetaMask Web3 provider",src:a(8236).Z,width:"1120",height:"739"})),(0,o.kt)("h3",{id:"step-2-add-the-provider-to-your-application"},"Step 2: Add the provider to your application"),(0,o.kt)("p",null,"Next, add the MetaMask Web3 provider to your application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add the MetaMask Web3 provider to your application",src:a(15813).Z,width:"3714",height:"781"})),(0,o.kt)("h3",{id:"step-3-login-with-metamask"},"Step 3: Login with MetaMask"),(0,o.kt)("p",null,"You can now log in with MetaMask. Here is a demo video."),(0,o.kt)("video",{src:"/video/provider/web3/login_with_metamask.mp4",controls:"controls",width:"100%"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When logging in with MetaMask, please authorize only one Ethereum address. Casdoor will only bind one Ethereum address per user.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you want to switch to another Ethereum address for login, please disconnect the connection between the current Ethereum address and Casdoor first."))),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Disconnecting MetaMask",src:a(87239).Z,width:"2986",height:"2498"}))))}c.isMDXComponent=!0},15813:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/metamask_app_add-0e4ee50e50e85866ad886f6fc29161f8.png"},87239:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/metamask_disconnect-f4698195e9a1ce595f00c3acb222f1e5.png"},8236:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/metamask_provider_conf-b40960c78274d2360437ebe02a8a91d4.png"}}]);