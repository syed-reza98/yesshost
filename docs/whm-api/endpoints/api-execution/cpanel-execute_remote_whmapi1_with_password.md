# Run remote WHM API 1 function

This function executes WHM API 1 functions on a remote server.

Endpoint: GET /execute_remote_whmapi1_with_password
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `function` (string, required)
    The name of the function to call on the remote server.
    Example: "passwd"

  - `host` (string, required)
    The remote server's hostname or IP address.
    Example: "host.example.com"

  - `parameter_name` (string, required)
    The name of the parameter for the function.

Note:

 You must enter the same number of parameter_name and parameter_value parameters.
    Example: "user"

  - `parameter_value` (string, required)
    The value of the parameter for the function.

Note:

 You must enter the same number of parameter_name and parameter_value parameters.
    Example: "username2"

  - `password` (string, required)
    The password to log in to the remote server.
    Example: "luggage12345"

  - `username` (string, required)
    The username to log in to the remote server.
    Example: "username"

  - `tls_verification` (string)
    Whether to use TLS verification. This parameter defaults to On.

Important:

 We strongly recommend that you use TLS verification. Only connect to a server if you can verify its identity.
    Example: "on"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.app` (array)

  - `data.key-name*` (string)
    The function's output.

Note:

 The system uses the remote function's return name. A valid possible values.
    Example: "system"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "execute_remote_whmapi1_with_password"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


