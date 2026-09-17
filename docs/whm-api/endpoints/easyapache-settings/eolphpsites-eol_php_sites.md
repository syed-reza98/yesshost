# Count domains using EOL PHP versions

This function counts the number of domains across all cPanel users that are using
end-of-life (EOL) PHP versions. It determines EOL status by comparing each domain's
PHP version against the oldest_supported_version value from the
/etc/cpanel/ea4/ea4-metainfo.json file.

Endpoint: GET /eol_php_sites
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.eol_php_sites` (integer)
    The count of domains using PHP versions older than the oldest supported version.
    Example: 42

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "eol_php_sites"

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


