# Risk rating 

The certificate risk rating is a scale that assesses and sets a grade for certificates according to the following criteria:

- Encryption algorithm
- Encryption key size
- Signature algorithm
- Certificate authority
- Certificate expiration date
- Number of devices using the certificate
- Certificate responsible
- Certificate status

For each criterion, the certificate can gain or lose points. The final result is the sum of the points the certificate has received. This classification allows rapid risk assessment in environments where certificates are in use.

## Security rating

| Score | Rating |
|---|---|
| More than 80      | 

 |
| Between 65 and 79 | 

 |
| Between 50 and 64 | 

 |
| Between 35 and 49 | 

 |
| Between 25 and 34 | 

 |
| Between 0 and 24  | 

 |
| Less than 0       | 

 (Not Trusted) |

The classification does not restrict the use of certificates. You can define whether or not to use a low-rated certificate on your systems.

:::(warning) (Warning)
We do not recommend using low-rated certificates in productive environments.
:::
***
## Rating criteria
The sum of the criteria below generates a total that falls within one of the ranges, resulting in the final security rating of the certificate.

### Encryption algorithm

| Type | Score |
|---|---|
| DSA | 

 |
| Others |  |

### Encryption key size



| Size | Score |
|---|---|
| 4096 bits     | 

 |
| 2048 bits     | 

 |
| 1024 bits     | 

 |
| < 1024 bits   | 

 |



| Size | Score |
|---|---|
| 384 bits | 

 |
| 256 bits | 

 |
| 160 bits | 

 |
| < 160 bits |  |

### Signature algorithm

| Type | Score |
|---|---|
| SHA512 | 

 |
| SHA384 | 

 |
| SHA256 | 

 |
| Others |  |

### Certificate authority

| Type | Score |
|---|---|
| Has CA | 

 |
| Self-signed |  |

### Certificate expiration date

| Value | Score |
|---|---|
| Valid   | 

 |
| Expired | 

 |

### Number of devices using the certificate

| Value | Score |
|---|---|
| Between 0 and 1 devices | 

 |
| Between 2 and 5 devices | 

 |
| More than 5 devices |  |

### Certificate responsible

| Value | Score |
|---|---|
| Has responsible | 

 |
| Does not have responsible |  |

### Certificate status

| Value | Score |
|---|---|
| Revoked* | 

 |
| Others |  |

:::(Warning) (Warning)
The certificate is considered revoked when its intermediate or root certificate is revoked.
:::