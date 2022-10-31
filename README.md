## 📄 Sobre

Api para uma loja de itens medievais utilizando CRUD através de Typescript

## 📋 Executando o problema

Clone o repositório:

```
git@github.com:yvasconcellos/smith-api.git
```
<details>
  <summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
  
  > Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queira fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`.
  - A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybesmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

   ⚠ Atenção ⚠ Caso você esteja usando macOS e ao executar o `docker-compose up -d` se depare com o seguinte erro:

  ~~~bash
  The Compose file './docker-compose.yml' is invalid because:
  Unsupported config option for services.db: 'platform'
  Unsupported config option for services.node: 'platform'
  ~~~

> Foram encontradas 2 possíveis soluções para este problema:
> 1. Você pode adicionar manualmente a option `platform: linux/amd64` no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.
> 2. Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha `export DOCKER_DEFAULT_PLATFORM=linux/amd64`, essa é uma solução global.
> As soluções foram com base [nesta fonte](https://stackoverflow.com/a/69636473).

---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

</details>

## 🔎 Rotas

### Login
  
  <strong>POST /login</strong>
  </br>
  </br>
    • Se o login for feito com sucesso retorna um token para o usuário.
  </br>
    • O endpoint deve receber a seguinte estrutura:
  
```json
  {
    "username": "string",
    "password": "string"
  }
```

### Product

  <strong>POST /products</strong>
  </br>
  </br>
    • Cadastra um novo produto.
  </br>
    • O endpoint deve receber a seguinte estrutura:
  
  ```json
    {
      "name": "string",
      "amount": "string"
    }
  ```

  <strong>GET /products</strong>
  </br>
  </br>
  • Retorna todos os produtos do banco de dados.

### User

  <strong>POST /users</strong>
  </br>
  </br>
    • Cadastra um novo usuário.
  </br> 
    • O endpoint deve receber a seguinte estrutura:
  
  ```json
  { 
    "username": "string",
    "classe": "string",
    "level": "number",
    "password": "string"
  }
```

### Order

  <strong>GET /orders</strong>
  </br>
  </br>
    • Retorna todos os pedidos e os ids dos produtos associados a estes.

  <strong>POST /orders</strong>
  </br>
  </br>
    • Cadastra novos pedidos.
  </br>
    • O pedido só é criado caso a pessoa usuária esteja logada e o token JWT validado.
  </br>
    • O endpoint deve receber a seguinte estrutura:
  
```json
  {
    "productsIds": [1, 2]
  }
```

## 👨🏻‍💻 Habilidades

- Criação de API REST utilizando a arquitetura de camadas (Model-Service-Controller);
- CRUD com banco de dados com o MySQL.
- Utilização de Typescript com Banco de Dados
- Utilização de JWT
- Validar dados das requisições com a biblioteca Joi.

## 🛠️ Ferramentas & Metodologias Utilizadas

- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [MySQL](https://www.mysql.com/);
- [JWT(Autenticação)](https://jwt.io/);
- [Joi](https://joi.dev/api/?v=17.6.0);
- [Docker](https://www.docker.com/);
- [TypeScript](https://www.typescriptlang.org/);
