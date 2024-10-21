# Application access lists 

In this document, you will learn how to configure application access lists on PEDM GO Windows clients, both for general segregation (for all workstations) and for specific workstations.

## How to configure application access lists for general segregation
 
1. In senhasegura, access the  page using the path:  >  >  >  > .
2. Click the  button, represented by the three vertical dots.
3. Select the option .
4. On the  screen, select .
5. In the  window, fill in the fields:
	* *: define a name for the list.
	* *: choose between  to allow or  to block.
	* *: choose between  or .
	* *: choose between  or .
6. In the  tab, fill in the fields:
	* *: If parent process monitoring is , all child processes created by it will be checked according to the access list permissions. If , all processes will be evaluated normally by the access list.
	* *: If child process monitoring is , the access list will be applied to all processes originating from it. If , all processes will be evaluated normally by the access list.
	* In  choose one or more:
    	* : the certificate in the application has a fixed value called , so the certificate that has this rule active will be validated.
    	* : information in GUID format present in all applications.
    	* : is the application path. To be validated with the rule, the registered path must be identical to the file.
    	* ": is unique information that each file has. With each change made to the file, a new hash is generated.

:::(Warning) (Careful)
If you have a rule that uses the  criterion, only this criterion will be considered. The  and  criteria will be ignored. If the access list contains multiple file hash criteria, they are evaluated with an  condition.
:::

:::(Info) (Info)
Starting with 3.32, you will need to run this command  in PowerShell to get the hash of the file to be configured in the criteria. Replace the path after  with the file path. Depending on your environment configuration, you will need administrator access to perform this operation.
:::

* : informs the file version.
* : this information refers to the origin of the file, when it is downloaded from the internet, it will be as Internet Zone, generally all downloaded files are classified like this, as well as the executables that are installed, for example, has this information as Local Zone.
* : is the name of the program, both the file name and the program name are evaluated. We do not recommend registering an access policy based solely on this criterion.

:::(Warning) (Careful)
Registering an access policy using only the  criteria may create security risks. We suggest adding more than one criteria, such as , ,  or any other.
:::

* : version specification.
* : refers to the URL from where the file was downloaded. The file can only be executed if the source URL is correct and validated.
* : this information is also a GUID for each program, and can be found in the Windows registry.
* : name of the manufacturer.
* : This is about applications downloaded from the Microsoft Store. It is validated according to the file directory: Program Files (and x86 too), and in the hidden Windows Apps folder.

:::(Info) (Info)
DLLs work like applications, and can be filtered by  and 
:::

* : fill in according to the chosen criteria.

:::(Warning) (Careful)
When filling the list with more than one criteria, the logical operator will be . That is, the rule will only be executed if both conditions are true. Example: .

When filling the list with more than one criteria and different rules, the logical operator of the criteria will be  and the logical operator of the rules will be . Example: .
:::

:::(Info) (Info)
Items with an asterisk* are mandatory.
:::

7. Click :
	* If you choose , click  and you will receive a confirmation message.
	* If you choose , continue filling in the fields in the  tab.
8. Check the options for :
	* .
	* .
	* .
	* .
	* : to work, approvers must be registered in levels in the .
9. If you checked , set the number of times for each specific action:
	* : so that the user can elevate the privilege and perform the action.
	* : to cancel privilege elevation.
10. Answer  or  to the :
	* 
	* 
11. Click .

--------------------------------------------------------------------------------------------------

## How to configure application access lists for specific workstations

1. In senhasegura, access the  page using the path:  >  >  >  > .
2. Click the  button, represented by the three vertical dots.
3. Select the  option.
4. On the  screen, select .
5. In the  window, fill in the fields:
	* *: define a name for the list.
	* *: choose between  to allow or  to block.
	* *: choose between  or .
	* *: choose between  or .
6. In the  tab, fill in the fields:
	* *: If parent process monitoring is , all child processes created by it will be checked according to the access list permissions. If , all processes will be evaluated normally by the access list.
	* *: If child process monitoring is , the access list will be applied to all processes originating from it. If , all processes will be evaluated normally by the access list.
	* In  choose one or more:
    	* : the certificate in the application has a fixed value called , so the certificate that has this rule active will be validated.
    	* : information in GUID format present in all applications.
    	* : is the application path. To be validated with the rule, the registered path must be identical to the file.
    	* ": is unique information that each file has. With each change made to the file, a new hash is generated.
    	
:::(Warning) (Careful)
If you have a rule that uses the  criterion, only this criterion will be considered. The  and  criteria will be ignored. If the access list contains multiple file hash criteria, they are evaluated with an  condition.
:::
        
:::(Info) (Info)
Starting with 3.32, you will need to run this command  in PowerShell to get the hash of the file to be configured in the criteria. Change the path after  with the file path. Depending on your environment configuration, you will need administrator access to perform this operation.
:::

    	* : informs the file version.
    	* : this information refers to the origin of the file, when it is downloaded from the internet, it will be as Internet Zone, generally all downloaded files are classified like this, as well as the executables that are installed, for example , has this information as Local Zone.
    	* : is the name of the program, both the file name and the program name are evaluated. We do not recommend registering an access policy based solely on this criterion.

:::(Warning) (Careful)
Registering an access policy using only the  criteria may create security risks. We suggest adding more than one criteria, such as , ,  or any other.
:::

    	* : version specification.
    	* : refers to the URL from where the file was downloaded. The file can only be executed if the source URL is correct and validated.
    	* : this information is also a GUID for each program, and can be found in the Windows registry.
    	* : name of the manufacturer.
    	* : This is about applications downloaded from the Microsoft Store. It is validated according to the file directory: Program Files (and x86 too), and in the hidden Windows Apps folder.
    	
:::(Info) (Info)
DLLs work like applications, and can be filtered by  and 
:::
 * : fill in according to the chosen criteria.

:::(Warning) (Careful)
When filling the list with more than one criteria, the logical operator will be . That is, the rule will only be executed if both conditions are true. Example: .

When filling the list with more than one criteria and different rules, the logical operator of the criteria will be  and the logical operator of the rules will be . Example: .
:::

:::(Info) (Info)
Items with an asterisk* are mandatory.
:::

7. Click .
8. In the  tab, click the plus button (+) and choose a workstation according to the criteria:
	* : the identifying number in the workstation list.
	* : unique workstation identifier.
	* : machine name.
	* : IP address of the workstation.
9. Click .
10. Still in the  tab, you will see the information:
	* : user who added the workstation.
	* : date the workstation was added.
11. Click .
	* If you choose , click  and you will receive a confirmation message.
	* If you choose , continue filling in the fields in the  tab.
12. Check the options for :
	* .
	* .
	* .
	* .
	* : to work, approvers must be registered in levels in the .
13. If you checked , set the number of times for each specific action:
	* : so that the user can elevate the privilege and perform the action.
	* : to cancel privilege elevation.
14. Answer  or  to the :
	* 
	* 
15. Click .

:::(Info) (Info)
The rules will apply to both applications launched on GO Endpoint Manager agents and applications launched outside of GO Endpoint Manager. Segregation rule values ​​can be filled with regular expressions.
:::

* * *

### Read more

* 
* 
* 