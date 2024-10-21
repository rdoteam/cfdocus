# How to transfer a file in Terminal Proxy sessions using SCP 

This document provides a step-by-step guide on how to transfer files using the SCP command in remote Terminal Proxy sessions.

## Requirements

* Any SSH client tool
* Any SCP tool

---
## File Transfer via SCP
To transfer a file from a workstation to a destination server, follow these two steps:

1. Upload the file to senhasegura using terminal proxy.
2. Connect to senhasegura Terminal Proxy and upload the same file to the destination device.

### SCP Command Syntax

Below is the some syntax for the scp command. Replace the placeholders with your specific information:
|
|---|---|
|File to be transferred.
|Hostname or IP address of the senhasegura PAM.
|Credential of the senhasegura PAM.
|The directory location where the file to be transferred is.
| The directory location where the file should be transferred.
|Credential username.
|Hostname or IP address from the device.

### Transfer file to your senhasegura home directory
1. Open your preferred SCP tool.
2. Enter the following command to upload a file to the senhasegura termial. Use  to transfer the file to your home directory in senhasegura:
    `bash
    scp file_name senhasegura_user@senhasegura_vault:~
    `
3. Type your password and press  to start the upload.

### Transfer file from senhasegura Home directory to a device
1. Log into senhasegura Terminal Proxy using an SSH tool:
    1. Execute:
        `bash
        ssh senhasegura_user@senhasegura_vault
        `
    3. Type your password and press  to access Terminal Proxy.
    5. Once inside Terminal Proxy, transfer the file to the desired device:
        `bash
        scp file_name device_credential@device:path_file_destination\
        `
    5. Press  to start the transfer.

:::(warning) ()
Proxy 1.0 doesn’t support Multihop connection strings with SCP, so the above two steps are mandatory. For a better experience, consider using SFTP transfer.
:::

---
## File Transfer Using Proxy 2.0
When using Proxy 2.0, if the accessed device has more than one type of registered connectivity, specify the protocol and port.

### Transfer file to a device
1. Open your preferred SCP tool.
2. Enter the following command to upload a file to the senhasegura terminal:
    `bash
    scp file_name senhasegura_user[credential@ip_device]@senhasegura_vault:path_file
    `
3. If using , include the tenant name after the senhasegura user:
    `bash
    scp file_name senhasegura_user%tenant_name[credential@ip_device]@senhasegura_vault:path_file
    `
4. Enter your  and press  to start the upload.

### Download file from a device
1. Enter the following command to  a file from the senhasegura to the requestor's workstation:
    `bash
    scp path_file senhasegura_user[credential@ip_device]@senhasegura_vault:path_file_destination
    `
2. If using , include the tenant name after the senhasegura user:
    `bash
    scp path_file senhasegura_user%tenant_name[credential@ip_device]@senhasegura_vault:path_destination_file
    `
3. Enter your  and press  to start the download.

---

## Additional Transfer Option

The senhasegura Terminal Proxy also supports file transfers via SFTP. For more information, refer to the  document.

---
Do you still have questions? Reach out to the .