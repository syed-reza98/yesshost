# Return accounts linked to identity providers

This function lists all accounts that link to available external authentication identity providers.

Endpoint: GET /get_users_authn_linked_accounts
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.username_linked_accounts` (array)
    An array of objects containing user accounts with their linked identity provider accounts.

  - `data.username_linked_accounts.link_time` (integer)
    When the user linked the account.
    Example: 1443124003

  - `data.username_linked_accounts.preferred_username` (string)
    The preferred username of the account on the identity provider that the interface will display.
    Example: "username@example.com"

  - `data.username_linked_accounts.provider_id` (string)
    The system's internal key for the identity provider.
    Example: "cpanelid"

  - `data.username_linked_accounts.provider_protocol` (string)
    The identity provider's protocol.
    Example: "openid_connect"

  - `data.username_linked_accounts.subject_unique_identifier` (string)
    The unique identifier for the user at the identity provider.
    Example: "123456789012345678901"

  - `data.username_linked_accounts.username` (string)
    The cPanel account's username.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_users_authn_linked_accounts"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


