# Return domain's mail exchanger records

This function lists a domain's MX records.

Important:

When you disable the DNS role, the system disables this function.

Endpoint: GET /listmxs
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The zone record's domain.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.record` (array)
    An array of zone record data objects.

  - `data.record.Line` (integer)
    The zone record's line number.
    Example: 1

  - `data.record.class` (string)
    The record's class.
    Example: "IN"

  - `data.record.exchange` (string)
    The domain's mail exchanger.
    Example: "mail.example.com"

  - `data.record.name` (string)
    The record's name.
    Example: "hostname.example.com"

  - `data.record.preference` (integer)
    The MX record's priority order.

Note:

Lower values indicate a higher priority order.
    Example: 20

  - `data.record.ttl` (integer)
    The record's Time To Live (TTL) in seconds.
    Example: 86400

  - `data.record.type` (string)
    The DNS record's type.
    Example: "MX"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "listmxs"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Records obtained."

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


