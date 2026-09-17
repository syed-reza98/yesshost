# Delete DNS zone record

This function deletes a DNS zone record.

Warning:

Incorrect use of this function could cause domains to resolve incorrectly. Exercise extreme caution when you remove DNS zone records.

To effectively use this function, use the following workflow:
1. Run the dumpzone function.
2. Locate the Line value that corresponds to the zone record to delete.
3. Use the values from that zone record to formulate the appropriate removezonerecord parameters.

Important:

 * When you disable the DNS role, the system disables this function.
 * You cannot use this function to modify temporary domains.

Endpoint: GET /removezonerecord
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `line` (integer, required)
    The DNS zone record file's line number.
    Example: 4

  - `zone` (string, required)
    The zone record's domain.
    Example: "example.com"

  - `serialnum` (string)
    The zone file's serial number.

This parameter defaults to the zone file's current serial number.
    Example: "2013122501"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "removezonerecord"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Bind reloading on hostname using rndc zone: [example.com]\n"

  - `metadata.result` (integer)
    * 1 - Success.
* 0 - Failed. Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


