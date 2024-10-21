# How to sign a DigiCert certificate on senhasegura 

This document details the signing process of a DigiCert certificate on , since the creation of the certificate authority until the revogation of the certificate.

## Requirements
* A DigiCert account with proper permissions.  
* A credit card valid to buy the certificate.  
* A domain available to validate the certificate.

## Configure DigiCert on senhasegura
To configure DigiCert on , you need your DigiCert user details.

1. Access , and log in to your account.  
2. Click  >  to find your user details, even your username.

## Create a Certificate Authority on senhasegura
1. On , in the upper-left corner, click the , represented by the nine squares, and select .  
2. In the side menu, select  > .  
3. In the  menu, represented by the three vertical dots, select .  
4. In the opened window, choose DigiCert's CA.  
5. In the  field, enter your username.

## Generate an API Key
1. Access , and log in to your account.  
2. In your  account, go to  > .  
3. Click  to create a new key to your user.

## Get the Account ID
1. Use the API Key generated on the previous step to access .  
2. The response of the API will be an  with your .  
3. Enter the data on , filling the Certificate Authority fields with the obtained  and .  
4. Click .

## Create an organization on senhasegura
1. On , in the upper-left corner, click the , represented by the nine squares, and select .  
2. In the side menu, select  > .  
3. To create a new organization, click the  menu, represented by the three vertical dots, and select .  
4. Enter the organization's data, including, at least, one contact in the  tab, this information will be used afterwards.  
5. Save the settings.

## Generate a Certificate Signing Request (CSR)
1. On , in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select  > .
3. To create a new CSR, click .
4. Enter the following certificate information:  
    1. .  
    2. .  
    3. : Select the organization created previously. (For example: MT4 Tecnologia LTDA).  
    4. : Enter the domain to be protected by the certificate. (For example: ).   

    :::(Warning) (Caution)
    This domain must be accessible on the Internet for validation purposes. 
    :::
    
    5.  (in days): For test purposes, select the 7 days options to reduce costs.  
    6. : Choose between RSA and DSA. For this example, we will use RSA.  
    7. : Choose between , , and . For this example, we will use .  
    8. : Choose between , , and . For this example, we will use .  

    :::(Info) (Info)
    Data related to the RapidSSL Standard DV certificate valid for up to 7 days costs $1.13.  
    :::
    
    9. : Select the option to use the previously created CA.  
5. Save all configurations.

## Add funds in DigiCert
1. In your DigiCert account, access your financial section in  \> .  
2. Add funds.  
3. Select the desired certificate type.  
4. Enter the required value.  

:::(Info) (Info)
The RapidSSL Standard DV certificate valid for up to 7 days costs $1. 
:::

5. Enter your credit card data, and click .

## Sign CSR
1. On , in the upper-left corner, click the , represented by the nine squares, and select .  
2. In the side menu, select  > , and find the CSR created previously.  
3. Click the  menu, represented by the three vertical points, and request the CSR sign by clicking .  
   1. In the  tab, enter the system data.  
   2. In the  tab, enter the CA information to sign the certificate.  
   3. Choose the desired type of domain validation. (For example: DNS TXT).  
   4. Click .  
4.  will generate a request, and the certificate will be as .

## Validate the domain
1. In your  account, access the buying order in  > . 
2. Find the order, and click the number of your buying order.  
3. Go to .  
4.  will generate a unique  code to validate your domain. Copy this code.  
5. Create a new  in your domain.  
6. Access the DNS configurations in your domain.  
7. Create a new  registry with the code from the previous step.  
8. Wait for the DNS propagation.  

:::(Info) (Info)
The DNS propagation can take some time to finish. 
:::
    
9. Verify the domain.  
10. In the  page, click  so  validates your domain.  
11. Wait for the certificate to be issued.

After the validation of your domain, the certificate will be issued by , and will be available on senhasegura after a couple of minutes.

## Revoke the certificate (if necessary)
1. On , in the upper-left corner, click the , represented by the nine squares, and select .  
2. In the side menu, select  >  > , and find the certificate you want to revoke.  
3. A request will be sent to .

## Approve the revoke request in DigiCert
1. In your DigiCert account, and go to  > .  
2. You will see a revoke request pending.  
3. Approve the request to revoke the certificate.  
4. After approval, the status of the certificate on senhasegura will be changed to .

---

Do you still have questions? Reach out to the .