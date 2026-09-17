# Return Long Term Support expiration status

This function determines whether a branch's Long-Term Support (LTS) version expires within three months. For more information about LTS, read our cPanel Long-Term Support documentation.

Endpoint: GET /get_current_lts_expiration_status
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.expiration` (integer)
    When support for the build version expires.
    Example: 1585612801

  - `data.expires_in_next_three_months` (integer)
    Whether the LTS version expires within the next three months.
- 1 — LTS expires within the next three months.
- 0 — LTS does not expire within the next three months.
    Enum: 0, 1

  - `data.full_version` (string)
    The full version number.
    Example: "11.88.1.11"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_current_lts_expiration_status"

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


