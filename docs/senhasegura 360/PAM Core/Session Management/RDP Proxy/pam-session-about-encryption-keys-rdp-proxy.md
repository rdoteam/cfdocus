# About Encryption Keys - RDP Proxy 

To make better use of RDP Proxy on senhasegura, you need to understand that there are two types of connections:

* One connection originates through the user's workstation to the vault.
* And another that runs from the vault to the device the user wants to access.

So that the connections are carried out safely, they must be carried out using encryption, so check the encryption keys supported by each proxy.

:::(warning) ()
senhasegura recommends using encryption algorithms in their latest version for security reasons.
:::

:::(info) ()
Use the ciphers according to the encryption level.
:::

## User’s workstation for the vault
Use ciphers  or  if the encryption level is . Message authentication codes (MAC) generated can use:  or .
External security protocols supported are:

* TLS 1.0.
* TLS 1.1.
* TLS 1.2 (recommended).

## Vault for the target device
Use ciphers  or  if the encryption level is . Message authentication codes (MAC) generated can use:  or .
The supported external security protocols are:

* TLS 1.0.
* TLS 1.1.
* TLS 1.2.
* CredSSP.
* CredSSP.