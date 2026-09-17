# Return cPanel account bandwidth information

This function retrieves account bandwidth information.

Endpoint: GET /showbw
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `month` (integer)
    The month to query, in numeric format.

This value defaults to the current month.
    Example: 12

  - `search` (string)
    A Perl Compatible Regular Expression (PCRE)
that filters the results. The system matches the PCRE against the searchtype
parameter's specified type.

If you do not specify a value for both the searchtype and search
parameters, the function does not use the search criteria.
    Example: "ownername"

  - `searchtype` (string)
    The account information to query.

* domain — Match domains against the search regular expression.
* owner — Match the WHM user who owns the account against the search
regular expression.
* user — Match usernames against the search regular expression.
* ip — Match IP addresses against the search regular expression.
* package — Match hosting plans (packages) against the search regular
expression.

If you do not specify a value for both the searchtype and search
parameters, the function does not use the searchtype value.
    Enum: "domain", "owner", "user", "ip", "package"

  - `showres` (string)
    The reseller to query.

If you do not specify a value, the function queries all users.
    Example: "reseller_user"

  - `year` (integer)
    The year to query.

This value defaults to the current year.
    Example: 2019

## Response 200 fields (application/json):

  - `data` (object)

  - `data.acct` (array)
    Bandwidth information for the reseller's accounts.

  - `data.acct.bwusage` (array)
    The bandwidth information for domains on the account.

  - `data.acct.bwusage.deleted` (integer)
    Whether the account was deleted.

* 1 — Deleted.
* 0 — Not deleted.
    Enum: 1, 0

  - `data.acct.bwusage.domain` (string)
    The domain on the account.
    Example: "example.com"

  - `data.acct.bwusage.usage` (integer)
    The domain's bandwidth usage during the queried period, in bytes.

  - `data.acct.deleted` (integer)
    Whether the account was deleted.

* 1 — Deleted.
* 0 — Not deleted.
    Enum: 1, 0

  - `data.acct.limit` (integer)
    The account's bandwidth limit, in bytes.

  - `data.acct.maindomain` (string)
    The account's main domain.
    Example: "example.com"

  - `data.acct.owner` (string)
    The account's owner.
    Example: "root"

  - `data.acct.reseller` (integer)
    Whether the user is a reseller.

* 1 — Reseller account.
* 0 — Not a reseller account.
    Enum: 1, 0

  - `data.acct.totalbytes` (integer)
    The account's total bandwidth usage during the queried period, in bytes.
    Example: 352

  - `data.acct.user` (string)
    The account username.
    Example: "user"

  - `data.month` (integer)
    The queried month.
    Example: 12

  - `data.reseller` (string)
    The reseller username or the root user.
    Example: "root"

  - `data.totalused` (integer)
    The total bandwidth usage of the reseller's accounts during the queried period, in bytes.
    Example: 352

  - `data.year` (integer)
    The queried year.
    Example: 2019

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "showbw"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


