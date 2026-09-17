# Send notification URL via POST verification

This function calls the WHM API 1 send_test_posturl function for
your specified POST notification URLs. Users can specify POST notification
URLs in the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (WHM >> Home >> Server Configuration >> Basic WebHost Manager Setup).

Note:

If the Contact Information section of WHM's
Basic WebHost Manager Setup
interface (Home >> Server Configuration >> Basic WebHost Manager Setup) contains
multiple POST URLs, the function will return an array that contains the results
for each URL.

Endpoint: GET /verify_posturl_access
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.results` (array)
    An array of objects containing POST notification URL data.

  - `data.results.result` (object)
    A list of data about the POST notification URLs.

  - `data.results.result.message_id` (string)
    The test message's ID.
    Example: "88M7"

  - `data.results.result.payload` (object)
    A list that contains information about a POST notification URL.

  - `data.results.result.payload.content` (string)
    The URLs content.
    Example: "<!doctype html>\n<html>\n<head>\n    <title>Example Domain</title>\n\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <style type=\"text/css\">\n    body {\n        background-color: #f0f0f2;\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    }\n    div {\n        width: 600px;\n        margin: 5em auto;\n        padding: 2em;\n        background-color: #fdfdff;\n        border-radius: 0.5em;\n        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);\n    }\n    a:link, a:visited {\n        color: #38488f;\n        text-decoration: none;\n    }\n    @media (max-width: 700px) {\n        div {\n            margin: 0 auto;\n            width: auto;\n        }\n    }\n    </style>\n</head>\n\n<body>\n<div>\n    <h1>Example Domain</h1>\n    <p>This domain is for use in illustrative examples in documents. You may use this\n    domain in literature without prior coordination or asking for permission.</p>\n    <p><a href=\"https://www.iana.org/domains/example\">More information...</a></p>\n</div>\n</body>\n</html>\n"

  - `data.results.result.payload.headers` (object)
    An object of the header fields that the request returned.

Note:

This object's returns vary based on the URL's headers.
    Example: {"connection":"keep-alive","content-length":"743","content-type":"application/json; charset=utf-8","date":"Tue, 05 May 2020 19:10:13 GMT","e-tag":"z'W/\\\"2e7-Klmw/9Djp5E2M7VZdH2LwFWXX6s\\\"\"","server":"nginx","set-cookie":"sails.sid=s%3Arpjt9JrVXDIYMxpjyUqLuCtcUxSwbEWX.6ldYuWKV2zqn%2BhmsUlAi7PtsIEd9RXI32y6gjg0gwJA; Path=/; HttpOnly","vary":"Accept-Encoding"}

  - `data.results.result.payload.protocol` (string)
    The URL's HTTP protocol.
    Example: "HTTP/1"

  - `data.results.result.payload.reason` (string)
    The response that the server returned.
    Example: "OK"

  - `data.results.result.payload.status` (string)
    The response's
[HTTP status](https://wikipedia.org/wiki/List_of_HTTP_status_codes)
code.
    Example: "200"

  - `data.results.result.payload.success` (integer)
    Whether the function returned a
[2XX HTTP](https://wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success)
status code.

* 1 — Success.
* 0 — Failure.
    Enum: 0, 1

  - `data.results.result.payload.url` (string)
    The URL that provided the response.
    Example: "http://www.example.com"

  - `data.results.url` (string)
    The URL and query string for the POST notification URL.
    Example: "https://postman-echo.com/post"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "verify_posturl_access"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "OK"

  - `metadata.result` (integer)
    * 1 — Success.
* 0 — Failed. Check the reason field for more details.
    Enum: 1, 0

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


