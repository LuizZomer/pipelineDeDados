# Notebook: Bronze para Silver

## Objetivo:
Transformar os dados da **camada Bronze** em dados limpos e padronizados na **Silver**.

---

## Principais etapas:

### ✅ 1. Iniciar SparkSession
Validação da SparkSession.

### ✅ 2. Montagem de containers ADLS Gen2
Funções para montagem segura dos containers Bronze e Silver.

### ✅ 3. Limpeza da Silver
Exclusão de arquivos antigos antes de gravar os novos.

### ✅ 4. Leitura da Bronze
Leitura de todas as tabelas disponíveis.

### ✅ 5. Padronização de colunas
Aplicação da função `padronizar_nomes_colunas()`:
- CD_ → CODIGO_
- VL_ → VALOR_
- DT_ → DATA_
- NM_ → NOME_
- DS_ → DESCRICAO_
- NR_ → NUMERO_

### ✅ 6. Inclusão de metadados
Adição de:
- Nome do arquivo da Bronze.
- Timestamp de processamento.

### ✅ 7. Gravação na Silver
Dados salvos como Delta.

### ✅ 8. Criação de Tabelas Gerenciadas
Criação de tabelas dentro do database Databricks: `pipeline_silver`.

### ✅ 9. Validação
Exibição:
- Registros por tabela.
- Percentual de nulos.
- Esquema das tabelas.

---

## Resultado esperado:
- Dados tratados e com qualidade assegurada.
- Camada Silver pronta para consumo analítico.
