# Return system services and associated certificates

This function lists the system's services and their associated certificates.

Endpoint: GET /fetch_service_ssl_components
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.services` (array)
    An array of objects containing the certificate information for each service.

  - `data.services.cabundle` (string)
    The Certificate Authority (CA) information.

This function returns an empty string if no CA bundle exists
for the certificate.

  - `data.services.certificate` (string)
    The SSL certificate's contents.
    Example: "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgIEW7p6xzANBgkqhkiG9w0BAQUFADCBnTELMAkGA1UEBhMC\nVVMxEDAOBgNVBAgMB1Vua25vd24xEDAOBgNVBAcMB1Vua25vd24xEDAOBgNVBAoM\nB1Vua25vd24xEDAOBgNVBAsMB1Vua25vd24xHTAbBgNVBAMMFGphc29uLmRldi5j\ncGFuZWwubmV0MScwJQYJKoZIhvcNAQkBFhhzc2xAamFzb24uZGV2LmNwYW5lbC5u\nZXQwHhcNMTMwNDI5MjEwNDU5WhcNMTQwNDI5MjEwNDU5WjCBnTELMAkGA1UEBhMC\nVVMxEDAOBgNVBAgMB1Vua25vd24xEDAOBgNVBAcMB1Vua25vd24xEDAOBgNVBAoM\nB1Vua25vd24xEDAOBgNVBAsMB1Vua25vd24xHTAbBgNVBAMMFGphc29uLmRldi5j\ncGFuZWwubmV0MScwJQYJKoZIhvcNAQkBFhhzc2xAamFzb24uZGV2LmNwYW5lbC5u\nZXQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCmc8Oxc0RmSzX4eR9W\nLTrqa/TY+qOuP8ClGTgP1FOWSjZnfDTUhnfst/XtA13wJvXw+Pv+IXReUtrx87nl\njHPwuu/bcJMg4iAufQUlCwUaWbMP8f7yLYPXFAwcgc6jFKCJDOjSImeZhyGBxYp0\nAWx6qiz/WscrV1zs3o8wSqVyouoD2LFzq3bG6M2539DageERnO/UuLTb++DkbH8e\n4v6LX9VQTljMvA0TtPpB7Mnr0Nq+HR/sXHJPdIFn58BVPpl/m3frNqvOcJc/Bt8V\nF0jUG3WN4+/Xr6byRkoVR/X/FYRp2W4ki+Rk357aDnzoVKiTMqLBJ4sXxCU2ipYE\n9FTbAgMBAAGjUDBOMB0GA1UdDgQWBBSiMwrIK+JMVx8ufKnfByp3V+ycoTAfBgNV\nHSMEGDAWgBSiMwrIK+JMVx8ufKnfByp3V+ycoTAMBgNVHRMEBTADAQH/MA0GCSqG\nSIb3DQEBBQUAA4IBAQAdL/oywZw+EMwNGf/e1JqjXull/fgoNMZHxsBwQb2smZuN\nKoTlkf2zDO7yTTIUnrBP1TveIlAejDLMMR7yqVgmDrVM/pl4WQjL/APbrWGExsE8\nJeEu+DjOIEveOVTTXCwaVo8ck2JO3QWZwPeRUZBwifZOfaYa8gwpdcUy8Tu/HX9T\nxsOLv/vQar8JC4Obh5eFrMBp87Obf1m/2Kmpaj9PGQQiiq+HU3r4dZf24bLGESr/\nvPXIfInwZ0Fr4G+OzwDqPgI9nCm13myZ+ZBybL64pp741ReRP1dHQGYnwtht/Dh4\n/vFZEL9Wv/18E4lUCJjMgBIknjWkyt6FtygmB1DS\n-----END CERTIFICATE-----"

  - `data.services.certificate_info` (object)
    An object containing certificate information data.

  - `data.services.certificate_info.domains` (array)
    The domains that correspond to the certificate.
    Example: ["example.com"]

  - `data.services.certificate_info.ecdsa_curve_name` (string,null)
    The ECDSA curve that the certificate's key uses.

* prime256v1
* secp384r1
* null — The certificate's key is not an ECDSA key.
    Enum: "prime256v1", "secp384r1"

  - `data.services.certificate_info.ecdsa_public` (string,null)
    The certificate's key's ECDSA compressed public point, in hexadecimal format.

* null — The certificate's key is not an ECDSA key.

  - `data.services.certificate_info.is_self_signed` (integer)
    Whether the certificate is self-signed.

* 1 — Self-signed.
* 0 — Not self-signed.
    Enum: 1, 0

  - `data.services.certificate_info.issuer.commonName` (string)
    The certificate's Common Name.
    Example: "example.com"

  - `data.services.certificate_info.issuer.organizationName` (string)
    The certificate's Organization Name.
    Example: "Writer's Guild of America"

  - `data.services.certificate_info.issuer_text` (string)
    Information about the issuer.
    Example: "countryName\nUS\nstateOrProvinceName\nUnknown\nlocalityName\nUnknown\norganizationName\nUnknown\norganizationalUnitName\nUnknown\ncommonName\nexample.com\nemailAddress\ntest@example.com"

  - `data.services.certificate_info.key_algorithm` (string)
    The certificate's key's algorithm.

* rsaEncryption — RSA.
* id-ecPublicKey — ECDSA.
    Enum: "rsaEncryption", "id-ecPublicKey"

  - `data.services.certificate_info.modulus` (string,null)
    The certificate's key's modulus, in hexadecimal format.

* null — The certificate's key is not an RSA key.

  - `data.services.certificate_info.modulus_length` (integer,null)
    The certificate's modulus size.

* null — The certificate's key is not an RSA key.

  - `data.services.certificate_info.not_after` (integer)
    The date the certificate expires.
    Example: 1601467200

  - `data.services.certificate_info.not_before` (integer)
    The certificate's validation date.
    Example: 1569844800

  - `data.services.key` (string)
    The certificate's private key.
    Example: "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEA4FIdZcIKVK5+PtdzVm4CN45BXG5wX7KZ1/dP84MGIwtwxkkX\nhBqw7BawbHlexYXuarSnrHA8hm6RRxv/fRy+zOeg7y8v5CWG52m91GK7qSLxpruY\ngCJGJEK8fj6spbbLjxNd5XAmDwT80uMsq/3E9rGmg/ELY9X9vn5WlErRfi2Qjsiq\nx7AYUvcIkBHPOlRWzZgx2KjMjBU2U0w2RCUjgKgww/6xx2ccnTvn7HGvVjQMkh+1\nUYCdGvT8fR2qJBKHZ5Cjdfc9N304qZCqYMhcrHX2gJqc+9zLtLk7PoEYXu17l6nU\nO3C/IdzBXYWu+UoMzpZ5tc5jKRA3+I7ggKjJlwIDAQABAoIBAQDR4GI648qQolXh\n6+iws+qFGibTGU0wbET+SBjYx/0E6t5P1vEWm3Zu3WehhgkCm6WO1omOj9BBIs/w\nDSUEZNGrmwf64VZYijfm6gs+3EWiINyhWCF9uRORN5NuNquHvDhGHCOc2EnzgYIe\nuYgBP0R6X4phJjS26u8mvMO6qSnKd4wRrOf9ZU73L1VTmhMItshVxH2tuhKurkMV\njWDAjWeJfycWe4JVgYxM4GA6g5kKi5nrkhpVEsklh1FJZn65U0aWXUpHAm2ihhKf\nFq9FgC+8Xz8UAtf8JYbAW3D1E/0lRZuLt+5cosK8b2+9CIUNRjYMtyXlbI0RGwl9\nFO/9sv05AoGBAP0jfp8qUqf4u4pkE1W2SzzbQ6oYKYHTMiORVHi2qysgrxAZFKGj\nfW7c7UTpxlCaqqDBRQA+lZH16xVD3idwYvmw/9AKxSozxe3wKbQFRM+XYHc7la+2\nTiQiJgjflEadSa57FNgBB7SpeEzaIfmGBYWJXkM+6wuaGUz5qZs/SFJNAoGBAOLb\nOuh7CWTk5oISVBfqxnwFEpaMHT5vpzNBwUWUVMhrxNZP3OVSN++qKxpJhCF/M2no\nOdxX7CYkrGvHFTvV9WKpa0kYQGms+ybyoMOYxJax8rV+Zq9gg2QKwaakoJljaAlX\n5yUuy32YhLxWodQhE7mlhAUyXIuNLVuYee0Y2ZVzAoGAaV6tBnQHlAPljOW7ZqJL\nDzn2IIeOP4w6ArQsBVOETJ9+P6UxAVecjtlHqrfk5Qh8ng3VOxTSDb/f6yok/yW5\nDVawJVlWWQrUCQc/VMActIy+iuMym8G3JTNRwb/PaNVwJkD1nDRRkNI6UUM7gTJY\neg2EP1mhXWL3xSLnhsgAwsECgYEAqnm2xfeXsqM0+bAOU77RE2e4dTuryjybeDBE\nriXupIIf9DElvYrQkCDfrSxrx8RP/ZlOyd+kjXFnxMJhmYqKkW7hOZeo6ADe54DT\nAMmvidMFog/v2ID9m9NdfP4f1cTW7JaLE+0bbDGOJf4wNDn7GbphAIq88v3PhRKL\nJXpUIDMCgYEA2P7D/oZu+dEPW8JhUsDDXY238ZDbQzWBi6n1uUnMJCnUABd/mvuV\nILR/iSBHmt9UdH2YECwry58xFjhXwfTvPc155PiJddjENGFUqohjl0wh0VzLEyfF\nVb6iVMIdrycD/O4U26I3Qco2lQYPoPgrBkAGJ5/GCjkTiL0JssoMXa4=\n-----END RSA PRIVATE KEY-----"

  - `data.services.service` (string)
    The service that the certificate corresponds to.

* ftp
* exim
* dovecot
* cpanel
    Enum: "ftp", "exim", "dovecot", "cpanel"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "fetch_service_ssl_components"

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


