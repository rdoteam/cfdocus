## Metadata_Start 
## code: en
## title: Audit 
## slug: cloud-entitlements-audit 
## seoTitle: Audit 
## description:  
## contentType: Markdown 
## Metadata_End
Cloud Entitlements provides an audit report to track all actions performed by users. This report displays changes made in the Cloud Entitlements within a specific tenant.

To access the Cloud Entitlements audit report, click the **Audit** icon, in the left-side menu.
:::(Info) (Info)
Only users with the **Cloud Security - Tenant Auditor** permission for the tenant can access this report.
:::


* * *

## Audit Report
The report provides the following information about changes in Cloud Entitlements:


| **Item** | **Description** |
| --- | --- |
| **Product** | The **Product** column displays the name of the specific product in which the action was performed. |
| **User** | In the **User** column, you can find the user responsible for the action. |
| **Event** | The **Event** column describes the specific action that the user performed. Possible values for this column include: *AWS Account Registration*, *AWS Account Editing*, *GCP Project Registration*, *GCP Project Editing*, and *Updating Security Policies for AWS Accounts*. |
| **Identity type** | The **Identity Type** column specifies the type of identity that changed. |
| **Entity** | The **Entity** column displays the name of the entity that changed. |
| **Entity ID** | The **Entity ID** column provides the ID of the altered entity. |
| **Date** | The **Date** column indicates the exact time when the action occurred. |


:::(Info) (Info)
The name of the entity can be changed, but the entity ID always remains the same. This ensures that changes can be traced back to the original identity.
:::
For detailed information about a change, click on the corresponding report line for the action. This action will open a `JSON` file that displays the states before and after the modification.

