# How to manage access groups 

This document provides a step-by-step guide on how to create, edit, clone, and reprocess access groups in .

## Path to access
1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select .

---
## Create an access group

To create an access group that will limit the tasks that users will be able to interact with in , follow the steps below:

1. In the upper-right corner of the  screen, click the  menu, represented by the three vertical dots icon, and select .
2. On the  screen:
    1. *: enter a human-readable name for the registered access group.
    2. *: check  or  to determine whether the group will be active or inactive.
    3. : write a description for this access group.


    :::(Info) (Info)
    Synced users will have their permissions overwritten if synchronization is on.   Check their synchronization groups for changes.
    :::
    
  
    4. In the  tab:
         1. : check the checkbox to require the requester to provide a reason for the task execution.
        1. : check the checkbox to demand that task execution only occurs upon approval.
        2. : enter a number to indicate the minimum number of approvals required for the requested task execution. This field is enabled only if the  field is checked.
        3. : enter a number to indicate the minimum number of rejections required for the requested task execution not to occur. This field is enabled only if the  field is checked.
        4. : check the checkbox to require the request approval to be done at multiple levels.
        5. : check the checkbox to enable users in the access group to download resulting task files.
        6. : check the checkbox to require users to provide a reason for downloading the resulting task files.
        7. *: check  or  to define whether users should provide a governance code when justifying the task execution request.
        8. *: check  or  to define whether the user's manager should always be added to the approvers.

        :::(Info) (Info)
        The fields *User can download the task resulting files, User must provide a reason for downloading files resulting by the task*, and *Always add user manager to approvers?**  will be removed in future versions.
        :::


    5. In the  tab:
        1. : enter the devices, separated by commas, where the task will be executed.
        2. *: use the checkboxes to select the environments where the task will be executed.
        3. *: use the checkboxes to select the systems where the task will be executed.

    6. In the  tab:
        1. : click the plus icon to open the  screen, select the users to be added to the access group, and click .
        :::(Info) (Info)
         Users who are in more than one access group will have the settings applied from the most restrictive group.
         :::



    7. In the  tab: 
        1.  : click the plus icon to open the  screen, select the approvers to be added to the access group, and click .
        :::(Warning) (Attention)
         If you have chosen multi-level approval for this access group, after adding at least two approvers, you must define the approval level for each one in the     column. The chosen level indicates the approval stage at which each approver will be notified after the task execution request.
         :::
            
         :::(Info) (Info)
         The approver user must have the minimum PAM Operator profile to access the approval workflow screen.
          :::
        :::(Info) (Info)
        The items with an asterisk are mandatory.
        :::

       




3.  Click .
    
  A pop-up window with the message  confirms the action.

:::(Warning) (Attention)
senhasegura works with permission levels. If the user added to the  access group is in another group with stricter restrictions, they may be unable to view information within the module.
:::


## Clone an access group

When cloning an access group, you inherit the settings from the selected group, thus eliminating the need to manually configure a new group.

### Requirements
* An access group registered in . For more information, access the  section of this document.
---

To clone an access group in , follow the steps below:

1. In the list displayed on the  screen, identify the access group you want to clone or use the filters to search for it.
2. In the  column, click the  and select , represented by the two paper sheets icon.
3. In the  pop-up window, you’ll view a message similar to the one below:


4. Click  to confirm.

The pop-up message  confirms the action.

In the list on the  screen, the new access group will be displayed with the same name as the original group, followed by the word  within parentheses, along with its identifier code. For example, if you cloned an access group named , the new cloned group might be named .


## Edit an access group

### Requirements
* An access group registered in . For more information, access the  section of this document.

---
To edit an access group registered in , follow the steps below:

1. In the list displayed on the  screen, identify the access group you want to edit or use the filters to search for it.
2. In the  column, click , represented by the paper and pencil icon. 
3. On the  screen, make the necessary changes.
4. Click .

A pop-up window with the message  confirms the action.


## Reprocess groups

Group reprocessing is the manual process of updating configurations in all access groups registered in the senhasegura database. This feature is useful when you make changes to the settings of an access group and want to apply them immediately.

:::(Warning) (Attention)
Since group reprocessing updates the accesses according to the new configurations registered, if a user is removed from any group or added to groups with stricter restrictions, they may lose access to credentials.
:::

### Requirements
* An access group registered in . For more information, access the  section of this document.

---
To reprocess access groups registered in , follow the steps below:



1. In the bottom-right corner of the  screen, click .
2. In the  pop-up window, you’ll view a message similar to the one below:
**“Attention: When reprocessing the groups some users may lose access to the credentials.
Are you sure you want to continue?”**


:::(Info) (Info)
This action may take a few seconds depending on the number of access groups and users registered in each group.
:::

3. Click  to confirm.

A pop-up window with the message  confirms the action.

---
## Next





Do you still have questions? Reach out to the .