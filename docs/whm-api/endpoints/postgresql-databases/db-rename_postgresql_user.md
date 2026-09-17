# Update PostgreSQL username

This function changes a PostgreSQL® database user's name.

Important:

  When you disable the PostgreSQL role, the system disables this function.

Endpoint: GET /rename_postgresql_user
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `newname` (string, required)
    The database user's new name.

Warning:
If database prefix is enabled, this parameter must include the database prefix for the account.
    Example: "username2"

  - `oldname` (string, required)
    The database user's current name.
    Example: "username"

  - `password` (string, required)
    The database user's new password.
    Example: "12345luggage"

  - `cpuser` (string)
    The database user's owner.
    Example: "example"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "rename_postgresql_user"

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


