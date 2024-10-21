# Use cases 

## Geral
### Case 1: This policy will block anyone, except the "user", from running the command "top"

1. Access the senhasegura platform.
2. Navigate to 
3. In the upper right corner, click on  and choose 
4. At the  form, in the  tab, complete the fields:
    *  choose an easily identifiable name.
    *  if you select the option , the policy is considered on target devices.
    *  select the option 
    *  fill with path="/usr/bin/top".
    *  mark  if you want to audit the execution of the registered rules.
    *  check this option so that no Linux workstation user can execute something that is not allowed by the access policy.
    *  set to 
    *   fill with task.uid=”user”
5. Click 
6. Click 


### Case 2:  Command 'ls' can only be executed through sudo

1. Access the senhasegura platform.
2. Navigate to 
3. In the upper right corner, click on  and choose 
4. At the  form, in the  tab, complete the fields:
    *  choose an easily identifiable name.
    *  if you select the option , the policy is considered on target devices.
    *  select the option 
    *  fill with exec="/usr/bin/ls"
    *  mark  if you want to audit the execution of the registered rules.
    *  check this option so that no Linux workstation user can execute something that is not allowed by the access policy.
    *  set to Allow.
    *  fill with task.exe=”/usr/bin/sudo”
5. Click 
6. Click 


### Case 3: Prevent user “john” from running the df command and allow all other users from the same group

This policy will allow any user but  from the  to run the  command to view information about available space on system partitions.

1. Access the senhasegura platform.
2. Navigate to 
3. In the upper right corner, click on  and choose 
4. At the  form, in the  tab, complete the fields:
    *  choose an easily identifiable name.
    *  if you select the option Yes, the policy is considered on target devices.
    *  select the option 
    *  fill with path="/usr/bin/df"
    *  mark  if you want to audit the execution of the registered rules.
    *  leave this option unchecked to ensure that all Linux workstation users are allowed to run everything except those blocked by the rule.
    *  set to 
    *  fill with task.uid=”john”  
5. Click 
    *  set to Allow.
    *  fill with task.gid=”group”
6. Click 
7. Click 


### Case 4: Prevent user “john” from reading the file and allow all other users in the same group

This policy will allow any user from the  but , who’s also part of the group, to read the file.

1. Access the senhasegura platform.
2. Navigate to 
3. In the upper right corner, click on  and choose 
4. At the  form, in the  tab, complete the fields:
    *  choose an easily identifiable name.
    *  if you select the option , the policy is considered on target devices.
    *  select the option 
    *  fill with path="/tmp/file"
    *  mark  if you want to audit the execution of the registered rules.
    *  leave this option unchecked to ensure that all Linux workstation users are allowed to run everything except those blocked by the rule.
    *  set to 
    *  fill with task.uid=”john”  
5. Click 
    *  set to 
    *  fill with task.gid=”group”
6. Click 
7. Click 