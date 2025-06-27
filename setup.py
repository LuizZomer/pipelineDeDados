#!/usr/bin/env python3
"""
Script de setup para o Pipeline de Dados

Este script automatiza a configuração inicial do ambiente de desenvolvimento.
"""

import os
import sys
import subprocess
import platform
from pathlib import Path


def run_command(command, description):
    """Executa um comando e trata erros"""
    print(f"🔄 {description}...")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} concluído")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Erro ao {description.lower()}: {e}")
        print(f"   Comando: {command}")
        print(f"   Erro: {e.stderr}")
        return False


def check_python_version():
    """Verifica se a versão do Python é compatível"""
    print("🐍 Verificando versão do Python...")
    version = sys.version_info
    if version.major == 3 and version.minor >= 9:
        print(f"✅ Python {version.major}.{version.minor}.{version.micro} - OK")
        return True
    else:
        print(f"❌ Python {version.major}.{version.minor}.{version.micro} - Versão mínima: 3.9")
        return False


def create_virtual_environment():
    """Cria ambiente virtual"""
    venv_path = Path(".venv")
    if venv_path.exists():
        print("✅ Ambiente virtual já existe")
        return True
    
    return run_command("python -m venv .venv", "Criando ambiente virtual")


def install_dependencies():
    """Instala dependências do projeto"""
    # Determina o comando correto para o sistema operacional
    if platform.system() == "Windows":
        pip_cmd = ".venv\\Scripts\\pip"
    else:
        pip_cmd = ".venv/bin/pip"
    
    commands = [
        (f"{pip_cmd} install --upgrade pip", "Atualizando pip"),
        (f"{pip_cmd} install -r requirements.txt", "Instalando dependências principais"),
        (f"{pip_cmd} install -r requirements-dev.txt", "Instalando dependências de desenvolvimento"),
    ]
    
    success = True
    for command, description in commands:
        if not run_command(command, description):
            success = False
    
    return success


def setup_pre_commit():
    """Configura pre-commit hooks"""
    if platform.system() == "Windows":
        pre_commit_cmd = ".venv\\Scripts\\pre-commit"
    else:
        pre_commit_cmd = ".venv/bin/pre-commit"
    
    return run_command(f"{pre_commit_cmd} install", "Instalando pre-commit hooks")


def create_directories():
    """Cria diretórios necessários se não existirem"""
    directories = [
        "logs/pipeline",
        "logs/application", 
        "logs/terraform",
        "data/raw",
        "data/processed/bronze",
        "data/processed/silver",
        "data/processed/gold",
        "assets/images",
        "assets/diagrams",
        "assets/icons",
        "assets/docs",
        "examples/notebooks"
    ]
    
    print("📁 Criando diretórios...")
    for directory in directories:
        Path(directory).mkdir(parents=True, exist_ok=True)
    
    print("✅ Diretórios criados")


def main():
    """Função principal"""
    print("🚀 Configurando Pipeline de Dados")
    print("=" * 50)
    
    # Verificações iniciais
    if not check_python_version():
        sys.exit(1)
    
    # Setup do ambiente
    if not create_virtual_environment():
        sys.exit(1)
    
    if not install_dependencies():
        sys.exit(1)
    
    if not setup_pre_commit():
        print("⚠️  Pre-commit não configurado, mas continuando...")
    
    # Criação de diretórios
    create_directories()
    
    print("\n" + "=" * 50)
    print("🎉 Setup concluído com sucesso!")
    print("\n📋 Próximos passos:")
    print("1. Ative o ambiente virtual:")
    if platform.system() == "Windows":
        print("   .venv\\Scripts\\activate")
    else:
        print("   source .venv/bin/activate")
    print("2. Configure as variáveis de ambiente")
    print("3. Execute: make help")
    print("4. Consulte a documentação em docs/")
    print("\n🔗 Para mais informações, consulte o README.md")


if __name__ == "__main__":
    main() 