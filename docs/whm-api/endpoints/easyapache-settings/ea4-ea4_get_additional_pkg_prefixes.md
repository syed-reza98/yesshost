# Return any additional package prefixes, beyond ea.

This function returns any additional package prefixes set up in the /etc/cpanel/ea4/additional-pkg-prefixes/ file.

Endpoint: GET /ea4_get_additional_pkg_prefixes
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.additional_pkg_prefixes` (array)
    A list of any additional package prefixes, beyond ea, that the server is using.
    Example: ["altea"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ea4_get_additional_pkg_prefixes"

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


