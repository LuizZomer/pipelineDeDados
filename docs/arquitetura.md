# Arquitetura da Solução

A arquitetura é dividida em três camadas:

## 1. Landing Zone
- Recebe dados brutos (ex: JSON, CSV)
- Sem tratamento ou validação
- Armazenados no Azure Data Lake Storage (ADLS)

## 2. Silver
- Dados limpos e normalizados
- Tabelas Delta Lake
- Aplicação de regras de qualidade e schema enforcement

## 3. Gold
- Dados prontos para consumo por BI
- Métricas agregadas, joins, indicadores
- Integração com Power BI, Synapse ou Data Studio

![Arquitetura](https://raw.githubusercontent.com/databricks/tech-talks/master/images/lakehouse-architecture.png)
