# Remote access 

The Cloud IAM Remote Access allows users to start remote sessions in cloud environments in a safe and controlled
    way. 

Note
The Cloud IAM records all remote sessions. To view the session video recordings, go to
        PAM Core ➔ Access Control ➔ Remote Sessions


Note
The Cloud IAM Remote access is only available to AWS consoles. 


Cloud console
Use the Cloud console feature to start sessions remotely in AWS using a username and password.
Requirements
To use Cloud IAM Cloud console, you must meet the following requirements:

Create a user in the senhasegura platform

Note
The senhasegura user must have a registered e-mail;


Add a user in
            AWS through Cloud IAM;
Important
Users imported from AWS can not perform remote access.


The user must be in an Access group with permission Users can start sessions
        enabled.

Access the AWS console
To access AWS  through the Cloud console, follow the steps:

Navigate to Cloud IAM ➔ Remote access ➔ Cloud console;
Select a user, and click the Start session icon in the Action column.


Just in Time (JIT) Access 
Use the JIT access to start sessions remotely in AWS using a Role for a predefined
    Duration.

Note
When the predefined duration of the JIT Access expires, the user is automatically disconnected.
    

Requirements
To use Cloud IAM JIT access, you must meet the following requirements: 

Create a user in the senhasegura platform;
Note
 The senhasegura user must have a registered e-mail.


Add a user in
            AWS through Cloud IAM;
Important
Users imported from AWS can not perform JIT access.


The Cloud IAM user must have a Credential;
The user must be in an Access group with permission Users can start JIT sessions
        enabled.
In your AWS console, create the Role that the user will assume and add the
        user's ARN to the Trust relationship of the role. For more information,
        go to Edit an existing role's trust relationship.
Important
When adding the user's ARN to the Trust relationship of the role, set
                the Effect parameter to Allow and
                the Action parameter to Assume role.



Configure JIT Access

Note

To JIT access your AWS console, you must configure the JIT Access in the Cloud IAM module.


To configure JIT Access, follow the steps:

Navigate to Cloud IAM ➔ Settings➔ JIT Access;
Click the Actions (⁝) icon and select New;
Select an Account;
Select Yes for Enabled; 
On the Information tab, add a Description;
On the AWS tab:
Select Yes for JIT Enabled.
Define the session Duration in seconds.
Note
The minimum duration of the JIT Access session is 900 seconds.


Define which Roles the users of this account can assume.


Click Save.

Access AWS with JIT
To JIT Access your AWS cloud console, follow the steps: 

Navigate to Cloud IAM ➔ Remote access➔ JIT Access;
Select a user, and in the Action column, click the Start session icon;
    
Select the Role you want to assume.