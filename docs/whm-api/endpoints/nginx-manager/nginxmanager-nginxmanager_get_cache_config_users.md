# Return user NGINX caching configurations.

This function returns a user's NGINX cache configuration.

Endpoint: GET /nginxmanager_get_cache_config_users
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `merge` (integer)
    Combine default, system, and user NGINX configurations when returning configuration data.

Note:

* 1 - Return the configuration with default, system, and user values combined.
    Enum: 1

  - `user` (array)
    A list of users whose cache configuration you want to retrieve.

Note:

If you do not pass this parameter, this function retrieves the cache configuration for all users.
    Example: ["unclebob","auntsue"]

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"users":[{"config":{"enabled":true,"inactive_time":"60m","levels":62,"logging":false,"proxy_cache_background_update":"on","proxy_cache_lock":"on","proxy_cache_min_uses":1,"proxy_cache_revalidate":"on","proxy_cache_use_stale":"error timeout http_429 http_500 http_502 http_503 http_504","x_cache_header":false,"zone_size":"10m"},"merged":0,"owner":"root","user":"cptest1"},{"config":{"enabled":true,"inactive_time":"60m","levels":62,"logging":false,"proxy_cache_background_update":"on","proxy_cache_lock":"on","proxy_cache_min_uses":1,"proxy_cache_revalidate":"on","proxy_cache_use_stale":"error timeout http_429 http_500 http_502 http_503 http_504","x_cache_header":false,"zone_size":"10m"},"merged":0,"owner":"root","user":"cptest2"}]}

  - `data.users` (array)
    An array of objects containing the user configurations.
    Example: [{"config":{"enabled":true,"inactive_time":"60m","levels":62,"logging":false,"proxy_cache_background_update":"on","proxy_cache_lock":"on","proxy_cache_min_uses":1,"proxy_cache_revalidate":"on","proxy_cache_use_stale":"error timeout http_429 http_500 http_502 http_503 http_504","x_cache_header":false,"zone_size":"10m"},"merged":0,"owner":"root","user":"cptest1"},{"config":{"enabled":true,"inactive_time":"60m","levels":62,"logging":false,"proxy_cache_background_update":"on","proxy_cache_lock":"on","proxy_cache_min_uses":1,"proxy_cache_revalidate":"on","proxy_cache_use_stale":"error timeout http_429 http_500 http_502 http_503 http_504","x_cache_header":false,"zone_size":"10m"},"merged":0,"owner":"root","user":"cptest2"}]

  - `data.users.config` (object)
    The user's configuration values.

  - `data.users.config.enabled` (boolean)
    Caching is enabled or disabled.

Note:

* true - Caching is enabled
* false - Caching is disabled
    Enum: false, true

  - `data.users.merged` (integer)
    Whether the user's configuration is combined with the system and default configuration values.

Note:

This value indicates if the function passed the merge flag.

* 1 - The system and default configuration values are combined with the user's configuration values.
* 0 - The system and default configuration values are not combined with the user's configuration values.
    Enum: 1, 0

  - `data.users.owner` (string)
    The reseller who owns this account.

  - `data.users.user` (string)
    The user's name.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "nginxmanager_set_config"

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


