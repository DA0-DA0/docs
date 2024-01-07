"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[393],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7468:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:1},s="Create your first DAO",i={unversionedId:"quickstart/create-a-dao",id:"quickstart/create-a-dao",title:"Create your first DAO",description:"For this tutorial, we'll make a DAO for your reading group. This will let",source:"@site/docs/quickstart/create-a-dao.md",sourceDirName:"quickstart",slug:"/quickstart/create-a-dao",permalink:"/docs/quickstart/create-a-dao",draft:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/quickstart/create-a-dao.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"What's a DAO?",permalink:"/docs/introduction/what-is-dao"},next:{title:"Joining and leaving a token-based DAO",permalink:"/docs/quickstart/joining-leaving-token-based-dao"}},l={},d=[{value:"Install Leap",id:"install-leap",level:2},{value:"Connect your wallet",id:"connect-your-wallet",level:2},{value:"Get some testnet $OSMO",id:"get-some-testnet-osmo",level:2},{value:"Create a DAO",id:"create-a-dao",level:2},{value:"Name and describe your DAO",id:"name-and-describe-your-dao",level:2},{value:"Add the initial menbers",id:"add-the-initial-menbers",level:2},{value:"Create DAO",id:"create-dao",level:3}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-your-first-dao"},"Create your first DAO"),(0,o.kt)("p",null,"For this tutorial, ",(0,o.kt)("strong",{parentName:"p"},"we'll make a DAO for your reading group"),". This will let\nfolks in your reading group vote on which books to read, organize money for\nsnacks, and so on."),(0,o.kt)("p",null,"To keep things cheap, we'll do everything on the Osmosis testnet. Testnet tokens\n($OSMO) have no value, and you can get some for free. More on that in a moment."),(0,o.kt)("h2",{id:"install-leap"},"Install Leap"),(0,o.kt)("p",null,"To use DAO DAO you'll need a wallet. A wallet is your digital identity on a\nblockchain. There are many options, but a good choice is the ",(0,o.kt)("a",{parentName:"p",href:"https://www.leapwallet.io"},"Leap\nwallet"),". You'll need to install that on your phone or\nbrowser before getting started."),(0,o.kt)("p",null,"Once you've installed Leap, you need to create an account. To do this, open the\nLeap extension by pressing the puzzle piece icon in the top right of your\nbrowser and clicking on the Leap wallet extension."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"puzzle icon",src:a(6874).Z,width:"80",height:"80"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Leap wallet extension",src:a(7756).Z,width:"622",height:"92"})),(0,o.kt)("p",null,"Once you do that, you'll be directed to a page where you can create a new\naccount."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Leap wallet extension",src:a(3090).Z,width:"1184",height:"1662"})),(0,o.kt)("p",null,"Make sure to store your seed phrase somewhere only you'll be able to find it.\nThis is the recovery key in case you ever need to recover your account, like if\nyou lose your device."),(0,o.kt)("h2",{id:"connect-your-wallet"},"Connect your wallet"),(0,o.kt)("p",null,"To make your first DAO, head to\n",(0,o.kt)("a",{parentName:"p",href:"https://testnet.daodao.zone/"},"testnet.daodao.zone")," and connect your wallet by\npressing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Log in")," button."),(0,o.kt)("p",null,"Once logged in, you will see your Osmosis testnet address. Click on it to copy\nand save it for the next step."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copy wallet address",src:a(74).Z,width:"816",height:"674"})),(0,o.kt)("h2",{id:"get-some-testnet-osmo"},"Get some testnet $OSMO"),(0,o.kt)("p",null,"To get some testnet $OSMO, head over to\n",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.osmosis.zone"},"faucet.testnet.osmosis.zone")," and paste\nyour Osmosis address into the form. A bot should send you enough $OSMO to follow\nthis tutorial."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Osmosis faucet",src:a(983).Z,width:"1346",height:"1294"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We'll stick to the testnet for this tutorial, but once you're ready to build a\nreal DAO, you'll need some mainnet tokens on any of the chains supported by DAO\nDAO. (The ",(0,o.kt)("a",{parentName:"p",href:"https://daodao.zone"},"mainnet version of DAO DAO")," is deployed on a\nhandful of chains, including Osmosis mainnet). You can get $OSMO on some\ncentralized exchanges, such as ",(0,o.kt)("a",{parentName:"p",href:"https://kraken.com"},"Kraken"),", or on a\ndecentralized exchange if you already have cryptocurrencies in the Cosmos\necosystem, like ",(0,o.kt)("a",{parentName:"p",href:"https://osmosis.zone"},"Osmosis' DEX"),".")),(0,o.kt)("h2",{id:"create-a-dao"},"Create a DAO"),(0,o.kt)("p",null,"Navigate to the DAO creation page ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.daodao.zone/dao/create?chain=osmo-test-5"},"on\ntestnet")," (or ",(0,o.kt)("a",{parentName:"p",href:"https://daodao.zone/dao/create"},"on\nmainnet"),", if that's your thing)."),(0,o.kt)("h2",{id:"name-and-describe-your-dao"},"Name and describe your DAO"),(0,o.kt)("p",null,"Every DAO has a name and a description. These will be displayed in the DAO DAO\nUI and should communicate the purpose of the DAO to the world."),(0,o.kt)("p",null,"Let's create a DAO called ",(0,o.kt)("inlineCode",{parentName:"p"},"Bookclub"),". We'll make our DAO member-based for\nsimplicity."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DAO title and description inputs",src:a(9290).Z,width:"2144",height:"2250"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about the differences between member- and token-based DAOs, read\nour documentation ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/what-is-dao#voting-power"},"here"),".")),(0,o.kt)("h2",{id:"add-the-initial-menbers"},"Add the initial menbers"),(0,o.kt)("p",null,"Now we can add the initial members of our DAO. If you're making this DAO with\nfriends, add their Osmosis addresses during this step. Otherwise, you can start\nthe DAO with only yourself and add new members via proposals later."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Member weights",src:a(8637).Z,width:"2156",height:"2354"})),(0,o.kt)("h3",{id:"create-dao"},"Create DAO"),(0,o.kt)("p",null,"On the next screen, there are many configuration options available that\ndetermine how the DAO behaves. You can ",(0,o.kt)("a",{parentName:"p",href:"/docs/voting-config"},"read about the available voting\nconfiguration options")," if you like, but for now, we'll\naccept the defaults and create our DAO!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Review page",src:a(1690).Z,width:"2784",height:"3054"})),(0,o.kt)("p",null,"Go ahead and press ",(0,o.kt)("inlineCode",{parentName:"p"},"Create DAO")," in the bottom right. If you see an error here,\nmake sure you have some $OSMO in your testnet wallet."),(0,o.kt)("p",null,"Your wallet will ask you to approve the transaction. Approve it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wallet approval prompt",src:a(8461).Z,width:"1016",height:"1496"})),(0,o.kt)("p",null,"\ud83c\udf89 ",(0,o.kt)("strong",{parentName:"p"},"Congratulations!")," You've made a DAO! \ud83c\udf89"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Created DAO home page",src:a(59).Z,width:"2136",height:"1686"})))}c.isMDXComponent=!0},59:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-dao-done-e2239b777d0a9f4be132b52346afd846.png"},8637:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-dao-members-c5693cc0cfbda6d21e1a8988f62942b3.png"},1690:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-dao-review-66805f496c6977470e3f94d5e37bfcc1.png"},9290:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-dao-title-88e9f16b5ea30c7af13925d52f44d101.png"},8461:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-dao-wallet-approve-ccb5ccbd30787457e2c5c97c930b57eb.png"},7756:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/osmosis-faucet-5c197081f4ec7afabb4e99b81d662c80.png"},6874:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAM1BMVEUrID0sID0sID4tID0tID4tIT0tIT4yNEQ1N0c8Pk09P05AQlBCRFNtbnuYmaPCwsru7fLtkWJAAAABRUlEQVRYw+2Y25KDIAyGtaeVSpK+/9MuUm3tEFwSsjO9yO/IiM58SshBGH6MNTjQgQ78CuAU5tisOUx/AUMUKhwD71Gs+xEwRIVCHThFlaYqMOiAoQqcdcC5CoxKOdCBrABMgfhIQjtg4hEdEYVAyKxE7QfmoSbR0lkvsQO48Z6DpbUDauAyVMjaZjqJnp+rBbIGdaAIWDpzDzA7ClgCI5ZOAlwItoceFJ/I2qEdiOWYcQtFLbC0GBVvkUwKxgY79LgNa4d2IJf4U354GEYKawcxEBB2Nwk7Yxlol1cNksMyN+8g7ARCnlTKpqO6Z0r8cCspr/rCeVIrEFbE/porKZLk8K5RAPuC5b9zDvw/oPnSzHzxaL68NV+A228R2G9i2G+z+N6XAx3IAk8XxTGOuf3sD5fTeWlv0mO85vZ2Tm06r59PfwFQ5+x4symNWgAAAABJRU5ErkJggg=="},74:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wallet-copy-address-87b0b03adcb4f96d4b64026df47af5ae.png"},3090:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/welcome-to-leap-db2eb83f6f6b08db4ce2378c3256a60d.png"}}]);