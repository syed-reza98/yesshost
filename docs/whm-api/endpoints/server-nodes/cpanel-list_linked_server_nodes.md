# Return all linked server nodes

This function returns a list of all remote server nodes linked to the server. It also provides details about each remote server node.

Endpoint: GET /list_linked_server_nodes
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects containing linked remote server nodes data.

  - `data.payload.alias` (string)
    The name of a linked remote server node.
    Example: "example"

  - `data.payload.enabled_services` (array)
    An array of the services enabled on the linked remote server node.
    Example: ["apache_php_fpm","cpanellogd","cpdavd","cpgreylistd","cpsrvd","crond","dnsadmin","exim","ftpd","imap","ipaliases","lmtp","mailman","mysql","named","nscd","pop","postgresql","queueprocd","rsyslogd","spamd","sshd","tailwatchd"]

  - `data.payload.hostname` (string)
    The remote server node's hostname.
    Example: "example.com"

  - `data.payload.last_check` (integer)
    The last time that the server queried the current status of the remote server node.
    Example: 1556576165

  - `data.payload.tls_verified` (integer)
    Whether the remote server node has a valid [SSL certificate](https://go.cpanel.net/guidetoSSL).
* 1 — The remote server node has a valid SSL certificate.
* 0 — The remote server does not have a valid SSL certificate.
    Enum: 0, 1

  - `data.payload.username` (string)
    The username required to make API calls to the linked remote server node.
    Example: "root"

  - `data.payload.version` (string)
    The version of cPanel & WHM installed on the remote server node.
    Example: "11.90.0.0"

  - `data.payload.worker_capabilities` (object)
    An object containing groups of services required for a remote server node to fulfill a specific role.
    Example: {"Mail":{}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_linked_server_nodes"

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


