# Add access group 

Creating an access group will help with permission settings and user approval flow.
Create Access Group
To create an access group, go to the menu: Cloud IAM ➔ Access control ➔ Access Groups.

In the page actions, click on the New group option;
In the form, include the name of the group and whether it will be active or not;
On the Settings tab, select the permissions:
Whether members of this group can create and edit other users in the Providers Cloud IAM, select which
                user types can be created and edited by group members.
Whether they can exclude other users, select which user types can be excluded by group members.
You can create and edit accounts.
You can delete accounts.
You can create credentials.
You can delete credentials.


Select a Template for user creation, i.e., if this group has permission to create users, it
        must make them follow the pattern established in the chosen template.

Info
See
                the section about Templates to learn
                more about it.



Define whether this group will require approval to perform its activities. To do this, check or uncheck the
        boxes:
Requires justification: To carry out their activities, members must describe why they
                want to do them.
Requires approval: Needs the previous box to be checked
                and will cause members to carry out their activities after a request has been sent and approved by
                another user.
Please select how many approvals required for the user to
                        perform their requested activity.
Select the number of reprovals required to cancel the request, i.e., so the
                        user is not allowed to perform the activity.
Select whether there will be approval in levels, i.e., after a lower member's
                        approval, a higher member can approve or disapprove the request.
Define whether it will be mandatory to specify the governance code when
                        justifying.
And if always, managers will be included in the group's list of approvers.




On the Criteria tab, define what entities the group members will be able to interact with. The
        criteria could be:
Name of the entity you want the members of the group to see.
A mask containing the name of the entity, i.e., senhasegura*.




Info

You can enter an * (asterisk) if you want the group members to have
            unrestricted access.


In Users View:
Usernames (comma-separated) must be filled in with a tag following this example:[#USERNAME#]
In Service Accounts View
Usernames (comma-separated) must be filled in with a tag following this example:[#USERNAME#]

Info

You can enter an * (asterisk) if you want group members to have unlimited access.



On the Users tab, enter the access group members;
On the Approvers tab, enter the users who will approve requests from members of the access
        group;
On the Access Restriction tab, determine the days and times when users who are members of this
        access group will be able to view passwords or conduct remote sessions. You can also set dates for a more
        restricted access period:
Days of access permission: Days of the week when users who are members of the group
                will be able to carry out activities.
Access permission hours: Times when group members will be able to perform activities.
            
Access permission period: Determined period in which users who are members of the group
                will be able to perform the activities.


 Finally, click on Save.