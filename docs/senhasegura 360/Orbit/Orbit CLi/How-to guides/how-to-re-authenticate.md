# How to re-authenticate 

The request to verify your identity may occur if you have performed an action considered suspicious according to the settings established by the administrator. In such cases, the web application will be locked, and you’ll only be able to continue using senhasegura after successfully re-authenticating.

This document provides a step-by-step guide on how to re-authenticate in .

## Requirements
-  feature configured by the administrator.
- Re-authentication triggered.

---

Access the documents on , , and  provider for more information on how to configure multi-factor authentication.

## Verify your identity

The re-authentication method may vary depending on the method you configured in senhasegura.  

1. On the  screen, read the message indicating the requested authentication method and fill in the appropriate field with your local password, Microsoft Active Directory password, TOTP token, RADIUS authentication, or Duo Security authentication.

:::(info) (Info)
After successful re-authentication, the attempt count will be reset. This means that, for example, if the parameter * is set to 3, after making these 3 attempts and re-authenticating in senhasegura, re-authentication will only be requested again if you make 3 more attempts in your next logged session.
:::

---

Do you still have questions? Reach out to the .