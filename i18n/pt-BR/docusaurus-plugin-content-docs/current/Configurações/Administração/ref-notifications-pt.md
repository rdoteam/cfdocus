# Referência - Notificações

Para acessar as notificações do sistema, acesse **Grid Menu > Configurações > Notificações > Configurações**. Os campos abaixo fazem referência ao relatório de busca de notificações. Na tela, você encontrará as seguintes informações:

## Barra superior

| Campo                         | Descrição                                                                                                           |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Mostrar filtros**     | Representado pelo botão em forma de lupa, esconde ou mostra as opções de filtro.                                   |
| **Atualizar**           | Representado pela seta em sentido anti-horário, atualiza as informações na tela.                                   |
| **Exibir ações**      | Representado pelos três pontos verticais, abre um menu suspenso com as opções para o relatório de notificações. |
| **Nova notificação**  | Representada pelo ícone de adição. Abre a janelaCadastrar nova notificação.                                      |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório.                          |
| **Exportar CSV**        | Representado pelo ícone de folha de papel, baixa o relatório.                                                       |
| **Agendar relatório**  | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório.                         |

Ao clicar em **Mostrar filtros**, uma série de campos é mostrada. Eles são utilizados para refinar os resultados da sua busca. São eles:

| Campo                    | Descrição                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nome**           | Nome da notificação cadastrada no senhasegura.                                                                                             |
| **Adicionado em**  | Abre um calendário que possibilita escolher uma data. Esta data será o dia inicial do intervalo de tempo para o filtro das notificações. |
| **até**           | Abre um calendário que possibilita escolher uma data. Esta data será o dia final do intervalo de tempo para o filtro das notificações.   |
| **Adicionado por** | Filtra de acordo com o nome de usuário de quem cadastrou a notificação.                                                                   |
| **Ativo**          | Menu suspenso. Filtra pelo status da notificação no senhasegura. Pode ser**Sim** ou **Não**.                                  |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

Abaixo, temos o campo de listagem que contém todas as notificações, filtradas ou não, que são apresentadas com os seguintes campos:

* **Código**: código do cadastro da notificação no senhasegura.
* **Nome**.
* **Alterado em**: data da última alteração naquela notificação. Caso não tenha ocorrido nenhuma alteração, o campo ficará vazio.
* **Alterado por**: usuário que realizou a última alteração naquela notificação. Caso não tenha ocorrido nenhuma alteração, o campo ficará vazio.
* **Adicionado em**: data da criação do registro da notificação.
* **Adicionado por.**
* **Ativo**.
* Na coluna **Ação** você tem a opção de **Alterar**, representada pelo ícone do lápis e papel, e o menu suspenso, representado pelo ícone dos três pontos verticais, que apresenta a opção de inativar/ativar a notificação.

## Janela Cadastrar notificação

Na janela **Cadastrar notificação**, você tem os seguintes campos:

| Campo                                                          | Descrição                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nome da notificação**                                | Nome da notificação que será cadastrada no senhasegura.                                                                                                                                                                                                          |
| **Caixas de seleção ao lado do nome da notificação** | Quatro caixas de seleção onde você pode escolher um ou mais meios de entregar as notificações.<br />As opções são: *E-Mail*, *Tela*, *SMS* e <br />*Enviar notificações apenas para contatos que possuem acesso às credenciais ou dispositivos.* |

### Aba notificação

| Campo                    | Descrição                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Notificação**  | Ao clicar no ícone representado pelo sinal de adição, será aberto o modal**Notificações**.                             |
| **Código**        | Código da notificação cadastrada no senhasegura.                                                                                |
| **Nome**           | Nome do tipo de notificação cadastrado no senhasegura.                                                                           |
| **Categoria**      | Categoria do tipo de notificação.                                                                                                |
| **Adicionado em**  | Data e hora em que o tipo de notificação foi adicionado àquela notificação. Será exibida no formato `DD/MM/AAAA HH:MM:SS`. |
| **Adicionado por** | Nome do usuário que adicionou aquele tipo de notificação.                                                                       |

### Aba Contatos

