# Return all cPanel accounts disk usage

This function lists the disk usage status of the system's user accounts. This also lists information about file system object (inode) usage.

Endpoint: GET /get_disk_usage
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `cache_mode` (string)
    Each cPanel & WHM server maintains a cache of users’ disk quota
usage. This parameter controls the way this function will use
that cache.

* on - Use the quota cache. This is fast, but it may be inaccurate.
* off - Ignore the quota cache. This is slower, but it will be more accurate.
    Enum: "on", "off"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.accounts` (array)
    A list of objects containing the disk usage data for all accounts on the server.

  - `data.accounts.blocks_limit` (integer,null)
    The account's disk space quota, in kibibytes (KiB).
* null - The account has unlimited disk space.

  - `data.accounts.blocks_used` (integer)
    The account's current disk space usage, in kibibytes (KiB).
    Example: 2632

  - `data.accounts.inodes_limit` (integer,null)
    The account's inode quota.
* null - The account has an unlimited number of inodes.
    Example: 9999

  - `data.accounts.inodes_used` (integer)
    The account's current inode usage.
    Example: 340

  - `data.accounts.user` (string)
    The cPanel or Reseller account username.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_disk_usage"

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


