# Requests 

This article describes the information available on the  main page.
:::(Info) (Info)
Path to access: .
:::
## Icons

| Item | Description |
| --- | --- |
|  |Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
|  |Represented by the counterclockwise arrow icon, it refreshes the page.|
|  |Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for requests.|
|  |Represented by the plus sign icon, it opens the  form.|
|  |Represented by the upload icon (an upward arrow), it opens the  form.| 
|  |Represented by the printer icon, it opens a new page for printing the report.|
|  |Represented by the paper sheet icon, it downloads the report.|
|  |Represented by the clock icon, it opens the  form.|

## Search fields

| Item | Description |
| --- | --- |
|  |Used to search for the request by its identification number in the system.|
|  |Used to search for the request by its name.|
|  |Used to search for the request by its status. It displays a dropdown menu with the options *Generating*, *Generated*, *Signature requested*, *Request approved*, *Request rejected*, *Waiting signature*, *Signed*, *Error signing*, *Canceled*, *Waiting edition*, *Error generating CSR*, *Error generating the key*, and *Awaiting processing*.| 
|  |Used to search for the request by the organization.|
|  |Used to search for the request by the encryption key selected. It displays a dropdown menu with the options *RSA* and *DSA*.|
|  |Used to search for the request by the hash function algorithm used. It displays a dropdown menu with the options *SHA256*, *SHA384*, and *SHA512*.|
|  |Used to search for the request by the user who requested it.|
|  |Used to search for the request by request date. It displays a calendar to select one specific date or to set an initial date and create a time range.|
|  |Used to search for the request by request date. It displays a calendar to set a final date and create a time range.|
|  |The button to execute the configured filtering process.|
|  |The button to clear the fields with information.|

The system displays the results in a list format, with columns named after the corresponding fields. The list presents additional information not included in the search fields:
*  the user registered in senhasegura as responsible for the request.
*  this signals whether the request was imported or not to senhasegura.
*  it presents the number of random certificates generated from the request. When clicking on the number, a new window will display the requests for each certificate.
:::(Error) (Important)
Random requests will only appear listed after the main one has been signed.
:::
## Action
This column features action buttons to perform component-related tasks.
:::(Info) (Info)
To view some options, you need specific permissions. These permissions are defined within the Certificate Manager Access group.
:::
| Item | Description |
| --- | --- |
|  |Represented by the identification card icon, it opens the  page.|
|  |Represented by the magnifying glass icon, it opens the  page.|
|  |Represented by the pencil and paper icon, it opens the  form. This option is visible only if the request still needs to be signed.|
|  |Represented by the three vertical dots icon, it displays a dropdown menu with various actions available for the request.|
|  |Represented by the request icon (a sheet of paper with the symbols ), it opens the  form.|
|  |Represented by the trash can icon, it opens a pop-up message to confirm the cancellation of the request. This option is visible only if the request still needs to be signed. |
|  |Represented by the clone icon (two overlapping squares), it opens a pop-up message to confirm the cloning of the request. It's useful when you only need to update the certificate validity.|
|  |Represented by the key icon. When selected, displays three ways to retrieve the certificate password: *View*, *Copy*, or *Spell*.|
|  |Represented by the letter 'i' icon, it opens the *Validation guidelines* page with information on how to carry out the request validation process. This option is visible only if an error happens while signing the request.|
***
Do you still have questions? Reach out to the .