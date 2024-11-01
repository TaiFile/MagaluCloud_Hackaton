terraform {
  required_providers {
    mgc = {
      source = "magalucloud/mgc"
    }
  }
}

provider "mgc" {
  alias = "sudeste"
  region = "br-se1"
}

# Create a VM at Sudeste br-se1
resource "mgc_virtual_machine_instances" "basic_instance_sudeste" {
  provider = mgc.sudeste # We specify the provider region here to indicate that this VM should be created in the Nordeste region.
  name     = "miranha-hacka"
  machine_type = {
    name = "BV2-8-40"
  }
  image = {
    name = "cloud-ubuntu-24.04 LTS"
  }
  network = {
    associate_public_ip = true # If true, will create a public IP
    delete_public_ip    = true
  }

  ssh_key_name = "miranha-hacka"
}