# Create SSH key pair

This function generates an SSH key pair.

Endpoint: GET /generatesshkeypair
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `abort_on_existing_key` (integer)
    Whether to abort the function if the user already has a key with the same name.

* 1 — Abort.
* 0 — Continue.
    Enum: 0, 1

  - `algorithm` (string)
    The key's encryption algorithm. The parameter defaults to the system's default algorithm.
    Enum: "rsa2", "dsa"

  - `bits` (integer)
    The key's bits:

* 1024 — The DSA algorithm's default value.
* 2048
* 4096 — The RSA algorithm's default value.
    Enum: 1024, 2048, 4096

  - `comment` (string)
    A comment.
    Example: "NoComment"

  - `name` (string)
    The key's filename.

This parameter defaults to id_rsa if the algorithm is RSA, and id_dsa
if the algorithm is DSA.
    Example: "KeyFile"

  - `passphrase` (string)
    The key's secure passphrase.
    Example: "123456luggage"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.fingerprint` (string,null)
    The key's [MD5](https://en.wikipedia.org/wiki/MD5) fingerprint.

  - `data.name` (string)
    The key's filename.
    Example: "KeyFile"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "generatesshkeypair"

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


