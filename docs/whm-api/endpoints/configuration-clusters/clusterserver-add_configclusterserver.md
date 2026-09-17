# Add configuration cluster server

This function adds a server to a configuration cluster. The function's return data appears in
the metadata section of its output.

We recommend that you run this function as a POST request with SSL enabled:

* The length of the remote access key may cause problems if you run the function with the GET
method (for example, a URL in your browser).
* You risk security problems if you enter a remote access key through the GET method.

Important:

* Run this function as a root-level user on the server that you wish to use as the parent server.
* If you log in to a configuration cluster server that is not the parent server, nothing
will indicate that the server is part of a configuration cluster. You can only view and modify
this information from the parent server.

Endpoint: POST /add_configclusterserver
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `key` (string, required)
    A truncated version of the server's remote access key.
    Example: "d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0"

  - `name` (string, required)
    The remote configuration cluster server's name.
    Example: "example.com"

  - `user` (string, required)
    The username for the server's root-level account.
    Example: "root"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "add_configclusterserver"

  - `metadata.name` (string)
    The remote configuration cluster server's name.
    Example: "example.com"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.signature` (string)
    A truncated version of the server's remote access key.
    Example: "d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0"

  - `metadata.user` (string)
    The username for the server's root-level account.
    Example: "root"

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


