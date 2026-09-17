# Create self-signed SSL certificate for service

This function regenerates a self-signed SSL certificate and assigns it to a service.

Endpoint: GET /reset_service_ssl_certificate
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `service` (string, required)
    The service.

* ftp - The ftp service.
* exim - The exim service.
* dovecot - The dovecot service.
* cpanel - The cpanel service.
    Enum: "ftp", "exim", "dovecot", "cpanel"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.certificate` (string)
    The SSL certificate's contents.
    Example: "-----BEGIN CERTIFICATE-----\nMIIDWzCCAkOgAwIBAgIFAiil8fgwDQYJKoZIhvcNAQELBQAwRjEcMBoGA1UEAwwT\ndm01LmRvY3MuY3BhbmVsLm5ldDEmMCQGCSqGSIb3DQEJARYXc3NsQHZtNS5kb2Nz\nLmNwYW5lbC5uZXQwHhcNMTQxMTI0MTg0NDE5WhcNMTUxMTI0MTg0NDE5WjBGMRww\nGgYDVQQDDBN2bTUuZG9jcy5jcGFuZWwubmV0MSYwJAYJKoZIhvcNAQkBFhdzc2xA\ndm01LmRvY3MuY3BhbmVsLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBAKYsBFQaqfz9ggP2uw+Vm4196hDlgZtx/A7cN7ktDkCzztxpQ1Us6zty0DPB\nKm6aMhi8tvfO1/DU8+L2ybmgXXmAvhMjEdBYtiMd7rUVAo4zuPOzwABJzfTq46Wk\ntQiuT9TZ+051ixFLRyz58ke0jAqqQugeZK1d5q1m82lUow3LU3oPhtYiR31ROU4g\nHt1/p+okMf3T21Bl6lLXQf8EVwUL8c0zrRsLYlhIFGyedaVqoZ47anGFc0U0ZJzw\nBOXnmxbYZY+pExXiNZpxTjUDKgtLvY8CjrHjNgVXSL9S7J8Src4/l7SvKoRjnAit\nKsMh6d/nTC4bukX5FGBph9anoFcCAwEAAaNQME4wHQYDVR0OBBYEFDBzN9RDgdnH\nHx5x7iUeBDX8qQ3yMB8GA1UdIwQYMBaAFDBzN9RDgdnHHx5x7iUeBDX8qQ3yMAwG\nA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBACYT6VSDfRxsGIzzoYMlIN9K\nd1pfDqFVFKZecI9M+fc0iAnYYRm5VUpItw5fAoMbrjCL4XMZKImSmkAWc4m9cCDs\nWT4rSEE/Fhv3dUjI3Hg7CFoxwU+Ke+yORsPNCv/9lDjReh9pU120UIttOa1lu9NN\nkT8QcUN0+NAvhj6MTm87VsQBNEpQhddyPuOmtga/zf8HTOcvtbeoRTueVNa4yNvP\n3UI6FLwNWNebzgm5zunahY7svqrTbKkNbQbIFqHrhSZdY5i7+I7Lgi9hfri7nDDk\nl6Dv+Ntm0LKWJNEKuZ8I+QVuJiFIFqF/8Gsqc/8pDuJF3b7UchyqGCXJhnExBR4=\n-----END CERTIFICATE-----"

  - `data.certificate_info` (object)
    Detailed information about the certificate.

  - `data.certificate_info.domains` (array)
    The domains that correspond to the certificate.
    Example: ["example.com"]

  - `data.certificate_info.ecdsa_curve_name` (string,null)
    The ECDSA curve that the certificate's key uses.

* prime256v1
* secp384r1
* null — The certificate's key is not an ECDSA key.
    Enum: "prime256v1", "secp384r1"

  - `data.certificate_info.ecdsa_public` (string,null)
    The certificate's key's ECDSA compressed public point, in hexadecimal format.

* null — The certificate's key is not an ECDSA key.

  - `data.certificate_info.is_self_signed` (integer)
    This value indicates whether the certificate is a self-signed certificate.
* 1 - Certificate is self-signed.
* 0 - Certificate is not self-signed.
    Enum: 0, 1

  - `data.certificate_info.issuer.commonName` (string)
    The Common Name of the organization that issued the certificate.
    Example: "example.com"

  - `data.certificate_info.issuer.organizationName` (string)
    The organization that generated the certificate.
    Example: "Writer's Guild of America"

  - `data.certificate_info.issuer_text` (string)
    Information about the issuer.
    Example: "commonName\nhostname.example.com\nemailAddress\nssl@hostname.example.com"

  - `data.certificate_info.key_algorithm` (string)
    The certificate's key's algorithm.

* rsaEncryption — RSA.
* id-ecPublicKey — ECDSA.
    Enum: "rsaEncryption", "id-ecPublicKey"

  - `data.certificate_info.modulus` (string,null)
    The certificate's key's modulus, in hexadecimal format.

* null — The certificate's key is not an RSA key.
    Example: "a673c3b17344664b35f8791f562d3aea6bf4d8faa3ae3fc0a519380fd453964a36677c34d48677ecb7f5ed035df026f5f0f8fbfe21745e52daf1f3b9e58c73f0baefdb709320e2202e7d05250b051a59b30ff1fef22d83d7140c1c81cea314a0890ce8d2226799872181c58a74016c7aaa2cff5ac72b575cecde8f304aa572a2ea03d8b173ab76c6e8cdb9dfd0da81e1119cefd4b8b4dbfbe0e46c7f1ee2fe8b5fd5504e58ccbc0d13b4fa41ecc9ebd0dabe1d1fec5c724f748167e7c0553e997f9b77eb36abce70973f06df151748d41b758de3efd7afa6f2464a1547f5ff158469d96e248be464df9eda0e7ce854a89332a2c1278b17c425368a9604f454db"

  - `data.certificate_info.modulus_length` (integer,null)
    The certificate's key's modulus length, in bits.

* null — The certificate's key is not an RSA key.
    Example: 2048

  - `data.certificate_info.not_after` (integer)
    When the certificate expires.
    Example: 1398805499

  - `data.certificate_info.not_before` (integer)
    The certificate's validation date.
    Example: 1367269499

  - `data.service` (string)
    The service that the certificate corresponds to.
* ftp - The ftp service.
* exim - The exim service.
* dovecot - The dovecot service.
* cpanel - The cpanel service.
    Enum: "ftp", "exim", "dovecot", "cpanel"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "reset_service_ssl_certificate"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


