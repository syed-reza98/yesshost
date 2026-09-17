# Return NGINX caching configurations.

This function returns the system NGINX cache configuration.

Endpoint: GET /nginxmanager_get_cache_config_system
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `merge` (integer)
    Whether to combine the default and system NGINX configurations when returning configuration data.

Note:

* 1 - Return the configuration with default and system values combined.
    Enum: 1

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"default":{"enabled":1,"inactive_time":"60m","levels":62,"logging":0,"proxy_cache_background_update":"on","proxy_cache_lock":"on","proxy_cache_min_uses":1,"proxy_cache_revalidate":"on","proxy_cache_use_stale":"error timeout http_429 http_500 http_502 http_503 http_504","x_cache_header":0,"zone_size":"10m"},"system":{"enabled":true,"inactive_time":"60m","levels":62,"logging":false,"proxy_cache_background_update":"on","proxy_cache_lock":"on","proxy_cache_min_uses":1,"proxy_cache_revalidate":"on","proxy_cache_use_stale":"error timeout http_429 http_500 http_502 http_503 http_504","x_cache_header":0,"zone_size":"10m"}}

  - `data.default` (object)
    The default configuration values.
    Example: {"enabled":1,"inactive_time":"60m","levels":62,"logging":0,"proxy_cache_background_update":"on","proxy_cache_lock":"on","proxy_cache_min_uses":1,"proxy_cache_revalidate":"on","proxy_cache_use_stale":"error timeout http_429 http_500 http_502 http_503 http_504","x_cache_header":0,"zone_size":"10m"}

  - `data.default.enabled` (integer)
    Caching is enabled or disabled.

Note:

* 1 - Caching is enabled
* 0 - Caching is disabled
    Enum: 0, 1

  - `data.system` (object)
    The system's configuration values.
    Example: {"enabled":true,"inactive_time":"60m","levels":62,"logging":false,"proxy_cache_background_update":"on","proxy_cache_lock":"on","proxy_cache_min_uses":1,"proxy_cache_revalidate":"on","proxy_cache_use_stale":"error timeout http_429 http_500 http_502 http_503 http_504","x_cache_header":0,"zone_size":"10m"}

  - `data.system.enabled` (any)
    Caching is enabled or disabled.

Note:

* true - Caching is enabled
* false - Caching is disabled
enum:
- true
- false
type: boolean
    Example: true

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


