# Add linked server node

This function links your server to a remote server node. The server uses an API token
to communicate with the remote server node.

Important:

* This function only runs on a
Standard Node profile
server.
* The remote server node must use a version that is the same as or greater than your
server version.
* This function requires the use of an API token. For more information, read our
Guide to API Authentication - API Tokens in WHM
documentation.

Endpoint: GET /link_server_node_with_api_token
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `alias` (string, required)
    A unique name that refers to the remote server node.

Note:

The alias may only contain alphanumeric characters, dashes (-), and underscores (_).
It also has a maximum length of 50 characters.
    Example: "example"

  - `api_token` (string, required)
    The API token required to make API calls to the remote server node.

Note:

The API token must have root-level access on the remote server node.
    Example: "23ZX8RA1FTE1IVJRL90MB5CREDS4UE2H"

  - `hostname` (string, required)
    The remote server node's hostname.

Note:

This parameter does not accept an IP address.
    Example: "host.example.com"

  - `username` (string, required)
    The username required to make API calls to the remote server node.

Note:

The username must have root-level access on the remote server node.
    Example: "root"

  - `skip_tls_verification` (integer)
    Whether to skip
SSL/TLS verification.
The system performs this action when it queries the remote server node.
    Enum: 1, 0

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "link_server_node_with_api_token"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


