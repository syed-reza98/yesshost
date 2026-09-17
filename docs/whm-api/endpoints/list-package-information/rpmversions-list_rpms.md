# Return required but uninstalled server RPM package

This function lists RPMs that the server needs, but the server owner has not yet installed.
When you call this function, it performs the same actions as the following command:

/usr/local/cpanel/scripts/check_cpanel_pkgs --list-only --targets[target]

For more information, read our
rpm.versions system
documentation.

Endpoint: GET /list_rpms
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `target` (string)
    The target that depends on the uninstalled RPMs. If you do not specify a value, the function lists all of the required but uninstalled RPMs for all RPM targets.
    Example: "3rdparty"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.rpms` (array)
    A list of all RPM dependencies that the server owner has not yet installed.
    Example: ["cpanel-pcre"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_rpms"

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


