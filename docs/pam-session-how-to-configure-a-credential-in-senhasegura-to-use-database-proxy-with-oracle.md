## Metadata_Start 
## code: en
## title: How to configure a credential in senhasegura to use Database Proxy with Oracle 
## slug: pam-session-how-to-configure-a-credential-in-senhasegura-to-use-database-proxy-with-oracle 
## seoTitle: How to configure a credential in senhasegura to use Database Proxy with Oracle 
## description:  
## contentType: Markdown 
## Metadata_End
In this article, you’ll find a step-by-step guide on how to configure a credential to use the Database Proxy with Oracle.

:::(info) (**Info**)
This process involves configurations in the database connection and the application. Refer to and follow the steps in the documentation on [Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations) to know all the necessary steps.
:::

## Configure the credential
:::(error) (**Important**)
Before configuring a credential, it's necessary to have previously set up a device. To learn how to perform this action, access the documentation on [How to configure a device in senhasegura to use Database Proxy with Oracle](/v3-32/docs/pam-session-how-to-configure-a-device-in-senhasegura-to-use-database-proxy-with-oracle).
:::

There are two ways to access the **Credential** configuration section.

The first way is through the **Quick Actions** menu, located in the top toolbar. To configure a credential using quick actions, follow these steps:

1. On senhasegura, click the **Quick Actions** icon, represented by a sheet of paper with a plus sign, and select **Credential**.

The second way is by accessing the **Grid Menu**. Follow these steps:

1. On senhasegura, in the top-left corner click the **Grid Menu**, represented by nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials** > **All**.
3. Click the **View Actions** icon, represented by three vertical dots, and click **+ New**.

Both ways will open a new pop-up window with the credential registration form. Fill in the following data to configure the new credential:

In the **Information** tab, fill in:

1. **Username**: choose the same username created earlier.
2. **Password Type**: choose **Local Administrator**.
3. **Device**: choose the **Database** type of device.
4. **Status**: select the **Enabled** option.
5. **Password**: there’s no need to create a password.

In the **Session settings** tab, go to the **Certificate** section and fill in:

:::(info) (**Info**)
This step requires certificate information from the user. Access the How to collect the senhasegura user certificate documentation to know how the user will acquired this information.
:::  

1. In the **Certificate file** option, click **Choose File** and upload the `.cert` certificate file created earlier.
2. In the **Key file** option, click **Choose file** and upload the `.key` key file created earlier.
    :::(info) (**Info**)
    These files are **pem** type and are composed of the user name plus the identification number.
    :::
3. If your key has a password, enter it in the **Key password** field.
    :::(warning) (**Attention**)
    If the user used a password to create the certificate, in this field you will need to enter the same password created by the user.
    :::
4. Click **Save**.

A confirmation message will be displayed by the system, certifying that the credential is registered.

---
## Next:
[How to create a user wallet](/v3-32/docs/pam-session-how-to-create-a-user-wallet)
[Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.