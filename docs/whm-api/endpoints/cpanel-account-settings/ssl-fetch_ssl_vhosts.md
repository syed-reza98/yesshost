# Return server vhosts and SSL certificates

This function lists the server's virtual hosts (vhosts) and their installed SSL certificates.

Endpoint: GET /fetch_ssl_vhosts
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.vhosts` (array)
    An array of objects containing virtual host information.

  - `data.vhosts.crt` (object)
    Information about the certificate.

  - `data.vhosts.crt.created` (integer)
    The date the certificate was created.
    Example: 1538308800

  - `data.vhosts.crt.domains` (array)
    A list of the certificate's associated domains.
    Example: ["example.com","subdomain.example.com"]

  - `data.vhosts.crt.ecdsa_curve_name` (string,null)
    The ECDSA curve that the certificate's key uses.

* prime256v1
* secp384r1
* null — The certificate's key is not an ECDSA key.
    Enum: "prime256v1", "secp384r1"

  - `data.vhosts.crt.ecdsa_public` (string,null)
    The certificate's key's ECDSA compressed public point, in hexadecimal format.

* null — The certificate's key is not an ECDSA key.

  - `data.vhosts.crt.encryption_algorithm` (string)
    The certificate's key's algorithm.

* rsaEncryption — RSA.
* id-ecPublicKey — ECDSA.
    Enum: "rsaEncryption", "id-ecPublicKey"

  - `data.vhosts.crt.id` (string)
    The certificate's ID.
    Example: "example1_com_e353a_5bc13_1408033388_9a1d40aff655f98fed7206e5af466065"

  - `data.vhosts.crt.is_self_signed` (integer)
    Whether the certificate is self-signed.

* 1 — Self-signed.
* 0 — Not self-signed.
    Enum: 1, 0

  - `data.vhosts.crt.issuer.commonName` (string)
    The certificate's issuer.
    Example: "example.com"

  - `data.vhosts.crt.issuer.organizationName` (string)
    The certificate's Organization Name.
    Example: "Organization"

  - `data.vhosts.crt.issuer_text` (string)
    The full text of issuer information.
    Example: "commonName\nsubdomain.example.com"

  - `data.vhosts.crt.modulus` (string,null)
    The certificate's key's modulus, in hexadecimal format.

* null — The certificate's key is not an RSA key.
    Example: "e353aa25cc8ad05d3225611e4410c0270c11b2d46f88705d3d179a23102ab24ee167c1a9070b9f554e83bade1b84256e11c5a0cb2ac96b96f28e802b11c721d73fbfe61dd9839974a6fce4e17915c0fbf885056f18656041cf70db460b22cab5fd2502491e4ab9f0d2cb727480e0ebd62e83870acda31bfa2d4625efd82234f9729f351ea02fb162609c1654c11b5dec468539a3bb83073a85f78bcf577cd8b718501145cccd89d7adb0bb18c872e7303a15e2c75a6ab315c7fa099e4351a4f0ff126c2693f71d9f21d9f798b94bb689277083fea8dcc01b6af268d0ad8b7a481f8a179d07639cdf3290c93723937a767c400a8ce4b1ca19f0a7117084d5bc13"

  - `data.vhosts.crt.modulus_length` (integer,null)
    The certificate's key's modulus length.

* null — The certificate's key is not an RSA key.
    Example: 2048

  - `data.vhosts.crt.not_after` (integer)
    The date the certificate expires.
    Example: 1601467200

  - `data.vhosts.crt.not_before` (integer)
    The date the certificate became active.
    Example: 1569844800

  - `data.vhosts.crt.public_exponent` (string)
    The certificate's exponent.
    Example: "010001"

  - `data.vhosts.crt.signature_algorithm` (string)
    The certificate's OID hash algorithm.
    Example: "sha256WithRSAEncryption"

  - `data.vhosts.crt.subject.commonName` (object)
    An object containing the certificate's Common Name.

  - `data.vhosts.crt.subject.commonName.commonName` (string)
    The certificate's Common Name.
    Example: "example.com"

  - `data.vhosts.crt.subject_text` (string)
    The certificate's subject text.
    Example: "commonName\nsubdomain.example.com"

  - `data.vhosts.crt.validation_type` (string,null)
    The certificate's validation type.

* dv — Domain validation.
* ev — Extended validation.
* ov — Organizational validation.
* null — Self-signed certificate.
    Enum: "dv", "ev", "ov"

  - `data.vhosts.docroot` (string)
    The absolute directory path of the primary domain's document root.
    Example: "/home/example/public_html"

  - `data.vhosts.domains` (array)
    A list of the virtual host's domains.
    Example: ["example.com"]

  - `data.vhosts.ip` (string)
    The virtual host's IP address.
    Example: "192.168.0.20"

  - `data.vhosts.iptype` (string)
    The type of IP address.

* shared
* dedicated
    Enum: "shared", "dedicated"

  - `data.vhosts.ipv6` (string)
    The virtual host's IPv6 address.
    Example: "2001:0db8:0:0:1:0:0:1"

  - `data.vhosts.is_primary_on_ip` (integer)
    Whether the certificate's domain is the IP address's primary domain.

* 1 — Primary domain.
* 0 — Not the primary domain.
    Enum: 1, 0

  - `data.vhosts.mail_sni_status` (integer)
    Whether SNI for mail is enabled.

* 1 — Enabled.
* 0 — Disabled.
    Enum: 1, 0

  - `data.vhosts.needs_sni` (integer)
    Whether the virtual host requires SNI to function properly for
SSL certificates.

* 1 — Requires SNI.
* 0 — Does not require SNI.
    Enum: 1, 0

  - `data.vhosts.servername` (string)
    The virtual host's primary domain.
    Example: "example.com"

  - `data.vhosts.type` (string)
    The virtual host's domain type.

* addon — Addon domain.
* main — Main domain on account.
* parked — Parked domain.
* sub — Subomain.
    Enum: "addon", "main", "parked", "sub"

  - `data.vhosts.user` (string)
    The virtual host's username.
    Example: "example"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "fetch_ssl_vhosts"

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


