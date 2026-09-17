# Export domain's DNSKEY record value

This function exports a domain's DNSKEY record value.

Endpoint: GET /export_zone_dnskey
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain from which to fetch the DNSKEY record value.
    Example: "example.com"

  - `key_id` (integer, required)
    The DNSSEC record's ID.
    Example: 12345

## Response 200 fields (application/json):

  - `data` (object)

  - `data.dnskey` (string)
    The DNSKEY record value.
    Example: "AwEAAch8SGW4vE6PjFWA9rbUm0AfTq+gJ0HC/nLu+2axdWHBIStt9lsOzKDorAr4vlmhlJzEzA62s96xp6mZ7XHUyWnkFwLs8obo6upL2in4h1ToOxzVl3lTs8O+kWtDq5/h1nwFlPDs9zpLJhlkTCtx2OTGbvimEYeqwPolUuSQR/Yb"

  - `data.key_id` (integer)
    The security key's ID.
    Example: 12345

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "export_zone_dnskey"

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


