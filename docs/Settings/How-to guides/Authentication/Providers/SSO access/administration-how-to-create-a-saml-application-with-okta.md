# How to create a SAML application with Okta 

In this article, you'll find a tutorial to create a SAML application in the user-provider tool Okta.

### Supported Features
* SP Initiated SSO (Through senhasegura login interface)
* IDP-Initiated SSO (Through provider interface)

* * *
## Requirements

* Enable communication between the senhasegura and Okta platforms.
* Access to your Okta administration settings.
* When registering a user in Okta, that user's unique identifier must be the email address.
* The same user can’t have multiple email addresses registered with Okta.
* In the Okta integration scenario, when registering a user in senhasegura, the user's unique identifier must be the email address.

* * *
## Steps for Creating a SAML Application
:::(Warning) (Caution)
* Okta reserves the right to modify the development environment without prior notice. As a result, the steps outlined in this guide may vary accordingly.
:::

1. With your Okta account, sign into your Okta Administrative portal. 
2. In the top left corner menu, select .
3. Search for  SAML, SCIM  app.
4. Once the app integration is added, you will be redirected to the application's assignments page.
5. Click on the  tab then click the  link.
6. In the :
    :::(Info) (Info)
    You can find both pieces of information in your senhasegura, under the  section. Click on the provider that was created for use with Okta.
    :::
    1.   field. Example: 
    2.   field. Example: 
7. Click .
8. Stay on the  tab, then click the "" disclosure under the SAML 2.0 Metadata details section.
9. Copy the  and download the Okta  to your computer. These will be used to complete your .

* * *

## How to log in to senhasegura with Okta integration

### Using the senhasegura interface

1. Access your senhasegura account by using your unique senhasegura URL. For example: 
2. On the login page, click on 
3. Select the  icon
4. Once the Okta login page loads, enter your Okta credentials.

### Using the Okta Interface

1. Access the Okta Dashboard using your credentials.
2. Click  on the side menu.
3. Select the  App.

* * *

## Known Issues/Troubleshooting
N/A

* * *
### Next steps

* 

* * *
Do you still have questions? Reach out to the .