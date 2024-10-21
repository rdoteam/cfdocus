# How to install the Network Connector agent on Google Cloud 

In this document, you will find a step-by-step guide on how to install the  on Google Cloud.

:::(Info) (Info) Use the automatic container configuration functions available in the instance creation interface of Compute Engine to simplify the process. :::

## Create instance on Google Cloud

1. Go to the  page in the Google Cloud dashboard.
2. Select the option  no menu lateral.
3. Click in  to start the process of creating a new instance
4. On the instance creation screen, define a name for the instance and choose the desired region.
5. Make the following changes to the configuration parameters:
    * Series: E2.
    * Machine Type: e2-small.
6. In , click on the button  define the fields:
    *  as .
    *  as .
7. In , define the fields:
    * : The fingerprint as seen in senhasegura.
    * : The port defined in the senhasegura interface.
    * : IPs of machines running senhasegura.
    * : As  or .
8. In  select the option .
9. Under Metadata, click  and enter the following combination:
    * Key: .
    * Value: .
10. Leave the rest of the settings as default.
11. Click  to finish the process.

The agent of  should automatically connect to senhasegura after these steps.

The created instance will be updated automatically, and it will only be necessary to restart it when there is an update to the container image.

:::(Info) (Info) If necessary, configure the network on which the Network Connector will operate, in the section  > . :::

### Access Logs

To access Network Connector agent logs, follow the steps below:

1. In  From Google Cloud, navigate to the list of virtual machines and click the instance where the agent is running.
2. Access the logs through the path  > .
    * In , are the logs of  format `client: 
`.
    * Use the filter  for easier viewing.


Watch the video of .

---

Do you still have questions? Reach out to the .