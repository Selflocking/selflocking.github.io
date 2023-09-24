"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=i,N=u["".concat(p,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Overview",description:"Managing Users in Casdoor",keywords:["user","properties","import"],authors:["sh1luo"]},l=void 0,o={unversionedId:"user/overview",id:"user/overview",title:"Overview",description:"Managing Users in Casdoor",source:"@site/docs/user/overview.md",sourceDirName:"user",slug:"/user/overview",permalink:"/docs/user/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/user/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Managing Users in Casdoor",keywords:["user","properties","import"],authors:["sh1luo"]},sidebar:"tutorialSidebar",previous:{title:"Users",permalink:"/docs/category/users"},next:{title:"MFA / 2FA",permalink:"/docs/user/multi-factor-authentication"}},p={},s=[{value:"User Properties",id:"user-properties",level:2},{value:"Importing Users from XLSX File",id:"importing-users-from-xlsx-file",level:2},{value:"Bypass password encryption",id:"bypass-password-encryption",level:2}],m={toc:s};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"user-properties"},"User Properties"),(0,i.kt)("p",null,"As an authentication platform, Casdoor is able to manage users. Every user has the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner"),": The organization that owns the user"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),": The unique username"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreatedTime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UpdatedTime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Id"),": Unique identifier for each user"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PasswordSalt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PasswordOptions"),": Password complexity options"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DisplayName"),": Displayed in the user interface"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FirstName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LastName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Avatar"),": A link to the user's avatar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PermanentAvatar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Email")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Phone")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Location")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Address")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Affiliation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Title")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IdCardType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IdCard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Homepage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Bio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tag")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Region")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Gender")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Birthday")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Education")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Score")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Karma")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ranking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsDefaultAvatar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsOnline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsAdmin"),": Indicates whether the user is an admin of their organization"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsGlobalAdmin"),": Indicates whether the user has permission to manage the Casdoor"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsForbidden")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IsDeleted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SignupApplication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PreHash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreatedIp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LastSigninTime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LastSigninIp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Roles"),": An array of the user's roles"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Permissions"),": An array of the user's permissions")),(0,i.kt)("p",null,"Unique IDs for social platform logins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Github")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Google")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QQ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WeChat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Facebook")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DingTalk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Weibo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Gitee")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LinkedIn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Wecom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Lark")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Gitlab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Adfs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Baidu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Casdoor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Infoflow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Apple")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AzureAD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Slack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Steam")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ldap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Properties"),": A string->string map that stores any additional properties.")),(0,i.kt)("h2",{id:"importing-users-from-xlsx-file"},"Importing Users from XLSX File"),(0,i.kt)("p",null,"You can add new users or update existing Casdoor users by uploading an XLSX file containing user information."),(0,i.kt)("p",null,"In the Admin Console, go to Users and click the ",(0,i.kt)("strong",{parentName:"p"},"Upload (.xlsx)")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Importing Users",src:n(42392).Z,width:"2560",height:"1374"})),(0,i.kt)("p",null,"Select your XLSX file and click Open. The users will be imported."),(0,i.kt)("p",null,"We provide a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor/blob/master/xlsx/user_test.xlsx"},"template XLSX file")," named ",(0,i.kt)("inlineCode",{parentName:"p"},"user_test.xlsx")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"xlsx")," folder. The template includes 5 test users and headers for some required user properties."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Import Successful",src:n(85872).Z,width:"2560",height:"1374"})),(0,i.kt)("h2",{id:"bypass-password-encryption"},"Bypass password encryption"),(0,i.kt)("p",null,"When migrating users from an external database to Casdoor, there might be situations where you want to bypass or control the default encryption method provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"organization")," default Password type method."),(0,i.kt)("p",null,"This can be achieved by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"passwordType")," field during user import."),(0,i.kt)("admonition",{title:"User with Bycrypt password",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Below is an example of a POST body request for the API route ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/add-user"),"."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owner": "organization",\n    "signupApplication": "first-app",\n    "email":"dev@dev.com",\n    "name": "dev",\n    "displayName": "developper",\n    "password": "$2a$10$.o/iVyDE9Xk8ioywHDnQRu72RviOi6FPa1ujhusbSCZeg7VOa6MY6",\n    "passwordType":"bcrypt",\n}\n')),(0,i.kt)("p",{parentName:"admonition"},"Here, the user's password is already encrypted using the bcrypt algorithm, so we specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"passwordType"),' as "bcrypt" to inform Casdoor not to encrypt it again.')))}d.isMDXComponent=!0},85872:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import_success-8be0db7efa60235af1149e529292948b.png"},42392:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import_users-8ff88d9eb5619863117e1cf13cba96ff.png"}}]);