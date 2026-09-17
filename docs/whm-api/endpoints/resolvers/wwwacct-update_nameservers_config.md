# Update default nameservers

This function updates nameservers in the wwwacct.conf file. For more information, read our Installation Guide - Customize Your Installation documentation.

Endpoint: GET /update_nameservers_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `nameserver` (string)
    The nameserver to add or update as the wwwacct.conf file's NS setting. If you do not supply a value, the function does not update the setting.
    Example: "ns1.example.com"

  - `nameserver2` (string)
    The nameserver to add or update as the wwwacct.conf file's NS2 setting. If you do not supply a value, the function does not update the setting.
    Example: "ns2.example.com"

  - `nameserver3` (string)
    The nameserver to add or update as the wwwacct.conf file's NS3 setting. If you do not supply a value, the function does not update the setting.
    Example: "ns3.example.com"

  - `nameserver4` (string)
    The nameserver to add or update as the wwwacct.conf file's NS4 setting. If you do not supply a value, the function does not update the setting.
    Example: "ns4.example.com"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "update_nameservers_config"

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


