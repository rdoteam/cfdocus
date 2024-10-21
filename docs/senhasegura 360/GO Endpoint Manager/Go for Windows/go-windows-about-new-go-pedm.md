# About the new GO Endpoint Manager 

After updating to Senhasegura 3.32 version, existing users of the GO Endpoint Manager will notice two configuration options in the Grid Menu - the previous and the new version. However, if you've never used the GO PEDM service before, you'll only see the new version in the web interface.

---

## Old vs New GO Endpoint Manager

Starting from version 3.32, the PEDM Go Endpoint Manager for Windows has adopted a new architecture to enhance performance, security, and introduce new features. However, these improvements required a new structure. In upcoming versions, the  Go Endpoint Manager refers to all the configurations that have been executed in client version 3.31 or previous version. The  Go Endpoint Manager represents a new instance of Go, which only operates and should be used exclusively with the client in version 3.32 or higher.

## Which Option to Use

- If you have upgraded  to version 3.32 but still want to use the  client 3.31, simply select the  option in your senhasegura menu. No further action is required.
- If you have updated both  and the  client to 3.32, use the . 

:::(Warning) (Atention)
Be sure to review the  section to understand how these rules will be migrated.
:::

---

## Documentation Portal Update

- Users continuing to use the PEDM GO Endpoint Manager client version  should refer to this documentation: 
- Users who have updated senhasegura and the PEDM GO Endpoint Manager for Windows to version  should refer to this documentation: .

:::(Internal) (Private notes)
To access the documentation for the old  go to .
:::

---

## Scenarios for PEDM GO Endpoint Manager Client

For the new version of the  client, you have three possible scenarios with distinct requirements:

### Scenario 1

You have not used the PEDM GO Endpoint Manager client before. In this case, no modification occurs, but you will not be able to use the  in versions prior to 3.32.

### Scenario 2

You have used the PEDM GO Endpoint Manager client in versions prior to 3.31. In this case, you will have two options of  - the old one, identified by the name ; and the new one, identified by the name .

### Scenario 3

You cannot update the PEDM GO Endpoint Manager client to the new version of the PEDM GO Endpoint Manager client 3.32. In this case, it will not be possible to use .

:::(error) (Important)
- The new  (version 3.32) should be used exclusively with the  of the same version, both updated.
- The  prior to version 3.31 is compatible with the  in versions 3.31, 3.30, 3.29.
:::

---

## Migration of Policies from GO Endpoint Manager to New GO Endpoint Manager

During the update to senhasegura 3.32, there will be an automatic migration of the parameterized data in your environment. This migration will occur once, during the update of senhasegura and no user action is necessary.

### Migrated Policies

The policies registered on the following pages will be automatically migrated from old to new:

- 
    - 
    - 
- 
    - 
    - 
    - 
    - 
    - 
- 
- Registered Workstations

:::(Info) (Info)
Workstations with the  client already registered in senhasegura 3.31 will be maintained even after updating to senhasegura 3.32. That is, if a workstation has already been registered in senhasegura 3.31, it is not necessary to register it again after updating senhasegura to 3.32.
:::

---

### Policies Manual Migration

Any changes in the GO policies in versions 3.31 or earlier  upgrading to version 3.32  for use with the new GO in version 3.32 or higher. However, you can manually migrate these changes using the "Send to the new GO Endpoint Manager" button within the policy action options in the Go Windows policy report.

:::(Warning) (Important)
When migrating policies to PEDM GO Endpoint Manager version 3.32, they will function as in version 3.31. However, if the manual migration feature is used to update a policy to the New PEDM GO Endpoint Manager, the rule in the new version will be overwritten by the old rule being migrated.
:::