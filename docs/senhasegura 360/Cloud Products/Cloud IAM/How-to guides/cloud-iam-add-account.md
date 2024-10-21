# Add account 

To manage users, accounts, credentials, and virtual machines you must create an account to integrate senhasegura with
    the Cloud Service Providers(CSPs).

Info

To prevent excess privileges, Cloud IAM requests only the necessary permissions.



Add an account
To add an account, navigate to the menu Cloud IAM ➔ Settings ➔ Accounts and follow the steps:


Click the Actions(⁝) icon
        and select the option Add account;
On the Settings tab, enter a Name;
Choose Yes or No for Active;
Choose the Providers you want to register;
Info
You can register AWS, Azure and Google Cloud accounts on the same screen at the same time.


Enter a Description and Tags, if you want to;

Register AWS account
To register an AWS account navigate to Cloud IAM ➔ Settings ➔ Accounts and follow the steps:


Add or Edit a Cloud IAM account;
Go to the AWS tab;
Click View JSON to open the required permissions;
Enter the AWS access key ID in the Access key field;
Info
To learn how to create an AWS access key, go to Configure
                    AWS section in this article.


Enter the secret of the AWS access key in the filed Access key secret;
Choose the Default region of the AWS account;
Check the OpsWorks box if you want to manage AWS Opsworks sessions and the user's SSH
        keys.

Register Google Cloud account
To register a Google account navigate to Cloud IAM ➔ Settings ➔ Accounts and follow the steps:


Add or Edit a Cloud IAM account;
Go to the Google Cloud tab;
Click Choose file and select the file with the Google Cloud account Access
            key;
Info

To learn how to create a Google Cloud access key, go to Configure Google Cloud section in this article.








Register Azure account
To register an Azure account navigate to Cloud IAM ➔ Settings ➔ Accounts and follow the steps:


Add or Edit a Cloud IAM account;
Go to the Azure tab;
Enter the Directory(tenant) ID;
Enter the Application (Client ID) and Client Secret Value;

Info
To learn how to create a Client secret value, go to Configure
                    Azure section in this article 


Choose an access group;


Configure providers
In order to integrate Cloud IAM with AWS, Azure, and Google Cloud you must perform the following configurations for each one of the providers.
Configure AWS
To integrate Cloud IAM and AWS you must create an AWS access key.
Create an AWS access key
To generate an AWS access key, follow the steps below:

On the AWS register screen click View JSON and copy the permissions
Copy the permissions described in the JSON;
Log in to your AWS account: console.aws.amazon.com;
Go to Identity and Access Management (IAM);
On the left menu, select Policies;
Click Create Policy, go to the JSON tab, and paste the permissions copied
        in step 1;
Caution
You must create the access keys for a user that has the same permissions described in
                the JSON


Click Next:Tags;
Enter the Tags and click Next:Review;
Enter the policy Name and click Create policy to confirm;
On the left menu, go to Users and select Add user;
On Specify user's details, enter the Username and click
        Next;
On Define permissions, go to Attach policies directly and select the
        policy you created in step 8;
Go back to Users and select a user;
Go to the Security credentials tab and select Create access keys;
Copy the Access Key ID and Secret access key values; 


Configure Google Cloud 
To integrate the Cloud IAM with your Google Cloud account you must perform the following actions.
Create a role

Log in to your Google Cloud account (console.cloud.google.com);
In the project selection, select the Organization and click Roles; 
Click Create
            role and fill in the fields:
Title with the name of the role you want to create;
Click Add
                    permissions and add the following permissions:
iam.roles.list
iam.serviceAccountKeys.create
iam.serviceAccountKeys.delete
iam.serviceAccountKeys.get
iam.serviceAccountKeys.list
iam.serviceAccounts.create
iam.serviceAccounts.delete
iam.serviceAccounts.get
iam.serviceAccounts.list
resourcemanager.organizations.get
resourcemanager.organizations.getIamPolicy
resourcemanager.organizations.setIamPolicy
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
resourcemanager.projects.list
resourcemanager.projects.setIamPolicy


Finally, click Create.
            



Create a service account
To create a Service account in Google Cloud, follow the steps:

Select an existing project or create a new one in Google Cloud;
On the navigation menu, choose the IAM & Admin, Service Accounts option;
Click Create
            service account;
Fill in the Service account name fields and click Create;
    
Click Done to confirm.

Create a Google Cloud access key

On the Service Accounts menu, select the service account you have just created;
Click Add key and select Create new key;
Select the JSON option and click Create;
    
Finally, save the key in a safe place.

Enable APIs

On APIs & Services ➔ Library menu;
Find the APIs listed below and select Enable.
Cloud Resource Manager API
Cloud Asset API
Identity and Access Management (IAM) API



Add a service account at Organization

Select the IAM service in the side menu.
Click Add, at the top of the page.
Enter the address of the service account you just created in the field New members.
In the field Select a role, select a previously created role.
Click Save.


Configure Azure
To integrate the Cloud IAM with your Azure account you must perform the following actions.
Create an Azure service account

Log in to your Azure account: portal.azure.com;
Locate the service Azure Active Directory;
On the left menu, select Application register;
Select New register;
Fill in the Name, Support account type, and URI
            redirect fields;
Click Register.

Create a Client secret value

Select an application in Azure;
On the left menu, select Certificates and secrets;
Click New Client Secret;
Enter a description and expiration;
Copy the Value of the Secret.

Select API permissions

In Azure, select:
On the left menu, select API permissions;
Select the Microsoft Graph;
The requested permissions are:
Directory Role:
Global Administrator
Tenant root group role
Owner


API permissions:
Delegated:
Directory.AccessAsUser.All


Application:
Application.ReadWrite.All
AppRoleAssignment.ReadWrite.All
Directory.Read.All
Directory.ReadWrite.All
Organization.ReadWrite.All
RoleManagement.ReadWrite.Directory
User.ManageIdentities.All
User.ReadWrite.All