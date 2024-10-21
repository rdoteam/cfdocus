# Web sessions 

In this document, you’ll find all the information about the  home screen, which shows the list of all Web session parameters created in the  module.

## Path to access

1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select  >  > .

---
## Top bar
|
|---|---|
|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
|Represented by the counterclockwise arrow icon, it refreshes the page.
|Represented by the three vertical dots icon, it shows all the possible actions for the report.
|Represented by the printer icon, it opens a new page for printing the report.
|Represented by the paper sheet icon, it downloads the report.
|Represented by the clock icon, it opens the Schedule report form.

## Search fields
| | |
|---|---|
| | Identification number of the order in which the parameters were registered.|
| | The device’s target of the session.|
| | URL of the website login page that will be used.|
| | HTTP authentication, if required by the website.|
| | Option to use an older Firefox browser. The options are Yes or No.|
|  | An option that will ignore the certificate error if the web application has it. The options are  and . |


## Report fields

* .
* .
* .
* .
* .
* .
* :
    * : represented by the pencil and paper icon, it opens the  window where you can make the necessary changes.
    * : a drop-down menu with the options to  a parameter or  them. In both actions, click  in the confirmation box to do so.

:::(info) ()
The report displays 30 records per screen. To go to the next screen, click the next button at the end of the report.
:::

### Web Sessions Parameters

|
---|---
*|Choose from the options which device will be accessed by the session.
*|Choose from the options to activate this function or not.
|Choose from the options to ignore possible certificate errors when accessing the session.
|Write the URL address that will be accessed.
|Write to HTTP authentication, if required by the website.
|Click on the plus icon and fill in the available fields. 


#### Customize settings - fields
Each action that will be added comprises seven elements, configuring each step necessary for authentication.

* : waiting time in milliseconds before the action occurs. The time for the first action must be adjusted to the page rendering time.
* : type of action that will simulate a user authenticating on the website. Some of these actions have additional properties.
    * : an automation that generates clicks directly through the website. : The click is performed by the console.
    * : a real person clicking, it's a real click. : as if a real person performed the clicking action.
    * : inserts a command in javascript, to execute a command.
    * : is used to mark checkboxes and radio buttons.
    * : fill in the automated fields (requires the  field filled).
    * : fill in the fields as if it were done by a real person (the Value field needs to be filled).
    * : list selection, data listing.
    * : contains a Select element with options to select. : is a drop-down list with elements for the user to select.
    * : an HTML element of type submit for sending data. : is a button used to send data that sends all the values ​​filled in the form.
    * : is a challenge and response test used to determine whether the user is human. : It may contain letters, numbers, among others, in different fonts and different handwriting.
        :::(info) ()
        In this step, it’s necessary to fill in according to the image shown so that it’s possible to continue with the other steps.
        :::
* : can be used  to identify the target field of the action to be performed or field inspection can be done to identify the target field.
* : this value will be used to fill in the field. Values ​​can be set, you can fill using tags like:
    * : the sign-in credential username.
    * : the credential password.
    *  or: the IP, DNS, or URL of the credential associated with the device.
    *  and : tags for starting web sessions with a third authentication field.
* : The number of times the automation should try the action if it fails.
    :::(info) ()
    The reasons for failure often range from a wrong selector, an inappropriate action, or even not having had time to make the page for automation to find the desired field.
    :::
* : this is the time the automation must wait until the action is resumed, the first action has an appropriate number of attempts and interval time.