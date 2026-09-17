# cPanel Account Transfer

Transfers / cPanel Account Transfer

## Stop transfer session

 - [GET /abort_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-abort_transfer_session.md): This function aborts an active transfer session.

## Create remote server transfer session as root user

 - [GET /create_remote_root_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-create_remote_root_transfer_session.md): This function creates a transfer session as the root user.

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

## Create remote server transfer session

 - [GET /create_remote_user_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-create_remote_user_transfer_session.md): This function creates a transfer session with a non-root user to a remote server.

Important:

* The source and target servers must be able to communicate over port 2087 to use this feature.
* The source and target servers must also be able to communicate over the port that your servers use for SSH connections.
* For more information about the ports that cPanel & WHM uses, read our How to Configure Your Firewall for cPanel & WHM Services documentation.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

## Add module to transfer session

 - [GET /enqueue_transfer_item](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-enqueue_transfer_item.md): This function adds a transfer session to a queue. For more information about how this function works with other
functions in the transfer and restore process, read our
Guide to Transfer and Restore API Functions documentation.

Important:

The module parameter determines which additional parameters to use with the function.

## Suspend active transfer session

 - [GET /pause_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-pause_transfer_session.md): This function pauses an active transfer session.

Note:

For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

## Start or restart transfer session

 - [GET /start_transfer_session](https://api.docs.cpanel.net/specifications/whm.openapi/cpanel-account-transfer/transfers-start_transfer_session.md): This function starts or restarts a transfer session.

Note:

  For more information about how this function works with other functions in the transfer and restore process, read our Guide to Transfer and Restore API Functions documentation.

