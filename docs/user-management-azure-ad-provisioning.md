## Metadata_Start 
## code: en
## title: Azure AD Provisioning 
## slug: user-management-azure-ad-provisioning 
## seoTitle: Azure AD Provisioning 
## description:  
## contentType: Markdown 
## Metadata_End
This article will guide you through the process of creating an authenticator provider in senhasegura using Azure Provisioning.

## Prerequisites

- Have access to the user management settings in the senhasegura platform
- An Azure AD account with permission to create applications and configure Provisioning
- Use a tool application (such as the Postman app) to obtain authorization tokens.
- Familiarity with the Azure AD portal and protocols

## Step 1: Set up Azure Provisioning with the senhasegura

1. Access the senhasegura and go to **Settings > Authentication > Identity Management (IGA) > Providers** and click the action button ⋮ (vertical dots) and click New Provider. Configure with any name and description, but it must be in the SCIM Protocol and with Third-party users with NO.
2. In the Authentication tab, enter the API access configuration where the Token for SCIM use will be obtained. The Authentication method needs to be OAuth 2.0.
3. After saving the item, it will appear in the Providers menu list. Click the action button ⋮ (vertical dots) and go to Provider details. The "Register Identity Management Provider" screen will be displayed.
4. The base URL on the screen is used for configuration in Azure Provisioning. The Token URL on the screen is for obtaining the authorization token, as well as the Client ID and Client Secret. To obtain the authorization token, the Postman app can be used or the following CURL:
```
curl --insecure -d "grant_type=client_credentials&client_id=<CLIENT_ID>&client_secret=<CLIENT_SECRET>&ttl=60" "https://<DNS_senhasegura>/iso/oauth2/token" -s --show-error -X POST
```
:::(Warning) (Short time token)
As senhasegura uses OAuth and is not yet in the gallery apps that are supported by Microsoft, your token is valid only for **one hour**. Please repeat the process after the designated time.
:::

## Step 2: Create an Application in Azure AD

1. To use Azure Provisioning, it is necessary to create an application in Azure AD in Enterprise Application. When creating it, select "Create your own application" in the Azure AD Gallery;
2. And then select "Integrate any other application you don't find in the gallery (Non-gallery)". An application will be created and shown on the list.
3. Then just access the application and go to "Provisioning" in the menu.

## Step 3: Configure Provisioning in Azure AD

1. To configure Provisioning, the URL obtained in the SCIM Provider created in the senhasegura and also the authorization token generated by Postman will be used.
2. After entering the information, test the connection. Mappings will then be released, where the fields of Groups and Users passed by Azure to the senhasegura will be defined. Currently, Azure cannot map the schemas used by SCIM on the senhasegura side, so it is necessary to manually configure it.
3. In Provision Azure Active Directory Groups, it will be configured as follows;
    - Enabled - yes
    - Target Object Actions
        - Create - checked
        - Update - checked
        - Delete - checked
    - Azure Active Directory Attribute
        - displayName
        - objectld
        - members
        - displayName
4. The "accessGroup" attribute in the customappsso column does not exist in Azure AD, so it is necessary to create it by going to "Show advanced options" in the section below in "Edit attribute list for customappsso". Inside "Edit Attribute List," define it with the rules below:
    | Name | Primary Key? | Required? | Multi-Value | Exact case? |
    | --- | --- | --- | --- | --- |
    | id | yes | yes | no | no |
    | externalld | no | no | no | no |
    | displayName | no | yes | no | no |
    | members | no | no | yes | no |
    | accessGroup | no | no | no | no |
5. After editing the attributes, go back to the associated attributes screen and click Add New Mapping and, inside "Edit Attribute," add according to the configuration below:
    - Mapping type: Direct
    - Source attribute: displayName
    - Target attribute: accessGroup
    - Match objects using this attribute: No
    - Apply this mapping: Always
6. After that, just save the settings and go back to the Provisioning configuration screen (where the connection was tested).
7. Now the user fields must be defined by accessing "Provision Azure Active Directory Users". The same process of associating new fields will be performed here.
8. After adding all the fields, save and go back to the Provisioning configuration screen, where the connection is tested.
9. A last option will be enabled, which can be configured as desired.
10. After that, toggle to use "ON" in "Provisioning Status."
11. To Provision users and groups, they must be associated with the provisioning, on the main screen in "User and groups" of Azure.
12. Click on Add user/group and select the desired Group/User.
13. In this window, there is also the "Role." This Role will be associated in senhasegura as the user's permission. The premise is that both have the same name.
14. After that, just save the settings and go back to the Provisioning configuration screen (where the connection was tested).
15. A last option will be enabled, which can be configured as desired.
16. After that, toggle to use "ON" in "Provisioning Status."
17. To Provision users and groups, they must be associated with the provisioning, on the main screen in "User and groups" of Azure.
18. Click on Add user/group and select the desired Group/User.
19. In this window, there is also the "Role." This Role will be associated in senhasegura as the user's permission. The premise is that both have the same name.
20. After configuring everything correctly, the authenticator provider in senhasegura using Azure Provisioning will be ready to use.