# How to start a Database Proxy Oracle session with SQL Developer on Windows 

In this document, you’ll find a step-by-step guide on how to use the SQL Developer manager on the Windows operating system in a Database Proxy session.

:::(error) ()
It’s extremely important to correctly follow the steps for configuring the Oracle database so that it functions correctly as a Database Proxy. Access documents from  to carry out the necessary steps.
:::

## Requirements

* Download version 21.8 of 
* Download the latest version of 
* Download the latest version of 
* Install on the client the package: instantclient-basic

---
## Start a session with SQL Developer application

After downloading the packages, extract them both to the same folder.

The table shows the strings presented on the file and their definitions:

|
---|---
|Page encoding to UTF-8.
`PATH=
`|Windows environment variable where you need to include the instantclient path.
|Environment variable to indicate the file  and  path.
|IDE startup shell.

Create the following  file in the SQL Developer installation root folder to initialize:
`bash
chcp 65001
PATH=

SET TNS_ADMIN=
sqldeveloper
`

After running the  it’s necessary to configure the connection:

1. Open the application .
2. On the home screen, in the upper-left corner, click the , .
3. In the pop-up window that opens, , fill in the information:
    1. : Add a name for the connection.
    2. : Oracle.
    3. On the  tab, on the  field select the  option.
    4. On the  field, select the  option.
4. On the  tab, fill in the  field with the following information.
    1. `jdbc:oracle:oci:/@
`
        :::(info) ()
        Replace with the identifier entered in the  file.
        :::
5. Click .
6. After the test, the message will appear in the bottom left corner .
7. Click .

Once this is done, the user can connect to the Oracle database through the senhasegura Database Proxy.

---
Do you still have questions? Reach out to the .