# Return current user's AutoSSL metadata

This function retrieves values for the currently authenticated user's AutoSSL's metadata keys.

Endpoint: GET /get_autossl_metadata
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (object)
    An object containing the user's AutoSSL metadata key values.

  - `data.payload.clobber_externally_signed` (integer)
    This option will allow AutoSSL to replace certificates that none of this systems AutoSSL modules issued.
When you enable this option, AutoSSL will install certificates that replace users Certificate Authority (CA) issued certificates if they are invalid or expire within three days.
* 1 - Replace the certificate.
* 0 - Do not replace the certificate.
    Enum: 0, 1

  - `data.payload.notify_autossl_expiry` (integer)
    This option will send a notification when an AutoSSL certificate expires. This occurs when AutoSSL cannot request a new certificate.

Note:

This can happen if all of a websites domains fail Domain Control Validation (DCV), or if the AutoSSL provider has not issued a certificate in response to a request.
* 1 -  Notify.
* 0 -  Do not notify.
    Enum: 0, 1

  - `data.payload.notify_autossl_expiry_coverage` (integer)
    This option will send a notification if at least one currently-secured domain will lose coverage when the certificate renews.

* 1 -  Notify.
* 0 -  Do not notify.
    Enum: 0, 1

  - `data.payload.notify_autossl_expiry_coverage_user` (integer)
    This option will send a notification if at least
one of a user's currently-secured domains will lose
coverage when the certificate renews.

* 1 - Notify.
* 0 - Do not notify.
    Enum: 0, 1

  - `data.payload.notify_autossl_expiry_user` (integer)
    This option will send a notification when a
user's AutoSSL certificate expires. This occurs when
AutoSSL cannot request a new certificate for a user.

* 1 - Notify.
* 0 - Do not notify.
    Enum: 0, 1

  - `data.payload.notify_autossl_renewal` (integer)
    This option will send a notification when AutoSSL
successfully renews a certificate.

* 1 - Notify.
* 0 - Do not notify.
    Enum: 0, 1

  - `data.payload.notify_autossl_renewal_coverage` (integer)
    This option will send a notification if a currently-secured
domain fails DCV and the certificate has not reached its
renewal period.

* 1 -  Notify.
* 0 -  Do not notify.
    Enum: 0, 1

  - `data.payload.notify_autossl_renewal_coverage_reduced` (integer)
    This option will send a notification when AutoSSL
has renewed a certificate and the new certificate lacks
at least one domain that the previous certificate secured.


* 1 - Notify.
* 0 - Do not notify.
    Enum: 0, 1

  - `data.payload.notify_autossl_renewal_coverage_reduced_user` (integer)
    This option will send a notification when AutoSSL
has renewed a certificate for a user and the new certificate
lacks at least one domain that the previous certificate
secured.

* 1 - Notify.
* 0 - Do not notify.
    Enum: 0, 1

  - `data.payload.notify_autossl_renewal_coverage_user` (integer)
    This option will send a notification if a currently-secured
domain fails DCV and the certificate has not reached its
renewal period.

* 1 - Notify.
* 0 - Do not notify.

  - `data.payload.notify_autossl_renewal_uncovered_domains` (integer)
    This option will send a notification when AutoSSL
has renewed a certificate and the new certificate lacks
one or more of the websites domains.

* 1 - Notify.
* 0 - Do not notify.
    Enum: 0, 1

  - `data.payload.notify_autossl_renewal_uncovered_domains_user` (integer)
    This option will send a notification when AutoSSL
has renewed a certificate for a user and the new certificate
lacks one or more of the websites domains.

* 1 - Notify.
* 0 - Do not notify.
    Enum: 0, 1

  - `data.payload.notify_autossl_renewal_user` (integer)
    This option will send a notification when AutoSSL
successfully renews a certificate for a user.

* 1 - Notify
* 0 - Do not notify.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_autossl_metadata"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result
field is 0. This field may display a success message when
a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


