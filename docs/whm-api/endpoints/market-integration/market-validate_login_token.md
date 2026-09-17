# Validate login token and return access token

This function validates a login token with the cPanel Store or a cPanel Market provider, and then returns access tokens.

Endpoint: GET /validate_login_token
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `login_token` (string, required)
    The login token to validate.
    Example: "1a676e6f-99fc-11e6-9ab6-e60a769b73bc"

  - `provider` (string, required)
    The cPanel Store or cPanel Market provider's name.
    Example: "cPStore"

  - `url_after_login` (string, required)
    The location to which the cPanel Store or cPanel Market provider redirects the user's browser after they log in.
    Example: "http://hostname.example.com/redirectionlocation.cgi?state"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contain token information.

  - `data.payload.access_token` (string)
    The access token that the cPanel Store or cPanel Market provider returns after you log in.
    Example: "b7a6f029-99fc-11e6-a0bd-87581cb027ac"

  - `data.payload.refresh_token` (string)
    The refresh token that the cPanel Store or cPanel Market provider returns after you log in .
    Example: "b7a7107f-99fc-11e6-a0bd-b46329164206"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "validate_login_token"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the 'reason' field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


