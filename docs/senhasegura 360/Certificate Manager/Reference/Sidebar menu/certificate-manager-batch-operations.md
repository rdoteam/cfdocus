# Batch operations 

This article describes the information available on the  main page.

:::(Info) (Info)
Path to access: .
:::

## Icons
These icons are present in the four menu options , , , and .

| Item | Description |
| --- | --- |
|  |Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
|  |Represented by the counterclockwise arrow icon, it refreshes the page.|
|  |Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for the item.|
|  |Represented by the printer icon, it opens a new page for printing the report.|
|  |Represented by the paper sheet icon, it downloads the report.|
|  |Represented by the clock icon, it opens the  form.|
***
## Search fields - batch operations
The search fields below are present in , , and .

|Item|Description|
|-|-|
||Used to search for the certificate by the event identifier number.|
||Used to search for the certificate by the chosen signing authority.|
||Used to search for the certificate by the CN.|
||Used to search for the certificate by its origin. It displays a dropdown menu with the options *Scan and Discovery*, *Request*, or *Manual Import*.|
||Used to search for the certificate by expiration date. It displays a calendar to select one specific date or to set an initial date and create a time range.
||Used to search for the certificate by expiration date. It displays a calendar to set a final date and create a time range.
||Used to search for the certificate by its status. It displays a dropdown menu with the options *Valid, Revoked, Renewal requested*, or *Expired*.|
|  |The button to execute the configured filtering process.|
|  |The button to clear the fields with information.|

The system displays the results in a list format, with columns named after the corresponding fields.  The list presents additional information not included in the search fields:

*  the organization registered in the component's settings.
*  the validation defined in the request registration. It can be *DV SSL, EV SSL* or *OV SSL*.
*  the domain defined in the request registration. It can be *single, multiple* or *wildcard*.
*  the identification markers added in the request registration.
*  how many devices are linked to the certificate.
*  the environment registered in the system parameters.
*  the system registered in the system parameters.
*  the project name defined in the request registration.
*  the responsible’s username for the certificate.

:::(Info) (Info)
The three menus feature a blue button, located in the lower right corner of the home screen, which performs the corresponding batch operation.
:::
***
## Search fields - revoked certificates
The search fields below are present in .

|Item|Description|
|-|-|
||Used to search for a verification by event identification number.|
||Used to search for a verification by start date. It displays a calendar to select one specific date or to set an initial date and create a time range.
||Used to search for a verification by start date. It displays a calendar to set a final date and create a time range.
||Used to search for a verification by end date. It displays a calendar to select one specific date or to set an initial date and create a time range.
||Used to search for a verification by end date. It displays a calendar to set a final date and create a time range.
||Used to search for a verification by any error in the process.  It displays a drop-down menu with the options Yes or No.
||Used to search for a verification by its status.  It displays a drop-down menu with the options *Awaiting, In progress, Finished* or *Without certificates*. 
|  |The button to execute the configured filtering process.|
|  |The button to clear the fields with information.|

The system displays the results in a list format, with columns named after the corresponding fields.  The list presents additional information not included in the search fields:

*  the duration of the execution process.
*  how many certificates were verified in the process.
*  how many certificates are awaiting verification.
* 
* 
*  the progress bar of the process.

### Action

This column features action buttons to perform component-related tasks.
|Item|Description|
|-|-|
||Represented by the magnifying glass icon. It opens the *Verification details* page, which displays whether there were any errors with the certificates or they were revoked.|
:::(Info) (Info)
The home screen presents the blue button , located in the lower right corner of the screen, which triggers the verification.
:::
***
Do you still have questions? Reach out to the .