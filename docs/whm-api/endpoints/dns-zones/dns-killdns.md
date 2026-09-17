# Delete DNS zone

This function deletes a DNS zone.

Important:

- The WHM API 1 adddns function adds an XDNS entry for a domain in the following locations:
 - The /var/cpanel/users/USER file, where USER represents the domain's owner.
 - The /etc/vdomainaliases/DOMAIN directory, where DOMAIN represents the new zone's domain.
 - The /etc/vfilters/DOMAIN directory, where DOMAIN represents the new zone's domain.
- This function does not automatically delete these entries. You must manually delete these entries, or you cannot use this domain as a value in other API functions.
- You cannot delete other DNS zones that reside on Write-only servers in a DNS cluster.

Important:

When you disable the DNS role, the system disables this function.

NOTE:

You cannot use this function to delete temporary domains.

Endpoint: GET /killdns
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The zone record's domain.
    Example: "example.com"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "killdns"

  - `metadata.output` (object)

  - `metadata.output.raw` (string)
    The raw response output.
    Example: "example.com => deleted from example."

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Zones Removed"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


