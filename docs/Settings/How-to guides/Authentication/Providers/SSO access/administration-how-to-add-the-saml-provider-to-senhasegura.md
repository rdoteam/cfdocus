# How to add the SAML provider to senhasegura 

To finish setting up SSO for remote users in senhasegura SAML provider . In this article, you'll find a step-by-step guide for this task.

:::(Info) (Info)
senhasegura partnered with Okta to develop this documentation. The steps may vary and require adaptation for use with other providers.
:::

* * *
## Step 1: Collect information

1. In your Okta account, go to the administration area. 
:::(Info) (Info)
If you don't automatically enter the administration area, click the Admin button in the top right corner of the screen.
:::
2. In the top left corner menu, select .
3. Find the senhasegura SAML application that you integrated.
4. Click on the application.
5. In the  tab, locate the  field.
    1. Copy the displayed URL to use in the next step.
6. Still on the  tab, click .
7. Locate the  field.
    1. Copy the displayed URL to use in the next step. 

* * *
## Step 2: Choose the environment to register the SAML provider

senhasegura allows two types of environments for SAML provider registration:

* : SSO access for internal users and third-party users via Domum.
* : SSO access only for internal users via the local network. This option suits internal users already connected to the company's internal network.

:::(Warning) (Caution)
It’s possible to register both environments to internal users. However, it requires creating a separate application for each environment in the Okta provider. The system won’t allow registering the same application for both the  and  environments.
:::

* * *

### Option 1: Add the SAML provider for access

:::(Info) (Info)
This provisioning is exclusively for internal users.
:::

1. Access the senhasegura platform.
2. In the top left corner, click , indicated by the nine-square box, and select .
3. On the side menu, select .
4. In the top right corner, click the three vertical dots icon () and select .
5. In the registration window, fill in the  tab:
    1. In the * field, select .
    2. In *, check .
    3. In *, check .
    4. In *, enter the name registered in the  when . Example: .
    5. In *, paste the value Okta automatically generated in the  field. Example: .
    6. In *, enter the senhasegura default URL. Example: . 
    :::(Warning) (Caution)
    Don’t insert the right slash at the end of the URL.
    :::
    7. The system will automatically complete the * field.
    8. In * , paste the value Okta automatically generated in the  field. Example: .
    9. In  , enter the URL of the Okta application. Example: .
    10. In  , select .
6. In the  tab:
    1. Download the provider's certificate and copy its content.
    2. In : paste the certificate content.
    :::(Info) (Info)
    If you haven't saved the certificate information, In this example, it can be found in the Okta administration area.
    ::: 
8. Click .

* * *
### Option 2: Add the SAML provider for access via Domum

:::(Info) (Info)
This provisioning works for both Domum internal and third parties users.
:::

1. Access the senhasegura platform.
2. In the top left corner, click , indicated by the nine-square box, and select .
3. On the side menu, select .
4. In the top right corner, click the three vertical dots icon () and select + .
5. In the registration window, fill in the  tab:
    1. In the * field, select .
    2. In *, check .
    3. In *, check .
    4. In *, enter the name registered in the  . Example: 
    5. In *, paste the value Okta automatically generated in the  field. Example: .
    6. In *, enter the senhasegura default URL. Example: . 
    :::(Warning) (Caution)
    Don’t insert the right slash at the end of the URL.
    :::
    7. The system will automatically complete the * field.
    8. In * , paste the value Okta automatically generated in the  field. Example: .
    9. In  , enter the URL of the Okta application. Example: .
    10. In  , select .
6. Click .

Now, senhasegura can offer SSO login for internal users, and the access provider will take care of the authentication.

* * *
Do you still have questions? Reach out to the .