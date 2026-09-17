# Return MySQL version

This function retrieves the server's version of MySQL® or MariaDB®.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

Endpoint: GET /current_mysql_version
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.server` (string)
    The server's database engine.
* mysql
* mariadb
    Enum: "mysql", "mariadb"

  - `data.version` (string)
    The version number, in major.minor format.
    Example: "8.0"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "current_mysql_version"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


