# Save application connection information.

Save or update connection data about a specific connected application.

Endpoint: POST /save_connected_application
Version: 11.138.0.6
Security: BasicAuth

## Request fields (application/json):

  - `data` (object)
    Data associated with the connected application. There are predefined elements related to specific security scenarios, but additional data may be stored here as well.

  - `data.jwt` (object)
    The contents of a JSON Web Token used during registration or updates.
    Example: {"callback_url":"https://application-1.com/api/si/servers/registrations/callback","challenge":"ddd13a92-d55e-4818-a960-9776ede6cd74","email":"john.doe@email.example","exp":1401912171,"ips":["1.1.1.1","2.2.2.2"],"iss":"https://application-1.com","iss_desc":"Sample application","name":"John Doe","redirect_url":"https://application-1/redirect","scope":["admin:users","admin:resellers","admin:domains"],"state":"xyz"}

  - `data.private_key` (string)
    The name of the private key, if any, used by encryption, signing, or other security schemes used when communicating with this connected application.
    Example: "FEF6253E6A122532430D"

  - `data.public_key` (string)
    The name of the public key, if any, sent to the connected application during registration.
    Example: "AAF6253E6A1225324305623EE"

  - `data.token_name` (string)
    The name of the API token, if any, sent to the connected application to allow that application to make API calls on this server.
    Example: "Application 1 API Token"

  - `name` (string)
    The name of the connected application.
    Example: "application-1"

## Response 200 fields (application/json):

  - `metadata` (object)

  - `metadata.command` (string)
    The method name called.
    Example: "save_connected_application"

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


