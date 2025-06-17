variable "resource_group_name" {
  description = "O nome do Resource Group onde o Databricks Workspace será criado"
  type        = string
}

variable "location" {
  description = "A localização onde o Databricks Workspace será criado"
  type        = string
}

variable "workspace_name" {
  description = "O nome do Databricks Workspace"
  type        = string
}

variable "sku" {
  description = "O tipo de SKU do Databricks Workspace (Standard, Premium ou Trial)"
  type        = string
  default     = "trial"
}
