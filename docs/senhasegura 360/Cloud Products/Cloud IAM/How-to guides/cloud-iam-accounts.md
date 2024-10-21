# Accounts 

In this document, you'll find all the information about the  page, which allows you to integrate your Cloud Service Providers (CSPs) with your senhasegura account.

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
|  | Represented by the plus icon, it opens the  screen that allows you to add CSPs to . |
|  | Represented by the printer icon, it opens a new page for printing the report. |
|  | Represented by the paper sheet icon, it downloads the report. |
|  | Represented by the clock icon, it opens the  form. |

## Search fields

|  |  |
| --- | --- |
|  | Field that filters accounts by their identification code within senhasegura. |
|  | Field that filters accounts by their name. |
|  | Select field that filters accounts by one of the three available providers. Available options are: , , and . |
|  | Field that filters accounts by their tags, which can be assigned when creating or editing an account. |
|  | Opens a calendar for choosing the account’s registration date. This date will be the filter's start date. |
|  | Opens a calendar for choosing the account's registration date. This date will be the end date of the filter. |
|  | Field that filters accounts by their activation status. Available options are Yes and No. |
|  | Field that filters accounts by whether  is able to connect with the associated CSP. Available options are  and . |

}

For  accounts, you must manually import Azure credentials in the actions bar.

### Add account screen

|  |  |
| --- | --- |
|  | Field to assign a name to the account. |
|  | Radio buttons to enable or disable the account. Available options are  and . |

### Settings

:::(info) (Info)
One account can be associated with multiple CSPs.
:::

|  |  |
| --- | --- |
|  | Checkbox to select which providers will be connected to the account. |
|  | Text field for the description of the account. |
|  | Tags associated with the account. |

### AWS

|  |  |
| --- | --- |
|  | Button to open a modal with the policies required in JSON format. Compatible with AWS’s IAM Policy Editor. |
|  | Field to add the access key created as a security credential for the IAM user with the associated policy. |
|  | Field to add the secret access key created as a security credential for the IAM user with the associated policy. |
|  | Select field to choose the AWS account region. |

### Azure

|  |  |
| --- | --- |
|  | Field to add the Azure application’s Tenant ID. |
|  | Field to add the Azure application’s Client ID. |
|  | Field to add the Client secret created for the application. |
|  | Link to open a modal with the required permissions in AWS. |

### Google Cloud

|  |  |
| --- | --- |
|  | Button to upload the GCP IAM service account credentials that have a role with the required permissions. |

The  section present in the  and  tabs contains two checkboxes:

- : read-only
- : if checked, this option triggers a password change once users with credentials registered in  log into the provider.