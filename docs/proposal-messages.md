---
sidebar_position: 3
---

# Governance proposals

Governance proposals are how DAOs change their state. Governance
proposals are composed of three components: a title, a description,
and proposal messages.

Proposal messages are where things get interesting. Proposal messages
are "transactions" that will get executed if the proposal is passed. As
a simple example: a proposal message could pay a contributor.

:::info

The word "transaction" above may be a little confusing if you're new
to blockchains and smart contracts. Transactions on a blockchain are
what update the chain's state. They can do all sorts of things. For
example a transaction can:

- Deploy a docker container on [Akash](https://akash.network/).
- [Update the configuration](https://www.rawdao.zone/vote/11) of a
  smart contract.
- Pay a [RPC node
  provider](https://daodao.zone/dao/juno1gpwekludv6vu8pkpnp2hwwf7f84a7mcvgm9t2cvp92hvpxk07kdq8z4xj2/proposals/A7).

Truly, anything that you can do on a blockchain you can do
automatically and via governance with DAO DAO.

:::

## Title

This is the human-readable title of your proposal. It will appear in
voting screens.

## Description

This is the human-readable description of your proposal. You can use [Markdown
syntax](https://www.markdownguide.org/basic-syntax/) for rich formatting.

## Proposal messages

Proposal messages are actions that execute when the proposal
passes. These messages let you do things like *mint* new governance
tokens, *spend* from the shared treasury, and more.

DAO DAO has a number of predefined message templates which mean that,
for the most part, you can create proposals without needing to
actually write out the transactions that you'd like executed should it
pass. If you're doing something custom, you can always use a custom
message. If you'd like to contribute a message template to DAO DAO
[you can do that
too](https://github.com/DA0-DA0/dao-dao-ui/wiki/Adding-an-action-to-DAO-DAO)!
 
