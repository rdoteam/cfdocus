# Parameters for the orbit tenant command

This document will describe the parameters that can be used in combination with the orbit tenant command to manage tenants in senhasegura.

## Parameters

| Parameter                   | Description                                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `create `      | Create a new tenant with the name indicated.                                                                      |
| `disable `     | Disables the indicated tenant.                                                                                    |
| `enable `      | Enables the indicated tenant.                                                                                     |
| `list`                      | Lists all the tenants of the instance in question.                                                                |
| `configure `   | Configure the indicated tenant.                                                                                   |
| `synchronize ` | This command will reconfigure the indicated tenant and sync its configuration with all the nodes in the instance. |
## Flags

The parameters can also contain `flags`, which will help to execute the orbit tenant command as required.

| Flag            | Description                                               | Parameter that accepts the flag                 |
| --------------- | --------------------------------------------------------- | ----------------------------------------------- |
| `-h` e `--help` | Prints the parameter help on the screen.                  | All.                                            |
| `--force`       | Forces the command to be executed. Don’t prompt the user. | create, disable, enable, configure, synchronize |
