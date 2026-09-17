# Update user hosting plan

This function changes a cPanel account's hosting plan (package).

Endpoint: GET /changepackage
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `pkg` (string, required)
    The hosting plan's name.
    Example: "package1"

  - `user` (string, required)
    The cPanel account's username.
    Example: "username"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "changepackage"

  - `metadata.output` (object)

  - `metadata.output.raw` (string)
    Example: "<pre>\nChanging the account bandwidth limit from “0” to “unlimited”.\nChanging Feature List to default\nChanging the maximum email accounts from “unlimited” to “unlimited”.\nChanging the maximum SQL databases from “unlimited” to “unlimited”.\nChanging the maximum FTP accounts from “unlimited” to “unlimited”.\nChanging the maximum mailing lists from “unlimited” to “unlimited”.\nChanging the maximum subdomains from “unlimited” to “unlimited”.\nChanging the maximum email quota from “unlimited” to “unlimited” …\nChanging \"Maximum Hourly Email by Domain Relayed\" from unlimited to unlimited\nChanging \"Maximum percentage of failed or deferred messages a domain may send per hour\" from unlimited to unlimited\nChanging the maximum parked domains from “unlimited” to “0”.\nChanging the maximum addon domains from “unlimited” to “0”.\nRemoving Shell Access\nShell changed\nChanging cPanel theme from jupiter to jupiter\nChanging plan from default to boo\nBandwidth limit (unlimited) is lower than (unlimited) (all limits removed)<br /><blockquote><div style='float:left;'>Enabling...</div><div style='float:left;'>...exampleaddon.com...</div><div style='float:left;'>...exampleaddon.example.com...</div><div style='float:left;'>...example.com...</div><div style='float:left;'>Done</div></blockquote><br /><div class='clearit' style='clear:both; width:80%;'> </div>Setting quota to “unlimited”.\n<span class=\"b2\">Warning, this will not change shared IP accounts to dedicated IP accounts, or the reverse.</span>\n<span class=\"b2\">Warning: Changing a user’s package does not affect their Digest Authentication settings.</span>\n</pre>"

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


