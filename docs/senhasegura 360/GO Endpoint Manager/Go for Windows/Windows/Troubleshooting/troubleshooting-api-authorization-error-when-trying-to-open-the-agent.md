# Troubleshooting: API Authorization Error When Trying to Open the Agent 

## API Authorization Error When Trying to Open the Agent

### Scenario

When trying to open the go agent, you may encounter an API authorization error. This issue can occur due to the  container not being installed or started correctly. This guide provides step-by-step instructions to resolve this issue, ensuring that the necessary service is properly installed and running.

### Symptom

- API authorization error when trying to open the go agent.

### Likely Cause

- The  container is not installed or not started correctly.

### Solution

Follow the steps below to resolve the API authorization error:

1. 
   - Open the  and run the following command to check the running containers:
     `bash
     docker ps
     `
   - Confirm if the  container is listed. If it is not, proceed with the next steps.

2. 
   - If the container is not present or installed, reinstall the necessary package with the following command:
     `bash
     apt reinstall senhasegura-api-authorization-service
     `
   - This will ensure that the container is downloaded and installed again.

3. 
   - After reinstalling, start the service with the command below:
     `bash
     systemctl start senhasegura-api-authorization
     `
   - This command will ensure that the service is running.

4. 
   - With the service running, generate a new API key using the following command:
     `bash
     orbit api keygen
     `
   - This command creates a new API key that will be used for authorization.

5. 
   - Finally, restart the system to ensure all changes are applied correctly:
     `bash
     systemctl restart senhasegura-api-authorization
     `

### Conclusion

After following the steps above, the API authorization error when trying to open the agent should be resolved. If the error persists, contact technical support for further assistance.