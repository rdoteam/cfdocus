# Sessions for audit 

In this document, you'll find all the information about the report , which shows the list of sessions configured to be audited during use.

:::(info) ()
You’ll only be able to view sessions for which you are registered as an auditor.
:::

---
### Path to access

1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select  > .
---

## Top bar
|
|---|---|
|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
|Represented by the counterclockwise arrow icon, it refreshes the page.
|Represented by the three vertical dots icon, it shows all the possible actions for the report.
|Represented by the printer icon, it opens a new page for printing the report.
|Represented by the paper sheet icon, it downloads the report.
|Represented by the clock icon, it opens the Schedule report form.


## Search fields

| | |
| ------------- | -------------- |
| | Identification number for the session.|
| | Identifier of the session.|
| | The credential that was accessed.|
| | The IP address or hostname of the accessed device.|
| | The name of the user who accessed the session.|
| | The IP address of the source machine that performed the access. |
| | The protocol used for access.|
|  | Date and time the session started.|
| | End date for searching records.|
| | Status that shows whether or not the session has been audited. The options are Yes and No. |
| | Button to perform the search according to the chosen filters. |
| | Button to clear the filters.|

## Report fields

* .
* .
* .
* .
* .
* .
* : identifier of the session held.
* .
* : session start date and time.
* : session end date and time.
* : session duration.
* :
    * : represented by the four horizontal bars icon, it opens the screen with information about the session.
    * : a drop-down menu with the possible actions to be performed.
        * : opens the screen  with a space for the auditor to enter comments about the session.
        * : opens the  screen with session information with the possibility of viewing or downloading the video.
        :::(info) ()
        Note that when generating a video for download, a large amount of resources on the server will be consumed.
        :::
        * : click  in the confirmation box to continue with the action. When confirming, the field  will be changed to , confirming that the session has been audited.
        * : opens the screen Audit log with information about the session auditors and auditors comments.

:::(info) ()
The report displays 30 records per screen. To go to the next screen, click the next buttons at the end of the report.
:::

### Session logs screen

#### Session info tab
* : session identification code.
* : session start date and time.
* : session end date and time.
* : type of session accessed.
* : IP number of the session host.
* : name of the user registered in the credential.
* : message displayed if an access error occurs.

#### User info tab
* : name and username of the user who performed the access.
* : IP address of the user's machine.

#### Session events tab
* : username of the user who started the session.
* : date and time of actions performed during the session.
* : the event held in the session.
* : observation message for each event.

#### Session logs tab
* : text box to search for a specific term used during the session.
* : button to perform the search.
    * Image with all events and actions carried out within the session.
* : located at the bottom of the screen, it exports session data in  format.