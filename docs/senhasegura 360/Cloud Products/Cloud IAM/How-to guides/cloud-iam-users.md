# Users 

In this document, you'll find all the information about the  page, which allows you to provision users for all your integrated Cloud Service Providers (CSPs) and import existing users into senhasegura.

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
|  | Represented by the plus icon, it opens the  screen that allows you to create users for connected CSPs. |
|  | Represented by the download icon, it imports Azure users into . This action is done automatically for AWS and GCP. |
|  | Represented by the printer icon, it opens a new page for printing the report. |
|  | Represented by the paper sheet icon, it downloads the report. |
|  | Represented by the clock icon, it opens the  form. |

## Search fields

|  |  |
| --- | --- |
|  | Field that filters users by their identification code within senhasegura. |
|  | Field that filters users by the user name. |
|  | Field that filters users by the senhasegura account that owns the user. |
|  | Select field that filters users by one of the three available providers. Available options are: , , and . |
|  | Field that filters users by their tags, which can be assigned when creating or editing an account. |
|  | Opens a calendar for choosing the user’s registration date. This date will be the filter's start date. |
|  | Opens a calendar for choosing the user's registration date. This date will be the end date of the filter. |
|  | Field that filters the users by their provisioning status. Available options are: , , , , , and . |
|  | Field that filters users by their activation status. Available options are  and . |
|  | Field that filters by deleted users. Available options are  and . |

}

For Azure accounts, you must manually import Azure users in the actions bar.

### Add user screen

|  |  |
| --- | --- |
|  | Field to assign a name to the user. |

### Settings

:::(info) (Info)
You can provision users for multiple CSPs.
:::

|  |  |
| --- | --- |
|  | Checkbox to provision the user for AWS. |
|  | Checkbox to provision the user for Google Cloud. |
|  | Field to select for which providers the user will be created. |
|  | Defines the lifetime of the user. The time-to-live (TTL) starts to count from its creation, and upon expiration, the user will be automatically deleted from the provider. |
|  | Text field for the description of the user. |
|  | Tags associated with the user. |