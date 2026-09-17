# Return server's cPanel license status

This function verifies the system's license status with WebPros International, LLC's
licensing servers. To do this, the function runs the /usr/local/cpanel/cpkeyclt
script.

For more information about this script and potential license problems,
read our
Installation Guide - Troubleshoot Your Installation
documentation.

Endpoint: GET /run_cpkeyclt
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "run_cpkeyclt"

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


