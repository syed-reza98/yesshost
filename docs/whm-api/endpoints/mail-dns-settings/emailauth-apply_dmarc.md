# Apply a DMARC record to a domain

This function applies a DMARC record to the specified domain(s).

Note:

 You cannot modify DMARC records on temporary domains.

Endpoint: GET /apply_dmarc
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `policy` (string, required)
    The DMARC record to apply to the requested domains.

Note:

When using multiple policies, each policy must have a matching domain.

When using a single policy, it will be applied to all specified domains.

Visit the following link for more information about the DMARC record specification: https://dmarc.org/resources/specification/

  - `domain` (string)
    The domain for which to apply the DMARC record.

Note:

 To apply multiple domain DMARC records, duplicate the parameter name. For example, use the domain=example-1.com, domain=example-2.com, and domain=example-3.com parameters.

 If you do not include this argument, the system applies the DMARC record to all domains on the system.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contains information about the DMARC records applied to domains.

  - `data.payload.domain` (string)
    The domain for which the DMARC record was applied.
    Example: "example.com"

  - `data.payload.msg` (string)
    The domain's DMARC record status message.
    Example: "[ADD:TXT@_dmarc.example.com:v=DMARC1; p=reject;]"

  - `data.payload.status` (integer)
    Whether the system applied a DMARC record to the domain.
* 1 - The system applied a DMARC record.
* 0 - The system did not apply a DMARC record.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "apply_dmarc"

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


