# GO Shell 

GO Shell is a GO Endpoint Manager for Windows feature that allows the administrator to manage the execution of only previously allowed commands, thus having greater control over the use and security of the environment.Configure GO ShellGo to the platform senhasegura.Go to GO Endpoint Manager ➔ Policies ➔ Windows ➔ Commands.Click on the Action menu.Choose if a general rule will be applied to all workstations or specific ones.Fill out the form Register new Windows commands.On the tab General:Name: choose a name for the rule of the command.Enabled: choose if the rule will be active or not.Command: write the command. For example, ipconfig, net session, tasklist, etc.Save.Execute Go ShellGo to your workstation.Run Core.Click on GO Shell at the top of the application to open.After registering the command, only senhasegura Shell will be available, and only registered commands can be used. The GO Shell shows up when accessing the CMD through Windows or Windows Shell.Examples of commands:Type goshell --commands to view the available commands:C:\Program Files\senhasegura\Core>goshell --commands

 • exit
 • clear-host
 • cls
 • clear
Type goshell --help to view the command options:C:\Program Files\senhasegura\Core>goshell --help

Go shell arguments
 • commands
 • update
 • help
Type goshell --update to update the list of commands:C:\Program Files\senhasegura\Core>goshell --update
Requesting commands to the server, please wait...
Commands obtained successfully.
Message when a command is not available:C:\Program Files\senhasegura\Core> net session
This command is not available.
Read moreTypical screenSegregated parameters