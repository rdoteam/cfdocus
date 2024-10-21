# How to configure authentication via Kerberos for RDP sessions in senhasegura 

In this document, you’ll find a step-by-step guide on how to configure an RDP Proxy and RDP via Web Proxy sessions to be authenticated using the Kerberos protocol.

:::(error) ()
The steps in this tutorial must be performed in senhasegura.
:::

### Requirements

* Be a user with administrator permissions on senhasegura.

---
:::(warning) ()
The following step must be carried out only after completing the steps described in the  document.
:::

## Configure Kerberos authentication

1. On senhasegura, in the upper left corner, click on the , represented by the nine squares, and select .
2. In the side menu, select  > .
3. On the screen, click on the  tab.
    1. In the * parameter, choose the  option.
4. In the bottom right corner, click .

After this configuration, it will be possible to start RDP sessions via Web Proxy or RDP Gate sessions using the Kerberos protocol to authenticate it.

---
Do you still have questions? Reach out to the .