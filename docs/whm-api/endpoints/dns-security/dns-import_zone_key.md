# Import DNSSEC key

This function imports a DNSSEC security key.

Note:

Only servers that run PowerDNS can use DNSSEC. If you call this function on a server
that doesn't use PowerDNS, you will receive an error.

Endpoint: GET /import_zone_key
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to import the security key.
    Example: "example.com"

  - `key_data` (string, required)
    The security key's data that the
pdnsuti
utility's export-zone-key call returns.
    Example: "Private-key-format:%20v1.2%0AAlgorithm:%2013%20\\(ECDSAP256SHA256\\)%0APrivateKey:%20xCM281KtWE9oCsUX8fP1hDZ02/X7JCjp4QZA/DZjfX0=%0A%0A"

  - `key_type` (string, required)
    The security key's type.

* ksk — Key-Signing Key
* zsk — Zone Signing Key

Note:

You must call these values in lowercase.
    Example: "ksk"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.import_key_id` (integer)
    The system's assigned ID for the imported security key.
    Example: 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "import_zone_key"

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


