## Metadata_Start 
## code: en
## title: How to create a user wallet 
## slug: pam-session-how-to-create-a-user-wallet 
## seoTitle: How to create a user wallet 
## description:  
## contentType: Markdown 
## Metadata_End
In this article, you’ll find a step-by-step guide on how to create a user wallet to be used as a Database Proxy with Oracle.

:::(info) (**Info**)
This process involves configurations in the database connection and the application. Refer to and follow the steps in the documentation on [Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations) to know all the necessary steps.
:::

### Requirements

* To create a wallet, the user needs a certificate that will be used to connect to the Oracle DB through senhasegura. Access the [How to collet the sesnhasegura user certificate](/v3-32/docs/pam-session-how-to-collect-the-senhasegura-user-certificate) to follow these steps.

---
## Create a wallet using orapki
To create a wallet, you'll need the senhasegura certificate obtained in the previous step and the orapki tool. The server with the Oracle DB should already have the tool installed.

Make sure you have collected the senhasegura files in the previous step and stored them on the machine where you will use the orapki tool.

Run the following commands using the downloaded senhasegura files:

1. Create the wallet:
```json
orapki wallet create -wallet "/tmp/user_name_wallet" -pwd TYPE_YOUR_NEW_PASSWORD -auto_login
```
2. Import the certificate into the wallet:
```json
orapki wallet import_pkcs12 -pkcs12file SENHASEGURA_DOWNLODED_CERTIFICATE.p12 -pkcs12pwd TYPE_YOUR_PASSWORD -wallet "/opt/wallet/server-wallet" -pwd TYPE_YOUR_PASSWORD
```

:::(info) (**Info**)
The first field `TYPE_YOUR_PASSWORD` is a password created when generating the certificate. The second field `TYPE_YOUR_PASSWORD` is the wallet password created in the previous step.
:::

---
## Next:
[How to start a Database Proxy Oracle session with DBeaver on Linux](/v3-32/docs/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-linux)
[How to start a Database Proxy Oracle session with DBeaver on Windows](/v3-32/docs/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-windows)
[Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).