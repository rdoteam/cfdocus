# How to transfer files in RDP Proxy sessions 

In this document, you’ll find a step-by-step guide on how to perform file transfer in RDP Proxy sessions.

senhasegura RDP Proxy uses the native RDP protocol. Therefore, all resources shared between the client side and the server side will work as a normal RDP connection, even with the senhasegura monitoring layers.

---
## Transfer file
:::(warning) ()
File transfer must be enabled in  at  to work. For more information on how to perform this action, access the  document.
:::

1. Open the  app of your preference.
2. In the  field, enter the IP address.
3. On the  field, enter the username used to access the vault.
4. Access , in the  section, click  and select the driver to share.

To transfer a file from the client side to the target device, copy the desired file and paste it into a folder from the local machine, located under . senhasegura will then record this action, and, if any file transfer plugin is active, it will be triggered before the file reaches the target destination.

For text data stored in the clipboard, the data will be logged to session-indexed texts, but no plugins will be triggered.

You can also transfer local resources to the target machine using Microsoft®Windows® Remote Area Connection.

---
### Next:



Do you still have questions? Reach out to the .