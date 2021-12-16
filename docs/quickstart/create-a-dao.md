---
sidebar_position: 2
---

# Create your first DAO

For this tutorial, **we'll make a DAO for your reading group**. This will let folks in your reading group vote on which books to read, organize money for snacks, and so on.

## Connect your wallet

To make your first DAO, head to [daodao.zone](https://daodao.zone/) and connect
your [Keplr wallet](https://wallet.keplr.app/).

:::tip
Keplr is a web wallet for interacting with web3 applications in the Cosmoverse. Go ahead and [install it](https://www.keplr.app/) if you don't have it already!
:::

:::danger
Since DAO DAO deploys on the Juno chain, you will need a few $JUNO tokens to deploy your DAO. You can pick some up on [Osmosis](https://osmosis.zone/).
:::

## Create a DAO

Navigate to the [DAO creation page](https://daodao.zone/dao/create).

You will see the basic configurations for your DAO.

:::tip
The UI is full of tooltips. Read them! They'll tell you more about configuration options.
:::

### Basic Config

Every DAO has a name and a description. These will be displayed in the DAO DAO UI and on the chain. These don't need to be unique.

Describe your book club:

> **Name:** "Book Gang"
>
> **Description:** "A DAO for our weekly reading group."


:::tip
These variables - indeed, anything about your DAO - can be modified by future governance proposals.
:::

### Governance Token Config

Every DAO has a governance token, a [cw20-gov](https://github.com/DA0-DA0/dao-contracts/tree/main/contracts/cw20-gov) token native to the DAO. This token is used for voting on DAO proposals.

In this section, you can configure that token. You can give it a full name and a symbol (something you'd read on a ticker).

Try it out:


> **Token Name:** "Book club token"
>
> **Token Symbol:** "BOOKC"

### Token Distribution

Next, you can pick some addresses to distribute tokens to. These addresses will have *voting power* in your DAO relative to their weight.

Sadly, the rest of your friends in the book club aren't as into DAOs as you are, so they don't have Juno addresses yet. That's fine.
We'll give most of the tokens to you for now.


:::tip
To find your Juno address, open Keplr, go to Juno Mainnet, and click on your address to copy it to your clipboard.
:::

Try it out:

> **Address**: [your Juno address] **Amount**: 999
>
> **Address**: juno175q6smvgnuec5e62rs4chnu5cs8d98q2xgf4rx **Amount**: 1

This will mint some $BOOKC, and give almost all of them to you!

### Voting Config

The voting configuration describes how proposals pass. You can look at the tooltips to understand these configurations better. 

For now, we'll just accept the defaults.

### Create DAO

You're ready to make your DAO! Go ahead and press "Create DAO." 

Keplr will ask you to approve the transaction. Approve it.

Afterward, you should see a page for your DAO.

🎉 **Congratulations!** You've made a DAO! 🎉

Continue on to learn how to manage it.
