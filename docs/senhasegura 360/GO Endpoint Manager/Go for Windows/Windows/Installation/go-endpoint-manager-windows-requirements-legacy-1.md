# Requirements for GO legacy 

This article describes the requirements for the installation and proper functioning of  in legacy version (3.26 or earlier).

* * *

## 

* Administrator permission in the user's workstation.
* Inclusion of  as .
* Inclusion of  as an exception in the system hardening process.

:::(Error) (Important)
If you don't include  as an exception in the system hardening process, it won't work.
:::

* * *

## Hardware requirements - Workstations

The Go Endpoint Manager for Windows requires at least the following hardware resources:

| Item | Specification |
| --- | --- |
|  | 4 CPUs |
|  | 4 GB of RAM |

* * *

## Dependencies

The following development resources are required for  to work:
 
| Item | Specification |
| --- | --- |
|  | Microsoft .NET Framework 4.8 |
|  | Versions x86 and  x64 of the Microsoft Visual C++ Redistributable for Visual Studio (2015, 2017, 2019, and 2022) Bundle |

:::(Warning) (Caution)
Discontinued versions of operating systems may not support Microsoft .NET updates, which may result in system incompatibility.
:::

* * *

## Supported versions

The following operating systems support  in legacy version (3.26 or earlier):

:::(Info) (Info)
The  is designed for Windows Server and 64-bit Workstations.
:::

| Operational system | Specification |
| --- | --- |
| Windows Server  | 2019 (64-bit)|
| Windows Server  | Version 1803 and above (64-bit)|
| Windows Server  | 2016 (64-bit)|
| Windows Server | 2012 R2 (64-bit) |
| Windows Server  | 2012 (64-bit) |
| Windows Server  | 2008 R2 SP1 (64-bit)*|
| Windows 10 | Version 1607 and above (64-bit) |
| Windows 8.1 | 64-bit |
| Windows 7 | 64-bit* |

:::(Info) (Info)
For Windows Server 2008 R2 SP1 and Windows 7 environments, you must configure the SSL/TLS, fot this, access the  documentation.
:::

:::(Warning) (Caution)
If you need an unsupported version, request support for another version on the  website.
:::