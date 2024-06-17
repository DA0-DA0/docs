---
sidebar_position: 2
---

# Adding a Pre-Proposal Approver

## What is It?
A pre-proposal approver is an address that approves or rejects a proposal from being proposed to a DAO.

## Workflow 

### 1. `UpdatePreProposeInfo` Prop
If a DAO already exists and requires deposits to submit proposals, by default a single pre-propose contract already exists. A proposal is required to update the existing pre-proposal contract to be the new pre-proposal approver contract.  

To update the pre-propose requirements, a DAO can call one of its proposal modules `UpdatePreProposeInfo` entry point. This function creates and associates the new pre-proposal contract to that specific proposal module. 


