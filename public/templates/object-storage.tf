terraform {
    required_providers {
      mgc = {
        source = "magalucloud/mgc"
      }
    }
  }
  
  resource "mgc_object_storage_buckets" "miranha-bucket" {
    provider          = mgc.sudeste
    bucket            = "miranha-bucket"
    enable_versioning = true
    recursive         = true  # If true, any configuration or operation specified in the resource will be applied not only to the bucket itself but also to all the objects contained within that bucket.
    bucket_is_prefix  = false # Indicates whether the bucket name will be used as a prefix for objects.
  }
  
  resource "mgc_dbaas_instances" "dbaas_example" {
    flavor_id = "784b7041-3e27-41f5-b31c-0a147d6e98e1"
    name      = "Miranha"
    user      = "admin"
    password  = "admin123"
    engine_id = "063f3994-b6c2-4c37-96c9-bab8d82d36f7"
    volume = {
      size = 10
      type = "CLOUD_NVME_15K"
    }
  }