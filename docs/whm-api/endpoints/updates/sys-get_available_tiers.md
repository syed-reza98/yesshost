# Return cPanel & WHM available versions

This function lists of each available version of cPanel & WHM, and each
version's latest maintenance release. This function also lists the cPanel & WHM
version for each
release tier.

Endpoint: GET /get_available_tiers
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)
    A list of the latest available version of cPanel & WHM.
    Example: {"11.30":"11.30.8.0","11.32":"11.32.7.3","11.34":"11.34.2.8","11.36":"11.36.2.12","11.38":"11.38.2.23","11.40":"11.40.1.22","11.42":"11.42.1.31","11.44":"11.44.3.5","11.46":"11.46.4.0","11.48":"11.48.5.3","11.50":"11.50.6.2","11.52":"11.52.6.6","11.54":"11.54.0.36","11.56":"11.56.0.52","11.58":"11.58.0.52","11.60":"11.60.0.48","11.62":"11.62.0.48","11.64":"11.64.0.42","11.66":"11.66.0.35","11.68":"11.68.0.39","11.70":"11.70.0.69","11.72":"11.72.0.12","11.74":"11.74.0.12","11.76":"11.76.0.22","11.78":"11.78.0.49","11.80":"11.80.0.24","11.82":"11.82.0.19","11.84":"11.84.0.22","11.86":"11.86.0.24","11.88":"11.88.0.13","11.90":"11.90.0.3","current":"11.90.0.3","edge":"11.90.0.3","lts":"11.86.0.24","release":"11.88.0.13","stable":"11.88.0.13"}

  - `data.current` (string)
    The version of cPanel & WHM that is currently on the CURRENT tier.
    Example: "11.90.0.3"

  - `data.edge` (string)
    The version of cPanel & WHM that is currently on the EDGE tier.
    Example: "11.90.0.3"

  - `data.lts` (string)
    The version of cPanel & WHM that is currently on the LTS tier.
    Example: "11.86.0.24"

  - `data.release` (string)
    The version of cPanel & WHM that is currently on the RELEASE tier.
    Example: "11.88.0.13"

  - `data.stable` (string)
    The version of cPanel & WHM that is currently on the STABLE tier.
    Example: "11.88.0.13"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_available_tiers"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Got tiers list"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


