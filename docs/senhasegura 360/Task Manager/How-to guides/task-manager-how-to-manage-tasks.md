# How to manage tasks 

This document provides a step-by-step guide on how to create, edit, run, schedule, disable, enable, and view the details of tasks in .

## Path to access
1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select .

## Create a task

### Requirements
* Being included in an access group. For more information, access the document on .
---
To create a task in , follow the steps below:

1. In the upper-right corner of the  screen, click the  menu, represented by the three vertical dots icon, and select .
2. On the  screen, navigate through the following tabs:
    1.  tab:
        1. *: enter a human-readable name to identify the task created.
        2. *: click the downward arrow to select the environment where the task will be executed.
        3. *: click the downward arrow to select the system where the task will be executed.
        4. : enter keywords to help identify and filter the task.
        5. : click the downward arrow to select the task’s executor plugin.
        6. *: click the downward arrow to select the template to run the task.
        7. : click the plus icon to add one or more variables. After clicking the plus icon, enter an  and a  for the variable. Click the  icon to remove the added variable.
        8. : check the checkbox to define that a registered credential is used to authenticate to the device where the task will be executed.
        9. : this field is enabled when checking the checkbox above. Use the downward arrow to select one of the registered credentials.
        10. : check the checkbox to use your own credential to authenticate to the device where the task will be executed.
        11. : unchecking the  field enables this field. Use it to enter a credential that is not registered in senhasegura.
        
        
      12.  tab:
          1. : click the plus icon to open the  screen and associate one or more devices with the created task.
          2. Click  to proceed with adding the devices or  to quit the action. Click the  icon to remove an added device. 

    :::(Info) (Info)
    The items with an asterisk are mandatory.
    :::

:::(Info) (Info)
As soon as the task execution begins, a separate operation is created for each involved device. Therefore, each device will have its own execution log, and the success or failure of the task execution on one device doesn’t prevent or affect the execution of the next.
:::

3. Click .



## Edit a task
### Requirements
* A task registered in . For more information, access the  section of this document.
---
To edit a task registered in , follow the steps below:


1. In the list displayed on the  screen, identify the task you want to edit or use the filters to search for it.
2. In the  column, click , represented by the paper and pencil icon. 
3. On the  screen, make the necessary changes.
4. Click .

A pop-up window with the message  confirms the action.

5. Click the  icon in the upper-right corner of the screen to close it.


## Run a task
### Requirements
* A task registered in . For more information, access the  section of this document.
* A device associated with the task.
---

To run a task registered in , follow the steps below:


1. In the list displayed on the  screen, identify the task you want to run or use the filters to search for it. 
2. In the  column, click the three vertical dots icon and select , represented by the play icon.
3. On the  screen:
    1. : click the downward arrow to select one of the registered reasons.
    2. : enter the governance code.
    3. : enter a descriptive text with the reason for running the task.

:::(Info) (Info)
The fields above may be accompanied by an asterisk to indicate that they are mandatory. Their mandatory status is defined in the  tab when .
:::


4. Click .

:::(Info) (Info)
If this task was registered in an access group that requires approval to run, you can find more information on how to track the approval workflow status in the document on .
:::


## Schedule a task

### Requirements
* A task registered in . For more information, access the  section of this document.
---
To schedule the execution of a task registered in , follow the steps below:

1. In the list displayed on the  screen, identify the task you want to schedule or use the filters to search for it. 
2. In the  column, click the three vertical dots icon and select , represented by the clock icon.
3. On the  screen, in the bottom-right corner, click .
4. On the  screen:
    1. : click the downward arrow to select one of the registered reasons.
    2. : enter the governance code.
    3. : enter a descriptive text with the reason for scheduling the task.
    4. : check the checkboxes to select the days you want the task execution to occur.
    5. : check the checkboxes to select the periods of the day you want the task execution to occur.
    6. : define the minimum interval between executions. In the first field, enter a number between 0 and 60, and in the second field, click the downward arrow to select *Minutes, Hours, Days*, or *Months*.

:::(Info) (Info)
The *Reason, Governance Code*, and *Justification* fields may be accompanied by an asterisk to indicate that they are mandatory. Their mandatory status is defined in the  tab when .
:::


5. Click .

:::(Info) (Info)
If this task was registered in an access group that requires approval to run, you can find more information on how to track the approval workflow status in the document on .
:::



## Disable a task

### Requirements
* An active task registered in . For more information, access the  section of this document.
---
To disable a task registered in , follow the steps below:

1. In the list displayed on the  screen, identify the task you want to disable or use the filters to search for it.
2. In the  column, click the  and select , represented by the trash can icon.
3. In the  pop-up window, you’ll view a message similar to the one below:


4. Click  to confirm.
The pop-up message  confirms the action.
5. Click the  icon in the upper-right corner to close the window.



## Enable a task

### Requirements
* A disabled task registered in . For more information, access the  section of this document.

---
To enable a task registered in , follow the steps below:

1. On the  screen, locate the  filter among the search fields and select .
2. Click .
3. From the list of disabled tasks, identify the task you want to enable or use the filters to search for it.
4. In the  column, click the  and select , represented by the check icon.
5. In the  pop-up window, you’ll view a message similar to the one below:


6. Click  to confirm.
The pop-up message  confirms the action.
6. Click the  icon in the upper-right corner to close the window.



## View task details

### Requirements
* A task registered in . For more information, access the  section of this document.
---
To view the details of a task registered in , follow the steps below:


1. In the list displayed on the  screen, identify the task you want to view or use the filters to search for it.
2. In the  column, click the  and select , represented by the three horizontal bars icon.
3. On the  screen, view a report with the following task details:  *ID, Total, Processed, Error, Status, Requester, Request date, Environment, System, Tags, Execution type*, and *Action* column.
    1. In the  column, click , represented by the three horizontal bars icon.
    2. On the  screen, view a report with the following operation details of the selected task: *ID, Task name, Environment, System, Tags, Device, Status, Result*, and *Action* column.
        1. Identify the operation whose details you want to view, and in the  column, click , represented by the magnifying glass icon.
        2. On the  screen, view all the details regarding the operation, such as its credential and device, *Requester, Request date, Scheduling date, Operation*, and *Status*. Also view the details regarding the attempt to execute the operation such as *Template, Version, Start, End*, a message informing if the operation execution was successful, and *Logs*.

:::(Info) (Info)
You can also view the details of a task through the path  A task in the list  column  (represented by the three vertical bars icon)  screen  An operation in the list  column  (represented by the magnifying glass icon)  screen
:::

---
## Next





Do you still have questions? Reach out to the .