# Return public IP address of private IP address

This function returns the public IP address for a specified public or private IP address. You can use this function to determine the system's main public IP address, especially for systems that use a 1:1 NAT configuration.
* cPanel & WHM uses the main public IP address to perform many different functions. For example, the system uses this IP address to verify the server's license status with WebPros International, LLC.
* System administrators can configure the main public IP address in WHM's Basic WebHost Manager Setup interface (_Home >> Server Configuration >> Basic WebHost Manager Setup_).

Endpoint: GET /get_public_ip
Version: 11.138.0.6
Security: BasicAuth

## Query parameters:

  - `ip` (string, required)
    A valid public or private IP address to query.
    Example: "192.0.2.0"

## Response 200 fields (application/json):

  - `data` (object)

  - `data.public_ip` (string)
    The public IP address.
    Example: "192.0.2.0"

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "get_public_ip"

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


