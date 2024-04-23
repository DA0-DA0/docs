"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[826],{8648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(5893),o=n(1151);const s={sidebar_position:1},i="Create your first DAO",r={id:"dao-management/create-a-dao",title:"Create your first DAO",description:"For this tutorial, we'll make a DAO for your reading group. This will let folks in your reading group vote on which books to read, organize money for snacks, and so on.",source:"@site/docs/dao-management/create-a-dao.md",sourceDirName:"dao-management",slug:"/dao-management/create-a-dao",permalink:"/dao-management/create-a-dao",draft:!1,unlisted:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/dao-management/create-a-dao.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Technical breakdown",permalink:"/introduction/technical-breakdown"},next:{title:"Update DAO Appearance",permalink:"/dao-management/update-info"}},d={},l=[{value:"Install Leap",id:"install-leap",level:2},{value:"Connect your wallet",id:"connect-your-wallet",level:2},{value:"Get some testnet $OSMO",id:"get-some-testnet-osmo",level:2},{value:"Create a DAO",id:"create-a-dao",level:2},{value:"Name and describe your DAO",id:"name-and-describe-your-dao",level:2},{value:"Add the initial members",id:"add-the-initial-members",level:2},{value:"Create DAO",id:"create-dao",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"create-your-first-dao",children:"Create your first DAO"}),"\n",(0,a.jsxs)(t.p,{children:["For this tutorial, ",(0,a.jsx)(t.strong,{children:"we'll make a DAO for your reading group"}),". This will let folks in your reading group vote on which books to read, organize money for snacks, and so on."]}),"\n",(0,a.jsx)(t.p,{children:"To keep things cheap, we'll do everything on the Osmosis testnet. Testnet tokens ($OSMO) have no value, and you can get some for free. More on that in a moment."}),"\n",(0,a.jsx)(t.h2,{id:"install-leap",children:"Install Leap"}),"\n",(0,a.jsxs)(t.p,{children:["To use DAO DAO you'll need a wallet. A wallet is your digital identity on a blockchain. There are many options, but a good choice is the ",(0,a.jsx)(t.a,{href:"https://www.leapwallet.io",children:"Leap wallet"}),". You'll need to install that on your phone or browser before getting started."]}),"\n",(0,a.jsx)(t.p,{children:"Once you've installed Leap, you need to create an account. To do this, open the Leap extension by pressing the puzzle piece icon in the top right of your browser and clicking on the Leap wallet extension."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"puzzle icon",src:n(9988).Z+"",width:"80",height:"80"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Leap wallet extension",src:n(8106).Z+"",width:"622",height:"92"})}),"\n",(0,a.jsx)(t.p,{children:"Once you do that, you'll be directed to a page where you can create a new account."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Leap wallet extension",src:n(3712).Z+"",width:"1184",height:"1662"})}),"\n",(0,a.jsx)(t.p,{children:"Make sure to store your seed phrase somewhere only you'll be able to find it. This is the recovery key in case you ever need to recover your account, like if you lose your device."}),"\n",(0,a.jsx)(t.h2,{id:"connect-your-wallet",children:"Connect your wallet"}),"\n",(0,a.jsxs)(t.p,{children:["To make your first DAO, head to ",(0,a.jsx)(t.a,{href:"https://testnet.daodao.zone/",children:"testnet.daodao.zone"})," and connect your wallet by pressing the ",(0,a.jsx)(t.code,{children:"Log in"})," button."]}),"\n",(0,a.jsx)(t.p,{children:"Once logged in, you will see your Osmosis testnet address. Click on it to copy and save it for the next step."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Copy wallet address",src:n(841).Z+"",width:"816",height:"674"})}),"\n",(0,a.jsx)(t.h2,{id:"get-some-testnet-osmo",children:"Get some testnet $OSMO"}),"\n",(0,a.jsxs)(t.p,{children:["To get some testnet $OSMO, head over to ",(0,a.jsx)(t.a,{href:"https://faucet.testnet.osmosis.zone",children:"faucet.testnet.osmosis.zone"})," and paste your Osmosis address into the form. A bot should send you enough $OSMO to follow this tutorial."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Osmosis faucet",src:n(4842).Z+"",width:"1346",height:"1294"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["We'll stick to the testnet for this tutorial, but once you're ready to build a real DAO, you'll need some mainnet tokens on any of the chains supported by DAO DAO. (The ",(0,a.jsx)(t.a,{href:"https://daodao.zone",children:"mainnet version of DAO DAO"})," is deployed on a handful of chains, including Osmosis mainnet). You can get $OSMO on some centralized exchanges, such as ",(0,a.jsx)(t.a,{href:"https://kraken.com",children:"Kraken"}),", or on a decentralized exchange if you already have cryptocurrencies in the Cosmos ecosystem, like ",(0,a.jsx)(t.a,{href:"https://osmosis.zone",children:"Osmosis' DEX"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"create-a-dao",children:"Create a DAO"}),"\n",(0,a.jsxs)(t.p,{children:["Navigate to the DAO creation page ",(0,a.jsx)(t.a,{href:"https://testnet.daodao.zone/dao/create?chain=osmo-test-5",children:"on testnet"})," (or ",(0,a.jsx)(t.a,{href:"https://daodao.zone/dao/create",children:"on mainnet"}),", if that's your thing)."]}),"\n",(0,a.jsx)(t.h2,{id:"name-and-describe-your-dao",children:"Name and describe your DAO"}),"\n",(0,a.jsx)(t.p,{children:"Every DAO has a name and a description. These will be displayed in the DAO DAO UI and should communicate the purpose of the DAO to the world."}),"\n",(0,a.jsxs)(t.p,{children:["Let's create a DAO called ",(0,a.jsx)(t.code,{children:"Bookclub"}),". We'll make our DAO member-based for simplicity."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"DAO title and description inputs",src:n(2525).Z+"",width:"2144",height:"2250"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["To learn more about the differences between member- and token-based DAOs, read our documentation ",(0,a.jsx)(t.a,{href:"/introduction/whats-a-dao#voting-power",children:"here"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"add-the-initial-members",children:"Add the initial members"}),"\n",(0,a.jsx)(t.p,{children:"Now we can add the initial members of our DAO. If you're making this DAO with friends, add their Osmosis addresses during this step. Otherwise, you can start the DAO with only yourself and add new members via proposals later."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Member weights",src:n(1438).Z+"",width:"2156",height:"2354"})}),"\n",(0,a.jsx)(t.h3,{id:"create-dao",children:"Create DAO"}),"\n",(0,a.jsxs)(t.p,{children:["On the next screen, there are many configuration options available that determine how the DAO behaves. You can ",(0,a.jsx)(t.a,{href:"../dao-governance/configuration/voting.md",children:"read about the available voting configuration options"})," if you like, but for now, we'll accept the defaults and create our DAO!"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Review page",src:n(1303).Z+"",width:"2784",height:"3054"})}),"\n",(0,a.jsxs)(t.p,{children:["Go ahead and press ",(0,a.jsx)(t.code,{children:"Create DAO"})," in the bottom right. If you see an error here, make sure you have some $OSMO in your testnet wallet."]}),"\n",(0,a.jsx)(t.p,{children:"Your wallet will ask you to approve the transaction. Approve it."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Wallet approval prompt",src:n(5062).Z+"",width:"1016",height:"1496"})}),"\n",(0,a.jsxs)(t.p,{children:["\ud83c\udf89 ",(0,a.jsx)(t.strong,{children:"Congratulations!"})," You've made a DAO! \ud83c\udf89"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Created DAO home page",src:n(7445).Z+"",width:"2136",height:"1686"})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7445:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-dao-done-e2239b777d0a9f4be132b52346afd846.png"},1438:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-dao-members-c5693cc0cfbda6d21e1a8988f62942b3.png"},1303:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-dao-review-66805f496c6977470e3f94d5e37bfcc1.png"},2525:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-dao-title-88e9f16b5ea30c7af13925d52f44d101.png"},5062:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-dao-wallet-approve-ccb5ccbd30787457e2c5c97c930b57eb.png"},8106:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},4842:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/osmosis-faucet-5c197081f4ec7afabb4e99b81d662c80.png"},9988:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAM1BMVEUrID0sID0sID4tID0tID4tIT0tIT4yNEQ1N0c8Pk09P05AQlBCRFNtbnuYmaPCwsru7fLtkWJAAAABRUlEQVRYw+2Y25KDIAyGtaeVSpK+/9MuUm3tEFwSsjO9yO/IiM58SshBGH6MNTjQgQ78CuAU5tisOUx/AUMUKhwD71Gs+xEwRIVCHThFlaYqMOiAoQqcdcC5CoxKOdCBrABMgfhIQjtg4hEdEYVAyKxE7QfmoSbR0lkvsQO48Z6DpbUDauAyVMjaZjqJnp+rBbIGdaAIWDpzDzA7ClgCI5ZOAlwItoceFJ/I2qEdiOWYcQtFLbC0GBVvkUwKxgY79LgNa4d2IJf4U354GEYKawcxEBB2Nwk7Yxlol1cNksMyN+8g7ARCnlTKpqO6Z0r8cCspr/rCeVIrEFbE/porKZLk8K5RAPuC5b9zDvw/oPnSzHzxaL68NV+A228R2G9i2G+z+N6XAx3IAk8XxTGOuf3sD5fTeWlv0mO85vZ2Tm06r59PfwFQ5+x4symNWgAAAABJRU5ErkJggg=="},841:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wallet-copy-address-87b0b03adcb4f96d4b64026df47af5ae.png"},3712:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/welcome-to-leap-db2eb83f6f6b08db4ce2378c3256a60d.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(7294);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);