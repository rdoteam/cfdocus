# Authentication process APIs

List authorization secrets used in the authentication process

## Displays secrets that pertain to the authorization used in the request.

`GET /iso/sctm/secret`

- Parameters: none.
- Reply:
  - `response`: default response object.
  - `Secrets`: array of secrets.

## Display only the requested record

`GET /iso/sctm/secret/{identity}`

- Parameters: only the identity in the request URL.
- Reply:
  - `response`: default response object.
  - `secret`: secret mapping object.

## API Run Provision

- input: `{secret_id}`
- output: `{success/error_detail}`

The authorization to make the call runs the application template, provisioning new credentials, and lists the informed secret as a parameter.

## Auto-renew in the Secrets POST API

`POST /iso/sctm/secret`

- `renew_cloud_time`: `int`.
  - Time in minutes to renew **access keys**. If empty, **auto-renew** will not have its value changed and will be saved as disabled when created. Minimum 10.
- `renew_ephemeral_credential_time`: `int`.
  - Time in minutes to renew **ephemeral credentials**. If empty, **auto-renew** will not have its value changed and will be saved as disabled when created. Minimum 10
- `renew_credential_time`: `int`.
  - Time in minutes to renew **credentials**. If empty, **auto-renew** will not have its value changed and will be saved as disabled when created. Minimum 10.
