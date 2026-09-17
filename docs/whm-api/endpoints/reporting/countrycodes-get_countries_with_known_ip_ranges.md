# Return login security country codes

This function lists the country codes available for whitelist and blacklist functions.

Endpoint: GET /get_countries_with_known_ip_ranges
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.countries` (array)
    A list of the [ISO 3166-1 alpha-2 country codes](https://www.iso.org/iso-3166-country-codes.html).
You can enter these codes to whitelist or blacklist a country's
range of IP addresses in the WHM API 1 function set_cphulk_config_key.

  - `data.countries.code` (string)
    A valid [ISO 3166-1 alpha-2 country code](https://www.iso.org/iso-3166-country-codes.html).
    Example: "US"

  - `data.countries.name` (string)
    The country's name.
    Example: "United States"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_countries_with_known_ip_ranges"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 — Success.
- 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


