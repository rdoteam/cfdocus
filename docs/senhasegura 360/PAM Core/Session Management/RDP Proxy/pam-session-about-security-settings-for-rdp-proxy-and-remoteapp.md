# About security settings for RDP Proxy and RemoteApp 

In Active Directory environments, it’s important to define and apply policies that go beyond auditing and recording sessions through Privileged Access Management (PAM). 

These definitions serve to reduce unauthorized access, that is, users with privileges beyond what is necessary represent a significant risk to information security. 

Without strict controls, malicious or inattentive users can compromise sensitive data, tamper with critical system settings, and open the door to large-scale attacks.

With this situation in mind, it’s recommended that a robust GPO (Group Policy Objects) strategy be implemented based on recommendations from NIST (National Institute of Standards and Technology) and using pre-defined configurations by DISA (Defense Information Systems Agency ).

## Advantages of implementing GPO

* : limiting access to powerful tools such as Control Panel, Command Prompt (cmd), PowerShell, Registry Editor and File Explorer.
* : users are granted only with essential permissions to perform their tasks, reducing the risk of errors and malicious activity.
* : GPO settings recommended by DISA and NIST ensure compliance with widely recognized security standards.
* : by restricting access to system resources, organizations adopt a proactive security posture against internal and external threats.

## Next steps

* : organizations should carefully review DISA’s GPO settings and adapt them to their specific needs and requirements.
* : privileged access must be constantly monitored and policies adjusted as necessary to meet the organization's evolving demands and challenges.

To better understand how to efficiently implement GPOs, adapting them to different operating systems and customizing them to meet the specific needs of each organization. Access the complete guide available in the  document.