# Install existing private key to DKIM record

This function installs existing keys for use in a DomainKeys Identified Mail (DKIM) record. This is useful if you do not want the system to generate keys for DKIM records.

Notes:

* This function does not update the local DNS server's records.
* If the local DNS server is authoritative for the domain's DNS records, use the WHM API 1 enable_dkim function to update the local DNS server's DNS records.
* We recommend that you use the WHM API 1 install_dkim_private_keys and enable_dkim functions in a batch WHM API 1 call.

Endpoint: GET /install_dkim_private_keys
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to install an RSA private key to the local server's DKIM record.

Note:

To install RSA private keys for multiple domains, increment the parameter name. For example, use the domain-1=example-1.com, domain-2=example-2.com, and domain-3=example-3.com parameters.

  - `key` (string, required)
    An RSA key in Privacy-Enhanced Mail (PEM) format.

Note:

 * You must provide this parameter for each domain parameter.
 * To install multiple RSA keys for a domain, increment the parameter name. For example, use the key-1, key-2 parameters.
examples:
  single:
    summary: An RSA key in Privacy-Enhanced Mail (PEM) format.
    value: key
  multiple:
    summary: RSA keys in Privacy-Enhanced Mail (PEM) format.
    value: key-1=KEYKEYKEY&key-2=KEYKEYKEY
    Example: "AAAAB3NzaC1yc2EAAAABIwAAAQEA5kSivOqhs0U9ZMN20nxFe27QZ3t0lT2zbH7OSXylKd1rjAjYXGnSXC9j2uaZlemHlptBKVziMJC86ha7Hcj6dVOVrDQ6vF4q34bOCjtKLphQ0IjBzVIvqILH9eLJdRaOrS34CmgmPaisrCk5wKVlakygvUfcj3HzaTKS6THyZDGx5shdTpa9lby8tpOD3JceV7ay4w8r0DipoKPC0OLpvS4EABEeMo9sx8zQEaKv03XygjNCCYtFvxlQQIRGlVoL7mPaHSaL3anI05RpNbm/PS+9BhZg+BqNjU4ofHBbfkXk5MiN6M7ieR4Sk5BquccboGF13U5slNgmCEekdt0amw"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects containing information about the RSA private key installation to the local server's DKIM record.

  - `data.payload.domain` (string)
    The RSA private key's associated domain.
    Example: "example.com"

  - `data.payload.msg` (string)
    The RSA private key's installation status message.
    Example: "Installed Keys"

  - `data.payload.status` (integer)
    Whether the system installed the RSA private key to the local server's DKIM record.
* 1 — The system installed the RSA private key.
* 0 — The system cannot install the RSA private key.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "install_dkim_private_keys"

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


