# Change passwords in GCP Managed Microsoft AD 

This article provides a step-by-step guide on how to change passwords using credentials from . It explains how to create a new template and set up automatic password changes using the LDAP plugin.


## Requirements

- The senhasegura must have access to the directory service managed by GCP;
- The certificate must be implemented in the GCP panel for the LDAPS of the domain to be managed;
- To perform the password change, it is necessary to use the  user created by GCP, located in "". More information at: .

---

## Steps

1. To create a new template, go to .
2. Click on the  icon and then click .
    1. In the  window,
    2. Fill in the following information:
        -  Choose any name to identify this template, e.g. "AD - Change User Password - GCP AD MANAGED Services".
        -  Select .
        -  Select .
        - In the  section, insert the following text:
        `
        #Protocol Version
        set-option LDAP_OPT_PROTOCOL_VERSION 3
        set-option LDAP_OPT_REFERRALS 0

        #Execute Bind
        #bind example "CN=senha,OU=Cloud Service Objects,DC=services,DC=com"
        bind "[your user bind Location]"

        #Locate User Entry
        #find path example "DC=services,DC=com"
        find "[your Location to find the users]" (&(objectClass=user)(sAMAccountName=[#USERNAME#]))

        #Change Password
        mod-replace unicodePwd "u([#NEW_PASSWORD#])"
        `

3. After creating the template, navigate to  .
4. Find the credential for which you want to automate password changes.
5. Click the  icon on the right of the credential, then select .
    1. In the  window,
    2. Go to the  tab.
    3. Under ,
    4. Enable .
    5. For , select .
    6. For , select the template created in step 2.
    7. Click .

The credential's password will be changed according to the password policy set using this template.