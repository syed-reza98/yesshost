# Return Greylisting deferred incoming email triplets

This function lists Greylisting's deferred triplets.
Greylisting identifies incoming email by triplets.

A triplet is a collection of three pieces of data:
* the IP address
* the sender's address
* the recipient's address

Endpoint: GET /read_cpgreylist_deferred_entries
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.greylist_deferred_entries` (array)
    An object of deferred triplet data.

  - `data.greylist_deferred_entries.accepted_count` (integer)
    The number of times that Greylisting accepted the triplet.

  - `data.greylist_deferred_entries.block_exp_time` (string)
    The date and time when Greylisting will no longer defer the triplet.
    Example: "2015-03-23T12:09:32.000Z"

  - `data.greylist_deferred_entries.create_time` (string)
    The date and time when Greylisting created the triplet.
    Example: "2015-03-23T11:59:32.000Z"

  - `data.greylist_deferred_entries.deferred_count` (integer)
    The number of times Greylisting deferred the triplet.
    Example: 1

  - `data.greylist_deferred_entries.from_addr` (string)
    The email address that the system identified as the triplet's sender.
    Example: "fromaddress1.com@example.com"

  - `data.greylist_deferred_entries.id` (integer)
    The identification number that the system assigned to the triplet.
    Example: 45

  - `data.greylist_deferred_entries.must_retry_by` (string)
    The date and time when Greylisting will no longer accept the resent triplet.
    Example: "2015-03-23T15:59:32.000Z"

  - `data.greylist_deferred_entries.record_exp_time` (string)
    The date and time when Greylisting will purge the triplet from the database.
    Example: "2015-03-26T11:59:32.000Z"

  - `data.greylist_deferred_entries.sender_ip` (string)
    The IP address that the system identified as the triplet's sender.
    Example: "97.215.255.29"

  - `data.greylist_deferred_entries.to_addr` (string)
    The email address that the system identified as the triplet's recipient.
    Example: "toaddress1.com@example.com"

  - `data.limit` (integer)
    The number of triplets in the interface.
    Example: 20

  - `data.offset` (integer)
    The number of triplets to skip from the beginning of the query in the interface.
    Example: 20

  - `data.server_timezone` (string)
    The standard letter code abbreviation for the time zone.
    Example: "CDT"

  - `data.server_tzoffset` (integer)
    The time zone offset in minutes.
    Example: 60

  - `data.total_rows` (integer)
    The total number of triplets in the database.
    Example: 3

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "read_cpgreylist_deferred_entries"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0.
This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


