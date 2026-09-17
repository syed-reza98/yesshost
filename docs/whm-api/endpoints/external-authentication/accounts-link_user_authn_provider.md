# Add identity provider to cPanel account

This function adds an External Authentication authorization link to an account.

Endpoint: GET /link_user_authn_provider
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `preferred_username` (string, required)
    The preferred username of the account on the identity provider.
    Example: "Example"

  - `provider_id` (string, required)
    The name of the identity provider.
    Example: "google"

  - `subject_unique_identifier` (string, required)
    The unique identifier for the user at the identity provider.
    Example: "123456789012345678901"

  - `username` (string, required)
    The account's username.
    Example: "example"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "link_user_authn_provider"

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


