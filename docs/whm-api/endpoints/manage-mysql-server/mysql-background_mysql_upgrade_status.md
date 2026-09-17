# Return MySQL or MariaDB upgrade status

This function retrieves the status of a background MySQL® or MariaDB® upgrade.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

Endpoint: GET /background_mysql_upgrade_status
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `upgrade_id` (string, required)
    The logfile's name.

Note:

  Log files exist in the /var/cpanel/logs/ directory.
    Example: "mysql_upgrade.20141108-172923"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.error` (integer)
    An error code.
* 0 — Successful upgrade.
* -1 — Child process died from a signal.
* 4 — MySQL upgrade failed error code.

  - `data.error_log` (string)
    The upgrade's error log file.

Note:

 You can review MySQL upgrade error logs in the following location, where $TIME represents the time in [Unix epoch time](https://en.wikipedia.org/wiki/Unix_time) format: /var/cpanel/logs/mysql_upgrade.$TIME/unattended_background_upgrade.error.
    Example: "Starting The system failed to update MYSQL,\\n------------------------------------\\n"

  - `data.log` (string)
    The upgrade's log file.
    Example: "Starting process with log file at /var/cpanel/logs/mysql_upgrade.20141108-172923/unattended_background_upgrade.log\nBeginning MariaDB 10.0 upgrade...\nObtained version information from system.\nEnsuring the MariaDB100 repository is available and working.\ncheckyum version 22.3\nEnsuring that the package MariaDB-client with version matching 10.0 is available.\nEnsuring that the package MariaDB-common with version matching 10.0 is available.\nEnsuring that the package MariaDB-devel with version matching 10.0 is available.\nEnsuring that the package MariaDB-server with version matching 10.0 is available.\nEnsuring that the package MariaDB-shared with version matching 10.0 is available.\nEnsuring that the package coreutils is available.\nEnsuring that the package grep is available.\nEnsuring that the package perl-DBI is available.\n your MariaDB server version for the right syntax to use near ''.`netcopya0I5KfqYTfHqJr` FOR UPGRADE'' at line 1 when executing ''CHECK TABLE ... FOR UPGRADE''\nFATAL ERROR: Upgrade failed\nDone building configuration.\nHooks system enabled.\nChecking for and running RPM::Versions ''post'' hooks for any RPMs about to be installed\nAll required ''post'' hooks have been run\nRunning: /usr/local/cpanel/scripts/check_cpanel_pkgs --targets=MySQL41,MySQL50,MySQL51,MySQL55,MySQL56,MariaDB100,MariaDB101 --fix\nRestarting mysql service.\nWaiting for mysql to restart waiting for mysql to initialize finished.\n\u001b[1;32mMariaDB upgrade completed successfully\u001b[0m\n------------------------------------\n"

  - `data.state` (string)
    The upgrade's state.
* success
* failed
* in progress
    Enum: "success", "failed", "in progress"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "background_mysql_upgrade_status"

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


