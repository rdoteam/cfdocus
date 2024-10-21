# Audited commands 

In this document, you’ll find all the information about the  report, which shows the list of commands registered to be audited during a session.

---
### Path to access

1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select  >  > .

---

## Top bar
|
|---|---|
|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
|Represented by the counterclockwise arrow icon, it refreshes the page.
|Represented by the three vertical dots icon, it shows all the possible actions for the report.
| | Represented by the plus sign, it adds a command with a global rule.|
|  | Represented by the key icon, it adds a command with a rule for credentials.|
|   | Represented by the computer icon, it adds a command with a device rule.|
| | Represented by the group icon, it adds a command with a rule for access groups.|
| | Represented by the printer icon, it opens a new page for printing the report. |
|Represented by the printer icon, it opens a new page for printing the report.
|Represented by the paper sheet icon, it downloads the report.
|Represented by the clock icon, it opens the Schedule report form.


## Search fields

| | |
| ------------- | ---------------------- |
| | Command registration order number.|
| | The given name to the registered command.|
| | Audited command.|
| | Level of criticality assigned to the command, with options *Low*, *Medium*, and *High*. |
| | The rule type of the command created. Options are *Credential*, *Device*, *Global*, and *Group*.|
|   | The type of session in which the command was used. Options are *All*, *Terminal Proxy*, and *Database Proxy*. |
| | Command status, with options *Yes* and *No*.|


## Report fields

* .
* .
* .
* .
* .
* .
* : action that will occur when the command is executed.
* : the number of times the command must be used for the chosen action to occur.
* : based on the operation criticism.
* .
* :
    * : represented by the pencil and paper icon, it opens the command registration screen by credential, device, group, or global, according to the type specified in the command. Make the desired changes and click .
        :::(info) ()
        If you need to create a command similar to an existing command, including entities already linked (such as device, credential, or access group), you can use the  action.
        :::
    * : when clicked, it opens the  option and the report screen  is displayed.

:::(info) ()
The report displays 30 records per screen. To go to the next screen, click the next buttons at the end of the report.
:::