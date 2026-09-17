# Start AutoSSL check for all cPanel accounts

This function performs an AutoSSL certificate check in the background for all cPanel users that have the feature enabled.

Endpoint: GET /start_autossl_check_for_all_users
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.pid` (integer)
    The process ID of the script.
    Example: 29193

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "start_autossl_check_for_all_users"

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


