## Metadata_Start 
## code: en
## title: How to start a Database Proxy Oracle session with DBeaver on Windows 
## slug: pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-windows 
## seoTitle: How to start a Database Proxy Oracle session with DBeaver on Windows 
## description:  
## contentType: Markdown 
## Metadata_End
This article will guide you through a step-by-step process on how to use the DBeaver manager in a Database Proxy session on Windows.

:::(warning) (**Caution**)
Database Proxy has a default limit of 2.000 simultaneous connections. This can be changed, but there will be a significant provisioning increase in memory, taking into account that each connection slot uses around 64kb of memory. To make this increase, contact the support team.
:::

:::(info) (**Info**)
This process consists of configurations on the database connection and the application. Follow the steps according to the [Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations) document.
:::

### Requirements

* Download the latest version of Instant Client - [Instant Client](https://www.oracle.com/br/database/technologies/instant-client/downloads.html){target=`_blank`}
* Download the latest version of DBeaver - [Dbeaver](https://dbeaver.io/download/){target=`_blank`}
---

To get started, extract the Instant Client files to a common directory. For example, the files can be extracted to C:\Users\user1\Downloads\nstantclient_21_10\. Next, create a directory called **oracle_files**, where you can place the **tnsnames.ora** and **sqlnet.ora** files.

The contents of the **tnsnames.ora** file should be as follows:

1. Add the following content inside the tnsnames.ora:

:::(warning) (**Caution**)
Make sure to replace the following fields with the correct information.
:::

* **HOST**: Adicione o nome de host ou endereço IP do senhasegura.
* **USERNAME**: Nome de usuário para fazer login no senhasegura.
* **CREDENTIAL**: Credencial usada para acessar o banco de dados Oracle.
* **DEVICE**: Nome de host ou endereço IP do banco de dados Oracle.
* **PORT**: Porta usada para conexão SSL com o banco de dados Oracle.

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
Add the following content inside the **sqlnet.ora**:
:::(warning) (**Caution**)
In `METHOD_DATA` make sure to replace it with the user wallet location.
:::
```
WALLET_LOCATION = (SOURCE = (METHOD = FILE) (METHOD_DATA = (DIRECTORY = USER_WALLET_LOCATION)))
	SQLNET.AUTHENTICATION_SERVICES = (TCPS)
	SSL_CLIENT_AUTHENTICATION = TRUE
```

---
## Configure the DBeaver app

1. Open the **DBeaver** app.
2. On the main screen, in the left top corner, click on the icon represented by the plug and the plus sign.
3. On the pop-up window that opens, **Connect to a database**, select **Oracle**.
4. Click **Next**.
5. Click **Driver Settings**. 
6. At **Libraries** tab.
    1. replace the default library for the ones acquired at Instant Client.
7. Click **OK**.
8. At **DBeaver** folder, create a file named **start-dbeaver.bat** to declare the variables and open the DBeaver.
9. On the created file, type:
  
```json
chcp 65001 

set Path=C:\Program Files\Common Files\Oracle\Java\javapath;C:\windows\system32;C:\windows;C:\windows\System32\Wbem;C:\windows\System32\WindowsPowerShell\v1.0\;C:\windows\System32\OpenSSH\;C:\Program Files\PuTTY\;C:\Program Files (x86)\Yarn\bin\;C:\Program Files\nodejs\;C:\Program Files\Amazon\AWSCLIV2\;C:\Program Files\Meld\;C:\Users\user1\AppData\Local\Microsoft\WindowsApps;C:\Users\user1\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\user1\AppData\Local\Programs\Git\cmd;C:\Users\user1\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin;C:\Users\user1\Documents\instantclient_21_10 set TNS_ADMIN=C:\Users\user1\Documents\dbproxy\ora-files 

dbeaver
```
10. Save this file as **start-dbeaver.bat**
11. With this file, execute a custom connection at the DBeaver app.
12. On **Connection settings** > **Principal** > **Custom**, fill in the information on the filled:
    1. **JDBC URL Template**: `jdbc:oracle:oci/@<ORACLEDB_HOSTNAME>`
    2. Authentication: choose **OS Authentication**.
13. Click **Ok**.

Once this is done, the user can connect to the Oracle database through the senhasegura Database Proxy.

---
## Next:
[How to start a Database Proxy Oracle session with DBeaver on Linux](/v3-32/docs/pam-session-how-to-start-a-database-proxy-oracle-session-with-dbeaver-on-linux)
[Oracle database configuration](/v3-32/docs/pam-session-oracle-database-configurations)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.