# Create Account Enhancement

This function creates a new account enhancement.

Endpoint: GET /create_account_enhancement
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `id` (string, required)
    The identifier of the item you are targeting.

Note:
* You must use an account enhancements ID that a 3rd-party plugin defines.
* To return a list of valid account enhancement IDs, run the WHM API 1 list_account_enhancements function.
    Example: "sample-enhancement-id"

  - `name` (string, required)
    The name of the account enhancement.
    Example: "featurename 5000"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.name` (string)
    The name of the newly-created account enhancement.
    Example: "featurename 5000"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "create_account_enhancement"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


