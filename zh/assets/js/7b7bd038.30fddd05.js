"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7532],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(67294);function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,A=function(t,e){if(null==t)return{};var n,a,A={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(A[n]=t[n]);return A}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(A[n]=t[n])}return A}var c=a.createContext({}),i=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=i(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,A=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=i(n),d=A,h=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?a.createElement(h,r(r({ref:e},p),{},{components:n})):a.createElement(h,r({ref:e},p))}));function d(t,e){var n=arguments,A=e&&e.mdxType;if("string"==typeof t||A){var o=n.length,r=new Array(o);r[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:A,r[1]=l;for(var i=2;i<o;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85737:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(87462),A=(n(67294),n(3905));const o={title:"Using Casdoor as an OAuth2 Server in ShowDoc",description:"Using Casdoor as an OAuth2 server in ShowDoc",keywords:["ShowDoc","Casdoor","OAuth2","authentication"],authors:["leo220yuyaodog"]},r=void 0,l={unversionedId:"integration/php/showdoc",id:"integration/php/showdoc",title:"Using Casdoor as an OAuth2 Server in ShowDoc",description:"Using Casdoor as an OAuth2 server in ShowDoc",source:"@site/docs/integration/php/showdoc.md",sourceDirName:"integration/php",slug:"/integration/php/showdoc",permalink:"/zh/docs/integration/php/showdoc",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/php/showdoc.md",tags:[],version:"current",frontMatter:{title:"Using Casdoor as an OAuth2 Server in ShowDoc",description:"Using Casdoor as an OAuth2 server in ShowDoc",keywords:["ShowDoc","Casdoor","OAuth2","authentication"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Zentao",permalink:"/zh/docs/integration/php/zentao"},next:{title:"Flarum",permalink:"/zh/docs/integration/php/Flarum"}},c={},i=[{value:"Using Casdoor for Authentication in ShowDoc",id:"using-casdoor-for-authentication-in-showdoc",level:2},{value:"Step 1: Create a Casdoor Application",id:"step-1-create-a-casdoor-application",level:3},{value:"Step 2: Configure ShowDoc",id:"step-2-configure-showdoc",level:3},{value:"Step 3: Configure the Callback URL in Casdoor",id:"step-3-configure-the-callback-url-in-casdoor",level:3},{value:"Step 4: Have a Try on ShowDoc",id:"step-4-have-a-try-on-showdoc",level:3}],p={toc:i};function u(t){let{components:e,...o}=t;return(0,A.kt)("wrapper",(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,A.kt)("h2",{id:"using-casdoor-for-authentication-in-showdoc"},"Using Casdoor for Authentication in ShowDoc"),(0,A.kt)("p",null,(0,A.kt)("a",{parentName:"p",href:"https://www.showdoc.com.cn/"},"ShowDoc")," is an online API documentation and technical documentation tool that is perfect for IT teams. ShowDoc makes it easy to use Markdown syntax to write beautiful API documents, data dictionary documents, technical documents, online Excel documents, and more."),(0,A.kt)("p",null,"ShowDoc supports 3rd-party authentication, including OAuth2. Here is a tutorial for achieving this."),(0,A.kt)("h3",{id:"step-1-create-a-casdoor-application"},"Step 1: Create a Casdoor Application"),(0,A.kt)("p",null,"Go to your Casdoor and add a new application called ",(0,A.kt)("strong",{parentName:"p"},"ShowDoc"),". Here is an example of creating the ShowDoc application in Casdoor."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"create_application.png",src:n(59618).Z,width:"854",height:"833"})),(0,A.kt)("p",null,"Please remember the ",(0,A.kt)("inlineCode",{parentName:"p"},"client ID")," and ",(0,A.kt)("inlineCode",{parentName:"p"},"client Secret")," for the next step."),(0,A.kt)("admonition",{type:"info"},(0,A.kt)("p",{parentName:"admonition"},"Please don't fill in the ",(0,A.kt)("strong",{parentName:"p"},"callback URL")," in this step. The URL depends on the configurations on ShowDoc in the next step. We will come back to set a correct callback URL later.")),(0,A.kt)("h3",{id:"step-2-configure-showdoc"},"Step 2: Configure ShowDoc"),(0,A.kt)("p",null,"First, enable the OAuth2 login button. Then, fill in the ",(0,A.kt)("inlineCode",{parentName:"p"},"callback URL")," as shown in the example. Fill in the ",(0,A.kt)("inlineCode",{parentName:"p"},"client ID")," and ",(0,A.kt)("inlineCode",{parentName:"p"},"client secret")," that were remembered in the previous step."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"showdoc_oauth2.png",src:n(62963).Z,width:"1178",height:"872"})),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},"Authorize path"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"AccessToken path"),", and ",(0,A.kt)("inlineCode",{parentName:"p"},"User info path")," are required. You can fill them in as shown below."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-ini"},"Authorize path:   /login/oauth/authorize\nAccessToken path:   /api/login/oauth/access_token\nUser info path:   /api/get-account\n")),(0,A.kt)("h3",{id:"step-3-configure-the-callback-url-in-casdoor"},"Step 3: Configure the Callback URL in Casdoor"),(0,A.kt)("p",null,"Go back to the application edit page in step 1 and add the ",(0,A.kt)("inlineCode",{parentName:"p"},"callback URL")," that you filled in ShowDoc."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"showdoc_callbackurl.png",src:n(22469).Z,width:"1171",height:"196"})),(0,A.kt)("h3",{id:"step-4-have-a-try-on-showdoc"},"Step 4: Have a Try on ShowDoc"),(0,A.kt)("p",null,"You should see the following on the login page:"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"showdoc_login.png",src:n(87420).Z,width:"536",height:"685"})),(0,A.kt)("p",null,"Congratulations! You have completed all the steps. Press the ",(0,A.kt)("strong",{parentName:"p"},"'Casdoor SSO'")," button, and you will be redirected to the Casdoor login page."))}u.isMDXComponent=!0},59618:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/create_application-35209036d1bd6a3c8ea46f930b2d1ed9.png"},22469:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,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"},87420:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/showdoc_login-c253a4095e475b43ec585545a8e59cd2.png"},62963:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/showdoc_oauth2-f9f29eec79ac6e72582a5ad78ba2d5e6.png"}}]);