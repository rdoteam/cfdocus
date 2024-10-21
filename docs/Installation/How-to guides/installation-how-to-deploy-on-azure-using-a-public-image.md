# How to deploy on Azure using a public image 

In this article, you'll find instructions for deploying senhasegura on  using a public image of the senhasegura application. 

## Requirements
To deploy using a public image, your  and one of the available  must be compatible.

## Step 1: Select a public image


1. Log in to .
2. In the  category, select .
3. Use the search bar at the top left corner of the  page and enter “senseg” to filter the public images available. 
4. Choose from the publicly available images the one that suits your location:


| Location| Public gallery name |
| --- | --- |
|  | sensegimagesSA-9c5bef0f-8b5d-4afa-a4a8-45c17f969175 |
|  | sensegimagesEU-c1771718-1fa0-4039-aaf5-3488c4e51dfa |
| | sensegimgsUAE-1463cb64-66f4-41be-bd31-259174cd4410|
|  | sensegimages-cae17fe1-e39a-4ce3-a11a-550e16499f4d |
|  | sensegimgsWestEU-6c393531-1589-47cb-8f8e-83da2a8cf2d0|
::: (error) (Important)
If there is no suitable image available for your location, you’ll need to manually upload the application image. Please refer to the article  for instructions.
:::

## Step 2: Create a Virtual Machine

1. After selecting the public image, click .
2. When creating a virtual machine, fill in the following fields as instructed below:
::: (error) (Important)

Don't change the settings in the  and  tabs.
:::

* In the  tab, set the  field to  and .
* In the  tab, set the  field to .
* In the  tab, set  to . 
3. In the last step, ensure you have properly filled the fields listed in step 3 and haven’t changed the settings in the  and  tabs.
4. Click .
5. Wait for the confirmation message: .
6. After deployment confirmation, click . 
7. On the virtual machine page, copy the .
8. Open your browser and paste the  into the address bar.

By following these steps, the senhasegura activation screen will be displayed, and the deployment will be completed.

::: (Info) (Info)
If you encounter the  message, wait a few minutes and refresh the page.
 :::	
 
 

* * *


Do you still have questions? Reach out to the .