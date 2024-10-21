# How to install Network Connector 

In this document, you’ll find a step-by-step guide on how to install the .

The installation and configuration of the  is divided into the following steps:

1. Configuration of .
2. Registration of agents in senhasegura .
3. Obtain the .
4. Install the .
5. Set the version of .

## Requirements

* For 250 simultaneous connections per active SNC - .
* For 750 simultaneous connections per active SNC - .
* For 1500 simultaneous connections per active SNC - .

The *Server* needs to be configured only once. The agent, in turn, must be installed and configured on all networks that senhasegura does not have access to.

## 1. Configure the Network Connector Server

The configuration of the  is carried out in the senhasegura instances with the command orbit network-connector.

:::(info) (Info) 
Run the command orbit network-connector --help to know all the options available for this command. 
:::

For these commands to have the expected result, you must have administrator access  to the senhasegura server and the port  must be released for the agent to communicate with the server.

:::(warning) (Important) 
For cluster installations, it is necessary to configure the Network Connector Server at all nodes. To do this, simply repeat the steps above on each node in the cluster. 
:::

Follow the steps below to install and configure the :

1. Access each senhasegura instance in the cluster via terminal and run the command  setup.
2. Enter the key and, to confirm the operation.

The operation may succeed and return a success message:

`
senhasegura Network Connector Server is ready!

Use this fingerprint in senhasegura Network Connector Agents setup: "FINGERPRINT"

In case you need it, instructions for starting senhasegura Network Connector Agents are available in our help center.

See at https://d.senhasegura.io/skme2rugfyizbw9

NOTE: If this environment is in cluster mode, run "sudo orbit network-connector setup" on secondary nodes as well
`

Or unsuccessful and return one of the errors below:

`
Can't continue setup.

This node is a Secondary in cluster and senhasegura Network Connector Server needs to be initialized in Primary node.

Please run "sudo orbit network-connector setup" in Primary node first.

==================================or=====================================

Whoops! An error was found in application setup.

Check if application database is running and file replication between nodes is working without errors.

==================================or=====================================

Whoops! An error was found!

Unable to determine which fingerprint senhasegura Network Connector Agents needs to connect in this server, try again later.

==================================or=====================================
 
Whoops! Could not replicate settings to cluster nodes

Check if all cluster nodes are available, file replication is working and try again.
`

## 2. Register Network Connector Agents on senhasegura

After activating the , access the senhasegura web interface and follow the steps below:

1. In senhasegura, access the  page, using the path  >  >  >  > .
2. In the Action column, click the  icon.
3. Click on the  tab.
4. Click on the  button.
5. Add all the agents you want to install by filling the fields  and . The port must be between 30000 and, 30999.
6. Click the  button.

## 3. Get the Network Connector Fingerprint

To install the agents, you must have the *fingerprint* generated during the configuration process of the .

To copy the fingerprint, follow the steps below:

1. In senhasegura, access the  page, using the path  >  >  >  > .
2. In the  column, click the option .
3. When the window opens, click on the icon .
5. Select and copy the .

## 4. Install Network Connector Agent

To install the  It is necessary to have basic knowledge of  and .

Furthermore, it’s necessary that the environment where the agent and the Linux server (any distribution) have the  installed and configured. When installing the  on the Linux server, use the  binary.

:::(warning) (Important) 
The Network Connector Agent must not be installed on senhasegura instances. 
:::

To install the , follow the steps below:

1. On a Linux machine that meets the requirements described above and is on a network to which senhasegura does not have access.
2. Write the file docker-compose.yaml with agent settings (examples below). Pay attention to the fields:
	* : value obtained previously.
	* : Set a port between 30000 and 30999 for this agent. Choose one that is not in use.
	* :
		- In cases of standalone installation: IP address of the instance. Example: .
		- In cases of cluster installation: IP addresses of the senhasegura instances, separated by commas, without spaces. Example: .
	* : optional field. Could it be  or .
3. Run the command .

Example of the  file:

`yaml
services:
 senhasegura-network-connector-agent:
   image: "registry.senhasegura.io/network-connector/agent-v2:latest"
   restart: unless-stopped
   networks:
    - senhasegura-network-connector
   environment:
    SENHASEGURA_FINGERPRINT: "CHANGE_ME"
    SENHASEGURA_AGENT_PORT: "CHANGE_ME"
    SENHASEGURA_ADDRESSES: "CHANGE_ME"
    SENHASEGURA_AGENT_SECONDARY: "false"
networks:
 senhasegura-network-connector:
   driver: bridge
`

:::(info) (Info) 
You can follow the agent execution logs using the command . 
:::

## 5. Set the agent version

You can define the version of the agent to be used by changing the version of the container image. The choice is determined within the  file.

If you leave it with the option latest, as in the examples above, you will be using the latest available version of the agent: .

To use the agent in other versions, use .

:::(info) (Info) 
Try to keep the agent version equivalent to the version of senhasegura used by the agent at the time. 
:::

---

Do you still have questions? Reach out to the .