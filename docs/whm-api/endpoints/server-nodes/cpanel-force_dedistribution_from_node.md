# Repair distributed accounts with data loss

This function converts cPanel accounts that use a given
child node
to use the local server instead.

Unlike the WHM API 1 modifyacct API call, this API does not
transfer users’ data from the child node as part of the conversion.
This API is useful for emergency repairs if, for example, a child
node goes permanently offline while accounts still use it.

Warning:

Because this API does not transfer users’ data from the child node,
all converted users will lose data. You should only call this API
as a last resort.

Endpoint: GET /force_dedistribution_from_node
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `node_alias` (string, required)
    The child node’s alias (friendly name). This is the value passed in the
WHM API 1 link_server_node_with_api_token function’s alias parameter.
    Example: "mailalias"

  - `user` (array, required)
    The usernames of the
distributed cPanel accounts
to convert.
    Example: ["username","username1"]

## Response 200 fields (application/json):

  - `data` (object)

  - `data.log` (array)
    Log entries that indicate the conversion’s progress.

  - `data.log.contents` (string)
    The message content.
    Example: "Converting “username1” …"

  - `data.log.indent` (integer)
    The log message’s indent level.

  - `data.log.type` (string)
    The log level of the message.

* success – A success message.
* out – An informational message.
* warn – A warning message.
* error – An error message.
    Enum: "success", "out", "warn", "error"

  - `data.user_info` (array)
    Information about each newly-converted cPanel account.

  - `data.user_info.username` (string)
    The cPanel account’s username.
    Example: "username1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "force_dedistribution_from_node"

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


