# Devices by certificate 

This article describes the information available on the  report. This report shows the certificates linked to the devices within an organization.

:::(Info) (Info)
Path to access: .
:::

## Icons
| Item | Description |
| --- | --- |
||Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
||Represented by the counterclockwise arrow icon, it refreshes the page.
||Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for the item.
||Represented by the printer icon, it opens a new page for printing the report.
||Represented by the paper sheet icon, it downloads the report.
||Represented by the clock icon, it opens the  form.

##  Search fields
| Item | Description |
| --- | --- |
|Used to search for the certificate by its code.
|Used to search for the certificate by the CN.
|Used to search for the certificate by the device with the published certificate.
|Used to search for the certificate by the date of the last discovery performed in the environment. It displays a calendar to select one specific date or to set an initial date and create a time range.|
|Used to search for the certificate by the date of the last discovery performed in the environment. It displays a calendar to set a final date and create a time range.|
|Used to search for the certificate by the publication date. It displays a calendar to select one specific date or to set an initial date and create a time range.|
|Used to search for the certificate by the publication date. It displays a calendar to set a final date and create a time range.|
|Used to search for the certificate by its status. It displays a drop-down menu with the options *Irregular, Manually validated, Out of date, Expired*, and *Regular*. 
||The button to execute the configured filtering process.
||The button to clear the fields with information.

The system displays the results in a list format, with columns named after the corresponding fields. The list presents additional information not included in the search fields:

* : indicates whether the link to the device was established manually or through a publication profile.
* : indicates whether the certificate has been published.
* : indicates whether the certificate was discovered through Discovery.

:::(Info) (Info)
 are certificates that can be safely used on devices.
 are certificates that don’t comply with regulatory requirements.
 are certificates that have been validated in the Action column by an administrator.
 are certificates that need to be renewed on devices.
 are certificates whose expiration date has passed.
:::

##  Action
This column features action buttons to perform component-related tasks.
| Item | Description |
|---|---|
|Represented by the two links icon, it opens the *Link devices* page to select other devices and link to the certificate.
|Represented by the checkmark icon, it opens a page to justify the action. Manual validation should only occur after the administrator verifies that the certificate is present on the device.
|Represented by the icon of a person, it opens the *Add Device Profile* page to select a publishing profile.
|Represented by the icon of a broken link, it opens a message to confirm the removal of the link. This option is visible only for devices in the list that were manually linked.
|Represented by the icon of the letter 'i', it opens a page with data that will be used in future publications. This option is visible only for devices in the list that were linked via Discovery.
***
Do you still have questions? Reach out to the .