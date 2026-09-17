# Return MySQL databases

This function lists the server's databases.

Warning:

On most servers, this function returns a large amount of output. We strongly suggest that you filter and sort the output.

Important:

When you disable the MySQL/MariaDB and PostgreSQL roles and remote MySQL is not already configured, the system disables this function.

Endpoint: GET /list_databases
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contain of database data.

  - `data.payload.cpuser` (string)
    The database's owner.
    Example: "example"

  - `data.payload.engine` (string)
    The database's engine.
- mysql
- postgresql
    Enum: "mysql", "postgresql"

  - `data.payload.name` (string)
    The database's name.
    Example: "example_db0"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_databases"

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


