# How to start a Database Proxy Oracle session with DBeaver on Windows 

This document will guide you through a step-by-step process on how to use the DBeaver manager in a Database Proxy session on Windows.

:::(error) ()
It’s extremely important to correctly follow the steps for configuring the Oracle database so that it functions correctly as a Database Proxy. Access documents from  to carry out the necessary steps.
:::


### Requirements

* Download the latest version of Instant Client - 
* Download the latest version of DBeaver - 
---

---
## Star session at the DBeaver app

1. Open the  app.
2. On the main screen, in the left top corner, click on the icon represented by the plug and the plus sign.
3. On the pop-up window that opens, , select .
4. Click .
5. Click . 
6. At  tab.
    1. replace the default library for the ones acquired at .
7. Click .
8. At  folder, create a file named  to declare the variables and open the DBeaver.
9. On the created file, type:
  
`json
chcp 65001 

set Path=C:\Program Files\Common Files\Oracle\Java\javapath;C:\windows\system32;C:\windows;C:\windows\System32\Wbem;C:\windows\System32\WindowsPowerShell\v1.0\;C:\windows\System32\OpenSSH\;C:\Program Files\PuTTY\;C:\Program Files (x86)\Yarn\bin\;C:\Program Files\nodejs\;C:\Program Files\Amazon\AWSCLIV2\;C:\Program Files\Meld\;C:\Users\user1\AppData\Local\Microsoft\WindowsApps;C:\Users\user1\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\user1\AppData\Local\Programs\Git\cmd;C:\Users\user1\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin;C:\Users\user1\Documents\instantclient_21_10 set TNS_ADMIN=C:\Users\user1\Documents\dbproxy\ora-files 

dbeaver
`
10. Save this file as 
11. With this file, execute a  connection at the DBeaver app.
12. On  >  > , fill in the information on the fields:
    1. : `jdbc:oracle:oci/@
`
    2. : choose the desired option.
        :::(warning) ()
        If the  option is selected, the  and  fields must remain empty. Filling in these fields will cause a connection error.
        :::

13. Click .

Once this is done, the user can connect to the Oracle database through the senhasegura Database Proxy.

---
## Next:


Do you still have questions? Reach out to the .