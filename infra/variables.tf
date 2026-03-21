variable "resource_group_name" {
  description = "Name of the resource group"
  default     = "skynlab-resources"
}

variable "location" {
  description = "Azure region for all resources"
  default     = "UK South"
}

variable "app_name" {
  description = "Name of the application"
  default     = "skynlab"
}