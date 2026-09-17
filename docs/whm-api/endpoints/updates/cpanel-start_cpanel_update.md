# Start cPanel & WHM update

This function starts an update of cPanel & WHM.

Endpoint: GET /start_cpanel_update
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `mode` (string,null)
    The cPanel & WHM update’s mode of operation.

* null — Only reinstall cPanel & WHM if a newer version is available.
* force   — Force a reinstall of cPanel & WHM, even if the system is up to date.
* sync    — Update the currently-installed version of cPanel & WHM instead of downloading
a newer version. This ensures the current version installed has the correct files.
    Enum: "force", "sync"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.is_new` (integer)
    Whether the update process started as a result of this request.

* 1 — The update process started as a result of this request.
* 0 — The update process existed prior to this request.
    Enum: 1, 0

  - `data.log_path` (string)
    The filesystem path to the update process’s log file.
    Example: "/var/cpanel/updatelogs/update.1604521159.log"

  - `data.pid` (integer)
    The update process’s ID.
    Example: 23456

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "start_cpanel_update"

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


