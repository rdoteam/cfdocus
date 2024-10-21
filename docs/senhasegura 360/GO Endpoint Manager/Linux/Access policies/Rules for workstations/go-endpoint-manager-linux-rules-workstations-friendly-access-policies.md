# Register user-friendly access policies 

1. Access the senhasegura platform.
2. Navigate to 
3. Click  and select the option 
4. At the  form, in the  tab, complete the fields:
    *  define an easy-to-identify name. 
    *  if enabled, the policy will be applied across devices.
    *  select a policy type.
5. In the  tab, complete the fields:
    *  the field is required and is enabled by default. It allows auditing of actions performed. 
    *  mark  to have session recordings of logged binaries. The start of the session is linked to the execution of the binary only after the execution is over.
    *  if this option is checked, no Linux workstation user will be able to execute something not allowed by the access policy. If unchecked, all Linux workstation users will be allowed to run everything except what the rule blocks.
    *  the location of the program on the file system. Find the path of the program using .
    *  check if this added path is a link to a file or directory. Find out if it's a symbolic link by typing . 
6. Click 
    *  choose between allowing or blocking, depending on the policy being created.
    *  add who this rule is for, a user or group.
    *  fill in the name of the user or group according to the type chosen in the previous field. It must be the user's primary group.
7. Click 
8. Go to the  tab.
9. Select 
10. Choose the workstations you want to add to the segregation.
11. Click 
12. Click 

* * *
## Policies added to the device
To validate that the policy has been added to the device:

1. Access the Linux terminal.
2. Enter the command:
`shell
cat /sys/kernel/security/caitsith/policy
`