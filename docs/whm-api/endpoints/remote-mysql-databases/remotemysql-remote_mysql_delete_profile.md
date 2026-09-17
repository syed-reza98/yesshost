# Delete remote MySQL profile

This function deletes a specified remote MySQL® profile.

Endpoint: GET /remote_mysql_delete_profile
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The profile's name.
    Example: "MyProfile"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.profile_deleted` (string)
    The deleted profile's name. A valid string.
    Example: "MyProfile"

  - `data.profile_details` (object)
    hash of the deleted profile's data. This hash includes the name , mysql_host , mysql_user , mysql_pass , mysql_port , setup_via , and active returns.

  - `data.profile_details.active` (integer)
    Whether the system uses this profile to access the MySQL server.
- 1  Active.
- 0  Not active.
    Enum: 0, 1

  - `data.profile_details.mysql_host` (string)
    The MySQL server's IP address or hostname. A valid IP address or hostname.
    Example: "192.168.0.1"

  - `data.profile_details.mysql_pass` (string)
    The MySQL server's password. A valid string.
    Example: "12345luggage"

  - `data.profile_details.mysql_port` (integer)
    The MySQL server's port. A valid positive integer.
    Example: 3306

  - `data.profile_details.mysql_user` (string)
    The MySQL server's username. A valid string.
    Example: "username"

  - `data.profile_details.setup_via` (string)
    description of the profile data. A valid string with a maximum length of 255 characters.
    Example: "Main terminal"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remote_mysql_delete_profile"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


