# Tasks 

In this document, you'll find all the information about the , , and  screens of the  module.

## Path to access
1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select .

---
This section contains detailed information regarding the  screen, which displays a report with all the tasks registered in .

## Top bar


|  |    |
|----|----|
|  | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| | Represented by the counterclockwise arrow icon, it refreshes the page.|
|  | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| | Represented by the plus sign, it opens the  screen. |
|  | Represented by the printer icon, it opens a new page for printing the report.|
|  | Represented by the paper sheet icon, it downloads the report. |
|  | Represented by the clock icon, it opens the  screen.|

## Search fields

|   |  | 
|-----|----| 
|  | Human-readable name of the task to be executed. | 
|  | Name of the user who created the task.  | 
|   | Field that filters tasks by the period in which they were included in senhasegura. Use this field to enter the initial date of the task inclusion period. Format: MM/DD/YYYY. Clicking the downward arrow opens a calendar so you can select the desired date. | 
|  | Field that filters tasks by the period in which they were included in senhasegura. Use this field to enter the final date of the task inclusion period. Format: MM/DD/YYYY. Clicking the downward arrow opens a calendar so you can select the desired date. | 
|  | State of the task. The available options are  and . | 
|   | Environment in which the task will be executed. | 
|  | System in which the task will be executed.  | 
|  | Keywords to help identify and filter the task. | 

## Report fields
* : the task’s numerical identification code.
* .
* : date and time when the task was included in the system.
* .
* .
* .
* .
* .
* : in this column, you’ll find the following options:
    * : represented by the paper and pencil icon, it opens the  screen, where task settings can be edited.
    * : opens a dropdown menu with the options: *, *, , and *Disable*.

:::(Info) (Info)

The report displays 30 records per page.
To go to the next screen, click the forward button at the end of the report.
:::


### Task screen

This section contains detailed information regarding the  screen, which enables the configuration of a task to be executed in .


#### Main information tab




This section enables the input of general task information.


| |  | 
|----|----| 
| * | Field for entering a human-readable name for the registered task. | 
| * | Field for entering the environment in which the task will be executed.| 
| *  | Field for entering the system in which the task will be executed.| 
|  | Field for entering keywords to help identify and filter the task.| 




This section enables the selection of the plugin and template that will execute the task.

|  |  | 
|----|----| 
| | Field for entering the plugin used for task execution. The downward arrow opens a list with the registered plugins.  | 
| * | Field for entering the template used for task execution. The downward arrow opens a list with the  type templates registered. | 


This section enables the optional inclusion of new variables during task execution.

|  | | 
|----|----| 
|  | Option for entering new variables. The plus icon opens the  and  fields where you can enter the identifier and value of the variables. The  icon deletes the added variable. | 


This section enables the input of the credential that will be used to authenticate to the device where the task will be executed.

| |                                                                                                                  | 
|-----|----| 
|  | Checkbox that defines whether a registered credential should be used to authenticate to the device where the task will be executed. : checking this box enables the  field. | 
|         | Field for entering the access credential used to authenticate to the device where the task will be executed. The downward arrow opens a list with the registered credentials. | 
|                                | Field for entering a credential that isn’t registered in senhasegura. : This field is only available when the checkbox  is not checked. | 
|                      | Checkbox that defines whether the credential itself will be used to authenticate to the device where the task will be executed. | 

:::(Info) (Info)
When informing the , the system uses this information to locate a credential with this username on each device to perform authentication.
:::

#### Devices for execution tab

|    |  |
|----|----|
|  | Option for entering devices where the task will be executed. The  icon opens the  screen where you can filter devices by *ID, Device name, Management, Type, Vendor, Product*, and *Site*. Use the checkbox next to the device to select it, or click the checked checkbox to select all listed devices. Use the  button to proceed or the  button to quit. |

:::(info) (Info)
The items with an asterisk are mandatory.
:::

### Run task screen

This section contains detailed information regarding the  screen, which enables the submission of a task execution request in .


:::(Info) (Info)
The  option will only be available if there is a device associated with the task execution. For more information, access the document on .
:::
#### Form fields

|  | |
|----|----|
|   | Field for entering the reason for task execution. The downward arrow opens a list with all registered reasons. |
|  | Field for entering the governance code used to register access requests. |
| | Field for entering a descriptive text with the reason for task execution. |

:::(Info) (Info)
The fields above may be accompanied by an asterisk to indicate that they are mandatory. Their mandatory status is defined in the  tab when .
:::

:::(Info) (Info)
After filling out this form, if   requires task execution to go through an approval workflow, you’ll be able to view the status of this process on the  and  screens. Approvers, on the other hand, will be able to view and manage requests assigned to them on the  and  screens.
:::