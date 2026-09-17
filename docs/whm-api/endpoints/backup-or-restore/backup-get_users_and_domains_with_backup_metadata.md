# Return users and domains with backup metadata

This function lists all users and their domains that have backup metadata.

Endpoint: GET /get_users_and_domains_with_backup_metadata
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)
    Keys are cPanel user accounts that contain backup metadata.
    Example: {"username":"example.com","username2":"example.net","username3":"example.org"}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_users_and_domains_with_backup_metadata"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


