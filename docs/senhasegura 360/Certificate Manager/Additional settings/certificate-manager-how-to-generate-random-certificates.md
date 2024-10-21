# How to generate random certificates 

In this article, you’ll learn how to generate random certificates. The Certificate Manager provides the convenience of creating multiple CSR (Certificate Signing Requests) with random Common Names (CNs) and then signing them all at once. The ability to generate certificates with random CNs is especially valuable in microservices and elastic environments, as it simplifies certificate lifecycle management.

## Step 1: Create a request
To create a request with random certificates, follow these steps:

1. In the top left corner, click , identified by the nine squares icon, and then select .
2. On the side menu, select  and then .
3. In the top right corner, click  (the three vertical dots icon).
4. Select ; this will open the  form.
5. In the  tab, enter the information:
    1. From the  drop-down menu, select the desired certificate type.
    2. For , check the desired option.
    3. From the  drop-down menu, select an organization and click .
    4. In , type the appropriate name.
    5. In , set the period for the certificate to remain valid.
    6. Enable the  checkbox.
    7. In , set a number. The limit is 500 random certificates.
    8. In , type all domains to be protected with this certificate.
    9. Add any  you want.
    10. From the  drop-down menu, select the encryption algorithm.
    11. From the  drop-down menu, select the key size consistent with the algorithm.
    12. From the  algorithm drop-down menu, select the algorithm used to sign the certificate through the Certification Authority.
    13. Add the desired passwords.
:::(Info) (Info)
The passwords can have up to 72 characters, including uppercase and lowercase letters, numbers, and the symbols .
:::
9. Click .

On the  main page, the new request will be listed, and in the  column, you will  find the configured number of certificates.
* * *
## Step 2: Sign the request
To perform this action, access the article on .

After you sign the request, the system will process and sign the certificates. The processing time may vary depending on the number of random certificates requested.

* * *

## Step 3: Find signed random certificates
To find signed random certificates, there are two ways:

1. On the  main page, click on the number indicating the quantity of certificates in the  column. 
2. All requests will be listed individually. 
3. In the  column, you’ll see requests changing from ‘Generating’ to ‘Signed’. 
4. In the  column, click on  (the ID card icon) to view the random certificate generated from the CN. 

Or

1. On the left sidebar menu, select .
2. On the main page of the item, all generated random certificates will be listed individually.

* * *
Do you still have questions? Reach out to the .