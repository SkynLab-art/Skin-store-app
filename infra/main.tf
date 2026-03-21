# Tell Terraform to use Azure
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

# Configure the Azure provider
provider "azurerm" {
  features {}
}

# Create a Resource Group — the container for all SkynLab resources
resource "azurerm_resource_group" "skynlab" {
  name     = "skynlab-resources"
  location = "UK South"
}