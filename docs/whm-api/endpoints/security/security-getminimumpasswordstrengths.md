# Return minimum password strength

This function retrieves the minimum password strength for cPanel & WHM accounts.

Endpoint: GET /getminimumpasswordstrengths
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string)
    The service for which to display the minimum password value.
If you do not use this parameter, this function returns the minimum password
setting for all values.
* default - All services
* createacct - New cPanel accounts
* list - Mailing lists
* mysql - MySQL® database users
* passwd - WHM user or system accounts
* postgres -  PostgreSQL database users
* sshkey - SSH keys
* virtual - Mail, FTP, Web Disk, and WebDAV accounts
    Enum: "default", "createacct", "ftp", "list", "mysql", "passwd", "postgres", "sshkey", "virtual"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.createacct` (integer)
    The minimum password strength for new cPanel accounts.
    Example: 50

  - `data.default` (integer)
    The minimum password strength for all services.
    Example: 50

  - `data.ftp` (integer)
    The minimum password strength for FTP accounts.
    Example: 50

  - `data.list` (integer)
    The minimum password strength for mailing lists.
    Example: 50

  - `data.mysql` (integer)
    The minimum password strength for MySQL® database users.
    Example: 50

  - `data.passwd` (integer)
    The minimum password strength for WHM user or system accounts.
    Example: 50

  - `data.postgres` (integer)
    The minimum password strength for PostgreSQL database users.
    Example: 50

  - `data.sshkey` (integer)
    The minimum password strength for SSH keys.
    Example: 50

  - `data.virtual` (integer)
    The minimum password strength for mail, FTP, Web Disk, and WebDAV accounts.
    Example: 50

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "getminimumpasswordstrengths"

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


