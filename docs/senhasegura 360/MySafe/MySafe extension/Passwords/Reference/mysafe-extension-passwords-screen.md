# Passwords 

In this document, you’ll find detailed information regarding the ’s  card, the , and the  screens.


On the 's home screen, within the  section, there's a list of passwords stored in . These passwords were either added by the user or shared with their account by another  user. Each password is represented by its own card. By default, the cards are displayed in a compact format. However, clicking on the password's name reveals an expanded card, providing more detailed information about the password and offering options to perform actions on it.

## Path to access

1. Click the  on your browser bar.
2. In the bottom menu, click , represented by the key icon.
3. Under , click the password you want to manage.

## Requirements

- An active password. To add a password to  using the extension, acces the document on .

---

## Password details compact card

The table below displays the information and available actions for the password card in its compact format.

| Item| Description|
|------------------|-------------------------------------------------------------------------------------------------------------|
|          | On the left side of the card, represented by the globe icon, displays the name assigned to the password.    |
|     | On the right side of the card, represented by the external link icon, takes the user to the website where the password is registered. |
|         | On the right side of the card, represented by the login icon, searches for login fields on the current web page and fills them with the data from the selected credential. |
|  | On the right side of the card, represented by the two sheets of paper icon, copies the password to the user’s clipboard. |

## Password details expanded card

The table below displays the details and available actions for the password card in its expanded format.

| Item              | Description                                                                                                          |
|-------------------|----------------------------------------------------------------------------------------------------------------------|
|            | URL of the website where the password is being used.                                                                |
|       | Credential’s username.                                                                                               |
|           | Keywords associated with the password.                                                                              |
|           | The token generated based on the secret key provided along with a clock indicating the remaining valid time for the token. This field is only available if a base32-encoded secret key was provided when creating or editing the password. |
|  | Represented by the two sheets of paper icon, copies the username associated with the password to the user’s clipboard. |
|  | Represented by the two sheets of paper icon, copies the password to the user’s clipboard.                           |
|      | Represented by the two sheets of paper icon, copies the generated token. This field is only available if a base32-encoded secret key was provided when creating or editing the password. |
|  | Represented by the paper and pencil icon, opens the  screen. This button is only available if the user has permission to edit the password. |

---

### New password/Edit password screens

### Path to access the New password screen

1. Click the  on your browser bar.
2. In the bottom menu, click , represented by the plus icon.

***

### Path to access the Edit password screen

1. Click the  on your browser bar.
2. In the bottom menu, click , represented by the key icon.
3. Under , click the password you want to manage.
4. Once the password card expands, click , represented by the paper and pencil icon.
***
### Form fields

| Item            | Description                                                                                                               |
|-----------------|---------------------------------------------------------------------------------------------------------------------------|
| *       | Name assigned to the password.                                                                                             |
| *        | URL of the website where the password is being used.                                                                       |
| *   | Credential’s username.                                                                                                     |
| *   | The password being added or edited. The  icon displays or hides the password you’re typing. The  icon automatically generates or updates a safe password for you. |
|   | The base32-encoded secret key used to generate the TOTP. The  icon reveals the secret key. The  icon allows you to scan and read the secret key from a QR code. |
|         | Keywords associated with the password.                                                                                    |
|         | Observations about the password.                                                                                           |

::: (Info) (Info)
The items with an asterisk are mandatory.
:::