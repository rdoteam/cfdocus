# How to configure Network Connector agents 

In this document, you’ll find a step-by-step guide on how to configure the .

## Requirements

It's necessary to have the agent  installed. To do this, follow the steps in the document .

## Configure Network Connector agents

On the machine where the Network Connector primary:

1. Locate the  do agente do .
2. Change the parameter value  to false in the primary agent configuration file .

The file  it should look like this example:

`yml
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

2. Change the parameter value  to true in the file  configuration of all secondary agents.

The file  it should look like this example:

`yml
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
    SENHASEGURA_AGENT_SECONDARY: "true"
networks:
 senhasegura-network-connector:
   driver: bridge
`

After configuring the agents in the  you can switch agents via an SSH/Telnet connection. Even if you choose to shut down the primary agent, you won’t lose remote access, as the secondary SNC will automatically take over.

## Manage the primary and secondary Network Connector

To turn off the  primary, access the  and run the  command. To turn off the  secondary, access the  and run the  command.

---

Do you still have questions? Reach out to the .