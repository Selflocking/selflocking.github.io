"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(76775),s=n(91980),p=n(67392),u=n(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=g({queryString:n,groupId:a}),[c,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??c;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),m(e)}),[p,m,o]),tabValues:o}}var f=n(72389);const y="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==l&&(c(t),s(a))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function C(e){const t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function S(e){const t=(0,f.Z)();return r.createElement(C,(0,a.Z)({key:String(t)},e))}},1261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={title:"Spring Security OAuth",description:"Using Spring Security as an example to demonstrate how to use OIDC to connect to your applications",keywords:["OIDC","Spring Security"],authors:["wenxuan70"]},s=void 0,p={unversionedId:"integration/java/spring-security/spring-security-oauth",id:"integration/java/spring-security/spring-security-oauth",title:"Spring Security OAuth",description:"Using Spring Security as an example to demonstrate how to use OIDC to connect to your applications",source:"@site/docs/integration/java/spring-security/spring-security-oauth.mdx",sourceDirName:"integration/java/spring-security",slug:"/integration/java/spring-security/spring-security-oauth",permalink:"/fr/docs/integration/java/spring-security/spring-security-oauth",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/spring-security/spring-security-oauth.mdx",tags:[],version:"current",frontMatter:{title:"Spring Security OAuth",description:"Using Spring Security as an example to demonstrate how to use OIDC to connect to your applications",keywords:["OIDC","Spring Security"],authors:["wenxuan70"]},sidebar:"tutorialSidebar",previous:{title:"Spring Security",permalink:"/fr/docs/category/spring-security"},next:{title:"Spring Security Filter with OIDC integration for Casdoor",permalink:"/fr/docs/integration/java/spring-security/spring-security-filter"}},u={},c=[{value:"Step 1: Deploy Casdoor",id:"step-1-deploy-casdoor",level:2},{value:"Step 2. Configure Casdoor application",id:"step-2-configure-casdoor-application",level:2},{value:"Step 3. Configure Spring Security",id:"step-3-configure-spring-security",level:2},{value:"Step 4: Get Started with a Demo",id:"step-4-get-started-with-a-demo",level:2},{value:"Step 5: Try the demo!",id:"step-5-try-the-demo",level:2}],d={toc:c};function h(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Casdoor can use the OIDC protocol as an IDP to connect various applications. In this guide, we will use Spring Security as an example to show you how to use OIDC to connect to your applications."),(0,r.kt)("h2",{id:"step-1-deploy-casdoor"},"Step 1: Deploy Casdoor"),(0,r.kt)("p",null,"First, you need to deploy Casdoor."),(0,r.kt)("p",null,"You can refer to the Casdoor official documentation for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Server Installation"),"."),(0,r.kt)("p",null,"After successfully deploying Casdoor, make sure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Casdoor server is running on ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"http://localhost:8000"},"http://localhost:8000")),"."),(0,r.kt)("li",{parentName:"ul"},"Open your favorite browser and visit ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"http://localhost:7001"},"http://localhost:7001")),", where you will see the login page of Casdoor."),(0,r.kt)("li",{parentName:"ul"},"Verify that the login functionality is working fine by entering ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"123"),".")),(0,r.kt)("p",null,"Now, you can quickly implement a Casdoor-based login page in your own app by following the steps below."),(0,r.kt)("h2",{id:"step-2-configure-casdoor-application"},"Step 2. Configure Casdoor application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new Casdoor application or use an existing one."),(0,r.kt)("li",{parentName:"ol"},"Add your redirect URL (You can find more details on how to obtain the redirect URL in the next section).\n",(0,r.kt)("img",{alt:"Casdoor Application Settings",src:n(15669).Z,width:"866",height:"291"})),(0,r.kt)("li",{parentName:"ol"},"Add the desired provider and fill in any additional settings.")),(0,r.kt)("p",null,"On the application settings page, you will find two values: ",(0,r.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Client secret"),", as shown in the image above. We will use these values in the next step."),(0,r.kt)("p",null,"Open your preferred browser and visit: ",(0,r.kt)("strong",{parentName:"p"},"http://",(0,r.kt)("inlineCode",{parentName:"strong"},"CASDOOR_HOSTNAME"),"/.well-known/openid-configuration"),". Here, you will find the OIDC configuration of Casdoor."),(0,r.kt)("h2",{id:"step-3-configure-spring-security"},"Step 3. Configure Spring Security"),(0,r.kt)("p",null,"Spring Security natively supports OIDC."),(0,r.kt)("p",null,"You can customize the settings of Spring Security OAuth2 Client:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You should replace the configuration with your own Casdoor instance, especially the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Client ID>")," and others.")),(0,r.kt)(o.Z,{defaultValue:"yml",groupId:"import-sdk",values:[{label:"application.yml",value:"yml"},{label:"application.properties",value:"properties"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"yml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          casdoor:\n            client-id: <Client ID>\n            client-secret: <Client Secret>\n            scope: <Scope>\n            authorization-grant-type: authorization_code\n            redirect-uri: <Redirect URL>\n        provider:\n          casdoor:\n            authorization-uri: http://CASDOOR_HOSTNAME:7001/login/oauth/authorize\n            token-uri: http://CASDOOR_HOSTNAME:8000/api/login/oauth/access_token\n            user-info-uri: http://CASDOOR_HOSTNAME:8000/api/get-account\n            user-name-attribute: name\n"))),(0,r.kt)(i.Z,{value:"properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"spring.security.oauth2.client.registration.casdoor.client-id=<Client ID>\nspring.security.oauth2.client.registration.casdoor.client-secret=<Client Secret>\nspring.security.oauth2.client.registration.casdoor.scope=<Scope>\nspring.security.oauth2.client.registration.casdoor.authorization-grant-type=authorization_code\nspring.security.oauth2.client.registration.casdoor.redirect-uri=<Redirect URL>\n\nspring.security.oauth2.client.provider.casdoor.authorization-uri=http://CASDOOR_HOSTNAME:7001/login/oauth/authorize\nspring.security.oauth2.client.provider.casdoor.token-uri=http://CASDOOR_HOSTNAME:8000/api/login/oauth/access_token\nspring.security.oauth2.client.provider.casdoor.user-info-uri=http://CASDOOR_HOSTNAME:8000/api/get-account\nspring.security.oauth2.client.provider.casdoor.user-name-attribute=name\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"For the default situation of Spring Security, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Redirect URL>")," should be like ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<Your Spring Boot Application Endpoint>/<Servlet Prefix if it is configured>/login/oauth2/code/custom"),".\nFor example, in the following demo, the redirect URL should be ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/login/oauth2/code/custom"),"."),(0,r.kt)("p",{parentName:"admonition"},"You should also configure this in the ",(0,r.kt)("inlineCode",{parentName:"p"},"casdoor")," application.")),(0,r.kt)("p",null,"You can also customize the settings using ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientRegistration")," in your code. You can find the mapping ",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-security/site/docs/5.2.12.RELEASE/reference/html/oauth2.html#oauth2login-boot-property-mappings"},"here")),(0,r.kt)("h2",{id:"step-4-get-started-with-a-demo"},"Step 4: Get Started with a Demo"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We can create a Spring Boot application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We can add a configuration that protects all endpoints except ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/login**")," for users to log in."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@EnableWebSecurity\npublic class UiSecurityConfig extends WebSecurityConfigurerAdapter {\n\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.authorizeRequests()\n            .antMatchers("/", "/login**")\n            .permitAll()\n            .anyRequest()\n            .authenticated()\n            .and()\n            .oauth2Login();\n\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We can add a naive page for the user to log in."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n<title>Spring OAuth Client Thymeleaf - 1</title>\n<link rel="stylesheet"\n    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />\n</head>\n<body>\n    <nav\n        class="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5">\n        <a class="navbar-brand" th:href="@{/foos/}">Spring OAuth Client\n            Thymeleaf - 1</a>\n    </nav>\n    <div class="container">\n        <label>Welcome!</label> <br /> <a th:href="@{/foos/}"\n            class="btn btn-primary">Login</a>\n    </div>\n</body>\n</html>\n')),(0,r.kt)("p",{parentName:"li"},"When the user clicks the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," button, they will be redirected to ",(0,r.kt)("inlineCode",{parentName:"p"},"casdoor"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, we can define our protected resources. We can expose an endpoint called ",(0,r.kt)("inlineCode",{parentName:"p"},"/foos")," and a web page for display."),(0,r.kt)("p",{parentName:"li"},"Data Model"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class FooModel {\n    private Long id;\n    private String name;\n\n    public FooModel(Long id, String name) {\n        super();\n        this.id = id;\n        this.name = name;\n    }\n    public Long getId() {\n        return id;\n    }\n    public void setId(Long id) {\n        this.id = id;\n    }\n    public String getName() {\n        return name;\n    }\n    public void setName(String name) {\n        this.name = name;\n    }\n}\n")),(0,r.kt)("p",{parentName:"li"},"Controller"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Controller\npublic class FooClientController {\n    @GetMapping("/foos")\n    public String getFoos(Model model) {\n        List<FooModel> foos = new ArrayList<>();\n        foos.add(new FooModel(1L, "a"));\n        foos.add(new FooModel(2L, "b"));\n        foos.add(new FooModel(3L, "c"));\n        model.addAttribute("foos", foos);\n        return "foos";\n    }\n}\n')),(0,r.kt)("p",{parentName:"li"},"Web page"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n<title>Spring OAuth Client Thymeleaf - 1</title>\n<link rel="stylesheet"\n    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />\n</head>\n<body>\n    <nav\n        class="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5">\n        <a class="navbar-brand" th:href="@{/foos/}">Spring OAuth Client\n            Thymeleaf -1</a>\n        <ul class="navbar-nav ml-auto">\n            <li class="navbar-text">Hi, <span sec:authentication="name">preferred_username</span>&nbsp;&nbsp;&nbsp;</li>\n        </ul>\n    </nav>\n    <div class="container">\n        <h1>All Foos:</h1>\n        <table class="table table-bordered table-striped">\n            <thead>\n                <tr>\n                    <td>ID</td>\n                    <td>Name</td>\n                </tr>\n            </thead>\n            <tbody>\n                <tr th:if="${foos.empty}">\n                    <td colspan="4">No foos</td>\n                </tr>\n                <tr th:each="foo : ${foos}">\n                    <td>\n                        <span th:text="${foo.id}">ID</span>\n                    </td>\n                    <td>\n                        <span th:text="${foo.name}">Name</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</body>\n</html>\n')))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"All the web page templates should be placed under ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/templates"),".")),(0,r.kt)("h2",{id:"step-5-try-the-demo"},"Step 5: Try the demo!"),(0,r.kt)("p",null,"Firstly, you can try opening your favorite browser and directly visiting ",(0,r.kt)("inlineCode",{parentName:"p"},"/foos"),". It will automatically redirect you to Casdoor's login page. You can log in there or from the root page."),(0,r.kt)("p",null,"If you visit your root page, you will see the Casdoor Application Setting.\n",(0,r.kt)("img",{alt:"Casdoor Application Setting",src:n(82374).Z,width:"1888",height:"1042"})),(0,r.kt)("p",null,"Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," button and the page will redirect you to Casdoor's login page.\n",(0,r.kt)("img",{alt:"Casdoor Application Setting",src:n(28544).Z,width:"1842",height:"954"})),(0,r.kt)("p",null,"After logging in, the page will redirect you to ",(0,r.kt)("inlineCode",{parentName:"p"},"/foos"),".\n",(0,r.kt)("img",{alt:"Casdoor Application Setting",src:n(38791).Z,width:"2870",height:"966"})))}h.isMDXComponent=!0},15669:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/appsetting_spring_security-f2662d02db2032cea21f3b39b03b6c60.png"},28544:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/spring_security_casdoor-c0e156eb1514956214cad0b0d8d3ac98.png"},38791:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/spring_security_resource-820aab1821d09e451632a46bb73df602.png"},82374:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/spring_security_welcome-5a0d467a89d0134ed035b7718f3c834d.png"}}]);