| Campo                      | Descrição                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Contatos**         | Ao clicar no ícone representado pelo sinal de adição, será aberto o modal **Contatos**.                                               |
| **Código**          | Código de cadastro do contato no senhasegura.                                                                                             |
| **Nome**             | Nome do usuário.                                                                                                                          |
| **Nome de usuário** | Nome de usuário.                                                                                                                          |
| **E-Mail**           | Endereço de e-mail do usuário.                                                                                                           |
| **Departamento**     | Departamento ao qual o usuário está atrelado no senhasegura.                                                                             |
| **Adicionado em**    | Data em hora em que o usuário em questão foi adicionado como contato na notificação. Será exibida no formato `DD/MM/AAAA HH:MM:SS`. |
| **Adicionado por**   | Nome do usuário que adicionou o contato na notificação.                                                                                 |

:::tip Info
Em ambas as abas, do lado esquerdo de cada item você tem um ícone de lixeira. Este ícone serve para excluir aquele contato ou tipo de notificação do cadastro que você está criando ou editando.
:::

Na janela **Cadastrar notificação**, no canto inferior esquerdo, você pode visualizar os detalhes da notificação. Para isso, passe o mouse por cima do ícone representado pela figura do olho. Assim, uma tooltip com as seguintes informações vai aparecer:

* A label **Criado por** apresenta o nome e o nome de usuário o qual criou a notificação, assim como a hora e data em que foi criada a notificação por este usuário. Será apresentada na forma: `Criado por <USER(USERNAME)> em DD/MM/AAAA HH:MM:SS`.
* A label **Última alteração por** apresenta o nome e o nome de usuário o qual alterou a notificação pela última vez, assim como a hora e data em que foi criada a notificação por este usuário. Será apresentada na forma: `Criado por <USER(USERNAME)> em DD/MM/AAAA HH:MM:SS`.

### Modal Notificações

No modal de **Notificações** você tem a barra superior, que tem a funcionalidade de ajudar a filtrar as notificações que estão cadastradas no senhasegura.

| Campo               | Descrição                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| **Código**   | Filtra pelo código do tipo de notificação cadastrada no senhasegura. |
| **Nome**      | Filtra pelo nome do tipo de notificação cadastrada no senhasegura.    |
| **Categoria** | Menu suspenso com as categorias para os tipos de notificação.         |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

Abaixo, temos o campo de listagem que contém todos tipos de notificações, filtradas ou não, que são apresentadas com os seguintes campos:

* **Caixa de seleção**: permite selecionar o tipo de notificação. É possível selecionar todas ou nenhuma. Para selecionar todos os registros, clique no ícone representado pelo quadrado vazado com um símbolo de check; para desfazer a seleção, clique no ícone representado pelo quadrado vazado.
* **Código**.
* **Nome**.
* **Categoria**.
* No rodapé do modal você tem os botões **Adicionar**, que serve para adicionar a seleção feita à notificação; **Cancelar**, que fecha o modal e cancela a operação.

### Modal Contatos

No modal **Contatos** você tem a barra superior, que tem a funcionalidade de ajudar a filtrar os contatos que estão cadastrados no senhasegura.

| Campo             | Descrição                                                                        |
| ----------------- | ---------------------------------------------------------------------------------- |
| **Código** | Filtra pelo código do contato cadastrado no senhasegura.                          |
| **Nome**    | Filtra pelo nome do contato cadastrado no senhasegura.                             |
| **E-mail**  | Filtra pelo endereço de e-mail do contato conforme foi cadastrado no senhasegura. |

Além dessas opções, você tem dois botões: **Filtrar**, que aplica os parâmetros que foram passados nos campos e **Limpar**, que limpa todos os parâmetros.

Abaixo, temos o campo de listagem que contém todos contatos, filtrados ou não, que são apresentados com os seguintes campos:

* **Caixa de seleção**: permite selecionar o contato. É possível selecionar todos ou nenhum. Para selecionar todos os registros, clique no ícone representado pelo quadrado vazado com um símbolo de check; para desfazer a seleção, clique no ícone representado pelo quadrado vazado.
* **Código**.
* **Nome**.
* **E-mail.**
* No rodapé do modal você tem os botões **Adicionar**, que serve para adicionar a seleção feita à notificação e o botão **Cancelar**, que fecha o modal e cancela a operação.
