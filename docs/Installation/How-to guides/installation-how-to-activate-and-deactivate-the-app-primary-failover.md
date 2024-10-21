# How to activate and deactivate the App Primary Failover 

In this article, you’ll find a guide on how to activate the .

## Requirements
To successfully activate the , you must meet the following requirements:

* The environment must be in a cluster.
* The number of members in the cluster must be greater than or equal to three, including the Arbitrator, when present.
* The number of members in the cluster must be odd.
* All instances of senhasegura must have connectivity with all necessary devices and endpoints.


::: (error) (Important)

Once  is activated, manual intervention to select the primary instance isn’t possible.

:::

::: (info) (Info)
The  runs every 60 seconds and the logs can be found in the file .
:::
## How to activate the App Primary Failover
To activate the , follow these steps:

1. .
2. Run the following command to start the : 
`Shell
sudo systemctl enable --now app-primary-failover
`
3. Repeat the steps above for all other cluster members.

::: (warning) (Caution)
Failure to apply these steps to all cluster members may result in the malfunctioning of the feature.
:::


## How to deactivate the App Primary Failover
To deactivate the , follow these steps:

1. .
2. Run the following command to start the : 
`Shell
sudo systemctl enable --now app-primary-failover
`
3. Repeat the steps above for all other cluster members.

::: (warning) (Caution)
Failure to apply these steps to all cluster members may result in the malfunctioning of the feature.
:::