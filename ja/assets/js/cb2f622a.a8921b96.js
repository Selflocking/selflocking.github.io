"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={title:"OpenShift",description:"Using Casdoor for authentication in OpenShift",keywords:["OpenShift"],authors:["UsherFall"]},a=void 0,s={unversionedId:"integration/go/openshift",id:"integration/go/openshift",title:"OpenShift",description:"Using Casdoor for authentication in OpenShift",source:"@site/docs/integration/go/openshift.md",sourceDirName:"integration/go",slug:"/integration/go/openshift",permalink:"/ja/docs/integration/go/openshift",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/go/openshift.md",tags:[],version:"current",frontMatter:{title:"OpenShift",description:"Using Casdoor for authentication in OpenShift",keywords:["OpenShift"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/ja/docs/integration/go/kubernetes"},next:{title:"BookStack",permalink:"/ja/docs/integration/go/bookstack"}},l={},p=[{value:"Step 1: Create an Casdoor application",id:"step-1-create-an-casdoor-application",level:2},{value:"Step 2: OpenShift OAuth Configuration",id:"step-2-openshift-oauth-configuration",level:2},{value:"Step 3: Test OIDC Authentication",id:"step-3-test-oidc-authentication",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"OpenShift supports OIDC, so we can integrate Casdoor with OpenShift. The following steps demonstrate how to integrate Casdoor with OpenShift Local using the ",(0,i.kt)("a",{parentName:"p",href:"https://demo.casdoor.com/"},"online demo of Casdoor"),"."),(0,i.kt)("h2",{id:"step-1-create-an-casdoor-application"},"Step 1: Create an Casdoor application"),(0,i.kt)("p",null,"Add a new application in Casdoor, noting the following points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remember the ",(0,i.kt)("inlineCode",{parentName:"li"},"Client ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Client secret")," for the next step."),(0,i.kt)("li",{parentName:"ul"},"The format of the Redirect URL is ",(0,i.kt)("inlineCode",{parentName:"li"},"https://oauth-openshift.apps.<cluster_name>.<cluster_domain>/*"),". Fill it in depending on your situation.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create an application in Casdoor",src:n(85264).Z,width:"940",height:"832"})),(0,i.kt)("h2",{id:"step-2-openshift-oauth-configuration"},"Step 2: OpenShift OAuth Configuration"),(0,i.kt)("p",null,"Now log into the OpenShift Console as Kubeadmin. Once you are logged in, browse to the side menu and locate the Cluster settings."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OpenShift side menu",src:n(90028).Z,width:"325",height:"226"})),(0,i.kt)("p",null,"Under Global Configuration, you will see OAuth."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OAuth configuration in Cluster settings",src:n(52398).Z,width:"1461",height:"82"})),(0,i.kt)("p",null,"You will see the Identity Provider section. In the ADD section, select OpenID Connect from the options."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select menu",src:n(74050).Z,width:"206",height:"467"})),(0,i.kt)("p",null,"Configure OIDC, noting the following points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fill in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Client ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Client Secret")," remembered from the previous step."),(0,i.kt)("li",{parentName:"ul"},"The Issuer URL must use https, in the form ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<casdoor-host>"),", again depending on your situation.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configure OIDC",src:n(70683).Z,width:"884",height:"472"})),(0,i.kt)("h2",{id:"step-3-test-oidc-authentication"},"Step 3: Test OIDC Authentication"),(0,i.kt)("p",null,"Access the OpenShift console in the browser. You will see Casdoor (the name you configured in the previous step). Click on the Casdoor login option. You will be redirected to the Casdoor login page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final result",src:n(78302).Z,width:"716",height:"374"})))}u.isMDXComponent=!0},78302:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login-06fa1ff66e1c99c1805f15491a422465.gif"},85264:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/openshift_1-458ac7f2a13a67dfde6f938de0cde67f.png"},90028:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/openshift_2-4ef2f1274a1386d6ade704d329551a3f.png"},52398:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/openshift_3-47ecf3a0fd3487dbbaaf8e6fad36d8e8.png"},74050:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/openshift_4-8b99b9e7129d560f8e872ebab794de9b.png"},70683:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/openshift_5-e6bc0142685a1863d451e048b55cde37.png"}}]);