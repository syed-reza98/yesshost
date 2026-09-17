# Update MySQL user password

This function changes a MySQL® database user's password.

Important:

When you disable the
MySQL/MariaDB role and
remote MySQL is not already configured, the system disables this function.

Endpoint: GET /set_mysql_password
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `password` (string, required)
    The database user's new password.
    Example: "123456luggage"

  - `user` (string, required)
    The database username. For information about database username
restrictions, read the
MySQL and MariaDB
documentation.
    Example: "username"

  - `cpuser` (string)
    The cPanel user that controls the database user.
    Example: "example"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_mysql_password"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


