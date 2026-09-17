# Update server node profile

This function activates a server profile.

Note:

 If a server profile enables a service, the system will also enable service monitoring. To disable a service's monitoring, use WHM's Service Manager interface (WHM >> Home >> Service Configuration >> Service Manager*).
* For a list of the server's available profiles, use the get_available_profiles function.

Endpoint: GET /start_profile_activation
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `code` (string, required)
    The code value of the server profile.

* STANDARD — The Standard profile.
* DATABASENODE — The Database profile.
* MAILNODE — The Mail profile.
* DNSNODE — The DNS profile.
    Enum: "STANDARD", "DATABASENODE", "MAILNODE", "DNSNODE"

  - `optional` (object)
    The optional roles to enable or disable with the profile, in
JSON format. You must URI-encode this value.

Note:

* As an example, if you wished to enable SpamFilter and disable DNS, the JSON object would be:

   { "SpamFilter": 1, "DNS": 0 }.

* This parameter does not enable optional roles for profiles that do not possess any optional roles.
* If you do not pass this parameter, the system disables a profile's optional roles, if any exist.
    Example: {"DNS":0,"SpamFilter":1}

## Response 200 fields (application/json):

  - `data` (object)

  - `data.log_id` (string)
    The profile activation log ID. The system creates the log files in the /var/cpanel/logs/activate_profile/ directory.
    Example: "17053.10418168.1533478604"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "start_profile_activation"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


