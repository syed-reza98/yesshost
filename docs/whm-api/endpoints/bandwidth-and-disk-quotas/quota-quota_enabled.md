# Validate cPanel account quotas

This function checks if quotas are enabled on at least one of a user's /home directory mounts.

Endpoint: GET /quota_enabled
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.quota_enabled` (integer)
    Whether quotas are enabled.
* 1 - Enabled.
* 0 - Disabled.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "quota_enabled"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


