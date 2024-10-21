# About Oracle wallet 

## What is an Oracle Wallet?

An Oracle Wallet is a set of files that act as a wallet for storing private keys, certificates and authentication credentials.

The files present in the wallet are encrypted and protected by a password to guarantee only authorized access to their content.
To learn more about Oracle Wallet, visit the .

## Why use an Oracle Wallet?

As it’s a secure repository of authentication credentials, the Oracle Wallet was created to solve problems related to security and credential management in Oracle environments and is commonly used to store certificates.


In the case of the Database Proxy, the authentication steps are performed using SSL, therefore the wallets are necessary to store the certificates involved at all ends.
There are two ways to create an Oracle Wallet:

* : CLI tool available on OracleDB, is only available to users who have a valid Oracle license.
* : users who don’t possess an Oracle license can use this tool to create their certificates.

## How does Oracle Database Proxy authentication work?
!