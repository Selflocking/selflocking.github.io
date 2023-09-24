"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1637],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=l(a),h=n,u=g["".concat(s,".").concat(h)]||g[h]||d[h]||i;return a?r.createElement(u,o(o({ref:t},c),{},{components:a})):r.createElement(u,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},14870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={title:"ShardingSphere",description:"Using Casdoor in ShardingSphere",keywords:["ShardingSphere"],authors:["jakiuncle"]},o=void 0,p={unversionedId:"integration/java/ShardingSphere",id:"integration/java/ShardingSphere",title:"ShardingSphere",description:"Using Casdoor in ShardingSphere",source:"@site/docs/integration/java/ShardingSphere.md",sourceDirName:"integration/java",slug:"/integration/java/ShardingSphere",permalink:"/fr/docs/integration/java/ShardingSphere",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/ShardingSphere.md",tags:[],version:"current",frontMatter:{title:"ShardingSphere",description:"Using Casdoor in ShardingSphere",keywords:["ShardingSphere"],authors:["jakiuncle"]},sidebar:"tutorialSidebar",previous:{title:"Using Casdoor in ShenYu",permalink:"/fr/docs/integration/java/shenyu"},next:{title:"Apache IoTDB",permalink:"/fr/docs/integration/java/iotdb"}},s={},l=[{value:"Step 1: Deploy Casdoor",id:"step-1-deploy-casdoor",level:2},{value:"Step 2: Configure Casdoor application and configure application in ShardingSphere",id:"step-2-configure-casdoor-application-and-configure-application-in-shardingsphere",level:2}],c={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/shardingsphere-elasticjob-ui"},"shardingsphere-elasticjob-ui")," has integrated Casdoor. You can use it after configuring it."),(0,n.kt)("h2",{id:"step-1-deploy-casdoor"},"Step 1: Deploy Casdoor"),(0,n.kt)("p",null,"Firstly, Casdoor should be deployed."),(0,n.kt)("p",null,"You can refer to the Casdoor official documentation for the ",(0,n.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Server Installation"),"."),(0,n.kt)("p",null,"After a successful deployment, make sure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Casdoor server is successfully running on ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"http://localhost:8000"},"http://localhost:8000")),"."),(0,n.kt)("li",{parentName:"ul"},"Open your favorite browser and visit ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"http://localhost:7001"},"http://localhost:7001")),". You will see the login page of Casdoor."),(0,n.kt)("li",{parentName:"ul"},"Input ",(0,n.kt)("inlineCode",{parentName:"li"},"admin")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"123")," to test if the login functionality is working fine.")),(0,n.kt)("p",null,"Then, you can quickly implement a Casdoor-based login page in your own app with the following steps."),(0,n.kt)("h2",{id:"step-2-configure-casdoor-application-and-configure-application-in-shardingsphere"},"Step 2: Configure Casdoor application and configure application in ShardingSphere"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Create or use an existing Casdoor application"),"\n",(0,n.kt)("img",{alt:"img",src:a(77693).Z,width:"1813",height:"806"}),"\nThe RedirectURLs depend on the URL you need to redirect to. The selected data will be used in the next step.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"On the certificate editing page, you can see your ",(0,n.kt)("inlineCode",{parentName:"strong"},"Certificate"))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"img",src:a(38282).Z,width:"936",height:"805"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Configure the application in ShardingSphere")),(0,n.kt)("p",{parentName:"li"},"First, we need to find the application.properties that we need to configure."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"img",src:a(72254).Z,width:"378",height:"416"})),(0,n.kt)("p",{parentName:"li"},"Next, we need to copy the data from the Casdoor application and paste it into the application."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"img",src:a(48023).Z,width:"900",height:"909"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Test it")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"img",src:a(35780).Z,width:"1900",height:"967"})))))}d.isMDXComponent=!0},48023:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/application-9697d8d68b815a652894badeb2f49ed8.png"},77693:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casdoorConfig-eac4847985a4638188fcff1958c58456.png"},38282:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cert-ba7c32dfa411e940aaf9036bf501e2cc.png"},72254:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/list-d5bd61e3d46faa4abc4b686da089d1b4.png"},35780:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/test-573ee768e17a9c1488a504cd1728b927.gif"}}]);