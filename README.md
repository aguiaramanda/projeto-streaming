# PurpleMusic - Projeto de Streaming

## Descrição

O PurpleMusic é uma plataforma de streaming de música onde os usuários podem gerenciar suas playlists e explorar músicas de uma API externa. O projeto envolve tanto o backend quanto o frontend, com foco na criação de uma API RESTful, integração com a API Deezer e uma interface de usuário intuitiva.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, Sequelize, PostgreSQL (ou MySQL)
- **Frontend:** Angular, Bootstrap
- **API Externa:** Deezer
- **Banco de Dados:** PostgreSQL
- **Autenticação:** JWT
- **Docker:** Backend + Frontend + Banco de Dados

## Instalação e Execução

### Pré-requisitos

- Node.js
- Docker
- Banco de Dados (PostgreSQL)

### Backend

1. Clone o repositório:
   ```bash
   git clone http
2. Instale as dependências:
    ```bash
    npm install
3. Configure as variáveis de ambiente (crie um arquivo .env com as credenciais de acesso ao banco de dados).
4. Para rodar o backend com o Docker:
   ```bash
   docker-compose up --build

### Frontend
1. Navegue até o diretório do frontend:
    ```bash
    cd projeto-streaming/frontend
2. Instale as dependências
   ```bash
   npm install
3. Inicie o frontend
   ```bash
   ng serve
   
# Dockerização Completa
Para rodar ambos, backend e frontend, com o banco de dados utilizando Docker Compose:

1. Execute o comando:
     ```bash
     docker-compose up --build
  O sistema estará disponível em http://localhost:4200 para o frontend e o backend estará acessível através das rotas definidas.
     
# Estrutura de Diretórios

backend/: Contém o código do servidor, configurações do banco de dados, migrations e modelos.

frontend/: Contém o código Angular, componentes e serviços.

# Rotas da API

POST /login: Autenticação de usuários (JWT).

GET /users: Lista todos os usuários.

POST /users: Cria um novo usuário.

# Arquitetura

O sistema é dividido em duas partes principais: o backend, que gerencia a autenticação, o banco de dados e as rotas da API, e o frontend, que consome a API para exibir as informações ao usuário. A arquitetura foi projetada para ser escalável e fácil de manter.

# Decisões Técnicas

JWT: Utilizado para autenticação, garantindo segurança e escalabilidade.

Sequelize: ORM utilizado para a interação com o banco de dados, facilitando a criação de migrations e a definição de modelos.

Deezer API: Utilizada para fornecer informações de músicas e capas de álbuns.
