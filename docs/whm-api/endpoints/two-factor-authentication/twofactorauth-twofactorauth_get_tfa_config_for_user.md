# Return cPanel account 2FA data

This function returns the Two-Factor Authentication (2FA) configuration for a cPanel account, its email accounts, and its team user accounts.

Endpoint: GET /twofactorauth_get_tfa_config_for_user
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The username for the account.
    Example: "example"

## Response 200 fields (application/json):

  - `data` (object)
    The cPanel user account that the API was called for.
    Example: {"example":{"email":{"user@example.com":{"secret":"QLLIU5WTY3UTJGNG"}},"primary_account":{"secret":"QLLIU5WTY3UTJGNG"},"team":{"team_user@example":{"secret":"QLLIU5WTY3UTJGNG"}}}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "twofactorauth_get_tfa_config_for_user"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


