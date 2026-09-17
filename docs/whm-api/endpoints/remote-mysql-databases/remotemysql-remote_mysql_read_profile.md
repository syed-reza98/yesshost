# Return remote MySQL profile

This function displays the details of a specified remote MySQL® profile.

Endpoint: GET /remote_mysql_read_profile
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The MySQL profile's name.
    Example: "MyProfile"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.profile_details` (object)
    An object containing the profile's data.

  - `data.profile_details.active` (integer)
    Whether the system uses this profile to access the MySQL server.

* 1 — The system uses the profile.
* 0 — The system does not use the profile.
    Enum: 1, 0

  - `data.profile_details.mysql_host` (string)
    The MySQL server's IP address or hostname.

  - `data.profile_details.mysql_pass` (string)
    The MySQL server's password.
    Example: "123456luggage"

  - `data.profile_details.mysql_port` (integer)
    The MySQL server's port number.
    Example: 3306

  - `data.profile_details.mysql_user` (string)
    The MySQL server's username.
    Example: "username"

  - `data.profile_details.setup_via` (string)
    A description of the MySQL profile data.
    Example: "Main terminal"

  - `data.profile_name` (string)
    The MySQL profile's name.
    Example: "MyProfile"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remote_mysql_read_profile"

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


