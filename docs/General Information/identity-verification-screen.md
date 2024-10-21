# Identity verification 

In this document, you’ll find all the information about the re-authentication screens that allow users to verify their identity in senhasegura after performing actions considered suspicious.

## Re-authentication methods

The re-authentication methods depend on prior configuration. The available options are:

- 
- 
- 
- 
- 

In addition to re-authentication with the senhasegura user password, you can configure a multi-factor authentication code. In this case, when re-authentication is required, identity verification may randomly switch between the options registered in the account. For example, a user who has set up a TOTP token may be asked to reauthenticate using either the senhasegura user password or the TOTP.

:::(error) (Important!)
In the event of a reauthentication prompt, the application screen will be locked, and the user will not be able to continue using senhasegura without successful identity verification.
:::

## Verify your identity with the vault or AD access password screen

|    |                                                                                       |
|------------|-----------------------------------------------------------------------------------------------------|
|  | Message informing the user that the senhasegura vault access password must be used for re-authentication. The AD password can also be used in this case. |
|  | Field for password entry.                                                                           |
|   | Button to complete identity verification.                                                            |

## Verify your identity with TOTP token screen

Access the document on  for more information.

|    |                                                                                       |
|------------|-----------------------------------------------------------------------------------------------------|
|  | Message informing the user that a TOTP token must be used for re-authentication.                   |
|   | Fields for entering the 6-digit token.                                                                |
|   | Button to complete identity verification.                                                            |

## Verify your identity with the Duo Authenticator screen

Access the document on  for more information.

|    |                                                                                       |
|------------|-----------------------------------------------------------------------------------------------------|
|  | Message informing the user that the Duo Security authenticator must be used for re-authentication.  |
|  | Button to proceed with authentication.                                                               |

## Verify your identity with Radius screen

Access the document on  for more information.

|    |                                                                                       |
|------------|-----------------------------------------------------------------------------------------------------|
|  | Message informing the user that the RADIUS password must be used for re-authentication.             |
|  | Field for entering the password.                                                                     |
|   | Button to complete identity verification.                                                            |

---

Do you still have questions? Reach out to the .