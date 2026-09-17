# Return ea4-metainfo.json file contents

This function returns the contents of the /etc/cpanel/ea4/ea4-metainfo.json file.

Endpoint: GET /ea4_metainfo
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)
    Contents of the /etc/cpanel/ea4/ea4-metainfo.json file.
    Example: {"additional_packages":["ea-nginx","ea-example"],"default_php_handler":"cgi","default_php_package":"ea-php72","type":"object"}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ea4_metainfo"

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


