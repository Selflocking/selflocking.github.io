"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[9643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Overview",description:"Using Casdoor as SAML IdP",keywords:["SAML","IdP"]},o=void 0,s={unversionedId:"how-to-connect/saml/overview",id:"how-to-connect/saml/overview",title:"Overview",description:"Using Casdoor as SAML IdP",source:"@site/docs/how-to-connect/saml/overview.md",sourceDirName:"how-to-connect/saml",slug:"/how-to-connect/saml/overview",permalink:"/fr/docs/how-to-connect/saml/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/saml/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Using Casdoor as SAML IdP",keywords:["SAML","IdP"]},sidebar:"tutorialSidebar",previous:{title:"SAML",permalink:"/fr/docs/category/saml"},next:{title:"AWS Client VPN",permalink:"/fr/docs/how-to-connect/saml/aws"}},l={},p=[{value:"Configuration in SP",id:"configuration-in-sp",level:3},{value:"Configuration in Casdoor IdP",id:"configuration-in-casdoor-idp",level:3},{value:"User profile",id:"user-profile",level:3},{value:"An example",id:"an-example",level:3}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Casdoor can now be used as a SAML IdP. Up to this point, Casdoor has supported the main features of SAML 2.0."),(0,r.kt)("h3",{id:"configuration-in-sp"},"Configuration in SP"),(0,r.kt)("p",null,"In general, the SP requires three required fields: ",(0,r.kt)("inlineCode",{parentName:"p"},"Single Sign-On"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Issuer"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Public Certificate"),". Most SPs can obtain these fields by uploading the XML Metadata file or the XML Metadata URL for autocompletion."),(0,r.kt)("p",null,"The metadata of the SAML endpoint in Casdoor is ",(0,r.kt)("inlineCode",{parentName:"p"},"<Endpoint of casdoor>/api/saml/metadata?application=admin/<application name>"),". Suppose the endpoint of Casdoor is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://door.casdoor.com"),", and it contains an application called ",(0,r.kt)("inlineCode",{parentName:"p"},"app-built-in"),". The XML Metadata endpoint will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"https://door.casdoor.com/api/saml/metadata?application=admin/app-built-in\n")),(0,r.kt)("p",null,"You can also find the metadata in the application edit page. Click the button to copy the URL and paste it into the browser to download the XML Metadata."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"metadata",src:n(88161).Z,width:"1807",height:"505"})),(0,r.kt)("h3",{id:"configuration-in-casdoor-idp"},"Configuration in Casdoor IdP"),(0,r.kt)("p",null,"Casdoor supports both GET and POST ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMLResponse"),". Casdoor needs to know what types of requests the SP supports when Casdoor sends the ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMLResponse")," to the SP. You need to configure the application in Casdoor based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMLResponse")," type supported by your SP."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you fill in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Reply URL"),", Casdoor will send the ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMLResponse")," by ",(0,r.kt)("strong",{parentName:"p"},"POST")," Request. If the Reply URL is empty, Casdoor will use ",(0,r.kt)("strong",{parentName:"p"},"GET")," request. You might wonder how Casdoor knows the ",(0,r.kt)("inlineCode",{parentName:"p"},"Reply URL")," of the SP if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Reply URL")," is empty. Actually, Casdoor can get the URL called ",(0,r.kt)("inlineCode",{parentName:"p"},"AssertionConsumerServiceURL")," by parsing the ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMLRequest")," and send the request with ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMLResponse")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"AssertionConsumerServiceURL"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"Reply URL")," will overwrite the ",(0,r.kt)("inlineCode",{parentName:"p"},"AssertionConsumerServiceURL")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMLRequest"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Reply URL"),": Type in the URL of the ACS verifying the SAML response."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Reply URL",src:n(96040).Z,width:"727",height:"251"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Redirect URL"),": Type in a unique name. This may be called ",(0,r.kt)("inlineCode",{parentName:"p"},"Audience")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity ID")," in your SP. Make sure you fill the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Redirect URL")," here as in your SP."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Entity ID",src:n(4277).Z,width:"743",height:"229"})))),(0,r.kt)("h3",{id:"user-profile"},"User profile"),(0,r.kt)("p",null,"After successfully logging in, the user profile in the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMLResponse")," from Casdoor has three fields. The attributes in the XML and the attributes of the user in Casdoor are mapped as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"XML Attribute Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"User field"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Email"),(0,r.kt)("td",{parentName:"tr",align:"center"},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"DisplayName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"displayName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"name")))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SAML_2.0"},"https://en.wikipedia.org/wiki/SAML_2.0")," for more information about SAML and its different versions."),(0,r.kt)("h3",{id:"an-example"},"An example"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/russellhaering/gosaml2"},"gosaml2")," is a SAML 2.0 implementation for Service Providers based on etree and goxmldsig, a pure Go implementation of XML digital signatures. We use this library to test the SAML 2.0 in Casdoor as shown below."),(0,r.kt)("p",null,"Suppose you can access Casdoor through ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7001/"),", and your Casdoor contains an application called ",(0,r.kt)("inlineCode",{parentName:"p"},"app-built-in"),", which belongs to an organization called ",(0,r.kt)("inlineCode",{parentName:"p"},"built-in"),". The URLs, ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:6900/acs/example")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:6900/saml/acs/example"),", should be added to the Redirect URLs in ",(0,r.kt)("inlineCode",{parentName:"p"},"app-built-in"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "crypto/x509"\n    "fmt"\n    "net/http"\n\n    "io/ioutil"\n\n    "encoding/base64"\n    "encoding/xml"\n\n    saml2 "github.com/russellhaering/gosaml2"\n    "github.com/russellhaering/gosaml2/types"\n    dsig "github.com/russellhaering/goxmldsig"\n)\n\nfunc main() {\n    res, err := http.Get("http://localhost:7001/api/saml/metadata?application=admin/app-built-in")\n    if err != nil {\n        panic(err)\n    }\n\n    rawMetadata, err := ioutil.ReadAll(res.Body)\n    if err != nil {\n        panic(err)\n    }\n\n    metadata := &types.EntityDescriptor{}\n    err = xml.Unmarshal(rawMetadata, metadata)\n    if err != nil {\n        panic(err)\n    }\n\n    certStore := dsig.MemoryX509CertificateStore{\n        Roots: []*x509.Certificate{},\n    }\n\n    for _, kd := range metadata.IDPSSODescriptor.KeyDescriptors {\n        for idx, xcert := range kd.KeyInfo.X509Data.X509Certificates {\n            if xcert.Data == "" {\n                panic(fmt.Errorf("metadata certificate(%d) must not be empty", idx))\n            }\n            certData, err := base64.StdEncoding.DecodeString(xcert.Data)\n            if err != nil {\n                panic(err)\n            }\n\n            idpCert, err := x509.ParseCertificate(certData)\n            if err != nil {\n                panic(err)\n            }\n\n            certStore.Roots = append(certStore.Roots, idpCert)\n        }\n    }\n\n    randomKeyStore := dsig.RandomKeyStoreForTest()\n\n    sp := &saml2.SAMLServiceProvider{\n        IdentityProviderSSOURL:      metadata.IDPSSODescriptor.SingleSignOnServices[0].Location,\n        IdentityProviderIssuer:      metadata.EntityID,\n        ServiceProviderIssuer:       "http://localhost:6900/acs/example",\n        AssertionConsumerServiceURL: "http://localhost:6900/v1/_saml_callback",\n        SignAuthnRequests:           true,\n        AudienceURI:                 "http://localhost:6900/saml/acs/example",\n        IDPCertificateStore:         &certStore,\n        SPKeyStore:                  randomKeyStore,\n    }\n\n    http.HandleFunc("/v1/_saml_callback", func(rw http.ResponseWriter, req *http.Request) {\n        err := req.ParseForm()\n        if err != nil {\n            rw.WriteHeader(http.StatusBadRequest)\n            return\n        }\n        samlReponse := req.URL.Query().Get("SAMLResponse")\n        assertionInfo, err := sp.RetrieveAssertionInfo(samlReponse)\n        if err != nil {\n            fmt.Println(err)\n            rw.WriteHeader(http.StatusForbidden)\n            return\n        }\n        fmt.Println(assertionInfo)\n        if assertionInfo.WarningInfo.InvalidTime {\n            fmt.Println("here12:", assertionInfo.WarningInfo.InvalidTime)\n            rw.WriteHeader(http.StatusForbidden)\n            return\n        }\n\n        if assertionInfo.WarningInfo.NotInAudience {\n            fmt.Println(assertionInfo)\n            fmt.Println("here13:", assertionInfo.WarningInfo.NotInAudience)\n            rw.WriteHeader(http.StatusForbidden)\n            return\n        }\n\n        fmt.Fprintf(rw, "NameID: %s\\n", assertionInfo.NameID)\n\n        fmt.Fprintf(rw, "Assertions:\\n")\n\n        for key, val := range assertionInfo.Values {\n            fmt.Fprintf(rw, "  %s: %+v\\n", key, val)\n        }\n        fmt.Println(assertionInfo.Values.Get("FirstName"))\n        fmt.Fprintf(rw, "\\n")\n\n        fmt.Fprintf(rw, "Warnings:\\n")\n        fmt.Fprintf(rw, "%+v\\n", assertionInfo.WarningInfo)\n    })\n\n    println("Visit this URL To Authenticate:")\n    authURL, err := sp.BuildAuthURL("")\n    if err != nil {\n        panic(err)\n    }\n\n    println(authURL)\n\n    println("Supply:")\n    fmt.Printf("  SP ACS URL      : %s\\n", sp.AssertionConsumerServiceURL)\n\n    err = http.ListenAndServe(":6900", nil)\n    if err != nil {\n        panic(err)\n    }\n}\n')),(0,r.kt)("p",null,"Run the above code, and the console will display the following message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Visit this URL To Authenticate:\nhttp://localhost:7001/login/saml/authorize/admin/app-built-in?SAMLRequest=lFVbk6K8Fv0rFvNo2QR...\nSupply:\n  SP ACS URL      : http://localhost:6900/v1/_saml_callback\n")),(0,r.kt)("p",null,"Click the URL to authenticate, and the login page of Casdoor will be displayed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"login",src:n(48770).Z,width:"2560",height:"1462"})),(0,r.kt)("p",null,"After authenticating, you will receive the response messages as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"response",src:n(92241).Z,width:"2560",height:"375"})))}c.isMDXComponent=!0},4277:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/saml_entityId-02cf13e2debc60f1c7babe47bb443cbf.png"},48770:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/saml_login-bf1964a645b97ac59818a2d352a733aa.png"},88161:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/saml_metadata-0511209f4c6ccd88259d4438388eadae.png"},96040:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/saml_replyURL-54e1796b344daaab144af1999228412e.png"},92241:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/saml_response-b3ad831adea4c2d5b78f6ffa5e410ab6.png"}}]);