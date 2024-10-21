# How to perform a Disaster Recovery test 

In this article, you’ll find a step-by-step guide on how to conduct a Disaster Recovery (DR) test by executing a manual failover.

::: (error) (Important)
To successfully conduct this test, the  member must be abruptly shut down.

:::

## Requirements

* Two senhasegura instances must be available.
* Instances must be in the same cluster and operating correctly. For more information on cluster settings, refer to the article .
* Take a snapshot of the instances.

This test is intended for two instances as cluster members. Before starting, check the following tags at the bottom of each member:

#### Member A (Primary)

* : Production and Enabled.

* : Primary.

#### Member B (Secondary - contingency)

* : Contingency and Disabled.

* : Non-primary.

## Step 1: Take snapshots

Before conducting the test, it’s crucial to take a snapshot of the instances as a precaution since abrupt shutdowns can cause damage.

::: (error) (Important)
Always take snapshots in reverse order of the cluster. In this case, first take a snapshot of  and then of .
:::

To take a snapshot, follow these steps:

1. Access the instance.
2. Run the following command to shut it down:
`Shell
sudo orbit shutdown

`
3. When the instance is completely shut down, take the snapshot in the hypervisor.
4. Then, restart the instance and verify if the operation has been restored.

## Step 2: Validate the cluster

1. Access .
2. In the  and the  tables, check if the cluster size corresponds to .

## Step 3: Configure the Recovery

1. On , access .
2. Enter the . 

:::(warning) (Caution)
Make sure not to use *Wildcards* (*).

:::
::: (info) (Info)
This list will make the  button visible to users.
:::

:::(warning) (Caution)
When using subnet masks, adopt the CIDR notation, for example, .
:::

## Step 4: Execute the Disaster Recovery Test

1. Force an abrupt shutdown on .
::: (warning) (Caution)
Ensure it’s an abrupt shutdown; otherwise, the cluster will detect the deactivation, and  will not display the  page.
:::
2. Once  is inactive due to unexpected behavior,  will enter a *split brain*, blocking any database changes until manual instructions. 
3. Then, the  page will be displayed on the web application.
4. Click .
5. Confirm by clicking . This will set  as the new  member. This process may take a few minutes.
::: (info) (Info)
Ensure the button appears; otherwise, refer to  to ensure IPs are configured correctly.
:::
6. Once the Orbit Web interface is available on , check if the tag indicates that this instance is now the  member.
7. To access other senhasegura modules, you need to enable the application. Go to , and toggle the  button to the active position.
8. Click . 
:::(info)(Info)
If the green color is displayed, then the application is activated.
:::
9.  Log out and log in again to access other modules.

After these steps, all senhasegura functionalities will be available and operational on the DR .

## Step 5: Recover the Primary Member

1. Activate  and wait for synchronization with the other cluster database. This may take a few minutes.

::: (info) (Info)
 will identify the issue, and , currently , will automatically synchronize new information between members.
:::
2. After synchronization, the login page will be displayed on the main web application interface.
3. Log in to  web application and click  to restore it as the  member.
4. On , go to , and toggle the  button to the inactive position.
5. Click . 
:::(info) (Info)
Make sure the green color is not displayed.
:::

## Step 5.1 (alternative): Recover the Primary Member via SSH

1. Initiate an SSH session on  using port  with the user . 
2. Run the command  to check the following information:
`Shell
 sudo orbit application status

Application: Active
Replication: Active
Instance:    Cluster
Primary:     memberB
Main:        No

`
3. Then, execute the command  to set  as :
`Shell
sudo orbit application primary

Application: Active
Replication: Active
Instance:    Cluster
Primary:     memberA
Main:        Yes

`