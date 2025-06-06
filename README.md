# pipelineDeDados

## Rodar a criação das tabelas

Executar todos os comandos na raiz do projeto
- ```docker compose up``` para subir um banco postgree
- ```npm i``` instala as dependencias do projeto

Irá precisar criar um arquivo na raiz do projeto chamado ```.env``` com a seguinte variavel:
```
DATABASE_URL="postgresql://admin:admin@localhost:5432/gamesLib?schema=public"
```

Após isso rodar os comandos abaixo:

- ```npx prisma migrate dev``` para criar a migração no banco
- ```npm run seed``` popula o banco 
