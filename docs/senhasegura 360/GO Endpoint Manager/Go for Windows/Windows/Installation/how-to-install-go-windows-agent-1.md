# How to install GO Windows agent 

In this document, you will learn how to install the  agent on your workstation.

:::(info) (Info)
You can install the  agent via the command line, using the  command. Access the .
:::

## Requirements

* Dependencies and Windows versions described in the document .
* Administrative permission on the user's workstation.
* If there is a need to use functions that are linked to the use of PAM credentials, it will be necessary to have a user registered on the senhasegura platform with the same username as the workstation.

:::(info) (Info)
If you don't know the workstation username, open the Command Prompt and run . If necessary, see the article . The minimum access profile for the user must be 
:::

:::(Warning) (Installing with Multi-Tenant)
For multi-tenant use cases and when registering devices in any tenant other than the default (senhasegura), you must enter the configured subdomain for communication and registration in the "Enter the backend address" field.
:::

---

## 1. Get the installer

:::(error) (Warning)
After updatingsenhasegura, it is mandatory to update the agent, to ensure that both are on the same version.
:::

1. Access the .
2. Realize o login no site.
3. Find the version of the  client that is compatible with the version of your senhasegura.
4. In the  column, click  to download the  installer.

---

## 2. Install the agent

1. On Windows, go to the user's desktop.
2. Access , locate the  installer compressed folder. Example: .
3. Extract the installer to the desired location and run it.
4. Select the installer language (not available in legacy):
	* Portuguese.
	* English.
6. Click .
7. Click  to continue.
8. Read the  carefully. If you agree, check the *checkbox*  and click .
9. Choose the installation type:
	* : this option installs all features, namely  and .
	* : choose which features you want to install. The  application is mandatory.
    	a. : consists of  (), , ,  and .
    	b. : is a functionality that allows  to perform automation, making it possible to authenticate installed applications or web pages accessed directly from the workstation. This automation can use the values ​​of a system credential to which the user has access or fixed values ​​defined in the configuration. You can run RemoteApp automations associated with credentials available to the user.
    	c. : is responsible for enabling credential caching, viewing and copying credentials.
10. Click .
11. In the window that requests approval, select  to proceed.
12. Click 

---

## 3. Ensure communication

After installation, it is necessary to relate the  agent with your senhasegura server, using a *bootstrap token* and the IP (or domain, in cases where DNS is configured) of the senhasegura server.

Enter the IP in the  field and the *token* in the  field when running  for the first time. This process is only necessary on the first access, after installation.

To find out what *token* is needed to activate the  agent, access the GO parameter settings through the path  >  >  > . The field with the token is the first parameter of the page and looks like .

:::(error) (Warning)
If there is a balancer, you need to ensure that the DNS resolves to the correct IP.
:::
---

## 4. Configure approvals

Depending on previous configurations on the senhasegura platform or workstation sharing, messages may appear during the installation process. These messages indicate the need for workstation or user approval. These messages are not errors, they are part of the installation process. The most common message is 1002.

To complete the installation, follow the steps below if necessary:

1. 
2. 

### Approve user and workstation automatically

User and workstation approvals can be automated to avoid excessive interactions between the person installing the application and the administrator who must approve records on the senhasegura platform.

By default,  does not have self-approval enabled, leaving this decision to the administrator.

:::(error) (Warning)
If automatic approval is enabled, any machine and user on the corporate network with a valid license can operate GO Endpoint Manager for Windows without administrator approval.
:::

To configure automatic approval, follow these steps:

1. In senhasegura, access the system parameters configuration page, using the path:  >  >  >  >  (for v3.31) or  (for v3.32).
2. Enable the following parameters:
	* 
	* 
	* 
4. Confirm the change and click .

---

## 5. Register user of GO in the PAM of senhasegura

If you need a user to use resources that require their credentials to be redeemed in senhasegura, it’s necessary to create this user in the senhasegura PAM. To do this, follow the steps below:

1. On senhasegura, access the  user configuration page by clicking on the   represented by the nine squares and select > .
2. Select the user you want to enable the impersonation feature.
3. Click on the three vertical dots icon at the end of the line where the selected user is located.
4. Click on the  option to create this user in the senhasegura PAM.

For more information about the fields for creating a user in the senhasegura PAM, access the .

:::(error) (Warning)
It’s mandatory that the username in Windows is identical to the one that will be registered when clicking on the option, if a user is created in PAM with a name different from the username in Windows, the application won’t work as expected.
:::

---

Do you still have doubts? Contact .