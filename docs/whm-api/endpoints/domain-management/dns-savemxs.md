# Create mail exchanger record

This function creates a new MX record.

Important:

When you disable the DNS role, the system disables this function.

Endpoint: GET /savemxs
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The zone record's domain.
    Example: "example.com"

  - `exchange` (string, required)
    The domain's mail exchanger.
    Example: "mail.example.com"

  - `name` (string, required)
    The record name.
    Example: "mail.example.com"

  - `preference` (integer, required)
    The MX record's priority order.

Note:

Lower numbers indicate a higher priority order.
    Example: 20

  - `class` (string)
    The record's class.
    Example: "IN"

  - `ttl` (integer)
    The record's Time To Live (TTL) in seconds.
    Example: 14400

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "savemxs"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Bind reloading on server1 using rndc zone: [example.com]\n"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


