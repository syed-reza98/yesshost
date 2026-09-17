# Return all cPanel account unique email recipients

This function gets a count of the email addresses that each system account sent mail to within a specific period of time. It groups the data by each system user for all the system's users.

Endpoint: GET /get_unique_sender_recipient_count_per_user
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `end_time` (integer, required)
    An end time to query.
    Example: 1551192100

  - `start_time` (integer, required)
    A start time to query.
    Example: 1550702383

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contain a count for all system users' unique email recipients.

  - `data.payload.unique_sender_recipient_count` (integer)
    A count of the unique sender-recipient pairs for mail sent during a period of time.
    Example: 120

  - `data.payload.user` (string)
    A system user's username.
    Example: "username"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_unique_sender_recipient_count_per_user"

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


