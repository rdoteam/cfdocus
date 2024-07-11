## Metadata_Start 
## code: en
## title: Identities general information 
## slug: cloud-entitlements-identities-general-information 
## seoTitle: Identities general information 
## description:  
## contentType: Markdown 
## Metadata_End
**Cloud Entitlements** provides general information about the identities registered in your Cloud Service Providers (CSPs). In this article, you can consult the information provided for each one of CSPs identities. 


For instructions on accessing and viewing identities general information, refer to the article [How to view an Identity's information](/v3-32/docs/cloud-entitlements-how-to-view-an-identitys-information).

* * *
## AWS identities information

::: (error) (Important)
If the AWS account associated with the identity no longer has a valid access key, **Cloud Entitlements** will display an alert.
:::


### Users
For AWS Users, **Cloud Entitlements** provides detailed usage information, including the following metrics:



| Item | Description|
| --- | --- |
| **All used** |The total number of accessed services. |
| **30 Days** |The number of services accessed in the last 30 days.|
| **60 days** | The number of services accessed in the last 60 days. |
| **90 days** | The number of services accessed in the last 90 days. |
| **Never used** | The number of services the user has access to but never used.|

Additionally, **Cloud Entitlements** generates a report that outlines the AWS user's **Service usage**, including the specific services used, associated policies, and the date of usage.

### Roles

**Cloud Entitlements** lists the **Policies** attached to the **Role**, categorized by **Type**.


### Groups

**Cloud Entitlements** lists the **Group Members** and the **Policies** attached to the Group.



* * *

## GCP identities information 


### Users
**Cloud Entitlements** provides the following information about GCP Users:

* **Roles**: lists the roles associated with the User, categorized by **Type** and **Name** of the role. 
* **Services**: lists the services to which the user has access through roles.


### Service accounts
**Cloud Entitlements** provides the following information about GCP Service accounts:

* **Roles**: lists the roles associated with the Service account, categorized by **Type** and **Name** of the role. 
* **Services**: lists the services to which the Service account has access through roles.
* **Access key**: provides the **Key ID**,  **Key creation date**, and the **Key expiration date** of the Service account access keys.  



## Azure identities information

### Users
**Cloud Entitlements** provides the following information about Azure Users:

* **Administrator access badge**: indicates whether the User has administrative privileges within Azure.
* **Subscription resources**:lists the Subscription resources associated with the User, categorized by:
    * **Subscription**: provides the Subscription resource identifier.
    * **Resource**: provides the name of the resource.
    * **Type**: informs the type of the resource.
    * **Roles**: informs the role attached to the User allowing access to the Subscription resource.
    * **Action**: provides the actions that the User can perform with the resource. If the field shows an asterisk (*), it indicates that this resource allows all actions.


* **Auth methods**: lists the various authentication methods associated with the User.
* **Roles**: lists the roles assigned to the User, categorized by:

    * **Name**: provides the name of the role assigned to the User.
    * **Direct**: informs whether the role was assigned directly to the User. Possible values are: **Yes** or **No**.
    * **Type**: indicates the type of the role assigned to the User.

### Groups
**Cloud Entitlements** provides the following information about Azure Groups:

* **Members**: lists the members of the Group, categorized by the identity **Type**.
* **Subscription resources**:lists the Subscription resources associated with the Group, categorized by:
    * **Subscription**: provides the Subscription resource identifier.
    * **Resource**: provides the name of the resource.
    * **Type**: informs the type of the resource.
    * **Roles**: informs the role attached to the Group allowing access to the Subscription resource.
    * **Action**: provides the actions that the Group can perform with the resource. If the field shows an asterisk (*), it indicates that this resource allows all actions.
* **Roles**: lists the roles assigned to the Group, categorized by:
    * **Name**: provides the name of the role assigned to the Group.
    * **Direct**: informs whether the role was assigned directly to the Group. Possible values are: **Yes** or **No**.
    * **Type**: indicates the type of the role assigned to the Group.

### Applications
Cloud Entitlements provides the following information about Azure Applications:

* **Roles**: lists the roles associated with the Application, categorized by:
    * **Name**: provides the name of the role assigned to the Application.
    * **Direct**: informs whether the role was assigned directly to the identity. Possible values are: Yes or No.
    * **Type**: indicates the type of the role assigned to the Application.
* **Subscription resources**: lists the Subscription resources associated with the Application, categorized by:
    * **Subscription**: provides the subscription identifier.
    * **Resource**: provides the name of the resource.
    * **Type**: informs the type of the resource.
    * **Roles**: informs the role attached to the Application allowing access to the Subscription resource.
    * **Action**: provides the actions that the Application can perform with the resource. If the field shows an asterisk (*), it indicates that this resource allows all actions.


	