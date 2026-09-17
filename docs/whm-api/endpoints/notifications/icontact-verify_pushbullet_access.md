# Send Pushbullet™ access verification

This function calls the WHM API 1 send_test_pushbullet_note function with the system's specified
Pushbullet™ accounts. You can specify Pushbullet accounts in the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (Home >> Server Configuration >> Basic WebHost Manager Setup).

Endpoint: GET /verify_pushbullet_access
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.results` (array)

  - `data.results.access_token` (string)
    The Pushbullet token used.

Note:
* To access your Pushbullet token, navigate to
[Pushbullet's My Account](https://go.cpanel.net/pushbulletaccount)
page. It will appear under the Access Token heading.
* This is confidential information that your server sends via a secure channel.
    Example: "123456789012345678901234567890"

  - `data.results.result` (object)

  - `data.results.result.message_id` (string)
    The test message's ID.
    Example: "554d2cbd-efe61da3cacb"

  - `data.results.result.payload` (object)
    The payload from the Pushbullet server.

For more information, visit
[Pushbullet's API documentation](https://go.cpanel.net/pushbulletdocs).
    Example: {"active":"true,","body":"This message confirms that ??hostname.example.com?? (192.168.0.20) can send a\nmessage to you via Pushbullet.\n\nThis message was sent on Tuesday, March 17, 2020 at 3:09:20 PM UTC.","created":"1584457760.74319,","direction":"self","dismissed":"false,","iden":"ABCDEFGHIJKLABCDEFGHIJKL","modified":"1584457760.74993,","receiver_email":"user@example.com","receiver_email_normalized":"user@example.com","receiver_iden":"ABCDEFGHIJKL","sender_email":"user@example.com","sender_email_normalized":"user@example.com","sender_iden":"ABCDEFGHIJKL","sender_name":"Firstname Lastname","title":"Test message (ID: J2SY)","type":"note"}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "verify_pushbullet_access"

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


