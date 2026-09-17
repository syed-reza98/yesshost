# Get the server's default DMARC record

This function retrieves the server's default DMARC record.

The system uses the default DMARC record when creating new accounts or applying DMARC policies that don't specify a custom record.

Endpoint: GET /get_default_dmarc_record
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (object)
    An object that contains the server's default DMARC record.

  - `data.payload.record` (string)
    The server's default DMARC record string.
    Example: "v=DMARC1; p=none;"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_default_dmarc_record"

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


