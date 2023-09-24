"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5422],{3905:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>g});var o=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,o,a=function(t,n){if(null==t)return{};var e,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var p=o.createContext({}),c=function(t){var n=o.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):r(r({},n),t)),e},d=function(t){var n=c(t.components);return o.createElement(p.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),f=c(e),g=a,s=f["".concat(p,".").concat(g)]||f[g]||u[g]||i;return e?o.createElement(s,r(r({ref:n},d),{},{components:e})):o.createElement(s,r({ref:n},d))}));function g(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,r=new Array(i);r[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var c=2;c<i;c++)r[c]=e[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,e)}f.displayName="MDXCreateElement"},81086:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=e(87462),a=(e(67294),e(3905));const i={title:"Specify Login Organization",description:"Specify the login organization on the login page",keywords:["UI","login","application","organization"],authors:["leo220yuyaodog"]},r=void 0,l={unversionedId:"application/specify-login-organization",id:"application/specify-login-organization",title:"Specify Login Organization",description:"Specify the login organization on the login page",source:"@site/docs/application/specify-login-organization.md",sourceDirName:"application",slug:"/application/specify-login-organization",permalink:"/zh/docs/application/specify-login-organization",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/application/specify-login-organization.md",tags:[],version:"current",frontMatter:{title:"Specify Login Organization",description:"Specify the login organization on the login page",keywords:["UI","login","application","organization"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Login UI Customization",permalink:"/zh/docs/application/ui-customization"},next:{title:"Tags",permalink:"/zh/docs/application/tags"}},p={},c=[{value:"Configuration",id:"configuration",level:2}],d={toc:c};function u(t){let{components:n,...i}=t;return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here, we will show you how to enable the option to specify the login organization for the application."),(0,a.kt)("p",null,"For example, the endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," is the default sign-in page for accounts belonging to the ",(0,a.kt)("strong",{parentName:"p"},"built-in")," organization. However, you can enable the option to specify the login organization on the ",(0,a.kt)("strong",{parentName:"p"},"app-built-in")," application that belongs to the ",(0,a.kt)("strong",{parentName:"p"},"built-in")," organization. This allows the user to select an organization when logging in. After the user selects the organization, they will be redirected to ",(0,a.kt)("inlineCode",{parentName:"p"},"/login/<organization>"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"On the application edit page, you can find the ",(0,a.kt)("inlineCode",{parentName:"p"},"Org select mode")," configuration option. You can select the mode from the dropdown list."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mode_config",src:e(94407).Z,width:"572",height:"204"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None: The organization select page will not be shown."),(0,a.kt)("li",{parentName:"ul"},"Input: The user can input the organization name in the input box."),(0,a.kt)("li",{parentName:"ul"},"Select: The user can select the organization from the dropdown list.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mode_input",src:e(56463).Z,width:"595",height:"681"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mode_select",src:e(94693).Z,width:"617",height:"691"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The organization select page will only be shown when the route is ",(0,a.kt)("inlineCode",{parentName:"p"},"/login")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"<organization>/login"),". This means that the application should be set as the ",(0,a.kt)("strong",{parentName:"p"},"default application")," in the organization or the app-built-in.")))}u.isMDXComponent=!0},94407:(t,n,e)=>{e.d(n,{Z:()=>o});const o="data:image/png;base64,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"},56463:(t,n,e)=>{e.d(n,{Z:()=>o});const o=e.p+"assets/images/mode_input-8b68826b46bf270d7e347dc186b03dca.png"},94693:(t,n,e)=>{e.d(n,{Z:()=>o});const o=e.p+"assets/images/mode_select-4f9501c460bb584adbc00d8b335feb1f.png"}}]);