# Como gerenciar notificações

O senhasegura possibilita o envio de relatórios por e-mail, assim como a programação destes. Isso permite que você programe o envio, por exemplo, do relatório de sessões remotas para alguns usuários. Estes usuários receberão os relatórios, no formato, dias e horários configurados no agendamento, desta forma ficarão sempre atualizados sobre as novas sessões remotas realizadas durante o período.

## Cadastrar uma nova notificação

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Notificações > Configurações**.
3. Na listagem **Cadastro de notificações**, serão apresentadas as notificações que estão cadastradas no senhasegura.
4. Para criar uma nova notificação, na barra superior, clique em **Exibir ações**, representado pelo ícone dos três pontos verticais, e selecione **Nova notificação** no menu suspenso.
5. Na janela **Cadastrar nova notificação** preencha os seguintes campos:
   1. **Nome**: um nome para a nova notificação.
   2. Do lado do campo **Nome** selecione os meios que você deseja utilizar para enviar a notificação. As opções são: *Email*, *Tela*, *SMS* e *Enviar notificações apenas para contatos que possuem acesso às credenciais ou dispositivos*. Selecione uma ou mais destas opções.
   3. Na aba **Notificação**, clique no sinal de adição do lado da palavra **Notificações** para abrir o modal **Notificações**. Neste, selecione as notificações que deseja enviar. Perceba que agora a notificação desejada aparecerá dentro do campo de notificações.
   4. Na aba **Contato**, clique no sinal de adição do lado da palavra **Contatos** para abrir o modal **Contatos**. Neste, selecione os contatos que receberão as notificações.
6. Clique em **Salvar**.

:::(warning) (Atenção)
Para utilizar a opção de envio de notificações via SMS, é necessário ter a integração com o Zenvia devidamente configurada. Sem essa configuração, não serão enviadas as notificações por SMS. Para saber como configurar a integração com o Zenvia, acesse o documento [Integração com serviço de SMS
](https://docs.senhasegura.io/v3-31/docs/pt/administration-integration-with-sms-service):::

### Relatório de notificações para falha na troca de senha

É possível programar o envio de um email para relatórios em caso de falha na troca de senhas. Por padrão essa opção vem desabilitada, para habilitá-la, siga as instruções a seguir:

1. Cadastre uma nova notificação conforme mostrado anteriormente escolhendo a opção **Resumo diário de senhas** no momento do cadastro da notificação.
2. Clique, no canto superior esquerdo, em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
3. No menu lateral, selecione **Parâmetros do sistema > Parâmetros de sistema**.
4. Na tela **Configuração de sistema** selecione **Notificações** na barra lateral esquerda.
5. No campo **Notificação** diária de falhas nas trocas de senhas marque a opção **Alterar** o horário padrão de envio da notificação.
6. No menu suspenso **Quando notifica**r, selecione um horário.
7. Clique em **Salvar**.

:::tip Info
É possível inserir horários diferentes daqueles que estão pré-definidos nas caixas de seleção. Para isso, selecione a caixa de seleção e digite um valor de hora que seja válido. O sistema aceita apenas horários válidos, caso seja inserido um valor inválido, o sistema exibirá uma mensagem de erro na tela.
:::

## Como alterar uma notificação

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Notificações > Configurações**.
3. Na listagem **Cadastro de notificações**, serão apresentadas as notificações que estão cadastradas no senhasegura.
4. Na coluna **Ação**, clique em **Alterar**, representado pelo ícone do lápis e papel.
5. A janela **Cadastrar notificação** será aberta em modo de edição.
6. Altere as informações necessárias e clique em **Salvar**.

## Como inativar uma notificação

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Notificações > Configurações**.
3. Na listagem **Cadastro de notificações**, serão apresentadas as notificações que estão cadastradas no senhasegura.
4. Identifique a notificação que deseja inativar e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais e selecione **Inativar configuração**.
5. No modal de confirmação, clique em **Sim**.

## Como reativar uma notificação

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Notificações > Configurações**.
3. Na listagem **Cadastro de notificações**, serão apresentadas as notificações que estão cadastradas no senhasegura.
4. No menu de busca, na barra superior, clique no menu suspenso **Ativo** e selecione a opção **Não**.
5. Clique em **Filtrar**.
6. A listagem irá filtrar as notificações cadastradas que estão inativadas. Elas serão mostradas com o texto na cor vermelha.
7. Identifique a notificação que deseja reativar e, na coluna **Ação**, clique no ícone representado pelos três pontos verticais e selecione **Ativar** configuração.
8. No modal de confirmação, clique em **Sim**.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
