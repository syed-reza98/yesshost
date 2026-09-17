# Update MySQL database name

This function changes a MySQL® database's name. MySQL does not allow you to rename a database. When cPanel & WHM "renames" a database, the system performs the following steps:
1. The system creates a new database.
2. The system moves data from the old database to the new database.
3. The system recreates grants and stored code in the new database.
4. The system deletes the old database and its grants.

Warning:

* If any of the first three steps fail, the system returns an error and attempts to restore the database's original state. If the restoration process fails, the API function's error response describes these additional failures.
* In rare cases, the system creates the second database successfully but fails to delete the old database or grants. The system treats the rename action as a success; however, the API function returns warnings that describe the failure to delete the old database or grants.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

Endpoint: GET /rename_mysql_database
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `newname` (string, required)
    The database's new name.

Warning:

* If database prefixing is enabled, this parameter must include the database prefix for the account.
* The maximum length of the database name is 64 characters. However, due to the method that cPanel & WHM uses to store MySQL database names, each underscore character (_) requires two characters of that limit. Therefore, if you enable database prefixing, the maximum length of the database name is 63 characters, which includes both the database prefix and the underscore character. Each additional underscore requires another two characters of that limit.
    Example: "database2"

  - `oldname` (string, required)
    The database's current name.
    Example: "database"

  - `cpuser` (string)
    The database's owner.
    Example: "username"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "rename_mysql_database"

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


