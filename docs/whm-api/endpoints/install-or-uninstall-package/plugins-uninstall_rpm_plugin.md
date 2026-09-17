# Uninstall WHM plugin RPM package

This function starts the uninstall process for a plugin. The uninstall process runs as a background process.

Endpoint: GET /uninstall_rpm_plugin
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The name of a plugin RPM to uninstall.
    Example: "plugin_name"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.log_entry` (string)
    The name of the RPM plugin log entry for this uninstall process, including a timestamp.
    Example: "2017-01-01T19:39:27Z_plugin_name"

  - `data.pid` (integer)
    The PID of the process that is doing the removal.
    Example: 1234

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "uninstall_rpm_plugin"

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


