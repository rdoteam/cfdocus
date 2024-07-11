## Metadata_Start 
## code: en
## title: External Secrets 
## slug: dsm-external-secrets 
## seoTitle: External Secrets 
## description:  
## contentType: Markdown 
## Metadata_End
## DSM integration with Kubernetes through External Secrets
### Requirements

* Kubernetes installed

* kubectl installed

* Follow the installation steps in this documentation: [Guides getting started](https://external-secrets.io/v0.6.1/guides/getting-started/)

* Follow the creation and configuration steps in this documentation: [Provider senhasegura DSM](https://external-secrets.io/v0.6.1/provider/senhasegura-dsm/)

### In senhasegura

1. Create an [Access Group](/v3-32/docs/dsm-access-control) in DSM

1. Create a [Secret](/v3-32/docs/how-to-manage-secrets) in senhasegura

1. Create an [Application](/v3-32/docs/how-to-manage-an-application-in-devops-secret-manager) on senhasegura

1. Create an [Authorization](/v3-32/docs/how-to-manage-authorizations-per-application-in-devops-secret-manager) for the created application

1. Add the **Secret** in the [Authorization per appplication](/v3-32/docs/how-to-manage-authorizations-per-application-in-devops-secret-manager).

1. Copy the value of the **Client ID** and **Client Secret** fields of Application Authorization

1. Create a file with the .yml extension in Kubernetes

1. Fill in the **Client ID** and **Client Secret** in the .yml file

1. Run the command

```
kubectl apply -f nomedoarquivo.yml
```
### In Kubernetes, follow the steps in this documentation

* [Provider senhasegura DSM](https://external-secrets.io/v0.6.1/provider/senhasegura-dsm/)

### Validation

* Check the synchronization status:

```
kubectl get externalsecret -o wide 
```

```
kubectl describe externalsecret example-secret
```

* Check if the pod was created:

```
kubectl get pods -A
```

* Check the content of the external secret:

```
kubectl get secrets/example-secret -n namespace -o yaml
```
### Troubleshooting

* Check whether the synchronized secret was created and the data obtained:

```
kubectl get secrets/example-secret -o yaml
```


* Consult external secrets logs:

```
kubectl logs -f pod/external-secrets-<CHANGEME> -n external-secrets
```
