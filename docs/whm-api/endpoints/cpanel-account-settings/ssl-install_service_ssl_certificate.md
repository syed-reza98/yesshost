# Install SSL certificate for service

This function installs a new SSL certificate on a service.

Important:

You must restart the selected service after you install a new SSL certificate.

Endpoint: GET /install_service_ssl_certificate
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `crt` (string, required)
    The certificate to install.

Note:

You must URI-encode this value.
    Example: "-----BEGIN CERTIFICATE-----\nMIIE3f4g5h7j73f235gy54hvcNAQELBQAwgYYxEDAOBgNVBAcMB2hvd097342boi0w389w0BCQEWEmMubGFycnl8293rhqurpg9qfgm5ldDEOMAwGA1UECAwFdGV4YXMxCzAJBgNVBAYTAlVTMSEwHwYDVQQDDBhiaW5hcnlhZ2Fpbi5jcGFuZWwubmluamExDzANBgNVBAoMBmNwYW5lbDAeFw0yMDA1MTgxODQ3NTFaFw0yMTA1MTgxODQ3NTFaMIGGMRAwDgYDVQQHDAdob3VzdG9uMSEwHwYJKoZIhvcNAQkBFhJjLmxhcnJ5QGNwYW5lbC5uZXQxDjAMBgNVBAgMBXRleGFzMQswCQYDVQQGEwJVUzEhMB8GA1UEAwwYYmluYXJ5YWdhaW4uY3BhbmVsLm5pbmphMQ8wDQYDVQQKDAZjcGFuZWwwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC3i1fOlIUoURJf4BkMgoVvCeq5GZjzuCl6WXzz5WsADYUl84UzgXJIWtwBoTc2l32zyeWkIAkM/eNR12YMb0kXbgihbZtEsH0XimqcXmtiicoM3tjBi6u0cDEFr8TMdI396oArnnTc0CASfdXUGGtReZ6vOwxXOPPK5nYCvyFqBl1n0pQ2AV/Co9/WwhOCvV/Bm9aTzueZrbYB/9uW31LOpjs+0s1QNGHv6PTvH8HZFW/7Z9M3gSwUxfOOOQHEiiHRWfb/UqcTZZxjZhfY/IN6/SOsc3Z2t2KmQ5XI6ijCrjjJeaZSQYsge8LpHskr8G3WeTV9M9+1YnI7GRqs3+GdAgMBAAGjggEsMIIBKDAdBgNVHQ4EFgQUYWWThQj2tRL5PNkdPhUJdqEIcrswCQYDVR0TBAIwADCBtwYDVR0jBIGvMIGsgBRhZZOFCPa1Evk82R0+FQl2oQhyu6GBjKSBiTCBhjEQMA4GA1UEBwwHaG91c3RvbjEhMB8GCSqGSIb3DQEJARYSYy5sYXJyeUBjcGFuZWwubmV0MQ4wDAYDVQQIDAV0ZXhhczELMAkGA1UEBhMCVVMxITAfBgNVBAMMGGJpbmFyeWFnYWluLmNwYW5lbC5uaW5qYTEPMA0GA1UECgwGY3BhbmVsggUCGG94JTAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwIwYDVR0RBBwwGoIYYmluYXJ5YWdhaW4uY3BhbmVsLm5pbmphMA0GCSqGSIb3DQEBCwUAA4IBAQBhKmds+XDTycHc2bsSH+zDkWIw58+J26Re9Q9VnUcrSKtV3mmtW88r8FuEHEZdAOzFPTJ3Tdd1fha15wuS5dzOV+bCRrDTvJmD4vRPkQ5TSdyJgpIjpjwiOP1+ZwaF7xZ+FLMTcEl8SXM+lkoKEUQpHFKyQ0zGIaLCVt0QyXx16lesPMgPeb/KRXJPy7ZrUtyF0z0LgvOSDGNsGt4rD8FVgtdHRlMJf/XIoFeV5Zk+rHNoCXIQXh4nBzM8X2r3IrQ1Qh0Z3njN2Ld8ZUlxsWctlLzvzmjARzIzvbglO3wod5XoRLS+fU6oVyQ9yuQLGG6r6Y7iBYSHfAO8e0pLkp7G\n-----END CERTIFICATE-----"

  - `key` (string, required)
    The certificate's key.

