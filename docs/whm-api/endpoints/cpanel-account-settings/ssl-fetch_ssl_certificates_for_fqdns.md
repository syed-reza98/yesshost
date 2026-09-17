# Return cPanel account FQDN certificate information

This function retrieves the certificate information for all fully qualified domain names (FQDNs) that the account owns.

Endpoint: GET /fetch_ssl_certificates_for_fqdns
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `domains` (string, required)
    A comma-separated list of domains for which to retrieve information.

Note:

For browser-based calls, you must URI-encode each comma (%2C).

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    Information about the certificate.

  - `data.payload.cab` (string,null)
    The CA bundle's contents.
    Example: "-----BEGIN CERTIFICATE-----\nMIIDYzCCAkugAwJBAgIFAamFDR8wDQYJKoZIhvcNAQELBQAwFDESMBAGA1UEAwwJ\nc2lza28udGxkMB4XDTE5MDYyNjE1MDYxNVoXDTIwMDYyNTE1MDYxNVowFDESMBAG\nA1UEAwwJc2lza28udGxkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\nq0wqPMMP8Q6RiRXe57UXExg3PeAAd00xxFRr6pMwPZtWrkcoYV0kfHEZ7nJmD6Bd\nUnuXrDqTb1z78CeqUFt5+ZQtjGt55CjPFaUkHbNErZm2l8bKB6sjnETZ7ee4AXx/\nmaf/jhgZ0o4SMAS5h87NOoF5yg/Y0tnuncpu/RyzeXzJLxy0Mn0WMGm2w5sXSH4l\n4oaGLorGWyDUfQPjwAwcQsVi97FZ7zElRru//jJ/tqijVLELv1AWudJkuZnJJmKW\nCvkT6YpIIB8UVwbTgnFuZ86Us2Yfe17pMatAVJV8MAbRym3Z4rmWmZr1xrTdoS+L\nSwz4kCffBY5psDRp/WRqAQIDAQABo4G7MIG4MB0GA1UdDgQWBBT22CZM+khxmDvi\nF5LbZVtqm20y8TAfBgNVHSMEGDAWgBT22CZM+khxmDviF5LbZVtqm20y8TAJBgNV\nHRMEAjAAMGsGA1UdEQRkMGKCCXNpc2tvLnRsZIIObWFpbC5zaXNrby50bGSCDXd3\ndy5zaXNrby50bGSCEXdlYm1haWwuc2lza28udGxkghBjcGFuZWwuc2lza28udGxk\nghF3ZWJkaXNrLnNpc2tvLnRsZDANBgkqhkiG9w0BAQsFAAOCAQEAWDXl/WRLHPxa\nnvziWJIcM8jkSxaaUKbRPsow1XVDj3HjpDYbKkYBLfZlmaDmeU6SnmGKFYi0wSDw\n+WkK97ja3+ONHFRlYHO2dHoQrxklrqOqyV2KB0HB6YgHCl9A2b6feC31Zly2i6jc\n3SWEpYIQHecRnELc6WKkfqm0oTJZH0h7Da4WgR10Myi3GE799g0xMO/KCxPF2mDS\n6Ukr/bez9a07zCODrf4o91PrCc7r85dZq8jt02wtGMPg+zvr3FfcVPFaPZ1Oppsx\nrUNVz5W/TqdtxZhr9J5PBpSMNiNnKq88KV1zqIJiNsk9qGJbt5mQQpK0enpKqkmr\nETgwb3sSbw==\n-----END CERTIFICATE-----"

  - `data.payload.created` (integer)
    The date the certificate was created.
    Example: 1538308800

  - `data.payload.crt` (string)
    The certificate's contents.
    Example: "-----BEGIN CERTIFICATE-----\nMIIDYzCCAkugAwIBAgIFAamFDR8wDQYJKoZIhvcNAQELBQAwFDESMBAGA1UEAwwJ\nc2lza28udGxkMB4XDTE5MDYyNjE1MDYxNVoXDTIwMDYyNTE1MDYxNVowFDESMBAG\nA1UEAwwJc2lza28udGxkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\nq0wqPMMP8Q6RiRXe57UXExg3PeAAd00xxFRr6pMwPZtWrkcoYV0kfHEZ7nJmD6Bd\nUnuXrDqTb1z78CeqUFt5+ZQtjGt55CjPFaUkHbNErZm2l8bKB6sjnETZ7ee4AXx/\nmaf/jhgZ0o4SMAS5h87NOoF5yg/Y0tnuncpu/RyzeXzJLxy0Mn0WMGm2w5sXSH4l\n4oaGLorGWyDUfQPjwAwcQsVi97FZ7zElRru//jJ/tqijVLELv1AWudJkuZnJJmKW\nCvkT6YpIIB8UVwbTgnFuZ86Us2Yfe17pMatAVJV8MAbRym3Z4rmWmZr1xrTdoS+L\nSwz4kCffBY5psDRp/WRqAQIDAQABo4G7MIG4MB0GA1UdDgQWBBT22CZM+khxmDvi\nF5LbZVtqm20y8TAfBgNVHSMEGDAWgBT22CZM+khxmDviF5LbZVtqm20y8TAJBgNV\nHRMEAjAAMGsGA1UdEQRkMGKCCXNpc2tvLnRsZIIObWFpbC5zaXNrby50bGSCDXd3\ndy5zaXNrby50bGSCEXdlYm1haWwuc2lza28udGxkghBjcGFuZWwuc2lza28udGxk\nghF3ZWJkaXNrLnNpc2tvLnRsZDANBgkqhkiG9w0BAQsFAAOCAQEAWDXl/WRLHPxa\nnvziWJIcM8jkSxaaUKbRPsow1XVDj3HjpDYbKkYBLfZlmaDmeU6SnmGKFYi0wSDw\n+WkK97ja3+ONHFRlYHO2dHoQrxklrqOqyV2KB0HB6YgHCl9A2b6feC31Zly2i6jc\n3SWEpYIQHecRnELc6WKkfqm0oTJZH0h7Da4WgR10Myi3GE799g0xMO/KCxPF2mDS\n6Ukr/bez9a07zCODrf4o91PrCc7r85dZq8jt02wtGMPg+zvr3FfcVPFaPZ1Oppsx\nrUNVz5W/TqdtxZhr9J5PBpSMNiNnKq88KV1zqIJiNsk9qGJbt5mQQpK0enpKqkmr\nETgwb3sSbw==\n-----END CERTIFICATE-----"

  - `data.payload.domains` (array)
    The domains that the CSR covers.
    Example: ["example.servername.com","example.com","mail.example.com","www.example.com","www.example.servername.com"]

  - `data.payload.ecdsa_curve_name` (string,null)
    The ECDSA curve that the certificate's key uses.

