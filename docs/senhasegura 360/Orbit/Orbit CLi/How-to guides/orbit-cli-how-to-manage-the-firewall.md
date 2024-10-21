# How to manage the firewall 

One of the many configurations you can do with the  is the management of firewalls blocked hosts, performed by the HIDS. Use the  command to manage hosts attempting to connect to senhasegura via .

The  command can be used with arguments and flags. Example: .

:::(info) (Info)
Run  to learn more about all available flags and arguments or access the   documentation.
:::

## Orbit firewall arguments guide

Use the  argument to access the currently blocked hosts list. Example: . 

Expected output example:

`shell
Currently blocked hosts
172.18.77.185
`

### Block IPs

To block a specific IP, use the  argument with the  flag followed by the target IP and confirm the action. Example: .

Expected output example:

`shell
Are you sure you want to proceed: y
Done!
No errors reported
`

### Allow IPs

The firewall blocks hosts that failed three SSH connection authentications. If you have tests or false positives being blocked, unblock those IPs and send them to the allowlist.

To grant access to specific IPs, use the  argument with the  flag followed by the target IP and confirm the action. Example: .

:::(info) (Info)
You can only allow IPs that have been previously blocked. Blocked hosts are denied access to all services (web interface, SSH, RDP, and others).
:::

Expected output example:

`shell
Are you sure you want to proceed: y
Done!
No errors reported
`

To activate or deactivate ICMP from hosts, use the  argument followed by the  or  command, the target IP. To confirm the action, enter . Example: .

Expected output example:

`shell
Are you sure you want to proceed: y
Done!
No errors reported
`

### Normalize firewall rules

To normalize the firewall rules, use the . To confirm the action, enter .

Expected output example:

`shell
Are you sure you want to proceed: y
Firewall normalized
No errors reported
`

:::(info) (Info)
The will automatically run the normalize action with each system update. 
:::

## Allowlists

To add hosts to the allowlist, use the  command, specify all hosts needing server access with the  argument, and pass the comma-separated IPs with the  flag. 

Example: 

`shell
orbit wazuh whitelist add --ips=172.23.213.48,172.23.213.49,172.23.213.50
`

To remove IPs from the  allowlist, use the  command, specify all hosts that don't need access to the server with the  argument, and pass the comma-separated IPs with the  flag. 

Example: 

`shell
orbit wazuh whitelist delete --ips=172.23.213.48,172.23.213.49,172.23.213.50
`

To print the  allowlist, use the  argument. Example: .

---

Do you still have questions? Reach out to the .