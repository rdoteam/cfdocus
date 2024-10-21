# High Availability and Disaster Recovery 

The architecture of senhasegura is designed to ensure effective High Availability (HA) and Disaster Recovery (DR) in case of failures.


:::(info) (Info)
There are three different deployment options:

*  in on-premises data centers. 
*  in on-premises data centers. 
*  on a Cloud Service Provider(CSP).
:::

## Principles of High Availability

* : redundancies are incorporated to maintain continuous operation even in the event of a component failure.
* : redundant systems should be able to switch between components without data loss or performance impact.
* : if the above two principles are observed, any failures will probably go unnoticed by users. However, maintenance teams must still be able to detect failures as soon as they occur.

## Replication technologies
The architecture employs various layers of replication to ensure data accessibility across instances:

| Layer                        | Description                                                                                                  |
|------------------------------|--------------------------------------------------------------------------------------------------------------|
|  | The  is used for replicating databases, providing support for high-latency networks (up to 30ms latency). |
|  | All senhasegura instances synchronize their files with other cluster members.                        |
| *    | The PAM Crypto Appliance deployment model includes a Distributed Replicated Block Device (DRBD) for kernel layer replication.    |

*Only available for PAM Crypto Appliances

## Architectures

There are four scenarios for the Disaster Recovery architecture. You can have two Virtual Appliances, two PAM Crypto Appliances (with DRBD), a hybrid system, or an on-premise system. You can find more information about these scenarios in the table below.

| Scenario           | Description                                                                                                         
|-----|---|
|       |  Failover is executed manually, with automatic synchronous replication.        In case of failure, the backup environment provides read-only access until the failover is complete.             |
|         | Devices connect via a  and use a heartbeat connection to detect failures. When necessary, the standby device takes over the primary function automatically within up to 120 seconds. If the PAM Crypto Appliance was shut down due to a temporary failure, it will restore the primary device function. However, if the problem was caused by faulty hardware, you will have to manually reassign the primary device. |
| | Failover is executed manually, with automatic synchronous replication.  In case of failure, the backup environment will provide read-only access to the data until the user or Load Balancer completes the failover. |
|         | Failover is executed manually, with automatic synchronous replication.  In case of failure, the backup environment provides read-only access until the failover is complete.      |

:::(Error) (Important Hardware Requirement Notice for HA)
When deploying senhasegura in a clustered environment, particularly for high availability (HA) setups, it is crucial to ensure that . 



For reference, please review our  article to ensure each instance meets the necessary standards.
:::

## Scenarios

::: (info) (Info)
In the scenario descriptions, each member represents an instance in senhasegura.
:::

### Two members without an arbitrator
| Scenario                 | Type        | Application status        | Failover     | Automatic resync   |
|--------------------------|-------------|----------------------------|--------------|---------------------|
|                         | Member 2 Fails. | Available (Member 1).    | Automatic.    | Available .         |
|                         | Member 1 Fails. | Available (Member 2).    | Manual.       | Available.          |
|                         | Connection Failure (between sites). | Available (Member 1). | Automatic. | Available. |
|                         | Members 1 and 2 Fail.| Not available.      | Not available. | Not available.   |

#### Examples



* : the application continues to run on the first member.
* : automatic.
* : automatically performed when the instance is rebooted or regains connectivity.



* : the application continues to run on the second member.
* : manual.
* : automatically performed when the instance is rebooted or regains connectivity.



* : the application continues to run on the first member.
* : automatic
* : automatically performed when the instance is rebooted or regains connectivity.




* : application is unavailable.
* : not available.
* : contact senhasegura's support team to restore the members.
* If all members fail simultaneously, use the master key and credential backup procedure.

### Two members with an arbitrator

