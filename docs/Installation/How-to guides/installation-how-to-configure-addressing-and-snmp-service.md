# How to configure addressing and SNMP service 

In this article, you’ll find instructions on how to configure the addressing and SNMP service of iDRAC.

## How to configure addressing

To configure the iDRAC’s addressing, follow these steps:

1. In the iDRAC management interface, access  .
2. Fill in the following fields:
    * : if this option is selected, the IPv4 protocol will be activated. It should always be selected by default.
    * : if this option is selected, the DHCP protocol will be activated to assign the server's IP address.
    * : if this option is selected, the DHCP protocol will obtain the server's DNS address.

3. If the  field is not selected, fill in the following fields:

    * : enter the server's IP.
    * : enter the server's gateway.
    * : enter the server's subnet mask.
4. In the  tab, fill in the following fields:
    * : enter the SNMP community name.
    * : indicates which SNMP protocol will be used.
    * : port number for discovery communication.

5. Click  to apply the settings.

## How to configure the SNMP service

### Requirements 

* You need to identify the supported version format by your environment and the tool that will monitor the .

* To use , you must create a user with privileges for the authentication process between the monitoring tool and the .



### How to configure the SNMP service with monitoring tool information

1. In the iDRAC management interface, access .
2. Fill in the following fields:
    * : indicates whether the alert service is active or not.
    * : select the categories of alerts to be sent.
    * : select the severity of the alerts to be sent.

3. In the  tab, fill in the following fields:
    *  : indicates whether the alert destination is active or not.
    *  : enter the destination server's IP for alerts.
    *  : select the SNMP user.
    *  : enter the community string name.
    *  : enter the port number for alert sending.

4. In the  field, select the format of SNMP traps.
5. Click  to apply the settings.

### How to create an SNMP v3 user

To create an SNMP v3 user, follow these steps:

1. In the iDRAC management interface, access .
:::(info) (Info)
The users configured in iDRAC will be displayed along with their status and respective privileges.
:::
2. Select a user with  in the .
3. Select the  option in the  section.
4. Click .
5. In the , fill in the following fields:
    * : select this option to enable the user.
    * : enter the username.
    * : if you enable this option, the user must change the password on the first login.
    * : enter the user's password.
    * : confirm the user's password.

6. In the  section, fill in the following fields:

    * : select this option to enable the SNMP v3 protocol. 
    * : select the authentication type for SNMP v3 protocol.
    * : select the privacy type.

7. In the  section, enable .
8. Click  to apply the settings.


* * *

Do you still have questions? Reach out to the .