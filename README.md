
# Projeto Pipeline de Dados - Engenharia de Dados SATC

Repositório desenvolvido como projeto prático da disciplina de **Engenharia de Dados** da **Faculdade SATC**.

---

## 📌 Desenho de Arquitetura

O pipeline de dados segue o modelo de **camadas em Data Lakehouse** usando:

- **Azure Data Lake Storage Gen2 (ADLS)**
- **Delta Lake**
- **Apache Spark no Databricks**

### Estrutura Geral:

```
[Landing Zone] → [Bronze] → [Silver] → [Gold]
```

---

## 🚀 Ferramentas Utilizadas

- **Linguagem:** Python 3.11+
- **Processamento Distribuído:** PySpark (Databricks)
- **Armazenamento:** Azure Data Lake Storage Gen2
- **Formato de Dados:** Delta Lake
- **Documentação:** MkDocs

---

## 📚 Detalhamento das Camadas e Notebooks

### 📍 Camada Landing Zone

- **Função:** Área de recepção dos dados brutos, sem qualquer tratamento.
- **Formato:** CSV.
- **Local:** Container `landing` no ADLS.

---

### 📍 Landing to Bronze - Notebook 1

**Objetivo:**  
Ingerir os dados da Landing Zone para a Bronze aplicando metadados iniciais.

**Passos:**

- Leitura de arquivos CSV.
- Adição de colunas:  
  - Nome do arquivo origem  
  - Data/hora de ingestão
- Escrita no formato Delta no container **bronze**.

---

### 📍 Camada Bronze

- **Função:** Persistência dos dados raw em formato Delta.
- **Local:** Container `bronze` no ADLS.

---

### 📍 Bronze to Silver - Notebook 2

**Objetivo:**  
Transformar os dados da Bronze para Silver com limpeza e padronização.

**Passos:**

- Padronização de nomes de colunas (ex: `CD_` vira `CODIGO_`, `DT_` vira `DATA_`).
- Remoção de campos nulos importantes.
- Inclusão de metadados Silver.

- 
---

### 📍 Camada Silver

- **Função:** Dados limpos e tratados.
- **Formato:** Delta.
- **Local:** Container `silver` no ADLS e banco `pipeline_silver` no Databricks.

---

### 📍 Silver to Gold - Notebook 3

**Objetivo:**  
Criar as tabelas analíticas finais na camada Gold, com agregações e cálculos de KPIs.

**Passos:**

- Leitura de tabelas Silver.
- Realização de agregações (ex: soma de vendas por produto).
- Escrita da Gold.

---

### 📍 Camada Gold

- **Função:** Dados prontos para BI e relatórios.
- **Formato:** Delta.
- **Local:** Container `gold` no ADLS.

---

## ✅ Instalação da Documentação MkDocs

### 1. Criar ambiente virtual e instalar dependências:

```bash
python -m venv .venv
source .venv/Scripts/activate  # (Windows)
# ou
source .venv/bin/activate      # (Linux/Mac)

pip install mkdocs mkdocs-material mkdocstrings[python] pymdown-extensions
```

---

### 2. Rodar localmente:

```bash
mkdocs serve
```

Acesse:  
👉 http://127.0.0.1:8000

---

### 3. Publicar no GitHub Pages:

```bash
mkdocs gh-deploy
```

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
