# Delete the user's NGINX cache.

This function clears a user's NGINX cache

Endpoint: GET /nginxmanager_clear_cache
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (array)
    A list of users whose cache you want to clear.

Note:

If you do not pass this parameter, this function clears the cache for all users.
    Example: ["unclebob","auntsue"]

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "nginxmanager_clear_cache"

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


