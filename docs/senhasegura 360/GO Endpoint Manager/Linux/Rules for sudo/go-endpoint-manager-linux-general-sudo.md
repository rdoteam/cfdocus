# Register general rule 

1. Access the senhasegura platform.
2. Navigate to 
3. Click  and select the option 
4. At the  form, in the  tab, complete the fields:
    *  define a name to identify the rule.
    *  set the status of the rule.
    *  fill in with the  command's path that you can run as sudo and elevate privileges. To find the command's path in the Linux terminal, run 
    *  if you check , the user won’t be prompted for a password to run the command as sudo. If you check , the user will be asked for a password to run it.
    *  add a brief description about this rule.
5. Click 
* * *
## Validate sudo rules on the target device

1. Access the Linux terminal.
2. Enter the command to verify:
`shell
cat /etc/sudoers.d/senhasegura
`