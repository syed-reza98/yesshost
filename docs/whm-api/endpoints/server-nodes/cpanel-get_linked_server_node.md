# Return linked remote server node settings

This function returns details about a linked remote server node.

Endpoint: GET /get_linked_server_node
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `alias` (string, required)
    The name of a linked remote server node.
    Example: "example"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.enabled_services` (array)
    The services enabled on the linked remote server node.
    Example: ["apache_php_fpm"]

  - `data.hostname` (string)
    The remote server node's hostname.
    Example: "example.com"

  - `data.last_check` (integer)
    The last time that the server queried the current status of the remote server node.
    Example: 1556576165

  - `data.system_settings` (object)
    A list of the worker_capabilities return's system settings.
The key is a role name and the value is an object with system settings for the role.
    Example: {"Mail":{"globalspamassassin":0}}

  - `data.tls_verified` (integer)
    Whether the remote server node has a valid SSL certificate.
* 1 - The remote server node has a valid SSL certificate.
* 0 - The remote server node does not have a valid SSL certificate.
    Enum: 0, 1

  - `data.username` (string)
    The username required to make API calls to the linked remote server node.
    Example: "root"

  - `data.version` (string)
    The version of cPanel & WHM installed on the remote server node.
    Example: "11.86.0.0"

  - `data.worker_capabilities` (object)
    A group of services required for a remote server node to perform a specific task. The key is a role name
and the value is an object with required options for the role.
    Example: {"Mail":{}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_linked_server_node"

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


