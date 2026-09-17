# Export domain's DNSSEC key

This function exports a DNSSEC security key to a domain.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

Endpoint: GET /export_zone_key
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain to export the security key to.
    Example: "example.com"

  - `key_id` (integer, required)
    The security key's ID.

Note:

You can locate the ID with the WHM AP1 fetch_ds_records_for_domains function.
    Example: 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.key_tag` (integer)
    The security key's integer value.
    Example: 40481

  - `data.key_type` (string)
    The type of security key.

* CSK — Combined Signing Key.
* KSK — Key Signing Key.
* ZSK — Zone Signing Key.
    Example: "CSK"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "export_zone_key"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


