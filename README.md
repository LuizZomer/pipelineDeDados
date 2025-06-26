# Pipeline de Dados com Azure Data Lake e Databricks

Este repositório contém um pipeline de engenharia de dados desenvolvido como atividade prática da disciplina de **Engenharia de Dados** da **Faculdade SATC**.

## Sumário

- [Visão Geral do Projeto](#visão-geral-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Pipeline](#arquitetura-do-pipeline)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Execução dos Scripts](#execução-dos-scripts)
- [Detalhamento das Camadas](#detalhamento-das-camadas)
- [Notebook Bronze](#notebook-bronze)
- [Notebook Silver](#notebook-silver)
- [Notebook Gold](#notebook-gold)
- [Referências](#referências)

---

## Visão Geral do Projeto

O pipeline é responsável por realizar a ingestão, tratamento, enriquecimento e disponibilização de dados usando uma arquitetura em camadas: **Bronze**, **Silver** e **Gold**. Os dados são armazenados em um **Azure Data Lake Storage Gen2** e processados com **Apache Spark** em **Azure Databricks**.

---

## Tecnologias Utilizadas

- Azure Data Lake Storage Gen2
- Azure Databricks
- Apache Spark (PySpark)
- Terraform + Azure CLI
- SQL Server (Docker)
- MongoDB (Bônus)
- Python
- Delta Lake

---

## Arquitetura do Pipeline

```text
+-------------+      +-------------+      +-------------+
|   Ingestão  | ---> |  Tratamento | ---> |  Analytics  |
|   (Bronze)  |      |  (Silver)   |      |  (Gold)     |
+-------------+      +-------------+      +-------------+
```

- **Camada Bronze**: Dados brutos do SQL Server exportados como CSV.
- **Camada Silver**: Dados limpos e tratados.
- **Camada Gold**: Dados prontos para consumo analítico.

---

## Configuração do Ambiente

### Requisitos

- Azure CLI configurado
- Terraform instalado
- Docker instalado
- Conta no Azure

### Subir o SQL Server com Docker

```bash
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=SqlServer123!" -p 1433:1433 --name sql_server_container -d mcr.microsoft.com/mssql/server
```

### Subir o MongoDB com Docker (bônus)

```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

### Provisionar ADLS com Terraform

```bash
cd terraform
az login
terraform init
terraform apply
```

---

## Execução dos Scripts

### Exportar dados do SQL Server para CSV

Execute o script `sql_to_csv.py` para extrair dados do banco e salvar em arquivos CSV.

```bash
python sql_to_csv.py
```

### Enviar arquivos CSV para o ADLS (landing zone)

Configure as credenciais no `upload_to_adls.py` e execute:

```bash
python upload_to_adls.py
```

### Executar notebooks no Databricks

1. **Bronze**: Leitura da landing zone e criação da camada Bronze.
2. **Silver**: Limpeza e transformação dos dados da Bronze.
3. **Gold**: Cálculo de KPIs e salvamento dos dados analíticos finais.

---

## Detalhamento das Camadas

### Camada Bronze

Armazena dados brutos vindos do SQL Server. Os arquivos são colocados na **landing zone** do ADLS. Nenhuma transformação é aplicada nesta etapa.

```text
abfss://landing@nomestorage.dfs.core.windows.net/
```

### Camada Silver

Aplica limpeza e transformação dos dados. Corrige tipos, remove nulos e formata campos.

### Camada Gold

Cria tabelas analíticas prontas para consumo. Realiza junções, agregações e cálculos de KPIs.

---

## Notebook Bronze

### Objetivo:
Criar a camada **Bronze** a partir de arquivos brutos (CSV) da landing zone no ADLS.

### Etapas principais:

- Leitura dos arquivos CSV do ADLS.
- Criação de tabelas Delta.
- Armazenamento na camada Bronze.

### Resultado esperado:

- Tabelas Delta com dados brutos.

---

## Notebook Silver

### Objetivo:
Limpar e transformar os dados da camada Bronze.

### Etapas principais:

- Remoção de valores nulos.
- Conversão de tipos de dados.
- Enriquecimento e padronização.

### Resultado esperado:

- Tabelas limpas e estruturadas.

---

## Notebook Gold

### Objetivo:
Transformar os dados da camada **Silver** em datasets finais na **camada Gold**, prontos para relatórios e análises.

### Etapas principais:

- Cálculo de KPIs.
- Agregações e análises.
- Junções de tabelas.
- Armazenamento em Delta.

### Resultado esperado:

- Tabelas analíticas finais para BI.

---

## 👥 Autores

- **Luiz Felipe Zomer**
- **Luiz Filipe Linhares**
- **Thiago Almeida**
- **Willian Minatto**
- **Gabriel Tassi Frello**
- **Gabriel Boelter**

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 📚 Referências

- [Documentação Azure Databricks](https://learn.microsoft.com/en-us/azure/databricks/)
- [Delta Lake](https://delta.io/)
- Exemplo de repositório SATC:  
  [https://github.com/jlsilva01/projeto-ed-satc](https://github.com/jlsilva01/projeto-ed-satc)
