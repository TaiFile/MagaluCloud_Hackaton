terraform {
  required_providers {
    mgc = {
      source = "magalucloud/mgc"
    }
  }
}

provider "mgc" {
  alias   = "sudeste"
  region  = "br-se1"
  api_key = "4f6e43e8-eeba-40ef-a38a-cafa3946f501"
  object_storage = {
    # To use with Object Storage, there is a difference. Since we use the S3 protocol, it is necessary to use key pairs (Key Pairs). To generate key pairs, follow the instructions here https://docs.magalu.cloud/docs/api-keys/how-to/create-api-keys
    key_pair = {
      key_id     = "8c5783d6-4dd2-4409-a304-77190ede075e"
      key_secret = "5403c372-1b35-48fe-b610-38759cf6cc14"
    }
  }
}

resource "mgc_object_storage_buckets" "miranha-bucket" {
  provider          = mgc.sudeste
  bucket            = "miranha-hacka"
  enable_versioning = true
  recursive         = true  # If true, any configuration or operation specified in the resource will be applied not only to the bucket itself but also to all the objects contained within that bucket.
  bucket_is_prefix  = false # Indicates whether the bucket name will be used as a prefix for objects.
}