"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=u(n),d=o,g=k["".concat(l,".").concat(d)]||k[d]||c[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},i="Joining and leaving a token-based DAO",s={unversionedId:"quickstart/joining-leaving-token-based-dao",id:"quickstart/joining-leaving-token-based-dao",title:"Joining and leaving a token-based DAO",description:"The DAO we created in the previous guide was not a token-based DAO. However, you",source:"@site/docs/quickstart/joining-leaving-token-based-dao.md",sourceDirName:"quickstart",slug:"/quickstart/joining-leaving-token-based-dao",permalink:"/docs/quickstart/joining-leaving-token-based-dao",draft:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/quickstart/joining-leaving-token-based-dao.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create your first DAO",permalink:"/docs/quickstart/create-a-dao"},next:{title:"Create your first proposal",permalink:"/docs/quickstart/create-a-proposal"}},l={},u=[{value:"Joining",id:"joining",level:2},{value:"Leaving",id:"leaving",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"joining-and-leaving-a-token-based-dao"},"Joining and leaving a token-based DAO"),(0,o.kt)("p",null,"The DAO we created in the previous guide was not a token-based DAO. However, you\nare likely to encounter token-based DAOs soon enough if you are engaging with\nother DAOs, and there are a few steps needed to interact with them."),(0,o.kt)("h2",{id:"joining"},"Joining"),(0,o.kt)("p",null,"To join a token-based DAO, you must register to vote by staking governance\ntokens you obtain. Once you register to vote, you can vote on all future\nproposals. However, you ",(0,o.kt)("em",{parentName:"p"},"cannot")," vote on proposals that were created before you\nregistered. This is a safety feature to ensure voting power remains constant\nonce a proposal is created."),(0,o.kt)("p",null,"To register to vote, first visit the DAO's home page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Token-based DAO home page",src:n(2272).Z,width:"2152",height:"1978"})),(0,o.kt)("p",null,"On here you will see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"how many tokens you have staked"),(0,o.kt)("li",{parentName:"ul"},"how many tokens you have unstaked"),(0,o.kt)("li",{parentName:"ul"},"how many tokens are currently unstaking"),(0,o.kt)("li",{parentName:"ul"},"your voting power")),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Stake")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage... stake")," button to stake your tokens."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Manage staking modal",src:n(3288).Z,width:"944",height:"1400"})),(0,o.kt)("p",null,"By staking your tokens, you are registering those tokens as voting power. Any\ntokens you do not stake won't count towards your voting power. If you want your\nvotes to matter as much as possible, you'll likely want to stake all of them."),(0,o.kt)("p",null,"There are some situations where you may not want to stake all of your tokens.\nFor example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Some DAOs require a proposal deposit be paid in order to create a proposal,\nin an effort to ensure a minimum level of commitment to a proposal. If you\nplan on making a proposal, you may want to leave some tokens unstaked."),(0,o.kt)("li",{parentName:"ol"},"Some DAOs have an unstaking duration, which is the amount of time you must\nwait after unstaking your tokens before those tokens are available to you. If\nyou are holding tokens in a DAO with a non-zero staking duration, and you\nthink you may want to sell or trade those tokens quickly in the future, you\nmay consider leaving some tokens unstaked.")),(0,o.kt)("h2",{id:"leaving"},"Leaving"),(0,o.kt)("p",null,"To leave a token-based DAO, you must unstake all your tokens."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staked token membership",src:n(1691).Z,width:"972",height:"554"})),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage your <token> stake")," button, and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Unstake")," tab. On\nthat tab, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"100%")," button to fill in all your tokens, then press\n",(0,o.kt)("inlineCode",{parentName:"p"},"Unstake")," in the bottom right."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Manage staking unstake modal",src:n(5950).Z,width:"946",height:"1314"})),(0,o.kt)("p",null,"Approve the transaction in your wallet."),(0,o.kt)("p",null,"Once doing so, you will have to wait the unstaking duration before the tokens\nare available to you again. While you are waiting, you will also not be able to\nvote on proposals."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unstaking token membership",src:n(448).Z,width:"939",height:"573"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unstaking token modal",src:n(9928).Z,width:"944",height:"1266"})),(0,o.kt)("p",null,"After the unstaking duration, you will need to claim your tokens by clicking on\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Claim your <tokens>")," button. After approving the transaction in your\nwallet, the tokens will be available to you."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unstaked all membership",src:n(9279).Z,width:"946",height:"512"})))}c.isMDXComponent=!0},5950:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/manage-staking-unstake-all-7122f49fb9f4a1dc32fdf9bea4cb88cd.png"},3288:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/manage-staking-0d90e41186ceedc2a25803fb853303f8.png"},1691:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/staked-membership-bb29e8b6ca62f50bb813bb937163da1f.png"},2272:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token-based-home-497c231f13ea42fb68a61b86fd68849c.png"},9928:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unstaking-modal-bc44485560cc84dc8c224afe6001c1b5.png"},9279:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/your-membership-nothing-staked-d7cb69938e838f0c5a28d5bebd471637.png"},448:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/your-membership-unstaking-44226723195cbed23e7a407a6123b18d.png"}}]);