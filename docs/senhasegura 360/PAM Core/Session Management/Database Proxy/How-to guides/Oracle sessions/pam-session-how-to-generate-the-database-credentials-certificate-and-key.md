# How to generate the database credential’s certificate and key 

In this document, you’ll find a step-by-step guide on how to generate the certificate and credential key.

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
:::(error) ()
To carry out this step it’s necessary to have in hands the CA used in signing Oracle certificates and credentials. Access the first configuration document, , follow the steps and then continue with the steps in this document.
:::

## Generate the certificate and key
For each credential to be managed by senhasegura, a corresponding certificate must be generated. This certificate will be used for the senhasegura to perform authentication in the database.

It’s important that this certificate is signed with the same CA used to create the Oracle DB server wallet.

Generate the credential key and certificate
Replace the strings presented in this table with the corresponding values:

|
---|---
`
.key`|File name .key of the credential. This file will be used later when registering the credential in senhasegura.
`
.csr`|File name .csr of the credential. This file will be used later when registering the credential in senhasegura.
`'/CN=
'`|A CN of the certificate must be the exact name of the credential to be registered in senhasegura.
`
.crt`|File name .crt from CA.
`
.key`|File name .key from CA.

Run the following command to generate the credential’s key and certificate:
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

#### Create the Oracle DB access credential in the database

Run the following command to create the credential in the database:
`bash
SQL> ALTER SESSION SET "_ORACLE_SCRIPT"=true;
SQL> CREATE USER 
 IDENTIFIED EXTERNALLY AS 'CN=
'
SQL> GRANT CREATE SESSION TO 

`
:::(info) ()
The CN of the credential within the database needs to be identical to CN of the credential certificate.
:::

#### Change already created credential

:::(warning) ()
This stage is only necessary if the credential is already created in Oracle DB and needs to be changed so that it’s identified by CN used on the certificate.
:::

Run the following command to change:
`bash
SQL> ALTER SESSION SET "_ORACLE_SCRIPT"=true;
SQL> ALTER USER 
 IDENTIFIED EXTERNALLY AS 'CN=
'
SQL> GRANT CREATE SESSION TO 

`

Finishing the second step of configuring Oracle for use via Database Proxy, access the document  to perform the third part and continue the configuration.

---
Do you still have questions? Reach out to the .