## Metadata_Start 
## code: en
## title: Actions triggered by executing audited commands 
## slug: pam-session-actions-triggered-by-executing-audited-commands 
## seoTitle: Actions triggered by executing audited commands 
## description:  
## contentType: Markdown 
## Metadata_End
When a command that a user wants to execute is subject to an audited command rule, senhasegura records the time of the proxy session and adds the risk score of the executed command to the session. This notification is also sent to the SIEM.

In addition, the rules defined by the administrator will apply. There are four direct actions:

* **Allow execution**: execution will be allowed.
* **Block execution**: the operator user will be prevented from executing the command. This type is included in the deny list.
* **Interrupt**: the operator user will be prevented from executing the command, and the proxy session will be stopped. This type is included in the deny list.
* **Force**: the user will only be able to execute the commands these rules allow. This type is included in the obligation list.

The administrator can register as many rules as they find necessary. But when the session begins, senhasegura will initially validate the rules considered mandatory, then the deny list rules, and, finally, the registration rules. If the command applies to one of the evaluated rules, the verification chain is terminated.

:::(info) (**Info**)
The rules of the **mandatory list** will always overlap the others.
:::

Rules will always be evaluated within their groups. If more than one rule from the mandatory list applies to the session, both will be evaluated. Therefore, the command may not be allowed by the first rule but may be valid according to the second rule. In this case, the command will only be denied if no rule in the mandatory list allows it.

These denylist and must-list rules are the direct actions. There are also indirect actions that can be configured.

* **Block senhasegura account**: if the rule is applicable, regardless of type, the user's access account may be locked after a series of command repetitions. In other words, the user account will be deactivated.
* **User Behavior score**: the command can receive three scores that will feed user, device, and behavioral statistics’ credentials.