# Docker settings 

## Set up Docker containers

1. Log in Docker host via SSH
2. Go to the  directory
`SHELL
cd /opt/
`

3. Unzip the  file
`SHELL
tar -xzvf /tmp/manifests.tar.gz
`

4. Go to the  directory
`SHELL
cd manifests/
`
:::(info) (Info)
Check the README file to know more about files and instructions.
:::

Now, you have two deploy options: docker-compose and docker with startup script. We  recommend the use of docker-compose.

---
## Set up Docker variables

Set the kernel parameter needed by the Elasticsearch container

1. Setting up Docker variables
`SHELL
sysctl -w vm.max_map_count=262144
echo 'vm.max_map_count=262144' >> /etc/sysctl.conf
`
---
## Start Docker containers

### Docker host with internet access

:::(warning) (Caution)
Docker host needs to have access to .
:::

#### Using docker-compose (recommended)

You need to have  installed in your Docker host.

The  file contains everything necessary to run both the Galera cluster and Elasticsearch containers.

1. Go to docker-compose directory
`SHELL
cd /opt/manifests/docker-compose
`
2. Start the containers
`SHELL
docker-compose up -d
`
:::(info) (Info)
You can manage both containers at the same time with the commands ,  and .

You can also see both containers logs simultaneously with the command .
:::

---

#### Using the script

The  script contains everything necessary to run both Galera cluster and Elasticsearch containers.

1. Go to docker directory
`SHELL
cd /opt/manifests/docker
`
2. Run the startup script
`SHELL
./startup.sh
`
:::info (Info)
You can see the containers logs individually with the commands  and .
:::

---

### Docker host without internet access



1. Go to the opt directory
`SHELL
cd /opt/
`

2. Unzip the docker-images file
`SHELL
tar -xzvf docker-images.tar.gz
`

3. Load both images into docker by running the following command:
`SHELL
bash /opt/docker-images/docker-load-images.sh
`

4. Check if the images were successfully imported with the command. Issue the command:
`SHELL
docker images
`

:::(Info) (Info)
They should appear at the very top of the list.
:::

5. Go to docker-compose directory
`SHELL
cd /opt/manifests/docker-compose
`

6. Start up the containers
`SHELL
docker-compose up -d
`
---
## Validate the installation

To verify if everything is working properly, execute the following command on both senhasegura instances:
`SHELL
orbit cluster arbiter status
`

Expected result:
`SHELL
senhasegura cluster arbiter

Status: ENABLED
Arbiter IP address: 192.168.0.5

Galera Cluster arbiter (garbd) status: Connected, OK
Elasticsearch arbiter status: Connected, OK

Troubleshooting guides is available at https://d.senhasegura.io/woam2aet
`

---

## Troubleshooting

If you encounter any issues, you can try the following articles:



If you still cannot find your issue, you can send your issue to our .