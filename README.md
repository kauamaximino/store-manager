
<h1 align="center">Store Manager 🏪</h1>

<h3 align="center">Neste projeto desenvolvi uma API utilizando a arquitetura MSC (model-service-controller)! <h3/>

<br/>

## 🗞️ Sobre o projeto

 Um sistema de gerenciamento de vendas no formato dropshipping em que é possível criar, visualizar, deletar e atualizar produtos e vendas. 
 
 Foi utilizado o banco de dados MySQL para a gestão de dados. Além disso, a API é RESTful.

---
## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e o [Insomnia](https://insomnia.rest/) ou algum [outro software](https://www.postman.com/) para testar as rotas desenvolvidas nessa API RESTful
<details>

```bash

# Clone este repositório
git clone git@github.com:kauamaximino/store-manager.git

# Acesse a pasta do projeto no terminal/cmd
cd store-manager

# Instale as dependências
npm install

# Inicie o banco de dados com o Docker
docker compose up -d

# Execute a aplicação em modo de desenvolvimento
npm run debug

# O servidor inciará na porta:3000 - acesse http://localhost:3000  

```
</details>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
-  **[Node.js](https://nodejs.org/en/)**
-  **[Express](https://expressjs.com/pt-br/)**
-  **[Nodemon](https://www.npmjs.com/package/nodemon)**
-  **[Mocha](https://mochajs.org/)**
-  **[Chai](https://www.chaijs.com/)**
-  **[Sinon](https://sinonjs.org/)**
-  **[Joi](https://www.npmjs.com/package/joi)**

> Veja o arquivo  [package.json](https://github.com/kauamaximino/store-manager/blob/main/package.json)
