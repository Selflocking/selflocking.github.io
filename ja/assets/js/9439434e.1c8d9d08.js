"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,g=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"APISIX",description:"Using Casdoor in APISIX",keywords:["APISIX"],authors:["Steve0x2a"]},o=void 0,l={unversionedId:"integration/lua/apisix",id:"integration/lua/apisix",title:"APISIX",description:"Using Casdoor in APISIX",source:"@site/docs/integration/lua/apisix.md",sourceDirName:"integration/lua",slug:"/integration/lua/apisix",permalink:"/ja/docs/integration/lua/apisix",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/lua/apisix.md",tags:[],version:"current",frontMatter:{title:"APISIX",description:"Using Casdoor in APISIX",keywords:["APISIX"],authors:["Steve0x2a"]},sidebar:"tutorialSidebar",previous:{title:"Lua",permalink:"/ja/docs/category/lua"},next:{title:"PHP",permalink:"/ja/docs/category/php"}},s={},p=[{value:"Connect Casdoor via APISIX&#39;s Casdoor plugin",id:"connect-casdoor-via-apisixs-casdoor-plugin",level:2},{value:"How to enable it",id:"how-to-enable-it",level:3},{value:"Attributes",id:"attributes",level:3},{value:"How it works?",id:"how-it-works",level:3},{value:"Connect Casdoor via APISIX&#39;s OIDC plugin",id:"connect-casdoor-via-apisixs-oidc-plugin",level:2},{value:"Step 1: Deploy Casdoor and APISIX",id:"step-1-deploy-casdoor-and-apisix",level:3},{value:"Step 2: Configure Casdoor application",id:"step-2-configure-casdoor-application",level:3},{value:"Step 3: Configure APISIX",id:"step-3-configure-apisix",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Currently, there are 2 methods to use Casdoor to connect to APISIX via APISIX plugins and protect the APIs behind APISIX: using APISIX's Casdoor plugin or using APISIX's OIDC plugin."),(0,i.kt)("h2",{id:"connect-casdoor-via-apisixs-casdoor-plugin"},"Connect Casdoor via APISIX's Casdoor plugin"),(0,i.kt)("p",null,"This plugin, ",(0,i.kt)("inlineCode",{parentName:"p"},"authz-casdoor"),", can protect APIs behind APISIX, forcing every single request to get authenticated without modifying the code of the API."),(0,i.kt)("h3",{id:"how-to-enable-it"},"How to enable it"),(0,i.kt)("p",null,"You need to specify this plugin when creating the route and provide all the required fields. Here is an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9180/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "methods": ["GET"],\n  "uri": "/anything/*",\n  "plugins": {\n    "authz-casdoor": {\n        "endpoint_addr":"http://localhost:8000",\n        "callback_url":"http://localhost:9080/anything/callback",\n        "client_id":"7ceb9b7fda4a9061ec1c",\n        "client_secret":"3416238e1edf915eac08b8fe345b2b95cdba7e04"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,'In this example, we created a route "/anything/*" pointed to "httpbin.org:80" using APISIX\'s admin API, with the "authz-casdoor" plugin enabled. This route is now under the authentication protection of Casdoor.'),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"endpoint_addr"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The URL of Casdoor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The client ID in Casdoor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_secret"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The client secret in Casdoor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"callback_url"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The callback URL which is used to receive state and code.")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"endpoint_addr and callback_url should not end with '/'")),(0,i.kt)("p",null,'In the configuration of the "authz-casdoor" plugin, we can see four parameters.'),(0,i.kt)("p",null,'The first one is "callback_url". This is the callback URL in OAuth2. It should be emphasized that this callback URL ',(0,i.kt)("strong",{parentName:"p"},'must belong to the "uri" you specified for the route'),". For example, in this example, ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:9080/anything/callback"},"http://localhost:9080/anything/callback"),' obviously belongs to "/anything/*". Only by this way, the visit toward the callback_url can be intercepted and utilized by the plugin (so that the plugin can get the code and state in OAuth2). The logic of the callback_url is implemented completely by the plugin, so there is no need to modify the server to implement this callback.'),(0,i.kt)("p",null,'The second parameter "endpoint_addr" is obviously the URL of Casdoor. The third and fourth parameters are "client_id" and "client_secret", which you can acquire from Casdoor when you register an app.'),(0,i.kt)("h3",{id:"how-it-works"},"How it works?"),(0,i.kt)("p",null,"Suppose a new user who has never visited this route before is going to visit it (",(0,i.kt)("a",{parentName:"p",href:"http://localhost:9080/anything/d?param1=foo&param2=bar"},"http://localhost:9080/anything/d?param1=foo","\xb6","m2=bar"),'). Considering that "authz-casdoor" is enabled, this visit would be processed by the "authz-casdoor" plugin first. After checking the session and confirming that this user hasn\'t been authenticated, the visit will be intercepted. With the original URL the user wants to visit kept, they will be redirected to the login page of Casdoor.'),(0,i.kt)("p",null,'After successfully logging in with a username and password (or whatever method they use), Casdoor will redirect this user to the "callback_url" with GET parameters "code" and "state" specified. Because the "callback_url" is known by the plugin, when the visit toward the "callback_url" is intercepted this time, the logic of the "Authorization code Grant Flow" in OAuth2 will be triggered. This means that the plugin will request the access token to confirm whether this user is really logged in. After this confirmation, the plugin will redirect this user to the original URL they want to visit, which was kept by us previously. The logged-in status will also be kept in the session.'),(0,i.kt)("p",null,"Next time this user wants to visit the URL behind this route (for example, ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:9080/anything/d"},"http://localhost:9080/anything/d"),"), after discovering that this user has been authenticated previously, this plugin won't redirect this user anymore. This way, the user can visit whatever they want under this route without being interfered."),(0,i.kt)("h2",{id:"connect-casdoor-via-apisixs-oidc-plugin"},"Connect Casdoor via APISIX's OIDC plugin"),(0,i.kt)("p",null,"Casdoor can use the OIDC protocol to connect to APISIX, and this document will show you how to do it."),(0,i.kt)("p",null,"The following are some of the names used in the configuration:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CASDOOR_HOSTNAME"),": Domain name or IP where the Casdoor server is deployed."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_HOSTNAME"),": Domain name or IP where APISIX is deployed."),(0,i.kt)("h3",{id:"step-1-deploy-casdoor-and-apisix"},"Step 1: Deploy Casdoor and APISIX"),(0,i.kt)("p",null,"Firstly, deploy ",(0,i.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Casdoor")," and ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/installation-guide/"},"APISIX"),"."),(0,i.kt)("p",null,"After a successful deployment, you need to ensure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Casdoor can be logged in and used normally."),(0,i.kt)("li",{parentName:"ol"},"Set Casdoor's ",(0,i.kt)("inlineCode",{parentName:"li"},"origin")," value (conf/app.conf) to ",(0,i.kt)("inlineCode",{parentName:"li"},"CASDOOR_HOSTNAME"),".\n",(0,i.kt)("img",{alt:"Casdoor conf",src:n(32798).Z,width:"1013",height:"448"}))),(0,i.kt)("h3",{id:"step-2-configure-casdoor-application"},"Step 2: Configure Casdoor application"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new Casdoor application or use an existing one."),(0,i.kt)("li",{parentName:"ol"},"Add a redirect URL: ",(0,i.kt)("inlineCode",{parentName:"li"},"http://APISIX_HOSTNAME/REDIRECTWHATYOUWANT"),", and replace ",(0,i.kt)("inlineCode",{parentName:"li"},"REDIRECTWHATYOUWANT")," with the desired redirect URL."),(0,i.kt)("li",{parentName:"ol"},'Select "JWT-Empty" for the Token format option.'),(0,i.kt)("li",{parentName:"ol"},"Add the desired provider and configure other settings.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Application Setting",src:n(23294).Z,width:"2103",height:"538"}),"\nOn the application settings page, you will find the ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Client Secret")," values as shown in the picture above. We will use them in the next step."),(0,i.kt)("p",null,"Open your favorite browser and visit: ",(0,i.kt)("strong",{parentName:"p"},"http://",(0,i.kt)("inlineCode",{parentName:"strong"},"CASDOOR_HOSTNAME"),"/.well-known/openid-configuration"),", where you will find the OIDC configuration of Casdoor."),(0,i.kt)("h3",{id:"step-3-configure-apisix"},"Step 3: Configure APISIX"),(0,i.kt)("p",null,"APISIX has official ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/openid-connect/"},"OIDC")," support, which is implemented using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zmartzone/lua-resty-openidc"},"lua-resty-openidc"),"."),(0,i.kt)("p",null,"You can customize the settings according to the APISIX OIDC documentation. The following routing settings will be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Use your own X-Api-Key\n$ curl -X POST APISIX_HOSTNAME/apisix/admin/routes -H "X-Api-Key: edd1c9f034335f136f87ad84b625c8f1" -d \'{\n  "uri": "/get",\n  "name": "apisix_casdoor_test",\n  "plugins": {\n    "openid-connect": {\n      "client_id": "Client ID",\n      "client_secret": "Client Secret",\n      "discovery": "http://CASDOOR_HOSTNAME/.well-known/openid-configuration",\n      "introspection_endpoint_auth_method": "client_secret_basic",\n      "logout_path": "/logout",\n      "realm": "master",\n      "redirect_uri": "http://APISIX_HOSTNAME/REDIRECTWHATYOUWANT",\n      "bearer_only": false,\n      "set_id_token_header": false,\n      "access_token_in_authorization_header": true,\n      "set_access_token_header": true,\n      "set_userinfo_header": false,\n      "realm": "master"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"Now, visit ",(0,i.kt)("inlineCode",{parentName:"p"},"http://APISIX_HOSTNAME/get"),", and the browser will redirect you to the Casdoor login page. After successfully logging in, you will see that a request has been sent to httpbin.org as shown in the screenshot below.\n",(0,i.kt)("img",{alt:"APISIX_Result",src:n(5040).Z,width:"2209",height:"1648"})))}c.isMDXComponent=!0},32798:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/casdoor_origin-8f5d9e44f6b58828ce69e6e6d896e122.png"},5040:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apisix_result-3475043d31a06fd90894e80e8b4ca9f3.png"},23294:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/casdoor_jwtempty-68f57615f6dc135f498b45e6b2d7bf57.png"}}]);