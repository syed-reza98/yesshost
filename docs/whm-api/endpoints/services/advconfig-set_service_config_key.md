# Update service configuration key

This function configures global properties for specific services listed in the /var/cpanel/conf directory.

Endpoint: GET /set_service_config_key
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `key` (string, required)
    The configuration key's name.

* This parameter uses the key names listed in the /var/cpanel/conf/{service}/main file, where {service} is the service's name from the service parameter.
* This function does not support subkeys.
    Example: "mail_process_size"

  - `service` (string, required)
    The service's name.

* A list of service names exists in the /var/cpanel/conf directory.
    Example: "dovecot"

  - `value` (any, required)
    The new value for the configuration key.
    Example: "512"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_service_config_key"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Succeeded"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


