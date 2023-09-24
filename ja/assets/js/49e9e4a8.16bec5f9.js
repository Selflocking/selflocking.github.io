"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Nginx",description:"Using Casdoor with Nginx",keywords:["nginx","plus","nginx-plus"],authors:["SkipperQ"]},o=void 0,p={unversionedId:"integration/C++/Nginx",id:"integration/C++/Nginx",title:"Nginx",description:"Using Casdoor with Nginx",source:"@site/docs/integration/C++/Nginx.md",sourceDirName:"integration/C++",slug:"/integration/C++/Nginx",permalink:"/ja/docs/integration/C++/Nginx",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/C++/Nginx.md",tags:[],version:"current",frontMatter:{title:"Nginx",description:"Using Casdoor with Nginx",keywords:["nginx","plus","nginx-plus"],authors:["SkipperQ"]},sidebar:"tutorialSidebar",previous:{title:"C++",permalink:"/ja/docs/category/cpp"},next:{title:"Envoy",permalink:"/ja/docs/integration/C++/Envoy"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring Casdoor",id:"configuring-casdoor",level:2},{value:"Configuring NGINX Plus",id:"configuring-nginx-plus",level:2},{value:"Testing",id:"testing",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Enable OpenID Connect-based single sign-on for applications proxied by NGINX Plus using Casdoor as the identity provider (IdP)."),(0,i.kt)("p",null,"This guide explains how to enable single sign-on (SSO) for applications that are being proxied by NGINX Plus. The solution uses OpenID Connect as the authentication mechanism, with ",(0,i.kt)("a",{parentName:"p",href:"https://casdoor.org/"},"Casdoor")," as the identity provider (IdP), and NGINX Plus as the relying party."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"See Also: You can find more information about the NGINX Plus OpenID Connect integration in the project\u2019s\xa0GitHub repository.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The instructions assume that you have the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A running Casdoor server. Refer to the Casdoor documentation for\xa0",(0,i.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/basic/server-installation"},"Server Installation"),"\xa0and\xa0",(0,i.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/basic/try-with-docker"},"Try with Docker"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An NGINX\xa0Plus subscription and\xa0NGINX Plus R15\xa0or later. For installation instructions, see the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-plus/"},"NGINX\xa0Plus Admin\xa0Guide"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The\xa0",(0,i.kt)("a",{parentName:"p",href:"https://www.nginx.com/blog/introduction-nginscript/"},"NGINX JavaScript module"),", which is required for handling the interaction between NGINX Plus and the IdP. After installing NGINX Plus, install the module using the appropriate command for your operating system."),(0,i.kt)("p",{parentName:"li"},"  For Debian and Ubuntu:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install nginx-plus-module-njs\n")),(0,i.kt)("p",{parentName:"li"},"  For CentOS, RHEL, and Oracle Linux:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install nginx-plus-module-njs\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The following directive should be included in the top-level (\u201cmain\u201d) configuration context in\xa0",(0,i.kt)("strong",{parentName:"p"},"/etc/nginx/nginx.conf")," in order to load the NGINX JavaScript module:"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"load_module modules/ngx_http_js_module.so;")))),(0,i.kt)("h2",{id:"configuring-casdoor"},"Configuring Casdoor"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The following procedure reflects the Casdoor GUI at the time of publication, but the GUI is subject to change. Use this guide as a reference and adapt to the current Casdoor GUI as necessary."),(0,i.kt)("p",null,"To create a Casdoor client for NGINX Plus in the Casdoor GUI, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in to your Casdoor account at ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"http://your-casdoor-url.com/login/"},"http://your-casdoor-url.com/login/")),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the top navigation column, click ",(0,i.kt)("strong",{parentName:"p"},"Application"),". On the ",(0,i.kt)("strong",{parentName:"p"},"Application")," page that opens, click the ",(0,i.kt)("strong",{parentName:"p"},"Add")," button in the upper left corner."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"addApp",src:n(4324).Z,width:"1974",height:"228"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Edit Application")," page that opens, change the value in the ",(0,i.kt)("strong",{parentName:"p"},"Name")," and ",(0,i.kt)("strong",{parentName:"p"},"Display name")," fields to the name of the application for which you\u2019re enabling SSO. Here, we\u2019re using NGINX Plus."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"appName",src:n(84981).Z,width:"570",height:"214"})),(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Redirect URLs")," field, type the URL of the NGINX Plus instance including the port number, and ending in ",(0,i.kt)("strong",{parentName:"p"},"/_codexch")," (in this guide it is ",(0,i.kt)("a",{parentName:"p",href:"https://your-site-url.com/_codexch"},"https://your-site-url.com:443/_codexch"),")."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"redirectURL",src:n(6239).Z,width:"988",height:"252"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Notes:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For production, we strongly recommend that you use SSL/TLS (port 443)."),(0,i.kt)("li",{parentName:"ul"},"The port number is mandatory even when you\u2019re using the default port for HTTP (80) or HTTPS (443)."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Record the values in the ",(0,i.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,i.kt)("strong",{parentName:"p"},"Client Secret")," fields. You will copy them into the NGINX Plus configuration file in ",(0,i.kt)("a",{parentName:"p",href:"#jump1"},"Step 4 of ",(0,i.kt)("em",{parentName:"a"},"Configuring NGINX Plus")),".",(0,i.kt)("span",{id:"jump3"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Client",src:n(50432).Z,width:"1004",height:"216"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Roles")," in the top navigation column, then click the ",(0,i.kt)("strong",{parentName:"p"},"Add")," button in the upper left corner of the page that opens."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"addRole",src:n(81902).Z,width:"1986",height:"224"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Add")," page that opens, type a value in the ",(0,i.kt)("strong",{parentName:"p"},"Name")," and ",(0,i.kt)("strong",{parentName:"p"},"Display Name")," fields (here it is nginx-casdoor-role) and click the ",(0,i.kt)("strong",{parentName:"p"},"Save")," button."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"roleName",src:n(51414).Z,width:"670",height:"204"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the top navigation column, click ",(0,i.kt)("strong",{parentName:"p"},"Users"),". On the ",(0,i.kt)("strong",{parentName:"p"},"Users")," page that opens, either click ",(0,i.kt)("strong",{parentName:"p"},"Edit")," to edit one of the existing users or click the ",(0,i.kt)("strong",{parentName:"p"},"Add")," button in the upper left corner to create a new user.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Add")," page that opens, modify the ",(0,i.kt)("strong",{parentName:"p"},"Name")," and ",(0,i.kt)("strong",{parentName:"p"},"Display Name")," as you like (here it is user1)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"userName",src:n(61782).Z,width:"436",height:"230"})),(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"NGINX Plus")," in the ",(0,i.kt)("strong",{parentName:"p"},"Signup application"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"signupApp",src:n(13297).Z,width:"432",height:"108"})),(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Managed accounts")," field, select ",(0,i.kt)("strong",{parentName:"p"},"NGINX Plus")," in ",(0,i.kt)("strong",{parentName:"p"},"Application")," and fill in the username and password."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"managedAcc",src:n(68802).Z,width:"1694",height:"238"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go back to the ",(0,i.kt)("strong",{parentName:"p"},"Roles")," page and click ",(0,i.kt)("strong",{parentName:"p"},"Edit")," on the ",(0,i.kt)("strong",{parentName:"p"},"nginx-casdoor-role")," row. In the opened page, in the ",(0,i.kt)("strong",{parentName:"p"},"Sub users")," field, select the username you just created (here it is built-in/user1)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"subUsers",src:n(32223).Z,width:"528",height:"106"})))),(0,i.kt)("h2",{id:"configuring-nginx-plus"},"Configuring NGINX Plus"),(0,i.kt)("p",null,"To configure NGINX Plus as the OpenID Connect relying party, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start by creating a clone of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nginxinc/nginx-openid-connect"},"nginx-openid-connect")," GitHub repository:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nginxinc/nginx-openid-connect\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the following files from the clone to the ",(0,i.kt)("strong",{parentName:"p"},"/etc/nginx/conf.d")," directory:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"frontend.conf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"openid_connect.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"openid_connect.server_conf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"openid_connect_configuration.conf")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Retrieve the URLs for the authorization endpoint, token endpoint, and JSON Web Key (JWK) file from the Casdoor configuration. Open a terminal and execute the following ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," command, piping the output to the indicated ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," command to generate a readable configuration format. For brevity, we have truncated the output to display only the relevant fields. ",(0,i.kt)("span",{id:"jump1"})),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://<casdoor-server-address>/.well-known/openid-configuration | python -m json.tool\n...\n{\n    "authorization_endpoint": "https://<casdoor-server-address>/login/oauth/authorize",\n    ...\n    "token_endpoint": "http://<casdoor-server-address>/api/login/oauth/access_token",\n    ...\n    "jwks_uri": "http://<casdoor-server-address>/.well-known/jwks",\n ...\n }\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("strong",{parentName:"p"},"/etc/nginx/conf.d/openid_connect_configuration.conf"),' using your preferred text editor. Modify the "default" parameter value for each of the following ',(0,i.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/http/ngx_http_map_module.html#map"},"map")," directives with the specified values:",(0,i.kt)("span",{id:"jump2"})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"map $host $oidc_authz_endpoint"),"\xa0\u2013 Use the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"authorization_endpoint")," from ",(0,i.kt)("a",{parentName:"li",href:"#jump1"},"Step\xa03"),"\xa0(in this guide,\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"https://<casdoor-server-address>/login/oauth/authorize"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"map $host $oidc_token_endpoint"),"\xa0\u2013 Use the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"token_endpoint")," from ",(0,i.kt)("a",{parentName:"li",href:"#jump1"},"Step\xa03"),"\xa0(in this guide,\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"http://<casdoor-server-address>/api/login/oauth/access_token"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"map $host $oidc_client"),"\xa0\u2013 Use the value in the ",(0,i.kt)("strong",{parentName:"li"},"Client\xa0ID")," field from ",(0,i.kt)("a",{parentName:"li",href:"#jump3"},"Step\xa04 of\xa0",(0,i.kt)("em",{parentName:"a"},"Configuring Casdoor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"map $host $oidc_client_secret"),"\xa0\u2013 Use the value in the ",(0,i.kt)("strong",{parentName:"li"},"Client Secret")," field from ",(0,i.kt)("a",{parentName:"li",href:"#jump3"},"Step\xa02 of\xa0",(0,i.kt)("em",{parentName:"a"},"Configuring Casdoor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"map $host $oidc_hmac_key"),"\xa0\u2013 Use a unique, long, and secure phrase"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the JWK file based on the version of NGINX Plus being used:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In NGINX Plus R17 and later, NGINX Plus can directly read the JWK file from the URL specified as ",(0,i.kt)("inlineCode",{parentName:"li"},"jwks_uri")," in ",(0,i.kt)("a",{parentName:"li",href:"#jump2"},"Step\xa03"),". Make the following changes to ",(0,i.kt)("strong",{parentName:"li"},"/etc/nginx/conf.d/frontend.conf"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Comment out (or remove) the ",(0,i.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_key_file"},"auth_jwt_key_file")," directive."),(0,i.kt)("li",{parentName:"ol"},"Uncomment the ",(0,i.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_auth_jwt_module.html#auth_jwt_key_request"},"auth_jwt_key_request")," directive. (The parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"/_jwks_uri")," refers to the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"$oidc_jwt_keyfile")," variable, which will be set in the next step.)"),(0,i.kt)("li",{parentName:"ol"},'Update the "default" parameter of the ',(0,i.kt)("inlineCode",{parentName:"li"},"map $host $oidc_jwt_keyfile")," directive to the value obtained from the ",(0,i.kt)("inlineCode",{parentName:"li"},"jwks_uri")," field in ",(0,i.kt)("a",{parentName:"li",href:"#jump2"},"Step\xa03"),"\xa0(in this guide, ",(0,i.kt)("inlineCode",{parentName:"li"},"http://<casdoor-server-address>/.well-known/jwks"),")."))),(0,i.kt)("li",{parentName:"ul"},"In NGINX Plus R16 and earlier, or if preferred, the JWK file must be located on the local disk. Follow these steps:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Copy the JSON contents from the JWK file specified in the ",(0,i.kt)("inlineCode",{parentName:"li"},"jwks_uri")," field in ",(0,i.kt)("a",{parentName:"li",href:"#jump2"},"Step\xa03"),"\xa0(in this guide, ",(0,i.kt)("inlineCode",{parentName:"li"},"http://<casdoor-server-address>/.well-known/jwks"),") to a local file (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/nginx/my_casdoor_jwk.json"),")."),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("strong",{parentName:"li"},"/etc/nginx/conf.d/openid_connect_configuration.conf"),', change the "default" parameter of the ',(0,i.kt)("inlineCode",{parentName:"li"},"map $host $oidc_jwt_keyfile")," directive to the path of the local file."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure that the user specified in the ",(0,i.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/ngx_core_module.html#user"},"user")," directive within the NGINX Plus configuration file (usually ",(0,i.kt)("strong",{parentName:"p"},"/etc/nginx/nginx.conf"),") has read permissions for the JWK file."))),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Open a browser and enter the address of your NGINX Plus instance. Then, attempt to log in using the credentials of a user who has been assigned the NGINX Plus role."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"test",src:n(71529).Z,width:"734",height:"710"})),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/nginxinc/nginx-openid-connect#troubleshooting"},"Troubleshooting"))," section in the ",(0,i.kt)("strong",{parentName:"p"},"nginx-openid-connect")," repository on GitHub."))}d.isMDXComponent=!0},50432:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Client-a96b885b28b974e3594d8cc621e20d26.png"},4324:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/addApp-f0c3c3804e0f0c7c46099a967b140011.png"},81902:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/addRole-0472f1742fb90683f03e7754f6b443c9.png"},84981:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/appName-e76303a2d8f848e2cb82e8244580be67.png"},68802:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/managedAcc-2c79bf01d04970685e1db9e8800ab613.png"},6239:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/redirectURL-94f6fbadde9bd1dce2447f42ab5cd556.png"},51414:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/roleName-e4bb131db4aa1457aec6894f674c54c5.png"},13297:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/signupApp-f3444949e6ce9f7becbda49f59490a7f.png"},32223:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/subUsers-c5bcd4229c84f7b62e169783e8418a1a.png"},71529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-61892faf0c0e4fbe4c43b277c0eab745.png"},61782:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/userName-0244eca3ebd618b68ad03ae9cda14dee.png"}}]);