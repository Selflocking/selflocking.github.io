"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5053],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),v=n,m=d["".concat(l,".").concat(v)]||d[v]||u[v]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const i={title:"Brevo",description:"Using Brevo as the SMTP server",keywords:["email","Brevo"],authors:["UsherFall"]},a=void 0,s={unversionedId:"provider/email/brevo",id:"provider/email/brevo",title:"Brevo",description:"Using Brevo as the SMTP server",source:"@site/docs/provider/email/brevo.md",sourceDirName:"provider/email",slug:"/provider/email/brevo",permalink:"/zh/docs/provider/email/brevo",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/email/brevo.md",tags:[],version:"current",frontMatter:{title:"Brevo",description:"Using Brevo as the SMTP server",keywords:["email","Brevo"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"MailHog",permalink:"/zh/docs/provider/email/mailhog"},next:{title:"Azure ACS",permalink:"/zh/docs/provider/email/azureACS"}},l={},c=[{value:"Step 1: Request the activation of your Brevo SMTP account",id:"step-1-request-the-activation-of-your-brevo-smtp-account",level:3},{value:"Step 2: Get Brevo SMTP configuration",id:"step-2-get-brevo-smtp-configuration",level:3},{value:"Step 3: Configure Casdoor email Provider",id:"step-3-configure-casdoor-email-provider",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this guide, we will be using Brevo as the SMTP server."),(0,n.kt)("h3",{id:"step-1-request-the-activation-of-your-brevo-smtp-account"},"Step 1: Request the activation of your Brevo SMTP account"),(0,n.kt)("p",null,"Refer to the documentation to activate Brevo SMTP: ",(0,n.kt)("a",{parentName:"p",href:"https://help.brevo.com/hc/en-us/articles/7924908994450"},"Send transactional emails using Brevo SMTP")),(0,n.kt)("p",null,"In my case, when I created a ticket to activate my smtp account, I got this reply:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"brevo_smtp",src:r(76697).Z,width:"988",height:"853"})),(0,n.kt)("h3",{id:"step-2-get-brevo-smtp-configuration"},"Step 2: Get Brevo SMTP configuration"),(0,n.kt)("p",null,"In your Brevo dashboard, find ",(0,n.kt)("strong",{parentName:"p"},"SMTP&API"),", get ",(0,n.kt)("inlineCode",{parentName:"p"},"SMTP Server"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Port"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Login"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"SMTP key value")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"brevo_conf",src:r(70557).Z,width:"1852",height:"942"})),(0,n.kt)("h3",{id:"step-3-configure-casdoor-email-provider"},"Step 3: Configure Casdoor email Provider"),(0,n.kt)("p",null,"Now create an email provider in Casdoor. Fill in the necessary information."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"brevo_provider",src:r(63029).Z,width:"1363",height:"396"})),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Test SMTP Connection")," button. If you see ",(0,n.kt)("inlineCode",{parentName:"p"},"provider: SMTP connected successfully"),", it means that your Casdoor service can access the Brevo service."),(0,n.kt)("p",null,"Next, click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Send Testing Email")," button. If you see ",(0,n.kt)("inlineCode",{parentName:"p"},"Email sent successfully"),", it means that the test email has been sent successfully from the ",(0,n.kt)("inlineCode",{parentName:"p"},"From")," address to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Test Email"),"."))}u.isMDXComponent=!0},70557:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/brevo_conf-1d40b087fe4f6f2ce5dc102301817122.png"},63029:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/brevo_provider-7fdc890955c621a44ca71a83fbda1c09.png"},76697:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/brevo_smtp-e1d65be88b87e1a781a439845d4ee437.png"}}]);