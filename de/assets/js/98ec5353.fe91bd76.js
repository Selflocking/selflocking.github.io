"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5857],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=c(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63542:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"React Native App",description:"A React Native mobile app example for Casdoor",keywords:["React Native","sdk"],authors:["cwp0"]},i=void 0,l={unversionedId:"how-to-connect/mobile-sdks/react-native-app",id:"how-to-connect/mobile-sdks/react-native-app",title:"React Native App",description:"A React Native mobile app example for Casdoor",source:"@site/docs/how-to-connect/mobile-sdks/react-native-app.md",sourceDirName:"how-to-connect/mobile-sdks",slug:"/how-to-connect/mobile-sdks/react-native-app",permalink:"/de/docs/how-to-connect/mobile-sdks/react-native-app",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/mobile-sdks/react-native-app.md",tags:[],version:"current",frontMatter:{title:"React Native App",description:"A React Native mobile app example for Casdoor",keywords:["React Native","sdk"],authors:["cwp0"]},sidebar:"tutorialSidebar",previous:{title:"Mobile SDKs",permalink:"/de/docs/category/mobile-sdks"},next:{title:"Casdoor Plugin",permalink:"/de/docs/how-to-connect/plugin"}},p={},c=[{value:"How to Run the Example",id:"how-to-run-the-example",level:2},{value:"Quick Start",id:"quick-start",level:3},{value:"Preview",id:"preview",level:3},{value:"How to Integrate",id:"how-to-integrate",level:2},{value:"Step 1: Import SDK",id:"step-1-import-sdk",level:3},{value:"Step 2: Initialize SDK",id:"step-2-initialize-sdk",level:3},{value:"Step 3: Use SDK",id:"step-3-use-sdk",level:3}],s={toc:c};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-react-native-sdk"},"Casdoor React Native mobile app example")," to get you up to speed on how to use Casdoor in React Native."),(0,r.kt)("h2",{id:"how-to-run-the-example"},"How to Run the Example"),(0,r.kt)("h3",{id:"quick-start"},"Quick Start"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"download the code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," git clone git@github.com:casdoor/casdoor-react-native-example.git\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"install dependencies")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," cd casdoor-react-native-example\n yarn install\n cd ios/\n pod install\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"run on ios")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd casdoor-react-native-example\nreact-native start\nreact-native run-ios\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"run on android")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd casdoor-react-native-example\nreact-native start\nreact-native run-android\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure to turn on the emulator or real device before running.")),(0,r.kt)("h3",{id:"preview"},"Preview"),(0,r.kt)("p",null,"After running this react-native-example mobile application, the following window will be displayed on the emulator or real device."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"iOS")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Android")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:"/img/how-to-connect/mobile-sdks/react-native-app/iOS-login.png",alt:"iOS-login",width:"250"})),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:"/img/how-to-connect/mobile-sdks/react-native-app/Android-login.png",alt:"Android-login",width:"250"}))))),(0,r.kt)("p",null,"If you click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Login with Casdoor")," button, the Casdoor login window will appear on the screen."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"iOS")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Android")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:"/img/how-to-connect/mobile-sdks/react-native-app/iOS-casdoor-login.png",alt:"iOS-casdoor-login",width:"250"})),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:"/img/how-to-connect/mobile-sdks/react-native-app/Android-casdoor-login.png",alt:"Android-casdoor-login",width:"250"}))))),(0,r.kt)("p",null,"After a successful login, a user profile window will appear on your screen displaying your user information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"iOS")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Android")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:"/img/how-to-connect/mobile-sdks/react-native-app/iOS-userInfo.png",alt:"iOS-userInfo",width:"250"})),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:"/img/how-to-connect/mobile-sdks/react-native-app/Android-userInfo.png",alt:"Android-userInfo",width:"250"}))))),(0,r.kt)("p",null,"You can preview the entire process in the following GIF image."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"iOS")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Android")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:"https://github.com/casdoor/casdoor-react-native-example/blob/master/iOS-gif.gif?raw=true",alt:"iOS-gif",width:"250"})),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:"https://github.com/casdoor/casdoor-react-native-example/blob/master/Android-gif.gif?raw=true",alt:"Android-gif",width:"250"}))))),(0,r.kt)("h2",{id:"how-to-integrate"},"How to Integrate"),(0,r.kt)("p",null,"The above example uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-react-native-sdk"},"casdoor-react-native-sdk"),", you can also integrate this sdk in your own project."),(0,r.kt)("p",null,"The integration and use of the sdk is very simple, the following steps will show you how to integrate and use:"),(0,r.kt)("h3",{id:"step-1-import-sdk"},"Step 1: Import SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# NPM\nnpm i casdoor-react-native-sdk\n\n# Yarn\nyarn add casdoor-react-native-sdk\n")),(0,r.kt)("h3",{id:"step-2-initialize-sdk"},"Step 2: Initialize SDK"),(0,r.kt)("p",null,"Initialization requires 7 parameters, which are all string type:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name (in order)"),(0,r.kt)("th",{parentName:"tr",align:null},"Must"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serverUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"your Casdoor server URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientId"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the Client ID of your Casdoor application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientSecret"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the Client Secret of your Casdoor application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appName"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of your Casdoor application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"organizationName"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the Casdoor organization connected with your Casdoor application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirectPath"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"the path of the redirect URL for your Casdoor application, will be ",(0,r.kt)("inlineCode",{parentName:"td"},"/callback")," if not provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"signinPath"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"the path of the signin URL for your Casdoor application")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import SDK from 'casdoor-react-native-sdk'\n\nconst sdkConfig = {\n  serverUrl: 'https://door.casdoor.com',\n  clientId: 'b800a86702dd4d29ec4d',\n  clientSecret: '1219843a8db4695155699be3a67f10796f2ec1d5',\n  appName: 'app-example',\n  organizationName: 'casbin',\n  redirectPath: 'http://localhost:5000/callback',\n  signinPath: '/api/signin',\n};\nconst sdk = new SDK(sdkConfig)\n")),(0,r.kt)("h3",{id:"step-3-use-sdk"},"Step 3: Use SDK"),(0,r.kt)("p",null,"Use the corresponding API interface of the sdk at the appropriate place."),(0,r.kt)("p",null,"The simplest casdoor authorization and authentication process can be realized by using the following three APIs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\n// get the signin url\ngetSigninUrl()\n\n// get Access Token\ngetAccessToken(redirectUrl); // http://localhost:5000/callback?code=b75bc5c5ac65ffa516e5&state=gjmfdgqf498\n\n// decode jwt token to get user info\nJwtDecode(jwtToken) \n")),(0,r.kt)("p",null,"If you want to use other interfaces, please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-react-native-sdk"},"casdoor-react-native-sdk")," for more help."))}d.isMDXComponent=!0}}]);