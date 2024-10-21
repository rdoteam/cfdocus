# Executor triggers 

A trigger is an action performed into the client module. It can be executed by Executor plugin supported by the client module' technology. This architecture enable our developers to create new plugins and triggers to every target system that support some kind of automated interaction.By default, the following modules can trigger to start an execution operation:PAM triggersTriggerDescriptionCredential enableEnable an locked credential into a target device. Can also be used to perform a JIT credential creationCredential disabilingDisable a target credential after senhasegura Proxy usage. Can also be used to perform a JIT credential destructionPassword changeChange some credential ou SSH Key secretCloud IAMTriggerDescriptionAWS OpsWorksUsed into senhasegura DSM to provide credentials and secrets management in AWS OpsWorksDevOps Secret ManagerTriggerDescriptionAutomationDSM secret automation triggersCertificate ManagerTriggerDescriptionCertificate disabilingRevoke a target SSL certificate into target deviceCertificate publishingPublish a target SSL certificate into target deviceTask ManagerTriggerDescriptionTask ManagerAutomated tasks into target devices that can be scheduled or executed by user requestProvisioningTriggerDescriptionNew groupGroup creation at target systemNew userUser creation at target systemGroup deleteGroup deletion at target systemUser deleteUser deletion at target systemUser delete in groupRemoving a user from a group at target system