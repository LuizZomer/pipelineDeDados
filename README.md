# Pipeline de Dados com Azure Data Lake e Databricks

Este repositório contém um pipeline de engenharia de dados desenvolvido como atividade prática da disciplina de **Engenharia de Dados** da **Faculdade SATC**.

## Sumário

- [Visão Geral do Projeto](#visão-geral-do-projeto)
- [🌍 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura do Pipeline](#arquitetura-do-pipeline)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Detalhamento das Camadas](#detalhamento-das-camadas)
  - [Camada Bronze](#camada-bronze)
  - [Camada Silver](#camada-silver)
  - [Camada Gold](#camada-gold)
- [Notebook Bronze](#notebook-bronze)
- [Notebook Silver](#notebook-silver)
- [Notebook Gold](#notebook-gold)
- [👨‍💻 Autores](#-autores)
- [📄 Licença](#-licença)
- [🔗 Referências](#-referências)

---

## Visão Geral do Projeto

O pipeline é responsável por realizar a ingestão, tratamento, enriquecimento e disponibilização de dados usando uma arquitetura em camadas: **Bronze**, **Silver** e **Gold**. Os dados são armazenados em um **Azure Data Lake Storage Gen2** e processados com **Apache Spark** em **Azure Databricks**.

---

## 🌍 Tecnologias Utilizadas

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

## Autores

- **Luiz Felipe Zomer**
- **Luiz Filipe Linhares**
- **Thiago Almeida**
- **Willian Minatto**
- **Gabriel Tassi Frello**
- **Gabriel Boelter**

---

## 🔗 Referências

- [Documentação Azure Databricks](https://learn.microsoft.com/en-us/azure/databricks/)
- [Delta Lake](https://delta.io/)
- Exemplo de repositório SATC:  
  [https://github.com/jlsilva01/adls-azure](https://github.com/jlsilva01/adls-azure)

=======

# Pipeline de Dados - Projeto ED SATC

[![Python 3.11](https://img.shields.io/badge/python-3.11-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI/CD](https://github.com/username/pipeline-de-dados/workflows/CI/badge.svg)](https://github.com/username/pipeline-de-dados/actions)

Uma pipeline completa de dados usando **Azure Databricks**, **Data Lake Storage** e **Delta Lake** para processamento de dados de jogos.

## 🤖 Descrição

Este projeto implementa uma **arquitetura de Data Lakehouse** com três camadas principais:

- **Landing Zone** - Recebe dados brutos (CSV, JSON)
- **Bronze** - Dados com metadados básicos
- **Silver** - Dados limpos e normalizados
- **Gold** - Dados prontos para BI e análises (One Big Table)

## ⚠️ Disclaimer

Este projeto é para fins educacionais e de demonstração. As credenciais e configurações do Azure devem ser ajustadas para seu ambiente específico.

## ⚙️ Pré-requisitos

- **Python 3.9+**
- **Azure Databricks Workspace**
- **Azure Data Lake Storage Gen2**
- **PostgreSQL** (para desenvolvimento local)
- **Docker** (opcional)

### Dependências Principais

- PySpark 3.5.0+
- Delta Spark 3.0.0+
- Azure Storage Blob
- Azure Identity

## 🛠️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/username/pipeline-de-dados.git
cd pipeline-de-dados
```

### 2. Crie um ambiente virtual

```bash
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# ou
.venv\Scripts\activate     # Windows
```

### 3. Instale as dependências

```bash
pip install -r requirements.txt
# ou para desenvolvimento
pip install -e ".[dev]"
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
AZURE_STORAGE_ACCOUNT=datalake7eadf73a479de9f7
AZURE_SAS_TOKEN=your_sas_token_here
DATABRICKS_HOST=https://your-workspace.azuredatabricks.net
DATABRICKS_TOKEN=your_databricks_token
```

## Como Usar

### Execução Completa da Pipeline

```bash
# Executar toda a pipeline
python -m pipeline_de_dados.main --stage all --verbose

# Ou usando o módulo diretamente
python src/pipeline_de_dados/main.py --stage all
```

### Execução por Estágio

```bash
# Apenas Landing ? Bronze
python -m pipeline_de_dados.main --stage landing

# Apenas Bronze ? Silver
python -m pipeline_de_dados.main --stage bronze

# Apenas Silver ? Gold
python -m pipeline_de_dados.main --stage silver

# Apenas criação da One Big Table
python -m pipeline_de_dados.main --stage gold
```

### Execução no Databricks

```python
# No notebook do Databricks
%run "./src/pipeline_de_dados/landing_to_bronze"
%run "./src/pipeline_de_dados/bronze_to_silver"
%run "./src/pipeline_de_dados/silver_to_gold"
```

## Testes

### Executar todos os testes

```bash
pytest tests/ -v
```

### Executar testes com cobertura

```bash
pytest tests/ -v --cov=src/pipeline_de_dados --cov-report=html
```

### Executar linting

```bash
flake8 src/ tests/
black --check src/ tests/
mypy src/
```

## Documentação

A documentação completa está disponível em:

- **?? [Documentação Online](https://username.github.io/pipeline-de-dados)**
- **?? [docs/](docs/)** - Documentação local

### Estrutura da Documentação

- `docs/arquitetura.md` - Arquitetura geral do sistema
- `docs/camadas.md` - Detalhes das camadas de dados
- `docs/index.md` - Página inicial da documentação

## Estrutura do Projeto

```
pipeline-de-dados/
??? README.md                 # Este arquivo
??? LICENSE                   # Licença MIT
??? .python-version          # Versão do Python (pyenv)
??? .gitignore              # Arquivos ignorados pelo Git
??? pyproject.toml          # Configuração do projeto
??? requirements.txt        # Dependências
??? docker-compose.yml      # Configuração Docker
??? mkdocs.yml             # Configuração da documentação
?
??? src/                   # Código fonte
?   ??? pipeline_de_dados/
?       ??? __init__.py
?       ??? main.py        # Ponto de entrada
?       ??? pipeline_completa/
?           ??? landing_to_bronze.ipynb
?           ??? bronze_to_silver.ipynb
?           ??? silver_to_gold.ipynb
?
??? tests/                 # Testes
?   ??? __init__.py
?   ??? test_pipeline.py
?
??? docs/                  # Documentação
?   ??? index.md
?   ??? arquitetura.md
?   ??? camadas.md
?
??? examples/              # Exemplos de uso
?   ??? basic_usage.py
?
??? scripts/               # Scripts auxiliares
?   ??? generateDbAndPopulate/
?
??? data/                  # Dados
?   ??? raw/              # Dados brutos
?   ??? processed/        # Dados processados
?
??? logs/                  # Logs da aplicação
??? assets/               # Imagens, diagramas
??? iac/                  # Infraestrutura como código
?   ??? main.tf
?   ??? variables.tf
?   ??? (recursos Azure)
?
??? .github/              # GitHub Actions
    ??? workflows/
        ??? ci.yml
```

## Configuração

### Azure Databricks

1. Configure o workspace do Databricks
2. Monte os containers do Data Lake Storage
3. Configure as permissões necessárias

### Data Lake Storage

1. Crie os containers: `landing`, `bronze`, `silver`, `gold`
2. Configure as políticas de acesso
3. Gere o SAS Token com permissões adequadas

## Deploy

### Local

```bash
# Instalar em modo desenvolvimento
pip install -e .

# Executar pipeline
python -m pipeline_de_dados.main
```

### Databricks

1. Faça upload dos notebooks para o workspace
2. Configure os clusters
3. Execute os notebooks na ordem correta

### CI/CD

O projeto inclui GitHub Actions para:
- ? Testes automatizados
- ? Linting e formatação
- ? Build do pacote
- ? Deploy da documentação

---

