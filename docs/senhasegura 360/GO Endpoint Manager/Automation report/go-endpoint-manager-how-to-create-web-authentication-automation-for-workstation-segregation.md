# How to create web authentication automation for workstation segregation 

In this article, you will learn how to create a web authentication automation for segregation by workstations.

* * *

## Requirements
For Web Authentication, the default browser chosen by the user is used. Supported browsers:

* Google Chrome 
* Mozilla Firefox

:::(Warning) (Caution)
Microsoft Edge and Microsoft Internet Explorer browsers are not supported.
:::

* * *

## Step 1: Create automation for web authentication

1. On the senhasegura platform, in the upper left corner, click the , identified by the nine squares, and select 
2. In the side menu, select 
3. In the upper toolbar, click the  icon , identified by the three vertical dots, and select 
4. In the window , fill in the fields.
    1. 
    2.  of automation. Select  from the drop-down menu.
    3. In  mark as 
    4.  fill in the application path on the system. For example, for the web enter a URL like ,  or any other.
    5. Define  to assist in the search for automation.
    6.  use the tags below to build your automation. Select the  option and fill in the  field.
        1.  credential username.
        2.  credential password.
        3.  credential domain.
        4.  hostname.
        5.  IP do hostname.
    7. To create automation to perform authentication on a website, you can use this example:
        :::(Warning) (Caution)
        Remember to replace the name in the label field with the name on the web page.
        :::
        1. Select the "Input" action and fill in the  field with the name "email", and in the  field, enter "."
        2. Select the "Input" action again, fill in the  field with the name "password," and in the  field, enter "[."
        3. Select the "Button" action with the "Enter" .
    11. If you wish, add a brief  of what the automation does and what it is used for.
5. Click the  button.

## Step 2: Add access list for automation with workflow

1. On the senhasegura platform,  in the upper left corner, click the , identified by the nine squares, and select 
2. Access 
3. In the upper toolbar, click on the  icon, identified by the three vertical dots, and select the option 
4. In the pop-up windows, select 
5. In the  window:
    1. Fill in a  to identify in the access list.
    2. Check the  field to 
    3. Check the   field to , to record the automation run.
6. In the  section, click the  icon, identified by a sum signal.
7. Select the automation created in the previous step.
8. Click the  button.
9. In the  tab:
    1.  In the  section, click the  icon, identified by the sum signal.
    2. The available workstations will be listed according to their code. Select the desired one and click on the  button.
10. On the  tab: 
    1. In the  section:.
        1. Check the  option to allow automation to elevate privilege when running automation.
        2. Check the  option to require justification when running automation.
        3. Check the  option to require an approving user to approve the automation run.
        4. Set the number of 
        5. Set the number of 
        6. If you want to, check the  option.
        7. If you want to, check  option.
    2. In the  tab:
        1. Check the  option as  if you have and want to use a code.
        2. Check the  option as  whether you want to automatically add the manager to the approvers.
11. Click the  button.

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