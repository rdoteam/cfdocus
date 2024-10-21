# Service accounts 

In this document, you'll find all the information about the  page, which allows you to provision service accounts for all your integrated Cloud Service Providers (CSPs) and import existing service accounts into senhasegura.

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
|  | Represented by the plus icon, it opens the  screen that allows you to create service accounts for connected CSPs. |
|  | Represented by the download icon, it imports Azure service accounts into . This action is done automatically for AWS and GCP. |
|  | Represented by the printer icon, it opens a new page for printing the report. |
|  | Represented by the paper sheet icon, it downloads the report. |
|  | Represented by the clock icon, it opens the  form. |

## Search fields

|  |  |
| --- | --- |
|  | Field that filters service accounts by their identification code within senhasegura. |
|  | Field that filters service accounts by the service account name. |
|  | Field that filters service accounts by the senhasegura account that owns the service account. |
|  | Select field that filters service accounts by one of the three available providers. Available options are: , , and . |
|  | Field that filters service accounts by their tags, which can be assigned when creating or editing a service account in . |
|  | Opens a calendar for choosing the service account’s registration date. This date will be the filter's start date. |
|  | Opens a calendar for choosing the service account's registration date. This date will be the end date of the filter. |
|  | Field that filters the service accounts by their provisioning status. Available options are: , , , , , and . |
|  | Field that filters service accounts by their activation status. Available options are  and . |
|  | Field that filters by deleted service accounts. Available options are  and . |

}

For  accounts, you must manually import Azure service accounts in the actions bar.

### Add service account screen

|  |  |
| --- | --- |
|  | Field to assign a name to the service account. |

### Settings

:::(info) (Info)
You can provision service accounts for multiple CSPs.
:::

|  |  |
| --- | --- |
|  | Checkbox to provision the service account for AWS. |
|  | Checkbox to provision the service account for Google Cloud. |
|  | Checkbox to select for which providers the service account will be created. |
|  | Defines the lifetime of the service account. The time-to-live (TTL) starts to count from its creation, and upon expiration, the service account will be automatically deleted from the provider. |
|  | Text field for the description of the service account. |
|  | Tags associated with the service account. |