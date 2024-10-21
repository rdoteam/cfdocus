# How to configure and start an MS SQL Server session with DBeaver 

In this document, you will find a step-by-step guide on how to configure and start an MS SQL Server-type Database Proxy session in the DBeaver database manager.

:::(warning) ()
Database Proxy has a default limit of 2.000 simultaneous connections. This can be changed, but there will be a significant provisioning increase in memory, taking into account that each connection slot uses around 64kb of memory. To make this increase, contact the support team.
:::

## Requirements

* Have a credential configured for using the Database Proxy. To find out how to register a credential, access the  document.
* Have the DBeaver application installed.
---

## Configure the database

1. Open the  application.
2. On the home screen, in the top left corner, click on the icon represented by a socket plug and the plus sign.
3. In the pop-up window that opens,  and select the database .
4. Click .
5. At  tab, fill in the fields with the following information:
    1. : enter the IP number of the vault to be accessed.
    2. : default port number of the database. If you use a port number other than the default, enter the number used.
    3. : enter the name of the database that will be accessed.
    4. : choose the option SQL Server Authentication.
    5. : enter the information as desired:
        1. Using a :  
        2. Using  when logging into the application, the domain registered in the credential must appear before the credential username, as the example below: .
            :::(info) ()
            To learn how to register domain credentials, access the  document.
            :::
        7. Using an  for authentication, whether with a regular or domain credential, the token must be inserted at the end: 
    8. : enter your password to access the safe.
6. Click .

Because DBeaver is a database manager that supports multiple databases, the database settings were grouped into folders in the side menu, . Click on the folder corresponding to the database  and check if the database that was configured is present in the list.

---

## Start the Database Proxy session
1. In  application, navigate to the left side menu, .

1. Double-click on the database you want to access.

3. In the connection pop-up window that opens, enter your access password.
4. Click .

All database information will be available in the side menu below the selected database in waterfall format.

---

Do you still have questions? Reach out to the .