variable "resource_group_name" {
  description = "O nome do Resource Group onde a VNet será criada"
  type        = string
}

variable "location" {
  description = "A localização onde a VNet será criada"
  type        = string
}

variable "vnet_name" {
  description = "O nome da Virtual Network"
  type        = string
}

variable "address_space" {
  description = "O espaço de endereçamento IP da Virtual Network"
  type        = list(string)
  default     = ["10.0.0.0/16"]
}

variable "subnets" {
  description = "Lista de subnets a serem criadas na VNet"
  type = list(object({
    name           = string
    address_prefix = string
  }))
  default = [
    {
      name           = "default"
      address_prefix = "10.0.1.0/24"
    }
  ]
}
