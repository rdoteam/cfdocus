# How to set up an e-mail account for notifications 

Setting up an email account in senhasegura allows the application to send notifications about different actions, such as changing a password before a certificate expires or suspicious access.

It’s important to include valid email addresses because approvers receive access requests by email. Likewise, requesters receive their disapproval or approval responses.

## Requirements

-  OAuth2 of the chosen e-mail provider.

The senhasegura solution's registration process involves using the chosen provider's APIs.

:::(Info) (Info)
Follow the links below to obtain the , , and  information for the API and thus register the senhasegura solution within your email provider.
- Office 365: .
- Office 365: 
- Google Mail Workspace: .
:::

:::(Warning) (Important)
You can get an overview of the possible commands by running .
:::

## How to run the  command

After obtaining the , , and  values, configure the senhasegura solution, in particular the  component. The example below uses the steps needed to configure senhasegura with the Microsoft Office 365 service.

1. Access the senhasegura server using  with the port .
2. Log in with the administrative user .
3. Use the command  with the , , and  and the following parameters:

`
orbit email-oauth2-proxy register \
 --imap-server-address=outlook.office365.com \
 --imap-server-port=993 \
 --smtp-server-address=smtp.office365.com \
 --smtp-server-port=587 \
 --smtp-server-starttls \
 --oauth2-token-url="https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/token " \
 --oauth2-permission-url="https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize " \
 --oauth2-scope=" https://outlook.office365.com/IMAP.AccessAsUser.All https://outlook.office365.com/SMTP.Send offline_access " \
 --oauth2-flow="client_credentials" \
 --oauth2-client-id="CLIENT_ID" \
 --oauth2-client-secret="CLIENT_SECRET" \
 --force
`

Below you can see an example of a configuration file for Microsoft Office 365:

`shell
[emailproxy]
delete_account_token_on_password_error = True
encrypt_client_secret_on_first_use = False
allow_catch_all_accounts = True
[IMAP-2993]
server_address = outlook.office365.com
server_port = 993
[SMTP-2465]
server_address = smtp.office365.com
server_port = 587
starttls = True
[@]
redirect_uri = http://
/email-oauth2-proxy-authorize/
redirect_list_address = http://127.0.0.1:8801/
token_url = 
permission_url = https://login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize
oauth2_scope = https://outlook.office365.com/IMAP.AccessAsUser.All https://outlook.office365.com/POP.AccessAsUser.All https://outlook.office365.com/SMPT.Send offline_access
client_id = CLIENT_ID
client_secret = CLIENT_SECRET
oauth2_flow = client_credentials
`
## How to configure senhasegura's SMTP service

:::(Info) (Info)
You must have an active  account with the  field set to  so that the SMTP system can send emails.
:::

After the initial configuration of , you must configure senhasegura's SMTP service. To do this, follow the steps below:

1. On the senhasegura platform, in the top right-hand corner, click , represented by the nine squares, and select .
2. On the side menu, select .
3. Create a new SMTP service configuration.
4. Fill in the fields according to your account values:
    1.  name of your account (for example, ).
    2.  leave  selected to activate the account.
    3.  the e-mail address that will be used to send e-mails.
    4.  the e-mail address that will receive reply e-mails.
    5.  the returning e-mail address in case of a sending error.
    6.  the e-mail address to confirm sending.
5.  must be set to 
6.  must be set to 
7.  must be set to 
8.  must be set to 
9. In the SMTP server configuration section, indicate the settings below:
    1.  enter the address of the localhost server: .
    2.  enter the port configured using the  command. In the example above, the value is .
    3.  check 
    4.  leave it disabled (blank).
    5.  check 
    6.  check 
    7. : indicate whether or not you want to use the Network Connector.
    8.  Indicate the specific Network Connector, if applicable.
:::(Info) (Info)
By keeping the Network Connector field blank, the default Network Connector, as defined in , will be used.
:::
:::(Info) (Info)
This parameter will only take effect if there is any configured Network Connector.
:::


10. Click .

## How to test the configuration

Once you have set up the SMTP connection, you need to test it. To do this, follow the steps below:

1. On the senhasegura platform, in the top right corner, click , represented by the nine squares, and select .
2. On the side menu, select .
3. In the list of connections, identify the connection you created, and in the  column, click on the icon represented by the three vertical dots and select  from the drop-down menu.
4. In the  pop-up window, enter an e-mail address to test the configuration.

In case everything is correct, you’ll see a success message.

## How to get the URL to validate the SMTP configuration

After configuring the SMTP access and testing messages, you can validate this configuration. To do this, you need to obtain the authorization access URL from the  component by making a request to the Microsoft Office 365 API.

To do so, follow the steps below:

1. Run the command  in the terminal. In the command output, look for the message  to get the validation URL.
2. Copy the full URL and paste it into a browser.
3. Log in to the account.

You should receive a message indicating that  authentication succeeded.

## How to set up an IMAP account

1. On the senhasegura platform, in the top right corner, click on , represented by the nine squares, and select .
2. On the side menu, select 
3. Create a new IMAP service configuration.
4. In the  pop-up window, fill in the fields:
    1.  enter the e-mail account name.
    2.  check 
    3.  check 
    4.  check 
5. In the  section, fill in the fields:
    1.  enter the localhost address: .
    2.  enter the port to be used: .
    3.  select  from the drop-down menu.
    4.  if required, specify a network connector.
    5.  enter the credential that will be used to authenticate with the IMAP server.
    6.  check 
    7.  check 
    8.  leave it disabled (blank).
    9. : indicate whether or not you want to use the Network Connector.
    8.  Indicate the specific Network Connector, if applicable.
:::(Info) (Info)
By keeping the Network Connector field blank, the default Network Connector, as defined in , will be used.
:::
:::(Info) (Info)
This parameter will only take effect if there is any configured Network Connector.
:::
6. Click .

---

Do you still have questions? Reach out to the .