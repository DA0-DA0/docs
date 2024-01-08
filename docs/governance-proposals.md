---
sidebar_position: 3
---

# Governance proposals

Governance proposals are how DAOs take action. You can think of proposals as the
nervous system of the DAO—members submit and vote on proposals, and if passed,
the DAO _does something_. Proposals are composed of three components: a title, a
description, and actions.

Actions are where things get interesting. They are software instructions that
get executed on the blockchain after a proposal is passed. As a simple example:
an action could pay a contributor by transferring money from the DAO's treasury
to their wallet. The purpose of the DAO DAO UI is to make it easy to do this by
abstracting away the technicalities of the blockchain in an easy-to-use
interface that we call actions.

:::tip Examples

A blockchain software instruction could:

- Deploy a docker container on [Akash](https://akash.network/).
- [Update the
  configuration](https://daodao.zone/dao/juno10h0hc64jv006rr8qy0zhlu4jsxct8qwa0vtaleayh0ujz0zynf2s2r7v8q/proposals/A7)
  of a smart contract.
- Pay a [RPC node
  provider](https://daodao.zone/dao/juno1gpwekludv6vu8pkpnp2hwwf7f84a7mcvgm9t2cvp92hvpxk07kdq8z4xj2/proposals/A7).

Truly anything you can do on a blockchain is supported by DAO DAO DAOs, with the
added benefits of sophisticated governance processes.

:::

The components of a proposal are shown and described below.

![Proposal form](/img/proposal.png)

### Title

A title identifies the purpose of a proposal. It should be concise.

### Description

A description explains in detail what a proposal _is_. This may be a
[constitution](https://daodao.zone/dao/juno10h0hc64jv006rr8qy0zhlu4jsxct8qwa0vtaleayh0ujz0zynf2s2r7v8q/proposals/A1),
legal agreement, justification, or simply a place to document relevant
information. Really it can be anything you want. There are no rules, and you
should feel free to experiment.

For example, if you are submitting a proposal to pay someone's salary, you may
want to explain why you're paying them or what the relevant terms of work are.

You can use [Markdown syntax](https://www.markdownguide.org/basic-syntax/) for
rich formatting.

### Actions

Actions execute when a proposal is passed and executed. These actions let you do
things like _spend_ from the DAO's treasury, add or remove members, _mint_ new
governance tokens, and more.

DAO DAO already has many actions that cover almost every possible action you can
take on a blockchain. For the most part, you can create proposals without
needing to actually write out any software instructions (i.e. transactions) by
hand. The DAO DAO UI abstracts away many of those details for you. If you're
doing something custom or experimental, you can always use a custom message. If
you'd like to create a new action for DAOs to use, [you can do that
too](https://github.com/DA0-DA0/dao-dao-ui/wiki/Adding-an-action-to-DAO-DAO)!

## Multiple choice proposals

The default proposal type is single choice, meaning voters only have the option
to vote `Yes` or `No`, and thus a proposal either passes or fails. You can also
create multiple choice proposals if they have been enabled.

### How do they work?

A multiple choice proposal is just like a single choice proposal, except that
instead of a single set of actions, you can create many labeled options, each
with their own set of actions.

Simply choose the `Multiple Choice` proposal type when creating a new proposal.

![Multiple choice proposal](/img/multiple-choice-proposal.png)

Each option has different actions associated with it.

![Option 1](/img/multiple-choice-proposal-option-1.png)

![Option 2](/img/multiple-choice-proposal-option-2.png)

When you go to vote, the proposal will show each of the options, instead of just
`Yes` and `No`.

![Multiple choice proposal](/img/multiple-choice-proposal-done.png)

### Enable multiple choice proposals

If you create a new DAO, multiple choice proposals are enabled by default. If
you have an existing DAO without multiple choice proposals enabled, you can
enable them by passing a single choice proposal containing the `Enable Multiple
Choice Proposals` action.

On the proposal creation page, click the `Add an action` button.

![Proposal creation form](/img/enable-multiple-choice-add-action.png)

Click on the `DAO Governance` category, and then choose `Enable Multiple Choice
Proposals`.

![DAO Governance category](/img/action-modal-dao-governance-category.png)

![Enable multiple choice action](/img/enable-multiple-choice-dao-governance-category.png)

![Complete proposal](/img/enable-multiple-choice-done.png)

Once you submit, pass, and execute this proposal, multiple choice proposals will
be enabled for the DAO!
