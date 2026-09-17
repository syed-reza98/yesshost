# Update the servers SQL configuration.

This function updates the database configuration file for MySQL® or MariaDB®.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

Endpoint: POST /update_sql_config
Version: 11.138.0.6
Security: BasicAuth

## Request fields (application/json):

  - `data` (array, required)
    Array of objects that contains the requested updates to the sql configuration.
    Example: [{"name":"max_allowed_packet","section":"mysqld","value":"268435456"}]

  - `data.name` (string)
    Example: "max_allowed_packet"

  - `data.remove` (boolean)

  - `data.section` (string)
    Example: "mysqld"

  - `data.value` (string)
    Example: "268435456"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "update_sql_config"

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


