---
sidebar_position: 2
---

# Create your first DAO

For this tutorial, **we'll make a DAO for your reading group**. This will let folks in your reading group vote on which books to read, organize money for snacks, and so on.

To keep things cheap, we'll do everything on the Juno testnet. These testnet tokens have no value, and you can get some for free in Juno's Discord. More on that n a moment.

## Connect your wallet

To make your first DAO, head to [testnet.daodao.zone](https://testnet.daodao.zone/) and connect
your [Keplr wallet](https://wallet.keplr.app/).

:::warning New to the interchain? Get Keplr!
Keplr is a web wallet for interacting with web3 applications in the interchain. Go ahead and [install it](https://www.keplr.app/) if you don't have it already!
:::

## Get some $JUNOX

To get some $JUNOX (testnet $JUNO), join the [Juno Discord](https://discord.com/invite/QcWPfK4gJ2) and put your Juno address in the #faucet channel. A bot should airdrop you enough $JUNOX to follow this tutorial.

:::tip You'll need $JUNO to build a real DAO
We'll stick to the testnet for this tutorial. But, once you're ready to build a real DAO, you'll need some mainnet $JUNO. (The [mainnet version of DAO DAO](https://daodao.zone) is deployed on [the Juno chain](/docs/introduction/what-is-juno)). You can pick some $JUNO up on an exchange like [Osmosis](https://osmosis.zone/) or [JunoSwap](https://junoswap.com/).
:::

## Create a DAO

Navigate to the [DAO creation page](https://daodao.zone/dao/create).
You will see the basic configurations for your DAO.

## Name and describe your DAO

Every DAO has a name and a description. These will be displayed in the DAO DAO UI and on the chain. These don't need to be unique.

Let's create a DAO called "Bookclub."

![](/img/quickstart/create-dao-title.png)


:::tip
The UI is full of tooltips. Read them! They'll tell you more about configuration options.
:::


### Create your DAO's governance token

Every DAO has a governance token, a [cw20-gov](https://github.com/DA0-DA0/dao-contracts/tree/main/contracts/cw20-gov) token native to the DAO. This token is used for voting on DAO proposals.

Let's call our book club's token $BOOKC.

![](/img/quickstart/create-dao-token.png)

### Distribute your governance tokens

Next, you can pick some addresses to distribute tokens to. These addresses will have *voting power* in your DAO relative to their weight.

Sadly, the rest of your friends in the book club aren't as into DAOs as you are, so they don't have Juno addresses yet. That's fine. We'll give most of the tokens to you for now.

![](/img/quickstart/create-dao-distribution.png)


This will mint 200 $BOOKC, giving half to you and half to your treasury.

:::tip
To find your Juno address, open Keplr, go to Juno Mainnet, and click on your address to copy it to your clipboard.
:::


Notice that we've given 100 tokens to our DAO's treasury. These are funds controlled by the DAO&mdash;that is, by governance proposals. We'll return to the treasury later.


### Create DAO

You'll notice some additional configuration here as well. You can [read about those voting configurations](/docs/voting-config) if you like. For now, we'll accept the defaults for now and create our DAO!

Go ahead and press "Create DAO." 

Keplr will ask you to approve the transaction. Approve it.

![](/img/quickstart/create-dao-done.png)

🎉 **Congratulations!** You've made a DAO! 🎉

Continue on to learn how to manage it.
