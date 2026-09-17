# Delete SSL vhost

This function deletes the SSL virtual host.

Endpoint: GET /delete_ssl_vhost
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `host` (string, required)
    The hostname whose SSL virtual host you'd like to delete.
    Example: "example.com"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.output` (array)
    Shows the status of the deletion.
    Example: ["Deleting the SSL host for example.com","Done."]

  - `data.removed_vhost_data` (array)
    The virtual host data that the script removed.

  - `data.removed_vhost_data.ip_port` (array)
    The IP address where the virtual host data resided and its port number.
    Example: ["192.0.2.0","443"]

  - `data.removed_vhost_data.is_ssl` (integer)
    Whether the virtual host was SSL.
* 1 — The host was SSL.
- 0 — The host was not SSL.
    Enum: 0, 1

  - `data.removed_vhost_data.primary_on_ip_port` (string)
    The domain name that the removed virtual host used.
    Example: "example.net"

  - `data.removed_vhost_data.servername` (string)
    The name of the deleted domain.
    Example: "example.com"

  - `data.removed_vhost_data.vhost_entry` (string)
    The output text.
    Example: "<VirtualHost 192.0.2.0 :443>\nServerName example.com\nServerAlias [...]\n"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "delete_ssl_vhost"

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


