# Create integration link group

This function creates a group to store integrations links in the cPanel interface.

Endpoint: GET /create_integration_group
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `group_id` (string, required)
    The group's ID within the system.

Warning:

 If you create a link with a group_id value that already exists, the function replaces the existing group with the newly-created group.
    Example: "WHMCS"

  - `label` (string, required)
    The label for the group to display in the cPanel interface.
    Example: "WHMCS+Control"

  - `order` (integer, required)
    The order in which to display the group in the cPanel interface.

Note:

 By default, the function will automatically create an item under the username menu in the interface header.
    Example: 1

  - `user` (string, required)
    The cPanel account name.
    Example: "username"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "create_integration_group"

  - `metadata.reason` (string)
    The reason the API function failed when the metadata.result field is 0. This field may display a success message when a function succeeds.
    Example: "Ok"

  - `metadata.result` (integer)
    * 1 - Success
* 0 - Failed: Check the reason field for more details.
    Enum: 0, 1

  - `metadata.version` (integer)
    The version of the API function.
    Example: 1


