## Metadata_Start 
## code: en
## title: Administrative users 
## slug: installation-admin-users 
## seoTitle: Administrative users 
## description:  
## contentType: Markdown 
## Metadata_End

senhasegura provides two key administrative users for system management:   

* `mt4adm` for SSH access.
* `mt4web` for web interface administration. 

It’s crucial to prioritize the security of administrative passwords to prevent any unauthorized access or potential risks.

:::(Warning) (Important)
For security reasons, it is recommended to change the administrative username **'admin'** during first login. See the [How to change the default password](/v3-32/docs/orbit-cli-como-alterar-senhas-padrão) documentation for detailed instructions.
:::

::: (warning) (Caution)
Upon your initial login, you’ll be prompted to establish a new password. Make sure to choose a strong password and securely store it. Avoid saving the new password within the senhasegura application.
:::

::: (error) (Important)
After modifying administrative user passwords, prioritize their security. The loss of this password will lead to a permanent inability to access the senhasegura platform. 
:::
## SSH Access
For senhasegura versions 3.10 and above, use the following credentials for SSH access:

* **User**: `mt4adm`
* **Password**: `mt4adm` 
* **Port**: `59022`

For users on older versions, please contact the Support Team for login information.

## Web Interface 

For senhasegura versions 3.32 and above, use the following credentials for web interface administration:

* **User**: `mt4web`
* **Password**: `5enh@5eGuR@!`

For users on older versions, please contact the Support Team for login information.