Note:

You must URI-encode this value.
    Example: "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEA4FIdZcIKVK5+PtdzVm4CN45BXG5wX7KZ1/dP84MGIwtwxkkX\nhBqw7BawbHlexYXuarSnrHA8hm6RRxv/fRy+zOeg7y8v5CWG52m91GK7qSLxpruY\ngCJGJEK8fj6spbbLjxNd5XAmDwT80uMsq/3E9rGmg/ELY9X9vn5WlErRfi2Qjsiq\nx7AYUvcIkBHPOlRWzZgx2KjMjBU2U0w2RCUjgKgww/6xx2ccnTvn7HGvVjQMkh+1\nUYCdGvT8fR2qJBKHZ5Cjdfc9N304qZCqYMhcrHX2gJqc+9zLtLk7PoEYXu17l6nU\nO3C/IdzBXYWu+UoMzpZ5tc5jKRA3+I7ggKjJlwIDAQABAoIBAQDR4GI648qQolXh\n6+iws+qFGibTGU0wbET+SBjYx/0E6t5P1vEWm3Zu3WehhgkCm6WO1omOj9BBIs/w\nDSUEZNGrmwf64VZYijfm6gs+3EWiINyhWCF9uRORN5NuNquHvDhGHCOc2EnzgYIe\nuYgBP0R6X4phJjS26u8mvMO6qSnKd4wRrOf9ZU73L1VTmhMItshVxH2tuhKurkMV\njWDAjWeJfycWe4JVgYxM4GA6g5kKi5nrkhpVEsklh1FJZn65U0aWXUpHAm2ihhKf\nFq9FgC+8Xz8UAtf8JYbAW3D1E/0lRZuLt+5cosK8b2+9CIUNRjYMtyXlbI0RGwl9\nFO/9sv05AoGBAP0jfp8qUqf4u4pkE1W2SzzbQ6oYKYHTMiORVHi2qysgrxAZFKGj\nfW7c7UTpxlCaqqDBRQA+lZH16xVD3idwYvmw/9AKxSozxe3wKbQFRM+XYHc7la+2\nTiQiJgjflEadSa57FNgBB7SpeEzaIfmGBYWJXkM+6wuaGUz5qZs/SFJNAoGBAOLb\nOuh7CWTk5oISVBfqxnwFEpaMHT5vpzNBwUWUVMhrxNZP3OVSN++qKxpJhCF/M2no\nOdxX7CYkrGvHFTvV9WKpa0kYQGms+ybyoMOYxJax8rV+Zq9gg2QKwaakoJljaAlX\n5yUuy32YhLxWodQhE7mlhAUyXIuNLVuYee0Y2ZVzAoGAaV6tBnQHlAPljOW7ZqJL\nDzn2IIeOP4w6ArQsBVOETJ9+P6UxAVecjtlHqrfk5Qh8ng3VOxTSDb/f6yok/yW5\nDVawJVlWWQrUCQc/VMActIy+iuMym8G3JTNRwb/PaNVwJkD1nDRRkNI6UUM7gTJY\neg2EP1mhXWL3xSLnhsgAwsECgYEAqnm2xfeXsqM0+bAOU77RE2e4dTuryjybeDBE\nriXupIIf9DElvYrQkCDfrSxrx8RP/ZlOyd+kjXFnxMJhmYqKkW7hOZeo6ADe54DT\nAMmvidMFog/v2ID9m9NdfP4f1cTW7JaLE+0bbDGOJf4wNDn7GbphAIq88v3PhRKL\nJXpUIDMCgYEA2P7D/oZu+dEPW8JhUsDDXY238ZDbQzWBi6n1uUnMJCnUABd/mvuV\nILR/iSBHmt9UdH2YECwry58xFjhXwfTvPc155PiJddjENGFUqohjl0wh0VzLEyfF\nVb6iVMIdrycD/O4U26I3Qco2lQYPoPgrBkAGJ5/GCjkTiL0JssoMXa4=\n-----END RSA PRIVATE KEY-----"

  - `service` (string, required)
    The service on which to install the SSL certificate.

