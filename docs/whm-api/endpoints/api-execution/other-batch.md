# Run multiple WHM API 1 functions

This function combines calls for multiple WHM API 1 functions.

Endpoint: GET /batch
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `command` (string, required)
    The WHM API 1 function to call.

Important:

Specify a command parameter for each function.

Note:

Include the function's input parameters as a URI-encoded list after the function name.
For example, to call the killdns function with a domain parameter value of example.com
directly you would use:

  killdns?domain=example.com

To call this function using the batch function, URI-encode the command and pass it as part of the batch function:

  /json-api/batch?api.version=1&command=killdns%3Fdomain%3Dexample.com

You can call the same function multiple times within a single batch API call. For example:

  /json-api/batch?api.version=1&command=version&command=version&command=version
    Example: "version"

  - `abort_on_error` (integer)
    Whether to stop processing remaining commands in the batch when a command returns an error.

* 1 — Do not process remaining commands in the batch when an error occurs.
* 0 — When an error occurs, process the remaining commands in the batch.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.result` (array)
    Information regarding function output. Each result contains the returns from one of the command parameter's functions. For information about each function's returns, read the function's documentation.
    Example: [{"data":{"hostname":"example-hosting.com"},"metadata":{"command":"gethostname","reason":"OK","result":1,"version":1}},{"data":{"version":"11.88.0.1"},"metadata":{"command":"version","reason":"OK","result":1,"version":1}}]

  - `data.result.data` (object)
    The data returned by the command.

  - `data.result.metadata` (object)
    The metadata returned by the command.

  - `data.result.metadata.command` (string)
    The method name called.
    Example: "version"

  - `data.result.metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `data.result.metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `data.result.metadata.version` (integer)
    The version of the API function.
    Example: 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "batch"

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


