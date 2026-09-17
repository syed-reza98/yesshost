# Return reseller's information

This function lists data about a reseller's accounts.

Endpoint: GET /resellerstats
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The reseller's username.
    Example: "username"

  - `filter_deleted` (integer)
    Do not display the reseller's deleted cPanel accounts in the function's acct return. This parameter modifies the data output in the acct return.

* 1 — Do not display.
* 0 — Display.
    Enum: 0, 1

  - `filter_suspended` (integer)
    Do not display the reseller's suspended cPanel accounts in the function's acct return. This parameter modifies the data output in the acct return.

* 1 — Do not display.
* 0 — Display.
    Enum: 0, 1

  - `month` (integer)
    The month to query, in numeric format.

This parameter defaults to the current month.
    Example: 2

  - `year` (integer)
    The year to query, in numeric format.

This parameter defaults to the current year.
    Example: 2019

## Response 200 fields (application/json):

  - `data` (object)

  - `data.reseller` (object)
    Object containing data about a reseller account.

  - `data.reseller.acct` (array)
    Array of objects that contains data about all of the reseller's accounts.

Note:

This array also returns the reseller account.

  - `data.reseller.acct.bandwidthlimit` (string)
    The account's bandwidth limit.

* A positive numeric value, encoded as a string, that represents the account's bandwidth limit, in megabytes (MB).
* 0.00 — The account has unlimited bandwidth.
    Example: "500"

  - `data.reseller.acct.bandwidthused` (string)
    The account's current bandwidth use.
A positive numeric value, encoded as a string, that represents the account's bandwidth use, in megabytes (MB).

  - `data.reseller.acct.deleted` (integer)
    Whether the account has been deleted.

* 1 — Deleted.
* 0 — Not deleted.
    Enum: 0, 1

  - `data.reseller.acct.diskquota` (string)
    The account's disk space quota.

* A positive numeric value, encoded as a string, that represents the account's disk space quota, in megabytes (MB).
* 0.00 — The account has unlimited disk space.
    Example: "1100.00"

  - `data.reseller.acct.diskused` (string)
    The account's current disk space use.
A positive numeric value, encoded as a string, that represents the account's current disk space use, in megabytes (MB).
    Example: "1.57"

  - `data.reseller.acct.domain` (string)
    The account's main domain.
    Example: "example1.com"

  - `data.reseller.acct.package` (string)
    The account's hosting plan (package).
    Example: "default"

  - `data.reseller.acct.suspended` (integer)
    Whether the account is suspended.

* 1 — Suspended.
* 0 — Not suspended.
    Enum: 0, 1

  - `data.reseller.acct.user` (string)
    The account's username.
    Example: "example1"

  - `data.reseller.bandwidthlimit` (integer)
    The reseller's total bandwidth limit.

* A positive integer that represents the reseller's bandwidth limit, in megabytes (MB).
* 0 — The reseller has unlimited bandwidth.

  - `data.reseller.bwoverselling` (integer)
    Whether the reseller can oversell bandwidth.

* 1 — The reseller can oversell bandwidth.
* 0 — The reseller cannot oversell bandwidth.
    Enum: 0, 1

  - `data.reseller.diskoverselling` (integer)
    Whether the reseller can oversell disk space.

* 1 — The reseller can oversell disk space.
* 0 — The reseller cannot oversell disk space.
    Enum: 0, 1

  - `data.reseller.diskquota` (integer)
    The reseller's total disk space quota.

* A positive integer that represents the reseller's disk space quota, in megabytes (MB).
* 0 — The reseller has unlimited disk space.

  - `data.reseller.diskused` (number)
    The total amount of disk space that the reseller and all of its accounts use, in megabytes (MB).

Note:

This value does not include disk space the reseller account uses if the root account owns it.
    Example: 5.69

  - `data.reseller.month` (integer)
    The current month or a queried month.
    Example: 2

  - `data.reseller.totalbwalloc` (string)
    The total amount of bandwidth that the reseller has given to its accounts, in megabytes (MB), encoded as a string.
    Example: "500"

  - `data.reseller.totalbwused` (string)
    The total amount of bandwidth that the reseller's accounts have used, in megabytes (MB), encoded as a string.

  - `data.reseller.totaldiskalloc` (string)
    The total amount of disk space that the reseller has given to its accounts, in megabytes (MB), encoded as a string.
    Example: "1100"

  - `data.reseller.user` (string)
    The reseller account's username.
    Example: "username"

  - `data.reseller.year` (integer)
    The current year or a queried year.
    Example: 2019

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "resellerstats"

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


