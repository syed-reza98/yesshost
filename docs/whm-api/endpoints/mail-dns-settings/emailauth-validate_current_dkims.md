# Validate DKIM records

This function retrieves and checks the DomainKeys Identified Mail (DKIM) records for one or more domains.

Endpoint: GET /validate_current_dkims
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to check the DKIM records.

Note:

To check multiple domains, duplicate or increment the parameter name.
For example, domain-1, domain-2, and domain-3 parameters.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects containing information about the domain's DKIM records.
    Example: [{"domain":"default._domainkey.example.com","expected":"v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDw5nw4NP1RsWXlfmiMzByDfOT16QCZO/xJtrPZKskZF8/sU0zWGTqKUOErlyJfoJzMDUv3/zzjGswc2nEmYqxxoQZaBkN4QaS6MvJQxysAr+sK8C248/r9zMperQdhJedUVejtpFQHJwgqpHy1tQMxY37L7sQjdxmQ5WnQ1acXiwIDAQAB\\","records":[{"current":"v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDw5nw4NP1RsWXlfmiMzByDfOT16QCZO/xJtrPZKskZF8/sU0zWGTqKUOErlyJfoJzMDUv3/zzjGswc2nEmYqxxoQZaBkN4QaS6MvJQxysAr+sK8C248/r9zMperQdhJedUVejtpFQHJwgqpHy1tQMxY37L7sQjdxmQ5WnQ1acXiwIDAQAB\\","state":"VALID"}],"state":"VALID","validity_cache_update":"valid"},{"domain":"default._domainkey.example2.com","error":"(XID 4krw35) DNS returned “SERVFAIL” (code 2) in response to the system’s query for “default._domainkey.example2.com”’s “TXT” records.","expected":"v=DKIM1; k=rsa; p=MIIBIjAAAgkrhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4mA8NH3BkYvOmB0+ll23U78JesahG8304unKhW+MAm0ZE+i6EWN6iXhUj7FRPvI/6jFRd7qAHCPKFLo5+/PTy8C8eK312tfSnF3N0eucYFbgZ8F8iSRdgrcgEjvJ1vM1uvcUF211yd/e3jxT2Ge4/fmZcTYNjfH3uAuriv61L6pdIwHUWPhcjQvgOQoKQgXgooCUbUkWFDkMAH+EF/0g1dnXf289LjlvQsKhY7Y135Zpvm21kjUcj5mrLDlHJALzCVb8K/r/LCxjV5GFUyJiiNLAxkI9V1vZ4pMQvKIsN7wzu6gXK87w6mEWvKvipMAP8A2choDrk6H/fcQtfNodgwIDADAB;","records":[],"state":"ERROR","validity_cache_update":"none"}]

  - `data.payload.domain` (string)
    The domain that the function used to check the DKIM record with a default._domainkey prefix.

  - `data.payload.error` (string)
    An error message that details the reason why the DNS lookup failed.

Note:

The function only returns this value when the state return
is the ERROR value.

  - `data.payload.expected` (string)
    The DKIM record's contents.

  - `data.payload.records` (array)
    The domain's DNS DKIM TXT records.

  - `data.payload.records.current` (string)
    The full contents of the domain's DKIM TXT record data.

  - `data.payload.records.state` (string)
    The DKIM TXT record's status.

* VALID — The DKIM TXT record matches the local server's
public key.
* MISMATCH — The DKIM TXT record does not match the
local server's public key.
* PERMFAIL — Multiple DKIM TXT records for the domain
exist or a misconfigured DKIM TXT record exists.
    Enum: "VALID", "MISMATCH", "PERMFAIL"

  - `data.payload.state` (string)
    The domain's DKIM record status.

* VALID — The DKIM record is valid.
* MALFORMED — A single DKIM record exists, but the record
does not match the expected DKIM specifications.
* MISMATCH — A DKIM record exists, but it does not match the
expected public key.
* MISSING — No DKIM record exists for the domain.
* MULTIPLE — Multiple DKIM records exist.
* NOPUB — No key exists on the local server for the domain.
* ERROR — The record's DNS lookup failed. The function returns
the reason in the error return value.
    Enum: "VALID", "MALFORMED", "MISMATCH", "MISSING", "MULTIPLE", "NOPUB", "ERROR"

  - `data.payload.validity_cache_update` (string)
    The result of the DKIM record's validity cache update operation.

* set — The domain is invalid but passed its validity check.
The validity check now passes the domain as valid.
* valid — The domain is valid and passed its validity check.
There are no changes required.
* none — The domain is invalid but the system will not take
further action.
* error — The domain's validity check operation failed.
    Enum: "set", "valid", "none", "error"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "validate_current_dkims"

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


