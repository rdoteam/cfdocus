# How to mount a backup partition via Rsync 

In this article, you’ll find instructions on how to mount a backup partition via Rsync.

## Requirements

* A user with permission to use Rsync in the target backup device.
* A dedicated directory owned by the Rsync user to be used for the backup (for example, ).
* Rsync installed in the backup server.

::: (error) (Important)
Rsync backups require an SSH key. Add the public key of your senhasegura root user to the list of authorized keys in the backup user’s device.
:::

:::(warning) (Secrets Backup Location)

Always ensure backups are saved in a different location to protect sensitive information and maintain business continuity.
For senhasegura with the crypto appliance, backups should not be stored on the appliance itself because:

1. : If the appliance fails, you could lose both the data and the backup.
2. : In the event of a hardware or software malfunction, having backups on an external device ensures that you have multiple avenues for data recovery.
3. : Store backups in a separate, secure location to comply with data protection standards and ensure availability.

:::

## How to mount a backup partition via Rsync
To mount a backup partition via Rsync, follow these steps:

### Step 1: Get the public key of the root user
1. Start an SSH session on your senhasegura server as the user  using port 59022.
2. Run the command :
    `Shell
    sudo cat /root/.ssh/id_rsa.pub

    $ ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQChIgNXVHrjq3ECwVytNb9k2liB5vGFNNtTDdwSYaYW/WQ8
    NC0yq70BxcmaQWwFddWfQIQVjMw2WZNkroTsinEZkLHBUN12eMMwNB4izo0iQ70IB8wSj2lQbl/G   AYyzQCZQRo486eFHFJVIaTviDpf32D/O6qz6JGvCpRRzx7owZhuscJGfUesl/q0sCZ9DUn79TLtj/lIC+na4s5c1g/SYyO7IkdwQBkeeXJSasdqwe34gbcvbdf5dL5f00EIIEHclg5tBxmt9UQ2yRXu1   GbkbdFF5tllNdUfgy4Eb7K8kCTm/djb1ljzWiZodtzas+gPWZOHWaV8nAl17Zc1+xeL shbupk

    `
3. Copy the displayed public key.
4. Log in to the backup server and paste this public key into the  file of the backup user:

    `Shell
    vim /home/rsync/.ssh/authorized_keys
    `
    
5. Confirm the SSH configuration by executing:
    `Shell
   sudo  ssh 

    `
### Step 2: Set up senhasegura's system backup

1. On the upper left corner of the screen, click the , identified by the nine squares, and select . 
2. From the side menu, select .
3. Set the  parameter to . 
4. Set the  parameter to .
5. Choose  as the backup method.
6. Enter the backup .
7. Enter the backup  or , E.g.,  or .
8. Enter the  for the backup directory (e.g., ).

### Step 3: Test Rsync backup

1. Start an SSH session on your senhasegura server as the user  using port .
2. Run the command .
3. The command will return an output with the Rsync confirmation and transfer time.
4. Check if you can see the files in the  specified for the backup server.

## Backup logs
To check the backup logs, follow these steps:

1. Start an SSH session in your senhasegura server as the user  using port 59022.
2. Run the following command:
`Shell
tail -f /var/log/orbinibkp.log

`