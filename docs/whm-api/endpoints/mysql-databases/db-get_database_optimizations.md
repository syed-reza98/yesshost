# Return MySQL database optimizations

This function retrieves available database optimizations.

Warning:

On some servers, this function may return a large amount of output. We strongly suggest that you filter and sort the output.

Important:

The system disables this function when you have not configured remote MySQL, and you've disabled the MySQL/MariaDB and PostgreSQL roles.

Endpoint: GET /get_database_optimizations
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contain my.cnf options and their recommended values.

  - `data.payload.name` (string)
    The name of the option.
    Example: "innodb_sort_buffer_size"

  - `data.payload.reason` (string)
    A justification for why the option should be adjusted.
    Example: "Your system's peak theoretical memory allocation is too high and may cause instability."

  - `data.payload.value` (string)
    The recommended option value.
    Example: "2M"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_database_optimizations"

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


