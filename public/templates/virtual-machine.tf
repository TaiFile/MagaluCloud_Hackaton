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

resource "mgc_ssh_keys" "key" {
  name = "hackaton"
  key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC3t/eIWsmcwaGPDh3Zl/pIRcqUynwdPuDadboVG4t5w5UtNuujaqdNrluj8GHpDDdArq/SqZmI7/LqAyOXU0Wfx+jnpF4YQswe5u4im3Ldwy8Dye4u05hkwYe0qQa2DTcmU1jn+2zt3HnSb7lrilDHxvrKF1DUHoqrYbPz09Q/CDuTRTrNpD6ltjWkyNF3R46eEEaZQXLXZKq+OIgrgiFj9stLk9DDLlptMmPIKown8NQ5pdSYpnI3o2QfHwrSukaaKrtjYCLHbz7WSY1MljYXjNwg2r7KGOIu39usl5QymWgJbbzIiIO4RSSWsNmOJzBpE0C8oorJIamHtQIR4zezlnZTGRxamdVuYNCo0nchPGvTFpSatjv3SJqQJNZf0MG6sMLy++DU/NhzakiQmo+iWdhXJ15J3s8+HSS+/Oh/FnSBGUjlj+hxMPh5+jnQ3SF0ystTmBzyxpLRHWjlKCVLkDNBsyq+54IYts89iCg5Bch3x5Uzmc7fBBM/k+JwJkz3Bjnrp8KzOCzrtmRsISSqHrST1gLOV0wpD14OHOTXWTrOx3sXGKtEFfVpIiH4n65N4JmL2+BwO8+QN28sQjK187WUFqLzuBu9qLfJByDU4ApPF3NQExjVV6N/KseTFKVKXjwXyu19BT9F0qX30yhW2ofTig/rbz1tDt4At6EAJQ== jvolima@jvolima-Inspiron-15-3511"
}

# Create a VM at Sudeste br-se1
resource "mgc_virtual_machine_instances" "basic_instance_sudeste" {
  provider = mgc.sudeste # We specify the provider region here to indicate that this VM should be created in the Nordeste region.
  name     = "miranha-hello"
  machine_type = {
    name = "BV2-8-40"
  }
  image = {
    name = "cloud-ubuntu-22.04 LTS"
  }
  network = {
    associate_public_ip = true # If true, will create a public IP
    delete_public_ip    = true
  }

  ssh_key_name = mgc_ssh_keys.key.name
}