"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[9817],{34228:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var a=n(67294),r=n(10833),i=n(53438),c=n(44996),l=n(86010),o=n(39960),s=n(13919),m=n(95999);const d="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function E(e){let{href:t,children:n}=e;return a.createElement(o.Z,{href:t,className:(0,l.Z)("card padding--lg",d)},n)}function g(e){let{href:t,icon:n,title:r,description:i}=e;return a.createElement(E,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",u),title:r},n," ",r),i&&a.createElement("p",{className:(0,l.Z)("text--truncate",p),title:i},i))}function h(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(g,{href:t.href,icon:n,title:t.label,description:t.description??(null==r?void 0:r.description)})}function v(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function N(e){let{className:t}=e;const n=(0,i.jA)();return a.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return a.createElement(N,e);const r=(0,i.MN)(t);return a.createElement("section",{className:(0,l.Z)("row",n)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(v,{item:e})))))}var Z=n(30064),_=n(23120),b=n(44364),y=n(1310),w=n(92503);const x="generatedIndexPage_vN6x",I="list_eTzJ",D="title_kItE";function C(e){let{categoryGeneratedIndex:t}=e;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,c.Z)(t.image)})}function M(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.jA)();return a.createElement("div",{className:x},a.createElement(_.Z,null),a.createElement(y.Z,null),a.createElement(b.Z,null),a.createElement("header",null,a.createElement(w.Z,{as:"h1",className:D},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(k,{items:n.items,className:I})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(Z.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function W(e){return a.createElement(a.Fragment,null,a.createElement(C,e),a.createElement(M,e))}},92503:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),i=n(86010),c=n(95999),l=n(86668),o=n(39960);const s="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5";function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:u}}=(0,l.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},d,{id:void 0}));const p=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return r.createElement(t,(0,a.Z)({},d,{className:(0,i.Z)("anchor",u?m:s,d.className),id:n}),d.children,r.createElement(o.Z,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},32244:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(86010),i=n(39960);function c(e){const{permalink:t,title:n,subLabel:c,isNext:l}=e;return a.createElement(i.Z,{className:(0,r.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&a.createElement("div",{className:"pagination-nav__sublabel"},c),a.createElement("div",{className:"pagination-nav__label"},n))}},30064:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(80049),i=n(99861),c=n(92949);function l(e){const{colorMode:t}=(0,c.I)();return a.createElement(a.Fragment,null,a.createElement(r.Z,e),a.createElement("br",null),a.createElement(i.Z,{id:"comments",repo:"casdoor/casdoor",repoId:"MDEwOlJlcG9zaXRvcnkzMDYzNjY5MDA=",category:"Docs comments",categoryId:"DIC_kwDOEkLJtM4CRIiC",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:t,lang:"en",loading:"lazy"}))}}}]);