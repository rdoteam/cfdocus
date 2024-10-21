# How to manage proxy settings 

The proxy settings in senhasegura can be executed using the command . 

:::(info)(Info)  
Each proxy has its own peculiarities, so some of the parameters have a limited effect on the systems that support them.  
:::

## Help parameter

In the terminal, you'll find a brief explanation of the command parameters , just type 

The output of the command will be as shown below:

`bash
$ sudo orbit proxy --help
Usage: orbit proxy 
 [
]

Application access proxy settings

Arguments:
  
       The proxy name: [fajita|jumpserver|rdpgate|nss]
  [
]    Systemd command: [start|stop|restart|status]

Flags:
  --help                        Show context-sensitive help.

  --api-cons=STRING             The Consumer Key
  --api-token=STRING            The Token
  --rdp-encryption="high"       The proxy name: [none|low|high|medium|fips]
  --language="en_US"            The proxy language
  --enable-sudo                 Enable sudo automation
  --fajita-block-interface
  --fajita-unblock-interface
  --force                       Force the command execution, never prompt
  --show
`

## Start, restart, or stop proxies

You can manage proxies by performing actions such as stopping, restarting, and starting them. To do this, use the , , or  to check their status. For status information, use the .

The output of each parameter will be as shown below:

`bash
$ sudo orbit proxy fajita stop
The application services will be stopped or restarted during the process.
 Are you sure you want to proceed: y

$ sudo orbit proxy fajita start
The application services will be stopped or restarted during the process.
 Are you sure you want to proceed: y

$ sudo orbit proxy fajita status
● fajita.service - fajita service
   Loaded: loaded (/lib/systemd/system/fajita.service; enabled;
           vendor preset: enabled)
   Active: active (running) since Thu 2020-06-18 17:10:39 -03; 2s ago
 Main PID: 13842
    Tasks: 6 (limit: 3489)
   Memory: 29.6M
   CGroup: /system.slice/fajita.service
`

## List active settings

Using the parameter , you can list each proxy's active setting. Note that this command will only display the active settings for each proxy. 

The output of the command  will be as shown below:

`bash
$ sudo orbit proxy fajita --show
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         true

$ sudo orbit proxy jumpserver --show
The Consumer Key:        c97c7f976153753b1065a57214853dc5630436c0
The Token:               150cd77aba427d4e4de5ce070b4c5dfe526c941b
Access proxy language:   en_US
SUDO automation:         True

$ sudo orbit proxy rdpgate --show
The Consumer Key:        ea3d21730571e3ba03ba9812e2579bd0b439643b
The Token:               16c017bb51d2581f7f4eea9c5d851d8fe1d6c10c
Access proxy language:   en_US
RDP encryption level:    high
Security Layer:          rdp
SSL Ptotocols:
TLS Ciphers:

$ sudo orbit proxy nss --show
The Consumer Key:        "a4d63bc9392880fc24358795c9f1615164d4dfa4"
The Token:               "40f1d439fd38466fe4bd61e9c96330541d258f04"
`

## Change the language

To change the language of a proxy system, use the argument . As an additional parameter, you must pass the international code of the language you want to change to. For example,  for Brazilian Portuguese.

:::(info) (Info)  
You need to restart the proxy for the changes to take effect.  
:::

For example, the command  will change the language of the proxy to North American English. The output of the command will be as shown below:

`bash
$ sudo orbit proxy fajita --language="en_US"
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false
`

## Enable automated sudo use

:::(warning) (Caution)

- This option is only available for web proxies and terminal proxies.  
- Activation in one proxy isn’t reflected in the other.  
- The web interface, by segregating this functionality, ensures that the use of each session complies with the security criteria established for access groups, devices, and credentials. However, if this functionality is disabled on the proxy, this will prevent automated lifting from being carried out, even if the user has the necessary permissions.
:::

