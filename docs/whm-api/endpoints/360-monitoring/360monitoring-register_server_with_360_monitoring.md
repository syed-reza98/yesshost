# Register the server with 360 Monitoring

This function registers the server with 360 Monitoring.

If the server is not already associated with a 360 Monitoring account,
the function creates a new account on the user's behalf and configures
the local agent. If the server is already registered, the function is
a no-op and returns the existing identifier.

The system persists the credentials required by the local agent server-side
and does not return them in the response. Inspect the metadata.result
field (1 for success, 0 for failure) and metadata.reason for
any failure details.

Endpoint: GET /360Monitoring/register_server_with_360_monitoring
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.user_id` (string)
    The unique identifier for the 360 Monitoring user account associated with this server.
    Example: 12345

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "register_server_with_360_monitoring"

  - `metadata.namespace` (string)
    The namespace used in the API call.
    Example: "360Monitoring"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


