# How to shut down the PAM Crypto Appliance 

This article provides instructions on how to shut down the  using two different methods:

* Via the  interface.
* Via  client.

## How to shut down the PAM Crypto Appliance via iDRAC

:::(Warning) (Caution)
Using the shutdown command for the  through the iDRAC interface will result in a physical shutdown of the device. To power on the device again, you must use the same iDRAC interface.
:::

1. Open your web browser.
2. Enter the iDRAC IP in the browser's address bar.
3. Log in using the username and password for the iDRAC web interface.
4. Start the virtual console.
5. Log in to the host machine using the username provided by senhasegura. If you don't have this information, contact the support team.
6. Execute the command to list the virtual machines running on the server.
7. Execute the command `sudo xl console 

` is the virtual machine responsible for the application.
8. Log in to senhasegura using the administrator user .
9. Shut down the senhasegura instance using the command .
10. To shut down the , execute the command sudo  or, in the iDRAC web interface, click the .

## How to shut down the PAM Crypto Appliance via SSH client
To shut down the PAM Crypto Appliance through the SSH client management interface, follow these steps:

1. Start the SSH client.
2. Connect via SSH using the host's management IP address.
3. Log in to the host machine using the username provided by senhasegura. If you don't have this information, contact the support team.
4. Execute the command  to list the virtual machines running on the server.
5. Execute the command `sudo xl console 

` is the virtual machine responsible for the application.
6. Log in to senhasegura using the administrator user .
7. Shut down the senhasegura instance using the command .
8. To shut down the , execute the command .


* * *


Do you still have questions? Reach out to the .