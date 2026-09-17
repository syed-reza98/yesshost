# Return cPanel account unique email recipients

This function gets the number of unique recipients that a system user sent mail to within a period of time. It groups this data by each of the user's email accounts.

Endpoint: GET /get_unique_recipient_count_per_sender_for_user
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `end_time` (integer, required)
    An end time to query.
    Example: 1550923200

  - `start_time` (integer, required)
    A start time to query.
    Example: 1550872800

  - `user` (string, required)
    The system user's username.
    Example: "username"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (array)
    An array of objects that contain a count of the number of unique recipients a system user sent mail to.

  - `data.payload.sender` (string)
    The user's email address.
    Example: "username@example.com"

  - `data.payload.unique_recipient_count` (integer)
    The number of unique recipients that the email account sent mail to.
    Example: 51

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_unique_recipient_count_per_sender_for_user"

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


