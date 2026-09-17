# Validate remote MySQL profile connection

This function validates a specified remote MySQL® profile's connection details.

Endpoint: GET /remote_mysql_validate_profile
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The profile's name.
    Example: "MyProfile"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.profile_validated` (string)
    The validated profile's name.
    Example: "MyProfile"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remote_mysql_validate_profile"

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


