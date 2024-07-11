## Metadata_Start 
## code: en
## title: How to connect a Google Cloud Platform project 
## slug: cloud-entitlements-how-to-connect-a-google-cloud-platform-project 
## seoTitle: How to connect a Google Cloud Platform project 
## description:  
## contentType: Markdown 
## Metadata_End
In this article, you'll learn how to connect **Cloud Entitlements** to your Google Cloud Platform (GCP) projects.



## Requirements

* A Service account that contains the following roles:
    * `iam.serviceAccountKeys.list`
    * `iam.serviceAccounts.list`
    * `iam.roles.list`
    * `iam.roles.get`
    * `resourcemanager.organizations.getIamPolicy`
    * `resourcemanager.projects.getIamPolicy`
    * `resourcemanager.projects.list`

* Provide the Service account with a **Key**.

* Enable the following APIs:
    * Resource Manager.
    * Identity and Access Management (IAM).
    * Cloud Assets.




## How to connect a Google Cloud Platform project


To connect your GCP project to **Cloud Entitlements**, follow these steps: 

1. Go to **Cloud Entitlements** left menu.
2. Click **Cloud setup** to open a dropdown menu.
3. Select **Google Cloud Platform**.
4. On the upper right corner, click **+ Connect**.
5. Enter a **Name** to identify your GCP project within **Cloud Entitlements**.
6. Enter your **Project ID**.
7. Upload the Service account **JSON key** file.
8. Click **Save**.

If connected successfully, your GCP project will appear in the list of connected projects.


To make any necessary changes, click the **Edit** button to access the settings.

Additionally, you can activate or deactivate projects in Cloud Entitlements by moving the **Status bar**.

* * *
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/). 