# How to manage passwords using the MySafe extension 

This document provides a step-by-step guide on how to add, edit, view, and copy a password’s information in  using the  extension. Additionally, it provides instructions on using the  extension to seamlessly log in to websites using the credentials stored in .

## Requirements

- The  extension installed and activated in your browser. For more information, access the document on .

:::(error) (Alert!)
The automatic detection of username and password fields by the  may not be compatible with all websites, as we rely on the detection standards for these fields. Due to the security mechanisms of third-party applications, we cannot guarantee their functionality in all situations. However, we are continually improving the extension to expand support for a greater number of websites.
:::

---

## Add a password by logging in to a website (automatically)

## Requirements

- The  option enabled on the  screen. Access the  document for more information.

---
Use this method if you know your login credentials. When logging in to the website, the  will prompt you to add the password automatically. Follow the steps below:

1. In your browser, navigate to the website.
2. Enter your username and password for the website and proceed to log in.
3. After logging in, the  will prompt you with the question, "".
4. Click  to add the password to the vault.
5. To view the added passwords in the  extension, click , represented by the key icon in the bottom bar of the extension. Then, locate them within the  section.

## Add a password manually via the MySafe extension

To manually add a password to the  extension vault, follow the steps below:

1. In the bottom menu of the , click , represented by the plus icon.
2. On the  screen, fill in:
   - *: enter a name for the password.
   - *: enter the URL of the website where the credentials will be used.
   - *: enter the credential’s username.
   - : enter the credential’s password. Click the eye icon to view the password being typed. Click the refresh icon so that  automatically generates a secure password for you.
   - : if your account is configured to use multi-factor authentication, enter the secret key used to generate the TOTP (Time-based One-Time Password) or click the QR code icon to read the secret key from a QR code on the screen.
   ::: (info) (Info)
   To ensure the feature works correctly, please make sure your device's clock is synchronized with the correct time. Time deviations may affect the generation and validation of the TOTP.
   :::
   ::: (warning) (Attention)
   The secret must contain at least 10 characters and be base32 encoded, that is, it must include only capital letters from A to Z, numbers from 2 to 7, and the character =.
   :::
   - : enter keywords associated with the password.
   - : enter observations about the password.
   :::(Info) (Info)
   The items with an asterisk are mandatory.
   :::

3. Click . The message “Password created” confirms the action.
4. To view the added passwords in the  extension, click , represented by the key icon in the bottom bar of the extension. Then, locate them within the  section.

## Edit a password

To edit a password stored in  via the extension, follow the steps below:

1. In the bottom menu of the , click , represented by the key icon.
2. Within the  section, locate the card of the password you want to edit, or click , represented by the magnifying glass icon in the top bar, and type a keyword to search for it.
3. Click on the password card to expand it.
4. Click , represented by the paper and pencil icon.
5. On the  screen, make the necessary changes.
   ::: (Info) (Info)
   As the secret key used to generate the TOTP for multi-factor authentication is considered sensitive information, it isn’t displayed when editing a password’s information. Leave the field empty to keep the previous value or enter a new value to edit it.
   :::

6. Click . The message “” confirms the action.

## View a password’s details

To view the details of a password stored in  via the extension, follow the steps below:

1. In the bottom menu of the  extension, click , represented by the key icon.
2. Within the  section, locate the card of the password you want to view, or click , represented by the magnifying glass icon in the top bar, and type a keyword to search for it.
3. Click the password card to expand it and view details such as its , and the action buttons to , , and .
4. Click the expanded card to return it to its compact format.

## Copy a password and username

To copy the password and username of your credentials stored in  via the extension, follow the steps below:

1. In the bottom menu of the  extension, click , represented by the key icon.
2. Within the  section, locate the card containing the password whose information you want to copy. Alternatively, click , represented by the magnifying glass icon in the top bar, and type a keyword to search for it.
3. Click the password card to expand it.
4. Click , represented by the two sheets of paper icon.
5. Click , represented by the two sheets of paper icon.
6. The message “” confirms both actions.
   ::: (warning) (Attention)
   Clicking  and  adds the information to your clipboard, allowing other programs to access it.
   :::

## Log in to a website using the MySafe extension

To log in to a website using the credentials stored in  via the extension, follow the steps below:

1. In the bottom menu of the  extension, click , represented by the key icon.
2. Within the  section, locate the card of the password whose credentials you want to use. Alternatively, click , represented by the magnifying glass icon in the top bar, and type a keyword to search for it.
3. Click , represented by the login icon. This will fill the login fields in the current webpage with the respective credential data.
   ::: (Info) (Info)
   The  button, on the left of the  button, takes you to the URL registered in the selected password card but doesn’t perform the automatic login by itself.

   If the  setting is enabled, it will be applied when accessing the website. Otherwise, the user will have two options:
   - Manually fill in their credentials on the website.
   - Return to the password manager interface and click the  button on the desired credential.
   :::

---
Do you still have questions? Reach out to the .