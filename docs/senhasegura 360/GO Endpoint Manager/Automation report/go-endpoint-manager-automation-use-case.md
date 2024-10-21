# Automation use case 

In this article, you’ll  learn about an automation use case:  how to register RemoteApp automation for SQL Management Studio to use on GO Windows.

:::(Warning) (Caution)
RemoteApp automations become visible to users exclusively when they are members of the access group associated with the credential required for utilizing the RemoteApp.
:::

* * *

## Step 1: Register RemoteApp

1. On the senhasegura platform, in the upper left corner, click the , identified by the nine squares, and select 
2. Select 
3. Locate through the search field the automation with the name “SQL Management Studio - SQL Authentication” and click in 
4. In column , click  the  icon, identified by the pen and paper icon.
5. Edit the  field, as per your application path. This path differs depending on the installed version.
6. Click 

:::(Warning) (Caution)
The parameter  only works on SSMS versions prior to 18.0.
:::

* * *

## Step 2: Create credential to add RemoteApp

### Requirement

* Register the  where the automation will run.

:::(Info) (Info)
If the credential already exists, edit it by adding the previously edited RemoteApp automation.
:::

1. On the senhasegura platform, in the upper left corner, click the , identified by the nine squares, and select 
2. Access 
3. Click the actions menu on 
4. Fill in the form fields 
    1. Fill with  accessing the device.
    2. Select which password  between the options, , , or 
    3.  fill in the device domain if you have one.
    4.  select the device where the automation will run.
    5.  add other important information.
    6.  define if this credential will be active or not.
    7.  fill in the password with which you access the device.
    8.  define tags to assist in the search for the credential.
5. Go to the tab 
6. Click in 
7. Add the automation you created.
8. Click 

:::(Info) (Info)
User interaction is blocked until the automation finishes running.
:::

* * *
## Run automation

1. Access the workstation desktop.
2. start the application 
3. Select the automation you want to run.
4. Right-click the automation and then click 
5. Select the credential that will be used to run the automation.
6. Wait for the automation to run.

* * *

Do you still have questions? Reach out to the 