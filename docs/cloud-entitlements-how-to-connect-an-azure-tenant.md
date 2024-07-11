## Metadata_Start 
## code: en
## title: How to connect an Azure tenant 
## slug: cloud-entitlements-how-to-connect-an-azure-tenant 
## seoTitle: How to connect an Azure tenant 
## description:  
## contentType: Markdown 
## Metadata_End
In this article, you'll learn how to connect **Cloud Entitlements** to your Azure tenants.

## Requirements
Before proceeding, ensure that you meet the following requirements:

* Create an Azure App with the following API permissions attached:
:::(Info) (Info)
Make sure to use application permissions instead of delegated permissions.
:::

    * `Application.Read.All`.
    * `Directory.Read.All`.
    * `AuditLog.Real.All`.
    * `Group.Read.All`.
    * `RoleManagement.Read.Directory`.
    * `User.Read.All`.
    * `UserAuthenticationMethod.Read.All`.

* Grant Admin consent to the API permissions you attributed to the App registration.
* Ensure that the tenant has an active subscription.
* Add the *reader* role to the application.
* Create a client secret on the Certificates and secrets menu of your application. 

## How to connect an Azure tenant

To connect an Azure tenant to **Cloud Entitlements**, follow these steps:

1. Navigate to the left menu within **Cloud Entitlements**.
2. Click **Cloud setup** to open the dropdown menu.
3. From the drop-down menu, select **Microsoft Azure**.
4. Click the **+ Connect** button on the screen's upper right corner. 
5. Enter a **Name** to identify your Azure tenant within **Cloud Entitlements**.
6. Enter the **Tenant ID**.
7. Enter the **Secret value**.
:::(Info) (Info)
The **Secret value** won’t be available for consulting after connecting with the tenant.

:::

8. Enter the **Application ID**.
:::(Info) (Info)
It's not possible to use different App registrations that belong to the same tenant, as it would cause duplicity.

:::
9. Click **Save**.

If the connection is successful, your Azure tenant will appear in the list of connected accounts. 

To make any necessary changes, click the **Edit** button to access the settings.

Additionally, you can activate or deactivate tenants in **Cloud Entitlements** by moving the **Status bar**.


* * *
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).


