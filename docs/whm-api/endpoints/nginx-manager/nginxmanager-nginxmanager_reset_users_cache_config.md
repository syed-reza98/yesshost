# Restore NGINX configuration to default values.

This function resets a user to the NGINX system default.

Endpoint: GET /nginxmanager_reset_users_cache_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (array)
    A list of users to reset to the NGINX system default.

Note:

If you do not pass this parameter, this function resets the configuration to the default for all users on the system.
    Example: ["unclebob","auntsue"]

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "nginxmanager_reset_users_cache_config"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


