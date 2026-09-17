# Remove IPv6 address range from account

This function removes the IPv6 address from an account.

Notes:

- When you disable IPv6 on an account, the system unbinds that IPv6 address from your server and the account loses the address. If you enable IPv6 on that account again, the system assigns it a different IPv6 address.
- For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /ipv6_disable_account
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    A comma delimited list of account names.
    Example: "user1,user2,user3"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.fail_cnt` (integer)
    The number of accounts that failed to disable IPv6.

Note

The function only returns this value if any failures exist.

  - `data.failures` (array)
    List of accounts where IPv6 disable failed

Note

The function only returns this value if any failures exist.

  - `data.failures.name` (string)
    The name of the account where IPv6 disable failed
    Example: "user1"

  - `data.failures.reason` (any)
    The reason for the IPv6 disable failure
    Example: "The “user1” account does not exist."

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ipv6_disable_account"

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


