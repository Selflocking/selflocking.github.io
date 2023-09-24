"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4262],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"AWS Client VPN",description:"Using Casdoor as a SAML IdP",keywords:["SAML","IdP"],authors:["UsherFall"]},o=void 0,l={unversionedId:"how-to-connect/saml/aws",id:"how-to-connect/saml/aws",title:"AWS Client VPN",description:"Using Casdoor as a SAML IdP",source:"@site/docs/how-to-connect/saml/aws.md",sourceDirName:"how-to-connect/saml",slug:"/how-to-connect/saml/aws",permalink:"/fr/docs/how-to-connect/saml/aws",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/saml/aws.md",tags:[],version:"current",frontMatter:{title:"AWS Client VPN",description:"Using Casdoor as a SAML IdP",keywords:["SAML","IdP"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/fr/docs/how-to-connect/saml/overview"},next:{title:"Keycloak",permalink:"/fr/docs/how-to-connect/saml/keycloak"}},s={},p=[{value:"Casdoor as a SAML IdP in AWS Client VPN",id:"casdoor-as-a-saml-idp-in-aws-client-vpn",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure SAML Application",id:"configure-saml-application",level:2},{value:"Configure AWS",id:"configure-aws",level:2},{value:"Configure Casdoor as an AWS Identity Provider",id:"configure-casdoor-as-an-aws-identity-provider",level:3},{value:"Create an AWS Client VPN Endpoint",id:"create-an-aws-client-vpn-endpoint",level:3},{value:"Associate a Client VPN with a Target VPC",id:"associate-a-client-vpn-with-a-target-vpc",level:3},{value:"Configure SAML Group-Specific Authorization",id:"configure-saml-group-specific-authorization",level:3},{value:"Connect to Client VPN",id:"connect-to-client-vpn",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"casdoor-as-a-saml-idp-in-aws-client-vpn"},"Casdoor as a SAML IdP in AWS Client VPN"),(0,r.kt)("p",null,"This guide will show you how to configure Casdoor and AWS Client VPN to add Casdoor as a SAML IdP in AWS Client VPN."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To complete this setup, you will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An AWS Account with administrative rights to access configuration settings of the service provider.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An Amazon VPC with an EC2 instance"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/zh_cn/vpc/latest/userguide/vpc-getting-started.html"},"Setting up the VPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/EC2_GetStarted.html"},"Launching an EC2 instance"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the instance Security Group, allow ICMP traffic from the VPC CIDR range - this is needed for testing."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A private certificate imported into ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cn/certificate-manager/"},"AWS Certificate Manager (ACM)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/zh_cn/vpn/latest/clientvpn-admin/what-is.html"},"Generating and importing a certificate to ACM")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Windows or Mac system running the latest AWS Client VPN software."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/vpn/client-vpn-download/"},"Download the software"))))),(0,r.kt)("h2",{id:"configure-saml-application"},"Configure SAML Application"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the Casdoor Application, set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Redirect URL")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"urn:amazon:webservices:clientvpn"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"saml_aws_redirect_url.png",src:a(24796).Z,width:"1676",height:"1144"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"SAML reply URL")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:35001"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"saml_aws_reply_url.png",src:a(65705).Z,width:"1506",height:"840"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save the content in the ",(0,r.kt)("inlineCode",{parentName:"li"},"SAML metadata")," as an XML file.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"saml_aws_metadata.png",src:a(65191).Z,width:"2780",height:"748"})),(0,r.kt)("h2",{id:"configure-aws"},"Configure AWS"),(0,r.kt)("h3",{id:"configure-casdoor-as-an-aws-identity-provider"},"Configure Casdoor as an AWS Identity Provider"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the IAM console and select ",(0,r.kt)("strong",{parentName:"p"},"Identity providers")," from the navigation bar.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create a Provider"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify SAML for the Provider Type, add a unique name for this provider, and upload the metadata document - the same file you saved from the Casdoor Application in the previous section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next Step"),". On the next screen, click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"saml_aws_create.png",src:a(35005).Z,width:"2720",height:"1206"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"saml_aws_choose_metadata.png",src:a(59940).Z,width:"1810",height:"1104"})),(0,r.kt)("h3",{id:"create-an-aws-client-vpn-endpoint"},"Create an AWS Client VPN Endpoint"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Amazon VPC console in an AWS Region of your choice.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the left-hand side navigation, select ",(0,r.kt)("strong",{parentName:"p"},"Client VPN Endpoints")," under ",(0,r.kt)("strong",{parentName:"p"},"Virtual Private Network (VPN)"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create Client VPN Endpoint"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the IP range for your remote users in the ",(0,r.kt)("strong",{parentName:"p"},"Client IPv4 CIDR")," field to allocate an IP range.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Server Certificate ARN"),", select the certificate you created.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Authentication Options, select ",(0,r.kt)("strong",{parentName:"p"},"Use user-based authentication"),", then ",(0,r.kt)("strong",{parentName:"p"},"Federated authentication"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"SAML provider ARN"),", select the identity provider you created.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create Client VPN Endpoint"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"saml_aws_vpn_endpoint.png",src:a(52528).Z,width:"2800",height:"704"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"saml_aws_create_vpn.png",src:a(63805).Z,width:"1596",height:"1232"})),(0,r.kt)("h3",{id:"associate-a-client-vpn-with-a-target-vpc"},"Associate a Client VPN with a Target VPC"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Target network associations")," in the Client VPN options, then click ",(0,r.kt)("strong",{parentName:"p"},"Associate target network"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the drop-down menu, select the target VPC and subnet you want to associate your endpoint with."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"saml_aws_target_network.png",src:a(73527).Z,width:"2792",height:"1226"})),(0,r.kt)("h3",{id:"configure-saml-group-specific-authorization"},"Configure SAML Group-Specific Authorization"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the ",(0,r.kt)("strong",{parentName:"p"},"Authorization rules")," tab in your Client VPN options and click ",(0,r.kt)("strong",{parentName:"p"},"Add Authorize rule"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Destination network to enable, specify the IP address of your EC2 instance created in the prerequisites. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"172.31.16.0/20"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under Grant access to, select ",(0,r.kt)("strong",{parentName:"p"},"Allow access to users in a specific access group"),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"casdoor"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide an optional description and click ",(0,r.kt)("strong",{parentName:"p"},"Add authorization rule"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"saml_aws_rule.png",src:a(38859).Z,width:"1636",height:"1228"})),(0,r.kt)("h2",{id:"connect-to-client-vpn"},"Connect to Client VPN"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the Client VPN endpoint you just created. It should now be in the Available state.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Download Client Configuration")," to download the configuration profile to your desktop.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the AWS Client VPN desktop app on your machine.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the top menu, select File and Manage Profiles.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Add Profile and point to the recently downloaded file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should now see the profile in the list on the AWS Client VPN software. Select it and click Connect."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"saml_aws_download.png",src:a(87246).Z,width:"2762",height:"1202"})),(0,r.kt)("video",{src:"/video/saml_aws.mp4",controls:"controls",width:"100%"}))}d.isMDXComponent=!0},59940:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saml_aws_choose_metadata-03a549be89dc751e9fd2d7010b3c1e64.png"},35005:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saml_aws_create-7ba7254466b4227d6e54ef961afa667d.png"},63805:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saml_aws_create_vpn-d8bbc595d25d862d98c407867d78a5b9.png"},87246:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saml_aws_download-90aa0d174201c9b1f5dd07dfaeffc2ac.png"},65191:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saml_aws_metadata-3e50a3c4d4eb20b91f65e4360bc24f1b.png"},24796:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saml_aws_redirect_url-0f2682850b9a51fec5b58831f4f91566.png"},65705:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saml_aws_reply_url-bdeed2e8e71987a8378c75016fec2b0d.png"},38859:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saml_aws_rule-92a9e746b662c901dab47f7f80949371.png"},73527:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saml_aws_target_network-f29fac01d7049a42983061212ba83ef7.png"},52528:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saml_aws_vpn_endpoint-8c18603d3d8947a56ccbbb4773450715.png"}}]);