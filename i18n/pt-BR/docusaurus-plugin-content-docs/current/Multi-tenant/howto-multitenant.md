# Como gerenciar tenants no senhasegura

Para gerenciar os diversos tenants na sua instância senhasegura, você contará com a ferramenta `orbit`, a mesma utilizada para a administração do ambiente sennhasegura. Esta ferramenta tráz consigo uma série de parâmetros para configurar e gerenciar os tenants.

## Requisitos

* Acesso à [console administrativa da instância do senhasegura](https://docs.senhasegura.io/v3-33/docs/orbit-cli) que abrigará os tenants.  
* Acesso de administrador à instância do senhasegura.  
* Ter habilitado o proxy 2.0.  
  * Para saber como habilitar o novo proxy, acesse o documento [Proxy System Settings](https://docs.senhasegura.io/docs/pt/orbit-cli-how-to-manage-the-proxy-system-settings).  
  * Note que, caso o novo proxy não tenha sido habilitado, você ainda conseguirá executar os comandos do *multi-tenant*, contudo, não será possível realizar uma sessão no tenant criado, uma vez que este depende do novo proxy.  
* O hardware que receberá o *multi-tenant* deverá ter os seguintes requisitos mínimos:  
  * CPU com 8 núcleos.  
  * 16 GB de memória RAM.  
  * 256 GB de armazenamento.  
* É necessário acesso ao gerenciamento de DNS, uma vez que o *multi-tenant* necessita de um domínio devidamente configurado. Para maiores informações, acesse o documento [01\_PT\_HOW\_MultiTentantOrbit\_ApoioDNS](https://docs.google.com/document/d/1N2gJuVWbx1vXHNa9edvw6hdkqbmryO4QGXqJyddxJPU/edit\#heading=h.tvwv4soaxd1n)  
  * Cada tenant precisará de um certificado para estar acessível.

### Boas práticas 

* Realizar um reboot do sistema ao final do processo de atualização.  
* Utilizar SSL.


## Informações sobre o acesso e a criação dos tenants

* O acesso a cada tenant é gerenciado de forma independente para garantir a máxima segurança e isolamento.  
* Para obter acesso administrativo a um tenant específico, é necessário criar um usuário administrador diretamente nesse tenant.  
* O usuário administrador do tenant principal tem seu escopo de atuação limitado ao seu próprio ambiente, promovendo assim uma separação clara de responsabilidades e privilégios.  
* A criação de tenants é realizada individualmente para assegurar a precisão e a segurança de cada configuração.  
* Este processo permite uma revisão cuidadosa e personalização de cada tenant, garantindo que todas as configurações estejam alinhadas com as necessidades específicas de cada cliente ou departamento.  
* A abordagem de criação individual de tenants reforça as melhores práticas de segurança, permitindo um controle granular sobre cada ambiente.

## Criar um tenant

O tenant padrão, criado no momento em que você instala o senhasegura pela primeira vez, sempre será nomeado como `senhasegura`. Este nome não poderá ser modificado.

:::(info) (Info)  
O comando `orbit` precisa ser executado sempre com privilégios de administrador, ou seja, sempre será executado como `root` utilizando `sudo`.  
:::

Para criar um tenant novo, digite o comando `sudo orbit tenant create <tenant name>.`

O comando `orbit tenant` aceita flags que modificam o seu comportamento padrão. Para saber quais flags são aceitas, você pode digitar `sudo orbit tenant --help` no terminal ou acessar [03\_PT\_REF\_MultiTentantOrbit](https://docs.google.com/document/d/1CF9q3uDLLA0DrKbF7FL\_QxJ9GiHCmeCiFGFNqYLJfms/edit). 

- Note que é possível passar mais de uma flag ao mesmo tempo, para isso basta separá-las com espaço. Por exemplo `sudo orbit tenant create teste --force`

Digite `y` no prompt do terminal para prosseguir com o processo de criação. Para cancelar o processo, digite `N` ou `n` ou, ainda, aperte `ENTER.`

:::(info) (Info)  
O nome do tenant só poderá conter os seguintes caracteres: `a-z`, `0-9`, `-` e `_`.  
:::

A saída do comando para criação do tenant será como no exemplo abaixo:

```
Are you sure you want to create a new tenant: y
Creating tenant storage
Creating tenant database
Executing database migration process
Changing database passwords
Checking tenant key configuration
Restarting Orbini services...
```

Perceba que, ao utilizar a flag `-- force` você não será questionado antes da criação, assim, a saída do comando com a flag `--force` ficará assim:

```
Create tenant storage
Create tenant database
Executing database migration process
Changing databse passwords
Checking tenant key configuration
Restarting Orbini services ...
```

:::(info) (Info)  
O nome do tenant será o subdomínio para acessá-lo. Por exemplo, se você criou o tenant teste, o acesso se dará através de `teste.seudominio.com`.  
:::

## Desabilitar um tenant

Caso seja necessário, você poderá desabilitar um tenant previamente criado. Para isso, digite `sudo orbit tenant disable <tenant> name`. Assim, você irá desabilitar o tenant que você criou.

- Por exemplo: `sudo orbit tenant disable teste` irá desabilitar o tenant criado anteriormente com o nome `teste`.

Digite `y` no prompt do terminal para prosseguir com o processo de desabilitação. Para cancelar o processo, digite `N` ou `n` ou, ainda, aperte `ENTER.` Note que, ao utilizar a flag `--force` você não será questionado e o comando rodará sem realizar nenhuma pergunta.

Esta operação mantém todos os dados do tenant, tornando assim possível de ser desfeita ao reabilitar o tenant utilizando o comando `enable`.

## Habilitar um tenant

Caso você tenha desabilitado um dos seus tenants e queira reabilitá-lo, digite o comando `sudo orbit tenant enable <tenant name>`. Assim, você irá habilitar o tenant.

- Por exemplo: `sudo orbit tenant enable teste` irá habilitar o tenant criado anteriormente com o nome `teste`.

Digite `y` no prompt do terminal para prosseguir com o processo de habilitação. Para cancelar o processo, digite `N` ou `n` ou, ainda, aperte `ENTER.` Note que, ao utilizar a flag `--force` você não será questionado e o comando rodará sem realizar nenhuma pergunta.

A saída do comando para criação do tenant será como no exemplo abaixo:

```
Are you sure you want to proceed: y
Executing database migration process
```

## Sincronizar os tenants

Caso necessário, você poderá proceder com a sincronização dos tenants. Este processo tem como objetivo sincronizar os tenants entre os nós do cluster.

Para realizar a sincronização dos tenants, digite `sudo orbit tenant synchronize teste.`

Digite `y` no prompt do terminal para prosseguir com o processo de sincronização. Para cancelar o processo, digite `N` ou `n` ou, ainda, aperte `ENTER.` Note que, ao utilizar a flag `--force` você não será questionado e o comando rodará sem realizar nenhuma pergunta.

## Configurar um tenant

Caso necessário, você poderá configurar um tenant. Para isso digite `sudo orbit tenant configure <tenant name>`.

- Por exemplo: `sudo sudo orbit tenant configure teste`.

Digite `y` no prompt do terminal para prosseguir com o processo de configuração. Para cancelar o processo, digite `N` ou `n` ou, ainda, aperte `ENTER.` Note que, ao utilizar a flag `--force` você não será questionado e o comando rodará sem realizar nenhuma pergunta.

A saída do comando para reconfigurar um tenant será como no exemplo abaixo:

```
Are you sure you want to reconfigure this tenant: y
Creating tenant storage
Executing database migration process
Changing database passwords
Checking tenant key configuration
Restarting Orbini services...
```

Este comando irá refazer toda a configuração, do mesmo modo que é feita durante a criação de um tenant, tornando um comando útil quando ocorrem problemas de configuração na criação de um tenant.

## Listar os tenants

Caso seja necessário, você poderá listar os tenants existentes na sua instância do senhasegura. Para isso, digite o comando `sudo orbit tenant list`. Os tenants serão listados de forma sequencial, exibindo o código de cada um, o nome e o seu estado atual.

A saída do comando de listagem de tenants será como abaixo:

```
+--------------------------------------+------------------+---------+
|                 CODE                 |      TENANT      | STATUS  |
+--------------------------------------+------------------+---------+
| 018debbb-0902-740c-a07b-6cb18d7rfg5b | senhasegura      | ENABLED |
| 01905595-1ed8-7744-bcb9-afeb87009173 | tenant1          | ENABLED |
| 019055a8-7a9d-769c-8371-8ea3913a4c31 | tenant2          | ENABLED |
+--------------------------------------+------------------+---------+
```

## Primeiro acesso

No seu primeiro acesso ao ambiente *multi-tenant*, alguns passos serão necessários para acessar o ambiente. São eles:

1. [Aceitar o EULA](https://docs.senhasegura.io/v3-32/docs/pt/installation-eula) (*End User License Agreement*).  
2. [Inserir chave de ativação do senhasegura](https://docs.senhasegura.io/v3-32/docs/pt/installation-how-to-activate-the-senhasegura-license).  
3. O primeiro acesso deverá ser feito com o usuário padrão do senhasegura.

:::(error) (Atenção\!)  
No cenário de *multi-tenant*, o usuário padrão para login nos tenants criados é `admin`.  
:::

## Informações importantes

### Sistema de arquivos

O sistema de arquivos para o senhasegura com *multi-tenant* seguirá o padrão

```
/var/storage/senhasegura
/var/storage/tenant1
/var/storage/tenant2
```

O nome da pasta onde ficarão armazenados os dados do tenant é o mesmo nome dado ao tenant no momento da sua criação.

### Backup

Os procedimentos de backup seguem os mesmos da instância principal do senhasegura. Você poderá obter mais informações na documentação sobre backup no link [Backup](https://docs.senhasegura.io/v3-32/docs/pt/installation-backup-overview) do Help Center.

Contudo, os diretórios de backup sofreram uma modificação. Por conta do ambiente de *multi-tenant*, os backups ficarão armazenados em uma subpasta dentro da pasta de cada tenant, assim, cada tenant tem um pasta própria de backup, conforme o exemplo abaixo.

```
/var/storage/senhasegura/backup
/var/storage/tenant1/backup
/var/storage/tenant2/backup
```

### Orbit Config Manager

A opção **Orbit settings**, acessada através do caminho **Grid Menu \> Orbit Config Manager**, só estará disponível no tenant padrão `senhasegura`. Nos outros tenants essa opção não estará disponível. Também não é possível adicionar a permissão para visualização dessa opção.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).