# Return data from NVData file

This function retrieves the data from an NVData file on disk. cPanel
NVData is a per-account configuration storage mechanism that you can use to
maintain persistent cPanel & WHM settings across multiple sessions. This includes
custom settings for your own themes.

Note:

You can only call this function as a JSON request. For more information about
additional output options, run the whmapi1 --help command.

Endpoint: POST /personalization_get
Version: 11.138.0.6
Security: BasicAuth

## Request fields (application/json):

  - `names` (array,null)
    A list of NVData keys stored on the server.

Note:

If you did not set a value for the requested keys, the system returns
a null value.
    Example: ["milk","coffee"]

  - `store` (string)
    The name under which the values are stored.
    Example: "beverages"

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"personalization":{"coffee":{"reason":"OK","success":1,"value":"hot"},"milk":{"reason":"OK","success":1,"value":"cold"}}}

  - `data.personalization` (object)
    The NVData keys and values stored on the server.
    Example: {"coffee":{"reason":"OK","success":1,"value":"hot"},"milk":{"reason":"OK","success":1,"value":"cold"}}

  - `data.personalization.additionalProperties` (object)
    The retrieved NVData information stored on the server.

Note:

This return's name is based on the keys provided in the personalization
parameter with WHM API 1's personalization_set function.

  - `data.personalization.additionalProperties.reason` (any)
    An error message describing the failure if the success Boolean returns a 0 value.

  - `data.personalization.additionalProperties.success` (integer)
    Whether the function successfully retrieved the value from
the server.

* 1 — Successful.
* 0 — Unsuccessful.
    Enum: 1, 0

  - `data.personalization.additionalProperties.value` (string,null)
    The value stored in the field.

* null — The pair is not available in the store.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "personalization_get"

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


