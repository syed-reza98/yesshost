# Create remote MySQL profile

This function creates a profile to access a remote MySQL® server.

Endpoint: GET /remote_mysql_create_profile
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `mysql_host` (any, required)
    The MySQL server's IP address or hostname.
    Example: "192.168.0.1"

  - `mysql_pass` (string, required)
    The MySQL server's password.
    Example: "12345luggage"

  - `mysql_port` (integer, required)
    The MySQL server's port.
    Example: 3306

  - `mysql_user` (string, required)
    The MySQL server's username.
    Example: "username"

  - `name` (string, required)
    The new profile's name.
    Example: "MyProfile"

  - `cpcloud` (integer)
    Whether the remote database profile is a cPanel Cloud deployment.

* 1 — Is cPanel Cloud.
* 0 — Not cPanel Cloud.
    Example: 1

  - `setup_via` (string)
    A description of the profile data.

Note:

This parameter defaults to User provided
MySQL credentials.
    Example: "Main terminal"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.profile_details` (object)
    An object containing the new profile's data.

  - `data.profile_details.active` (integer)
    Whether the system uses this profile to access the MySQL server.
* 1 — Active.
* 0 — Not active.
    Enum: 0, 1

  - `data.profile_details.cpcloud` (integer)
    Whether the remote database profile is a cPanel Cloud deployment.

* 1 — Is cPanel Cloud.
* 0 — Not cPanel Cloud.
    Enum: 0, 1

  - `data.profile_details.mysql_host` (any)
    The MySQL server's IP address or hostname.
    Example: "192.168.0.1"

  - `data.profile_details.mysql_pass` (string)
    The MySQL server's password.
    Example: "12345luggage"

  - `data.profile_details.mysql_port` (integer)
    The MySQL server's port.
    Example: 3306

  - `data.profile_details.mysql_user` (string)
    The MySQL server's username.
    Example: "username"

  - `data.profile_details.setup_via` (string)
    A description of the profile data.
    Example: "Main terminal"

  - `data.profile_saved` (string)
    The new profile's name.
    Example: "MyProfile"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remote_mysql_create_profile"

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


