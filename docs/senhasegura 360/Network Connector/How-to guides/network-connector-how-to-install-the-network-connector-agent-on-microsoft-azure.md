# How to install the Network Connector agent on Microsoft Azure 

In this document, you will find a step-by-step guide on how to install the  on Microsoft Azure.

## Install the Network Connector agent on Microsoft Azure

1. Access .
2. Navigate to  and click .
3. In the section , make the following settings:
	* In , enter  and the agent's door.
	* Under Image source, choose .
	* : .
	* : `registry.senhasegura.io/network-connector/agent-v2:
`.
	* : .
	* : .
4. In the section , change the  for  and configure the network on which the  will operate. It is not necessary to define ports in the section .
5. In the section , make the following changes:
	* : Always.
	* Configure the environment variables as:
		* : Fingerprint as seen on senhasegura. Leave the option Mark as secure in .
		* : Port defined in the senhasegura interface.
		* : IPs of machines running senhasegura.
		* : As  or .
6. Finalize other settings as per your needs.
7. Click .
8. Click  to finish the process.

The agent will automatically start and connect to the senhasegura server.

Watch the video of installing the .

---

Do you still have questions? Reach out to the .