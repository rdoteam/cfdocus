# Users from the Active Directory Synchronization group are not receiving any permissions 



After upgrading from an older version to version 3.28, users synchronized from Active Directory do not have permission to view passwords or start sessions that are defined by any access group.



The "AD/LDAP group synchronization" process now requires a "User Group" entity instead of "Access Groups". This "User Group" entity will contain the "Access Groups" to which the synchronized users will belong.



To solve this issue, follow these steps:

1. Create a "User Group" entity. To learn how to create one, click .
2. Go to .
3. Find the group you want to fix.
4. Under the Action column, click .
5. In the  field, select the "User Group" entity that you created in step 1.
6. Click .

Now, all users inside the "User Group" will receive the permissions defined in that group.