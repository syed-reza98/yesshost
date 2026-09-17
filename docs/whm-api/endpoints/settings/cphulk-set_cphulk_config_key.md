# Update login security configuration settings

This function modifies a single cPHulk configuration settings as specified.

Endpoint: GET /set_cphulk_config_key
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `key` (string, required)
    The configuration key for the setting to set/modify.

It should be one of the following:
*  block_brute_force_with_firewall - Whether to use cPanel & WHM's firewall to block brute force attacks.
*  block_excessive_brute_force_with_firewall - Whether to use cPanel & WHM's firewall to block excessive brute force attacks.
*  brute_force_period_mins - The number of minutes over which cPHulk measures all login attempts to a specific user's account.
*  brute_force_period_sec - The number of seconds over which cPHulk measures all login attempts to a specific user's account.
*  command_to_run_on_brute_force - The command to run when an IP address triggers brute force protection.
*  command_to_run_on_excessive_brute_force - The command to run when the system blocks an IP address blocked for a one day period.
*  country_blacklist - The countries to blacklist.
*  country_whitelist - The countries to whitelist.
*  ip_based_protection - Whether to enable IP address-based protection on all requests.
*  ip_brute_force_period_mins - The number of minutes in which cPHulk measures an attacker's login attempts.
*  ip_brute_force_period_sec - The number of seconds in which cPHulk measures an attacker's login attempts.
*  is_enabled - Whether to enable the cPHulk service.
*  lookback_period_min - The number of minutes over which cPHulk counts failed logins against a user.
*  lookback_time - The number of seconds over which cPHulk counts failed logins against a user.
*  mark_as_brute - The maximum number of failures from a specific IP address before cPHulk blocks that address for a two-week period.
*  max_failures - The maximum number of failures that cPHulk allows per account within the defined time range.
*  max_failures_byip - The maximum number of failures from a specific IP address before cPHulk locks out that address.
*  notify_on_brute - Whether cPHulk will send a notification when it detects a brute force attack.
*  notify_on_root_login - Whether cPHulk will send a notification when the root user successfully logs in from an IP address that is not on the whitelist.
*  notify_on_root_login_for_known_netblock - Whether cPHulk sends a notification upon successful root login when the IP address is not on the whitelist, but from a known netblock.
*  username_based_protection - Whether to enable username-based protection on all requests.
*  username_based_protection_for_root - Whether to allow username-based protection to lock out the root user.
*  username_based_protection_local_origin - Whether to enable username-based protection only on requests that originate from a local IP address.
    Enum: "block_brute_force_with_firewall", "block_excessive_brute_force_with_firewall", "brute_force_period_mins", "brute_force_period_sec", "command_to_run_on_brute_force", "command_to_run_on_excessive_brute_force", "country_blacklist", "country_whitelist", "ip_based_protection", "ip_brute_force_period_mins", "ip_brute_force_period_sec", "is_enabled", "lookback_period_min", "lookback_time", "mark_as_brute", "max_failures", "max_failures_byip", "notify_on_brute", "notify_on_root_login", "notify_on_root_login_for_known_netblock", "username_based_protection", "username_based_protection_for_root", "username_based_protection_local_origin"

  - `value` (any, required)
    The new value for the specified key. The allowable value depends on which key is being set.

For the following keys, the value must be 0 or 1:
* block_brute_force_with_firewall
* block_excessive_brute_force_with_firewall
* ip_based_protection
* is_enabled
* notify_on_brute
* notify_on_root_login
* notify_on_root_login_for_known_netblock
* username_based_protection
* username_based_protection_for_root
* username_based_protection_local_origin

For the following keys, the value must be an integer which specifies a number of minutes or seconds:
* brute_force_period_mins
* brute_force_period_sec
* ip_brute_force_period_mins
* ip_brute_force_period_sec
* lookback_period_min
* lookback_time - This one is in seconds despite not having sec in the name

These keys require the value to be a string containing a command to be run:
(For a list of commands, read the _Command Variables_ section of our cPHulk Brute Force Protection documentation.)
* command_to_run_on_brute_force
* command_to_run_on_excessive_brute_force

These keys require the value to be a string containing a comma-separated list of country codes:
(For a list of countries, run the WHM API 1 get_countries_with_known_ip_ranges function.)
* country_blacklist
* country_whitelist

