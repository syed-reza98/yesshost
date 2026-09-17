# Update linked server node settings

This function updates a linked remote cPanel server node.

Important:

This function requires the use of an API token. For more information,
read our Guide to API Authentication - API Tokens in WHM
documentation.

Endpoint: GET /update_linked_server_node
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `alias` (string, required)
    The name of a linked remote cPanel server node.
    Example: "example"

  - `api_token` (string)
    The API token required to make API calls to the remote cPanel server node.

This value defaults to the existing API token.

Note:

 The API token must have root-level access on the remote cPanel server node.
    Example: "23ZX8RA1FTE1IVJRL90MB5CREDS4UE2H"

  - `hostname` (string)
    A new remote cPanel server node's hostname. The system will update your remote
cPanel server node's hostname to this value.

This value defaults to the existing hostname.

Note:

This parameter does not accept an IP address.
    Example: "example.com"

  - `skip_tls_verification` (integer)
    Whether to skip SSL/TLS verification.
The system performs this action when it queries the remote cPanel server node.

Note:

If the remote cPanel server is SSL/TLS verified, you cannot skip verification.
    Enum: 0, 1

  - `username` (string)
    The username required to make API calls to the remote cPanel server node.

This value defaults to the existing username.

Note:

The username must have root-level access on the remote cPanel server node.
    Example: "root"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "update_linked_server_node"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


