# Remove ModSecurity vendor

This function removes a ModSecurity™ vendor. When you call this function, the system
removes the vendor's includes, disablement directives, configuration files, and
metadata file.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /modsec_remove_vendor
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `vendor_id` (string, required)
    The ModSecurity vendor's unique short name.
    Example: "SomeVendor"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "modsec_remove_vendor"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


