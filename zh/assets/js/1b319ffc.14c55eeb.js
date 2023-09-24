"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||n;return r?o.createElement(m,i(i({ref:t},l),{},{components:r})):o.createElement(m,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const n={title:"Spring Cloud",description:"Using Casdoor in Spring Cloud",keywords:["Spring Cloud"],authors:["leo220yuyaodog"]},i=void 0,s={unversionedId:"integration/java/spring-cloud",id:"integration/java/spring-cloud",title:"Spring Cloud",description:"Using Casdoor in Spring Cloud",source:"@site/docs/integration/java/spring-cloud.md",sourceDirName:"integration/java",slug:"/integration/java/spring-cloud",permalink:"/zh/docs/integration/java/spring-cloud",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/spring-cloud.md",tags:[],version:"current",frontMatter:{title:"Spring Cloud",description:"Using Casdoor in Spring Cloud",keywords:["Spring Cloud"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Spring Boot",permalink:"/zh/docs/integration/java/spring-boot"},next:{title:"Spring Cloud Gateway",permalink:"/zh/docs/integration/java/spring-cloud-gateway"}},c={},p=[{value:"What&#39;s more",id:"whats-more",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the Spring Cloud microservice system, general authentication occurs at the gateway. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/integration/java/spring-cloud-gateway"},"casdoor-springcloud-gateway-example")," for more information."),(0,a.kt)("p",null,"If you want to use Casdoor in a single service, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-spring-boot-example"},"casdoor-spring-boot-example"),"."),(0,a.kt)("p",null,"Whether it's in the gateway layer or in a single service, both use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-spring-boot-starter"},"casdoor-spring-boot-starter"),"."),(0,a.kt)("h2",{id:"whats-more"},"What's more"),(0,a.kt)("p",null,"You can explore the following projects/docs to learn more about integrating Java with Casdoor:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/casdoor/casdoor-java-sdk"},"casdoor-java-sdk")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/casdoor/casdoor-spring-boot-starter"},"casdoor-spring-boot-starter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/casdoor/casdoor-spring-boot-example"},"casdoor-spring-boot-example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/integration/java/spring-security/spring-security-oauth"},"casdoor-spring-security-example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/integration/java/spring-security/spring-security-filter"},"casdoor-spring-security-react-example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/casdoor/casdoor-spring-boot-shiro-example"},"casdoor-spring-boot-shiro-example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/casdoor/casdoor-springcloud-gateway-example"},"casdoor-springcloud-gateway-example"))))}u.isMDXComponent=!0}}]);