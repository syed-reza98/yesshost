# Disable WHM API token

This function revokes an API token from the WHM account.

Endpoint: GET /api_token_revoke
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `token_name` (string, required)
    The API token's name.

Note:

To revoke multiple API tokens, increment this parameter's name. For example: token_name-1, token_name-2, and token_name-3.
    Example: "subway"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "api_token_revoke"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


