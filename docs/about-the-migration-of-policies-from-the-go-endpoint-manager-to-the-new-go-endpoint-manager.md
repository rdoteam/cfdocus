## Metadata_Start 
## code: en
## title: About the migration of policies from the GO Endpoint Manager to the new GO Endpoint Manager 
## slug: about-the-migration-of-policies-from-the-go-endpoint-manager-to-the-new-go-endpoint-manager 
## seoTitle: About the migration of policies from the GO Endpoint Manager to the new GO Endpoint Manager 
## description:  
## contentType: Markdown 
## Metadata_End
During the senhasegura 3.32 upgrade, an automatic migration of parameterized data in your environment will happen. This migration will only occur once during the senhasegura update. No user action is required.

Policies registered on these pages will be automatically migrated:

* Automation
    * Linux
        * Access policies
        * Rules for sudo
    * Windows
        * Access lists
        * Commands
        * Control of directories and files
        * Scanning of directories and files
        * System registry control
* Segregated Parameters

All policies already registered on these pages will have the Send to new GO Endpoint Manager option, which will send them to the new PEDM individually. If the policy already exists in the new GO Endpoint Manager, it will be overwritten.

The new GO Endpoint Manager has a New label and is available in the path Grid Menu > GO Endpoint Manager.

:::(info) (Info)
The icon and settings of the old GO Endpoint Manager only appear if there are already workstations registered in the senhasegura 3.31. If you haven't yet used the GO Endpoint Manager module and updated senhasegura to 3.32, you will only see the new GO Endpoint Manager.
:::

:::(info) (Info)
When migrating a policy to GO version 3.32, it does not stop working in version 3.31, and when resending a policy to the new GO Endpoint Manager, it overwrites the first version.
:::

The new GO Endpoint Manager (senhasegura 3.32) must only be used with the senhasegura.go client of the same version, both updated. The senhasegura 3.31 GO Endpoint Manager is compatible with the senhasegura.go client 3.31, 3.30, 3.29.

A workstation with senhasegura.go client registered in the GO Endpoint Manager of senhasegura 3.31 will also be automatically migrated to 3.32, even after installation.

:::(error) (Warning)
senhasegura.go Legacy clients must only be used with senhasegura version 3.31 or lower.
:::
