# Dashboards 

In this document, you’ll find detailed information regarding ’s  dashboard - , which provides a behavior analysis of ’s active users.

## Requirements

- Admin or system auditor permission.

## Path to access

1. On , in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select .

***

## Behavior analysis

In the upper-right corner, you will find the field with the period to which the displayed data refers. After selecting the period in the available calendars, click on the funnel icon to filter the data. The displayed data can be filtered by the following periods:

- .
- .
- .
- .
- .
- .
- .
- .
- : customization of the searched period.

:::(info)(Info)
By default, the filter searches for the last 15 days.
:::

## Charts

| Item | Description |
| --- | --- |
|  | Daily progression chart that displays the number of sessions with some degree of risk compared to the total number of sessions carried out in senhasegura. |
|  | Daily progression chart that displays the number of password views with some degree of risk compared to the total number of password views made in senhasegura. |

## Reports

### Top 5 sessions with risk

List of the 5 sessions that presented the highest risk within the dates selected in the filter.



- : personal name of the user who performed the session.
- : device where the session was initiated.
- : credential used by the user to perform the session.
- : date and time the session was performed. Formats:  and .
- : degree of risk reached by the session. The number can range from 0 (zero) to 100 (one hundred).
- : displays the Access details screen, which presents the following session data:
  - : user details such as their personal name, email, and IP address.
  - : the user's credential, the device's IP address, protocol used, and port.
  - : details of the session accessed by the user, such as the source device, session duration, target device, protocol, and port.
  - : list of audited commands executed by the user during the session.

### Top 5 views with risk

List of the 5 password views with the highest risk within the dates selected in the filter.



- .
- .
- .
- .
- .
- : displays the Access details screen, which presents the following session data:
  - : user details such as their personal name, email, and IP address.
  - : the user's credential, the device's IP address, protocol, and port.
  - : user IP address, query type, date and time of the query, and IP address of the device accessed.
  - : report that displays the latest events performed in the query and presents the following information:
    - .
    - .
    - .
    - : date and time of the query. Formats:  and .
    - .

### Last 5 sessions with risk

List of the last 5 sessions with any detected risk.



- .
- .
- .
- .
- .
- : displays the  screen, which presents the following session data:
  - : user details such as their personal name, email, and IP address.
  - : the user's credential, the device's IP address, protocol, and port.
  - : details of the session accessed by the user, such as the source device, session duration, target device, protocol, and port.
  - : list of audited commands executed by the user during the session.

### Last 5 views with risk

List of the last 5 password views with any detected risk.



- .
- .
- .
- .
- .
- : displays the Access details screen, which presents the following session data:
  - : user details such as their personal name, email, and IP address.
  - : the user's credential, the device's IP address, protocol, and port.
  - : user IP address, query type, date and time of the query, and IP address of the device accessed.
  - : report that displays the latest events performed in the query and presents the following information:
    - .
    - .
    - .
    - : date and time of the query. Formats:  and .
    - .