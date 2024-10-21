# How to create a cluster 

In this article, you’ll find instructions on how to create a cluster in senhasegura.


:::(error) (Important)
Before setting up a cluster, always make sure to  and take a snapshot of the instance to ensure a recovery option in case of failure.
:::

:::(Warning) (Caution)
During the configuration, it’s possible that the senhasegura instance you are configuring may experience periods of unavailability.
:::

:::(Info) (Info)
Data replication with an external cluster is in an experimental phase. If you need to use this feature, contact our support team.
:::

## Requirements

To create a cluster, you must  meet the following requirements:

* Download the senhasegura application from the  in the  section.
* Change the default password of the application.
* Configure the  of the application.
* Configure the .
* Configure the .
* Configure the .


## How to create a cluster
To create a cluster, follow these steps: 
:::(Info) (Info)
By following these steps, you can create a new cluster or add members to an existing cluster.
:::

1.  Go to .
2.  In the , select .
3.  Click the  button.
4. Activate the .
5. Set the  in seconds. The default value for Sync Timeout is 15 seconds, but you can customize this interval as needed.
6. Add the .
:::(Warning) (Caution)
  Make sure to add the IPs in the same order on all cluster members.
 :::
7. If the members are in different data centers, enable the  option.
:::(Warning) (Caution)
For clusters with members in different data centers, it is recommended to use  between the members.
::: 
8. Define the  with a number between 1 and 9.
:::(Info) (Info)
Members from the same data center should be configured with the same segment. If a data center has only one member, you can leave the  field empty.
:::
 
9. Define a  in case of failure.
10. Click .
11. Click  to confirm that you want to change your database settings and restart the service.
12. If this is the primary instance, click .
:::(Warning) (Caution)
Configure only one member as the primary. In case of failure, configure another member to assume the primary role.
:::

13. Verify if the status indicates that the system has already been restored and that the cluster member was created successfully.
:::(error) (Important)
Before starting the configuration of the next cluster members, wait for the restoration of the configured instance, as the application's database will be restarted and updated with the new settings. Access  to verify if the cluster creation is completed. If yes, proceed to the next instance.
 :::

14. Repeat the process with the next cluster members.

After configuring the first member and the following ones, they will have their system restarted and the database updated, being added to the cluster with the same password as the primary member of the cluster.
:::(error) (Important)
All cluster members will share the database information from the primary member.
:::

For additional information about the cluster architecture, refer to the article on .

* * *
Do you still have questions? Reach out to the .