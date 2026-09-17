# Return login security configuration settings

This function returns cPHulk's current settings.

Endpoint: GET /load_cphulk_config
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.cphulk_config` (object)
    An object that contains cPHulk's current settings.

  - `data.cphulk_config.block_brute_force_with_firewall` (integer)
    Whether to use the server's firewall to block brute force attacks.
* 1 - Block.
* 0 - Don't block.
    Enum: 0, 1

  - `data.cphulk_config.block_excessive_brute_force_with_firewall` (integer)
    Whether to use the server's firewall to block excessive brute force attacks.
* 1 - Block.
* 0 - Don't block.
    Enum: 0, 1

  - `data.cphulk_config.brute_force_period_mins` (integer)
    The number of minutes during which cPHulk measures all login attempts to a specific user's account.
    Example: 5

  - `data.cphulk_config.brute_force_period_sec` (integer)
    The number of seconds over which cPHulk measures all login attempts to a specific user's account.
    Example: 360

  - `data.cphulk_config.can_temp_ban_firewall` (integer)
    Whether to add temporary IP bans via the server's firewall.
* 1 - Add.
* 0 - Don't add.
    Enum: 0, 1

  - `data.cphulk_config.command_to_run_on_brute_force` (string)
    The command to run when the system detects a brute force attack. A valid BASH command.
    Example: "echo \"BRUTE\""

  - `data.cphulk_config.command_to_run_on_excessive_brute_force` (string)
    The command to run when the system detects an excessive brute force attack. A valid BASH command.
    Example: "echo \"TOO MUCH BRUTE\""

  - `data.cphulk_config.ip_based_protection` (integer)
    Whether cPHulk will track failed login attempts via IP addresses.
* 1 - Track.
* 0 - Don't track.
    Enum: 0, 1

  - `data.cphulk_config.ip_brute_force_period_mins` (integer)
    The number of minutes during which cPHulk measures an attacker's login attempts.
    Example: 15

  - `data.cphulk_config.ip_brute_force_period_sec` (integer)
    The number of seconds during which cPHulk measures an attacker's login attempts.
    Example: 300

  - `data.cphulk_config.is_enabled` (integer)
    Whether the cPHulk service is enabled.
* 1 - Enabled.
* 0 - Disabled.
    Enum: 0, 1

  - `data.cphulk_config.lookback_period_min` (integer)
    The number of minutes during which cPHulk counts failed logins against a user.
    Example: 360

  - `data.cphulk_config.lookback_time` (integer)
    The number of seconds during which cPHulk counts failed logins against a user.
    Example: 21600

  - `data.cphulk_config.mark_as_brute` (integer)
    The maximum number of failures that cPHulk will allow per account from a specific IP address before the system locks out that address for two weeks.
    Example: 30

  - `data.cphulk_config.max_failures` (integer)
    The maximum number of failures that cPHulk will allow per account within the defined time range.
    Example: 30

  - `data.cphulk_config.max_failures_byip` (integer)
    The maximum number of failures that cPHulk will allow per account from a specific IP address within the defined time range.
    Example: 5

  - `data.cphulk_config.notify_on_brute` (integer)
    Whether cPHulk will send a notification when it detects a brute force attack.
* 1 - Send.
* 0 - Do not send.
    Enum: 0, 1

  - `data.cphulk_config.notify_on_root_login` (integer)
    Whether cPHulk will send a notification when the root user successfully logs in from an IP address that is not on the whitelist.
* 1 - Send.
* 0 - Do not send.
    Enum: 0, 1

  - `data.cphulk_config.notify_on_root_login_for_known_netblock` (integer)
    Whether cPHulk will send a notification when the root user successfully logs in from an IP address in the same netblock.
* 1 - Send.
* 0 - Do not send.
    Enum: 0, 1

  - `data.cphulk_config.username_based_protection` (integer)
    Whether cPHulk will track failed logins by username.
* 1 - Track.
* 0 - Don't track.
    Enum: 0, 1

  - `data.cphulk_config.username_based_protection_for_root` (integer)
    Whether cPHulk will track the root user's failed logins.
* 1 - Track.
* 0 - Don't track.
    Enum: 0, 1

  - `data.cphulk_config.username_based_protection_local_origin` (integer)
    Whether cPHulk will only track failed logins for requests originating locally.
* 1 - Track.
* 0 - Don't track.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "load_cphulk_config"

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


