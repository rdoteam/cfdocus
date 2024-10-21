# About senhasegura Terminal 

When logging into the senhasegura server using SSH, the user will be directed to the standard prompt on the  to enter user information and begin a session.

:::(info) ()
To learn how to start an SSH session into the senhasegura vault, access the  document.
:::

This simplified terminal only has commands to start a proxy session to a remote device and transfer files between the source’s device and the destination device.

Using the command , displayed on the home screen, serves to list the available commands.

Once inside the senhasegura shell session, you can use the command , to list access credentials, displayed in table format.

###  command

|
|---|---|
|Device connectivity.
|Credential username.
|Device’s hostname.
|Device’s IP address.
|Credential type.
|Device type.

:::(warning) ()
Domain credentials are not listed using this command. To access with domain credentials, you must use the following syntax: .
:::

:::(info) ()
Replace the`
` by the credential username.
:::

To view the user access, use the syntax: `list 
 --related`
This will display all devices that a given account has access to.

:::(info) ()
Replace the `
` by the device, the hostname or the IP address.
:::

To view the domain access, use the syntax: `list 
 --related`. That allows the user to check all domain credentials that are registered on this device and which devices have the same domain as the credential.