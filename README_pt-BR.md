# 🎧 Spotify Clone - Backend com Node, Express e MongoDB

Este é o backend de um projeto full stack inspirado no Spotify, desenvolvido durante o intensivo da Hashtag Treinamentos. O projeto utiliza Node.js, Express e MongoDB para gerenciar os dados de músicas, artistas e playlists.

## 🔗 Tecnologias utilizadas

- [Node.js](node.jshttps://nodejs.org/pt)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/)
- [Vite](https://vite.dev/)
- [React](https://vite.dev/)
- [dotenv](https://www.npmjs.com/package/dotenv)


## 🚀 Como executar localmente

### 1. Clone o repositório
git clone https://github.com/usuario/nome-do-repositório.git
cd nome-do-repositório

### 2. Instale as dependências
- npm create vite@latest .
    > Ignore files and continue
    > React
    > Javascript


Atenção: No primeiro uso, é necessário instalar as dependências separadamente em cada parte do projeto:
    - Abra três terminais no VSCode ( Ctrl + Shift + ` ).
    - Em cada terminal, navegue até as seguintes pastas:
    - Terminal 1: cd ./front-end
    - Terminal 2: cd ./back-end
    - Terminal 3: permaneça na pasta raiz do projeto
    - Execute npm install em cada terminal.
    ** Para as demais instalações, permaneça na pasta raiz do projeto
    ** Dica: renomeie cada terminal para que possa se localizar facilmente

- npm install
- npm install dotenv
- npm install mongodb
- npm install express
- npm install cors
- npm install axios

- Instale o [node.js](https://nodejs.org/pt) (do site)

### 🧹 Observação sobre pastas geradas automaticamente
Ao rodar o comando npm create vite@latest . na pasta raiz do projeto, algumas pastas e arquivos são criados automaticamente na raiz, como:
-> public/
-> src/ (fora das pastas back-end e front-end)
-> .gitignore
-> eslint.config.js
-> index.html
-> vite.config.js

Porém, como o projeto já possui essas pastas dentro das pastas específicas back-end e front-end, para evitar confusão e manter a organização, recomenda-se apagar essas pastas e arquivos gerados na raiz.

Assim, você mantém o foco na estrutura organizada e evita duplicidades.

### 3. Crie um arquivo .env
Baseado no arquivo .env.example (back-end e front-end), crie um arquivo .env com os dados do seu MongoDB e porta de execução.
    MONGO_URL=your_mongo_connection_string
        > Se não tiver, crie uma conta no MongoDB: https://www.mongodb.com/
    PORT=port (ex: 3000)

### 4 . Inicie o servidor
Vai ser necessário abrir dois terminais (ctrl+shift+'):
Para o back-end:
    cd ./back-end
    npm i donenv
    node ./api/server.js
Mensagem: "Servidor está escutando na <port>"

Para o front-end?
    cd./front-end
    npm run dev
Clice no link ➜ Local: http://localhost:<port>/
    
## 🧾 Estrutura de pastas
 /
 ├─ back-end/                       # Código responsável pela API e conexão com o banco de dados MongoDB
 │  ├─ api/
 │  │  ├─ connect.js                # Faz a conexão com o MongoDB
 │  │  ├─ insertMany.js             # Insere diversos registros no banco
 │  │  └─ server.js                 # Inicializa e configura o servidor Node.js
 │  ├─ .env                         # Contém variáveis sensíveis (não enviado para o GitHub)     
 │  ├─ .env.example                 # Modelo de arquivo .env para facilitar a configuração local
 │  ├─ .gitignore                   # Arquivos e pastas ignoradas pelo Gi
 │  ├─ package-lock.json            # Controle de versões das dependências
 │  └─ package.json                 # Declaração das dependências e scripts do back-end
 │
 ├─ front-end/                      # Código da interface do usuário usando Vite + React
 │  ├─ api/
 │  │  └── api.js                   # Configuração de acesso à API (utiliza VITE_API_URL)
 │  ├─ src/                         # Código-fonte principal do front-end
 │  │  ├─ assets/
 │  │  │  ├─ database/
 │  │  │  │  ├─ artists.js          # Simulação de dados de artistas
 │  │  │  │  └─ songs.js            # Simulação de dados de músicas
 │  │  │  └─ logo/
 │  │  │     └── spotify-logo.png   # Logo da aplicação
 │  │  ├─ components/               # Componentes reutilizáveis da interface
 │  │  │  ├─ Header.jsx
 │  │  │  ├─ ItemList.jsx
 │  │  │  ├─ Main.jsx
 │  │  │  ├─ Player.jsx
 │  │  │  ├─ SingleItem.jsx
 │  │  │  ├─ SongItem.jsx
 │  │  │  └─ SongList.jsx
 │  │  ├─ pages/                    # Páginas principais da aplicação
 │  │  │  ├─ Artist.jsx
 │  │  │  ├─ Artists.jsx
 │  │  │  ├─ Home.jsx
 │  │  │  ├─ Song.jsx
 │  │  │  └─ Songs.jsx
 │  │  ├─ App.jsx                   # Componente principal do React
 │  │  ├─ index.css                 # Estilização global da aplicação
 │  │  └─ main.jsx                  # Ponto de entrada do React
 │  ├─ .env                         # Variáveis de ambiente do front-end (não enviado para o GitHub)
 │  ├─ .env.example                 # Modelo de .env para configuração da URL da API
 │  ├─ index.html                   # HTML principal que será injetado pelo React
 │  ├─ package-lock.json            # Controle de versões das dependências
 │  ├─ package.json                 # Declaração das dependências e scripts do front-end
 │  └─ vite.config.js               # Configurações do Vite
 │
 │  package-lock.json               # Controle de versões das dependências
 │  package.json                    # Declaração das dependências e scripts do front-end
 └─ README.md                       # Documentação principal do projeto


## 🧠 Funcionalidades

### 🔍 Consulta de músicas e artistas
O sistema permite visualizar uma lista de artistas e suas respectivas músicas. Para fins didáticos, foi implementada uma música por artista, com dados estáticos organizados em arquivos simulando um banco de dados.

### 🔄 Integração entre Front-end e Back-end via API REST
A interface (feita em React + Vite) consome dados disponibilizados por uma API criada com Node.js e Express, permitindo a separação clara entre a camada visual e a lógica de dados.

### 🧱 Back-end organizado em módulos
O código do servidor foi estruturado com separação de responsabilidades:
-> Rotas: definição dos endpoints da API
-> Controladores: lógica para tratar as requisições e respostas
-> Modelos: estrutura e manipulação dos dados (utilizando MongoDB)

## 📦 Produção
Este projeto é para fins educacionais, mas pode ser adaptado para uso real com melhorias em segurança, autenticação e performance.

## 👨‍💻 Autor
Este projeto foi desenvolvido como parte do Intensivão Full Stack da Hashtag Treinamentos (https://portalhashtag.com/). Repositório mantido por Bruno Felipe Passareli.

## 🛡️ Aviso
Nunca envie seu arquivo .env para o GitHub. Esse arquivo contém informações sensíveis como chaves de acesso a banco de dados.