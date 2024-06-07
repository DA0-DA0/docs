"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[717],{3135:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=n(5893),i=n(1151);const s={sidebar_position:1},a="Voting",r={id:"dao-governance/configuration/voting-config",title:"Voting",description:"A DAO's voting configuration determines the rules of the voting process. Things like the passing threshold and voting duration.",source:"@site/docs/dao-governance/configuration/voting-config.md",sourceDirName:"dao-governance/configuration",slug:"/dao-governance/configuration/voting-config",permalink:"/dao-governance/configuration/voting-config",draft:!1,unlisted:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/dao-governance/configuration/voting-config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Revoke Authz Exec",permalink:"/dao-management/authz-exec/revoke-authz-exec"},next:{title:"Proposal submission",permalink:"/dao-governance/configuration/proposal-submission"}},l={},d=[{value:"How to update the voting configuration",id:"how-to-update-the-voting-configuration",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Passing threshold and quorum",id:"passing-threshold-and-quorum",level:3},{value:"Multiple choice proposals",id:"multiple-choice-proposals",level:4},{value:"With quorum enabled",id:"with-quorum-enabled",level:4},{value:"With quorum disabled",id:"with-quorum-disabled",level:4},{value:"Only members execute",id:"only-members-execute",level:3},{value:"Voting duration",id:"voting-duration",level:3},{value:"Allow revoting",id:"allow-revoting",level:3}];function h(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"voting",children:"Voting"}),"\n",(0,t.jsx)(o.p,{children:"A DAO's voting configuration determines the rules of the voting process. Things like the passing threshold and voting duration."}),"\n",(0,t.jsx)(o.h2,{id:"how-to-update-the-voting-configuration",children:"How to update the voting configuration"}),"\n",(0,t.jsxs)(o.p,{children:["To change the voting configuration of a DAO, you must submit a ",(0,t.jsx)(o.a,{href:"/dao-governance/proposals/what",children:"governance proposal"})," containing the ",(0,t.jsx)(o.code,{children:"Update Voting Config"})," action from the ",(0,t.jsx)(o.code,{children:"DAO Governance"})," category."]}),"\n",(0,t.jsxs)(o.p,{children:["If you have multiple choice proposals enabled, you will instead see two different actions, one labeled ",(0,t.jsx)(o.code,{children:"Update Single Choice Voting Config"})," and the other ",(0,t.jsx)(o.code,{children:"Update Multiple Choice Voting Config"}),". You may configure each proposal type (single and multiple choice) separately, though they should probably be kept in sync so the voting experience is consistent."]}),"\n",(0,t.jsx)(o.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(o.p,{children:"You can update all of these parameters with the action(s) mentioned above at any time."}),"\n",(0,t.jsx)(o.h3,{id:"passing-threshold-and-quorum",children:"Passing threshold and quorum"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.em,{children:"passing threshold"})})," is the ",(0,t.jsx)(o.code,{children:"Yes"})," threshold needed to pass a proposal. It defaults to majority (i.e. any votes above 50%). It sounds simple, but it gets trick very fast because it works differently depending on whether or not the quorum is enabled."]}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.em,{children:"quorum"})})," is the proportion of all voting power that must vote for a proposal to be ",(0,t.jsx)(o.strong,{children:"passable"}),". It defaults to 20%. For single choice proposals, quorum can be disabled."]}),"\n",(0,t.jsx)(o.h4,{id:"multiple-choice-proposals",children:"Multiple choice proposals"}),"\n",(0,t.jsx)(o.p,{children:"Multiple choice proposals use quorum in the same way, but they do not have a passing threshold. Instead, as long as the quorum is met, whichever option received more votes (i.e. the plurality of votes) wins. You cannot disable quorum for multiple choice proposals."}),"\n",(0,t.jsx)(o.p,{children:"Read on to understand how passing threshold and quorum affect each other for single choice proposals."}),"\n",(0,t.jsx)(o.h4,{id:"with-quorum-enabled",children:"With quorum enabled"}),"\n",(0,t.jsxs)(o.p,{children:["If your DAO has a quorum set, the passing threshold is only calculated among ",(0,t.jsx)(o.strong,{children:"those who voted"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["For example, with a quorum of 40% and a passing threshold of 75%, a proposal could pass with only 30% of the total voting power having voted ",(0,t.jsx)(o.code,{children:"Yes"})," if exactly 40% of voters vote. Imagine: 40% of the total voting power votes on the proposal. Quorum is met. Of those who voted, 75% vote ",(0,t.jsx)(o.code,{children:"Yes"}),". The rest of the votes are split between ",(0,t.jsx)(o.code,{children:"Abstain"})," and ",(0,t.jsx)(o.code,{children:"No"}),". ",(0,t.jsx)(o.code,{children:"Yes"})," will have won the vote with a 75% threshold of quorum, even though only 30% of the ",(0,t.jsx)(o.em,{children:"total"})," voting power voted ",(0,t.jsx)(o.code,{children:"Yes"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Setting quorum to 0% means that any single voter can pass a proposal by themself. ",(0,t.jsx)(o.em,{children:"This is different from disabling quorum."})]}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsx)(o.p,{children:"Enabling a quorum helps when there is a risk of low participation in a DAO. Large token-based DAOs likely face this risk as membership is fluid and attention is finite. Setting a quorum low enough ensures that the DAO cannot be locked due to lack of sufficient participation. However, setting a quorum too low can lead to proposals passing that do not represent enough member's preferences (if not enough people are paying attention)."})}),"\n",(0,t.jsx)(o.h4,{id:"with-quorum-disabled",children:"With quorum disabled"}),"\n",(0,t.jsxs)(o.p,{children:["If your DAO has no quorum set, the passing threshold is calculated among ",(0,t.jsx)(o.strong,{children:"all possible voters"}),". This is considered an absolute threshold."]}),"\n",(0,t.jsxs)(o.p,{children:["For example, with a passing threshold of 67%, a proposal will pass if 67% of the total voting power voted ",(0,t.jsx)(o.code,{children:"Yes"}),"."]}),"\n",(0,t.jsx)(o.admonition,{type:"caution",children:(0,t.jsx)(o.p,{children:"Threshold and quorum can be very confusing. Please be careful and check your understanding with others before making any changes."})}),"\n",(0,t.jsx)(o.h3,{id:"only-members-execute",children:"Only members execute"}),"\n",(0,t.jsx)(o.p,{children:"If enabled, only members may execute passed proposals. If disabled, anyone can. This defaults to enabled."}),"\n",(0,t.jsx)(o.h3,{id:"voting-duration",children:"Voting duration"}),"\n",(0,t.jsx)(o.p,{children:"This is the maximum time proposals remain open for voting."}),"\n",(0,t.jsx)(o.h3,{id:"allow-revoting",children:"Allow revoting"}),"\n",(0,t.jsx)(o.p,{children:"If enabled, votes can be changed before the voting duration ends. This defaults to disabled."}),"\n",(0,t.jsxs)(o.admonition,{type:"tip",children:[(0,t.jsx)(o.p,{children:"When this is enabled, proposals always remain open for their entire duration. This is because the proposal outcome cannot be determined if votes can be changed."}),(0,t.jsx)(o.p,{children:"When this is disabled, proposals will pass or fail early if sufficient voters cast votes to determine an outcome."})]})]})}function c(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>r,a:()=>a});var t=n(7294);const i={},s=t.createContext(i);function a(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);