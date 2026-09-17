# Delete hosting plan

This function deletes a hosting plan (package).

Endpoint: GET /killpkg
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `pkgname` (string, required)
    The hosting plan's name.

Note:

 You cannot delete a hosting plan that a cPanel account currently uses.
    Example: "package1"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "killpkg"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


