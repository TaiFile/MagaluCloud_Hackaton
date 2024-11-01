terraform {
  required_providers {
    mgc = {
      source = "magalucloud/mgc"
    }
  }
}

resource "mgc_dbaas_instances" "dbaas_name" {
  flavor_id = "8bbe8e01-40c8-4d2b-80e8-189debc44b1c"
  name = "dbaas_name"
  user = "user"
  password = "password"
  engine_id = "063f3994-b6c2-4c37-96c9-bab8d82d36f7"
  volume = {
    size = 10
    type = "CLOUD_NVME_15K"
  }
}