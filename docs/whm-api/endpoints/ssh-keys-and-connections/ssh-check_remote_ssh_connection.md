# Validate SSH connection to another server

This function tests an SSH connection to another server.

Endpoint: GET /check_remote_ssh_connection
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `host` (string, required)
    The remote server's hostname.
    Example: "example.com"

  - `port` (integer)
    The remote server's port number.
    Example: 22

## Response 200 fields (application/json):

  - `data` (object)

  - `data.comment` (string)
    The remote connection's comment section.
* A valid string.
* undef - If the local and remote servers connect successfully.
    Example: "null"

  - `data.protocol_versions` (array)
    The available SSH protocol versions.
* A valid string.
* undef - If the local and remote servers connect successfully.
    Example: ["2.0"]

  - `data.received` (string)
    The raw data from the remote server.
    Example: "SSH-2.0-OpenSSH_5.3"

  - `data.server_software` (string)
    The version of the remote server's SSH server software.
* A valid string.
* undef - If the local and remote servers connect successfully.
    Example: "OpenSSH_5.3"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "check_remote_ssh_connection"

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


