# How to update senhasegura offline 

::: (error) (Important)
If you’re using a version prior to 3.33 and wish to update senhasegura to version 3.33 or later, please refer to the article .
:::
::: (error) (Important)
If you use Zabbix, it will be necessary to reconfigure it after updating senhasegura to version 3.30 via Orbit Command Line Interface (CLI). For instructions on how to configure Zabbix via Orbit CLI, refer to the article .
:::

If your vault isn’t connected to the internet, follow the steps in this guide to update your application offline.

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

* * *

## Take a snapshot

Snapshots should be taken only when senhasegura instances are offline. This ensures the ability to revert to a previous version if necessary.

1. You can shut down a senhasegura instance using the following command:
    `Shell
    sudo orbit shutdown
    `
2. Once the instance is completely shut down, take a snapshot in the hypervisor. 
3. Reboot your senhasegura instance and update the application.

* * *

## How to update senhasegura offline 
:::(Warning) (Caution)
Before updating senhasegura, always run a snapshot on your hypervisor and .
:::
:::(Warning) (Caution)
If you use the senhasegura Arbitrator, remove it from the cluster before updating senhasegura. .
:::

To update senhasegura offline using a Linux machine, follow these steps and refer to the examples provided below:

1. In another machine with access to the internet, use the link  to download the update package to a separate device:
    `bash
    wget https://storage.googleapis.com/senhasegura-packages-sp/packages/bookworm-stable-se-update.sh
    `
2. Create a folder for the update files inside the  directory.  Use the following command:
    `bash
    sudo install -d /var/update -g mt4adm -o mt4adm
    `
3. Upload the file downloaded in step 1 to senhasegura's server (via , for example):
    `bash
    scp -P 59022 
  mt4adm@
:/var/update
    `
4. Add a "" symbol to comment every line in  to prevent it from trying to connect to the internet during the update:
    `bash
    sudo vim /etc/resolv.conf
    `
5. Give the user permission to run the update file:
    `bash
    sudo chmod +x 

    `
6. Execute the file, in our example, we named the update file , so our command is:
    `bash
    sudo chmod +x bookworm-stable-se-update.sh
    `
7. Run the package using the following command:
    `bash
    sudo bash 

    `
8. Type  to agree with the EULA terms.

9. After running the update file, return to  and remove the '' symbol from all previously modified lines.

10. Run the following command to reboot the device:
    `bash
    sudo orbit shutdown --reboot
    `
11. After the reboot is complete, run the following command and type  to confirm:
    `bash
    sudo orbit application init
    `
12. A message in the terminal will indicate that the update was successful. To check the current version, run the following command:
    `bash
    sudo orbit version
    `

* * *

Do you still have questions? Reach out to the .