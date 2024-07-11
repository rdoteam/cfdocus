## Metadata_Start 
## code: en
## title: How to add an IGA provider to senhasegura 
## slug: administration-how-to-add-an-iga-provider-to-senhasegura 
## seoTitle: How to add an IGA provider to senhasegura 
## description:  
## contentType: Markdown 
## Metadata_End
When provisioning users through IGA, the first step is to add a provider to senhasegura. Here's a guide to help you complete this task.

* * *

1. Access the senhasegura platform.
2. In the top left corner, click **Grid Menu**, indicated by the nine-square box, and select **Settings**.
3. In the side menu, select  **Authentication > Identity Management (IGA) > Providers**.
4. In the top right corner, click the three vertical dots icon (**View Actions**) and select **+ New provider**.
5. In the registering window, complete the information on the **Settings** tab:
    1. **Name***: enter the name of the provider.
    2. **Protocol***: select **SCIM**.
    3. **Add users to Domum?*** : choose **Third-party users** or **Internal users**. This field indicates whether the provider will offer access for Domum **Internal users** or **Third-party users**, depending on your configuration.
    :::(Warning) (Caution)
    You must create a separate register for each user type provisioned, even if the access provider is the same.
    :::
    4. **Enabled***: set **Yes**.
6. In the **Authentication** tab, complete the information:
    1. **Authentication method***: select **OAUTH2.0**.
    2. **Allowed IPs (Put * to allow any IP)**: indicate the IP addresses that support communication with the IGA provider.
    3. **Allowed HTTP referrers (empty list for any source)**: leave the list empty to allow any origin.
7. Click **Save**.

A pop-up window will display a confirmation message indicating the conclusion of the process. The IGA provider you’ve just registered appears on the **Identity Management Providers** home screen. The **Add users to Domum?*** column indicates whether the provider will offer access for **Internal users** or **Third-party users**, depending on your configuration.


* * *
## Next steps

* [How to create a SCIM application with Okta](/v3-32/docs/administration-how-to-create-a-scim-application-with-okta)
* [How to manually create an activation token](/v3-32/docs/administration-how-to-manually-create-an-activation-token)

* * *
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.
