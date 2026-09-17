# Return if server uses the default update version

This function checks whether your server uses the
latest version of cPanel & WHM for your release tier.

Endpoint: GET /get_update_availability
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.current_version` (string)
    The server's current version of cPanel & WHM.
    Example: "88.0.12"

  - `data.newest_version` (string)
    The available version of cPanel & WHM available for the server's support tier.
    Example: "88.0.12"

  - `data.tier` (string)
    The server's
[support tier](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#release-tiers):

* edge — EDGE.
* current — CURRENT.
* release — RELEASE.
* stable — STABLE.
* lts — Long-Term Support (LTS).
    Enum: "edge", "current", "release", "stable", "lts"

  - `data.update_available` (integer)
    Whether a new version of cPanel & WHM is available for the server's support tier.

- 1 — Available.
- 0 — Not available.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_update_availability"

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


