"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},i="Upgrading a DAO",l={unversionedId:"upgrading/dao",id:"upgrading/dao",title:"Upgrading a DAO",description:"To upgrade a beta DAO to a v1 DAO:",source:"@site/docs/upgrading/dao.md",sourceDirName:"upgrading",slug:"/upgrading/dao",permalink:"/docs/upgrading/dao",draft:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/upgrading/dao.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Executing smart contracts",permalink:"/docs/recipes/executing-smart-contracts"},next:{title:"Upgrading a multisig",permalink:"/docs/upgrading/multisig"}},p={},d=[{value:"Why upgrade",id:"why-upgrade",level:2},{value:"Upgrading DAOs when your DAO is not the admin of its token.",id:"upgrading-daos-when-your-dao-is-not-the-admin-of-its-token",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrading-a-dao"},"Upgrading a DAO"),(0,r.kt)("p",null,"To upgrade a beta DAO to a v1 DAO:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new proposal."),(0,r.kt)("li",{parentName:"ol"},'Press the "Add Component +" button and select the "\u262f\ufe0f Upgrade to V1"\ntemplate.')),(0,r.kt)("p",null,"The template will then walk you through the steps to migrate to your\nnew V1 DAO. After you fill out the template, make sure to double check\nthat the new DAO is configured correctly."),(0,r.kt)("p",null,'A good way of testing that your new DAO is correct is to make a\nnew proposal in the new one called "Acceptance of V1 DAO". Then,\nhave members vote on the proposal. If everyone votes and the proposal\npasses, its a good sign that your DAO is configured correctly.'),(0,r.kt)("h2",{id:"why-upgrade"},"Why upgrade"),(0,r.kt)("p",null,"By upgrading from beta to V1 you'll continue to receive new feature\nreleases from DAO DAO and start using\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DA0-DA0/dao-contracts/releases/tag/v1.0.0"},"audited"),"\nsmart contracts."),(0,r.kt)("p",null,"The beta frontend and contracts will eventually be moved to\nlegacy.daodao.zone and stop receiving new feature releases."),(0,r.kt)("h2",{id:"upgrading-daos-when-your-dao-is-not-the-admin-of-its-token"},"Upgrading DAOs when your DAO is not the admin of its token."),(0,r.kt)("p",null,"If you created your token somewhere other than DAO DAO and imported it\ninto DAO DAO the default migration template will not work for\nyou."),(0,r.kt)("p",null,"This is because your DAO is likely not the admin of its token\ncontract. By default, the migration template will attempt to set the\nadmin and minter of the token contract to the new DAO, your DAO not\nbeing the admin makes this not possible."),(0,r.kt)("p",null,"To migrate a DAO to a v1 DAO if you are not the admin of the token\ncontract:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new proposal to migrate the DAO."),(0,r.kt)("li",{parentName:"ol"},'Add the "\u262f\ufe0f Upgrade to V1" template.'),(0,r.kt)("li",{parentName:"ol"},"Follow the instructions to create a new V1 DAO."),(0,r.kt)("li",{parentName:"ol"},"Make note of the address of the new DAO and then delete the\ntemplate."),(0,r.kt)("li",{parentName:"ol"},'Add a "\ud83d\udc0b Migrate Contract" template.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For the address put the address of your DAO's staking contract."),(0,r.kt)("li",{parentName:"ul"},"For the code ID put 430 (this is the ID of the v1 staking contract)."),(0,r.kt)("li",{parentName:"ul"},"For the message field put ",(0,r.kt)("inlineCode",{parentName:"li"},'{"from_beta":{}}'),"."))),(0,r.kt)("li",{parentName:"ol"},'Add an "\ud83c\udf44 Update Contract Admin" template.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For the address put the address of your staking contract."),(0,r.kt)("li",{parentName:"ul"},"For the new admin put the address of your new V1 DAO."))),(0,r.kt)("li",{parentName:"ol"},'Add an "\ud83c\udf33 Update Staking Config" template.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For the staking address input the address of your staking contract."),(0,r.kt)("li",{parentName:"ul"},"For the owner put the address of your new V1 DAO."),(0,r.kt)("li",{parentName:"ul"},"Leave the unstaking duration unchanged."))),(0,r.kt)("li",{parentName:"ol"},'Add an "\ud83c\udfad Update Config" template.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the description field add a link to your new DAO so folks can\nfind it after the migration."))),(0,r.kt)("li",{parentName:"ol"},'(optional) If you would like to lock the current DAO, add a "\ud83c\udfd6\nPause DAO" template that pauses the DAO forever.')),(0,r.kt)("p",null,"If you need help with these steps, please feel free to ping @ekez in\nthe DAO DAO Discord."))}u.isMDXComponent=!0}}]);