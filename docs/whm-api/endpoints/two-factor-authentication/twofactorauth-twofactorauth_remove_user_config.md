# Remove 2FA settings

This function removes the Two-Factor Authentication (2FA) settings for one or more specified user accounts.

Note:

If you remove the 2FA settings for an account, the user must perform the setup procedure again to re-configure 2FA on the account.

This function reports an account in the data.users_modified array
even if that account had no 2FA settings configured to begin with.
Check whether 2FA was actually configured beforehand (for example,
with the twofactorauth_get_tfa_config_for_user function) if your
integration needs to distinguish an actual removal from a no-op.

Endpoint: GET /twofactorauth_remove_user_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The account's username.

Note:

 To remove multiple users, increment the parameter name. For example, user-1, user-2, or user-3.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.failed` (object)
    An object that contains the user accounts for which removal failed.

  - `data.users_modified` (array)
    An array of the user accounts for which you successfully removed 2FA settings.
    Example: ["example"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "twofactorauth_remove_user_config"

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


