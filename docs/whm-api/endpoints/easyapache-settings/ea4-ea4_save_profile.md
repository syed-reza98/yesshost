# Create EasyApache 4 profile

This function creates an EasyApache 4 profile. This function only writes files to the /etc/cpanel/ea4/profiles/custom/ directory.

Important:

  When you disable the Web Server role, the system disables this function.

Endpoint: GET /ea4_save_profile
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `filename` (string, required)
    The profile's file name.
    Example: "new_profile.json"

  - `name` (string, required)
    The profile's display name.
    Example: "New Profile"

  - `pkg` (array, required)
    The packages that the profile contains.
    Example: ["ea-apache24","ea-apache24-foo"]

  - `desc` (string)
    The description of the profile.
    Example: "This is my new profile."

  - `overwrite` (integer)
    Whether to overwrite the file, if it exists.

* 1 — Overwrite the file.
* 0 — Do not overwrite the file.
    Enum: 0, 1

  - `tag` (array)
    Tags that are appropriate for the profile.
    Example: ["Apache 2.4","Optimized for static content"]

  - `version` (string)
    The profile's version number.
    Example: "1.3"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.already_exists` (integer)
    Whether the filename value already exists.

Note:

 The function only returns this field if the overwrite value is 0, and the specified filename value already exists.
- 1 — Exists.
- 0 — Does not exist.
    Enum: 0, 1

  - `data.path` (string)
    The new profile's path.

Note:

 The function only returns this field if it succeeds.
    Example: "/etc/cpanel/ea4/profiles/custom/new_profile.json"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ea4_save_profile"

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


