# Enable Technical Support Agreement acceptance

This function records a user's acceptance of the Technical Support
Agreement (TSA). The cPanel Customer Portal stores each record with the user's
login, the date and time, and the TSA's version.

Note:

This function is not available through the command line.
You must call it as a request body.

Endpoint: GET /ticket_update_service_agreement_approval
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `version` (string, required)
    The version of the TSA that the user approved.
    Example: "2020-04.v01.TSUPPORT"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "ticket_update_service_agreement_approval"

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


