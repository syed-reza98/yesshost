# Update AutoSSL metadata

This function sets values for AutoSSL's metadata keys. This allows you to replace certificates that AutoSSL did not issue and toggle other AutoSSL notifications.

Note:

We recommend that you use the WHM API 1 set_autossl_metadata_key function instead.

Information:

* You can enter more than one key and value pair in the metadata_json JSON hash.
* Any keys that you do not explicitly define will adopt the system's default value.

Endpoint: GET /set_autossl_metadata
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `metadata_json` (object, required)
    JSON-encoded object of metadata keys and values that control AutoSSL's behavior.
    Example: {"clobber_externally_signed":1,"notify_autossl_expiry":1,"notify_autossl_expiry_coverage":1,"notify_autossl_expiry_coverage_user":1,"notify_autossl_expiry_user":1,"notify_autossl_renewal":1,"notify_autossl_renewal_coverage":1,"notify_autossl_renewal_coverage_reduced":1,"notify_autossl_renewal_coverage_reduced_user":1,"notify_autossl_renewal_coverage_user":1,"notify_autossl_renewal_uncovered_domains":1,"notify_autossl_renewal_uncovered_domains_user":1,"notify_autossl_renewal_user":1}

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_autossl_metadata"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


