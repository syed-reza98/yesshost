# Create initial Support ticket request

This function creates a stub ticket. The system uses the stub ticket
to create a cPanel support ticket.

Note:

This function is not available through the command line. You must call
it as a request body.

Endpoint: GET /ticket_create_stub_ticket
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.secure_id` (string)
    The support ticket's secure ID token.
    Example: "rofh411bv8"

  - `data.ticket_id` (integer)
    The support ticket number that other functions can look up.
    Example: 7648492

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_create_stub_ticket"

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


