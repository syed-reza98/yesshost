# Return domains with installed SSL certificates

This function lists the server's domains with installed SSL certificates.

Endpoint: GET /listcrts
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `registered` (integer)
    Whether to limit the results to certificates registered with
a certificate authority (CA).

* 1 — Registered certificates only.
* 0 — All certificates.
    Enum: 1, 0

  - `user` (string)
    The cPanel username.

If you do not use this parameter, the function returns certificates
for all accounts on the server.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.crt` (array)
    Information about the certificate.

  - `data.crt.domain` (string)
    The certificate's primary domain.
    Example: "example.com"

  - `data.crt.domain_owners` (array)
    A list of the owners of the domain or domains that the certificate covers.
    Example: ["username"]

  - `data.crt.domains` (array)
    A list of the domain or domains that the certificate covers.
    Example: ["example.com"]

  - `data.crt.ecdsa_curve_name` (string,null)
    The ECDSA curve that the certificate's key uses.

* prime256v1
* secp384r1
* null — The certificate's key is not an ECDSA key.
    Enum: "prime256v1", "secp384r1"

  - `data.crt.friendly_name` (string)
    The certificate's friendly name.
    Example: "TestCertificate"

  - `data.crt.id` (string)
    The certificate's ID.
    Example: "example._com_d13b4_362b9_1400343187_b05e5c3e443dda9a8869c4cf7457829e"

  - `data.crt.is_self_signed` (integer)
    Whether the certificate is self-signed.

* 1 — Self-signed.
* 0 — Not self-signed.
    Enum: 1, 0

  - `data.crt.issuer.organizationName` (string)
    The certificate's Organization Name.
    Example: "Organization"

  - `data.crt.key_algorithm` (string)
    The certificate's key's algorithm.

* rsaEncryption — RSA.
* id-ecPublicKey — ECDSA.
    Enum: "rsaEncryption", "id-ecPublicKey"

  - `data.crt.modulus_length` (integer,null)
    The certificate's key's modulus length, in bits.

* null — The certificate's key is not an RSA key.
    Example: 2048

  - `data.crt.not_after` (integer)
    The date the certificate expires.
    Example: 1601467200

  - `data.crt.registered` (integer)
    Whether the certificate is registered with a CA.

* 1 — Registered.
* 0 — Not registered.
    Enum: 1, 0

  - `data.crt.signature_algorithm` (string)
    The certificate's OID hash algorithm signature.
    Example: "sha256WithRSAEncryption"

  - `data.crt.validation_type` (string,null)
    The certificate's validation type.

* ev — Extended Validation.
* ov — Organization Validation.
* dv — Domain Validated.
* null — The system could not parse and determine the
certificate's validation type.
    Enum: "ev", "dv", "ov"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "listcrts"

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


