"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6227],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(a),m=o,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(f,i(i({ref:e},p),{},{components:a})):n.createElement(f,i({ref:e},p))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65790:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={title:"Data Initialization",description:"How to initialize Casdoor data from files",keywords:["data initialization","deployment","Intranet"],authors:["leo220yuyaodog"]},i=void 0,l={unversionedId:"deployment/data-initialization",id:"deployment/data-initialization",title:"Data Initialization",description:"How to initialize Casdoor data from files",source:"@site/docs/deployment/data-initialization.md",sourceDirName:"deployment",slug:"/deployment/data-initialization",permalink:"/ja/docs/deployment/data-initialization",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/deployment/data-initialization.md",tags:[],version:"current",frontMatter:{title:"Data Initialization",description:"How to initialize Casdoor data from files",keywords:["data initialization","deployment","Intranet"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/ja/docs/category/deployment"},next:{title:"Hosting Static Files in a CDN",permalink:"/ja/docs/deployment/deploy-cdn"}},d={},s=[{value:"How to use",id:"how-to-use",level:2},{value:"Docker",id:"docker",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"File details",id:"file-details",level:2}],p={toc:s};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are deploying Casdoor with other services as a complete application, you may want to provide an ",(0,o.kt)("strong",{parentName:"p"},"out-of-the-box")," feature for users. This means that users can directly use the application without any configuration."),(0,o.kt)("p",null,"In such a situation, you can use data initialization to register your service in Casdoor through a configuration file. This file can be pre-defined or dynamically generated by your own service."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"If there is a configuration file named ",(0,o.kt)("inlineCode",{parentName:"p"},"init_data.json")," at the root directory of Casdoor, it will be used to initialize data in Casdoor. All you have to do is place this file in the root directory where Casdoor will run."),(0,o.kt)("p",null,"If you are using the official Docker image of Casdoor, here are some scripts that can help you to mount ",(0,o.kt)("inlineCode",{parentName:"p"},"init_data.json")," into the container."),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"If you deploy Casdoor with Docker, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"volume")," command to mount ",(0,o.kt)("inlineCode",{parentName:"p"},"init_data.json")," into the container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run ... -v /path/to/init_data.json:/init_data.json\n")),(0,o.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"If you deploy Casdoor with Kubernetes, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"configmap")," to store ",(0,o.kt)("inlineCode",{parentName:"p"},"init_data.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: casdoor-init-data\ndata:\n  init_data.json:\n")),(0,o.kt)("p",null,"You can mount the data into Casdoor ",(0,o.kt)("inlineCode",{parentName:"p"},"pods")," by mounting the ",(0,o.kt)("inlineCode",{parentName:"p"},"configmap"),". You can modify your ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\n...\nspec:\n  template:\n    ...\n    spec:\n      containers:\n      ...\n        volumeMounts:\n        - mountPath: /init_data.json\n          name: casdoor-init-data-volume\n          subPath: init_data.json\n      volumes:\n      - configMap:\n          name: casdoor-init-data\n        name: casdoor-init-data-volume\n")),(0,o.kt)("h2",{id:"file-details"},"File details"),(0,o.kt)("p",null,"There is already a template named ",(0,o.kt)("inlineCode",{parentName:"p"},"init_data.json.template")," in the root directory of Casdoor repository. You can refer to this file to customize your initialization."),(0,o.kt)("p",null,"The following is the Go struct of each part and their documentation:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Object"),(0,o.kt)("th",{parentName:"tr",align:null},"Go Struct"),(0,o.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"organizations"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor/blob/2fec3f72ae9a38891a951e55e088b4967cdf4836/object/organization.go#L32"},"struct")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://casdoor.org/docs/organization/overview"},"doc"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"applications"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor/blob/2fec3f72ae/object/application.go#L34"},"struct")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://casdoor.org/docs/application/overview"},"doc"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"users"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor/blob/2fec3f72ae9a38891a951e55e088b4967cdf4836/object/user.go#L27"},"struct")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://casdoor.org/docs/user/overview"},"doc"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"providers"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor/blob/2fec3f72ae9a38891a951e55e088b4967cdf4836/object/provider.go#L25"},"struct")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://casdoor.org/docs/provider/overview"},"doc"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"certs"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor/blob/2fec3f72ae9a38891a951e55e088b4967cdf4836/object/cert.go#L24"},"struct")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ldaps"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor/blob/2fec3f72ae9a38891a951e55e088b4967cdf4836/object/ldap.go#L28"},"struct")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://casdoor.org/docs/ldap/overview"},"doc"))))),(0,o.kt)("p",null,"If you still feel confused about filling out this template, you can call the RESTful API or use the debug mode of your browser to see the response of ",(0,o.kt)("inlineCode",{parentName:"p"},"GetXXX")," to these objects. The responses are in the same format as ",(0,o.kt)("inlineCode",{parentName:"p"},"init_data.json"),"."))}c.isMDXComponent=!0}}]);