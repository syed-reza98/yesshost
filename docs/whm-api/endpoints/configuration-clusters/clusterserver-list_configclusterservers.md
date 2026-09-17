# Return all configuration cluster servers

This function lists the servers in the server's configuration cluster.

Warning:

* WHM's Remote Access Key feature is deprecated. We strongly recommend that you use API tokens instead.

* If you log in to a configuration cluster server that is not the parent server, nothing will indicate that the server is part of a configuration cluster. You can only view and modify this information from the parent server.

Endpoint: GET /list_configclusterservers
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)
    Configuration cluster signatures and users for each server.
    Example: {"example1.com":{"signature":"d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0","user":"root"},"example2.com":{"signature":"d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d0:d1","user":"root"}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_configclusterservers"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


