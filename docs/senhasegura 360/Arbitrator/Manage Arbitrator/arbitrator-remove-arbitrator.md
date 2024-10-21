# How to remove Arbitrator 

To remove , follow the instructions below:

1. Stop all running containers.

` bash
cd /opt/manifests/docker-compose
docker-compose down
`

2. If you don't use , you must list the containers and stop their execution manually.
3. To list the running containers, use the  command. You should get an output such as the one below:
4. 
` bash
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                  PORTS     NAMES
3034e9858c2e   ubuntu    "/bin/bash"              10 seconds ago   Running (0) 7 seconds ago              hungry_goodall
` 

4. To stop the container, use the command `docker stop 
`.
5. To list the containers again, use the command . You’ll see an exit like the one below:

` bash
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                      PORTS     NAMES
3034e9858c2e   ubuntu    "/bin/bash"              10 seconds ago   Exited (0) 7 seconds ago              hungry_goodall
`

6. Make sure that the container has been stopped. To do this, the  column must be set to .
7. After the containers have finished running, update senhasegura.

It's also possible to completely remove the Docker images instead of just stopping their execution. To remove these images, proceed with the commands below:

1. After stopping the execution of the containers with the  or `docker stop 
docker image rmi 
` command. This command will remove the image according to its ID.
2. You can remove several images simultaneously by using the `docker images rmi 
 
` command, passing on the IDs of the images you want to remove.

---

Do you still have questions? Reach out to the .