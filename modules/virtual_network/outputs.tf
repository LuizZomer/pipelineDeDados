output "vnet_id" {
  description = "O ID da Virtual Network criada"
  value       = azurerm_virtual_network.vnet.id
}

output "vnet_name" {
  description = "O nome da Virtual Network criada"
  value       = azurerm_virtual_network.vnet.name
}

output "subnet_ids" {
  description = "Os IDs das Subnets criadas na VNet"
  value       = { for subnet in azurerm_subnet.subnets : subnet.name => subnet.id }
}

output "subnet_names" {
  description = "Os nomes das Subnets criadas na VNet"
  value       = [for subnet in azurerm_subnet.subnets : subnet.name]
}
