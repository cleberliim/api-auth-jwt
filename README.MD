# API de Autenticação com JWT

Este é um projeto de API simples para autenticação de usuários utilizando **JWT (JSON Web Token)**. Ele permite que os usuários se registrem, façam login e acessem rotas protegidas. A API é construída com **Express.js** e documentada de maneira interativa usando **Swagger**.

## Tecnologias Utilizadas

- **Node.js** e **Express.js**: Framework para criação da API.
- **JWT (jsonwebtoken)**: Para gerar e validar tokens de autenticação.
- **bcryptjs**: Para criptografar senhas de usuários.
- **swagger-jsdoc** e **swagger-ui-express**: Para gerar e servir a documentação interativa da API.
- **dotenv**: Para gerenciar variáveis de ambiente.

## Funcionalidades

- **Registro de usuário**: Criação de novos usuários com senha criptografada.
- **Login de usuário**: Geração de token JWT ao fazer login com credenciais válidas.
- **Rotas protegidas**: Acesso a rotas protegidas com token JWT.
- **Documentação interativa**: A API está documentada com Swagger, permitindo testar as rotas diretamente pela interface do Swagger UI.


## Como Rodar o Projeto

### Pré-requisitos

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
- **npm**: O gerenciador de pacotes do Node.js.

### Passos para rodar a API

1. **Clone o repositório**:

   
   git clone https://github.com/seu-usuario/api-auth-jwt.git
   cd api-auth-jwt


2. **Instale as dependências:**

- **npm install**
- **Configure o arquivo .env:**

3. **Crie um arquivo .env na raiz do projeto e defina as variáveis necessárias:**

- **JWT_SECRET=supersecretkey**
- **JWT_EXPIRATION=1h**

**Execute o servidor:**

npm start
- **O servidor estará disponível em http://localhost:5000.**

4. **Documentação da API: A documentação interativa da API está disponível em:**

http://localhost:5000/api-docs

A API possui os seguintes endpoints:

- **POST /api/auth/register: Registrar um novo usuário.**
- **POST /api/auth/login: Fazer login e gerar um token JWT.**
- **GET /api/auth/protected: Acessar uma rota protegida (necessário token JWT).**

**Como Funciona**
Registro de usuário: O usuário fornece um nome de usuário e uma senha. A senha é criptografada e armazenada.
Login de usuário: O usuário faz login com as credenciais e, se válidas, recebe um token JWT.
Rotas protegidas: Para acessar rotas protegidas, o usuário deve fornecer o token JWT no cabeçalho Authorization.