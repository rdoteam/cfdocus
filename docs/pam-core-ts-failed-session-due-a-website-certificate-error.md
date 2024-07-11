## Metadata_Start 
## code: en
## title: Failed session due a website certificate error 
## slug: pam-core-ts-failed-session-due-a-website-certificate-error 
## seoTitle: Failed session due a website certificate error 
## description:  
## contentType: Markdown 
## Metadata_End
If the website you are attempting a session (VNCHTTP - WebApp) has an invalid certificate, an error-alert message will appear.

To proceed with authentication you will need to create a macro and associate it with all the credentials related to the device that have the web application configured.


## Follow the steps below to create a macro

1. Click **Pam Core** on senhasegura platform
2. In **Settings, **click** Access > RemoteApp**
3. Click the ⋮ (**three dots icon**) on the upper right corner (Action Menu)
4. Click **New**
5. In the configuration screen write a name for the macro
6. On the **type** field, select **user simulation**
7. Configure script actions with the following:
    | Order | Action Type | Value |
    | --- | --- | --- |
    | 1 | wait | 15000 |
    | 2 | kpress | tab |
    | 3 | wait | 500 |
    | 4 | kpress | return |
    | 5 | wait | 500 |
    | 6 | kpress | tab |
    | 7 | wait | 500 |
    | 8 | kpress | tab |
    | 9 | wait | 500 |
    | 10 | kpress | tab |
    | 11 | wait | 500 |
    | 12 | kpress | tab |
    | 13 | wait | 500 |
    | 14 | kpress | Return |
    | 15 | wait | 1000 |

8. Click **Save**


## Follow the steps below to associate the created macro to a credential


1. Click **Pam Core** on senhasegura platform
2. In **Credentials**, click **ALL**
3. Click  the **three dots icon** on the right side of the chosen credential
4. Click **Edit**
5. Click on the **Session Settings** tab
6. On **Automation Macro RemoteApp** field, click the **add icon**
7. On **RemoteApp** field select the macro that you created before
8. On **Connectivity** field, select **HTTPS** 
9. Click **Save**

**Note:** Click the **computer icon** on the credential right side to test if the macro was correctly associated. 
