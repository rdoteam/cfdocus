# How to start a Database Proxy Oracle session with SQL Plus 

In this document, you’ll find a step-by-step guide on how to use the SQL Plus manager on the Windows or Linux operating system in a Database Proxy session.

:::(error) ()
It’s extremely important to correctly follow the steps for configuring the Oracle database so that it functions correctly as a Database Proxy. Access documents from  to carry out the necessary steps.
:::

## Requirements

* Download the latest version of 
* Download the latest version of 
* Download the latest version of SQL Plus, depending on the operating system used.
* Install on the client the packages: instantclient-basic and instantclient-sqlplus depending on the operating system used.

---
## Start a session with SQL Plus application on Windows

After downloading the packages, extract them both to the same folder.

The table shows the strings presented on the file and their definitions:

|
---|---
|Code page for ISO-8859-1.
|Sets and interprets the ISO-8859-1 encode.
`SET TNS_ADMIN=
tnsnames.orasqlnet.ora` files. Replace the 
 with the correct path.
|Start sqlplus with a connection identified as oraproxytcps from  file.

:::(warning) ()
For access via the  operating system, in addition to the steps below, this step must be followed where the path of the Instant Client must be pointed to the  variable, and an environment variable  must be created that points to the  files folder.
:::

Create the following file  to initialize sqlplus.
`bash
chcp 28591
SET NLS_LANG=.WE8ISO8859P1
SET TNS_ADMIN=

sqlplus /@oraproxytcps
`
After completing these steps, to use  to make the connection, double click on the  file created and the session will start.


## Start a session with SQL Plus application on Linux

For access via the operating system , you need to ensure that the  and  variables point to the correct directories in the  files folder.
Once this is configured, use the string  to connect.

---
Do you still have questions? Reach out to the .