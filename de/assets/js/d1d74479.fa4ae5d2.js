"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={title:"Amazon S3",description:"Using Amazon S3 as a storage provider for Casdoor",keywords:["Amazon S3","storage","provider"],authors:["UsherFall"]},i=void 0,l={unversionedId:"provider/storage/amazon-s3",id:"provider/storage/amazon-s3",title:"Amazon S3",description:"Using Amazon S3 as a storage provider for Casdoor",source:"@site/docs/provider/storage/amazon-s3.md",sourceDirName:"provider/storage",slug:"/provider/storage/amazon-s3",permalink:"/de/docs/provider/storage/amazon-s3",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/storage/amazon-s3.md",tags:[],version:"current",frontMatter:{title:"Amazon S3",description:"Using Amazon S3 as a storage provider for Casdoor",keywords:["Amazon S3","storage","provider"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Local File System",permalink:"/de/docs/provider/storage/localFileSystem"},next:{title:"Azure Blob",permalink:"/de/docs/provider/storage/azure"}},s={},d=[{value:"Create security credentials",id:"create-security-credentials",level:3},{value:"Configure your bucket",id:"configure-your-bucket",level:3},{value:"Configure Casdoor",id:"configure-casdoor",level:3},{value:"(Optional) Use VPC",id:"optional-use-vpc",level:3},{value:"(Optional) Use CloudFront distribution",id:"optional-use-cloudfront-distribution",level:3}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is an example of ",(0,a.kt)("strong",{parentName:"p"},"Amazon S3"),".")),(0,a.kt)("h3",{id:"create-security-credentials"},"Create security credentials"),(0,a.kt)("p",null,"Follow the document: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"},"Managing access keys")," to create and save your ",(0,a.kt)("inlineCode",{parentName:"p"},"access key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secret access key")," in the Amazon console."),(0,a.kt)("h3",{id:"configure-your-bucket"},"Configure your bucket"),(0,a.kt)("p",null,'In your bucket permissions options, uncheck the "block" option and save the changes.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"uncheck block",src:n(8267).Z,width:"1482",height:"1084"})),(0,a.kt)("p",null,"Edit the object ownership and check ",(0,a.kt)("strong",{parentName:"p"},"ACLs enabled"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"check ACLs enabled",src:n(7469).Z,width:"1498",height:"1152"})),(0,a.kt)("h3",{id:"configure-casdoor"},"Configure Casdoor"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Name in Amazon"),(0,a.kt)("th",{parentName:"tr",align:null},"Is Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Access key"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client secret"),(0,a.kt)("td",{parentName:"tr",align:null},"Secret access key"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Endpoint (intranet)"),(0,a.kt)("td",{parentName:"tr",align:null},"VPC endpoint"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,a.kt)("td",{parentName:"tr",align:null},"Bucket name"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Path prefix"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Domain"),(0,a.kt)("td",{parentName:"tr",align:null},"CloudFront domain"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Region ID"),(0,a.kt)("td",{parentName:"tr",align:null},"AWS region"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("p",null,"Fill in the necessary information, including the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Client Secret")," obtained from the ",(0,a.kt)("inlineCode",{parentName:"p"},"access key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secret access key")," in the previous step. You can refer to this documentation for information on the formatting of the ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoint"),": ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteEndpoints.html"},"Website endpoints")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Amazon S3 provider",src:n(66509).Z,width:"1484",height:"1338"})),(0,a.kt)("h3",{id:"optional-use-vpc"},"(Optional) Use VPC"),(0,a.kt)("p",null,"You can refer to the official documentation for configuration: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-aws-services.html"},"Access AWS services through AWS PrivateLink")),(0,a.kt)("h3",{id:"optional-use-cloudfront-distribution"},"(Optional) Use CloudFront distribution"),(0,a.kt)("p",null,"Follow the document to configure CloudFront: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.SimpleDistribution.html"},"Configure CloudFront")),(0,a.kt)("p",null,"In the domain field, enter your distribution domain name."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"domain",src:n(89148).Z,width:"1458",height:"638"})))}c.isMDXComponent=!0},89148:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/amazonCloudFront-0e1ee6a78247a5c20494bcd391137939.png"},8267:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/amazonNoBlock-053490ea2137034242e6e55cdc7b2b04.png"},7469:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/amazonOwnership-290a54788c225c3dd3896a10c255293e.png"},66509:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/amazonProvider-6ba75a53e686f0fd765f32b2a227e60e.png"}}]);