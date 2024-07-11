## Metadata_Start 
## code: en
## title: Tenant audit 
## slug: cloud-security-tenant-audit 
## seoTitle: Tenant audit 
## description:  
## contentType: Markdown 
## Metadata_End
Cloud Security provides an Audit report to track all user actions within tenants. This report helps you monitor changes that occurred in a tenant.



## Tenant audit report

The tenant audit report offers you the following information about actions performed:


|Item | Description |
| --- | --- |
|**Product** |The **Product** column displays the name of the specific product where the action took place. |
| **User** | In the **User** column, you find the user responsible for the action.  |
| **Event** | The **Event** column describes the specific action that the user performed. Possible values include: *Update User Roles*, *Invite User*, *Enable User in Tenant*, and *Disable User in Tenant*. |
| **Entity type** | The **Entity Type** column specifies the type of entity that underwent a change. 
**Entity** |The **Entity** column displays the name of the entity that was altered. 
| **Entity ID** | The **Entity ID** column provides the ID of the Entity that was altered.  |
| **Date**| The **Date** column indicates the exact timestamp when the action occurred.  |


:::(Info) (Info)
A user can change the entity’s name, but the ID of the entity remains always the same. This ensures that changes can be traced back to the original entity.
:::
You can open detailed information about the changes made. To perform this action, click on the action row in the report. This action will open a `JSON` file that displays both the state before and after the modification.
