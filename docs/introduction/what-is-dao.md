---
sidebar_position: 2
---

# What's a DAO?

Decentralized autonomous organizations (DAOs) are collectively owned governance
systems whose governing software is cryptographically bound to obey the
democratic wishes of community members.

## Proposals

At its simplest, a DAO is an organization where you can vote on proposals.
Proposals are written to an immutable, public ledger (blockchain) - their text,
whether they passed or failed, and who voted on them. Proposals can be natural
language rules or laws (for example, you could run a legislature with them), or
they can be software.

When a proposal passes the DAO's voting period, that proposal becomes canonical.
It will be as "passed" in the ledger, and any *proposal messages* (effectively,
bits of code) will be executed on the chain, modifying the DAO's state.

:::info

For example, [this proposal](https://www.rawdao.zone/vote/11) in RAW DAO (which
governs the [Junoswap DEX](https://junoswap.com)) has proposal messages
associated with it. These messages will _only_ be executed if the proposal
passes and they will change the unbonding period for LPs on Junoswap
automatically.

:::

The DAO's governance can itself be modified by governance proposals. For
example, the voting rules of the DAO themselves (e.g., how long voting periods
last, what proportion of people need to vote on something for it to pass, etc)
can be modified by governance proposals.

:::tip Changing the rules by which rules are made

You can think of DAOs as a big game of
[Nomic](https://en.wikipedia.org/wiki/Nomic#:~:text=Nomic%20is%20a%20game%20in,done%20afterwards%2C%20and%20doing%20it.). For
example, [this
proposal](https://daodao.zone/dao/juno1czh5dy2kxwwt5hlw6rr2q25clj96sheftsdccswg9qe34m3wzgdswmw8ju/proposals/A9)
in Dog Dao updates the DAOs voting rules to make the voting duration shorter
and, thus, make proposals complete more quickly.

:::

## Governance tokens

Some (not all!) DAOs manage voting through *governance tokens*. Like
shares in a corporation, governance token determines your voting
power. A person with 80% of a DAO's tokens will be able to pass things
autocratically. Distributing tokens evenly will give everyone an even
vote, assuming no one trades their tokens.

:::tip Tokens are programmable.

You can prevent transfer, vest (i.e. slowly unlock) tokens over time,
and more.

:::

## Non-token based DAOs

Most DAOs do not need a token. Those DAOs may use fixed voting weights
to determine voting power. For example, the DAO DAO [Development
Fund](https://daodao.zone/dao/juno130z8079e3dvalal8lw7yu37l99umm0ytzehes00830xl546uu7aqz5akcp)
assigns fixed weights to members. These types of DAOs are often
referred to a "multisigs".

Tokens can be useful when you want very fluid governance with many
members. They also introduce complexity because if your governance
token becomes liquid your DAO will loose control of what members it
has. Non-token based DAOs add and remove members via vote so they
don't have this problem.

Additionally, launching a token with a DAO may invite speculators who
will "invest" in your DAO. This may bring expectations and scrutiny as
others could expect your team to spend time increasing the value of
your governance token. For some DAOs, this is desirable, but many DAOs
may want to focus on building out their product and revenue streams.

The current state of DAOs and the blockchain ecosystem is very token
governance heavy. We enchorage you to think deeply about if that is
the system that actually works best for you when creating a DAO for
your community. In many cases, a member based DAO may be a better
option. You can always migrate to a token based DAO later.
