# Return suspended cPanel accounts

This function lists locked accounts on the server. Only WHM users with
root-level privileges can unsuspend locked accounts.

Endpoint: GET /listlockedaccounts
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.account` (array)
    A list of locked accounts on the server.
    Example: ["account1","account2"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "listlockedaccounts"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 — Success.
- 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


