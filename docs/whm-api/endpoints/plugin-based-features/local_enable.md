# Enable feature locally

This function allows you to locally enable a plugin-based feature.
Only WHM users with root-level privileges can run this function.

Endpoint: GET /EcosystemFeatures/local_enable
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `plugin` (string, required)
    The plugin-based feature's name in the local /var/cpanel/plugins/ directory.

Important:
You can only use this function to enable the following features:

*  Server Monitoring (Powered by 360 Monitoring).
*  WebPros AI Application Builder for cPanel.
    Enum: "cpanel-monitoring-plugin", "cpanel-nova-plugin"

  - `namespace` (string)
    A filter that allows you to show plugin-based features for a specific interface.
  * Whostmgr - A WHM plugin-based feature.
  * Cpanel - A cPanel plugin-based feature.
    Enum: "Whostmgr"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "local_enable"

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


