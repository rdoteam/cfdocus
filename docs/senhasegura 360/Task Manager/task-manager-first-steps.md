# First steps 

This document provides a step-by-step guide on how to configure senhasegura’s  module.

## Requirements

To use the  module, you’ll need:

* A  with a port for remote access configured according to the system.
* A  with permission to execute scripts remotely on the device.
* .
* .
* .
* .
* .
---
## Register an environment

:::(Info) (Info)
If you already have the desired environment registered in senhasegura, the configuration below is not necessary.
:::

To register an environment in senhasegura, follow the steps below:

1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select .
3. In the upper-right corner, click , represented by the three vertical dots icon, and select .
4. On the  screen:
    1. *: enter a human-readable name for the environment registered.
    2. : check  or  to define whether the environment will be active or inactive.

	:::(Info) (Info)
    The items with an asterisk are mandatory.
    :::

5. Click .

A pop-up window with the message  confirms the action.

:::(Info) (Info)
On the  screen, through the  column, you can edit and disable a registered environment.
- To edit, identify the desired environment in the list or use the filters to search for it, and in the  column, click , represented by the pencil and paper icon.
- To disable the environment, in the  column, click the  and select , represented by the trash can icon.
:::

---
## Register a system

:::(Info) (Info)
If you already have the desired system registered in senhasegura, the configuration below is not necessary.
:::


To register a system in senhasegura, follow the steps below:


1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select .
3. In the upper-right corner, click , represented by the three vertical dots icon, and select .
4. On the  screen:
    1. *: enter a human-readable name for the system registered.
    2. : check  or  to define whether the system will be active or inactive.


:::(Info) (Info)
The items with an asterisk are mandatory.
:::

5. Click .

A pop-up window with the message  confirms the action.

:::(Info) (Info)
On the  screen, through the  column, you can edit and disable a registered system.
- To edit, identify the desired system in the list or use the filters to search for it, and in the  column, click , represented by the pencil and paper icon.
- To disable the system, in the  column, click the  and select , represented by the trash can icon.
:::

---
## Register a reason to run a task

To register a reason that can be used when submitting a task execution request in , follow the steps below.

:::(Info) (Info)
The requirement to provide a reason when requesting the execution of a task is defined during the creation of the access group in which the task is included. For more information, access the document on .
:::


1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select .
3. In the upper-right corner of the  screen, click the  menu, represented by the three vertical dots icon, and select .
4. On the  screen:
    1. *: enter a human-readable name for the reason registered.
    2. *: click the downward arrow to select one of the registered reason types.
    3. *: check  or  to define whether the reason will be active or inactive.

:::(Info) (Info)
The items with an asterisk are mandatory.
:::

5. Click .

A pop-up window with the message  confirms the action.

---

## Register an execution template

To register an execution template that can be used when creating a task in , follow the steps below:

1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select .
3. In the upper-right corner of the  screen, click the  menu, represented by the three vertical dots icon, and select .
4. On the  screen:
    1. *: enter a human-readable name for the template registered. Example: “Linux - Restart services”.
    2. *: check  or  to define whether the template will be active or inactive.
    3. *: click the downward arrow to select one of the available plugins that the template will use.
    4. *: click the downward arrow and select .
    5. : click the downward arrow to select an available playbook.
    6. : click the downward arrow to select an available inventory.
    7. : enter the commands that will be executed in the task.
    :::(Info) (Info)
    The items with an asterisk are mandatory.
    :::
    :::(Info) (Info)
    The  button displays a legend of the TAGs that can be used in the templates.
    :::

The following example shows how TAGs can be used in template creation:


`json
#Check service status
        expect "*$"
        exec "service --status-all"

        #Root user access
        expect "*$"
        exec "sudo su"

        #Add root user password
        expect "*:"
        exec "[#AUTH_PASSWORD#]"

        #Stop service
        expect "*#"
        exec "service [#VARIABLE#] stop"

        #Service status
        expect "*#"
        exec "service [#VARIABLE#] status"

        #Restart service
        expect "*#"
        exec "service [#VARIABLE#] restart"

        #End execution task
        expect "*#"
        end
`

:::(Info) (Info)
At the top of the  screen, click the external link icon, represented by an arrow coming out of a square, to be directed to GitHub, where you can view all templates from the  module.
:::

5. Click .

A pop-up window with the message  confirms the action.

:::(Info) (Info)
On the  screen, through the  column, you can edit, clone, and view the change history of a template.
- To edit, identify the desired execution template in the list or use the filters to search for it, and in the  column, click , represented by the pencil and paper icon.
- To clone the execution template, in the  column, click the  and select , represented by the two sheets of paper icon. During this process, you may change the name of the cloned template or keep the same name as the original template followed by the word  and its identification code.
- To view the change history, in the same , select , represented by the clock icon.
:::

---
## Create an access group

To create an access group that will limit the tasks that users will be able to interact with in , follow the steps below:

1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select .
3. In the upper-right corner of the  screen, click the  menu, represented by the three vertical dots icon, and select .
4. On the  screen:
    1. *: enter a human-readable name for the registered access group.
    2. *: check  or  to determine whether the group will be active or inactive.
    3. : enter a description for this access group.

    :::(Info) (Info)
    Synced users will have their permissions overwritten if synchronization is on. Check their synchronization groups for changes.
    :::
	
    4. In the  tab:
        1. : check the checkbox to require the requester to provide a reason for task execution.
        2. : check the checkbox to demand that task execution only occurs upon approval.
        3. : enter a number indicating the minimum number of approvals required for the requested task execution. This field is enabled only if the  field is checked.
        4. : enter a number indicating the minimum number of rejections required for the requested task execution not to occur. This field is enabled only if the  field is checked.
        5. : check the checkbox to require the request approval to be done at multiple levels.
        6. : check the checkbox to enable users in the access group to download resulting task files.
        7. : check the checkbox to require users to provide a reason for downloading the resulting task files.
        8. *: check  or  to define whether users should provide a governance code when justifying the task execution request.
        9. *: check  or  to define whether the user responsible for the user's department should be automatically consulted as an additional approver for this group and alerted along with the other selected approvers in the  tab.
    :::(Info) (Info)
    The fields *User can download the task resulting files, User must provide a reason for downloading files resulting by the task*, and *Always add user manager to approvers?**  will be removed in future versions.
    :::



    5. In the  tab:
        1. : enter the devices, separated by commas, where the task will be executed.
        2. *: use the checkboxes to select the environments where the task will be executed.
        3. *: use the checkboxes to select the systems where the task will be executed.

    6. In the  tab:
        1. : click the plus icon to open the  screen, select the users to be added to the access group, and click .

    :::(Warning) (Attention)
    senhasegura works with permission levels. If the user added to the  access group is in another group with stricter restrictions, they may not be able to view information within the module.
    :::

    7. In the  tab: 
        1. : click the plus icon to open the  screen, select the approvers to be added to the access group, and click .

    :::(Warning) (Attention)
    If you have chosen multi-level approval for this access group, after adding at least two approvers, you must define the approval level for each one in the  column. The chosen level indicates the approval stage at which each approver will be notified after the task execution request.
    :::

    :::(Info) (Info)
    The approver user must have the minimum PAM Operator profile to access the approval workflow screen.
    :::
    
  :::(Info) (Info)
 The items with an asterisk are mandatory.
  :::


5. Click .
A pop-up window with the message  confirms the action.


## Next






Do you still have questions? Reach out to the .