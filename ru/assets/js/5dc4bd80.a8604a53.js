"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4904],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),h=a,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return o?r.createElement(f,i(i({ref:t},d),{},{components:o})):r.createElement(f,i({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},90985:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=o(87462),a=(o(67294),o(3905));const n={title:"ELK",description:"Overview of casdoor/elk-auth-casdoor",keywords:["ELK"],authors:["ComradeProgrammer"]},i=void 0,s={unversionedId:"integration/go/elk",id:"integration/go/elk",title:"ELK",description:"Overview of casdoor/elk-auth-casdoor",source:"@site/docs/integration/go/elk.md",sourceDirName:"integration/go",slug:"/integration/go/elk",permalink:"/ru/docs/integration/go/elk",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/go/elk.md",tags:[],version:"current",frontMatter:{title:"ELK",description:"Overview of casdoor/elk-auth-casdoor",keywords:["ELK"],authors:["ComradeProgrammer"]},sidebar:"tutorialSidebar",previous:{title:"Bytebase",permalink:"/ru/docs/integration/go/Bytebase"},next:{title:"Gitea",permalink:"/ru/docs/integration/go/gitea"}},l={},c=[{value:"Overview of casdoor/elk-auth-casdoor",id:"overview-of-casdoorelk-auth-casdoor",level:2},{value:"How to run it?",id:"how-to-run-it",level:2}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview-of-casdoorelk-auth-casdoor"},"Overview of casdoor/elk-auth-casdoor"),(0,a.kt)("p",null,'One of the biggest drawbacks of ELK (Elasticsearch, Logstash, and Kibana) is that originally these products had no authentication mechanism. As a result, anyone with the URL of Kibana or Elasticsearch could access the Kibana dashboard. Later on, ELK integrated an embedded authentication system called "Xpack." However, its advanced functions (such as OAuth, OIDC, LDAP, SAML) are not free. Only plain authentication, using a set of accounts and passwords, is available free of charge, which is quite inconvenient. This approach does not allow us to provide a unique account for everyone in a corporation.'),(0,a.kt)("p",null,"To address this issue, we have developed an elk authentication solution based on Casdoor. This solution is free, open-source, under ongoing maintenance, and supports a wide range of advanced features. Casdoor is a centralized authentication/Single-Sign-On platform based on OAuth 2.0/OIDC. Casdoor/elk-auth-casdoor serves as a reverse proxy designed to intercept all HTTP data flow towards the ELK/Kibana stack. It guides users who haven't logged in to log in. This reverse proxy operates transparently as long as the user has logged in."),(0,a.kt)("p",null,"If a user hasn't been correctly authenticated, the request will be temporarily cached, and the user will be redirected to the Casdoor login page. Once the user logs in through Casdoor, the cached request will be restored and sent to Kibana. Therefore, if a POST request (or any other request type besides GET) is intercepted, the user won't need to refill the form and resend the request. The reverse proxy will remember it for you."),(0,a.kt)("p",null,"The casdoor/elk-auth-casdoor repository is located at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casdoor/elk-auth-casdoor"},"https://github.com/casdoor/elk-auth-casdoor"),"."),(0,a.kt)("h2",{id:"how-to-run-it"},"How to run it?"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure that you have the Go programming language environment installed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casdoor/elk-auth-casdoor"},"casdoor/elk-auth-casdoor")," and fetch the code.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Register your proxy as an app with Casdoor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify the configuration."),(0,a.kt)("p",{parentName:"li"},'The configuration file is located at "conf/app.conf". Here is an example, which you should customize based on your specific needs.'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ini"},'appname = .\n# port on which the reverse proxy shall be run\nhttpport = 8080\nrunmode = dev\n# EDIT IT IF NECESSARY. The URL of this reverse proxy.\npluginEndpoint = "http://localhost:8080"\n# EDIT IT IF NECESSARY. The URL of the Kibana.\ntargetEndpoint = "http://localhost:5601"\n# EDIT IT. The URL of Casdoor.\ncasdoorEndpoint = "http://localhost:8000"\n# EDIT IT. The clientID of your reverse proxy in Casdoor.\nclientID = ceb6eb261ab20174548d\n# EDIT IT. The clientSecret of your reverse proxy in Casdoor.\nclientSecret = af928f0ef1abc1b1195ca58e0e609e9001e134f4\n# EDIT IT. The application name of your reverse proxy in Casdoor.\nappName = ELKProxy\n# EDIT IT. The organization to which your reverse proxy belongs in Casdoor.\norganization = built-in\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," (in the above example) and log in following the redirection guidance. You should then see Kibana protected and authenticated by Casdoor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If everything works well, don't forget to block external access to the original Kibana port by configuring your firewall (or another method). This ensures that outsiders can only access Kibana via this reverse proxy."))))}p.isMDXComponent=!0}}]);