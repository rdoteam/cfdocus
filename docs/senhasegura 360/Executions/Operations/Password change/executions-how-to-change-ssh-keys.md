# How to change SSH keys 

The SSH key periodically change, is the process of regularly changing the keys used for authentication on a remote system. This method entails creating a new key pair, updating it, and then updating the public key on all devices that can authenticate with the private key.

When senhasegura generates a new key pair, it keeps the private key exclusively while sending the public key to the respective devices.

The process for SSH key maintenance is similar to that outlined for , with some differences in the screens and menus utilized. SSH keys, in addition to user and password credentials, must be connected to the respective devices.

## Requirements

* The Pam user permission in senhasegura.
* Have the contents of the public key in the  of the user's  directory.
* Enable ssh key .

## Ho to set up SSH keys' change

For more information about the SSH key change, reach out the  and  documentation. Afterward, add the following data:

### In the  tab
1. In the  field, you can define whether that credential will have an owner. If so, you should select the user from the dropdown menu.
2. In the  session:
    2.1. By checking the  field, you enable automatic key exchange. If you enable this field, you should indicate whether this procedure will be done using the same key or another. If you use the same key, select . Otherwise, select the corresponding user from the  dropdown menu.

### In the  tab
Indicate the target devices on which you want to use your SSH key for authentication. 

:::(Info) (Info)
All devices must have the same connection credential created and a public key file in the .
:::

To finish ans save, click the  button.

::: (Info) (Info)
If there are multiple devices registered for connection with the mentioned SSH key, they will be sorted based on their respective . The key exchange will occur first on the original device, and then it will proceed in the order of the , one at a time.
:::

## Next

1. .

***

Do you still have questions? Reach out to the .