# Reference for Firewall command 

The Orbit CLI firewall configuration command  is expected to be used with arguments and flags. 

Example:

`shell
orbit firewall [argument] [--flag]
`

This document describes the arguments and flags available with the  command.

## Arguments

| Argument      | Description                                      |
|---------------|--------------------------------------------------|
|        | Block access for specified hosts or networks.    |
|      | Unblock access for specified hosts or networks.  |
|    | Normalize firewall rules.                        |
|       | Check the status of the firewall.                |
|         | Enable or Disable ICMP protocol in hosts.        | 

## Flags

| Flag              | Description                                       |
|-------------------|---------------------------------------------------|
|           | Show context-sensitive help.                      |
|           | Host IP or Network list.                          |
|          | Force the command execution.                      |
|           | Show additional information.                      |
|            | Exclusive to allowlists. Accepts multiple IPs.    |