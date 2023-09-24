"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>A});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),A=a,g=p["".concat(l,".").concat(A)]||p[A]||u[A]||r;return n?o.createElement(g,s(s({ref:t},c),{},{components:n})):o.createElement(g,s({ref:t},c))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"RuoYi",description:"Using Casdoor in RuoYi-Cloud",keywords:["RuoYi"],authors:["jakiuncle"]},s=void 0,i={unversionedId:"integration/java/RuoYi",id:"integration/java/RuoYi",title:"RuoYi",description:"Using Casdoor in RuoYi-Cloud",source:"@site/docs/integration/java/RuoYi.md",sourceDirName:"integration/java",slug:"/integration/java/RuoYi",permalink:"/de/docs/integration/java/RuoYi",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/RuoYi.md",tags:[],version:"current",frontMatter:{title:"RuoYi",description:"Using Casdoor in RuoYi-Cloud",keywords:["RuoYi"],authors:["jakiuncle"]},sidebar:"tutorialSidebar",previous:{title:"Connecting Applications with OIDC Protocol - Confluence",permalink:"/de/docs/integration/java/Confluence"},next:{title:"Pulsar Manager",permalink:"/de/docs/integration/java/Pulsar-manager"}},l={},d=[{value:"Step 1: Deploy Casdoor",id:"step-1-deploy-casdoor",level:2},{value:"Step 2: Configure Casdoor",id:"step-2-configure-casdoor",level:2},{value:"Step 3. Reform your front-end",id:"step-3-reform-your-front-end",level:2},{value:"3.1 Jump to Casdoor&#39;s login page",id:"31-jump-to-casdoors-login-page",level:3},{value:"3.2 Accept the code and state returned by Casdoor",id:"32-accept-the-code-and-state-returned-by-casdoor",level:3},{value:"Step 4: Refactor your back-end",id:"step-4-refactor-your-back-end",level:2},{value:"4.1 Accept the code and state returned by the front-end",id:"41-accept-the-code-and-state-returned-by-the-front-end",level:3},{value:"Step 5: Summary",id:"step-5-summary",level:2},{value:"5.1 Front-end",id:"51-front-end",level:3},{value:"5.2 Back-end",id:"52-back-end",level:3},{value:"Step 6: Detailed Steps",id:"step-6-detailed-steps",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casdoor can be easily integrated with RuoYi-cloud."),(0,a.kt)("h2",{id:"step-1-deploy-casdoor"},"Step 1: Deploy Casdoor"),(0,a.kt)("p",null,"First, deploy Casdoor."),(0,a.kt)("p",null,"You can refer to the Casdoor official documentation for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Server Installation"),"."),(0,a.kt)("p",null,"After successful deployment, ensure the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Casdoor server is running at ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"http://localhost:8000"},"http://localhost:8000")),"."),(0,a.kt)("li",{parentName:"ul"},"Open your favorite browser and visit ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"http://localhost:7001"},"http://localhost:7001"))," to access the Casdoor login page."),(0,a.kt)("li",{parentName:"ul"},"Test the login functionality by entering ",(0,a.kt)("inlineCode",{parentName:"li"},"admin")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"123"),".")),(0,a.kt)("p",null,"Next, you can quickly implement a Casdoor-based login page in your own app following these steps."),(0,a.kt)("h2",{id:"step-2-configure-casdoor"},"Step 2: Configure Casdoor"),(0,a.kt)("p",null,"To configure Casdoor, please follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open Casdoor in a browser by clicking ",(0,a.kt)("a",{parentName:"p",href:"https://door.casdoor.com/login"},"here"),". It is recommended to use a different browser than your development browser.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure an organization, an application, and the Synchronizer in Casdoor. You can find detailed instructions on how to do this ",(0,a.kt)("a",{parentName:"p",href:"https://door.casdoor.com/login"},"here"),"."))),(0,a.kt)("p",null,"Here are some additional points to keep in mind:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When editing the syncer, make sure to check the table columns: ",(0,a.kt)("img",{alt:"Table Columns",src:n(73724).Z,width:"1875",height:"635"}),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When editing the organization, make sure to select the correct password type: ",(0,a.kt)("img",{alt:"Password Type",src:n(83178).Z,width:"990",height:"56"}),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Lastly, ensure that you have enabled soft deletion."))),(0,a.kt)("p",null,"Please make sure to follow these instructions carefully to properly configure Casdoor."),(0,a.kt)("h2",{id:"step-3-reform-your-front-end"},"Step 3. Reform your front-end"),(0,a.kt)("h3",{id:"31-jump-to-casdoors-login-page"},"3.1 Jump to Casdoor's login page"),(0,a.kt)("p",null,"We can use a front-end SDK, taking vue-sdk as an example here. After you initialize vue-sdk, you can obtain the Casdoor login page URL by using the getSigninUrl() function."),(0,a.kt)("p",null,"You can link it in the way you prefer, and feel free to delete any original code from Ruoyi-Cloud that is no longer necessary, such as the original account and password el-input."),(0,a.kt)("h3",{id:"32-accept-the-code-and-state-returned-by-casdoor"},"3.2 Accept the code and state returned by Casdoor"),(0,a.kt)("p",null,"After successfully logging in through Casdoor, Casdoor sends the code and state to the page we set up. We can retrieve the code and state using the create() function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"created() {\n    let url = window.document.location.href; // get URL\n    let u = new URL(url);\n    this.loginForm.code = u.searchParams.get('code'); // get code and state\n    this.loginForm.state = u.searchParams.get('state');\n    if (this.loginForm.code != null && this.loginForm.state != null) { // if code and state are not null, execute handleLogin\n      this.handleLogin();\n    }  \n}\n")),(0,a.kt)("p",null,"For RuoYi-Cloud, we simply modify its original method of sending the account and password to send the code and state instead. Therefore, the change is only in what is sent to the backend, in relation to the original login."),(0,a.kt)("h2",{id:"step-4-refactor-your-back-end"},"Step 4: Refactor your back-end"),(0,a.kt)("h3",{id:"41-accept-the-code-and-state-returned-by-the-front-end"},"4.1 Accept the code and state returned by the front-end"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@PostMapping(\"login\")\npublic R<?> callback(@RequestBody CodeBody code) {\n    String token = casdoorAuthService.getOAuthToken(code.getCode(), code.getState());\n    CasdoorUser casdoorUser = casdoorAuthService.parseJwtToken(token);\n    if (casdoorUser.getName() != null) {\n        String casdoorUserName = casdoorUser.getName();\n        if (sysLoginService.getUserByCasdoorName(casdoorUserName) == null) {\n            sysLoginService.casdoorRegister(casdoorUserName); // Add this user to the database if they don't exist\n        }\n    }\n    LoginUser userInfo = sysLoginService.casdoorLogin(casdoorUser.getName()); // Get the user's information from the database\n    return R.ok(tokenService.createToken(userInfo));\n}\n")),(0,a.kt)("p",null,"In this method, we are using the casdoor-SpringBoot-sdk method and making slight modifications to the RuoYi-Cloud method."),(0,a.kt)("p",null,"For example, the RuoYi-Cloud original method registers an account with a password. I have changed it to register an account using the ",(0,a.kt)("inlineCode",{parentName:"p"},"casdoorRegister")," method."),(0,a.kt)("p",null,"I have also added a method ",(0,a.kt)("inlineCode",{parentName:"p"},"getUserByCasdoorName")," to check if the account exists, and changed the method ",(0,a.kt)("inlineCode",{parentName:"p"},"executeUserInfo")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"executeWithAccount")," to reflect this change."),(0,a.kt)("p",null,"This is an easy modification, as we only need to remove the part that checks the password."),(0,a.kt)("h2",{id:"step-5-summary"},"Step 5: Summary"),(0,a.kt)("h3",{id:"51-front-end"},"5.1 Front-end"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The existing login and register pages need to be removed."),(0,a.kt)("li",{parentName:"ul"},"Additionally, the front-end needs to accept code and state parameters and send them to the back-end.")),(0,a.kt)("h3",{id:"52-back-end"},"5.2 Back-end"),(0,a.kt)("p",null,"The RuoYi back-end already has a well-implemented login and registration function. We just need to make some minor modifications, which makes the process highly convenient."),(0,a.kt)("h2",{id:"step-6-detailed-steps"},"Step 6: Detailed Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deploy and configure Casdoor. Be sure to select the bcrypt password type for the organization, as RuoYi-Cloud also uses bcrypt for passwords.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use Casdoor syncers to copy database users to your Casdoor organization. This will import the original accounts into Casdoor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After deploying Casdoor, make changes to the front-end. Disable the RuoYi check code."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"checkcode Switch",src:n(25349).Z,width:"564",height:"116"})),(0,a.kt)("p",{parentName:"li"},"Note that the RuoYi-Cloud captcha needs to be disabled in Nacos again.\nAlso, the RuoYi-Cloud registration function needs to be enabled by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"sys.account.registerUser")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a button for users to log in with Casdoor, and modify the data's ",(0,a.kt)("inlineCode",{parentName:"p"},"loginForm"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"login button",src:n(46162).Z,width:"1050",height:"38"}),"\n",(0,a.kt)("img",{alt:"data loginForm",src:n(44993).Z,width:"1047",height:"190"}),"\nHere, I have written the URL, but you can obtain it using the Casdoor-Vue-SDK or Casdoor-SpringBoot-SDK.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Since we are no longer using the original login method, delete the cookie and checkcode methods."),(0,a.kt)("p",{parentName:"li"},"The new ",(0,a.kt)("inlineCode",{parentName:"p"},"created")," function should look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"created() {\n    let url = window.document.location.href; // Get the URL\n    let u = new URL(url);\n    this.loginForm.code = u.searchParams.get('code'); // Get the code and state\n    this.loginForm.state = u.searchParams.get('state');\n    if (this.loginForm.code != null && this.loginForm.state != null) { // If code and state are not null, execute handleLogin\n        this.handleLogin();\n    }  \n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In fact, we only need to change the parameter we send to the back-end and delete the unnecessary functions. No other changes are necessary."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"handleLogin",src:n(70480).Z,width:"1048",height:"389"}),"\n",(0,a.kt)("img",{alt:"Login",src:n(95997).Z,width:"1047",height:"463"}),"\n",(0,a.kt)("img",{alt:"login",src:n(85179).Z,width:"1045",height:"489"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the required dependency in the back-end."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.casbin</groupId>\n    <artifactId>casdoor-spring-boot-starter</artifactId>\n    <version>1.2.0</version>\n</dependency>\n")),(0,a.kt)("p",{parentName:"li"},"You also need to configure Casdoor in the resource file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define the callback function as the redirect function. Make changes to some methods in ",(0,a.kt)("inlineCode",{parentName:"p"},"sysLoginService"),". Delete the password check step because it is no longer needed."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@PostMapping("login")\npublic R<?> callback(@RequestBody CodeBody code) {\n    // Define a CodeBody entity with code and state\n    String token = casdoorAuthService.getOAuthToken(code.getCode(), code.getState());\n    CasdoorUser casdoorUser = casdoorAuthService.parseJwtToken(token);\n    if (casdoorUser.getName() != null) {\n        String casdoorUserName = casdoorUser.getName();\n        if (sysLoginService.getUserByCasdoorName(casdoorUserName) == null) {\n            // If the user is not in the RuoYi-Cloud database but exists in Casdoor, create the user in the database\n            sysLoginService.casdoorRegister(casdoorUserName);\n        }\n    }\n    LoginUser userInfo = sysLoginService.casdoorLogin(casdoorUser.getName());\n    // Get the user\'s information from the database\n    return R.ok(tokenService.createToken(userInfo));\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add new methods to ",(0,a.kt)("inlineCode",{parentName:"p"},"SysLoginService"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public LoginUser casdoorLogin(String username) {\n    R<LoginUser> userResult = remoteUserService.getUserInfo(username, SecurityConstants.INNER);\n    // Execute the user\n    if (R.FAIL == userResult.getCode()) {\n        throw new ServiceException(userResult.getMsg());\n    }\n\n    if (StringUtils.isNull(userResult) || StringUtils.isNull(userResult.getData())) {\n        recordLogService.recordLogininfor(username, Constants.LOGIN_FAIL, "This user does not exist");\n        throw new ServiceException("User " + username + " does not exist");\n    }\n    LoginUser userInfo = userResult.getData();\n    SysUser user = userResult.getData().getSysUser();\n    if (UserStatus.DELETED.getCode().equals(user.getDelFlag())) {\n        recordLogService.recordLogininfor(username, Constants.LOGIN_FAIL, "Sorry, your account has been deleted");\n        throw new ServiceException("Sorry, your account " + username + " has been deleted");\n    }\n    if (UserStatus.DISABLE.getCode().equals(user.getStatus())) {\n        recordLogService.recordLogininfor(username, Constants.LOGIN_FAIL, "Your account is disabled. Please contact the administrator");\n        throw new ServiceException("Sorry, your account " + username + " is disabled");\n    }\n    recordLogService.recordLogininfor(username, Constants.LOGIN_SUCCESS, "Login successful");\n    return userInfo;\n}\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public String getUserByCasdoorName(String casdoorUsername) {\n    R<LoginUser> userResult = remoteUserService.getUserInfo(casdoorUsername, SecurityConstants.INNER);\n    if (StringUtils.isNull(userResult) || StringUtils.isNull(userResult.getData())) {\n        // If the user is not in the RuoYi-Cloud database but exists in Casdoor, create the user in the database\n        return null;\n    }\n    String username = userResult.getData().getSysUser().getUserName();\n    return username;\n}\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public void casdoorRegister(String username) {\n    if (StringUtils.isAnyBlank(username)) {\n        throw new ServiceException("User must provide a username");\n    }\n    SysUser sysUser = new SysUser();\n    sysUser.setUserName(username);\n    sysUser.setNickName(username);\n    R<?> registerResult = remoteUserService.registerUserInfo(sysUser, SecurityConstants.INNER);\n    System.out.println(registerResult);\n    if (R.FAIL == registerResult.getCode()) {\n        throw new ServiceException(registerResult.getMsg());\n    }\n    recordLogService.recordLogininfor(username, Constants.REGISTER, "Registration successful");\n}\n')))))}u.isMDXComponent=!0},95997:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Login-f881c8dba9577d73db1c77000a1ca01d.png"},70480:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/handleLogin-4c78d09487b428a152c01323dcb2107c.png"},85179:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login2-f91276b88e440f6d99a0206a24237089.png"},46162:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/loginButton-4171c414d9a97b8fa38edd7963052882.png"},44993:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/loginForm-5940dc4427c7489be9aea8617446ce03.png"},25349:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/loginSwitch-a8162124766dd4c5fa409fa909822426.png"},83178:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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AABQqQoWV9OcltyB6+vPaTXzo1XIlr7Ldvu0aXN25oaPuqG8YY+06mpvelamci3bJoxnZiU9N+WZe+tUtr1t3g6nEl4ukJuKc1Erd24++UPTVXoxFdOiucFr8M5TN2MZV5+9wU87dahObs/cl7/MFC+U9ttbi/Lz68XP69b76vcc3ldTtG3z09+bG7YLpipslO7A0NdDifn5638mAAAAAKytwuBdGHKc+d+r1O/eBcLMomyOhbGEZxVtJyivCpvW8ng0LuK2ket2YIlLtE+subfOXOio1a6+MNZv5kyfLheecouijXpWs05f1CtTb0CJkKxvDMjVfhktmhvsGIrai3/1e9vRTcXcuyidGY197jx01fr7X2qUn17Lyn8+/J+17YE+XMHCa3qfV16bMe85st9ecM0dT89mWtV8PC79hd9bvjU8V73u67eurytj603G1tecuh5+WDw/f/3PdLnTIQAAAABg1Y7K3u480zvV0S6hPv17TJJJFWcvudtVMM+obSH3d7XdXfFZ5Wn96KV4bktkcMKaN+7Mm57yhFinuq3biK02bl0xvy7Sox/j5L6m27aHu9apOutW96QkQu7Y1eiSEzKgxlu28mxCcrtEQyqi9yZzK6RL/sZAXL02UqIKGku2yaQ6EdH87xlPaFPncTgpc6GohIbd13Qnwciaw9BztfUzub/5i1n5+rFd+Wd6d4btOdy60q1D95H9NVtjfremvt+z0q+uq1T+94lhT1TWq4wnExIquL661jmsvuZS6pobOF/ijs16n5lbMK89GpIh73UOAAAAYNureqAEPYitwXkk2NwZew688xxvZ0G6bh+SWOJaVhJvZeVAc42cOFRnHjOmVzzXjw37wa/nzT7dX9gl3ceKF1sL0vT0tLS0tAQ9DJteJPBSU9FNG/0c7/arkQ3czAEAAACAYhVWvOEy7e368WTD6+/7OOlAred862d76wr467935nfrlc914NbbtseCapVyH5M3QbgGAAAA8FgRvCulq6RmXntw7cU6WOs28i3TSv5EOZ0K8fHi6Q4AAAAA8DjQao5APJWt5gAAAADggwpXNQcAAAAAAOUQvAEAAAAA8BHBGwAAAAAAHxG8AQAAAADwEcEbAAAAAAAfEbwBAAAAAPARwRuBqK6uluXl5aCHAQAAAAC+4zneCMTS0pJks1lZWVkJeigAAAAA4CuCNwAAAAAAPqLVHAAAAAAAHxG8AQAAAADwEcEbAAAAAAAfEbwBAAAAAPARwRsAAAAAAB8RvAEAAAAA8BHBGwAAAAAAHxG8AQAAAADwEcEbAAAAAAAfEbwBAAAAAPDR/wGAUkkCdxszHgAAAABJRU5ErkJggg=="},73724:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tableColumns-57b4e14ad56f12f50a8ccbfeadfc5909.png"}}]);