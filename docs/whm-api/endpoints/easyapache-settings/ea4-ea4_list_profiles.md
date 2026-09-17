# Return EasyApache 4 profiles

This function returns a list of all EasyApache 4 profiles and the packages that each profile provides.

 Important:

 When you disable the Web Server role, the system disables this function.

Endpoint: GET /ea4_list_profiles
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cpanel` (array)
    An array of cPanel & WHM-provided EasyApache 4 profile settings objects.

  - `data.cpanel.active` (integer)
    Whether the cPanel & WHM-provided EasyApache 4 profile's settings are active.
* 1 - Active.
* 0 - Inactive.
    Enum: 0, 1

  - `data.cpanel.desc` (string)
    A description of the profile.
    Example: "The currently installed packages on the server."

  - `data.cpanel.name` (string)
    The profile name.
    Example: "No PHP"

  - `data.cpanel.pkgs` (array)
    An array of RPM packages that the profile includes.
    Example: ["ea-apache24","ea-php74"]

  - `data.cpanel.tags` (array)
    Labels that highlight key attributes of a profile.
    Example: ["ea-apache24","ea-php74"]

  - `data.cpanel.validation_data` (object)

  - `data.cpanel.validation_data.not_on_server` (array)
    An array of packages in the profile that do not exist in any of the server's yum repositories.
    Example: ["ea-apache24","ea-php74"]

  - `data.cpanel.version` (string)
    The profile's current version ID.
    Example: "1.2"

  - `data.custom` (array)
    An array of custom settings objects.

Note:

This function returns the custom array when a system administrator-created profile exists.

  - `data.custom.desc` (string)
    A description of the profile.
    Example: "The currently installed packages on the server."

  - `data.custom.name` (string)
    The profile name.
    Example: "No PHP"

  - `data.custom.path` (string)
    The file name of the profile.
    Example: "default.json"

  - `data.custom.pkgs` (array)
    An array of RPM packages that the profile includes.
    Example: ["ea-apache24","ea-php74"]

  - `data.custom.tags` (array)
    Labels that highlight key attributes of a profile.
    Example: ["Apache 2.4","PHP 7.4"]

  - `data.custom.validation_data` (object)

  - `data.custom.validation_data.not_on_server` (array)
    An array of packages in the profile that do not exist in any of the server's yum repositories.
    Example: ["ea-apache24","ea-php74"]

  - `data.custom.version` (string)
    The profile's current version ID.
    Example: "1.2"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ea4_list_profiles"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success.
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


