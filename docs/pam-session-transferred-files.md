## Metadata_Start 
## code: en
## title: Transferred files 
## slug: pam-session-transferred-files 
## seoTitle: Transferred files 
## description:  
## contentType: Markdown 
## Metadata_End
This article contains detailed information about the **Transferred files** report, where you can find all the files transferred during a remote session.

:::(info) (**Info**)
To activate the log for file transfer, access the How to activate remote session file transfer triggers document.
:::
***

### Path to access

1. At the senhasegura platform, in the top left corner, click **Grid Menu**, identified by the nine squares icon, and then select **PAM Core**.
2. On the side menu, select **Access control** > **Transferred files**.

***

## Homepage icons
**Item**|**Description**
|---|---|
**Show filters**|Identified by the magnifying glass icon. It displays or hides the search fields on the screen.
**Update**|Identified by the counterclockwise arrow icon. It refreshes the page.
**View actions**|Identified by the three vertical dots icon. It shows all the possible actions for the report.
**Print report**|Identified by the printer icon. It opens a new page for printing the report.
**Export CSV**|Identified by the paper sheet icon. It downloads the report.
**Schedule report**|Identified by the clock icon. It opens the Schedule report form.

:::(info) (**Info**)
By clicking on the question mark icon on the page, you’ll be redirected to a keyword search or the documentation page.
:::
***

## Search fields

**Item**|**Description**
|---|---|
**File**|File name with the extension.
**MIME Type**|File media type. For example, text/x-shellscript, text/html, text/plain, inode/x-empty, image/jpeg, image/png, and others.
**SHA256 Checksum**|An alphanumeric sequence that verifies the data integrity and authenticity.
**Include**|Date and time that the file transfer was made in the remote session.
**until**|Final date to search the results.
**User IP**|IP number from the user who created the transfer.
**User**|Name of the user who created the transfer.
**Host**|Session IP host number 
**Port**|The port number used in the session.
**Remote user**|Remote session user owner.
**Filter**|Button to filter and show the results according to your chosen preferences.
**Clear**|Button to clear all the text boxes with the options that were previously selected.
***

## Report fields

* **ID**: number to identify the order in which the transfers were made.
* **File**
* **Size Bytes**: files size.
* **MIME Type**
* **Include**
* **User code**: code number from the user.
* **User IP**
* **Host**
* **Port**
* **Remote user**
* **SHA256 Checksum**
* **Detail**: additional information about the transfer.

:::(info) (**Info**)
The report only displays 30 lines per page. To go to the next ones, click on the advance buttons at the end of the report.
:::
