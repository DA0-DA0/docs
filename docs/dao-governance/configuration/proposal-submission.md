---
sidebar_position: 2
---

# Proposal submission

A DAO's proposal submission configuration manages the rules around submitting a proposal for voting.

## How to update the proposal submission configuration

To change the proposal submission configuration of a DAO, you must submit a [governance proposal](../proposals/what.md) containing the `Update Proposal Submission Config` action from the `DAO Governance` category.

If you have multiple choice proposals enabled, you will instead see two different actions, one labeled `Update Single Choice Proposal Submission Config` and the other `Update Multiple Choice Proposal Submission Config`. You may configure each proposal type (single and multiple choice) separately, though they should probably be kept in sync so the voting experience is consistent.

## Parameters

You can update all of these parameters with the action(s) mentioned above at any
time.

### Proposal deposit

This is a required deposit someone must put down to create a proposal. This can be the DAO's governance token, if it exists, or any other token on the chain. By default, this is disabled.

#### Refunding proposal deposits

There are three ways to handle proposal deposits:

1. `Always` refund proposal deposits, regardless of whether the proposal passes
   or fails.
2. `Only passed proposals` refund proposal deposits.
3. `Never` refund proposal deposits.

:::tip

You may want to enable this if you are worried about spam.

:::

### Proposal submission policy

This determines who is allowed to submit proposals to your DAO. The options are:

- Only members
- Anyone

It defaults to `Only members`.
