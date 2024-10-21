# How to create a RemoteApp type automation on GO Windows 

In this article, you’ll learn how to create a RemoteApp type automation to use in the GO Windows agent.

:::(Warning) (Caution)
RemoteApp automations become visible to users exclusively when they are members of the access group associated with the credential required for utilizing the RemoteApp.
:::

* * *

## Requirement
See the table of supported masks at:

* 

* * *

## Step 1: Create the automation

1. On the senhasegura platform, in the upper left corner, click the  and select 
2. On the side menu, select 
3. In the  column, click the icon , identified by the three vertical dots, and select the option 
4. Fill in  registration:
    1. Define a  that is easy to identify for automation.
    2. Select the  of the option 
    3.  Add  to help search for automation separated by a comma ",".
    4. Mark the  option as .
    5. Fill in  the , per example with the path for the application on the workstation: , , etc.
    6. Fill in the  enclosed in double quotes, for example: 
    7. The field  contains the steps that will be added in Actions.
    8. In The field , you can add the following actions: , , , , , and 
    9. Prefill in properties with the respective field name. If necessary, fill in the value. You can save or delete the added action.
    10.  add a brief description of what this automation does and what it is used for.
5. Click the  button.

* * *

## Step 2: Create credential to add RemoteApp
### Requirement

* Register the device where the automation will run.

1. On the senhasegura platform,  in the upper left corner, click the , identified by the nine squares, and select 
2. On the side menu, select 
3. On the  icon, select 
4. Fill in the form fields 
    1. Fill in with  accessing the device.
    2. Select which password  between the options, , , or 
    3.  fill in the device domain if you have one.
    4.  select the device where the automation will run.
    5.  add other important information. 
    6.  define if this credential will be active.
    7.  fill in with the password used to access the device.
    8.  define tags to assist in the search for the credential.
5. Go to the tab 
6. Click in 
7. Add the automation you created.
8. Click the  button.

:::(Info) (Info)
User interaction is blocked until the automation finishes running.
:::
* * *

## Run automation

1. Access the workstation desktop.
2. Start the application 
3. Select the automation you want to run.
4. Right-click the automation and then click 
5. Select the credential that will be used by the automation script.
6. Wait for the automation to run.

* * *

Do you still have questions? Reach out to the .