# Validate domain's DKIM keys

This function confirms the validity of a DomainKeys Identified Mail (DKIM) key for one or more domains.

Note:

* If an existing DKIM key does not meet the server's security requirements, the system replaces the existing DKIM key.
* If no DKIM key exists, the system creates a new key for the domain.

Endpoint: GET /ensure_dkim_keys_exist
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to confirm a valid DKIM key exists.

Note:

To check the DKIM key validity for multiple domain, duplicate the parameter name. For example, use the domain-1=example.com, domain-2=example2.com, and domain-3=example3.com parameters.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects containing information about the domain's DKIM key validity.

  - `data.payload.domain` (string)
    The domain for which the system confirmed that a valid DKIM key exists.
    Example: "example.com"

  - `data.payload.msg` (string)
    The domain's DKIM key status message.
    Example: "created new key"

  - `data.payload.status` (integer)
    Whether the system verified that the domain's DKIM key exists.
* 1 — The system verified the existence of the domain's DKIM key.
* 0 — The system did not verify the existence of the domain's DKIM key.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ensure_dkim_keys_exist"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


