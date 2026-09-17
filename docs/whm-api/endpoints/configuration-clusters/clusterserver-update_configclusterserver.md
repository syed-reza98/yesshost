# Update configuration cluster server credentials

This function updates the username or remote access key for a cluster server.

Important:

 If you log in to a configuration cluster server that is not the parent server, nothing will indicate that the server is part of a configuration cluster. You can only* view and modify this information from the master server.

* We recommend that you run this function as a POST request with SSL enabled:
  * The length of the remote access key may cause problems if you run the function with the GET method (for example, a URL in your browser).
  * You risk security problems if you enter a remote access key through the GET method.

Endpoint: GET /update_configclusterserver
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The remote configuration cluster server's name or IP address.
    Example: "example.com"

  - `key` (string)
    The new remote access key. If you do not specify a value, the function does not update the remote access key.
    Example: "d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0"

  - `user` (string)
    The server's root-level account username. If you do not specify a value, the function does not update the username.
    Example: "root"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "update_configclusterserver"

  - `metadata.name` (string)
    The remote configureation cluster server's name.
    Example: "example.com"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.signature` (string)
    The new remote access key.
    Example: "d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0"

  - `metadata.user` (string)
    The server's root-level account username.
    Example: "root"

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


