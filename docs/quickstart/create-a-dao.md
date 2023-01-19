---
sidebar_position: 1
---

# Create your first DAO

For this tutorial, **we'll make a DAO for your reading group**. This
will let folks in your reading group vote on which books to read,
organize money for snacks, and so on.

To keep things cheap, we'll do everything on the Juno testnet. These
testnet tokens have no value, and you can get some for free in Juno's
Discord. More on that in a moment.

## Install Keplr

To use DAO DAO you'll need a wallet. A wallet is your digital identity
on the blockchain. DAO DAO uses the [Keplr
wallet](https://wallet.keplr.app/). You'll need to install that before
getting started.

Once you've installed Keplr you'll need to create an account. To do
this open the Keplr extension by pressing the puzzle piece icon in the
top right of your browser and clicking on the Keplr logo. Once you do
that you'll be directed to a page where you can create a new account.

Make sure to store your seed phrase somewhere only you'll be able to
find it.

If you'd like a video walkthrough of this DAO DAO member @case has
made a nice one you can find
[here](https://www.youtube.com/watch?v=jN-ns9lu6O0).

## Connect your wallet

To make your first DAO, head to
[testnet.daodao.zone](https://testnet.daodao.zone/) and connect your
[Keplr wallet](https://wallet.keplr.app/) by pressing the connect
wallet button in the top left.

## Get some $JUNOX

To get some $JUNOX (testnet $JUNO), join the [Juno
Discord](https://discord.com/invite/QcWPfK4gJ2) and put your Juno
address in the #faucet channel by sending a message in the form
`$request <your address>`. A bot should airdrop you enough $JUNOX to
follow this tutorial.

You can get your Juno testnet address by pressing the copy icon on the
wallet display in the DAO DAO sidebar once you're connected.

![](static/img/copy-wallet.jpg)

:::tip

We'll stick to the testnet for this tutorial. But, once you're ready
to build a real DAO, you'll need some mainnet $JUNO. (The [mainnet
version of DAO DAO](https://daodao.zone) is deployed on [the Juno
chain](/docs/more-info/what-is-juno)). You can get Juno on
[Kraken](https://kraken.com), or on a decentralized exchange like
[Osmosis](https://osmosis.zone) or [Junoswap](https://junoswap.com).
:::

## Create a DAO

Navigate to the DAO creation page [on testnet](https://testnet.daodao.zone/) (or [on mainnet](https://daodao.zone/dao/create), if that's your thing).
You will see the basic configurations for your DAO. 

## Name and describe your DAO

Every DAO has a name and a description. These will be displayed in the
DAO DAO UI and on the chain. These don't need to be unique.

Let's create a DAO called "Bookclub." We'll make our DAO a membership
based DAO (as opposed to a token-based DAO, in which voting weight is
allocated via _governance tokens_, which act as fungible shares).

![](static/img/quickstart/create-dao-title.png)

:::tip

To learn more about the differences between membership- and
token-based DAOs, read our documentation
[here](/docs/introduction/what-is-dao.md#non-token-based-daos).

:::

## Add the initial menbers

Now we can add the initial members of our DAO. If you're making this
DAO with friends, add their Juno addresses during this
step. Otherwise, you can start the DAO with only yourself and add new
members via proposals later.

![](/img/quickstart/member-weights.png)

:::tip

To find your Juno address, open Keplr, press the dropdown at the top
and select "Juno Testnet", and click on your address to copy it to
your clipboard.

:::

### Create DAO

You'll notice some additional configuration here as well. You can
[read about those voting configurations](/docs/voting-config.md) if you
like. For now, we'll accept the defaults for now and create our DAO!

Go ahead and press "Create DAO." If you see an error here, please make sure that you have some
$JUNOX in your testnet wallet.

Keplr will ask you to approve the transaction. Approve it.

![](static/img/quickstart/create-dao-done.png)

🎉 **Congratulations!** You've made a DAO! 🎉

Continue on to learn how to manage it.
