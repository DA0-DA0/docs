# Voting

A DAO's voting configuration determines the rules of the voting process. Things like the passing threshold and voting duration.

## How to update the voting configuration

To change the voting configuration of a DAO, you must submit a [governance proposal](../proposals/what.md) containing the `Update Voting Config` action from the `DAO Governance` category.

If you have multiple choice proposals enabled, you will instead see two different actions, one labeled `Update Single Choice Voting Config` and the other `Update Multiple Choice Voting Config`. You may configure each proposal type (single and multiple choice) separately, though they should probably be kept in sync so the voting experience is consistent.

## Parameters

You can update all of these parameters with the action(s) mentioned above at any time.

### Passing threshold and quorum

The _**passing threshold**_ is the `Yes` threshold needed to pass a proposal. It defaults to majority (i.e. any votes above 50%). It sounds simple, but it gets trick very fast because it works differently depending on whether or not the quorum is enabled.

The _**quorum**_ is the proportion of all voting power that must vote for a proposal to be **passable**. It defaults to 20%. For single choice proposals, quorum can be disabled.

#### Multiple choice proposals

Multiple choice proposals use quorum in the same way, but they do not have a passing threshold. Instead, as long as the quorum is met, whichever option received more votes (i.e. the plurality of votes) wins. You cannot disable quorum for multiple choice proposals.

Read on to understand how passing threshold and quorum affect each other for single choice proposals.

#### With quorum enabled

If your DAO has a quorum set, the passing threshold is only calculated among **those who voted**.

For example, with a quorum of 40% and a passing threshold of 75%, a proposal could pass with only 30% of the total voting power having voted `Yes` if exactly 40% of voters vote. Imagine: 40% of the total voting power votes on the proposal. Quorum is met. Of those who voted, 75% vote `Yes`. The rest of the votes are split between `Abstain` and `No`. `Yes` will have won the vote with a 75% threshold of quorum, even though only 30% of the _total_ voting power voted `Yes`.

Setting quorum to 0% means that any single voter can pass a proposal by themself. _This is different from disabling quorum._

{% hint style="info" %}
Enabling a quorum helps when there is a risk of low participation in a DAO. Large token-based DAOs likely face this risk as membership is fluid and attention is finite. Setting a quorum low enough ensures that the DAO cannot be locked due to lack of sufficient participation. However, setting a quorum too low can lead to proposals passing that do not represent enough member's preferences (if not enough people are paying attention).
{% endhint %}

#### With quorum disabled

If your DAO has no quorum set, the passing threshold is calculated among **all possible voters**. This is considered an absolute threshold.

For example, with a passing threshold of 67%, a proposal will pass if 67% of the total voting power voted `Yes`.

{% hint style="warning" %}
Threshold and quorum can be very confusing. Please be careful and check your understanding with others before making any changes.
{% endhint %}

### Only members execute

If enabled, only members may execute passed proposals. If disabled, anyone can. This defaults to enabled.

### Voting duration

This is the maximum time proposals remain open for voting.

### Allow revoting

If enabled, votes can be changed before the voting duration ends. This defaults to disabled.

{% hint style="info" %}
When this is enabled, proposals always remain open for their entire duration. This is because the proposal outcome cannot be determined if votes can be changed.

When this is disabled, proposals will pass or fail early if sufficient voters cast votes to determine an outcome.
{% endhint %}
