# How to configure a device in senhasegura to use the Database Proxy with Oracle 

In this document, you'll find a step-by-step guide on how to configure a device to be used via the Oracle Database Proxy.

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
## Configure the device
There are two ways to access the Devices configuration.

The first way is through the menu Quick actions, located in the top toolbar. To configure a device using quick actions, follow the steps below:

1. Click on the icon , represented by a sheet of paper with the sum sign, and select .

The second way is by accessing the Grid Menu. To do this, follow the steps below:

1. In the upper left corner of senhasegura, click , represented by the nine squares, and select .
2. In the side menu, select .
3. Click on the icon , represented by the three vertical dots, and click .

Both actions will open a new pop-up window with the registration form device. Fill in the following data to configure the new device:

In the  tab, fill in:

1. *: address of the Oracle server.
2. *: name that will be used to identify the server.
3. *: choose Database.
4. *: choose Oracle.
5. *: choose Oracle Database.
6. *: add desired website.
7. : add the desired tags.

In the  tab, fill in:

1. : choose .
2. : fill in the port value .
3. Click .
    1. In the list of  click on  to make sure the connection is working.
4. Click .

The system will display a confirmation message, certifying that the device is registered.

Finishing the fifth step of configuring Oracle to be used via Database Proxy, access the document  to perform the sixth part and continue the configuration.

---
Do you still have questions? Reach out to the .