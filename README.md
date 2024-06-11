# Projeto de API de Vendas com Autenticação

Este projeto foi desenvolvido usando Node.js e SQLite e oferece operações CRUD para gerenciamento de vendas, além de funcionalidades de autenticação de usuários.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Requisitos de Instalação](#requisitos-de-instalação)
- [Configuração e Execução](#configuração-e-execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas da API](#rotas-da-api)
- [Uso](#uso)
- [Autenticação](#autenticação)

## Descrição do Projeto

Esta API permite o gerenciamento de vendas, oferecendo funcionalidades para consultar, adicionar, editar e excluir (CRUD) registros de vendas. Além disso, há suporte para autenticação de usuários, permitindo que apenas usuários autenticados realizem operações específicas.

## Funcionalidades

- **CRUD de Vendas**:
  - Criar novas vendas
  - Listar vendas existentes
  - Atualizar informações de vendas
  - Remover vendas do sistema

- **Autenticação de Usuários**:
  - Registro de novos usuários
  - Login de usuários existentes
  - Proteção de rotas com autenticação JWT

- **Gerar Relatório de Vendas**:
  - Gerar um PDF contendo as vendas em um intervalo de datas

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de código JavaScript no lado do servidor.
- **Express**: Framework para construção de APIs com Node.js.
- **SQLite**: Banco de dados leve e embutido.
- **jsonwebtoken**: Biblioteca para criação e verificação de tokens JWT.
- **bcrypt**: Biblioteca para hashing de senhas.
- **dotenv**: Bibioteca que facilita a carga de variáveis de ambiente a partir de arquivos .env em aplicativos Node.js, permitindo a configuração flexível e segura.
- **pdfmake**: Biblioteca JavaScript para gerar documentos PDF.
- **Arquitetura em Camadas**: O projeto segue uma arquitetura em camadas para separar responsabilidades e facilitar a manutenção e escalabilidade.

## Requisitos de Instalação

Antes de começar, você precisa ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados na sua máquina. Verifique as versões recomendadas na documentação oficial.

## Configuração e Execução

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/Jardeu/vendas.git
    ```

2. **Instale as dependências**:
    ```bash
    cd vendas
    npm install
    ```

3. **Configure as variáveis de ambiente**:
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis (substitua pelos valores apropriados):
    ```env
    DATABASE_FILE=vendas.db
    PORT=3000
    JWT_SECRET=sua_chave_secreta
    ```

5. **Inicie o servidor**:
    ```bash
    npm start
    ```

    A API estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

```plaintext
vendas/
│
├── src/
│   ├── controllers/      # Responsáveis por receber as requisições HTTP e enviar as respostas.
│   ├── database/         # Configuração e esquema do banco de dados
│   ├── middlewares/      # Middlewares de autenticação e outros
│   ├── models/           # Interação com o banco de dados
│   ├── routes/           # Definições das rotas
│   ├── services/         # Lógica de negócio
│   ├── utils/            # Scripts úteis
│   └── app.js            # Configuração do aplicativo Express
│
├── package.json          # Dependências do projeto
├── README.md             # Documentação do projeto
└── server.js             # Configuração do servidor
```

## Rotas da API

### Vendas

- **GET /sales**: Lista todas as vendas.
- **POST /sales**: Cria uma nova venda.
- **PUT /sales/:id**: Atualiza uma venda existente.
- **DELETE /sales/:id**: Remove uma venda.
- **GET /sales/pdf?start_date=DD-MM-YYYY&end_date=DD-MM-YYYY**: Gera um PDF contendo todas as vendas entre start_date e end_date (substitua DD-MM-YYYY por uma data válida nesse formato. Ex.: 20-05-2024).

### Autenticação de Usuários

- **POST /register**: Registra um novo usuário.
- **POST /login**: Autentica um usuário e retorna um token JWT.

## Uso

- Utilize um cliente HTTP, como Postman ou Insomnia, para fazer requisições HTTP para as rotas definidas na aplicação.
## Autenticação

- A API usa JSON Web Tokens (JWT) para autenticação. Após o login, o token deve ser incluído no cabeçalho Authorization de todas as requisições para rotas protegidas.

