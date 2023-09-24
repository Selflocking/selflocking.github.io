"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Vue SDK",description:"Casdoor Vue SDK",keywords:["Vue","SDK"],authors:["Nekotoxin"]},i=void 0,l={unversionedId:"how-to-connect/vue-sdk",id:"how-to-connect/vue-sdk",title:"Vue SDK",description:"Casdoor Vue SDK",source:"@site/docs/how-to-connect/vue-sdk.md",sourceDirName:"how-to-connect",slug:"/how-to-connect/vue-sdk",permalink:"/zh/docs/how-to-connect/vue-sdk",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/vue-sdk.md",tags:[],version:"current",frontMatter:{title:"Vue SDK",description:"Casdoor Vue SDK",keywords:["Vue","SDK"],authors:["Nekotoxin"]},sidebar:"tutorialSidebar",previous:{title:"How to Enable Single Sign-On",permalink:"/zh/docs/how-to-connect/single-sign-on"},next:{title:"Desktop SDKs",permalink:"/zh/docs/category/desktop-sdks"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Initializing the SDK",id:"initializing-the-sdk",level:2},{value:"Example",id:"example",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Casdoor Vue SDK is designed for Vue 2 and Vue 3, making it very convenient to use."),(0,o.kt)("p",null,"The Vue SDK is based on casdoor-js-sdk. You can also use the casdoor-js-sdk directly, which will allow for more customization."),(0,o.kt)("p",null,"Please note that this plugin is still in development. If you have any questions or suggestions, please feel free to contact us by opening an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-vue-sdk/issues"},"issue"),"."),(0,o.kt)("p",null,"We will now show you the necessary steps below."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are still unsure how to use it after reading the README.md, you can refer to the example: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-python-vue-sdk-example"},"casdoor-python-vue-sdk-example")," for more details."),(0,o.kt)("p",{parentName:"blockquote"},"The example's front-end is built with casdoor-vue-sdk, while the back-end is built with casdoor-python-sdk. You can view the source code in the example.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# NPM\nnpm install casdoor-vue-sdk\n\n# Yarn\nyarn add casdoor-vue-sdk\n")),(0,o.kt)("h2",{id:"initializing-the-sdk"},"Initializing the SDK"),(0,o.kt)("p",null,"To initialize the SDK, you will need to provide 5 string parameters in the following order:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"serverUrl"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The URL of your Casdoor server.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"clientId"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The Client ID of your Casdoor application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"appName"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of your Casdoor application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"organizationName"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the Casdoor organization linked to your Casdoor application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"redirectPath"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the redirect URL for your Casdoor application. If not provided, it will default to ",(0,o.kt)("inlineCode",{parentName:"td"},"/callback"),".")))),(0,o.kt)("p",null,"For Vue 3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// in main.js\nimport Casdoor from \'casdoor-vue-sdk\'\n\nconst config = {\n  serverUrl: "http://localhost:8000",\n  clientId: "4262bea2b293539fe45e",\n  organizationName: "casbin",\n  appName: "app-casnode",\n  redirectPath: "/callback",\n};\n\nconst app = createApp(App)\napp.use(Casdoor, config)\n')),(0,o.kt)("p",null,"For Vue 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// in main.js\nimport Casdoor from \'casdoor-vue-sdk\'\nimport VueCompositionAPI from \'@vue/composition-api\'\n\nconst config = {\n  serverUrl: "http://localhost:8000",\n  clientId: "4262bea2b293539fe45e",\n  organizationName: "casbin",\n  appName: "app-casnode",\n  redirectPath: "/callback",\n};\n\nVue.use(VueCompositionAPI)\nVue.use(Casdoor, config)\n\nnew Vue({\n  render: h => h(App),\n}).$mount(\'#app\')\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vue"},"// in app.vue\n<script>\nexport default {\n  name: 'App',\n  methods: {\n    login() {\n      window.location.href = this.getSigninUrl();\n    },\n    signup() {\n      window.location.href = this.getSignupUrl();\n    }\n  }\n}\n<\/script>\n")),(0,o.kt)("p",null,"Auto Fix"),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"postinstall")," hook does not get triggered or if you have updated the Vue version, try running the following command to resolve the redirecting issue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx vue-demi-fix\n")),(0,o.kt)("p",null,"For more information about switching Vue versions, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vueuse/vue-demi"},"vue-demi docs"),"."))}c.isMDXComponent=!0}}]);