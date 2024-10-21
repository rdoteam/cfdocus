# How to configure the Oracle server to use wallet authentication 

In this document, you’ll find a step-by-step guide on how to configure the Oracle server to accept connections via SSL.

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
## Configure the Oracle server
For Oracle DB to accept authentication via SSL using Oracle Wallet, some configurations are required on the server side.

#### Listener Parameter file
Identify the path to the files  and . Upon return from execution, the Listener Parameter File field will present the current path of the  file, and the  file will be in the same directory.

`bash
oracle$ lsnrctl status
`

#### sqlnet.ora

Edit the file to accept connections via SSL using Oracle Wallet.
`bash
oracle$ vim /u01/app/oracle/product/19c/dbhome_1/network/admin/sqlnet.ora

WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = 
)))
SQLNET.AUTHENTICATION_SERVICES = (TCPS)
SSL_CLIENT_AUTHENTICATION = TRUE
`

#### listener.ora
Edit the file to add the following content:

`bash
oracle$ vim /u01/app/oracle/product/19c/dbhome_1/network/admin/listener.ora

SSL_CLIENT_AUTHENTICATION = TRUE
WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = 
)))
LISTENER = 
	(DESCRIPTION_LIST = 
		(DESCRIPTION = 
			(ADDRESS = (PROTOCOL = TCP)(HOST = 0.0.0.0)(PORT = 1521))
			(ADDRESS = (PROTOCOL = IPC)(KEY = EXTPROC1521))
			(ADDRESS = (PROTOCOL = TCPS)(HOST = 0.0.0.0)(PORT = 2484))
		)
)
`

#### lsnrctl
For the settings to take effect, you must restart the service.
`bash
oracle$ lsnrctl stop
oracle$ lsnrctl start
`

After this step, Oracle DB Server will accept SSL connections through port 2484.
When a  is enabled, you won’t be able to log in with  via  using the password. Be sure to warn the customer about this behavior. Other users with administrator privileges can log in with a password.

Finishing the fourth step of configuring Oracle to be used via Database Proxy, access the document  to perform the fifth part and continue the configuration.

---
Do you still have questions? Reach out to the .