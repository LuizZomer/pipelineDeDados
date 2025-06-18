variable "resource_group_name" {
  description = "O nome do Resource Group a ser criado"
  type        = string
}

variable "location" {
  description = "A localização do Resource Group"
  type        = string
}

variable "workspace_name" {
  description = "O nome do Databricks Workspace"
  type        = string
}

variable "admin_login" {
  description = "Login do administrador do SQL Server"
  type        = string
}

variable "admin_password" {
  description = "Senha do administrador do SQL Server"
  type        = string
  sensitive   = true
}

variable "azure_client_id" {
  description = "Client ID do Service Principal"
  type        = string
}

variable "azure_client_secret" {
  description = "Client Secret do Service Principal"
  type        = string
  sensitive   = true
}

variable "azure_tenant_id" {
  description = "Tenant ID da conta Azure"
  type        = string
}

variable "subscription_id" {
  description = "Subscription ID da conta Azure"
  type        = string
}
