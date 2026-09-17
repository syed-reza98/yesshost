# Add hosting plan extension

This function adds a package extension to a hosting plan (package).

Notes:

* If you need to edit a package extension's parameters, call this function again
with the same package extension name and the updated package extension variables.

* You can include the extension's variables in your function call, in key=value format.
  Consult the extension's documentation for a list of possible variables. Extension variables
  are case-sensitive.

Endpoint: GET /addpkgext
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `_PACKAGE_EXTENSIONS` (string, required)
    The hosting plan's
package extensions.

Note:

* Use space-delimited format to add multiple package extensions.
* Extension names are case-sensitive.

  - `name` (string, required)
    The hosting plan's name.

Note:

You cannot use the extensions name for a hosting plan.
    Example: "package1"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.pkg` (string)
    The hosting plan's name.
    Example: "package1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "addpkgext"

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


