# Remove hosting plan extension

This function deletes a package extension from a hosting plan (package).

Note:

* You can additionally include extension's variables in your function call, in key=value format.
  Consult the extension's documentation for a list of possible variables. Extension variable names are case-sensitive.

Endpoint: GET /delpkgext
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `_DELETE_EXTENSIONS` (string, required)
    The space delimited
package extensions
to delete.

Note:

* Extension names are case-sensitive.
    Example: "extension1 extension2"

  - `name` (string, required)
    The hosting plan's name.
    Example: "package1"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.pkg` (string)
    The deleted hosting plan's name.
    Example: "package1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "delpkgext"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


