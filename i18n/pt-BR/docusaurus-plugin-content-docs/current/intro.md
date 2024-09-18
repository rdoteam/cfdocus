---
sidebar_position: 1
---

# Sobre o senhasegura
## **Introdução**

Boas-vindas ao senhasegura! Este guia ajudará você a entender o que é o senhasegura, seu propósito, e os vários módulos e produtos que ele oferece para proteger o acesso privilegiado da sua organização.

## **O que é o senhasegura?**

O senhasegura é uma solução abrangente de Privileged Access Management (PAM) projetada para proteger organizações de ataques cibernéticos originados de abuso de contas privilegiadas e roubo de dados. Ao proteger essas contas de privilégio elevado, o senhasegura ajuda a prevenir acessos não autorizados, usos indevidos e ameaças internas, garantindo a segurança e a conformidade da sua organização.

## **Propósito e importância**

Contas privilegiadas, geralmente com permissões administrativas ou elevadas, são alvos valiosos para ataques cibernéticos. O senhasegura garante que essas contas sejam protegidas contra acessos não autorizados, usos indevidos e ameaças internas. Com um conjunto robusto de recursos, ele gerencia de forma efetiva contas com privilégios elevados, garante a segurança das credenciais, monitora o acesso a ativos e aplica a separação de funções. Essa abordagem abrangente permite que as organizações permaneçam em conformidade com os regulamentos, minimizem os riscos de segurança e apliquem processos seguros de forma eficiente.

---

## **Como o senha segura funciona**

### **Principais conceitos**

Entender os principais conceitos por trás do senhasegura é crucial para aproveitar todo o seu potencial na proteção das contas privilegiadas de sua organização. Esses conceitos formam a base da solução PAM do senhasegura e garantem acesso seguro, controlado e monitorado a sistemas críticos.

- **Privileged Access Management (PAM):** garante que contas privilegiadas sejam protegidas e que seu acesso seja controlado e monitorado.
- **Credential Vaulting:** a prática de armazenar e gerenciar credenciais com segurança para evitar acesso não autorizado.
- **Session Monitoring and Recording:** rastreamento e gravação em tempo real de sessões privilegiadas para garantir a responsabilização.
- **Role-Based Access Control (RBAC):** concede permissões com base nos papéis do usuário para minimizar o acesso não autorizado.
- **Just-in-Time (JIT) Access:** concede temporariamente acesso privilegiado, que é revogado automaticamente após um certo período.

### **Visão geral dos módulos e componentes**

A solução senhasegura foi desenvolvida com base em uma arquitetura robusta projetada para aumentar a segurança, a escalabilidade e a eficiência do Privileged Access Management (PAM). Os módulos e componentes adicionais da suíte de produtos melhoram ainda mais a segurança em várias áreas. A suíte inclui:

#### **Gerenciamento de contas e sessões privilegiadas**

- **PAM Core:** repositório seguro para armazenar e gerenciar credenciais.
- **Domum Remote Access:** media e monitora as sessões de usuários em sistemas confidenciais.
- **MySafe:** fornece acesso monitorado a bancos de dados, garantindo atividades seguras de DBA.

### **Privilege elevation and delegation management - Gerenciamento de elevação e delegação de privilégios**

- **Go Endpoint Manager for Windows:** gerencia acesso privilegiado em endpoints do Windows.
- **Go Endpoint Manager for Linux:** gerencia acesso privilegiado em endpoints do Linux.
- **Go Endpoint Manager for MacOS:** gerencia acesso privilegiado em endpoints do MacOS.
- **Go AD Bridge Manager:** facilita a integração com o Active Directory para o gerenciamento de acesso unificado.

### **Gerenciamento de segredos**

- **DSM - DevOps Secret Manager:** gerencia com segurança segredos e credenciais para ambientes de DevOps

### **Multicloud**

- **CIEM - Cloud Entitlements Manager:** gerencia direitos da infraestrutura em nuvem com segurança.
- **Cloud IAM:** garante o gerenciamento seguro de identidade e acesso em ambientes de nuvem.

