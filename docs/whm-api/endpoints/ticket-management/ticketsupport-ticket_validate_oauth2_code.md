# Validate Customer Portal OAuth2 code

This function validates the OAuth2 code from the
cPanel Customer Portal.
After the function validates the token, the system stores it on the current session.

Note:

This function is not available through the command line. You must call it
as a request body.

Endpoint: GET /ticket_validate_oauth2_code
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `code` (string, required)
    The code from the OAuth2 redirect. The system validates this code and exchanges it for a token.
    Example: "84b1a729-63e3-11e6-a0fb-bfcf357fd76d"

  - `redirect_uri` (string, required)
    The redirect URI query argument that the system sent to the initial OAuth2 authentication endpoint.
    Example: "https://hostname.example.com:2087/"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_validate_oauth2_code"

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


