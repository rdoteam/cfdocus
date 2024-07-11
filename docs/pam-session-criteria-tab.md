## Metadata_Start 
## code: en
## title: Criteria tab 
## slug: pam-session-criteria-tab 
## seoTitle: Criteria tab 
## description:  
## contentType: Markdown 
## Metadata_End
In this article, you’ll find all the information about the **Criteria** tab from the registration screen for a new access group. In this section, it’ll be decided which devices and credentials the group's users can access.

:::(info) (**Info**)
To find out how to register an access group, access the [How to add an access group](/v3-32/docs/pam-session-how-to-add-an-access-group) documentation.
:::

### Path to access

1. On the senhasegura, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings** > **Access** > **Access groups** > **+ New**.

---

## Access group registration - Criteria

* **Device (comma separated)**: device registration name.
    :::(info) (**Info**)
    For a device to be valid for users in the access group, this field must contain the registration name plus the device's IP number. For example: `DEVICE-TEST(100,100,100,100)`
    :::
* **Product (comma separated)**: device model.
* **Username (comma separated)**: device’s username
* **Additional information (comma separated)**: text with additional information about the registration.
* **Device tags (comma separated)**: tags registered for the devices.
* **Credential tags (comma separated)**: tags registered for credentials.
* **Site***: All and Default
* **Type of device***: All,  Database, Domain, Firewall, Load Balancer, Router, Server, Switch, Web Application, Workstation.
* **Credential type***: All, SSH Key, Domain Admin, Domain User, Local User and Local administrator.