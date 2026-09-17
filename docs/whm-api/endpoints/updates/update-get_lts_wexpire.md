# Return Long Term Support status for all versions

This function parses the /etc/cpanel/TIERS.json file and returns whether a branch qualifies for Long-Term Support (LTS). For more information about LTS, read our cPanel Long-Term Support documentation.

Endpoint: GET /get_lts_wexpire
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.branch` (object)
    An object that lists information about available branch builds.
    Example: {"11.78.0":[{"build":"11.78.0.49","is_main":1}],"11.80.0":[{"build":"11.80.0.24","is_main":1}],"11.82.0":[{"build":"11.82.0.19","is_main":1}],"11.84.0":[{"build":"11.84.0.22","is_main":1}],"11.86.0":[{"build":"11.86.0.25","is_main":1}],"11.88.0":[{"build":"11.88.0.14","is_main":1}],"11.90.0":[{"build":"11.90.0.5","is_main":1}]}

  - `data.flags` (object)
    An object containing Features or flags supported by this output.
    Example: {"is_main":1}

  - `data.tiers` (object)
    An object that lists information about build versions in release tiers.
    Example: {"11.78":[{"build":"11.78.0.49","expires":"1588636799","is_lts":1,"is_main":1}],"11.80":[{"build":"11.80.0.24","is_main":1}],"11.82":[{"build":"11.82.0.19","is_main":1}],"11.84":[{"build":"11.84.0.22","is_main":1}],"11.86":[{"build":"11.86.0.25","expires":"1617148801","is_lts":1,"is_main":1,"named":["lts"]}],"11.88":[{"build":"11.88.0.13","is_main":0,"named":["stable"]},{"build":"11.88.0.14","is_main":1}],"11.90":[{"build":"11.90.0.5","is_main":1,"named":["current","edge","release"]}]}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_lts_wexpire"

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


