# Return cPanel Store or Market checkout URL

This function returns the checkout URL to use for a cPanel Store or cPanel Market provider purchase.

Endpoint: GET /purchase_a_license
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `login_token` (string, required)
    The login token to access the cPanel Store.
    Example: "1a676e6f-99fc-11e6-9ab6-e60a769b73bc"

  - `provider` (string, required)
    The cPanel Store or cPanel Market provider's name.
    Example: "cPStore"

  - `url_after_checkout` (string, required)
    The location to which the cPanel Store or cPanel Market provider directs the user after the checkout process finishes.
    Example: "http://hostname.example.com"

  - `upgrade` (integer)
    Whether the cPanel Store or cPanel Market provider should treat this request as an upgrade.
* 1 — An upgrade.
* 0 — Not an upgrade.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of checkout URLs. A valid checkout URL.
    Example: ["https://store.cpanel.net/checkout/ssl/1234567"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "purchase_a_license"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed .Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


