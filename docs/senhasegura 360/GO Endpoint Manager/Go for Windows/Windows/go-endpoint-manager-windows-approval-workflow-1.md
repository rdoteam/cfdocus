# Approval workflow 

Configure approver listsAccess the senhasegura platform.Navigate to GO Endpoint Manager➔Settings➔Approvers.In the upper right corner, select the icon (⁝) Show actions and after, +New.Select +Approvers.In the list of users, choose which users will be approvers.Select Add.At Level, select from levels 1 to 3.Save.InfoThe global parameter will be the default approval workflow for all applications not configured in an access list.Create access lists with approval in levelsCreate an access list for any category (GO Endpoint Manager➔Policies➔Windows➔Access lists).At Workflow, check the option Require approval to elevate applications.After, check Approval in levels.Set the number of Approvals required.Set the number of Disapprovals required to cancel.CautionThe number of approvals required per level does not equal the number of approval levels. You need to define how many approvers at each level will be required to approve the request.Approvals required, for example:Required ApprovalsApproval levelNumber of approvers per levelTotal number of approvers4144424843412The Access control settings are shared with PAM Core. If you want to allow the users themselves to approve their request, navigate to GO Endpoint Manager➔Settings➔Parameters➔Access Control, and check the option Allow approvers to approve their own request?*. Don’t forget to include the users as approvers inside GO too.Approve access requestsAccess the senhasegura platform.Go to GO Endpoint Manager➔Reports➔My Approvals.Click Action.Choose whether you want to approve the request.Request access to an app on your GOAccess the desktop of the user's workstationLaunch the Core app.Choose an application to elevate the privilege.Right-click and click Execute.Fill in the Justification.Click OK.CautionApproval is performed per workstation and not per user. Only one user needs to request approval to elevate the application, and all users on that same workstation can run the application when approved.Track access requestsAccess the senhasegura platform.Go to GO Endpoint Manager➔Reports➔My Requests.Click Action to view the request.Viewing Approval Workflow Records and JustificationsTo view the approval workflow records related to executing applications on the GO agent:Access the senhasegura platform.Navigate to GO Endpoint Manager > Reports > Events.Click on the magnifying glass icon under the Action column to view event details.Please note that events generated from the execution of an application are classified as Execution Justification Events.To view the approval workflow records for using senhasegura PAM credentials on the GO agent:Access the senhasegura platform.Navigate to PAM Core > Access Control > Requests.Click on the magnifying glass icon under the Action column to view event details.