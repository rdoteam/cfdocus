# How to make an SSH connection via Terminal Proxy 

In this document, you’ll find a step-by-step guide on how to make an SSH connection via Terminal Proxy.

## Requirements

* Have a command prompt-type application installed on the machine.

---

## SSH connection
To make an SSH connection to a device that has this connectivity linked to a valid credential, you’ll need to run the command  followed by the credential and device as is done in a standard SSH connection. Follow the steps below:

1. Open the  app of your preference.
2. Enter the following command to enter the vault:
    1. 
        :::(info) ()
        The  field is the username used to access the vault. The  field can be the hostname or IP address of the vault to be accessed.
        :::
    2. Press the Enter key.
    :::(info) ()
    When accessing the device for the first time, a reliability warning will be displayed, type  and press the Enter key. The warning will no longer be displayed the next time this device is accessed.
    :::
6. Enter your password.
    1. Press the  key.
        :::(warning) ()
        When your password is reset or expires, the terminal will display a message warning that the password needs to be changed and display the steps that the user must take to register a new password through the web interface.
        :::
7. The  home screen will be displayed.
8. Type  so that the list of available credentials and devices is displayed.
    :::(info) ()
    If you already know the credential (username) and the device (hostname or IP) that you want to access, it’s not necessary to use the command .
    :::
9. After choosing, type:
    1.  (hostname or IP address).
    2. Press the  key.

After these steps, the connection via SSH to a device is ready for use.

---
## Multi-tenant access
Multi-tenant access is only possible through Proxy 2.0. To enable it, access the document  to perform this action.

:::(warning) ()
If the tenant isn’t informed, the system will consider the senhasegura tenant.
:::

#### Connection to the proxy terminal with single-tenant:


#### Connection to the proxy terminal with multi-tenant:


---
## Access using Proxy 2.0
When accessing a device with  connectivity type registered through Proxy 2.0 using Terminal Proxy, users will be presented with a protocol selection screen, the options being SSH or Telnet.

1. Follow the steps described in the SSH Connection section.
2. On the senhasegura shell home screen, type in the desired connectivity option:
    1. SSH port , type , and press .
    2. Telnet port , type , and press .
3. After choosing, type:
    1.  or  for SSH connectivity.
    2.  or  for Telnet connectivity.
4. Press .

After these steps, the connection to a device is ready for use.

---
## Access using SSH key
There is also the possibility of accessing with SSH keys, using the following syntax according to the desired access, replacing the strings with the values ​​described in the table below.
:::(info) ()
To learn how to configure SSH keys, access the documents on this topic available at .
:::
|
|---|---|
|Name of the credential registered via SSH key.
|Hostname or IP address of the senhasegura vault.
|Hostname or IP address of the device you want to access.

#### Instance access:


#### Access to another device:
:::(warning) ()
When accessing another device with an SSH key, always use the word .
:::


#### Access to another device or when a key and credential have the same name.


:::(warning) ()
Depending on the operating system used, the use of the backslash ( \ ) is necessary for the command to work correctly.
:::

To access the target device in applications that don’t provide interactive prompts or if you don’t want to go through the senhasegura shell screen, use the Multihop. Access the specific documentation to learn how to make this type of connection.

The senhasegura Terminal Proxy also offers other types of connections, such as:

* 
* 
* 
* 

---
Do you still have questions? Reach out to the .