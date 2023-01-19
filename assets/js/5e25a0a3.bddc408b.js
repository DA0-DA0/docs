"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7188],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3},i="Create your first proposal",s={unversionedId:"quickstart/create-a-proposal",id:"quickstart/create-a-proposal",title:"Create your first proposal",description:"After creating a DAO for your bookclub I'm sure",source:"@site/docs/quickstart/create-a-proposal.md",sourceDirName:"quickstart",slug:"/quickstart/create-a-proposal",permalink:"/docs/quickstart/create-a-proposal",draft:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/quickstart/create-a-proposal.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Joining a token-based DAO",permalink:"/docs/quickstart/joining"},next:{title:"Voting",permalink:"/docs/quickstart/vote"}},p={},l=[{value:"Crafting your proposal",id:"crafting-your-proposal",level:2},{value:"Ship it!",id:"ship-it",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-your-first-proposal"},"Create your first proposal"),(0,n.kt)("p",null,"After ",(0,n.kt)("a",{parentName:"p",href:"./create-a-dao"},"creating a DAO for your bookclub")," I'm sure\nyou're busy telling all of your friends to download Keplr so they can\n",(0,n.kt)("a",{parentName:"p",href:"/docs/quickstart/joining"},"join you"),".  Once they join your DAO and the wonderful\nworld of the Cosmoverse, why don't we make a governance proposal for\nthem?"),(0,n.kt)("p",null,"Let's create a proposal to decide what book to read."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you create your proposal before your friends join they won't be\nable to vote on it as they won't have registered to vote in time. Make\nsure that everyone has joined the DAO and staked their tokens before\nmaking your proposal.")),(0,n.kt)("h2",{id:"crafting-your-proposal"},"Crafting your proposal"),(0,n.kt)("p",null,"Since you were the first one here, it's only fair that you suggest\nwhat everyone read next.  Let's create a proposal suggesting the group\nread Murray Bookchin's ",(0,n.kt)("em",{parentName:"p"},"The Next Revolution: Popular Assemblies and\nthe Promise of Direct Democracy"),"."),(0,n.kt)("p",null,"To begin, starting from your DAO's page, navigate to ",(0,n.kt)("strong",{parentName:"p"},"Proposals > New Proposal"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(1153).Z,width:"1706",height:"1456"})),(0,n.kt)("p",null,"Then, fill in the proposal's name and description.\n",(0,n.kt)("img",{src:r(5704).Z,width:"1646",height:"1186"})),(0,n.kt)("admonition",{title:"Actions?",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You'll notice the Actions tag there. ",(0,n.kt)("a",{parentName:"p",href:"/docs/proposal-messages#proposal-actions"},"Proposal actions")," allow you to add rich scripting capabilities to proposal actions","\u2014","commands that execute on the chain when the proposal passes."),(0,n.kt)("p",{parentName:"admonition"},"The proposal we have here is more of a social contract. We don't need anything to change in code.")),(0,n.kt)("h2",{id:"ship-it"},"Ship it!"),(0,n.kt)("p",null,"Now that we're ready, go ahead and press ",(0,n.kt)("strong",{parentName:"p"},"Publish"),".\nKeplr will again ask you to approve the transaction."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(5444).Z,width:"2332",height:"1054"})),(0,n.kt)("p",null,"Once you approve it, you'll see your proposal is live!"),(0,n.kt)("p",null,"Now that we've made a proposal, let's vote on it."))}u.isMDXComponent=!0},5444:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/new-proposal-done-2f08967dd97ad599383711735cecd9b7.png"},1153:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/new-proposal-position-b468d9c03298800c393b6ffb919d14f3.png"},5704:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/new-proposal-97396ac1a16859fc24861de856174d2c.png"}}]);