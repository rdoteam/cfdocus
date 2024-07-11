## Metadata_Start 
## code: en
## title: Data protection policy 
## slug: private-saas-data-protection 
## seoTitle: Data protection policy 
## description:  
## contentType: Markdown 
## Metadata_End
## Data security and privacy
A threat detection service safeguards the cloud environment hosting senhasegura Private SaaS, continuously monitoring for potentially harmful actions or unauthorized activities. This service keeps a constant watch for any harmful actions or unauthorized activities.

Furthermore, each customer is allocated their own dedicated **Virtual Private Cloud (VPC)**. This arrangement guarantees the complete separation of data between different clients within the system, effectively eliminating the risk of configuration errors, data breaches, or any interference from one client impacting another.

Access to the senhasegura instance is limited exclusively to the customer's network. This implies that even the senhasegura support team must engage with the customer in order to perform any actions that could potentially expose data.

Our team members are contractually bound by strict confidentiality obligations. These commitments are further strengthened through onboarding processes and regular refresher training programs that focus on information security and GDPR compliance.

Whenever the support team needs access to a customer's console, obtaining explicit and case-specific approval from the customer is a mandatory requirement. Note that every access instance is logged for future auditing purposes.

senhasegura has implemented operational policies and procedures designed to prevent errors, a commitment that has received the ISO 27001 certification. In the unlikely event of a breach, we are committed to promptly notifying the customer in strict accordance with our legal obligations.

* * *

## Backup
Every day at 3 AM GMT-3, senhasegura takes system snapshots. By default, we retain snapshots from the past five days.

Snapshots are like taking a complete picture of the entire application. This way, if there's a problem and the system becomes unavailable, we can restore everything to normal.

Taking these snapshots, keeping the system up to date, and restoring it if there's a problem are all senhasegura's responsibilities.

If you prefer to keep backup copies of the application, videos, and credentials on your personal devices, you can. However, keep in mind that you'll need to manage the security aspects, control who can access those backups, and ensure that you have enough storage space available.

* * *

## Data collection
The following information is the only NPI (non-public information) and PII (personally identifiable information) that senhasegura SaaS collects to provide the service:

**For Devices**:

* Computer name. 
* Computer MAC address. 
* Usernames and groups. 
* Currently logged-in user. 
* IP addresses of the endpoint. 
* IP address used to connect to SaaS. 
* Installed programs. 
* Details about launched applications, as governed by policies.
* Screen capture videos of sessions.

**For Users**:

* Full name. 
* Username on SaaS. 
* Password 
* Email address.

:::(Info) (Info)
Administrators can use senhasegura's web interface to anonymize user data, thereby ensuring compliance with the 'right to be forgotten' requirement
:::

* * *

## Data retention

The duration for which senhasegura keeps your data depends on the storage space allocated in your selected package. 

* * *

## Mercy period

After the license expiration, access to senhasegura’s web interface will remain available for two weeks, starting from the date of license expiration. This allows customers sufficient time to properly extract their data.

Then, the instance will be turned off. The snapshots will be stored for three months, starting from the date of license expiration.

* * *

## Data extraction
Whenever customers change their passwords, a backup of their credentials is automatically created. This backup is stored on their network, ensuring that the latest version is always available locally.

Customers also have the option to automatically create local backups of session recordings. Additionally, they can access senhasegura to individually extract these recordings.
:::(Error) (Important)
Once the data is extracted, the customer becomes fully responsible for its security and management throughout its lifecycle.
:::

* * *

## Data deletion procedure

The data deletion process will be initiated in one of the following scenarios:

* Automatically three months after the contract termination date or non-renewal.
* In response to a specific written request from the customer to senhasegura for data deletion.

Upon triggering the data deletion process, the senhasegura team will take the following steps:

1. The customer's virtual machine will be terminated.
2. All data related to the customer will be permanently and irretrievably deleted from our cloud within a matter of hours.

:::(Error) (Important)
This deletion process is recorded for further audit if required by the customer.
:::

Throughout this process, the customer will receive two notifications:

* A notification indicating the instance has been turned off.
* A notification confirming that all data has been completely deleted.

* * *

## Data deletion timeline

The senhasegura cloud relies on Google Cloud's deletion policy, which is designed to balance the need for high-speed performance and the requirement for timely data deletion. Here's an overview of the data deletion process:

1. When a deletion request is made, data is typically marked for deletion immediately. The goal is to complete this marking process within a maximum period of 24 hours. Following marking for deletion, there may be an internal recovery period of up to 30 days, depending on the specific service or deletion request.

2. Following the marking for deletion, data goes through processes like garbage collection to achieve logical deletion from active systems. The timing of these processes may vary based on data replication and ongoing garbage collection cycles. Generally, it takes about two months from the request to completely delete data from active systems. This timeframe allows completing two significant garbage collection cycles to ensure logical deletion.

3. Google's backup cycle ensures that deleted data in data center backups expires within six months. Depending on data replication and Google's backup schedule, the backups may be deleted earlier.

For detailed information on Google's deletion pipeline, refer to the [Google Cloud documentation](https://cloud.google.com/docs/security/deletion). 

