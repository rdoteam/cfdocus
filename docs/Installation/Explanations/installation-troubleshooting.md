# Troubleshooting 

In this article, you’ll find common issue scenarios when installing and updating senhasegura, as well as their solutions.

## Certificate error during update

### Scenario
When updating senhasegura, you may encounter the error message: .

### Solution

Follow these steps to resolve the issue and download the required certificates:

1. Run the following command to search for the appropriate package:
`Shell
apt-cache search apt-senhasegura-fix-buster

`
2. Run the following command to remove the problematic package:

`Shell
apt-get purge apt-senhasegura-fix-buster

`
3. Download the necessary package using the following command:
`Shell
wget https://repo:HpRh0BVMNVAq@repo.senhasegura.com/apt-senhasegura-fix-buster_20191128_all.deb

`
4. Install the package using the following command:
`Shell
dpkg -i apt-senhasegura-fix-buster_20191128_all.deb

`
5. Run the following command to remove the  installation file:
`Shell
rm apt-senhasegura-fix-buster_20191128_all.deb

`
By following these steps in order, you should resolve the issue during senhasegura update.

## Connection to repository service not available
### Scenario
After updating senhasegura, you may encounter the error message: . This indicates a failure in the validation check between the senhasegura instance and the update repository.

### Solution
Check and ensure connectivity between the senhasegura instance and the repository.  If necessary, refer to the  documentation to confirm that the required rules are correctly configured.