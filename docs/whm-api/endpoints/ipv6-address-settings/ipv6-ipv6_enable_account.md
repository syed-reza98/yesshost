# Add IPv6 address range to accounts

This function assigns an IPv6 address to one or more accounts.

Note:

You must perform at least one of the following actions before you call this function:
   Use WHM's IPv6 Ranges interface (WHM >> Home >> IP Functions >> IPv6 Ranges*) or WHM API 1's ipv6_range_add function to add one or more IPv6 address ranges for use as dedicated IPv6 addresses.
   Use WHM's Basic WebHost Manager Setup interface (WHM >> Home >> Server Configuration >> Basic WebHost Manager Setup*) or modify the /etc/wwwacct.conf file to add a shared IPv6 address to the server.
   For all of cPanel & WHM's features to function properly on IPv6, the cpsrvd daemon must listen on IPv6 addresses. To enable this functionality, select On for the Listen on IPv6 Addresses setting in the System section of WHM's Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings*).

Important:

When you disable the Web Server role, the system disables this function.

Endpoint: GET /ipv6_enable_account
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `range` (string, required)
    The IPv6 address range's name.

Note:

The range name SHARED will assign the server's shared IPv6 address to the account(s).
    Example: "Hosting_IPv6_Block"

  - `user` (string, required)
    A comma-delimited list of account names.
    Example: "user1,user2,user3"

## Response 200 fields (application/json):

  - `data` (object)
    Example: {"fail_cnt":2,"failures":{"brain":"The “brain” account does not exist.","pinky":"The “pinky” account does not exist."},"ipv6":{"chewie":"2001:0db8:1a34:56cf:0000:0000:0000:0000","cptest":"2001:0db8:1a34:56cf:0000:0000:0000:0001","domain1":"2001:0db8:1a34:56cf:0000:0000:0000:0002"}}

  - `data.fail_cnt` (integer)
    The number of accounts that failed to enable IPv6.
    Example: 2

  - `data.failures` (object)
    List of accounts where IPv6 enable failed.
    Example: {"brain":"The “brain” account does not exist.","pinky":"The “pinky” account does not exist."}

  - `data.ipv6` (object)
    The IPv6 addresses that the system assigned to each account.
    Example: {"chewie":"2001:0db8:1a34:56cf:0000:0000:0000:0000","cptest":"2001:0db8:1a34:56cf:0000:0000:0000:0001","domain1":"2001:0db8:1a34:56cf:0000:0000:0000:0002"}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ipv6_enable_account"

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


