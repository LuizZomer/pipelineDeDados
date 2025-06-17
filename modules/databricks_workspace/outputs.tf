output "databricks_workspace_id" {
  description = "O ID do Databricks Workspace criado"
  value       = azurerm_databricks_workspace.databricks_workspace.id
}

output "databricks_workspace_name" {
  description = "O nome do Databricks Workspace criado"
  value       = azurerm_databricks_workspace.databricks_workspace.name
}

output "databricks_workspace_url" {
  description = "A URL do Databricks Workspace criado"
  value       = azurerm_databricks_workspace.databricks_workspace.workspace_url
}