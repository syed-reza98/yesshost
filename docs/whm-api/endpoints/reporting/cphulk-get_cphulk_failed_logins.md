# Return login security failed logins

This function lists failed login attempt entries from the cPHulk database.

Endpoint: GET /get_cphulk_failed_logins
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.failed_logins` (array)
    Information about each failed login attempt.

  - `data.failed_logins.authservice` (string)
    The name of the authentication service that the login attempt used.
    Example: "dovecot"

  - `data.failed_logins.exptime` (string)
    When the login request will time out.
    Example: "2014-12-07T00:00:00.000Z"

  - `data.failed_logins.ip` (any)
    The login attempt's IP address.
    Example: "192.168.0.1"

  - `data.failed_logins.logintime` (string)
    When the login attempt occurred.
    Example: "2014-11-20T00:00:00.000Z"

  - `data.failed_logins.service` (string)
    The login attempt's service. name.
    Example: "ftp"

  - `data.failed_logins.timeleft` (integer)
    The number of minutes that remain before cPHulk removes the block.
    Example: 14

  - `data.failed_logins.user` (string)
    The login attempt's username.
    Example: "example"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_cphulk_failed_logins"

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


