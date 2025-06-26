# Pipeline de Dados com Azure Data Lake e Databricks

Este repositório contém um pipeline de engenharia de dados desenvolvido como atividade prática da disciplina de **Engenharia de Dados** da **Faculdade SATC**.

## Sumário

- [Visão Geral do Projeto](#visão-geral-do-projeto)
- [🧰 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura do Pipeline](#arquitetura-do-pipeline)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Detalhamento das Camadas](#detalhamento-das-camadas)
  - [Camada Bronze](#camada-bronze)
  - [Camada Silver](#camada-silver)
  - [Camada Gold](#camada-gold)
- [Notebook Bronze](#notebook-bronze)
- [Notebook Silver](#notebook-silver)
- [Notebook Gold](#notebook-gold)
- [👥 Autores](#-autores)
- [📄 Licença](#-licença)
- [📚 Referências](#-referências)

---

## Visão Geral do Projeto

O pipeline é responsável por realizar a ingestão, tratamento, enriquecimento e disponibilização de dados usando uma arquitetura em camadas: **Bronze**, **Silver** e **Gold**. Os dados são armazenados em um **Azure Data Lake Storage Gen2** e processados com **Apache Spark** em **Azure Databricks**.

---

## 🧰 Tecnologias Utilizadas

- [Azure Data Lake Storage Gen2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction)
- [Azure Databricks](https://azure.microsoft.com/en-us/products/databricks/)
- [Apache Spark (PySpark)](https://spark.apache.org/docs/latest/api/python/)
- [Delta Lake](https://delta.io/)
- [Terraform](https://www.terraform.io/)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/)
- [Docker](https://www.docker.com/)
- [SQL Server (Docker)](https://hub.docker.com/_/microsoft-mssql-server)
- [Python](https://www.python.org/)

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

---

### Executar notebooks no Databricks

1. **Bronze**: Leitura da landing zone e criação da camada Bronze.
2. **Silver**: Limpeza e transformação dos dados da Bronze.
3. **Gold**: Cálculo de KPIs e salvamento dos dados analíticos finais.

---

## Detalhamento das Camadas

### Camada Bronze

Armazena dados brutos vindos do SQL Server. Os arquivos são colocados na **landing zone** do ADLS. Nenhuma transformação é aplicada nesta etapa.

---

### Camada Silver

Aplica limpeza e transformação dos dados. Corrige tipos, remove nulos e formata campos.

---

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
  [https://github.com/jlsilva01/adls-azure](https://github.com/jlsilva01/adls-azure)
