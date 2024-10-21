# How to install Citrix Bridge Server using senhasegura Extended Services OVA 

In this document, you’ll find a step-by-step guide on how to perform the installation of Citrix Bridge Server, via Extended Services OVA, which is responsible for communicating with Citrix Virtual Apps and Desktops through an HDX protocol exclusive to Citrix.

## Requirements

* Hypervisor with OVA support.
* 4GB of RAM.
* 4 vCPUs.
* 100 GB HD.
* Network connection to the Citrix Virtual Apps and Desktops server.
* Network connection to the server where applications run.

---
## Install via senhasegura Extended Services OVA

1. Download the senhasegura Extendend Services OVA.
    :::(info) ()
    Make sure the checksums of the OVA file you received match the following hashes:
    md5sum: 
    sha256sum: 
    :::
2. Import the OVA into your hypervisor.
3. Access  to obtain the login credential.
4. Once logged in, configure the network using the following command:
    1. Type: .
5. Verify that the container is working correctly, type:
    1. .

This is the expected result after performing these steps:
`
CONTAINER ID   IMAGE                                   COMMAND       CREATED         STATUS         PORTS     NAMES
c679f44df088   xrdp-citrix-senhasegura-image:0.9.5-8   "/start.sh"   7 minutes ago   Up 7 minutes             
xrdp-citrix-senhasegura-image_0.9.5-8
`


Citrix Server can also be installed and configured using the Docker container, to find out how to perform this installation, access the  document.

---
## Next:





Do you still have questions? Reach out to the .