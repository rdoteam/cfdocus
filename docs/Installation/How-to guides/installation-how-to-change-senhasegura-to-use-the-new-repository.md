# How to change senhasegura to use the new repository 

This document provides guidance on updating the senhasegura to use a new repository. This update is necessary to ensure that your system receives future updates.

::: (error) (Important)
After changing senhasegura to use the new repository, If you’re using a version prior to 3.33 and wish to update senhasegura to version 3.33 or later, please refer to the article .
:::

## Requirements

- Secure Shell (SSH) client  
- Administrator credentials for the senhasegura server  
- The script "aptfix" file from senhasegura, you can get from the 

:::(Warning) (Attention)
Starting from , all updates will utilize the new senhasegura repository. The old repository will no longer be available after this date.  
:::

## Path to access

To configure the use of the new repository, first, start an  on your senhasegura server.

## Steps to Update

1. Download the file “aptfix”.  
    `bash
    wget https://downloads.senhasegura.io/d/other/aptfix
    `
2. Start an SSH   
3. Transfer the file to the senhasegura server using SSH and administrator credentials.  
4.  with  in any directory, using the following command.  
    `bash
    sudo chmod +x aptfix
    `
    `bash
    sudo ./aptfix
    `
5. Wait for the script to complete.  
6. Once complete,  the commands:
    `bash
    sudo apt update
    `
    `bash
    sudo apt install orbit-cli
    `
:::(warning) (Attention)
If the repository setup needs to be updated, the platform will indicate what to do next.
:::

7. Once done, to update the senhasegura solution, follow our documentation that best suits your needs:

    - .
    - .
    - .
    - , please refer to the article .

* * *

Do you still have questions? Reach out to the .