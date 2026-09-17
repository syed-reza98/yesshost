# Return reseller's owned accounts' information

This function lists a reseller's total accounts, suspended accounts, and account creation limit.

Endpoint: GET /acctcounts
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string)
    A reseller's username, to query that reseller. If you do not specify a value, the function lists information for the authenticated account.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.reseller` (object)
    An object that contains information for an account.

  - `data.reseller.active` (integer)
    The number of active accounts that the reseller account owns.
    Example: 9

  - `data.reseller.limit` (integer,null)
    The maximum number of accounts that the reseller account may create, if a maximum exists.

NOTE:

A null value indicates that the reseller does not have an account creation limit.
    Example: 25

  - `data.reseller.suspended` (integer,null)
    The number of suspended accounts that the reseller account owns.
    Example: 5

  - `data.reseller.user` (string)
    The reseller account's username or the root user.
    Example: "root"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "acctcounts"

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


