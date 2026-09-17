# Update cPanel account password

This function modifies a cPanel or reseller account's password.

Note

* When modifying the root password, this will only update the password for the root system user, but not for the root MySQL user.
* To update the MySQL root user's password, use set_local_mysql_root_password.

Endpoint: GET /passwd
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `password` (string, required)
    The account's new password.
    Example: "12345luggage"

  - `user` (string, required)
    The account's username.
    Example: "username"

  - `db_pass_update` (integer)
    Whether to also change the account's MySQL® password.

* 1 — Also update the account's MySQL password to match the password value.
* 0 — Do not update.
    Enum: 0, 1

  - `digestauth` (integer)
    Whether to enable Digest Authentication for the account. If you
do not specify a value, the account retains its current Digest
Authentication setting. This is an alias for the enabledigest parameter.

* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

  - `enabledigest` (integer)
    Whether to enable Digest Authentication for the account. If you
do not specify a value, the account retains its current Digest
Authentication setting.

* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.app` (array)
    The services for which the system changed the password.
    Example: ["ftp"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "passwd"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Password changed for user “username”."

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


