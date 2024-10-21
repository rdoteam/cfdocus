# How to start a Database Proxy Oracle session with DBeaver on Linux 

This document will guide you through a step-by-step process on how to use the DBeaver manager in a Database Proxy session on Linux.

:::(error) ()
It’s extremely important to correctly follow the steps for configuring the Oracle database so that it functions correctly as a Database Proxy. Access documents from  to carry out the necessary steps.
:::

### Requirements

* Download the latest version of Instant Client - 
* Download the latest version of DBeaver - 

---
## Star session at the DBeaver app
After declaring the environment variables, the user can open DBeaver. For the connection to be of the custom type, follow the next steps:

1. Open the DBeaver app.
2. On the main screen, in the upper-left corner, click on the icon represented by the plug and the plus sign.
3. On the pop-up window that opens, , select .
4. Click .
5. At the  >  tab fill in the field with the information:
    1. : `jdb:oracle:oci:/@
`
6. Click on , to replace the default library for the ones acquired at  and for the  file found in the  directory.
    1. At  tab, add the files.
7. Click .

Once this is done, the user can connect to the Oracle database through the senhasegura Database Proxy.

---
## Next:


Do you still have questions? Reach out to the .