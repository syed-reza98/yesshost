# Send notification URL via POST

This function uses the specified URL to send a test message through the POST method of HTTP as form data.
The function automatically generates a message title and body and includes a unique string in the test message.
When the test message returns, the system searches for the ID string and returns it.

If the function does not detect the correct ID string in the returned message, the function fails.

The test's success or failure depends on various conditions. For example:
* Valid access token.
* Network configuration.
* Service outages.
* External server rate limit.

Endpoint: GET /send_test_posturl
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `url` (string, required)
    The URL and query string to send in uuencoded format. The system automatically sends the parameter's hostname, subject, and body with the relevant data from the alert.

Note:

* To send additional parameters, include those keys after the URL. For example, to send the apikey parameter with a value of XXXXX, append ?apikey=XXXXX to the URL.
* To add additional parameters and values, separate those additional values with the ampersand character (&) instead of the question mark character (?). For example, to include a state parameter of Texas and a status parameter of CRITICAL, append ?apikey=XXXXX&state=Texas&status=CRITICAL to the URL.
* If you enter a secure URL (https://), that site's certificate must be valid.
    Example: "https%3A%2F%2Fwww.example.com%2Fevents.cgi%3Fapikey%3D12345%26user%3Dusername*password%3D12345luggage"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.message_id` (string)
    The test message's ID.
    Example: "554d2cbd-efe61da3cacb"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "send_test_posturl"

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


