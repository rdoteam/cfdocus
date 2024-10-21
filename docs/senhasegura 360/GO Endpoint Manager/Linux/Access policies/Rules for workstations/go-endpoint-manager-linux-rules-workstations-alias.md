# Register alias policies 

When creating a , the  tab allows the creation of aliases (alternative names for commands) through GO Endpoint Manager for Linux. You can create shortcuts to manage the most used commands, streamlining the use of the terminal.

1. Access the senhasegura platform.
2. Navigate to .
3. Click  and select the option .
4. At the  form, in the  tab, complete the fields:
*  define an easy-to-identify name. 
*  if enabled, the policy will be applied across devices.
*  select a policy type.
*  set to .
*  fill with handler="/usr/bin/secpack-trec-triggered"
5. Click . 
6. Go to the  tab.
:::(Warning) (Caution)
Be careful when filling out the alias for commands that may affect the use of the system.
:::
7. Complete the fields:
*  fill in the full path of the command you want to use.
*  fill in the full path of the command you want to replace.

8. Go to the  tab.
9. Select .
10. Choose the workstations you want to add to the segregation.
11. Click .
12. Click .

:::(Info) (Info)
In the Linux terminal, use  to find out the path of the binary.
:::

* * *
## Check created aliases
1. Access the Linux terminal.
2. Enter the command: 
`shell
cat /etc/senhasegura/aliases
`