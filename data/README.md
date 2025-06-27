# Dados do Projeto

Este diretório contém os arquivos de dados utilizados no pipeline.

## 📁 Estrutura

```
data/
├── README.md              # Este arquivo
├── raw/                   # Dados brutos (CSV, JSON, etc.)
│   ├── games.csv
│   ├── users.csv
│   └── reviews.csv
└── processed/             # Dados processados (Parquet, Delta)
    ├── bronze/
    ├── silver/
    └── gold/
```

## 📊 Tipos de Dados

### Dados Brutos (`raw/`)
- **Formato**: CSV, JSON, Excel
- **Origem**: SQL Server, APIs, arquivos externos
- **Uso**: Ingestão inicial no pipeline

### Dados Processados (`processed/`)
- **Formato**: Parquet, Delta Lake
- **Origem**: Pipeline de processamento
- **Uso**: Análises e relatórios

## 🔄 Fluxo de Dados

```
raw/ → processed/bronze/ → processed/silver/ → processed/gold/
```

1. **Raw**: Dados brutos da fonte
2. **Bronze**: Dados com metadados básicos
3. **Silver**: Dados limpos e tratados
4. **Gold**: Dados prontos para analytics

## 📋 Convenções

- Use nomes descritivos para os arquivos
- Mantenha estrutura de diretórios organizada
- Documente a origem e formato dos dados
- Não commite dados sensíveis no Git

## 🚫 Git Ignore

Os seguintes padrões são ignorados pelo Git:
- `*.csv`
- `*.parquet`
- `*.json`
- `*.xlsx`
- `*.xls`

## 📚 Mais informações

Consulte a documentação em `docs/` para detalhes sobre o processamento de dados. 