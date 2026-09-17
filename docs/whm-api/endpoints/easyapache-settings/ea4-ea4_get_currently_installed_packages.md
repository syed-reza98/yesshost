# Return installed Easyapache 4 packages

This function returns a list of the currently-installed EasyApache 4 packages.

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /ea4_get_currently_installed_packages
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.packages` (array)
    A list of the currently installed packages.
    Example: ["ea-apache24"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ea4_get_currently_installed_packages"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


