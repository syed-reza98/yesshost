# Disable domain's DNSSEC key

This function deactivates a domain's DNSSEC security key.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

Endpoint: GET /deactivate_zone_key
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to deactivate a security key.
    Example: "example.com"

  - `key_id` (integer, required)
    The security key's ID.

Note:

Use the WHM AP1 fetch_ds_records_for_domains function to locate the
domain's security key ID.
    Example: 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "deactivate_zone_key"

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


