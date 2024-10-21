# How to start a MS SQL Server session with MS SQL Server Management Studio 

In this document, you'll find a step-by-step guide on how to start an MS SQL Server-type Database Proxy session in the MS SQL Server Management Studio database manager.

:::(warning) ()
Database Proxy has a default limit of 2.000 simultaneous connections. This can be changed, but there will be a significant provisioning increase in memory, taking into account that each connection slot uses around 64kb of memory. To make this increase, contact the support team.
:::

## Requirements

* Have a credential configured for using the Database Proxy. To find out how to register a credential, access the  document.
* Have the app MS SQL Server Management Studio installed.
---

:::(warning) ()
The database is viewed according to each user's viewing permission. If the user has access permission but doesn’t have permission to view the desired database, the connection won’t be granted. Sessions will only be held if the user has viewing permission to databases.
:::

## Start the Database Proxy session

1. Open the application .
2. In the initial pop-up window, , fill in the fields with the following information:
4. If the pop-up doesn't open automatically, in the  left menu, click on the  icon or on the icon represented by a socket plug.
    1. : choose the Database Engine option.
    2. : IP number of the vault that will be accessed.
    3. : choose the  option
    4.  : enter the information as the example below: 
    5. Using  when logging into the application, the domain registered in the credential must appear before the credential username, as the example below: .
    :::(info) ()
    To learn how to register domain credentials, access the  document.
    :::
    9. Using an  for authentication, whether with a regular or domain credential, the token must be inserted at the end: 
    10. : enter your password to access the safe.
6. Click .

At the end of all these steps, access to the proxy database is complete. Check in the side menu, , all the information and folders of the accessed database.


:::(error) ()
Due to MS SQL Server Management Studio's default behavior of maintaining connections in the background even after they are disconnected, sessions via Database Proxy will only be considered as finished for senhasegura when the MS SQL Server Management Studio client is completely closed.
:::

---

Do you still have questions? Reach out to the .