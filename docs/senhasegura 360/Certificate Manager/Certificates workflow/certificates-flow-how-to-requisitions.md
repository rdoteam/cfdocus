# How to create a request 

A request is the process of seeking the issuance of a digital certificate from a Certification Authority. Requisitions are necessary for senhasegura to understand the type of certificate you want and which authority should endorse it. Every requisition includes a CSR (Certificate Signing Request), which shares vital information with the Certification Authority to generate the certificate.

You can create new requisitions from the product or import existing ones. This article explains how to do both actions.
***
## Create a request

To manually create a request, follow these steps:

1. In the top left corner, click , identified by the nine squares icon, and then select .
2. On the side menu, select  and then .
3. In the top right corner, click  (the three vertical dots icon).
4. Select ; this will open the  form.
5. In the  tab, enter the information:
    1. From the  drop-down, select the desired certificate type.
    2. For , check the desired option.
    3. From the  drop-down, select an organization and click .
    4. In , type the appropriate name.
    5. In , set the period for the certificate to remain valid.
    6. In  (Subject Alternative Name), type all domains to be protected with this certificate.
    7. Add any  you want.
    8. From the  drop-down, select the encryption algorithm.
    :::(Info) (Info)
    Remember to choose the appropriate algorithm for your organization's security criteria.
    :::
    8. From the  drop-down, select the key size consistent with the algorithm.
    9. From the  drop-down, select the algorithm used to sign the certificate through the Certification Authority.
    :::(Warning) (Caution)
    For added security, consider adding a  for certificate viewing. The password can have up to 72 characters, including uppercase and lowercase letters, numbers, and the symbols Passwords can have up to 72 characters, including uppercase and lowercase letters, numbers, and the symbols 
    :::
    :::(Warning) (Caution)
    Although adding a  isn’t mandatory, it’s highly recommended. Certificates issued without this password are subject to unintended revocations by anyone with access to the CA. The criteria for this password are the same as mentioned above.
    :::
6. Click .

On the  main page, you'll see the request you just created.

:::(Info) (Info)
Refer to the  for information on the other form tabs.
:::
***
## Import a request

If you already have a request, you can import it for senhasegura to process and generate the certificate.

To import a request, follow these steps:

1. In the top left corner, click , identified by the nine squares icon, and then select .
2. On the side menu, select  and then .
3. In the top right corner, click  (the three vertical dots icon).
4. Select ; this will open the  form.
5. Choose the  and the  from your machine.
    :::(Info) (Info)
    Although not mandatory, we recommend adding the  and . These passwords protect the information and enhance the security of the process.
    :::
6. From the  drop-down, select the algorithm used to sign the certificate through the Certification Authority.
7. From the  drop-down, select the desired certificate type.
8. For , check the desired option.
9. From the  drop-down, select an organization and click .
10. Click .

On the  main page, you'll see the request you just imported.
***
Do you still have questions? Reach out to the .