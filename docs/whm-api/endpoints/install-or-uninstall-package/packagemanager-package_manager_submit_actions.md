# Start RPM package installation, update, or removal

This function installs, upgrades, or uninstalls RPM packages.

Note:

The system queues this function's actions to run as background tasks. The actions may
require additional time to finish.

Endpoint: GET /package_manager_submit_actions
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `install` (string)
    The RPM package that you want to install. If you do not use this parameter, the function
does not install a package.

Note:

You can pass this parameter multiple times to install more than one RPM package

  - `uninstall` (string)
    The RPM package that you want to uninstall. If you do not use this parameter, the function
does not uninstall a package.

Note:

You can pass this parameter multiple times to uninstall more than one RPM package.

  - `upgrade` (string)
    The RPM package that you want to upgrade. If you do not use this parameter, the function
does not upgrade a package.

Note:

You can pass this parameter multiple times to upgrade more than one RPM package.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.build` (integer)
    A valid Process ID (PID).
    Example: 9717

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "package_manager_submit_actions"

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


