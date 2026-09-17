# Return blocked email domains list

This function lists which domains cannot send email to the server.

Endpoint: GET /list_blocked_incoming_email_domains
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.domains` (array)
    An array of objects that contains each blocked domain.

  - `data.domains.domain` (string)
    The blocked domain.
    Example: "example.com"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_blocked_incoming_email_domains"

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


