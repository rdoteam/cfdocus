# How to create a senhasegura user wallet 

In this document, you’ll find a step-by-step guide on how to create a user wallet to be used via the Oracle Database Proxy.

It’ll take seven steps to configure the Oracle database so that it’s accessible via Database proxy in senhasegura, this document is the .

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
## Create wallet and import the certificate

The complete authentication process for DB Proxy with Oracle is performed via SSL. Therefore, the senhasegura user must also authenticate via certificate, using their IDE, for the connection to be established.
So, the senhasegura user must also have a wallet, which must be located on their workstation.

Before creating the wallet, it’s necessary to generate the senhasegura user certificate. To do this, the user must access the  menu, within the user's preferences.

After generating a certificate, the user must download the file , which will later be imported into your wallet. The file needs to be transferred to the location where the wallet will be generated.

:::(info) ()
To find out how to collect the user's certificate in senhasegura, access the document, .
:::

---
#### Create wallet and import certificate
With the file  in hand, the wallet must be created and the certificate must be imported.

Replace the strings presented in this table with the corresponding values:

|
---|---
`
/tmp/
`
`
`|Password to be assigned to the user's wallet.
`
.p12.p12` of user.
`
.p12`. This password is in the senhasegura form, where the file was downloaded in the previous step.

Run the following command to create the wallet and import the certificate:
`bash
oracle$ orapki wallet create -wallet "
" -pwd 
 -auto_login
oracle$ orapki wallet import_pkcs12 -pkcs12file 
.p12 -pkcs12pwd 
 -wallet "
" -pwd 

`

#### Collect the generated wallet and transfer it to the user's workstation

To do this, you can compress the wallet folder to facilitate the transfer.
`bash
oracle$ tar -cvzf orcl_user1-wallet.tar.gz /tmp/

`

After transfer to the user's workstation, you must extract the content and store it in a location of your choice. This location will be used to configure the IDE of your choice.

Finishing the third step of configuring Oracle for use via Database Proxy, access the document  to perform the fourth part and continue the configuration.

---
Do you still have questions? Reach out to the .