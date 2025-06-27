"""
Exemplo básico de uso do Pipeline de Dados

Este exemplo demonstra como usar o pipeline para processar dados
de jogos usando Azure Databricks e Data Lake Storage.
"""

import os
from pathlib import Path

# Configuração do ambiente
os.environ["AZURE_STORAGE_ACCOUNT"] = "your-storage-account"
os.environ["AZURE_STORAGE_KEY"] = "your-storage-key"
os.environ["DATABRICKS_HOST"] = "your-databricks-workspace"
os.environ["DATABRICKS_TOKEN"] = "your-databricks-token"

def main():
    """
    Função principal que demonstra o uso do pipeline
    """
    print("🚀 Iniciando Pipeline de Dados")
    
    # Exemplo de configuração de paths
    base_path = Path(__file__).parent.parent
    data_path = base_path / "data"
    
    print(f"📁 Diretório de dados: {data_path}")
    
    # Exemplo de execução das etapas do pipeline
    steps = [
        "1. Ingestão (Landing → Bronze)",
        "2. Tratamento (Bronze → Silver)", 
        "3. Analytics (Silver → Gold)"
    ]
    
    for step in steps:
        print(f"✅ {step}")
    
    print("\n🎯 Pipeline concluído com sucesso!")

if __name__ == "__main__":
    main() 