# Create subdomain

This function creates a subdomain.

Endpoint: GET /create_subdomain
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `document_root` (string, required)
    The subdomain's document root within the home directory.

  Note:

 * An invalid document root path will cause this function to fail.
  If the Restrict document roots to public_html value is set to On in WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings*), this parameter must begin with the public_html/ path. For more information, read the cpanel.config file documentation.
    Example: "public_html/directory_name"

  - `domain` (string, required)
    The subdomain name to create.
    Example: "subdomain.example.com"

  - `use_canonical_name` (integer)
    Whether to use a canonical name in the Apache® configuration for self-referential URLs.

* 1 — Use the canonical name.
* 0 — Do not use the canonical name.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.username` (string)
    The cPanel account username.

Note:

 This return only appears if the function succeeds.
    Example: "example"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "create_subdomain"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


