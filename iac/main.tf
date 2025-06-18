module "resource_group" {
  source              = "./modules/resource_group"
  resource_group_name = var.resource_group_name
  location            = var.location
}


module "storage_account" {
  source              = "./modules/storage_account"
  resource_group_name = module.resource_group.resource_group_name
  location            = module.resource_group.resource_group_location
}

module "databricks_workspace" {
  source              = "./modules/databricks_workspace"
  resource_group_name = module.resource_group.resource_group_name
  location            = module.resource_group.resource_group_location
  workspace_name      = var.workspace_name
}


module "virtual_network" {
  source              = "./modules/virtual_network"
  resource_group_name = module.resource_group.resource_group_name
  location            = module.resource_group.resource_group_location
  vnet_name           = "iac-vnet"
  address_space       = ["10.0.0.0/16"]
  subnets = [
    {
      name           = "subnet1"
      address_prefix = "10.0.1.0/24"
    },
    {
      name           = "subnet2"
      address_prefix = "10.0.2.0/24"
    }
  ]
}

module "sql_server" {
  source               = "./modules/sql_server"
  resource_group_name  = module.resource_group.resource_group_name
  location             = module.resource_group.resource_group_location
  admin_login          = var.admin_login
  admin_password       = var.admin_password
  database_max_size_gb = 5
}