* prime256v1
* secp384r1
* null — The certificate's key is not an ECDSA key.
    Enum: "prime256v1", "secp384r1"

  - `data.payload.ecdsa_public` (string,null)
    The certificate's key's ECDSA compressed public point, in hexadecimal format.

* null — The certificate's key is not an ECDSA key.

  - `data.payload.friendly_name` (string)
    The certificate's friendly name.
    Example: "example.com"

  - `data.payload.id` (string)
    The certificate's identification.
    Example: "example_servername_com_ce52d_6e643_2813308004_119580f9b01960cjones72bc519206bc"

  - `data.payload.is_self_signed` (integer)
    Whether the certificate is self-signed.

* 1 — Self-signed.
* 0 — Not self-signed.
    Enum: 1, 0

  - `data.payload.issuer.commonName` (string)
    The certificate's Common Name.
    Example: "example.servername.com"

  - `data.payload.issuer.organizationName` (string)
    The certificate's Organization Name.
    Example: "Organization"

  - `data.payload.key` (string)
    The private key's text.
    Example: "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAq0wqPMMP8Q6RiRXe57UXExg3PeAAd00xxFRr6pMwPZtWrkco\nYV0kfHEZ7nJmD6BdUnuXrDqTb1z78CeqUFt5+ZQtjGt55CjPFaUkHbNErZm2l8bK\nB6sjnETZ7ee4AXx/maf/jhgZ0o4SMAS5h87NOoF5yg/Y0tnuncpu/RyzeXzJLxy0\nMn0WMGm2w5sXSH4l4oaGLorGWyDUfQPjwAwcQsVi97FZ7zElRru//jJ/tqijVLEL\nv1AWudJkuZnJJmKWCvkT6YpIIB8UVwbTgnFuZ86Us2Yfe17pMatAVJV8MAbRym3Z\n4rmWmZr1xrTdoS+LSwz4kCffBY5psDRp/WRqAQIDAQABAoIBABR96A+cxitwMrjT\nhPbzEu+V1gXw5h1ffrSd5MsLEJpOGvB+UrZTDipU3WVJCiyUYpWbc2mHGFwaI4l3\nNUinqM/SiiBiOxKwTxWny8pBx9V8rfs6LLD+KCRpmCh9r+V9n0Yics/s0in+FO7p\nocg9VQ/KrWcevjF7ILB/pwdgh5fgw3lFf1Dp3eRG2LLh+ZuY+Q2pYkMrJhSQ0H/f\nTpuYLtZ+6tGzDvnorDJZ4H6kj+7J4UXIXWSxQe0m+hkPe/YU9e9zt4vaiHSu21PC\nNKxnmBASgnLP/0lKPGzTNhc7G4HkssfqYJ1l2W+mH2sFiQKee45EQkyhcFInDzwu\ng47CIoECgYEA3/OPyAEb4WJ1NIC+1tUunUZLC18FDwO2EqoJ2adblRkG2q8DzUPg\npzQpMEo07dwVXedN7TBehl8cN1sfBfmHdznCsW6zNbZ4481hucle1fXx0/05Hajj\n/A/w3NBxjPa45Zlu6Xcot/qy7mONz+xy/oubDI8BnXxJmHIywtsFhlcCgYEAw8+i\nEAhULx5B7hcmCBruuox6stNDleoAAxuaexylvQS5Q9Kse4cEA/ti7PF5b8kDmIH4\nb6JRenaiFmFNJTbAmwQY5iaobulpEA948H6uI7A2Al3NVJacLSmTod58I5ERsDhn\nJoBAtjZuVCZjAOalnyPC4gyFcPY4O7dJwmQDa2cCgYEAsxj6ZG2WmWF+7/UCKZal\nR7ueakKcLgy+wCBh7kFr+UnhdGPAe5iMAcuyIN9Hgu2d3NINPOGQxo8rZo2lusZ6\ncnur2u/3u73o4e0u+UA0apHcyrbYxYJ6iOtKqZy9IolxBpT04RqdYrzH+eN91sl2\nkWCeJ6X6GbL6vEKfm7tCqNMCgYALyW7e+jFfGLotQ9V1PXHLZvNn2lHCL3DKvxmg\neYv8gdFJJOBfGzSBrNs6mhqOQRJnVsOGrMWs0oFVSYwkRlR3wFpjWEZhTsmVPukv\nyOBgo5XMtKrMgbhq+4q4frUISw4+hlanOacrkME5bYoeHsQvfS6Y/tn1f8zIw3K8\nMdsG1wKBgQCFPy/bzPSVV9PI+IVAlOYlbtfTCAQGQ3jG44e1b5wkwm6Di0p44kr4\n5wi4Bxy+NuCDEIksTuo2/ZtjFlrBu233mQImqZp6b5uTeB27vwAxiX55pqsU4gme\neFdttHhA6s5/wOx9E3JRFI1ucerieUROQC+bt6NLvSu7V+amdgn7bw==\n-----END RSA PRIVATE KEY-----"

  - `data.payload.key_algorithm` (string)
    The certificate's key's algorithm.

