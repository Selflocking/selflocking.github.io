"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4954],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||n;return r?i.createElement(g,o(o({ref:t},c),{},{components:r})):i.createElement(g,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const n={title:"MailHog",description:"Using MailHog as the SMTP server",keywords:["email","mailhog"],authors:["Chinoholo0807"]},o=void 0,l={unversionedId:"provider/email/mailhog",id:"provider/email/mailhog",title:"MailHog",description:"Using MailHog as the SMTP server",source:"@site/docs/provider/email/mailhog.md",sourceDirName:"provider/email",slug:"/provider/email/mailhog",permalink:"/fr/docs/provider/email/mailhog",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/email/mailhog.md",tags:[],version:"current",frontMatter:{title:"MailHog",description:"Using MailHog as the SMTP server",keywords:["email","mailhog"],authors:["Chinoholo0807"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/fr/docs/provider/email/overview"},next:{title:"Brevo",permalink:"/fr/docs/provider/email/brevo"}},s={},p=[{value:"Step 1: Deploy the MailHog service",id:"step-1-deploy-the-mailhog-service",level:3},{value:"Step 2: Create an email provider",id:"step-2-create-an-email-provider",level:3},{value:"Step 3: Send a test email",id:"step-3-send-a-test-email",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this guide, we will be using MailHog as the SMTP server. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mailhog/MailHog"},"MailHog")," is an email-testing tool that operates with a fake SMTP server."),(0,a.kt)("h3",{id:"step-1-deploy-the-mailhog-service"},"Step 1: Deploy the MailHog service"),(0,a.kt)("p",null,"The IP address for the MailHog service is ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.24.128"),", and the SMTP service port is ",(0,a.kt)("inlineCode",{parentName:"p"},"1025"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MailHog configuration",src:r(72369).Z,width:"1533",height:"399"})),(0,a.kt)("h3",{id:"step-2-create-an-email-provider"},"Step 2: Create an email provider"),(0,a.kt)("p",null,"Provide the necessary information and save the settings."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MailHog email provider",src:r(83415).Z,width:"1703",height:"1557"})),(0,a.kt)("h3",{id:"step-3-send-a-test-email"},"Step 3: Send a test email"),(0,a.kt)("p",null,"First, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test SMTP Connection")," button. If you see ",(0,a.kt)("inlineCode",{parentName:"p"},"provider: SMTP connected successfully"),", it means that your Casdoor service can access the MailHog service."),(0,a.kt)("p",null,"Next, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Send Testing Email")," button. If you see ",(0,a.kt)("inlineCode",{parentName:"p"},"Email sent successfully"),", it means that the test email has been sent successfully from the ",(0,a.kt)("inlineCode",{parentName:"p"},"From")," address to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Email"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sending a test email using MailHog",src:r(30391).Z,width:"2185",height:"1779"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Receiving a test email using MailHog",src:r(4153).Z,width:"2697",height:"805"})))}d.isMDXComponent=!0},72369:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/mailhog_conf-8b2d4e0d521578e822e33299f3a66207.png"},83415:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/mailhog_email_provider_conf-bfbda74531f03acfd191d8543b46b8b8.png"},4153:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/mailhog_recv_test_email-0aa5c7913e4272d51118b07ffd1b8448.png"},30391:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/mailhog_send_test_email-f2371e426dfab3deef1d1a3cf752c0a3.png"}}]);