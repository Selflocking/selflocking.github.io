"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,u=f["".concat(l,".").concat(m)]||f[m]||d[m]||a;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Infoflow",description:"Add Infoflow OAuth provider to your application",keywords:["Infoflow","OAuth"],authors:["Steve0x2a"]},i=void 0,p={unversionedId:"provider/oauth/infoflow",id:"provider/oauth/infoflow",title:"Infoflow",description:"Add Infoflow OAuth provider to your application",source:"@site/docs/provider/oauth/infoflow.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/infoflow",permalink:"/ja/docs/provider/oauth/infoflow",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/infoflow.md",tags:[],version:"current",frontMatter:{title:"Infoflow",description:"Add Infoflow OAuth provider to your application",keywords:["Infoflow","OAuth"],authors:["Steve0x2a"]},sidebar:"tutorialSidebar",previous:{title:"AzureAD",permalink:"/ja/docs/provider/oauth/azureAD"},next:{title:"Okta",permalink:"/ja/docs/provider/oauth/okta"}},l={},s=[],c={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To set up the Infoflow OAuth provider, please follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"http://id.qy.baidu.com/static/ge/login.html#/"},"Infoflow"),'{:target="_blank"} and log in using your Infoflow account.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"http://qy.baidu.com/index.html#applist"},"Infoflow Application"),'{:target="_blank"} page.'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Create APP",src:n(93668).Z,width:"1135",height:"338"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Register your Infoflow app."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Create APP",src:n(89091).Z,width:"2372",height:"939"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Obtain the ",(0,o.kt)("inlineCode",{parentName:"p"},"AgentID"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"AgentID",src:n(75528).Z,width:"1861",height:"682"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Setting")," tab and create a new management group."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Setting",src:n(42745).Z,width:"1034",height:"567"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add your structure to the address book permissions and give it the necessary permissions. Also, add the application you just created to the specified location."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Permission",src:n(13046).Z,width:"987",height:"746"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the sensitive interface permissions as shown."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Permission",src:n(555).Z,width:"1427",height:"1586"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the same page, you will find the ",(0,o.kt)("inlineCode",{parentName:"p"},"CorpID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Permission",src:n(13860).Z,width:"1403",height:"460"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add an Infoflow OAuth provider to Casdoor and fill in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client ID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Client Secret"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Agent ID"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Infoflow Provider",src:n(41718).Z,width:"1768",height:"959"})),(0,o.kt)("p",{parentName:"li"},"You can now use Infoflow as a third-party service for authentication."))))}d.isMDXComponent=!0},75528:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/infoflowagentid-a0678492335ce4e52958319179a9d29e.png"},93668:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/infoflowapp1-9ba9a937e882670279e13c6d7f58ef48.png"},89091:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/infoflowapp2-5309b16ae7156daad0ebaeed7d5a2c1e.png"},13046:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/infoflowpermission1-d2d71e3110629d200fb4144822d8927d.png"},555:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/infoflowpermission2-ec2dd801f95f22aa1190287d64bf003d.png"},41718:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/infoflowprovider-589740909ccc60af6c9dfe5a0b5b71e2.png"},13860:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/infoflowsecret-9378f836bbb213560412bd70d224c4a1.png"},42745:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/infoflowsetting-bf69052f7c63e60ccf51108ae811b889.png"}}]);