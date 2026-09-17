# List accounts' web log retention settings

List each cPanel account's web server log retention preference alongside the server default.

Endpoint: GET /list_accounts_retention
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.default_retention` (integer)
    The server-wide default web log retention period, in days, from Tweak Settings.
A value of 0 means logs are retained indefinitely.
    Example: 14

  - `data.accounts` (array)
    A list of cPanel accounts and their web log retention preferences.

  - `data.accounts.user` (string)
    The cPanel account username.
    Example: "alice"

  - `data.accounts.domain` (string)
    The account's primary domain.
    Example: "example.com"

  - `data.accounts.retention_days` (integer,null)
    The account's custom web log retention period, in days.
Null when the account uses the server default.
    Example: 30

  - `data.accounts.using_default` (boolean)
    Whether the account uses the server-wide default retention setting.
* true — Uses the server default.
* false — Uses a custom retention value.

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "list_accounts_retention"

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


