---
# generated by https://github.com/hashicorp/terraform-plugin-docs
page_title: "mgc_virtual_machine_images Data Source - terraform-provider-mgc"
subcategory: "Virtual Machine"
description: |-
  Get the available virtual-machine images.
---

# mgc_virtual_machine_images (Data Source)

Get the available virtual-machine images.

## Example Usage

```terraform
data "mgc_virtual_machine_images" "images" {
}

output "vm_images" {
  value = data.mgc_virtual_machine_images.images
}
```

<!-- schema generated by tfplugindocs -->
## Schema

### Read-Only

- `images` (Attributes List) List of available VM Images. (see [below for nested schema](#nestedatt--images))

<a id="nestedatt--images"></a>
### Nested Schema for `images`

Read-Only:

- `id` (String) ID of image.
- `name` (String) The image name.
- `platform` (String) The image platform.