# Update Apache SpamAssassin™ configuration

This function configures your Apache SpamAssassin™ options.

Important:

When you disable the Spam Filter role, the system disables this function.

Endpoint: GET /save_spamd_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `allowedips` (string)
    A comma-separated list of IP addresses to authorize to access the spamd daemon.

Note:

* If you do not specify a value, the spamd daemon allows connections from any IP address.
* If you set a value for this parameter, it must include 127.0.0.1 in the list of values so that the chkservd daemon can access the spamd daemon.
    Example: "127.0.0.1,192.168.0.1"

  - `maxchildren` (integer)
    The maximum number of children per spamd process.
    Example: 5

  - `maxconnperchild` (integer)
    The maximum number of connections that the spamd daemon allows per child process.
    Example: 200

  - `pidfile` (string)
    The process ID's file path.

Warning:

This parameter changes the spamd daemon's process ID filepath. On
systems that use the systemd daemon, you must update the PIDFile
parameter in the spamd.service definition. If you do not update the
PIDFile parameter, the spamd daemon will fail to function because the
PID path and the PIDFile parameter will not match.
    Example: "/var/run/spamd.pid"

  - `timeoutchild` (integer)
    The maximum amount of time that a child process waits before it abandons a TCP connection.

Note:

If the value of this parameter is 0, child processes will not abandon TCP connections.
    Example: 300

  - `timeouttcp` (integer)
    The maximum amount of time that the spamd daemon waits before it abandons a TCP connection.

Note:

If the value of this parameter is 0, spamd will not abandon TCP connections.
    Example: 30

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "save_spamd_config"

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


