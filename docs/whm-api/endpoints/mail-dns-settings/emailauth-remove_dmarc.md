# Remove domains' DMARC records.

This function removes the DMARC DNS record from a domain.

Note:

You cannot remove DMARC records from temporary domains.

Endpoint: GET /remove_dmarc
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string)
    The domain for which to remove the DMARC record.

Note:

If you do not include this argument, the system will remove all DMARC records from all domains.

To remove multiple domain DMARC records, duplicate the parameter name. For example, use the domain=example-1.com, domain=example-2.com, and domain=example-3.com parameters.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contains information about the DMARC records that were removed.

  - `data.payload.domain` (string)
    The domain for which the system removed the DMARC record.
    Example: "example.com"

  - `data.payload.msg` (string)
    Information about the removed DMARC record.
    Example: "[REMOVE:TXT@_dmarc.exmaple.com:v=DMARC1; p=reject;]"

  - `data.payload.status` (integer)
    Whether the system removed the domain's DMARC record on the DNS server.
- 1  — The system removed the domain's DMARC record.
- 0  — The system did not remove the domain's DMARC record.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remove_dmarc"

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


