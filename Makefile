.PHONY: help install install-dev test lint format clean docs

help: ## Mostra esta mensagem de ajuda
	@echo "Comandos disponíveis:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Instala dependências do projeto
	python -m pip install --upgrade pip
	pip install -r requirements.txt

install-dev: ## Instala dependências de desenvolvimento
	python -m pip install --upgrade pip
	pip install -r requirements-dev.txt
	pre-commit install

test: ## Executa os testes
	pytest tests/ -v --cov=src --cov-report=html

lint: ## Executa verificações de qualidade de código
	black --check src/ tests/
	flake8 src/ tests/
	mypy src/

format: ## Formata o código automaticamente
	black src/ tests/
	isort src/ tests/

clean: ## Remove arquivos temporários e caches
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	find . -type d -name "*.egg-info" -exec rm -rf {} +
	find . -type d -name ".pytest_cache" -exec rm -rf {} +
	find . -type d -name ".mypy_cache" -exec rm -rf {} +
	rm -rf build/ dist/ .coverage htmlcov/

docs: ## Gera a documentação
	mkdocs build

docs-serve: ## Inicia servidor local da documentação
	mkdocs serve

setup: install-dev ## Configura o ambiente de desenvolvimento
	@echo "✅ Ambiente configurado com sucesso!"

run-example: ## Executa o exemplo básico
	python examples/basic_usage.py

docker-up: ## Inicia os containers Docker
	docker-compose up -d

docker-down: ## Para os containers Docker
	docker-compose down

terraform-init: ## Inicializa o Terraform
	cd iac && terraform init

terraform-plan: ## Plano do Terraform
	cd iac && terraform plan

terraform-apply: ## Aplica o Terraform
	cd iac && terraform apply 