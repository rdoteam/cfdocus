# How to register new audited command 

In this document, you'll find a step-by-step guide on how to register a command to be audited in a remote session.

Audited commands allow segmentation at the , , , and  levels. The difference is that there will be no overlapping of a command based on the chain of segregating entities. It’s a sum of rules, a possibility to isolate commands belonging to certain credentials and devices from a certain manufacturer.


:::(warning) ()
The audited commands functionality is available only for Database Proxy, Terminal Proxy, and Terminal via Web Proxy sessions.
:::

---
### Requirements

* Be a user with the role of pam administrator, pam operator, or system administrator.

---
## Register a command
:::(warning) ()
Registered audited commands are loaded at the beginning of each session. If a session is already active and a new command is registered, it won't affect the already started session.
:::

1. On senhasegura, in the upper left corner, click the , represented by the nine squares, and select .
2. In the side menu, select  >  > .
3. In the upper right corner, click on the  icon.
    1. Choose one of the options to add a new command.

#### New global command

1. On the  screen, fill in the mandatory fields identified by the asterisk.
2. In the  tab, fill in:
    1. *: name to identify the command to be audited.
    2. *: select the type of session that will have the command audited, and choose from the options *All*, *Terminal Proxy*, or *Database Proxy*.
        :::(info) ()
        The option  includes any session of the type  and  that is accessed through a session  and/or sessions accessed through .
        :::
    3. *: level of criticality that the command will have, choose between the options *Low*, *Medium* and *High*.
    4. *: the action that will occur when carrying out the command. Choose between the options *Allow execution*, *Deny execution*, *Interrupt session* and *Force*.
        :::(info) ()
        To understand each type of action that can be chosen in this field, access the Actions triggered by executing audited commands document.
        :::
    5. : the number of times the command can occur until the action is performed. Choose between *1* and *10*.
    6. : choose between options Yes or No.
        :::(warning) ()
        If the  option is set, the user will be disconnected and blocked instantly.
        :::
    8. *: writes the regular expression of the command to be audited according to the rule.
        :::(info) ()
        The use of the asterisk * to capture all executed commands won't work. Commands must be fully specified. Ex.: update public\.table name*
        :::
    8. *: describe the command being registered.
3. Click .

#### New command by credential

1. On the  screen, fill in the fields described in the , as the example above.
2. On the :
    1. Click on the  sign and select the credentials that will be audited by this command.
    2. Click .
3. Click .

#### New command by device

1. On the screen , fill in the fields described in the , as the example above.
2. On the  tab:
    1. Click on the  sign and select the devices that will be audited by this command.
    2. Click .
3. Click .

#### New command by group

1. On the screen , fill in the fields described in the , as the example above.
2. On the  tab:
    1. Click on the  sign and select the groups that will be audited by this command.
    2. Click .
3. Click .

:::(info) ()
After using any command registered in any session, the command can’t be changed, the * field will be inactive and the message  will be available just below the field.
:::

The system displays a message confirming the command registration. All sessions started after this registration will have tracking of these commands. With each use of a registered audited command, senhasegura displays the message  and these commands will be displayed in the  report.

:::(info) ()
If any command is registered, senhasegura will display only the beginning and end of the session in its  report.
:::


---
## Next:





Do you still have questions? Reach out to the .