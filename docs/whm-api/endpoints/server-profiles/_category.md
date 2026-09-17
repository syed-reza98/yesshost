# Server Profiles

Server Administration / Server Profiles

## Return available server profiles

 - [GET /get_available_profiles](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-get_available_profiles.md): This function returns a list of available server profiles.

## Return server's node profile

 - [GET /get_current_profile](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-get_current_profile.md): This function returns details about the server's current
cPanel & WHM server profile.

## Return whether server role is enabled

 - [GET /is_role_enabled](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-is_role_enabled.md): This function checks whether a specific server role is currently enabled
for the server.

For more information about server roles, read our How to Use Server Profiles documentation.

## Update server node profile

 - [GET /start_profile_activation](https://api.docs.cpanel.net/specifications/whm.openapi/server-profiles/cpanel-start_profile_activation.md): This function activates a server profile.

Note:

 If a server profile enables a service, the system will also enable service monitoring. To disable a service's monitoring, use WHM's Service Manager interface (WHM >> Home >> Service Configuration >> Service Manager*).
* For a list of the server's available profiles, use the get_available_profiles function.

