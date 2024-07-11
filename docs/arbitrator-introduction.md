## Metadata_Start 
## code: en
## title: Introduction Arbitrator 
## slug: arbitrator-introduction 
## seoTitle: Introductionx 
## description:  
## contentType: Markdown 
## Metadata_End
senhasegura's Arbitrator is a key element in supporting our application's high availability. It ensures that our databases and Elasticsearch clusters operate continuously without any interference.

The arbitrator is often used when there are two senhasegura servers operating in parallel: a main server and a backup server. The arbitrator continuously validates connectivity with both servers and, if one becomes unavailable, it switches operations to the remaining active server.



:::info (Info)
Our Arbitrator helps to avoid a split-brain scenario where one of the two instances fails to identify which data is the most up-to-date.
:::

---
## Related articles

- [How to install Arbitrator](/v3-32/docs/arbitrator-installation)
- [Arbitrator Updates](/v3-32/docs/arbitrator-update)