# How to configure the monitoring 

In this documentation we will only describe the hardware, operating system and monitoring services that can be queried through the  protocol and the  agent. In addition to  messages that can be forwarded to  systems and notification emails triggered by .
:::(Info) (Info)
Some notifications are sent via  or  to configured users.
:::
:::(Warning) (Attention)
We don't allow the installation of monitoring agents not approved by the senhasegura . Only the tools described in this document are approved for use.
:::

## Monitoring through Zabbix
:::(Info) (Info)
The installed version of  is . If you need to install a higher version, please contact our support team. 
:::
By default, the  service will be inactive on the instance. To activate it, access the menu , locate the  service and click on the .

To configure the  that will receive the data:

1. Go to menu .
2. Fill in the  and  fields with the destination server data
3. If you want, you can add up to 3 servers, just fill in the server IP and the connection port to the server.
4. Fill in the  field with the instance access interface IP.
5. Finally, keep  with .

:::(Warning) (Caution)
To set up an access using TLS, use the  so that the data  and  be presented.
:::

## Monitoring through SNMP
The instance has support for  and from version 3.8 there is support for  configured only by Orbit Command Line. See the  documentation for more details.

Through the  interface, it is possible to configure the servers allowed to read and the community, through the menu .

:::(Info) (Info)
The  service will be restarted with each change.
:::

## Monitoring through SYSLOG (SIEM)
The senhasegura is compatible with the most used  tools in the market and offers support for the transmission of messages in , , and  formats. 

To configure access the menu  configuration and fill the following fields:

*  Refers to the selected format of the message to be sent, which can be , ), or .
*  Used only in cases of paid customization projects. Keep this field at its default value. It is not recommended to manipulate this control without the supervision of the Support team.
*  Choose between  or .
*  Refers to the network connector to send the message.
*  Indicates if the network connector selected will be utilized in the  message-sending configuration.
:::(Info) (Info)
Sending syslog messages to the  via network connector is only possible when using the TCP protocol. UDP is not supported.
:::
*  A list of IPv4 servers, separated by commas, that will receive the messages.

## Orbit alerts and incidents
Some alerts are specific to modules and features of senhasegura . These alerts are monitored by  and forwarded to certain users depending on their criticality. 

To configure the recipients to receive these alerts, go to the menu  >  >  and add the emails in the field . The pending solution incidents will be presented in the menu .

:::(Info) (Info)
The emails will be sent whenever the incident is created or updated. Only the types and event , ,  and  will be notified.
:::
:::(Warning) (Caution)
Incidents of the type  generate email sending to all users logged in at the moment and will also be echoed to users who are logged in SSH in the instance senhasegura. Users who are in proxy sessions through the senhasegura Web Proxy or senhasegura Terminal Proxy will not receive these echoed notifications.
:::

### Application activation
*The activation key is required to use the application. The access to your application will be blocked in DAYS.*

#### Priority


#### Resolution

* Get in touch with our support team to renew your application license.
* * *

### Mysql Service
*Mysql service failed: MESSAGE*

#### Priority


#### Resolution

* If you are running a senhasegura cluster environment, first at all assume the next node as Primary.
* If you are running into a DR schema, enable the DR instance as primary.
* After normalize the environment, isolate the problematic instance and start a database recovery mirroring the new primary instance.
* * *

### DB Cluster
*Database Cluster failed: MESSAGE*

#### Priority


#### Resolution

* First at all assume the next node as Primary.
* After normalize the environment, isolate the problematic instance and start a database recovery mirroring the new primary instance.
* * *

### Cluster Replication Health
*The node cannot apply write-sets as quickly as it receives them: AVGVALUE*
*The node flow control was paused to a long time: FLOWCONTROLVALUE*
*Replication throttling or network throughput issues: AVGQUEUE_VALUE*

#### Priority


#### Resolution

* Network latency should be configured. At the  cluster configuration set that nodes are in different data centers.
* * *

### Cluster Replication Issues
*Node is not synced: STATUS*

#### Priority


#### Resolution

* Checkup if the node can reach the others cluster members and reconfigure the problematic node.
* * *

### Database Primary key increase alert
*Database Primary key increase alert: Table TABLE_NAME*

### Priority


### Resolution

* Execute the Primary key maintenance procedure located at senhasegura .
* * *

### Remote partition problem
*Your remote partition has a problem! Please check your mounted partitions.*

#### Priority


#### Resolution

