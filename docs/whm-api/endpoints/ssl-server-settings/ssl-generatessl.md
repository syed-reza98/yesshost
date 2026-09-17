# Create self-signed SSL certificate

This function generates a private key file, a certificate signing request (CSR), and a self-signed SSL certificate.

Endpoint: GET /generatessl
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domains` (string, required)
    A comma-separated list of the certificate's domains.

  - `countryName` (string)
    The certificate's country code.

If you do not use this parameter, your CSR will not include this field.
    Example: "US"

  - `emailAddress` (string)
    The certificate's contact email address.

If you do not use this parameter, your CSR will not include this field.
    Example: "username@example.com"

  - `keysize` (integer)
    The size of the certificate's key, in bits.

If you do not use this parameter, your CSR will not include this field.
    Example: 2048

  - `localityName` (string)
    The certificate's city or locality.

If you do not use this parameter, your CSR will not include this field.
    Example: "Houston"

  - `organizationalUnitName` (string,null)
    The department of the organization that owns the certificate.
    Example: "Development"

  - `organizationName` (string)
    The certificate's organization.

If you do not use this parameter, your CSR will not include this field.
    Example: "Example, L.L.C."

  - `pass` (string,null)
    The certificate's passphrase.
    Example: "123456luggage"

  - `skip_certificate` (integer)
    Whether the function will skip certificate generation.

* 1 — Skip certificate generate (do not generate a certificate).
* 0 — Do not skip certificate generation (generate a certificate).

Note:

The function will still generate a CSR and key and save both to the user's SSLStorage
data store.
    Enum: 1, 0

  - `stateOrProvinceName` (string)
    The certificate's state or province name.

If you do not use this parameter, your CSR will not include this field.
    Example: "Texas"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cert` (string)
    The certificate's text.
    Example: "-----BEGIN CERTIFICATE-----\nMIIDVDCCAjygAwIBAgIFANMbQ1IwDQYJKoZIhvcNAQELBQAwFjEUMBIGA1UEAwwL\nZXhhbXBsZS5jb20wHhcNMjAwMzE2MTg1OTU4WhcNMjEwMzE2MTg1OTU4WjAWMRQw\nEgYDVQQDDAtleGFtcGxlLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBALnif/SIEE3xfi7iXCI3Kk7yNFrKw9b3SbCwTFEV4HZZpX+gK0ZkwT1vkkT6\nIFs68DVJI9KxXycCY8ZVI64TeD5Hqqy3p9NAkALyfC9OJlDP/mAKjgUZYISMci4K\njuf252rrtox5I5DgbWfXGe12HAjOnQrNjJMvscU9DstXMjDtzrlpwHZ/PH+v/Rcw\nt1WwpcAVOFNxQq6Z0CDwKW/JsHu7tVRa57QMlLTm2BEMIPlTHHoHRJk0zOQuHP3x\n87eYpnCiE/WbC5xlfm912fnFvvECb/6OGtAsw7GC0KnovS1W+rPfZHAdbbA61ukU\nMh+U5VJaNot/kqfbJYpkMD1VRu8CAwEAAaOBqDCBpTAdBgNVHQ4EFgQUSU78eVCc\nJPFAzdImFwAufRu+2WEwCQYDVR0TBAIwADBCBgNVHSMEOzA5gBRJTvx5UJwk8UDN\n0iYXAC59G77ZYaEapBgwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb22CBQDTG0NSMB0G\nA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAWBgNVHREEDzANggtleGFtcGxl\nLmNvbTANBgkqhkiG9w0BAQsFAAOCAQEAf9dzrKj4LGvkBN3q0VHvPsKicl8tABxK\nuv4vKoiAXuh7R9k2bnFqpfvDa7j2qbBd5Gh4ctjdwTv7eA/E0sELgxlezcx9grgX\nCk//GRieAoEj6ZOx1AdKw/Pj6jQyMpU9mQi7+nbpcl1CmQlBc9c2OiayjAAwxm1s\n+Uj7C9+OOkFXeLt/adurcKHhDO3tVD9fqr+pFiVjJOyuIr+T/84gAUAK4RxipaDg\nf35OapjaVQesolECPEP9l/ajf5e2C33JBDwoVqa3b7wwhStN4YpF+7SAd74K1QRz\nrPum8QKnzZjwtx0OBRJl/CHQBz4u0LJGBH4vXhgzzoAcdlGouKf8RA==\n-----END CERTIFICATE-----\n"

  - `data.cert_id` (string)
    The certificate's ID.
    Example: "example_com_a2459_9d253_1405012775_521f3620ac92180d24a74813a921b23e"

  - `data.certfile` (string)
    The absolute file path to the certificate's location.
    Example: "/var/cpanel/ssl/system/certs/example_com_e0054_da789_1405012513_401c27501f5e0dd8d1b1d9caa902a0c8.crt"

  - `data.csr` (string)
    The CSR's text.
    Example: "-----BEGIN CERTIFICATE REQUEST-----\nMIIChDCCAWwCAQAwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb20wggEiMA0GCSqGSIb3\nDQEBAQUAA4IBDwAwggEKAoIBAQC54n/0iBBN8X4u4lwiNypO8jRaysPW90mwsExR\nFeB2WaV/oCtGZME9b5JE+iBbOvA1SSPSsV8nAmPGVSOuE3g+R6qst6fTQJAC8nwv\nTiZQz/5gCo4FGWCEjHIuCo7n9udq67aMeSOQ4G1n1xntdhwIzp0KzYyTL7HFPQ7L\nVzIw7c65acB2fzx/r/0XMLdVsKXAFThTcUKumdAg8ClvybB7u7VUWue0DJS05tgR\nDCD5Uxx6B0SZNMzkLhz98fO3mKZwohP1mwucZX5vddn5xb7xAm/+jhrQLMOxgtCp\n6L0tVvqz32RwHW2wOtbpFDIflOVSWjaLf5Kn2yWKZDA9VUbvAgMBAAGgKTAnBgkq\nhkiG9w0BCQ4xGjAYMBYGA1UdEQQPMA2CC2V4YW1wbGUuY29tMA0GCSqGSIb3DQEB\nCwUAA4IBAQCEPc5HD2KRQpqqm7aG6Y/oOnbGALi7GcOsr/vo+voWRDhC/nTAC9vp\nDXEjWY4FfA7N1VSgH5f04k40SBWlfvgCzQAB2AfLEo6LReNv1oCpojvKZVbJq+pq\nKTEMhkFzj4CBTG2gt9rAhKmNai7AnvDWdrnulsVShAsQMYsEeVmCxfGE9w3IEmLP\nJSvUB6/RSPF8zB5yP6/tZy00k+Mt/959yPAxDicrNASbCA2/TkuaBEaP+2v9lJY7\nzg2Z1js/Nv/5DE+1sqp+7GI26M6ZCSNzSyTVs2MOl6ecJTxhRCbVTYFy9SDRtsGE\nVOpPe2+XTcBM/mGIIRJharQNgy7S8kZ0\n-----END CERTIFICATE REQUEST-----\n"

  - `data.csr_id` (string)
    The CSR's ID.
    Example: "example_com_e0054_da789_96b6625681492b7c43844b6ec37764de"

  - `data.csrfile` (string)
    The absolute file path to the CSR.
    Example: "/var/cpanel/ssl/system/csrs/example_com_a2459_9d253_d5edb563abb8dd426099bbb358c8f2bc.csr"

  - `data.key` (string)
    The private key's text.
    Example: "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAueJ/9IgQTfF+LuJcIjcqTvI0WsrD1vdJsLBMURXgdlmlf6Ar\nRmTBPW+SRPogWzrwNUkj0rFfJwJjxlUjrhN4PkeqrLen00CQAvJ8L04mUM/+YAqO\nBRlghIxyLgqO5/bnauu2jHkjkOBtZ9cZ7XYcCM6dCs2Mky+xxT0Oy1cyMO3OuWnA\ndn88f6/9FzC3VbClwBU4U3FCrpnQIPApb8mwe7u1VFrntAyUtObYEQwg+VMcegdE\nmTTM5C4c/fHzt5imcKIT9ZsLnGV+b3XZ+cW+8QJv/o4a0CzDsYLQqei9LVb6s99k\ncB1tsDrW6RQyH5TlUlo2i3+Sp9slimQwPVVG7wIDAQABAoIBAGIHgzdwcjjIvKT5\nF2Gr+hH8RYQEHtfFPgWCVB0HDoMbr93omCndhNNjfZ4G0v2JzZgsZEn+5JFr/zZf\nPBvXhLhDj0za5hTQnaIQQ1GnQymnJx17M36Y7X+5mZWSV98ZJN4MRQ8763fCA7CZ\njcDfYtV6MPO7hwEwS+4azyyJZZzLRUP2Z8kpXv3PFlXUeddZHwQgyKRdLcQWXE/w\niFClYSfsk10y8Nm6BKzI6TkZS32zIGt3FdJ8+kARJteV0sg6hjPpZMH0223Cbn+h\nlq9eU5b8N5xq7FBmmrfpJcaPdkmo8nUzEGQszyHHjF3N3p78065T+PEb+Jlirsl/\nQf48ssECgYEA9o5wPmAtP8/tdDtdUSHJDbvERq0i2SeEmlrc/82mw82WlHA//sg8\npqeT3EtH8QdvZqSVSw74Yr4TNOLMwLt8T5Rg+gPYsdoqc++d8hB/ru6nvRBwJ437\nZN2JeoEObvNv4QgnfFpeKGxgaX49Yx6u0DJsABWpWsAppCUTXtxP2D8CgYEAwQEo\nQ0tFhwKz4e2gSyOSkuWUJi+tbY//+ouZEGlIYCzObXsZ/bM/AIEZKiAVTdyY5h91\nnAXLFRgcP3z0+h0XeiTcSZN4oEiMwL1/mPmx4uBMZijV54+ABjUFbVStlzxh4KLN\nzf0HUOPAA1biCNDn1yY+a8C+hKky2Ec+Nx//ZVECgYBqD5v5OSY97RQYi/D4lbAH\nWF52iMQU5gsE21F2OOEkGaxM7nyY/UoZ5ryUZ03rQWeKoAIY57exwlJAzc+GmSBA\nm3OcGUt+NntMpCctmitS9RbzHb8hRNJ/8UzShfHPiKj4BKn3tGgMu5I9zzBZEzng\nFdCfuLHBeChxlAFhLSSrwQKBgQCUUsxbcvRavmP5Y8HFHPBevdotwoQ4Z+rj4/Zc\nm1yItMZrcqhVxTPMsmnhasiUjsxeRZz/q6AXdPD4hZJKyKKrNrqoPJH+M+MfmEIA\nERx468Eq3YUNsMVFf+fMzr+dM0VQ+izJegPuUSjWKCYLemhBet2Lt5NypgkyFwYk\nHQ4MEQKBgCeQOxNn2exJj0B6wt0Ts+tHdQlreLv+7zMB+CWODnkaXAiRqB8mr1O1\nmFZApPHnx3HUrxRsiHfvf9m2N2gpzyVcK86zbQSti5PB9sqEMw5eHd1qtlPSOV31\nJUG9qpLL/Jf6+AsZCNGOrjMQD99Sh3x/tPZVbK49OyOe6HxV5Ht0\n-----END RSA PRIVATE KEY-----\n"

  - `data.key_id` (string)
    The private key's ID.
    Example: "e0054_da789_101721a053024156a34e0df8a9c388d4"

  - `data.keyfile` (string)
    The absolute file path to the private key.
    Example: "/var/cpanel/ssl/system/keys/e0054_da789_101721a053024156a34e0df8a9c388d4.key"

  - `data.sender` (string)
    The username that generated the request.
    Example: "admin"

  - `data.sender_host` (string)
    The host that generated the request.
    Example: "hostname.example.com"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "generatessl"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Key, Certificate, and CSR generated OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


