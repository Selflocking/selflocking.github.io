"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5021],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=r,g=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return t?n.createElement(g,i(i({ref:a},u),{},{components:t})):n.createElement(g,i({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74480:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const o={title:"Grafana",description:"Using Casdoor for authentication in Grafana",keywords:["Grafana"],authors:["ComradeProgrammer"]},i=void 0,l={unversionedId:"integration/go/grafana",id:"integration/go/grafana",title:"Grafana",description:"Using Casdoor for authentication in Grafana",source:"@site/docs/integration/go/grafana.md",sourceDirName:"integration/go",slug:"/integration/go/grafana",permalink:"/ru/docs/integration/go/grafana",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/go/grafana.md",tags:[],version:"current",frontMatter:{title:"Grafana",description:"Using Casdoor for authentication in Grafana",keywords:["Grafana"],authors:["ComradeProgrammer"]},sidebar:"tutorialSidebar",previous:{title:"Gitea",permalink:"/ru/docs/integration/go/gitea"},next:{title:"MinIO",permalink:"/ru/docs/integration/go/minio"}},s={},p=[{value:"Using Casdoor for authentication in Grafana",id:"using-casdoor-for-authentication-in-grafana",level:2},{value:"Step 1: Create an app for Grafana in Casdoor",id:"step-1-create-an-app-for-grafana-in-casdoor",level:2},{value:"Step 2: Modify the configuration of Grafana",id:"step-2-modify-the-configuration-of-grafana",level:2},{value:"About HTTPS",id:"about-https",level:3},{value:"About redirectURI after Sign In With Casdoor",id:"about-redirecturi-after-sign-in-with-casdoor",level:3},{value:"About Role Mapping",id:"about-role-mapping",level:3},{value:"Step 3: See if it works",id:"step-3-see-if-it-works",level:2}],u={toc:p};function c(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-casdoor-for-authentication-in-grafana"},"Using Casdoor for authentication in Grafana"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/oss/grafana/"},"Grafana")," supports authentication via OAuth. Therefore, it is extremely easy for users to use Casdoor to log in to Grafana. Only several steps and simple configurations are needed to achieve that."),(0,r.kt)("p",null,"Here is a tutorial on how to use Casdoor for authentication in Grafana. Before you proceed, please ensure that you have Grafana installed and running."),(0,r.kt)("h2",{id:"step-1-create-an-app-for-grafana-in-casdoor"},"Step 1: Create an app for Grafana in Casdoor"),(0,r.kt)("p",null,"Here is an example of creating an app in Casdoor:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create an application in Casdoor",src:t(22518).Z,width:"1367",height:"810"})),(0,r.kt)("p",null,"Please copy the client secret and client ID for the next step."),(0,r.kt)("p",null,"Please add the callback URL of Grafana. By default, Grafana's OAuth callback is ",(0,r.kt)("inlineCode",{parentName:"p"},"/login/generic_oauth"),". So please concatenate this URL correctly."),(0,r.kt)("h2",{id:"step-2-modify-the-configuration-of-grafana"},"Step 2: Modify the configuration of Grafana"),(0,r.kt)("p",null,"By default, the configuration file for OAuth is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/defaults.ini")," in the workdir of Grafana."),(0,r.kt)("p",null,"Please find the section ",(0,r.kt)("inlineCode",{parentName:"p"},"[auth.generic_oauth]")," and modify the following fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[auth.generic_oauth]\nname = Casdoor\nicon = signin\nenabled = true\nallow_sign_up = true\nclient_id = <client ID from previous step>\nclient_secret = <client secret from previous step>\nauth_url = <Casdoor endpoint>/login/oauth/authorize\ntoken_url = <Casdoor endpoint>/api/login/oauth/access_token\n\n")),(0,r.kt)("h3",{id:"about-https"},"About HTTPS"),(0,r.kt)("p",null,"If you don't want HTTPS enabled for Casdoor or if you deploy Grafana without HTTPS enabled, please also set ",(0,r.kt)("inlineCode",{parentName:"p"},"tls_skip_verify_insecure = true"),"."),(0,r.kt)("h3",{id:"about-redirecturi-after-sign-in-with-casdoor"},"About redirectURI after Sign In With Casdoor"),(0,r.kt)("p",null,"If the redirect URI is not correct after signing in with Casdoor in Grafana, you may want to configure ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/69814805"},"root_url"),".  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[server]\nhttp_port = 3000\n# The public-facing domain name used to access Grafana from a browser\ndomain = <your IP here>\n# The full public-facing URL\nroot_url = %(protocol)s://%(domain)s:%(http_port)s/\n")),(0,r.kt)("p",null,"Related links:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#root_url"},"Grafana documentation"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/grafana/grafana/blob/main/conf/defaults.ini"},"Grafana defaults.ini")))),(0,r.kt)("h3",{id:"about-role-mapping"},"About Role Mapping"),(0,r.kt)("p",null,"You may want to configure ",(0,r.kt)("inlineCode",{parentName:"p"},"role_attribute_path")," to map your user's role to Grafana via ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/configure-authentication/generic-oauth/#role-mapping"},"role_attribute_path"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[auth.generic_oauth]\nrole_attribute_path = contains(roles[*].name, 'admin') && 'Admin' || contains(roles[*].name, 'editor') && 'Editor' || 'Viewer'\nrole_attribute_strict = true\nallow_assign_grafana_admin = true\n")),(0,r.kt)("p",null,"The JMESPath expression after ",(0,r.kt)("inlineCode",{parentName:"p"},"role_attribute_path")," is very important here. Please refer to the Grafana documentation."),(0,r.kt)("h2",{id:"step-3-see-if-it-works"},"Step 3: See if it works"),(0,r.kt)("p",null,"Shutdown Grafana and restart it."),(0,r.kt)("p",null,"Go to the login page. You should see something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final result",src:t(75288).Z,width:"1384",height:"739"})))}c.isMDXComponent=!0},22518:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/grafana_1-9f197ebf06da48585fe18ce1d66ce212.png"},75288:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/grafana_2-5136a37a917e1c899feedb23e218fa13.png"}}]);