# Return Account Enhancements

This function retrieves all existing account enhancements on the system.

Endpoint: GET /list_account_enhancements
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.enhancements` (object)

  - `data.enhancements.id` (string)
    The id the account enhancement is for.
    Example: "sample-enhancement-id"

  - `data.enhancements.name` (string)
    The name of the account enhancement.
    Example: "Sample Enhancement"

  - `metadata` (object)

  - `metadata.command` (string)
    The name of the method called.
    Example: "list_account_enhancements"

  - `metadata.output` (object)
    Additional output related to the method called.

  - `metadata.output.warnings` (array)
    A list of warnings related to account enhancements.
    Example: ["(XID svx4zp) The enhancement file “/var/cpanel/account_enhancements/enhancement 5000.json” contains an invalid enhancement “id”: “bad-id”."]

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


