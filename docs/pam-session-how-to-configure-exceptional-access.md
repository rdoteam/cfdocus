## Metadata_Start 
## code: en
## title: How to configure exceptional access 
## slug: pam-session-how-to-configure-exceptional-access 
## seoTitle: How to configure exceptional access 
## description:  
## contentType: Markdown 
## Metadata_End
In this tutorial, you will learn how to set up exceptional access in senhasegura.

## Requirements

- Have PAM operator permission in senhasegura
- Be registered in the list of allowed users

---
## Configure exceptional access

To set up exceptional access for a credential, follow these steps:

1. In the upper left corner, click **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. From the side menu, select **Credentials > All**.
3. In the **Actions** column, click the icon identified by the three vertical dots, and select the **Exceptional Access option**.
4. In the **Access restrictions** section, add the following information:
    4.1. In the **Start field**, add the date and time the access starts.
    4.2. In the **Duration field**, add the validity period of the access.
    4.3. In the **Allowed users** field, add the user(s) who will benefit from the access.
5. When adding the user, set the following options:
    5.1. Select **Start session** to ensure that the user logs in with the credential provided.
    5.2. Select **View password** to ensure that the user views the password of the credential provided.
6. Click **Add** to save the system users.
7. Click the **Save** button.

***
## Next
[How to manage Exceptional access](/v3-32/docs/pam-session-how-to-manage-exceptional-access).

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
