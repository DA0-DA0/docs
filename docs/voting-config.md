---
sidebar_position: 4
---

# Voting

For any given proposal, your voting power is determined by how many tokens you had registered to vote at the time the proposal was created.

:::caution
Can't vote on a proposal, even though you have registered tokens to vote? Most likely, the proposal was created before you staked the tokens!
:::

You may be wondering: why is your voting weight determined by your voting weight at the time the proposal was launched? If we didn't have this feature, DAOs with lots of tokens listed on exchanges could be vulnerable to an attack: someone could buy lots of the DAOs tokens, manipulate the vote, then sell the tokens immediately afterward. Assuring tokens were registered at proposal creation time assures that a DAO members knows _to whom_ they are making the proposal: the people who have tokens registered at the moment the proposal goes live.

# Voting configuration

You can change the parameters of voting on your DAO in a variety of ways. These parameters can be set when you create a DAO, and can be modified after the fact by [governance proposals](proposal-messages).

## Quorum

Quorum is the proportion of all staked tokens that must vote for a proposal to pass. For example, if quorum is set to 33%, then a proposal can only pass when 33% of staked tokens have voted. As with voting, quorum is calculated based on staked tokens at the time of proposal creation.

:::caution
Threshold and quorum are not the same. Threshold is about the proportion of "yes" votes a proposal requires. Quorum is about the "voter turnout" a proposal requires.
:::

## Passing threshold (%)


Passing threshold can work differently depending on whether or not your DAO has set a quorum.

- **Threshold of voting weight**. If your DAO has **no quorum**, this is the percentage of the DAO's voting weight that must vote "yes" for a proposal to pass. For example, if threshold is set to 51%, then a proposal must achieve 51% "yes" votes to pass.

- **Threshold of quorum**. If your DAO **has quorum**, the passing percentage is only calculated among those who voted. For example, with a quorum of 50% and a passing threshold of 50%, a proposal could pass with only 25% of the total voting weight having voted "yes." Imagine: 50% of the voting weight votes on the proposal. The proposal has passed quorum. Of those that do vote, 50% vote "yes." Abstain and no split the rest of the vote. "Yes" will have won the vote with a 50% margin, even though only 25% of the voting weight was represented in the vote.

## Voting duration (seconds)

This is how long proposals remain open for voting

## Proposal deposit

This is how many tokens someone must put down to create a proposal.

## Unstaking duration

After someone stakes tokens in your DAO, those tokens cannot be immediately unstaked. The duration for which they remain bonded after intending to unstake is determined by the unstaking duration.
