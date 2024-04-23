---
sidebar_position: 2
---

# Joining and leaving a token-based DAO

The DAO we created in the previous guide was not a token-based DAO. However, you are likely to encounter token-based DAOs soon enough if you are engaging with DAOs, and there are a few things you need to learn before interacting with them.

## Joining

To join a token-based DAO, you must register to vote by staking governance tokens you obtain. Once you register to vote, you can vote on all future proposals. However, you _cannot_ vote on proposals that were created before you registered. This is a safety feature to ensure voting power remains constant once a proposal is created.

To register to vote, first visit the DAO's home page.

![Token-based DAO home page](/img/quickstart/token-based-home.png)

On here you will see:

- how many tokens you have staked
- how many tokens you have unstaked
- how many tokens are currently unstaking
- your voting power

Click the `Stake` or `Manage... stake` button to stake your tokens.

![Manage staking modal](/img/quickstart/manage-staking.png)

By staking your tokens, you are registering those tokens as voting power. Any tokens you do not stake won't count towards your voting power. If you want your votes to matter as much as possible, you'll likely want to stake all of them.

There are some situations where you may not want to stake all of your tokens.
For example:

1. Some DAOs require a proposal deposit be paid in order to create a proposal,
   in an effort to ensure a minimum level of commitment to a proposal. If you
   plan on making a proposal, you may want to leave some tokens unstaked.
2. Some DAOs have an unstaking duration, which is the amount of time you must
   wait after unstaking your tokens before those tokens are available to you. If
   you are holding tokens in a DAO with a non-zero staking duration, and you
   think you may want to sell or trade those tokens quickly in the future, you
   may consider leaving some tokens unstaked.

## Leaving

To leave a token-based DAO, you must unstake all your tokens.

![Staked token membership](/img/quickstart/staked-membership.png)

Click the `Manage your <token> stake` button, and select the `Unstake` tab. On that tab, select the `100%` button to fill in all your tokens, then press `Unstake` in the bottom right.

![Manage staking unstake modal](/img/quickstart/manage-staking-unstake-all.png)

Approve the transaction in your wallet.

Once doing so, you will have to wait the unstaking duration before the tokens are available to you again. While you are waiting, you will also not be able to vote on proposals.

![Unstaking token membership](/img/quickstart/your-membership-unstaking.png)

![Unstaking token modal](/img/quickstart/unstaking-modal.png)

After the unstaking duration, you will need to claim your tokens by clicking on the `Claim your <tokens>` button. After approving the transaction in your wallet, the tokens will be available to you.

![Unstaked all membership](/img/quickstart/your-membership-nothing-staked.png)
