# Remove linked server node

This function unlinks a remote server node from your server.

Important:

  This function does not unlink mail servers that are currently in use. 
  You must first delete any accounts that use the linked mail server.

Endpoint: GET /unlink_server_node
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `alias` (string, required)
    The name of a linked remote server node.
    Example: "example"

  - `handle_api_token` (string)
    What to do with the linkage’s stored API token on the remote server node:

- leave: Leave the API token active.
- expire_24h: Set the API token to expire after 24 hours. This can be undone.
    Enum: "leave", "expire_24h"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.alias` (string)
    The name of a linked remote server node.
    Example: "example"

  - `data.enabled_services` (array)
    A list of services enabled on the linked remote server node.
    Example: ["apache_php_fpm"]

  - `data.hostname` (string)
    The remote server node's hostname.
    Example: "example.com"

  - `data.last_check` (integer)
    The last time that the server queried the current status of the remote server.
    Example: 1556576165

  - `data.system_settings` (object)
    A list of the worker_capabilities return's system settings.
    Example: {"Mail":{"globalspamassassin":"0"}}

  - `data.tls_verified` (integer)
    Whether the remote server node has a valid [SSL certificate](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/).
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
    A group of services required for a remote server node to perform a
specific task.
    Example: {"Mail":{}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "unlink_server_node"

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


