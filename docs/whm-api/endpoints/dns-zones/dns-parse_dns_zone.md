# Return a parsed DNS zone

This function parses a given DNS zone.

Important:

Most DNS zones contain only 7-bit ASCII. However, it is possible for
DNS zones to contain any binary sequence. An application that decodes
this function's base64 output must be able to handle cases
where the decoded octets do not match any specific character
encoding.

Endpoint: GET /parse_dns_zone
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `zone` (string, required)
    The name of one of the user’s DNS zones.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    The zone’s content.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "parse_dns_zone"

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


