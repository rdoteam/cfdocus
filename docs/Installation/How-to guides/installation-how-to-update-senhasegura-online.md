# How to update senhasegura online 

::: (error) (Important)
If you’re using a version prior to 3.33 and wish to update senhasegura to version 3.33 or later, please refer to the article .
:::

::: (error) (Important)
If you use Zabbix, it will be necessary to reconfigure it after updating senhasegura to version 3.30 via Orbit Command Line Interface (CLI). For instructions on how to configure Zabbix via Orbit CLI, refer to the article .
:::

In this article, you’ll find a guide on how to update senhasegura online. 

## Requirements

*  Ensure your firewall settings allow communication with the senhasegura repositories. Detailed  can be found in the documentation.
*  Verify that the server's time is correctly set.
*  If your environment includes an Arbitrator, remove it from the cluster.
*  Take a system snapshot before proceeding with the update.
*  For versions that are at least two releases old, update sequentially as instructed in this .
* : Learn how to set up the .

:::(error) (Application unavailable during update)
When senhasegura initiates the update process, all features will be unavailable until all nodes in the cluster have been fully updated.
:::

:::(Warning) (Caution)
Before updating senhasegura, always run a snapshot on your hypervisor and .
:::

:::(Warning) (Caution)
If you use the senhasegura Arbitrator, remove it from the cluster before updating senhasegura. .
:::

* * *

## Take a snapshot

Snapshots should be taken only when senhasegura instances are offline. This ensures the ability to revert to a previous version if necessary.

1. You can shut down a senhasegura instance using the following command:
    `bash
    sudo orbit shutdown
    `
2. Once the instance is completely shut down, take a snapshot in the hypervisor. 
3. Reboot your senhasegura instance and update the application.

* * *

## How to update senhasegura online

:::(Info) (Download update packages for later installation)
As an option, you can download update packages to install at a later time. 
:::

1. In the senhasegura platform, go to , and turn the following items :

    * Expired password.
    * Expired operation cancellation. 
    * Operation executor.
    * Operation executor: Retry.

2. Take a snapshot. 
3.  

4. Run the following command:
    `bash
    apt-get update
    `
5. Run the following command:  
    `bash
    apt-get install orbit-cli
    `
6. Run the command below to update senhasegura to the newest version:
    `bash
    orbit update
    `
7. After the update, restart the system to ensure that all changes were correctly applied. Use the following command:
    `bash
    orbit shutdown -r
    `

* * *

Do you still have questions? Reach out to the .