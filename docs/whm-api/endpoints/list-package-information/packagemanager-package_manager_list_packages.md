# Return available RPM packages

This function lists information about the system's available RPM packages.

Endpoint: GET /package_manager_list_packages
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `state` (string)
    Return RPM packages that exist in a specified state.

* any — All RPMs available on the system.
* installed — The RPMs installed on the system.
* not_installed — The available RPMs not yet installed on the system.
* updatable — The RPMs with updates available.
    Enum: "any", "installed", "not_installed", "updatable"

## Response 200 fields (application/json):

  - `data` (object)
    A list of RPM objects that match the requested state.

  - `data.packages` (array)
    An array of objects that contains the RPM packages on the system.
    Example: [{"package":"MariaDB-client"},{"package":"MariaDB-common"}]

  - `data.packages.package` (string)
    An RPM package.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "package_manager_list_packages"

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


