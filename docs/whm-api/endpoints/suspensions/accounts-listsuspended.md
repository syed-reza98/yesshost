# Return suspended cPanel accounts and information

This function lists suspended accounts on the server.

Endpoint: GET /listsuspended
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.account` (array)
    A list of objects containing suspended account data.

  - `data.account.is_locked` (integer)
    Whether the account is locked.
* 1 - Locked.
* 0 - Not locked.
    Enum: 0, 1

  - `data.account.owner` (string)
    The cPanel account's owner.
- root
- A reseller's username.
- The account's username.
    Example: "root"

  - `data.account.reason` (string)
    The reason why the account is suspended, if one exists.
    Example: "Suspended for nonpayment."

  - `data.account.time` (string)
    The current date and time in Day Mon DD HH:mm:SS YYYY human-readable format, where:
* Day - represents the day of the week as a three-letter abbreviation.
* Mon - represents the month's three-letter abbreviation.
* DD - represents the date.
* HH - represents the hour.
* mm - represents the minute.
* SS - represents the second.
* YYYY - represents the year.
    Example: "Thu Nov 18 10:34:34 2014"

  - `data.account.unixtime` (integer)
    The current date and time.
    Example: 1416306874

  - `data.account.user` (string)
    The cPanel account's username.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "listsuspended"

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


