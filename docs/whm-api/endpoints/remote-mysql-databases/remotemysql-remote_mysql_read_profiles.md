# Return remote MySQL profiles

This function displays the details of all remote MySQL® profiles available in WHM.

Endpoint: GET /remote_mysql_read_profiles
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"MyProfile":{"active":0,"is_localhost_profile":1,"mysql_host":"192.168.0.1","mysql_pass":"123456luggage","mysql_port":3306,"mysql_user":"username","mysql_version_is_supported":0,"setup_via":"Main terminal"},"MyProfile2":{"active":0,"is_localhost_profile":"1","mysql_host":"192.168.0.2","mysql_pass":"123456luggage","mysql_port":3306,"mysql_user":"username","mysql_version_is_supported":"0","setup_via":"Main terminal"},"localhost":{"active":1,"is_localhost_profile":1,"mysql_host":"localhost","mysql_pass":"#1mpll-C","mysql_port":3306,"mysql_user":"root","mysql_version_is_supported":0,"setup_via":"Auto-Migrated active profile"}}

  - `data.additionalProperties` (object)
    An object containing the MySQL profile's data.

Note:

The profile's name is the return's name.

  - `data.additionalProperties.active` (integer)
    Whether the system uses this profile to access the MySQL server.

* 1 — Accesses the MySQL server.
* 0 — Does not access the MySQL server.
    Enum: 1, 0

  - `data.additionalProperties.is_localhost_profile` (integer)
    Whether the system's MySQL profile functions with the server's
local MySQL instance.

Note:

* 1 — Functions with the local MySQL instance.
* 0 — Does not function with the local MySQL instance.
    Enum: 1, 0

  - `data.additionalProperties.mysql_host` (any)
    The MySQL server's IP address or hostname.

  - `data.additionalProperties.mysql_pass` (string)
    The MySQL server's password.
    Example: "123456luggage"

  - `data.additionalProperties.mysql_port` (integer)
    The MySQL server's port.
    Example: 3306

  - `data.additionalProperties.mysql_user` (string)
    The MySQL server's username.
    Example: "username"

  - `data.additionalProperties.mysql_version_is_supported` (integer)
    Whether the system supports the server's MySQL version.

* 1 — Supported.
* 0 — Not supported.
    Enum: 1, 0

  - `data.additionalProperties.setup_via` (string)
    A description of the MySQL profile data.
    Example: "Main terminal"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remote_mysql_read_profiles"

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


