# Operations 

In this document, you'll find all the information about the  and  screens of the  module.

## Paths to access
1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and then select .
2. In the side menu, select . 
---


1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and then select .
2. In the side menu, select   A task from the list  column  An execution from the list  column  (represented by the three horizontal bars icon) .

---


This section contains detailed information regarding the  screen, which displays a report containing all the operations performed during the execution of a task by device.

## Top bar

|  | |
|----|----|
|  | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
| | Represented by the counterclockwise arrow icon, it refreshes the page.                                                      |
| | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| | Represented by the printer icon, it opens a new page for printing the report. |
|   | Represented by the paper sheet icon, it downloads the report.|
|  | Represented by the clock icon, it opens the  screen. |



| | |
|----|----|
|  | Field that filters operations by their numerical identification code.  |
|  | Field that filters operations by the device in which they were performed.|
|  | Field that filters operations by their status. Available options are *Scheduled, In execution, Successfully completed, Error, Cancelled, Waiting approval*, and *Expired*. Clear the field to enable the  option. |

## Report fields 
 
 - : 
 - : registered name of the task in which the operation was performed.
 - : environment registered for the task execution. 
 - : system registered for the task execution. 
 - : keywords registered to help identify and filter the task. 
 - .      
 - .
 - : the operation outcome.                                            
  - : in this column, you access:
     - : represented by the magnifying glass icon, it opens the  screen, where you can view the details of the selected operation. 

:::(Info) (Info)
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.
:::

### Operation details screen

This section contains detailed information regarding the  screen of the  module, which displays the details of a selected operation.

|  | |
|----|----|
|  | Type of credential, credential username, device name, and device IP address. Ex.: Local administrator - usrudonopass[ centos (10.66.33.17)] |
| | For punctual requests, this field displays the name of the user who requested the operation, whereas, for scheduled executions, it displays . |
|    | Date and time when the request was submitted. Format: MM/DD/YYYY and HH:MM:SS. |
| | Date and time for when the operation was scheduled. For punctual operations, the date and time refer to the moment when the user requested the execution. Format: MM/DD/YYYY and HH:MM:SS. |
|       | Name of the operation.
 | Operation status. Available options are *Scheduled, In execution, Successfully completed, Error, Cancelled, Waiting approval*, and *Expired*. |

#### Attempt records

At the top of this section, you can find information about the number of attempts made to execute the operation and which specific attempt the listed data corresponds to.

For example, , , and so on.

|       |                                                                                    |
|----|----|
|   | Name of the template used in the operation. |
|    | Number of the template version. |
|  | Date and time when the operation started. Format: MM/DD/YYYY and  HH:MM:SS.  |
|  | Date and time when the operation ended. Format: MM/DD/YYYY and  HH:MM:SS. |
|  | Indicates whether there was an error during the operation execution. Available options are  and . |
|  | Message indicating the status of the operation. Ex.: “task manager operation executed successfully.” |

#### Logs section

|  |  |
|----|----|
|  | External link icon, represented by an arrow coming out of a square, opens a browser tab with the logs of the steps executed in the operation. These records can also be viewed in a box below the word . |