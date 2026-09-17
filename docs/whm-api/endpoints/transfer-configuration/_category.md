# Transfer Configuration

Transfers / Transfer Configuration

## Remove cPanel account's archives

 - [GET /delete_account_archives](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/transfers-delete_account_archives.md): This function removes a cPanel user account's archives.

## Validate remote server's SSH credentials

 - [GET /remote_basic_credential_check](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/ssh-remote_basic_credential_check.md): This function checks the SSH credentials on the remote server.

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

## Return a transfer module's schema

 - [GET /transfer_module_schema](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/transfers-transfer_module_schema.md): This function retrieves a transfer module's key structure.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

## Validate username availability on target server

 - [GET /validate_system_user](https://api.docs.cpanel.net/specifications/whm.openapi/transfer-configuration/sys-validate_system_user.md): This function validates a system user for use on the target server.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

