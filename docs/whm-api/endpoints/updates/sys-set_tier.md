# Update cPanel & WHM release tier

This function sets a cPanel & WHM server to a specified support tier.

Endpoint: GET /set_tier
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `tier` (string, required)
    The support tier to use.
    Enum: "edge", "current", "release", "stable", "lts"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.tier` (string)
    The server's new support tier.
    Enum: "edge", "current", "release", "stable", "lts"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_tier"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Update tier successfully changed to current"

  - `metadata.result` (integer)
    * 1 — Success
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


