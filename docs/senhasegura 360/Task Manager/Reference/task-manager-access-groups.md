# Access groups 

In this document, you'll find all the information about the  and  screens of the  module. 


## Path to access
1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and then select .
2. In the side menu, select .

---
This section contains detailed information regarding the  screen, which displays a list of all the access groups registered in .

## Top bar

|  | |
|----|----|
|  | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
| | Represented by the counterclockwise arrow icon, it refreshes the page.|
|  | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report.|
| | Represented by a plus icon, it opens the  screen.
| | Represented by the printer icon, it opens a new page for printing the report.|
|  | Represented by the paper sheet icon, it downloads the report.|
|  | Represented by the clock icon, it opens the  screen. |


## Search fields


| | |
| ----| ---- |
| | Field that filters access groups by their registered name.|
|  | Field that filters access groups by their access to the password. Available options are *First part, Second password*, and *Complete password*. Clear the filter to enable the  option. |
| | Field that filters access groups by their permission to view the password. Available options are  and . Clear the filter to enable the  option.|
|  | Field that filters access groups by the type of approval for viewing. Available options are Require approval and No approval required. Available options are  and . Clear the filter to enable the  option. |
| | Field that filters access groups by the presence of restrictions to access the session. Available options are  and . Clear the filter to enable the  option. |
|  | Field that filters access groups by the need for approval to access the session. Available options are  and . Available options are  and . Clear the filter to enable the  option. |
|  | Field that filters access groups by their permission to change the expiration date of a request. Available options are  and . Clear the filter to enable the  option. |
| | Field that filters access groups by their activation status. Available options are  and . Clear the filter to enable the  option. |

:::(Info) (Info)
The *Part of password, View, Approval for viewing, Session, Approval for session*, and *Change expiration* search fields will be removed in future versions.
:::

## Report fields
  -  access group’s identifier code.
  - . 
  - . 
  -  type of permission granted to the access group. This field will always return the value .
  -  if the option  is marked, the action  will require approval, and therefore, the column  will return the value . Otherwise, the column will be empty.
  -  if the option  is marked, the action  will require a justification, and therefore, the column  will return the value . Otherwise, the column will be empty.
  - 
  -  access group type. In this report, this column will always return the value .
  -  the environments and systems associated with the access group.
  - 
  -  in this column, you’ll find the following options:
    -  represented by the paper and pencil icon, it opens the  screen, where you can edit the configurations of the access group selected.
    -  opens a drop-down menu with the  option which enables the generation of a copy of the cloned access group.

:::(Info) (Info)
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::

### Access group registration screen

This section contains detailed information regarding the  screen, which enables the creation and editing of an access group in .

#### Form fields

| | |
|----|----|
| *| Field for entering a human-readable name for the access group.|
| *| Field for selecting the activation status of the access group. Available options are  and .|
| | Field for entering a description for the access group.|

#### Settings tab

This tab enables the configuration of the actions allowed by this access group and the access controls that must be respected in task management.



| | |
|----|----|
| | Checkbox to define whether users in the access group should provide a justification when requesting task execution. |
|   | Checkbox to determine if task execution requests should undergo an approval workflow.|
| | Field for setting the number of approvals required for a task execution request. Use the up and down arrows, or enter the number manually. : this field is only enabled when the  field is checked. |
| | Field for setting the minimum number of rejections required to prevent the execution of a task. Use the up and down arrows, or enter the number manually. : this field is only enabled when the  field is checked. |
| | Checkbox to define whether task execution requests should undergo a multi-level approval workflow.|




:::(Info) (Info)
This section will be removed in future versions.
:::
This section enables the configuration of actions related to files resulting from task execution.

| | |
|----|----|
| | Checkbox to define whether users in the access group can download files resulting from the task.|
|  | Checkbox to define whether users should provide a reason for downloading files resulting from the task.  |


This section enables the configuration of prerequisites for requesting task execution.

| | |
|----|----|
| * | Checkboxes to determine whether users in the access group should enter a governance code when justifying the request for task execution. Available options are  and . |
| * | Checkboxes to determine whether the user responsible for the user's department should be automatically consulted as an additional approver for this group. This means that this user will be alerted along with the other selected approvers in the  tab. Available options are  and . |

:::(Info) (Info)
The * field will be removed in future versions.
:::


#### Criteria tab
This tab enables the configuration of criteria that determine which tasks will be associated with this access group. The fields *Device, Environments*, and *Systems*, described below, are used as filters to grant access to tasks that have the information registered in these fields.


| | |
|----|----|
|  | Field for entering devices, separated by commas, where the task will be executed.|
| *| List with all environments registered in  Use the  checkbox to select all environments, or check the checkboxes of the environments you want to select. |
| *| List with all systems registered in . Use the  checkbox to select all environments, or check the checkboxes of the systems you want to select. |

#### Users tab
This tab enables the addition of users who will be part of the access group and will therefore be able to request task executions using the data registered in the group.

| |  |
|----|----|
| | Represented by the plus icon, it opens the  screen, where you can search for and select the users to be added to the access group. |
|  | List with all users selected to be added to the access group. The list has the following columns: *trash can* icon to remove the selected user, *Name, Username, E-mail, Creation type, Department, Added by*, and *Added on*. |

#### Approvers tab

This tab enables the addition of users who will be responsible for approving requests in this access group, also specifying their approval levels.

| | |
|----|----|
| | Represented by the plus icon, it opens the Approvers screen, where you can search for and select the users who will be the approvers of the requests associated with this access group. |
| | List with all users selected to be added as approvers to the access group. The list displays the following columns: *trash can icon* to remove the selected approver, *Name, Username, E-mail, Creation type, Department, Added by, Added on*, and *Level*, where you can select the level from 1 to 3, at which the approver will act. |

:::(Info) (Info)
The items with an asterisk are mandatory.
:::