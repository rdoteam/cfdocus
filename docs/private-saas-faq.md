## Metadata_Start 
## code: en
## title: FAQ 
## slug: private-saas-faq 
## seoTitle: saas FAQ 
## description:  
## contentType: Markdown 
## Metadata_End
## Updates and maintenance

**Who is responsible for taking snapshots of the instance?**

senhasegura is responsible for taking these snapshots. They are taken on a daily basis and before scheduled maintenance.

**Do customers need to be included in update schedules?**

Yes, the customers monitor the entire update process.

**Are the updates automatic, or can customers choose the execution date?**

Updates and maintenance are scheduled in collaboration with the customer to ensure enhanced security through a four-eye validation process. This helps to reduce the risk of unavailability during critical times for the customer.


* * *

## On-boarding

**Is it necessary to reconfigure the VPN after restoring a snapshot?**

No, the connection will be established automatically.

**Is there a trial available for Private SaaS?**

Currently, Private SaaS follows the same model as on-premises, where the evaluation is conducted in a demo environment.

**What are the requirements for conducting demos?**

The [demo request](https://senhasegura.com/request-demo/) must start on the senhasegura website, similar to the on-premises version. Following the request, the senhasegura Implementation team will start the kick-off process, providing the requester with the required details for the demonstration.

**Is it possible to migrate a demo environment to production?**

Yes, it’s possible, but not recommended.

Data input in demonstration environments typically involves testing, and configuration changes are usually made. If administrators forget to revert these changes, it can lead to a production environment that is disorganized or poorly configured.



* * *

## Architecture
**Why are snapshots taken instead of regular backups?**

A snapshot is a complete image of the application, enabling the restoration of the environment in the event of unavailability or an incident.

**Why is there a local backup?**

To ensure complete access to customers' devices in the event of unavailability. The local backup enables “break the glass” procedures to be carried out without access to the cloud environment.

**Where are the backup copies stored?**

All backup copies of credentials are stored on the client's network for the "break the glass" procedure.


**Can I use another cloud provider?**

senhasegura is responsible for defining the service provider used for SaaS. If the customer wants to use a provider of their preference, they must opt for the on-premises version.

**Is there redundancy between different regions?**

By default, no. senhasegura relies on Google's contingency service to ensure data availability. An architecture with different regions must be contracted as an additional service.

**Is it possible to have a Disaster Recovery instance on another cloud?**

senhasegura typically doesn't include Disaster Recovery (DR) environments by default, whether on GCP or other cloud platforms, as they aren't necessary for the primary use cases in a SaaS offering.

This type of architecture should be treated as an exception, considering that it involves changes in costs and processes, and its necessity should be thoroughly assessed.

**Is it possible to have a Disaster Recovery instance on the customer's infrastructure?**

senhasegura doesn’t offer a shared administration mode. The management and monitoring of the machines are the responsibility of senhasegura, so the instance must be in senhasegura’s cloud to adhere to all quality processes and not impact scalability.

**Is an active-active architecture available?**

Google's environment already has backup systems within the same region. Customers who want backup systems across different regions can opt for a separate service.

**Is it possible to create backups on other cloud providers?**

Yes, customers can configure the application's backups, videos, and credentials on a server of their responsibility, whether in the cloud or on physical hardware. The daily snapshot, conducted by senhasegura, is consistently stored on GCP within the same region as their instance.

**What is the procedure to request an additional VPN?**

The acquisition of additional resources or any upgrades must be arranged with the senhasegura Commercial team.



**What is the contingency plan in the event of a failure in the hosted region?**

GCP has multiple data centers within each region and has a contingency plan in place to ensure transparent failover. A widespread failure is highly improbable.

**Is there a compatibility list for the peers needed to establish the VPN?**

Any device with the IPSec protocol implemented is compatible.

* * *

## Regulations and legislation

**How often are intrusion tests conducted in the application environment?**

Intrusion tests are conducted with every software update within the environment that hosts the application, including the senhasegura tool itself. Market tools and external consultants are used to perform these tests.


**What ensures that the client machine won’t be cloned or copied?**



senhasegura has operational policies and procedures in place to prevent errors, as evidenced by its ISO 27001 certification.

* * *


## Security
**Is access to senhasegura limited to VPN only?**

No, there are two available architectures: one with a VPN and the other without a VPN. However, users can only access the instance via the customer's corporate network. For external access, the [ Domum](https://docs.senhasegura.io/v3-32/docs/domum-overview) module can be used.

* * *

## Remote support
**How does senhasegura provide remote support for SaaS customers?**

The senhasegura team will have access to the application and server exclusively through the client's network. For auditing purposes, each access is logged.
