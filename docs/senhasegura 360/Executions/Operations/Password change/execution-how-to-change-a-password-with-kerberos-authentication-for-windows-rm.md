# How to change a password with Kerberos authentication for Windows RM 

In this document, you’ll find a step-by-step guide on how to perform a password change with Kerberos authentication for Windows RM.

## Requirements

* Be an administrative user with permission to create/edit templates.

---
To carry out this type of change, it’s necessary to follow the three steps described below.

### Step 1: Create the template

1. On senhasegura platform, in the upper-left corner, click on the , represented by the nine squares, and select .
2. In the side menu, select  > .
3. On the report screen, click , represented by the three vertical dots, and select .
4. In the window that opens, , fill in the fields:
    1. *: write a name that identifies the template.
    2. : in the checkbox, select .
    3. *: in the dropdown menu, select .
    4. *: in the dropdown menu, select .
    5. : in the dropdown menu, select .
    6. : in the dropdown menu, select .
5. Click .

A success message will be displayed and the created template will be listed in the report.

### Step 2: Modify device connectivity

1. On senhasegura platform, in the upper-left corner, click on the , represented by the nine squares, and select .
2. In the side menu, select .
3. From the list, select the device that will be changed or create a new device.
    :::(info) ()
    To learn how to create or edit a device, access the  document.
    :::
    1. In the window that opens, , click on .
        1. In the  field, select  and in the  field, enter the port number for WinRM.
        :::(info) ()
        * The device must have SSH connectivity to the WinRM port, due to the connector that is used.
        * By default, the port values ​​suggested by senhasegura are: HTTP - 5985 and HTTPS - 5986.
        :::
7. Click .

senhasegura will display a success message.

### Step 3: Configuring the credential

1. On senhasegura platform, in the upper-left corner, click on the , represented by the nine squares, and select .
2. In the side menu, select  > .
3. From the list, select the credential that will be edited or create a new credential.
    :::(info) ()
    To learn how to create or edit a credential, access the How to configure a credential in senhasegura document.
    :::
    1. In the window that opens, , click on .
    2. In the  field, select the domain that was created for this credential.
        :::(warning) ()
        The domain that will be used for the credentials used for authentication via Kerberos demands that the domain name is in capital letters, for example: WINRM-KERBEROS. To learn how to add a new domain, access the Domain credential settings document.
        :::
    3. In the  field, fill in the  and , as shown in the example: 
4. Click .


senhasegura will display a success message.

:::(warning) ()
The credential hostname must be the device's FQDN.
:::

The action of changing your password follows the request flow like any other type of change carried out by senhasegura. To perform the steps to change your password, access the  document.

Do you still have questions? Reach out to the .