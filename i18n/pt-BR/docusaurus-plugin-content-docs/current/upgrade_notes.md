---
sidebar_position: 2
---
# Upgrade note v3.32

:::danger Caution
Antes de executar a atualização do senhasegura, sempre **execute um snapshot em seu hypervisor** e [realize o backup utilizando o Orbit CLI](https://docs.senhasegura.io/docs/pt/orbit-config-manager-running-and-restoring-backup)

:::

:::danger Caution
Caso esteja utilizando o  **senhasegura Arbitrator** , retire-o do cluster antes de atualizar o senhasegura. [Saiba mais em nossa documentação](https://docs.senhasegura.io/docs/pt/arbitrator-update).

:::

:::danger Caution
Caso utilize o Zabbix e a aplicação não esteja funcionando corretamente, se faz necessário a reconfiguração do mesmo. Para mais detalhes, acesse a nossa documentação [Orbit CLI](https://docs.senhasegura.io/docs/pt/orbit-cli-how-to-configure-zabbix-via-orbit-cli).
:::

Nesta atualização, o foco está em três áreas: PAM Core, MySafe, e Certificate Manager. Confira os destaques que trouxemos para cada um deles.

## PAM Core

Facilitamos o acesso ao Database Proxy ao possibilitar a autenticação com um usuário do AD, agora os usuários podem utilizar suas [credenciais de domínio para acessar o MS SQL Server Management Studio](https://docs.senhasegura.io/docs/pt/pam-session-how-to-start-a-ms-sql-server-session-with-ms-sql-server-management-studio).

Aprimoramos as autenticações, trazendo uma camada a mais de segurança ao nosso proxy para sessões remotas, ao permitir que a autenticação seja realizada utilizando Kerberos nos casos em que as credenciais privilegiadas sejam gerenciadas pelo AD e façam parte do Protected Users Security Group.

Adicionamos a melhor usabilidade em autenticação nas sessões de RDP Proxy através de um arquivo. Agora, é [possível gerar um arquivo .rdp com token temporário](https://docs.senhasegura.io/docs/pt/pam-session-how-to-use-a-rdp-file-to-start-a-remote-session) que permite acesso via RDP Gate no dispositivo alvo, sem que seja necessário inserir as informações de autenticação do usuário.

Atualizamos as bibliotecas utilizadas no terminal proxy e web proxy para a conexão SSH, oferecendo suporte para o algoritmo rsa-sha2-256 nas sessões remotas.

## MySafe

A partir desta versão, ao acessar pela web, também é possível [gerenciar token TOTP](https://docs.senhasegura.io/v3-32/docs/pt/mysafe-passwords-add) no MySafe. As senhas armazenadas no MySafe podem ser acompanhadas de seu respectivo token, eliminando a necessidade de utilizar um aplicativo de autenticação terceiro para autenticação multi-fator (MFA).

## Certificate Manager

Disponibilizamos uma nova integração com a [Autoridade Certificadora (CA) Entrust](https://docs.senhasegura.io/docs/pt/certificate-manager-reference-supported-cas), agora é possível assinar e revogar certificados com a CA Entrust através da plataforma.
Possibilitamos a [importação de certificados SSL via API](https://docs.senhasegura.io/v3-32/docs/pt/a2a-api-certificate-manager). Os certificados assinados agora podem ser incluídos no Certificate Manager utilizando o endpoint disponibilizado.

## PEDM GO Endpoint Manager

A versão 3.32 do PEDM Go Endpoint Manager para Windows introduz uma nova arquitetura para melhorar a performance e a segurança, além de adicionar novos recursos. A partir desta versão, o PEDM GO contará com duas interfaces de gerenciamento: "GO Endpoint Manager New" e "GO Endpoint Manager Old". Consulte o [changelog](https://docs.senhasegura.io/docs/pt/changelog#pedm-windows) e a [documentação](https://docs.senhasegura.io/docs/pt/go-windows-about-new-go-pedm) para mais informações.
