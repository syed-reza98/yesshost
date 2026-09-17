# Import Technical Support Agreement text

This function retrieves the WebPros International, LLC Technical Support Agreement text
and metadata about the user's agreement status from the
cPanel Customer Portal.

Note:
* This function is not available through the command line. You must call it
as a request body.
* To use this function, you must set up a cPanelID token in your current session.
For more information, read our
cPanelID
documentation.

Endpoint: GET /ticket_get_support_agreement
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.accepted` (integer)
    Whether the user associated with the OAuth token has already accepted this
version of the agreement.

* 1 — Accepted.
* 0 — Not accepted.
    Enum: 0, 1

  - `data.accepted_date` (integer,null)
    The [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time)
at which the user associated with the OAuth token accepted the
Technical Support Agreement.

* A valid Unix timestamp.
* null — Never accepted.
    Example: 1566000000

  - `data.accepted_date_human` (string,null)
    The human-readable date at which the user associated with the OAuth token
accepted the Technical Support Agreement.

* A human-readable date, in MM/DD/YY format.
* null — Never accepted.
    Example: "8/17/19"

  - `data.body` (string)
    The full Technical Support Agreement.

Note:

This returned value may contain HTML.
    Example: "<p>IMPORTANT: THIS TECHNICAL SUPPORT AGREEMENT ... at the end of AGREEMENT"

  - `data.create_date` (integer)
    The creation or publication Unix timestamp of the Technical Support Agreement's current version.
    Example: 1564790400

  - `data.create_date_human` (string)
    The human-readable date at which the current version of the Technical Support Agreement was created or published, in MM/DD/YY format.
    Example: "8/3/19"

  - `data.download_url` (string)
    The URL at which the end-user may download the support agreement.
    Example: "https://www.cpanel.net/legal/techagreement_download.cgi"

  - `data.title` (string)
    The Technical Support Agreement's title.
    Example: "Technical Support Agreement"

  - `data.version` (string)
    The Technical Support Agreement's version.
    Example: "2019-04.v01.TSUPPORT"

  - `data.view_url` (string)
    The URL at which the end-user may view the Technical Support Agreement agreement as a standalone HTML document.
    Example: "http://cpanel.com/technical-support-agreements.html"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_get_support_agreement"

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


