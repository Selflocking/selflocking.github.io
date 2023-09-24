"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5334],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(o),f=n,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return o?r.createElement(g,a(a({ref:t},s),{},{components:o})):r.createElement(g,a({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4335:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const i={title:"Google Chat",description:"Using Google Chat as a notification provider for Casdoor",keywords:["Google Chat","notification","provider"],authors:["UsherFall"]},a=void 0,l={unversionedId:"provider/notification/googleChat",id:"provider/notification/googleChat",title:"Google Chat",description:"Using Google Chat as a notification provider for Casdoor",source:"@site/docs/provider/notification/googleChat.md",sourceDirName:"provider/notification",slug:"/provider/notification/googleChat",permalink:"/de/docs/provider/notification/googleChat",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/notification/googleChat.md",tags:[],version:"current",frontMatter:{title:"Google Chat",description:"Using Google Chat as a notification provider for Casdoor",keywords:["Google Chat","notification","provider"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Slack",permalink:"/de/docs/provider/notification/slack"},next:{title:"Twitter",permalink:"/de/docs/provider/notification/twitter"}},c={},p=[{value:"Step 1: Get Application Default Credentials",id:"step-1-get-application-default-credentials",level:2},{value:"Step 3: Configure Casdoor Google Chat Provider",id:"step-3-configure-casdoor-google-chat-provider",level:2}],s={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"step-1-get-application-default-credentials"},"Step 1: Get Application Default Credentials"),(0,n.kt)("p",null,"In order to integrate notify with a Google Chat Application, ",(0,n.kt)("inlineCode",{parentName:"p"},"Application Credentials")," must be supplied. For more information on Google Application credential JSON see: ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/application-default-credentials"},"How Application Default Credentials works")),(0,n.kt)("p",null,"The json will look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "service_account",\n  "project_id": "",\n  "private_key_id": "",\n  "private_key": "",\n  "client_email": "",\n  "client_id": "",\n  "auth_uri": "",\n  "token_uri": "",\n  "auth_provider_x509_cert_url": "",\n  "client_x509_cert_url": ""\n}\n')),(0,n.kt)("h2",{id:"step-3-configure-casdoor-google-chat-provider"},"Step 3: Configure Casdoor Google Chat Provider"),(0,n.kt)("p",null,"Fill in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Application credential")," in the metadata."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"google_chat_provider",src:o(90930).Z,width:"1125",height:"755"})))}d.isMDXComponent=!0},90930:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/google_chat_provider-8d018a7e98f546074924cedad2f6e26c.png"}}]);