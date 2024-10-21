# How to configure Kerberos authentication for RDP sessions on Windows Server 

In this document, you’ll find a step-by-step guide on how to configure an RDP Proxy and RDP via Web Proxy sessions to be authenticated through Kerberos protocol.

:::(error) ()
The steps in this tutorial must be performed on a  machine.
:::

## Requirements

* Be a user with administrator permissions.
* Have a domain configured for these settings to be applied.

---
To use the Kerberos protocol to authenticate sessions, you must first perform the following steps.

## Step 1: Edit local group policy

1. On the original machine, in the , type .
2. Click on the result to open the window. 
3. With the editor open, in the left side menu, click on the expansion arrow from the  option.
4. Click the expansion arrow from the  option.
5. Click the expansion arrow from the  option.
6. Click the expansion arrow from the  option.
7. Click on the  folder to display a screen on the right. Proceed with the configuration as follows: 
    1. In : the value must be set as .
    2. In : double click. In the window that opens, choose the  option and click .
    3. In : double click. In the window that opens, choose the  option and click .
    4. In : the value must be set as .
    5. In : the value must be set as .
    6. In : double click. In the window that opens, choose the  options and click .
    7. In : double click. In the window that opens, choose the  option and click .
    8. In : double click. In the window that opens, choose the  option and click .
    9. In : double click. In the window that opens, choose the  option and click .
    10. In : double click. In the window that opens, choose the  option and click .
8. Close the window.

## Step 2: Server Manager

1. At , search for the  application and open it.
2. In the upper right corner, click .
    1. In the drop-down menu, click .
3. In the window that opens in the left menu, look for the option where users are registered and click on the arrow to expand the options.
    1. Click on the  option.
4. In the list of users presented, right-click on the user to be configured.
    1. On the drop-down menu, click on the  option.
5. In the window that opens, click on the  tab.
    1. In the  section, select the following options.
        i. .
        ii. .
    2. Click .
6. Click on the  tab.
    1. Click .
    2. In the  window, click .
    3. The window will expand, on the  field, type  and click .
    4. On the  list, select the result with the name of  and click .
    5. The selected name should appear in the  field.
    6. Click .
7. Returning to the properties screen on the  tab, click , and then .

## Step 3: Control Panel

1. In the Windows , type .
2. Click on the result to open the window. 
3. In the opened window, click on .
4. In the options available in , click on .
5. In the  window, click on the .
    1. In the  section, deactivate the  option.
    2. Click .
    3. Click .
6. Close the opened windows.

After this configuration, it’s mandatory to configure remote sessions in senhasegura. To find out how to perform this action, access the  document.

---

Do you still have questions? Reach out to the .