* Check if the target device can be reached by the senhasegura instance.
* Check if the credential used to authenticate is enabled and has the right permission to access the device.
* Check if the target device support the configured protocol.
* * *

### Inodes usage
*Inodes block usage problem: DETAIL*

#### Priority


#### Resolution

* Execute the  maintenance procedure located at senhasegura .
* * *

### Disk Usage
*Disk space usage problem: DETAILS*

#### Priority


#### Resolution

* Attach a new virtual disk to the instance and execute the partition resizing.
* * *

### Files Replication
*Replication interval is too long! Last sync: TIME*
*Replication error! Pack: ID*

#### Priority


#### Resolution

* Session files replication failure. Execute the  manually as described at  procedure at senhasegura .
* * *

### Application version
*Application version is different between nodes: DETAILS*

#### Priority




* Execute  into all instances.
* * *

### System restart required
*One or more processes require a full reboot.*

#### Priority


#### Resolution

* Execute the system reboot. Into a cluster environment you should reboot one instance by time given the right time to the cluster identify every cluster leave and entrance.
* * *

### Master key not set
*Master key not set. It is not possible to create a backup of your credentials.*

#### Priority


#### Resolution

* Perform the Master Key ceremony.
* * *

### Master key guardian inactive
*Master key guardian inactive. You have inactive guardians in the system, redo the master key process.*

#### Priority


#### Resolution

* Check if the guardian made wrong its login and disabled its user. If it is not the case, redo the master key process.
* * *

### Proxy Service alert
*Proxy Service not running: DETAILS*

#### Priority


#### Resolution

* Restart the service using  command. If the problem continue, restart the instance.
* * *

### Default E-mail Account
*E-mail Account is not set up*

#### Priority
LOG_ERR

#### Resolution
* Register an  account.
* * *

### System without initial key settings
*System without initial key settings. Run the system setup wizard to resolve this issue.*

#### Priority


#### Resolution

* This error should appears only into not configured instances. Execute the deployment steps to solve the incident.
* * *

### System key is missing or corrupted
*System key is missing or corrupted. Contact system administrator immediately.*

#### Priority


#### Resolution

* The system key, generated into deployment stage, is not found. It can occurs when an really old backup is restored with an updated senhasegura software. Call our support team.
* * *

### Default password not changed
*The system default user account password must be changed. Use the command 'orbit security password' to change it.*

#### Priority


#### Resolution

* Execute  to change the default password.
* * *

### Server configuration tuning not applied
*The server configuration tuning is different from the minimum required.*

#### Priority


#### Resolution

* Check if the hypervisor changed the virtual machine hardware profile. After given the right hardware configuration to to the instance, perform the tuning again.
* * *

### Disk expansion process is recommended
*The size of your data partition is dangerously small. Please expand your disk capacity or add a new disk.*
*The size of your audit log partition is dangerously small. Please expand your disk capacity or add a new disk.*

#### Priority


#### Resolution
* Attach a new virtual disk to the instance and execute the partition.
* * *

### Orbit Notify
*Error to sent e-mail alerts: DETAILS*

#### Priority


#### Resolution
* Check if the configured  account has the right network, security and authentication configuration.
* * *

### Application backup error
*Remote Server SERVER: DETAILS*

#### Priority


#### Resolution
* Check if the target device can be reached by the senhasegura instance.
* Check if the credential used to authenticate is enabled and has the right permission to access the device.
* * *

### Network connector agent unavailable
*The network connector agent has primary unavailable. AGENT, PORT.*
*The network connector agent has secondary unavailable. AGENT, PORT.*

#### Priority


#### Resolution
* Activate the .

## Logs
The  schedules several asynchronous operations of settings that will be applied on the instance server. These operations generate execution logs (not detail logs) that can be followed in the following reports.

*  All senhasegura application layer logs, including user operations and  operations. Alerts also will appears into this logs.
* :  requests. No sensitive data will be displayed.
*  Accessed by the  menu, you will be able to see all  operations that have been requested, date/time and request:
    * , , ,  and  settings definitions.
    *  and  definitions.
    * ,  and  definitions.
*  Accessed by the  menu, you can follow the execution of these operations. That is, the moment of change of state of the operation from time to time.
* :  status and logs.
* :  definition and execute logs.
* :  operationa and error log.
* :  access and error log.
:::(Info) (Info)
In this same menu you'll have access to other service logs of the operating system. Use only for diagnosis.
:::