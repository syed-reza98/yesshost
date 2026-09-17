# Export DNS zones in zone file format

This function returns one or more DNS zones, in
RFC-1035 format.

Important:

When you disable the DNS role, the system disables this function.

Endpoint: GET /export_zone_files
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `zone` (array, required)
    The DNS zones to display.
    Example: ["example.com","example.net"]

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    The requested DNS zone texts.
    Example: [{"text_b64":"AAAABBCCDdshjke==","zone":"example.com"},{"text_b64":"BBBBCCDDDdshjke==","zone":"example.net"}]

  - `data.payload.text_b64` (string)
    The DNS zone’s text representation.

  - `data.payload.zone` (string)
    The DNS zone’s name.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "export_zone_files"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


