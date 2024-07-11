## Metadata_Start 
## code: en
## title: How to start a Database Proxy Oracle session with DBeaver on Linux 
## slug: pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-linux 
## seoTitle: How to start a Database Proxy Oracle session with DBeaver on Linux 
## description:  
## contentType: Markdown 
## Metadata_End
This article will guide you through a step-by-step process on how to use the DBeaver manager in a Database Proxy session on Linux.

:::(warning) (**Caution**)
Database Proxy has a default limit of 2.000 simultaneous connections. This can be changed, but there will be a significant provisioning increase in memory, taking into account that each connection slot uses around 64kb of memory. To make this increase, contact the support team.
:::

:::(info) (**Info**)
This process consists of configurations on the database connection and the application. Follow the steps according to the [Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations) document.
:::

### Requirements

* Download the latest version of Instant Client - [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html)
* Download the latest version of Oracle SQLcl - [Oracle sqlcl](https://www.oracle.com/br/database/sqldeveloper/technologies/sqlcl/)
* Download the latest version of DBeaver - [Dbeaver](https://dbeaver.io/download/)

---
## Create tnsnames.ora and sqlnet.ora files

1. Instant Client and SQLcl files must be unpacked into a common directory. For example, the Instant Client files will be in **/home/user1/instantclient_21_11/** and the SQLcl files will be in **/home/user1/sqlcl/**.
2. After that, the user should create a directory called **oracle_files**.
3. Create the **tnsnames.ora** and **sqlnet.ora** files inside the directory **oracle_files**.
4. Add the following content inside the **tnsnames.ora**:
:::(warning) (**Caution**)
Make sure to replace the following fields with the correct information.
:::

* **HOST**: add the senhasegura hostname or IP address.
* **USERNAME**: user's username to log in to senhasegura.
* **CREDENTIAL**: credential used to access the Oracle DB.
* **DEVICE**: Oracle DB hostname or IP address.
* **PORT**: port used for SSL connection to the Oracle DB.

```json
"oraproxytcps":
      oraproxytcps=
	(DESCRIPTION=
	 (ADDRESS=
	  (PROTOCOL=TCPS)
	  (HOST=SENHASEGURA_IP)
	  (PORT=2484))
	 )
	 (CONNECT_DATA=
	  (SENHASEGURA=
		(USERNAME=USERNAME_SENHASEGURA)
		(CREDENTIAL=ORACLE_SENHASEGURA_CREDENTIAL)
		(DEVICE=DEVICE_HOSTNAME)
		(PORT=ORACLEDB_PORT)
		(TOTP=0000))
	  (SERVER=DEDICATED)
	  (SERVICE_NAME=INFO)
	 )
```
Add the following content inside the sqlnet.ora:

:::(warning) (**Caution**)
In `METHOD_DATA` make sure to replace it with the user wallet location.
:::
```json
WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = USER_WALLET_LOCATION))) 	SQLNET.AUTHENTICATION_SERVICES = (TCPS) 	SSL_CLIENT_AUTHENTICATION = TRUE

```
After acquiring the Instant Client files, SQLcl, and creating the tnsnames.ora and sqlnet.ora files, the user must declare two environment variables on their device. The variables are:

* `LD_LIBRARY_PATH` = path of the Instant Client directory
* `TNS_ADMIN` = path of the tnsnames.ora and sqlnet.ora files

---
## Configure the DBeaver app
After declaring the environment variables, the user can open DBeaver. For the connection to be of the custom type, follow the next steps:

1. Open the DBeaver app.
2. On the main screen, in the left top corner, click on the icon represented by the plug and the plus sign.
3. On the pop-up window that opens, **Connect to a database**, select **Oracle**.
4. Click **Next**.
5. At the **Main** > **Custom** tab fill in the filed with the information:
    1. **JDB URL Template**: `jdb:oracle:oci:/@oraproxytcps`
6. Click on **Driver Settings**, to replace the default library for the ones acquired at **Instant Client** and for the **oraclepki.jar** file, found in the SQLcl directory.
7. At **Libraries** tab, add the files.
8. Click **OK**.

Once this is done, the user can connect to the Oracle database through the senhasegura Database Proxy.

---
## Next:
[How to start a Database Proxy Oracle session with DBeaver on Windows](/v3-32/docs/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-windows)
[Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).