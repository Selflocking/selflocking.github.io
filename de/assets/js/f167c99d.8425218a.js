"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8861],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?n.createElement(f,i(i({ref:a},c),{},{components:t})):n.createElement(f,i({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35091:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const o={title:"Using Casdoor as a CAS Server",description:"How to use Casdoor as a CAS server",keywords:["CAS","server"],authors:["ComradeProgrammer"]},i=void 0,l={unversionedId:"how-to-connect/cas",id:"how-to-connect/cas",title:"Using Casdoor as a CAS Server",description:"How to use Casdoor as a CAS server",source:"@site/docs/how-to-connect/cas.md",sourceDirName:"how-to-connect",slug:"/how-to-connect/cas",permalink:"/de/docs/how-to-connect/cas",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/cas.md",tags:[],version:"current",frontMatter:{title:"Using Casdoor as a CAS Server",description:"How to use Casdoor as a CAS server",keywords:["CAS","server"],authors:["ComradeProgrammer"]},sidebar:"tutorialSidebar",previous:{title:"OAuth 2.0",permalink:"/de/docs/how-to-connect/oauth"},next:{title:"SAML",permalink:"/de/docs/category/saml"}},s={},p=[{value:"Using Casdoor as a CAS Server",id:"using-casdoor-as-a-cas-server",level:2},{value:"Overview",id:"overview",level:3},{value:"An Example",id:"an-example",level:3}],c={toc:p};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-casdoor-as-a-cas-server"},"Using Casdoor as a CAS Server"),(0,r.kt)("p",null,"Casdoor can now be used as a CAS server. It currently supports CAS 3.0."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The CAS endpoint prefix in Casdoor is ",(0,r.kt)("inlineCode",{parentName:"p"},"<Casdoor endpoint>/cas/<organization name>/<application name>"),". Here is an example using the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"https://door.casdoor.com")," with an application named ",(0,r.kt)("inlineCode",{parentName:"p"},"cas-java-app")," under the organization ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/login")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/login")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/logout")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/logout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/serviceValidate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/serviceValidate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/proxyValidate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/proxyValidate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/proxy")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/proxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/validate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/validate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/p3/serviceValidate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/p3/serviceValidate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/p3/proxyValidate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/p3/proxyValidate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/samlValidate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/samlValidate"))),(0,r.kt)("p",null,"For more information about CAS, its different versions, and parameters for these endpoints, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://apereo.github.io/cas/6.6.x/protocol/CAS-Protocol-Specification.html"},"CAS Protocol Specification"),"."),(0,r.kt)("h3",{id:"an-example"},"An Example"),(0,r.kt)("p",null,"Here is an official example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apereo/cas-sample-java-webapp"},"GitHub Repository")," that contains a web app and utilizes the official CAS Java client ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apereo/java-cas-client"},"GitHub Repository"),". By going through this example, you can learn how to connect to Casdoor via CAS."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note: Currently, Casdoor only supports all three versions of CAS: CAS 1.0, 2.0, and 3.0.")),(0,r.kt)("p",null,"The CAS configuration is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/webapp/WEB-INF/web.yml"),"."),(0,r.kt)("p",null,"By default, this app uses CAS 3.0, which is specified by the following configurations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<filter-name>CAS Validation Filter</filter-name>\n<filter-class>org.jasig.cas.client.validation.Cas30ProxyReceivingTicketValidationFilter</filter-class>\n")),(0,r.kt)("p",null,"If you want to protect this web app using CAS 2.0, change the CAS Validation Filter to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<filter-name>CAS Validation Filter</filter-name>\n<filter-class>org.jasig.cas.client.validation.Cas20ProxyReceivingTicketValidationFilter</filter-class>\n")),(0,r.kt)("p",null,"For CAS 1.0, use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<filter-name>CAS Validation Filter</filter-name>\n<filter-class>org.jasig.cas.client.validation.Cas10TicketValidationFilter</filter-class>\n")),(0,r.kt)("p",null,"For all instances of the ",(0,r.kt)("inlineCode",{parentName:"p"},"casServerUrlPrefix")," parameter, change them to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<param-name>casServerUrlPrefix</param-name>\n<param-value>http://door.casdoor.com/cas/casbin/cas-java-app</param-value>\n")),(0,r.kt)("p",null,"For all instances of the ",(0,r.kt)("inlineCode",{parentName:"p"},"casServerLoginUrl")," parameter, change them to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<param-name>casServerLoginUrl</param-name>\n<param-value>http://door.casdoor.com/cas/casbin/cas-java-app/login</param-value>\n")),(0,r.kt)("p",null,"If you need to customize more configurations, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apereo/java-cas-client"},"Java CAS client GitHub Repository")," for detailed information."))}d.isMDXComponent=!0}}]);