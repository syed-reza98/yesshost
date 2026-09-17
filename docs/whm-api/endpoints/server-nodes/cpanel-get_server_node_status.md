# Return linked server node status

This function returns the status of a linked remote server node. It returns
the linked remote server's status with the WHM API 1 version and get_current_profile functions.

Endpoint: GET /get_server_node_status
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `api_token` (string, required)
    The required API token to make API calls to the remote server node.

Note:

 The API token must have root-level access on the remote server node.
    Example: "23ZX8RA1FTE1IVJRL90MB5CREDS4UE2H"

  - `hostname` (string, required)
    The remote server node's hostname or IP address.

Note:

If you use an IP address, you must use the skip_tls_verification=1 parameter.
    Example: "example.com"

  - `username` (string, required)
    The username required to make API calls to the remote server node.

Note:

The username must have root-level access on the remote server node.
    Example: "root"

  - `skip_tls_verification` (integer)
    Whether to skip SSL/TLS verification. The system performs this action when it queries the remote server node.

* 1 - Skip SSL/TLS verification.
* 0 - Do not skip SSL/TLS verification.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.enabled_services` (array)
    An list of the remote server node's enabled services.
    Example: ["apache_php_fpm"]

  - `data.remote_node_linkages` (array)
    An array of objects of the remote server's [child nodes](https://go.cpanel.net/cPanelGlossary#child-node). This function returns this information via the list_linked_server_nodes function.

Note:

If you call this function on a parent node for its child node, this function returns an empty object.
    Example: [{"alias":"MailNode","enabled_services":["apache_php_fpm","cpanellogd","cpdavd","cpgreylistd","cphulkd","cpsrvd","crond","dnsadmin","exim","imap","ipaliases","lmtp","mailman","mysql","named","nscd","pop","queueprocd","rsyslogd","spamd","sshd","tailwatchd"],"hostname":"mailnode.example.com","last_check":1583934071,"system_settings":{"Mail":{"globalspamassassin":"1"}},"tls_verified":0,"username":"root","version":"11.90.0.0","worker_capabilities":{"Mail":{}}}]

  - `data.system_settings` (object)
    An object containing the remote server's child node system settings.
    Example: {"Mail":{"globalspamassassin":1}}

  - `data.tls_verified` (integer)
    Whether the remote server node has a valid [SSL certificate](https://go.cpanel.net/guidetoSSL).
* 1 - The remote server node has a valid SSL certificate.
* 0 - The remote server node does not have a valid SSL certificate.
    Enum: 0, 1

  - `data.version` (string)
    The installed version of cPanel & WHM on the remote server node.
    Example: "11.90.0.0"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_server_node_status"

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