Use the  argument to enable automated use of the sudo command on the  or  proxies. To enable it, type `sudo orbit proxy 
 --enable-sudo=“true”sudo orbit proxy 
 --enable-sudo=“false”`.

:::(info) (Info)  
You need to restart the proxy for the changes to take effect.  
:::

The output of the command `sudo orbit proxy 
 --enable-sudo=“false”` will be displayed as below:

`bash
$ sudo orbit proxy fajita --enable-sudo=false
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false
`

## Block and enable the embedded browser interface

The embedded browser, which allows proxy access to web pages, can have its interface blocked or enabled for users.

:::(warning) (Caution)  
Enabling the interface will allow users to open new tabs and access systems other than the one to which their credentials grant them access.  
:::

To enable the embedded browser, type .

The output of the command will be as shown below:

`bash
$ sudo orbit proxy fajita --fajita-unblock-interface
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
`

To block the embedded browser interface, type   


The output of the command will be as shown below:

`bash
$ sudo orbit proxy fajita --fajita-block-interface
The application services will be stopped or restarted during the process.
re you sure you want to proceed: y
`

## Determine the encryption level for the RDP protocol

For proxy systems that handle the RDP protocol, you can determine the encryption level of the connection.  
The encryption options are:  and must be passed as a parameter. For example, the command  will set the Fajita proxy's encryption to low.

:::(info) (Info)  
You need to restart the proxy for the changes to take effect.  
:::

`
$ sudo orbit proxy fajita --rdp-encryption=low
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false

$ sudo orbit proxy rdpgate --rdp-encryption=high
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        ea3d21730571e3ba03ba9812e2579bd0b439643b
The Token:               16c017bb51d2581f7f4eea9c5d851d8fe1d6c10c
Access proxy language:   en_US
RDP encryption level:    high
Security Layer:          rdp
SSL Ptotocols:
TLS Ciphers:
`

| Encryption level | Description |
| ----- | ----- |
|  | No encryption is applied. Data is transmitted insecurely, which may only be suitable for secure internal networks where there is no risk of interception. |
|  | Basic encryption is applied. Generally, this means that encryption is sufficient to protect against casual interception but may not be strong enough to protect against determined and resourceful adversaries. |
|  | It provides an intermediate level of encryption security. It's more secure than low but doesn't offer the maximum possible protection. |
|  | High encryption. This level uses stronger algorithms and keys, providing better security and being suitable for sensitive transmissions where greater exposure to potential interception is expected. |
|  | FIPS-compliant encryption (Federal Information Processing Standard). This generally refers to the standards required by government agencies in the USA for devices and systems that use encryption. It's the highest and strictest level of encryption indicated in the command. |

## Configuring the A2A WebService token

The A2A WebService authentication keys of the proxy systems can be determined using the arguments  e . 

:::(info) (Info)  
You need to restart the proxy for the changes to take effect.  
:::

The output of the command  will be as shown below:

`bash
$ sudo orbit proxy fajita
  --api-cons=88122cce2d14d5cbd57f77c552e80843d97ff4be
  --api-token=b25abee1b365458a9d719608bda85f6eb4900885
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false
`

## Enable proxy 2.0

If necessary, you can enable proxy 2.0 in senhasegura. To do this, type the command .

The output of the  command will be as shown below:

`bash
$ sudo orbit proxy shift v2
Are you sure you want to proceed: y
`

To roll back to the previous proxy, type the command  

The output of the  command will be as shown below:

`bash
$ sudo orbit proxy shift v1
Are you sure you want to proceed: y
`

The  command has a help text about its main functions. To use this help, type .

The output of the command will be as shown below.

`bash
$ sudo orbit proxy shift --help
Usage: orbit proxy shift

Arguments:
      Shift between proxy versions: [v1|v2]

Flags:
  -h, --help     Show context-sensitive help.
                                                                                                                                                                                                                                                          
      --force    Force the command execution, never prompt
`

---

Do you still have questions? Reach out to the .