"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8561],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,u=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(u,i(i({ref:t},g),{},{components:r})):o.createElement(u,i({ref:t},g))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Generating Swagger Files",description:"Generating Swagger Files",keywords:["bee","swagger"],authors:["ComradeProgrammer"]},i=void 0,l={unversionedId:"developer-guide/swagger",id:"developer-guide/swagger",title:"Generating Swagger Files",description:"Generating Swagger Files",source:"@site/docs/developer-guide/swagger.md",sourceDirName:"developer-guide",slug:"/developer-guide/swagger",permalink:"/ja/docs/developer-guide/swagger",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/developer-guide/swagger.md",tags:[],version:"current",frontMatter:{title:"Generating Swagger Files",description:"Generating Swagger Files",keywords:["bee","swagger"],authors:["ComradeProgrammer"]},sidebar:"tutorialSidebar",previous:{title:"Frontend",permalink:"/ja/docs/developer-guide/frontend"},next:{title:"Organizations",permalink:"/ja/docs/category/organizations"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"How to write the comment",id:"how-to-write-the-comment",level:2},{value:"How to generate the swagger file",id:"how-to-generate-the-swagger-file",level:2}],g={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,'As we know, the beego framework provides support for generating swagger files to clarify the API via the command line tool called "bee". Casdoor is also built based on beego. However, we found that the swagger files generated by bee failed to categorize the APIs with the "@Tag" label. So, we modified the original bee to implement this function.'),(0,n.kt)("h2",{id:"how-to-write-the-comment"},"How to write the comment"),(0,n.kt)("p",null,'Most rules are exactly identical to the original bee comment formats. The only discrepancy is that the API shall be divided into different groups according to the "@Tag" label. Therefore, developers are obliged to ensure that this tag is correctly added. Here is an example:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// @Title Login\n// @Tag Login API\n// @Description login\n// @Param   oAuthParams     query    string  true        "oAuth parameters"\n// @Param   body    body   RequestForm  true        "Login information"\n// @Success 200 {object} controllers.api_controller.Response The Response object\n// @router /login [post]\nfunc (c *ApiController) Login() {\n')),(0,n.kt)("p",null,'APIs with the same "@Tag" labels will be put into the same group.'),(0,n.kt)("h2",{id:"how-to-generate-the-swagger-file"},"How to generate the swagger file"),(0,n.kt)("ol",{start:0},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write comments for the API in the correct format.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fetch this repository: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/casbin/bee"},"https://github.com/casbin/bee"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build the modified bee. For example, in the root directory of casbin/bee, run the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"go build -o mybee .\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy mybee to the base directory of casdoor.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In that directory, run the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mybee generate docs\n")))),(0,n.kt)("p",null,"Then you will find that the new swagger files are generated."))}p.isMDXComponent=!0}}]);