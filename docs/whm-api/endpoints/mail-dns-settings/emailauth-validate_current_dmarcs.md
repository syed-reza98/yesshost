# Validate DMARC records

This function retrieves and checks the DMARC record for one or more domains.

Endpoint: GET /validate_current_dmarcs
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string)
    The domain for which to check the DMARC record.

Note:

To check multiple domains, duplicate or increment the parameter name.
For example, domain-1, domain-2, and domain-3 parameters.

If you do not include this argument, the system will validate DMARC records for all domains on the server.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects containing information about the domain's DMARC records.
    Example: [{"domain":"example.com","error":"","record":"v=DMARC1; p=none;","state":"VALID","subdomain":"_dmarc.example.com","suggested":"v=DMARC1; p=none;"},{"domain":"example2.com","error":"(XID 4krw35) DNS returned “SERVFAIL” (code 2) in response to the system’s query for “_dmarc.example2.com”’s “TXT” records.","record":"","state":"DNS_ERROR","subdomain":"_dmarc.example2.com","suggested":"v=DMARC1; p=none;"}]

  - `data.payload.domain` (string)
    The target domain of the DMARC policy.
    Example: "example.com"

  - `data.payload.error` (string)
    A message that details either why the DNS lookup failed, or if there is a SPF/DKIM failure.
    Example: "(XID 4krw35) DNS returned SERVFAIL (code 2)\nin response to the system's query for _dmarc.example.com\nTXT records."

  - `data.payload.record` (string)
    The domain's DMARC TXT record.
    Example: "v=DMARC1; p=none;"

  - `data.payload.state` (string)
    The domain's DMARC record status.
Possible values:

* VALID - A DMARC policy is set for the domain, along with valid SPF and DKIM records for the domain and IP address.
* MALFORMED - A DMARC record is set, but it did not pass a syntax check.
* DKIM_SPF_ERROR - A DMARC record exists; however, both the DKIM and SPF records for this domain did not pass validation.
* DKIM_ERROR - A DMARC record exists; however, the DKIM record for this domain did not pass validation.
* SPF_ERROR - A DMARC record exists; however, the SPF record for this domain did not pass validation.
* MISSING - No DMARC policy record exists for the domain at the DMARC subdomain location.
* DNS_ERROR - A DNS error prevented validation of the DMARC record.
    Enum: "VALID", "MALFORMED", "DKIM_SPF_ERROR", "DKIM_ERROR", "SPF_ERROR", "MISSING", "DNS_ERROR"

  - `data.payload.subdomain` (string)
    The domain that the function used to check
the DMARC record. This will be the value of
the domain parameter with a _dmarc prefix.
    Example: "_dmarc.example.com"

  - `data.payload.suggested` (string)
    The recommended DMARC policy.
    Example: "v=DMARC1; p=none;"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "validate_current_dmarcs"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