### **Gerenciamento do ciclo de vida de certificados**

- **Certificate Manager:** supervisiona o ciclo de vida dos certificados digitais para garantir comunicações seguras.

### **Infraestrutura privilegiada**

- **Load Balancer:** distribui o tráfego da rede ou da aplicação para garantir a credibilidade e o desempenho.
- **Crypto Appliance:** fornece operações criptográficas baseadas em hardware para proteger dados sensíveis.

Ao usar os poderosos módulos e componentes do senhasegura, sua organização pode garantir um gerenciamento de acesso privilegiado seguro, monitorado e em conformidade, reduzindo o risco de ameaças cibernéticas e aprimorando a postura geral de segurança.

---

## **Fluxo de trabalho**

O fluxo de trabalho no senhasegura foi projetado para oferecer uma maneira segura e eficiente de gerenciar o acesso privilegiado.

1. **Login:** os usuários se autenticam por meio de autenticação multifator para acessar o senhasegura.
2. **Solicitação de acesso:** os usuários solicitam acesso a recursos específicos com base em seus papéis e permissões.
3. **Aprovação:** as solicitações são revisadas e aprovadas pelo funcionário autorizado se forem necessárias permissões elevadas.
4. **Recuperação de credenciais**: os usuários aprovados recuperam com segurança as credenciais do **Credential Vault.**
5. **Sessão proxy:** as sessões de usuário são mediadas pelo proxy para garantir o acesso e o monitoramento seguros.
6. **Monitoramento de atividades:** todas as atividades são monitoradas e registradas para fins de auditoria.
7. **Logout:** os usuários fazem logout e todas as permissões temporárias concedidas durante a sessão são revogadas.
8. **Auditoria e relatórios:** os administradores podem revisar gravações de sessão, logs de alterações e relatórios de atividade do usuário para garantir conformidade e segurança.

---

## **Instalação do senhasegura**

A instalação do senhasegura é um processo simples, projetado para que você comece a trabalhar rapidamente. Antes de iniciar a instalação, certifique-se de que seu ambiente atenda aos requisitos de sistema necessários, conforme descrito na introdução. O processo de instalação inclui a configuração da plataforma senhasegura no sistema operacional escolhido, a definição das configurações iniciais e a verificação da instalação.

### **Requisitos do sistema**

- **Sistemas operacionais:** Windows, macOS, Linux
- **Hardware:** Mínimo de 8GB RAM, 200GB armazenamento
- **Rede:** conexão estável com a internet para atualizações e recursos de acesso remoto

Para mais detalhes, visite o documento [Virtual appliances](https://docs.senhasegura.io/v3-33/docs/pt/installation-virtual-appliances).

### **Etapas de instalação**

Para iniciar a instalação, siga estas etapas:

1. **Defina sua arquitetura:** use os documentos [Alta Disponibilidade (HA) e Recuperação de Desastres (DR)](https://docs.senhasegura.io/v3-33/docs/pt/installation-architecture-high-availability-and-disaster-recovery) e [Arquiteturas suportadas](https://docs.senhasegura.io/v3-33/docs/pt/installation-supported-architectures) para determinar a arquitetura mais adequada para sua implantação do senhasegura.
2. **Regras de firewall**: com base na arquitetura selecionada, crie as [regras de firewall](https://docs.senhasegura.io/v3-33/docs/pt/installation-firewall-rules) necessárias.
3. **Acesse os guias de instalação:** instruções passo-a-passo detalhadas para instalar o senhasegura em vários sistemas operacionais podem ser encontradas em [na documentação de instalação do senhasegura.](https://docs.senhasegura.io/v3-33/docs/pt/installation)
4. **Verificação:** verifique a instalação acessando o senhasegura usando seu endereço no navegador. Certifique-se de que todos os serviços estejam sendo executados corretamente e que você possa fazer login com a conta de administrador.

Ao seguir essas etapas, você terá o senhasegura instalado e configurado, pronto para gerenciar e proteger o acesso privilegiado da sua organização.