# Update AutoSSL metadata via JSON

This function sets values for AutoSSL's metadata keys. This allows you to replace certificates that AutoSSL did not issue and toggle other AutoSSL notifications.

Note:

  * This function performs the same actions as the WHM API 1 set_autossl_metadata function. However, this function accepts a single key and value pair as a parameter instead of JSON. Additionally, you can only enter one key and value pair per function call.
  * This function only accepts a single key and value pair. To set all values, use the WHM API 1 set_autossl_metadata function or make multiple calls to this function.

Endpoint: GET /set_autossl_metadata_key
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `key` (string, required)
    The AutoSSL metadata key that you wish to modify.
* clobber_externally_signed — Whether to allow AutoSSL to replace certificates that none of this system’s AutoSSL modules issued. When you enable this option, AutoSSL will install certificates that replace users’ Certificate Authority (CA) issued certificates if they are invalid or expire within three days.
* notify_autossl_expiry — Whether to send a notification when an AutoSSL certificate expires. This occurs when AutoSSL cannot request a new certificate.
* notify_autossl_expiry_coverage — Whether to send a notification if at least one currently-secured domain will lose coverage when the certificate renews.
* notify_autossl_expiry_coverage_user — Whether to send a notification if at least one currently-secured domain for a user will lose coverage when the certificate renews.
* notify_autossl_renewal — Whether to send a notification when AutoSSL successfully renews a certificate.
* notify_autossl_renewal_user — Whether to send a notification when AutoSSL successfully renews a certificate for a user.
* notify_autossl_renewal_coverage — Whether to send a notification when a currently-secured domain fails DCV and the certificate has not reached its renewal period.
* notify_autossl_renewal_coverage_user — Whether to send a notification when a user's currently-secured domain fails DCV and the certificate has not reached its renewal period.
* notify_autossl_renewal_coverage_reduced — Whether to send a notification when AutoSSL has renewed a certificate, but the new certificate lacks at least one domain that the previous certificate secured.
* notify_autossl_renewal_coverage_reduced_user — Whether to send a notification when AutoSSL has renewed a certificate for a user, but the new certificate lacks at least one domain that the previous certificate secured.
* notify_autossl_renewal_uncovered_domains — Whether to send a notification when AutoSSL has renewed a certificate, but the new certificate lacks one or more of the website’s domains.
* notify_autossl_renewal_uncovered_domains_user — Whether to send a notification when AutoSSL has renewed a certificate, but the new certificate lacks one or more of the website’s domains.
    Enum: "clobber_externally_signed", "notify_autossl_expiry", "notify_autossl_expiry_coverage", "notify_autossl_expiry_coverage_user", "notify_autossl_renewal", "notify_autossl_renewal_user", "notify_autossl_renewal_coverage", "notify_autossl_renewal_coverage_user", "notify_autossl_renewal_coverage_reduced", "notify_autossl_renewal_coverage_reduced_user", "notify_autossl_renewal_uncovered_domains", "notify_autossl_renewal_uncovered_domains_user"

  - `value` (integer, required)
    Whether to allow AutoSSL to replace certificates that it did not issue for the clobber_externally_signed parameter.

or

Whether to send a notification for the notify_autossl_expiry, notify_autossl_expiry_coverage, notify_autossl_expiry_coverage_user, notify_autossl_renewal, notify_autossl_renewal_user, notify_autossl_renewal_coverage, notify_autossl_renewal_coverage, notify_autossl_renewal_coverage_reduced, notify_autossl_renewal_coverage_reduced_user, notify_autossl_renewal_uncovered_domains, and notify_autossl_renewal_uncovered_domains_user parameters.
* 1 — Allow or notify.
* 0 — Do not allow or notify.

Note:

 For reference, the system preconfigures AutoSSL metadata keys to the following values:
 * The value for clobber_externally_signed defaults to 0.
 * The value for notify_autossl_expiry defaults to 1.
 * The value for notify_autossl_expiry_coverage defaults to 1.
 * The value for notify_autossl_expiry_coverage_user defaults to 1.
 * The value for notify_autossl_renewal defaults to 1.
 * The value for notify_autossl_renewal_user defaults to 1.
 * The value for notify_autossl_renewal_coverage defaults to 1.
 * The value for notify_autossl_renewal_coverage_user defaults to 1.
 * The value for notify_autossl_renewal_coverage_reduced defaults to 1.
 * The value for notify_autossl_renewal_coverage_reduced_user defaults to 1.
 * The value for notify_autossl_renewal_uncovered_domains defaults to 1.
 * The value for notify_autossl_renewal_uncovered_domains_user defaults to 1.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_autossl_metadata_key"

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


