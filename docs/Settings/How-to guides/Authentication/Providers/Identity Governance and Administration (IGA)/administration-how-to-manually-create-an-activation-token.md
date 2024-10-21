# How to manually create an activation token 

Integrating the senhasegura platform and Okta happens through a manually generated token. In this article, you can find a step-by-step guide to generating this token in the Postman tool.

:::(Info) (Info)
senhasegura carried out this documentation utilizing the Postman platform. The steps described are specific and may require adaptations for other apps.
:::

* * *

## Requirements

*  added to senhasegura.

* * *

### Step 1: Collect information

1. Access the senhasegura platform.
2. In the upper left corner, click  and select .
3. Select 
4. Locate the desired third-party provider from the reports list.
5. In the Action column, select the magnifying glass icon ()
6. The  window will provide some of the information required to generate the integration token.
    5.1. : copy the URL to use in the next step.
    5.2. : copy the URL to use in the next step
    5.3. : click the eye icon to access and copy the information.
    5.4. : click the eye icon to access and copy the information.

:::(Warning) (Caution)
Collect information from the provider related to the type of group you intend to provision — whether it’s for  or . Choosing the correct option ensures that when you push groups from Okta to senhasegura, they'll appear in the corresponding menus. 
:::

* * *

### Step 2: Create the access token manually


1. Open Postman.
2. In the left-side menu, click  and then 
3. Enter the name of the new collection.
4. In the  tab, create the variables for the collection:
    4.1. Create the variable .
    4.2. Create the variable  .
    4.3. Create the variable  .
    4.4. Create the variable  .
    4.5. Create the variable  .
5. Still in the  tab, complete the  field of the created variables:
    5.1. In  , enter the address of the senhasegura server.
    5.2. In   , paste the information collected in step 1 into the  field.
    5.3. In  , paste the information collected in step 1 into the  field. 
    5.4. In  , paste the information collected in step 1 into the  field.
    5.5. In  , paste the information collected in step 1 into the  field.
6. Save the changes.
7. In the , complete the information:
    7.1. : select .
    7.2. : select 
    7.3. : enter  .
    7.4. : enter a descriptive name.
    7.5. : select 
    7.6. : enter   .
    7.7. : enter   .
    7.8. : enter  .
    7.9.   select .
8. Click .
9. Click .
10. In the window indicating complete authentication, click 
11. Copy the text from the  field.
12. Click . 

You'll receive a confirmation message with the text . You must paste this token into the .

* * *
Do you still have questions? Reach out to the .