# Requisition 

This article describes the fields in the  form.

:::(Info) (Info)
Path to access: .
:::

## General tab
|Item|Description|
|-|-|
|| - domain verification, and validation.  - name, documentation, and address verification.  - comprehensive verification and validation of domain, name, registration, address, and current operations.|
|| - issued to protect a single domain.  - issued to protect multiple domains under a single certificate.  - issued to protect a primary domain and all its unlimited subdomains.|
||The organization from the Certificate Manager settings.|
||The domain/entity you want to protect with the certificate.|
||The period of validity for the certificate.|
|It enables the generation of multiple random certificates with the CN.
|Definition of how many certificates will be generated from the CN. The maximum number of certificates is 500.
||The SAN extension allows the inclusion of multiple alternative names (domains, subdomains, IP addresses, email identifiers) in a single digital certificate.|
||Identification markers.|
||The choice between  or  depends on the security needs and standards adopted by the company.|
||The number of bits in the key used by a particular cryptographic algorithm:  bits,  bits, or  bits.|
||The cryptographic algorithms used to digitally sign digital certificates: , , or .|
||This password restricts certificate viewing only to users with the password. Passwords can have up to 72 characters, including uppercase and lowercase letters, numbers, and the symbols |
||This password restricts certificate revocation only to users who have the password. Passwords can have up to 72 characters, including uppercase and lowercase letters, numbers, and the symbols |
||This button generates an instant password for the user. |

## Additional settings tab
The information included in this tab doesn't impact the Certification Authority (CA) but assists in identifying the certificate within senhasegura.

|Item|Description|
|-|-|
||The name of the certificate project.|
||The external IP of the certificate.|
||The IP or hostname of the certificate.|
||A justification for creating the request (up to 1024 characters).|
||A description of the request (up to 512 characters).|
||If checked, it will generate a detailed log. |
||If checked , it will pre-set a default signature for the certificate. Only mark 'yes' if you know and trust the device that will sign the certificate.|
||It will pre-set the Certification Authority that will sign the certificate.|
||The accountable user for the request. It must be a registered user in senhasegura.|

## Environment tab
|Item|Description|
|-|-|
||The environments where the certificate will be applied.|

## System tab
|Item|Description|
|-|-|
||The systems where the certificate will be applied.|
***
Do you still have questions? Reach out to the .