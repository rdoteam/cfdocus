## Metadata_Start 
## code: en
## title: Amazon ACM 
## slug: discovery-amazon-acm 
## seoTitle: Amazon ACM 
## description:  
## contentType: Markdown 
## Metadata_End
1. Go to **Discovery ➔ Settings ➔ Discovery;**
2. Click on the icon `⁝`, and choose the option **+ New;**


3. Select **Amazon ACM;**
4. Add the information:


- **Name:** name that will identify the search.
- **Enabled:** indicate if you want the device activated or not.

## Cloud ACM account

- Cloud ACM account: Amazon account to which the CA refers.
- Import all certificates automatically: all Amazon ACM certificates that are found will be imported into senhasegura.
- Export certificate key?: the keys of the Amazon ACM certificates found will be exported to senhasegura.

## Execution


- **Keep scan active after import?:** credential verification that will remain active after credential import or not.
- **Days allowed for execution**: days that will be allowed to perform the execution.
- **Periods allowed for execution**: times that will be allowed for execution.
- **Interval between executions (in hours):** minimum interval, in hours, between scan runs. This criterion takes into account the values informed in the Days allowed for execution and Periods allowed for execution fields.

:::(info)

It is not recommended to add an interval of fewer than 8 hours.

:::