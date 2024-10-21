# Publishing plugins 

Currently, senhasegura uses the plugins below to publish certificates. This article only describes the specific configuration fields of each vendor's plugins. For more information, access .

## Windows

| Item | Description |
| --- | --- |
|  | The location of the saved certificate. There’s a drop-down menu displaying two options:   (where all users accessing the machine get access to the certificate) or  (only the currently logged-in user gets access).
|  | The commonly used port is TCP 5985. It's crucial to verify your firewalls and other security solutions to ensure this port isn't blocked.
|  | The directory where the certificate will be installed during publication. There’s a dropdown menu containing the most relevant Windows directories.
|  | This password can be any certificate password that's already saved within PAM. This speeds up the configuration process as it selects a credential that's already in the system. 
|  | Alternatively, if there’s no password saved in PAM, but the user wants to preconfigure a password certificate for multiple devices, it’s possible to add one here.
|  | If the  field isn't enabled by default, this checkbox enables typing the password.
|  | The checkbox that enables viewing the password.
***