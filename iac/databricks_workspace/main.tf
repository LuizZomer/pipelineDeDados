terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.9.0"
    }
    databricks = {
      source  = "databricks/databricks"
      version = "~> 1.0.0"
    }
  }
}

provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}

provider "databricks" {
  azure_workspace_resource_id = azurerm_databricks_workspace.iac-databricks.id
}

resource "azurerm_resource_group" "iac-rg" {
  name     = var.rg_pipeline.resource_group_name
  location = var.rg_pipeline.location
}

resource "azurerm_databricks_workspace" "iac-databricks" {
  name                = var.rg_pipeline.workspace_name
  location            = azurerm_resource_group.iac-rg.location
  resource_group_name = azurerm_resource_group.iac-rg.name
  sku                 = "trial"
}
