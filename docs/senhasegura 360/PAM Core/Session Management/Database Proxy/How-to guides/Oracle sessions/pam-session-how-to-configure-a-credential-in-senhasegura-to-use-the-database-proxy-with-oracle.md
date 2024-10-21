# How to configure a credential in senhasegura to use the Database Proxy with Oracle 

In this document, you will find a step-by-step guide on how to configure a credential to be used via the Oracle Database Proxy.

It'll take seven steps to configure the Oracle database so that it’s accessible via Database proxy in senhasegura, this document is the .

!

:::(warning) ()
It’s extremely important to correctly follow the order of documents for configuring the Oracle database to function correctly as a Database Proxy.
:::

## Requirements

* Oracle DB Server configured the minimum version is 19.0.0.0.0
* Server with ORAPKI installed to create Wallets.
* Connectivity of the user's workstation with senhasegura on ports 1521 and 2484.
* Certificate authority  (CA) for signing Oracle DB certificates and the database credential.
* Database client installed.
    * Dbeaver, minimum version: 23.1.0
    * SQLPlus, minimum version: 21.0.0.0.0
    * SQL Developer, minimum version: 23.1.0.097
* Don’t have filters enabled for the certificate.

---
## Create a credential
There are two ways to access the Credentials configuration area.
The first way is through the menu Quick actions, located in the top toolbar. To configure a credential using quick actions, follow the steps below:

1. Click on the icon Quick actions, represented by a sheet of paper with the sum sign, and select Credential.

The second way is by accessing the Grid Menu. To do this, follow the steps below:

1. In the upper left corner of senhasegura, click , represented by the nine squares, and select .
2. In the side menu, select  > .
3. Click on the icon , represented by the three vertical dots, and click .

Both actions will open a new pop-up window with the credential registration form. Fill in the following information to configure the new credential:

In the  tab, fill in:

1. : choose username.
2. : choose  or .
3. : choose the  type of device.
4. : select the  option.
5. : It’s not necessary to create a password, as authentication will be through the certificate.

In the  tab, go to the  section and fill in:

1. In the option , click  and select the  `
.crt` file previously created for the credential.
2. In the option , click  and select the `
.key` file previously created for the credential.
3. If your key has a password, enter it in the  field.
    :::(warning) ()
    If the user used a password to create the certificate, in this field you will need to enter the same password created by the user.
    :::
4. Click .

The system will display a confirmation message, certifying that the credential is registered.


Finishing the sixth step of configuring Oracle to be used via Database Proxy, access the document  to perform the seventh part of the configuration.

---
Do you still have questions? Reach out to the .