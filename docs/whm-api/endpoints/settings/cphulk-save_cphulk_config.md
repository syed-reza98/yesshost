# Save login security configuration settings

This function modifies cPHulk's configuration settings.

Endpoint: GET /save_cphulk_config
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `block_brute_force_with_firewall` (integer)
    Whether to use the server firewall to block brute force attacks.
* 1 — Use the firewall.
* 0 — Do not use the firewall.
    Enum: 0, 1

  - `block_excessive_brute_force_with_firewall` (integer)
    Whether to use the server firewall to block excessive brute force attacks.
* 1 — Use the firewall.
* 0 — Do not use the firewall.
    Enum: 0, 1

  - `brute_force_period_mins` (integer)
    The number of minutes over which cPHulk measures all login attempts to a specific user's account.
    Example: 5

  - `command_to_run_on_brute_force` (string)
    The command to run when an IP address triggers brute force protection.

Note:

 For a list of commands, read the Command variables section of our cPHulk Brute Force Protection documentation.

  - `command_to_run_on_excessive_brute_force` (string)
    The command to run when the system blocks an IP address for a one day period.

Note:

 For a list of commands, read the Command variables section of our cPHulk Brute Force Protection documentation.

  - `ip_based_protection` (integer)
    Whether to enable IP address-based protection on all requests.
* 1 — Enable IP-based protection.
* 0 — Disable IP-based protection.

Note:

 If you set this parameter to 0, you cannot use the following parameters:
 * block_brute_force_with_firewall
 * block_excessive_brute_force_with_firewall
 * ip_brute_force_period_mins
    Enum: 0, 1

  - `ip_brute_force_period_mins` (integer)
    The number of minutes in which cPHulk measures an attacker's login attempts.
    Example: 15

  - `lookback_period_min` (integer)
    The number of minutes over which cPHulk counts failed logins against a user.
    Example: 360

  - `mark_as_brute` (integer)
    The maximum number of failures from a specific IP address before cPHulk blocks that address for a two-week period.
    Example: 30

  - `max_failures` (integer)
    The maximum number of failures that cPHulk allows per account within the defined time range.
    Example: 30

  - `max_failures_byip` (integer)
    The maximum number of failures from a specific IP address before cPHulk locks out that address.
    Example: 5

  - `notify_on_brute` (integer)
    Whether cPHulk will send a notification when it detects a brute force attack.
* 1 — Send the notification.
* 0 — Do not send the notification.
    Enum: 0, 1

  - `notify_on_root_login` (integer)
    Whether cPHulk will send a notification when the root user successfully logs in from an IP address that is not on the whitelist.
* 1 — Send the notification.
* 0 — Do not send the notification.
    Enum: 0, 1

  - `notify_on_root_login_for_known_netblock` (integer)
    Whether cPHulk sends a notification upon successful root login when the IP address is not on the whitelist, but from a known netblock.
* 1 — Send the notification.
* 0 — Do not send the notification.
    Enum: 0, 1

  - `skip_enabled_check` (integer)
    Whether to skip checking if cPHulk runs on the server.
* 1 — Don't check cPHulk's status.
* 0 — Check cPHulk's status.

Note:

If cPHulk is disabled, the function returns the following message:
cPHulk is disabled on the server.
    Enum: 0, 1

  - `username_based_protection` (integer)
    Whether to enable username-based protection on all requests.
* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

  - `username_based_protection_for_root` (integer)
    Whether to allow username-based protection to lock out the root user.
* 1 — Allow.
* 0 — Do not allow.
    Enum: 0, 1

  - `username_based_protection_local_origin` (integer)
    Whether to enable username-based protection only on requests that originate from a local IP address.
* 1 — Enable.
* 0 — Disable.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cphulk_config` (object)
    An object containing cPHulk configuration settings.

  - `data.cphulk_config.block_brute_force_with_firewall` (integer)
    Whether to use cPanel & WHM's firewall to block brute force attacks.
* 1 -  Use the firewall.
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

  - `data.cphulk_config.command_to_run_on_excessive_brute_force` (string)
    The command to run when the system blocks an IP address blocked for a one day period.

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
    Whether cPHulk sends a notification upon successful root login when the IP address is not on the whitelist, but from a known netblock.
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

  - `data.restart_ssh` (integer)
    Whether the system disabled UseDNS in the sshd.conf file and restarted the sshd daemon to allow cPHulk to add IP addresses to the whitelist.

Note:

 This return only appears if the UseDNS setting is yes in the /etc/ssh/sshd_config file. Because UseDNS and cPHulk are incompatible, the system sets the UseDNS setting to no when you enable cPHulk.
* 1 - Disabled UseDNS in the sshd daemon and restarted the sshd service.
* 0 - Did not alter the sshd.conf file or restart the sshd service.
    Enum: 0, 1

  - `data.warning` (string,null)
    A warning message about the restart.

Note:

The function only returns this value if the restart_ssh return's value is 1.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "save_cphulk_config"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


