# Dynamic provisioning profiles 

Use dynamic provisioning profiles to create profiles with pre-defined information and provision service accounts and
    credentials through API.

Info
Applications that require the creation of credentials and service accounts will obey the rules
        determined in the template.


Create a dynamic provisioning profile
To add a dynamic provisioning profile, go to Cloud IAM ➔ Cloud IAM ➔ Dynamic provisioning ➔
        Profiles, and follow the steps:

Click the Actions icon (), and select Add profile;
Select the account on which you want to create the profile;
Enter the Identifier,

Atenção
The Identifier must be unique. The system does not
                accept an identifier with a name that already exists.


Select the providers on which you want to create the profile.

AWS
On the profile you want to create, go to the AWS tab and follow the steps:

Add until 10 politics;

Info
The 10 politics limit is defined by the AWS;


Define the TTL (time-to-live) to automatically delete the service accounts.

Google Cloud
On the profile you want to create, go to the Google Cloud tab and follow the steps:

Select the project on which the service account must be created;
Select the roles that must be applied to the service account at the Organization level;
Select the roles that must be applied to the service account at the Project level;
Define the TTL (time-to-live) to automatically delete the service accounts.


Enable dynamic provisioning profile
To enable a dynamic provisioning profile, navigate to DevOps Secret Manager ➔ Applications ➔
        Applications and follow the steps;

On the report screen, select the application on which you want to enable the provisioning and click
        Edit;
On the Automatic
            provisioning tab, enable the automatic provisioning of secrets;
On the field Cloud dynamic provisioning profile, select the profile that must be used.
Info
You can select more than one profile. 


Click Save.