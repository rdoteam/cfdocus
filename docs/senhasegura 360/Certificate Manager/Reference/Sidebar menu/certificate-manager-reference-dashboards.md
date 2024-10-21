# Dashboards 

The Certificate Manager dashboards offer a centralized view, giving you a single place to monitor certificates and effectively manage your company's security, compliance, and operational continuity.

This article describes the information available on the  main page.
:::(Info) (Info)
Path to access: .
:::

## Certificates

### Filters
| Item | Description |
| --- | --- |
|  |Used to refine the search to display certificates linked or not to devices. |
|  |Used to refine the search to display active or inactive certificates. |
|  |Used to refine the search to display revoked or not revoked certificates. |

:::(Info) (Info)
 are the ones you can apply in a process.
 are the ones that the product will ignore. They won't be applied or renewed. You can only use them once you change their status.
 are those that have been intentionally invalidated by the user.  They can no longer be used.
:::

### Cards

| Item | Description |
| --- | --- |
|  |The total count of certificates. |
|  |The total count of valid certificates (within their valid timeframe).|
|  |The total count of invalid certificates (Expired, Renewal requested, Revoked, and Inactive).|
|  |The total count of certificates with SHA1 algorithm and/or keys with 1024 bits or less. |

:::(Warning) (Caution)
Although unsafe certificates should NOT be used, as long as a user has not revoked them, they are still included in the count of valid certificates and can be used in environments.
:::

### Charts
| Item | Description |
| --- | --- |
|  |Displays only the valid certificates, sorted by their expiration date. |
|  |Displays all certificates, sorted by status. |
|  |Displays all certificates, sorted by origin. |
|  |Displays all certificates, sorted by Certificate Authority. |
|  |Displays all certificates, sorted by organizations registered in the module settings. |
|  |Displays only the certificates applying in the registered environments. |
|  |Displays only the certificates applying in the registered systems. |
|  |Displays only certificates with a configured responsible party, sorted by name.|
|  |Displays only the certificates in the renewal process, sorted by status. |
|  |Displays all certificates, sorted by type. |
|  |Displays all certificates, sorted by security classification (A-NC). |
|  |Displays all certificates, sorted by the used key size. |
|  |Displays all certificates, sorted by the algorithm of the used key. |

* * *
## Risk radar

### Radar

| Item | Description |
| --- | --- |
|  |Used for real-time monitoring of all certificates, sorted by authority and located in the corresponding section according to the expiration date. |

:::(Info) (Info)
Clicking on the green circle that identifies the certificate on the radar opens a window with information about the certificate. At the bottom,  you find the action buttons , , , and .
:::

### Charts

| Item | Description |
| --- | --- |
||Displays all certificates according to the security classification (A-NC). Clicking on a certificate's column opens the 'Certificate information' page.|
|  |Displays the certificates that are approaching their expiration date. |
***
Do you still have questions? Reach out to the .