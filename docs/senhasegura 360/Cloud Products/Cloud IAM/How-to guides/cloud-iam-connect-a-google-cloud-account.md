# Connect a Google Cloud account 

This document outlines the steps to integrating the Google Cloud Platform (GCP) with  to provision, manage, and monitor access to the Cloud Service Provider (CSP). You can connect either a  or a  to .

:::(info) (Info)
 also supports Amazon Web Services (AWS) and Microsoft Azure. If you want to integrate other CSPs, check the documentation  or .
:::

Before you integrate a GCP account with senhasegura, you’ll need a  account.

:::(warning) (Warning)
To integrate your GCP organization, you’ll need the  role or a similar role with permission to manage IAM and API resources for the organization. For projects, you’ll need the  role or a similar role with permission to manage IAM and API resources for the project.
:::

## Enable APIs in Google Cloud Console

1. As a  in the GCP console, go to the  page.
2. Click .
3. In the search bar, search and enable the following APIs:
    -  by Google Enterprise API.
    - 
    -  by Google Enterprise API.
4. To enable APIs, select the API from the list and click the  button.

## Create a custom role in Google Cloud Console

1. As a  in the GCP console, go to  > .
2. Click .
3. Name your custom role.
4. Configure optional settings if needed.
5. Click .
6. Select the following permissions:

`
iam.roles.list
iam.serviceAccountKeys.create
iam.serviceAccountKeys.delete
iam.serviceAccountKeys.get
iam.serviceAccountKeys.list
iam.serviceAccounts.create
iam.serviceAccounts.delete
iam.serviceAccounts.get
iam.serviceAccounts.list
iam.serviceAccounts.update
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
`

7. Click .

:::(Info) (Info)
You may skip the following steps if you only want to connect a project.
:::

9. To integrate with your , switch to the .
10. Repeat the previous steps to create a second role and assign the following organization permissions:

`
resourcemanager.projects.list
resourcemanager.organizations.get
resourcemanager.organizations.getIamPolicy
resourcemanager.organizations.setIamPolicy
`
10. Click .

:::(info) (Info)
For more details, check the GCP documentation on .
:::

## Create a service account in Google Cloud Console

1. As a  in the GCP console, go to  > .
2. Click .
3. Give your service account an easily identifiable name. You’ll be using this account to integrate with senhasegura.
4. Give your service account an ID.
5. Click .
6. Choose the custom role you created with the necessary permissions.
7. Configure optional settings if needed.
8. Click .

:::(info) (Info)
For more details, check the GCP documentation on .
:::

Only for , you’ll need also to add the service account you created as a principal at the organization level. To do so:

1. As a  in the GCP console, navigate to the  >  page.
2. Copy the .
3. Switch to the  in the GCP console.
4. Navigate to .
5. Click .
6. Paste the service account email address in the  field.
7. In , select the custom role with the organization permissions.
8. Configure optional settings if needed.
9. Click .

:::(info) (Info)
For more details, check the GCP documentation on .
:::

## Create an access key for the Google Cloud Console service account

1. As a  in the GCP console, go to  > .
2. Click the service account you created in the previous steps from the list.
3. Navigate to the  tab.
4. Click  > .
5. Select the option .
6. Click . This action will download a JSON file into your device. This file must be uploaded to  to finish the integration process.

:::(info) (Info)
For more details, check the GCP documentation on .
:::

## Integrate GCP with Cloud IAM

1. In the top left corner of the senhasegura platform, click on the , represented by the nine squares, and select .
2. In the side menu, select .
3. Click the  icon, represented by the three vertical dots, and select the option .
4. In the pop-up window, give a  for the account.
5. Click .
6. Click the  tab.
7. In , upload the JSON file, which is the key created for the service account.
8. Click the  button.

Once you’re done, the senhasegura  page will refresh with your newly integrated GCP account.