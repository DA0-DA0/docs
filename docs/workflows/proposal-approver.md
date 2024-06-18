---
sidebar_position: 2
---

# Adding a Pre-Proposal Approver

## What is It?
A pre-proposal approver is an assigned address that must approve proposals before they can be voted on.

## Workflow

### A. From A New DAO
When creating a new DAO, an approver can be enabled in the advanced configurations available. An address, profile or DAO name may be specified as the approver. 

![Advnaced Settings](/img/quickstart/create-dao-advanced-approval.png)
<!-- :::warning
Improperly configuring the approver may result in a DAO being unable to recieve proposals.
::: -->

### B. With An `UpdatePreProposeInfo` Proposal
If a DAO already exists and requires deposits to submit proposals, by default a single pre-propose contract exists. A proposal is required to update the existing pre-proposal contract to the new pre-proposal approver contract. 

To update the pre-propose requirements, a DAO can call a the proposal module entry point `UpdatePreProposeInfo`. This function creates and associates the new pre-proposal contract to that specific proposal module. 

#### Proposal JSON
```json
{"update_pre_propose_info":{"info":{"module_may_propose":{"info":{"code_id" 420, "msg": "<base64-msg-for-encoding>","admin": "<you-dao-here>","funds":[], "label":"<your-dao-pre-proposal-approver-single>"}}}}}
```

### 2. Approving Proposals
Any DAO delegated as a proposal approver is able to make use of the **apps tab**, located in their daos home page. 

First, copy and paste the [DAO DAO link](https://daodao.zone) into the apps URL browser. 


We can now navigate to the proposal requiring our decision as the approval DAO, and create a proposal to broadcast the decision.
![Advnaced Settings](/img/quickstart/proposal-approver.png)

Alternatively, a custom [execute smart contract proposal](../dao-governance/actions/cosmwasm) from the approval dao may be proposed to manually broadcast the decision.
```json
## approve 
{"extension": {"msg": {"approve": {"id": <proposal-id>}}}}

## reject
{"extension": {"msg": {"reject": {"id": <proposal-id>}}}}
```