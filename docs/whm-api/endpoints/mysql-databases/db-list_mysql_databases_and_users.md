# Return MySQL databases and users for account

This function retrieves the MySQL® database and user data for the specified account.

Important:

When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

Endpoint: GET /list_mysql_databases_and_users
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The username for a specified account.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.mysql_config` (object)
    An object that contains the user's MySQL database configuration settings.

  - `data.mysql_config.mysql-version` (string)
    The MySQL version installed on the server.
    Example: "5.5"

  - `data.mysql_config.prefix_length` (integer)
    The maximum number of characters allowed for the prefix on this server.
    Enum: 8, 16

  - `data.mysql_config.use_db_prefix` (integer)
    Whether database prefixing is enabled on the server.
* 1 — Enabled.
* 0 — Disabled.
    Enum: 0, 1

  - `data.mysql_databases` (object)
    An object that contains database names and users.
    Example: {"user1_database1":["user1_user1"],"user2_database2":["user2_user2"]}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_mysql_databases_and_users"

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


