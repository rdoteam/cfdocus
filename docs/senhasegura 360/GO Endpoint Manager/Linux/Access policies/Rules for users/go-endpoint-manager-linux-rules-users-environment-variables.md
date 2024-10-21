# Register environment variables policies 

1. Access the senhasegura platform.
2. Navigate to 
3. Click  and select the option .
4. At the  form, in the  tab, complete the fields:
    *  define an easy-to-identify name. 
    *  if enabled, the policy will be applied across devices.
    *  select 
    *  set to 
    *  fill with handler="/usr/bin/secpack-trec-triggered"
5. Click 
6. Go to the  tab. Environment variables can be used dynamically for programs or processes running on the system.
7. Fill in the fields:
    *  add the name of the variable.
    *  add the value of the variable.
8. Go to the  tab.
9. Select 
10. Choose the users you want to add to the segregation.
11. Click 
12. Click 


:::(Warning) (Caution)
If there is already an environment variable registered, it will be replaced by the new registered value.
:::

* * *

## Check environment variables created

1. Access the Linux terminal.
2. Enter the command: 

`shell
cat /etc/senhasegura/environment_rules
`

:::(Info) (Info)
Environment variables only work in segregation by users.
:::