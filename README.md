npm i nodemon -D -> responsável por atualizar o server a cada vez que salvo o projeto. (Amb Dev)

npm i nodemon -> responsável por colocar o projeto em produção.

 "build": "sucrase ./src -d ./build --transforms imports",
    "dev": "nodemon src/server.js"

npm run dev -> inicia o projeto.


instalações:
axios;
sucrase; -> pega em um formato e converte para a versão do navegador.

"build": "sucrase ./src -d ./build --transforms imports", -> cria "builders" para os projetos.

Sequelize -> conexão com ORM
Sequelize cli -> para passar instruções

Pacotes para utilizar o banco de dados:
* npm i 
* npm i sequelize-cli -D
* npm i sequelize
* npm install pg --save
* npm i pg-hstore //Instala o drive do postgree

Conectando ao banco de dados:
* yarn sequelize migration:create --name=users // Cria o banco
* yarn sequelize db:migrate                   // Executa o banco 

Utilizamos https://www.md5hashgenerator.com/ para gerar um token.