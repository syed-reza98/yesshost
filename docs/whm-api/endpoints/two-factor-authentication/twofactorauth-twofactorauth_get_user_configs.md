# Return cPanel accounts with 2FA enabled

This function returns a list of user-controlled accounts and whether the accounts have Two-Factor Authentication (2FA) enabled.

Endpoint: GET /twofactorauth_get_user_configs
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string)
    The username for a specified account.

Note:

If you do not specify a value, the function returns all user accounts.
    Example: "example"

## Response 200 fields (application/json):

  - `data` (object)
    The data that the function returns.
    Example: {"example":{"is_enabled":0,"primary_domain":"example.com"}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "twofactorauth_get_user_configs"

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


