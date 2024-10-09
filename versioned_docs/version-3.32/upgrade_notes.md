---
sidebar_position: 2
---
# Upgrade Notes v3.33

:::danger Caution

- Starting from August 19, 2024, all updates will utilize the new senhasegura repository. The old repository will no longer be available after this date. If you are using a very old version of senhasegura, you will need to update incrementally, passing through each intermediate version until you reach the latest version, as described in our documentation.
- Proxy 2.0 is in Beta. We do not recommend using Beta versions in production environments.
- Before executing the senhasegura update, always run a snapshot on your hypervisor and perform the running and restoring backup
- If you use the senhasegura Arbitrator, remove it from the cluster before updating senhasegura. Learn more in our documentation.
- Zabbix users must reconfigure the application if it presents any problem after updating. Find instructions in the article How to configure Zabbix via Orbit CLI.
  :::

We are pleased to introduce version 3.33 of senhasegura, which includes a range of new features and improvements across our products. This update focuses on four main areas: Framework, PAM Core, MySafe, and Domum Remote Access. Here are the highlights:

## Framework

Administrators can now configure repositories and define bucket locations directly from the command line. We've also implemented a new mirror structure, making repositories available in multiple geographic locations. This allows you to choose the closest repository, reducing latency and speeding up the download of update files.

1. We have prepared clear and simplified documentation to guide you through the repository update process;
2. If you are using an older version of the product, you will need to update in stages, going through intermediate versions until you reach the latest version.

### Application Component and Operating System Version Updates
Version 3.33 includes essential updates to application components and the operating system. These improvements are crucial for ensuring maximum security and performance with new security features, enhanced stability, performance improvements, and storage optimizations.

## PAM Core

### Real-Time User Analysis and Protection

senhasegura’s Behavior module analyzes active user behavior. In version 3.33, we have introduced Continuous Identification, a feature that monitors real-time actions, identifies suspicious activities, and requests additional verification to ensure user authenticity. Continuous Identification is triggered by customizable admin-defined criteria, such as attempts to start sessions outside permitted times.

:::tip Info
Continuous Identification is disabled by default.
:::

## MySafe

Starting from this version, when accessing via the web, it's also possible to manage TOTP tokens in MySafe. Passwords stored in MySafe can be accompanied by their respective token, eliminating the need for a third-party authentication app for multi-factor authentication (MFA).

## Certificate Manager
### External Data Sharing with Protection and Speed

The MySafe module now features External Sharing (OTS), allowing temporary sharing of notes, passwords, files, and API secrets with external users. This solution facilitates secure and controlled collaboration with external parties while ensuring the integrity of sensitive data stored in MySafe.

## Domum
### Enhanced User Classification and Management

We have made significant updates to Domum Remote Access with a user separation solution. This restructuring improves user classification and management on the platform, allowing for clear distinctions between different types of users (full access or minimum privilege) and their affiliations (internal employees or third-party/vendors).

## Additional Update
### Explore the Updated Help Center Menu: Increased Efficiency and Ease

We have revamped our Help Center menu to improve usability and content organization for more efficient and intuitive navigation. We have restructured categories and options to facilitate access to relevant information, enhancing user experience and making the system more fluid and professional.