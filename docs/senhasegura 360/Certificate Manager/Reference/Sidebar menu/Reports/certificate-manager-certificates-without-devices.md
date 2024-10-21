# Certificates without devices 

This article describes the information available on the  report.
This report allows for identifying unused certificates, indicating a security risk or the need for proper certificate reallocation. 

:::(Info) (Info)
Path to access: .
:::
## Icons
|Item | Description |
| --- | --- |
||Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
||Represented by the counterclockwise arrow icon, it refreshes the page.
||Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for the item.
||Represented by the upload icon (an upward arrow), it opens the  form.|
||Represented by the icon of three vertical lines, it opens the  page.|
||Represented by the printer icon, it opens a new page for printing the report.
||Represented by the paper sheet icon, it downloads the report.
||Represented by the clock icon, it opens the  form.

## Search fields
|Item | Description |
| --- | --- |
||Used to search for the certificate by its identification number.|
||Used to search for the certificate by the requisition identification number.|
||Used to search for the certificate by the CA that signed it.|
||Used to search for the certificates by the CN.|
||Used to search for the certificate by its origin. It displays a drop-down menu with the options *Scan and discovery*, *Request* and *Manual import*. |
||Used to search for the certificate by expiration date. It displays a calendar to select one specific date or to set an initial date and create a time range.|
||Used to search for the certificate by expiration date. It displays a calendar to set a final date and create a time range.|
||Used to search for the certificate by its status. It displays a drop-down menu with the options *Valid*, *Revoked*, *Renewal requested* and *Expired*. |
||Used to search for the certificate by the environment defined in the registration.|
||Used to search for the certificate by the system defined in the registration.|
||Used to search for the certificate by the project name defined in the registration.|
||Used to search for the certificate by the responsible user.|
||Used to search for the certificate by its status in the system. It displays a drop-down menu the with options *Yes* and *No*.|
||Used to search for the certificate by not having a bond with a device. It displays a drop-down menu with the options *Yes* and *No*.|
||The button to execute the configured filtering process.
||The button to clear the fields with information.

The system displays the results in a list format, with columns named after the corresponding fields. The list presents additional information not included in the search fields:

* : the validation defined in the request registration. It can be *DV SSL, EV SSL* or *OV SSL*.
* : the domain defined in the request registration. It can be *single, multiple* or *wildcard*.
* : identification markers defined in the request registration.
* : how many devices are linked to the certificate. It must always present the number zero.

## Action
This column features action buttons to perform component-related tasks.
|Item | Description |
| --- | --- |
||Represented by the identification card icon, it opens the  page.|
||Represented by the icon of three vertical dots. It displays a drop-down menu with possible actions for the certificates.|
|  |Represented by the play icon (a square with a right arrow), it opens the  form.|
|  |Represented by the icon of two chain links, it opens the  page.|
||Represented by the icon of two clockwise arrows, it opens the  form.|
||Represented by the icon of a prohibition sign, it opens a pop-up message to confirm the revocation.|
||Represented by the icon of a pencil and paper, it opens the  registration form.|
||Represented by the trash can icon, it opens a pop-up message to confirm the deactivation.|
||Represented by the clock icon, it opens the *Certificate renewal history* page, for consulting.|
||Represented by the icon of three gears, it opens the  form.|
||Represented by the key icon, it opens the  page. This option is visible only on items that have a password for the key.|
||Represented by the icon of a lined paper, it opens the  page. This option is visible only with the published certificates.|
||Represented by the icon of three parallel lines, it opens the  page. This option is visible only on items with the *Renewal requested* status. |
||Represented by the icon of the letter 'i',  it opens the Validation guidelines page. This option is visible only on items with the *Revoked* status.|
||Represented by the checkmark icon, it opens a pop-up message to confirm the certificate activation. This option is visible only on items with the *Inactive* status.|
***
Do you still have questions? Reach out to the .