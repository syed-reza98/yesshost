# Create remote MySQL profile via SSH

This function uses SSH to create a profile to access a remote MySQL® server.

Endpoint: GET /remote_mysql_create_profile_via_ssh
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `host` (any, required)
    The MySQL server's IP address or hostname.
    Example: "192.168.0.1"

  - `name` (string, required)
    The new profile's name.
    Example: "MyProfileSSH"

  - `port` (integer, required)
    The SSH server's port.
    Example: 22

  - `user` (string, required)
    The SSH username.
    Example: "SSHuser"

  - `cpcloud` (integer)
    Whether the remote database profile is a cPanel Cloud deployment.

* 1 — Is cPanel Cloud.
* 0 — Not cPanel Cloud.
    Example: 1

  - `password` (string)
    The SSH username's password.

Warning:

 You must specify either the password or the sshkey_name parameter.
    Example: "12345luggage"

  - `root_escalation_method` (string)
    The escalation method to use to authenticate the account.

Warning:

 This parameter is required if the user parameter's value is not root.
    Enum: "sudo", "su"

  - `root_password` (string)
    The MySQL server's root user's password.

Warning:

 This parameter is required if the root_escalation_method parameter's value is su.
    Example: "username"

  - `sshkey_name` (string)
    The name of the SSH key.

Warning:

 You must specify either the password or the sshkey_name parameter.
    Example: "VinzClortho"

  - `sshkey_passphrase` (string)
    The SSH key's passphrase.

Warning:

 This parameter is required if the sshkey_name value is password-protected.
    Example: "Gozer"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.profile_details` (object)
    An object containing the new profile's data.

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
    description of the profile data.
    Example: "Created via SSH"

  - `data.profile_saved` (string)
    The new profile's name.
    Example: "MyProfileSSH"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remote_mysql_create_profile_via_ssh"

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


