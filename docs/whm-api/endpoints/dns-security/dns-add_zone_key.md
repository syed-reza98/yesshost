# Create domain's DNSSEC zone key

This function generates a DNSSEC zone key for a domain.

Note:

* Only servers that run PowerDNS can use DNSSEC. If you call this function on
a server that doesn't use PowerDNS, you will receive an error.
* After you enable DNSSEC on the domain, you must add the Delegation of Signing (DS)
records to your zone record and your registrar.
* You cannot modify the DNSSEC security key. To make any changes, you must disable,
delete, and re-create the DNSSEC security key.

Endpoint: GET /add_zone_key
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `algo_num` (integer, required)
    The algorithm that the system uses to generate the security key.

* 5 — RSA/SHA-1
* 6 — DSA-NSEC3-SHA1
* 7 — RSA SHA1-NSEC3-SHA1
* 8 — RSA/SHA-256
* 13 — ECDSA Curve P-256 with SHA-256
* 14 — ECDSA Curve P-384 with SHA-384

Note:

We recommend that you use a 13 (ECDSA Curve P-256 with SHA-256) value if
your registrar supports it.
    Enum: 5, 6, 7, 8, 13, 14

  - `domain` (string, required)
    The domain for which to enable DNSSEC.
    Example: "example.com"

  - `key_type` (string, required)
    The type of security key to add.

* ksk — Key Signing Key.
* zsk — Zone Signing Key.

Note:

You must call these values in lowercase.
    Example: "ksk"

  - `active` (integer)
    Whether to activate the new security key.

* 1 — Activate.
* 0 — Do not activate.
    Enum: 0, 1

  - `key_size` (integer)
    The security key size, in bits.

Note:

This parameter defaults to the following values, depending on the algo_num
and key_type values:

* algo_num = 5
  * ksk = 2048
  * zsk = 1024
* algo_num = 6
  * ksk = 2048
  * zsk = 1024
* algo_num = 7
  * ksk = 2048
  * zsk = 1024
* algo_num = 8
  * ksk = 2048
  * zsk = 1024
* algo_num = 13
  * ksk and zsk = 256
* algo_num = 14
  * ksk and zsk = 384
    Enum: 256, 384, 1024, 2048

## Response 200 fields (application/json):

  - `data` (object)

  - `data.new_key_id` (string)
    The security key's ID.
    Example: "1"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "add_zone_key"

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


