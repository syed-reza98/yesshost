# Update minimum password strength

This function sets the minimum password strength for cPanel & WHM
accounts.

Note

If you do not specify a value for a parameter, the system will retain the existing setting.

Endpoint: GET /setminimumpasswordstrengths
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `createacct` (integer)
    The minimum password strength for new cPanel accounts.
    Example: 50

  - `default` (integer)
    The minimum password strength for all services.
    Example: 50

  - `ftp` (integer)
    The minimum password strength for FTP accounts.
    Example: 50

  - `list` (integer)
    The minimum password strength for mailing lists.
    Example: 50

  - `mysql` (integer)
    The minimum password strength for MySQL® database users.
    Example: 50

  - `passwd` (integer)
    The minimum password strength for WHM user or system accounts.
    Example: 50

  - `postgres` (integer)
    The minimum password strength for PostgreSQL® database users.
    Example: 50

  - `sshkey` (integer)
    The minimum password strength for SSH keys.
    Example: 50

  - `virtual` (integer)
    The minimum password strength for mail, FTP, Web Disk, and WebDAV accounts.
    Example: 50

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "setminimumpasswordstrengths"

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


