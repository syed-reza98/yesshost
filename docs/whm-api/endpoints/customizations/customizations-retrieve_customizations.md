# Retrieve customization data

This function retrieves customization data.

Customization data includes brand logos and colors.

This function is used to retrieve customization data for the Jupiter theme only.

Endpoint: GET /retrieve_customizations
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `application` (string, required)
    The application name for the customization.
    Enum: "cpanel", "webmail"

  - `theme` (string, required)
    The theme for the customization.
    Example: "jupiter"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "retrieve_customizations"

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


