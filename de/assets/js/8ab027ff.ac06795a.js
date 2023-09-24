"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={title:"How to Enable Single Sign-On",description:"Enable Single Sign-On",keywords:["SSO","Single Sign-On"],authors:["leo220yuyaodog"]},r=void 0,l={unversionedId:"how-to-connect/single-sign-on",id:"how-to-connect/single-sign-on",title:"How to Enable Single Sign-On",description:"Enable Single Sign-On",source:"@site/docs/how-to-connect/single-sign-on.md",sourceDirName:"how-to-connect",slug:"/how-to-connect/single-sign-on",permalink:"/de/docs/how-to-connect/single-sign-on",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/single-sign-on.md",tags:[],version:"current",frontMatter:{title:"How to Enable Single Sign-On",description:"Enable Single Sign-On",keywords:["SSO","Single Sign-On"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Casdoor SDKs",permalink:"/de/docs/how-to-connect/sdk"},next:{title:"Vue SDK",permalink:"/de/docs/how-to-connect/vue-sdk"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Add Silent Sign-In",id:"add-silent-sign-in",level:2},{value:"Add Popup Sign-In",id:"add-popup-sign-in",level:2},{value:"Using SSO",id:"using-sso",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"You have connected Casdoor and configured more than one application in an organization. You want users to sign in once to any app in the organization and then be able to sign in when they go to another app without any extra clicks."),(0,o.kt)("p",null,"We offer this single sign-on feature. To enable it, you just need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable the Auto Sign-In button."),(0,o.kt)("li",{parentName:"ul"},"Fill in the URL for the home page."),(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("strong",{parentName:"li"},"Silent Sign-In")," function to the application home page.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The basic sign-in process provided by Casdoor allows users to log in to other applications in the organization by selecting the user who is currently logged in or using another account."),(0,o.kt)("p",{parentName:"admonition"},"After enabling auto sign-in, the selection box will not be displayed, and the logged-in user will log in directly.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Fill in the "home" field. It can be the application\'s home page or the login page.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sso_home.png",src:n(22689).Z,width:"1270",height:"717"}),"\n2. Enable the Auto Sign-In button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sso_signin.png",src:n(94694).Z,width:"505",height:"405"})),(0,o.kt)("h2",{id:"add-silent-sign-in"},"Add Silent Sign-In"),(0,o.kt)("p",null,"In fact, we implement auto login by carrying parameters in the URL. Therefore, your applications need to have a method to trigger the login after jumping to the URL. We provide the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-react-sdk"},"casdoor-react-sdk")," to help you quickly implement this feature. You can see the details in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-react-sdk#use-in-react"},"use-in-react"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"How it works"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"In the URL to the application home page, we will carry the ",(0,o.kt)("inlineCode",{parentName:"li"},"silentSignin")," parameter."),(0,o.kt)("li",{parentName:"ol"},"In your home page, determine whether you need to log in silently (automatically) by checking the ",(0,o.kt)("inlineCode",{parentName:"li"},"silentSignin")," parameter. If ",(0,o.kt)("inlineCode",{parentName:"li"},"silentSignin === 1"),", the function should return the ",(0,o.kt)("inlineCode",{parentName:"li"},"SilentSignin")," component, which will help you initiate a login request. Since you have auto-login enabled, users will log in automatically without clicking."))),(0,o.kt)("h2",{id:"add-popup-sign-in"},"Add Popup Sign-In"),(0,o.kt)("p",null,'The "popup sign-in" feature will open a small window. After logging in to Casdoor in the child window, it will send authentication information to the main window and then close automatically. We implement this feature by carrying parameters in the URL.'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"How to use"),(0,o.kt)("p",{parentName:"admonition"},"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"popupSignin()")," method in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-js-sdk"},"casdoor-js-sdk")," to quickly implement this feature. You can see a demo in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-nodejs-react-example"},"casdoor-nodejs-react-example"),"."),(0,o.kt)("p",{parentName:"admonition"},"How it works"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"In the URL to the application home page, we will carry the ",(0,o.kt)("inlineCode",{parentName:"li"},"popup")," parameter."),(0,o.kt)("li",{parentName:"ol"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"popup=1")," is in the login parameters, Casdoor will send ",(0,o.kt)("inlineCode",{parentName:"li"},"code")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," as a message to the main window and finish getting the ",(0,o.kt)("inlineCode",{parentName:"li"},"token")," in the main window using the SDK."))),(0,o.kt)("h2",{id:"using-sso"},"Using SSO"),(0,o.kt)("p",null,"The configuration is complete. Below, we will show you how to use auto login."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure your application can redirect to the user's profile page. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-js-sdk#get-my-profile-page-url"},"getMyProfileUrl(account, returnUrl)")," API is provided in our SDK for each language.")),(0,o.kt)("p",null,'Open the profile page and go to the "Home" page (',(0,o.kt)("inlineCode",{parentName:"p"},"/"),' URL path). You will see the application list provided by the organization. It\'s worth noting that only users in organizations other than "built-in" can see the application list on the "Home" page. All the global administrators (those in the "built-in" organization) cannot see it.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sso_homepage.png",src:n(78487).Z,width:"1899",height:"883"})),(0,o.kt)("p",null,"Click on a tile in the application list, and it will jump to the homepage URL of that application with the GET parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"?silentSignin=1"),". It will automatically log into the application if the application has integrated with Casdoor SSO (so it will recognize the ",(0,o.kt)("inlineCode",{parentName:"p"},"?silentSignin=1")," parameter and perform a silent login in the background)."))}d.isMDXComponent=!0},22689:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sso_home-67f2ee9056c1b87d9dfe873e02e8db04.png"},78487:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sso_homepage-9a368fa35b6e7bf07c333b423155be30.png"},94694:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sso_signin-d64d40c185de026300a6fbd2c0385c1f.png"}}]);