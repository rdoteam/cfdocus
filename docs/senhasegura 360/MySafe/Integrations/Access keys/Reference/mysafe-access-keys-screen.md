# Access keys 

In this document, you'll find detailed information about 's  screen, which displays a report with the access keys created to integrate your application with .

:::(Info) (Info)
For more information about  APIs, access the  APIs documentation.
:::

## 

1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .  
2. In the side menu, select . 
 ---

## 

| Item | Description |
| ----- | ----- |
|  | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
|  | Represented by the counterclockwise arrow icon, it refreshes the page. |
|  | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
|  | Represented by the plus sign, it opens the  screen where users can create a new access key authorization. |
|  | Represented by the printer icon, it opens a new page for printing the report. |
|  | Represented by the paper sheet icon, it downloads the report. |
|  | Represented by the clock icon, it opens the  screen. |

## Search fields

| Item | Description |
| --- | --- |
|  | Field that filters access keys by their name. |
|  | Field that filters access keys by associated keywords. |
|  | Field that filters access keys by the key’s encryption option. Available options are  and . Click  to enable the  option. |
|  | Field that filters access keys by their expiration period. Format . Use this field to enter the initial date of the period. The downward arrow opens a calendar. |
|  | Field that filters access keys by their expiration period. Format . Use this field to enter the final date of the period. The downward arrow opens a calendar. |
|  | Field that filters access keys by their creation period. Format . Use this field to enter the initial date of the period. The downward arrow opens a calendar. |
|  | Field that filters access keys by their creation period. Format . Use this field to enter the final date of the period. The downward arrow opens a calendar. |

## Report fields

* .
* .
* : number of items the key has access to. 
* : authentication method used. By default,  uses the vOAuth 2.0 method.
* .
* .
* .
* : in this column, you find the following options:
    * : represented by the key icon, opens the  window with information about the access key.
    * : dropdown menu with the options: *Edit*, *Decryption key* (if the  field is marked as ), *Clone*, and *Revoke*.


:::(Info) (Info)
The report displays 30 records per page. To move to the next pages, click the forward button at the end of the report.
:::


### New/Update access key screen
In this section, you will find all the information about the  and  screens, which have the same fields.

#### Step 1 - Application
| Item | Description |
| --- | --- |
| * | Text box for entering a name for the application. |
|  | Text box for entering a description for the application. |
|  | Text box for entering keywords associated with the application. |

#### Step 2 - Security
| Item | Description |
| --- | --- |
| * | Checkbox to define whether the sensitive information of each item will be returned encrypted. |
|  |  button that enables the  field for entering the IP addresses authorized to use the access key. Using the asterisk * allows access from any IP address. |
|  |  button that enables the  field for entering the URLs that will be allowed access to the access key authorization. By default, any origin is allowed. |
|  | Field for entering a certificate fingerprint for an additional layer of protection. |


#### Step 3 - Data
| Item | Description |
| --- | --- |
| * | Checkbox to define whether the application can access all  items that the user has access to. Not checking this box enables the  field where you can search for the desired information. |

#### Step 4 - Period
| Item | Description |
| --- | --- |
| * | Fields for setting the date and time when the key will be automatically revoked. Formats DD/MM/YYYY and HH:MM. The downward arrows open a calendar and a list of times. If left blank, the access key will expire only if you log out of the application or manually revoke the key.|

#### Step 4 - Review

Fields with all the information entered in steps 1 to 4.
* .
* .
* .
* .
* .
* .
* .
* .
* .


### Application Authorization

In this section, you will find all the information about the  screen, which displays the details of the created access key.

| Item | Description |
| --- | --- |
|  | Field that displays the authentication method used. |
|  | Field that displays the name of the client application using the access key. |
|  | Field that displays the unique identifier of the client application. Click the  icon to view the information. |
|  | Field that displays the secret key for authenticating the application to the server. Click the  icon to view the information. |
|  | Field that displays the description of the access key authorization.  |
|  | Field that displays the expiration date of the access key authorization.|
| * | Field that indicates whether the information is encrypted. The options are  and .|
|  | Field that indicates whether a certificate fingerprint was provided. The options are  and . |
|  | Field that shows the IP addresses allowed to use the access key. |
|  | Field that displays the HTTP referers allowed to use the access key.|
|  | Field that displays the keywords associated with the access key. |
|  | Field that displays the information the key can access. It can display  or specific information for the selected items.|