# Return backup files sent through transport

This function lists backup files that the system sent through a specified additional backup transport.

Endpoint: GET /backup_list_transported
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `transport` (string)
    The transport ID.

If you do not specify this parameter, the function returns backup information for all transports.

Note:

You may obtain the IDs for all configured transports by calling WHM API 1's backup_destination_list function.
    Example: "nN04BhzirlJUNSLSBXSMBEYG"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.remote_backups` (object)
    An object containing the backup destination information.
    Example: {"nN04BhzirlJUNSLSBXSMBEYG":{"janedoe":["2020-08-28T00:00:00.000Z","2020-08-31T00:00:00.000Z","2020-09-02T00:00:00.000Z"]}}

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "backup_list_transported"

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


