# Start background MySQL upgrade

This function upgrades MySQL® or MariaDB® in the background. This will reinstall MySQL® or MariaDB® if the version given is the installed version.

Important:

When you disable the MySQL/MariaDB server role and remote MySQL® is not already configured, the system disables this function.

Endpoint: GET /start_background_mysql_upgrade
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `version` (number, required)
    The desired MySQL® or MariaDB® version. Must contain one decimal.
    Example: 5.7

## Response 200 fields (application/json):

  - `data` (object)

  - `data.upgrade_id` (string)
    The upgrade log's location, relative to the /var/cpanel/logs/ directory.
    Example: "mysql_upgrade.20200202-172923"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "start_background_mysql_upgrade"

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


