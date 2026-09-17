# Return cPanel Store or cPanel Market login URL

This function retrieves the login URL for the cPanel Store or a
cPanel Market provider.

Endpoint: GET /get_login_url
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `provider` (string, required)
    The cPanel Store or cPanel Market provider's name.
    Example: "cPStore"

  - `url_after_login` (string, required)
    The location to which the cPanel Store or cPanel Market provider
redirects the user's browser after they log in.
    Example: "http://hostname.example.com/redirectionlocation.cgi?state"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (string)
    The URL to which to redirect the browser after login.
    Example: "https://account.cpanel.net/oauth2/auth/login?client_id=d5eff4a09e29d5b20752674c0ab2c799c428eb23df4db2df10a5c9d96c37472c76013a41e9a0c714e852965ceaed2e8e05e2f738bc27ee562cfb683fbfc75a01&email=&redirect_uri=http%3A%2F%2Fhostname.example.com%2Fredirectionlocation.cgi%3Fstate&response_type=token"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_login_url"

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


