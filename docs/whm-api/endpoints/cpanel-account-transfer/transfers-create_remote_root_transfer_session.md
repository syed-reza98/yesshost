# Create remote server transfer session as root user

This function creates a transfer session as the root user.

Important:

  For information about the ports that cPanel & WHM uses, read our How to Configure Your Firewall for cPanel Services documentation.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

### Authentication
There are several methods that you can use to authenticate a transfer session with the remote server:

#### Authenticate as root
If you use SSH to authenticate as the root user, the remote server's SSH must accept root logins. For more information read OpenSSH's sshd_config documentation.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value |
|-|-|
| user | root |
| password | root's password |

You can also use an SSH public key to authenticate the root user. If the SSH public key is encrypted, include the SSH key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the SSH Key is not encrypted | Value if the SSH Key is encrypted |
|-|-|-|
| user | root | root |
| sshkey_name | The root user's SSH key. | The root user's SSH key. |
| sshkey_passphrase | (none) | The root user's SSH key passphrase. |

#### Authenticate as a user
Many server administrators do not permit direct root logins via SSH on their servers.
* If the remote server forbids root logins, you must use another user and their password on the remote server, and then escalate to the root user. For more information read OpenSSH's sshd_config documentation.
 If the system administrator used WHM's Manage Wheel Group Users interface (WHM >> Home >> Security Center >> Manage Wheel Group Users*) to grant the user su access, then you will need to specify su and the root password.
* If the user has sudo access, you do not need the root password.

The following table displays the correct parameters and values for this authentication method:

| Parameter | Value if the user has sudo access | Value if the user has su access |
|-|-|-|
| user | The username. | The username. |
| password | The user's password. | The user's password. |
| root_escalation_method | sudo | su |
| root_password | (none) | The root user's password. |

You can also use an SSH public key instead of a password to authenticate that user. If the SSH public key is encrypted, include the SSH key's passphrase.

The following table displays the correct parameters and values for this authentication method:

| Parameter | sudo | su |
|-|-|-|
| user | The username. | The username. |
| sshkey_name | The user's SSH key. | The user's SSH key. |
| sshkey_passphrase (If encrypted) | The user's SSH key passphrase. | The user's SSH key passphrase. |
| root_escalation_method | sudo | su |
| root_password | (none) | The root user's password. |

Endpoint: GET /create_remote_root_transfer_session
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `comm_transport` (string, required)
    The method by which the transfer system will execute commands on the remote system.
* ssh — Use SSH. The function uses the remote server's indicated SSH port value.
* whostmgr — Use the remote server's secure WHM port. This will reject invalid  TLS handshakes.
* whostmgr_insecure — Use the remote server's secure WHM port, but ignores any TLS verification failures.
    Enum: "ssh", "whostmgr", "whostmgr_insecure"

  - `compressed` (integer, required)
    Whether to compress data before transfer.
* 1 — Compress.
* 0 — Do not compress.
    Enum: 0, 1

  - `copy_reseller_privs` (integer, required)
    Whether to transfer reseller privileges.
* 1 — Transfer.
* 0 — Do not transfer.
    Enum: 0, 1

  - `enable_custom_pkgacct` (integer, required)
    Whether to use a custom pkgacct scripts on the remote server for the transfer session.
* 1 — Use a custom pkgacct script.
* 0 — Do not use a custom script.
    Enum: 0, 1

  - `host` (any, required)
    The remote server's hostname or IP address.
    Example: "192.168.0.0"

  - `low_priority` (integer, required)
    Whether to run the remote server processes at low priority in order to reduce impact on server performance.
* 1 — Run at low priority.
* 0 — Run at high priority.
    Enum: 0, 1

  - `restore_threads` (integer, required)
    The number of CPU threads to use for restore sessions.
    Example: 1

  - `transfer_threads` (integer, required)
    The number of CPU threads to use for transfer sessions.
    Example: 1

  - `unencrypted` (integer, required)
    Whether to not use SSL to encrypt data.
* 1 — Do not use SSL.
* 0 — Use SSL.
    Enum: 0, 1

  - `unrestricted_restore` (integer, required)
    Whether to skip the Restricted Restore system.
* 1 — Skip.
* 0 — Do not skip.

Note:

  If you want to pass the force parameter in the WHM API 1 enqueue_transfer_item function, you must set this parameter to a value of 0.
    Enum: 0, 1

  - `use_backups` (integer, required)
    Whether to use an existing backup instead of packaging the data again if the backup is less than 24 hours old.
* 1 — Use an existing backup.
* 0 — Package the data.
    Enum: 0, 1

  - `user` (string, required)
    The username to use to connect to the remote server.
    Example: "root"

  - `password` (string)
    The username's password.

Note:

 Use this parameter if you will authenticate to the remote server with a password. Do not use this parameter if you will authenticate to the remote server with an SSH key.
    Example: "123456luggage"

  - `port` (integer)
    The remote server's SSH port number.
    Example: 22

  - `root_escalation_method` (string)
    The escalation method to use to connect to the remote server.
* su
* sudo

Note:

 Use this parameter if the sshd_config file's PermitRootLogin value is No.
    Enum: "su", "sudo"

  - `root_password` (string)
    root's password on the remote server.

Note:

 Use this parameter if the sshd_config file's PermitRootLogin value is No and you will use the root user's password to escalate access.
    Example: "123456luggage"

  - `sshkey_name` (string)
    The SSH key's name.

Note:

* Use this parameter if you will authenticate to the remote server with an SSH key. Do not use this parameter if you will authenticate to the remote server with a password.
 SSH keys are available in WHM's Manage root's SSH Keys interface (WHM >> Home >> Security Center >> Manage root’s SSH Keys*).
    Example: "FrancisScott"

  - `sshkey_passphrase` (string)
    The SSH key's passphrase.

Note:

 Use this parameter if you will authenticate to the remote server with an SSH key, and the key is encrypted.
    Example: "kkwtoowoygidsa"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.analyze_rawout` (string)
    The HTML output from the analysis of the remote server connection.
    Example: "Fetching information from remote host: \\u201c10.1.100.35\\u201d \\u2026 \\u2026\\nDone\\nFetching information from remote host: \\u201c10.1.100.35\\u201d \\u2026 \\u2026\\nDone\\n\","

  - `data.create_rawout` (string)
    The HTML output from the creation of the remote server connection.
    Example: "Basic credential check \\u2026 \\u2026\\nDone\\nFetching information from remote host: \\u201c10.1.100.35\\u201d \\u2026 \\u2026\\nDone\\nFetching WHM Version \\u2026\\nDone\\nTesting \\u201cvm5.docs.cpanel.net\\u201d for transfer streaming support with password authentication....<strong>Streaming Supported</strong>\\nRemote Server Type: \\u201cWHM1130\\u201d\\n\","

  - `data.transfer_session_id` (string)
    The transfer session's ID.
    Example: "vm5docscpanelcopya20140430200606V06z"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "create_remote_root_transfer_session"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


