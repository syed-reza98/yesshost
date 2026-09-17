# Return additional domain data

This function retrieves domain data for an addon domain.

Important:

When you disable the
Web Server role,
the system disables this function.

Endpoint: GET /convert_addon_fetch_domain_details
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The addon domain for which to retrieve details.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.docroot` (string)
    The absolute file path of the addon domain.
    Example: "/home/exampleparent/public_html/example.com"

  - `data.has_dedicated_ip` (integer)
    Whether the domain uses a dedicated IP address.

* 1 — The domain uses a dedicated IP address.
* 0 — The domain does not use a dedicated IP address.
    Enum: 1, 0

  - `data.has_ssl_cert_installed` (integer)
    Whether an SSL certificate secures the domain.

* 1 — An SSL certificate secures the domain.
* 0 — An SSL certificate does not secure the domain.
    Enum: 1, 0

  - `data.ip` (string)
    The domain's IP address.
    Example: "192.0.2.0"

  - `data.is_sni_supported` (integer)
    Whether the domain supports Server Name Indication (SNI).

* 1 — The domain supports SNI.
* 0 — The domain does not support SNI.
    Enum: 1, 0

  - `data.number_of_autoresponders` (integer)
    The number of the domain's autoresponders.

  - `data.number_of_domain_forwarders` (integer)
    The number of the domain's domain forwarders.
    Example: 1

  - `data.number_of_email_accounts` (integer)
    The number of the domain's email accounts.
    Example: 2

  - `data.number_of_email_forwarders` (integer)
    The number of the domain's email forwarders.
    Example: 1

  - `data.owner` (string)
    The addon domain owner's cPanel account username.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    Example: "convert_addon_fetch_domain_details"

  - `metadata.reason` (string)
    The reason the function failed when the metadata.result field is 0. This field may include a success message when the function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The API version of the function.
    Example: 1


