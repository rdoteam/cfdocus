## Como adicionar a autenticação multifator

:::(warning) (Cuidado)
Após cadastrar um token, você só conseguirá acessar o sistema utilizando-o.
:::

Para habilitar a autenticação multifator padrão, siga estes passos:

1. No senhasegura, no canto superior direito, clique no **Menu pessoal**, representado pelo nome do usuário.
2. No menu suspenso, selecione **Configurar MFA**.
3. Responda **Sim** para prosseguir com a configuração do token.
4. Clique em **OTP**.
5. No seu dispositivo móvel, inicie o aplicativo de autenticação escolhido.
6. Usando a câmera, leia o código QR exibido na tela.
7. O token será registrado no aplicativo e um código de autenticação será exibido.
8. Após configurar o token no aplicativo, clique no link indicado na tela do senhasegura.
9. Preencha o campo Token com o código gerado pelo aplicativo.
10. Clique em **Validar**.

:::(warning) (Cuidado)

- Caso o aplicativo de autenticação não consiga ler o QR code, é possível utilizar a chave (key) fornecida pelo senhasegura.
- Caso você já possua um token atrelado à conta, independente de ter sido validado ou não, ao cadastrar um novo token, o antigo será substituído pelo novo.
- Os eventos relacionados às configurações de autenticação multifator são notificados através do **SIEM** e do **SYSLOG**.
- Durante a geração de um TOTP, um problema comum é a divergência de tempo entre o servidor e o dispositivo que está registrando o token. Essa diferença de tempo pode resultar em códigos de acesso temporários inválidos, impedindo uma autenticação bem-sucedida.
  :::

A partir desse momento, ao logar no senhasegura, você terá que executar a autenticação multifator.

---

**
