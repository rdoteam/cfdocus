## Metadata_Start 
## code: en
## title: Citrix Troubleshooting 
## slug: pam-citrix-troubleshooting 
## seoTitle: Citrix Troubleshooting 
## description:  
## contentType: Markdown 
## Metadata_End
## The desktop you are trying to connect to is unavailable

**Error**: Citrix XenApp Application Launch Error: The desktop are trying to connect to is unabailable at this moment. Please try again later, or contact an administrator if the problem persists.

**Solution**: Verify if the applications' server is working or if there are no stuck sessions. On Citrix, go to Delivery Groups, and (if there is a session in use) click twice on the delivery group, select the session and click on the Log Off option.

---

## Cannot connect to "192.168.1.1 - AppName"

**Error**: Cannot connect to "192.168.1.1 - AppName". No such file or directory. Verify your connection settings and try again.

**Solution**: Verify the network connection between the Bridge Server and the applications' server.

---

## Unable to connect to the remote server URL

**Error**: Citrix XenApp - Cannot Contact the Citrix Server: Unable to connect to the remote server URL 'https://citrixstore/Citrix/Store/PNAgent/config.xml'. The remote server URL may not be entered correctly or the remote server may be down. Would you like to re-enter the server URL?

**Solution**: Verify the connection between the Citrix Bridge Server and Citrix Store. You can try to use the IP address instead of the store hostname. For example: https://**192.168.0.100**/Citrix/store-name/PNAgent/config.xml

---

## The remote desktop server encountered an error and has...

**Error**: The remote desktop server encountered an error and has closed the connection. Please try again or contact your system administrator.

**Solution**: Verify if the Docker container is running: `sudo docker ps`. If not, start it by using the following command: `sudo docker start xrdp-citrix-senhasegura-image_0.9.5-8`.

---

## Cannot transfer files

**Error**: The option to transfer files is not working.

**Solution**: Verify if you have instaled the <a href="https://www.kernel.org/doc/html/latest/filesystems/fuse.html">Fuse module</a> in the Bridge Server Linux. If you have installed the Fuse module, verify if it is running `lsmod | grep fuse` or start it `modprobe fuse`.

---

## senhasegura Community

If you need help, ask in the [senhasegura Community](https://community.senhasegura.io/latest?utm_source=Help%20Center&utm_medium=Link&utm_campaign=Citrix%20integration) and get an answer from other community users and senhasegura specialists.