---
sidebar_position: 1
---

# Diversify your DAO's treasury

So, you have a DAO, but you want its treasury to hold some tokens other than
your governance token.

It's as easy as making an IBC transaction with the DAO's address as the recipient.


## Enabling IBC transfers on Juno

First,  enable IBC transfers in Juno.

In Keplr, go to Settings, then check "Advanced IBC Transfers."

## Sending the tokens to your DAO

Find the coin you want to send, and follow [these
instructions](https://keplr.crunch.help/ibc-guides-troubleshooting/cosmos-ibc-transfers)
to send your tokens over IBC.

Your destination chain will be Juno, and your destination address will be your
DAO's address.

:::danger
Make sure you have the right channel ID. Check the [active IBC
channels](https://keplr.crunch.help/ibc-guides-troubleshooting/how-to-find-the-right-ibc-channel-for-transfers)
for Juno. 
:::