The following keys require an integer representing a maximum number of failures
* mark_as_brute
* max_failures
* max_failures_byip
    Example: 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cphulk_config` (object)
    cPHulk configuration settings.

  - `data.cphulk_config.block_brute_force_with_firewall` (integer)
    Whether to use cPanel & WHM's firewall to block brute force attacks.
* 1 - Use the firewall.
* 0 - Do not use the firewall.
    Enum: 0, 1

  - `data.cphulk_config.block_excessive_brute_force_with_firewall` (integer)
    Whether to use cPanel & WHM's firewall to block excessive brute force attacks.
* 1 - Use the firewall.
* 0 - Do not use the firewall.
    Enum: 0, 1

  - `data.cphulk_config.brute_force_period_mins` (integer)
    The number of minutes over which cPHulk measures all login attempts to a specific user's account.
    Example: 5

  - `data.cphulk_config.brute_force_period_sec` (integer)
    The number of seconds over which cPHulk measures all login attempts to a specific user's account.
    Example: 300

  - `data.cphulk_config.can_temp_ban_firewall` (integer)
    Whether the system firewall can apply temporary IP address bans.
* 1 - Can temporarily apply IP address bans.
* 0 - Cannot temporarily apply IP address bans.

Note:

If this return's value is 0, then the ip_based_protection parameter is not available, which means that you cannot use the following parameters:
* block_brute_force_with_firewall
* block_excessive_brute_force_with_firewall
* ip_brute_force_period_mins
* ip_brute_force_period_sec
    Enum: 0, 1

  - `data.cphulk_config.command_to_run_on_brute_force` (string)
    The command to run when an IP address triggers brute force protection.
- A valid command.
- An empty string.

  - `data.cphulk_config.command_to_run_on_excessive_brute_force` (string)
    The command to run when the system blocks an IP address blocked for a one day period.
* A valid command.
* An empty string.

  - `data.cphulk_config.country_blacklist` (string)
    The countries to blacklist. A comma-separated list of valid ISO 3166-1 alpha-2 country codes. This value may be empty.
    Example: "PK,BR"

  - `data.cphulk_config.country_whitelist` (string)
    The countries to whitelist. A comma-separated list of valid ISO 3166-1 alpha-2 country codes. This value may be empty.
    Example: "US,AU"

  - `data.cphulk_config.ip_based_protection` (integer)
    Whether IP address-based protection on all requests is enabled.
* 1 - Enabled.
* 0 - Disabled.
    Enum: 0, 1

  - `data.cphulk_config.ip_brute_force_period_mins` (integer)
    The number of minutes in which cPHulk measures an attacker's login attempts.
    Example: 15

  - `data.cphulk_config.ip_brute_force_period_sec` (integer)
    The number of seconds in which cPHulk measures an attacker's login attempts.
    Example: 900

  - `data.cphulk_config.is_enabled` (integer)
    Whether the cPHulk service is enabled.
* 1 - Enabled.
* 0 - Disabled.
    Enum: 0, 1

  - `data.cphulk_config.lookback_period_min` (integer)
    The number of minutes over which cPHulk counts failed logins against a user.
    Example: 360

  - `data.cphulk_config.lookback_time` (integer)
    The number of seconds over which cPHulk counts failed logins against a user.
    Example: 21600

  - `data.cphulk_config.mark_as_brute` (integer)
    The maximum number of failures from a specific IP address before cPHulk blocks that address for a two-week period.
    Example: 30

  - `data.cphulk_config.max_failures` (integer)
    The maximum number of failures that cPHulk allows per account within the defined time range.
    Example: 30

  - `data.cphulk_config.max_failures_byip` (integer)
    The maximum number of failures from a specific IP address before cPHulk locks out that address.
    Example: 5

  - `data.cphulk_config.notify_on_brute` (integer)
    Whether cPHulk will send a notification when it detects a brute force attack.
* 1 - Send the notification.
* 0 - Do not send the notification.
    Enum: 0, 1

  - `data.cphulk_config.notify_on_root_login` (integer)
    Whether cPHulk will send a notification when the root user successfully logs in from an IP address that is not on the whitelist.
* 1 - Send the notification.
* 0 - Do not send the notification.
    Enum: 0, 1

  - `data.cphulk_config.notify_on_root_login_for_known_netblock` (integer)
    Whether cPHulk sends a notification upon successful root login when the IP address is not on the whitelist, but from a known netblock
* 1 - Send the notification.
* 0 - Do not send the notification.
    Enum: 0, 1

  - `data.cphulk_config.username_based_protection` (integer)
    Whether username-based protection on all requests is enabled.
* 1 - Enabled.
* 0 - Disabled.
    Enum: 0, 1

  - `data.cphulk_config.username_based_protection_for_root` (integer)
    Whether username-based protection can lock out the root user.
* 1 - Allowed.
* 0 - Not allowed.
    Enum: 0, 1

  - `data.cphulk_config.username_based_protection_local_origin` (integer)
    Whether username-based protection only on requests that originate from a local IP address.
* 1 - Enabled.
* 0 - Disabled.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_cphulk_config_key"

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


