# System parameters 

In this document, you’ll find detailed information about ’s  which allows the administrator of the  instance to configure actions that will be considered suspicious and may trigger a request for user identity verification.

## Requirements

- Administrator permission.

## Paths to access

1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select .

___

1. On senhasegura, in the upper-left corner, click the , represented by the nine squares, and select .
2. In the side menu, select .

---

## General settings

|                               |                                                                                                       |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| * | Field to define the score threshold at which a behavior will be considered suspicious.                             |
| *      | Field to define the initial score for the user in the system. 0 means that a new user is considered highly suspicious, and 10 would indicate that new users are considered very trustworthy. |

## Session settings section

In this section, the administrator defines the session-related settings.

|                               |                                                                                                       |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| *         | Field to define the number of days that will be considered to determine the user's standard behavior related to sessions. |
| *                 | Field to define, in percentage, the deviation rate from the standard behavior that will be considered suspicious.    |
| * | Field to define whether high-risk sessions will be sent to the audit queue. The possible options are  and . |

:::(warning) (Attention)
You must select at least one auditor to send sessions for auditing. You can configure the default auditors in .
:::

## Checking weight

In this section, the administrator defines a score for each session in which some unusual action was performed. The results of these score sums can be accessed in the reports under . The  column of each report shows the total session score according to the values defined in the fields below.

|                               |                                                                                                       |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| *              | Field to define the score for when the user accesses an unusual target device during the session. The maximum allowed score for this item is 3. |
| *              | Field to define the score for when the user starts the session from an unusual origin. The maximum allowed score for this item is 3. |
| *          | Field to define the score for when the user starts the session with an unusual credential. The maximum allowed score for this item is 3. |
| *                | Field to define the score for when the user starts the session at an unusual time. The maximum allowed score for this item is 3. |
| *            | Field to define the score for when the user performs a session with an unusual duration. The maximum allowed score for this item is 3. |

## Password view settings section

In this section, the administrator defines the settings related to password visibility.

|                               |                                                                                                       |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| *         | Field to define the number of days that will be considered to determine the user's standard behavior related to sessions. |
| *                | Field to define, in percentage, the deviation rate from the standard behavior that will be considered suspicious.    |

### Checking weight

In this section, the administrator defines that each action related to unusual password visibility has a set weight. The results of these score sums can be accessed in the reports under . The  column of each report shows the total session score according to the values defined in the fields below.

|                               |                                                                                                       |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| *                | Field to define the score for when the user views passwords from an unusual origin. The maximum allowed score for this item is 3. |
| *            | Field to define the score for when the user views passwords from an unusual credential. The maximum allowed score for this item is 3. |
| *                  | Field to define the score for when the user views passwords at an unusual time. The maximum allowed score for this item is 3. |
| *            | Field to define the score for when the user changes a password unexpectedly. The maximum allowed score for this item is 3. |

:::(info) (Info)
Administrators are notified whenever a user attempts to manually change the password of a credential that was recently rotated successfully by senhasegura.
:::


## Actions for sessions with unusual length

In this section, the administrator defines the consequences for sessions with unusual duration.

|                               |                                                                                                       |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| *                     | Field to define the block for sessions with unusual duration. The available options are  and .           |
| *            | Field to define the block for both sessions with unusual duration and the user who conducted the session. The available options are  and . |

## Actions for sessions held at unusual times

In this section, the administrator defines the consequences for sessions conducted at unusual times.

|                               |                                                                                                       |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| *                     | Field to define the block for sessions at unusual times. The available options are  and .               |
| *            | Field to define the block for sessions at unusual times and the user who conducted the session. The available options are  and . |

## Actions for sessions of unusual origins

In this section, the administrator defines the consequences for sessions conducted from unusual devices.

|                               |                                                                                                       |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
|                      | Field to define the block for sessions from unusual origins. The available options are  and .           |
|             | Field to define the block for sessions from unusual origins and the user who conducted the session. The available options are  and . |

## Actions for sessions to unusual destinations

In this section, the administrator defines the consequences for sessions conducted with unusual target devices.

|                               |                                                                                                       |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| *                     | Field to define the block for sessions to unusual destinations. The available options are  and .         |
| *            | Field to define the block for sessions to unusual destinations and the user who conducted the session. The available options are  and . |

## Actions for sessions with unusual credentials

In this section, the administrator defines the consequences for sessions conducted with unusual credentials.

|                               |                                                                                                       |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
|                      | Field to define the block for sessions with unusual credentials. The available options are  and .       |
|             | Field to define the block for sessions with unusual credentials and the user who conducted the session. The available options are  and . |

## Continuous identification settings

In this section, the administrator configures the scoring of triggers that will prompt a reauthentication request for the user in .

:::(info) (Info)
By default, this feature is disabled. To activate it, set the parameters to a value other than zero.
:::

|                               |                                                                                                       |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| *                       | Field to define the value of the reduction in the user’s rating that will trigger a reauthentication request.        |
| *                | Field to define the number of high-risk sessions—those in which audited commands were executed. When this number is reached, a user reauthentication request will be triggered. |
| *                  | Field to define the number of audited commands configured as Block or Interrupt execution that, when reached, will trigger a user reauthentication request. |
| * | Field to define the number of attempts to conduct a session at a prohibited time that, when reached, will trigger a user reauthentication request. |
| * | Field to define the number of attempts to view passwords at a prohibited time that, when reached, will trigger a user reauthentication request. |

:::(info) (Info)
* The items with an asterisk are mandatory.  


* Settings related to  are defined in the  configuration and can be viewed and/or edited under .


* Settings related to  and  are defined during the creation or editing of audited commands and can be viewed in the report available under .


* Settings related to  and  are defined during the creation or editing of access groups and can be viewed in the report available under .