# Return remote access file's hash (deprecated)

This function retrieves a hash from a remote access file.

Warning:

We deprecated this function. We strongly suggest that you use the WHM API 1 api_token_list function.

Endpoint: GET /get_remote_access_hash
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `host` (string, required)
    The server's hostname.
    Example: "hostname.example.com"

  - `password` (string, required)
    The user's password.
    Example: "123456luggage"

  - `username` (string, required)
    The user's username.
    Example: "user"

  - `generate` (integer)
    Whether to generate a new hash for the user, if one does not exist.

* 1 — Generate a new hash.
* 0 — Do not generate a new hash.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.accesshash` (string)
    The account's remote access hash.
    Example: "6b355856c00606648b803a7d896186632472d584eaf0dad878b8885e1f64edad24b31ff79f2675303a598ac211ad5188c589fb60c5786a3e8d85c2029ca4ea76edb62becff7e3f7c5421f51bb4896737c22eda761e2a6fd96404bf513ee9051480ea86c800ab9b45f5255590836c7b769816a8f7f5def1e0c6cb19c212f01f56bb3392854ce51178a943eab6d1ce5d44857e980f70724f50964d2fbe01cb076a119dc5bf421051c2a0882550cdc69872832167c91e11bbe5c95d98474096ebe14b6ca9da2d73faecea5ec37f208912f5da578d5f8ab7c257584002e1808614f9859dceae564e8f30a9790c232d005ebd44f912e20b72e731fc600156e5b9f2902b0dd913010022e6b0deb6a2fb0d38ff3fd005c53f321ec812d3be10643dce81c46e1b9e2abe8814d46ba49b8a173b3e01ec677ea182cabb55db6d9eab2240755be1bbb1d7094a155fd262934ec099fdba3b10f409dced62d3d570ab6478a269a95da1314a45a5916da07312bf7e5a53d57b090e9c24932776f7ffdcf90ba2fa5cd935995795348b67311185f54da6b90da8771585e78c5f587e427bead9198faaa631b8216099c25373c8d4c26a011f295188963840777d09d95b6385df8337098b7e231534323457b9388fe9ea8046"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_remote_access_hash"

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


