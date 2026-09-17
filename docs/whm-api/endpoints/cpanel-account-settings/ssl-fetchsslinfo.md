# Return cPanel account SSL certificate information

This function retrieves information about SSL certificates that you could install for a user. This function does not provide information about the currently installed certificates.

Endpoint: GET /fetchsslinfo
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `crtdata` (string)
    The certificate's text.
    Example: "-----BEGIN CERTIFICATE-----\\nMIIDdzCCAl+gAwIBAgIFAhQDowAwDQYJKoZIhvcNAQELBQAwFjEUMBIGA1UEAwwL\\nZXhhbXBsZS5jb20wHhcNMTkxMTExMjAzNzUzWhcNMjAxMTEwMjAzNzUzWjAWMRQw\\nEgYDVQQDDAtleGFtcGxlLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\\nggEBAK31N5qqd4BhMRm318tt7CP3thvJ9nXv5j3Hks8bfNggAgBmWwh/iGEoyB0e\\nmKmFkomXYQejSCkFmwI5/I+H53LA1UrnWURAHaY8UCJMMeCe22E9fbmASNMhcnov\\n/AOYBl3kEWEkKVBN3dQZFsWzj+PTTui1zHl8nrr1POPLZMS+t8D3HppNoUBwBkKR\\nQ/MetqCaQ3HlgbknMi0/5DbuaV0GJNbXNX9uhnGqQFUI21sEVU4xcvtEDN88dT1d\\nx5EhLXobDV/brXgFm85QK/lZt3aWlIJLs/WJJSK+152PO3HhfoHpkx+JflMYoev5\\nLauXhZGYXCEG8sBLa2PPH9WlpgcCAwEAAaOByzCByDAdBgNVHQ4EFgQU/Vx4Cer1\\nmY3SaijxdCsA2Jo7q84wCQYDVR0TBAIwADBCBgNVHSMEOzA5gBT9XHgJ6vWZjdJq\\nKPF0KwDYmjurzqEapBgwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb22CBQIUA6MAMB0G\\nA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjA5BgNVHREEMjAwggtleGFtcGxl\\nLmNvbYIQbWFpbC5leGFtcGxlLmNvbYIPd3d3LmV4YW1wbGUuY29tMA0GCSqGSIb3\\nDQEBCwUAA4IBAQCneJA732g7srfydkgG0XJ8b1RS3ffVlnG1ahCDfIpBTx2M7Oco\\n0oa4QK4fEJnyh5Zc861aNrRHecLk4KV4QmDmLJVxTKNv3QXqgPJu+zN49x9ESwRs\\nbqiaD+K6MYmlyRukxY+v8jyOhTKvZTOjuuGKhDRcNNgn/kPIjZw3v37vY4o1pUPL\\nP1YBw2Caa01HstzouaVZlw05Viwo2AHJE5u7zW+VcA4VR8WAD/2SqdyWZIo+chwd\\nr3hWlRyHephLCBhOLb1wPk3E+mOIyryXjLpGdVnWewMSEY8AGvv7IORkO5ufCz/c\\n5UlG1r1+l5AhnFQPGoREI49hXVAETVInW9Uk\\n-----END CERTIFICATE-----"

  - `domain` (string)
    The domain's name.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cab` (string)
    The certificate's certificate authority (CA) bundle.
    Example: "-----BEGIN CERTIFICATE-----\\nMIIDdzCCAl+gAwIBAgIFAhQDowAwDQYJKoZIhvcNAQELBQAwFjEUMBIGA1UEAwwL\\nZXhhbXBsZS5jb20wHhcNMTkxMTExMjAzNzUzWhcNMjAxMTEwMjAzNzUzWjAWMRQw\\nEgYDVQQDDAtleGFtcGxlLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\\nggEBAK31N5qqd4BhMRm318tt7CP3thvJ9nXv5j3Hks8bfNggAgBmWwh/iGEoyB0e\\nmKmFkomXYQejSCkFmwI5/I+H53LA1UrnWURAHaY8UCJMMeCe22E9fbmASNMhcnov\\n/AOYBl3kEWEkKVBN3dQZFsWzj+PTTui1zHl8nrr1POPLZMS+t8D3HppNoUBwBkKR\\nQ/MetqCaQ3HlgbknMi0/5DbuaV0GJNbXNX9uhnGqQFUI21sEVU4xcvtEDN88dT1d\\nx5EhLXobDV/brXgFm85QK/lZt3aWlIJLs/WJJSK+152PO3HhfoHpkx+JflMYoev5\\nLauXhZGYXCEG8sBLa2PPH9WlpgcCAwEAAaOByzCByDAdBgNVHQ4EFgQU/Vx4Cer1\\nmY3SaijxdCsA2Jo7q84wCQYDVR0TBAIwADBCBgNVHSMEOzA5gBT9XHgJ6vWZjdJq\\nKPF0KwDYmjurzqEapBgwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb22CBQIUA6MAMB0G\\nA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjA5BgNVHREEMjAwggtleGFtcGxl\\nLmNvbYIQbWFpbC5leGFtcGxlLmNvbYIPd3d3LmV4YW1wbGUuY29tMA0GCSqGSIb3\\nDQEBCwUAA4IBAQCneJA732g7srfydkgG0XJ8b1RS3ffVlnG1ahCDfIpBTx2M7Oco\\n0oa4QK4fEJnyh5Zc861aNrRHecLk4KV4QmDmLJVxTKNv3QXqgPJu+zN49x9ESwRs\\nbqiaD+K6MYmlyRukxY+v8jyOhTKvZTOjuuGKhDRcNNgn/kPIjZw3v37vY4o1pUPL\\nP1YBw2Caa01HstzouaVZlw05Viwo2AHJE5u7zW+VcA4VR8WAD/2SqdyWZIo+chwd\\nr3hWlRyHephLCBhOLb1wPk3E+mOIyryXjLpGdVnWewMSEY8AGvv7IORkO5ufCz/c\\n5UlG1r1+l5AhnFQPGoREI49hXVAETVInW9Uk\\n-----END CERTIFICATE-----"

  - `data.crt` (string)
    The certificate's text.
    Example: "-----BEGIN CERTIFICATE-----\\nMIIDdzCCAl+gAwIBAgIFAhQDowAwDQYJKoZIhvcNAQELBQAwFjEUMBIGA1UEAwwL\\nZXhhbXBsZS5jb20wHhcNMTkxMTExMjAzNzUzWhcNMjAxMTEwMjAzNzUzWjAWMRQw\\nEgYDVQQDDAtleGFtcGxlLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\\nggEBAK31N5qqd4BhMRm318tt7CP3thvJ9nXv5j3Hks8bfNggAgBmWwh/iGEoyB0e\\nmKmFkomXYQejSCkFmwI5/I+H53LA1UrnWURAHaY8UCJMMeCe22E9fbmASNMhcnov\\n/AOYBl3kEWEkKVBN3dQZFsWzj+PTTui1zHl8nrr1POPLZMS+t8D3HppNoUBwBkKR\\nQ/MetqCaQ3HlgbknMi0/5DbuaV0GJNbXNX9uhnGqQFUI21sEVU4xcvtEDN88dT1d\\nx5EhLXobDV/brXgFm85QK/lZt3aWlIJLs/WJJSK+152PO3HhfoHpkx+JflMYoev5\\nLauXhZGYXCEG8sBLa2PPH9WlpgcCAwEAAaOByzCByDAdBgNVHQ4EFgQU/Vx4Cer1\\nmY3SaijxdCsA2Jo7q84wCQYDVR0TBAIwADBCBgNVHSMEOzA5gBT9XHgJ6vWZjdJq\\nKPF0KwDYmjurzqEapBgwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb22CBQIUA6MAMB0G\\nA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjA5BgNVHREEMjAwggtleGFtcGxl\\nLmNvbYIQbWFpbC5leGFtcGxlLmNvbYIPd3d3LmV4YW1wbGUuY29tMA0GCSqGSIb3\\nDQEBCwUAA4IBAQCneJA732g7srfydkgG0XJ8b1RS3ffVlnG1ahCDfIpBTx2M7Oco\\n0oa4QK4fEJnyh5Zc861aNrRHecLk4KV4QmDmLJVxTKNv3QXqgPJu+zN49x9ESwRs\\nbqiaD+K6MYmlyRukxY+v8jyOhTKvZTOjuuGKhDRcNNgn/kPIjZw3v37vY4o1pUPL\\nP1YBw2Caa01HstzouaVZlw05Viwo2AHJE5u7zW+VcA4VR8WAD/2SqdyWZIo+chwd\\nr3hWlRyHephLCBhOLb1wPk3E+mOIyryXjLpGdVnWewMSEY8AGvv7IORkO5ufCz/c\\n5UlG1r1+l5AhnFQPGoREI49hXVAETVInW9Uk\\n-----END CERTIFICATE-----"

  - `data.crt_origin` (string)
    The username of the certificate's creator.
    Example: "example"

  - `data.domain` (string)
    The domain name on the certificate.
    Example: "example.com"

  - `data.ip` (string)
    The certificate's IP address.
    Example: "192.168.0.20"

  - `data.key` (string)
    The certificate's private key.
    Example: "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEArfU3mqp3gGExGbfXy23sI/e2G8n2de/mPceSzxt82CACAGZb\nCH+IYSjIHR6YqYWSiZdhB6NIKQWbAjn8j4fncsDVSudZREAdpjxQIkwx4J7bYT19\nuYBI0yFyei/8A5gGXeQRYSQpUE3d1BkWxbOP49NO6LXMeXyeuvU848tkxL63wPce\nmk2hQHAGQpFD8x62oJpDceWBuScyLT/kNu5pXQYk1tc1f26GcapAVQjbWwRVTjFy\n+0QM3zx1PV3HkSEtehsNX9uteAWbzlAr+Vm3dpaUgkuz9YklIr7XnY87ceF+gemT\nH4l+Uxih6/ktq5eFkZhcIQbywEtrY88f1aWmBwIDAQABAoIBAD9rmDMOFPU7+d+r\nc8QZti7Cv6TP88e5h5JccTyKg/BzcudcabHmdP0fFh3vqq6bIPqCswBK2iMChSnB\npD9bx9jBTsG5KIVGbsjNUlW+u6xtngOMnIqFp4c5uXesiM9ynFecr21f9qPtT4Nl\nBjVbqojf3/PdW8eq1F/KysEtxPYpC/RI35iL0zl8EBZ5Ydn0Yb6ftr2e72mf8JDx\nN6SgQt3E7vviRSmivuURmN9KjD+grf94fiL7PDONL/ectOWrvXnD7ppmngNuae2m\n34OHraSM46QzOp/egFc0yyNQC2PKb4YxYMq7U2ijU2rM4d809HI9jG2BXmB1I2YO\no5vZK4kCgYEA2mggZsJs7L67NXryrDNm82RnoPEjoTT2zdzl92BvMYVmu2cRyi/m\n2X5HDzTlc3l8fqFERSSc/Vc/hjluaDT+vbJzNa1tFklMbb3rXW1Z6fhqadQf34jz\nAXjeUU90aCIgAcFyTVdiz12pS1ESNCeGlRFIBF5Z3nK3MV/JmUNjEBsCgYEAy+Z/\nAtRAc6YcYseVEyo0wq2NNfDStYNp7+GhcA8qp4+1pZ8dk7n9VfkSUem0WEoi7F7g\nlUVDsWr62XiFtkV3dv77CUTlXcjmReykTzvPclT9wqyj84F09FdPZ5XusiQ0GKPe\nwLUWv+NPFlarZSxvRedlwPnC3O7FrN9TAV0/WIUCgYEAwpa/N47GKXANr6ppB8+M\nTBIK2jO+QOTFd8j2Ax8iMobebt131iIzlVeSzBOe0vFMYC4ie1ARpw3TBS2qFqIQ\nzMZvK0XmyVJpC+WIC+dfkrvHY56g/zIvAALGYL9fwV+WELpfslTHLmYObZI/m8QT\nfkC1X18Ixs6CNTVYknqdij0CgYA+btZnJFyTzMIWUOxJkPvUvFVntdSe9Z0jcWAA\nMvSpl+xTyTPCPwneIETGxhuNiS3GWIrFyg6fLZWfrzKqC/03d32gafMdU12G/Z2W\nEUdEx9dnm3scHYCVLILIwfTzoPg+rzaOpSRRHyXhPip+8SslKWRTwWY0RfxLIZqF\n6WpzDQKBgQDIFver+WSw/LTHt8LvYWyWi7pOIu6Df0ff1AYYSTMzsz9UewfRlSFw\n/ASp0dR6Po84oxIYRERxbu1ZoDhQxnGb5M1i+iFsOYBIRVmbWs4k7A0kghjGqciA\nyIbJNfSVmgNTXN4VqXW1rAqYDGDgE+huGEpnD08bPfEQm9tp0Mss5w==\n-----END RSA PRIVATE KEY-----"

  - `data.key_origin` (string)
    The username of the key's creator.
    Example: "example"

  - `data.searched_users` (array)
    A list of users that the system searched to find certificate information.
    Example: ["root","example"]

  - `data.user` (string)
    The certificate's owner.
    Example: "example"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "fetchsslinfo"

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


