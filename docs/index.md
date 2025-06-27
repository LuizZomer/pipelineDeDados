# Pipeline de Dados com PySpark, Delta Lake e Azure

Este projeto é um exemplo prático de **Engenharia de Dados**, construído durante o curso na SATC.

## 🔎 Objetivo:

Demonstrar um pipeline de ingestão e processamento de dados usando:

- **Azure Data Lake Storage Gen2 (ADLS)**
- **PySpark**
- **Delta Lake**
- **Databricks**

## 🚀 Fluxo do Pipeline:

1. **Landing → Bronze:** Ingestão de dados brutos para Delta Lake
2. **Bronze → Silver:** Limpeza, padronização e enriquecimento
3. **Silver → Gold:** Agregações e criação de indicadores para análise
