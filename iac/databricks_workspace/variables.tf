variable "rg_pipeline" {
  description = "Informações do Resource Group e do Databricks"
  type = object({
    resource_group_name = string
    location            = string
    workspace_name      = string
  })

  default = {
    resource_group_name = "rg-pipeline"
    location            = "brazilsouth"
    workspace_name      = "databricks-trial"
  }
}

variable "subscription_id" {
  description = "Subscription ID da conta Azure"
  type        = string
  default     = "3c1e68ef-0025-4093-9845-37fcfc85a8d6" # Pode ajustar aqui ou usar terraform.tfvars
}
