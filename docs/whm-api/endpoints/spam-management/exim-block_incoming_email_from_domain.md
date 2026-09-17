# Add block on emails from specific domains

This function blocks email from specific domains.

Endpoint: GET /block_incoming_email_from_domain
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain to block.

Note:

* The function returns 0 for the updated return if the server already blocks that domain.
* An FQDN requires at least a label, a dot (.), and a top-level domain (TLD).
 Enter an asterisk () to represent a wildcard label or TLD.
* To block multiple domains, duplicate or increment the parameter name.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.updated` (integer)
    Whether the function blocked one or more domains.
* 1 — Success.
* 0 — Failure.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "block_incoming_email_from_domain"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


