# Update NGINX caching status.

This function enables or disables NGINX caching.

Endpoint: GET /nginxmanager_set_cache_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `enabled` (integer, required)
    Whether to enable to disable caching.

Note:

* 1 - Enables caching.
* 0 - Disables caching.
    Enum: 1, 0

  - `user` (array)
    A list of users whose caching you want to enable or disable.

Note:

If you do not pass this parameter, this function sets the caching status for all users on the system.
    Example: ["unclebob","auntsue"]

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "nginxmanager_set_cache_config"

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


