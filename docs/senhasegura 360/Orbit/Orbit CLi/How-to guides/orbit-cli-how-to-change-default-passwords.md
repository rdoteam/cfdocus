# How to change default passwords 

When using the command, you can change the default password for the and users.
:::(Info) (Info)
Only the password for the user will be displayed or provided by the administrator.
:::

`mt4adm@vmdf-giskard:~$ sudo orbit security --help
Usage: orbit security 


System security management tools

Arguments:
  
    Security action: [password]

Flags:
  --help    Show context-sensitive help.

  --pwgen   Generate a random password for the system's default user account
  --reset-admin Reset admin user
` 
## Change the mt4web password to a new value

1. Use the command.

`mt4adm@vmdf-giskard:~$ sudo orbit security password
This action will change the password for the system default user account
Changing password: mt4adm
New password: *
Retype new password: *
Are you sure you want to proceed: and
Done!
No errors reported
Changing password: senhasegura
Done!
No errors reported
` 
## Change the mt4web password to a random value
Use the argument.

`mt4adm@vmdf-giskard:~$ sudo orbit security password --pwgen
This action will change the password for the system default user account
Changing password: mt4adm
Are you sure you want to proceed: and
Done!
No errors reported

The random generated password was: a*Y9z75#
Changing password: senhasegura
Done!
No errors reported
`
## Reset the admin account of the web interface
Use the argument.

`mt4adm@vmdf-giskard:~$ sudo orbit security reset-admin
This action will change the application admin user password to the initial value. Are you sure you want to proceed?
Change Admin Passwords
Admin User Password Reset Successfully!
`
## Rename the admin user to mt4web

:::(Warning) (Important)
Before performing the reset,   .
:::

To rename the admin account, use the argument .
To reset the admin account, use the argument .
`orbit security rename-admin # changes admin name to mt4web
orbit security reset-admin # resets the password to the vm's default
`