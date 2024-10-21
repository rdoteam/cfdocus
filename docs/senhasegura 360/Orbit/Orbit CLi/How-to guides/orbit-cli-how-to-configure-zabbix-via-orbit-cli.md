# How to configure Zabbix via Orbit CLI 

This documentt is a guide on how to configure the  via  for remote monitoring.

## Requirements

* You must have SSH access with the user account . For instructions on how to use this feature, refer to the  documentation.

## How to configure Zabbix via Orbit CLI

1. Start an SSH session with the user  on the remote server.
2. Run the command .

`bash
sudo orbit zabbix
--server=172.10.10.12:10051
--listen=10.66.33.27
--lport=10050 
--tls
`
Where:

* : defines the IP addresses of the Zabbix server(s), followed by the ports, separated by commas, for example: .

* : specifies the IP of the senhasegura server where the Zabbix Agent waits for monitoring requests.
* : defines the default port (10050) on which the Zabbix Agent will be ready to receive connections from the Zabbix server.
* : optional parameter to encrypt communication between the Zabbix agent and server. Generates an "identity" and a "pre-shared key" (PSK) for authentication and security.
3. Type  to confirm when prompted.

After running the command, you’ll receive the following response:

`bash
Done!
Zabbix TLS parameters
Identity = BABQUAGCOXknWsRJhvmu
Pre-shared key = 896ee734944dc71ff6f0a6111fb4ec25a8954e3ee0eda07f7ac582952b742eae
`
4. Run the command  to confirm that the configuration has been applied correctly.

`bash
sudo orbit zabbix --show
`
This command will display detailed information about the Zabbix Orbit configuration. Ensure to review this information to confirm that all settings are correct.