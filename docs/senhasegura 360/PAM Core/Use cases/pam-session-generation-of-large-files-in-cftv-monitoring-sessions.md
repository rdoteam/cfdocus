# Generation of large files in CFTV monitoring sessions 

## Use case: Avoid generating large files in CFTV monitoring sessions

In this document, you’ll find the necessary recommendations to create a strategy for ensuring that files generated in CFTV monitoring sessions don’t exceed the size limit, thus filling .
Therefore, in these cases we recommend that sessions accessed only to monitor the cameras are not recorded.

### Solution
To prevent CFTV monitoring files from cluttering the  directory, create segregated credentials without session recording for users who only monitor cameras, while recording only administrative sessions.

### Requirement

* senhasegura user.

---
Follow the steps below to create segregation correctly:

#### Step 1: Credential with CFTV device

* Create the credentials that will be associated with the CFTV device and will be used by senhasegura users.
* Create a credential that will be associated with the CFTV device but will be used for administrative purposes.

To learn how to create a credential, access the  in senhasegura document.

#### Step 2: Create an access group to access and view CFTV device and credentials

* Create an access group with permission to access and view the device, containing all the credentials created in step 1.

To learn how to create Access Groups, access the  document.

#### Step 3: Segregate by user credentials that only monitor camera images

* With the credentials created and inserted into the access group, create a segregated parameter for credentials and include all credentials that will only be used for monitoring.
* In this parameter, disable the  option.

To learn how to create a segregated parameter for credentials, access the  document.

Implementing this practice is essential so that disk space isn’t overloaded with recording sessions that are exclusively for monitoring the image of cameras that are already recorded by other means. Recording only the administrative session that will have the most comprehensive privileges and permissions.