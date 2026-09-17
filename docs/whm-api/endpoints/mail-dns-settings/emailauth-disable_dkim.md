# Disable domain's DKIM records

This function removes the DomainKeys Identified Mail (DKIM) records on the DNS server for one or more domains.

Endpoint: GET /disable_dkim
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The domain for which to remove DKIM records on the DNS server.

Note:

 To remove multiple domain DKIM records, duplicate the parameter name. For example, use the domain=example-1.com, domain=example-2.com, and domain=example-3.com parameters.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contains information about the removal of a domain's DKIM record on the DNS server.

  - `data.payload.domain` (string)
    The domain for which the system removed the DKIM record.
    Example: "example.com"

  - `data.payload.msg` (string)
    Information about the removed DKIM record.
    Example: "[REMOVE:TXT@default._domainkey:v=DKIM1; k=rsa; p=MIGfMAOGCSqGSIb3DQEBAQUAA4GNADCBiLMNOpQDw5nw4NP1RsWXlfmiMzByDfOT16QCZO/xJtrPZKskZF8/sU0zWGTqKUOErlyJfoJzMDUv3/zzjGswc2nEmYqxxoQZaBkN4QaS6MvJQxysAr+sK8C248/r9zMperQdhJedUVejtpFQHJwgqpHy1tQMxY37L7sQjdxmQ5WnQ1acXiwIDAQAB;]"

  - `data.payload.status` (integer)
    Whether the system removed the domain's DKIM record on the DNS server.
- 1  — The system removed the domain's DKIM record.
- 0  — The system did not remove the domain's DKIM record.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "disable_dkim"

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


