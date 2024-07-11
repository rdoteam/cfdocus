## Metadata_Start 
## code: en
## title: How to collect the senhasegura user certificate 
## slug: pam-session-how-to-collect-the-senhasegura-user-certificate 
## seoTitle: How to collect the senhasegura user certificate 
## description:  
## contentType: Markdown 
## Metadata_End
In this article, you’ll find a step-by-step guide on how to create a user wallet to be used as a Database Proxy with Oracle.

:::(info) (**Info**)
This process involves configurations in the database connection and the application. Refer to and follow the steps in the documentation on [Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations) to know all the necessary steps.
:::

### Requirements

* To create a wallet, the user needs a certificate that will be used to connect to the Oracle DB through senhasegura.

---
## Collect the senhasegura user certificate
Before creating a wallet, you need the certificates from senhasegura. Follow the steps below to collect them:

1. Log in to **senhasegura**.
2. Click your **username** in the upper-right corner.
3. Select **My Certificate** from the dropdown menu.
4. In the new window, download the **CA**, **certificate**, and **key** by clicking the respective buttons.
5. Save the files on your computer in the preferred folder.

---
### Next:
[How to start a Database Proxy Oracle session with DBeaver on Linux](/v3-32/docs/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-linux)
[How to start a Database Proxy Oracle session with DBeaver on Windows](/v3-32/docs/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-windows)
[Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.