| Scenario                 | Type                           | Application status                                   | Failover     | Automatic resync   |
|--------------------------|--------------------------------|-------------------------------------------------------|--------------|---------------------|
|                         | Member 2 fails.                 | Available (Member 1).                                 | Automatic.    | Available.          |
|                         | Member 1 fails.                 | Available (Member 2).                                 | Automatic.    | Available.          |
|                         | Connection failure between sites with members. | Available on the member with connectivity to the arbitrator. | Automatic. | Available. |
|                         | Members 1 and 2 fail.           | Not available.                                        | Not available. | Not available.   |
|                         | Arbitrator fails.               | Available on both members.                            | Automatic.    | Available.          |
|  | Arbitrator and any other member fails. | Available on the functional member. | Manual. | Available on the functional member.

#### Examples



* : the application continues to run on the first member.
* : automatic
* : automatically performed when the instance is rebooted or regains connectivity.




* : the application continues to run on the second member.
* : automatic.
* : automatically performed when the instance is rebooted or regains connectivity.




* : the application continues to run on the member that is connected to  the arbitrator. 
* : automatic
* : automatically performed when the instance is rebooted or regains connectivity.



* : the application is unavailable.
* : not available
* : contact senhasegura's support team to restore the members. 
* If all members fail simultaneously, use the master key and credential backup procedure.

 
* : the application is available on both members.
* : automatic
* : automatically performed when the instance is rebooted or regains connectivity.



* : available on the functional member.
* : manual.
* : automatically performed when the instance is rebooted or regains connectivity.


### Three Members

| Scenario | Type                              | Application status                             | Failover                              | Automatic resync   |
|----------|-----------------------------------|--------------------------------------------------|---------------------------------------|---------------------|
|         | Member 2 fails.                    | Available (Members 1 and 3).                    | Automatic                             | Available.          |
|         | Member 1 fails.                    | Available (Members 2 and 3).                    | Automatic.                             | Available.          |
|         | Member 3 fails.                    | Available (Members 1 and 2).                    | Automatic.                             | Available.          |
|         | Connection failure with one member. | Available (All the other members).               | Automatic.                             | Available.          |
|         | Connection failure between all members. | Available (Member 1.                         | Manual                                | Not available.      |
|         | All Members fail.                   | Not available.                                   | Not available.                         | Not available.      |

#### Examples


* : the application continues to run on members 1 and 3.
* : automatic
* : automatically performed when the instance is rebooted or regains connectivity.

 
* : the application continues to run on members 2 and 3
* : automatic
* : automatically performed when the instance is rebooted or regains connectivity.




* : the application continues to run on members 1 and 2.
* : automatic.
* : automatically performed when the instance is rebooted or regains connectivity.



* : the application continues to run on the members still connected to the cluster.
* : automatic.
* : automatically performed when the instance is rebooted or regains connectivity.



* : the application continues to run on the first member.
* : manual.
* : automatically performed when the instance is rebooted or regains connectivity.



* : the application becomes unavailable.
* : not available. 
* : contact senhasegura's support team to restore the members. 
* If all members fail simultaneously, use the master key and credential backup procedure.

* * *

## Disaster recovery 
Disaster Recovery (DR) is a structured set of policies and procedures designed to recover data or restore the senhasegura infrastructure in situations involving natural or logical disasters. DR provides clients with the capability to reconfigure senhasegura resources, utilizing an alternative environment when the recovery of the primary environment becomes impractical.

Data integrity during DR is directly impacted by the quality and speed of the connection, as well as the amount of data present in the cluster. If any of these variables fail to meet specific requirements, it can result in data loss, deactivation of the production environment, and activation of the DR environment.




::: (error) (Important)
Manual intervention is required in case of hardware-related failures to restart and recover the system.
:::

## Hot-Spare Resources
senhasegura instances come equipped with hot-spare resources for maintaining high availability, including continuous monitoring and administrative URLs for supervising the operational status of each instance.

The use of these hot-spare features allows an automatic capability to switch between instances, ensuring that, in case of failure, workloads are efficiently redirected to operational instances

## Internal Load Balancer
When implementing senhasegura, you have the flexibility to choose between using a proprietary load-balancer software or integrating senhasegura's native load balancer into your clustered environment.