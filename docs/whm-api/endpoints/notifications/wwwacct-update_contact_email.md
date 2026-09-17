# Update WHM contact email address

This function updates the contact email address in the wwwacct.conf file.
For more information, read our 
Installation Guide - Customize Your Installation
documentation.

Endpoint: GET /update_contact_email
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `contact_email` (string, required)
    The contact email address to add as the wwwacct.conf file's CONTACTEMAIL
setting.
    Example: "user@example.com"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "update_contact_email"

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


