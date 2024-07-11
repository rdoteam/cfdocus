## Metadata_Start 
## code: en
## title: About Cloud Security’s architecture 
## slug: cloud-security-about-cloud-securitys-architecture 
## seoTitle: About Cloud Security’s architecture 
## description:  
## contentType: Markdown 
## Metadata_End
In this article, you’ll find an overview of **Cloud Security’s** multitenant architecture and a definition of its three key levels of components.


## Organization
An organization is the first level in the multitenant architecture of **Cloud Security**. Each organization is a self-contained entity that has its own set of tenants.

At the organization level, there is always at least one administrator. By default, when an organization is created, it comes with one tenant associated with it. 

## Tenant
A tenant is the second level of the multitenant architecture. It represents a completely isolated and segregated environment within an organization.

Every organization must have at least one tenant, and each tenant is always affiliated with one organization. Furthermore, each tenant must have at least one administrator.

## Users

Users are the individuals who perform actions within the tenants. Users can be part of one or more tenants, either within the same organization or across different organizations.

Users within **Cloud Security** can have different roles, which determine their access and responsibilities. Here are the key roles within the multitenant architecture:


| **Role** | **Description** |
| --- | --- |
| **Cloud Security - Tenant Administrator** | This role is responsible for the overall management and has Admin access to the Tenant.  |
| **Cloud Security - Tenant Auditor** | This role has *Read-only* access to **Cloud Security’s** audit reports. |
| **Cloud Entitlements - Basic User** | This role has basic access to senhasegura **Cloud Entitlements** resources. |
| **Cloud Entitlements - Administrator** | This role has full access to **Cloud Entitlements** resources. |
| **Cloud Entitlements - Auditor** | This role has *Read-only* access to all **Cloud Entitlements** pages. |
