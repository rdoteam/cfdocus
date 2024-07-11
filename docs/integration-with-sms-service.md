## Metadata_Start 
## code: en
## title: Integration with SMS service 
## slug: integration-with-sms-service 
## seoTitle: Integration with SMS service 
## description:  
## contentType: Markdown 
## Metadata_End
senhasegura has integration with Zenvia SMS service.

:::(warning) (Caution)
To use this feature, you need a Zenvia account.
:::

To configure this feature, go to **Settings ➔ System parameters ➔ System** parameters, and click on the tab Notifications, as in the picture below.


1. In the field **SMS Broker**, select the service Zenvia
2. Then enter the name that will appear in the message in the **Sender** field
3. In the field **User**, enter the **Zenvia** username of the responsible for notifications
4. Enter the **password** of this user in the field Password, and finally, click **Save**

With this setting, you will need to adjust an SMS notification:

1. Create a new notification by logging in: Settings ➔ Notifications ➔ Settings
2. Enter a name for the notification and select the option SMS, as in the figure below.


1. Click on the Save button and wait for the window to reload. If it closes, go back to the notification registration report and select the action button Edit the newly created notification.

1. Select the type of Notification that will be sent by SMS. 
The types of notifications that can be sent by SMS are:
    * Access behavior
    * Workstation alerts
    * Expiration of certificates
    * About remote sessions
    * Password operations
    * Password backup
    * Audit of commands
    * Equipment connectivity
    * About protected information
    * Operations with credentials
    * Monitoring

1. Then, in the tab **Contacts**, add the users who should receive these notifications by SMS

    :::(warning) (Caution)
    Users selected to receive this type of notification must have their mobile phone numbers registered on senhasegura.
    :::

1. Click on **Save** to finish.