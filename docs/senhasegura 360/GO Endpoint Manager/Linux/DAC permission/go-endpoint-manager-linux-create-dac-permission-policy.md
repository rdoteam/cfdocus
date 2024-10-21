# How to create an access policy for DAC permission 

This article will guide you through a step-by-step process on how to create a DAC permission type at the Go Linux.

## Requirements

* Be an admin user.

* * *

## Create the permission

1. At the  platform, in the upper left corner, click on the  and select 
2. Select 
3. In the upper right corner, click on the  icon, represented by the three vertical dots  and select 
4. This action will open a pop-up windows called 

#### In the Main tab fill in the information:

1.  the new rule identification name.
2.  check 
3.  select 
4.  type this command line:


For example: 

:::(Info) (Info)
The mask execution values are listed in the  document.
:::

:::(Warning) (Caution)
If the admin doesn’t want to give access to a specific group or user, it must use the exclamation point ! before the equal sign. For example: . This way, the rule will be applied to all the users, except the group or user specified.
:::

:::(Error) (Important)
Typing incorrectly or leaving the field empty leads to the total unusable of the device. Follow  to complete this field correctly.
:::

5.  the field is required and enabled by default. Leave it enabled if you want to audit the policy actions.
6.  check it to allow only the registered rules and deny the binary not included.
7.  select whether the registered policy allows or denies access to the user or group.
8.  fill in a rule in the format of policies in CaitSith. For example:   or 
:::(Warning) (Caution)
The first rule added takes precedence over rules added later. If you create a rule that allows the execution of the binary and then add another rule to block the execution of the same binary, the access policy will only consider the first rule, leaving the second rule  unconsidered.
:::

9. Click  for each rule.
:::(Info) (Info)
The created rules will be listed on the list, below the fields, to remove any rule click on the trash bin icon, from the selected rule
:::
10. Click 


The platform will display a confirmation notice: “Success. Data saved successfully!” The permission will be display at the report at  the Access Policies homepage.


* * *

Do you still have questions? Reach out to the 