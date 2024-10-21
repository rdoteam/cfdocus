# How to enable Recovery 

senhasegura provides a feature called , which allows manual or automated activation of instances through HTTPS requests. This is useful for monitoring and remotely controlling instances, enabling or disabling them as needed, and preventing an under maintenance or unavailable instance from receiving traffic.

## How to enable Recovery

1. In the upper left corner of the senhasegura platform, click on , identified by the icon of nine squares, and then select .
2. On the side menu, select  and then .
3. Enable the .
4. In the  field, add the authorized IPs.

:::(Warning) (Caution)
When using subnet masks, the CIDR notation should be adopted, e.g., .
:::

:::(error) (Important)
It’s recommended to enable only the IPs that will effectively manage the application. 
:::
5. Click .
6. Apply these steps to all members of the cluster.




## Instance monitoring
The IPs registered in the  configuration can access the monitoring URL , obtaining information about the current state of the instance, indicated by HTTP status codes:


| Status |Description |
| --- | --- |
| |Application active and available. |
|  | Application active but not the primary. |
| | Application inactive and unavailable. |
|  | Activation license expired. |
| | Application unavailable. |


## Automatic activation and deactivation

It’s possible to allow an external system to control the automatic activation and deactivation of instances. For example, activating an instance as the primary for a contingency data center. You can accomplish this by utilizing the URLs listed below:

### Activate
`GET
 /flow/orbit/mntr/activate`

When activating an instance, it becomes available to users, but this only happens if the activation license is valid. After a successful activation, the instance that was previously the primary in the cluster is no longer the primary, and the newly activated instance becomes the primary. It's important to note that other instances aren’t automatically deactivated during this process.

Example: 

::: (info) (Info)
The Recovery button is used to interrupt and restart Elasticsearch in emergency situations when it’s necessary to take over the secondary instance independently.
:::

### Deactivate
`GET
/flow/orbit/mntr/deactivate`

Deactivating an instance will make it unavailable. If this instance is the primary, it will be deactivated without another cluster member being elected as the new primary. It's important to emphasize that this action won’t activate other instances, even if they are inactive.

Example: 

::: (Warning) (Caution)
Controlling which instances are running and deactivated in the cluster is crucial. Avoid the risk of accidentally deactivating all instances, which could disrupt user operations.
:::

* * *

Do you still have questions? Reach out to the .