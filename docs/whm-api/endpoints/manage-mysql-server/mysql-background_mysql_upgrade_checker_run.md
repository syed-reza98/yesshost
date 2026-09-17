# Validate MySQL status before upgrade

This function checks your MySQL configuration file and table engine before an upgrade to MySQL 8.0.

Important:

When you disable the
MySQL/MariaDB role
and remote MySQL is not already configured, the system disables this function.

Endpoint: GET /background_mysql_upgrade_checker_run
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.log_entry` (string)
    The upgrade log's location, relative to the
[/var/cpanel/logs/](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#/var-cpanel-logs)
directory.
    Example: "mysql_upgrade.20200202-172923"

  - `data.pid` (integer)
    The upgrade check's process ID.
    Example: 23456

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "background_mysql_upgrade_checker_run"

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


