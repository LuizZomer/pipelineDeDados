resource "azurerm_mssql_server" "sql" {
  name                         = "sql-pipeline-sexta"
  resource_group_name          = "rg-pipeline" 
  location                     = var.location
  version                      = "12.0"
  administrator_login          = var.usuario_admin
  administrator_login_password = var.password
}


resource "azurerm_mssql_database" "sql" {
  name                        = "dados"
  server_id                   = azurerm_mssql_server.sql.id
  collation                   = "SQL_Latin1_General_CP1_CI_AS"
  auto_pause_delay_in_minutes = 60
  max_size_gb                 = 5
  min_capacity                = 0.5
  read_replica_count          = 0
  read_scale                  = false
  sku_name                    = "GP_S_Gen5_1"
  zone_redundant              = false
  geo_backup_enabled          = false

}

data "ipify_ip" "public" {}


resource "azurerm_mssql_firewall_rule" "sql" {
  name             = "RegraFWInternet"
  server_id        = azurerm_mssql_server.sql.id
  start_ip_address = "0.0.0.0"
  end_ip_address   = "255.255.255.255"
}
