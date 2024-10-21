# How to import a certificate A1 

In this article, you’ll learn how to import a certificate A1 to Certificate Manager.

### Requirements

* A certificate file.
* A key file, if the certificate has the key.

---
## Import a certificate
:::(info) ()
You can manually add a variety of certificate types, including , , , , ,  and  (Private key included, no need to import the key).
:::
To manually import a certificate, follow these steps:

1. On the top left corner, click , identified by the nine squares icon, and then select .
2. From the left side menu, select .
3. In the top right corner, click the three vertical dots icon.
4. From the dropdown menu, select .
5. Choose a  from your machine. This is the only mandatory field.
6. If your certificate has a separate key file, also select the corresponding .
7. If you'd like your certificate to have a password for the key, enter it in the  field while you're importing it. You won't be able to add this information later.
    :::(warning) ()
    Although adding a  isn't mandatory, it's highly recommended. Certificates lacking this password can be revoked unintentionally by anyone with access to the CA.
    :::
    :::(info) ()
    Both passwords can be up to 72 characters long, including uppercase and lowercase letters, numbers, and the symbols .
    :::
8. If you prefer, insert the information from the certificate you are importing into an existing one. Click the  field and wait a moment for senhasegura to display the certificate, and you can select it.
    1. Select the desired certificate.
9. Click  to confirm the import.

On the  page, you'll see the certificate you just imported.

---
Do you still have questions? Reach out to the .