---
# generated by https://github.com/hashicorp/terraform-plugin-docs
page_title: "mgc_object_storage_buckets Resource - terraform-provider-mgc"
subcategory: "Object Storage"
description: |-
  An object storage bucket.
---

# mgc_object_storage_buckets (Resource)

An object storage bucket.

## Example Usage

```terraform
resource "mgc_object_storage_buckets" "my-bucket" {
  bucket = "bucket-name"
  enable_versioning = true
}
```

<!-- schema generated by tfplugindocs -->
## Schema

### Required

- `bucket` (String) Name of the bucket to be created.
- `bucket_is_prefix` (Boolean) Use bucket name as prefix value to generate a unique bucket name.

### Optional

- `authenticated_read` (Boolean) Owner gets FULL_CONTROL. Authenticated users have READ rights.
- `aws_exec_read` (Boolean)
- `enable_versioning` (Boolean) Enable versioning for this bucket.
- `grant_full_control` (Attributes) Allows grantees FULL_CONTROL. (see [below for nested schema](#nestedatt--grant_full_control))
- `grant_read` (Attributes) Allows grantees to list the objects in the bucket. (see [below for nested schema](#nestedatt--grant_read))
- `grant_read_acp` (Attributes) Allows grantees to read the bucket ACL. (see [below for nested schema](#nestedatt--grant_read_acp))
- `grant_write` (Attributes) Allows grantees to create objects in the bucket. (see [below for nested schema](#nestedatt--grant_write))
- `grant_write_acp` (Attributes) Allows grantees to write the ACL for the applicable bucket. (see [below for nested schema](#nestedatt--grant_write_acp))
- `private` (Boolean) Owner gets FULL_CONTROL. Delegated users have access. No one else has access rights.
- `public_read` (Boolean) Owner gets FULL_CONTROL. Everyone else has READ rights.
- `public_read_write` (Boolean) Owner gets FULL_CONTROL. Everyone else has READ and WRITE rights.
- `recursive` (Boolean) Delete bucket including objects inside.

### Read-Only

- `final_name` (String) Final name of the bucket, including the prefix and auto-generated suffix.

<a id="nestedatt--grant_full_control"></a>
### Nested Schema for `grant_full_control`

Required:

- `id` (String) Either a Tenant ID or a User Project ID.


<a id="nestedatt--grant_read"></a>
### Nested Schema for `grant_read`

Required:

- `id` (String) Either a Tenant ID or a User Project ID.


<a id="nestedatt--grant_read_acp"></a>
### Nested Schema for `grant_read_acp`

Required:

- `id` (String) Either a Tenant ID or a User Project ID.


<a id="nestedatt--grant_write"></a>
### Nested Schema for `grant_write`

Required:

- `id` (String) Either a Tenant ID or a User Project ID.


<a id="nestedatt--grant_write_acp"></a>
### Nested Schema for `grant_write_acp`

Required:

- `id` (String) Either a Tenant ID or a User Project ID.