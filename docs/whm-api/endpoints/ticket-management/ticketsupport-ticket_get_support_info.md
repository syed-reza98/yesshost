# Import customer information from Customer Portal

This function retrieves the license holder's support-related information.

Note:

* This function is not available through the command line. You must call
it as a request body.
* To use this function, you must set up a cPanelID token in your current session.
For more information, read our
cPanelID
documentation.

Endpoint: GET /ticket_get_support_info
Version: 11.138.0.6
Security: BasicAuth

## Response 200 fields (application/json):

  - `data` (object)

  - `data.arch` (string)
    The server's CPU architecture retrieved at the last license check.
    Example: "x86_64"

  - `data.arch_supported` (integer)
    Whether cPanel Support provides assistance with the server's CPU architecture.

* 1 — Yes.
* 0 — No.
* -1 — Unknown architecture.
    Enum: 1, 0, -1

  - `data.company_id` (integer)
    A number that represents the company with the licensed IP address.
    Example: 7

  - `data.company_name` (string)
    The company name associated with the submitted IP address.
    Example: "Example, L.L.C."

  - `data.distro` (string)
    The server's operating system retrieved during the last license check.
    Example: "centos enterprise 6.8"

  - `data.distro_supported` (integer)
    Whether cPanel Technical Support provides assistance for the server's
operating system.

* 1 — Yes.
* 0 — No.
* -1 — Unknown OS.
    Enum: 1, 0, -1

  - `data.gets_direct_support` (integer)
    Whether the IP address owner's primary support is WebPros International LLC.

* 1 — Receives initial support from WebPros International, LLC.
* 0 — Receives initial support from a partner.
    Enum: 0, 1

  - `data.has_company_info` (integer)
    Whether the response contains the company information associated with
the licensed IP address.

* 1 — Contains company info.
* 0 — Does not contain company info.
    Enum: 0, 1

  - `data.has_compatibility_info` (integer)
    Whether the response contains the server's compatibility information.

* 1 — Contains compatibility info.
* 0 — Does not contain compatibility info.
    Enum: 0, 1

  - `data.hostname` (string)
    The hostname or IP address of the server, as recorded in the license database.
    Example: "server.example.com"

  - `data.ip` (string)
    The license provider's IP address.
    Example: "192.168.0.1"

  - `data.logo_url` (string)
    The optional URL to the company's brand image file on the partner website.
    Example: "http://example.com/assets/ourlogo.png"

  - `data.pub_support_contact` (string)
    The URL to the company's general support resources, if available.
    Example: "http://documentation.example.com/"

  - `data.pub_tech_contact` (string)
    The optional URL to the company's technical support resources.

Note:

If the pub_tech_contact return does not contain a value, the system
will use the pub_support_contact return's value.
    Example: "https://support.example.com/"

  - `data.tech_contact_email` (string)
    The contact email address for the company's technical support.
    Example: "support@example.com"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_get_support_info"

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


