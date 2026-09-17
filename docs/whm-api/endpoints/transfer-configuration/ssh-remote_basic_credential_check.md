# Validate remote server's SSH credentials

This function checks the SSH credentials on the remote server.

### Authentication
There are several methods that you can use to authenticate a transfer session with the remote server.

#### PermitRootLogin=Yes
The simplest authentication method is to use the root user and password. To do this, the sshd_config file on the remote server must contain the following value: PermitRootLogin=Yes

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value |
|-|-|
| user | root |
| password | root's password. |

You can also use the SSH Public Key to authenticate the root user. If the SSH Public Key is encrypted, include the SSH Key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the SSH Key is not encrypted | Value if the SSH Key is encrypted |
|-|-|-|
| user | root | root |
| sshkey_name | root's SSH key name. | root's SSH key name. |
| sshkey_passphrase | (none) | root's SSH key passphrase. |

#### PermitRootLogin=No
Many server administrators do not permit direct root logins on their servers.
* If the remote server contains PermitRootLogin=No in the sshd_config file, then you must use another user and their password on the remote server, and then escalate to root.
 If the system administrator used WHM's Manage Wheel Group Users interface (WHM >> Home >> Security Center >> Manage Wheel Group Users*) to grant the user su access, then you will need to specify su and the root password.
* If the user has sudo access, you do not need the root password.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the user has sudo access | Value if the user has su access |
|-|-|-|
| user | The user's username. | The user's username. |
| password | The user's password. | The user's password. |
| root_escalation_method | sudo | su |
| root_password | (none) | root's password. |

You can also use an SSH Public Key instead of a password to authenticate that user. If the SSH Public Key is encrypted, include the SSH Key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | sudo | su |
|-|-|-|
| user | The user's username. | The user's username. |
| sshkey_name | The user's SSH key name. | The user's SSH key name. |
| sshkey_passphrase (If encrypted) | The user's SSH key passphrase. | The user's SSH key passphrase. |
| root_escalation_method | sudo | su |
| root_password | (none) | root's password. |

Endpoint: GET /remote_basic_credential_check
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `host` (any, required)
    The remote server's hostname or IP address.
    Example: "192.168.0.0"

  - `user` (string, required)
    The username to use to connect to the remote server.
    Example: "root"

  - `password` (string)
    The username's password.
    Example: "123456luggage"

  - `port` (integer)
    The remote server's SSH port number.
    Example: 22

  - `root_escalation_method` (string)
    The escalation method to use to connect to the remote server.
* su
* sudo

Note:

 Use this parameter if PermitRootLogin=No in the remote server's sshd_config file.
    Enum: "su", "sudo"

  - `root_password` (string)
    root's password on the remote server.

Note:

 Use this parameter if PermitRootLogin=No in the remote server's sshd_config file and the root_escalation_method value is set to su.
    Example: "123456luggage"

  - `sshkey_name` (string)
    The SSH key's name.

Note:

 SSH keys are available in WHM's Manage root's SSH Keys interface (WHM >> Home >> Security Center >> Manage root’s SSH Keys).
    Example: "FrancisScott"

  - `sshkey_passphrase` (string)
    The SSH key's passphrase.

Note:

 Use this parameter if the SSH Key is encrypted.
    Example: "kkwtoowoygidsa"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.output` (string)
    The function call's raw HTML output.
    Example: "Basic credential check…\nDone\n"

  - `data.response` (string)
    The function call's response.
    Example: "basic credential check\n"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "remote_basic_credential_check"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Success"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


