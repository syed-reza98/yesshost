# Update script hooks order

This function changes the order of script hooks.

Endpoint: GET /reorder_hooks
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ids` (string, required)
    A comma-seprated list of script hook IDs, in order of priority.

Note:

To retrieve a hook's ID, use the WHM API 1 list_hooks function.
    Example: "HzEpGvT6QGUYwxuX3hWB8AUq,UNs8a8IbbAVf5oi_hXbcEw5a"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.hook_order` (array)
    A list of the script hook details.
    Example: [{"id":"HzEpGvT6QGUYwxuX3hWB8AUq","weight":100},{"id":"UNs8a8IbbAVf5oi_hXbcEw5a","weight":200}]

  - `data.hook_order.id` (string)
    The script hook's ID.
    Example: "HzEpGvT6QGUYwxuX3hWB8AUq"

  - `data.hook_order.weight` (integer)
    The script hook's weight. The lower the number, the greater the priority.
    Example: 100

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "reorder_hooks"

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


