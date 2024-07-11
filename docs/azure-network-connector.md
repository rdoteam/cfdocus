## Metadata_Start 
## code: en
## title: Azure Network Connector 
## slug: azure-network-connector 
## seoTitle: Azure Network Connector 
## description:  
## contentType: Markdown 
## Metadata_End
This tutorial demonstrates how to deploy the Network Connector Agent on Azure using Azure Container Instances.
<br>

1. Access the [Azure portal](https://portal.azure.com).

1. Navigate to **Container Instances** and click on **Create**.

1. In the **Basics** section, make the following configurations:

      3.1. For **Container name**, enter **primary/secondary** and the Agent port.

      3.2. For **Image source**, choose **Other registry**.

     3.3. **Image type**: Public.

    3.4. **Image**: registry.senhasegura.io/network-connector/agent-v2: senhasegura version.

    3.5. **OS Type**: Linux.

    3.6. **Size**: 1 vCPU, 1 GB memory, 0 GPUs.

1. In the **Networking** section, change the **Networking Type** to **Private** and configure the network where the Network Connector will operate. No need to define ports in the **Ports** section.

1. In the **Advanced** section, make the following changes:

* Restart Policy: **Always**.

* Environment variables:
    *  **SENHASEGURA_FINGERPRINT**: fingerprint as seen in senhasegura.

        * Set Mark as secure to **Yes**.

    * **SENHASEGURA_AGENT_PORT**: port defined in the senhasegura interface.

    *  **SENHASEGURA_ADDRESSES**: IPs of machines running senhasegura.

    *  **SENHASEGURA_AGENT_SECONDARY**: 'true'/'false'.

6. Finish other configurations according to your needs and proceed to **Review + create**. 

1. Click on **Create** to end the process.

    
The Agent will be automatically initialized and connected to the senhasegura server.
    

* * *


Watch our configuration video to view the steps in detail: 
[Instalação do Network Connector Agent no Microsoft Azure](https://www.youtube.com/watch?v=tDrtui_y4co)

