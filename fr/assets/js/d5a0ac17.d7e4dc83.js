"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4199],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>S});var a=r(87462),n=r(67294),o=r(86010),i=r(12466),l=r(76775),s=r(91980),p=r(67392),c=r(50012);function u(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=g({queryString:r,groupId:a}),[u,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var h=r(72389);const b="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=p[r].value;a!==l&&(u(t),s(a))},m=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},p.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":l===t})}),r??t)})))}function N(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(N,(0,a.Z)({},e,t)))}function S(e){const t=(0,h.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},89118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),i=r(85162);const l={title:"Spring Boot",description:"Using Casdoor in a Spring Boot project",keywords:["Spring Boot"],authors:["seriouszyx"]},s=void 0,p={unversionedId:"integration/java/spring-boot",id:"integration/java/spring-boot",title:"Spring Boot",description:"Using Casdoor in a Spring Boot project",source:"@site/docs/integration/java/spring-boot.mdx",sourceDirName:"integration/java",slug:"/integration/java/spring-boot",permalink:"/fr/docs/integration/java/spring-boot",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/spring-boot.mdx",tags:[],version:"current",frontMatter:{title:"Spring Boot",description:"Using Casdoor in a Spring Boot project",keywords:["Spring Boot"],authors:["seriouszyx"]},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/fr/docs/category/java"},next:{title:"Spring Cloud",permalink:"/fr/docs/integration/java/spring-cloud"}},c={},u=[{value:"Step 1: Deploy Casdoor",id:"step-1-deploy-casdoor",level:2},{value:"Step 2: Import casdoor-spring-boot-starter",id:"step-2-import-casdoor-spring-boot-starter",level:2},{value:"Step 3: Initialize Config",id:"step-3-initialize-config",level:2},{value:"Step 4: Redirect to the Login Page",id:"step-4-redirect-to-the-login-page",level:2},{value:"Step 5: Get Token and Parse",id:"step-5-get-token-and-parse",level:2},{value:"Services",id:"services",level:2},{value:"More Resources",id:"more-resources",level:2}],d={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-spring-boot-example"},"casdoor-spring-boot-example")," is an example of how to use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-spring-boot-starter"},"casdoor-spring-boot-starter")," in a Spring Boot project. We will guide you through the steps below."),(0,n.kt)("h2",{id:"step-1-deploy-casdoor"},"Step 1: Deploy Casdoor"),(0,n.kt)("p",null,"Firstly, Casdoor should be deployed."),(0,n.kt)("p",null,"You can refer to the Casdoor official documentation for the ",(0,n.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Server Installation"),". Please deploy your Casdoor instance in ",(0,n.kt)("strong",{parentName:"p"},"production mode"),"."),(0,n.kt)("p",null,"After a successful deployment, make sure the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open your favorite browser and visit ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"http://localhost:8000"},"http://localhost:8000")),". You will see the login page of Casdoor."),(0,n.kt)("li",{parentName:"ul"},"Test the login functionality by entering ",(0,n.kt)("inlineCode",{parentName:"li"},"admin")," as the username and ",(0,n.kt)("inlineCode",{parentName:"li"},"123")," as the password.")),(0,n.kt)("p",null,"Now, you can quickly implement a Casdoor-based login page in your own app using the following steps."),(0,n.kt)("h2",{id:"step-2-import-casdoor-spring-boot-starter"},"Step 2: Import casdoor-spring-boot-starter"),(0,n.kt)("p",null,"You can import the casdoor-spring-boot-starter using Maven or Gradle."),(0,n.kt)(o.Z,{defaultValue:"maven",groupId:"import-sdk",values:[{label:"Maven",value:"maven"},{label:"Gradle",value:"gradle"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"maven",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/org.casbin/casdoor-spring-boot-starter --\x3e\n<dependency>\n    <groupId>org.casbin</groupId>\n    <artifactId>casdoor-spring-boot-starter</artifactId>\n    <version>1.x.y</version>\n</dependency>\n"))),(0,n.kt)(i.Z,{value:"gradle",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"// https://mvnrepository.com/artifact/org.casbin/casdoor-spring-boot-starter\nimplementation group: 'org.casbin', name: 'casdoor-spring-boot-starter', version: '1.x.y'\n")))),(0,n.kt)("h2",{id:"step-3-initialize-config"},"Step 3: Initialize Config"),(0,n.kt)("p",null,"Initialization requires 6 string-type parameters in the following order:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Casdoor Server URL, such as ",(0,n.kt)("inlineCode",{parentName:"td"},"http://localhost:8000"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"clientId"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Application client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"clientSecret"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Application client secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"certificate"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Application certificate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"organizationName"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Application organization")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"applicationName"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Application name")))),(0,n.kt)("p",null,"You can use Java properties or YAML files for initialization."),(0,n.kt)(o.Z,{defaultValue:"properties",groupId:"configuration",values:[{label:"Properties",value:"properties"},{label:"YML",value:"yml"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"properties",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"casdoor.endpoint = http://localhost:8000\ncasdoor.clientId = <client-id>\ncasdoor.clientSecret = <client-secret>\ncasdoor.certificate = <certificate>\ncasdoor.organizationName = built-in\ncasdoor.applicationName = app-built-in\n"))),(0,n.kt)(i.Z,{value:"yml",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"casdoor:\n  endpoint: http://localhost:8000\n  client-id: <client-id>\n  client-secret: <client-secret>\n  certificate: <certificate>\n  organization-name: built-in\n  application-name: app-built-in\n")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Replace the configuration values with your own Casdoor instance, especially the ",(0,n.kt)("inlineCode",{parentName:"p"},"clientId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"clientSecret"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"jwtPublicKey"),".")),(0,n.kt)("h2",{id:"step-4-redirect-to-the-login-page"},"Step 4: Redirect to the Login Page"),(0,n.kt)("p",null,"When you need to authenticate users who access your app, you can send the target URL and redirect to the login page provided by Casdoor."),(0,n.kt)("p",null,"Make sure you have added the callback URL (e.g. ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"http://localhost:8080/login"},"http://localhost:8080/login")),") in the application configuration beforehand."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@Resource\nprivate CasdoorAuthService casdoorAuthService;\n\n@RequestMapping("toLogin")\npublic String toLogin() {\n    return "redirect:" + casdoorAuthService.getSigninUrl("http://localhost:8080/login");\n}\n')),(0,n.kt)("h2",{id:"step-5-get-token-and-parse"},"Step 5: Get Token and Parse"),(0,n.kt)("p",null,"After the Casdoor verification is passed, it will redirect back to your application with the code and state."),(0,n.kt)("p",null,"You can get the code and call the ",(0,n.kt)("inlineCode",{parentName:"p"},"getOAuthToken")," method, then parse the JWT token."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CasdoorUser")," contains the basic information about the user provided by Casdoor. You can use it to set the session in your application."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@RequestMapping("login")\npublic String login(String code, String state, HttpServletRequest request) {\n    String token = "";\n    CasdoorUser user = null;\n    try {\n        token = casdoorAuthService.getOAuthToken(code, state);\n        user = casdoorAuthService.parseJwtToken(token);\n    } catch (CasdoorAuthException e) {\n        e.printStackTrace();\n    }\n    HttpSession session = request.getSession();\n    session.setAttribute("casdoorUser", user);\n    return "redirect:/";\n}\n')),(0,n.kt)("h2",{id:"services"},"Services"),(0,n.kt)("p",null,"Examples of APIs are shown below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CasdoorAuthService",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'String token = casdoorAuthService.getOAuthToken(code, "app-built-in");')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CasdoorUser casdoorUser = casdoorAuthService.parseJwtToken(token);")))),(0,n.kt)("li",{parentName:"ul"},"CasdoorUserService",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'CasdoorUser casdoorUser = casdoorUserService.getUser("admin");')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'CasdoorUser casdoorUser = casdoorUserService.getUserByEmail("admin@example.com");')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CasdoorUser[] casdoorUsers = casdoorUserService.getUsers();")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'CasdoorUser[] casdoorUsers = casdoorUserService.getSortedUsers("created_time", 5);')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'int count = casdoorUserService.getUserCount("0");')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CasdoorResponse response = casdoorUserService.addUser(user);")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CasdoorResponse response = casdoorUserService.updateUser(user);")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CasdoorResponse response = casdoorUserService.deleteUser(user);")))),(0,n.kt)("li",{parentName:"ul"},"CasdoorEmailService",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CasdoorResponse response = casdoorEmailService.sendEmail(title, content, sender, receiver);")))),(0,n.kt)("li",{parentName:"ul"},"CasdoorSmsService",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CasdoorResponse response = casdoorSmsService.sendSms(randomCode(), receiver);")))),(0,n.kt)("li",{parentName:"ul"},"CasdoorResourceService",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CasdoorResponse response = casdoorResourceService.uploadResource(user, tag, parent, fullFilePath, file);")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CasdoorResponse response = casdoorResourceService.deleteResource(file.getName());"))))),(0,n.kt)("h2",{id:"more-resources"},"More Resources"),(0,n.kt)("p",null,"You can explore the following projects/docs to learn more about integrating Java with Casdoor:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/casdoor/casdoor-java-sdk"},"casdoor-java-sdk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/casdoor/casdoor-spring-boot-starter"},"casdoor-spring-boot-starter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/casdoor/casdoor-spring-boot-example"},"casdoor-spring-boot-example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/integration/java/spring-security/spring-security-oauth"},"casdoor-spring-security-example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/integration/java/spring-security/spring-security-filter"},"casdoor-spring-security-react-example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/casdoor/casdoor-spring-boot-shiro-example"},"casdoor-spring-boot-shiro-example"))))}m.isMDXComponent=!0}}]);