# Check if a plugin feature is ready for use

This function checks if a plugin-based feature is installed and ready for use on the server.

Endpoint: GET /EcosystemFeatures/is_ready
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `plugin` (string, required)
    The plugin-based feature's name in the local /var/cpanel/plugins/ directory.
    Example: "cpanel-monitoring-plugin"

  - `namespace` (string)
    A filter that allows you to show plugin-based features for a specific interface.
* Whostmgr - A WHM plugin-based feature.
* Cpanel - A cPanel plugin-based feature.
    Enum: "Whostmgr", "Cpanel"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.ready` (integer)
    Whether the plugin-based feature is installed and ready.
* 1 - Installed and ready for use.
* 0 - Not installed or not ready for use.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "is_ready"

  - `metadata.namespace` (string)
    The namespace used in the API call.
    Example: "EcosystemFeatures"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


