# Update Account Enhancement

This function modifies an account enhancement.

Important:

* When you call this function, you must include at least one of
the id or name parameters. Lack of a second parameter will result
in no change.

Endpoint: GET /modify_account_enhancement
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `name` (string, required)
    The name of the account enhancement.
    Example: "enhancement 5000"

  - `id` (string)
    The account enhancement's new identifier.

Note:
* You must use an account enhancements ID that a 3rd-party plugin defines.
* To return a list of valid account enhancement IDs, run the WHM API 1 list_account_enhancements function.
    Example: "sample-enhancement-id"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.id` (string)
    The updated enhancement id.
    Example: "sample-enhancement-id"

  - `data.name` (string)
    The enhancement name.
    Example: "Sample Enhancement"

  - `metadata` (object)

  - `metadata.command` (string)
    The name of the method called.
    Example: "modify_account_enhancement"

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