* ftp
* exim
* dovecot
* cpanel

Important:

You must restart the selected service after you install a new SSL certificate.
    Enum: "ftp", "exim", "dovecot", "cpanel"

  - `cabundle` (string)
    The certificate's Certificate Authority (CA) bundle.

Note:

You must URI-encode this value.
    Example: "-----BEGIN CERTIFICATE-----\nMIIE3f4g5h7j73f235gy54hvcNAQELBQAwgYYxEDAOBgNVBAcMB2hvd097342boi0w389w0BCQEWEmMubGFycnl8293rhqurpg9qfgm5ldDEOMAwGA1UECAwFdGV4YXMxCzAJBgNVBAYTAlVTMSEwHwYDVQQDDBhiaW5hcnlhZ2Fpbi5jcGFuZWwubmluamExDzANBgNVBAoMBmNwYW5lbDAeFw0yMDA1MTgxODQ3NTFaFw0yMTA1MTgxODQ3NTFaMIGGMRAwDgYDVQQHDAdob3VzdG9uMSEwHwYJKoZIhvcNAQkBFhJjLmxhcnJ5QGNwYW5lbC5uZXQxDjAMBgNVBAgMBXRleGFzMQswCQYDVQQGEwJVUzEhMB8GA1UEAwwYYmluYXJ5YWdhaW4uY3BhbmVsLm5pbmphMQ8wDQYDVQQKDAZjcGFuZWwwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC3i1fOlIUoURJf4BkMgoVvCeq5GZjzuCl6WXzz5WsADYUl84UzgXJIWtwBoTc2l32zyeWkIAkM/eNR12YMb0kXbgihbZtEsH0XimqcXmtiicoM3tjBi6u0cDEFr8TMdI396oArnnTc0CASfdXUGGtReZ6vOwxXOPPK5nYCvyFqBl1n0pQ2AV/Co9/WwhOCvV/Bm9aTzueZrbYB/9uW31LOpjs+0s1QNGHv6PTvH8HZFW/7Z9M3gSwUxfOOOQHEiiHRWfb/UqcTZZxjZhfY/IN6/SOsc3Z2t2KmQ5XI6ijCrjjJeaZSQYsge8LpHskr8G3WeTV9M9+1YnI7GRqs3+GdAgMBAAGjggEsMIIBKDAdBgNVHQ4EFgQUYWWThQj2tRL5PNkdPhUJdqEIcrswCQYDVR0TBAIwADCBtwYDVR0jBIGvMIGsgBRhZZOFCPa1Evk82R0+FQl2oQhyu6GBjKSBiTCBhjEQMA4GA1UEBwwHaG91c3RvbjEhMB8GCSqGSIb3DQEJARYSYy5sYXJyeUBjcGFuZWwubmV0MQ4wDAYDVQQIDAV0ZXhhczELMAkGA1UEBhMCVVMxITAfBgNVBAMMGGJpbmFyeWFnYWluLmNwYW5lbC5uaW5qYTEPMA0GA1UECgwGY3BhbmVsggUCGG94JTAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwIwYDVR0RBBwwGoIYYmluYXJ5YWdhaW4uY3BhbmVsLm5pbmphMA0GCSqGSIb3DQEBCwUAA4IBAQBhKmds+XDTycHc2bsSH+zDkWIw58+J26Re9Q9VnUcrSKtV3mmtW88r8FuEHEZdAOzFPTJ3Tdd1fha15wuS5dzOV+bCRrDTvJmD4vRPkQ5TSdyJgpIjpjwiOP1+ZwaF7xZ+FLMTcEl8SXM+lkoKEUQpHFKyQ0zGIaLCVt0QyXx16lesPMgPeb/KRXJPy7ZrUtyF0z0LgvOSDGNsGt4rD8FVgtdHRlMJf/XIoFeV5Zk+rHNoCXIQXh4nBzM8X2r3IrQ1Qh0Z3njN2Ld8ZUlxsWctlLzvzmjARzIzvbglO3wod5XoRLS+fU6oVyQ9yuQLGG6r6Y7iBYSHfAO8e0pLkp7G\n-----END CERTIFICATE-----"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.certificate` (string)
    The SSL certificate's contents.
    Example: "-----BEGIN CERTIFICATE-----\nMIIE3f4g5h7j73f235gy54hvcNAQELBQAwgYYxEDAOBgNVBAcM\nB2hvd097342boi0w389w0BCQEWEmMubGFycnl8293rhqurpg9qfgm5ldDEOMAwG\nA1UECAwFdGV4YXMxCzAJBgNVBAYTAlVTMSEwHwYDVQQDDBhiaW5hcnlhZ2Fpbi5j\ncGFuZWwubmluamExDzANBgNVBAoMBmNwYW5lbDAeFw0yMDA1MTgxODQ3NTFaFw0y\nMTA1MTgxODQ3NTFaMIGGMRAwDgYDVQQHDAdob3VzdG9uMSEwHwYJKoZIhvcNAQkB\nFhJjLmxhcnJ5QGNwYW5lbC5uZXQxDjAMBgNVBAgMBXRleGFzMQswCQYDVQQGEwJV\nUzEhMB8GA1UEAwwYYmluYXJ5YWdhaW4uY3BhbmVsLm5pbmphMQ8wDQYDVQQKDAZj\ncGFuZWwwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC3i1fOlIUoURJf\n4BkMgoVvCeq5GZjzuCl6WXzz5WsADYUl84UzgXJIWtwBoTc2l32zyeWkIAkM/eNR\n12YMb0kXbgihbZtEsH0XimqcXmtiicoM3tjBi6u0cDEFr8TMdI396oArnnTc0CAS\nfdXUGGtReZ6vOwxXOPPK5nYCvyFqBl1n0pQ2AV/Co9/WwhOCvV/Bm9aTzueZrbYB\n/9uW31LOpjs+0s1QNGHv6PTvH8HZFW/7Z9M3gSwUxfOOOQHEiiHRWfb/UqcTZZxj\nZhfY/IN6/SOsc3Z2t2KmQ5XI6ijCrjjJeaZSQYsge8LpHskr8G3WeTV9M9+1YnI7\nGRqs3+GdAgMBAAGjggEsMIIBKDAdBgNVHQ4EFgQUYWWThQj2tRL5PNkdPhUJdqEI\ncrswCQYDVR0TBAIwADCBtwYDVR0jBIGvMIGsgBRhZZOFCPa1Evk82R0+FQl2oQhy\nu6GBjKSBiTCBhjEQMA4GA1UEBwwHaG91c3RvbjEhMB8GCSqGSIb3DQEJARYSYy5s\nYXJyeUBjcGFuZWwubmV0MQ4wDAYDVQQIDAV0ZXhhczELMAkGA1UEBhMCVVMxITAf\nBgNVBAMMGGJpbmFyeWFnYWluLmNwYW5lbC5uaW5qYTEPMA0GA1UECgwGY3BhbmVs\nggUCGG94JTAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwIwYDVR0RBBww\nGoIYYmluYXJ5YWdhaW4uY3BhbmVsLm5pbmphMA0GCSqGSIb3DQEBCwUAA4IBAQBh\nKmds+XDTycHc2bsSH+zDkWIw58+J26Re9Q9VnUcrSKtV3mmtW88r8FuEHEZdAOzF\nPTJ3Tdd1fha15wuS5dzOV+bCRrDTvJmD4vRPkQ5TSdyJgpIjpjwiOP1+ZwaF7xZ+\nFLMTcEl8SXM+lkoKEUQpHFKyQ0zGIaLCVt0QyXx16lesPMgPeb/KRXJPy7ZrUtyF\n0z0LgvOSDGNsGt4rD8FVgtdHRlMJf/XIoFeV5Zk+rHNoCXIQXh4nBzM8X2r3IrQ1\nQh0Z3njN2Ld8ZUlxsWctlLzvzmjARzIzvbglO3wod5XoRLS+fU6oVyQ9yuQLGG6r\n6Y7iBYSHfAO8e0pLkp7G\n-----END CERTIFICATE-----"

  - `data.certificate_info` (object)
    An object containing the service's certificate information.

  - `data.certificate_info.domains` (array)
    A list of domains that correspond to the certificate.
    Example: ["example.com"]

  - `data.certificate_info.ecdsa_curve_name` (string,null)
    The ECDSA curve that the certificate's key uses.

* prime256v1
* secp384r1
* null — The certificate's key is not an ECDSA key.
    Enum: "prime256v1", "secp384r1"

  - `data.certificate_info.ecdsa_public` (string,null)
    The certificate's key's ECDSA compressed public point, in hexadecimal format.

* null — The certificate's key is not an ECDSA key.

  - `data.certificate_info.is_self_signed` (integer)
    Whether the certificate is self-signed.

* 1 — Self-signed.
* 0 — Not self-signed.
    Enum: 1, 0

  - `data.certificate_info.issuer.commonName` (string,null)
    The certificate's Common Name.
    Example: "example.com"

  - `data.certificate_info.issuer.organizationName` (string)
    The certificate's Organization Name.
    Example: "Organization"

  - `data.certificate_info.issuer_text` (string)
    The certificate's issuer information.
    Example: "localityName\ncity\nemailaddress\nc.example@example.com\nstateOrProvinceName\nstate\ncountryName\nUS\ncommonName\nhostname\norganizationName\ncpanel"

  - `data.certificate_info.key_algorithm` (string)
    The certificate's key's algorithm.

* rsaEncryption — RSA.
* id-ecPublicKey — ECDSA.
    Enum: "rsaEncryption", "id-ecPublicKey"

  - `data.certificate_info.modulus` (string,null)
    The certificate's key's modulus, in hexadecimal format.

* null — The certificate's key is not an RSA key.
    Example: "a673c3b17344664b35f8791f562d3aea6bf4d8faa3ae3fc0a519380fd453964a36677c34d48677ecb7f5ed035df026f5f0f8fbfe21745e52daf1f3b9e58c73f0baefdb709320e2202e7d05250b051a59b30ff1fef22d83d7140c1c81cea314a0890ce8d2226799872181c58a74016c7aaa2cff5ac72b575cecde8f304aa572a2ea03d8b173ab76c6e8cdb9dfd0da81e1119cefd4b8b4dbfbe0e46c7f1ee2fe8b5fd5504e58ccbc0d13b4fa41ecc9ebd0dabe1d1fec5c724f748167e7c0553e997f9b77eb36abce70973f06df151748d41b758de3efd7afa6f2464a1547f5ff158469d96e248be464df9eda0e7ce854a89332a2c1278b17c425368a9604f454db"

  - `data.certificate_info.modulus_length` (integer)
    The certificate's key's modulus size, in bits.

* null — The certificate's key is not an RSA key.
    Example: 2048

  - `data.certificate_info.not_after` (integer)
    The date the certificate expires.
    Example: 1601467200

  - `data.certificate_info.not_before` (integer)
    The certificate's validation date.
    Example: 1601467200

  - `data.certificate_info.signature_algorithm` (string)
    The certificate's OID hash algorithm signature.
    Example: "sha256WithRSAEncryption"

  - `data.certificate_info.validation_type` (string,null)
    The certificate's validation type.

* ev — Extended Validation.
* ov — Organization Validation.
* dv — Domain Validation.
* null — The certificate does not match one of the system’s recognized validation types.
    Enum: "ev", "ov", "dv"

  - `data.service` (string)
    The service that the certificate corresponds to.

* ftp
* exim
* dovecot
* cpanel
    Enum: "ftp", "exim", "dovecot", "cpanel"

  - `data.service_description` (string)
    The service's description.
    Example: "Calendar, cPanel, WebDisk, Webmail, and WHM Services"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "install_service_ssl_certificate"

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


