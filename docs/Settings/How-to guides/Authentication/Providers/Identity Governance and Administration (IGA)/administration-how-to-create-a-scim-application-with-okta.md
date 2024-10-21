# How to create a SCIM application with Okta 

In this article, you'll find a tutorial to create a SCIM application in the user-provider tool Okta.

### Supported Features
* Create Users
* Update User Attributes
* Deactivate Users
* Import Users
* Import groups
* Group push

* * *
## Requirements

* Enable communication between the senhasegura and Okta platforms.
* A valid account with administrator permission in Okta.
* A group with users already .
* When registering a user in Okta, ensure their unique identifier is set as their email address.
* The Okta registered users shouldn’t have more than one email address.

* * *

:::(Warning) (Caution)
* Okta reserves the right to modify the development environment without prior notice. As a result, the steps outlined in this guide may vary accordingly.
:::

1. With your Okta account, sign into your Okta Administrative portal. 
2. In the top left corner menu, select .
3. Search for  SAML, SCIM  app.
4. Once the app integration is added, you will be redirected to the application's assignments page.

* * *

### Steps Authenticate the SCIM application

1. After creating the application in the previous step, select the  tab on the initial screen of the 
2. In the  section, click .
3. Localize the  field and set .
4. Click . 
5. Go to the  tab.
6. In the left column, select . Click the  button and complete the information.
7. Click 
8. Select 
    1. In , To acquire the authorization token, use the Postman app or the following CURL command:
        :::(Info) (Client Secret and ID)
         You can find both pieces of information in your senhasegura, under the  section. Click on the provider details that was created for use with Okta.
        :::
        `
        curl --insecure -d "grant_type=client_credentials&client_id=
&client_secret=
&ttl=60" "https://
/iso/oauth2/token" -s --show-error -X POST
        `
        :::(Warning) (Short time token)
        As senhasegura uses OAuth and is not yet in the gallery apps that are supported by Microsoft, your token is valid only for . Please repeat the process after the designated time.
        :::
    2. Click , which you shoud be senhasegura URL. Example: 
    3. Click .
    4. Click .

* * *

### Associate a group with the SCIM application

1. In the top left corner menu, select .
2. In , click the name of the group you want to associate with your application.
3. In the  tab, click the  button.
4. Locate the name of the SCIM application you created in the list and click .
5. In the window .
6. Click .
7. Click .

* * *

### Activate the group in application

1. In the top left corner menu, select .
2. Click the application you created.
3. On your application's home screen, select the  tab.
4. Locate the  button and select + 
5. Enter the group name you'll activate in the  field.
6. Click 
7. Wait for the pushing to finish.
8. On the right, you'll see the confirmation  in green in the  column.

You've just configured your SCIM application in Okta. The groups you’ve activated in the application will appear on the senhasegura platform.

*If you’ve created a group of , see the list in .
*If you’ve created a Group of internal users, see the list at:
*   (for users).
*   (for groups).

* * *

## Known Issues/Troubleshooting
N/A