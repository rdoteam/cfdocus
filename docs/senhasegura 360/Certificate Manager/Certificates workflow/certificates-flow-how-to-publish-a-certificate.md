# How to publish a certificate 

Once a certificate is signed, it can be published on the desired device through senhasegura, which will verify the authenticity and integrity of the information and transactions carried out.

:::(Info) (Info)
You can publish certificates only on devices registered in senhasegura.
:::

## Requirements

* Only certificates ready to be used. Enable the search field below to filter certificates with this specification:
    *  : select .
* Manually imported certificates must include their respective keys. Only certificates with keys will enable the publishing option.

## Publish a certificate
To publish a certificate, follow these steps:

1. In the top left corner, click , identified by the nine squares icon, and then .
2. On the side menu, select  and then .
3. Locate the desired certificate.
4. In the corresponding  column, click on the three vertical dots icon.
5. Select ; this will open the  form.

### General tab

1. Select the  for publishing the certificate.
2. Select one . Depending on the , the chosen profile will automatically fill in several fields on this screen. It’s possible to change the information.
3. If desired, enter a  for publishing the certificate.

:::(Info) (Info)

1. If you want to use another publishing profile and plugin, check  and enter the . 
2. Next, select which  you want to use.

:::

#### Credential for execution section

1. Define which credential will be used to authenticate the devices.
    1. Check  to enable the credentials drop-down menu.
    2. Select one .

:::(Warning) (Caution)

* If you want a username as a credential, fill in the  field. 
* The system will find this username in all registered devices to authenticate; therefore, the device must have a credential with the same username you typed here.

:::

#### Configuration for plugin section
See the  article if you want more information on how to set the plugin.

### Servers tab
:::(Warning) (Caution)
Ensure that the credential selected in the previous tab can connect to the chosen devices.
:::

1. Add the servers where the certificate should be published.
    1. Click the  icon next to the word .
    2. In the  window, locate the desired devices. Use the search fields or the scroll bar.
    3. Check the box on the left next to the code number.
    4. Click .
2. Click .

### Schedule tab (optional)
It’s possible to schedule the time of publication.

1. Set  to .
2. In the  fields, define the day and time to complete the schedule.

:::(Info) (Info)
To view published certificates, go to .
:::
***
Do you still have questions? Reach out to the .