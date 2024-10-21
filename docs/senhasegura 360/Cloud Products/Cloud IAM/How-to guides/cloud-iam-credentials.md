# Credentials 

In this document, you'll find all the information about the  page, which shows the existing credentials for accounts connected to senhasegura and allows you to create new credentials for all Cloud Service Providers (CSPs).

## Path to access

1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and then select .
2. In the side menu, select  > .

---

## Top bar

|  |  |
| --- | --- |
|  | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
|  | Represented by the counterclockwise arrow icon, it refreshes the page. |
|  | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
|  | Represented by the plus icon, it opens the  screen that allows you to add CSPs to Cloud IAM. |
|  | Represented by the download icon, it imports Azure credentials into . This action is done automatically for AWS and GCP. |
|  | Represented by the printer icon, it opens a new page for printing the report. |
|  | Represented by the paper sheet icon, it downloads the report. |
|  | Represented by the clock icon, it opens the  form. |

## Search fields

|  |  |
| --- | --- |
|  | Field that filters credentials by their identification code within senhasegura. |
|  | Field that filters credentials by their name. |
|  | Select field that filters credentials by the connected account. |
|  | Select field that filters credentials by the connected user or service account. |
|  | Field that filters credentials by their tags, which can be assigned when creating a credential through . |
|  | Opens a calendar for choosing the credential's registration date. This date will be the filter's start date. |
|  | Opens a calendar for choosing the credential's registration date. This date will be the end date of the filter. |
|  | Field that filters credentials by their activation status. Available options are  and . |
|  | Field that filters by deleted credentials. Available options are  and . |
|  | Select field that filters credentials by one of the three available providers. Available options are: , , and . |

}

For  accounts, you must manually import Azure credentials in the actions bar.

### Add credential screen

|  |  |
| --- | --- |
|  | Select field to choose for which provider the credential will be created. Available options are: , , and . |
|  | Select field to choose for which account the credential will be created. |
|  | Select field to choose for which user or service account the credential will be created. |

### Information

|  |  |
| --- | --- |
|  | Defines the lifetime of the credential. The time-to-live (TTL) starts to count from its creation, and upon expiration, the credential will be automatically deleted from the provider. |
|  | Select field to choose for which DSM environment the credential is created. Requires . |
|  | Select field to choose a system configured as a  in senhasegura. |
|  | Text field for the description of the credential. |
|  | Tags associated with the credential. |