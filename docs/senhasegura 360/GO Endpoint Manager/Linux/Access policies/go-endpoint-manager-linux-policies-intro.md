# Introduction Linux Access policies 

OverviewThe main benefit of creating access policies is to ensure that when registering a rule on the senhasegura platform, it will be applied in the following executions:ShellSoftwareScriptParent and child process controlsThis means that even if the user tries to use a shell escape, circumvent, or abuse privileges, the user won't succeed. This module allows the system administrator to:Create policiesScan and control files and foldersSet permissionsCreate an aliasRegister new environment variablesControl directories and filesPerform other actions, all based on access policiesRegister policiesPolicies are segregated into three levels:General: policies that apply to all devices where GO Endpoint Manager for Linux is enabled and approved.Workstation: policies that apply to specific devices.Users: policies that apply only to specific users on devices.Kernel-level policies control Linux access control lists (ACLs). This feature essentially restricts or allows access to the kernel-level. ACLs make it possible for the system administrator to apply a more specific set of permissions to users or groups and define which operations are allowed.The order in which policies are added creates a priority. In the image example, the first registered rule allows the uid "user", and the second denies it. So if you set the allow rule first, even if you block the user in the second rule, the user still has access due to the order.Access policy ruleImportantProhibitive policies can cause great damage to the device, even leading to the complete blocking of interactivity.Find binary pathCautionWhen creating rules, be sure to use the absolute path.Access the Linux terminal.Use the which [command] to find out the binary path.Example:user@Workstation:~$ which ls
/usr/bin/ls
Find out if it's a symlinkEnsure it's not a symbolic link via the readlink [command path] or ls -la [command path].Example with readlink:Access the Linux terminal.Type readlink [path to command]. It's not a symbolic link if it doesn't return anything, as in the example.user@Workstation:~$ readlink /usr/bin/ls 	
In this other example, it returned the symlink path from the vim command:user@Workstation:~$ readlink /usr/bin/vim                                                
 /etc/alternatives/vim
Example with ls -la:Access the Linux terminal.Type ls -la [path to command]. It's not a symbolic link if it doesn't return anything, as in the example.user@Workstation:~$ ls -la /usr/bin/ls
-rwxr-xr-x 1 root root 147176 Oct 23 2021 /usr/bin/ls
In this other example, it returned the symlink path from the vim command:user@Workstation:~$ ls -la /usr/bin/vim
lrwxrwxrwx 1 root root 21 out 22 21:03 /usr/bin/vim -> /etc/alternatives/vim
These rules also apply to commands executed in scripts. GO Endpoint Manager for Linux has a security module that enforces policies in any scenario and doesn’t distinguish between user or script executions.