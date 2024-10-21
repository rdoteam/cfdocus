# How to setup SAP password change 

In this tutorial, you'll implement password change for SAP using the senhasegura plugin. When using the senhasegura plugin, It’s possible to automate and streamline the generation and exchange of keys efficiently.

:::(Info) (Info)
Periodically password change can only be performed once a day, ensuring adequate control in SAP server.
:::

## Requirements

- Have PAM user permission in senhasegura.
- Have a credential registered on the SAP server.
- Have the  permission on the credential that will be exchanged on the SAP server.
- Have the IP address of the SAP server.

## How to configure a template

To start, it’s necessary to configure an execution template in senhasegura.

1. In the upper left corner, click the , indicated by the nine squares box, and select 
2. From the side menu, select .
3. Click the  icon, identified by the three vertical dots, and select the option 

### On the  tab
Fill in the following data:

1. In , add the template identification name.
2. In , select the  option.
3. In , select the option .
4. In , select the option .
5. Click the  button.

## How to configure a Credential

, and add the following data:

1. In the upper left corner, click the , indicated by the nine squares box, and select 
2. From the side menu, select .
3. Click the  icon, identified by the three vertical dots, and select the option 

## SAP routing

### On the Information tab:

1. In , add the IP address of the SAP server. (For example: )
2. In , add: .

### On the  tab:

1. In the :
    1.1. Select the  option.
    1.2 Select the  dropdown menu and then select .
    1.3 Select the  dropdown menu and then select the template you’ve created before.
    1.4 On the , enable .
2. Click the  button.

## Next

1. .

***
Do you still have questions? Reach out to the .