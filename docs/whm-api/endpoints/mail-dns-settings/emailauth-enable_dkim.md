# Enable domain's DKIM records

This function enables DomainKeys Identified Mail (DKIM) records on the DNS server for one or more domains.

Endpoint: GET /enable_dkim
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to enable DKIM records on the DNS server.

Note:

 To enable multiple domain DKIM records, duplicate the parameter name. For example, use the domain=example-1.com, domain=example-2.com, and domain=example-3.com parameters.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects containing information about the enabled state of a domain's DKIM records on the DNS server.

  - `data.payload.domain` (string)
    The domain for which the system enabled the DKIM record.
    Example: "example.com"

  - `data.payload.msg` (string)
    The domain's DKIM record status message.
    Example: "Installed Keys"

  - `data.payload.status` (integer)
    Whether the system enabled the domain's DKIM record on the DNS server.
* 1 — The system enabled the domain's DKIM record.
* 0 — The system did not enable the domain's DKIM record.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "enable_dkim"

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


