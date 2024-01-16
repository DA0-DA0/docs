"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[738],{9846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=t(5893),i=t(1151);const s={sidebar_position:2},o="Joining and leaving a member-based DAO",d={id:"quickstart/joining-leaving-member-based-dao",title:"Joining and leaving a member-based DAO",description:"As explained in [_What's a",source:"@site/docs/quickstart/joining-leaving-member-based-dao.md",sourceDirName:"quickstart",slug:"/quickstart/joining-leaving-member-based-dao",permalink:"/quickstart/joining-leaving-member-based-dao",draft:!1,unlisted:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/quickstart/joining-leaving-member-based-dao.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create your first DAO",permalink:"/quickstart/create-a-dao"},next:{title:"Joining and leaving a token-based DAO",permalink:"/quickstart/joining-leaving-token-based-dao"}},r={},c=[{value:"Joining (adding)",id:"joining-adding",level:2},{value:"Leaving (removing)",id:"leaving-removing",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"joining-and-leaving-a-member-based-dao",children:"Joining and leaving a member-based DAO"}),"\n",(0,a.jsxs)(n.p,{children:["As explained in ",(0,a.jsx)(n.a,{href:"../introduction/whats-a-dao#members-multisig-replacement",children:(0,a.jsx)(n.em,{children:"What's a\nDAO?"})}),", member-based\nDAOs have static membership, meaning the DAO must pass a proposal to add or\nremove members. Members cannot independently decide to join or leave a\nmember-based DAO."]}),"\n",(0,a.jsxs)(n.p,{children:["You may want to read the ",(0,a.jsx)(n.a,{href:"/features/proposals/what",children:"proposal explanation\ndoc"})," to understand how proposals work in DAOs\nbefore proceeding."]}),"\n",(0,a.jsx)(n.h2,{id:"joining-adding",children:"Joining (adding)"}),"\n",(0,a.jsxs)(n.p,{children:["To add a new member to a member-based DAO, an existing member must submit a\nproposal to do so. To begin, starting from your DAO's page, navigate to\n",(0,a.jsx)(n.strong,{children:"Proposals > New Proposal"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Create proposal button",src:t(4841).Z+"",width:"2164",height:"1988"})}),"\n",(0,a.jsxs)(n.p,{children:["Enter the details of your new proposal, and then click the ",(0,a.jsx)(n.code,{children:"Add an action"}),"\nbutton."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Add an action button",src:t(634).Z+"",width:"2154",height:"1364"})}),"\n",(0,a.jsxs)(n.p,{children:["In the action category selection modal, select the ",(0,a.jsx)(n.code,{children:"DAO Governance"})," category."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"DAO Governance category",src:t(4455).Z+"",width:"962",height:"1218"})}),"\n",(0,a.jsxs)(n.p,{children:["Then, choose the ",(0,a.jsx)(n.code,{children:"Manage Members"})," action."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Manage Members action",src:t(4365).Z+"",width:"2098",height:"1604"})}),"\n",(0,a.jsx)(n.p,{children:"From here, you can add new members, update existing members' voting powers, and\nremove existing members. In this example, we'll just add a new member."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Add Meow",src:t(4483).Z+"",width:"2088",height:"800"})}),"\n",(0,a.jsx)(n.admonition,{title:"Voting weight",type:"tip",children:(0,a.jsx)(n.p,{children:"For Meow's voting weight, we can choose any whole number greater than zero.\nSince the DAO was created with a single member with a voting weight of 1, we\nwill choose 1 for Meow so that the members have equal voting power. If we\ninstead gave Meow a voting weight of 3, they would have 75% of the DAO's total\nvoting power, and the current member would only have 25%."})}),"\n",(0,a.jsx)(n.p,{children:"All that's left to do is publish, vote on, and then execute the proposal."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Execute proposal",src:t(6597).Z+"",width:"2174",height:"2388"})}),"\n",(0,a.jsx)(n.p,{children:"Once passed, executing the proposal will activate the software instructions\ncontained in the proposal, which in this case adds Meow to the DAO."}),"\n",(0,a.jsx)(n.p,{children:"Now that it has been executed, Meow is in the DAO!"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"DAO&#39;s members tab with Meow",src:t(1596).Z+"",width:"2170",height:"2254"})}),"\n",(0,a.jsx)(n.h2,{id:"leaving-removing",children:"Leaving (removing)"}),"\n",(0,a.jsxs)(n.p,{children:["To remove a member from a member-based DAO, the process is identical to adding a\nnew member. However, instead of adding an address under the ",(0,a.jsx)(n.code,{children:"Members to add/update"})," heading, we will add an address under the ",(0,a.jsx)(n.code,{children:"Members to remove"}),"\nheading."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Remove Meow",src:t(1466).Z+"",width:"2092",height:"794"})}),"\n",(0,a.jsx)(n.p,{children:"Passing and executing this proposal will kick Meow out of the DAO, and they will\nno longer be able to vote on future proposals."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"If a proposal was created when Meow was a member of the DAO, they will still be\nable to vote on it. Membership changes only take effect for future proposals."})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},4455:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/add-member-action-modal-954a132ce1bafee613c3b1e5ac02f857.png"},634:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/add-member-add-action-bd344cccdd6e02aec9467f5432f30bcc.png"},4483:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/add-member-add-meow-39fb590cdda802014c0288a4d01b51f2.png"},1596:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/add-member-done-59b9050487025357b9a8ca3498be6ab4.png"},4365:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/add-member-manage-members-1d1eb18e212d2f89b22934eb837e11cd.png"},6597:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/add-member-proposal-execute-8f394f77e4181d25a3fcd198a26591b1.png"},4841:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/create-proposal-button-e36a68c4d98d4ffb7c60b21446b6549b.png"},1466:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/remove-member-action-17cbd73b6034f644ed23d48ce38e2faa.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var a=t(7294);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);