# How to configure the wallet for Oracle in a cluster with grid infrastructure 

In this document, you’ll find a step-by-step guide on how to configure the Oracle server to be used in a cluster with grid infrastructure.

It’ll take five steps to configure the Oracle database to be accessible via  in senhasegura, this document is the .

!

:::(warning) ()
It’s extremely important to correctly follow the order of documents for configuring the Oracle database to function correctly as a Database Proxy.
:::

## Requirements

* Oracle DB Server configured with minimum version 19.0.0.0.0
* Server with ORAPKI installed to create Wallets.
* Connectivity of the user's workstation with senhasegura on ports 1521 and 2484.
* Database client installed.
    * Dbeaver, minimum version: 23.1.0
    * SQLPlus, minimum version: 21.0.0.0.0
    * SQL Developer, minimum version: 23.1.0.097
* Don’t have filters enabled for the certificate.

---
## Configure the wallet for Clustered Oracle
Oracle GRID has problems with certificates generated via openssl that need to be signed by a CA due to the parameter , which is mandatory but creates an inconsistency in the identification of the CN.

Therefore, when this scenario occurs, it’s recommended that self-signed certificates be created for the database credential.

To configure the server wallet and enable TCPS, perform the steps below with a grid user:

#### Create a Server Wallet 
It’ll only be necessary to perform this step if there is no wallet.
`bash
orapki wallet create -wallet 
 -pwd 
 -auto_login
`

#### Add a self-signed certificate to the wallet
`bash
orapki wallet add -wallet 
 -pwd 
 -dn "CN=
" -keysize 2048 -self_signed -validity 3650
`

#### Check wallet certificates
`bash
orapki wallet display -wallet 

`

#### Create self-signed certificate from DB credential
`bash
openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes -keyout 
.key -out 
.crt -subj "/CN=
"
`

#### Convert the certificate to .p12
`bash
openssl pkcs12 -export -out 
.p12 -inkey 
.key -in 
.crt -passout pass:

`

#### Import the .p12 to the wallet
`bash
orapki wallet import_pkcs12 -pkcs12file 
.p12 -pkcs12pwd 
 -wallet 
 -pwd 

`

#### Check wallet certificates
`bash
orapki wallet display -wallet 

`

#### Edit the files to point to the wallet and enable TCPS
`bash
vim /u01/app/oracle/product/19.0.0/dbhome_1/network/admin/sqlnet.ora
vim /u01/app/oracle/product/19.0.0/dbhome_1/network/admin/listener.ora
`

#### Restart listeners and the Scan service
`bash
srvctl stop listener -l listener
srvctl stop scan_listener
srvctl stop scan

srvctl start scan
srvctl start scan_listener
srvctl start listener -l listener

lsnrctl status
`


After finishing the first step, access the  document to perform the second part and continue the configuration.

Do you still have questions? Reach out to the .