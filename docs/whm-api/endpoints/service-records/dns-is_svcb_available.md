# Return SVCB DNS record support information

This function fetches information regarding SVCB records support.
SVCB records are defined in RFC 9460 and provide service binding and aliasing for arbitrary services.
For more information, read our DNS Zone Manager documentation.

Endpoint: GET /is_svcb_available
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.svcb` (integer)
    Whether SVCB records are supported.
* 1 - Supported.
* 0 - Not supported.
    Enum: 1, 0

  - `data.dns_server` (string)
    The DNS server type currently in use (bind, pdns, etc.).
    Example: "pdns"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "is_svcb_available"

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


