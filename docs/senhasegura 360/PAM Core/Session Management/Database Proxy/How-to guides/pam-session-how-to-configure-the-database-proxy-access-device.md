# How to configure senhasegura Database Proxy 

In this document, you’ll find a step-by-step guide on how to configure the Database Proxy to access your database through senhasegura.

:::(info) ()
To find out which databases and clients are approved by senhasegura, access the  documentation.
:::

---
### Requirements

* Have PAM admin permission in senhasegura

---
### Parameters  to establish a connection:
Database|Device type|Vendor|Product|Connectivity|Port
|---|---|---|---|---|---|
SQL Server|Database|Microsoft|Desired option| SQL Server|1433 |
Post|Database|PostgreSQL|PostgreSQL 9.x.|PostgreSQL|5432 |
Oracle|Database|Oracle|Oracle Database 10g|Oracle|2484|

---
### Path to access
There are two ways to access the  configuration area. Follow one of these paths:

1. : click the  icon, represented by a sheet of paper with the sum sign, and select Device.

or

1. In the upper left corner of the senhasegura platform, click the , represented by the nine squares, and select .
2. On the side menu, select .
3. Click the  icon, represented by the three vertical dots, and click .

Both actions will open a new pop-up window with the device registration form. Fill in the following data to configure the new device:

## Add a device

1. Register a device with the following data according to the values in the table above:
    1. On the tab , fill in the mandatory fields with the asterisk:
        1. : type the information in which the device is registered.
        2. : name that will be used to identify the device.
        3. : choose Database.
        4. : choose the database vendor.
        5. : choose the database model.
        6. : select the option to which the database belongs.
        7. : add the desired tags.
    2. On the tab , fill in:
        1. : choose the connectivity to be used.
        2. : the default number is automatically filled in. If you use a number other than the suggested port, make the change.
        3. Click .
        4. Click  to confirm the connectivity.
2. Click .

The platform will display the confirmation notice. Once the configuration is finished, it’s important to set up a credential for this device. Access the  documentation to know how to perform it.

:::(warning) ()
For  device type, the credentials set up is done in a different way. To know how to register this type of credential, access the .
:::

---
## Next:




Do you still have questions? Reach out to the .