# How to configure a device in senhasegura to use the Database Proxy with Oracle 

In this document, you will find a step-by-step guide on how to configure a device to be used via the Oracle Database Proxy.

It'll take five steps to configure the Oracle database so that it’s accessible via  in senhasegura, this document is the .

!

:::(warning) ()
It’s extremely important to correctly follow the order of documents for configuring the Oracle database to function correctly as a Database Proxy.
:::

## Requirements

* Oracle DB Server configured the minimum version is 19.0.0.0.0
* Server with ORAPKI installed to create Wallets.
* Connectivity of the user's workstation with senhasegura on ports 1521 and 2484.
* Database client installed.
    * Dbeaver, minimum version: 23.1.0
    * SQLPlus, minimum version: 21.0.0.0.0
    * SQL Developer, minimum version: 23.1.0.097
* Don’t have filters enabled for the certificate.

---
## Configure the device
There are two ways to access the  configuration.

The first way is through the menu , located in the top toolbar. To configure a device using quick actions, follow the steps below:

1. Click the  icon, represented by a sheet of paper with the sum sign, and select .

The second way is by accessing the . To do this, follow the steps below:

1. In the upper left corner of senhasegura, click , represented by the nine squares, and select .
2. In the side menu, select .
3. Click on the icon , represented by the three vertical dots, and click .

Both actions will open a new pop-up window with the registration form device. Fill in the following data to configure the new device:

In the  tab, fill in:

1. *: address of the Oracle server.
2. *: name that will be used to identify the server.
3. *: choose .
4. *: choose .
5. *: choose .
6. *: add desired website.
7. : add the desired tags.

In the  tab, fill in:

1. : choose .
2. : fill in the port value .
3. Click on .
    1. In the list of  click on  to make sure the connection is working.
4. Click on .

The system will display a confirmation message, certifying that the device is registered.

Finishing the third step of configuring Oracle to be used via , access the document  to perform the fourth part and continue the configuration.


Do you still have questions? Reach out to the .