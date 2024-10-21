# How to transfer a file over RDP Web Proxy sessions 

In this document, you’ll find a step-by-step guide on how to perform the file transfer via an RDP Web Proxy session on senhasegura.

## Requirements

* Have a RDP Web Proxy session available.
* Have the * and * fields set up to . For more information on how to enable this field, access the  document.

---
## Access the session

1. On senhasegura, in the upper-left corner, click on the , represented by the nine squares, and select .
2. In the side menu, select  > .
3. From the list, select a session that is of the web type.
4. Click on the  icon .

When starting an RDP Web session and the parameter  is enabled, the Web Proxy will make a mapped drive available in the target session, the  driver is mapped and named by .

:::(info) ()
If the  letter is already being used on your machine for another driver, access the  document, to find out how to make the change.
:::

Through this mapped drive, the user will have access to the files loaded at the destination and will transfer the files from the connected device for download to the workstation.

### To upload

1. Drag a file from the source workstation to the browser window hosting the session.
2. A progress bar for this upload will appear in the bottom-right corner of the session.
3. At the end of the transfer, this file will be available in the root folder of the G driver.

### To download

1. Copy a file from the target device to the folder .
2. A download window in the bottom-right corner of the browser, and a message will appear in the window when the file has been transferred.

---
### Next:




Do you still have questions? Reach out to the .