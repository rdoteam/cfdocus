## Metadata_Start 
## code: en
## title: About remote session management 
## slug: pam-about-managing-a-session 
## seoTitle: About managing a session 
## description:  
## contentType: Markdown 
## Metadata_End
Session management is the process of controlling and monitoring remote sessions. This can include things like logging user activity, managing user permissions, and terminating sessions when necessary.

## How to manage a remote session

1. On the senhasegura platform, on the upper left corner, click the **Grid Menu**, identified by the nine squares box, and select **PAM Core**.
2. On the side menu, select **Access control > Remote sessions**.
3. On the **Action** column, it's possible to find the following operations:
    3.1. **Session logs**: makes it possible to visualize a series of information.
    3.2. **Video of session**: option to reproduce the session’s video through the protocol recording.

:::(Warning) (Important)
Downloading a video requires a lot of server resources. When you confirm the action, an email with the link to download the video is sent with a delay relative to the generation of the video in the remote session, allowing the transfer of files between sessions to be completed.
:::

4. On the same **Action** column, click the three vertical dots icon, and select one of the following options:
    4.1. **Record RemoteApp of this session**: record user usage in a session and a macro is automatically created.
    4.2. **Prevent Purge**: access to prohibit the automatic purge of the sessiom.
    4.3. **Configure Auditors**: when selecting this option, an e-mail message will be sent to the designated user so that he can review the session, which will be available in the menu **Access Control > Session for audit**.
    4.4. **Risk analysis**: when selecting this option, it's possible to analyze, in the pop-up window that opens, all the events related to that session.

:::(Info) (Info)
* To execute **Video of session** action, it’s necessary that the applied configuration to the session allows the recording.
* For users who don’t have permission, it’s necessary to make a justification.
* If senhasegura is being used in a cluster, the videos may take a few seconds or minutes to synchronize with other cluster members.
:::

***

## Next
1. [How to configure session texts](/v3-32/docs/pam-how-to-configure-session-texts).
2. [How to perform session video approvals](/v3-32/docs/how-to-perform-session-video-approvals).
3. [How to request to view a session video](/v3-32/docs/how-to-request-to-view-a-session-video).

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
