# How to change passwords using Tk Expect for Oracle databases 

Note that when dealing with database-type devices, specifically Oracle databases, with a user with the  character in their username, some particularities must be considered to perform automatic password changes using the Tk Expect plugin.

To perform the automatic change, you must ensure that you have a service credential registered on the same device and in the same database as the primary credential, the one that contains the  dollar sign character) character in the username and the one that doesn't contain the  character in the username.

So, to perform automatic password changes in Oracle databases using the Tk Expect execution template for users with the $ in their username, follow the steps below:

## Credential and template registration

1. On the  form, on the  tab, ensure that the  field is filled in with the name of the database to which the user is linked. For example: .
2. Still on the  form, on the  tab, in the  settings section, ensure that the following parameters are filled in:
   1. Select the  checkbox to activate the functionality.
   2. In the  drop-down menu, select 
   3. In the  drop-down menu, select the .
3. On the  form, on the  tab, in the  section, you must indicate, in the  drop-down menu, a credential that contains a user who doesn't have the  character in their username and who is part of the same database as the user of the credential being edited.

:::(info) (Info)
Você pode encontrar o template no .
:::

## Usage examples
### Parameters for the two credentials
### Main credential

* Username with  character: .
* Device:  (database).
* Additional information: .

### Service credential

* Username without the  character: .
* Device:  (database).
  * It must be the same device as the primary credential.
* Additional information: .

### In the main credential information form

Access:  and fill in the following fields:

* Enable automatic exchange: .
* Exchange plugin: .
* Exchange template: .

Under , fill in the following fields:

1. Choose the service credential () in the  drop-down menu.
2. To perform the password change execution, on the senhasegura platform, access , select your credential, and click  in the bottom right-hand corner. Confirm by clicking  in the confirmation modal and wait for your request to be executed.
3. To ensure that everything has been executed correctly, you can view the new password for your credential. To do this, access , click on the key icon in the  column and select the  option in the  form to compare with the previous password.

---

Do you still have questions? Reach out to the .

**