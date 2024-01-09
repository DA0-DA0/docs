---
sidebar_position: 2
---

# Proposal submission

Proposal submission parameters are initially set when you create a DAO. Of
course you can always modify them later with a [governance
proposal](/definitions/proposals) containing the `Update Proposal Submission
Config` action from the `DAO Governance` category.

If you have multiple choice proposals enabled, you will instead see two
different actions, one labeled `Update Single Choice Proposal Submission Config`
and the other labeled `Update Multiple Choice Proposal Submission Config`.

The various parameters are described below.

## Proposal deposit

This is a required deposit someone must put down to create a proposal. This can
be the DAO's governance token, if it exists, or any other token on the chain. By
default, this is disabled.

### Refunding proposal deposits

There are three ways to handle proposal deposits:

1. `Always` refund proposal deposits, regardless of whether the proposal passes
   or fails.
2. `Only passed proposals` refund proposal deposits.
3. `Never` refund proposal deposits.

:::tip

You may want to enable this if you are worried about spam.

:::

## Proposal submission policy

This determines who is allowed to submit proposals to your DAO. The options are:

- Only members
- Anyone

It defaults to `Only members`.
