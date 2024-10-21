# Arbitrator cluster settings 

## Set up a senhasegura cluster

:::(warning) (Caution)
During this process your senhasegura cluster can be unstable or unavailable.
:::

You should have the following environment to be able to perform the actions below:
- senhasegura primary instance: 192.168.0.8
- senhasegura secondary instance: 192.168.0.9
- Linux machine with Docker host: 192.168.0.5

:::(info) (Info)
Follow the order and wait finishing each command before moving to the next step.
:::

1. Define the cluster with Arbitrator:

    :::(Info) (Info)
    If you don't have a configured and functional cluster, the command below will also set up the cluster. Therefore, it's not necessary to configure the cluster beforehand.
    :::

    1. Enter the following command on the  instance of the cluster:

        `
            orbit cluster config --nodes=192.168.0.8,192.168.0.9 --ip=192.168.0.8 --arbiter=192.168.0.5 --segment=0 --latency="high"
        `

    1. Start the cluster with the following command on the  instance:
        `
        orbit cluster start
        `

    2. Enter the following command on the  instance of the cluster:

        `
        orbit cluster config --nodes=192.168.0.8,192.168.0.9 --ip=192.168.0.9 --arbiter=192.168.0.5 --segment=0 --latency="high"
        `
    10. Start the cluster with the following command on the  instance:
        `
        orbit cluster start
        `
    
2. Set up Elasticsearch
    :::(Info) (Info)
    This process can take several minutes. 
    :::

    - Enter the following command on the  instance of the cluster:
        `
        orbit elasticsearch setup
        `

    - Enter the following command on the  instance of the cluster:
        `
        orbit elasticsearch setup
        `
    
3. Restart the senhasegura cluster

    :::(Warning) (Warning)
    During the execution of this process, the senhasegura database will be restarted so that the environment may experience a brief unavailability
    :::

    - Enter the following command on the  instance of the cluster:
        `
        orbit cluster stop
        orbit cluster start
        `

    - Enter the following command on the  instance of the cluster:
        `
        orbit cluster stop
        orbit cluster start
        `
    
---

## Transfer files to Docker host

:::(Warning) (Caution)
This configuration only needs to be performed in one of the senhasegura instances.
:::

Log in via SSH (59022) on the  senhasegura instance and follow these steps:

1. Generate the Arbiter config file and the Docker image
`
orbit cluster arbiter create-config
`

After this process, two files will be created in the path: 

-  contains the files needed to run the arbitrator containers. It helps if you transfer it to the remote machine that will be running Arbitrator. For more detailed instructions, access the  file.

-  contains the container images themselves. Transferring this file is optional. You can download the image directly from the docker registry, as explained in the file.

2. Transfer the manifests.tar.gz file to the Docker host via scp

- Docker host with internet access

Docker host needs to have access to *registry.senhasegura.io*.

Transfer the  file to the machine with docker and docker-compose:
`
scp /var/tmp/senhasegura-cluster-arbiter/manifests.tar.gz linuxuser@192.168.0.5:/tmp/
`

### Docker host without internet access

To an offline environment, you need to transfer the manifests and docker-images files to Docker host.

- Transfer manifests.tar.gz
`
scp /var/tmp/senhasegura-cluster-arbiter/manifests.tar.gz linuxuser@192.168.0.5:/tmp/
`

- Transfer docker-images.tar.gz
`
scp /var/tmp/senhasegura-cluster-arbiter/docker-images.tar.gz linuxuser@192.168.0.5:/tmp/
`

---

## Next steps

- 

---

## Troubleshooting

If you encounter any issues, you can try the following articles:



If you still cannot find your issue, you can send your issue to our .