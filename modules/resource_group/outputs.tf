output "resource_group_name" {
  description = "O nome do Resource Group criado"
  value       = azurerm_resource_group.iac_rg.name
}

output "resource_group_location" {
  description = "A localização do Resource Group criado"
  value       = azurerm_resource_group.iac_rg.location
}

output "resource_group_id" {
  description = "O ID do Resource Group criado"
  value       = azurerm_resource_group.iac_rg.id
}
