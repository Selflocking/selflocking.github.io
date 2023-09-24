"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6480],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=o.createContext({}),p=function(t){var e=o.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?o.createElement(h,i(i({ref:e},d),{},{components:r})):o.createElement(h,i({ref:e},d))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86833:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"Unity",description:"Use the Casdoor-dotnet-sdk for Unity development.",keywords:["Unity"],authors:["Wrapping-2000"]},i=void 0,l={unversionedId:"integration/CSharp/Unity",id:"integration/CSharp/Unity",title:"Unity",description:"Use the Casdoor-dotnet-sdk for Unity development.",source:"@site/docs/integration/CSharp/Unity.md",sourceDirName:"integration/CSharp",slug:"/integration/CSharp/Unity",permalink:"/docs/integration/CSharp/Unity",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/CSharp/Unity.md",tags:[],version:"current",frontMatter:{title:"Unity",description:"Use the Casdoor-dotnet-sdk for Unity development.",keywords:["Unity"],authors:["Wrapping-2000"]},sidebar:"tutorialSidebar",previous:{title:"C#",permalink:"/docs/category/csharp"},next:{title:"Go",permalink:"/docs/category/go"}},s={},p=[{value:"Step 1: Deploy Casdoor",id:"step-1-deploy-casdoor",level:2},{value:"Step 2: Import Casdoor.Client",id:"step-2-import-casdoorclient",level:2},{value:"Step 3: Usage",id:"step-3-usage",level:2}],d={toc:p};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"step-1-deploy-casdoor"},"Step 1: Deploy Casdoor"),(0,n.kt)("p",null,"Firstly, Casdoor should be deployed."),(0,n.kt)("p",null,"You can refer to the Casdoor official documentation for the ",(0,n.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Server Installation"),". Please deploy your Casdoor instance in ",(0,n.kt)("strong",{parentName:"p"},"production mode"),"."),(0,n.kt)("p",null,"After a successful deployment, ensure that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open your favorite browser and visit ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"http://localhost:8000"},"http://localhost:8000")),", you will see the login page of Casdoor."),(0,n.kt)("li",{parentName:"ul"},"Input ",(0,n.kt)("inlineCode",{parentName:"li"},"admin")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"123")," to test the login functionality.")),(0,n.kt)("p",null,"Alternatively, you can use the ",(0,n.kt)("a",{parentName:"p",href:"https://door.casdoor.com/"},"official Casdoor demo station")," for a quick start."),(0,n.kt)("h2",{id:"step-2-import-casdoorclient"},"Step 2: Import Casdoor.Client"),(0,n.kt)("p",null,"Import ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-dotnet-sdk/tree/master/src/Casdoor.Client"},"Casdoor.Client")," for ",(0,n.kt)("inlineCode",{parentName:"p"},".NET")," in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-dotnet-sdk"},"Casdoor-dotnet-sdk"),"."),(0,n.kt)("p",null,"One optional method is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git@github.com:casdoor/casdoor-dotnet-sdk.git")),(0,n.kt)("li",{parentName:"ul"},"Run ConsoleApp in the Sample folder."),(0,n.kt)("li",{parentName:"ul"},"Get the ",(0,n.kt)("inlineCode",{parentName:"li"},"/casdoor-dotnet-sdk/src/Casdoor.Client/bin/Debug/net462")," folder.")),(0,n.kt)("p",null,"Now, you can import the ",(0,n.kt)("inlineCode",{parentName:"p"},"net462")," folder into your Unity project through the method shown in the figure below. Of course, you can also choose folders of other versions."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"import-sdk",src:r(16107).Z,width:"1050",height:"638"})),(0,n.kt)("h2",{id:"step-3-usage"},"Step 3: Usage"),(0,n.kt)("p",null,"Learn how to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Casdoor.Client")," SDK for Unity 3D mobile development by looking at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-unity-example"},"casdoor-unity-example"),"."),(0,n.kt)("p",null,"After running the casdoor-unity-example, you will see the following interfaces:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Login with username and password:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"iOS")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Android")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:"https://github.com/casdoor/casdoor-unity-example/blob/master/iOS-gif.gif?raw=true",alt:"iOS-gif",width:"250"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:"https://github.com/casdoor/casdoor-unity-example/blob/master/Android-gif.gif?raw=true",alt:"Android-gif",width:"250"}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Login with the Casdoor web page:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"iOS")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Android")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:"https://github.com/casdoor/casdoor-unity-example/blob/master/iOS-gif-web.gif?raw=true",alt:"iOS-gif-web",width:"250"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:"https://github.com/casdoor/casdoor-unity-example/blob/master/Android-gif-web.gif?raw=true",alt:"Android-gif-web",width:"250"}))))))}c.isMDXComponent=!0},16107:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/images/import-sdk-518eae04f672c4ff8a5e07072dc68a01.png"}}]);