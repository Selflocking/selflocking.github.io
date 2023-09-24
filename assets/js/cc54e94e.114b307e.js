"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6822],{3905:(A,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>p});var o=t(67294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,o)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,o,n=function(A,e){if(null==A)return{};var t,o,n={},r=Object.keys(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var c=o.createContext({}),d=function(A){var e=o.useContext(c),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},l=function(A){var e=d(A.components);return o.createElement(c.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(A,e){var t=A.components,n=A.mdxType,r=A.originalType,c=A.parentName,l=i(A,["components","mdxType","originalType","parentName"]),s=d(t),p=n,f=s["".concat(c,".").concat(p)]||s[p]||u[p]||r;return t?o.createElement(f,a(a({ref:e},l),{},{components:t})):o.createElement(f,a({ref:e},l))}));function p(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var r=t.length,a=new Array(r);a[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=A,i.mdxType="string"==typeof A?A:n,a[1]=i;for(var d=2;d<r;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},32960:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(87462),n=(t(67294),t(3905));const r={title:"BookStack",description:"Using Casdoor for authentication in BookStack",keywords:["BookStack"],authors:["leo220yuyaodog"]},a=void 0,i={unversionedId:"integration/go/bookstack",id:"integration/go/bookstack",title:"BookStack",description:"Using Casdoor for authentication in BookStack",source:"@site/docs/integration/go/bookstack.md",sourceDirName:"integration/go",slug:"/integration/go/bookstack",permalink:"/docs/integration/go/bookstack",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/go/bookstack.md",tags:[],version:"current",frontMatter:{title:"BookStack",description:"Using Casdoor for authentication in BookStack",keywords:["BookStack"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"OpenShift",permalink:"/docs/integration/go/openshift"},next:{title:"Bytebase",permalink:"/docs/integration/go/Bytebase"}},c={},d=[{value:"Using Casdoor for authentication in BookStack",id:"using-casdoor-for-authentication-in-bookstack",level:2},{value:"Step 1: Create a Casdoor application",id:"step-1-create-a-casdoor-application",level:3},{value:"Step 2: Configure Casdoor Login",id:"step-2-configure-casdoor-login",level:3},{value:"Step 3: Fill in the <code>redirectUrl</code> in Casdoor",id:"step-3-fill-in-the-redirecturl-in-casdoor",level:3}],l={toc:d};function u(A){let{components:e,...r}=A;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"using-casdoor-for-authentication-in-bookstack"},"Using Casdoor for authentication in BookStack"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.bookstack.cn"},"BookStack"))," is an open-source book and document sharing site, as well as an open-source application developed using the Go language to help you better manage document reading."),(0,n.kt)("p",null,"BookStack-casdoor has been integrated with ",(0,n.kt)("strong",{parentName:"p"},"Casdoor"),", and you can now quickly get started with a simple configuration."),(0,n.kt)("h3",{id:"step-1-create-a-casdoor-application"},"Step 1: Create a Casdoor application"),(0,n.kt)("p",null,"Go to your Casdoor and add a new application called ",(0,n.kt)("strong",{parentName:"p"},"BookStack"),". Here is an example of creating the BookStack application in Casdoor."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"bookstack_config.png",src:t(80522).Z,width:"876",height:"792"})),(0,n.kt)("p",null,"Please remember the ",(0,n.kt)("inlineCode",{parentName:"p"},"Name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Organization"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"client ID"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"client Secret"),". You will need them in the next step."),(0,n.kt)("h3",{id:"step-2-configure-casdoor-login"},"Step 2: Configure Casdoor Login"),(0,n.kt)("p",null,"Next, navigate to BookStack and find the file ",(0,n.kt)("inlineCode",{parentName:"p"},"oauth.conf.example"),"."),(0,n.kt)("p",null,"Rename ",(0,n.kt)("inlineCode",{parentName:"p"},"oauth.conf.example")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"oauth.conf")," and ",(0,n.kt)("strong",{parentName:"p"},"modify")," the configuration. By default, the content is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},'[oauth]\ncasdoorOrganization = "<Organization>"\ncasdoorApplication = "bookstack"\ncasdoorEndpoint = http://localhost:8000\nclientId = <client ID>\nclientSecret = <client Secret>\nredirectUrl = http://localhost:8181/login/callback\n')),(0,n.kt)("h3",{id:"step-3-fill-in-the-redirecturl-in-casdoor"},"Step 3: Fill in the ",(0,n.kt)("inlineCode",{parentName:"h3"},"redirectUrl")," in Casdoor"),(0,n.kt)("p",null,"In the final step, go back to the page where you added the ",(0,n.kt)("strong",{parentName:"p"},"BookStack application")," and fill in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Redirect URLs"),". Make sure the ",(0,n.kt)("inlineCode",{parentName:"p"},"Redirect URL")," is the same as the ",(0,n.kt)("inlineCode",{parentName:"p"},"redirectUrl")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"oauth.conf")," file."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"bookstack_callback",src:t(13753).Z,width:"984",height:"211"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Now that you have completed the Casdoor configuration!")),(0,n.kt)("p",null,"You can now go back to your BookStack and experience using Casdoor for login authentication once you have successfully deployed BookStack."))}u.isMDXComponent=!0},13753:(A,e,t)=>{t.d(e,{Z:()=>o});const o="data:image/png;base64,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"},80522:(A,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/config-8f21c59387cf3e09a9f856e4c4e2de7f.png"}}]);