# Update a DNS zone

This function updates a given DNS zone. It can add, edit,
and remove many records in a single call. It also ensures
that each record not removed will occupy the same
number of lines after the edit as it did before the edit.

NOTE:

You cannot use this function to modify temporary domains.

Endpoint: GET /mass_edit_dns_zone
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `serial` (integer, required)
    The current serial number in the DNS zone’s SOA (Start of Authority)
record. If this value does not match the zone’s current state, the
request fails.
    Example: 202001010100

  - `zone` (string, required)
    The name of one of the user’s DNS zones.
    Example: "example.com"

  - `add` (array)
    The records to add to the zone. Each item must be a serialized
JSON object that contains:

* dname — The record’s name.
* ttl — The record’s TTL (Time-To-Live) value.
* record_type — The record’s type. For example, A or TXT.
* data — An array of strings. The format and number of the
  strings depend on the record_type value.

  - `edit` (array)
    The records to edit in the zone. Each item must be a serialized
JSON object that contains:

* line_index — The line number in the DNS zone where the record starts.
  This is a 0-based index, so to edit the first line in the file
  use the 0 value. To edit the second line, give 1, and so forth.
* dname — The record’s name.
* ttl — The record’s TTL (Time-To-Live) value.
* record_type — The record’s new type. For example, A or TXT.
* data — An array of strings. The format and number of the
  strings depend on the record_type value.
    Example: ["'{\"line_index\": 9, \"dname\":\"example\", \"ttl\":14400, \"record_type\": \"TXT\", \"data\":[\"string1\", \"string2\"]}'"]

  - `remove` (array)
    The line indexes of records to remove from the zone.
    Example: [22]

## Response 200 fields (application/json):

  - `data` (object)

  - `data.new_serial` (integer)
    The DNS zone’s SOA record’s new serial number.
You can use this to submit later edits if you
track the number of lines each record takes up.
    Example: 2021031903

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "mass_edit_dns_zone"

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


