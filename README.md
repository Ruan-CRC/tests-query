# Desempenho de Consultas SQL com Prisma

Olá!

Desenvolvi este simples setup para avaliar na prática o desempenho de consultas em bancos de dados. Nele, você pode escrever SQL puro no arquivo `script.ts`, popular seu banco de dados na pasta `seed`, e criar seus schemas usando o Prisma.io.

## Como Configurar

1. Copie o arquivo de exemplo de variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
2. Crie os diretórios para os dados do PostgreSQL e pgAdmin:
  ```bash
    mkdir -p .docker/postgres_data .docker/pgadmin_data
```
3. Ajuste as permissões do diretório do pgAdmin:
```bash
sudo chown -R 5050:5050 .docker/pgadmin_data
sudo chmod -R 755 .docker/pgadmin_data
```
4. Inicie os contêineres com Docker Compose:
```bash
docker compose up -d
```

## Scripts no package.json
1. npm run sql: Executa consultas SQL brutas usando um cliente PostgreSQL.
2. npm run postmigrate: O Snaplet analisa a estrutura do banco de dados para criar dados mockados.
3. npm run introspection: Para introspecção de um esquema existente em um banco de dados. Veja mais em Prisma Introspection Guide.


## Para criar os mocks de uma lida:
https://docs.snaplet.dev/seed/getting-started/overview
