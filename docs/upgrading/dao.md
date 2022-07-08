# Upgrading a DAO

To upgrade a beta DAO to a v1 DAO:

1. Create a new proposal.
2. Press the "Add Component +" button and select the "☯️ Upgrade to V1"
   template.

The template will then walk you through the steps to migrate to your
new V1 DAO. After you fill out the template, make sure to double check
that the new DAO is configured correctly.

A good way of testing that your new DAO is correct is to make a
new proposal in the new one called "Acceptance of V1 DAO". Then,
have members vote on the proposal. If everyone votes and the proposal
passes, its a good sign that your DAO is configured correctly.

## Why upgrade

By upgrading from beta to V1 you'll continue to receive new feature
releases from DAO DAO and start using
[audited](https://github.com/DA0-DA0/dao-contracts/releases/tag/v1.0.0)
smart contracts.

The beta frontend and contracts will eventually be moved to
legacy.daodao.zone and stop receiving new feature releases.

## Upgrading DAOs when your DAO is not the admin of its token.

If you created your token somewhere other than DAO DAO and imported it
into DAO DAO the default migration template will not work for
you.

This is because your DAO is likely not the admin of its token
contract. By default, the migration template will attempt to set the
admin and minter of the token contract to the new DAO, your DAO not
being the admin makes this not possible.

To migrate a DAO to a v1 DAO if you are not the admin of the token
contract:

1. Create a new proposal to migrate the DAO.
2. Add the "☯️ Upgrade to V1" template.
3. Follow the instructions to create a new V1 DAO.
4. Make note of the address of the new DAO and then delete the
   template.
5. Add a "🐋 Migrate Contract" template.
   - For the address put the address of your DAO's staking contract.
   - For the code ID put 430 (this is the ID of the v1 staking contract).
   - For the message field put `{"from_beta":{}}`.
6. Add an "🍄 Update Contract Admin" template.
   - For the address put the address of your staking contract.
   - For the new admin put the address of your new V1 DAO.
7. Add an "🌳 Update Staking Config" template.
   - For the staking address input the address of your staking contract.
   - For the owner put the address of your new V1 DAO.
   - Leave the unstaking duration unchanged.
8. Add an "🎭 Update Config" template.
   - In the description field add a link to your new DAO so folks can
     find it after the migration.
9. (optional) If you would like to lock the current DAO, add a "🏖
   Pause DAO" template that pauses the DAO forever.

If you need help with these steps, please feel free to ping @ekez in
the DAO DAO Discord.  
