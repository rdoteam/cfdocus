# How to configure IDEs for the end user to connect to Oracle DB 

In this document, you’ll find a step-by-step guide on how to configure the IDEs.

It’ll take five steps to configure the Oracle database so that it’s accessible via  in senhasegura, this document is the .

!

:::(warning) ()
It’s extremely important to correctly follow the order of documents for configuring the Oracle database to function correctly as a Database Proxy.
:::

## Requirements

* Oracle DB Server configured the minimum version is 19.0.0.0.0
* Server with ORAPKI installed to create Wallets.
* Connectivity of the user's workstation with senhasegura on ports 1521 and 2484.
* Database client installed.
    * Dbeaver, minimum version:23.1.0
    * SQLPlus, minimum version:21.0.0.0.0
    * SQL Developer, minimum version:23.1.0.097
* Don’t have filters enabled for the certificate.
* Download the latest version of 

---
## Configure the IDE
To access Oracle DB using the Database Proxy, it’s possible to use IDEs approved by senhasegura.

Some specific configurations are required on the user's workstation for this access to be possible.

1. Unzip the Instant Client files into a directory of the user's choice. For example: .
2. Create a directory called , in which the configuration files used for the connection via DB Proxy will be centralized. For example: .
3. Create within the directory  the  file, with the content as shown below.

Replace the strings presented in this table with the corresponding values:

|
---|---
`
`|IP address of the senhasegura instance.
`
`|Username of the senhasegura user.
`
`|Database credential username.
`
`|Oracle server IP address.
`
lsnrctl status` at Oracle DB.
`
`|It must be replaced with the user's wallet path, which was transferred to the user's workstation in the final step of creating the user's wallet.

`bash

=
    (DESCRIPTION=
            (ADDRESS=
                (PROTOCOL=TCPS)
                (HOST=
)
                (PORT=2484)
     )
    (CONNECT_DATA=
            (SENHASEGURA=
                (USERNAME=
)
                (CREDENTIAL=
)
                (DEVICE=
)
                (PORT=2484)
                (TOTP=0000))
            (SERVER=DEDICATED)
            (SERVICE_NAME=
)
      )
)
`
:::(warning) ()
To use the Oracle Database Proxy in multi-tenant it’s necessary to indicate the tenant that will be used. This data must be passed through the command line , which must be inserted immediately after the TOTP, respecting the existing indentation.
:::

Create within the directory  the  file, with the following content:
`bash
WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = 
)))
SQLNET.AUTHENTICATION_SERVICES = (TCPS)
SSL_CLIENT_AUTHENTICATION = TRUE
`

1. Configure the environment variables to point to the Instant Client and the  and  files.
    1. Add to  variable the path to the Instant Client directory: For example: 
    2. Create a new  variable, pointing to the directory where the  is located. For example: 

Finishing the fifth step of configuring Oracle to be used via , the configuration is ready and the end user can now access the sessions.

Access the documents below to learn how to start the sessions:




Do you still have questions? Reach out to the .