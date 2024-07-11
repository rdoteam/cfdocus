## Metadata_Start 
## code: en
## title: Session Technologies 
## slug: pam-session-technologies 
## seoTitle: Session Technologies 
## description:  
## contentType: Markdown 
## Metadata_End
senhasegura has the availability of the following proxy technologies and what functionality they support.
To make better use of proxies in senhasegura, it is important to understand that there are two types of connections happening during a session:

A connection that originates from the user's workstation to the senhasegura server and another that leaves the senhasegura server to the device the user wants to access. Always working as a bridge between user and target device.

:::(Warning) (Caution)
It isn’t possible to authenticate  via SSO in remote sessions through RDP and SSH proxies.
:::

:::(info) (Information)
For the activities in this section, users can use any client of their choice, such as PuTTY, MobaXTerm, SecureCRT, Windows RDC and others.
:::

:::(info) (Information)
After a session request is made by a user and accepted by the approver, a time remaining timer starts in minutes. Three notifications will be sent, with 15 minutes remaining, 10 minutes, and 5 minutes. **Note:** only in **Web SSH**, **Web RDP** and **RDP Proxy** sessions this functionality is active.
:::

## senhasegura Terminal Proxy

senhasegura Terminal Proxy is a service available on port 22 under SSHv2 protocol, which will audit the target SSH and TELNET connections.

It has a simplified terminal for querying credentials and basic operations for file transfer. But its main purpose is to deliver the connection to the remote device.

### Terminal Supported protocols

- SSH
- Telnet

### Terminal Proxy Encryption Keys

The senhasegura proxy system makes connections through the ***SSH*** or ***Telnet*** protocols.

:::(warning) (Attention)
When using the ***Telnet*** protocol the connection from the vault to the device does not use encryption, there is encryption only when access is made from the user's station to the vault.
:::

**From user workstation to vault**:

senhasegura supports the following encryptions:

*Ciphers*:

- Poly1305

- AES256-GCM

- AES128-GCM

- AES256-CTR

- AES192-CTR

- AES128-CTR

*MACs*:

- hmac-sha2-512-etm

- hmac-sha2-256-etm

- hmac-sha2-512

- hmac-sha2-256

*KexAlgorithms*:

- curve25519-sha256

- ecdh-sha2-nistp521

- ecdh-sha2-nistp384

- ecdh-sha2-nistp256

- diffie-hellman-group-exchange-sha256

## senhasegura RDP Proxy

The senhasegura RDP Proxy is a service available on port 3389 through RDP protocol that will audit the target RDP connections.

It mediates all functionality available on a common RDP connection between Microsoft Windows devices, without interfering with the user's operator experience. But with all security guarantees and audit of senhasegura .

### RDP Supported protocols

- RDP versions 5.2, or higher.

### RDP Proxy Encryption Keys

**From user workstation to vault**:

Uses ***Arcfour (RC4)*** or ***Triple DES*** (if the encryption level is *FIPS*) ciphers. Generated message authentication codes (MAC) can use: MD5 or SHA-1.

Supported external security protocols are:

- TLS 1.0

- TLS 1.1

- TLS 1.2 (recommended)

**From Vault to Destination Device**:

Uses ***Arcfour (RC4)*** or ***Triple DES*** (if the encryption level is *FIPS*) ciphers. Generated message authentication codes (MAC) can use: MD5 or SHA-1.

Supported external security protocols are:

- TLS 1.0

- TLS 1.1

- TLS 1.2

- CredSSP

## senhasegura Web Proxy

The senhasegura Web Proxy delivers all kinds of connectivity to target devices through an HTML5 interface with WebSockets that can be accessed by any modern browser.

All features that are used by standard protocol clients are available on these connections. Some functionality may vary somewhat in usability from running in a web browser, but deliver the same goals successfully.

Because it is a more flexible channel, without the limitations of clients dedicated to exclusive protocols, senhasegura Web Proxy allows proxy sessions including particulars protocols and tools, such as X11, VNC and HTTP/HTTPS websites.

### Web Supported protocols

- SSH
- Telnet
- VNC
- X11
- Citrix VDA
- Kubernetes
- Websites
- Databases ODBC
- RDP versions 5.2, or higher
