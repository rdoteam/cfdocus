# How to mount a backup partition via CIFS or NFS 

In this article, you’ll find instructions on how to mount a backup partition via CIFS or NFS

## Requirements

* The backup server must be configured with a shared folder.
*  must be open between the backup and senhasegura's server.
* Credentials must have  permission. 

:::(warning) (Secrets Backup Location)

Always ensure backups are saved in a different location to protect sensitive information and maintain business continuity.
For senhasegura with the crypto appliance, backups should not be stored on the appliance itself because:

1. : If the appliance fails, you could lose both the data and the backup.
2. : In the event of a hardware or software malfunction, having backups on an external device ensures that you have multiple avenues for data recovery.
3. : Store backups in a separate, secure location to comply with data protection standards and ensure availability.

:::

## How to mount a backup partition via CIFS or NFS

To mount a backup partition via CIFS or NFS, follow these steps:


1. On the upper left corner of the screen, click the , identified by the nine squares, and select . 
2. From the menu, select . 
3. Set the  parameter to .
4. Under  select .
5. Click . This will open a new window.
6. Populate the  and  fields with the details of the server that will store the backup. For example:

* :  or .
* : .

::: (info) (Info) 
For Windows servers, verify the network path of the folder.
:::
		
7. Select the protocol:
* : requires a user with enough privilege to write files in the directory specified in the . Otherwise, senhasegura won’t be able to mount the partition or create the backup. : add a domain if your host server requires it.
* : if you choose an NFS mount, don't forget to add senhasegura's IP address to the settings of your Remote NFS Host. Otherwise, senhasegura won’t be able to mount the partition or create the backup.


::: (warning) (Caution)
Don’t use passwords that contain the characters , , and  in remote partition mappings.
:::

Upon completing the steps, the system will generate a file named , indicating that the partition has write permissions.