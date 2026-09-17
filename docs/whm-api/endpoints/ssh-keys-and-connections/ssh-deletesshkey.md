# Delete SSH key

This function function deletes an SSH key from the server.

Warning:

Only the root account can use this function, and it only affects
the root keys. To perform this function on a cPanel user account, call the
cPanel API 2 SSH::authkey function through the WHM API.

Endpoint: GET /deletesshkey
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `file` (string, required)
    The SSH key file's name.
    Example: "/root/.ssh/test"

  - `leave_authorized` (integer)
    Whether to authorize the SSH key to access the server.

* 1 — Leave authorized.
* 0 — Do not leave authorized.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.file` (string)
    The SSH key file's name.
    Example: "/root/.ssh/test"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "deletesshkey"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


