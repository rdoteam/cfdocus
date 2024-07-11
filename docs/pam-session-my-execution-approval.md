## Metadata_Start 
## code: en
## title: My execution approval 
## slug: pam-session-my-execution-approval 
## seoTitle: My execution approval 
## description:  
## contentType: Markdown 
## Metadata_End
This article contains detailed information about the **My execution approvals** report, where you can view all commands execution requests, that needs your approval.

:::(info) (**Info**)
The information on this report only appears for a user with an approval role.
:::
***
### Access the report

1. At the senhasegura platform, in the upper left corner, click on the **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. On the side menu, select **Access control** > **Audited commands** > **My execution approvals**.

***
### Homepage buttons
**Item**|**Description**
|---|---|
**Show filters**|It's identified by the magnifying glass icon. It displays or hides the search fields on the screen.
**Update**|It's identified by the counterclockwise arrow icon. It refreshes the page.
**View actions**|It's identified by the three vertical dots icon. It's menu with possible actions for the report.
**Print report**|It's the option identified by the printer icon. It opens a new page for printing the report.
**Export CSV**|It's the option identified by the paper sheet icon. It downloads the report.
**Schedule report**|It's the option identified by the clock icon. It opens the Schedule report form.

:::(info) (**Info**)
By clicking on the question mark icon on the page, you’ll be redirected to a keyword search or the documentation page.
:::
***

### Search fields

**Item**|**Description**
|---|---|
**ID**|Identification number for the request.
**Operation**|Operation type that has been requested. In this case, it will always be ‘Command execution request’.
**Access group**|Group the user belongs.
**Requester**|Name from the user that is requesting.
**Request date**|Date and time that the request was made.
**until**|Final date for searching the requests.
**Status**|Request status, such as *Pending, Approved, Rejected, Expired* and *Cancelled*.
**Governance**|ID code for ITSM software (*IT Service Management*).
**Reason**|The reason why the user needs to run the requested command. Such as: *Change, Device with no connectivity, Incident* and *Other*.
**Filter**|Button to filter and show the results according to your chosen preferences.
**Clear**|Clear all the text boxes with the options that were previously chosen.
***

## Request details page

* **ID**
* **Operation**
* **Access group**
* **Requester**
* **Requested on**
* **Status**
* **Expiration**
* **Governance**
* **Reason**
* **Action**
    * **Approve**: icon represented by the check symbol, used to approve the request. When clicked, a confirmation box opens. Click **Yes** to confirm the action.
    * Icon represented by the three vertical dots: the action button to **Reject** and look at the **Details**. When rejecting request, a confirmation box will be displayed, click **Yes** to confirm the action.

:::(info) (**Info**)
The report only displays 30 lines per page. To go to the next ones, click on the advance buttons at the end of the report.
:::