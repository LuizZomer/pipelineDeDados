# Como rodar os scripts

## Instanciar container docker do postgree

Execute o comando na pasta raiz

```
docker compose up
```

## Instalar dependencias do node

```
npm i
```

## Criar as tabelas na database

```
npx prisma migrate dev
```

## Popular as tabelas

```
npm run seed
```

## Verificar quantas linhas tem cada tabela

```
npm run count
```
