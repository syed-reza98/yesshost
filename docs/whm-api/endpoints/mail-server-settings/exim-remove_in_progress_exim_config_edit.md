# Remove Exim configuration files after failed update

This function removes in-progress Exim configuration files after
a failed update to Exim. When cPanel & WHM attempts to update an Exim configuration,
the system creates dry run files to replace of the ordinary configuration
files.

Note:

* If the update fails, the system leaves these dry run files in place.
 When the user accesses the Advanced Editor section of WHM's Exim Configuration Manager*
interface (_Home >> Service Configuration >> Exim Configuration Manager_),
they access these dry run files instead of the actual configuration files.

Endpoint: GET /remove_in_progress_exim_config_edit
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remove_in_progress_exim_config_edit"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Removed OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the `reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


