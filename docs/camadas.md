# Camada Landing Zone

A Landing Zone é o ponto de entrada dos dados.

## Características

- Armazena arquivos sem processamento
- Utiliza containers no ADLS como `landing/`
- Armazena versões dos dados por partição (ex: data de ingestão)

## Exemplo de estrutura:

abfss://landing@nomestorage.dfs.core.windows.net/
└── vendas/
├── 2024-01-01.csv
└── 2024-01-02.csv

css
Copiar
Editar

## PySpark - Leitura dos dados:

```python
df_landing = spark.read.option("header", True).csv("abfss://landing@<storage>.dfs.core.windows.net/vendas/")
yaml
Copiar
Editar



### 📄 `docs/silver.md`


# Camada Silver

Nesta camada, os dados são tratados e convertidos em tabelas Delta.

## Processos aplicados

- Limpeza de campos nulos
- Padronização de formatos
- Deduplicação

## Exemplo PySpark:


from delta.tables import DeltaTable

df_silver = df_landing.dropna(subset=["id", "produto"])
df_silver.write.format("delta").mode("overwrite").save("/mnt/silver/vendas")
Leitura Delta
python
Copiar
Editar
df = spark.read.format("delta").load("/mnt/silver/vendas")
yaml
Copiar
Editar


### 📄 `docs/gold.md`


# Camada Gold

A camada Gold é usada para gerar relatórios e KPIs.

## Características

- Tabelas de agregação
- Performance otimizada
- Indicadores calculados

## Exemplo PySpark:


df_gold = df_silver.groupBy("produto").agg({"valor": "sum"})
df_gold.write.format("delta").mode("overwrite").save("/mnt/gold/vendas_agrupadas")
yaml
Copiar
Editar


### 📄 `docs/exemplos.md`


# Exemplos de Código

## Configuração de Spark com Delta e Azure

spark.conf.set("fs.azure.account.key.<storage>.dfs.core.windows.net", "<chave>")
Schema enforcement com Delta
python
Copiar
Editar
df.write.format("delta").option("mergeSchema", "true").save(path)
Leitura incremental
python
Copiar
Editar
df = spark.readStream.format("delta").load("/mnt/silver/streaming")