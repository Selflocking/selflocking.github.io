"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1875],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return a?r.createElement(g,s(s({ref:t},p),{},{components:a})):r.createElement(g,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88924:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hasura",metaTitle:"Hasura | Hasura Authentication Tutorial",metaDescription:"Learn how to integrate Casdoor with Hasura to secure your applications using JWT"},s=void 0,i={unversionedId:"integration/Haskell/Hasura",id:"integration/Haskell/Hasura",title:"Hasura",description:"Before the integration, we need to deploy Casdoor locally.",source:"@site/docs/integration/Haskell/Hasura.md",sourceDirName:"integration/Haskell",slug:"/integration/Haskell/Hasura",permalink:"/ru/docs/integration/Haskell/Hasura",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/Haskell/Hasura.md",tags:[],version:"current",frontMatter:{title:"Hasura",metaTitle:"Hasura | Hasura Authentication Tutorial",metaDescription:"Learn how to integrate Casdoor with Hasura to secure your applications using JWT"},sidebar:"tutorialSidebar",previous:{title:"Haskell",permalink:"/ru/docs/category/haskell"},next:{title:"Python",permalink:"/ru/docs/category/python"}},l={},u=[{value:"Configure Casdoor application",id:"configure-casdoor-application",level:2},{value:"Add a user in Casdoor",id:"add-a-user-in-casdoor",level:2},{value:"Build the Hasura App",id:"build-the-hasura-app",level:2},{value:"Configure Hasura with Casdoor",id:"configure-hasura-with-casdoor",level:2},{value:"Retrieve the JWT Token",id:"retrieve-the-jwt-token",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Before the integration, we need to deploy Casdoor locally."),(0,n.kt)("p",null,"Then we can quickly implement a Casdoor-based login page in our own app with the following steps."),(0,n.kt)("h2",{id:"configure-casdoor-application"},"Configure Casdoor application"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create or use an existing Casdoor application."),(0,n.kt)("li",{parentName:"ol"},"Add a redirect URL: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://CASDOOR_HOSTNAME/login"),(0,n.kt)("img",{alt:"Casdoor Application Setting",src:a(79499).Z,width:"1767",height:"146"})),(0,n.kt)("li",{parentName:"ol"},"Copy the client ID; we will need it in the following steps.")),(0,n.kt)("h2",{id:"add-a-user-in-casdoor"},"Add a user in Casdoor"),(0,n.kt)("p",null,"Now that you have the application, but not a user. That means you need to create a user and assign the role."),(0,n.kt)("p",null,'Go to the "Users" page and click on "Add user" in the top right corner. That opens a new page where you can add the new user.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Picture showing the users page",src:a(85002).Z,width:"1856",height:"657"})),(0,n.kt)("p",null,"Save the user after adding a username and adding the organization Hasura (other details are optional)."),(0,n.kt)("p",null,'Now you need to set up a password for your user, which you can do by clicking "manage your password."'),(0,n.kt)("p",null,"Choose a password for your user and confirm it."),(0,n.kt)("h2",{id:"build-the-hasura-app"},"Build the Hasura App"),(0,n.kt)("p",null,"Start the Hasura by Docker or Hasura Cloud."),(0,n.kt)("p",null,"Now create a ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," table with the following columns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," of type Text (Primary Key)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"username")," of type Text")),(0,n.kt)("p",null,"Refer to the image below for reference."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-hasura-authentication/keycloak/hasura-create-table.png",alt:"Picture showing how to create a table in Hasura"})),(0,n.kt)("p",null,"The next step is to create a ",(0,n.kt)("inlineCode",{parentName:"p"},"user")," role for the app. Users should be able to see only their records but not other people's records."),(0,n.kt)("p",null,"Configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"user")," role as shown in the image below. For more information, read about ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/auth/authorization/permission-rules/"},"configuring permission rules in Hasura"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-hasura-authentication/keycloak/hasura-set-permissions.png",alt:"Picture showing how to set permissions in Hasura"})),(0,n.kt)("p",null,"This way, users cannot read other people's records. They can only access theirs."),(0,n.kt)("p",null,"For testing purposes, add a dummy user. This is to ensure that when you use the JWT token, you only see your user's details and not other users' details."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-hasura-authentication/keycloak/hasura-dummy-user.png",alt:"Picture showing how to add a table record in Hasura"})),(0,n.kt)("p",null,"Now you need to set the ",(0,n.kt)("inlineCode",{parentName:"p"},"JWT_SECRET")," in Hasura."),(0,n.kt)("h2",{id:"configure-hasura-with-casdoor"},"Configure Hasura with Casdoor"),(0,n.kt)("p",null,"In this step, you need to add the ",(0,n.kt)("strong",{parentName:"p"},"HASURA_GRAPHQL_JWT_SECRET")," to Hasura."),(0,n.kt)("p",null,"To do so, go to the Hasura docker-compose.yaml and then add the new ",(0,n.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_JWT_SECRET")," as below."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_JWT_SECRET")," should be in the following format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'HASURA_GRAPHQL_JWT_SECRET: \'{"claims_map": {\n      "x-hasura-allowed-roles": ["user","editor"],\n      "x-hasura-default-role": "user",\n      "x-hasura-user-id": "userID"\n    },"jwk_url":"https://door.casdoor.com/.well-known/jwks"}\'\n')),(0,n.kt)("p",null,"Save the change and reload the docker."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add Clerk JWT URL to Hasura",src:a(13025).Z,width:"963",height:"242"})),(0,n.kt)("h2",{id:"retrieve-the-jwt-token"},"Retrieve the JWT Token"),(0,n.kt)("p",null,"Since there is no client implementation, you can get your access token by making a request by the below URL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-url"},"http://localhost:8000/login/oauth/authorize?client_id=<client ID>>&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Flogin&scope=read&state=app-built-in<public certificate>>\n")),(0,n.kt)("p",null,"Change the client ID to the ID you copied before and input the public certificate of Casdoor, which you can find in Casdoor/Certs."),(0,n.kt)("p",null,"Then input the username and password you created for Hasura before."),(0,n.kt)("p",null,'Click "Sign in."'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Retrieve the JWT Token",src:a(76405).Z,width:"1871",height:"846"})),(0,n.kt)("p",null,"Go back to the Casdoor/Token page."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Token Page",src:a(78621).Z,width:"1827",height:"793"})),(0,n.kt)("p",null,'Find the Username you input before, then click "edit."'),(0,n.kt)("p",null,"Copy the Access Token."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Access Token",src:a(7102).Z,width:"1843",height:"814"})),(0,n.kt)("p",null,"Now you can use the access token to make the authenticated request. Hasura returned the appropriate user rather than returning all the users from the database."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Picture showing the access token from Casdoor being used in Hasura",src:a(36326).Z,width:"1819",height:"922"})))}c.isMDXComponent=!0},13025:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/JWT-4529538a012c1b4739a3e8269107278a.png"},7102:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/access-a7d8fb20ba05b1a548f603664c912c9f.png"},79499:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cas-5af2f28e52ed3cd92f069520979945f5.png"},36326:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hasura-0ab496d67e2e34ed63dc93407053abe0.png"},76405:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/login-537105fddeaaeff5471ca0cd0c5e2f21.png"},78621:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tokens-d3624b07df57028c7a6085d18855c0f5.png"},85002:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/user-bd4da280495b507962f00e452754e5a7.png"}}]);