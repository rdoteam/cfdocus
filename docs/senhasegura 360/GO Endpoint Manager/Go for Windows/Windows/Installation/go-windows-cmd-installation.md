# How to install the GO Windows client via CMD 

This document provides information for installing the  *client* from the command line, using the  command, in the Microsoft Windows operating system.

To install the  *client* using the  command, follow the steps below:

1. Open Command Prompt, PowerShell or Bash, on Windows, in the folder where the installer ( file) of senhasegura.go is stored and execute the command:

`shell
msiexec /i "
" /passive TOKEN=
 URL=
 ADDLOCAL=Pedm,Vault,Automation /l log.txt
`

Remember to replace the values ​​indicated by the greater than and less than signs :

1. Replace `
` with the full name of the GO installer file, and keep the quotation marks.
2. Replace `
` with the installation key, available in senhasegura, on the GO Endpoint Manager parameters configuration page.
3. Replace `
` with the IP address of the senhasegura server, or with the domain name (when DNS is configured).

## Reinstallation

When executing the command suggested above, a folder called , which stores the token and the IP of the senhasegura server, will be created in .

Therefore, it isn’t necessary to enter the token or the senhasegura IP during reinstallation.

To ensure a complete reinstallation, use the  parameter:

`shell
msiexec /i "
" /passive ADDLOCAL=Pedm,Vault,Automation /l log.txt REINSTALLMODE=AS
`

## About installation and reinstallation command parameters

| Parameter	                   | Description                                                                                                                               |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
|                           	  | Specifies the  installation function.                                                                                            |
| `
` | Full name (with specified version) of the senhasegura.go client installer file.                                                           |
|                     	  | Establishes passive installation, which need for user interaction.                                                                        |
|                        	  | Installation key to relate the senhasegura.go that is being installed with the senhasegura configuration platform.                        |
|                          	  | IP or domain (if DNS is configured) of the senhasegura platform server.                                                                   |
|                     	  | Parameter for defining which senhasegura.go client modules will be installed.  is mandatory,  and  are optional. |
|  (optional)           | Generates the  file with installation records, for troubleshooting.                                                              |