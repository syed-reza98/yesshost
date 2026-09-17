# Start additional domain conversion

This function initiates the conversion process for an addon domain
into a cPanel account.

Note:

For information about the data that the system migrates when you convert an
addon domain, read our
Addon Domain Conversion List documentation.

Important:

When you disable the Web Server role,
the system disables this function.

Endpoint: GET /convert_addon_initiate_conversion
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The addon domain to convert into an account's main domain.
    Example: "example.com"

  - `username` (string, required)
    The username for a specified account.
    Example: "username"

  - `copymysqldb-*` (string)
    Copy a MySQL® database from the source account to the new account with a new
database name.

This parameter's format consists of copymysqldb, a hyphen, and the name of
the existing database. For example, copymysqldb-olddatabase.

If you do not specify this parameter, the system does not copy any MySQL
databases to the new account.

  - `movemysqldb` (string)
    Move the specified MySQL database from the source account to the new account.

If you do not specify this parameter, the system does not move any MySQL
databases to the new account.

Note:

To move multiple databases, increment the parameter name. For example, movemysqldb-1,
movemysqldb-2, and movemysqldb-3.

  - `movemysqluser` (string)
    Move the specified MySQL database user from the source account into the new
MySQL database account.

If you do not specify this parameter, the system does not move any MySQL
database users to the new account.

Note:

To move multiple database users, increment the parameter name. For example, movemysqluser-1,
movemysqluser-2, and movemysqluser-3.

  - `pkgname` (string)
    The hosting package that you want to assign to the new account.
    Example: "mycustompkg"

## Response 200 fields (application/json):

  - `data` (object)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "convert_addon_initiate_conversion"

  - `metadata.reason` (string)
    The reason the function failed when the metadata.result field is 0. This field may include a success message when the function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The API version of the function.
    Example: 1


