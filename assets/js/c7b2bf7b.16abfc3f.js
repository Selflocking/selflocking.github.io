"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var A=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,A,r=function(e,t){if(null==e)return{};var n,A,r={},i=Object.keys(e);for(A=0;A<i.length;A++)n=i[A],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(A=0;A<i.length;A++)n=i[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=A.createContext({}),s=function(e){var t=A.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return A.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},d=A.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,m=d["".concat(l,".").concat(p)]||d[p]||c[p]||i;return n?A.createElement(m,a(a({ref:t},u),{},{components:n})):A.createElement(m,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return A.createElement.apply(null,a)}return A.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var A=n(87462),r=(n(67294),n(3905));const i={title:"Kubernetes",description:"Using Casdoor for Authentication in Kubernetes",keywords:["Kubernetes"],authors:["yehong-z"]},a=void 0,o={unversionedId:"integration/go/kubernetes",id:"integration/go/kubernetes",title:"Kubernetes",description:"Using Casdoor for Authentication in Kubernetes",source:"@site/docs/integration/go/kubernetes.md",sourceDirName:"integration/go",slug:"/integration/go/kubernetes",permalink:"/docs/integration/go/kubernetes",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/go/kubernetes.md",tags:[],version:"current",frontMatter:{title:"Kubernetes",description:"Using Casdoor for Authentication in Kubernetes",keywords:["Kubernetes"],authors:["yehong-z"]},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/docs/category/go"},next:{title:"OpenShift",permalink:"/docs/integration/go/openshift"}},l={},s=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Step 1: Creating a Casdoor App and User Account for Authentication",id:"step-1-creating-a-casdoor-app-and-user-account-for-authentication",level:2},{value:"Step 2: Configure Kubernetes API Server with OIDC Authentication",id:"step-2-configure-kubernetes-api-server-with-oidc-authentication",level:2},{value:"Step 3: Test OIDC Authentication",id:"step-3-test-oidc-authentication",level:2},{value:"Obtain Authentication Information",id:"obtain-authentication-information",level:3},{value:"HTTP Request-Based Authentication",id:"http-request-based-authentication",level:3},{value:"Kubectl Client-Based Authentication",id:"kubectl-client-based-authentication",level:3},{value:"Configuration File Method",id:"configuration-file-method",level:4},{value:"Command Line Argument Method",id:"command-line-argument-method",level:4}],u={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,A.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"According to the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/"},"Kubernetes documentation"),",\nthe API Server of Kubernetes can be authenticated using OpenID Connect (OIDC).\nThis article will guide you on how to configure authentication in Kubernetes using Casdoor."),(0,r.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.kt)("p",null,"Before starting, please make sure that you have the following environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Kubernetes cluster."),(0,r.kt)("li",{parentName:"ul"},"A Casdoor application like this ",(0,r.kt)("a",{parentName:"li",href:"https://demo.casdoor.com/"},"demo website"),"."),(0,r.kt)("li",{parentName:"ul"},"kubectl command tool (optional).")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"oidc-issuer-url")," only accepts URLs which use the ",(0,r.kt)("inlineCode",{parentName:"p"},"https://")," prefix.\nSo your Casdoor application should be deployed on an HTTPS website.")),(0,r.kt)("h2",{id:"step-1-creating-a-casdoor-app-and-user-account-for-authentication"},"Step 1: Creating a Casdoor App and User Account for Authentication"),(0,r.kt)("p",null,"Go to your Casdoor application and add a new application called ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes"),".\nPlease remember the ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Organization"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"client ID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"client Secret"),", and add some grant types to this app."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create an application in Casdoor",src:n(18473).Z,width:"941",height:"684"}),"\n",(0,r.kt)("img",{alt:"Grant types",src:n(78864).Z,width:"1001",height:"88"})),(0,r.kt)("p",null,"Next, add a new user to the application that you just created.\nPlease note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Organization")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Signup application")," used here should correspond to the app registered earlier."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add a user in Casdoor",src:n(89421).Z,width:"804",height:"1138"})),(0,r.kt)("h2",{id:"step-2-configure-kubernetes-api-server-with-oidc-authentication"},"Step 2: Configure Kubernetes API Server with OIDC Authentication"),(0,r.kt)("p",null,"To enable the OIDC plugin, you need to configure the following flags on the API server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--oidc-issuer-url"),": URL of the provider that allows the API server to discover public signing keys."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--oidc-client-id"),": A client id that all tokens must be issued for.")),(0,r.kt)("p",null,"This article uses minikube for demonstration.\nYou can configure the OIDC plugin for the minikube's API server\nusing the following command at startup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"minikube start --extra-config=apiserver.oidc-issuer-url=https://demo.casdoor.com --extra-config=apiserver.oidc-client-id=294b09fbc17f95daf2fe\n")),(0,r.kt)("h2",{id:"step-3-test-oidc-authentication"},"Step 3: Test OIDC Authentication"),(0,r.kt)("h3",{id:"obtain-authentication-information"},"Obtain Authentication Information"),(0,r.kt)("p",null,"Due to the lack of a frontend in kubectl,\nauthentication can be performed by sending a POST request to the Casdoor server.\nHere is the code in Python which sends a POST request to the Casdoor server\nand retrieves the ",(0,r.kt)("inlineCode",{parentName:"p"},"id_token")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"refresh_token"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nimport json\n\nurl = "https://demo.casdoor.com/api/login/oauth/access_token"\npayload = json.dumps({\n   "grant_type": "password",\n   "client_id": "Kubernetes",\n   "client_secret": "72c65c3912aec24a9f3ec41b65a7577114ed2bae",\n   "username": "user_3u94sf",\n   "password": "123456"\n})\nresponse = requests.request("POST", url, data=payload)\n\nprint(response.text)\n')),(0,r.kt)("p",null,"After executing this code, you should receive a response similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "xxx",\n  "id_token": "yyy",\n  "refresh_token": "zzz",\n  "token_type": "Bearer",\n  "expires_in": 72000,\n  "scope": ""\n}\n')),(0,r.kt)("p",null,"Now, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"id_token")," that you just obtained to authenticate with the Kubernetes API server."),(0,r.kt)("h3",{id:"http-request-based-authentication"},"HTTP Request-Based Authentication"),(0,r.kt)("p",null,"Add the token to the request header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl https://www.xxx.com -k -H "Authorization: Bearer $(id_token)"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://www.xxx.com")," is the Kubernetes API server deployment address.")),(0,r.kt)("h3",{id:"kubectl-client-based-authentication"},"Kubectl Client-Based Authentication"),(0,r.kt)("h4",{id:"configuration-file-method"},"Configuration File Method"),(0,r.kt)("p",null,"Write the following configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," file.\nYou should replace each configuration item in the configuration file above with the values you obtained earlier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"users:\n- name: minikube\n  user:\n    auth-provider:\n      config:\n        client-id: Kubernetes\n        client-secret: 72c65c3912aec24a9f3ec41b65a7577114ed2bae\n        id-token: $(id_token)\n        idp-issuer-url: https://demo.casdoor.com\n        refresh-token: $(refresh_token)\n      name: oidc\n\n")),(0,r.kt)("p",null,"Now, you can directly access your API server using kubectl.\nTry running a test command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info\n")),(0,r.kt)("h4",{id:"command-line-argument-method"},"Command Line Argument Method"),(0,r.kt)("p",null,"Alternatively, you can authenticate by directly adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"id_token")," to the command line parameters of kubectl."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl --token=$(id_token) cluster-info\n")))}c.isMDXComponent=!0},18473:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/Kubernetes_1-fe031df46f488c1f904f953f8f09f3fe.png"},89421:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/Kubernetes_2-774b8d029a27247e0008847dc0e0b3f0.png"},78864:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+kAAABYCAIAAAAGISFlAAAf7klEQVR4Ae2df2wWx5nHh0CIAmmAng1JAMXpD4KlGB+kBsGpUi1eiOOcQrFSVScshbY5J7naIIgVS8fldFKUPxw54cCOmri5nnMyOrVXmSYShBgjt1cJBDRwtqua0rvWke0QYreBNBg1cfA9z8z+mN333X2X1++777v7fleId3d2duaZz/Ps7LMzz47nzMzMCGwgAAIgAAIgAAIgAAIgAAIFT+CWgpcQAoIACIAACIAACIAACIAACDAB+O6wAxAAARAAARAAARAAARCIBgH47tHQE6QEARAAARAAARAAARAAAfjusAEQAAEQAAEQAAEQAAEQiAYB+O7R0BOkBAEQAAEQAAEQAAEQAAH47rABEAABEAABEAABEAABEIgGAfju0dATpAQBEAABEAABEAABEAAB+O6wARAAARAAARAAARAAARCIBgH47tHQE6QEARAAARAAARAAARAAAfjusAEQAAEQAAEQAAEQAAEQiAYB+O7R0BOkBAEQAAEQAAEQAAEQAAH47rABEAABEAABEAABEAABEIgGAfju0dATpAQBEAABEAABEAABEAAB+O6wARAAARAAARAAARAAARCIBgH47tHQE6QEARAAARAAARAAARAAAfjusAEQAAEQAAEQAAEQAAEQiAYB+O7R0BOkBAEQAAEQAAEQAAEQAAH47rABEAABEAABEAABEAABEIgGgXnREBNSggAIFBmB6Y0bi6zFaC4IRJ7AvFOnIt8GNAAECp4Axt0LXkUQEARAAARAAARAAARAAAQkAfjuMAQQAAEQAAEQAAEQAAEQiAYBxMxEQ0+QEgSKlgBm4YtW9Wh4VAggwi0qmoKc8SCAcfd46BGtAAEQAAEQAAEQAAEQiD8B+O7x1zFaCAIgAAIgAAIgAAIgEA8C8N3joUe0AgRAAARAAARAAARAIP4E4LvHX8doIQiAAAiAAAiAAAiAQDwIwHePhx7RChAAARAAARAAARAAgfgTgO8efx2jhSAAAiAAAiAAAiAAAvEggDUi46HHmLRiamrqypWrU1PXp6enY9IkNCNTAl8xL7xw4aK5i18QAIFCJIC7tRC1ApniSwC+e3x1G7WWffjhxJ///MkXv7iktLT01lthmVHTX7bltd7eVq9ele2yUR4IgEA2CeBuzSZN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"}}]);