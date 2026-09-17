# Return available AutoSSL providers

This function lists available AutoSSL providers on the server.

Endpoint: GET /get_autossl_providers
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    This array of objects contains information about available AutoSSL providers.
    Example: [{"display_name":"Sectigo","enabled":1,"module_name":"cPanel","specs":{"AVERAGE_DELIVERY_TIME":120,"DCV_METHODS":["http","dns"],"DELIVERY_METHOD":"queue","HTTP_DCV_MAX_REDIRECTS":0,"MAX_DOMAINS_PER_CERTIFICATE":1000,"RATE_LIMIT_CERTIFICATES_PER_REGISTERED_DOMAIN_PER_WEEK":0,"SUPPORTS_ANCESTOR_DCV":1,"SUPPORTS_WILDCARD":0,"VALIDITY_PERIOD":7776000}},{"display_name":"Let’s Encrypt™","enabled":0,"module_name":"LetsEncrypt","specs":{"AVERAGE_DELIVERY_TIME":5,"DCV_METHODS":["http","dns"],"DELIVERY_METHOD":"api","HTTP_DCV_MAX_REDIRECTS":10,"MAX_DOMAINS_PER_CERTIFICATE":100,"RATE_LIMIT_CERTIFICATES_PER_REGISTERED_DOMAIN_PER_WEEK":50,"SUPPORTS_ANCESTOR_DCV":0,"SUPPORTS_WILDCARD":1,"VALIDITY_PERIOD":7776000},"x_account_id":"https://acme-v01.api.letsencrypt.org/acme/reg/12345678","x_terms_of_service":"https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf","x_terms_of_service_accepted":1}]

  - `data.payload.display_name` (string)
    The AutoSSL provider module's display name.
    Example: "Sectigo"

  - `data.payload.enabled` (integer)
    Whether the AutoSSL provider is enabled.
* 1 - The provider is enabled.
* 0 - The provider is disabled.
    Enum: 0, 1

  - `data.payload.module_name` (string)
    The AutoSSL provider module's name.
    Example: "cPanel"

  - `data.payload.specs` (object)
    The provider's specifications.

  - `data.payload.specs.AVERAGE_DELIVERY_TIME` (integer)
    The amount of time in seconds that the provider requires to issue a certificate.
    Example: 120

  - `data.payload.specs.DCV_METHODS` (array)
    The methods that the provider uses
to validate the domain.

* dns - DNS Validation Method.
* http - HTTP Validation Method.
    Enum: "dns", "http"

  - `data.payload.specs.DELIVERY_METHOD` (string)
    The method that the provider uses
to issue the certificate.

* queue - The provider delivers certificates through a download queue.
* api - The provider delivers certificates through API calls.
    Enum: "queue", "api"

  - `data.payload.specs.HTTP_DCV_MAX_REDIRECTS` (integer)
    The maximum number of redirections a domain can use and still pass an HTTP-based DCV.
    Example: 10

  - `data.payload.specs.MAX_DOMAINS_PER_CERTIFICATE` (integer)
    The number of unique domains each certificate can contain.
    Example: 100

  - `data.payload.specs.RATE_LIMIT_CERTIFICATES_PER_REGISTERED_DOMAIN_PER_WEEK` (integer)
    The maximum number of certificates that the provider will allow per domain in a week.
    Example: 50

  - `data.payload.specs.SUPPORTS_ANCESTOR_DCV` (integer)
    Whether the successful Domain Control
Validation (DCV) of a parent domain implies the
success of a subdomain.

* 1 - The provider supports DCV.
* 0 - The provider does not support DCV."
    Enum: 0, 1

  - `data.payload.specs.SUPPORTS_WILDCARD` (integer)
    Whether the provider supports wildcard
domains on an SSL certificate.

* 1 - The provider supports wildcard domains.
* 0 - The provider does not support wildcard domains.
    Enum: 0, 1

  - `data.payload.specs.VALIDITY_PERIOD` (integer)
    The amount of time before the certificate expired, in seconds.

Note:


 A valid integer.
    Example: 7776000

  - `data.payload.x_account_id` (string)
    The user's account profile URL at the provider.
    Example: "https://acme-v01.api.letsencrypt.org/acme/reg/12345678"

  - `data.payload.x_terms_of_service` (string)
    The URL of the provider's current terms of service.

Note:

If the terms of service available at the x_terms_of_service location is newer than the x_terms_of_service_accepted location, the system administrator will need to accept the new terms of service.
    Example: "https://letsencrypt.org/documents/LE-SA-v1.0.1-July-27-2015.pdf"

  - `data.payload.x_terms_of_service_accepted` (integer)
    Whether the AutoSSL provider is Enabled.

* 1 - The AutoSSL provider is enabled.
* 0 - The AutoSSL provider is not enabled.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_autossl_providers"

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


