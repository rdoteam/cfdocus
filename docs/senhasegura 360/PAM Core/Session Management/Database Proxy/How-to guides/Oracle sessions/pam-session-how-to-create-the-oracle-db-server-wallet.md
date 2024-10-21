# How to create the Oracle DB server Wallet 

In this document, you’ll find a step-by-step guide on how to create an Oracle DB wallet.

It’ll take seven steps to configure the Oracle database so that it be accessible via Database proxy in senhasegura, this document is the .

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
## Create an Oracle wallet
:::(info) ()
If Oracle is already configured to use a Wallet, it isn’t necessary to create a new one. In this case, you only need to create a certificate.
:::

The first wallet to be created is that of the Oracle server. This wallet is necessary to validate the certificate related to the managed credential. For this reason, it’s necessary that both are signed by the same CA.

The CA that will be used can be either a senhasegura internal CA, which is present in the DB Proxy configuration files, or an internal client CA. It’s crucial that the same CA is used for signing the Oracle certificate as for the credentials.

Replace the strings presented in this table with the corresponding values:

|
---|---
`
.key`|File name .key from Oracle server.
`
.csr`|File name .csr from Oracle server.
`'/CN=
'`|Oracle server name in the configuration.
`
.crt`|File name .crt from CA.
`
.key`|File name .key from CA.


#### Create the CA that will be used to sign Oracle certificates and credentials
:::(warning) ()
This step is only necessary if the customer doesn’t have an internal CA, or doesn’t want to use the senhasegura CA.
:::

Run the following command to create the CA:
`bash
oracle$ openssl genrsa -out 
.key 4096
oracle$ openssl req -new -x509 -days 1826 -key 
.key -subj '/C=BR/OU=Class 2 Public Primary Certification Authority/O=VeriSign' -out 
.crt
`
:::(info) ()
If you want to use the senhasegura CA, access the document  to perform this action.
:::

#### Generate the server key and certificate from OracleDB server
Run the following command to generate the key and certificate from server:
`bash
oracle$ openssl genrsa -out 
.key 4096
oracle$ openssl req -new -key 
.key -out 
.csr -subj '/CN=
'
oracle$ openssl x509 -req -days 730 -in 
.csr -CA 
.crt -CAkey 
.key -set_serial 01 -out 
.crt
`
:::(info) ()
The CAs files  and  may originate from the user or be obtained in senhasegura. Regardless of which one, CAs must be inserted into Oracle.
:::

#### Convert Oracle DB certificate to pkcs12 format
Run the following command to convert the created certificate to pkcs12 format:
`bash
oracle$ openssl pkcs12 -export -out 
.p12 -inkey 
.key -in 
.crt -chain -CAfile 
.crt -passout pass:

`

#### Create the Wallet OracleDB server and import the .p12 certificate into the created wallet
Replace the strings presented in this table with the corresponding values:

|
---|---
`
/u01/app/wallet/
`.
`
`|Password which will be assigned to the Oracle DB wallet.
`
.p12`|Name of the .p12 file generated in the previous step.
`
`|.p12 certificate password.


Run the following command to create a new wallet:
`bash
oracle$ orapki wallet create -wallet "
" -pwd 
 -auto_login
oracle$ orapki wallet import_pkcs12 -pkcs12file 
.p12 -pkcs12pwd 
 -wallet "
" -pwd 

`

Finishing the first step of configuring Oracle for use via Database Proxy, access the document  to perform the second part and continue the configuration.

---
Do you still have questions? Reach out to the .