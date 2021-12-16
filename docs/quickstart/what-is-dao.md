---
sidebar_position: 1
---

# What's a DAO?

Decentralized autonomous organizations (DAOs) are collectively owned governance
systems whose governing software is cryptographically bound to obey the
democratic wishes of token holders.

### Proposals

At its simplest, a DAO is an organization where you can vote on proposals.
Proposals are updated to a ledger---their text, whether they passed or failed,
and who voted on them. Proposals can be natural language rules or laws (for
example, you could run a legislature with them), or they can be software. 
When a proposal passes the DAO's voting period, that proposal becomes canonical; it will be shown to have passed in the ledger, and any *proposal messages* (effectively, bits of code) will be executed on the chain.

:::tip
Even the software of the DAO itself can be updated by governance proposals. For
example, the voting rules of the DAO themselves (e.g., how long voting periods
last, what proportion of people need to vote on something for it to pass, etc)
can be modified by governance proposals.
:::

### Governance tokens

DAOs manage voting through *governance tokens*. Like shares in a corporation, governance token determines your voting power.
A person with 80% of a DAO's tokens will be able to pass things autocratically. Distributing tokens evenly will give everyone an even vote, assuming no one trades their tokens.

:::tip
In practice, tokens are programmable. You can prevent transfer, prevent transfer for a certain amount of time, and more.
:::


## What does DAO DAO do?

DAO DAO is a tool for building DAOs in the Cosmoverse.
It allows you to build IBC-enable DAOs---that is, DAOs whose treasuries can hold any token on any blockchain, so long as the chain supports IBC.

DAO DAO
lets you write safe, testable smart
contracts in Rust
using 
[CosmWasm](https://cosmwasm.com/).
By default, it deploys DAOs to the [Juno chain](https://junochain.com/).
For power users,
it lets you make self-sovereign chain for your DAO as well.


Best of all, governance tokens are IBC enabled (cw20-gov) tokens. You can trade
and swap your governance tokens wherever IBC allows.
