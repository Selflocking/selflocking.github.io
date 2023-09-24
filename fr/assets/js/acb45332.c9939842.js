"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3718],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,k=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return t?i.createElement(k,r(r({ref:n},c),{},{components:t})):i.createElement(k,r({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(87462),o=(t(67294),t(3905));const a={title:"Jenkins Plugin",description:"Using the Casdoor plugin for Jenkins security",keywords:["plugin","Jenkins"],authors:["Abingcbc"]},r=void 0,l={unversionedId:"integration/java/jenkins-plugin",id:"integration/java/jenkins-plugin",title:"Jenkins Plugin",description:"Using the Casdoor plugin for Jenkins security",source:"@site/docs/integration/java/jenkins-plugin.md",sourceDirName:"integration/java",slug:"/integration/java/jenkins-plugin",permalink:"/fr/docs/integration/java/jenkins-plugin",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/jenkins-plugin.md",tags:[],version:"current",frontMatter:{title:"Jenkins Plugin",description:"Using the Casdoor plugin for Jenkins security",keywords:["plugin","Jenkins"],authors:["Abingcbc"]},sidebar:"tutorialSidebar",previous:{title:"Spring Security Filter with OIDC integration for Casdoor",permalink:"/fr/docs/integration/java/spring-security/spring-security-filter"},next:{title:"Jenkins OIDC",permalink:"/fr/docs/integration/java/jenkins-oidc"}},s={},p=[{value:"Step 1: Deploy Casdoor and Jenkins",id:"step-1-deploy-casdoor-and-jenkins",level:2},{value:"Step 2: Configure the Casdoor Application",id:"step-2-configure-the-casdoor-application",level:2},{value:"Step 3: Configure Jenkins",id:"step-3-configure-jenkins",level:2}],c={toc:p};function d(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casdoor provides a plugin that allows users to log in to Jenkins. Here, we will show you how to use the Casdoor plugin for Jenkins security."),(0,o.kt)("p",null,"The following are some of the configuration settings:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CASDOOR_HOSTNAME"),": The domain name or IP where the Casdoor server is deployed."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JENKINS_HOSTNAME"),": The domain name or IP where Jenkins is deployed."),(0,o.kt)("h2",{id:"step-1-deploy-casdoor-and-jenkins"},"Step 1: Deploy Casdoor and Jenkins"),(0,o.kt)("p",null,"Firstly, deploy ",(0,o.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Casdoor")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/installing/"},"Jenkins"),"."),(0,o.kt)("p",null,"After a successful deployment, ensure the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set the Jenkins URL (Manage Jenkins -> Configure System -> Jenkins Location) to ",(0,o.kt)("inlineCode",{parentName:"li"},"JENKINS_HOSTNAME"),".\n",(0,o.kt)("img",{alt:"Jenkins URL",src:t(18661).Z,width:"1887",height:"825"})),(0,o.kt)("li",{parentName:"ol"},"Verify that Casdoor can be logged in and used normally."),(0,o.kt)("li",{parentName:"ol"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"origin")," value of Casdoor (conf/app.conf) to ",(0,o.kt)("inlineCode",{parentName:"li"},"CASDOOR_HOSTNAME"),".\n",(0,o.kt)("img",{alt:"Casdoor conf",src:t(32798).Z,width:"1013",height:"448"}))),(0,o.kt)("h2",{id:"step-2-configure-the-casdoor-application"},"Step 2: Configure the Casdoor Application"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new Casdoor application or use an existing one."),(0,o.kt)("li",{parentName:"ol"},"Add a redirect URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://JENKINS_HOSTNAME/securityRealm/finishLogin"),(0,o.kt)("img",{alt:"Casdoor Application Setting",src:t(7607).Z,width:"1366",height:"581"})),(0,o.kt)("li",{parentName:"ol"},"Add the desired provider and provide any additional settings.")),(0,o.kt)("p",null,"On the application settings page, you will find two values: ",(0,o.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Client secret"),", as shown in the picture above. We will use these values in the next step."),(0,o.kt)("p",null,"Open your favorite browser and visit ",(0,o.kt)("strong",{parentName:"p"},"http://",(0,o.kt)("inlineCode",{parentName:"strong"},"CASDOOR_HOSTNAME"),"/.well-known/openid-configuration")," to view the OIDC configuration of Casdoor."),(0,o.kt)("h2",{id:"step-3-configure-jenkins"},"Step 3: Configure Jenkins"),(0,o.kt)("p",null,"Now, you can install the Casdoor plugin from the marketplace or by uploading its ",(0,o.kt)("inlineCode",{parentName:"p"},"jar")," file."),(0,o.kt)("p",null,"After the installation is complete, go to Manage Jenkins -> Configure Global Security."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Suggestion"),": Back up the Jenkins ",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml")," file and use it for recovery in case of setup errors."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Jenkins&#39; Setting",src:t(47004).Z,width:"2408",height:"1352"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'In the Security Realm section, select "Casdoor Authentication Plugin".'),(0,o.kt)("li",{parentName:"ol"},"In the Casdoor Endpoint field, enter the ",(0,o.kt)("inlineCode",{parentName:"li"},"CASDOOR_HOSTNAME")," mentioned earlier."),(0,o.kt)("li",{parentName:"ol"},"In the Client ID field, enter the ",(0,o.kt)("inlineCode",{parentName:"li"},"Client ID")," mentioned earlier."),(0,o.kt)("li",{parentName:"ol"},"In the Client secret field, enter the ",(0,o.kt)("inlineCode",{parentName:"li"},"Client secret")," mentioned earlier."),(0,o.kt)("li",{parentName:"ol"},"In the JWT Public Key field, provide the public key used to validate the JWT token. You can find the public key in Casdoor by clicking on ",(0,o.kt)("inlineCode",{parentName:"li"},"Cert")," at the top. After clicking ",(0,o.kt)("inlineCode",{parentName:"li"},"edit")," on your application, you can copy the public key from the following page.\n",(0,o.kt)("img",{alt:"JWT Public Key",src:t(62515).Z,width:"2184",height:"1180"})),(0,o.kt)("li",{parentName:"ol"},"Organization Name and Application Name are optional. You can specify your organization and application to verify users in other organizations and applications. If these fields are left empty, the plugin will use the default organization and application."),(0,o.kt)("li",{parentName:"ol"},'In the Authorization section, check "Logged-in users can do anything". Disable "Allow anonymous read access".'),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,"Jenkins will now automatically redirect you to Casdoor for authentication."))}d.isMDXComponent=!0},32798:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/casdoor_origin-8f5d9e44f6b58828ce69e6e6d896e122.png"},7607:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/appseeting_jenkins-6e0a2968614d0735005951278f44c008.png"},62515:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins_cert-6ab012c3fd63b5d64bf09f182ae4a9c0.png"},47004:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins_plugin-e66dcae10b60bbe2b5ac25a804ccf3cd.png"},18661:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jenkins_url-9e8f261138a88501bdfce79ee1c1f3fa.png"}}]);