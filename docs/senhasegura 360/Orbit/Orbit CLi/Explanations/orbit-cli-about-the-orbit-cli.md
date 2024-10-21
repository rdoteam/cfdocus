# About the Orbit CLI 

 is the senhasegura console created to provide tools for system configuration and administrative routines.

With this tool, administrators can easily connect to network services, ensure that binaries are always up to date, and perform essential maintenance and configuration operations in a centralized manner. This reduces the complexity of system management, increases operational efficiency, and allows for more agile and secure administration.

## Key Features

1.  System update is an exclusive operation of .

1.  Cluster configuration is an operation that can be performed both through the web interface and .

1.  Network configuration is an exclusive operation of .

1.  Backup can be configured both through the web interface and through .

:::(Warning) (Attention)
These operations require elevated privileges, being restricted to users  and . It is important to note that, in the case of user , it is necessary to execute the command with , otherwise,  will return the message:
`
mt4adm@vmdf-senseg:~$ orbit -h
This program must be run with root permissions!
`
:::