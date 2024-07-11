## Metadata_Start 
## code: en
## title: System parameters 
## slug: go-endpoint-manager-windows-system-parameters-1 
## seoTitle: System parameters 
## description:  
## contentType: Markdown 
## Metadata_End
1. Access the senhasegura platform.
2. Go to **GO Endpoint Manager➔Settings➔Parameters➔go Windows.**

:::(info) (Info)
Some PEDM configurations, such as network adapters, require the `Enable applications?` parameter activated. In these cases, when executing configurations that require the application module to be activated, the client returns the message "The elevation parameter must be enabled to run this application".
:::

### Modules

* **Enable credentials?:** choose **Yes** or **No** to decide whether to enable credentials.
* **Enable applications?:** choose **Yes** or **No** to decide whether to enable applications.
* **Enable uninstall?:** choose **Yes** or **No** to decide if it will be possible to uninstall GO Endpoint Manager.
* **Enable network share?:** choose **Yes** or **No** to decide whether network sharing will be available.
* **Enable network interface?:** choose **Yes** or **No** to decide if the network interface will be available.
* **Enable control panel?:** choose **Yes** or **No** to decide whether the control panel will be available.

### Installation settings

* **Allow self-approval of workstation link?:** choose **Yes** or **No** to decide whether to automatically approve a workstation upon receiving a valid GO Endpoint Manager license.
* **Allow self-approval of user's first link?:** choose **Yes** or **No** to decide whether the first user should be automatically approved if they use GO Endpoint Manager on a previously approved machine.
* **Allow self-approval of all other links?:** choose **Yes** or **No** to decide whether all other users who come to use GO Endpoint Manager on a previously approved machine will also be automatically approved.
* **Enable client software automatic update?:** choose **Yes** or **No** to decide if GO Endpoint Manager should update automatically if a new version is available on the server.
* **Enable user expiration?:** choose **Yes** or **No** to decide whether it is mandatory to set a user authorization expiration date.
* **Days interval to expire users:** will be the number of days the user will expire after approval. This value will determine the deadline on the user approval form.

### General settings

* **Enable offline use?:** choose **Yes** or **No** to decide whether to use the GO Endpoint Manager application without an internet connection.
* **Enable UAC integration?:** choose **Yes** or **No** to use senhasegura to mediate in the UAC moments, allowing the user to enter a credential to continue the process.
* **Enable control of applications integrated into the operating system?:** choose **Yes** or **No** to decide. If active, GO Endpoint Manager will activate the driver that monitors Windows applications and intervene if the application is outside the allowlist or the denylist. Only user session applications will be evaluated.
* **Enable recording session?:** choose **Yes** or **No** to decide whether applications with elevated privileges should be recorded on video while running.
* **Enable automatic certificate inactivation by intrusion attempt?:** choose **Yes** or **No** to decide whether the single communication certificate between the Workstation and server will be disabled if the server detects an intrusion in GO Endpoint Manager.
* **Enable application malware and reputation scan?:** choose Yes or No to decide whether you want to enable scanning for malware and application status.
* **Enable vault?:** choose **Yes** or **No** to decide whether GO Endpoint Manager Offline is allowed. We will discuss this functionality in more detail later.
* **Minutes interval to request credentials:** while the Workstation is online, a secure cache of credential information is updated within this time interval.

:::(Info) (Info)
Use this parameter with care. It can overload the system. The shorter the time, the more resources will be used.
:::

* **Virus total API token:** fill in your total virus API to perform analysis later.
* **Enable DLL analysis?:** choose Yes or No to decide whether to allow the analysis on an application's DLLs.
* **New trusted directory:** only add directories you trust.
    * **Directory path:** fill in the path to the location of the directory on the operating system.
* **New ignore directory on scan:** add the path you want to be ignored on the scan.
    * **Directory path:** fill in the path to the location of the directory on the operating system.

:::(Info) (Info)
This field accepts regular expressions.
:::

### Workflow settings
#### Elevation settings

* **Users can elevate applications:** check this box if they want to be allowed to lift applications.
* **Require reason to elevate applications:** check if it will be necessary for the user to fill in a justification to increase privileges in the application.
* **Require approval to elevate applications:** check if it will be necessary for the user to request authorization to elevate privileges in the application.
    * **Approvals required:** if you need the approval to elevate applications, define how many approvals will be required.
    * **Disapprovals required to cancel:** if you require disapproval to raise applications, define how many disapprovals will be needed.
* **Allow emergency access:** check if you want to allow emergency access to be performed.
* **Approval in levels:** check if you want the approvals in levels.

### Access request settings
* **Governance ID required when justifying?:** choose **Yes** or **No** to decide whether to require the user to fill in a code in the justifying process.
* **Always add user manager to approvers?:** choose **Yes** or **No** to decide whether you want the user manager always to be added to the request approvers.

### Network access

* **Block access to network?:** choose **Yes** or **No** to decide whether to block network access.
* **Block user:** choose **Yes** or **No** to decide whether to block users from accessing the network.
* **Occurrences (minimum):** select from the range 1 to 10.

### JIT/Elevation methods
* **Enable JIT access?:** choose Yes or No to decide whether you want to provide access through JIT.
* **Block elevation of privilege?:** choose **Yes** or **No** to decide whether to block users from privilege elevation.
* **Block user:** choose **Yes** or **No** to decide whether users can have their privilege elevation power blocked.
* **Occurrences (minimum):** select from the range of 1 to 10.

### Authentication
* **Enable multifactor authentication at login?:** **Yes/No.**
* **Enable Single Sign-On?:** choose **Yes** or **No** to decide if GO Endpoint Manager can start an authenticated senhasegura web session in the user's default browser without the user having to enter a password. If the user is required to have an MFA token, it will be requested on the web system.

### Report

* **Enable verification of local privileged credentials?:** define if the verification will be active **Yes/No.**

#### Days allowed for execution
**Choose which days of the week the execution is allowed:**

* All days
* Sunday
* Second
* Third
* Fourth
* Fifth
* Friday
* Saturday

#### Periods allowed for execution
**Choose at what times the execution is allowed:**

* all times
* 08:00 - 12:00
* 12:00 - 16:00
* 16:00 - 20:00
* 20:00 - 24:00
* 24:00 - 04:00
* 04:00 - 08:00

#### The minimum interval between runs

* **The interval between executions (in hours):** defines the minimum interval between executions.

### Messages

* **Execution message:** fill in the statement that should appear to the user when an application is running on GO Endpoint Manager.
* **Execution block message: fill** in the statement that should appear to the user when execution is blocked in GO Endpoint Manager.