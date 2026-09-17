# Enable CORS HTTP requests

This function allows your system to perform Cross-Origin Resource Sharing (CORS) HTTP requests.

Endpoint: GET /cors_proxy_get
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `url` (string, required)
    The website that you wish to access.
    Example: "http://www.example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data._cp_redirects` (array,null)
    An array that contains the redirects which the website performs, if any exist.

Notes:

* This return counts redirects.
* If any redirects exist, this returns as an array of objects containing the content, protocol, reason, status, success, and url returns and the headers object.
* null  - Redirects do not exist.

Note:

 The JSON example output above displays this condition.

  - `data._cp_redirects.headers` (object,null)
    An object containing the header fields that the request returned.

Note:

This object's keys vary based on the URL's headers.
    Example: {"age":"425879","cache-control":"max-age=604800","content-length":"1256","content-type":"text/html; charset=UTF-8","date":"Thu, 05 Mar 2020 23:42:25 GMT","etag":"\"3147526947+ident\"","expires":"Thu, 12 Mar 2020 23:42:25 GMT","last-modified":"Thu, 17 Oct 2019 07:18:26 GMT","server":"ECS (dab/4BA8)","vary":"Accept-Encoding","x-cache":"HIT"}

  - `data._cp_redirects.protocol` (string,null)
    The URL's HTTP protocol.
    Example: "HTTP/1.1"

  - `data._cp_redirects.reason` (string,null)
    The response that the server returned.
    Example: "OK"

  - `data._cp_redirects.status` (string,null)
    The response's HTTP status code.
    Example: "200"

  - `data._cp_redirects.success` (integer,null)
    Whether the function returned a 2XX HTTP status code.
- 1 -  Success.
- 0 -  Failure.
    Enum: 0, 1

  - `data._cp_redirects.url` (string,null)
    The URL that provided the response.
    Example: "http://www.example.com"

  - `data.content` (string)
    The URL's content.

Note:

 We strongly recommend that you confirm the content's type before you use the content return's value. The function may also return this value in the _cp_redirects array of hashes. A valid string.
    Example: "<!doctype html>\\n<html>\\n<head>\\n <title>Example Domain</title>\\n\\n <meta charset=\\\"utf-8\\\" />\\n <meta http-equiv=\\\"Content-type\\\" content=\\\"text/html; charset=utf-8\\\" />\\n <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\" />\\n <style type=\\\"text/css\\\">\\n body {\\n background-color: #f0f0f2;\\n margin: 0;\\n padding: 0;\\n font-family: -apple-system, system-ui, BlinkMacSystemFont, \\\"Segoe UI\\\", \\\"Open Sans\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n\\n }\\n div {\\n width: 600px;\\n margin: 5em auto;\\n padding: 2em;\\n background-color: #fdfdff;\\n border-radius: 0.5em;\\n box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);\\n }\\n a:link, a:visited {\\n color: #38488f;\\n text-decoration: none;\\n }\\n @media (max-width: 700px) {\\n div {\\n margin: 0 auto;\\n width: auto;\\n }\\n }\\n </style>\\n</head>\\n\\n<body>\\n<div>\\n <h1>Example Domain</h1>\\n <p>This domain is for use in illustrative examples in documents. You may use this\\n domain in literature without prior coordination or asking for permission.</p>\\n <p><a href=\\\"https://www.iana.org/domains/example\\\">More information...</a></p>\\n</div>\\n</body>\\n</html>\\n"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "cors_proxy_get"

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


