## Metadata_Start 
## code: en
## title: CMD Installation 
## slug: go-windows-cmd-installation 
## seoTitle: CMD Installation 
## description:  
## contentType: Markdown 
## Metadata_End
This article provides information for installing **Go Endpoint Manager for Windows** from the command line with MSIEXEC.

You can install the **GO Endpoint Manager for Windows** agent using any third-party software distribution tool your organization uses.

To install, simply use ```MSIEXEC``` and provide the necessary arguments.

* * *
## Command

```
msiexec /i <senhasegura.go.msi> /passive HASH="Installation_key" /qn /l log.txt
```

* * *
## Parameters

| **Parameters** | **Description**|
| --- | --- |
| **/i** | Specifies the normal installation. |
| **<senhasegura.go.msi>** | Specifies the location and file name of the installation package.|
| **/passive** | Specifies that an installation is in progress but doesn't display any warnings or error messages to the user. The user can't cancel the installation.|
| **HASH** | Enter the [installation key generated](https://docs.senhasegura.io/v3-32/docs/go-endpoint-manager-windows-install#step-4-generate-a-use-license) from the **GO Endpoint Manager for Windows** dashboard. |
| **/qn** (optional) | It specifies that the installation process will take place silently, without a graphical interface or the need for user interaction.|
| **/l log.txt** (optional) | Enter this parameter to generate a log with information about the installation and view possible problems during the process. |
