resource "azurerm_resource_group" "iac_rg" {
  name     = var.resource_group_name
  location = var.location
}