# How to modify Database Proxy port number 

:::(error) ()
On the Database Proxy installation, this configuration is automatic with a default port number. Perform these steps  if the port number that you use isn’t the default number.
:::

This article will guide you through a step-by-step process on how to set up a database to use it as a Database Proxy. 

---
### Requirements

* Be an admin user
* Start an SSH admin session into the vault. Access the  document to know how to perform this action.

---
## Set up the database
:::(warning) ()
The command line must be typed inside an SSH admin session into the vault, using an application of your preference.
:::

1. With the  admin session initialized.
    :::(warning) ()
    The values  and , must be filled in with the port number used in your database.
    :::

#### MS SQL Server database

1. At the session home screen, open the file , type:
    1. 
    2. Change the  value according to the used port number.
    3. Press .
    4. Type .
    5. Press .
2. At the home screen type:
    1. 
3. Close the SSH admin session.

#### PostgreSQL database

1. At the session home screen, open the file , type:
    1. 
    2. Change the  value according to the used port number.
    3. Press .
    4. Type .
    5. Press .
2. At the home screen type:
    1. 
3. Close the SSH admin session.

#### Oracle database

1. At the session home screen, open the file , type:
    1. 
    2. Change the  value according to the used port number.
    3. Press .
    4. Type .
    5. Press .
2. At the home screen type:
    1. 
3. Close the SSH admin session.

After all these steps, the database setup is finished.

---
## Next:



Do you still have questions? Reach out to the .