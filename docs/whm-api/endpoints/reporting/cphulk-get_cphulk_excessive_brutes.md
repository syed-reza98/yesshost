# Return login security excessive brute force attacks

This function retrieves excessive brute force attack entries from the cPHulk database.

Endpoint: GET /get_cphulk_excessive_brutes
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.excessive_brutes` (array)
    Information about each brute force attack.

  - `data.excessive_brutes.exptime` (string)
    When the login request will time out.
    Example: "2014-12-07T00:00:00.000Z"

  - `data.excessive_brutes.ip` (any)
    The IP address of the login attempt.
    Example: "192.168.0.1"

  - `data.excessive_brutes.logintime` (string)
    When the login attempt occurred.
    Example: "2014-11-20T00:00:00.000Z"

  - `data.excessive_brutes.notes` (string)
    The login entry's notes.
    Example: "this was a triumph"

  - `data.excessive_brutes.timeleft` (number)
    The number of minutes that remain before cPHulk removes the block.
    Example: 14

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_cphulk_excessive_brutes"

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


