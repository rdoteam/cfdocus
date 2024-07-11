## Metadata_Start 
## code: en
## title: Requirements 
## slug: private-saas-requirements 
## seoTitle: Requirements 
## description:  
## contentType: Markdown 
## Metadata_End
Customers opting to use senhasegura in the Private SaaS model must meet the following requirements:

## Compatible bandwidth for workload

To ensure a successful experience using Private SaaS, customers must have network bandwidth compatible with the workload they intend to perform. This ensures that data transfer between the customer and the hosting infrastructure is fast and efficient. Inadequate bandwidth can result in latency, slow loading times, and an unsatisfactory user experience.

Before implementing a Private SaaS application, customers should carefully analyze bandwidth requirements. This includes considering the number of simultaneous users, the size of data to be transferred, and the complexity of operations performed by the application.

## Network Connector Agent

For customers opting for a VPN-less architecture, it is essential to ensure the [installation of the Network Connector Agent](https://docs.senhasegura.io/v3-32/docs/en/network-connector-install). 

The Network Connector is a critical component of the Private SaaS connectivity infrastructure. It allows customers to establish a secure and reliable connection with the hosted application, ensuring the integrity and privacy of transmitted data.

Proper installation and configuration of the Network Connector are essential to ensure the security and smooth operation of the application.

* * *

## Remote Desktop Service Server (optional)

Customers choosing to implement a Remote Desktop Services (RDS) server should pay attention to the following aspects:


### Operational System
The RDS server must run on **Windows Server 2008 R2** or a higher version.

### Licensing

We recommend using **RDS Per User CALs (Client Access Licenses)** to license users or servers that will access the RDS. These licenses are necessary to comply with Microsoft's terms of use.

It’s important to note that senhasegura doesn’t cover the licensing and implementation of the RDS server. Therefore, customers must acquire the appropriate licenses directly from Microsoft and implement them according to [Microsoft Remote Desktop Services guidelines](https://learn.microsoft.com/windows-server/remote/remote-desktop-services/rds-client-access-license){target="_blank"}.

### Hardware requirements

Hardware requirements may vary based on specific workloads and features the RDS server requires. Consult [Microsoft Remote Desktop Workloads](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/virtual-machine-recs#workloads){target="_blank"} documentation for detailed information on hardware requirements.



