# Remove block on emails from specific countries

This function unblocks email from specific countries.

Endpoint: GET /unblock_incoming_email_from_country
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `country_code` (string)
    The country to unblock. A valid ISO 3166-1 alpha-2 code two-letter country code.

Note:
* To search all available country codes, read the ISO's Full list of Country Codes documentation.
* To unblock multiple countries, duplicate or increment the parameter name. For example, to unblock three countries, you could:
  - Use the country_code parameter multiple times.
  - Use the country_code, country_code-1, and country_code-2 parameters.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.updated` (integer)
    Whether the function unblocked one or more countries.
* 1 - Success.
* 0 - Failure.

Note:
If the server already doesn't block that country, updated will return 0.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "unblock_incoming_email_from_country"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


