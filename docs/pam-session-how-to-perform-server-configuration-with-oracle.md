## Metadata_Start 
## code: en
## title: How to perform server configuration with Oracle 
## slug: pam-session-how-to-perform-server-configuration-with-oracle 
## seoTitle: How to perform server configuration with Oracle 
## description:  
## contentType: Markdown 
## Metadata_End
This article will guide you through a step-by-step process on how to configure the Oracle server to be used as a Database Proxy at senhasegura.

:::(info) (**Info**)
This process consists of configurations on the database connection and the application. Follow the steps according to the [Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations) document.
:::

### Requirements
These requirements are necessary to make communication between senhasegura and the Oracle database:
* User communication with senhasegura on port 2484.
* Communication between the device and senhasegura/Network Connector on port 2484 (default) or a custom Oracle SSL port.
* A certificate signed by the same CA for each server and user.
* The bank server's wallet must be configured on it.
* The user's wallet must be configured on their workstation with the senhasegura certificate.

---
## Configure the server with Oracle
To make senhasegura Proxy DB work with Oracle DB, the following steps are necessary on the server hosting Oracle database:

* Modify the **sqlnet.ora** file to configure the server wallet.
* Update the **listener.ora** file to enable SSL authentication.
* Configure credentials in Oracle DB using their proper CN.

To use SSL authentication, you need to have a certificate that can be used by the server. In the example below, we are using **openssl**, but you can use any tool you prefer to create the certificate. Just make sure to use the `-subj ‘/CN=NAME_SERVER’` and ensure that the requirements to create an Oracle Wallet are met. An Oracle Wallet will be necessary for further configurations.

:::(info) (**Info**)
If you already have the certificate, you can start from **Step 2 - Generate server wallet using orapki**.
:::

### Step 1 - Generate a Certificate to create an Oracle Wallet

Run the following commands to create a new certificate:

:::(warning) (**Attention**)
Make sure to replace `SERVER_NAME` with the correct server name.
:::

```json
openssl genrsa -out server_key_name.key 4096
openssl req -new -key server_key_name.key -out server_certificate_name.csr -subj '/CN=SERVER_NAME'
openssl x509 -req -days 730 -in server_new.csr -CA caCert.crt -CAkey caCert.key -set_serial 01 -out server_new.crt 
```
:::(info) (**Info**)
The CAs `caCert.crt` and `caCert.key`. They must be acquired from senhasegura and entered into Oracle.
:::

Execute the following command to convert the created certificate to pkcs12 format:

```json
openssl pkcs12 -export -out server_new-wallet.p12 -inkey server_new.key -in server_new.crt -chain -CAfile caCert.crt -passout pass:server_newpass123
```

### Step 2 - Generate server wallet using orapki

To create a new wallet, execute the following commands:
:::(warning) (**Attention**)
Make sure to replace `<SERVER_CERTIFICATE_LOCATION>` with the correct certificate location.
:::

```json
orapki wallet create -wallet "/<SERVER_CERTIFICATE_LOCATION>" -pwd server_newpass123 -auto_login
orapki wallet import_pkcs12 -pkcs12file server_new-wallet.p12 -pkcs12pwd server_newpass123 -wallet "/<SERVER_CERTIFICATE_LOCATION>" -pwd server_newpass123
```

To save the wallet, you can save it in the OPT directory or wherever is better, according to your company's rules.

### Step 3 - Edit the sqlnet.ora file

Add the following content:
:::(warning) (**Attention**)
Make sure to replace `<SERVER_WALLET_LOCATION>` with the correct Wallet location.
:::

```json
WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = <SERVER_WALLET_LOCATION>)))
SQLNET.AUTHENTICATION_SERVICES = (TCPS)
SSL_CLIENT_AUTHENTICATION = TRUE
```

### Step 4 - Edit the listener.ora file

:::(warning) (**Attention**)
Make sure to replace `<SERVER_WALLET_LOCATION>` with the correct Wallet location
:::
:::(info) (**Info**)
The `HOST = 0.0.0.0` configuration allows any IP to connect. Adjust it according to your needs.
:::

```json
SSL_CLIENT_AUTHENTICATION = TRUE
    WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = <SERVER_WALLET_LOCATION>)))
    LISTENER =
        (DESCRIPTION_LIST =
            (DESCRIPTION =
                (ADDRESS = (PROTOCOL = TCP)(HOST = 0.0.0.0)(PORT = 1521))
                (ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
                (ADDRESS = (PROTOCOL = TCPS)(HOST = 0.0.0.0)(PORT = 2484))
    )
  )
```

### Step 5 - Restart listener service

1. Execute the command: `lsnrctl stop`
2. Then execute: `lsnrctl start`

---
## Set up credentials in Oracle
For each database user used in senhasegura, it is necessary to collect a certificate.

1. Go to the **Oracle Database**.
2. Use the following queries:
    :::(warning) (**Attention**)
    For the Oracle Database Proxy to connect to the database using this user-created, the database user-created with the query must have at least permission to create sessions in the database. Other types of privileges are administered by the Database Admin (DBA).
    :::

    1. `ALTER SESSION SET "_ORACLE_SCRIPT"=true`
    2. `CREATE USER credencial_name IDENTIFIED EXTERNALLY AS 'CN=credencial_name';`

---
## Next:
[How to configure a device in senhasegura to use Database Proxy with Oracle](/v3-32/docs/pam-session-how-to-configure-a-device-in-senhasegura-to-use-database-proxy-with-oracle)
[How to configure a credential in senhasegura to use Database Proxy with Oracle](/v3-32/docs/pam-session-how-to-configure-a-credential-in-senhasegura-to-use-database-proxy-with-oracle)
[Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).