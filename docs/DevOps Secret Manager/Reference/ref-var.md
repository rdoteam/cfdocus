---
title: CI/CD Variables
---

Access the **CI/CD Variables** report through **Grid Menu &gt; DevOps Secret Manager &gt; CI/CD &gt; Variables**. The variables registered in senhasegura will be listed on the main screen.

## Top bar

| Item                      | Description                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| **Show filters**    | Identified by the magnifying glass icon. Displays or hides the search fields on the screen. |
| **Update**          | Identified by the counterclockwise arrow icon. Refreshes the page.                          |
| **View actions**    | Identified by the three vertical dots icon. Displays the possible actions for the page.     |
| **Print report**    | Identified by the printer icon. It opens a new page for printing the report.                |
| **Export CSV**      | Identified by the sheet of paper icon, downloads the report.                                |
| **Schedule report** | Identified by the clock icon, it opens the window forscheduling the report.                 |

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results. They are:

## Search fields

| Item                    | Description                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **ID**            | Name of the variable registered on the senhasegura platform.                                                                               |
| **Variable name** | Name of the variable registered on the senhasegura platform.                                                                               |
| **Value**         | Variable value.                                                                                                                            |
| **Status**        | Drop-down menu with the options: Approved manually, Approved automatically, Rejected automatically, Rejected manually, and Pending review. |
| **Application**   | Application to which the variable in question is linked.                                                                                   |
| **System**        | System to which the variable in question is related.                                                                                       |
| **Environment**   | Environment to which the variable in question is related.                                                                                  |
| **Created at**    | It opens a calendar for choosing the start date for the variable's registration filter on the senhasegura platform.                        |
| **until**         | It opens a calendar for you to choose the exact end date of the variable record filter.                                                    |
| **Enable**        | Drop-down menu with the optionsYesandNo. Indicates whether the variable is enabled on the senhasegura platform.                            |

Below the fields, you'll find the **Filter** button, which filters according to the selected parameters, and the **Clear** button, which clears all the filter fields.

In the filter list, you'll also find the **Action** column with the Variable detail option, represented by the report icon. Clicking on this option opens the **Variable detail** window.

## Variable detail window

| Item                  | Descrição                                                                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Variable**    | Name of the variable registered on the senhasegura platform.                                                                                                           |
| **Application** | Application to which the variable in question is linked.                                                                                                               |
| **System**      | System to which the variable in question is related.                                                                                                                   |
| **Environment** | Environment to which the variable in question is related.                                                                                                              |
| **Value**       | Variable value. Refers to the dynamic information manipulated during the continuous integration and delivery process to control and customize the automation workflow. |
