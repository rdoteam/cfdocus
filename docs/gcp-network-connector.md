## Metadata_Start 
## code: en
## title: GCP Network Connector 
## slug: gcp-network-connector 
## seoTitle: GCP Network Connector 
## description:  
## contentType: Markdown 
## Metadata_End
This tutorial presents a step-by-step guide on how to install the Network Connector Agent on Google Cloud. We'll use the automatic container configuration feature in the Compute Engine instance creation interface to simplify the process.

## Instance creation

1. Access the Compute Engine page in the Google Cloud control panel.

1. Select **VM Instances** in the side menu.

1. Click **Create Instance** to start the process of creating a new instance.

1. On the instance creation screen, set a name for the instance and choose the desired region.

1. Make the following changes to the configuration parameters:

### Machine configuration

* Series: E2

* Machine Type: e2-small

### Container

1. Click the **Deploy Container** button.

    * Container Image: registry.senhasegura.io/network-connector/agent-v2:latest

    * Restart policy: Always

### Environment variables

* SENHASEGURA_FINGERPRINT: < fingerprint as seen in senhasegura >

* SENHASEGURA_AGENT_PORT: < port defined in the senhasegura interface >

* SENHASEGURA_ADDRESSES: < IPs of machines running senhasegura >

* SENHASEGURA_AGENT_SECONDARY: 'true'/'false'


### Advanced configuration  ➔ Management

1. Under Metadata, click **Add Item** and enter the following combination:

    * Key: google-logging-enabled

    * Value: true

### Network configuration
:::(Info) (Info)
Configure the network in which the Network Connector will operate in the Advanced Options ➔ Networking section if needed.
:::


1. Leave the rest of the settings as default.

1. Click **Create** to finish the process.

The Network Connector Agent should automatically connect to senhasegura.
The created instance updates automatically; you only need to restart it when there's an update to the container image.

### Accessing logs
To access the logs of the Network Connector Agent, follow these steps:

1. In Compute Engine, navigate to the VM list and click on the instance running the Agent.

1. Go to the **Observability** tab

1. Click **Logs**.

    3.1 Under **All Logs**, the Network Connector logs have the format **client: < log message >**.
3.2 To filter the logs and make viewing easier, add the following filter: 
```
jsonPayload.message =~ "client: .*"
```
<br>

* * *
Please, watch our configuration video to view the steps in detail:
[Instalação do Network Connector Agent no Google Cloud](https://www.youtube.com/watch?v=uPJIho2YVXY)
