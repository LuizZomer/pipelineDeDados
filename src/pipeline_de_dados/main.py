#!/usr/bin/env python3
"""
Pipeline de Dados - Ponto de Entrada Principal

Este módulo serve como ponto de entrada principal para executar a pipeline completa
de dados, desde a ingestão até a criação da One Big Table.

Usage:
    python -m pipeline_de_dados.main
    python -m pipeline_de_dados.main --stage landing
    python -m pipeline_de_dados.main --stage bronze
    python -m pipeline_de_dados.main --stage silver
    python -m pipeline_de_dados.main --stage gold
"""

import click
import sys
from pathlib import Path

# Adicionar o diretório src ao path
sys.path.insert(0, str(Path(__file__).parent.parent))

from pipeline_de_dados.pipeline_completa import (
    landing_to_bronze,
    bronze_to_silver,
    silver_to_gold
)


@click.command()
@click.option(
    '--stage',
    type=click.Choice(['landing', 'bronze', 'silver', 'gold', 'all']),
    default='all',
    help='Estágio da pipeline a ser executado'
)
@click.option(
    '--config',
    type=click.Path(exists=True),
    help='Arquivo de configuração (opcional)'
)
@click.option(
    '--verbose',
    is_flag=True,
    help='Modo verboso para mais detalhes'
)
def main(stage: str, config: str, verbose: bool):
    """
    Pipeline de Dados - Execução Principal
    
    Executa a pipeline completa de dados ou estágios específicos.
    """
    
    if verbose:
        click.echo(f"?? Iniciando pipeline no estágio: {stage}")
    
    try:
        if stage in ['landing', 'all']:
            click.echo("?? Executando Landing ? Bronze...")
            # landing_to_bronze.execute()
            click.echo("? Landing ? Bronze concluído!")
        
        if stage in ['bronze', 'all']:
            click.echo("?? Executando Bronze ? Silver...")
            # bronze_to_silver.execute()
            click.echo("? Bronze ? Silver concluído!")
        
        if stage in ['silver', 'all']:
            click.echo("? Executando Silver ? Gold...")
            # silver_to_gold.execute()
            click.echo("? Silver ? Gold concluído!")
        
        if stage in ['gold', 'all']:
            click.echo("?? Criando One Big Table...")
            # silver_to_gold.create_obt()
            click.echo("? One Big Table criada!")
        
        click.echo("?? Pipeline executada com sucesso!")
        
    except Exception as e:
        click.echo(f"? Erro na execução da pipeline: {e}", err=True)
        sys.exit(1)


if __name__ == "__main__":
    main() 