* rsaEncryption — RSA.
* id-ecPublicKey — ECDSA.
    Enum: "rsaEncryption", "id-ecPublicKey"

  - `data.payload.modulus` (string,null)
    The certificate's key's modulus, in hexadecimal format.

* null — The certificate's key is not an RSA key.
    Example: "ab4c2a3cc30ff10e918915dee7b5171318373de000774d31c4546bea93303d9b56ae4728615d247c7119ee72660fa05d527b97ac3a936f5cfbf027aa505b79f9942d8c6b79e428cf15a5241db344ad99b697c6ca07ab239c44d9ede7b8017c7f99a7ff8e1819d28e123004b987cecd3a8179ca0fd8d2d9ee9dca6efd1cb3797cc92f1cb4327d163069b6c39b17487e25e286862e8ac65b20d47d03e3c00c1c42c562f7b159ef312546bbbffe327fb6a8a354b10bbf5016b9d264b999c92662960af913e98a48201f145706d382716e67ce94b3661f7b5ee931ab4054957c3006d1ca6dd9e2b996999af5c6b4dda12f8b4b0cf89027df058e69b03469fd646a01"

  - `data.payload.modulus_length` (integer,null)
    The certificate's key's modulus length.

* null — The certificate's key is not an RSA key.
    Example: 2048

  - `data.payload.not_after` (integer)
    The date the certificate expired.
    Example: 1569844800

  - `data.payload.not_before` (integer)
    The date the certificate started.
    Example: 1538308800

  - `data.payload.signature_algorithm` (string)
    The certificate's OID hash algorithm signature.
    Example: "sha256WithRSAEncryption"

  - `data.payload.subject.commonName` (string)
    The certificate's Common Name.
    Example: "example.com"

  - `data.payload.users` (array)
    A list of cPanel account owners.
    Example: ["username"]

  - `data.payload.validation_type` (string,null)
    The certificate's validation type.

* ev — Extended Validation.
* ov — Organization Validated.
* dv — Domain Validated.
* null — The system could not parse and determine the
certificate's validation type.
    Enum: "ev", "ov", "dv"

  - `data.payload.verify_error` (string)
    An error message that explains the reason for a verification error.
    Example: "DEPTH_ZERO_SELF_SIGNED_CERT"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "fetch_ssl_certificates_for_fqdns"

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


