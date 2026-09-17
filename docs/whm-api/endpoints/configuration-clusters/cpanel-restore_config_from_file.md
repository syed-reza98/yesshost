# Update configuration file from backup

This function restores a configuration backup from a file. If the backup file does not contain any changes, the system does not write to the configuration file.

Endpoint: GET /restore_config_from_file
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `module` (string, required)
    The configuration module's name.

Important:

This parameter is case-sensitive. You must enter the parameter in the correct case format; otherwise, the function will fail.
    Example: "Main"

  - `path` (string, required)
    The absolute path to configuration file.

Note:
If this parameter contains JSON or equals-sign key and value pairs, they must appear in new lines.
    Example: "/var/cpanel/cpanel.config"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "restore_config_from_file"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


