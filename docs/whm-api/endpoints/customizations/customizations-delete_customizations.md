# Delete customization data

This function deletes customization data.

Customization data includes brand logos and colors.

Server owners and resellers can supply customization data to whitelabel portions
of the product or customize the cPanel experience for their users.

This function is used to delete customization data for the Jupiter theme only.

If you provide the optional path parameter, the API will removed only the specific element specified in the . separated path.
See the parameter for more details.

Endpoint: GET /delete_customizations
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `application` (string, required)
    The application name for the customization.
    Enum: "cpanel", "webmail"

  - `theme` (string, required)
    The theme name for the customization.
    Example: "jupiter"

  - `path` (string)
    The JSONPath expression to reach to property you want to delete. We support only the
subset of JSONPath using the . style notation. There is presently no other JSONPath
features supported.
    Example: "brand.icon.description"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "delete_customizations"

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


