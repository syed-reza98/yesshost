# Update MySQL root password

This function resets the root user's password on the local MySQL® server.

Important:

  When you disable the MySQL/MariaDB role and remote MySQL is not already configured, the system disables this function.

Endpoint: GET /set_local_mysql_root_password
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `password` (string, required)
    The new MySQL root user's password.
    Example: "12345luggage"

  - `update_config` (integer)
    Whether to update the configuration files.

* 1 — Update.
* 0 — Do not update.

Note:

This value is always enabled when localhost is the active profile, and must be specified explicitly when a remote profile is active.

Warning:

This parameter updates the /root/.my.cnf file with the new password, which could cause problems with the MySQL configuration on the server. If you are unsure, do not specify this parameter.

  If you set this parameter to 0 when localhost* is the active profile, it will stop communication with the remote MySQL server until you update the profile's password.
 * If you set this parameter to 1 when a remote host is the active profile, it will stop communication with the remote MySQL server until you update the profile's password.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.configs_updated` (integer)
    Whether the system updated the configuration settings.

Note:

 This return only appears when the function includes the update_config parameter or when the localhost MySQL profile is active.
* 1 — Updated.
* 0 — Not updated.
    Enum: 0, 1

  - `data.password_reset` (integer)
    Whether the system reset the password.
* 1 — Reset.
* 0 — Not reset.
    Enum: 0, 1

  - `data.profile_updated` (integer)
    Whether the system updated the profile.

Note:

 This return only appears when the localhost MySQL profile is active.
* 1 — Updated.
* 0 — Not updated.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_local_mysql_root_password"

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


