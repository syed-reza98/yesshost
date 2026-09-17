# Return service configuration key

This function returns a specific configuration key for a service.

Endpoint: GET /get_service_config_key
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `key` (string, required)
    The configuration key's name.
    Example: "mail_process_size"

  - `service` (string, required)
    The service's name.
    Example: "dovecot"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.key name` (string)
    configuration key's current setting.

Note:

 This return's name is the value that you pass in this function's key parameter. A valid setting.
    Example: "512"

  - `data.mail_process_size` (any)

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_service_config_key"

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


