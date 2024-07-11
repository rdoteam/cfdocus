## Metadata_Start 
## code: en
## title: Encryption Keys 
## slug: pam-encryption-keys 
## seoTitle: Encryption Keys 
## description:  
## contentType: Markdown 
## Metadata_End
To make better use of proxies in senhasegura you need to understand that there are two types of connections:

A connection that originates from the user's workstation to the vault.

And another that leaves the vault to the device the user wants to access. Secure connections must be made through encryption, so check the encryption keys supported by each proxy.

:::(warning) (Attention)
senhasegura recommends that you use encryption algorithms in their latest version for security reasons.
:::

## RDP Proxy Encryption Keys

Uses the ciphers according to the encryption level.

**From user workstation to vault**

Uses ***Arcfour (RC4)*** or ***Triple DES*** (if the encryption level is *FIPS*) ciphers. Generated message authentication codes (MAC) can use: MD5 or SHA-1.

Supported external security protocols are:

-   TLS 1.0

-   TLS 1.1

-   TLS 1.2 (recommended)

**From Vault to Destination Device**

Uses ***Arcfour (RC4)*** or ***Triple DES*** (if the encryption level is *FIPS*) ciphers. Generated message authentication codes (MAC) can use: MD5 or SHA-1.

Supported external security protocols are:

-   TLS 1.0

-   TLS 1.1

-   TLS 1.2

-   CredSSP

## senhasegura Terminal Proxy

The senhasegura proxy system makes connections through the ***SSH*** or ***Telnet*** protocols.

:::(warning) (Attention)
When using the ***Telnet*** protocol the connection from the vault to the device does not use encryption, there is encryption only when access is made from the user's station to the vault.
:::

**From user workstation to vault**

senhasegura supports the following encryptions:

**Ciphers**

-   Poly1305

-   AES256-GCM

-   AES128-GCM

-   AES256-CTR

-   AES192-CTR

-   AES128-CTR

**MACs**

-   hmac-sha2-512-etm

-   hmac-sha2-256-etm

-   hmac-sha2-512

-   hmac-sha2-256

**KexAlgorithms**

-   curve25519-sha256

-   ecdh-sha2-nistp521

-   ecdh-sha2-nistp384

-   ecdh-sha2-nistp256

-   diffie-hellman-group-exchange-sha256

:::(warning) (Attention)
Using weak algorithms reduces the security scope of the tool. Consult our experts on how to deal with legacy systems.
:::
