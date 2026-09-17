# Get upgrade opportunities

This function lists accounts that could benefit from upgrading to a different package.
The listed accounts may be nearing (or exceeding) resource usage thresholds.

Endpoint: GET /get_upgrade_opportunities
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `disk_threshold_blocks` (integer)
    A fixed number of blocks to use as an alternative disk usage threshold.
    Example: 8388608

  - `nearness_fraction` (number)
    The fraction of 1 at which to consider usage "near".
    Example: 0.6

## Response 200 fields (application/json):

  - `data` (object)

  - `data.upgrade_opportunities` (object)
    The collection of accounts and information about their upgrade opportunities.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_upgrade_opportunities"

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


