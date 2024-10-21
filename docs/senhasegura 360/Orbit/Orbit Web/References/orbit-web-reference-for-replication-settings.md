# Reference for Replication settings 

# Replication Settings

In this document, you will find all the information about the  menu of the  interface.

## Access Path

1. In senhasegura, at the top left corner, click on the , represented by the nine squares, and select .

1. In the side menu, select .

### Replication Settings

|                    |                                                                                                  |
|----------------------------|---------------------------------------------------------------------------------------------------------------|
|          | Must be chosen between , , , and .         |
|           | Enable or disable the option to synchronize files.                                                             |
|  | Specify in seconds the maximum number of seconds to retry an update on the synchronization table.             |

### Cluster Members

|                     |                                                                                                |
|-----------------------------|-------------------------------------------------------------------------------------------------------------|
|           | Field to add the primary member of the cluster.                                                              |
|      | Field to add additional member 1 of the cluster.                                                             |
|      | Field to add additional member 2 of the cluster.                                                             |
|      | Field to add additional member 3 of the cluster.                                                             |
|      | Field to add additional member 4 of the cluster.                                                             |
|      | Field to add additional member 5 of the cluster.                                                             |
|       | Field to add the arbitration member of the cluster.                                                          |
|  | Enable this field if the cluster members are in different datacenters.                                 |
|  | Choose between , , and , being Low: 0-10ms, Medium: 10-30ms, and High: > 30ms.     |
|          | This field must be filled with a number between  and . Nodes from the same datacenter must be configured with the same segment. Leave blank if there is only one node in each datacenter. |
|  | Customizable message for display on the recovery screen.                                           |
|                     | Button to save the changes.                                                                                   |