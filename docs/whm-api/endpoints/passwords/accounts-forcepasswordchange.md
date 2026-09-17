# Enable forced password update

This function forces a user to change the account password after the next login attempt.

Endpoint: GET /forcepasswordchange
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `users_json` (string, required)
    The list of users. The system will force each user that you specify to change their account's password the next time that they log in.
    Example: "{\"user1\":1,\"user2\":1,\"user3\":1}"

  - `stop_on_failure` (integer)
    Whether to halt the function if it experiences an error.
* 1 - Halt on error.
* 0 - Continue on error.
    Enum: 0, 1

## Response 200 fields (application/json):

  - `data` (object)

  - `data.updated` (array)
    A list of usernames that the system will force to change their passwords. One or more valid usernames.
    Example: ["user"]

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "forcepasswordchange"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    - 1 - Success
- 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


