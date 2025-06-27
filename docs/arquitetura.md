# Arquitetura da Solução

A arquitetura segue o modelo de **Data Lake em Camadas**.

## 🏗️ Componentes:

- **Azure Data Lake (ADLS Gen2):** Armazena os dados
- **Databricks:** Processamento com PySpark
- **Delta Lake:** Armazenamento transacional de dados
- **Notebooks:** Para cada etapa do pipeline
- **MkDocs:** Para documentação
