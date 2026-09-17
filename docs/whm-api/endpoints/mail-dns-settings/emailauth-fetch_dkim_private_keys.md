# Return domain's DKIM private key

This function returns a domain's installed DKIM private key in Privacy-Enhanced Mail (PEM) format.

Warning:

  We strongly recommend that you protect your private key. If others obtain your private DKIM key, they could sign emails and impersonate you as a sender.

Endpoint: GET /fetch_dkim_private_keys
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domain` (string, required)
    The queried domain.

Note:

 To retrieve multiple domain DKIM keys, increment the parameter name. For example, use the domain-1=example-1.com, domain-2=example-2.com, and domain-3=example-3.com                      parameters.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array containing information about the domain's DKIM private key.

  - `data.payload.domain` (string)
    The queried domain.
    Example: "example.com"

  - `data.payload.pem` (string)
    The domain's DKIM private key, in PEM format.
    Example: "-----BEGIN RSA PRIVATE KEY-----\nMIICLDCCAdKgAwIBAgIBADAKBggqhkjOPQQDAjB9MQswCQYDVQQGEwJCRTEPMA0G\nA1UEChMGR251VExTMSUwIwYDVQQLExxHbnVUTFMgY2VydGlmaWNhdGUgYXV0aG9y\naXR5MQ8wDQYDVQQIEwZMZXV2ZW4xJTAjBgNVBAMTHEdudVRMUyBjZXJ0aWZpY2F0\nZSBhdXRob3JpdHkwHhcNMTEwNTIzMjAzODIxWhcNMTIxMjIyMDc0MTUxWjB9MQsw\nCQYDVQQGEwJCRTEPMA0GA1UEChMGR251VExTMSUwIwYDVQQLExxHbnVUTFMgY2Vy\ndGlmaWNhdGUgYXV0aG9yaXR5MQ8wDQYDVQQIEwZMZXV2ZW4xJTAjBgNVBAMTHEdu\ndVRMUyBjZXJ0aWZpY2F0ZSBhdXRob3JpdHkwWTATBgcqhkjOPQIBBggqhkjOPQMB\nBwNCAARS2I0jiuNn14Y2sSALCX3IybqiIJUvxUpj+oNfzngvj/Niyv2394BWnW4X\nuQ4RTEiywK87WRcWMGgJB5kX/t2no0MwQTAPBgNVHRMBAf8EBTADAQH/MA8GA1Ud\nDwEB/wQFAwMHBgAwHQYDVR0OBBYEFPC0gf6YEr+1KLlkQAPLzB9mTigDMAoGCCqG\nSM49BAMCA0gAMEUCIDGuwD1KPyG+hRf88MeyMQcqOFZD0TbVleF+UsAGQ4enAiEA\nl4wOuDwKQa+upc8GftXE2C//4mKANBC6It01gUaTIpo==\n-----END RSA PRIVATE KEY-----\n"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "fetch_dkim_private_keys"

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


