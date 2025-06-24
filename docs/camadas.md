# Camadas do Pipeline de Dados

## 📥 Camada Landing

- Dados brutos sem processamento
- Apenas armazenamento
- Container: `/landing/`

## 🥉 Camada Bronze

- Conversão para formato Delta
- Inclusão de metadados básicos
- Container: `/bronze/`

## 🥈 Camada Silver

- Limpeza de dados
- Padronização de colunas
- Tratamento de nulos
- Container: `/silver/`

## 🥇 Camada Gold

- Dados prontos para análise
- Agregações e cálculos
- Container: `/gold/`
