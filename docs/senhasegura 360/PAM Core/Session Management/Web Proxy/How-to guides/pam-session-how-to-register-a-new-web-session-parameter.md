# How to register a new web session parameter 

In this document, you’ll find a step-by-step guide on how to register a new web session parameter in the  module.

When you need to start web application sessions on a device with HTTP or HTTPS connectivity, you must first create a session parameter, so that senhasegura knows how to authenticate to the web page that will start the session.

:::(warning) ()
The parameters configured here are only for the use of  sessions.
:::

## Requirements

* The user must have add/edit permission.
* User with the role of system admin, pam admin or pam operator.

:::(warning) ()
senhasegura is not compatible with the GoDaddy application.
:::

---
## Register new parameter
:::(info) ()
For more information about the meaning of the fields when registering the new parameter, access the reference  document.
:::

1. On senhasegura, in the upper-left corner, click on the , represented by the nine squares, and select .
2. In the side menu, select  >  > .
3. Click on the three vertical dots icon, located in the upper-right corner of the screen, and select .
4. In the  window that opens, fill in the mandatory fields, identified by the asterisk:
    1. *: choose from the options which device will be accessed by the session.
    2. *: select the Yes or No option.
    3. : select the Yes or No option.
    4. : enter the URL address that will be accessed.
    5. : an HTTP authentication, if required by the website.
    6. : click the plus icon and fill in the available fields.
        :::(info) ()
        For more information about Customize Settings, access the  document.
        :::
        4. : Enter a number for the wait time.
        5. : choose from the options which type of action will be performed.
        6. : enter the result of the HTML inspection of the chosen field or use the  to identify the target field of action.
            :::(info) ()
            To inspect an element, right-click on the element you want, for example, the login text box. In the list, click on the inspect option. In the one that opens, find the value for the field in the code, copy and paste the value into this field.
            :::
        4. : enter the value that will be used to fill in the field.
            :::(info) ()
            It’s possible to use tags that will be replaced by the values ​​of the credential or device accessing the website. To learn about each tag that can be used in this field, access the .
            :::
        5. : enter the number of times the action should be attempted
        6. : waiting time for the action to resume.
    10. To delete a line from the custom configuration list, click on the  icon, on the left side of the chosen record.
5. Click .

A confirmation message will be displayed by the system and the new parameter created will appear in the list of groups on the screen .

---
### Next:


Do you still have questions? Reach out to the .