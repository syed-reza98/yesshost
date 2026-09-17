# Return SSL-encrypted domain for service access

This function retrieves the most appropriate SSL-encrypted domain to use to access a service.

Endpoint: GET /get_best_ssldomain_for_service
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `service` (string, required)
    The service's name.
    Example: "whostmgr"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cert_match_method` (string)
    The method that the system used to match the domain with the certificate.
* none — No domain matches the certificate.
* exact — The domain exactly matches the certificate.
* exact-wildcard — The domain exactly matches the domain of a wildcard certificate.
* mail-wildcard — The mail subdomain of the domain matches the domain of the wildcard certificate.
* www-wildcard — The www subdomain of the domain matches the domain of the wildcard certificate.
* hostname-wildcard — The hostname's domain matches the domain of the wildcard certificate.
* hostname — The hostname matches the domain of the certificate.
* localdomain_on_cert-mail-wildcard — Any mail subdomain of any domain on the server matches the certificate.
* localdomain_on_cert-www-wildcard — Any www subdomain of any domain on the server matches the certificate.
* localdomain_on_cert — Any domain on the server matches the certificate.
    Enum: "none", "exact", "exact-wildcard", "mail-wildcard", "www-wildcard", "hostname-wildcard", "hostname", "localdomain_on_cert-mail-wildcard", "localdomain_on_cert-www-wildcard", "localdomain_on_cert"

  - `data.cert_valid_not_after` (integer)
    The expiration date of the certificate.
    Example: 1457452989

  - `data.is_currently_valid` (integer)
    Whether the certificate is currently valid.

* 1 — The certificate is valid.
* 0 — The certificate is not valid.

Note:

If the certificate is valid, the following statements are true:

* The certificate is not self-signed (the is_self_signed value is 0).
* The certificate matches the SSL domain (the ssldomain_matches_cert value is 1).
* The certificate is within its validity period (the cert_valid_not_after value is less than the current time and date).
    Enum: 0, 1

  - `data.is_self_signed` (integer)
    Whether the certificate is self-signed.

* 1 — The certificate is self-signed.
* 0 — The certificate is not self-signed.

Note:

For legacy reasons, if the ssldomain_matches_cert value is 0, then the function will always return a value
of 1 for the is_self_signed return return, regardless of whether the certificate is actually self-signed.
    Enum: 0, 1

  - `data.is_wild_card` (integer)
    Whether the service uses a wildcard certificate.
* 1 — The service uses a wildcard certificate.
* 0 — The service does not use a wildcard certificate.
    Enum: 0, 1

  - `data.ssldomain` (string)
    The domain of the service's SSL certificate.
    Example: "hostname.example.com"

  - `data.ssldomain_matches_cert` (integer)
    Whether an SSL-encrypted domain matches the certificate.
* 1 — Matches.
* 0 — Does not match.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_best_ssldomain_for_service"

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


