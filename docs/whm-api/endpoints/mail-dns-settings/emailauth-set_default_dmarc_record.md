# Set the server's default DMARC record

This function sets the server's default DMARC record.

The system uses the default DMARC record when creating new accounts or applying DMARC policies that don't specify a custom record.

Note:

 You can pass an empty string to remove the custom default and revert to the built-in default record.

Endpoint: GET /set_default_dmarc_record
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `record` (string)
    The DMARC record to set as the server default.

Note:

The record must be a valid DMARC record that starts with v=DMARC1; and contains a policy directive (p=none, p=quarantine, or p=reject).

Pass an empty string to remove the custom default and revert to the built-in default.

Visit the following link for more information about the DMARC record specification: https://dmarc.org/resources/specification/.

## Response 200 fields (application/json):

  - `data` (object)

  - `data.payload` (object)
    An object that contains the operation result.

  - `data.payload.success` (integer)
    Indicates whether the operation was successful.
* 1 - The default DMARC record was set successfully.
    Example: 1

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "set_default_dmarc_record"

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


