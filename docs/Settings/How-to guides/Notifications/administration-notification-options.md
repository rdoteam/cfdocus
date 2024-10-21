# Notification Options 

:::(info) (Info)
To configure notifications, access: Register transaction notification submission
:::

## Access control

Notifications from workflow process. Every product/module that has workflow process can send this kind of message.

- * A new approval request has been made by a user. Approvers will receive an email with details;
- * Some approver user has accepted the request;
- * Some approver user has rejected the request;
- * Some user of type approver revoked the order and the user who requested it will receive a notification with the reason for the revocation;
- * A user has been registered as an approver;

## Audit trail

Changes at major entities records.

-   * When a major entity is created, updated, or inactivated, a detailed log is registered and can also be notified;

## Authentication

Messages from authentication process.

-   * When a user is authenticated or some authentication process fails;
-   * When using MFA is disabled;
-   * When using MFA is enabled;

## Certificates

Messages from Certificate Manager module.

-   * When a certificate is configured into a device;

-   * When a certificate is created. Can be triggered by automatically issue or manual import;

-   * Some certificates will be expired today;
-   * Some certificates will be expired on 1 day;
- * Some certificates will be expired on 7 days;
-  * Some certificates will be expired on 30 days;

-   * Some certificates will be expired on 15 days;

-   * Some certificates will be expired on 60 days;

-   * Some certificates will be expired on 90 days;

-   * Some user has viewed the certificate password on plain-text;

-   * A certificate has been renewed at targets devices;

-   * A certificate has been revoked at targets devices;

-   * Some user has downloaded a certificate from senhasegura . This certificate can be a valid and published one, an old one or even a unused certificate;

-   * A publish profile configuration has been created or changed;

-   * A certificate request CSR has been created or changed;

-   * A certificate request CSR password has been viewed;

## Cloud

-  When a session in a cloud account has no owner

-  When an IAM key preview occurs in a cloud account that has no owner

## Command audit

SSH Proxy session audited command execution.

-   * Some user has executed an audited command;
-   * Some user has tried to execute an audited command configured to be blocked;
-   * Some user has tried to execute an audited command configured to be blocked. His session was immediately interrupted;
-   * Some user has tried to execute an audited command configured with high score;
-   * Some user has tried to execute an audited command configured with medium score;
-   * Some user has tried to execute an audited command configured with low score;

## Credentials

PAM Credentials operations.

-   * Some credential has been created or changed to has a dedicated owner;

-   * Some credential has it password changed manually or by Execution module template;

-   * A report with credentials operations summary;

-   * A report with credentials with expired password;

-   * A report with credentials that has been requested by users to see its plain-text passwords;
-   * A report with credentials with passwords confirmed;
-   * A report with credentials with invalid passwords;

## Devices

PAM Devices monitoring.

-   * Devices that lost connectivity over the configured ports;

-   * Devices that recovery connectivity after been flagged as connectivity lost;

## Domum

-    Some user made Domum login from a new geoip location;

-    Some user tried to access Domum from an unauthorized geoip location;
-   When the panic button was pressed

-  Status on the health of access to Domum

## Emergency panel

-  When the emergency button has been pressed

-  When Lockdown was started on the system

-  When Lockdown was finished in the system

-  When Freezing was started on the system

-  When Freezing was started on the system

## Master key

-  When the user tries to recover the backup and an error occurs

-  When the user successfully recovered the backup

## Monitoring

Server instance resources monitoring.

-   * CPU is running over 90% usage over 10 minutes;

-   * CPU is running over 70% usage over 10 minutes;

-   * A report with credentials operations summary;

-   * Storage is running under 10% of free space;

-   * Storage is running under 30% of free space;

-   * Storage is running under 20% of free space;

-   * RAM is running over 90% usage over 10 minutes;

-   * RAM is running over 70% usage over 10 minutes;

-   * Storage usage daily report;

-   * Some user has downloaded a dashboard as PDF. This alert exists to make clear that some data has exported by some user;

## Password backup

Backup procedures.

-   * A privileged information backup has been made using the master key. This backup execution can be executed automatically by system schedule, or manually by user request.

-   * An error occurred during a privileged information backup;

## Password operation

PAM credentials operations running by Execution module.

-   * A credential has been activated into target device by Execution module;

-   * A credential has taken its password changed into target device by Execution module;

-   * An error occurred when tried to activate into target device by Execution module;

-   * An error occurred when tried to change password into target device by Execution module;

## Protected information

PAM Protected information operations.

-   * Some protected information has been changed;

-   * Some protected information has expired;

-   * Some user requested protected information data. This user had access to its password, file or content;

## Remote session

senhasegura Proxy operations.

-   * Some user requested MP4 video generate;

-   * senhasegura finished to index a proxy session texts;

-   * A session had its audit source file changed;

-   * A proxy session is started;

-   * A proxy session is finished;

-   * The requested video generate has finished;

-   * It was identified a high-risk session;

## Schedule reports

-  When a report schedule was created

-  When a report schedule has been updated

-  When a report schedule has been deleted

## User behavior

Unusual behaviors detected by User behavior module.

-   * Some user is requesting a plain text view of an unusual credential for them;
-   * A proxy session started by some user from an unusual origin for that user or credential;
-   *

-   * A proxy session with a unusual duration time for that user or credential;

-   * A proxy session with a unusual starting time for that user or credential;
-   *

-   * Some user is requesting plain-text view of an unusual credential for him;

-   * Some user is requesting plain-text view of an unusual origin IP;

## Workstation

senhasegura.go for Windows or Linux.

-   * System alert messages related to errors;
-   * An impersoned application execution has ended;

-   * An impersoned application execution started;

- 

- * An impersoned control panel applet has been accessed;

-   * A credential password has been copied;

-   * A credential has been used to access a network sharing;

-   * The directory and file scan changed some permission policies based on backoffice configuration;

-   * The directory and file scan removed some permission policies based on backoffice configuration;

-   * The directory and file scan added some permission policies based on backoffice configuration;

-   * The senhasegura.go client has downloaded a new version from backoffice;

-   * An error occurred when the senhasegura.go client tried to request the user credential list;

-   * The user requested to start senhasegura.go offline mode;

-   * The user requested to stop senhasegura.go offline mode;

-   * A macro was executed by some user;

-   * A network adapter settings applet was accessed by some user;

-   * A network share path has been registered by some user;

-   * A new senhasegura.go version is available at senhasegura backoffice;

-   * An impersoned application execution started from Windows context menu;

-   * The MSI installer has been approved by administrator to be installed automatically from senhasegura.go client;

-   * The MSI installer has been rejected by administrator to be installed automatically from senhasegura.go client;

-   * Some workstation has installed the new version and reported to backoffice;

-   * The user uninstalled some application using senhasegura.go elevation;

-   * The user tried to execute an application that has a DLL considered as untrusted;

-   * The workstation local user has been approved to use senhasegura.go ;

-   * The user used senhasegura.go to authenticate Windows UAC prompt;

-   * The user viewed the credential password as plain-text;

-   * The workstation has been approved to use senhasegura.go ;

-   * The workstation requested authorization to use senhasegura.go ;