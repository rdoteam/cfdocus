# Connect an Azure account 

:::(Internal) (Private notes)
O conteúdo desta página foi formatado mas não foi atualizado junto do GAP devido ao . 
:::

To manage users, accounts, credentials, and virtual machines, you must configure an Azure account to integrate with senhasegura.
:::(Info) (Info)
  requests only the necessary permissions to prevent excess privileges.
:::

## Configure Azure

1. Log in to your Azure account: .
2. Locate the service .
3. On the left menu, select .
4. Select .
5. Fill in the , , and  fields.
6. Click .

### Create a Client secret value

1. Select an application in Azure.
2. On the left menu, select .
3. Click .
4. Enter a  and .
5. Copy the  of the Secret.

### Select API permissions

1. In Azure, select:
    1. On the left menu, select API permissions;
    2. Select the Microsoft Graph;
    3. The requested permissions are:
        - :
            - Global Administrator
            - Tenant root group role
            - Owner
        - :
            - Delegated:
                - 
            - Application:
                - 
                - 
                - 
                - 
                - 
                - 
                - 
                - 

## Add an account in Cloud IAM

To add an account, navigate to the menu  >  >  and follow the steps:

1. Click the  icon and select the option .
2. On the  tab, enter a .
3. Choose  or  for .
4. Choose the .
5. Go to the  tab.
6. Enter the .
7. Enter the  and .
8. Choose an access group.
9. Click .