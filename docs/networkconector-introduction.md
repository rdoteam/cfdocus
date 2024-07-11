## Metadata_Start 
## code: en
## title: Introduction 
## slug: networkconector-introduction 
## seoTitle: Introduction 
## description:  
## contentType: Markdown 
## Metadata_End
The Network Connector enables users to carry out sessions on devices located on networks that do not have connectivity to senhasegura or on networks with overlapping IPs.

In addition, the Network Connector supports all types of connections available in senhasegura, such as **RDP**, **SSH**, **Telnet**, and **HTTP/HTTPS**, among others.

This solution consists of the Network Connector Server and the Agent.

:::(info) (Info)
- The Network Connector encrypts and authenticates the information that passes through it.
- The Network Connector adds two milliseconds to connections.
:::

:::(error) (Important)
By modifying the request destination to a tunnel established by the Agent, the Network Connector becomes incompatible with the use of certificates. This is because, in this context, certificates depend on the request destination to perform one of the necessary validations.
:::

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).