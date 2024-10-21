# Parameters for Orbit CLI 

PThis article describes the parameters of the orbit command and its functionality.

:::(warning) (Attention)
* In case you're in a cluster architecture, it's important to know that actions taken in one instance aren't reflected in all the other instances. For commands that may affect the operation of the cluster, you must manually execute the commands on each instance.
* The commands below can restart services that are essential for the application to function, causing a momentary outage. Invalid configurations can cause irreversible unavailability. You'll always be alerted to the possibility of unavailability and asked if you want to proceed with executing the commands.
:::

## Available commands
The  command, if executed without instructions, will display the help about the available parameters. 

This command requires root privileges. In case you try to execute a command without elevation, you will receive a warning message:

`bash
mt4adm@vmdf-giskard:~$ orbit
This program must be run with root permissions!
`

| Parameter            | Description                                                  |
|----------------------|--------------------------------------------------------------|
|       | Application settings tools.                                  |
|                   | A2A settings tools.                                          |
|               | Network settings tools.                                      |
|         | Domum Gateway settings tools.                                |
|     | senhasegura Network Connector settings tools.                |
|              | Change the server hostname. Need to reboot server after.     |
|                   | The Domain Name System (DNS) management tools.               |
|                   | The Network Time Protocol (NTP) management tools.            |
|               | Upgrade the system by installing/upgrading packages.         |
|                | Application backup settings.                                 |
|               | High Availability and Disaster Recovery settings tools.      |
|                  | Files and application directories synchronize configuration. |
|                | Webserver SSL certificates management tools.                 |
|                | Language and locale settings                                 |
|             | File system partitions management tools.                     |
|                  | Disks management tools.                                      |
|                | Zabbix client configuration.                                 |
|                 | Application access proxy settings.                           |
|    | Email OAuth2 Proxy settings.                                 |
|                | Fajita access proxy management tools.                        |
|               | RDP Gate access proxy management tools.                      |
|                  | Simple Network Management Protocol (SNMP) management tools.  |
|              | System Firewall management tools.                            |
|              | Power off or reboot the machine safely.                      |
|             | Asynchronous task batch execution tool.                      |
|              | Manage senhasegura asynchronous services.                    |
|              | System security management tools.                            |
|               | Print version information and quit.                          |
|           | Health Check tools.                                          |
|            | Repository settings tools.                                   |

O parâmetro  permite que sejam passados quatro parâmetros:

| Parameter                         | Description                                               |
|-----------------------------------|---------------------------------------------------------|
|        | Source repository for installing stable versions.       |
|     | Source repository for installing candidate versions.    |
|       | Source repository for installing test versions.         |
|       | Source repository for installing unstable versions.     |