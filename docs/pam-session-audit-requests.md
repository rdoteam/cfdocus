## Metadata_Start 
## code: en
## title: Requests 
## slug: pam-session-audit-requests 
## seoTitle: Requests 
## description:  
## contentType: Markdown 
## Metadata_End
This article contains detailed information about the **Requests** report, where you can view all the requests for command execution, whatever the status of the request.
***
### Access the report

1. At the senhasegura platform, in the upper left corner, click on the **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. On the side menu, select **Access control** > **Audited commands** > **Requests**.

***

### Homepage buttons
**Item**|**Description**
|---|---|
**Show filters**|It's identified by the magnifying glass icon. It displays or hides the search fields on the screen.
**Update**|It's identified by the counterclockwise arrow icon. It refreshes the page.
**View actions**|It's identified by the three vertical dots icon. It's a menu with possible actions for the report.
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
**Requester**|Name from the user who’s requesting.
**Request date**|Date and time the request was made.
**until**|End date for search the requests.
**Status**|Request status, such as: *Pending, Approved, Rejected, Expired* and *Cancelled*.
**Governance**|ID code for ITSM software (*IT Service Management*).
**Reason**|The reason why the user needs to run the requested command. Such as: *Change, Device with no connectivity, Incident* and *Other*.
**Filter**|Button to filter and show the results according to your chosen preferences.
**Clear**|Clear all the text boxes with the options that were previously selected.
***

### Report fields

* **ID**
* **Operation**
* **Access group**
* **Requester**
* **Request on**
* **Status**
* **Expiration**
* **Governance**
* **Reason**
* **Action**
    * **Magnifying glass**: Details

#### Request details page

**Item**|**Description**
|---|---|
**Requester**|Name from the user who’s requesting.
**Command execution request**|Operation type that has been requested.
**Status**|Request status.
**ID**|Identification number for the request.
**Access group**|Group the user belongs.
**Requested in**|Date and time the request was made.
**Expiration**|End date that the request will expire automatically.
**Approvals**|Number of approvals.
**Disapprovals**|Number of disapprovals.
**Approver**|Approver’s name.
**Level**|Approver’s level.
**Response**|Approver’s answer, such as: *Not answered, Approved* and *Rejected*.
**Date**|Date from the approver’s answer.
**Justification**|Approver’s justification.
**Governance ID**|ID code for ITSM software.
**Reason**|The reason why the user needs to use the requested command. Such as: *Change, Device with no connectivity, Incident* and *Other*.
**Request details**|Summary of the request information.

:::(info) (**Info**)
The report only displays 30 lines per page. To go to the next ones, click on the advance buttons at the end of the report.
:::