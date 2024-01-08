"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7142],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>c});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(o),c=r,m=h["".concat(p,".").concat(c)]||h[c]||d[c]||a;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4910:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:4},s="Voting",i={unversionedId:"voting-config",id:"voting-config",title:"Voting",description:"For any given proposal, your voting power is determined by how many",source:"@site/docs/voting-config.md",sourceDirName:".",slug:"/voting-config",permalink:"/docs/voting-config",draft:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/voting-config.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Governance proposals",permalink:"/docs/governance-proposals"},next:{title:"Diversify your DAO's treasury",permalink:"/docs/recipes/diversify-treasury"}},p={},l=[{value:"Quorum",id:"quorum",level:2},{value:"Passing threshold (%)",id:"passing-threshold-",level:2},{value:"Voting duration (seconds)",id:"voting-duration-seconds",level:2},{value:"Proposal deposit",id:"proposal-deposit",level:2},{value:"Unstaking duration",id:"unstaking-duration",level:2}],u={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"voting"},"Voting"),(0,r.kt)("p",null,"For any given proposal, your voting power is determined by how many\ntokens you had registered to vote at the time the proposal was\ncreated."),(0,r.kt)("p",null,"You may be wondering: why is your voting weight determined by your\nvoting weight at the time the proposal was launched? If we didn't have\nthis feature, DAOs with lots of tokens listed on exchanges could be\nvulnerable to an attack: someone could buy lots of the DAOs tokens,\nmanipulate the vote, then sell the tokens immediately\nafterward. Assuring tokens were registered at proposal creation time\nassures that a DAO members knows ",(0,r.kt)("em",{parentName:"p"},"to whom")," they are making the\nproposal: the people who have tokens registered at the moment the\nproposal goes live."),(0,r.kt)("h1",{id:"voting-configuration"},"Voting configuration"),(0,r.kt)("p",null,"You can change the parameters of voting on your DAO in a variety of\nways. These parameters can be set when you create a DAO, and can be\nmodified after the fact by ",(0,r.kt)("a",{parentName:"p",href:"./governance-proposals"},"governance proposals"),"."),(0,r.kt)("h2",{id:"quorum"},"Quorum"),(0,r.kt)("p",null,"Quorum is the proportion of all staked tokens that must vote for a\nproposal to pass. For example, if quorum is set to 33%, then a\nproposal can only pass when 33% of staked tokens have voted. As with\nvoting, quorum is calculated based on staked tokens at the time of\nproposal creation."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'Threshold and quorum are not the same. Threshold is about the\nproportion of "yes" votes a proposal requires. Quorum is about the\n"voter turnout" a proposal requires.')),(0,r.kt)("h2",{id:"passing-threshold-"},"Passing threshold (%)"),(0,r.kt)("p",null,"Passing threshold can work differently depending on whether or not\nyour DAO has set a quorum."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Threshold of voting weight"),". If your DAO has ",(0,r.kt)("strong",{parentName:"p"},"no quorum set"),',\nthis is the percentage of the DAO\'s voting weight that must vote\n"yes" for a proposal to pass. For example, if threshold is set to\n51%, then a proposal must achieve 51% "yes" votes to pass.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Threshold of quorum"),". If your DAO ",(0,r.kt)("strong",{parentName:"p"},"has a quorum set"),', the\npassing percentage is only calculated among those who voted. For\nexample, with a quorum of 50% and a passing threshold of 50%, a\nproposal could pass with only 25% of the total voting weight having\nvoted "yes." Imagine: 50% of the voting weight votes on the\nproposal. The proposal has passed quorum. Of those that do vote, 50%\nvote "yes." Abstain and no split the rest of the vote. "Yes" will\nhave won the vote with a 50% threshold of quorum, even though only\n25% of the voting weight was represented in the vote.'))),(0,r.kt)("h2",{id:"voting-duration-seconds"},"Voting duration (seconds)"),(0,r.kt)("p",null,"This is how long proposals remain open for voting."),(0,r.kt)("h2",{id:"proposal-deposit"},"Proposal deposit"),(0,r.kt)("p",null,"This is how many tokens someone must put down to create a\nproposal. DAOs may be configured ",(0,r.kt)("em",{parentName:"p"},"not")," to refund proposal deposits if\nthe proposal fails. If you are worried about spam in your DAO, you may\nwant to enable this."),(0,r.kt)("h2",{id:"unstaking-duration"},"Unstaking duration"),(0,r.kt)("p",null,"After someone stakes tokens in your DAO, those tokens cannot be\nimmediately unstaked. The duration for which they remain bonded after\nintending to unstake is determined by the unstaking duration."))}d.isMDXComponent=!0}}]);