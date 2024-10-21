# System parameters 

1. Access the senhasegura platform.
2. Navigate to . 

## Installation settings
*  indicate whether a workstation should be automatically approved when receiving a valid license from GO Endpoint Manager.
*  indicate whether a user's first login will be approved automatically if the user was previously approved on another machine with GO Endpoint Manager for Linux.
*  indicate whether all other users' first login will be approved automatically if the users were previously approved on another machine with GO Endpoint Manager for Linux.
*  indicate whether it will be mandatory to set a user authorization expiration date.
*  indicate the number of days for the user's authorization to expire after approval. 

* * *

## AD Bridge
*  indicate whether a workstation should be automatically approved upon receiving a valid license.
*  add the account domain configured.
*  add an existing credential with privileges to authenticate and manage the console remotely from AD. This credential is responsible for executing the commands in the shell that will be used to apply policies, and provision users, among other features.
*  add the AD IP address.
*  if you're using LDAPS, mark 
*  add the username used to connect to the LDAP service.
*  add the beginning of the LDAP server path used when looking for the user authentication in its directory.
*  add the user's path location.
*  use the filter 
*  add the variable 
*  add the variable 
*  fill in the user's home, for example, 
*  fill in the shell path that will be used by users.
*  add a group to authenticate.
*  use the filter 
*  add the variable 

* * *

## Messages
*  write the statement that should appear to the user when an application is running in GO Endpoint Manager.
*  write the statement that should appear to the user when an execution is blocked in GO Endpoint Manager.