# Send Pushbullet™ test with access token

This function uses the specified access token to send a test Pushbullet™ note. The function automatically generates a message title and body, and it includes a unique string in the test message. When the test message returns, the system searches for the ID string and returns it.

If the function does not detect the correct ID string in the returned message, the function fails. You can also review the user's Pushbullet channel history to confirm that the server sent and received the message.

The test's success or failure depends on various conditions. For example:
  * Valid access token.
  * Network configuration.
  * Service outages.
  * External server rate limit.

Endpoint: GET /send_test_pushbullet_note
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `access_token` (string, required)
    The Pushbullet token to use.

Note:

 To access your Pushbullet token, navigate to Pushbullet's My Account page. It will appear under the Access Token* heading.
* This is confidential information that your server sends via a secure channel.
    Example: "a1b2c3d4e5f6g7h8i9j0"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.message_id` (string)
    The test message's ID.
    Example: "554d2cbd-efe61da3cacb"

  - `data.payload` (object)
    The payload from the Pushbullet server. For more information, visit [Pushbullet's API documentation](https://docs.pushbullet.com/).
    Example: {"active":true,"body":"This message confirms that \"hostname.example.com\" (192.168.0.20) can send a message to you via Pushbullet.\n\nThis message was sent on Monday, May 18, 2015 at 7:12:20 PM UTC.","created":1431976341.38872,"direction":"self","dismissed":false,"iden":"ujw5ScArtjUsjAeRXXMLGS","modifiedx":1431976341.39182,"receiver_email":"user@example.com","receiver_email_normalized":"user@example.com","receiver_iden":"ujw5ScArtjU","sender_email":"user@example.com","sender_email_normalized":"user@example.com","sender_iden":"ujw5ScArtjU","sender_name":"Firstname Lastname","title":"Test message (ID: 555a3994-173a4a271062d)","type":"note"}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "send_test_pushbullet_note"

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


