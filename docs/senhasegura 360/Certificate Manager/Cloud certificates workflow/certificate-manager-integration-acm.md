# Amazon ACM 

Get AWS access key ID and secret

In your AWS account menu, locate the Security
            Credentials item.
Locate the Access keys section, and select
        Create access key.
Go to Retrieve access keys to copy the
        necessary data.


Configure account in senhasegura

In senhasegura, access the menu Certificate Manager→Certificates Cloud→Account.
Click the (⁝) icon and select New.
Fill in the fields with the following information. Fields with an asterisk (*) are mandatory information:
Name: user account identifier.
Enabled:Yes is selected by default.
Set the access data: select the field to enter the data below.
AWS access key ID: user application ID.
AWS secret access key: user application secret.


Save.


Create requests

Info

It requires a private certification authority (CA) to create requests. At the moment, senhasegura only works
            with private CAs.



In your AWS account, type Certificate Manager in the search field and click on the first
        service that appears.
On the next screen, find and select Create a private CA.
Fill in the configuration fields according to the company's needs.
The CA will be created and made available by AWS.
Under Actions, click Install CA certificate to enable.
In senhasegura, access the menu Certificate Manager→Certificates cloud→Requests.
Click the (⁝) icon and select New.
Fill in the fields with the following information. Fields with an asterisk (*) are mandatory information:
Amazon Account: select the created account.
Region: select the same region as your AWS account.
CA: select the created CA.

Caution
Ensure your user has the appropriate Certificate Manager-related permissions in
                        the AWS account to view your CA.


Domain name: choose an identifying name.
Additional names: additional domain names.
Tag: add extra identification if needed.
Value: add extra identification if needed.


Save.


Sign requests

With the request created, find it in senhasegura, in the Action column.
Click the (⁝) icon and select Request signature. 
Fill in the fields that appear as mandatory:
Justification: Write a reason for the request.
Reason: choose from the available options.
Governance code: type a request identification code.


Save.
View your certificate on the AWS page and confirm the Active status.
View your certificate in senhasegura. The Signed status appears after a few minutes of waiting.
    


View certificates

Access the menu Certificate Manager→ Certificates cloud→Certificates. Only certificates that
        have been signed are displayed.
In the Action column, click the (⁝) icon to view all
        available options:
Change certificate: change who is responsible for the certificate, and users who can
                access and use the certificate.
Request details: view your certificate information.
Renew certificate: depending on the user's permission, it is possible to request and
                sign or just make the request.
Certificate Renewal history: view renewal history, who, and when.
Disable: deactivate the certificate and consequently suspend the billing and
                operation.

Caution
The Accounts column on this screen shows how many accounts are
                        linked to a single certificate. We strongly recommend reviewing this setting if your discovery
                        reveals more than one account. Ideally, the certificate should have a single account to maintain
                        the integrity of the cloud infrastructure.




By clicking on the Detail icon you can view different information about your certificate, and
        download the key to use it on various sites and applications.