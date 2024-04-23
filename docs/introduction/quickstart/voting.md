---
sidebar_position: 4
---

# Voting

Now that everyone has joined the DAO and a [proposal has been made](../create-a-proposal), all current members of the DAO can vote on it!

![Proposal vote](/img/quickstart/proposal-vote.png)

### Vote yes!

Go ahead and vote _yes_ on your new proposal and approve the transaction in your wallet. Once your fellow DAO members vote as well, the proposal will pass or fail depending on what everyone thinks of the book!

![Proposal passed](/img/quickstart/proposal-vote-done.png)

Since the proposal passed, you will see a button that says `Execute`. A few things happen when a proposal is executed:

- Any software instructions (i.e. Actions) within the proposal are executed on the blockchain, taking immediate effect.
- If a proposal deposit was required to submit the proposal, and the DAO is configured to return proposal deposits on passed proposals, the proposal deposit will be refunded to the proposer.

Since this DAO has no proposal deposit, and this proposal contains no actions, executing does nothing but change the status of the proposal to `Executed`. However, it is a good habit to execute proposals since it signifies that the proposal process has completed, and it will sometimes be necessary.

:::tip Revoting and early completion

You can configure a DAO to allow revoting on proposals, which means that a voter can change their vote all the way up to the end of the voting period. If revoting is enabled (which can be done on creation or afterwards with the `Update Voting Config` action), the proposal will _not_ complete early since the outcome is not yet determined.

By default, revoting is disabled, which means proposals will pass or fail the moment enough voters have voted to guarantee a specific outcome. At this point, the proposal will be executable (when passed) or closeable (when failed). **Voters who did not get the chance to vote before the proposal outcome was determined may still vote until the end of the voting period to ensure that all members can express their preferences.**

:::
