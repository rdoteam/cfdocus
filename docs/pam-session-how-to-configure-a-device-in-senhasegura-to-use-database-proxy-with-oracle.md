## Metadata_Start 
## code: en
## title: How to configure a device in senhasegura to use Database Proxy with Oracle 
## slug: pam-session-how-to-configure-a-device-in-senhasegura-to-use-database-proxy-with-oracle 
## seoTitle: How to configure a device in senhasegura to use Database Proxy with Oracle 
## description:  
## contentType: Markdown 
## Metadata_End
In this article, you’ll find a step-by-step guide on how to configure a device to use the Database Proxy with Oracle.

:::(info) (**Info**)
This process involves configurations in the database connection and the application. Refer to and follow the steps in the [Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations) documentation to understand all the steps.
:::

---
## Configure the device
:::(error) (**Important**)
Before configuring a credential, it’s necessary to have previously set up the server hosting Oracle. To learn how to perform this action, access the documentation on [How to perform server configuration with Oracle](/v3-32/docs/pam-session-how-to-perform-server-configuration-with-oracle).
:::

There are two ways to access the **Device** configuration section.

The first way is through the **Quick Actions** menu, located in the top toolbar. To configure a device using quick actions, follow these steps:

1. Click on the **Quick Actions** icon, represented by a sheet of paper with a plus sign, and select **Device**.

The second way is by accessing through the **Grid Menu**. To do this, follow these steps:

1. In the top-left corner of the senhasegura platform, click the **Grid Menu**, represented by nine squares, and select **Devices**.
2. In the side menu, select **Device**.
3. Click the **Show Actions** icon, represented by three vertical dots, and click **+ New**.

Both actions will open a new pop-up window with the device registration form. Fill in the following details to configure the new device:

In the **Information** tab, fill in:

1. **IP, hostname, or management URL***: the address of the Oracle server.
2. **Device Name***: the name used to identify the server.
3. **Device Type***: choose Database.
4. **Vendor***: choose Oracle.
5. **Product***: choose Oracle Database.
6. **Site***: add the desired site.
7. **Tags**: add the desired tags.

In the **Connectivity** tab, fill in:
1. **Connectivity**: choose **Oracle**.
2. **Port**: enter the port value **1521**.
3. Click **Add**.
4. In the **Connectivity** list, click **Test** to ensure that the connection is working.
5. Click **Save**.

A confirmation message will be displayed by the system, certifying that the device is registered.

---
## Next:
[How to configure a credential in senhasegura to use Database Proxy with Oracle](/v3-32/docs/pam-session-how-to-configure-a-credential-in-senhasegura-to-use-database-proxy-with-oracle)
[Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.