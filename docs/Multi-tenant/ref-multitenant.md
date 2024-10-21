# Parameters for the orbit tenant command

This document will describe the parameters that can be used in combination with the orbit tenant command to manage tenants in senhasegura.

## Parameters

| Parameter                   | Description                                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|       | Create a new tenant with the name indicated.                                                                      |
|      | Disables the indicated tenant.                                                                                    |
|       | Enables the indicated tenant.                                                                                     |
|                       | Lists all the tenants of the instance in question.                                                                |
|    | Configure the indicated tenant.                                                                                   |
|  | This command will reconfigure the indicated tenant and sync its configuration with all the nodes in the instance. |
## Flags

The parameters can also contain , which will help to execute the orbit tenant command as required.

| Flag            | Description                                               | Parameter that accepts the flag                 |
| --------------- | --------------------------------------------------------- | ----------------------------------------------- |
|  e  | Prints the parameter help on the screen.                  | All.                                            |
|        | Forces the command to be executed. Don’t prompt the user. | create, disable, enable, configure, synchronize |
