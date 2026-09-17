# Add block on emails from specific countries

This function blocks email from specific countries.

Endpoint: GET /block_incoming_email_from_country
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `country_code` (string, required)
    The country to block.
The ISO 3166-1 alpha-2 code two-letter country code.

Warning:

Do not block the ZZ country code if the server uses a NAT configuration.

Note:

  * To search all available country codes, read the ISO's Full list of Country Codes documentation.
  * To block multiple countries, duplicate or increment the parameter name. For example: country_code-1, country_code-2, and country_code-3.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.updated` (integer)
    Whether the function blocked one or more countries.
* 1 — Success.
* 0 — Failure.

Note
The function returns 0 for the updated return if the server already blocks that country.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "block_incoming_email_from_country"

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


