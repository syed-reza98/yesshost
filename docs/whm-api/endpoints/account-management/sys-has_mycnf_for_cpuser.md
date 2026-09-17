# Validate MySQL Configuration file

This function checks whether a cPanel user's home directory contains
a valid .my.cnf file.

Endpoint: GET /has_mycnf_for_cpuser
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The cPanel account username.
    Example: "user"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.has_mycnf_for_cpuser` (integer)
    Whether a valid .my.cnf file exists in the account's home directory.
- 1 -  Exists.
- 0 -  Does not exist.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "has_mycnf_for_cpuser"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


