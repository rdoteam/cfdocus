# Session video 

In this document, you'll find all the information about the  report that shows the remote session information and the ability to view and download the session recording.

:::(info) ()
To be able to download the session, the parameter , needs to have the option  set. To learn more about the system parameters, access the documentation .
:::

## Path to access

1. On senhasegura, in the upper-left corner, click the , identified by the nine square, and then select .
2. In the side menu, select  > .
3. In the list of finished remote sessions, in the  column, click the  icon.

:::(warning) ()
From version 3.33 onwards, the icon for viewing the session video will only be available to PAM Administrator, PAM Auditor, and System Administrator roles that have the PAM.SessionManagement.Recording permission included in their role.
:::

---
## Sections of the Video of session screen

#### Session Info tab

|  |  |
|---|---|
|  | Identification of the session held. |
|  | Session start date and time. |
|  | Date and time of the end of the session. |
|  | The protocol used by the session. |
|  | IP number of the accessed device. |
|  | Username of the credential used. |
|  | Error message displayed to the user, if it occurs. |

#### User info tab
|  |  |
|---|---|
|  | Name of the user who performed the access. |
|  | IP address of the machine that performed the access. | 

#### Session tab
|  |  |
|---|---|
|  | Displays the video file size of the session. |
|  | Displays the time the session was active. |
| * | When clicked, it opens the session video viewing window. |
|  | When clicked, it displays a message box asking for confirmation for the video to be downloaded. When clicking Yes, a video generation message is displayed. |

:::(warning) ()
*The  function for sessions that are used via the Proxy 2.0 will have a new viewing browser where it will be possible to access the heat map via the video timeline as well as the keystroke log. Also, all the audio available during the session will have been recorded and will be played along with the video display. To find out more about this function, access the  document.
:::

:::(info) ()
* The video is downloaded by email as soon as the conversion is complete.
* If senhasegura is being used in a cluster, videos may take a few seconds or minutes to synchronize with other cluster members before the video is available.
* After receiving the email notifying you that the video has been generated, go back to the session's Video page to download the video.
:::

#### Video of session tab
|  |  |
|---|---|
|  | The final size of the video. |
|  | The final time of the video. |
|  | Type of the video format. |
|  | Click to download the video. | 

:::(warning) ()
In session videos like , it won’t be possible to view the results record when performing queries on database tables. This occurs for information security. In the log, only the success message will be recorded, in some cases with the number of rows that the query returned, or the error message in cases of failure.
:::