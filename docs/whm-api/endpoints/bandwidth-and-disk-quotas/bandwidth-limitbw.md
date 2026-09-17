# Update cPanel account bandwidth quota

This function modifies a cPanel account's bandwidth quota.

Endpoint: GET /limitbw
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `user` (string, required)
    The username of a cPanel account on the server.
    Example: "username"

  - `bwlimit` (any)
    The account's new bandwidth quota, in megabytes (MB).
* 0 and unlimited - Grant the user unlimited bandwidth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.bwlimits` (array)
    An array of objects containing account information.

  - `data.bwlimits.bwlimit` (integer)
    The account's new bandwidth quota, in megabytes (MB).
* 0 - The user has unlimited bandwidth.

  - `data.bwlimits.bwlimitenable` (integer)
    Whether bandwidth limiting is enabled for the account.
* 1 - Enabled.
* 0 - Disabled.
    Enum: 0, 1

  - `data.bwlimits.domains` (array)
    An array of all of the cPanel account's domains.
    Example: ["example.com","addondomain.com","subdomain.example.com"]

  - `data.bwlimits.human_bwlimit` (string)
    The account's bandwidth quota, in human-readable format.
* unlimited - The user has unlimited bandwidth.
* A positive integer that represents a maximum monthly bandwidth use, a space, and the string MB.
    Example: "500 MB"

  - `data.bwlimits.human_bwused` (string)
    The account's current bandwidth usage, in human-readable format.
* none
* A positive integer that represents the amount of bandwidth used, a space, and the string MB.
    Example: "none"

  - `data.bwlimits.unlimited` (integer)
    Whether the account's bandwidth quota is unlimited.
* 1 - Unlimited.
* 0 - Not unlimited.
    Enum: 0, 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "limitbw"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Bandwidth Limit for username has been set to unlimited megabytes"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


